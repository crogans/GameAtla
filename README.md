# GameAtla
A game database browser ('Atlas') app built with React, Material UI, and [RAWG API](https://rawg.io/apidocs).

App can be seen [here](https://crogans.github.io/GameAtla/).

## Features
- Browse games from RAWG API (Filtered to only games that have a Metacritic score)
- Pagination to allow for more browsing
- Search for games by title
- Filter games by genre
- Sort games by highest rated, lowest rated, newest, oldest and by name
- Clicking on a game shows details about it

## To Run Locally
1. Clone the repository
2. Run `npm install`
3. Create an .env file and add a RAWG API key as `VITE_API_KEY`
4. Run `npm run dev`