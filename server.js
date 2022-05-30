// Import all modules/packages/ dependencies
require('dotenv').config()
const express = require("express");
const mysql = require("mysql2");

// Set up Express.js server
const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // Your MySql username
        user: process.env.user,
        // Your MySql password
        password: process.env.password,
        database: "election"
    },
    console.log("Connected to the election database.")
);

// Request a list of all potential candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// Request a single candidate's information based on their ID
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

// Start the Express.js server on port 3001 and instruct it to listen for requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});