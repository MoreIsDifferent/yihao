import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { siteData } from "@/data/site-data";

const collections = [
  {
    title: "The Publication Dates of Firms' Annual Reports, China, 2001-2024",
    images: [
      {
        src: "/waffle-data/waffle-2.png",
        alt: "Publication dates of firms' annual reports in China from 2001 to 2024",
      },
    ],
    note: "Most firms catch the DDLs. They rush toward the end of month.",
  },
  {
    title: "The Average Age of the Board of Directors, China, example year: 2023",
    images: [
      {
        src: "/waffle-data/waffle-3.png",
        alt: "Average age of the board of directors in China",
      },
      {
        src: "/waffle-data/waffle-4.png",
        alt: "Average age of independent board members in China",
      },
    ],
    note: "The average age of independent board members is three years higher than that of the full board. This pattern holds across other sample years.",
  },
  {
    title: "Clinical Trials",
    images: [
      {
        src: "/waffle-data/waffle-5.png",
        alt: "Clinical trials initiated by firms and non-firms",
      },
      {
        src: "/waffle-data/waffle-6.png",
        alt: "Clinical trial sponsor distribution",
      },
    ],
    note: "University dominates.",
  },
  {
    title: "Clinical Trials Target By Sex",
    images: [
      {
        src: "/waffle-data/waffle-7.png",
        alt: "Clinical trials target by sex",
      },
    ],
    note: "A higher proportion of trials focus on female only than male only.",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
            <div className="mt-12 grid gap-8">
              <section className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Why Waffle Data?
                </p>
                <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_240px] lg:items-start">
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p>
                      Waffle Data is a collection of descriptive patterns Yi finds while working on research projects or exploring topics of interest in strategy and social science.
                    </p>
                    <p>
                      Like making waffles, data exploration takes patience: rotate the data, examine it from different angles, and bring out patterns and facts.
                    </p>
                    <p>
                      The collection will be updated irregularly. If any result catches your interest, feel free to email Yi at{" "}
                      <a className="text-accent hover:underline" href="mailto:yhao11@unc.edu">
                        yhao11@unc.edu
                      </a>.
                    </p>
                  </div>
                  <img
                    src={`${basePath}/waffle-data/waffle-1.png`}
                    alt="Waffles made in Austin"
                    className="w-full rounded-lg border border-[var(--border)] object-cover"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  Waffle Data Collections
                </h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Expand the notes for brief interpretations of the data patterns.
                </p>
                <div className="mt-6 grid gap-6">
                  {collections.map((entry, index) => (
                    <article
                      key={entry.title}
                      className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                          {index + 1}. {entry.title}
                        </h3>
                      </div>
                      <div className="mt-5 grid gap-4">
                        {entry.images.map((image) => (
                          <img
                            key={image.src}
                            src={`${basePath}${image.src}`}
                            alt={image.alt}
                            className="w-full rounded-lg border border-[var(--border)] bg-white"
                          />
                        ))}
                      </div>
                      <details className="group mt-5 rounded-lg border border-[var(--border)]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-[var(--text-primary)]">
                          Note
                          <span className="text-accent transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="border-t border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {entry.note}
                        </p>
                      </details>
                    </article>
                  ))}
                </div>
              </section>

              <p className="text-center text-sm italic text-accent">
                More Coming Soon...
              </p>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
