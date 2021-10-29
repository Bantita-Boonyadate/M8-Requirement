# M8-Requirement

## About the project
It's a website for pet lovers who want to share their pet's photos and stories through sharing pictures and their posts. Access to the website requires membership or login. Once the user has successfully logged in, they will be able to access the website and use it.

## Features
* Register Login
* Facebook Login
* Share a picture of your pet
* View animal posts
* View map

## Screenshots

## Developed with
* React
* Nodejs
* Mongodb

## Choose an API
* Facebook Login API By https://developers.facebook.com/blog/post/2021/09/14/introducing-facebook-graph-api-v12-marketing-api-v12/
* The Cat API By https://docs.thecatapi.com/
* Longdo Map API By https://map.longdo.com/products

## Setup
You should have
  * Visual Studio Code
  * Nodejs
  * MongoDB

## Getting start with the project
* Clone the project

```
https://github.com/Bantita-Boonyadate/M8-Requirement.git
```
* Frontend
  * Create a new react application using the create-react-app command line.
  
  ```
  npx create-react-app react-app --use-npm
  ```
  * Start a server
  
  ```
  cd react-app
  npm start
  ```
  
  * Open the application in the browser using http://localhost:3000

* Backend
  * Install dependecies
  ```
  npm install
  ```
  * Start a server
  ```
  cd backend
  node server.js
  ```

## Authentication before starting playing around with the application
The mechanism used for authentication is Json Web Token. The reason for choosing to use because JWT is an easy-to-understand mechanism. The token can be used to verify the identity of the website user, which increases the security of the system. This website requires registration or log in to verify the identity of the user before using the website.

##  API Authorization Mechanism
To access some paths on the website. User authentication is required. Starting from when the user logs in, they will receive a token. Then send the token to the headers and put it in middleware. Bring the variable that holds the headers to check with the sercretkey set in the .env file to see if they match. If it matches, it will check if this user exists in the database or not. If there is, next() will go to the next function.

## Why his or her application is useful, who will be the potential users?
This application is a community for people who love pets. Perfect for anyone who wants to share their pet's story or want to see pictures of their favorite pets. My app brings together pet lovers. Potential users are common people.

## Contact
Created by bantita_boonyadate@elearning.cmu.ac.th

