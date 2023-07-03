import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const person = await peopleModule.findOne({ where: { email } });

    if (!person) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const user = await UserModule.findOne({ where: { person_id: person.id } });
 
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        return res.status(200).json({ token });
      } else {
        return res.status(401).json({ message: "invalid credentials" });
      }
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "server error" });
  }
};
