## Getting Started
1. Install dependencies using `npm install` or `yarn`.
2. Create a `.env` file in the root folder and add the following:  
   `PORT=8080`  
   `DB_HOST=localhost`  
   `DB_PORT=27017`  
   `DB_NAME=ipharmaceuticals`
3. Start the server using `npm run dev` for development (with nodemon) or `npm start` for production.  
   The server will run at `http://localhost:8080`.

## Scripts
- `npm run dev` – Start development server with auto-reload  

## Notes
MongoDB should be running locally using the above configuration.  
The app connects to the `ipharmaceuticals` database.
