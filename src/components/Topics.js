import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const StyledWrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 mb-8 pl-8`};
`
const StyledList = styled.div`
  ${tw`flex justify-start w-full mb-16 flex-wrap`};
`
const StyledName = styled.h2`
  ${tw`text-3xl mb-4`};
`
const StyledTitle = styled.h3`
  ${tw`text-base font-normal font-body leading-tight truncate max-w-xs w-auto mb-2`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`
const Topics = ({ data }) => {
  return (
    <StyledList>
      {data.allMarkdownRemark.group.map(topic => (
        <StyledWrapper>
          <StyledName>{topic.fieldValue}</StyledName>
          {topic.edges.map(edge => {
            const title = edge.node.frontmatter.title || edge.node.fields.slug
            return (
              <StyledTitle key={edge.node.fields.slug}>
                <StyledLink to={edge.node.fields.slug}>
                  <span role="img" aria-label="Memo">
                    📝
                  </span>{" "}
                  {title}
                </StyledLink>
              </StyledTitle>
            )
          })}
        </StyledWrapper>
      ))}
    </StyledList>
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
