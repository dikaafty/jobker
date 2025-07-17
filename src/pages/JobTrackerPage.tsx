import FilterCategoriesButton from "@/components/FilterCategoriesButton";

interface FilterCategoriesInterface {
  category: string,
  numberOfItems: number,
}

const JobTrackerPage = () => {
  return (
    <>
      <FilterCategoriesButton />
    </>
  )
}

export default JobTrackerPage;