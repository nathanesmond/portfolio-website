"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Award, ExternalLink, ShieldCheck, X, Maximize2 } from "lucide-react";

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section id="certificates" className="border-b border-zinc-800 bg-black py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-orange-600 font-semibold">
            <Award className="h-4 w-4" />
            <span>Certifications & Credentials</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Validated technical and language proficiencies from accredited institutions. Click to inspect credential.
          </p>
        </div>

        {/* Certificates Grid - Exact same size and column grid as Projects */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* British Council EnglishScore Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-orange-600 hover:-translate-y-1 shadow-md cursor-pointer"
          >
            <div>
              {/* Media Container: Certificate Screenshot */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800 bg-zinc-900">
                <Image
                  src="/englishscore.png"
                  alt="British Council EnglishScore Certificate - Nathanael Esmond Hartono"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />

                {/* Score Pill Overlay */}
                <div className="absolute top-3 right-3 rounded bg-black/90 px-2 py-0.5 font-mono text-[11px] font-bold text-orange-500 border border-zinc-800 backdrop-blur-sm">
                  Score: 568 / 599
                </div>

                {/* Zoom hint icon on hover */}
                <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-md bg-black/80 border border-zinc-800 text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5 text-orange-500" />
                </div>
              </div>

              {/* Card Info */}
              <div className="p-4.5 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-orange-600 font-semibold">
                      British Council & UAJY
                    </p>
                    <h3 className="mt-0.5 text-base font-bold text-white transition-colors group-hover:text-orange-500">
                      EnglishScore Core Skills
                    </h3>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-black text-orange-500">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded bg-orange-950/40 border border-orange-600/40 px-2 py-0.5 font-mono text-[10px] font-semibold text-orange-400">
                    CEFR C1 • Advanced
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Listening: 599
                  </span>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                  Achieved CEFR C1 Advanced status in the Core Skills test (Listening: 599, Grammar: 563, Vocabulary: 563, Reading: 541). Accredited and endorsed with Universitas Atma Jaya Yogyakarta.
                </p>
              </div>
            </div>

            {/* Card Footer: Verification Code + External Verify link */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900 bg-zinc-950/80 px-4.5 py-3 sm:px-5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                <span className="text-zinc-500">Code:</span>
                <code className="rounded border border-zinc-800 bg-black px-1.5 py-0.5 text-zinc-200">
                  93d1861abbe0
                </code>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-400 group-hover:text-orange-500 transition-colors">
                <span>Inspect</span>
                <Maximize2 className="h-2.5 w-2.5" />
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Certificate Lightbox Modal Popup */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-popup relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-orange-600 bg-zinc-950 shadow-2xl"
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-2 font-mono text-xs text-zinc-300">
                  british-council-englishscore.credential
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal High-Res Certificate View */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
              <Image
                src="/englishscore.png"
                alt="British Council EnglishScore Certificate Preview"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain bg-zinc-950 p-2"
                priority
              />
            </div>

            {/* Modal Content Details */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-orange-950/40 border border-orange-600/40 px-2 py-0.5 font-mono text-xs font-bold text-orange-400">
                      CEFR C1 • Advanced
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      Overall: <strong className="text-white">568 / 599</strong>
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    British Council EnglishScore
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-400 font-mono">
                    Issued to Nathanael Esmond Hartono • Endorsed with Universitas Atma Jaya Yogyakarta
                  </p>
                </div>

                <a
                  href="https://www.englishscore.com/verify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-700 shrink-0"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Verify Online</span>
                </a>
              </div>

              {/* Subscores Breakdown Grid */}
              <div className="mt-6">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono block mb-3">
                  Score Breakdown (Core Skills):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                    <span className="text-[11px] font-mono text-zinc-400 block">Listening</span>
                    <span className="text-lg font-bold text-orange-500 font-mono">599</span>
                    <span className="text-[10px] text-zinc-500 block font-mono">C1 Advanced</span>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                    <span className="text-[11px] font-mono text-zinc-400 block">Grammar</span>
                    <span className="text-lg font-bold text-zinc-200 font-mono">563</span>
                    <span className="text-[10px] text-zinc-500 block font-mono">C1 Advanced</span>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                    <span className="text-[11px] font-mono text-zinc-400 block">Vocabulary</span>
                    <span className="text-lg font-bold text-zinc-200 font-mono">563</span>
                    <span className="text-[10px] text-zinc-500 block font-mono">C1 Advanced</span>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                    <span className="text-[11px] font-mono text-zinc-400 block">Reading</span>
                    <span className="text-lg font-bold text-zinc-200 font-mono">541</span>
                    <span className="text-[10px] text-zinc-500 block font-mono">C1 Advanced</span>
                  </div>
                </div>
              </div>

              {/* Credential Code Bar */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Certificate Verification Code:</span>
                  <code className="rounded border border-zinc-800 bg-black px-2 py-0.5 text-orange-400 font-bold">
                    93d1861abbe0
                  </code>
                </div>
                <span className="text-[11px] text-zinc-500">
                  Verify at englishscore.com/verify
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
