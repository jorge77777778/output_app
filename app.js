const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kawata1506',
    database: 'output_app'
    });

    connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
    });

//app.get('/', (req, res) => {
//    res.render('hello.ejs');
//});

app.get('/', (req, res) => {
    res.render('login.ejs',{ message: '' });
});

app.post('/select',(req,res) => {
    connection.query(
        'select * from users where name=(?) and password=(?)',
        [req.body.userName,req.body.passWord],
        function(error,results){
            if (results[0] != undefined){
                res.redirect('/menu');
            }else{
                res.render('login.ejs',{ message: 'ログイン情報が登録されていません。' } )
            }
        }
    )
});

app.get('/menu', (req, res) => {
    res.render('menu.ejs');
});

app.listen(3000);

