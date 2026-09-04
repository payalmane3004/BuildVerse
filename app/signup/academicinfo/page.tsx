"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Academicinfo() {
  const router = useRouter();

  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [bio, setBio] = useState("");

  const handleNext = () => {
    if (!college.trim()) {
      alert("Please enter your college name");
      return;
    }

    if (!year) {
      alert("Please select your year of study");
      return;
    }

    const existingData = sessionStorage.getItem("signupData");

    const signupData = existingData
      ? JSON.parse(existingData)
      : {};

    const updatedData = {
      ...signupData,
      college: college.trim(),
      year,
      bio: bio.trim(),
    };

    sessionStorage.setItem(
      "signupData",
      JSON.stringify(updatedData)
    );

    router.push("/signup/skills");
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

          <div className="flex justify-end gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-10 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>

          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Step 3 of 5
          </p>

          <h1 className="text-4xl font-bold">
            Academic Details
          </h1>

          <p className="text-slate-400 mt-1 mb-8">
            Help teammates gauge mutual fit.
          </p>

          <div className="space-y-5">

            {/* College */}

            <div>
              <label className="text-slate-300 font-medium">
                University/College
              </label>

              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="Enter your college name"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Year */}

            <div>
              <label className="text-slate-300 font-medium">
                Year of Study
              </label>

              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Final Year</option>
                <option value="5">Graduate</option>
              </select>
            </div>

            {/* Bio */}

            <div>
              <label className="text-slate-300 font-medium">
                Short Bio
              </label>

              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us who you are"
                rows={4}
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Buttons */}

            <div className="flex justify-between items-center pt-6">

              <button
                onClick={() => router.push("/signup/profinfo")}
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