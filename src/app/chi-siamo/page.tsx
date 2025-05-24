import AboutSection from '@/components/AboutSection';
import { generateMetadata } from '@/content/metadata';

export const metadata = generateMetadata('chi-siamo');

export default function ChiSiamoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <AboutSection />
      </main>
    </div>
  );
}
