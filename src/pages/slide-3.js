import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SlideThree = () => {
  return (
    <Layout>
      <h1>
        What is asynchronous programming and how does it play a role in
        Javascript?
      </h1>
      <h3>
        JavaScript, by design, is not multithreaded. So unlike your operating
        system, it can't do two things at once.
      </h3>
      <h3>
        There are times we need to wait for stuff to come back from the server.
        In this case, JavaScript can ask the browser to do the work and be
        notified when that work is done.
      </h3>

      <h3>
        This is asynchronous programming - having something done in the
        background and getting notified when it's done.
      </h3>
      <br></br>
      <br></br>
      <Link to="/slide-2">Prev</Link>
      <Link to="/slide-4">Next</Link>
    </Layout>
  )
}

export default SlideThree
