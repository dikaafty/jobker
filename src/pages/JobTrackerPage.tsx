import FilterCategoriesButton from "@/components/FilterCategoriesButton";
import { useState } from "react";

interface FilterCategoriesInterface {
  category: string,
  numberOfItems: number,
}

const filterCategories: FilterCategoriesInterface[] = [
  { category: "BOOKMARK", numberOfItems: 0 },
  { category: "APPLYING", numberOfItems: 0 },
  { category: "APPLIED", numberOfItems: 0 },
  { category: "INTERVIEWING", numberOfItems: 0 },
  { category: "NEGOTIATING", numberOfItems: 0 },
  { category: "ACCEPTED", numberOfItems: 0 },
];


const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton />
    </>
  )
}

export default JobTrackerPage;