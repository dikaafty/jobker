import { createSlice } from "@reduxjs/toolkit";

const jobTrackerSlice = createSlice({
  name: "jobTracker",
  initialState: {
    filterCategories: [
      { category: "BOOKMARKED", numberOfItems: 0 },
      { category: "APPLYING", numberOfItems: 0 },
      { category: "APPLIED", numberOfItems: 0 },
      { category: "INTERVIEWING", numberOfItems: 0 },
      { category: "NEGOTIATING", numberOfItems: 0 },
      { category: "ACCEPTED", numberOfItems: 0 },
    ],
    jobs: [
      {
        jobTitle: "Front-end Developer",
        jobUrl: "https://wellfound.com/role/r/front-end-developer",
        jobLocation: "Vienna, Austria",
        jobDescription: "",
        companyName: "Joro Comp.",
        status: "Bookmarked",
        dateSaved: new Date().toLocaleDateString("en-GB"),
        dateApplied: new Date().toLocaleDateString("en-GB"),
        deadline: ""
      }
    ],
    selectedJob: null,
    editedJob: null,
    jobTitle: "",
    jobUrl: "",
    jobLocation: "",
    jobDescription: "",
    companyName: "",
    isOpen: false
  },
  reducers: {
    setfilterCategories: (state, action) => {
      state.filterCategories = action.payload;
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
  }
});

export const {
  setfilterCategories, setSelectedJob, setEditedJob, setJobTitle, setJobUrl,
  setJobLocation, setJobDescription, setCompanyName, setIsOpen
} = jobTrackerSlice.actions;

export default jobTrackerSlice.reducer;