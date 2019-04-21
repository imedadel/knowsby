import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Featured from "../components/Featured"
// import { rhythm } from "../utils/typography"
import Topics from "../components/Topics"
// import Latest from "../components/Latest"
import Prefooter from "../components/Prefooter"

//TODO: Style the article pages
//TODO: Add About page
//TODO: Add more styling for the homepage, or find something interesting to implement
//TODO: Make the fucking shit interesting and not boring
//TODO: Add topics pages and links

class ArticlesIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
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
  }
`
