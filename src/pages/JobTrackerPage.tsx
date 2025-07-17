import FilterCategoriesButton from "@/components/FilterCategoriesButton";
import { useState } from "react";
import { type FilterCategoriesInterface } from "@/interfaces/filterCategories";

const filterCategories: FilterCategoriesInterface[] = [
  { category: "BOOKMARK", numberOfItems: 0 },
  { category: "APPLYING", numberOfItems: 0 },
  { category: "APPLIED", numberOfItems: 0 },
  { category: "INTERVIEWING", numberOfItems: 0 },
  { category: "NEGOTIATING", numberOfItems: 0 },
  { category: "ACCEPTED", numberOfItems: 0 },
];


const JobTrackerPage = () => {
  const [ filterJobCategories, setFilterJobCategories ] = useState<FilterCategoriesInterface[]>(filterCategories);

  return (
    <>
      <FilterCategoriesButton />
    </>
  )
}

export default JobTrackerPage;