// index.js
const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json()); // Use built-in middleware

// MySQL connection
const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Dharsh15",
  database: "naan",
});

// Start server
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

// Test DB connection
db.getConnection((err, connection) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database is connected");
    connection.release(); // Release connection after testing
  }
});

// GET all users
app.get("/alluser", (req, res) => {
  const query = "SELECT * FROM emp";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send("Database error");
    }
    res.json(result);
  });
});

// POST to insert a user
app.post("/singleuser", (req, res) => {
  const { empid, nmae, job } = req.body;

  if (!empid || !nmae || !job) {
    return res.status(400).send("Missing empid, nmae, or job");
  }

  const query = "INSERT INTO emp (empno, ename, job) VALUES (?, ?, ?)";
  db.query(query, [empid, nmae, job], (err, result) => {
    if (err) {
      console.error("Insert error:", err.message);
      return res.status(500).send("Database error");
    }
    res.status(200).send("Data is inserted");
  });
});
