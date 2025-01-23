import query from '../db/db.js';
const getAllGames = async () => {
  try {
    const result = await query(
      'SELECT games.id, games.name AS name, developers.name AS developer, genres.name AS genre FROM games RIGHT JOIN developers ON developers.id = games.developer_id JOIN genres ON games.genre_id = genres.id '
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
    console.log('Game Added Successfully!');
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export const updateGame = async (name, developer_id, genre_id) => {
  try {
    const values = [name, developer_id, genre_id, id];
    const result = await query(
      `UPDATE games 
   SET name = $1, developer_id = $2, genre_id = $3 
   WHERE id = $4`,
      values
    );
  } catch (error) {
    console.error(error);
  }
};

export const getGame = async (id) => {
  const values = [id];
  try {
    const result = await query(
      `SELECT games.name AS name, developers.name AS developer, genres.name AS genre FROM games JOIN developers ON games.developer_id = developers.id JOIN genres ON games.genre_id = genres.id WHERE games.id = $1`,
      values
    );
    // console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export const removeGame = async (id) => {
  const values = [id];
  try {
    const result = await query(`DELETE FROM games WHERE id = $1`, values);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export default getAllGames;
