const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./db/db');
const cors = require('cors');


const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', require('./routes/userroutes'));
app.use('/api/tache', require('./routes/tacheroutes'));

app.listen(3000, () => console.log('server started' ));

