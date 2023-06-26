import { DataTypes } from "sequelize";
import db from "./../database/db.js";

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
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    contacto: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    tableName: "personas",
    timestamps: false,
  }
);

//Sincroniza el modelo con la base de datos
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
//   });

export default peopleModule;
