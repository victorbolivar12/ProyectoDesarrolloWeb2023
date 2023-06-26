import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import peopleModule from "./people.module.js";

const UserModule = db.define(
  "users",
  {
    id_usuario: {
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
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    id_persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: peopleModule,
        key: "id",
      },
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

UserModule.belongsTo(peopleModule, { foreignKey: "id_persona" });

UserModule.prototype.validPassword = async function (password) {
  return this.password === password;
};

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
//   });

export default UserModule;
