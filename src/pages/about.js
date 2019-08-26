import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
    <Layout>
      <SEO title="About" />
      <div class="about">
      <h1>About us</h1>
      <p>We are the woooorld</p>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    </Layout>
  )
  
  export default AboutPage