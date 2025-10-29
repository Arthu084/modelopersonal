export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Método S.L.I.M por Victor Pablo. Todos os direitos reservados.</p>
        <p className="text-xs mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
      </div>
    </footer>
  );
}
