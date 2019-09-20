const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Todos
router.get('/', async (req, res) => {
    const todos = await loadTodosCollection();
    res.send(await todos.find({}).toArray());
});

// Add Todo


// Delete Todo


async function loadTodosCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://user1337:xerxes11@cluster0-vuetodoapp-m6eym.azure.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    return client.db('vue_todo_app').collection('todos');
}

module.exports = router;