import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import promiseexample from "../images/promiseexample.png"

const SlideFour = () => (
  <Layout>
    <h1>It'll render - I promise()</h1>
    <h3>
      Originally, we would use callbacks - so we'd say "hey browser, please do
      this work, and when you're done, here's a function you can call with the
      results".
    </h3>
    <h3>
      The problem with callbacks is that we often have to do a few things in the
      background (asynchronously), so the code starts to get difficult to
      understand, with many layers of nested callbacks.
    </h3>
    <img src={promiseexample}></img>
    <br></br>
    <Link to="/slide-3">Back</Link>
    <Link to="/slide-5">Next</Link>
  </Layout>
)

export default SlideFour
