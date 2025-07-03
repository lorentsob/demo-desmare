import ClientLogosSection from '@/components/ClientLogosSection';
import Hero from '@/components/Hero';
import { generateMetadata } from '@/content/metadata';
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

export const metadata: Metadata = generateMetadata('home');

export default function HomePage() {
  return (
    <>
      <Hero />
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
        <ClientLogosSection />
        {/* <TestimonialsSection /> */}
        {/* <GalleryPreview /> */}
        <CTASection />
        {/* <CTAPros /> */}
      </Suspense>
    </>
  );
}
