/*global $*/
/*eslint-env jquery*/

/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var contactInfoFormatter = {
  generic: '<li><span class="contact-label">%contact%</span><span class="contact-data">%data%</span></li>',
  mobile: '<li><span class="contact-label">mobile</span><a href="tel:%data%" class="contact-data">%data%</a></li>',
  email: '<li><span class="contact-label">email</span><a href="mailto:%data%" class="contact-data">%data%</a></li>',
  twitter: '<li><span class="contact-label">twitter</span><a href="%url%" class="contact-data">%data%</a></li>',
  github: '<li><span class="contact-label">github</span><a href="%url%" class="contact-data">%data%</a></li>',
  blog: '<li><span class="contact-label">blog</span><a class="contact-data">%data%</a></li>',
  location: '<li><span class="contact-label">location</span><span class="contact-data">%data%</span></li>'
};

var HTMLbioPic = '<p><img srcset="%set%" src="%data%" class="biopic" alt="Picture of me and monitors behind"></p>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills-list"></ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var workFormatter = {
  employer: '<a href="#">%data%',
  title: ' - %data%</a>',
  dates: '<div class="date-text">%data%</div>',
  location: '<div class="location-text">%data%</div>',
  description: '<p><br>%data%</p>'
};

var HTMLprojectStart = '<div class="project-entry"></div>';
var projectFormatter = {
  title: '<a href="#">%data%</a>',
  dates: '<div class="date-text">%data%</div>',
  description: '<p><br>%data%</p>',
  image: '<img srcset="%set%" src="%data%" alt="project picture">'
};

var HTMLschoolStart = '<div class="education-entry"></div>';
var schoolFormatter = {
  name: '<a href="#">%data%',
  degree: ' -- %data%</a>',
  dates: '<div class="date-text">%data%</div>',
  location: '<div class="location-text">%data%</div>',
  major: '<em><br>Major: %data%</em>'
};

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var onlineCoursesFormatter = {
  title: '<a href="#">%data%',
  school: ' - %data%</a>',
  dates: '<div class="date-text">%data%</div>',
  url: '<br><a href="#">%data%</a>'
};

var googleMap = '<div id="map"></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
// $(document).ready(function() {
//   $('button').click(function() {
//     var $name = $('#name');
//     var iName = inName($name.text()) || function(){};
//     $name.html(iName);
//   });
// });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
// var clickLocations = [];

// function logClicks(x, y) {
//   clickLocations.push(
//     {
//       x: x,
//       y: y
//     }
//   );
//   console.log('x location: ' + x + '; y location: ' + y);
// }

// $(document).click(function(loc) {
//   logClicks(loc.pageX, loc.pageY);
// });



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true,
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contactInfo.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.city);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      console.log('clicked');
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locs) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locs.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}
