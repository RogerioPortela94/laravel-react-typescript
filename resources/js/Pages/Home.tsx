import MainLayout from "../layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
  return (
    <MainLayout>
      <Head title="Home" />
      <h1 className="text-2xl font-semibold">Bem-vindo ao Projeto Base</h1>
      <p className="mt-2 text-gray-700">
        Este é o conteúdo da página inicial.
      </p>
    </MainLayout>
  );
}
