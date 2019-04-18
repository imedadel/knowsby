import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import _ from "lodash"
import styled from "styled-components"
import tw from "tailwind.macro"

const StyledWrapper = styled.div`
  ${tw`mb-16 pl-8 w-2/5`};
`
const StyledHeading = styled.h2`
  ${tw`text-3xl mb-4`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`
const StyledTitle = styled.h3`
  ${tw`text-base  font-normal font-body leading-tight truncate max-w-xs w-auto mb-2`};
`

const Latest = ({ data }) => (
  <StyledWrapper>
    <StyledHeading>✨ Latest</StyledHeading>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <StyledTitle key={node.fields.slug}>
          <StyledLink to={node.fields.slug}>📝 {title}</StyledLink>
        </StyledTitle>
      )
    })}
  </StyledWrapper>
)

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
                description
              }
            }
          }
        }
      }
    `}
    render={data => <Latest data={data} {...props} />}
  />
)
