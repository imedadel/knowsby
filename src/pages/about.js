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
  <Layout location={`/about`}>
    <Helmet title={`About`} />
    <SEO title={`About`} />
    <StyledWrapper>
      <StyledName>About</StyledName>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
        vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc,
      </p>
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
