# 2BotOrNot2Bot Frontend

##  Table of Contents
- [Basics](#basics)
- [Steps](#steps)
- [Project Structure](#project-structure)
- [Credit](#credit)

## Basics
1. Frontend is deployed on Firebase. Visit [botornot2bot-8e49c.web.app](https://botornot2bot-8e49c.web.app/pc/home)
2. The frontend is developed using **Vue.js**
3. Requests and Responses are sent and handled through **Axios**
4. Modules are maintained and bundled with **Webpack**
5. Basic user authentication is handled through firebase
6. 2 UI component libraries are used: **Element** and **Vuesax**

## Steps
1. git clone git@github.com:2BotOrNot2Bot/2BotOrNot2Bot-Frontend.git
2. cd frontend
3. npm install
4. After start running the backend: npm start

## Project Structure
- assets: images and stylesheets for element ui components
- components: small components that are reused in larger pages
  - Sub-windows for chatting
  - Tags for displaying chatbot's statistics and messages
  - Navigation bar and links
- config: 
  - Maintain names of backend API
  - Code for Firebase authentication
  - Axios configuration
  - Firebase configuration
- pages:
  - Bigger chatting screen containing 2 smaller chatting windows
  - User authentication: login, sign up, change password
  - Main home page
- router: Configuration for Vue router

## Credit
### Developer:
**Tianyi(Lorena) Yan** / **Furong(Flora) Jia**

### UI Designer:
**Yibo Wen**

## Enjoy!🥳🥳