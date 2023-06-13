import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // ‌Search for the person in the database using their email
    const person = await peopleModule.findOne({ where: { email } });

    // If the person does not exist, return an error message
    if (!person) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Look up the user in the database using their person_id
    const user = await UserModule.findOne({ where: { person_id: person.id } });

    // Check if the user exists and if the password is valid
    if (user) {
      // Compare the provided password with the password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        // Return the username and information of the person
        return res.status(200).json({ user, person });
      } else {
        // If the password is invalid, return an error message
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      // If the user does not exist, return an error message
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Server error" });
  }
};