import { skills } from "@/data/skills";


export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-blue-600 mb-10">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
                {skills.map(skill => (
                    <div
                        key={skill}
                        className="p-4 border rounded-md bg-white text-center font-medium"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}