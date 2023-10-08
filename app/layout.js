import "./globals.css";

export const metadata = {
  title: "Bitcoin Setup UI",
  description: "By Cyphersages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
