import query from '../db/db.js';
const getAllGenres = async () => {
  try {
    const result = await query('SELECT name, description FROM genres');
    return result.rows;
  } catch (error) {
    console.error('Error querying the genres,', error);
    throw error;
  }
};
export const getTotalGenres = async () => {
  try {
    const result = await query('SELECT COUNT(*) FROM genres');
    return result.rows[0].count;
  } catch (error) {
    console.error('Error querying the genres,', error);
    throw error;
  }
};
export default getAllGenres;
