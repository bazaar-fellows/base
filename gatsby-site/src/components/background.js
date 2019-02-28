import React from 'react';
import {connect} from 'react-redux';
import './background.scss';

class Background extends React.Component{
  render(){
    {console.log('in background with ', this.props.colorTheme)}
    return(
        <div id="background" className={this.props.colorTheme}>       </div>
    )
  }
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

export default connect(
  mapStateToProps,
)(Background);
