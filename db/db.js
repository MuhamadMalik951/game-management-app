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

// pool.query(`CREATE DATABASE GAMES`)
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
const insertQuery = `INSERT INTO games (name, genre, developer_id) VALUES ('Fortnite', 'BattleRoyal', 1)`;
// const insertQuery = `INSERT INTO developers (name) VALUES ('sajid'), ('talha')`;
// await pool.query(insertQuery);
// await pool.query(`DELETE FROM games WHERE id = 13`);
const games = await pool.query(`SELECT * FROM games`);
// console.log(games.rows);
const dev = await pool.query(`SELECT * FROM developers`);
// console.log(dev.rows);

const queryRows = await pool.query(
  `SELECT games.genre AS genre, games.name AS game_title, developers.name AS developer_name FROM games JOIN developers ON developers.id = games.developer_id`
);
// console.log(queryRows.rows);

// pool.query(`DROP TABLE games`);
const query = (query, params) => pool.query(query, params);
export default query;
