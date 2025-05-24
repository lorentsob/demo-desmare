import ContactSection from '@/components/ContactSection';
import { generateMetadata } from '@/content/metadata';

export const metadata = generateMetadata('contatti');

export default function ContattiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <ContactSection />
      </main>
    </div>
  );
}
