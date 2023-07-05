import seedRoles from "./roles.seeder.js";

const runSeeders = async () => {
  try {
    //Call the seedRoles function to insert the roles
    await seedRoles();

    // Call other seeders to insert additional records
    // Example:
    // await seederFunction1();
    // await seederFunction2();
    // ...
  } catch (err) {
    console.error("Error running seeders:", err);
  }
};

export default runSeeders;
