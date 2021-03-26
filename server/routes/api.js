/* ---------- MODULES ---------- */
const _ = require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

/* ---------- CLASSES & INSTANCES ---------- */
const router = express.Router();
const User = require('../models/User');

/* ---------- CONSTANTS ---------- */

/* ---------- FUNCTIONS ---------- */

/* ---------- INITIALIZATION ---------- */

/* ---------- ROUTES ---------- */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/users', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/createUser', async (req, res) => {
    const name = req.body.name;

    const user = new User({
        name
    });

    user.save()
        .then(() => res.redirect('/users'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/getUser/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/updateUser/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.name = req.body.name;

            user.save()
                .then(() => res.redirect('/users'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/deleteUser/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/users'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;