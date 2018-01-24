# MicroPosts JS APP - Twitter/blog post clone

This document provides a brief overview of the MicroPosts app code and content structure.

MicroPosts is a basic Twitter/blog clone that allows a user to create a new post including a Post Title and Post Body.
Posts are then added to UI and localStorage. Posts can be edited by clicking a pencil icon next to the desired post. This puts the app into Edit State where the Title and Body can be changed. The Edit can then either be submitted or cancelled.

MicroPosts is built with babel_webpack_starter to demo Babel/Webpack transpiling to ES5.

# Development Environment

## Dependencies:
* [Node](https://nodejs.org/en/download/)
* [babel_webpack_starter](https://github.com/bradtraversy/babel_webpack_starter)
* [json-server](https://github.com/typicode/json-server)

### Installing Project Dependencies

To install project dependencies: Using command line, navigate to the project root folder. Type:
```
npm install
```

### Serve
To serve in the browser: Using command line, navigate to the project root folder. Type:
```
npm start
```

### Back End
Backend DB is emulated using json-server. To start the server, open a separate terminal and type:
```
npm run json:server
```

### Updating the database
Edit the api\db.json file

### Build
Built app.bundle.js file is  placed into a new \build folder.
To compile and build the project: Using command line, type:
```
npm run build
```














