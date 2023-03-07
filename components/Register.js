import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../actions/userAction';
//import user from './user.json';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            registerData:{
                userName:'',
                mobileNumber:'',
                address:'',
                password:'',
                confirmPassword:''
            }
        }
    }
    handleChange=(event)=>{
        const { registerData } = this.state;
        registerData[event.target.name] = event.target.value;
        this.setState({ registerData });
    }
    clickEvent=(event)=>{
        event.preventDefault();
        const { registerData } = this.state;
        console.log(registerData);
        this.props.action.registerData(this.state.registerData);
    }
    render(){
        return(
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
                                <td><label className="label">Mobile No</label></td>
                                <td><input type="number" name="mobileNumber" placeholder="Enter Mobile number..." required onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label className="label">Address</label></td>
                                <td><input type="text" name="address" placeholder="Enter Address..." required onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label className="label">Password</label></td>
                                <td><input type="password" name="password" placeholder="Enter Password..." required onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label className="label">Confirm Password</label></td>
                                <td><input type="password" name="confirmPassword" placeholder="Enter Confirm Password..." required onChange={this.handleChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={this.clickEvent}>Register</button>
                </div>
                </form>
                <div>
                    <i>Please.<Link to="/Login">Login<br /></Link></i>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
     //   register: state.register
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(userAction, dispatch),
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);