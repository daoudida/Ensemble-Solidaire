
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware pour les formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir le frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/don', (req, res) => {
    const { name, amount } = req.body;
    console.log(`Don reçu : ${name} a donné ${amount} FCFA`);
    res.send(`<h2>Merci ${name} pour votre don de ${amount} FCFA !</h2>`);
});

app.listen(PORT, () => {
    console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
