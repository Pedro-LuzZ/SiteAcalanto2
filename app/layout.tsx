import "./globals.css";

export const metadata = {
  title: "Acalanto",
  description: "Cuidar é um ato de amor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
