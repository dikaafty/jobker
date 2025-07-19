import { setIsOpen } from "@/features/user/jobTrackerSlice";
import { useAppDispatch } from "@/store/redux/hooks";

const AddJobButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full my-6 md:my-8 max-md:pl-4 flex md:justify-center items-center">
      <button className="secondary-button">
        Add Job
      </button>
    </div>
  )
}

export default AddJobButton;