import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { basePath, gallerySections } from "../gallery-data";
import { GalleryGrid } from "../GalleryGrid";

const section = gallerySections[0];

export default function PaintingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Container>
          <section className="py-16 sm:py-20">
            <Link
              href="/pm-gallery"
              className="text-sm font-medium text-accent transition-colors hover:underline"
            >
              &lt;- Back to PM Gallery
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-accent">
              PM Gallery
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              {section.title}
            </h1>
            <GalleryGrid
              images={section.images}
              basePath={basePath}
              aspectRatio="portrait"
            />
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
