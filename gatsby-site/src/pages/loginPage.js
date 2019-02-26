import React from "react"
import LogInForm from '../auth/loginForm';
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
      <SEO title="LogIn" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Log In</h1>
      <LogInForm/>
  </Layout>
)

export default IndexPage
