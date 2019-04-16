const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const article = path.resolve(`./src/templates/article.js`)
  const topics = path.resolve(`./src/templates/topics.js`)
  return graphql(
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
                topic
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create article pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: article,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    let topicsList = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.topic")) {
        topicsList = topicsList.concat(edge.node.frontmatter.topic)
      }
    })
    // Eliminate duplicate tags
    topicsList = _.uniq(topicsList)

    // Make tag pages
    topicsList.forEach(tpc => {
      createPage({
        path: `/topics/${_.kebabCase(tpc)}/`,
        component: topics,
        context: {
          tpc,
        },
      })
    })

    return null
  })
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
