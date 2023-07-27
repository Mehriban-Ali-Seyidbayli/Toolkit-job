import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/jobList";
import AddJobs from "./pages/addJobs";
import Header from "./components/Header";
import "./styles/style.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
