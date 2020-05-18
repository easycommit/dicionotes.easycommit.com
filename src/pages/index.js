import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-page">
        <Logo />
        <p>Coming soon</p>
      </div>
    </Layout>
  )
}

export default IndexPage
