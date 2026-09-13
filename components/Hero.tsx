"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code2,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";

interface HeroProps {
  name?: string;
  role?: string;
  university?: string;
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  email?: string;
  phone?: string;
  phoneUrl?: string;
  resumeUrl?: string;
  location?: string;
}

export default function Hero({
  name = "Nathanael Esmond Hartono",
  role = "Software Engineer & Web Developer",
  university = "Universitas Atma Jaya Yogyakarta",
  bio = "Informatics graduate with a passion for designing and developing scalable Mobile & Web applications, robust backend architectures, and clean, responsive user interfaces.",
  githubUrl = "https://github.com/nathanesmond",
  linkedinUrl = "https://www.linkedin.com/in/nathanael-hartono-19780a353/",
  instagramUrl = "https://www.instagram.com/nathanaelsmon_/",
  email = "mailto:nathanaelesmondhartono@gmail.com",
  phone = "0812-2534-2580",
  phoneUrl = "tel:+6281225342580",
  resumeUrl = "#",
  location = "Yogyakarta, Indonesia",
}: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="relative border-b border-zinc-800 bg-black pt-16 pb-20 md:pt-24 md:pb-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Bio, Credentials, and CTAs (7 cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-7">

            {/* Name Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {name}
            </h1>

            {/* Sub-headline / University Credential with Solid Dark Orange Accent */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-base font-medium sm:text-lg">
              <span className="font-semibold text-orange-600">{role}</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-1.5 text-zinc-300">
                <GraduationCap className="h-4 w-4 text-orange-600" />
                <span>{university}</span>
              </div>
            </div>

            {/* Location & Degree */}
            <div className="mt-2.5 flex items-center gap-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-orange-600" />
                {location}
              </span>
              <span>•</span>
              <span className="text-zinc-300 font-medium">Informatics Graduate (S.Kom)</span>
            </div>

            {/* Elevator Pitch */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {bio}
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700 active:scale-[0.98]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-orange-600 hover:text-white active:scale-[0.98]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profile
              </a>

              <a
                href={email}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-transparent px-4 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-4 text-zinc-400">
              <span className="text-xs uppercase tracking-wider text-zinc-500">Connect:</span>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-500"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-500"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-500"
                title="Instagram (@nathanaelsmon_)"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={email}
                className="transition-colors hover:text-orange-500"
                title="Email (nathanaelesmondhartono@gmail.com)"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={phoneUrl}
                className="transition-colors hover:text-orange-500"
                title={`Call / WhatsApp (${phone})`}
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              {resumeUrl && resumeUrl !== "#" && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-orange-500"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Resume
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Premium Multi-Layered Portrait Frame (5 cols) */}
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:col-span-5">

            {/* Layer 1: Ambient Studio Depth Glow */}
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-600/10 via-white/5 to-transparent blur-2xl -z-20 opacity-70"
              aria-hidden="true"
            />

            {/* Layer 2: Offset Frosted Glass Frame */}
            <div
              className="absolute -inset-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md -z-10 translate-x-2.5 translate-y-2.5"
              aria-hidden="true"
            />

            {/* Layer 3: Main Window Card with Refined Border */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-950 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-zinc-600">

              {/* Window Header Bar (Minimalist macOS-style dots) */}
              <div className="flex items-center border-b border-zinc-800 bg-zinc-900/90 px-4 py-2.5 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>
              </div>

              {/* Photo Canvas Container - Layered Studio Black-White Gradient & Glass Blur */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-950 to-black flex items-end justify-center">

                {/* Layer 4A: Soft Studio Radial Vignette (Black & White Depth Gradient) */}
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.22),rgba(255,255,255,0.05)_45%,transparent_72%)] pointer-events-none"
                  aria-hidden="true"
                />

                {/* Layer 4B: Frosted Glass Halo Ring for Backlight Separation */}
                <div
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-52 w-52 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm pointer-events-none shadow-[inset_0_0_25px_rgba(255,255,255,0.06)]"
                  aria-hidden="true"
                />

                {/* Layer 4C: Subtle Architectural Horizontal Glass Divider */}
                <div
                  className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Corner Crosshair Accents in Subtle Monochrome */}
                <span className="absolute top-3 left-3 font-mono text-xs text-zinc-500 select-none">
                  +
                </span>
                <span className="absolute top-3 right-3 font-mono text-xs text-zinc-500 select-none">
                  +
                </span>

                {/* Layer 5: The Cutout Portrait */}
                {!imageError ? (
                  <Image
                    src="/profile-transparent.png"
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain object-bottom select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] z-10"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Clean Fallback if image fails to load */
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center z-10">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-orange-600/50 bg-black shadow-sm">
                      <Code2 className="h-10 w-10 text-orange-600" />
                      <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-xs font-mono font-bold text-orange-500">
                        NEH
                      </div>
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-white">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-orange-600">
                      Informatics Graduate (S.Kom)
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
