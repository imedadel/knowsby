import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import NavBar from "./NavBar"
import Footer from "./Footer"

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
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: `inline-block`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            display: `inline-block`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <LayoutContainer>
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
