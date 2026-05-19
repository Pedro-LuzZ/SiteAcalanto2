export default function Infraestrutura() {
  return (
    <section id="estrutura" className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 rounded-2xl px-8 py-12 text-white flex flex-col justify-center" style={{backgroundColor: "#9C7CB4"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Infraestrutura</h2>
          <p className="text-lg leading-relaxed">
            No Residencial Acalanto, cada detalhe de nossa infraestrutura foi cuidadosamente pensado para oferecer conforto, acessibilidade e um ambiente acolhedor para nossos residentes.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 bg-gray-300 rounded-2xl overflow-hidden" style={{minHeight: "250px"}}>
          <img src="/infraestrutura.png" alt="Infraestrutura Acalanto" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}