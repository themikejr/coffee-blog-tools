import React from "react"
import { graphql } from "gatsby"

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
