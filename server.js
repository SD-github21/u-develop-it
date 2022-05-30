// Import all modules/packages/ dependencies
require('dotenv').config()
const express = require("express");

// Set up Express.js server
const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

// Start the Express.js server on port 3001 and instruct it to listen for requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});