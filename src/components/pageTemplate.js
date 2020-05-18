import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Logo from "../components/logo"

const Page = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />

      <div className="page">
        <div className="blog-post">
          <Logo />

          <h2>{frontmatter.title}</h2>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

export default Page
