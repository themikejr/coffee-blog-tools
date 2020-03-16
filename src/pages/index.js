import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import RecentPosts from "../components/recentPosts"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/main.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <p>
        I roast, brew, and taste coffee for fun. Along with writing about coffee
        now and then, I'm slowly building an online &nbsp;
        <Link to={"/roasts"}>roast log</Link> &nbsp; to help track my
        progress and notice trends.
      </p>

      <Bio />

      <RecentPosts />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
