import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'CHEBUKWABI JS | Ingwe ya Matere',
  description: 'The official home of Chebukwabi JS football club.'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
