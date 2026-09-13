import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-100">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section (Option B: Split Screen) */}
        <Hero />

        {/* Projects Section with clickable GitHub repo links */}
        <Projects />

        {/* Experience Section (Organizations, Internships, Work) */}
        <Experience />

        {/* Certificates Section */}
        <Certificates />
      </main>

      {/* Footer & Contact CTA */}
      <Footer />
    </div>
  );
}
