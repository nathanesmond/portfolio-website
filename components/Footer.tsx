import { Mail, Phone, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const email = "nathanaelesmondhartono@gmail.com";
  const phoneFormatted = "0812-2534-2580";
  const phoneUrl = "tel:+6281225342580";

  return (
    <footer id="contact" className="bg-black py-16 text-zinc-400 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Contact Banner */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
            I am actively seeking software engineering opportunities. Whether you have a project idea, a job opening, or just want to connect, feel free to reach out.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-orange-600 hover:text-orange-500"
            >
              <Phone className="h-4 w-4 text-orange-500" />
              Call / WhatsApp
            </a>
            <a
              href="https://github.com/nathanesmond"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-orange-600 hover:text-orange-500"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nathanael-hartono-19780a353/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-orange-600 hover:text-orange-500"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nathanaelsmon_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-orange-600 hover:text-orange-500"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>

          {/* Quick Direct Text Info */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-zinc-900 pt-6 font-mono text-xs text-zinc-400">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-500"
            >
              <Mail className="h-3.5 w-3.5 text-orange-500" />
              <span>{email}</span>
            </a>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-500"
            >
              <Phone className="h-3.5 w-3.5 text-orange-500" />
              <span>{phoneFormatted} (+62)</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 sm:flex-row text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Nathanael Esmond Hartono. Built with Next.js & Tailwind CSS.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-orange-500"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
