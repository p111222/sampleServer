const express = require('express');
const app = express();
const port = 5000;

app.get('/api/hello', (req, res) => {
    return res.status(200).json({ msg: "Hello, World!" });
});

app.get('/api/hi', (req, res) => {
    return res.status(200).json({ msg: "hi, World!" });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});