import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Ranger", the AI Ranch Hand for Chital Ranch, located in Floresville, South Texas (Address: 1424 County Rd 329, Floresville, TX 78114, Phone: (210) 275-7107).

Your job is to assist visitors with information about:
1. Chocolate Fallow Deer breeding and genetics.
2. Availability of stock (Breeder bucks, live cover does, yearlings).
3. Scheduling visits to the ranch.
4. General inquiries about the ranch history and values (Quality, Consistency, Integrity).

Tone: Professional, warm, welcoming, and knowledgeable. Like a seasoned rancher.
Do not make up specific pricing if not provided in the context, ask them to contact us for specific quotes.
Keep answers concise (under 100 words) unless asked for a detailed explanation.

Key Facts:
- Chital Ranch specializes in Chocolate Fallow Deer.
- Values: Quality and consistency, Proven genetics.
- Target Audience: Breeders and Hunting Ranches.
`;

export const generateRanchResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't quite catch that. Please try asking again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to the ranch headquarters. Please try again later or call us directly at (210) 275-7107.";
  }
};
