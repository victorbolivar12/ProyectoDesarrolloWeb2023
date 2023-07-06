import peopleModule from "../model/people.module.js";

// PUT /users/:id
export const updatePeople = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the record exists
    const existingPeople = await peopleModule.findOne({
      where: { people_id: id },
    });
    if (!existingPeople) {
      res.status(404).json({ message: "Registro no encontrado" });
      return;
    }

    await peopleModule.update(req.body, { where: { people_id: id } });
    res.json({
      message: "Record updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
