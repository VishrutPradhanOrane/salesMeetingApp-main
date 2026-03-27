require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : '*';

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);
app.use(bodyParser.json());


const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

// Start server




app.get("/", (req, res) => {
  res.send("Welcome to the Sales Meeting App API!");
 
});


// // <<------ Login
app.post('/login', (req, res) => {
  const { Username, password } = req.body;

  db.query(
    'SELECT * FROM admin WHERE Username=? AND password=?',
    [Username, password],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.length > 0) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    }
  );
});

app.get('/dashboard-count', (req, res) => {
  db.query('SELECT COUNT(*) AS total FROM user', (userErr, userRows) => {
    if (userErr) return res.status(500).send(userErr);

    db.query('SELECT COUNT(*) AS total FROM company', (companyErr, companyRows) => {
      if (companyErr) return res.status(500).send(companyErr);

      db.query('SELECT COUNT(*) AS total FROM department', (deptErr, deptRows) => {
        if (deptErr) return res.status(500).send(deptErr);

        return res.json({
          users: userRows[0].total,
          company: companyRows[0].total,
          department: deptRows[0].total,
        });
      });
    });
  });
});


// // <<<<---- Users

app.get('/user', (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/user', (req, res) => {
  const { firstname,lastname, email, phonenumber } = req.body;
  db.query(
    'INSERT INTO user (firstname, lastname, email, phonenumber) VALUES (?, ?, ?, ?)',
    [firstname, lastname, email, phonenumber],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});


// <<-------Departments

// app.get('/departments', (req, res) => {
//   db.query('SELECT * FROM department', (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.send(result);
//   });
// });

app.post('/departments', (req, res) => {
  const {  departmentName, description } = req.body;

  db.query(
    'INSERT INTO department (departmentName, description) VALUES (?, ?)',
    [departmentName, description],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: "Department Added" });
    }
  );
});



// <<<<----- Company

app.get('/company', (req, res) => {
  db.query('SELECT * FROM company', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.post('/company', (req, res) => {
  const { companyName, area, address, department} = req.body;
  console.log("BODY:",req.body);

  db.query(
    'INSERT INTO company (companyName, area, address, department) VALUES (?, ?, ?, ?)',
    [companyName, area, address, department],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: "Company Added" });
    }
  );
});

// get the all department 

app.get('/departments',  (req, res) => {
  
    const departments =  db.query('SELECT * FROM department', (err, result)=>{
      if (err) return res.status(500).send(err);
          res.send(result);
        });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
