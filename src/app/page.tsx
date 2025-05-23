import ClientLogosSection from '@/components/ClientLogosSection';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import { Suspense, lazy } from 'react';

// Lazy load components that aren't visible in the initial viewport
const ServicesPreview = lazy(() => import('@/components/ServicesPreview'));
const StatsSection = lazy(() => import('@/components/StatsSection'));
const AboutPreview = lazy(() => import('@/components/AboutPreview'));
const ProjectsPreview = lazy(() => import('@/components/ProjectsPreview'));
const TestimonialsSection = lazy(
  () => import('@/components/TestimonialsSection'),
);
const GalleryPreview = lazy(() => import('@/components/GalleryPreview'));
const CTASection = lazy(() => import('@/components/CTASection'));
const CTAPros = lazy(() => import('@/components/CTAPros'));

export const metadata: Metadata = {
  title: 'Desmare - Servizi Professionali di Demolizione e Gestione Ambientale',
  description:
    'Servizi professionali di demolizione, strip-out, gestione rifiuti e bonifica amianto. Soluzioni sostenibili e conformi alle normative per progetti di demolizione e riqualificazione.',
  keywords: [
    'demolizioni professionali',
    'gestione rifiuti',
    'bonifica amianto',
    'strip-out',
    'riqualificazione ambientale',
  ],
  openGraph: {
    title:
      'Desmare - Servizi Professionali di Demolizione e Gestione Ambientale',
    description:
      'Servizi professionali di demolizione, strip-out, gestione rifiuti e bonifica amianto. Soluzioni sostenibili e conformi alle normative.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desmare - Servizi Professionali di Demolizione',
      },
    ],
  },
  alternates: {
    canonical: 'https://desmare.it',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogosSection />
      <Suspense
        fallback={
          <div className="flex h-96 items-center justify-center">
            Caricamento...
          </div>
        }
      >
        <ServicesPreview />
        <StatsSection />
        <AboutPreview />
        <ProjectsPreview />
        <TestimonialsSection />
        {/* <GalleryPreview /> */}
        <CTASection />
        {/* <CTAPros /> */}
      </Suspense>
    </>
  );
}
