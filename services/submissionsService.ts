import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ContactFormData, VisitFormData } from '../types';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

// Shown to visitors whenever a submission does not make it to the database.
// The real reason goes to the console; the visitor gets a way to reach us.
const GENERIC_ERROR =
  "We couldn't send that just now. Please try again, or call us at (210) 275-7107.";

// Bots fill every field they find. This one is hidden from people, so anything
// in it means the submission is automated.
export const HONEYPOT_FIELD_NAME = 'company';

export interface SubmissionResult {
  ok: boolean;
  error?: string;
}

let client: SupabaseClient | null = null;

const getClient = (): SupabaseClient => {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error('Supabase environment variables are not configured.');
  }

  if (!client) {
    // A public form has no session to keep, so skip the auth storage entirely.
    client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return client;
};

const currentPath = (): string | null =>
  typeof window === 'undefined' ? null : window.location.pathname.slice(0, 200);

// Empty strings are stored as NULL so optional columns stay genuinely empty.
const orNull = (value: string | undefined): string | null => {
  const trimmed = (value ?? '').trim();
  return trimmed === '' ? null : trimmed;
};

const submit = async (row: Record<string, unknown>): Promise<SubmissionResult> => {
  try {
    // No .select() here on purpose: the anon role is granted INSERT only, so
    // asking for the row back would turn a successful write into an error.
    const { error } = await getClient().from('form_submissions').insert(row);

    if (error) {
      console.error('Submission insert failed:', error);
      return { ok: false, error: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (err) {
    console.error('Submission failed:', err);
    return { ok: false, error: GENERIC_ERROR };
  }
};

export const submitContactForm = (data: ContactFormData): Promise<SubmissionResult> =>
  submit({
    form_type: 'contact',
    name: data.name.trim(),
    email: data.email.trim(),
    phone: orNull(data.phone),
    interest: orNull(data.interest),
    message: orNull(data.message),
    source_path: currentPath(),
  });

export const submitVisitForm = (data: VisitFormData): Promise<SubmissionResult> =>
  submit({
    form_type: 'visit',
    name: data.name.trim(),
    email: data.email.trim(),
    phone: orNull(data.phone),
    preferred_date: orNull(data.preferredDate),
    party_size: data.partySize,
    source_path: currentPath(),
  });
