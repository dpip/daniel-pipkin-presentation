import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Button from "../components/Button"

const cardData = [
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "Button text",
      url: "",
    },
  },
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "Explore",
      url: "",
    },
  },
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "learn more",
      url: "",
    },
  },
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "find out",
      url: "",
    },
  },
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "view",
      url: "",
    },
  },
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "press",
      url: "",
    },
  },
  {
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "A random image from picsum",
    },
    title: "card",
    body:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    cta: {
      text: "click",
      url: "",
    },
  },
]

const SlideSix = () => {
  return (
    <Layout>
      <h1>Lets render to the DOM</h1>
      <div className={"card-wrapper"}></div>
      <Link to="/slide-5">Back</Link>
      <Link to="/slide-7">Next</Link>
    </Layout>
  )
}

export default SlideSix
