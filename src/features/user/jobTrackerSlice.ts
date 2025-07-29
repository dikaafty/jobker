import { createSlice } from "@reduxjs/toolkit";

type FilterCategory = {
  id: number,
  category: string,
  numberOfItems: number
}

type Job = {
  id: number,
  jobTitle: string,
  jobUrl: string,
  jobLocation: string,
  companyName: string,
  jobDescription: string,
  status: string,
  dateSaved: string,
  dateApplied?: string,
  deadline?: string
}

type InitialState = {
  filterCategories: FilterCategory[],
  jobs: Job[],
  selectedJob: Job | null,
  jobTitle: string,
  jobUrl: string,
  jobLocation: string,
  companyName: string,
  jobDescription: string,
  status: string,
  dateApplied: string,
  deadline: string,
  isOpen: boolean,
  activeCategory: string,
  isInfoOpen: boolean,
  isEditing: boolean,
}


const initialState: InitialState = {
  filterCategories: [
    { category: "BOOKMARKED", numberOfItems: 0 },
    { category: "APPLYING", numberOfItems: 0 },
    { category: "APPLIED", numberOfItems: 0 },
    { category: "INTERVIEWING", numberOfItems: 0 },
    { category: "NEGOTIATING", numberOfItems: 0 },
    { category: "ACCEPTED", numberOfItems: 0 },
  ],
  jobs: [],
  selectedJob: null,
  jobTitle: "",
  jobUrl: "",
  jobLocation: "",
  jobDescription: "",
  companyName: "",
  status: "Bookmarked",
  dateApplied: "",
  deadline: "",
  isOpen: false,
  activeCategory: "all",
  isInfoOpen: false,
  isEditing: false,
}

const jobTrackerSlice = createSlice({
  name: "jobTracker",
  initialState,
  reducers: {
    setfilterCategories: (state, action) => {
      state.filterCategories = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    editJob: (state, action) => {
      state.jobs[action.payload[0]] = action.payload[1];
    },
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setJobUrl: (state, action) => {
      state.jobUrl = action.payload;
    },
    setJobLocation: (state, action) => {
      state.jobLocation = action.payload;
    },
    setJobDescription: (state, action) => {
      state.jobDescription = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setDateApplied: (state, action) => {
      state.dateApplied = action.payload;
    },
    setDeadline: (state, action) => {
      state.deadline = action.payload;
    },
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setNumberOfItemsCategory: (state, action) => {
      state.filterCategories[action.payload[0]].numberOfItems = action.payload[1];
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setIsInfoOpen: (state) => {
      state.isInfoOpen = !state.isInfoOpen;
    },
    setIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  }
});

export const {
  setfilterCategories, setSelectedJob, setIsEditing, setJobTitle, setJobUrl,
  setJobLocation, setJobDescription, setCompanyName, setIsOpen, addJob, setJobs,
  setNumberOfItemsCategory, setStatus, setDateApplied, setDeadline, editJob,
  setActiveCategory, setIsInfoOpen
} = jobTrackerSlice.actions;

export default jobTrackerSlice.reducer;