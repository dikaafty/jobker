const Navbar = () => {
  return (
    <nav 
      className="w-full font-jost flex justify-between items-center px-8 sm:px-10 py-4 sm:py-5.5"
    >
      <h1 
        className="text-lg font-extrabold"
      >
        JOBKER.
      </h1>

      {/* Desktop Nav */}
      <div 
        className="text-sm font-medium hidden md:flex justify-center items-center gap-12.5"
      >
        <a href="/job">
          Job
        </a>
        
        <a href="/job">
          Add Job
        </a>

        <a href="/about">
          About
        </a>
      </div>
    </nav>
  )
}

export default Navbar;