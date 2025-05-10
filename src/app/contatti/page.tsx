import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | Desmare",
  description: "Contattaci per informazioni o preventivi",
};

export default function ContattiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <ContactSection />
      </main>
    </div>
  );
}
