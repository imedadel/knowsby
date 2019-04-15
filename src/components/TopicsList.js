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
  ${tw`flex justify-start w-full flex-wrap`};
`
const TopicName = styled.h2`
  ${tw`text-xl leading-normal`};
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
      {topics.map(topic => (
        <TopicName>{topic}</TopicName>
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
