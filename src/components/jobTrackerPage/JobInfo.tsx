import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { setIsInfoOpen } from "@/features/user/jobTrackerSlice";

const JobInfo = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();

  return (
    <div>

    </div>
  )
}

export default JobInfo;