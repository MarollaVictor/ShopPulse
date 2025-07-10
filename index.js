// server.js
// ShopPulse: E-Commerce Backend Entry Point
// Author: Marolla Victor
// Description: Initializes the Express.js application for ShopPulse API.

const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();
console.log('MONGO_URI', process.env.MONGODB_URI); //Debug
const app = express();
app.use(express.json());

// Connect database
connectDB();


// Set static folder
app.use('/api/auth', authRoutes);

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ShopPulse store!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});