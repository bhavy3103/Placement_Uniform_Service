// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn.Jsx"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
