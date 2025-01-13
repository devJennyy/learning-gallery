import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate, } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage'
import Task01 from './pages/Tasks/Task01'
import Task02 from './pages/Tasks/Task02'

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/task-one" element={<Task01 />} />
          <Route path="/task-two" element={<Task02 />} />
        </Routes>
  </Router>
  )
}

export default App
