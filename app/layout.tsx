// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#0B0D17]`}>
        {/* Global background image component */}
        <BackgroundImage />
        
        {/* Header with transparent background */}
        <div className="relative z-20">
          <Header />
        </div>
        
        {/* Main content */}
        <div className="flex-grow relative z-20 overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}