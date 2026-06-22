export default function CTV() {

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 md:p-16 text-center text-white shadow-xl">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Start Building?
        </h2>

        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Turn your ideas into reality with BuildVerse. Join a community of
          innovators, creators, and problem solvers today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );

}