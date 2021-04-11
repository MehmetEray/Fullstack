import React, { Component } from "react";

import Login from "./Login";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginscreen: [],
            loginmessage: "",
            studentbuttonLabel: "Register as Student",
            teacherbuttonLabel: "Register as Teacher",
            isLogin: true,
        };
    }
    componentWillMount() {
        var loginscreen = [];
        loginscreen.push(
            <Login
                parentContext={this}
                appContext={this.props.appContext}
                key={"LoginScreen"}
            />
        );
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
        });
    }
    handleClick(event, userRole) {
        console.log("event", userRole);
        var loginmessage;
        if (this.state.isLogin) {
            let loginscreen = [];
            loginmessage = "Already registered.Go to Login";

            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                isLogin: false,
            });
        } else {
            let loginscreen = [];
            loginscreen.push(
                <Login
                    parentContext={this}
                    appContext={this.props.appContext}
                    role={userRole}
                />
            );
            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                isLogin: true,
            });
        }
    }
    render() {
        return (
            <div className="loginscreen" key="loginscreen">
                {this.state.loginscreen}
                <div>{this.state.loginmessage}</div>
            </div>
        );
    }
}

export default LoginScreen;
