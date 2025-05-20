import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo | Desmare",
  description:
    "Chi siamo: scopri di più sulla nostra azienda e la nostra missione",
};

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <AboutSection />
      </main>
    </div>
  );
}