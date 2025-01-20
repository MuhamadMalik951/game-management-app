import query from '../db/db.js';
const getAllGenres = async () => {
  try {
    const result = await query('SELECT genre AS name FROM games');
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error querying the genres,', error);
    throw error;
  }
};
export default getAllGenres;
