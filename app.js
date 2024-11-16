const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const meals = require('./meals.json');

app.use(cors()); 
app.use(express.json()); 

app.get('/randomMeal', (req, res) => {
    if (meals.length === 0) {
        return res.status(500).json({ error: 'No meals available' });
    }
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];
    console.log(randomMeal)
    res.json({ meal: randomMeal });
});

app.listen(port, () => {
  console.log(`Microservice is running on port ${port}`);
});
