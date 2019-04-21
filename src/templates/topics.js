import React from "react"
// import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"

const StyledWrapper = styled.div`
  ${tw`full mb-8 pl-8`};
`
const StyledName = styled.h1`
  ${tw`text-3xl mb-4`};
`
const StyledTitle = styled.h3`
  ${tw`text-base mb-4 font-normal font-body leading-normal truncate`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`
const StyledAllTopics = styled(Link)`
  ${tw`no-underline text-grey-darkest hover:text-black text-lg hover:underline pl-8 mb-8 block`};
`

const Topics = ({ pageContext, data }) => {
  const { tpc } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const { edges, totalCount } = data.allMarkdownRemark
  const topicHeader = `${totalCount} article${
    totalCount === 1 ? "" : "s"
  } about “${tpc}”`

  return (
    <Layout>
      <SEO title={tpc} />
      <StyledWrapper>
        <StyledName>{topicHeader}</StyledName>

        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <div key={slug}>
              <StyledTitle>
                <StyledLink to={slug}>📝 {title}</StyledLink>
              </StyledTitle>
            </div>
          )
        })}
      </StyledWrapper>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <StyledAllTopics to="/topics">🗄️ All topics</StyledAllTopics>
    </Layout>
  )
}

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default Topics

export const pageQuery = graphql`
  query($tpc: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { topic: { in: [$tpc] } } }
    ) {
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
`
