import { type FilterCategoriesInterface } from "@/interfaces/filterCategories";
import { cn } from "@/lib/utils";

interface FilterCategoriesButtonProps {
  filterCategories: FilterCategoriesInterface[],
}

const FilterCategoriesButton = ({ filterCategories }: FilterCategoriesButtonProps) => {
  return (
    <div>
      {/* Desktop filter categories */}

      <div className="w-full hidden md:flex justify-center items-center gap-4 lg:gap-8 px-10 pt-5">
        {
          filterCategories.map((filterCategory) => (
            <div 
              className={cn(
                "filter-category-button border-1 transition-colors duration-300",
                filterCategory.numberOfItems !== 0 
                ? "border-primary cursor-pointer hover:bg-secondary" 
                : "border-muted"
              )}
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
    </div>
  )
}

export default FilterCategoriesButton;