import query from '../db/db.js';
const getAllDevelopers = async () => {
  try {
    const result = await query('SELECT * FROM developers');
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error querying the developers,', error);
    throw error;
  }
};
export default getAllDevelopers;
