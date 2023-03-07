import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelAction from '../actions/hotelAction';
import img2 from '../images/img2.jpg';
import {Link} from 'react-router-dom';

class MyBookingPage extends Component{
    constructor(props){
        super(props);
        this.state={
            myBookings:[{
                hotelName:'',
                address:'',
                fromDate:'',
                toDate:'',
                acOrNonAc:'',
                roomPrice:'',
                NoOfGuest:'',
            }]
        }
    }
    componentWillReceiveProps(nextProps){
        // const{bookings}=this.state;
        // console.log("nextProps",nextProps);
         this.setState({myBookings:nextProps.book});
        // console.log(bookings,'ICWRP');
     }
     componentDidMount(){
       //  const{myBookings}=this.state;
       //  console.log("in did mount", this.props.cart);
         this.setState({ myBookings: this.props.book});
     //   console.log(bookings,'in componentDidMount');
     }
     cancelEvent=(item)=>{
        this.props.action.cancelEvent(item.hotelName);
     }
    render(){
        return(
            <div>
                <Link to="/HomePage" >HOME</Link>
                {/* <img src={img2} width="150px" height="150px" alt=""/>
                <i> HoteName : </i> {this.state.hotelName}
                <i> Address : </i> {this.state.address} */}
                <table align="center" className="table table-hover container">
                    <tbody>
                        {this.state.myBookings.map((item,i) => {
                            return(
                                <tr key={i}>
                                <td><img src={img2} width="150px" height="150px" alt=""/></td>
                                <td> {item.hotelName}<br/>{item.address}</td>
                                <td>{item.fromDate}<br/>{item.toDate}</td>
                                <td> {item.acOrNonAc}</td>
                                <td> {item.roomPrice}</td>
                                <td> {item.NoOfGuest}</td>
                                <td><button className=" btn btn-info" onClick ={()=>{this.cancelEvent(item)}}>Cancel</button></td>
                                </tr>
                               )})}
                            </tbody>
                    </table>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        book: state.book,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(hotelAction, dispatch),
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps) (MyBookingPage);
//export default MyBookingPage;