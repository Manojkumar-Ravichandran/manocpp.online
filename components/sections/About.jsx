import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">About</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Building software with clarity, care, and momentum.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            I am a Full Stack Developer with experience in Java, Spring Boot, React, and SQL. I transitioned
            from mechanical engineering—where I earned my Bachelor's and Diploma with strong academic
            standing—into software development. This background brings a unique perspective on systems,
            analytical problem-solving, and process optimization to my work in building resilient web
            applications.
          </p>
        </div>
        <div className="grid gap-4">
          {site.highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
