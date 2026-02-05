import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          (c) {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a className="font-medium text-slate-600 hover:text-slate-900" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {site.github ? (
            <a className="font-medium text-slate-600 hover:text-slate-900" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
