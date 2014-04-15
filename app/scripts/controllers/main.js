'use strict';

angular.module('conditionalModalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.people = [
      {
        "gender":"male",
        "name": {
          "title": "mr",
          "first": "felix",
          "last": "turner"
        },
        "location": {
          "street": "3100 hebron pkwy",
          "city": "tulsa",
          "state": "arkansas",
          "zip":"59550"
        },
        "email": "felix.turner17@example.com",
        "username": "smallgoose680",
        "picture": "http://api.randomuser.me/0.3.2/portraits/men/45.jpg"
      },

      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "cecil",
          "last": "butler"
        },
        "location": {
          "street": "2634 crosstimber ct",
          "city": "eugene",
          "state": "delaware",
          "zip": "95088"
        },
        "email":"cecil.butler28@example.com",
        "username": "redelephant973",
        "picture": "http://api.randomuser.me/0.3.2/portraits/men/1.jpg"
      },

      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "milton",
          "last": "rivera"
        },
        "location": {
          "street": "4870 blossom hill rd",
          "city": "carrollton",
          "state": "rhode island",
          "zip": "97821"
        },
        "email": "milton.rivera21@example.com",
        "username": "brownostrich142",
        "picture": "http://api.randomuser.me/0.3.2/portraits/men/7.jpg"
      },

      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "shane",
          "last": "ruiz"
        },
        "location": {
          "street": "2525 country club rd",
          "city": "fargo",
          "state": "arizona",
          "zip": "28928"
        },
        "email": "shane.ruiz49@example.com",
        "username": "browndog656",
        "picture": "http://api.randomuser.me/0.3.2/portraits/men/41.jpg"
      },

      {
        "gender": "female",
        "name": {
          "title": "mrs",
          "first": "constance",
          "last": "jackson"
        },
        "location": {
          "street": "4294 covington ln",
          "city": "north valley",
          "state": "maryland",
          "zip": "52067"
        },
        "email": "constance.jackson71@example.com",
        "username": "browngoose107",
        "picture": "http://api.randomuser.me/0.3.2/portraits/women/10.jpg"
      }
    ];
  });
