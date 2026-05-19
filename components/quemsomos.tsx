export default function QuemSomos() {
  return (
    <section id="sobre" className="py-16 px-12" style={{backgroundColor: "#0CB4B4"}}>
      <div className="max-w-6xl mx-auto flex gap-12">
        <div className="w-1/2">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold mb-6" style={{color: "#0CB4B4"}}>Quem somos?</h2>
            <p className="leading-relaxed" style={{color: "#139898"}}>
              O Residencial Acalanto é mais do que um lugar para morar. É um lar que combina carinho, respeito e profissionalismo. Nossa missão é proporcionar um ambiente familiar, onde cada residente recebe cuidado personalizado, em um espaço preparado para atender às necessidades físicas, emocionais e sociais dos idosos.
            </p>
          </div>
        </div>
        
        <div className="w-1/2">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3" style={{color: "white"}}>No Residencial Acalanto, cuidamos de cada idoso com respeito e atenção, proporcionando uma rotina equilibrada e cheia de significado. Nossa missão é transformar o cuidado em acolhimento, promovendo qualidade de vida em um ambiente familiar.</h3>
          </div>
          
          <div className="bg-white rounded-2xl p-6 flex gap-4">
            <div className="w-32 h-32 bg-gray-300 rounded-xl flex-shrink-0 overflow-hidden">
              <img src="/quem-somos.png" alt="Karina Berongholi" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="mb-2" style={{color: "#139898"}}>Nosso espaço foi idealizado pelas fisioterapeuta Karina Brongholi em 2015 com o propósito de  cuidar de pessoas idosas juntamente com suas famílias.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
