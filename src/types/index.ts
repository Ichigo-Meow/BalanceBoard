export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
} 