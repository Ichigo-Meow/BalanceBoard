import { createSlice } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
}

interface TransactionsState {
  items: Transaction[];
}

const initialState: TransactionsState = {
  items: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
});

export default transactionsSlice.reducer; 