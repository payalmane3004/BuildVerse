"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Skills() {
  const router = useRouter();

  const [customSkill, setCustomSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const suggestions = [
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Python",
    "AI/ML",
    "UI/UX",
    "Docker",
    "AWS",
    "Figma",
  ];

  const toggleSkill = (skill: string) => {
    setSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill]
    );
  };

  const addCustomSkill = () => {
    const skill = customSkill.trim();

    if (!skill) return;

    if (!skills.includes(skill)) {
      setSkills((current) => [...current, skill]);
    }

    setCustomSkill("");
  };

  const handleNext = () => {
    if (skills.length === 0) {
      alert("Please select at least one skill");
      return;
    }

    const existingData = sessionStorage.getItem("signupData");

    const signupData = existingData
      ? JSON.parse(existingData)
      : {};

    const updatedData = {
      ...signupData,
      skills,
    };

    sessionStorage.setItem(
      "signupData",
      JSON.stringify(updatedData)
    );

    router.push("/signup/finalpage");
  };

  return (
    <main className="min-h-screen grid">

      <section className="flex items-center justify-center p-8">

        <div className="absolute top-8 left-10">
          <h2 className="text-3xl font-bold text-blue-400">
            BuildVerse
          </h2>
        </div>

        <div className="w-full max-w-md rounded-3xl backdrop-blur-md">

          {/* Progress */}

          <div className="flex justify-end gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-10 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>

          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Step 4 of 5
          </p>

          <h1 className="text-4xl font-bold">
            Your Skills
          </h1>

          <p className="text-slate-400 mt-3 mb-8">
            Add skills, you can change this later.
          </p>

          <div className="space-y-6">

            {/* Custom skill */}

            <div className="flex gap-3">

              <input
                type="text"
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addCustomSkill();
                  }
                }}
                placeholder="Add a custom skill..."
                className="
                  flex-1
                  px-5
                  py-4
                  rounded-2xl
                  bg-slate-900
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-blue-500
                "
              />

              <button
                onClick={addCustomSkill}
                className="
                  w-14
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  text-2xl
                  font-bold
                "
              >
                +
              </button>

            </div>

            {/* Selected skills */}

            {skills.length > 0 && (
              <div>
                <p className="text-blue-400 text-sm tracking-widest mb-3">
                  SELECTED SKILLS
                </p>

                <div className="flex flex-wrap gap-2">

                  {skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-blue-600
                        text-white
                        text-sm
                      "
                    >
                      {skill} ×
                    </button>
                  ))}

                </div>
              </div>
            )}

            {/* Suggestions */}

            <div>

              <p className="text-blue-400 text-sm tracking-widest mb-4">
                SUGGESTIONS
              </p>

              <div className="flex flex-wrap gap-3">

                {suggestions.map((skill) => {

                  const selected = skills.includes(skill);

                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`
                        px-4
                        py-2
                        rounded-full
                        border
                        transition
                        ${
                          selected
                            ? "border-blue-500 bg-blue-500/20 text-blue-400"
                            : "border-slate-700 bg-slate-900 hover:border-blue-500 hover:text-blue-400"
                        }
                      `}
                    >
                      {skill}
                    </button>
                  );
                })}

              </div>

            </div>

            {/* Navigation */}

            <div className="flex justify-between items-center pt-6">

              <button
                onClick={() => router.push("/signup/academicinfo")}
                className="
                  px-6
                  py-2
                  rounded-xl
                  border
                  border-slate-700
                  text-slate-300
                  hover:bg-slate-800
                  transition
                "
              >
                ← Back
              </button>

              <button
                onClick={handleNext}
                className="
                  px-6
                  py-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-400
                  text-white
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Next →
              </button>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}