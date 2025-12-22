import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "I'm sorry, my connection to the server is currently unavailable (API Key missing). Please contact support directly.";
  }

  try {
    const model = ai.models;
    
    // Construct the context based on the website content
    const systemInstruction = `
      You are "AnkBot", the intelligent financial assistant for Ank.finance Consulting.
      
      Company Context:
      Ank.finance offers Overdraft Facilities (Flexi Limit), Personal Loans, and Business Loans to salaried individuals in reputed companies.
      
      Key Products:
      1. Overdraft Facility (Flexi Limit):
         - Cash limit: 10-15x current salary.
         - Valid for 8 years.
         - No interest on unutilized amount.
         - Pay interest only on what you use.
         - Flexible repayment: part payments/withdrawals are free.
         - No EMI burden.
         - No impact on CIBIL score.
         - Quick disbursal (24 hours).
         
      2. Partner Banks: Bajaj Finserv, Kotak Mahindra, Aditya Birla, Tata Capital, Axis Finance, Axis Bank, ICICI Bank, Finnable, HDFC Bank, IDFC Bank, IndusInd Bank, Yes Bank, Cholamandalam, Piramal.
      
      Example of Savings (Flexi):
      If you use ₹1 Lakh and pay back ₹10k principal every month:
      - Month 1 interest on 1L: ₹1250
      - Month 2 interest on 90k: ₹1125
      ...declining balance reduces interest significantly compared to flat rates.
      
      Your Goal:
      Answer user questions about these products politely and professionally. Encourage them to use the "Get in Touch" form or calculator on the site. Keep answers concise (under 100 words) unless detailed calculation is asked.
    `;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble processing your request right now. Please try again later.";
  }
};