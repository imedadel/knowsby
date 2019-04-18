import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import { rhythm } from "../utils/typography"
import _ from "lodash"
import styled from "styled-components"
import tw from "tailwind.macro"

const TopicWrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 mb-8 pl-8`};
`
const TopicsList = styled.div`
  ${tw`flex justify-start w-full mb-16 flex-wrap`};
`
const TopicName = styled.h2`
  ${tw`text-3xl mb-4`};
`
const TopicTitle = styled.h3`
  ${tw`text-base font-normal font-body leading-tight truncate max-w-xs w-auto mb-2`};
`
const TopicLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`
const Topics = ({ data }) => {
  return (
    <TopicsList>
      {data.allMarkdownRemark.group.map(topic => (
        <TopicWrapper>
          <TopicName>{topic.fieldValue}</TopicName>
          {topic.edges.map(edge => {
            const title = edge.node.frontmatter.title || edge.node.fields.slug
            return (
              <TopicTitle key={edge.node.fields.slug}>
                <TopicLink to={edge.node.fields.slug}>📝 {title}</TopicLink>
              </TopicTitle>
            )
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
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
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
    `}
    render={data => <Topics data={data} {...props} />}
  />
)
