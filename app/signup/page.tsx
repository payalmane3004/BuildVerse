"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Temporarily store signup information
    sessionStorage.setItem(
      "signupData",
      JSON.stringify({
        email,
        password,
      })
    );

    router.push("/signup/profinfo");
  };

  return (
    <main className="min-h-screen grid">

      <section className="flex items-center justify-center p-8">

        <div className="absolute top-8 left-10">
          <h2 className="text-3xl font-bold text-blue-400">
            BuildVerse
          </h2>
        </div>

        <div className="w-full max-w-md p-10 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">

          <div className="flex justify-end gap-2 mb-8">
            <div className="w-10 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>

          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Step 1 of 5
          </p>

          <h1 className="text-4xl font-bold">
            Create Your Account
          </h1>

          <p className="text-slate-400 mt-3 mb-8">
            Tell the community who you are.
          </p>

          <div className="space-y-5">

            <div>
              <label className="text-slate-300 font-medium">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-300 font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-300 font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleNext}
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-blue-400
                text-white
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Next →
            </button>

          </div>
        </div>
      </section>

    </main>
  );
}