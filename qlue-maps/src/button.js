import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { MapControl } from 'react-leaflet';

export default class LegendControl extends MapControl {

  componentWillMount() {
    const legend = L.control({position: 'bottomright'});
    const jsx = (
      <div {...this.props}>
        <button>Show/Remove</button>
      </div>
    );

    legend.onAdd = function (map) {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = legend;
  }
}