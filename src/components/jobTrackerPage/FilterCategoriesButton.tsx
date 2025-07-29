import { capitalize, cn } from "@/lib/utils";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { useEffect, useState } from "react";
import { setNumberOfItemsCategory, setActiveCategory } from "@/features/user/jobTrackerSlice";

const FilterCategoriesButton = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);
  const dispatch = useAppDispatch();
  const [ isFilteringId, setIsFilteringId ] = useState<number | null>(null);

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

  useEffect(() => {
    if(!isFilteringId) {
      dispatch(setActiveCategory("all"));
    }
  }, [isFilteringId]);

  useEffect(() => {
    for (let i = 0; i < jobTrackerStore.filterCategories.length; i++) {
      if(capitalize(jobTrackerStore.filterCategories[i].category) === jobTrackerStore.activeCategory) {
        setIsFilteringId(jobTrackerStore.filterCategories[i].id);
        break;
      } else {
        setIsFilteringId(null);
      }
    }
  }, [jobTrackerStore.activeCategory]);

  return (
    <div>
      {/* Desktop filter categories */}

      <div className="w-full hidden md:flex justify-center items-center gap-4 lg:gap-8 px-10 pt-5">
        {
          jobTrackerStore.filterCategories.map((filterCategory) => (
            <div 
              className={cn(
                "filter-category-button border-1 transition-colors duration-300",
                filterCategory.numberOfItems !== 0 
                ? "border-primary cursor-pointer hover:bg-secondary" 
                : "border-muted",
                isFilteringId === filterCategory.id || 
                capitalize(filterCategory.category) === jobTrackerStore.activeCategory 
                ? "bg-secondary" 
                : ""
              )}
              key={filterCategory.category}
              onClick={() => {
                if(filterCategory.numberOfItems > 0) {
                  setIsFilteringId(prev => prev !== filterCategory.id || !prev ? filterCategory.id : null);
                  dispatch(setActiveCategory(capitalize(filterCategory.category)));
                }
              }}
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
          value={jobTrackerStore.activeCategory}
          onChange={(e) => dispatch(setActiveCategory(e.target.value))}
        >
          <option value="all">All Applications</option>
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