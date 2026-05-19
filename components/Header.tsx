'use client';

export default function Header() {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <img src="/logo-acalanto.png" alt="Logo Acalanto" className="w-10 h-10" />
      </div>

      <nav className="flex gap-8">
        <a className="transition cursor-pointer" href="#inicio" style={{color: "#9C7CB4"}} onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "0.8"} onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "1"}>Início</a>
        <a className="transition cursor-pointer" href="#sobre" style={{color: "#9C7CB4"}} onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "0.8"} onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "1"}>Quem somos</a>
        <a className="transition cursor-pointer" href="#servicos" style={{color: "#9C7CB4"}} onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "0.8"} onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "1"}>Serviços</a>
        <a className="transition cursor-pointer" href="#estrutura" style={{color: "#9C7CB4"}} onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "0.8"} onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "1"}>Estrutura</a>
        <a className="transition cursor-pointer" href="#contato" style={{color: "#9C7CB4"}} onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "0.8"} onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "1"}>Contato</a>
      </nav>
    </header>
  );
}
