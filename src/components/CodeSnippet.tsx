import React, { useEffect } from "react"
import MarkdownIt from "markdown-it"
import Prism from "prismjs"

const md = new MarkdownIt({
  html: true,
  linkify: false,
})

const CodeSnippet = ({ markdown }): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
}

export default CodeSnippet
