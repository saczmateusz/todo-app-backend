const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const todos = require('./routes/api/todos');

app.use('/api/todos', todos);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
