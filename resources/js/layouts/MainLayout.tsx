import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
