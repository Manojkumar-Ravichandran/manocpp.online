import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 mt-16">
      
      {/* LEFT – TEXT */}
      <div className="flex-1">
        <h2 className="text-3xl text-gray-700 mb-2">Hello, I'm</h2>

        <h1 className="text-5xl font-bold text-blue-600">
          {site.name}
        </h1>

        <p className="mt-4 text-xl text-gray-600 max-w-xl">
          {site.description}
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>

      {/* RIGHT – PROFILE IMAGE */}
      <div className="flex-1 flex justify-center">
        <Image
          src={site.profile}
          alt={`${site.name} profile`}
          width={260}
          height={260}
          priority
          className="rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>

    </section>
  );
}
