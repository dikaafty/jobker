import { useAppSelector } from "@/store/redux/hooks";

const JobTable = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  return (
    <div className="max-md:pl-4 flex md:justify-center">
      
    </div>
  )
}

export default JobTable;