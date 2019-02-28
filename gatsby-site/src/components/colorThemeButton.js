import React from "react"
import Auth from "../auth/auth";
import '../pages/index.scss';
import './dropdown.css';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

class ColorThemeButton extends React.Component{
  render(){
    return(
      <body className={this.props.colorTheme}>
        <Auth capibility="update">
          <div class="dropdown">
            <button class="dropbtn">Change Theme</button>
            <div class="dropdown-content">
              <button onClick={() => this.darkTheme('dark')}>Dark</button>
              <button onClick={() => this.lightTheme('light')}>Light</button>
              <button onClick={() => this.colorTheme('color')}>Colorful</button>
            </div>
          </div>
        </Auth>
      </body>
    );
  }
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

const mapDispatchToProps = (dispatch, getState) => ({
  darkTheme: (color) => dispatch(actions.CHANGECOLORTHEME(color)),
  lightTheme: (color) => dispatch(actions.CHANGECOLORTHEME(color)),
  colorTheme: (color) => dispatch(actions.CHANGECOLORTHEME(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorThemeButton);
