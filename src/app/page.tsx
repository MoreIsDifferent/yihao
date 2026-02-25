"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Divider } from "@/components/Divider";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Research } from "@/sections/Research";
import { Education } from "@/sections/Education";
import { Publications } from "@/sections/Publications";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Service } from "@/sections/Service";
import { Awards } from "@/sections/Awards";
import { Experience } from "@/sections/Experience";
import { DataExploration } from "@/sections/DataExploration";
import { PMGallery } from "@/sections/PMGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Research />
        <Divider />
        <Education />
        <Divider />
        <Publications />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Service />
        <Divider />
        <Awards />
        <Divider />
        <Experience />
        <Divider />
        <DataExploration />
        <Divider />
        <PMGallery />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
