import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as hotelAction from '../actions/hotelAction';

class BookingPage extends Component{
    constructor(props){
        super(props);
        this.state={
            bookNowData:{
            fromDate:'',
            toDate:'',
            acOrNonAc:'',
            roomPrice:'',
            NoOfGuest:'',
            hotelName:props.match.params.hotelNameParam,
            ratings:props.match.params.ratingsParam,
            address:props.match.params.addressParam

        }}
    }
    handleChange=(event)=>{
        const {bookNowData}=this.state;
        bookNowData[event.target.name]=event.target.value;
        this.setState({bookNowData});
    }
    bookNow=(event)=>{
        event.preventDefault();
        this.props.action.bookNow(this.state.bookNowData);
        alert("Booked successfully");
        console.log(this.state.bookNowData);
    }
    cancelBooking=()=>{
        this.props.history.push('./HomePage');
    }
    render(){
        return(
            <div>
                <Link to="/HomePage">HOME</Link>
                <form className="container">
                <h4>Booking Page</h4>
                    <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td><label className="label">FromDate</label></td>
                            <td><input  type="date" name="fromDate"  onChange={this.handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label className="label">ToDate</label></td>
                            <td><input  type="date" name="toDate"  onChange={this.handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label className="label">ACorNonAC</label></td>
                            <td><input  type="radio" name="acOrNonAc"  onChange={this.handleChange} value="ac"/>
                                <label>AC</label>
                                <input  type="radio" name="acOrNonAc"  onChange={this.handleChange} value="nonac"/>
                                <label>NonAC</label>
                            </td>
                        </tr>
                        <tr>
                            <td><label className="label">RoomPrice</label></td>
                            <td><input type="number" name="roomPrice" placeholder="Enter RoomPrice..."  onChange={this.handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label className="label">NoOfGuest</label></td>
                            <td><input type="number" name="NoOfGuest" placeholder="Enter no of guest ..."  onChange={this.handleChange} required/></td>
                        </tr>
                        <tr>
                        <td><button className="btn btn-primary" type="button" onClick ={this.bookNow}> BookNow</button></td>
                        <td><button className="btn btn-primary" type="button" onClick={this.cancelBooking} >Cancel Booking</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>                       
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        book: state.book
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(hotelAction, dispatch),
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(BookingPage);
