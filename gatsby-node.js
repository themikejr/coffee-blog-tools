const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createBlogPosts = async (createPage, graphql) => {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

const createCoffeeRoasts = async (createPage, graphql) => {
  const coffeeRoast = path.resolve(`./src/templates/coffee-roast.js`)
  const result = await graphql(
    `query {
      allRoastsJson {
       edges {
         node {
           id
         }
       }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allRoastsJson.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.id,
      component: coffeeRoast,
      context: {
        roastId: post.node.id
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createBlogPosts(createPage, graphql)
  await createCoffeeRoasts(createPage, graphql)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
