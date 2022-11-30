# RICK AND MORTY APP

This application allows you to search by the name of the characters of the animated series Rick and Morty.

And have a party with the main characters.

## Project structure
    .
    |
    |--public
    |    |--favicon.ico
    |    |--index.html
    |    |--logo192.png
    |    |--logo512.png
    |    |--manifest.json
    |    |--robots.txt
    |--src
    |    |--Components
    |           |--CardCharacter.jsx
    |           |--Party.jsx
    |           |--Search.jsx
    |    |--query
    |           |--character.jsx
    |    |--App.css
    |    |--App.js
    |    |--index.js
    |--.gitignore
    |--README.md
    |--package-lock.json
    |--package.json

## Launching the application

Open this repository in any code editor
Whith `npm install` install all node modules

After start the app by entering the command in the console `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Application functionality

This application consists of 3 blocks.

1. Input string\
   Here you can enter the name of any character from the animated series, as soon as there are more than 2 characters in the string, an API request will be executed and the search results will be displayed
    ![Image alt](https://github.com/just-satoru/rick-and-morty/img/input.jpg)
2. Character Block\
    -This block displays the search results.\
    -By clicking on any image of rick or morty you will add them to the party block.\
    -By clicking on the cross on the character's card, you will remove it from the search results, this character will no longer be displayed even when searching again, until the page is reloaded
    ![Image alt](https://github.com/just-satoru/rick-and-morty/img/characters.jpg)
3. Party block\
    The characters you selected in the upper block are displayed here.

    ![Image alt](https://github.com/just-satoru/rick-and-morty/img/party.jpg)
