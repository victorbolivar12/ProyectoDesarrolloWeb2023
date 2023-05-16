import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js"

const app = express()
const port = 5000

app.use( cors() )
app.use(express.json())

// Agrega las rutas de autenticación
app.use("/auth", authRoutes)

// Agrega las rutas de usuarios
app.use("/user", userRoutes)

//Define la coneccion a la base de datos
try {
  await db.authenticate()
  console.log('Connecion exitosa a la base de datos');
} catch (error) {
  console.log(`Error: ${error}`);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
