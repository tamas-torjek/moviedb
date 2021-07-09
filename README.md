# Getting started
## Installation
1. Run `npm install` in both _backend_ and _frontend_ directories.
2. Start the backend Node app by running `npm run dev` in the _backend_ folder. It is accessible at [http://localhost:5000/api/...](http://localhost:5000/api/)
3. Start the frontend React app by running `npm start` in the _frontend_ folder. You can reach it at [http://localhost:3000](http://localhost:3000)
4. The backend is using MongoDB with a few sample movies. It's cloud based, so no further setup is necessary.

---

## API endpoints
- GET `movie`: get all movies.
- GET `movie/<keyword>`: search movies by keyword.
- GET `movie/genre/<genre_1>/<genre_n>`: filter movies by genre(s). Every genre is a separate parameter in the url.
- GET `movie/<keyword>/genre/<genre_1>/<genre_n>`: filter movies by keyword _and_ genre(s).
- GET `genre`: get all genres.

---

## Frontend app usage
### Search

- To open search, click on the magnifier icon in the top right corner.
- The search is run automatically while typing. There is a 600ms delay and minimum character count, to prevent too many requests.
- To filter by genre(s), open the filter and select the desired genre(s).
- For movie details, click on the _Details_ button in the movie cards.
