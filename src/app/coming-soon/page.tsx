import HeroComingSoon from "@/components/HeroComingSoon";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "In Arrivo | Desmare",
  description: "Desmare - Sito in costruzione. Soluzioni professionali per demolizioni, smaltimento e recupero materiali.",
};

export default function ComingSoonPage() {
  return (
    <HeroComingSoon />
  );
}

