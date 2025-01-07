import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate, } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage'
import Task01 from './pages/Tasks/Task01'

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/task-one" element={<Task01 />} />
        </Routes>
  </Router>
  )
}

export default App
