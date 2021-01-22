import React from "react"

import styled, { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"

const GlobalStyles = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color:#E5E5E5;
}
`

const StyledLayout = styled.section`
  margin: 10px auto;
  /* background-color: slateblue; */
  max-width: 80vw;
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledLayout>{children}</StyledLayout>
    </div>
  )
}

export default Layout
