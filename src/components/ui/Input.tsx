import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => (
  <input
    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
); 