
import React, { Component } from 'react'
import Auth from '../../auth/auth';
import Layout from '../../components/layout';
import { store } from '../index';
import { Provider } from "react-redux";
import Header from '../../components/header';

class LookBook extends Component {
    constructor(props){
        super(props);
        this.state={
            imgArr:[],
            url:'',
        }
    }

    addImage = e => {
        e.preventDefault();
        let url = e.target.value;
        this.setState({url});
        console.log('state after submit',this.state);

    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({imgArr: [...this.state.imgArr, this.state.url]})
    }

    clearImgArr=(e)=>{
        e.preventDefault();
        this.setState({imgArr: []});
    }

  render() {
      console.log('from render',this.state);
    return (
    <Provider store = {store} >
    <Layout>
      <div>
         <Auth capability="create">
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="lookbook image url" onChange={(e)=>this.addImage(e)} />
            </form>
            <button onClick={(e)=>this.clearImgArr(e)}>Clear Lookbook</button>
         </Auth> 
      </div>
    </Layout>
    </Provider>




  render() {
    return (
      <div>
        <h1>LookBook</h1>

      </div>
    )
  }
}


export default LookBook;


