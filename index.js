const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

app = express();

app.get('/', (req, res) => {
    res.send('Hello Word teste'); 
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});