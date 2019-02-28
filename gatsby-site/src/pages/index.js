import React from "react"
import Auth from "../auth/auth";
import './carsoul.scss';
import './index.scss';
import { Link } from "gatsby"
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo";
import '../components/dropdown.css';
import { Provider } from "react-redux";
import createStore from "../store/index.js"
export const store = createStore();



class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      colorTheme:'light'
    }
  }

  darkTheme = () => {
    this.setState({ colorTheme: 'dark' })
    console.log('in the dark theme with state ', this.state.colorTheme);
  }
  
  lightTheme = () => {
    this.setState({ colorTheme: 'light' })
  }
  
  colorTheme = () => {
    this.setState({ colorTheme: 'color' })
  }

  render(){
    return(
      <body className={this.state.colorTheme}>
    
      <Provider store = {store}>
      <Layout colorTheme={this.state.colorTheme}>

        <Auth capibility="update">
          <div class="dropdown">
            <button class="dropbtn">Change Theme</button>
            <div class="dropdown-content">
              <button onClick={() => this.darkTheme()}>Dark</button>
              <button onClick={() => this.lightTheme()}>Light</button>
              <button onClick={() => this.colorTheme()}>Colorful</button>
            </div>
          </div>
        </Auth>

        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h3 className={this.state.colorTheme}><Link to="/products">Shop Products</Link></h3>
        <div classNameName='carsoul'>
    
          <input type="checkbox" className="faux-ui-facia" />
          <div className="slide" slide="5" annot="This is the fifth slide title. Photo by David Marcu.">
            <img classNameName='carsoulImg' src={img1} alt="Slide 3" />
          </div>
    
    
          <input type="checkbox" className="faux-ui-facia" />
          <div className="slide" slide="4" annot="This is the fourth slide title. Photo by Ryan Lum.">
            <img classNameName='carsoulImg' src={img2} alt="Slide 2" />
          </div>
    
          <input type="checkbox" className="faux-ui-facia" />
          <div className="slide" slide="3" annot="This is the third slide title. Photo by Tomasz Paciorek.">
            <img classNameName='carsoulImg' src={img3} alt="Slide 1" />
          </div>
    
          <div className="counter" count="3"> / 3</div>
        </div>
    
      </Layout>
      </Provider>
      </body>
    )
  }
}

export default IndexPage
