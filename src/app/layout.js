import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Http Status Codes",
  description: "A list of HTTP status codes and their meanings.",
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
