import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { setIsInfoOpen } from "@/features/user/jobTrackerSlice";

const JobInfo = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();

  const camelCaseToTitleCase = (str: string): string => {
    const result = str.replace(/([A-Z])/g, " $1");

    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div>

    </div>
  )
}

export default JobInfo;