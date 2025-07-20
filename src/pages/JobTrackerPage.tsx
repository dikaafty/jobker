import FilterCategoriesButton from "@/components/jobTrackerPage/FilterCategoriesButton";
import AddJobButton from "@/components/jobTrackerPage/AddJobButton";
import Dialog from "@/components/jobTrackerPage/Dialog";
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