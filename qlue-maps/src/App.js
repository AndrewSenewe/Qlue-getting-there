import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'
// import axios from 'axios'
import 'leaflet/dist/leaflet.css'

import logo from './logo.svg';
import './App.css';

const position = [-6.21462, 106.84513];
var myIcon = L.icon({
    iconUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [-1, -24],
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      positions: [{"placemark_id":"83386","name":"TERMINAL BLOK M","address":"SULTAN HASANUDDIN JAKARTA SELATAN DKI JAKARTA","lat":"-6.243410","lng":"106.799767"},{"placemark_id":"83412","name":"TERMINAL BUS ANTAR KOTA KAMPUNG RAMBUTAN","address":"JENDERAL T.B. SIMATUPANG JAKARTA TIMUR DKI JAKARTA","lat":"-6.310530","lng":"106.883949"},{"placemark_id":"83424","name":"TERMINAL BUS CILILITAN","address":"MAYJEND SUTOYO; PGC CILILITAN JAKARTA TIMUR DKI JAKARTA","lat":"-6.262040","lng":"106.865517"},{"placemark_id":"83431","name":"TERMINAL BUS GROGOL","address":"KIAI TAPA JAKARTA BARAT DKI JAKARTA","lat":"-6.166380","lng":"106.791901"},{"placemark_id":"83437","name":"TERMINAL BUS KALIDERES","address":"DAAN MOGOT JAKARTA BARAT DKI JAKARTA","lat":"-6.154510","lng":"106.706039"},{"placemark_id":"83438","name":"TERMINAL BUS KAMPUNG MELAYU","address":"KAMPUNG MELAYU BESAR JAKARTA TIMUR DKI JAKARTA","lat":"-6.224440","lng":"106.866951"},{"placemark_id":"83439","name":"TERMINAL BUS KAMPUNG RAMBUTAN","address":"JENDERAL T.B. SIMATUPANG JAKARTA TIMUR DKI JAKARTA","lat":"-6.309330","lng":"106.882881"},{"placemark_id":"83441","name":"TERMINAL BUS KLENDER","address":"WIJAYA KUSUMA JAKARTA TIMUR DKI JAKARTA","lat":"-6.221350","lng":"106.932442"},{"placemark_id":"83446","name":"TERMINAL BUS LEBAK BULUS","address":"PASAR JUMAT JAKARTA SELATAN DKI JAKARTA","lat":"-6.290120","lng":"106.774544"},{"placemark_id":"83455","name":"TERMINAL BUS MANGGARAI","address":"SULTAN AGUNG JAKARTA SELATAN DKI JAKARTA","lat":"-6.209030","lng":"106.847481"},{"placemark_id":"83458","name":"TERMINAL BUS MUARA ANGKE","address":"PENDARATAN IKAN JAKARTA UTARA DKI JAKARTA","lat":"-6.108810","lng":"106.773041"},{"placemark_id":"83465","name":"TERMINAL BUS PASAR MINGGU","address":"PASAR MINGGU RAYA JAKARTA SELATAN DKI JAKARTA","lat":"-6.283210","lng":"106.843872"},{"placemark_id":"83470","name":"TERMINAL BUS PINANG RANTI","address":"PONDOK GEDE RAYA JAKARTA TIMUR DKI JAKARTA","lat":"-6.291710","lng":"106.886719"},{"placemark_id":"83472","name":"TERMINAL BUS PULOGADUNG","address":"BEKASI RAYA JAKARTA TIMUR DKI JAKARTA","lat":"-6.183110","lng":"106.908562"},{"placemark_id":"83475","name":"TERMINAL BUS RAWAMANGUN","address":"PERSERIKATAN 1 JAKARTA TIMUR DKI JAKARTA","lat":"-6.197940","lng":"106.890839"},{"placemark_id":"83480","name":"TERMINAL BUS SENEN","address":"PASAR SENEN JAKARTA PUSAT DKI JAKARTA","lat":"-6.173630","lng":"106.841438"},{"placemark_id":"83495","name":"TERMINAL BUS TANJUNG PRIOK","address":"TERMINAL BUS TANJUNG PRIOK JAKARTA UTARA DKI JAKARTA","lat":"-6.109990","lng":"106.881027"},{"placemark_id":"83773","name":"K5.17 TERMINAL KAMPUNG MELAYU","address":"JATINEGARA BARAT; TERMINAL BUS KAMPUNG MELAYU JAKARTA TIMUR DKI JAKARTA","lat":"-6.224870","lng":"106.866631"},{"placemark_id":"83774","name":"K7.01 TERMINAL KAMPUNG MELAYU","address":"JATINEGARA BARAT; TERMINAL BUS KAMPUNG MELAYU JAKARTA TIMUR DKI JAKARTA","lat":"-6.224960","lng":"106.866699"}]
    }
  }

    // componentDidMount() {
    //   axios.get('http://www.qlue.co.id/vacancy/svc/getDataExample.php')
    //   .then(results => {
    //     this.setState({positions: results.data})
    //     console.log(results.data);
    //   })
    //   .catch(err => console.log(err))
    // }

  render() {
    return (
      <div className="App">
        <Map center={position} zoom={13} style={{height: '600px'}}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />


          {
            this.state.positions.map(x => {
              var markerPos = [+x.lat, +x.lng]
              return (
                <Marker
                  key={x.placemark_id}
                  position={markerPos}
                  icon={myIcon}
                >
                <Popup>
                  <span>
                    <h3>{x.name}</h3>
                    <p>{x.address}</p>
                  </span>
                </Popup>
              </Marker>
              )
            })

            /* <Marker
            position={position}
            icon={myIcon}
            >
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker> */}
        </Map>
      </div>
    );
  }
}

export default App;
