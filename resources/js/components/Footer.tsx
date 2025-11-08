export default function Footer() {
  return (
    <footer className="w-full bg-white px-6">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-600 border-t">
        © {new Date().getFullYear()} — Seu Projeto. Todos os direitos reservados.
      </div>
    </footer>
  );
}
