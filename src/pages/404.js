import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledTitle = styled.h1`
  ${tw`font-5xl pl-8 mb-4`};
`
const StyledParagraph = styled.p`
  ${tw`pl-8`};
`

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout>
        <SEO title="404: Not Found" />
        <StyledTitle>Not Found</StyledTitle>
        <StyledParagraph>
          You just hit a route that doesn&#39;t exist... the sadness.
        </StyledParagraph>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
