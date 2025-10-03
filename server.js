const express = require('express');
const dotenv = require('dotenv');
const connectDB  = require('./config/db');

dotenv.config();

const app = express();

// Middleware: parse JSON
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/students", require("./routes/studentRoutes"));

// Default route (HOME Page)
app.get("/", (req, res) => {
    res.send("API Server for Express JS is up and running....");
});


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));