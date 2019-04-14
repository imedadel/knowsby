import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const Footer = styled.nav`
  ${tw`flex justify-between flex-wrap bg-transparent pb-16 pt-8 w-full align-middle self-center border-t border-b-0 border-r-0 border-l-0 border-solid border-grey-light pl-8`};
`
const Footer__CopyrightsContainer = styled.div`
  ${tw`flex items-center flex-no-shrink text-black mr-8`};
`
const Footer__CopyrightsText = styled.h2`
  ${tw`font-black text-sm tracking-normal`};
`
const Footer__MenuContainer = styled.div`
  ${tw`w-full block flex-shrink sm:flex sm:items-center sm:w-auto text-sm`};
`
const Footer__MenuLink = styled(Link)`
  ${tw`block mt-4 sm:inline-block sm:mt-0 text-grey-darkest no-underline hover:underline mr-4`};
`

export default () => (
  <Footer>
    <Footer__MenuContainer>
      <Footer__MenuLink to={`/`}>Home</Footer__MenuLink>
      <Footer__MenuLink to={`/about`}>About</Footer__MenuLink>
      <Footer__MenuLink to={`/contact`}>Contact</Footer__MenuLink>
    </Footer__MenuContainer>
    <Footer__CopyrightsContainer>
      <Footer__CopyrightsText>© Knowsby</Footer__CopyrightsText>
    </Footer__CopyrightsContainer>
  </Footer>
)
