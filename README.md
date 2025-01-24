# Game Management App

A web application to manage games, developers, genres, and dashboards using Node.js and Express, with EJS as the templating engine.

## Features

- **Dashboard:** View a summary of all games, developers, and genres.
- **Games:** Add, view, edit, and delete games.
- **Developers:** Manage developer information.
- **Genres:** Handle game genres.
- **Responsive Design:** Built with EJS templates for dynamic views.

## Tech Stack

- **Backend:** Node.js with Express
- **Frontend:** EJS templating engine
- **Database:** PostgreSQL
- **Deployment:** Railway

## Project Structure

```
project-root/
├── Controllers/          # Controller logic for routes
├── Models/               # Database models
├── Routes/               # Express routers
├── Views/                # EJS templates
├── public/               # Static assets (CSS, JS, images)
├── .env                  # Environment variables
├── app.js                # Main entry point
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- Railway account (for deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/game-management-app.git
   cd game-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   DB_PORT=5432
   ```

4. Initialize the database:
   - Use the provided SQL script to set up your PostgreSQL database (if any). You can use a tool like `pgAdmin` or run the script directly.

5. Start the development server:
   ```bash
   npm start
   ```

6. Access the application at:
   ```
   http://localhost:3000
   ```

## Deployment

The app is deployed on Railway. To deploy:

1. Push your code to GitHub.
2. Link your GitHub repository to Railway.
3. Add the required environment variables in the Railway project settings:
   ```env
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   DB_PORT=5432
   ```
4. Deploy the project, and access it via the provided Railway domain.

## Environment Variables

| Variable         | Description                         |
|------------------|-------------------------------------|
| `DB_HOST`        | PostgreSQL host URL                 |
| `DB_USER`        | PostgreSQL username                 |
| `DB_PASSWORD`    | PostgreSQL password                 |
| `DB_NAME`        | Name of the PostgreSQL database     |
| `DB_PORT`        | Port for the PostgreSQL database    |


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Railway](https://railway.app/)
- [Node.js](https://nodejs.org/)

