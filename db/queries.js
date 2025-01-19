// await client.query(`CREATE DATABASE my_database`);
// const client = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: 'my_database', // Use the new database name
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });
// await client.connect();
// 
// const createTableQuery = `
//   CREATE TABLE messages (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255),
//     message VARCHAR(255),
//     date TIMESTAMP
//   )
// `;
// await client.query(createTableQuery);
// const insertQuery = `
//   INSERT INTO messages (name, message, date) 
//   VALUES ($1, $2, $3)
// `;
// const values = ['John Doe', 'Hello, World!', '2025-01-16 10:00:00'];
// await client.query(insertQuery, values);
// const result = await client.query('SELECT * FROM messages');
// console.log(result.rows);
// const updateQuery = `
//   UPDATE messages 
//   SET message = $1 
//   WHERE id = $2
// `;
// await client.query(updateQuery, ['Updated message', 1]);
// const deleteQuery = 'DELETE FROM messages WHERE id = $1';
// await client.query(deleteQuery, [1]);
// await client.end();


