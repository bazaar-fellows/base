import React from "react"
import Auth from "../auth/auth";
import '../components/design/index.scss';
import '../components/design/dropdown.css';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

class ColorThemeButton extends React.Component{
  render(){
    return(
      <Auth capibility="update">
        <div className="dropdown">
          <button className="dropbtn">Change Theme</button>
          <div className="dropdown-content">
            <button onClick={() => this.props.darkTheme('dark')}>Dark</button>
            <button onClick={() => this.props.lightTheme('light')}>Light</button>
            <button onClick={() => this.props.colorTheme('color')}>Colorful</button>
          </div>
        </div>
      </Auth>
    );
  }
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

const mapDispatchToProps = (dispatch) => ({
  darkTheme: (color) => dispatch(actions.changeColorTheme(color)),
  lightTheme: (color) => dispatch(actions.changeColorTheme(color)),
  colorTheme: (color) => dispatch(actions.changeColorTheme(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorThemeButton);
