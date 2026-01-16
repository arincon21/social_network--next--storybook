import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red Social - Conecta y Comparte",
  description: "Una plataforma moderna para conectar con amigos, compartir momentos y descubrir contenido interesante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="m-0 font-sans text-sm font-normal leading-6 text-gray-400 bg-[#edf2f6]">
        {children}
      </body>
    </html>
  );
}
