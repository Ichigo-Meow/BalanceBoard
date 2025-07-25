import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-blue-600 text-white p-4 font-bold text-xl">BalanceBoard</header>
    <main className="container mx-auto py-8">{children}</main>
  </div>
); 