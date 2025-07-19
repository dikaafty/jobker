import FilterCategoriesButton from "@/components/FilterCategoriesButton";
import { useState } from "react";

const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton filterCategories={filterJobCategories} />
    </>
  )
}

export default JobTrackerPage;