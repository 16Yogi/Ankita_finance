export interface Bank {
  name: string;
  logo?: string;
}

export interface CalculationRow {
  month: number;
  balance: number;
  interest: number;
  principalPaid: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
