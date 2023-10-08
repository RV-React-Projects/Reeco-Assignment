import "./App.css"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import About from "./pages/Home"
import ErroePage from "./pages/ErrorPage"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route path="*" element={<ErroePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

function Layout() {
  return (
    <div>
      <Header />
      <div
      // style={{ padding: "0 5%" }}
      >
        <Outlet />
      </div>
    </div>
  )
}
