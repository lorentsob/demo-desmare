import ProjectsSection from '@/components/ProjectsSection';
import { generateMetadata } from '@/content/metadata';

export const metadata = generateMetadata('progetti');

export default function ProgettiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <ProjectsSection />
      </main>
    </div>
  );
}
