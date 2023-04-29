# **UWC 2.0: Urban Waste Collection aid**

## Objective
The aim of this project is to improve UWC 1.0 by adding more functionality, user-friendly design and scalability. The main features are:
- [x] A back-office tool for managing resources and optimizing routes
- [ ] A web for collectors and janitors to manage their profiles, schedules, tasks, vehicles and routes
## Technology
- We used the MERN Stack to create a consistent and scalable web application that can handle requests from both front-end and back-end. We also used MongoDB for free hosting and data storage.
- We used [draw.io](https://www.draw.io) to create diagrams (UML 2.5 supported) and [Visily](https://www.visily.ai) to create wireframes with AI assistance.

## How to Run It Locally
### Prerequisites
Make sure you have the latest version of **npm** installed on your device
### Clone the Repository
```{bash}
git clone https://github.com/chenfa666/UWC-2.0.git
```
### Install the Dependencies
You need to install separate packages for front-end and back-end
- For Front-end:
```{bash}
cd FE
npm install
```

- For Back-end:
```{bash}
cd BE
npm install
```
*Note*: If error happens when running above commands, try the following instead:
```{bash}
npm install --force
```
### Configure the environment
- For Back-end
If you want to use our existed MongoDB, first create a ".env" file in BE folder:
```{bash}
cd BE
nano .env
```
In the ".env" file, add the following:
```
ACCESS_TOKEN_KEY=ARandomString64BytesLong
REFRESH_TOKEN_KEY=AnotherRandomString64BytesLong
ATLAS_URI=mongodb+srv://guest_user:xfQhVsUz2deIo3OY@cluster1.qajpv6r.mongodb.net/?retryWrites=true&w=majority
```
*Note*: You should keep your **ACCESS_TOKEN_KEY** and **REFRESH_TOKEN_KEY** as this is the key of authentication

- For Front-end:
To be able to see the map, you should have **your own Mapbox Access Token**.
First, you also need to create an ".env" in your FE folder:
```{bash}
cd FE
nano .env
```
To connect with the Back-end, you will need the following lines in your ".env" file:
```
REACT_APP_BACKEND_URL=http://localhost:1337
REACT_APP_MAPBOX_ACCESS_TOKEN=YourMapboxAccessTokenProvidedByMapbox
```
### Start the app
First, start the BE server:
```{bash}
cd BE
npm start
```
Then, start the FE:
```{bash}
cd FE
npm start
```

### Demo the app
If you want to try the app, you can login with following information:
```
username: tester1@gmail.com
password: 12345678
```

### Testing
To perform unit testing on our back-end API, you can use the following command:
```{bash}
cd BE
npm test
```