import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";
import bcrypt from 'bcrypt';

export const createUserWithPerson = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  try {
<<<<<<< HEAD:Servidor-Express/controller/user.controller.js
    const person = await peopleModule.findOne({ where: { email } });
    // Si la persona no existe, devuelve un mensaje de error
    if (person) {
      return res
        .status(400)
        .json({ message: "Este correo ya esta registrado" });
    }
    // Crear la persona en la tabla personas
=======
    // Create a person in the 'people' table
>>>>>>> 9984261c39f9a9ff686d3fb1d4e892707f856393:Servidor-Express/src/controller/user.controller.js
    const newPerson = await peopleModule.create({
      name,
      lastName,
      email,
    });

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a user in the users table related to the created person
    const newUser = await UserModule.create({
      username: email,
      password: hashedPassword,
      entry_date: new Date(),
      person_id: newPerson.id,
    });

    // Return the newly created user as a response
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
<<<<<<< HEAD:Servidor-Express/controller/user.controller.js
    return res
      .status(500)
      .json({ message: "Error al crear el usuario y la persona" });
=======
    return res.status(400).json({ message: "Error creating user and person" });
>>>>>>> 9984261c39f9a9ff686d3fb1d4e892707f856393:Servidor-Express/src/controller/user.controller.js
  }
};

// GET /users
export const getUsers = async (req, res) => {
  try {
    const users = await UserModule.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
};

// GET /users/:id
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModule.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE /users/:id
export const deleteUser = async (req, res) => {
  try {
    await UserModule.destroy({where:{user_id: req.params.id}})
    res.json({
      "message": "Record deleted successfully"
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
