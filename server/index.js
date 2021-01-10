/* ---------- PACKAGES ---------- */
const express = require('express');

/* ---------- CONSTANTS ---------- */
const app = express();
const port = 4000;

/* ---------- INITIALIZATION ---------- */


/* ---------- ROUTES ---------- */
app.get('/', (req, res) => {
    res.redirect('/api');
})

app.use('/api', require('./routes/api.js'));

/* ---------- LAUNCH ---------- */
app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:4000/`);
});