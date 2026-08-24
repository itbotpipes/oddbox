import type { Metadata } from "next";
import { cormorant, jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ODDBOX STUDIO — Photography & Films",
  description: "A premium international creative production and photography portfolio by Bunty Patel. Operated under Wireverse Private Limited.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

