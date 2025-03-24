import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Test task for Veel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
