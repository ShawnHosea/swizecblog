import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout";


const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/blog/">Go to Blog</Link>
  </Layout>
)

export default IndexPage