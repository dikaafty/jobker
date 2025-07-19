import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  setJobTitle, setJobUrl, setJobLocation, setJobDescription, setCompanyName, setIsOpen
} from "@/features/user/jobTrackerSlice";

const Dialog = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

  return (
    <div>
      
    </div>
  )
}

export default Dialog;