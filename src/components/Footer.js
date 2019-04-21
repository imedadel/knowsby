import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import siteConfig from "../../content/siteConfig/siteConfig"

const Wrapper = styled.nav`
  ${tw`flex justify-between flex-wrap bg-transparent pb-16 pt-8 w-full align-middle self-center border-t border-b-0 border-r-0 border-l-0 border-solid border-grey-light pl-8`};
`
const CopyrightsContainer = styled.div`
  ${tw`flex items-center flex-no-shrink text-black mr-8`};
`
const CopyrightsText = styled.h2`
  ${tw`font-black text-sm tracking-normal`};
`
const MenuContainer = styled.div`
  ${tw`w-full block flex-shrink sm:flex sm:items-center sm:w-auto text-sm`};
`
const MenuLink = styled(Link)`
  ${tw`block mt-4 sm:inline-block sm:mt-0 text-grey-darkest no-underline hover:underline mr-4`};
`
const MenuHref = styled.a`
  ${tw`block mt-4 sm:inline-block sm:mt-0 text-grey-darkest no-underline hover:underline mr-4`};
`

export default () => (
  <Wrapper>
    <MenuContainer>
      <MenuLink to={`/`}>Home</MenuLink>
      {siteConfig.navbarLinks.map(e => (
        <MenuHref href={e.link}>{e.label}</MenuHref>
      ))}
    </MenuContainer>
    <CopyrightsContainer>
      <CopyrightsText>© {siteConfig.siteTitleAlt}</CopyrightsText>
    </CopyrightsContainer>
  </Wrapper>
)
