export default function Infraestrutura() {
  return (
    <section id="estrutura" className="py-16 px-12">
      <div className="max-w-6xl mx-auto flex gap-12">
        <div className="w-1/2 rounded-2xl px-12 py-16 text-white flex flex-col justify-center" style={{backgroundColor: "#9C7CB4"}}>
          <h2 className="text-4xl font-bold mb-6">Infraestrutura</h2>
          <p className="text-lg leading-relaxed">
            Na acalanto cada detalhe da infraestrutura foi cuidadosamente pensado para proporcionar acessibilidade, conforto e acolhimento. Entendemos que o espaço em que vivemos afeta diretamente nosso bem estar e dessa forma criamos ambientes que promovem tranquilidade, interação social e qualidade de vida.
          </p>
        </div>
        
        <div className="w-1/2 bg-gray-300 rounded-2xl overflow-hidden">
          <img src="/infraestrutura.png" alt="Infraestrutura Acalanto" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
