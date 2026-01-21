import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      default: "THEOFEY|Digital Growth Strategist",
      template: "%s | THEOFEY",
    },
    description: 
       "Personal brand of Theofey - a digital growth strategist focused on strategy, content, and long-term value creation",
       keywords: [
        "Theofey",
        "digital marketing",
        "content strategy",
        "Shopify marketing",
        "personal brand",
       ],
       openGraph: {
          title: "THEOFEY | Digital Growth Strategist",
          description:
          "Helping individuals and businesses grow online through strategy, content, and data-driven marketing",
          url: "https://theofey.com",
          siteName: "Theofey",
          type: "website",
       },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= "bg-white text-gray-900">
        <Navbar />
       <main>{children}</main>
      </body>
    </html>
  );
}
