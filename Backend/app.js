const express = require('express');
const app = express();
const cors = require('cors');


require('./db/db');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(require('./routes/routes'));


app.listen(5000, () => {
    console.log("server running at port number", 5000);
})