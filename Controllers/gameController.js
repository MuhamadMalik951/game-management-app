import getAllDevelopers from '../models/developerModel.js';
import getAllGames, { addGames, getGame, removeGame } from '../models/gameModel.js';
import getAllGenres from '../models/genreModel.js';

const renderGame = async (req, res) => {
  const games = await getAllGames();
  res.render('game', { games: games });
};

export const renderCreateGameForm = async (req, res) => {
  const genres = await getAllGenres();
  const developers = await getAllDevelopers();
  res.render('CreateGame', { genres: genres, developers: developers });
};

export const viewGame = async (req, res) => {
  const id = req.params.id;
  const game = await getGame(id);
  res.render('viewGame', { game: game[0] });
};

export const createGame = async (req, res) => {
  const name = req.body.name;
  const developer = parseInt(req.body.developers);
  const genre = parseInt(req.body.genre);
  await addGames(name, developer, genre);
  res.redirect('/games');
};

export const deleteGame = async (req, res) => {
  const id = req.params.id;
  await removeGame(id);
  res.redirect('/games');
};
export default renderGame;
