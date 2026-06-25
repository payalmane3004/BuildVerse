"use client";
import { useRouter } from "next/navigation";


export default function Academicinfo() {
    const router = useRouter();
  return (
    <main className="min-h-screen grid bg ">


      <section className="flex items-center justify-center p-8">

            <div className="absolute top-8 left-10">
        <h2 className="text-3xl font-bold text-blue-400">
          BuildVerse
        </h2>
      </div>
      
        <div className="w-full max-w-md  rounded-3xl backdrop-blur-md">
        
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
            Academic details
          </h1>

          <p className="text-slate-400 mt-1 mb-8">
            Help teammates gauge mutual fit.
          </p>

          <div className="space-y-5">

            <div>
              <label className="text-slate-300 font-medium">
            University/College
              </label>

              <input
                type="text"
                placeholder="Enter your college name"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>

           <div className="grid grid-cols-2 gap-4">

  <div>
    <label className="text-slate-300 font-medium">
      CGPA (optional)
    </label>

    <input
      type="number"
      step="0.01"
      placeholder="8.50"
      className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
    />
  </div>

  <div>
    <label className="text-slate-300 font-medium">
      Year of Study
    </label>

    <select
      className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
    >
      <option>First Year</option>
      <option>Second Year</option>
      <option>Third Year</option>
      <option>Final Year</option>
      <option>Graduate</option>
    </select>
  </div>

</div>
             <div>
              <label className="text-slate-300 font-medium">
                Short Bio
              </label>

              <input
                type="text"
                placeholder="Tell us who you are"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
              </div>
              <div className="flex justify-between items-center pt-6">
  
  <button onClick={() => router.push("/signup/profinfo")}
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

  <button onClick={() => router.push("/signup/skills")}
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