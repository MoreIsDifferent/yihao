import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { siteData } from "@/data/site-data";

export default function DataPage() {
  const item = siteData.externalLinks[0];

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
              Data
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              {item.title}
            </h1>
            {item.description && (
              <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
                {item.description}
              </p>
            )}
            <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-8">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Content coming soon
              </h2>
              <p className="mt-3 text-[var(--text-secondary)]">
                This page is ready for Waffle Data materials, notes, and visualizations.
              </p>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
