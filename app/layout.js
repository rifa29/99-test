import "./globals.css";

export const metadata = {
  title: "99 Test - Reddit",
  description: "Reddit subthread clone for test purpose",
};

export default function RootLayout({ children, onViewChange }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
