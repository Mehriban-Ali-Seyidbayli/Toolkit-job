import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/jobSlice";
import Filter from "../components/Filter";

const JobList = () => {

    const state = useSelector((state) => state.jobSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3004/jobs")
            .then((res) => dispatch(setJobs(res.data)));
    }, [])

    return (
        <>
            <Filter />
            <h3 className="job-count">{state.filtredJobs.length} results</h3>
            <section className="list-section">
                {
                    !state.initialized ? (<p>Loading...</p>) : (
                        state.filtredJobs.map((job) => (
                            <div className="job-card" key={job.id}>
                                <div className="head">
                                    <div className="letter"><p>{job.company[0]}</p></div>
                                    <div className="info">
                                        <p>{job.position}</p>
                                        <p>{job.company}</p>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="field">
                                        <img src="/images/map.png" alt="" />
                                        <p>{job.location}</p>
                                    </div>
                                    <div className="field">
                                        <img src="/images/calendar.png" alt="" />
                                        <p>{job.date}</p>
                                    </div>
                                    <div className="field">
                                        <img src="/images/bag.png" alt="" />
                                        <p>{job.type}</p>
                                    </div>
                                    <div className=" status">
                                        <p className={job.status}>{job.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }

            </section>
        </>
    )
}

export default JobList;