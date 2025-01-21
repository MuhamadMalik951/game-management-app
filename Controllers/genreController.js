import getAllGenres from '../models/genreModel.js';

const renderGenres = async (req, res) => {
  const genres = await getAllGenres();
  res.render('genre', { genres: genres });
};
export default renderGenres;
