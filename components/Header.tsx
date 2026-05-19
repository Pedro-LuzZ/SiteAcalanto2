'use client';

export default function Header() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <img src="/logo-acalanto.png" alt="Logo Acalanto" className="w-10 h-10" />
      </div>

      <nav className="flex gap-3 md:gap-8 flex-wrap justify-end">
        <a className="transition cursor-pointer text-sm md:text-base" href="#inicio" style={{color: "#9C7CB4"}}>Início</a>
        <a className="transition cursor-pointer text-sm md:text-base" href="#sobre" style={{color: "#9C7CB4"}}>Quem somos</a>
        <a className="transition cursor-pointer text-sm md:text-base" href="#servicos" style={{color: "#9C7CB4"}}>Serviços</a>
        <a className="transition cursor-pointer text-sm md:text-base" href="#estrutura" style={{color: "#9C7CB4"}}>Estrutura</a>
        <a className="transition cursor-pointer text-sm md:text-base" href="#contato" style={{color: "#9C7CB4"}}>Contato</a>
      </nav>
    </header>
  );
}