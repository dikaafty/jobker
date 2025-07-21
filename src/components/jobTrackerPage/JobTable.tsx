import { useAppSelector } from "@/store/redux/hooks";

const JobTable = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  return (
    <div>
      
    </div>
  )
}

export default JobTable;