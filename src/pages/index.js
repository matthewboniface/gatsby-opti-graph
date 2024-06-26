// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the <Link target="_blank" to="https://www.gatsbyjs.com/docs/tutorial/getting-started/">Gatsby Tutorial</Link>.</p>
      <StaticImage
        alt="A Basenji outdoors"
        src="../images/Basenji.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage