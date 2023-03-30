const express = require('express');
const app = express();
const port = 5000;

const jsonData = {
    "Users": [
    "User-1",
    "User-2",
    "User-3"
    ],
    "Tasks": [
    {
    "Task": "Sample task -1",
    "Expiry_date": "10/21/2022",
    "User": "User-1",
    "Important": true,
    "Created_on": "01/10/2022"
    },
    {
    "Task": "Sample task -2",
    "Expiry_date": "03/03/2022",
    "User": "User-2",
    "Important": false,
    "Created_on": "01/10/2022"
    },
    {
    "Task": "Sample task -3",
    "Expiry_date": "05/30/2022",
    "User": "User-2",
    "Important": true,
    "Created_on": "01/10/2022"
    }
    ]
    }

app.get('/users', (req, res) => {
  res.json(jsonData.Users);
});

app.get('/tasks', (req, res) => {
  res.json(jsonData.Tasks);
});

app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});
