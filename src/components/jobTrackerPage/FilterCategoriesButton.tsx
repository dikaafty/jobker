import { cn } from "@/lib/utils";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { useEffect, useState } from "react";
import { setNumberOfItemsCategory } from "@/features/user/jobTrackerSlice";

const FilterCategoriesButton = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();
  const [ isFilteringIdx, setIsFilteringIdx ] = useState<number | null>(null);

  useEffect(() => {
    const countStatus = jobTrackerStore.jobs.reduce((res: { [key: string]: number }, job) => {
      if(!res[job.status]) {
        res[job.status] = 1;
      } else {
        res[job.status] = res[job.status] + 1;
      }

      return res;
    }, {});

    jobTrackerStore.filterCategories.forEach((filterCategory, idx) => {
      dispatch(setNumberOfItemsCategory([idx, 0]));
      
      for (const key in countStatus) {
        if(key.toLowerCase() === filterCategory.category.toLowerCase()) {
          dispatch(setNumberOfItemsCategory([idx, countStatus[key]]));
        }
      }
    });
  }, [jobTrackerStore.jobs]);

  return (
    <div>
      {/* Desktop filter categories */}

      <div className="w-full hidden md:flex justify-center items-center gap-4 lg:gap-8 px-10 pt-5">
        {
          jobTrackerStore.filterCategories.map((filterCategory, idx) => (
            <div 
              className={cn(
                "filter-category-button border-1 transition-colors duration-300",
                filterCategory.numberOfItems !== 0 
                ? "border-primary cursor-pointer hover:bg-secondary" 
                : "border-muted",
                isFilteringIdx === idx ? "bg-secondary" : ""
              )}
              key={filterCategory.category}
            >
              <p 
                className={cn(
                  "text-[10px] lg:text-xs font-jost font-medium tracking-wider",
                  filterCategory.numberOfItems === 0 
                  ? "text-muted" 
                  : "text-primary"
                )}
              >
                {filterCategory.category}
              </p>

              <p
                className={cn(
                  "text-base lg:text-lg font-jost font-medium",
                  filterCategory.numberOfItems === 0 
                  ? "text-muted"
                  : "text-primary"
                )}
              >
                {filterCategory.numberOfItems}
              </p>
            </div>
          ))
        }
      </div>

      {/* Mobile filter categories */}

      <div className="filter-category-select-wrapper relative w-fit pl-4 mt-2 block md:hidden">
        <select
          className="filter-category-select"
        >
          <option defaultValue="All Applications">All Applications</option>
          <option value="Bookmarked">Bookmarked</option>
          <option value="Applying">Applying</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Negotiating">Negotiating</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>
    </div>
  )
}

export default FilterCategoriesButton;