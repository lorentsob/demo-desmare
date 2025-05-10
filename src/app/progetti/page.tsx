import ProjectsSection from "@/components/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti | Desmare",
  description: "I nostri progetti e lavori realizzati",
};

export default function ProgettiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <ProjectsSection />
      </main>
    </div>
  );
}
