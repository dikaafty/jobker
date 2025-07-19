import FilterCategoriesButton from "@/components/FilterCategoriesButton";
import AddJobButton from "@/components/AddJobButton";
import { useState } from "react";

const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton />
      <AddJobButton />
    </>
  )
}

export default JobTrackerPage;