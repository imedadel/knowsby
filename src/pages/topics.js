import React from "react"
// import PropTypes from "prop-types"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

// Site Components
import Layout from "../components/layout"

// Styled Components
const StyledWrapper = styled.div`
  ${tw`full mb-8 pl-8`};
`
const StyledName = styled.h1`
  ${tw`text-5xl mb-4`};
`
const StyledTitle = styled.h3`
  ${tw`text-xl mb-4 font-normal font-body leading-normal truncate`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={`/topics`}>
    <Helmet title={title} />
    <SEO title={`Topics`} />
    <StyledWrapper>
      <StyledName>Topics</StyledName>
      {group.map(topic => (
        <StyledTitle key={topic.fieldValue}>
          <StyledLink to={`/topics/${kebabCase(topic.fieldValue)}/`}>
            {topic.fieldValue} ({topic.totalCount})
          </StyledLink>
        </StyledTitle>
      ))}
    </StyledWrapper>
  </Layout>
)

// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default TagsPage

export const pageQuery = graphql`
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
      }
    }
  }
`
