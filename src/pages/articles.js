import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/main.scss"

const Articles = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log(posts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Coffee Roasts" />
      <h2>Articles</h2>
      {posts.map((post) => {
        return (<p><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></p>);
      })}
    </Layout>
  )
}

export default Articles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
