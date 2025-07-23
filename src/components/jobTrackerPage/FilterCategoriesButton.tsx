import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/redux/hooks";

const FilterCategoriesButton = () => {
  const jobTrackerStore = useAppSelector(state => state.jobTracker);

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
                : "border-muted"
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