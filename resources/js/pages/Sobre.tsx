import MainLayout from "../layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Sobre() {
  return (
    <MainLayout>
      <Head title="Sobre" />

      <h1 className="text-2xl font-semibold mb-4">Sobre</h1>

      <p className="text-gray-700 leading-relaxed">
        Esta é uma página de exemplo criada como base. Aqui você pode descrever
        informações sobre sua aplicação, sua empresa, projeto ou qualquer outro
        conteúdo que desejar.
      </p>

      <p className="text-gray-700 leading-relaxed mt-4">
        Sinta-se livre para personalizar esta página conforme necessário.
      </p>
    </MainLayout>
  );
}
