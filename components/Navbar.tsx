export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-5" >
            <div className="text-2xl font-bold"> BuildVerse </div>
           <div className="flex gap-6">
           
          <a href = "/Features">  Features</a>
          <a href = "/Howitworks">  How It Works</a>
          <a href = "/login">  Login</a>
          <a href = "/signin" className ="px-4 py-2 rounded-lg">  Get Started </a>
            </div>
        </nav>
    )
}