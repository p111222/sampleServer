const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// })
app.use(express.json())
// app.use(cors({
//     origin: "http://13.:3000",
//     credentials: true
// }))

app.get('/api/hello', (req, res) => {
    return res.status(200).json({ msg: "Hello, ec2!" });
});

app.get('/api/hi', (req, res) => {
    return res.status(200).json({ msg: "hi, World!" });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});