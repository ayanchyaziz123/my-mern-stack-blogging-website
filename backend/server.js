const express = require('express')
const connectDatabase = require('./config/database');
const app = express();
const port = 4000
connectDatabase();

const posts = require('./routes/post');
app.use('/api/vv1', posts);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})