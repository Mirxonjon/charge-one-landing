import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charge-one.com"),
  title: "Charge-One | Инновационная сеть зарядных станций",
  description: "Объедините свои зарядные станции с Charge-One. Привлекайте больше клиентов, управляйте бизнесом легко и получайте пассивный доход.",
  keywords: ["зарядные станции", "электромобили", "EV charging", "charge-one", "сети зарядок", "узбекистан"],
  authors: [{ name: "Charge-One" }],
  openGraph: {
    title: "Charge-One | Инновационная сеть зарядных станций",
    description: "Объедините свои зарядные станции с Charge-One. Привлекайте больше клиентов и управляйте бизнесом легко.",
    url: "https://charge-one.com",
    siteName: "Charge-One",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
