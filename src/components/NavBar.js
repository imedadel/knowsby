import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const NavBar = styled.nav`
  ${tw`flex justify-between flex-wrap bg-transparent pb-32 pt-16 w-full align-middle self-center pl-8`};
`
const NavBar_TitleContainer = styled.div`
  ${tw`flex items-center flex-no-shrink text-black mr-8`};
`
const NavBar_TitleText = styled.h2`
  ${tw`font-black text-5xl tracking-normal`};
`
const NavBar_MenuContainer = styled.div`
  ${tw`w-full block flex-shrink sm:flex sm:items-center sm:w-auto text-base`};
`
const NavBar_MenuLink = styled(Link)`
  ${tw`block mt-4 sm:inline-block sm:mt-0 text-grey-darkest no-underline hover:underline mr-4`};
`

export default () => (
  <NavBar>
    <NavBar_TitleContainer>
      <NavBar_TitleText>Knowsby</NavBar_TitleText>
    </NavBar_TitleContainer>
    <NavBar_MenuContainer>
      <NavBar_MenuLink to={`/`}>Home</NavBar_MenuLink>
      <NavBar_MenuLink to={`/about`}>About</NavBar_MenuLink>
      <NavBar_MenuLink to={`/contact`}>Contact</NavBar_MenuLink>
    </NavBar_MenuContainer>
  </NavBar>
)
