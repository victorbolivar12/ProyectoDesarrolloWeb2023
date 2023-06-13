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


// Sincroniza el modelo con la base de datos
// UserModule.sync({ force: false })
//   .then(() => {
//     console.log('user table created successfully');
//   })
//   .catch((error) => {
//     console.error( 'Error creating table "users" in database:', error);
//   });

export default UserModule;
