import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

import Featured from "./Featured"
import TopicsList from "./TopicsList"
import Latest from "./Latest"

const Wrapper = styled.div`
  ${tw`w-full flex justify-start mb-16`};
`

export default () => (
  <Wrapper>
    <TopicsList />
    <Featured />
    <Latest />
  </Wrapper>
)
