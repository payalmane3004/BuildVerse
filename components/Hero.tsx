"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
   const router = useRouter();
  return (
    <section className="flex flex-col items-center text-center py-20 px-8">
      
      <div>
        <h2
  className="font-semibold text-lg"
  style={{ color: "var(--primary)" }}
>
          🚀 Build Projects • Join Hackathons • Launch Startups
        </h2>

        <h1 className="text-5xl font-bold mt-4">
          Find Your Builder Team
        </h1>

        <p className="max-w-2xl mt-6 opacity-80">
          Meet developers, designers, founders, and innovators ready
          to build projects, win hackathons, and launch startups.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
    <button
          onClick={() => router.push("/signup")}
          className="px-6 py-3 rounded-lg text-white"
          style={{ backgroundColor: "var(--primary)" }}
        >
          Get Started
        </button>

        {/* Explore Builders */}
        <button
          onClick={() => router.push("/signup")}
          className="px-6 py-3 rounded-lg border"
          style={{
            borderColor: "var(--primary)",
            color: "var(--primary)",
          }}
        >
          Explore Builders
        </button>
      </div>

    </section>
  );
}