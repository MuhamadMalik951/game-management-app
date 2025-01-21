import getAllDevelopers from '../models/developerModel.js';

const renderDeveloper = async (req, res) => {
  const developers = await getAllDevelopers();
  res.render('developer', { developers: developers });
};

export default renderDeveloper;
