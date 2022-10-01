# Dog Walkers Responsive Application
## Backend and Frontend(Fullstack)

## Project Structure

| File        | Purpose           | What you do?  |
| ------------- | ------------- | ----- |
| `server/` | Backend server code | All your server code |
| [server/README.md](server/README.md) | Everything about the server | **READ ME** carefully! |
| `client/` | Frontend client code | All your client code |
| [client/README.md](client/README.md) | Everything about the client | **READ ME** carefully! |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Free online production deployment | Deploy your app online in production mode |
| [docs/LOCAL_DEPLOYMENT.md](docs/LOCAL_DEPLOYMENT.md) | Local production deployment | Deploy your app local in production mode |

* [Server Requirements](./server/README.md#Requirements)
* [Client Requirements](./client/README.md#Requirements)

## Softawre Technologies 
- vuejs
- Bootstrap
- Postman
- MongoDB(Mongoose)
- CRUD Api

## Programming Languages
- Javascript
- HTML 
- CSS

## Getting started

```bash
# Clone repository
git clone git@git.ita.chalmers.se:courses/dit341/group-00-web.git

# Change into the directory
cd DogWalkers-Responsive-web-app

# Setup backend
cd server && npm install
npm run dev

# Setup frontend
cd client && npm install
npm run serve
```

> Check out the detailed instructions for [backend](./server/README.md) and [frontend](./client/README.md).

## Visual Studio Code (VSCode)

Open the `server` and `client` in separate VSCode workspaces or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace). Otherwise, workspace-specific settings don't work properly.

## System Definition

### Purpose

The purpose of this Dog Walker website/app is to assist dog owners in finding someone to walk their dogs. It also allows dog lovers to spend time with one’s dog while at the same time earning money.

# Pages

### _**Home**_ 
-Page has an overall view on what the system does with a header. Header will let the users to view dogowners and walkers along with that they will be able to register new walkers and new dogowners into the system.

### _**Walkers**_
- The walkers page displays a list of walkers registered in the system allowing the users to view single walkers profile to see their full profile. This page will have the access to delete all the walkers from the system.

### _**Dogowners**_
- The dogowners page displays a list of dogowners registered in the system allowing the users to view single dog owners profile to see their full profile. This page will have the access to delete all the dogowners from the system.

### _**Walkersprofile**_ 
- This page will have the full details of that particular walker. Here the user can add location for that particular walker and also update the walkers information if needed. All the locations of that walker will be displayed in their profile.

### _**Dogownersprofile**_  
- This page will have the full details of that particular dogowner. Pets of the dogowners can be added the pets can one or more based on how many they have, location for that particular dogowner can also be added and also allowing users to update the dogowners information if needed. All the locations and pets of that dogowners will be displayed in their profile.



## Entity-Relationship (ER) Diagram

![ER Diagram](https://github.com/np9693/DogWalkers-Responsive-web-app/blob/main/images/ER%20diagram-Dogwalkers.png)

## Teaser (MS3)

![Teaser](https://github.com/np9693/DogWalkers-Responsive-web-app/blob/main/images/Component%202.png)
