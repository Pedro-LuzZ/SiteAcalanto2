import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuemSomos from "@/components/quemsomos";
import Servicos from "@/components/servicos";
import Infraestrutura from "@/components/infraestrutura";
import Localizacao from "@/components/localizacao";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuemSomos />
      <Servicos />
      <Infraestrutura />
      <Localizacao />
      <Footer />
    </>
  );
}
