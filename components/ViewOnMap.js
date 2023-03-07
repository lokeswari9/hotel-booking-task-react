import React,{Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class ViewOnMap extends Component{
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={30}
                    initialCenter={{
                    lat: 12.847650,
                    lng: 77.671308
                    }}
                />
            </div>
        )
    }
}
export default GoogleApiWrapper((props) => ({ apiKey: props.apiKey }))(ViewOnMap);