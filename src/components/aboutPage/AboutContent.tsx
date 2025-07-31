type JobkerGuide = {
  title: string,
  description: string
}

const jobkerGuide: JobkerGuide[] = [
  {
    title: "Add job applications with key details",
    description: "Quickly log important information like company name, position title, job location, application date, and job description — all in one clean form."
  },
  {
    title: "Track your progress with visual status updates",
    description: `Easily manage where you are in the hiring process: from "Applied" to "Interview", "Negotiation", or "Accepted" —and filter jobs by status to stay on top of what matters.`
  },
  {
    title: "Stay focused and never miss a follow-up",
    description: "JOBKER helps you prioritize next steps, avoid forgotten applications, and maintain momentum by giving you a clear view of your entire job search journey."
  }
]

const AboutContent = () => {
  return (
    <div 
      className="h-fit px-10 sm:px-12 lg:px-16 py-25 grid grid-cols-1 lg:grid-cols-[1fr_2fr] font-jost
      max-sm:gap-12 max-lg:gap-16 font-medium"
    >
      <div 
        className="w-full lg:w-3/4 h-fit border-b-1 border-b-primary py-1.5 text-sm font-semibold
        transition-all duration-1000"
      >
        ABOUT
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-8">
        <div className="font-semibold text-2xl sm:text-3xl">
          <p>YOUR CAREER,</p>
          <p>ORGANIZED.</p>
        </div>
        
        <div className="text-base sm:text-lg flex flex-col gap-4">
          <p>
            JOBKER helps you take control of your job search by simplifying the entire process of managing your
            applications — all in one intuitive and distraction-free dashboard.
          </p>

          <p>With JOBKER, you can:</p>

          {
            jobkerGuide.length > 0 && jobkerGuide.map(guide => (
              <div className="flex flex-col gap-2">
                <p>• {guide.title}</p>
                <p className="ml-3 text-sm sm:text-base font-normal">{guide.description}</p>
              </div>
            ))
          }

          <p>
            No more clutter. No more spreadsheets.
          </p>

          <p>
            Just clarity, control, and progress — job searching made smarter.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutContent;