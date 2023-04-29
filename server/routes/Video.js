const express = require('express');
const router = express.Router();
const videoModel = require('../models/Video');

router.get('/api/emotion', async (req, res) => {
    try {
        const Video = await videoModel.findOne({});
        res.json(Video);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.put('/api/sademotion', async (req, res) => {
    try {
        const { emotion } = req.body;
        await videoModel.updateMany({}, { $set: { emotion: emotion } }, { new: true });
    } catch (error) {
        console.log(error);
    }
})

router.put('/api/nuetralemotion', async (req, res) => {
    try {
        const { emotion } = req.body;
        await videoModel.updateMany({}, { $set: { emotion: emotion } }, { new: true });
    } catch (error) {
        console.log(error);
    }
})

router.put('/api/happyemotion', async (req, res) => {
    try {
        const { emotion } = req.body;
        await videoModel.updateMany({}, { $set: { emotion: emotion } }, { new: true });
    } catch (error) {
        console.log(error);
    }
})

router.put('/api/ecstaticemotion', async (req, res) => {
    try {
        const { emotion } = req.body;
        await videoModel.updateMany({}, { $set: { emotion: emotion } }, { new: true });
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;