# Book Search Engine (MERN Stack)

## Description 

The aim of this project was to refactor a fully functioning Google Books API search engine built with a RESTful API into one with a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. The app allows users to signup and save book searches to the back end.

## Contents 

* [Criteria](#criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built-with)
* [Images](#images)
* [License](#license)
* [Links](#links)


## Criteria

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


## Installation 

* Run 'npm i' to install all dependencies 
* Then run 'npm run develop' to concurrently run the 'watch' script in the server folder (to restart the server automatically whenever code changes are detected) and 'develop' script in the client folder which starts the development server for the client-side application. 

## Usage 

* Open link to the [application] (https://book-search-engine-mern-1-phhl.onrender.com/).
* Once on the application, click on the Signup button and input into the relevant fields.
* After signing up or logging in, the menu options update to include 'Search for Books', 'See Your Books, and 'Logout'. 
* Once in, you can then search for a book in the 'Search for Books' area.
* Submit your search and a list of search results shoudl be displayed on the page.
* Each result includes the book’s title, author, description, image, and an option to save the book.
* To save a book, select the 'Save this Book!' button and the book should then be saved on your profile
* Navigate to the saved books section by selecting 'See Your Books' in the menu and your saved books will be stored there.
* The user is then able to delete the saved book from your saved list.
* To logout, click the Logout button to end your session and revert to the default menu options of 'Search for Books' and 'Login/Signup'.


## Built With 

* MongoDB/Mongoose
* Express.js
* React
* Node.js
* API
* Npm 

## Images 


** Showing Book Results **

![Screenshot 2024-06-26 at 22 02 12](https://github.com/e-aji/book-search-engine-MERN/assets/156595423/db8e657e-1a89-4786-a962-6059db4f8df0)

** Showing Saved Books **

![Screenshot 2024-06-26 at 22 02 49](https://github.com/e-aji/book-search-engine-MERN/assets/156595423/3000daf5-3c14-4920-b1e2-55d6ca637c79)

## License 

Licensed under the MIT license.

## Links 

Link to deployed application - https://book-search-engine-mern-1-phhl.onrender.com/