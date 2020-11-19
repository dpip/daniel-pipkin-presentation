import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SlideOne = () => (
  <Layout>
    <h1>What is map?</h1>
    <br></br>
    <h3>
      The map() method creates a new array with the results of calling a
      function for every array element.{" "}
    </h3>
    <h3>
      Map applies a <strong>transformation</strong> to the element, so its
      callback function just takes the element itself (there are extra
      arguments, like the current index, in case you need them).
    </h3>
    <h3>
      So map's output is an array just as long as the original array, but where
      each element has been transformed from the original.
    </h3>
    <Link to="/">Back</Link>
    <Link to="/slide-2">Next</Link>
  </Layout>
)

export default SlideOne
