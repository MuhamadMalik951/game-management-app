import getAllGames from '../models/gameModel.js';
const renderGame = async (req, res) => {
  const games = await getAllGames();
  res.render('game', { games: games });
};

export default renderGame;
