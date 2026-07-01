import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Prices } from "./components/Prices";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StickyCta } from "./components/StickyCta";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main className="app-main">
        <Hero />
        <hr className="rule" />
        <Services />
        <hr className="rule" />
        <Prices />
        <hr className="rule" />
        <About />
        <hr className="rule" />
        <Certificates />
        <hr className="rule" />
        <Reviews />
        <hr className="rule" />
        <Faq />
        <hr className="rule" />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
