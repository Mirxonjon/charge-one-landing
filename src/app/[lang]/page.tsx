import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Clients from '@/components/Clients/Clients';
import Partners from '@/components/Partners/Partners';
import Process from '@/components/Process/Process';
import Footer from '@/components/Footer/Footer';
import { getDictionary } from '@/i18n/dictionaries';
import { type Locale } from '@/i18n/config';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <Features dict={dict} />
        <Clients dict={dict} />
        <Partners dict={dict} />
        <Process dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
