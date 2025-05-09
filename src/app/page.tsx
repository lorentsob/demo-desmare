import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import ClientLogosSection from "@/components/ClientLogosSection";
import type { Metadata } from "next";

// Lazy load components that aren't visible in the initial viewport
const ServicesPreview = lazy(() => import("@/components/ServicesPreview"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const AboutPreview = lazy(() => import("@/components/AboutPreview"));
const ProjectsPreview = lazy(() => import("@/components/ProjectsPreview"));
const TestimonialsSection = lazy(
  () => import("@/components/TestimonialsSection")
);
const GalleryPreview = lazy(() => import("@/components/GalleryPreview"));
const CTASection = lazy(() => import("@/components/CTASection"));
const CTAPros = lazy(() => import("@/components/CTAPros"));

export const metadata: Metadata = {
  title: "Desmare - Demolizioni, Smaltimento e Recupero Materiali",
  description:
    "Desmare offre servizi professionali di demolizione, smaltimento rifiuti e recupero materiali con attenzione alla sostenibilità ambientale.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogosSection />
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Caricamento...
          </div>
        }
      >
        <ServicesPreview />
        <StatsSection />
        <AboutPreview />
        <ProjectsPreview />
        <TestimonialsSection />
        <GalleryPreview />
        <CTASection />
        <CTAPros />
      </Suspense>
    </>
  );
}
