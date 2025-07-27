import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";

const JobInfo = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  return (
    <div>

    </div>
  )
}

export default JobInfo;