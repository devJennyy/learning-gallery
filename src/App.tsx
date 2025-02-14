import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import './styles/App.css';
import Homepage from "./pages/Homepage";
import Task01 from "./pages/Tasks/Task01";
import Task02 from "./pages/Tasks/Task02";
import Task03 from "./pages/Tasks/Task03";
import Task04 from "./pages/Tasks/Task04";
import Task05 from "./pages/Tasks/Task05";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/task-one" element={<Task01 />} />
        <Route path="/task-two" element={<Task02 />} />
        <Route path="/task-three" element={<Task03 />} />
        <Route path="/task-four" element={<Task04 />} />
        <Route path="/task-five" element={<Task05 />} />
      </Routes>
    </Router>
  );
}

export default App;
