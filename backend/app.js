const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});

app.post('/send', (req, res) => {
    db.query("INSERT INTO test(name, email, subject,message) VALUES (?,?,?,?)", [req.body.name, req.body.email, req.body.subject, req.body.message], (err, data) => {
        if (err) {
            return res.json("Send Fail", err);
        }
        return res.json(data);
    })

})

app.listen(8081, () => {
    console.log("Listening...");
})