import query from '../db/db.js';
const getAllGames = async () => {
  try {
    const result = await query('SELECT * FROM games');
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error querying the games,', error);
    throw error;
  }
};
export default getAllGames;
