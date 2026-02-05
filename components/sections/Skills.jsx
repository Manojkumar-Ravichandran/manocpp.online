import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-white/70 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Skills</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Technical strengths that power my work.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            A balanced toolkit across backend, frontend, and integration work.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-slate-900">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
