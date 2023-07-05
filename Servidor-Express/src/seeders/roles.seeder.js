import RoleModule from "../model/roles.module.js";

const seedRoles = async () => {
  try {
    // Check if there are any records in the roles table
    const existingRoles = await RoleModule.findAll();
    if (existingRoles.length > 0) {
      return;
    }

    const roles = [
      { id_rol:1, rol_name: "Admin", description: "Tiene todos los permisos del sistema", status: "Activo"},
      { id_rol:2, rol_name: "Regular", description: "Tiene acceso a su calendario a a los terapeutas", status: "Activo"},
      { id_rol:3, rol_name: "Terapeuta", description: "Tiene acceso a au calendario y la informacion de los clientes", status: "Activo"},
    ];

    // Insert the roles in the database
    const insertedRoles = await RoleModule.bulkCreate(roles);
    console.log("Role records inserted successfully");
  } catch (error) {
    console.error("Error inserting role records:", error);
  }
};

export default seedRoles;
