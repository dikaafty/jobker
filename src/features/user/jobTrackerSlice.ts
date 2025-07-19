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
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  }
});