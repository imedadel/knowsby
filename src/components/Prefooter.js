import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

import Featured from "./Featured"
import TopicsList from "./TopicsList"
import Latest from "./Latest"

const Wrapper = styled.div`
  ${tw`w-full flex justify-start mb-16 pl-8 pt-8 border-t border-b-0 border-r-0 border-l-0 border-solid border-grey-light`};
`

export default () => (
  <Wrapper>
    <TopicsList />
    <Featured />
    <Latest />
  </Wrapper>
)
