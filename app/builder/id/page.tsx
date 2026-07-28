"use client";

import { useRouter } from "next/navigation";

export default function BuilderProfile() {
  const router = useRouter();

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ];

  const interests = [
    "Hackathons",
    "Startups",
    "Open Source",
    "AI/ML",
  ];

  return (
    <main className="min-h-screen bg-[#020B28] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-400">
          BuildVerse
        </h1>

        <button
          onClick={() => router.push("/dashboard")}
          className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
        >
          ← Dashboard
        </button>
      </nav>

      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-md">

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold">
              PN
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Priya Nair
              </h1>

              <p className="text-slate-400 mt-2">
                IIT Bombay
              </p>

              <p className="text-slate-400">
                3rd Year • CGPA 9.1
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">
              About
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Full-stack developer passionate about building
              scalable web applications. Interested in startups,
              hackathons, and collaborating on impactful projects.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-blue-700 text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Interests
            </h2>

            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full border border-slate-700 text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Looking For */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Looking For
            </h2>

            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                Hackathon Partners
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                Startup Co-Founder
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                Project Team
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="bg-slate-800 rounded-2xl p-5 text-center">
              <h3 className="text-2xl font-bold">8</h3>
              <p className="text-slate-400 text-sm">
                Projects
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 text-center">
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-slate-400 text-sm">
                Connections
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 text-center">
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-slate-400 text-sm">
                Hackathons
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-10">
            <button className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
              Message
            </button>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 font-semibold hover:scale-105 transition">
              Connect
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}