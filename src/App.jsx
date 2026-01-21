import { Routes, Route } from "react-router-dom"
import Intro from "./pages/Intro/Intro"
import Home from "./pages/Home/Home"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Home" element={<Home />} />
       </Routes>
    </>
  )
}

export default App



// https://meowfacts.herokuapp.com/?count=50

// https://api.thecatapi.com/v1/images/search