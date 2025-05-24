import GallerySection from '@/components/GallerySection';
import { generateMetadata } from '@/content/metadata';

export const metadata = generateMetadata('gallery');

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <GallerySection />
      </main>
    </div>
  );
}
