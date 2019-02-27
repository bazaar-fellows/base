import './carsoul.scss';

import React from "react"
// import { Link } from "gatsby"
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo";

//wrapped everything in the store provider
import { Provider } from "react-redux";
import createStore from "../store/index.js"
const store = createStore();


import './carsoul.scss';
import './index.scss';

const IndexPage = () => (
  <Provider store={store}>

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Featured Products</h3>
    <div className='carsoul'>

      <input type="checkbox" class="faux-ui-facia" />
      <div class="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
        <img className='carsoulImg' src={img1} alt="Slide 3" />
      </div>


      <input type="checkbox" class="faux-ui-facia" />
      <div class="slide" slide="4" annot="This is the fourth slide title. Photo by Ryan Lum.">
        <img className='carsoulImg' src={img2} alt="Slide 2" />
      </div>

      <input type="checkbox" class="faux-ui-facia" />
      <div class="slide" slide="3" annot="This is the third slide title. Photo by Tomasz Paciorek.">
        <img className='carsoulImg' src={img3} alt="Slide 1" />
      </div>

      <div class="counter" count="3"> / 3</div>
    </div>
  </Layout>
  </Provider>

)

export default IndexPage
