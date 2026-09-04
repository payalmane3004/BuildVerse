"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Profinfo() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");

  const handleNext = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name");
      return;
    }

    const existingData = sessionStorage.getItem("signupData");

    const signupData = existingData
      ? JSON.parse(existingData)
      : {};

    const updatedData = {
      ...signupData,
      fullName: fullName.trim(),
    };

    sessionStorage.setItem(
      "signupData",
      JSON.stringify(updatedData)
    );

    router.push("/signup/academicinfo");
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
            <div className="w-10 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>

          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Step 2 of 5
          </p>

          <h1 className="text-4xl font-bold">
            Complete Your Profile
          </h1>

          <p className="text-slate-400 mt-3 mb-8">
            Tell the community who you are.
          </p>

          <div className="space-y-5">

            <div>
              <label className="text-slate-300 font-medium">
                Full Name
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-300 font-medium">
                Email
              </label>

              <input
                type="email"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(
                        sessionStorage.getItem("signupData") || "{}"
                      ).email || ""
                    : ""
                }
                disabled
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-800 border border-slate-700 text-slate-400"
              />
            </div>

            <div>
              <label className="text-slate-300 font-medium">
                Phone (optional)
              </label>

              <input
                type="tel"
                placeholder="+91 124578963"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justify-between items-center pt-6">

              <button
                onClick={() => router.push("/signup")}
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