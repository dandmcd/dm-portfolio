import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPost from "../components/BlogPosts/BlogPost"
import ImageTesting from "../components/ImageTesting"

const Blog = ({ data }) => {
  return (
    <div>
      <div>
        <BlogPost />
      </div>
      <ImageTesting />
    </div>
  )
}

export default Blog
