import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-white/70 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Experience</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Roles that shaped my delivery style.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            From software delivery to quality engineering, I focus on reliable outcomes.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 border-l border-slate-200 pl-6">
          {experience.map((job, index) => (
            <div key={job.role} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-white bg-cyan-600 shadow" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-slate-900">{job.role}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{job.date}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{job.desc}</p>
              {index < experience.length - 1 ? (
                <span className="mt-5 block h-px w-full bg-slate-100" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
