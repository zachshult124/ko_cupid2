import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  getFighterLocations: function () {
    return axios.get("https://ballup-turned-hoopsgram-api.herokuapp.com/api/courts/latLng/:lat/:lng")
  },
  getFighterTypes: function () {
    return axios.get("/api/users/fighter/")
  },
  getRefTypes: function () {
    return axios.get("/api/users/referee/")
  }
};