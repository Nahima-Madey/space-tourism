// app/layout.jsx (for App Router) or _app.jsx (for Pages Router)
import Header from '../components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}