import db from "../db.js";
import UserModule from '../model/user.module.js';
import peopleModule from '../model/people.module.js';
import RoleModule from "../model/roles.module.js";

async function createTables() {
  try {
    // Check if User model table already exists
    const userTableExists = await db.getQueryInterface().showAllTables()
      .then((tables) => tables.includes(UserModule.tableName));

    if (!userTableExists) {
      await UserModule.sync();
      console.log(`Tabla ${UserModule.tableName} creada exitosamente`);
    }

    const peopleTableExists = await db.getQueryInterface().showAllTables()
      .then((tables) => tables.includes(peopleModule.tableName));

    if (!peopleTableExists) {
      await peopleModule.sync();
      console.log(`table ${peopleModule.tableName} successfully created`);
    }

    const rolesTableExists = await db.getQueryInterface().showAllTables()
      .then((tables) => tables.includes(RoleModule.tableName));

    if (!rolesTableExists) {
      await RoleModule.sync();
      console.log(`Tabla ${RoleModule.tableName} creada exitosamente`);
    }

    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

export default createTables;
