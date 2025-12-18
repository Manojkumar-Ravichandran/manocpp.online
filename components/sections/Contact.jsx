import { site } from "@/data/site";


export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
            <p className="text-gray-700">Let's connect!</p>
            <div className="mt-4 space-y-2">
                <p>Email: <a href={`mailto:${site.email}`} className="text-blue-600">{site.email}</a></p>
                <p>Phone: <a href={`tel:${site.phone}`} className="text-blue-600">{site.phone}</a></p>
                <p><a href={site.linkedin} target="_blank" className="text-blue-600">LinkedIn</a></p>
            </div>
        </section>
    );
}