"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    bio: "",
    college: "",
    branch: "",
    year: "",
    skills: [] as string[],
    github: "",
    linkedin: "",
    portfolio: "",
  });

  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetchProfile();
  }, [router]);

const fetchProfile = async () => {
  try {
    console.log("FETCH PROFILE STARTED");

const response = await api.get("/users/profile");
const user = response.data;

    setForm({
      fullName: user.fullName || "",
      email: user.email || "",
      bio: user.bio || "",
      college: user.college || "",
      branch: user.branch || "",
      year: user.year ? String(user.year) : "",
      skills: user.skills || [],
      github: user.github || "",
      linkedin: user.linkedin || "",
      portfolio: user.portfolio || "",
    });
  } catch (error) {
    console.error("PROFILE ERROR:", error);
  } finally {
    setLoading(false);
  }
};

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (form.skills.includes(skill)) {
      setSkillInput("");
      return;
    }

    setForm((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));

    setSkillInput("");
  };

  const removeSkill = (skillToRemove: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await api.put("/users/profile", {
        fullName: form.fullName,
        bio: form.bio,
        college: form.college,
        branch: form.branch,
        year: form.year
          ? Number(form.year)
          : undefined,
        skills: form.skills,
        github: form.github,
        linkedin: form.linkedin,
        portfolio: form.portfolio,
      });

      // Keep local user information updated
      const oldUser = JSON.parse(
        localStorage.getItem("user") || "{}"
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...oldUser,
          ...response.data.user,
        })
      );

      alert("Profile updated successfully!");
    } catch (error: any) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020B28] text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020B28] text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              My Profile
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your BuildVerse profile.
            </p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800"
          >
            ← Dashboard
          </button>

        </div>

        {/* Profile card */}

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">

          {/* Basic information */}

          <h2 className="text-xl font-semibold mb-5">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="text-slate-300">
                Full Name
              </label>

              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-300">
                Email
              </label>

              <input
                value={form.email}
                disabled
                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-500 cursor-not-allowed"
              />
            </div>

          </div>

          {/* Bio */}

          <div className="mt-5">

            <label className="text-slate-300">
              Bio
            </label>

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Tell people about yourself..."
              className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500 resize-none"
            />

          </div>

          {/* Academic */}

          <h2 className="text-xl font-semibold mt-10 mb-5">
            Academic Information
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="md:col-span-2">

              <label className="text-slate-300">
                College
              </label>

              <input
                name="college"
                value={form.college}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
              />

            </div>

            <div>

              <label className="text-slate-300">
                Year
              </label>

              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
              >
                <option value="">
                  Select
                </option>

                <option value="1">
                  First Year
                </option>

                <option value="2">
                  Second Year
                </option>

                <option value="3">
                  Third Year
                </option>

                <option value="4">
                  Final Year
                </option>

                <option value="5">
                  Graduate
                </option>

              </select>

            </div>

          </div>

          {/* Branch */}

          <div className="mt-5">

            <label className="text-slate-300">
              Branch
            </label>

            <input
              name="branch"
              value={form.branch}
              onChange={handleChange}
              placeholder="Computer Science Engineering"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
            />

          </div>

          {/* Skills */}

          <h2 className="text-xl font-semibold mt-10 mb-5">
            Skills
          </h2>

          <div className="flex gap-3">

            <input
              value={skillInput}
              onChange={(e) =>
                setSkillInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill();
                }
              }}
              placeholder="Add a skill"
              className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
            />

            <button
              onClick={addSkill}
              className="px-5 rounded-xl bg-blue-600 hover:bg-blue-500"
            >
              Add
            </button>

          </div>

          <div className="flex flex-wrap gap-2 mt-4">

            {form.skills.map((skill) => (
              <button
                key={skill}
                onClick={() => removeSkill(skill)}
                className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-600 text-blue-300"
              >
                {skill} ×
              </button>
            ))}

          </div>

          {/* Links */}

          <h2 className="text-xl font-semibold mt-10 mb-5">
            Links
          </h2>

          <div className="space-y-5">

            <input
              name="github"
              value={form.github}
              onChange={handleChange}
              placeholder="GitHub URL"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
            />

            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
            />

            <input
              name="portfolio"
              value={form.portfolio}
              onChange={handleChange}
              placeholder="Portfolio URL"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-blue-500"
            />

          </div>

          {/* Save */}

          <div className="flex justify-end mt-10">

            <button
              onClick={handleSave}
              disabled={saving}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 font-semibold disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}