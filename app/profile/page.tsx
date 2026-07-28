"use client";

import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const skills = [
    "Cybersecurity",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "SQL",
  ];

  const interests = [
    "Hackathons",
    "Open Source",
    "Startups",
    "Web Development",
  ];

  return (
    <main className="min-h-screen bg-[#020B28] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-400">
          BuildVerse
        </h1>

        <button
          onClick={() => router.push("/dashboard")}
          className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
        >
          Dashboard
        </button>
      </nav>

      <div className="max-w-8xl mx-auto p-8">
        {/* Profile Card */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold">
              P
            </div>

            {/* User Info */}
            <div>
              <h1 className="text-4xl font-bold">
                Payal Mane
              </h1>

              <p className="text-slate-400 mt-2">
                Pillai College of Engineering
              </p>

              <p className="text-slate-400">
                Third Year CSE • CGPA 7.05
              </p>
            </div>
          </div>

          {/* About */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">
              About Me
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Computer Science student passionate about Cybersecurity,
              Web Development and building impactful projects.
              Looking for teammates for hackathons, startup ideas,
              and exciting collaborations.
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
            <h2 className="text-2xl font-semibold mb-3">
              Looking For
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                Project Teammates
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                Hackathon Partners
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="bg-slate-800 rounded-2xl p-5 text-center">
              <h3 className="text-2xl font-bold">4</h3>
              <p className="text-slate-400 text-sm">
                Projects
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 text-center">
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-slate-400 text-sm">
                Connections
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 text-center">
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-slate-400 text-sm">
                Hackathons
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-10">
            <button className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
              Settings
            </button>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 font-semibold">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}