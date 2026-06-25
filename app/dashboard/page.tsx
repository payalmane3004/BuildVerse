"use client";

export default function Dashboard() {
  const builders = [
    {
      initials: "PN",
      name: "Priya Nair",
      college: "IIT Bombay",
      bio: "Full-stack developer passionate about building scalable web applications.",
      skills: ["React", "Node.js", "TypeScript"],
      cgpa: "9.1",
      year: "3rd Year",
    },
    {
      initials: "RM",
      name: "Rohit Mehta",
      college: "NIT Trichy",
      bio: "AI enthusiast working on machine learning and startup ideas.",
      skills: ["Python", "AI/ML", "Data Science"],
      cgpa: "8.6",
      year: "4th Year",
    },
    {
      initials: "AS",
      name: "Ananya Singh",
      college: "BITS Pilani",
      bio: "UI/UX designer focused on creating meaningful digital experiences.",
      skills: ["Figma", "UI/UX", "Flutter"],
      cgpa: "8.9",
      year: "2nd Year",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020B28] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-400">
          BuildVerse
        </h1>

        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-slate-700">
            🔔
          </button>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
              P
            </div>

            <span>Payal</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl px-10 py-8 flex justify-between items-center">
          <div>
            <p className="uppercase tracking-[4px] text-blue-300 text-xs">
              Welcome Back
            </p>

            <h1 className="text-4xl font-bold mt-2">
              Hey, Payal 👋
            </h1>

            <p className="text-slate-300 mt-2">
              8 builders matching your vibe right now
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10">
              💻 Project
            </button>

            <button className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10">
              🏆 Hackathon
            </button>

            <button className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10">
              🚀 Startup
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-4 mt-8">
          <input
            type="text"
            placeholder="Search by name or skill..."
            className="
              flex-1
              px-5
              py-3
              rounded-2xl
              bg-slate-900
              border
              border-slate-700
              focus:outline-none
            "
          />

          <button
            className="
              px-6
              rounded-2xl
              bg-slate-900
              border
              border-slate-700
            "
          >
            Filters
          </button>
        </div>

        <p className="mt-6 text-slate-300">
          Showing {builders.length} builders
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-5">
          {builders.map((builder) => (
            <div
              key={builder.name}
              className="
                bg-slate-900/40
                border
                border-slate-800
                rounded-3xl
                p-5
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  {builder.initials}
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    {builder.name}
                  </h2>

                  <p className="text-slate-400 text-sm">
                    {builder.college}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {builder.bio}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {builder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      rounded-full
                      border
                      border-blue-700
                      text-xs
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm text-slate-400">
                {builder.cgpa} CGPA • {builder.year}
              </div>

              <button
                className="
                  w-full
                  mt-5
                  py-2.5
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-400
                  font-semibold
                "
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}