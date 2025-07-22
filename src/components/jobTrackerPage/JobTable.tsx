import { useAppSelector } from "@/store/redux/hooks";

const JobTable = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  return (
    <div className="max-md:pl-4 flex md:justify-center">

      {/* Desktop Table */}

      <table 
        className="font-jost w-[90%] order-separate border-spacing-0 rounded-lg overflow-hidden border 
        border-primary hidden md:table"
      >
        <thead>
          <tr className="bg-card font-semibold text-sm">
            <td className="pl-5 py-3 border-b border-primary">Job Position</td>
            <td className="py-3 border-b border-primary">Company</td>
            <td className="py-3 border-b border-primary">Location</td>
            <td className="py-3 border-b border-primary">Status</td>
            <td className="py-3 border-b border-primary">Date Saved</td>
            <td className="py-3 border-b border-primary">Date Applied</td>
            <td className="pl-5 py-3 border-b border-primary">Deadline</td>
          </tr>
        </thead>

        {
          jobTrackerStore.jobs.length > 0 && jobTrackerStore.jobs.map(job => (
            <tbody key={job.companyName}>
              <tr className="text-sm py-2">
                <td className="pl-5 py-3 border-b border-primary">{job.jobTitle}</td>
                <td className="py-3 border-b border-primary">{job.companyName}</td>
                <td className="py-3 border-b border-primary">{job.jobLocation}</td>
                <td className="py-3 border-b border-primary">{job.status}</td>
                <td className="py-3 border-b border-primary">{job.dateSaved}</td>
                <td className="py-3 border-b border-primary">{job.dateApplied}</td>
                <td className="pl-5 py-3 border-b border-primary">{job.deadline}</td>
              </tr>
            </tbody>
          ))
        }
      </table>

      {/* Tablet Job Table */}

      <table 
        className="font-jost w-[90%] order-separate border-spacing-0 rounded-lg overflow-hidden border 
        border-primary hidden sm:table md:hidden"
      >
        <thead>
          <tr className="bg-card font-semibold text-sm">
            <td className="pl-5 py-3 border-b border-primary">Job Position</td>
            <td className="py-3 border-b border-primary">Company</td>
            <td className="py-3 border-b border-primary">Location</td>
            <td className="py-3 border-b border-primary">Status</td>
          </tr>
        </thead>

        {
          jobTrackerStore.jobs.length > 0 && jobTrackerStore.jobs.map(job => (
            <tbody key={job.companyName}>
              <tr className="text-sm py-2">
                <td className="pl-5 py-3 border-b border-primary">{job.jobTitle}</td>
                <td className="py-3 border-b border-primary">{job.companyName}</td>
                <td className="py-3 border-b border-primary">{job.jobLocation}</td>
                <td className="py-3 border-b border-primary">{job.status}</td>
              </tr>
            </tbody>
          ))
        }
      </table>

      {/* Mobile Job Table */}

      <table 
        className="font-jost w-[90%] order-separate border-spacing-0 rounded-lg overflow-hidden border 
        border-primary table sm:hidden"
      >
        <thead>
          <tr className="bg-card font-semibold text-sm">
            <td className="pl-5 py-3 border-b border-primary">Job Position</td>
            <td className="py-3 border-b border-primary">Status</td>
          </tr>
        </thead>

        {
          jobTrackerStore.jobs.length > 0 && jobTrackerStore.jobs.map(job => (
            <tbody key={job.companyName}>
              <tr className="text-sm py-2">
                <td className="pl-5 py-3 border-b border-primary">{job.jobTitle}</td>
                <td className="py-3 border-b border-primary">{job.status}</td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </div>
  )
}

export default JobTable;