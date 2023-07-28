import { useDispatch } from "react-redux";
import { handleInputChange, handleStatusChange, handleSortChange, handleReset } from "../redux/jobSlice";

const Filter = () => {

    const dispatch = useDispatch();

    const onSearchchange = (e) => {
        dispatch(handleInputChange(e.target.value));

    };

    const onStatusChange = (e) => {
        dispatch(handleStatusChange(e.target.value));
    };

    const onSortChange = (e) => {
        dispatch(handleSortChange(e.target.value));
    };

    const onResetButton = () => {
        dispatch(handleReset());
    }

    return (
        <section className="filter-sec add-sec">
            <h2>Search Form</h2>
            <div className="inputs">
                <div className="input-field">
                    <label>Company Name</label>
                    <input type="text" onChange={(e) => onSearchchange(e)} />
                </div>

                <div className="input-field">
                    <label>Status</label>
                    <select onChange={(e) => onStatusChange(e)}>
                        <option value="All" hidden>All</option>
                        <option value="Interview">Interview</option>
                        <option value="Continue">Continue</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Sort</label>
                    <select onChange={(e) => onSortChange(e)}>
                        <option value="New">New</option>
                        <option value="Old">Old</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
                <button onClick={onResetButton}>Clear Filters</button>
            </div>
        </section>
    )
}

export default Filter;