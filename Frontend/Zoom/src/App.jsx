import "./App.css"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import LandingPage from "./pages/landing"
import Authentication from "./pages/authentication"
import SignIn from "./pages/signUp"


function App() {

  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Auth" element={<Authentication/>}/>
          <Route path="/Sign" element={<SignIn/>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App
