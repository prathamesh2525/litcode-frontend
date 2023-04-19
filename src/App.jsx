import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Problems } from "./pages/Problems"
import { Problem } from "./pages/Problem"
import { Signup } from "./pages/Signup"

function App() {
  return (
    <div className="h-auto bg-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="problems" element={<Problems />}></Route>
          <Route path="problems/:id" element={<Problem />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
