import FilterCategoriesButton from "@/components/jobTrackerPage/FilterCategoriesButton";
import AddJobButton from "@/components/jobTrackerPage/AddJobButton";
import Dialog from "@/components/jobTrackerPage/Dialog";
import JobTable from "@/components/jobTrackerPage/JobTable";
import { useState } from "react";

const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton />
      <AddJobButton />
      <Dialog />
    </>
  )
}

export default JobTrackerPage;