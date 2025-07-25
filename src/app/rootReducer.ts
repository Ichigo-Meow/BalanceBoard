import { combineReducers } from '@reduxjs/toolkit';
import transactionsReducer from '../features/transactions/transactionsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export const rootReducer = combineReducers({
  transactions: transactionsReducer,
  categories: categoriesReducer,
}); 