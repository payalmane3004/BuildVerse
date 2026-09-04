"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function Dashboard() {
const router = useRouter();

const [search, setSearch] = useState("");

const [showFilters, setShowFilters] = useState(false);

const [status, setStatus] = useState("");

const [teamSize, setTeamSize] = useState("");

const [techStack, setTechStack] = useState("");

const [debouncedSearch, setDebouncedSearch] = useState("");


const [showNotifications, setShowNotifications] = useState(false);

const [notifications, setNotifications] = useState<any[]>([]);

const [user, setUser] = useState<any>(null);
const [projects, setProjects] = useState<any[]>([]);

const fetchProjects = async () => {
  try {
    const response = await api.get("/projects", {
  params: {
    search: debouncedSearch,
    status,
    teamSize,
    techStack,
  },
});

    setProjects(response.data);
  } catch (error) {
    console.error(error);
  }
};


const fetchNotifications = async () => {
  try {
    const response = await api.get("/join-requests/received");
    setNotifications(response.data);
  } catch (error) {
    console.error(error);
  }
};


const handleAccept = async (requestId: string) => {
  try {
   await api.patch(`/join-requests/${requestId}/accept`);

    alert("Request accepted!");

    fetchNotifications();
    fetchProjects();

  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      "Failed to accept request"
    );
  }
};

const handleReject = async (requestId: string) => {
  try {
    await api.patch(`/join-requests/${requestId}/reject`);

    alert("Request rejected!");

    fetchNotifications();

  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      "Failed to reject request"
    );
  }
};

useEffect(() => {
  fetchNotifications();
}, []);

// Authentication (runs only once)
useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
    return;
  }

  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, [router]);

// Debounce search
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);




  return () => clearTimeout(timer);
}, [search]);

// Fetch projects whenever search changes
useEffect(() => {
  fetchProjects();
}, [debouncedSearch, status, teamSize, techStack]);

if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020B28] text-white">
      Loading...
    </div>
  );
}

const handleJoinRequest = async (
  e: React.MouseEvent,
  projectId: string
) => {
  e.stopPropagation();

  try {
    await api.post("/join-requests", {
      projectId,
      message: "Hi! I'd love to contribute to this project.",
    });

    alert("Join request sent successfully!");
  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      "Failed to send join request"
    );
  }
};

const handleJoinProject = async (projectId: string) => {
  try {
    await api.post("/join-requests", {
      projectId,
      message: "Hi! I'd love to contribute to this project.",
    });

    alert("Join request sent successfully!");
  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      "Failed to send request"
    );
  }
};

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  router.push("/login");
};


  return (
    <main className="min-h-screen bg-[#020B28] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-400">
          BuildVerse
        </h1>

       <div className="relative flex items-center gap-4">
          <button
  onClick={() => router.push("/dashboard/notifications")}
  className="relative w-12 h-12 rounded-full border border-slate-700"
>
  🔔


  {showNotifications && (
  <div className="absolute top-16 right-20 w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl z-50">

    <div className="p-4 border-b border-slate-700">
      <h2 className="text-lg font-semibold">
        Notifications
      </h2>
    </div>

    {notifications.length === 0 ? (
      <div className="p-6 text-center text-slate-400">
        No new notifications
      </div>
    ) : (
      notifications.map((request) => (
        <div
          key={request._id}
          className="p-4 border-b border-slate-800"
        >

          <p className="font-semibold">
            {request.sender?.fullName}
          </p>

          <p className="text-sm text-slate-400 mt-1">
            requested to join
          </p>

          <p className="text-blue-400 text-sm">
            {request.project?.title}
          </p>

          <div className="flex gap-2 mt-4">

       <button
  onClick={() => handleAccept(request._id)}
  className="flex-1 bg-green-600 py-2 rounded-xl"
>
  Accept
</button>

         <button
  onClick={() => handleReject(request._id)}
  className="flex-1 bg-red-600 py-2 rounded-xl"
>
  Reject
</button>

          </div>

        </div>
      ))
    )}

  </div>
)}

  {notifications.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full px-2">
      {notifications.length}
    </span>
  )}
</button>

          <div className="flex items-center gap-3">

  <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-700">
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
      {user.fullName?.charAt(0).toUpperCase()}
    </div>

    <span>{user.fullName}</span>
  </div>

  <button
    onClick={handleLogout}
    className="px-4 py-2 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
  >
    Logout
  </button>

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
             Hey, {user.fullName} 👋
            </h1>

            <p className="text-slate-300 mt-2">
              {projects.length} projects available to join
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

            <button
  onClick={() => router.push("/my-projects")}
  className="px-4 py-2 rounded-xl bg-blue-600"
>
  My Projects
</button>   
         <button
  onClick={() => router.push("/create-project")}
  className="px-6 py-4 rounded-2xl bg-green-600 hover:bg-green-500 transition"
>
  ➕ Create Project
</button>

          </div>
        </div>

        {/* Search */}
        <div className="flex gap-4 mt-8">
 <input
  type="text"
  placeholder="Search by project or skill..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
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
  onClick={() => setShowFilters(true)}
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
          Showing {projects.length} projects
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-5">
          {projects.map((project) => (
            <div
  key={project._id}
  onClick={() => router.push(`/project/${project._id}`)}
  className="
    bg-slate-900/40
    border
    border-slate-800
    rounded-3xl
    p-5
    cursor-pointer
    hover:border-blue-500
    hover:-translate-y-1
    transition-all
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
                  {project.title.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    {project.title}
                  </h2>

                  <p className="text-slate-400 text-sm">
                    {project.owner?.fullName}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.requiredSkills.map((skill: string)  => (
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
  Team Size: {project.teamSize}
</div>

             <button
  onClick={(e) => {
    e.stopPropagation();
    handleJoinProject(project._id);
  }}
  className="w-full mt-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 font-semibold"
>
  Join Project
</button>
            </div>
          ))}
        </div>
      </div>
      {showFilters && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-slate-900 rounded-3xl p-8 w-[420px] border border-slate-700">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Tech Stack */}
      <label className="block mb-2 font-semibold">
        Tech Stack
      </label>

      <select
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800 mb-5"
      >
        <option value="">All</option>
        <option>React</option>
        <option>Node.js</option>
        <option>Python</option>
        <option>Java</option>
        <option>Flutter</option>
      </select>

      {/* Status */}

      <label className="block mb-2 font-semibold">
        Status
      </label>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800 mb-5"
      >
        <option value="">All</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
      </select>

      {/* Team Size */}

      <label className="block mb-2 font-semibold">
        Team Size
      </label>

      <select
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800 mb-8"
      >
        <option value="">Any</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <div className="flex justify-end gap-3">

        <button
          onClick={() => setShowFilters(false)}
          className="px-5 py-2 rounded-xl bg-slate-700"
        >
          Cancel
        </button>

        <button
          onClick={() => setShowFilters(false)}
          className="px-5 py-2 rounded-xl bg-blue-600"
        >
          Apply
        </button>

      </div>

    </div>

  </div>
)}
    </main>
  );
}