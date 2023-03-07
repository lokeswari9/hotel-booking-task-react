import React,{Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import rm1 from '../images/rm1.jpg';
import rm2 from '../images/rm2.jpg';
import {Link} from 'react-router-dom';

const mapStyles = {
    width:'30%',	
	height: '30%',
	float:'left'	
  };

class ViewDetails extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
                hotelName:props.match.params.hotelNameParam,
                address:props.match.params.addressParam
        }
    }
    render(){
        return(
            <div>
             <div>   <Link to="/HomePage" >Home</Link><br/></div>
                <div> 
                 <Map
                    google={this.props.google}
                    zoom={30}
                    style={mapStyles}
                    initialCenter={{
                    lat: 12.847650,
                    lng: 77.671308
                    }}
                />
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div>
                <img src={rm1} width="150px" height="150px" alt=""/>
                <img src={rm2} width="150px" height="150px" alt=""/>
                <img src={rm1} width="150px" height="150px" alt=""/><br/>
                </div>
                <div>
                  <p><i> HoteName : </i> {this.state.hotelName}</p><br/>
                  <p><i> Address : </i> {this.state.address}   </p>
                </div>
                
            </div>
        )
    }
} 
export default GoogleApiWrapper((props) => ({ apiKey: props.apiKey }))(ViewDetails);
