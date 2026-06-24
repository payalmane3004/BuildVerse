"use client";

import { useRouter } from "next/navigation";
import {
  Code2,
  Trophy,
  Rocket,
  Wifi,
  WifiOff,
  Globe,
} from "lucide-react";

export default function Goals() {
  const router = useRouter();

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
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <div className="w-10 h-2 rounded-full bg-blue-500"></div>
          </div>

          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Step 4 of 4
          </p>

          <h1 className="text-4xl font-bold mt-2">
            What are you looking for?
          </h1>

          <p className="text-slate-400 mt-3 mb-8">
            This helps us surface the right people for you.
          </p>

          {/* Options */}

          <div className="space-y-4">

            <button className="w-full p-4 rounded-2xl border border-slate-700 bg-slate-900 hover:border-blue-500 transition">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 h-fit">
                  <Code2 size={22} className="text-blue-400" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-lg">
                    Build a Project
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Find collaborators for your next side project.
                  </p>
                </div>
              </div>
            </button>

            <button className="w-full p-4 rounded-2xl border border-slate-700 bg-slate-900 hover:border-blue-500 transition">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 h-fit">
                  <Trophy size={22} className="text-blue-400" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-lg">
                    Hackathon Team
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Assemble a team for upcoming hackathons.
                  </p>
                </div>
              </div>
            </button>

            <button className="w-full p-4 rounded-2xl border border-slate-700 bg-slate-900 hover:border-blue-500 transition">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 h-fit">
                  <Rocket size={22} className="text-blue-400" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-lg">
                    Start a Startup
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Find co-founders and early team members.
                  </p>
                </div>
              </div>
            </button>

          </div>

          {/* Work Mode */}

          <div className="mt-8">

            <p className="font-medium mb-4">
              Preferred work mode
            </p>

            <div className="grid grid-cols-3 gap-3">

              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-700 hover:border-blue-500">
                <Wifi size={16} />
                Online
              </button>

              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-700 hover:border-blue-500">
                <WifiOff size={16} />
                Offline
              </button>

              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-500 bg-blue-500/10">
                <Globe size={16} />
                Both
              </button>

            </div>
          </div>

          {/* Buttons */}

          <div className="flex justify-between items-center pt-8">

            <button
              onClick={() => router.push("/signup/skills")}
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
              onClick={() => router.push("/dashboard")}
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
              Finish →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}