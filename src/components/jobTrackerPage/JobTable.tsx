import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { SquarePen } from "lucide-react";
import { setIsOpen, setSelectedJob, setIsInfoOpen, setIsEditing } from "@/features/user/jobTrackerSlice";

const JobTable = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();

  const filteredJobs = jobTrackerStore.jobs
  .filter(job => jobTrackerStore.activeCategory === "all" || job.status === jobTrackerStore.activeCategory);

  if(filteredJobs.length === 0) {
    return (
      <h1
        className="text-center font-jost font-semibold text-2xl md:text-4xl px-12 md:px-32 lg:px-60
        h-[calc(100vh-180px)] sm:h-[calc(100vh-184px)] md:h-[calc(100vh-234px)] flex justify-center items-center"
      >
        Your dashboard’s a bit lonely. Add your first job and get tracking!
      </h1>
    );
  }

  return (
    filteredJobs.length > 0 && (
      <div className="max-md:pl-4 flex md:justify-center pb-10 px-5">

        {/* Desktop Table */}

        <table 
          className="font-jost min-w-180 border-separate border-spacing-0 rounded-lg overflow-hidden border 
          border-primary hidden md:table"
        >
          <thead>
            <tr className="bg-card font-semibold text-sm">
              <td className="pl-5 py-3 border-b border-primary"></td>
              <td className="max-[835px]:px-3 px-6 py-3 border-b border-primary">Job Position</td>
              <td className="max-[835px]:px-3 px-6 py-3 border-b border-primary">Company</td>
              <td className="max-[835px]:px-3 px-6 py-3 border-b border-primary">Location</td>
              <td className="max-[835px]:px-3 px-6 py-3 border-b border-primary">Status</td>
              <td className="max-[835px]:px-3 px-6 py-3 border-b border-primary">Date Saved</td>
              <td className="max-[835px]:px-3 px-6 py-3 border-b border-primary">Date Applied</td>
              <td className="pr-5 py-3 border-b border-primary">Deadline</td>
            </tr>
          </thead>

          <tbody>
          {
            filteredJobs.length > 0 && filteredJobs.map(job => (
                <tr 
                  className="text-sm transition-colors duration-300 hover:bg-secondary"
                  key={job.id}  
                  onClick={() => {
                    dispatch(setSelectedJob(job));
                    dispatch(setIsInfoOpen());
                  }}
                >
                  <td className="pl-5 py-3">
                    <SquarePen 
                      size={16} 
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();

                        dispatch(setIsOpen());
                        dispatch(setIsEditing());
                        dispatch(setSelectedJob(job));
                      }}
                      role="button"
                      aria-label="edit"
                    />
                  </td>
                  <td className="max-[835px]:px-3 px-6 py-3">{job.jobTitle}</td>
                  <td className="max-[835px]:px-3 px-6 py-3">{job.companyName}</td>
                  <td className="max-[835px]:px-3 px-6 py-3">{job.jobLocation}</td>
                  <td className="max-[835px]:px-3 px-6 py-3">{job.status}</td>
                  <td className="max-[835px]:px-3 px-6 py-3">{job.dateSaved}</td>
                  <td className="max-[835px]:px-3 px-6 py-3">{job.dateApplied}</td>
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
              <td className="pl-5 py-3 border-b border-primary"></td>
              <td className="py-3 border-b border-primary">Job Position</td>
              <td className="py-3 border-b border-primary">Company</td>
              <td className="py-3 border-b border-primary">Location</td>
              <td className="pr-5 py-3 border-b border-primary">Status</td>
            </tr>
          </thead>

          <tbody>
          {
            filteredJobs.length > 0 && filteredJobs.map(job => (
              <tr 
                className="text-sm py-2 transition-colors duration-300 hover:bg-secondary"
                key={job.id}
                onClick={() => {
                  dispatch(setSelectedJob(job));
                  dispatch(setIsInfoOpen());
                }}
              >
                <td className="pl-5 pr-1 py-3">
                  <SquarePen 
                    size={16} 
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();

                      dispatch(setIsOpen());
                      dispatch(setIsEditing());
                      dispatch(setSelectedJob(job));
                    }}
                    role="button"
                    aria-label="edit"
                  />
                </td>
                <td className="py-3">{job.jobTitle}</td>
                <td className="py-3">{job.companyName}</td>
                <td className="py-3">{job.jobLocation}</td>
                <td className="py-3">{job.status}</td>
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
              <td className="pl-5 py-3 border-b border-primary"></td>
              <td className="py-3 border-b border-primary">Job Position</td>
              <td className="py-3 border-b border-primary">Status</td>
            </tr>
          </thead>

          <tbody>
          {
            filteredJobs.length > 0 && filteredJobs.map(job => (
              <tr 
                className="text-sm py-2 transition-colors duration-300 hover:bg-secondary"
                key={job.id}
                onClick={() => {
                  dispatch(setSelectedJob(job));
                  dispatch(setIsInfoOpen());
                }}
              >
                <td className="pl-5 py-3">
                  <SquarePen 
                    size={16} 
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();

                      dispatch(setIsOpen());
                      dispatch(setIsEditing());
                      dispatch(setSelectedJob(job));
                    }}
                    role="button"
                    aria-label="edit"
                  />
                </td>
                <td className="py-3">{job.jobTitle}</td>
                <td className="py-3">{job.status}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    )
  )
}

export default JobTable;