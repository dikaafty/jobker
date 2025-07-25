import { useAppSelector } from "@/store/redux/hooks";

const JobTable = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  return (
    <div className="max-md:pl-4 flex md:justify-center pb-10 px-5">

      {/* Desktop Table */}

      <table 
        className="font-jost min-w-180 border-separate border-spacing-0 rounded-lg overflow-hidden border 
        border-primary hidden md:table"
      >
        <thead>
          <tr className="bg-card font-semibold text-sm">
            <td className="pl-5 py-3 border-b border-primary">Job Position</td>
            <td className="px-6 py-3 border-b border-primary">Company</td>
            <td className="px-6 py-3 border-b border-primary">Location</td>
            <td className="px-6 py-3 border-b border-primary">Status</td>
            <td className="px-6 py-3 border-b border-primary">Date Saved</td>
            <td className="px-6 py-3 border-b border-primary">Date Applied</td>
            <td className="pr-5 py-3 border-b border-primary">Deadline</td>
          </tr>
        </thead>

        <tbody>
        {
          jobTrackerStore.jobs.length > 0 && jobTrackerStore.jobs.map(job => (
              <tr className="text-sm">
                <td className="pl-5 py-3">{job.jobTitle}</td>
                <td className="px-6 py-3">{job.companyName}</td>
                <td className="px-6 py-3">{job.jobLocation}</td>
                <td className="px-6 py-3">{job.status}</td>
                <td className="px-6 py-3">{job.dateSaved}</td>
                <td className="px-6 py-3">{job.dateApplied}</td>
                <td className="pr-5 py-3">{job.deadline}</td>
              </tr>
          ))
        }
        </tbody>
      </table>

      {/* Tablet Job Table */}

      <table 
        className="font-jost w-full border-separate border-spacing-0 rounded-lg overflow-hidden border 
        border-primary hidden sm:table md:hidden"
      >
        <thead>
          <tr className="bg-card font-bold text-sm">
            <td className="pl-5 py-3 border-b border-primary">Job Position</td>
            <td className="py-3 border-b border-primary">Company</td>
            <td className="py-3 border-b border-primary">Location</td>
            <td className="pr-5 py-3 border-b border-primary">Status</td>
          </tr>
        </thead>

        <tbody>
        {
          jobTrackerStore.jobs.length > 0 && jobTrackerStore.jobs.map(job => (
            <tr className="text-sm py-2">
              <td className="pl-5 py-3 border-b border-primary">{job.jobTitle}</td>
              <td className="py-3 border-b border-primary">{job.companyName}</td>
              <td className="py-3 border-b border-primary">{job.jobLocation}</td>
              <td className="py-3 border-b border-primary">{job.status}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

      {/* Mobile Job Table */}

      <table 
        className="font-jost w-full border-separate border-spacing-0 rounded-lg overflow-hidden border 
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