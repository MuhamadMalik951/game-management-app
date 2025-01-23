import query from '../db/db.js';
const getAllGenres = async () => {
  try {
    const result = await query(
      `SELECT genres.id,genres.name AS name, genres.description AS description, STRING_AGG(games.name, ', ') AS games FROM genres LEFT JOIN games on genres.id = games.genre_id GROUP BY genres.id`
    );
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

export const addGenre = async (name, description) => {
  try {
    const values = [name, description];
    console.log(values);
    const result = await query(
      `INSERT INTO genres (name, description) VALUES ($1, $2)`,
      values
    );
    console.log(result.rows);
    console.log('Genre Added Successfully!');
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export const getGenre = async (id) => {
  const values = [id];
  try {
    const result = await query(
      `SELECT genres.name, genres.description AS description, COUNT(games.name) AS totalGames, STRING_AGG(games.name, ', ') AS games FROM genres LEFT JOIN games ON genres.id = games.genre_id WHERE genres.id = $1 GROUP BY genres.name, genres.description`,
      values
    );
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export const removeGenre = async (id) => {
  const values = [id];
  try {
    const result = await query(`DELETE FROM genres WHERE id = $1`, values);
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export default getAllGenres;
