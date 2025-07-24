import { createSlice } from "@reduxjs/toolkit";

type FilterCategory = {
  category: string,
  numberOfItems: number
}

type Job = {
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
  editedJob: Job | null,
  jobTitle: string,
  jobUrl: string,
  jobLocation: string,
  companyName: string,
  jobDescription: string,
  status: string,
  dateApplied: string,
  deadline: string,
  isOpen: boolean,
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
  editedJob: null,
  jobTitle: "",
  jobUrl: "",
  jobLocation: "",
  jobDescription: "",
  companyName: "",
  isOpen: false
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
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    setEditedJob: (state, action) => {
      state.editedJob = action.payload;
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
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setNumberOfItemsCategory: (state, action) => {
      state.filterCategories[action.payload[0]].numberOfItems = action.payload[1];
    }
  }
});

export const {
  setfilterCategories, setSelectedJob, setEditedJob, setJobTitle, setJobUrl,
  setJobLocation, setJobDescription, setCompanyName, setIsOpen, addJob, setJobs,
  setNumberOfItemsCategory
} = jobTrackerSlice.actions;

export default jobTrackerSlice.reducer;