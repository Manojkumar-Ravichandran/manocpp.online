import { projects } from "@/data/projects";


export default function ProjectDetail({ params }) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) return null;


    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-blue-600">{project.title}</h1>
            <p className="mt-4 text-gray-700">{project.description}</p>
            <div className="mt-6 flex gap-3 flex-wrap">
                {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-200 rounded">{t}</span>
                ))}
            </div>
        </div>
    );
}