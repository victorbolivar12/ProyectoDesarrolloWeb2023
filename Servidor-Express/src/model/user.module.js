import { DataTypes } from "sequelize";
import db from "../db.js";
import peopleModule from "./people.module.js";
import RoleModule from "./roles.module.js"

const UserModule = db.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoleModule,
        key: "id_rol",
      },
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
        key: "people_id",
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

UserModule.belongsTo(peopleModule, { foreignKey: "person_id" });
UserModule.belongsTo(RoleModule, { foreignKey: "rol_id" });

UserModule.prototype.validPassword = async function (password) {
  return this.password === password;
};

export default UserModule;
