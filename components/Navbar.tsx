import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/buildverse.png"
          alt="BuildVerse logo"
          width={100}
          height={100}
          className="object-contain"
        />

        <div className="text-2xl font-bold">
          BuildVerse
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-6 items-center">

        <a href="#features">
          Features
        </a>

        <a href="#how-it-works">
          How It Works
        </a>

        <a href="/login">
          Login
        </a>

        <a
          href="/signup"
          className="px-4 py-2 rounded-lg"
        >
          Get Started
        </a>

      </div>

    </nav>
  );
}