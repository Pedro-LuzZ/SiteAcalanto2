export default function Servicos() {
  const servicos = [
    { name: "Psicologia", icon: "🧠" },
    { name: "Enfermagem", icon: "⚕️" },
    { name: "Medicina Geral e Paliativa", icon: "🩺" },
    { name: "Fisioterapia", icon: "💪" },
    { name: "Fonoterapia", icon: "🗣️" },
    { name: "Odontologia", icon: "🦷" },
    { name: "Capelania", icon: "✝️" },
  ];

  return (
    <section id="servicos" className="py-16 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6" style={{color: "#7B5299"}}>Serviços</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto" style={{color: "#7B5299"}}>
          Contamos com uma equipe multiprofissional para atender nossos idosos. Temos as seguintes especialidades:
        </p>
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          {servicos.slice(0, 4).map((servico, index) => (
            <div key={servico.name} className="text-center">
              <div className="h-24 rounded-2xl mb-4 flex items-center justify-center overflow-hidden" style={{backgroundColor: "#9C7CB4"}}>
                {index === 0 && <img src="/psicologia.png" alt="Psicologia" className="w-14 h-14 object-contain" />}
                {index === 1 && <img src="/enfermagem.png" alt="Enfermagem" className="w-14 h-14 object-contain" />}
                {index === 2 && <img src="/medicina.png" alt="Medicina" className="w-14 h-14 object-contain" />}
                {index === 3 && <img src="/fisioterapia.png" alt="Fisioterapia" className="w-14 h-14 object-contain" />}
              </div>
              <p className="font-semibold text-gray-800">{servico.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 justify-center">
          {servicos.slice(4).map((servico, index) => (
            <div key={servico.name} className="text-center">
              <div className="h-24 rounded-2xl mb-4 flex items-center justify-center overflow-hidden" style={{backgroundColor: "#9C7CB4"}}>
                {index === 0 && <img src="/fonoterapia.png" alt="Fonoterpia" className="w-14 h-14 object-contain" />}
                {index === 1 && <img src="/odontologia.png" alt="Odontologia" className="w-14 h-14 object-contain" />}
                {index === 2 && <img src="/capelania.png" alt="Capelania" className="w-14 h-14 object-contain" />}
              </div>
              <p className="font-semibold text-gray-800">{servico.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
