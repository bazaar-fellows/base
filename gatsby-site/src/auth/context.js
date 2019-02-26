import React from "react";
import cookie from "react-cookies";

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    const cookieToken = cookie.load("auth");
    console.log('cookie Token ', cookieToken)
    const token = cookieToken || null;
    
    this.state = {
      loggedIn: !!token,
      token: token,
      login: this.login,
      logout: this.logout
    };

    //console.log('cookie token ', token);
  }

  setLoginState = loggedIn => {
    let token = cookie.load("auth");
    this.setState({ loggedIn, token });
  };

  login = token => {
    cookie.save("auth", token);
    this.setLoginState(true);
  };

  logout = () => {
    cookie.remove("auth");
    this.setLoginState(false);
  };

  render() {
    //console.log('cookie token ', cookieToken);
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
