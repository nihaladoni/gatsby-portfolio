import React from "react"

import styled from "styled-components"

const StyledSplit = styled.section`
  display: flex;

  div {
    width: 50%;
  }
`

const SplitView = ({ children }) => {
  return <StyledSplit>{children}</StyledSplit>
}

export default SplitView
