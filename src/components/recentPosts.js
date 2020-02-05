import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  const posts = data.allMarkdownRemark.edges

  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
      <article key={node.fields.slug}>
        <header>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    )
  })
}

const RecentPosts = () => {


  return (
    <>
      <h1>Recent Posts:</h1>
      <PostList />
    </>
  )
}

export default RecentPosts
