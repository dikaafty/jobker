const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-72px)] flex flex-col justify-center items-center px-8 sm:px-10 pb-10">
      <h1
        className="font-jost font-black text-xl sm:text-3xl md:text-4xl text-center"
      >
        <span className="text-fire">YOUR CAREER</span> DASHBOARD STARTS HERE
      </h1>

      <p 
        className="w-[85%] font-jost font-medium text-sm sm:text-base text-center mt-2.5"
      >
        Organize your applications, monitor progress, and take control of your career.
      </p>
    </section>
  )
}

export default HeroSection;