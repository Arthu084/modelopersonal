import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-headline font-bold text-primary">
          Método S.L.I.M
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#results" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Resultados</a>
          <a href="#method" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">O Método</a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Dúvidas</a>
        </nav>
        <Button asChild className="rounded-lg shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow">
          <a 
            href="https://wa.me/?text=Oi%20Victor!%20Quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20S.L.I.M%20%F0%9F%91%8B" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Comece Agora
          </a>
        </Button>
      </div>
    </header>
  );
}
