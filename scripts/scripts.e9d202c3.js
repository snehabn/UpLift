"use strict";angular.module("upliftApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/organizations",{templateUrl:"views/organizations.html",controller:"OrganizationsCtrl",controllerAs:"organizations"}).when("/organizations/:id",{templateUrl:"views/specificOrg.html",controller:"specificOrgCtrl",controllerAs:"org"}).when("/users",{templateUrl:"views/users.html",controller:"UsersCtrl",controllerAs:"users"}).when("/events",{templateUrl:"views/events.html",controller:"EventsCtrl",controllerAs:"events"}).when("/events/:id",{templateUrl:"views/specificEvent.html",controller:"specificEventCtrl",controllerAs:"event"}).otherwise({redirectTo:"/"})}]),angular.module("upliftApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("upliftApp").controller("OrganizationsCtrl",["$scope","OrganizationsService",function(a,b){b.getAll().then(function(b){a.organizations=b.data})}]),angular.module("upliftApp").controller("UsersCtrl",["$scope","UsersService",function(a,b){b.getAll().then(function(b){var c=b.data,d=c[0];a.user={id:d.id,firstName:d.first_name,lastName:d.last_name,email:d.email,zip:d.zip,image:d.image_url}})}]),angular.module("upliftApp").controller("EventsCtrl",["$scope","$route","EventsService",function(a,b,c){c.getAll().then(function(b){a.events=b.data})}]),angular.module("upliftApp").controller("specificEventCtrl",["$scope","$route","$routeParams","specificEventService",function(a,b,c,d){d.get(c.id).then(function(b){a.event=b.data})}]),angular.module("upliftApp").controller("specificOrgCtrl",["$scope","$route","$routeParams","specificOrgService",function(a,b,c,d){d.get(c.id).then(function(b){var c=b.data;a.oneOrg={Name:c.organization.name,Email:c.organization.email,Zip:c.organization.zip,Mission:c.organization.mission_statement,Phone:c.organization.phone_number,Web:c.organization.website_url,Image:c.organization.image_url}})}]),angular.module("upliftApp").service("OrganizationsService",["$http",function(a){var b=[];this.getAll=function(){return a.get("https://blooming-cove-33951.herokuapp.com/organizations").success(function(a){angular.copy(a,b)})}}]),angular.module("upliftApp").service("UsersService",["$http",function(a){var b=[];this.getAll=function(){return a.get("https://blooming-cove-33951.herokuapp.com/users").success(function(a){angular.copy(a,b)})},b.getEvents=function(){return a.get("https://blooming-cove-33951.herokuapp.com/events_users").success(function(a){angular.copy(a,b)})}}]),angular.module("upliftApp").service("EventsService",["$http",function(a){var b=[];this.getAll=function(){return a.get("https://blooming-cove-33951.herokuapp.com/events").success(function(a){angular.copy(a,b)})}}]),angular.module("upliftApp").service("specificEventService",["$http",function(a){var b=[];this.get=function(c){return a.get("https://blooming-cove-33951.herokuapp.com/events/"+c+"/").success(function(a){angular.copy(a,b)})}}]),angular.module("upliftApp").service("specificOrgService",["$http",function(a){var b=[];this.get=function(c){return a.get("https://blooming-cove-33951.herokuapp.com/events/"+c+"/").success(function(a){console.log(a),angular.copy(a,b)})}}]),angular.module("testYeomanApp").run(["$templateCache",function(a){a.put("views/events.html",'<div class="event" ng-controller="EventsCtrl"> <h2>Here are some upcoming events!</h2> <br> <h4>Where are you located? Or what do you enjoy?</h4> <input type="text" ng-model="searchBox"> <div ng-repeat="event in events | filter: searchBox"> <h3><a href="#/events/{{event.id}}">{{event.name}}</a></h3> <!-- {{event}} --> <p>{{event.street}} {{event.city}}, {{event.state}}</p> <p ng-repeat="skill in event.skills">{{skill.name}}</p> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <!--   <div class="dbc-banner"> --> <h1>UpLift</h1> <p class="lead"> <img src="http://www.mnbar.org/sf_images/default-source/default-album/volunteer-hands.jpg?sfvrsn=0" style="width:80%"><br> Be the change. </p> <p> INSERT ABOUT US STATEMENT </p> <p><a class="btn btn-lg btn-success" ng-href="#/events">I can help <span class="glyphicon glyphicon-ok"></span></a></p> <!--   </div> --> <!-- Twitter Follow button --> <div id="social-media"> <a href="https://twitter.com/Squad_UpLift" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @Squad_UpLift</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script> <!-- Facebook Like button --> <div class="fb-like" data-href="https://www.facebook.com/UpLift-995968273856562/" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div> </div> </div>'),a.put("views/organizations.html",'<div class="organization" ng-controller="OrganizationsCtrl"> <div ng-repeat="organization in organizations"> <center><h1><a href="#/organizations/{{organization.id}}">{{organization.name}}</a></h1> <div class="specific-org"> <img src="{{organization.image_url}}" class="img-rounded orgs" alt="Rounded Image"> <br></div></center> <ul class="list-group"> <li class="mission list-group-item">Mission Statement: "{{organization.mission_statement}}"</li> </ul> </div> </div> <!-- <h2><a href="{{organization.website_url}}  ">{{organization.name}}</a></h2>\n<h4>{{organization.phone_number}}</h4>\n<h4>{{organization.email}}</h4>\n<img src="{{organization.image_url}}" style="height:90px; width:90px;">\n	<br>\n{{organization.mission_statement}}\n	<br>\n	<!{{organization}} --> '),a.put("views/specificEvent.html",'<div class="event" ng-controller="specificEventCtrl"> <!-- 	<div id="floating-panel">\n		<input id="late" type="text" value="{{event.event.lat}}">\n		<input id="long" type="text" value="{{event.event.lng}}">\n		 <input id="submit" type="button" value="Geocode">\n		</div> --> <h3>{{event.event.name}}</h3> <h4>Seeking Volunteers Who Enjoy:</h4> <div ng-repeat="skills in event"> <div ng-repeat="skill in skills"> {{skill.name}} </div> </div> <br> <h4>Hosted by:</h4> <a href="#/organizations">{{event.organization.name}}</a> <h4>Join us at this location:</h4> <p>{{event.event.street}} {{event.event.city}}, {{event.event.state}}</p> <h4>Contact us:</h4> <p>Phone: {{event.organization.phone_number}}, <br> Email: <a href="mailto:{{event.organization.email}}?Subject=How%20can%20I%20volunteer?" target="_top">{{event.organization.email}}</a></p> <h4>Number of Volunteers Needed:</h4> <p>{{event.event.volunteers_needed}}</p> <h4>Dates:</h4> <p>{{event.event.start_date | date }} - {{event.event.end_date | date }}</p> <!-- Add image fields--> <br> <!-- Display Google Calendar --> <iframe src="https://calendar.google.com/calendar/embed?src=dkm1djphqvkko6ug6ssip99ceg%40group.calendar.google.com&ctz=America/Los_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> <div id="floating-panel"> <input id="address" type="hidden" value="{{event.event.street}} {{event.event.city}}, {{event.event.state}} {{event.event.zip}}"> <input style="visibility:hidden; height:40px; width:400px" id="submit" type="button" value="Geocode"> </div> <!-- <br>\n		<br>\n		<h4>Seeking Volunteers Who Enjoy:</h4>	\n		<ul>\n		<li>{{event["skills"][0].name}}</li>\n		<li>{{event["skills"][1].name}}</li>\n		</ul>\n		<h5>Join us at this location:</h5>\n		<p>{{event.event.street}} {{event.event.city}}, {{event.event.state}}</p>\n\n		{{event.skills[0].name}} --> </div> <br> <br> <div id="map" style="height:400px; width:400px; border-radius: 50%"></div> <br> <!-- <script>\n		function initMap() {\n\n			var inputLat = document.getElementById(\'late\').value;\n			var inputLng = document.getElementById(\'long\').value;\n			var eventLat = parseFloat(inputLat);\n			var eventLng = parseFloat(inputLng);\n\n			var myLatLng = {lat: 37.7749, lng: -122.4194};\n\n			var mapDiv = document.getElementById(\'map\');\n			var map = new google.maps.Map(mapDiv, {\n				center: myLatLng,\n				zoom: 12\n			});\n\n			var marker = new google.maps.Marker({\n				position: myLatLng,\n				map: map,\n				animation: google.maps.Animation.DROP,\n				title: \'Hello World!\'\n			});\n\n			var trafficLayer = new google.maps.TrafficLayer();\n        trafficLayer.setMap(map);\n		}\n	</script> --> <script>function initMap() {\n			var myLatLng = {lat: 37.773972, lng: -122.431297};\n			var map = new google.maps.Map(document.getElementById(\'map\'), {\n				zoom: 12,\n				center: myLatLng\n			});\n			var geocoder = new google.maps.Geocoder();\n\n'+"			document.getElementById('floating-panel').addEventListener('click', function() {\n				geocodeAddress(geocoder, map);\n\n				var trafficLayer = new google.maps.TrafficLayer();\n        trafficLayer.setMap(map);\n			});\n		}\n\n		function geocodeAddress(geocoder, resultsMap) {\n			var address = document.getElementById('address').value;\n			geocoder.geocode({'address': address}, function(results, status) {\n				if (status === google.maps.GeocoderStatus.OK) {\n					resultsMap.setCenter(results[0].geometry.location);\n					var marker = new google.maps.Marker({\n						map: resultsMap,\n						position: results[0].geometry.location,\n						animation: google.maps.Animation.DROP,\n					});\n				} else {\n					alert('Geocode was not successful for the following reason: ' + status);\n				}\n			});\n		}</script> <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBGC4vCCu27F645BNPEPAvdGN1VKebWwIQ&callback=initMap\" async defer></script>"),a.put("views/specificOrg.html",'<div class="org" ng-controller="specificOrgCtrl"> <img src="{{oneOrg.Image}}" style="height:90px; width:90px"><h3>{{oneOrg.Name}} </h3> Mission: {{oneOrg.Mission}}<br> Phone: {{oneOrg.Phone}}<br> Email: {{oneOrg.Email}}<br> <a href="{{oneOrg.web}}">Click here to visit {{oneOrg.Name}}.</a><br> Zip: {{oneOrg.Zip}}<br> </div> <br> <br>'),a.put("views/users.html",'\n\n<!-- <div ng-repeat="user in users"> -->\n<div ng-controller="UsersCtrl">\n  {{user.firstName}} {{user.lastName}}<br>\n  {{user.email}}<br>\n  {{user.zip}}<br>\n  <img src="{{user.image}}" style="height:90px; width:90px;">\n\n<!--   {{eventsUsers.id}} -->\n</div>\n\nSkills:<br>\nProgramming<br>\nTeaching<br>\n<br>\nInterests:<br>\nTracking non-airwheel steps<br>\nBacon<br>\n<br>\nQuote:<br>\n"Be the change that you want to see in the world."<br>\n"I did the thing that does the other thing to do the thing."<br>\n"Okay, cool."\n\n<!-- <div ng-repeat="event in eventsUsers">\n    {{eventsUsers.id}}\n</div> -->\n\n<!--   <div ng-repeat="user in users">\n    {{user.first_name}} {{user.last_name}}\n    <br>\n    {{user.email}}\n    {{user.zip}}\n    <img src="{{user.image_url}}" style="height:90px; width:90px;">\n  </div>\n  FOR MULTIPLE USERS\n')}]);