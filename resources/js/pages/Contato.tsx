import MainLayout from "../layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form enviado:", form);
  }

  return (
    <MainLayout>
      <Head title="Contato" />

      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-6">Contato</h1>

        <p className="text-gray-600 mb-8">
          Preencha o formulário abaixo para entrar em contato.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

          <div>
            <label className="text-sm font-medium">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Seu email"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mensagem</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 h-28 resize-none"
              placeholder="Escreva sua mensagem"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>

        </form>
      </div>
    </MainLayout>
  );
}
