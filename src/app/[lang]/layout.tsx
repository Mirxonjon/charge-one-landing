import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://charge-one.com"),
  title: "Charge One | Инновационная сеть зарядных станций",
  description: "Объедините свои зарядные станции с Charge One. Привлекайте больше клиентов, управляйте бизнесом легко и получайте пассивный доход.",
  keywords: ["зарядные станции", "электромобили", "EV charging", "charge-one", "сети зарядок", "узбекистан"],
  authors: [{ name: "Charge One" }],
  openGraph: {
    title: "Charge One | Инновационная сеть зарядных станций",
    description: "Объедините свои зарядные станции с Charge One.",
    url: "https://charge-one.com",
    siteName: "Charge One",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
