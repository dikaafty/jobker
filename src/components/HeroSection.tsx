const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-8 sm:px-10 py-25">
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

      <div className="mt-5 flex justify-center items-center gap-4">
        <button
          className="primary-button"
        >
          Get Started
        </button>

        <button
          className="secondary-button"
        >
          Add Job
        </button>
      </div>
    </section>
  )
}

export default HeroSection;