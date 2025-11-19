export interface Animal {
  id: string;
  name: string;
  type: 'Buck' | 'Doe' | 'Fawn';
  age: string;
  price?: string;
  description: string;
  imageUrl: string;
  status: 'Available' | 'Sold' | 'Pending';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
}

export interface VisitFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  partySize: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
