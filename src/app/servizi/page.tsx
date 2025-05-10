import ServicesSection from "@/components/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi | Desmare",
  description:
    "I nostri servizi di demolizione, smaltimento e recupero rifiuti",
};

export default function ServiziPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <ServicesSection />
      </main>
    </div>
  );
}
