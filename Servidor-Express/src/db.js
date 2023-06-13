import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// const db = new Sequelize("ProyectoDesarrolloWeb", "postgres", "victor8680544", {
//   host: process.env.HOST,
//   dialect: "postgres",
// });

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "postgres",
});

export default  db