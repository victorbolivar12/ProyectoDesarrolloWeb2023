import fs from 'fs';
import path from 'path';
import sequelize from './config/sequelize'; // Importa tu instancia de Sequelize

async function createTables() {
  try {
    // Read the model files from the directory
    const modelsDirectory = path.join(__dirname, 'model');
    const modelFiles = await fs.promises.readdir(modelsDirectory);

    // Loop through model files and sync tables
    for (const file of modelFiles) {
      // Import the model from the file
      const model = require(path.join(modelsDirectory, file)).default;

      // Check if the table already exists in the database
      const tableExists = await model.modelExists();

      if (!tableExists) {
        // Create the table if it doesn't exist
        await model.sync();
        console.log(`Table ${model.name} created successfully`);
      }
    }

    console.log('¡Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

export default createTables;
