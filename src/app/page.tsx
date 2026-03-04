import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Clients from '@/components/Clients/Clients';
import Partners from '@/components/Partners/Partners';
import Process from '@/components/Process/Process';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Clients />
        <Partners />
        <Process />
      </main>
      <Footer />
    </>
  );
}
