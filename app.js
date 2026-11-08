const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
    res.send('Hubungi kami di routing-app');
});

app.listen(5000, () => console.log('Server berjalan di http://lokalhost:5000'));