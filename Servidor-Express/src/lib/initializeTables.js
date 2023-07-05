import db from "../db.js";
import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";
import RoleModule from "../model/roles.module.js";

async function createTableIfNotExists(model) {
  try {
    const tableExists = await db
      .getQueryInterface()
      .showAllTables()
      .then((tables) => tables.includes(model.tableName));

    if (!tableExists) {
      await model.sync();
      console.log(`Tabla ${model.tableName} creada exitosamente`);
    }
  } catch (error) {
    console.error(`Error creando tabla ${model.tableName}:`, error);
  }
}

async function createTables() {
  try {
    const models = [peopleModule, RoleModule, UserModule];

    for (const model of models) {
      await createTableIfNotExists(model);
    }

    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating the tables:", error);
  }
}

export default createTables;
