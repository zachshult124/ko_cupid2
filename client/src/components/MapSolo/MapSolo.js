import React, { Component } from 'react';
import './MapSolo.css';
import axios from 'axios'
import API from '../../utils/API';
import refImage from '../../images/ref.png';
import MDSpinner from 'react-md-spinner';
import battleImage from '../../images/battle64.png';

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
        geolocationErr: false,
        venuesAPIHit: false,
        fightersAPIHit: false,
        refsAPIHit: false,
        areTilesLoaded: false,
        mapLoaded: false
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
        this.getVenues(userCurrLatLng.lat, userCurrLatLng.lng)
    }

    handleGetLocationError = (err) => {
        console.log(err);
        this.setState({
            geolocationErr: true,
            userCurrLatLng: { lat: 41.8781, lng: -87.6298 }
        })
        this.getVenues(41.8781, -87.6298)
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            this.handleGetLocationSuccess,
            this.handleGetLocationError,
            this.getLocationOptions
        );
        window.initMap = this.initMap;


        this.getFighters()
        this.getRefs()
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
        this.setState({ mapLoaded: true });
    }

    getVenues = (lat, lng) => {

        const endPoint = "https://ballup-turned-hoopsgram-api.herokuapp.com/api/courts/latLng/"
        axios.get(endPoint + lat + "/" + lng)
            .then(response => {
                console.log(response)
                this.setState({
                    venues: response.data.courts, geolocationErr: false,
                    venuesAPIHit: true
                })
                this.triggerInitMap();
            })
            .catch(error => {
                console.log("ERROR!! " + error)
            })
    }

    getFighters = () => {

        API.getFighterTypes().then(response => {
            this.setState({
                fighters: response.data,
                fightersAPIHit: true
            })
            this.triggerInitMap();
        })
            .catch(error => {
                console.log("ERROR!! " + error)
            })
    }

    getRefs = () => {

        API.getRefTypes().then(response => {
            this.setState({ refs: response.data, refsAPIHit: true })
            this.triggerInitMap();
        })
            .catch(error => {
                console.log("ERROR!! " + error)
            })
    }

    initMap = () => {
        console.log(this.state.userCurrLatLng)
        if (!this.state.userCurrLatLng.lat || !this.state.userCurrLatLng.lng) {
            return;
        }
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: this.state.userCurrLatLng.lat, lng: this.state.userCurrLatLng.lng },
            zoom: 14
        })

        // Add listener for tilesloaded and update our areTilesloaded state to remove spinner
        map.addListener('tilesloaded', () => {
            this.setState({ areTilesLoaded: true })
        })

        // Create An InfoWindow
        var infowindow = new window.google.maps.InfoWindow()

        // Display Dynamic Markers for Courts
        this.state.venues.map(function (myVenue) {

            var contentString = `<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">${myVenue.name}<div id="bodyContent"><img src=${myVenue.photos[0].url} class="venueImg" /></br><h5>${myVenue.address}</h5></div></div>`;

            // Create A Marker
            var icon = {
                url: battleImage,
                scaledSize: new window.google.maps.Size(50, 50), // scaled size
                origin: new window.google.maps.Point(0, 0), // origin
                anchor: new window.google.maps.Point(0, 0) // anchor
            };

            var marker = new window.google.maps.Marker({
                position: { lat: myVenue.lat, lng: myVenue.lng },
                map: map,
                title: myVenue.name,
                icon: icon
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

            var contentString = `<div id="content"><div id="siteNotice"></div><img src="http://icons.iconarchive.com/icons/google/noto-emoji-activities/256/52746-boxing-glove-icon.png" class="fighterIcon" /><h1 id="firstHeading" class="firstHeading">${fighters.name}</h1><h6>Matches Won: ${fighters.matchesWon}</h6><h6>Matches Lost: ${fighters.matchesLost}</h6><div id="bodyContent"><img src=${fighters.img} class="fighterImg" /></br><p>${fighters.bio}</p></p>Need a ref to watch your fight? <b>Reach out now at :</b>${fighters.phone}</p></div></div>`;

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

            var contentString = `<div id="content"><div id="siteNotice"></div></div><img src=${refImage} class="refIcon"/><h1>${refs.name}</h1><h6>Level: ${refs.level}</h6><div id="bodyContent"><img src=${refs.img} class="refImg" /></br><p>${refs.bio}</p></p>Need a ref to watch your fight? <b>Reach out now at :</b> ${refs.phone}</p></div></div>`;

            var icon = {
                url: refImage, // url
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


    triggerInitMap = () => {
        if (!this.state.mapLoaded && (this.state.venuesAPIHit || this.state.venues.length) && (this.state.fightersAPIHit || this.state.fighters.length) && (this.state.refsAPIHit || this.state.refs.length)) {
            this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC2WljOFv9ujHKJWIgMsrE4Wj3bZA5nBZk&callback=initMap")
        }
    }

    render() {
        if (this.state.geolocationErr || (this.state.userCurrLatLng === this.state.prevCurrLatLng)) {
            this.getVenues(this.state.userCurrLatLng.lat, this.state.userCurrLatLng.lng);
        }
        return (
            <div>
                <main>
                    <div id="map"></div>
                </main>
                {!this.state.areTilesLoaded && (!this.state.venues.length || !this.state.fighters.length || !this.state.refs.length) && <MDSpinner className='spinner' size={100} />}
            </div>
        )
    }
}

export default MapSolo;