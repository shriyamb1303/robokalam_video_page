const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const promptRoutes = require('./routes/Video');
const videoModel = require('./models/Video');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch((e) => {
        console.log(e);
    })


app.use('/', promptRoutes);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})