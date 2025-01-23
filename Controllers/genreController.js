import query from '../db/db.js';
import getAllGenres, {
  addGenre,
  getGenre,
  removeGenre,
} from '../models/genreModel.js';

const renderGenres = async (req, res) => {
  const genres = await getAllGenres();
  res.render('genre', { genres: genres });
};

export const renderCreateGenreForm = (req, res) => {
  res.render('createGenre');
};

export const viewGenre = async (req, res) => {
  const id = req.params.id;
  const genre = await getGenre(id);
  res.render('viewGenre', { genre: genre[0] });
};

export const createGenre = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  await addGenre(name, description);
  res.redirect('/genres');
};

export const deleteGenre = async (req, res) => {
  try {
    const id = req.params.id;

    const values = [id];
    const result = await query(
      `SELECT genres.id, genres.name AS genre, STRING_AGG(games.name, ', ') AS games from genres LEFT JOIN games ON games.genre_id = genres.id WHERE genres.id = $1 GROUP BY genres.id `,
      values
    );
    const genre = result.rows[0].genre;
    const games = result.rows[0].games;
    const message = `Cannot delete genre '${genre}' because it is associated with games like ${games}. Please Update or Delete games associated with this genre.`;
    if (games) {
      return res.render('errorMessage', { message: message, route: 'genres' });
    }
    await removeGenre(id);
    res.redirect('/genres');
  } catch (error) {
    console.error('Error deleting genre.', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default renderGenres;
