export default function Footer() {
  return (
    <>
      <section id="contato" className="py-8 px-12" style={{backgroundColor: "#9C7CB4"}}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Entre em contato!</h2>
          
          <div className="flex justify-center gap-12 mb-8">
            <a href="tel:(48)30346422" className="flex items-center gap-3 hover:opacity-80 transition">
              <span className="text-2xl">📞</span>
              <span className="text-lg">(48) 3034-5422</span>
            </a>
            <a href="mailto:contato@acalantoresidence.com.br" className="flex items-center gap-3 hover:opacity-80 transition">
              <span className="text-2xl">✉️</span>
              <span className="text-lg">contato@acalantoresidence.com.br</span>
            </a>
            <a href="https://www.instagram.com/acalanto_residence/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              <span className="text-lg">@acalanto_residence</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-3 px-12 bg-gray-800 text-white text-center text-sm">
        © {new Date().getFullYear()} Acalanto Residencial. Todos os direitos reservados.
      </footer>
    </>
  );
}
