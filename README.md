# **UWC 2.0: Urban Waste Collection aid**

## Objective

The aim of this project is to improve UWC 1.0 by adding more functionality, user-friendly design and scalability. The main features are:

- [x] A back-office tool for managing resources and optimizing routes
- [ ] A web for collectors and janitors to manage their profiles, schedules, tasks, vehicles and routes

## Technology

- We used the MERN Stack to create a consistent and scalable web application that can handle requests from both front-end and back-end. We also used MongoDB for free hosting and data storage.
- We used [draw.io](https://www.draw.io) and [lucidchart](https://lucid.app/) to create diagrams (UML 2.5 supported) and [Visily](https://www.visily.ai) to create wireframes with AI assistance.

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

_Note_: If error happens when running above commands, try the following instead:

```{bash}
npm install --force
```

### Modify .env file in FE folder

In FE folder, you should open .env file and modify REACT_APP_MAPBOX_ACCESS_TOKEN with **your own Mapbox Access Token**

````
### Start the app
First, start the BE server:
```{bash}
cd BE
npm start
````

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
