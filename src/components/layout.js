import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import NavBar from "./NavBar"
import Footer from "./Footer"
import SEO from "./seo"

// import siteConfig from "../../content/siteConfig/siteConfig"

import { rhythm, scale } from "../utils/typography"

const TopNav = styled.nav`
  float: right;
  display: block;
  text-align: center;
  padding: ${rhythm(1)} ${rhythm(1 / 2)};
`

const TopNavLink = styled(Link)`
  text-decoration: none;
  font-size: ${scale(1)};
  margin-right: ${rhythm(1)};

  &:last-child {
    margin-right: 0;
  }
`
const LayoutContainer = styled.div`
  ${tw`max-w-2xl m-auto pr-8`};
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // let fullTitle

    // if (location.pathname === rootPath) {
    //   fullTitle = siteConfig.siteTitle
    // } else {
    //   fullTitle = siteConfig.siteTitle
    // }
    return (
      <LayoutContainer>
        <SEO title={title} />
        <header>
          {/* {header}
          <TopNav>
            <TopNavLink to={`/`}>Home</TopNavLink>
            <TopNavLink to={`/contact`}>Contact</TopNavLink>
          </TopNav> */}
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
