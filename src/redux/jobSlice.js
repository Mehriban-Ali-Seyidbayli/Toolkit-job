import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    filtredJobs: [],
    initialized: false
};

const jobSlice = createSlice({
    name: "jobSlice",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.filtredJobs = action.payload;
            state.initialized = true;
        },
        handleInputChange: (state, action) => {
            const filteredByQuery = state.jobs.filter((job) => {
                const selectedJob = job.company.toLowerCase();
                const query = action.payload.toLowerCase();

                return selectedJob.includes(query);
            });
            state.filtredJobs = filteredByQuery;
        },
        handleStatusChange: (state, action) => {
            const filtredByStatus = state.jobs.filter((job) => job.status === action.payload);
            state.filtredJobs = filtredByStatus;
        },
        handleSortChange: (state, action) => {
            switch (action.payload) {
                case "New":
                    state.filtredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case "Old":
                    state.filtredJobs.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
                    break;
                case "A-Z":
                    state.filtredJobs.sort((a, b) => {
                        if (a.company < b.company) return -1;
                        if (a.company > b.company) return 1;

                        return 0;
                    });
                    break;
                case "Z-A":
                    state.filtredJobs.sort((a, b) => {
                        if (a.company < b.company) return 1;
                        if (a.company > b.company) return -1;

                        return 0;
                    });
                    break;

                default:
                    break;
            }
        },
        handleReset: (state) => {
            state.filtredJobs = state.jobs;
        }
    },
});

export const { setJobs, handleInputChange, handleStatusChange, handleSortChange, handleReset } = jobSlice.actions;
export default jobSlice.reducer;