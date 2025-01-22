import query from '../db/db.js';
const getAllGenres = async () => {
  try {
    const result = await query(`SELECT genres.name AS name, genres.description AS description, STRING_AGG(games.name, ', ') AS games FROM genres JOIN games on genres.id = games.genre_id GROUP BY genres.id, genres.name`);
    console.log(result.rows)
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
