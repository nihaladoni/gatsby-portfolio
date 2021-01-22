import React from "react"

import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import SplitView from "../components/SplitView"
import HeroLeft from "../components/HeroLeft"
import HeroRight from "../components/HeroRight"

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <SplitView>
        <HeroLeft>
          <h1>
            Hello,
            <br />
            I'm Nehal <br />
            <span>Web developer</span>
          </h1>
        </HeroLeft>
        <HeroRight>Hello</HeroRight>
      </SplitView>
    </Layout>
  )
}
