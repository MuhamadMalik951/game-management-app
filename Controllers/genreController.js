import getAllGenres, { addGenre, getGenre } from '../models/genreModel.js';

const renderGenres = async (req, res) => {
  const genres = await getAllGenres();
  res.render('genre', { genres: genres });
};

export const renderCreateGenreForm = (req, res) => {
  res.render('createGenre');
};

export const viewGenre = async (req, res) => {
  const id = req.params.id;
  const genre= await getGenre(id);
  res.render('viewGenre', { genre: genre[0] });
};

export const createGenre = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  await addGenre(name, description);
  res.redirect('/genres');
};
export default renderGenres;
