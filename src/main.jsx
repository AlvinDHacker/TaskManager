// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react"
import ReactDOM from "react-dom/client"
import {
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import MainLayout from "./components/MainLayout"
import Homepage from "./pages/Homepage"
import Scheduler from "./pages/Scheduler"
import Calendar from "./pages/Calendar"
import Results from "./pages/Results"
import About from "./pages/About"


import "./index.css"

const router = createBrowserRouter(createRoutesFromChildren(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Homepage />} />
      <Route path="scheduler" element={<Scheduler />} />
      <Route path="calendar" element={<Calendar />} /> 
      <Route path="results" element={<Results />} />
      <Route path="about" element={<About />} />
    </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
