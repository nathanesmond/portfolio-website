"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, FolderGit2, ImageOff, X, Maximize2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: "sona",
    title: "Sona",
    subtitle: "Physical & Mental Self-Care App",
    description:
      "Gym and wellness recommender application that analyzes user mood to generate tailored workout routines and mindful self-care plans.",
    tags: ["Flutter", "Laravel", "Flask", "Python", "REST API"],
    githubUrl:
      "https://github.com/nathanesmond/Sona---Physical-and-Mental-Self-care-App",
    image: "/Sona.png",
  },
  {
    id: "atmabid",
    title: "Atma Bid",
    subtitle: "Car Auction & Bidding Platform",
    description:
      "Digital vehicle auction and car bidding platform featuring real-time bid tracking, automotive cataloging, and secure transactions.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/nathanesmond/Atma-Bid-Website",
    image: "/Atmabid.png",
  },
  {
    id: "reusemart",
    title: "ReuseMart",
    subtitle: "E-Commerce App & Web Platform",
    description:
      "Cross-platform e-commerce ecosystem built for buying and selling preloved and used goods, featuring catalog management and order flows.",
    tags: ["React", "Flutter", "Laravel", "MySQL", "REST API"],
    githubUrl: "https://github.com/nathanesmond/ReuseMart-App-Website",
    image: "/reusemart.png",
  },
  {
    id: "kim-mrico",
    title: "KIM Mrico",
    subtitle: "Padukuhan Mrico Profile Website",
    description:
      "Modern community profile web portal developed for Padukuhan Mrico, delivering public news, organization structure, and engagement.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/nathanesmond/website-mrico",
    image: "/SSKimMrico.png",
  },
  {
    id: "atma-cinema",
    title: "Atma Cinema App",
    subtitle: "Cinema Booking & Seat Selector",
    description:
      "Mobile cinema ticketing application equipped with an interactive, real-time theater seat selector, movie scheduling, and ticket booking.",
    tags: ["Flutter", "Dart", "Mobile App", "UI/UX"],
    githubUrl: "https://github.com/nathanesmond/Atma-CInema-App",
  },
  {
    id: "workorder",
    title: "Work Order App",
    subtitle: "Engineering Task & Ticket Platform",
    description:
      "Workflow management application giving users the ability to log, track, and assign maintenance tasks for engineering teams.",
    tags: ["Flutter", "Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/nathanesmond/Work-Order-App",
    image: "/WorkOrder.png",
  },
];

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({
  projects = defaultProjects,
}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="border-b border-zinc-800 bg-black py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-orange-600 font-semibold">
              <FolderGit2 className="h-4 w-4" />
              <span>Portfolio Works</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Open-source applications, mobile platforms, and web systems built with Flutter, React, Laravel, and Flask. Click any project for full preview.
            </p>
          </div>

          <a
            href="https://github.com/nathanesmond"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 transition-colors hover:text-orange-500"
          >
            <span>View GitHub profile</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Projects 3-Column Grid (3 per row) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-orange-600 hover:-translate-y-1 shadow-md cursor-pointer"
            >
              <div>
                {/* Media Container: Image or Developer Placeholder Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800 bg-zinc-900">
                  {project.image ? (
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                      
                      {/* Zoom hint icon on hover */}
                      <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-md bg-black/80 border border-zinc-800 text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <Maximize2 className="h-3.5 w-3.5 text-orange-500" />
                      </div>
                    </div>
                  ) : (
                    /* Clean "No picture available right now" placeholder */
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 bg-zinc-900/90 text-center font-mono">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-black text-zinc-500 mb-2.5 transition-colors group-hover:border-orange-600/60">
                        <ImageOff className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-orange-500" />
                      </div>
                      <p className="text-xs font-medium text-zinc-300">
                        No picture available right now
                      </p>
                      <span className="mt-1 text-[10px] text-zinc-500">
                        Screenshot coming soon • Click for details
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-4.5 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-orange-600 font-semibold">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-0.5 text-base font-bold text-white transition-colors group-hover:text-orange-500">
                        {project.title}
                      </h3>
                    </div>

                    {/* GitHub Repo Link Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-black text-zinc-400 transition-colors hover:border-orange-600 hover:text-orange-500"
                      title="View GitHub Repository"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech tags + View Details CTA */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900 bg-zinc-950/80 px-4.5 py-3 sm:px-5">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-800 bg-zinc-900/60 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded border border-zinc-800 bg-zinc-900/60 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-400 group-hover:text-orange-500 transition-colors">
                  <span>Details</span>
                  <Maximize2 className="h-2.5 w-2.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal Popup */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
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
                  {selectedProject.title.toLowerCase().replace(/\s+/g, "-")}.preview
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Image / Visual View */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center font-mono">
                  <ImageOff className="h-8 w-8 text-zinc-500 mb-2" />
                  <p className="text-sm font-semibold text-zinc-200">
                    No picture available right now
                  </p>
                  <span className="text-xs text-zinc-500 mt-1">
                    Check the repository for source code & architecture
                  </span>
                </div>
              )}
            </div>

            {/* Modal Content Details */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-orange-600 font-semibold">
                    {selectedProject.subtitle}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-700 shrink-0"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Open GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {selectedProject.description}
              </p>

              {/* All Tech Stack Tags */}
              <div className="mt-6 pt-4 border-t border-zinc-900">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono block mb-2">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
