import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  setJobTitle, setJobUrl, setJobLocation, setJobDescription, setCompanyName, 
  setIsOpen, addJob, setJobs, setStatus, setDateApplied, setDeadline, setSelectedJob
} from "@/features/user/jobTrackerSlice";
import { capitalize } from "@/lib/utils";

type NewJob = {
  id: number,
  jobTitle: string,
  jobUrl: string,
  jobLocation: string,
  companyName: string,
  jobDescription: string,
  status: string,
  dateSaved: string,
  dateApplied: string,
  deadline: string
}

const Dialog = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();
  const [ loaded, setLoaded ] = useState(false);

  let id = 0;

  const resetJobStatesValue = (): void => {
    dispatch(setJobTitle(""));
    dispatch(setJobUrl(""));
    dispatch(setJobLocation(""));
    dispatch(setCompanyName(""));
    dispatch(setJobDescription(""));
    dispatch(setStatus("Bookmarked"));
    dispatch(setDateApplied(""));
    dispatch(setDeadline(""));
    dispatch(setSelectedJob(null));
  }

  const getNewJobId = (): number => {
    if(!jobTrackerStore.jobs || jobTrackerStore.jobs.length === 0) {
      return 1;
    }

    const maxId = Math.max(...jobTrackerStore.jobs.map(job => Number(job.id)));
    return maxId + 1;
  }

  const newJob: NewJob = {
    id: id++,
    jobTitle: jobTrackerStore.jobTitle,
    jobUrl: jobTrackerStore.jobUrl,
    jobLocation: jobTrackerStore.jobLocation,
    companyName: jobTrackerStore.companyName,
    jobDescription: jobTrackerStore.jobDescription,
    status: jobTrackerStore.status,
    dateSaved: new Date().toLocaleDateString("en-GB"),
    dateApplied: jobTrackerStore.dateApplied,
    deadline: jobTrackerStore.deadline
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

  useEffect(() => {
    if(jobTrackerStore.selectedJob) {
      dispatch(setJobTitle(jobTrackerStore.selectedJob.jobTitle));
      dispatch(setJobUrl(jobTrackerStore.selectedJob.jobUrl));
      dispatch(setJobLocation(jobTrackerStore.selectedJob.jobLocation));
      dispatch(setCompanyName(jobTrackerStore.selectedJob.companyName));
      dispatch(setStatus(jobTrackerStore.selectedJob.status));
      dispatch(setDateApplied(jobTrackerStore.selectedJob.dateApplied));
      dispatch(setDeadline(jobTrackerStore.selectedJob.deadline));
      dispatch(setJobDescription(jobTrackerStore.selectedJob.jobDescription));
    } else {
      dispatch(setJobTitle(""));
      dispatch(setJobUrl(""));
      dispatch(setJobLocation(""));
      dispatch(setCompanyName(""));
      dispatch(setStatus("Bookmarked"));
      dispatch(setDateApplied(""));
      dispatch(setDeadline(""));
      dispatch(setJobDescription(""));
    }
  }, [jobTrackerStore.isOpen]);

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
                htmlFor="status"
                className="dialog-label"
              >
                Status
                <span 
                  className="text-xs sm:text-sm text-red-800 ml-1" 
                  title="required field sign"
                >
                  *
                </span>
              </label>
              <div className="relative filter-category-select-wrapper">
                <select
                  id="status"
                  className="dialog-select w-full"
                  value={jobTrackerStore.selectedJob?.status}
                  onChange={(e) => dispatch(setStatus(e.target.value))}
                >
                  {
                    jobTrackerStore.filterCategories.map(filterCategory => (
                      <option
                        value={capitalize(filterCategory.category)}
                        key={filterCategory.category}
                      >
                        {capitalize(filterCategory.category)}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>

            {
              (jobTrackerStore.status !== "Bookmarked" && jobTrackerStore.status !== "Applying") && 
                <div className="form-wrapper">
                  <label
                    htmlFor="date-applied"
                    className="dialog-label"
                  >
                    Date Applied
                  </label>
                  <input
                    type="date"
                    id="date-applied"
                    className="dialog-input"
                    value={jobTrackerStore.dateApplied}
                    onChange={(e) => dispatch(setDateApplied((e.target as HTMLInputElement).value))}
                  />
              </div>
            }

            <div className="form-wrapper">
              <label
                htmlFor="deadline"
                className="dialog-label"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                className="dialog-input"
                value={jobTrackerStore.deadline}
                onChange={(e) => dispatch(setDeadline((e.target as HTMLInputElement).value))}
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