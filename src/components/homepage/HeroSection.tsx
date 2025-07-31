import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-72px)] flex flex-col justify-center items-center px-8 sm:px-10 pb-10">
      <h1
        className="font-jost font-black text-xl sm:text-3xl md:text-4xl text-center"
      >
        <span className="text-fire stroke">YOUR CAREER</span> DASHBOARD STARTS HERE
      </h1>

      <p 
        className="w-[85%] font-jost font-medium text-sm sm:text-base text-center mt-2.5"
      >
        Organize your applications, monitor progress, and take control of your career.
      </p>

      <div className="mt-5 flex justify-center items-center gap-4">
        <NavLink
          to="/job"
          className="primary-button"
        >
          Get Started
        </NavLink>

        <NavLink
          to="/about"
          className="secondary-button active:translate-x-0.5 active:translate-y-0.5 transition-transform
            duration-300 hover:-translate-0.5 active:opacity-95"
        >
          About Us
        </NavLink>
      </div>
    </section>
  )
}

export default HeroSection;