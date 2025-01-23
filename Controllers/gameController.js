import getAllDevelopers from '../models/developerModel.js';
import getAllGames, { addGames } from '../models/gameModel.js';
import getAllGenres from '../models/genreModel.js';
addGames;
const renderGame = async (req, res) => {
  const games = await getAllGames();
  res.render('game', { games: games });
};

export const renderCreateGameForm = async (req, res) => {
  const genres = await getAllGenres();
  const developers = await getAllDevelopers();
  res.render('createGame', { genres: genres, developers: developers });
};
export const viewGame = async (req, res) => {
  res.render('viewGame');
};
export const createGame = async (req, res) => {
  const name = req.body.name;
  const developer = parseInt(req.body.developers);
  const genre = parseInt(req.body.genre);
  await addGames(name, developer, genre);
  res.redirect('/games');
};

export default renderGame;
