import getAllDevelopers, {
  addDeveloper,
  getDeveloper,
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

export default renderDeveloper;
