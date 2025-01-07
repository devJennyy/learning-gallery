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
      <div className="max-w-[1440px] mx-auto w-full 2xl:px-16 xl:px-10 px-5">
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/task-one" element={<Task01 />} />
        </Routes>
      </div>
  </Router>
  )
}

export default App
