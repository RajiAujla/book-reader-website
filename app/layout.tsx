import type { Metadata } from "next";
import "./globals.css";
// import { AuthProvider } from "./contexts/AuthProvider";
import { UserProvider } from "./contexts/UserProvider";

export const metadata: Metadata = {
  title: "Axiom Book Reader",
  description: "Axiom Book Reader Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-gray-100">
        
            {children}
          
        </body>
    </html>
  );
}
