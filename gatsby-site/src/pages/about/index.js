import React, { Component } from 'react';
import '../../components/design/about.scss';
import Auth from '../../auth/auth';
import Layout from '../../components/layout';
import { store } from '../index';
import { Provider } from "react-redux";
import Background from '../../components/background';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
        about:'',
        url: '',
        content: '',
        image: '',
    }
}

addAbout = e => {
    e.preventDefault();
    let content = e.target.value;
    this.setState({content});
    console.log('state after submit',this.state);
}

handleAboutSubmit = e =>{
    e.preventDefault();
    this.setState({about: this.state.content})
}

clearAbout=(e)=>{
    e.preventDefault();
    this.setState({about: ''});
}

addImg = e => {
  e.preventDefault();
  let url = e.target.value;
  this.setState({url});
  console.log('state after submit',this.state);
}

handleImgSubmit = e => {
  e.preventDefault();
  this.setState({image: this.state.url});
  console.log('state after submit',this.state);
}


clearImg=(e)=>{
  e.preventDefault();
  this.setState({image: ''});
}

render() {
  console.log('from render',this.state);
return (
<Provider store = {store} >
<Layout>
<Background />
  <div>
     <Auth capability="create">
        <form onSubmit={this.handleAboutSubmit}>
            <input type="text" placeholder="Tell your customers about your store" onChange={(e)=>this.addAbout(e)} />
        </form>
        <form onSubmit={this.handleImgSubmit}>
            <input type="text" placeholder="Add an image" onChange={(e)=>this.addImg(e)}/>
        </form>
        <button onClick={(e)=>this.clearAbout(e)}>Clear About Content</button>
        <button onClick={(e)=>this.clearImg(e)}>Clear Image</button>

        <div className='contentContainer'>
          <img alt='about image' src={this.state.image} style={{ width: "700px", height: '500px' }}/>
          
        </div>

        <p>{this.state.about}</p>

        

     </Auth> 
  </div>
</Layout>
</Provider>
)
}
}

export default About;