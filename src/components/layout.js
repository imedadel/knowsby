import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import NavBar from "./NavBar"
import Footer from "./Footer"
// import SEO from "./seo"

// import siteConfig from "../../content/siteConfig/siteConfig"

// import { rhythm, scale } from "../utils/typography"

const LayoutContainer = styled.div`
  ${tw`max-w-2xl m-auto pr-8 text-black`};
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <LayoutContainer>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </LayoutContainer>
    )
  }
}

export default Layout
