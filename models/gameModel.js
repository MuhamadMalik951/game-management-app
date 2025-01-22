import query from '../db/db.js';
const getAllGames = async () => {
  try {
    const result = await query(
      'SELECT games.name AS name, developers.name AS developer, genres.name AS genre FROM games JOIN developers ON developers.id = games.developer_id JOIN genres ON games.genre_id = genres.id'
    );
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

export const addGames = async (name, developer, genre) => {
  try {
    const values = [name, developer, genre];
    const result = await query(
      `INSERT INTO games (name, developer_id, genre_id) VALUES ($1, $2, $3)`,
      values
    );
    console.log(values);
    console.log('Game Added Successfully!');
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export default getAllGames;
