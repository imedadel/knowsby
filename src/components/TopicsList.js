import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import { rhythm } from "../utils/typography"
import _ from "lodash"
import styled from "styled-components"
import tw from "tailwind.macro"

// const TopicWrapper = styled.div`
// //   ${tw`w-full md:w-1/2 lg:w-1/3 mb-8 pl-8`};
// `
const TopicsList = styled.div`
  ${tw`w-1/5`};
`
const TopicName = styled.div`
  ${tw`text-xl leading-normal`};
`
const Title = styled.h2`
  ${tw`text-3xl mb-4`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`
const Topics = ({ data }) => {
  let topics = []

  _.each(data.allMarkdownRemark.edges, edge => {
    if (_.get(edge, "node.frontmatter.topic")) {
      topics = topics.concat(edge.node.frontmatter.topic)
    }
  })

  topics = _.uniq(topics)
  return (
    <TopicsList>
      <Title>🗄️ Topics</Title>
      {topics.map(topic => (
        <TopicName>
          <StyledLink to={`topics/${_.kebabCase(topic)}`}>
            📁 {topic}
          </StyledLink>
        </TopicName>
      ))}
    </TopicsList>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                topic
              }
            }
          }
        }
      }
    `}
    render={data => <Topics data={data} {...props} />}
  />
)

/* Use this query instead!!!
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
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
  }
  */
