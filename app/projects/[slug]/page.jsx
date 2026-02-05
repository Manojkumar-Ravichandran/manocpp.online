import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="px-6 pb-20 pt-28 md:px-12">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/#projects"
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                >
                    Back to projects
                </Link>
                <h1 className="mt-4 font-display text-4xl font-semibold text-slate-900 md:text-5xl">
                    {project.title}
                </h1>
                <p className="mt-6 text-base leading-7 text-slate-600">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    );
}
