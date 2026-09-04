"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function CreateProject() {
  
  const router = useRouter();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
  }
}, [router]);
    
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const [loading, setLoading] = useState(false);

  const handleCreateProject = async () => {
    if (
      !title ||
      !description ||
      !techStack ||
      !requiredSkills ||
      !teamSize
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await api.post("/projects", {
        title,
        description,
        techStack,
        requiredSkills: requiredSkills
          .split(",")
          .map((skill) => skill.trim()),
        teamSize,
      });

      alert("Project Created Successfully!");

      router.push("/my-projects");
    } catch (error: any) {
      console.error(error);
      alert(
        error.response?.data?.message || "Failed to create project"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020B28] flex justify-center items-center px-6 py-10">

      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-blue-400">
          Create Project
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          Tell others what you're building.
        </p>

        <div className="space-y-6">

          <div>
            <label className="text-white font-medium">
              Project Title
            </label>

            <input
              type="text"
              placeholder="BuildVerse"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-white font-medium">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe your project..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-white font-medium">
              Tech Stack
            </label>

            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-white font-medium">
              Required Skills
            </label>

            <input
              type="text"
              placeholder="React, Express, UI Design"
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
              className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none"
            />

            <p className="text-sm text-slate-500 mt-2">
              Separate skills with commas.
            </p>
          </div>

          <div>
            <label className="text-white font-medium">
              Team Size
            </label>

            <input
              type="number"
              min="1"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none"
            />
          </div>

          <button
            onClick={handleCreateProject}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>

        </div>

      </div>

    </main>
  );
}