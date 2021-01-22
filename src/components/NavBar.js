import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  a {
    text-decoration: none;
    margin: 2px 15px;
  }
`
const NavBar = () => {
  return (
    <StyledNav>
      <Link to="#home">Home</Link>
      <Link to="#works">Works</Link>
      <Link to="#contact">Contact</Link>
    </StyledNav>
  )
}

export default NavBar
