const express = require('express');
const sql = require('msnodesqlv8');
const bodyParser = require('body-parser');

const app = express();

const connectionString = 'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-INT72A2;Database=Healthcare_Management_System;Trusted_Connection=yes;';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  sql.open(connectionString, (err, conn) => {
    if (err) {
      console.error('Error occurred:', err);
      res.status(500).send('Error occurred while connecting to the database');
      return;
    }

    const query = 'SELECT * FROM Person';

    conn.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
      } else {
        res.json(results);
      }

      conn.close();
    });
  });
});

app.post('/insert', (req, res) => {
  const { firstname, lastname, gender, address, cnic, contact, email, dob, zipcode, state } = req.body;

  // Set gender value based on the condition
  const genderValue = gender === 'Female' ? 6 : 5;

  // Fetch the UserID for the username 'raveeha'
  sql.open(connectionString, (err, conn) => {
    if (err) {
      console.error('Error occurred:', err);
      res.status(500).send('Error occurred while connecting to the database');
      return;
    }

    const usernameQuery = `SELECT UserID FROM Users WHERE Username = 'raveeha'`;

    conn.query(usernameQuery, (err, results) => {
      if (err || !results.length) {
        console.error('Error fetching UserID:', err);
        res.status(500).send('Error fetching UserID');
        conn.close();
        return;
      }

      const userId = results[0].UserID;

      const insertQuery = `INSERT INTO Person (UserID, FirstName, LastName, Gender, Address, CNIC, Contact, Email, DateOfBirth, ZipCode, State) 
        VALUES (${userId}, '${firstname}', '${lastname}', ${genderValue}, '${address}', '${cnic}', '${contact}', '${email}', '${dob}', '${zipcode}', '${state}')`;

      conn.query(insertQuery, (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Error executing query');
        } else {
          res.status(200).send('Data inserted successfully');
        }

        conn.close();
      });
    });
  });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


