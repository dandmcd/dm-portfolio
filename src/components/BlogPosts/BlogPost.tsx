import React, { memo } from "react"
import { Link, useStaticQuery } from "gatsby"

const BlogPost = ({ blog }) => {
  const { slug, title, image, updatedAt } = blog
  return (
    <div>
      <h2>{title}</h2>
      <h4>{updatedAt}</h4>
      <Link to={`/blog/${slug}`}>see more</Link>
    </div>
  )
}

export default memo(BlogPost)
