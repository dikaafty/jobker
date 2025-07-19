import FilterCategoriesButton from "@/components/FilterCategoriesButton";
import { useState } from "react";
import { type FilterCategoriesInterface } from "@/interfaces/filterCategories";

const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton filterCategories={filterJobCategories} />
    </>
  )
}

export default JobTrackerPage;