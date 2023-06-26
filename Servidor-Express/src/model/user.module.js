import { DataTypes } from "sequelize";
import db from "../db.js";
import peopleModule from "./people.module.js";

const UserModule = db.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    entry_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: peopleModule,
        key: "id",
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

UserModule.belongsTo(peopleModule, { foreignKey: "person_id" });

UserModule.prototype.validPassword = async function (password) {
  return this.password === password;
};

<<<<<<< HEAD:Servidor-Express/model/user.module.js
//Sincroniza el modelo con la base de datos
UserModule.sync({ force: false })
  .then(() => {
    console.log('Tabla "usuarios" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "usuarios" en la base de datos:',
      error
    );
  });

// const newUser = {
//   username: "juanperez13",
//   password: "1234",
//   fecha_ingreso: new Date(),
//   id_persona: 1, // el id de la persona relacionada con este usuario
// };

// UserModule.create(newUser)
//   .then(usuarioCreado => {
//     console.log('Nuevo usuario insertado:', usuarioCreado);
//   })
//   .catch(error => {
//     console.error('Error al insertar usuario:', error);
=======

// Sincroniza el modelo con la base de datos
// UserModule.sync({ force: false })
//   .then(() => {
//     console.log('user table created successfully');
//   })
//   .catch((error) => {
//     console.error( 'Error creating table "users" in database:', error);
>>>>>>> 9984261c39f9a9ff686d3fb1d4e892707f856393:Servidor-Express/src/model/user.module.js
//   });

export default UserModule;
