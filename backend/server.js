const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./connection/connection');
const userRouter = require('./routers/routers');


app.use(express.json());
app.use(cors());
app.use('/api', userRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});

connectDB();

app.get('/', (req, res)=>{
    res.send(`<h2>This is the home page <h2>`)
});
