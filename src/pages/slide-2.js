import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SlideTwo = () => {
  return (
    <Layout>
      <h1>What is map() - Examples</h1>

      {/* example one */}
      <h3>
        Let's say you're grading students on their homework assignments and the
        grades are as follows:
      </h3>
      <ul>
        <li>75</li>
        <li>80</li>
        <li>63</li>
        <li>95</li>
      </ul>
      {/* example two  */}
      <h3>
        Oops! We forgot to add student names to those scores. We should do that.
        Our students are:
      </h3>
      <ul>
        <li>Daniel</li> <li>John</li> <li>Samantha</li> <li>Rachel</li>
      </ul>
      {/* example 3  */}
      <h3>
        Then you realize that test was a little tougher than it should've been
        and should curve things a bit...it is the holidays, right?
      </h3>
      <p>- Let's add a 10 point curve:</p>

      <Link to="/slide-1">Back</Link>
      <Link to="/slide-3">Next</Link>
    </Layout>
  )
}

export default SlideTwo
