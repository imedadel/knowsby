import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Featured from "../components/Featured"
import { rhythm } from "../utils/typography"
import Topics from "../components/Topics"
// import Latest from "../components/Latest"
import Prefooter from "../components/Prefooter"

//TODO: Style the article pages
//TODO: Add About page
//TODO: Add more styling for the homepage, or find something interesting to implement
//TODO: Make the fucking shit interesting and not boring

class ArticlesIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All articles"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <Bio /> */}
        {/* <Featured /> */}
        <Topics />
        <Prefooter />
        {/* <Latest /> */}
        {/* <Footer /> */}
      </Layout>
    )
  }
}

export default ArticlesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
            topic
            featured
          }
        }
      }
    }
  }
`
