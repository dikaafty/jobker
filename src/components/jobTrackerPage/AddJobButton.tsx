import { setIsOpen } from "@/features/user/jobTrackerSlice";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { cn } from "@/lib/utils";

const AddJobButton = () => {
  const dispatch = useAppDispatch();
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  const filteredJobs = jobTrackerStore.jobs
  .filter(job => jobTrackerStore.activeCategory === "all" || job.status === jobTrackerStore.activeCategory);

  return (
    <div 
      className={cn(
        "w-full mt-6 md:my-8 max-md:pl-4 flex md:justify-center items-center",
        filteredJobs.length > 0 ? "mb-6" : "mb-0",
      )}>
      <button 
        className="secondary-button"
        onClick={() => dispatch(setIsOpen())}  
      >
        Add Job
      </button>
    </div>
  )
}

export default AddJobButton;