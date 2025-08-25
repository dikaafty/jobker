import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { setIsInfoOpen,  setSelectedJob } from "@/features/user/jobTrackerSlice";

const JobInfo = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();

  const camelCaseToTitleCase = (str: string): string => {
    const result = str.replace(/([A-Z])/g, " $1");

    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    jobTrackerStore.isInfoOpen && (
      <div
        className="w-screen h-screen fixed top-0 left-0 backdrop-blur-xs flex justify-center items-start z-60
          animate-fade-in overflow-y-auto py-7 scrollbar-style"
      >
        <div
          className="w-[90%] sm:w-130 bg-background px-5 py-6 border-1 border-muted rounded-xl font-jost
            animate-scale-up flex flex-col gap-5"
          data-testid="job info"
        >
          <div className="flex justify-between gap-4">
            <div>
              <h1 className="text-xl xs:text-2xl sm:text-3xl font-jost font-bold mb-1">
                {jobTrackerStore.selectedJob?.jobTitle}
              </h1>

              <p className="text-[10px] xs:text-sm sm:text-base flex gap-1">
                <span className="font-semibold">
                  {jobTrackerStore.selectedJob?.companyName}
                </span> 
                — 
                <span>
                  {jobTrackerStore.selectedJob?.jobLocation}
                </span>
              </p>
            </div>

            <X 
              size={19}
              className="cursor-pointer"
              onClick={() => {
                dispatch(setSelectedJob(null));
                dispatch(setIsInfoOpen());
              }}
            />
          </div>

          {
            jobTrackerStore.selectedJob?.jobUrl && (
              <div className="px-2 flex flex-col gap-1">
                <h2 className="text-sm sm:text-base font-semibold">
                  Job URL
                </h2>

                <a
                  href={jobTrackerStore.selectedJob?.jobUrl}
                  target="_blank"
                  className="text-xs sm:text-sm text-muted"
                >
                  {jobTrackerStore.selectedJob?.jobUrl}
                </a>
              </div>
            )
          }

          {
            jobTrackerStore.selectedJob && Object.entries(jobTrackerStore.selectedJob).map(([key, value]) => {
              if(
                  key !== "id" && key !== "jobTitle" && key !== "jobLocation" && 
                  key !== "jobUrl" && key !== "companyName" && key !== "jobDescription" && value
                ) {
                  return  <div className="px-2 flex flex-col gap-1" key={key}>
                            <h2 className="text-sm sm:text-base font-semibold">
                              {camelCaseToTitleCase(key)}
                            </h2>

                            <p className="text-xs sm:text-sm text-muted">
                              {value}
                            </p>
                          </div>
                }
            })
          }

          {
            jobTrackerStore.selectedJob?.jobDescription && (
              <div className="px-2 flex flex-col gap-1">
                <h2 className="text-sm sm:text-base font-semibold">
                  Job Description
                </h2>

                {
                  jobTrackerStore.selectedJob?.jobDescription.split("\n").map((line, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-muted mb-2">{line}</p>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    )
  )
}

export default JobInfo;