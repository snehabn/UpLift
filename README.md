# UpLift

This is a web application that enables volunteers and organizations/opportunities to be matched based on skills and/or interests. We have provided a platform that currently allows volunteers to search for volunteering opportunities based on skills/interests, locations, and organizations. 

We are facilitating the search for volunteering opportunities via better UX and search criteria with an emphasis on skills desired.

This app is fully decoupled and this repository contains our client-side view of the product. Using AngularJS allowed this to be a web and mobile responsive single page application.

Group Members
-------------------
- Sneha Narasimhan
- Shin Wang
- Umar Farooq Bajwa
- Jonathan Nicolas

### Stack
- Rails4 API back-end
- AngularJS client-side
- Google API (Calendar, Maps)
- Facebook API
- Twitter API

### Software Architecture/Site Map
![alt text](/SiteMap.png)

## Installation Commands

- git clone https://github.com/snehabn/UpLift.git
- npm install
- bower update
- grunt serve


## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Features
Here are a few current features:
- Homepage that takes you directly to available events, organizations and profile.
![alt text](/HomePage.png)

- Events page upcoming events with a search bar to look for specific events, skills, locations, etc...
![alt text](/Events.png)

- Specific event page shows details for the event, location and times.
![alt text](/Event1.png)
![alt text](/Event2.png)

- The Organizations page lists all available organizations in our database.
![alt text](/Orgs.png)


Future features we are working to implement:
- Authentication for users and organizations using AngularJS.
- Users would have the ability to update their own profile and sign up for events.
- Organizations would have the ability to create events and accept volunteers.
- Organizations would be able to embed their calendar, social media feed and add events.
- We would like the add the ability for volunteers to search with the proximity of events with their current location.
- Users will be able to write their own testimonies.
- Users are able to get a confirmation email ounce signed up to an event.



