import type { Metadata } from "next";
import ServicesLanding from "@/components/services/ServicesLanding";

export const metadata: Metadata = {
  title: "Servizi | Desmare",
  description:
    "Soluzioni complete e chiavi in mano per demolizioni, strip-out e bonifica ambientale. Servizi professionali e sostenibili.",
};

export default function ServiziPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <ServicesLanding />
      </main>
    </div>
  );
}
