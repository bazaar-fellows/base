import React from "react"
import LogInForm from '../auth/loginForm';
import Layout from "../components/layout";
import SEO from "../components/seo";
import './loginPage.scss';

const IndexPage = () => (
  <Layout>
      <SEO title="LogIn" keywords={[`gatsby`, `application`, `react`]} />
      <div className="login">
        <h1>Log In</h1>
        <LogInForm/>
      </div>
  </Layout>
)

export default IndexPage
