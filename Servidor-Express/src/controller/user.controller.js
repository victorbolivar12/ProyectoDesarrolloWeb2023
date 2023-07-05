import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";
import RoleModule from "../model/roles.module.js";
import bcrypt from 'bcrypt';

export const createUserWithPerson = async (req, res) => {
  const { name, lastName, email, password,rol_id } = req.body;

  try {
    const person = await peopleModule.findOne({ where: { email } });
    // If the person does not exist, return an error message
    if (person) {
      return res
        .status(400)
        .json({ message: "This email is already registered" });
    }
    // Create the person in the people table
    const newPerson = await peopleModule.create({
      name,
      lastName,
      email,
      status: "Activo"
    });

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a user in the users table related to the created person
    const newUser = await UserModule.create({
      username: email,
      password: hashedPassword,
      entry_date: new Date(),
      person_id: newPerson.people_id,
      rol_id
    });

    // Return the newly created user as a response
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error creating user and person" });
  }
};

// GET /users
export const getUsers = async (req, res) => {
  try {
    const users = await UserModule.findAll({
      attributes: ["username", "entry_date"],
      include: [
        {
          model: peopleModule,
          attributes: ["name", "lastName", "status"],
        },
        {
          model: RoleModule,
          attributes: ["rol_name"],
        },
      ],
    });
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
