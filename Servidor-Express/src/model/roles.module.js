import { DataTypes } from 'sequelize';
import db from "../db.js";


const RoleModule = db.define(
  'roles',
  {
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: 'roles',
    timestamps: false,
  }
);

export default RoleModule;
