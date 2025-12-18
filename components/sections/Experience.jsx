import { experience } from "@/data/experience";


export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-blue-600 mb-10">Experience</h2>
            <div className="space-y-8 max-w-3xl">
                {experience.map((job, i) => (
                    <div key={i} className="p-6 border rounded-lg bg-white shadow">
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <span className="text-sm text-blue-600">{job.date}</span>
                        <p className="mt-3 text-gray-600">{job.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}