const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/userDB"
);

const userSeed = [
  {
    name: "Harrison Drake",
    level: 4,
    bio:
      "Earned praised for my work implementing g.i. joes in Washington, DC. Spent childhood working on trumpets in the government sector. Spent childhood donating dogmas in Mexico. Spent a weekend investing in electric trains in Nigeria. Have a strong interest in deploying gravy worldwide. Spent several years training the elderly in New York, NY.",
    age: 34,
    gender: "male",
    matchesWon: 5,
    matchesLost: 18,
    profilePic: "",
    type: "fighter",
    lat: 41.9272207,
    lng: -87.70233584,
    date: new Date(Date.now())
  },
  {
    name: "Emily Frankfurter",
    level: 9,
    bio:
      "Gifted in working on banjos for farmers. Spent two years testing the market for sausage in the financial sector. Was quite successful at lecturing about fatback in Naples, FL. Spent two years writing about teddy bears in Fort Walton Beach, FL. Spent 2001-2005 analyzing toy monkeys in Edison, NJ. Spent 2002-2008 promoting sausage for fun and profit.",
    age: 19,
    gender: "female",
    matchesWon: 7,
    matchesLost: 2,
    profilePic: "",
    type: "fighter",
    lat: 41.92875326,
    lng: -87.68448305,
    date: new Date(Date.now())
  },
  {
    name: "Mark FamilyHurter",
    level: 3,
    bio:
      "Developed several new methods for donating accordians in Ohio. Was quite successful at short selling clip-on ties in Tampa, FL. Set new standards for importing bassoons in Prescott, AZ. Spent 2002-2009 getting my feet wet with toy planes in Cuba. Once had a dream of donating circus clowns for the government. Won several awards for importing wooden trains in Cuba.",
    age: 65,
    gender: "male",
    matchesWon: 87,
    matchesLost: 2,
    profilePic: "",
    type: "fighter",
    lat: 41.92798698,
    lng: -87.66663027,
    date: new Date(Date.now())
  },
  {
    name: "Lipswitch McGee",
    level: 10,
    bio:
      "What gets me going now is short selling toy elephants in Atlantic City, NJ. Have a strong interest in importing Roombas on Wall Street. Lead a team lecturing about methane in Salisbury, MD. Once had a dream of testing the market for dust in the financial sector. Spent a year exporting hugs in Salisbury, MD. Spent several months consulting about bassoons in Ohio.",
    age: 43,
    gender: "male",
    matchesWon: 34,
    matchesLost: 21,
    profilePic: "",
    type: "fighter",
    lat: 41.93794786,
    lng: -87.68654299,
    date: new Date(Date.now())
  },
  {
    name: "Stephan Potkiss",
    level: 10,
    bio:
      "Practiced in the art of merchandising fatback in Deltona, FL. Spent 2001-2008 getting to know sausage in Pensacola, FL. Spoke at an international conference about getting my feet wet with Magic 8-Balls in Fort Lauderdale, FL. Gifted in getting to know weed whackers in Minneapolis, MN. Prior to my current job I was lecturing about hugs for farmers. Spent 2002-2009 training yogurt in Fort Lauderdale, FL.",
    age: 18,
    gender: "male",
    matchesWon: 1,
    matchesLost: 3,
    profilePic: "",
    type: "referee",
    lat: 41.94688579,
    lng: -87.70988894,
    date: new Date(Date.now())
  },
  {
    name: "Marjorie Hamlin",
    level: 12,
    bio:
      "Spent 2001-2006 investing in chess sets in Pensacola, FL. In 2009 I was researching jigsaw puzzles in Edison, NJ. Was quite successful at investing in electric trains in Jacksonville, FL. Spent 2002-2008 supervising the production of salsa in Hanford, CA. Was quite successful at donating salsa in the financial sector. Was quite successful at merchandising saliva in Prescott, AZ.",
    age: 26,
    gender: "female",
    matchesWon: 115,
    matchesLost: 7,
    profilePic: "",
    type: "referee",
    lat: 41.94994993,
    lng: -87.69340944,
    date: new Date(Date.now())
  },
  {
    name: "Zelda Legend",
    level: 6,
    bio:
      "Earned praised for my work building spit-takes in Fort Walton Beach, FL. Spent two years supervising the production of childrens books in Salisbury, MD. Have a strong interest in merchandising tattoos in Cuba. Earned praised for my work marketing xylophones in Jacksonville, FL. Spent high school summers consulting about childrens books with no outside help. Spent several months working with puppets in the government sector.",
    age: 55,
    gender: "male",
    matchesWon: 666,
    matchesLost: 222,
    profilePic: "",
    type: "fighter",
    lat: 41.90729404,
    lng: -87.64431429,
    date: new Date(Date.now())
  },
  {
    name: "Mark Abraham",
    level: 2,
    bio:
      "My current pet project is getting to know pubic lice for fun and profit. Spent 2002-2008 selling Magic 8-Balls in Pensacola, FL. Practiced in the art of exporting banjos in Cuba. Set new standards for developing strategies for weebles on Wall Street. Set new standards for exporting jack-in-the-boxes in Suffolk, NY. Spent 2002-2008 getting my feet wet with Mr. Potato Heads for the government.",
    age: 34,
    gender: "male",
    matchesWon: 21,
    matchesLost: 18,
    profilePic: "",
    type: "fighter",
    lat: 41.90627199,
    lng: -87.67143679,
    date: new Date(Date.now())
  },
  {
    name: "Adam Kravitz",
    level: 9,
    bio:
      "Practiced in the art of creating marketing channels for Mr. Potato Heads in Washington, DC. Spent 2002-2009 marketing puppets in Jacksonville, FL. Spent 2002-2008 marketing cigarettes in Africa. Spent 2002-2007 exporting pubic lice in Ocean City, NJ. Spent high school summers marketing banjos in Fort Walton Beach, FL. Spent the 80's testing the market for tobacco for no pay.",
    age: 29,
    gender: "male",
    matchesWon: 13,
    matchesLost: 2,
    profilePic: "",
    type: "fighter",
    lat: 41.90857157,
    lng: -87.65598726,
    date: new Date(Date.now())
  },
  {
    name: "Leslie Gurtzen",
    level: 15,
    bio:
      "In 2008 I was short selling pogo sticks in New York, NY. Lead a team training carp in Las Vegas, NV. Set new standards for managing acne in the financial sector. Spent 2001-2008 working on pubic lice in Libya. Set new standards for supervising the production of Virgin Mary figurines on Wall Street. Spent 2001-2007 working on tattoos in Jacksonville, FL.",
    age: 32,
    gender: "female",
    matchesWon: 4,
    matchesLost: 1,
    profilePic: "",
    type: "fighter",
    lat: 41.9065275,
    lng: -87.6384778,
    date: new Date(Date.now())
  },
  {
    name: "Reginald Balmer",
    level: 8,
    bio:
      "Enthusiastic about getting to know tar in Bethesda, MD. Lead a team getting my feet wet with wooden horses worldwide. Spoke at an international conference about importing Magic 8-Balls in Africa. Spent 2001-2004 licensing race cars in Minneapolis, MN. Garnered an industry award while marketing muffins in Fort Lauderdale, FL. Lead a team getting to know puppets in Ohio.",
    age: 23,
    gender: "male",
    matchesWon: 12,
    matchesLost: 5,
    profilePic: "",
    type: "fighter",
    lat: 41.90703853,
    lng: -87.66731691,
    date: new Date(Date.now())
  },
  {
    name: "Stacey Landrino",
    level: 1,
    bio:
      "Spent 2002-2007 training weebles on the black market. Crossed the country creating marketing channels for toy trucks in Ocean City, NJ. Spent 2002-2010 researching Magic 8-Balls in Ocean City, NJ. Spent a year creating marketing channels for shaving cream in Prescott, AZ. In 2009 I was promoting UFOs in Ohio. Spent several years working on trumpets in the financial sector.",
    age: 32,
    gender: "male",
    matchesWon: 16,
    matchesLost: 20,
    profilePic: "",
    type: "fighter",
    lat: 41.89835056,
    lng: -87.62989473,
    date: new Date(Date.now())
  },
  {
    name: "Michael Dubriak",
    level: 6,
    bio:
      "Spent high school summers selling cannibalism in Deltona, FL. Spent two years marketing pubic lice in Edison, NJ. Spent a year marketing jigsaw puzzles in Suffolk, NY. Spoke at an international conference about working on ice cream in Deltona, FL. Spent college summers buying and selling puppets in Ocean City, NJ. Spent childhood developing bathtub gin in Miami, FL.",
    age: 43,
    gender: "male",
    matchesWon: 35,
    matchesLost: 5,
    profilePic: "",
    type: "fighter",
    lat: 41.89783947,
    lng: -87.66937685,
    date: new Date(Date.now())
  },
  {
    name: "Jefferson Tokamak",
    level: 11,
    bio:
      "Once had a dream of promoting glue in Suffolk, NY. Gifted in licensing human hair in New York, NY. Spoke at an international conference about licensing shaving cream for the underprivileged. Spent a weekend training electric trains in Hanford, CA. Spent 2002-2009 lecturing about birdhouses in Salisbury, MD. Spent 2002-2009 supervising the production of dust in Pensacola, FL.",
    age: 33,
    gender: "male",
    matchesWon: 21,
    matchesLost: 9,
    profilePic: "",
    type: "fighter",
    lat: 41.89272831,
    lng: -87.61925173,
    date: new Date(Date.now())
  },
  {
    name: "Ashley Montgomery",
    level: 11,
    bio:
      "Spent 2001-2004 marketing junk food in Atlantic City, NJ. Crossed the country researching yogurt in Prescott, AZ. Once had a dream of investing in Slinkies in Naples, FL. Spent 2001-2006 developing Uno in Naples, FL. Won several awards for exporting basketballs in Libya. Set new standards for writing about tattoos in Jacksonville, FL.",
    age: 44,
    gender: "female",
    matchesWon: 18,
    matchesLost: 12,
    profilePic: "",
    type: "fighter",
    lat: 41.88020424,
    lng: -87.64568758,
    date: new Date(Date.now())
  },
  {
    name: "Henry Juicebox",
    level: 6,
    bio:
      "My current pet project is building licorice in Atlantic City, NJ. Had a brief career buying and selling Roombas in Phoenix, AZ. Lead a team merchandising sausage worldwide. In 2009 I was building velcro for farmers. Managed a small team building bacon in Atlantic City, NJ. Earned praise for marketing gravy in Hanford, CA.",
    age: 41,
    gender: "male",
    matchesWon: 11,
    matchesLost: 20,
    profilePic: "",
    type: "fighter",
    lat: 41.89170603,
    lng: -87.61478853,
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
