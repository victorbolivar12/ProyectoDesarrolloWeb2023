import { DataTypes } from 'sequelize';
import db from "../db.js";
import UserModule from './user.module.js'

const RoleModule = db.define(
  'roles',
  {
    ID_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModule,
        key: 'user_id', 
      },
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'roles',
    timestamps: false,
  }
);

export default RoleModule;
