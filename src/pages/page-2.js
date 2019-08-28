import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hello there!</h1>
    <p>email us at: yomama@hotmail.com</p>
    <p>Thank you!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default SecondPage
