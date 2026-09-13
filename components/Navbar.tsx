"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";

interface NavbarProps {
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export default function Navbar({
  githubUrl = "https://github.com/nathanesmond",
  linkedinUrl = "https://www.linkedin.com/in/nathanael-hartono-19780a353/",
  instagramUrl = "https://www.instagram.com/nathanaelsmon_/",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
  ];

  // Scroll spy to highlight current active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "certificates"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-black/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Desktop Nav Links with Active Indicator (Aligned to left) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm transition-colors ${isActive
                    ? "font-semibold text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-orange-600"
                    : "font-medium text-zinc-400 hover:text-orange-500"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions & Social Icons (Aligned to right) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors hover:border-orange-600 hover:bg-zinc-950 hover:text-orange-500"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors hover:border-orange-600 hover:bg-zinc-950 hover:text-orange-500"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors hover:border-orange-600 hover:bg-zinc-950 hover:text-orange-500"
            title="Instagram Profile"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="ml-1 rounded-md bg-orange-600 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-700"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle Button (Aligned to right on small screens) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-zinc-300" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm transition-colors ${isActive
                      ? "font-semibold text-orange-500"
                      : "font-medium text-zinc-300 hover:text-white"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-orange-500"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-orange-500"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-orange-500"
              >
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="ml-auto rounded-md bg-orange-600 px-3 py-1 text-xs font-semibold text-white hover:bg-orange-700"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
