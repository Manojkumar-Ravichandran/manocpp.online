import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Let's build something that ships.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            I love collaborating with product teams and building practical software. Reach out and we can
            talk about your goals and how I can help.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="#projects"
              className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Explore projects
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-cyan-700 px-4 py-2 font-semibold text-white transition hover:bg-cyan-800"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
              <a className="mt-2 block text-base font-semibold text-slate-900" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <a className="mt-2 block text-base font-semibold text-slate-900" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
              <a
                className="mt-2 block text-base font-semibold text-cyan-700"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
            {site.github ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">GitHub</p>
                <a
                  className="mt-2 block text-base font-semibold text-cyan-700"
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View code
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
