import query from '../db/db.js';
const getAllDevelopers = async () => {
  try {
    const result = await query('SELECT * FROM developers');
    return result.rows;
  } catch (error) {
    console.error('Error querying the developers,', error);
    throw error;
  }
};
export const getTotalDevelopers = async () => {
  try {
    const result = await query('SELECT COUNT(*) FROM developers');
    return result.rows[0].count;
  } catch (error) {
    console.error('Error querying the developers,', error);
    throw error;
  }
};
export default getAllDevelopers;
