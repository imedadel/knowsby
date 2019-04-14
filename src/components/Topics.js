import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import _ from "lodash"
import styled from "styled-components"
import tw from "tailwind.macro"

const TopicWrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 mb-8 pr-4`};
`
const TopicsList = styled.div`
  ${tw`flex justify-start w-full mb-16 flex-wrap`};
`
const TopicName = styled.h2`
  ${tw`text-3xl mb-4`};
`
const TopicTitle = styled.h3`
  ${tw`text-base mb-4 font-normal font-body leading-normal truncate`};
`
const TopicLink = styled(Link)`
  ${tw`no-underline text-grey-darkest hover:underline`};
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
        <TopicWrapper>
          <TopicName>{topic}</TopicName>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            if (node.frontmatter.topic === topic) {
              return (
                <div key={node.fields.slug}>
                  <TopicTitle>
                    <TopicLink to={node.fields.slug}>📝 {title}</TopicLink>
                  </TopicTitle>
                  {/* <small>{node.frontmatter.date}</small> */}
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  /> */}
                </div>
              )
            }
          })}
        </TopicWrapper>
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
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                featured
                description
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
