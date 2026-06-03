import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { siteData } from "@/data/site-data";
import { basePath, gallerySections } from "./gallery-data";

export default function PMGalleryPage() {
  const item = siteData.externalLinks[1];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Container>
          <section className="py-16 sm:py-20">
            <Link
              href="/"
              className="text-sm font-medium text-accent transition-colors hover:underline"
            >
              &lt;- Back to home
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-accent">
              Arts
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              {item.title}
            </h1>
            {item.description && (
              <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
                {item.description}
              </p>
            )}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {gallerySections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <Link
                    href={section.href}
                    className="text-xl font-semibold text-[var(--text-primary)] transition-colors hover:text-accent hover:underline"
                  >
                    {section.title}
                  </Link>
                  <div className="mt-5 aspect-[4/3] w-full overflow-hidden bg-[var(--border)]">
                    <img
                      src={`${basePath}${section.cover}`}
                      alt={section.coverAlt}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </section>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
