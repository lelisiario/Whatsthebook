# Whatsthebook

![RepoLink](https://github.com/lelisiario/Whatsthebook)


## Description TODO

An Express.js web app that can search for books from the Google Books API and uses login sessions.


## Table of Contents

- [Usage](#usage)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [TODO](#todo)

## Usage TODO?

1. Login
2. Search for your book!

## Credits

- [Google Books API](https://developers.google.com/books)

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Features

- Search for books through the Google Books API
- Create an account to build a personal library

## User Story

AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

## Acceptance Criteria
GIVEN a book search engine

WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button

WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site

WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up

WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button

WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button

WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site

WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site

WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout

WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

WHEN I click on the Save button on a book
THEN that book’s information is saved to my account

WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account

WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list

WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## TODO

### Minimum Requirements
- [x] Update the auth middleware function to work with the GraphQL API.
- [x] Implement the Apollo Server and apply it to the Express server as middleware.
- [x] Export your typeDefs and resolvers.
- [x] Define the query and mutation functionality to work with the Mongoose models.
- [x] Be deployed using Render.
- [x]Define the necessary Query and Mutation Types
- [x] Hold query ```GET_ME``` and execute the ```me``` query set up using apollo server.
- [x] LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
- [x] ADD_USER will execute the addUser mutation.
- [x] SAVE_BOOK will execute the saveBook mutation.
- [x] REMOVE_BOOK will execute the removeBook mutation.
- [x] Create an Apollo Provider to make every request work with the Apollo server.
- [x] Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file
Make sure you keep the logic for saving the book's ID to state in the try...catch block
- [x] Remove the useEffect() Hook that sets the state for UserData
- [x] Instead, use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData
- [x] Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file
- [x] Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality
- [x] Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality

### Future Plans
- [ ] Update UI
- [ ] Add social feature