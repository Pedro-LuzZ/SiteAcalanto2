export default function Footer() {
  return (
    <>
      <section id="contato" className="py-8 px-6 md:px-12" style={{backgroundColor: "#9C7CB4"}}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Entre em contato!</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-8">
            <a href="tel:(48)30346422" className="flex items-center justify-center gap-3 hover:opacity-80 transition">
              <span className="text-2xl">📞</span>
              <span className="text-base md:text-lg">(48) 9 9806-0568</span>
            </a>
            <a href="mailto:contato@acalantoresidence.com.br" className="flex items-center justify-center gap-3 hover:opacity-80 transition">
              <span className="text-2xl">✉️</span>
              <span className="text-base md:text-lg">contato@acalantoresidence.com.br</span>
            </a>
            <a href="https://www.instagram.com/acalanto_residence/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:opacity-80 transition">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              <span className="text-base md:text-lg">@acalanto_residence</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-3 px-6 bg-gray-800 text-white text-center text-sm">
        © {new Date().getFullYear()} Acalanto Residencial. Todos os direitos reservados.
      </footer>
    </>
  );
}