import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Topics from "../components/Topics"
import Prefooter from "../components/Prefooter"

class ArticlesIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Topics />
        <Prefooter />
      </Layout>
    )
  }
}

export default ArticlesIndex
