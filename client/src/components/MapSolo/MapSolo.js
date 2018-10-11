import React, { Component } from 'react';
import './MapSolo.css';
import axios from 'axios'
import API from '../../utils/API';
import refImage from '../../images/ref.png';


class MapSolo extends Component {

    state = {
        venues: [],
        fighters: [],
        refs: [],
        prevCurrLatLng: {
            lat: null,
            lng: null
        },
        userCurrLatLng: {
            lat: null,
            lng: null
        },
        geolocationErr: false
    }

    getLocationOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
    }

    handleGetLocationSuccess = (pos) => {
        let { coords: { latitude: lat, longitude: lng } } = pos;
        let prevCurrLatLng = this.state.userCurrLatLng
        let userCurrLatLng = { lat, lng }
        this.setState({
            prevCurrLatLng,
            userCurrLatLng
        })
    }

    handleGetLocationError = (err) => {
        console.log(err);
        this.setState({
            geolocationErr: true,
            userCurrLatLng: { lat: 41.8781, lng: -87.6298 }
        })
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            this.handleGetLocationSuccess,
            this.handleGetLocationError,
            this.getLocationOptions
        );
        this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC2WljOFv9ujHKJWIgMsrE4Wj3bZA5nBZk&callback=initMap")
        this.getVenues()
        this.getFighters()
        this.getRefs()

        window.initMap = this.initMap;
    }

    componentWillMount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    loadScript = (url) => {
        var index = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")
        script.src = url
        script.async = true
        script.defer = true
        index.parentNode.appendChild(script);
    }

    getVenues = () => {
        const endPoint = "https://ballup-turned-hoopsgram-api.herokuapp.com/api/courts/latLng/"

        axios.get(endPoint + this.state.userCurrLatLng.lat + "/" + this.state.userCurrLatLng.lng)
            .then(response => {
                console.log(response)
                this.setState({
                    venues: response.data.courts, geolocationErr: false
                })
                this.initMap()
            })
            .catch(error => {
                console.log("ERROR!! " + error)
            })

    }

    getFighters = () => {
        API.getFighterTypes().then(response =>
            this.setState({ fighters: response.data }))
    }
    getRefs = () => {
        API.getRefTypes().then(response =>
            this.setState({ refs: response.data }))
    };

    initMap = () => {
        console.log(this.state.userCurrLatLng)
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: this.state.userCurrLatLng.lat, lng: this.state.userCurrLatLng.lng },
            zoom: 14
        })

        // Create An InfoWindow
        var infowindow = new window.google.maps.InfoWindow()

        // Display Dynamic Markers for Courts
        this.state.venues.map(function (myVenue) {

            var contentString = myVenue.name;

            // Create A Marker
            var marker = new window.google.maps.Marker({
                position: { lat: myVenue.lat, lng: myVenue.lng },
                map: map,
                title: myVenue.name
            })

            // Click on A Marker!
            marker.addListener('click', function () {

                // Change the content
                infowindow.setContent(contentString)

                // Open An InfoWindow
                infowindow.open(map, marker)
            })

        })

        // Display Dynamic Markers for Fighters
        this.state.fighters.map(function (fighters) {

            var contentString = fighters.name;

            // Create A Marker
            var icon = {
                url: "http://icons.iconarchive.com/icons/google/noto-emoji-activities/256/52746-boxing-glove-icon.png", // url
                scaledSize: new window.google.maps.Size(50, 50), // scaled size
                origin: new window.google.maps.Point(0, 0), // origin
                anchor: new window.google.maps.Point(0, 0) // anchor
            };

            var markerFight = new window.google.maps.Marker({
                position: { lat: fighters.lat, lng: fighters.lng },
                map: map,
                title: fighters.name,
                icon: icon
            })

            // Click on A Marker!
            markerFight.addListener('click', function () {

                // Change the content
                infowindow.setContent(contentString)

                // Open An InfoWindow
                infowindow.open(map, markerFight)
            })

        })

        // // Display Dynamic Markers for Refs
        this.state.refs.map(function (refs) {

            var contentString = refs.name;

            var icon = {
                url: refImage, // url
                scaledSize: new window.google.maps.Size(50, 50), // scaled size
                origin: new window.google.maps.Point(0, 0), // origin
                anchor: new window.google.maps.Point(0, 0) // anchor
            };

            // Create A Marker
            var markerRef = new window.google.maps.Marker({
                position: { lat: refs.lat, lng: refs.lng },
                map: map,
                title: refs.name,
                icon: icon
            })

            // Click on A Marker!
            markerRef.addListener('click', function () {

                // Change the content
                infowindow.setContent(contentString)

                // Open An InfoWindow
                infowindow.open(map, markerRef)
            })

        })



    }

    render() {
        if (this.state.geolocationErr || (this.state.userCurrLatLng === this.state.prevCurrLatLng)) {
            this.getVenues();
        }
        return (
            <main>
                <div id="map"></div>
            </main>
        )
    }
}


export default MapSolo;