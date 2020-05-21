import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error404 = () => {
  return (
    <div>
      <SEO
        title="Error"
        description="You landed on a page that doesn't exist"
      />
      404 - <Link to="/">Go home</Link>
    </div>
  )
}

export default Error404
