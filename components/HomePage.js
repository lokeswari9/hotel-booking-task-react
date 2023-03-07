import React,{Component} from 'react';
import home from './home.json';
import img2 from '../images/img2.jpg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelAction from '../actions/hotelAction';

class HomePage extends Component{
    constructor(){
        super();
        this.state={
            homePage:[],
            form:{
                city:'',
                price:'',
                ratings:''
            },
            searching:[]
        }
    }
    componentDidMount(){
        this.setState({homePage: home,searching:this.props.search})
    }
    componentWillReceiveProps(nextProps) {
        const {searching} =this.state;
        this.setState({ searching: nextProps.search });
    }

    searchChange=(event)=>{
        const { form } = this.state;
        form[event.target.name] = event.target.value;
        this.setState({ form });
    }

    searchEvent=(event)=>{
        event.preventDefault();
        const { form } = this.state;
        this.state.homePage.map((item, index) => {
            if((form.city.trim().toLowerCase()) === (item.city.trim().toLowerCase())
           ) {
                return (
                    this.props.action.searchItem(item)
                )
            }
        })  
    }
    myBooking=()=>{
        this.props.history.push('./MyBookingPage');
    }
    viewDetails=(list)=>{
        this.props.history.push('./ViewDetails/'+list.hotelName+'/'+list.address);
        this.props.action.viewDetails(list);
    }
    bookNow=(list)=>{
        this.props.history.push('./BookingPage/'+list.hotelName+'/'+list.address);
    }
    render(){
        var hotels;
        if (this.state.searching.length === 0) {
             hotels=this.state.homePage;
            }
        else {
            hotels = this.state.searching;
        }
        return(
            <div>
               <div className="justified">
                <input type="text" name="city" placeholder="search for Area..." 
                onChange={this.searchChange}/>
                Price: <input type="number" name="price" onChange={this.searchChange}/>
                <label className="label">Rating</label>
                <select name="ratings" className="btn btn-primary dropdown-toggle">
                    <option value="5" onChange={this.searchChange}  >5</option>
                    <option value="4" onChange={this.searchChange}  >4</option>
                    <option value="3" onChange={this.searchChange} >3</option>
                    <option value="2" onChange={this.searchChange} >2</option>
                    <option value="1" onChange={this.searchChange} >1</option>
                </select>
                <button   className=" btn btn-info" type="submit" onClick={this.searchEvent}>Search</button><br/>
            </div>
            <div>
                <button className="btn btn-primary " onClick={()=>{this.myBooking()}} type="submit">MyBooking</button><br/>
            </div>
                <table align="center" className="table table-hover container">
                    <tbody>
                        {hotels.map((item,i) =>{
                            return(
                                 <tr key={i}>
                                <td> <img src={img2} width="150px" height="150px" alt=""/></td>
                                 <td><br/><br/>{item.hotelName}<br/>Rating :{item.rating}<br/>{item.address},{item.city}</td>
                                 <td><button  className=" btn btn-info" onClick ={()=>{this.viewDetails(item)}} >ViewDetails</button><br/><br/>
                                 <button  className=" btn btn-info" onClick ={()=>{this.bookNow(item)}} >bookNow</button></td>
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
        view: state.view,
       search: state.search
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(hotelAction, dispatch),
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
