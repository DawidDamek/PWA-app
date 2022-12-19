import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GeoLocationComponent extends Component {
  constructor() {
    super(...arguments);
    navigator.geolocation.getCurrentPosition
      .requestPermission?.()
      .then((response) => {
        if (response == 'granted') {
          this.getMyCoord();
        }
      })
      .catch(console.error);
  }

  @tracked myLat;
  @tracked myLng;
  @tracked lat;
  @tracked lng;
  @tracked zoom = 12;

  markers = [
    {
      lat: this.myLat,
      lng: this.myLng,
      description: 'My location 🫵',
    },
    {
      lat: 49.78482996411721,
      lng: 19.02081699718987,
      description: 'Krabowa 🦀',
    },
    {
      lat: 49.786664462839404,
      lng: 19.01698718570767,
      description: 'Wyciąg krzesełkowy Dębowiec ⛷',
    },
    {
      lat: 49.7794716841737,
      lng: 19.019639402072844,
      description: 'Restauracja pod Dębowcem 🍽',
    },
  ];

  @action
  getMyCoord() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.myLat = this.lat;
      this.myLng = this.lng;
    }, this.error);
  }

  @action
  onClickMarker(marker) {
    this.isSelleoCord = false;
    this.lat = marker.lat;
    this.lng = marker.lng;
    this.zoom = 20;
  }

  error(error) {
    console.log(error.message);
  }
}
