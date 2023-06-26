import { DataTypes } from "sequelize";
import db from "../db.js";

const peopleModule = db.define(
  "people",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    DNI: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    contact: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    tableName: "people",
    timestamps: false,
  }
);


//Sincroniza el modelo con la base de datos
<<<<<<< HEAD:Servidor-Express/model/people.module.js
peopleModule
  .sync({ force: false })
  .then(() => {
    console.log('Tabla "personas" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "personas" en la base de datos:',
      error
    );
  });

// const newPeople = {
//   DNI: 12345678,
//   nombre: "Juan",
//   apellido: "Pérez",
//   direccion: "Av. Siempreviva 123",
//   contacto: "987654321",
//   email: "juanperez@example.com",
//   fecha_nacimiento: "1990-01-01",
//   edad: 31,
//   status: "Activo",
// };

// Ingresa un registro a la base de datos
// Esto es solo para hacer pruebas 
// peopleModule.create(newPeople)
//   .then(persona => {
//     console.log('Nuevo registro insertado:', persona);
//   })
//   .catch(error => {
//     console.error('Error al insertar registro:', error);
=======
// peopleModule
//   .sync({ force: false })
//   .then(() => {
//     console.log('people table created successfully');
//   })
//   .catch((error) => {
//     console.error('Error creating table people in database ', error );
>>>>>>> 9984261c39f9a9ff686d3fb1d4e892707f856393:Servidor-Express/src/model/people.module.js
//   });

export default peopleModule;
