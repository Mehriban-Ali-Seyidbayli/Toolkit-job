import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddJobs = () => {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        id: Number(new Date().getTime()),
        position: "",
        company: "",
        location: "",
        status: "Interview",
        type: "Full Time",
        date: new Date().toLocaleDateString(),
    });

    const handleSubmit = () => {
        if (!formState.position || !formState.company || !formState.location) {
            toast.warn("You must fill the all fields!");

            return
        }
        axios.post("http://localhost:3004/jobs", formState)
            .then(() => navigate("/"))
    }

    return (
        <section className="add-sec">
            <h2>Add New Job</h2>
            <div className="inputs">
                <div className="input-field">
                    <label>Position</label>
                    <input type="text" onChange={(e) => { setFormState({ ...formState, position: e.target.value }) }} />
                </div>

                <div className="input-field">
                    <label>Company</label>
                    <input type="text"
                        onChange={(e) => { setFormState({ ...formState, company: e.target.value }) }} />
                </div>

                <div className="input-field">
                    <label>Location</label>
                    <input type="text"
                        onChange={(e) => { setFormState({ ...formState, location: e.target.value }) }} />
                </div>

                <div className="input-field">
                    <label>Status</label>
                    <select onChange={(e) => { setFormState({ ...formState, status: e.target.value }) }}>
                        <option value="Interview">Interview</option>
                        <option value="Continue">Continue</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Type</label>
                    <select onChange={(e) => { setFormState({ ...formState, type: e.target.value }) }}>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Add</button>
            </div>
            <ToastContainer />

        </section>
    )
}

export default AddJobs;