import { Sequelize } from "sequelize";

const db = new Sequelize("ProyectoDesarrolloWeb", "postgres", "victor8680544", {
  host: "localhost",
  dialect: "postgres",
});

export default  db