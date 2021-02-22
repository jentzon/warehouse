# Warehouse Application

## The frontend application (wharehouse-app)
The frontend application serves a React.js application. This application allows you to:
- Upload articles to an inventory
- Upload products to a product catalogue
- View all available articles in inventory
- View all available products in inventory
- Sell (remove) products which updates the inventory
- View how many products you can sell, given your inventory

Built with:
- React
- TypeScript

### Setup and run
1. Run "yarn" to install packages
2. Validate tests with "yarn test"
3. Start server (not production...) using "yarn start"
### About
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Uses:
- ESLint to enforce code style.
- [Material UI](https://material-ui.com/) for styled components.
- [RamdaJS](https://ramdajs.com/) for more functional and improved list and object functions 

### Trade-offs
- No "advanced" implemetation of loading state when making fetch calls has been done in components.
- The lists are infinite, which makes for bad performance. Should rather make use of infinite scroll lists or support backend pagination.
- No Docker files and docker-compose to provide a smooth way for setting up a demo-environment.
- No state is used outside of components own state. Went for KIS and did not add Redux or any context state.
- Basic navigation. Could be extracted further or simply use React Router with routes etc, reloading the page discards any navigation done.
- You can always style more, and more, and more... ;)
- Tests! Love them, but have limited them down to a bare minimum to provide more code and implementation of solutions for you to check.
- Some performance improvements has been made, but there is always more to do (or not(!)). No need for performance optimization when there is no problem, although. One example is to pass in "simple" props to smaller components in order to use the Reacts equality evaluation more efficient, also to better use useMemo etc. for increased calculation performance (or rather, not calculate more then needed).

### Notes:
- JSON input is in "stringified" form. Would have loved to get an good JSON text field with validation and all in place.
- @material-ui/core/Snackbar sometimes throws an error due to underlying implementation.
- The product list item takes the inventory data to look up containing article names. This should rather be done by combining this info in parent component and providing "ready-to-use" objects. Gotta save som refactoring! This mapping could be done in the "WarehouseCatalogue" container and passed down. Eg. the findArticleInInventory function should be used where inventory is fetched and article info should be tied to products there directly.
- Styling is provided within each component and not kept separate.


## The backend application (wharehouse-server)
The backend is a Node.js application providing an API through Express which allows you to:
- Insert products
- Insert articles
- List all products
- List all articles
- Sell a product which removes corresponding articles

### Setup and run
Same as for the frontend application

### About
Uses: 
- ESLint to enforce code style.
- [Material UI](https://material-ui.com/) for styled components.
- [RamdaJS](https://ramdajs.com/) for more functional and improved list and object functions

Built with:
- Node.js
- Express
- TypeScript

### Trade-offs
- Used own "middleware" for reading body into correct types. Didn't have time to investigate further how this can/should be done. Would have liked to found out more how to parse into correct objects with types "automatically". The same is done in frontend when reading response from BE.
- The API paths could be refactored to be held in separate places according to which "area" they serve.
- The implementation behind every API path could be placed in separated place and just call for in apiPaths. For cleaner code.
- Very simple error handling in place. Could spend another day in implementing that :)
- The "DB" has no lock and can't handle multiple operations. No possibility of rollbacks implemented. Direct mutability since the collections is exposed from the DB directly.

### Notes:
- Products in file does not have price, added in this demo. But optional in type due to this.
- An ID for products would be super and something I would add someday
- The server uses an "in memory DB" that lives for as long as the server lives. The products and articles is contained in Maps in an "DB object" (class) which also exposes an API for manipulation. Did not chooses eg. MongoDB for the sake of simplicity. Also, I like operating on collections!
- The DB replaces products if the name when uploading more is the same as one already existing.
- The "guard" for not being able to withdraw a product which contaning articles is not enough in inventory is handled in the FE application only.


## Versions
- yarn: 1.22.4
- node: 12.16.3