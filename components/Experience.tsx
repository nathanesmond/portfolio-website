import { Briefcase, Building, Users, GraduationCap, BookOpen } from "lucide-react";

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "Internship" | "Education" | "Organization" | "Academic";
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    id: "it-intern-101",
    role: "IT Intern",
    organization: "THE 1O1 Style Yogyakarta",
    type: "Internship",
    period: "December 2025 – April 2026",
    location: "Yogyakarta, Indonesia",
    description: [
      "Supported IT operations and system maintenance across hotel hospitality platforms and internal workstations.",
      "Assisted in network troubleshooting, hardware diagnostics, and enterprise software configurations.",
      "Collaborated with on-site teams to ensure high system uptime and rapid resolution of operational technical issues.",
    ],
    skills: ["IT Support", "Networking", "Hardware Maintenance", "Troubleshooting"],
  },
  {
    id: "uajy-graduate",
    role: "Informatics Graduate (S.Kom)",
    organization: "Universitas Atma Jaya Yogyakarta",
    type: "Education",
    period: "2022 – 2026",
    location: "Yogyakarta, Indonesia",
    description: [
      "Completed Bachelor of Computer Science in Informatics, concentrating on software engineering, web architectures, and mobile applications.",
      "Engineered full-stack capstone applications, distributed services, and collaborative team software projects.",
    ],
    skills: ["Software Engineering", "Full-Stack Development", "Database Architecture", "Algorithms"],
  },
  {
    id: "senat-mahasiswa",
    role: "Senat Mahasiswa Member",
    organization: "FTI Universitas Atma Jaya Yogyakarta",
    type: "Organization",
    period: "September 2023 – September 2024",
    location: "Yogyakarta, Indonesia",
    description: [
      "Represented student body interests within the Faculty of Industrial Technology Student Senate (SEMA FTI).",
      "Organized student-led faculty events, strategic organizational forums, and campus work programs.",
      "Collaborated with university administration and student clubs to foster academic and extracurricular engagement.",
    ],
    skills: ["Student Governance", "Leadership", "Event Planning", "Team Coordination"],
  },
  {
    id: "assistant-lecturer",
    role: "Assistant Lecturer — Programming Basics",
    organization: "Universitas Atma Jaya Yogyakarta",
    type: "Academic",
    period: "September 2023 – July 2024",
    location: "Yogyakarta, Indonesia",
    description: [
      "Guided undergraduate students through practical laboratory sessions in fundamental programming and algorithmic thinking.",
      "Assisted lecturers in preparing laboratory tasks, debugging student code, and evaluating programming assignments.",
      "Conducted weekly consultation hours to help students grasp core data structures and logic concepts.",
    ],
    skills: ["Programming Basics", "Code Review", "Algorithmic Thinking", "Teaching"],
  },
  {
    id: "tentor-ksp",
    role: "Tentor / Programming Mentor",
    organization: "Kelompok Studi Pemrograman (KSP) UAJY",
    type: "Organization",
    period: "July 2023 – July 2024",
    location: "Yogyakarta, Indonesia",
    description: [
      "Trained and mentored club members in competitive programming principles, problem-solving, and clean coding standards.",
      "Prepared learning modules and hands-on coding challenges for internal workshops.",
      "Fostered collaborative peer learning to prepare members for programming contests and technical exams.",
    ],
    skills: ["Mentorship", "Problem Solving", "Competitive Programming", "C / C++"],
  },
];

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

export default function Experience({
  experiences = defaultExperiences,
}: ExperienceProps) {
  const getTypeBadge = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Internship":
        return (
          <span className="inline-flex items-center gap-1 rounded border border-orange-600/40 bg-orange-950/20 px-2 py-0.5 text-[10px] font-medium text-orange-400">
            <Building className="h-3 w-3" /> Internship
          </span>
        );
      case "Education":
        return (
          <span className="inline-flex items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-200">
            <GraduationCap className="h-3 w-3 text-orange-500" /> Education
          </span>
        );
      case "Academic":
        return (
          <span className="inline-flex items-center gap-1 rounded border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
            <BookOpen className="h-3 w-3 text-orange-500" /> Academic
          </span>
        );
      case "Organization":
        return (
          <span className="inline-flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
            <Users className="h-3 w-3" /> Organization
          </span>
        );
    }
  };

  return (
    <section id="experience" className="border-b border-zinc-800 bg-black py-24 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-orange-600 font-semibold">
            <Briefcase className="h-4 w-4" />
            <span>Career & Leadership</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experiences
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            My professional milestones, academic journey, student governance, and teaching mentorship.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 border-l border-zinc-800 ml-4 md:ml-6 pl-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker dot in solid dark orange */}
              <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-black bg-orange-600 transition-transform group-hover:scale-125" />

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-orange-600">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors">
                        {exp.role}
                      </h3>
                      {getTypeBadge(exp.type)}
                    </div>
                    <p className="text-sm font-medium text-zinc-300 mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-600/70 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-zinc-900">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
