import FilterCategoriesButton from "@/components/jobTrackerPage/FilterCategoriesButton";
import AddJobButton from "@/components/jobTrackerPage/AddJobButton";
import Dialog from "@/components/jobTrackerPage/Dialog";
import JobTable from "@/components/jobTrackerPage/JobTable";
import JobInfo from "@/components/jobTrackerPage/JobInfo";
import { useState } from "react";
import transition from "@/lib/transition";

const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton />
      <AddJobButton />
      <Dialog />
      <JobTable />
      <JobInfo />
    </>
  )
}

const JobTrackerPageWithTransition = transition(JobTrackerPage);
export default JobTrackerPage;