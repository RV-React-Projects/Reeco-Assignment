import React from "react"
import { Link } from "react-router-dom"
import "../scss/Errorpage.scss"

export default function ErrorPage() {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="back-link">
          Go Back to Home
        </Link>
      </div>
    </div>
  )
}
