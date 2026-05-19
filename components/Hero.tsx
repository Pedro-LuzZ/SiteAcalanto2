export default function Hero() {
  return (
    <section id="inicio" className="flex h-96 bg-white">
      <div className="w-1/2 px-12 py-16 flex flex-col justify-center" style={{backgroundColor: "#9C7CB4"}}>
        <h1 className="text-5xl font-bold text-white mb-4">
          Bem-vindo a<br />Acalanto
        </h1>
        <p className="text-lg text-white/90 max-w-md">
          Cuidar com amor Envelhecer com dignidade.
        </p>
      </div>
      <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: "url('/hero.png')"}}>
      </div>
    </section>
  );
}
