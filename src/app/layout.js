import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HTTP Status Codes: A Comprehensive Guide for Beginners",
  description: "Learn about different HTTP status codes and their meanings, usages and samples. Find everything you need to know about HTTP status codes",
  keywords: "HTTP status codes, 200 OK, 404 Not Found, 500 Internal Server Error, web development, troubleshooting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3J9QCC73S9"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'G-3J9QCC73S9');
        </script>
      </head>
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
