"use client";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  return (
    <main className="min-h-screen grid ">


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
        </div>
          <p className="text-blue-400 uppercase tracking-widest text-sm">
          Step 1 of 4
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
                placeholder="Enter your password"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>


              <div>
              <label className="text-slate-300 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-5 py-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>
           


            <button onClick={() => router.push("/signup/profinfo")}
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
              Sign in
            </button>
            </div>
          </div>
      </section>

    </main>
  );
}