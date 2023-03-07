import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
//import * as userAction from '../actions/userAction';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginData:{
                userName:'',
                password:''
            },
        }
    }
    handleChange=(event)=>{
        const { loginData } = this.state;
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });
    }
    clickEvent=(event)=>{
        console.log(this.props)
        console.log(this.props.register[0].userName);
        console.log(this.state.loginData.userName);
        event.preventDefault();
        if(this.props.register[0].userName===this.state.loginData.userName){
            alert("Your a Valid User")
            this.props.history.push('./HomePage');
        }else{
            alert("Invalid User");
        }
    }
    render() {
        return (
            <div>
                <h4> Login Page</h4>
                <form className="container">
                    <table align="center" className="table table-hover">
                        <tbody>
                            <tr>
                                <td><label className="label">UserName</label></td>
                                <td><input type="text" name="userName" placeholder="Enter Name..." required onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label className="label">Password</label></td>
                                <td><input type="password" name="password" placeholder="Enter Password..." required onChange={this.handleChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={ this.clickEvent}>Login</button>
                </form>
                <div>
                    <i> if your a new user please.<Link to="/Register">Register<br /></Link></i>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state,'///////////////////////////////////////////');
    return {
        register: state.register
    }
}

export default connect(mapStateToProps)(Login);


