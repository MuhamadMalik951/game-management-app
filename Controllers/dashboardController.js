import getAllDevelopers, { getTotalDevelopers } from '../models/developerModel.js';
import getAllGames, { getTotalGames } from '../models/gameModel.js';
import getAllGenres, { getTotalGenres } from '../models/genreModel.js';
const renderDashboard = async (req, res) => {
  const games = await getAllGames();
  const totalGames = await getTotalGames();
  const developers = await getAllDevelopers();
  const totalDevelopers = await getTotalDevelopers();
  const genres = await getAllGenres();
  const totalGenres = await getTotalGenres();
  console.log(totalGenres);
  res.render('dashboard', {
    games: totalGames,
    developers: totalDevelopers,
    genres: totalGenres,
  });
};
export default renderDashboard;
