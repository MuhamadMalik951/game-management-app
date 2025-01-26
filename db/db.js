import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// pool.query(`CREATE DATABASE auth`)
// await pool.query(`CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))`)
const users =  await pool.query(`SELECT * FROM users`)
// console.log(users.rows)
// pool.query(`CREATE TABLE games(
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255),
//     genre VARCHAR(255),
//     developer VARCHAR(255)
//     )`)

// pool.query(`CREATE TABLE developers(
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL
//     )`);

// pool.query(`CREATE TABLE developers(
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL
//     )`);
// pool.query(`CREATE TABLE games(
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     genre VARCHAR(100) NOT NULL,
//     developer_id INT REFERENCES developers(id)
//     )`);
// const values = ['GTA V', 'Open World', 1];
// const insertQuery = `INSERT INTO games (name, genre, developer_id) VALUES ('Fortnite', 'BattleRoyal', 1)`;
// const insertQuery = `CREATE TABLE genres(
// id SERIAL PRIMARY KEY,
// name VARCHAR(100) NOT NULL,
// description VARCHAR(100) NOT NULL
// )`;
// const insertQuery = `
//   INSERT INTO genres (name, description) VALUES
//   ('Open World', 'Explore vast, dynamic environments with complete freedom and countless possibilities.'),
//   ('Adventure', 'Embark on thrilling journeys filled with quests, puzzles, and stories.'),
//   ('Warfare', 'Engage in intense, strategic combat scenarios in the heat of battle.'),
//   ('Battle Royale', 'Fight to be the last one standing in a high-stakes, player-versus-player arena.'),
//   ('Multiplayer', 'Connect and compete with players around the world in real-time gameplay.')
// `;

// const insertQuery = `DROP TABLE genres`;
// const insertQuery = `UPDATE developers SET bio = 'Talha is a backend developer with expertise in Node.js and Python.' WHERE id = 3;
const insertQuery = `UPDATE games SET developer_id = 1 WHERE genre_id = 8`;
// const insertQuery = `ALTER TABLE games DROP COLUMN genre_id `;
// const insertQuery = `ALTER TABLE games ADD COLUMN genre_id INT`;
// await pool.query(insertQuery);
// await pool.query(`DELETE FROM games WHERE id = 13`);
const genres = await pool.query(
  `SELECT genres.name AS genre_name, genres.description AS genre_description, STRING_AGG(games.name, ', ') AS games FROM genres JOIN games on genres.id = games.genre_id GROUP BY genres.name, genres.description`
);
// console.log(genres.rows);
const games = await pool.query(
  `SELECT genres.name AS name FROM genres LEFT JOIN games on genres.id = games.genre_id GROUP BY genres.id`
);
const gamesss = await pool.query(`SELECT * FROM games`);
// console.log(gamesss.rows)
const gamess =
  await pool.query(`SELECT games.name AS name, developers.name AS developer, genres.name AS genre FROM games JOIN developers ON developers.id = games.developer_id
   JOIN genres ON games.genre_id = genres.id
  `);
// console.log(gamess.rows);
const dev = await pool.query(
  `SELECT developers.name AS name, developers.bio, COUNT(games.name) AS games_developed ,STRING_AGG(games.name, ', ') AS games FROM developers JOIN games ON developers.id = games.developer_id GROUP BY games.developer_id, developers.name, developers.bio`
);
const devs = await pool.query(`SELECT * FROM genres`);
// console.log(devs.rows);
const queryRows = await pool.query(
  `SELECT games.name AS game_title, developers.name AS developer_name FROM games JOIN developers ON developers.id = 2`
);
// console.log(queryRows.rows);
const developer = await pool.query(
  `SELECT developers.name AS name, STRING_AGG(games.name, ', ') AS games  FROM developers LEFT JOIN games ON developers.id = games.developer_id WHERE developers.id = 1 GROUP BY developers.id `
);
const game = await pool.query(
  `SELECT genres.id, genres.name AS genre, STRING_AGG(games.name, ', ') AS games from genres LEFT JOIN games ON games.genre_id = genres.id WHERE genres.id = 1 GROUP BY genres.id `
);

// console.log(game.rows);
// pool.query(`DROP TABLE games`);
const query = (query, params) => pool.query(query, params);
export default query;
