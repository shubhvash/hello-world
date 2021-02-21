const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world! this is sv');
});

app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
});