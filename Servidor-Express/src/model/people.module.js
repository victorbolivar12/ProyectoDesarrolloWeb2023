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
// peopleModule
//   .sync({ force: false })
//   .then(() => {
//     console.log('people table created successfully');
//   })
//   .catch((error) => {
//     console.error('Error creating table people in database ', error );
//   });

export default peopleModule;
