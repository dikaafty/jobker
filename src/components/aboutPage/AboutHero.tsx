const AboutHero = () => {
  return (
    <div className="bg-card flex flex-col justify-center items-center gap-8 font-jost py-20">
      <div className="px-3 py-1 text-xs font-semibold border-1 border-secondary-foreground rounded-md">
        ABOUT
      </div>

      <div className="text-5xl sm:text-6xl md:text-7xl text-center flex flex-col gap-3 font-semibold">
        <p>Track smarter.</p>
        <p>Land faster.</p>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-center font-medium w-[85%] md:w-190">
        JOBKER helps you organize, track, and stay focused on your job search — with a clean dashboard made 
        for real people chasing real careers.
      </p>
    </div>
  )
}

export default AboutHero;