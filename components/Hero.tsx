export default function Hero() {
  return (
    <section id="inicio" className="flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 px-8 py-12 flex flex-col justify-center" style={{backgroundColor: "#9C7CB4"}}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Bem-vindo a<br />Acalanto
        </h1>
        <p className="text-lg text-white/90 max-w-md">
          Um lar de cuidado, conforto e carinho para quem você ama.
        </p>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/hero.png')"}}>
      </div>
    </section>
  );
}