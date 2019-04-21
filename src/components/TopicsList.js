import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"
import styled from "styled-components"
import tw from "tailwind.macro"

import siteConfig from "../../content/siteConfig/siteConfig"

const StyledList = styled.div`
  ${tw`w-1/5`};
`
const StyledName = styled.h3`
  ${tw`text-base  font-normal font-body leading-tight max-w-xs w-auto mb-2`};
`
const StyledTitle = styled.h2`
  ${tw`text-3xl mb-4`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`
const Topics = ({ data }) => {
  return (
    <StyledList>
      <StyledTitle>{siteConfig.pageLabels.topics}</StyledTitle>
      {data.allMarkdownRemark.group.map(topic => (
        <StyledName>
          <StyledLink to={`topics/${_.kebabCase(topic.fieldValue)}`}>
            📁 {topic.fieldValue} ({topic.totalCount})
          </StyledLink>
        </StyledName>
      ))}
    </StyledList>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___topic) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => <Topics data={data} {...props} />}
  />
)
