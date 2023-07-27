

const AddJobs = () => {

    return (
        <section className="add-sec">
            <h2>Add New Job</h2>
            <div className="inputs">
                <div className="input-field">
                    <label>Position</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Company</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Location</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Status</label>
                    <select>
                        <option>Interview</option>
                        <option>Continue</option>
                        <option>Rejected</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Type</label>
                    <select>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Remote</option>
                    </select>
                </div>
                <button>Add</button>
            </div>

        </section>
    )
}

export default AddJobs;