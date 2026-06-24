"use client";
import { useRouter } from "next/navigation";

export default function Profinfo() {
    const router= useRouter();
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
        </div>
          <p className="text-blue-400 uppercase tracking-widest text-sm">
          Step 3 of 4
        </p>

          <h1 className="text-4xl font-bold">
            Your skills 
          </h1>

          <p className="text-slate-400 mt-3 mb-8">
            Add skills, you can change this later.
          </p>
             

             <div className="space-y-6">

  <div className="flex gap-3">
    <input
      type="text"
      placeholder="Add a custom skill..."
      className="
        flex-1
        px-5
        py-4
        rounded-2xl
        bg-slate-900
        border
        border-slate-700
        focus:outline-none
        focus:border-blue-500
      "
    />

    <button
      className="
        w-14
        rounded-2xl
        bg-blue-600
        hover:bg-blue-500
        text-2xl
        font-bold
      "
    >
      +
    </button>
  </div>

  <div>
    <p className="text-blue-400 text-sm tracking-widest mb-4">
      SUGGESTIONS
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        "React",
        "Next.js",
        "Java",
        "Spring Boot",
        "Python",
        "AI/ML",
        "UI/UX",
        "Docker",
        "AWS",
        "Figma",
      ].map((skill) => (
        <button
          key={skill}
          className="
            px-4
            py-2
            rounded-full
            border
            border-slate-700
            bg-slate-900
            hover:border-blue-500
            hover:text-blue-400
            transition
          "
        >
          {skill}
        </button>
      ))}
    </div>
  </div>

  <div className="flex justify-between items-center pt-6">

    <button
      onClick={() => router.push('/signup/academicinfo')}
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
      onClick={() => router.push('/signup/finalpage')}
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