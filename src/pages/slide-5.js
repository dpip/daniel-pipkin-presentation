import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import buzzer from "../images/buzzer.png"

const SlideFive = () => {
  return (
    <Layout>
      <h1>Promise analogy and Async example</h1>
      <h3>
        When you go to a restaurant, the hostess gives you a buzzer for your
        table. When the table is ready, the buzzer buzzes. You respond by
        sitting at the table.
      </h3>
      <h3>
        The buzzer is a promise. It buzzes when the promise resolves, or is
        ready. The buzz is your handler.
      </h3>
      <img alt={""} src={buzzer}></img>

      <br />

      <Link to="/slide-4">Back</Link>
      <Link to="/slide-6">Next</Link>
    </Layout>
  )
}

export default SlideFive
