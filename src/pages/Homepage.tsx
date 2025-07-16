import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="">
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
        <NavLink
          to="/job"
          className="primary-button"
        >
          Get Started
        </NavLink>

        <NavLink
          to="/about"
          className="secondary-button"
        >
          About Us
        </NavLink>
      </div>
    </section>
  )
}

export default Homepage;