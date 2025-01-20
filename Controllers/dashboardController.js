import getAllDevelopers from '../models/developerModel.js';
import getAllGames from '../models/gameModel.js';
import getAllGenres from '../models/genreModel.js';
const renderDashboard = async (req, res) => {
  const games = await getAllGames();
  const developers = await getAllDevelopers();
  const genres = await getAllGenres();
  console.log(genres);
  res.render('dashboard', {
    games: games,
    developers: developers,
    genres: genres,
  });
};
export default renderDashboard;
