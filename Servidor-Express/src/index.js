import app from './app.js';
import * as dotenv from 'dotenv'
import db from './db.js'


dotenv.config()

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

// Agrega las rutas de autenticación
app.use("/auth", authRoutes)

// Agrega las rutas de usuarios
app.use("/user", userRoutes)

//Define la coneccion a la base de datos
try {
  await db.authenticate()
  console.log('Successful connection to the database');
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
