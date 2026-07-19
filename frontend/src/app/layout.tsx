import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PersonaSite - No-Code Portfolio Builder",
  description:
    "Creating a professional portfolio website often requires coding, design, and deployment knowledge. PersonaSite simplifies the process by enabling users to build, customize, preview, and publish fully responsive portfolio websites through a no-code interface using reusable templates and dynamic website generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
