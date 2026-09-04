"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function MyProjects() {
  const router = useRouter();

  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMyProjects = async () => {
    try {
      const response = await api.get("/projects/my");

console.log(response.data);

setProjects(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
    return;
  }

  fetchMyProjects();
}, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020B28] text-white">
        Loading...
      </div>
    );
  }


const handleDeleteProject = async (projectId: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/projects/${projectId}`);

    alert("Project deleted successfully!");

    // Refresh the project list
    fetchMyProjects();

  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      "Failed to delete project"
    );
  }
};

  return (
    <main className="min-h-screen bg-[#020B28] text-white p-8">
      <h1 className="text-4xl font-bold text-blue-400">
        My Projects
      </h1>

      <p className="mt-2 text-slate-400">
        Total Projects: {projects.length}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="text-slate-400 mt-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.requiredSkills.map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full border border-blue-700 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Team Size: {project.teamSize}
            </p>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-blue-600 py-2 rounded-xl hover:bg-blue-700 transition">
                Edit
              </button>

              <button
  onClick={() => handleDeleteProject(project._id)}
  className="flex-1 bg-red-600 py-2 rounded-xl hover:bg-red-700 transition"
>
  Delete
</button>

<button
  onClick={() => router.push(`/project/${project._id}/requests`)}
  className="w-full mt-3 py-2 rounded-xl bg-green-600 hover:bg-green-500"
>
  View Join Requests
</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}