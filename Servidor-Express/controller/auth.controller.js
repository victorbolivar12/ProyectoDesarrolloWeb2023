import UserModule from "../model/user.module.js";
import peopleModule from "../model/people.module.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca a la persona en la base de datos utilizando su correo electrónico
    const person = await peopleModule.findOne({ where: { email } });

    // Si la persona no existe, devuelve un mensaje de error
    if (!person) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Busca al usuario en la base de datos utilizando su id_persona y contraseña
    const user = await UserModule.findOne({
      where: { id_persona: person.id, password },
    });

    // Verifica si el usuario existe y si su contraseña es válida
    if (user) {
      // Retorna el usuario y la información de la persona
      return res.status(200).json({ user, person });
    } else {
      // Si el usuario no existe o su contraseña es inválida, devuelve un mensaje de error
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};