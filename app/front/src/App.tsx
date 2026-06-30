import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Visit } from "./components/Visit";
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
        <Stats />
        <About />
        <Services />
        <Visit />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
