// server.js
// ShopPulse: E-Commerce Backend Entry Point
// Author: Marolla Victor
// Description: Initializes the Express.js application for ShopPulse API.

const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const connectDB = require('./public/config/db.config');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();
console.log('MONGO_URI', process.env.MONGO_URI); //Debug


const path = require('path');

const app = express();

// Connect database
connectDB();


// Set static folder

app.use('/api/auth', authRoutes);

// Parse requests of content-type - application/json
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ShopPulse store!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});