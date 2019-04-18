import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const Wrapper = styled.nav`
  ${tw`flex justify-between flex-wrap bg-transparent pb-32 pt-16 w-full align-middle self-center pl-8`};
`
const TitleContainer = styled.div`
  ${tw`flex items-center flex-no-shrink text-black mr-8`};
`
const TitleText = styled.h2`
  ${tw`font-black text-5xl tracking-normal`};
`
const MenuContainer = styled.div`
  ${tw`w-full block flex-shrink sm:flex sm:items-center sm:w-auto text-base`};
`
const MenuLink = styled(Link)`
  ${tw`block mt-4 sm:inline-block sm:mt-0 text-grey-darkest no-underline hover:underline mr-4`};
`
const MenuHref = styled.a`
  ${tw`block mt-4 sm:inline-block sm:mt-0 text-grey-darkest no-underline hover:underline mr-4`};
`

export default () => (
  <Wrapper>
    <TitleContainer>
      <TitleText>Knowsby</TitleText>
    </TitleContainer>
    <MenuContainer>
      <MenuLink to={`/`}>Home</MenuLink>
      <MenuHref href={`https://imedadel.me`}>About</MenuHref>
      <MenuHref href={`https://imedadel.me`}>Contact</MenuHref>
    </MenuContainer>
  </Wrapper>
)
