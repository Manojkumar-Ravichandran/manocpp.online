import Link from "next/link";
import { projects } from "@/data/projects";


export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map(project => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                        <div className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="mt-3 text-gray-600">{project.shortDesc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}