import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  ${tw`pl-8 text-5xl`};
`
const Content = styled.div`
  ${tw`pl-8`};
`

class ArticleTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Title>{post.frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
