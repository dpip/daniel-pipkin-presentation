import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi ya'll</h1>
    <p>We're goin to touch briefly on three topics today:</p>
    <ul>
      <li>What is map()</li>
      <li>
        What is asynchronous programming and how does it play a role in
        Javascript?
      </li>
      <li>
        How could we efficiently render multiple items to the DOM using JS.
      </li>
    </ul>
    <Link to="/slide-1/">Let's get started!</Link> <br />
  </Layout>
)

export default IndexPage
