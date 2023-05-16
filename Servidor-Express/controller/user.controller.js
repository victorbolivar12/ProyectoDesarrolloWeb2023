import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";

export const createUserWithPerson = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;

  try {
    // Crear la persona en la tabla personas
    const newPerson = await peopleModule.create({
      nombre,
      apellido,
      email,
    });

    // Crear el usuario en la tabla usuarios relacionado con la persona creada
    const newUser = await UserModule.create({
      username: email,
      password: contraseña,
      fecha_ingreso: new Date(),
      id_persona: newPerson.id,
    });

    // Devolver el nuevo usuario creado como respuesta
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al crear el usuario y la persona" });
  }
};

// GET /users
export const getUsers = async (req, res) => {
  try {
    const users = await UserModule.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
