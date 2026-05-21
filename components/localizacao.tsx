export default function Localizacao() {
  return (
    <section id="localizacao" className="py-16 px-6 md:px-12" style={{backgroundColor: "#0CB4B4"}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: "#0CB4B4"}}>Onde<br />estamos?</h2>
            <p className="text-gray-700 leading-relaxed">
              Estamos localizados na Rua João Câncio, 169<br/>
              Bairro Pantanal<br/>
              Florianópolis, SC
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden" style={{minHeight: "300px"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28280.428293062872!2d-48.5468059956994!3d-27.622858524884283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739073b411375%3A0x270f23aed769d3dd!2sAcalanto%20residencial%20para%20idosos!5e0!3m2!1spt-BR!2sbr!4v1779224281461!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{border: 0, minHeight: "300px"}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}