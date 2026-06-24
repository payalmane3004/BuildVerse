export default function Login() {
  return (
    <main className="min-h-screen grid md:grid-cols-2">


      <section className="hidden md:flex flex-col justify-center px-20">
        <h2 className="text-3xl font-bold text-blue-400">
          BuildVerse
        </h2>

        <h1 className="text-6xl font-bold mt-10 leading-tight">
          Find your tribe.
          <br />
          Build something great.
        </h1>

        <p className="text-slate-400 mt-6 text-lg max-w-md">
          Connect with developers, designers, founders, and innovators
          ready to build projects, win hackathons, and launch startups.
        </p>

        <div className="flex gap-3 mt-8">
          <span className="px-4 py-2 rounded-full bg-slate-800">
            Projects
          </span>

          <span className="px-4 py-2 rounded-full bg-slate-800">
            Hackathons
          </span>

          <span className="px-4 py-2 rounded-full bg-slate-800">
            Startups
          </span>
        </div>
      </section>

      
      <section className="flex items-center justify-center p-8">

        <div className="w-full max-w-md p-10 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">

          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-3 mb-8">
            Sign in to continue building.
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

            <div className="text-right">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300"
              >
                Forgot Password?
              </a>
            </div>


            <button
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
              Login
            </button>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-slate-700"></div>

              <span className="text-slate-500 text-sm">
                OR
              </span>

              <div className="flex-1 h-px bg-slate-700"></div>
            </div>

            <p className="text-center text-slate-400">
              New to BuildVerse?{" "}
              <a
                href="/signup"
                className="text-blue-400 hover:text-blue-300"
              >
                Create Account
              </a>
            </p>

          </div>
        </div>

      </section>

    </main>
  );
}