export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-5" >
            <div className="text-2xl font-bold"> BuildVerse </div>
           <div className="flex gap-6">
           
          <a href = "#">  Features</a>
          <a href = "#">  How It Works</a>
          <a href = "#">  Login</a>
          <a href = "#" className ="px-4 py-2 rounded-lg">  Get Started </a>
            </div>
        </nav>
    )
}