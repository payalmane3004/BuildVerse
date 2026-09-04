"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
    return;
  }

  fetchProject();
}, [router, id]);

  const fetchProject = async () => {
    try {
      const response = await api.get(`/projects/${id}`);
      console.log(project);
      setProject(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load project");
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async () => {
    try {
      await api.post("/join-requests", {
        projectId: project._id,
        message: "I'd love to contribute to this project.",
      });

      alert("Join request sent!");
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to send request");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#020B28] text-white">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#020B28] text-white">
        Project not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020B28] text-white p-8">

      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-400"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-8">

        <h1 className="text-4xl font-bold text-blue-400">
          {project.title}
        </h1>

        <p className="mt-6 text-slate-300">
          {project.description}
        </p>

        <div className="mt-8">

          <h2 className="text-xl font-semibold">
            Owner
          </h2>

          <p className="mt-2">
            {project.owner.fullName}
          </p>

          <p className="text-slate-400">
            {project.owner.email}
          </p>

        </div>

        <div className="mt-8">

          <h2 className="text-xl font-semibold">
            Tech Stack
          </h2>

          <p className="mt-2">
            {project.techStack}
          </p>

        </div>

        <div className="mt-8">

          <h2 className="text-xl font-semibold">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-2 mt-3">

            {project.requiredSkills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-blue-700"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-8">

          <h2 className="text-xl font-semibold">
            Team Size
          </h2>

          <p className="mt-2">
            {project.teamSize}
          </p>

        </div>

        <div className="mt-8">

  <h2 className="text-xl font-semibold">
    Team Members
  </h2>

  <div className="mt-4 space-y-3">

    {project.members?.map((member: any) => (

      <div
        key={member._id}
        className="bg-slate-800 rounded-xl p-4"
      >
        <h3 className="font-semibold">
          {member.fullName}
        </h3>

        <p className="text-slate-400 text-sm">
          {member.email}
        </p>
      </div>

    ))}

  </div>

</div>

        <button
          onClick={handleJoin}
          className="w-full mt-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 font-semibold"
        >
          Join Project
        </button>

      </div>

    </main>
  );
}