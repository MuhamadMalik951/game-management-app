import query from '../db/db.js';
import getAllDevelopers, {
  addDeveloper,
  getDeveloper,
  removeDeveloper,
} from '../models/developerModel.js';
const renderDeveloper = async (req, res) => {
  const developers = await getAllDevelopers();
  res.render('developer', { developers: developers });
};

export const renderCreateDeveloperForm = (req, res) => {
  res.render('createDeveloper');
};

export const viewDeveloper = async (req, res) => {
  const id = req.params.id;
  const dev = await getDeveloper(id);
  res.render('viewDeveloper', { developer: dev[0] });
};

export const createDeveloper = async (req, res) => {
  const name = req.body.name;
  const bio = req.body.bio;
  await addDeveloper(name, bio);
  res.redirect('/developers');
};

export const deleteDeveloper = async (req, res) => {
  try {
    const id = req.params.id;
    const values = [id];
    const result = await query(
      `SELECT developers.id, developers.name AS name, developers.bio, COUNT(games.name) AS games_developed, STRING_AGG(games.name, ', ') AS games FROM developers LEFT JOIN games ON developers.id = games.developer_id WHERE developers.id = $1 GROUP BY games.developer_id, developers.name, developers.bio, developers.id`,
      values
    );
    console.log(result.rows);
    const name = result.rows[0].name;
    const games = result.rows[0].games;
    const message = `Cannot delete developer '${name}' because it is associated with games like ${games}. Please Update or Delete games associated with this developer.`;
    if (games) {
      return res.render('errorMessage', { message: message , route: 'developers'});
    }
    await removeDeveloper(id);
    res.redirect('/developers');
  } catch (error) {
    console.error('Error deleting developer.', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default renderDeveloper;
