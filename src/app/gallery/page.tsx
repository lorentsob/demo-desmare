import GallerySection from "@/components/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Desmare",
  description: "Galleria fotografica dei nostri lavori",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <GallerySection />
      </main>
    </div>
  );
}
