import app from './app.js';
import * as dotenv from 'dotenv'
import db from './db.js'
import createTables from './lib/initializeTables.js'

dotenv.config()

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

// Add the authentication routes
app.use("/auth", authRoutes)

// Add the user paths
app.use("/user", userRoutes)

//Define the connection to the database
try {
  await db.authenticate()
  console.log('Successful connection to the database');
  createTables();
} catch (error) {
  console.log(`Error: ${error}`);
}



app.get('/', (req, res) => {
  res.send({
    "name": "servidor-express",
    "version": "1.0.0",
    "description": "proyecto desarrollo web",
    "type": "module",
    "main": "index.js",
    "author": "Victor Bolivar",
    "license": "ISC",
  });
});

app.listen(5000, () => {})
