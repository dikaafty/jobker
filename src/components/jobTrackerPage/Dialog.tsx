import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  setJobTitle, setJobUrl, setJobLocation, setJobDescription, setCompanyName, 
  setIsOpen, addJob, setJobs, setStatus, setDateApplied, setDeadline
} from "@/features/user/jobTrackerSlice";
import { capitalize } from "@/lib/utils";

const Dialog = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();
  const [ loaded, setLoaded ] = useState(false);

  const resetJobStatesValue = (): void => {
    dispatch(setJobTitle(""));
    dispatch(setJobUrl(""));
    dispatch(setJobLocation(""));
    dispatch(setCompanyName(""));
    dispatch(setJobDescription(""));
  }

  const newJob = {
    jobTitle: jobTrackerStore.jobTitle,
    jobUrl: jobTrackerStore.jobUrl,
    jobLocation: jobTrackerStore.jobLocation,
    companyName: jobTrackerStore.companyName,
    jobDescription: jobTrackerStore.jobDescription,
    status: "Bookmarked",
    dateSaved: new Date().toLocaleDateString("en-GB"),
  }

  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");

    if(savedJobs) dispatch(setJobs(JSON.parse(savedJobs)));

    setLoaded(true);
  }, []);

  useEffect(() => {
    if(!loaded) return;

    localStorage.setItem("jobs", JSON.stringify(jobTrackerStore.jobs));
  }, [jobTrackerStore.jobs]);

  return (
    jobTrackerStore.isOpen && (
      <div 
        className="w-screen h-screen fixed top-0 left-0 backdrop-blur-xs flex justify-center items-start z-60
        animate-fade-in overflow-y-auto py-7 scrollbar-style"
      >
        <div
          className="w-[90%] sm:w-106 bg-background px-5 pt-4 pb-5.5 border-1 border-muted rounded-xl font-jost
          animate-scale-up"
        >
          <h1 className="text-lg font-bold max-sm:text-center">
            Add new job
          </h1>
          <div className="flex flex-col gap-4 my-2.5">
            <div className="form-wrapper">
              <label
                htmlFor="job-title"
                className="dialog-label"
              >
                Job Title
                <span 
                  className="text-xs sm:text-sm text-red-800 ml-1" 
                  title="required field sign"
                >
                  *
                </span>
              </label>
              <input
                type="text"
                id="job-title"
                className="dialog-input"
                value={jobTrackerStore.jobTitle}
                onChange={(e) => dispatch(setJobTitle((e.target as HTMLInputElement).value))}
              />
            </div>

            <div className="form-wrapper">
              <label
                htmlFor="job-url"
                className="dialog-label"
              >
                Job Url
                <span 
                  className="text-xs sm:text-sm text-red-800 ml-1" 
                  title="required field sign"
                >
                  *
                </span>
              </label>
              <input
                type="url"
                id="job-url"
                className="dialog-input"
                value={jobTrackerStore.jobUrl}
                onChange={(e) => dispatch(setJobUrl((e.target as HTMLInputElement).value))}
              />
            </div>

            <div className="form-wrapper">
              <label
                htmlFor="job-location"
                className="dialog-label"
              >
                Job Location
                <span 
                  className="text-xs sm:text-sm text-red-800 ml-1" 
                  title="required field sign"
                >
                  *
                </span>
              </label>
              <input
                type="text"
                id="job-location"
                className="dialog-input"
                value={jobTrackerStore.jobLocation}
                onChange={(e) => dispatch(setJobLocation((e.target as HTMLInputElement).value))}
              />
            </div>

            <div className="form-wrapper">
              <label
                htmlFor="company-name"
                className="dialog-label"
              >
                Company Name
                <span 
                  className="text-xs sm:text-sm text-red-800 ml-1" 
                  title="required field sign"
                >
                  *
                </span>
              </label>
              <input
                type="text"
                id="company-name"
                className="dialog-input"
                value={jobTrackerStore.companyName}
                onChange={(e) => dispatch(setCompanyName((e.target as HTMLInputElement).value))}
              />
            </div>

            <div className="form-wrapper">
              <label
                htmlFor="job-description"
                className="dialog-label"
              >
                Job Description
              </label>
              <textarea
                id="job-description"
                className="dialog-input h-40"
                value={jobTrackerStore.jobDescription}
                onChange={(e) => dispatch(setJobDescription((e.target as HTMLTextAreaElement).value))}
              />
            </div>
          </div>
          <div className="flex max-sm:flex-col-reverse justify-end gap-2 mt-4">
            <button 
              className="secondary-button py-2 sm:py-1.5 rounded-lg"
              onClick={() => {
                dispatch(setIsOpen());
                resetJobStatesValue();
              }}
            >
              Cancel
            </button>
            <button 
              className="primary-button py-2 sm:py-1.5 rounded-lg"
              onClick={() => {
                if(
                  jobTrackerStore.jobTitle && jobTrackerStore.jobUrl &&
                  jobTrackerStore.jobLocation && jobTrackerStore.companyName
                ) {
                  dispatch(addJob(newJob));
                  resetJobStatesValue();
                  dispatch(setIsOpen());
                }
              }}
            >
              Save Job
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default Dialog;