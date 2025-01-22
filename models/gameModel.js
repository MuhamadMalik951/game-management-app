import query from '../db/db.js';
const getAllGames = async () => {
  try {

    const result = await query('SELECT games.name AS name, developers.name AS developer, genres.name AS genre FROM games JOIN developers ON developers.id = games.developer_id JOIN genres ON games.genre_id = genres.id');
    // console.log(result.rows)
    return result.rows;
  } catch (error) {
    console.error('Error querying the games,', error);
    throw error;
  }
};
export const getTotalGames = async () => {
  try {
    const result = await query('SELECT COUNT(*) FROM games');
    return result.rows[0].count;
  } catch (error) {
    console.error('Error querying the games,', error);
    throw error;
  }
};
export default getAllGames;
