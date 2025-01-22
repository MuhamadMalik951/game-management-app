import query from '../db/db.js';
const getAllDevelopers = async () => {
  try {
    const result = await query(
      `SELECT developers.name AS name, developers.bio, COUNT(games.name) AS games_developed, STRING_AGG(games.name, ', ') AS games FROM developers JOIN games ON developers.id = games.developer_id GROUP BY games.developer_id, developers.name, developers.bio`
    );
    console.log(result.rows);
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
