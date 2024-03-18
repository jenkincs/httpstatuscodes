import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HTTP Status Codes: A Comprehensive Guide for Beginners",
  description: "Learn about different HTTP status codes and their meanings. Understand the importance of HTTP status codes in web development and troubleshooting. Find everything you need to know about HTTP status codes in this comprehensive guide.",
  keywords: "HTTP status codes, 100 Continue, 200 OK, 201 Created, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error, 502 Bad Gateway, 504 Gateway Timeout, web development, troubleshooting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
