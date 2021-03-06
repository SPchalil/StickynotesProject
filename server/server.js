// MySQL Configs
const {MySQL_Configs, port} = require('./config');

/*-----------Building a REST API using Node.js/ Express / MySql----------------*/

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*-----------MySql - GET react-stickynotes-user----------------*/

app.get('/', (req, res) => {
  res.send('Hello World!')
});

/*-----------MySql - GET Users----------------*/

app.get('/users', (req, res) => {
let mysql      = require('mysql2');
let connection = mysql.createConnection(MySQL_Configs);
connection.connect();

connection.query('SELECT * from users', function (error, results, fields) {
   if (error) throw error;
   res.send(results);
 });
connection.end();
})

/*-----------MySql - GET Stickynotes----------------*/

app.get('/stickynotes', (req, res) => {
   let mysql      = require('mysql2');
   let connection = mysql.createConnection(MySQL_Configs);
   connection.connect();
   connection.query('SELECT * from stickynotes', function (error, results, fields) { //ORM
      if (error) throw error;
      res.send(results);
    });
   connection.end();
   })

/*-----------DELETE - Stickynotes----------------*/

app.delete('/stickynotes/:stickynoteid', (req, res)=>{
      let mysql      = require('mysql2');
      let connection = mysql.createConnection(MySQL_Configs);

      connection.connect();
      let { stickynoteid } = req.params.stickynoteid;
      let sql = `DELETE FROM stickynotes WHERE stickynoteid = ${req.params.stickynoteid}`; 
      console.log("id: ", req.params.stickynoteid);
      connection.query(sql, (error, results, fields)=> { 
      if (error) return console.error(error.message);
      res.status(200).send(results);
      console.log('Deleted Row(s):', results.affectedRows);
    });
      connection.end();
      })

/*-----------PATCH - Stickynotes----------------*/
app.patch('/stickynotes/:stickynoteid', (req, res)=>{
      let mysql      = require('mysql2');
      let connection = mysql.createConnection(MySQL_Configs);
      connection.connect();
      let { stickynoteid } = req.params.stickynoteid;
      console.log("Body: ", req.body);
      let sql = `UPDATE stickynotes SET text =  '${req.body.text}' WHERE stickynoteid = '${req.params.stickynoteid}'`;
      console.log("id: ", req.params.stickynoteid);
      connection.query(sql, (error, results, fields)=> {
        if (error) return console.error(error.message);
        res.status(200).send(results);
      });
      connection.end();
      })

/*-----------POST - Checking (Register)----------------*/
app.post('/check', (req, res)=>{
   let mysql      = require('mysql2');
   let connection = mysql.createConnection(MySQL_Configs);
   connection.connect();
     const email= req.body.email;
     const username= req.body.username;
     const password= req.body.password;
     if (email && username && password){
      connection.query('SELECT * FROM users WHERE email = ? OR username =  ? AND password = ?', [email, username, password], function (err, results) {
      if (err) return console.error(err.message);
      res.status(200).send(results);
      });
     }
   connection.end();
   });

 /*-----------POST - Users (Registration)----------------*/
 app.post('/registration', (req, res)=>{
   let mysql      = require('mysql2');
   let connection = mysql.createConnection(MySQL_Configs);
   connection.connect();
   const username=req.body.username;
   const email = req.body.email;
	const password = req.body.password;
	if (email && username && password ) {
		connection.query('SELECT * FROM users WHERE email = ? OR username =  ? AND password = ?', [email, username, password], function(error, rows, fields) {

         //if (error) return console.error(error.message);
         // res.status(200).send(results);

			if (!rows.length ) {
            connection.query('INSERT INTO users SET email =  ? AND username =  ? AND password =  ?' , [email, username, password], function (err, results) {
            //if (err) throw err;
               // if there are no errors send an OK message.
               //res.send('User Saved succesfully');
               //res.sendStatus(200);
               //res.status(200).send(results);
              res.status(200).send("user registered"); //Response status code 200 means correct. 500 means incorrect.
             });
			} else {
				//response.send('Incorrect Username and/or Password!');
            //res.send("user exists");
            res.status(500).send("user exists");
			}
			//res.end();*/
		});
	}
   connection.end();
});

/*-----------POST - Users (Register)----------------*/
      app.post('/register', (req, res)=>{
         let mysql      = require('mysql2');
         let connection = mysql.createConnection(MySQL_Configs);
         connection.connect();
         const user = {
           username: req.body.username,
           email: req.body.email,
           password: req.body.password
          }

          connection.query('INSERT INTO users SET ?', user, function (error, results) {
            if (error) throw error;
            // if there are no errors send an OK message.
            //res.send('User Saved succesfully');
            //res.sendStatus(200);
            res.status(200).send(results);
          });
         connection.end();
         });

 /*-----------POST - Users (Login)----------------*/
app.post('/login', function(req, res) {

   // console.log('1')
   // const paypalResult = await axios.post('https://api.paypal.com', {});
   // if(paypalResult.paid === true) {
   // } else {
   // }
   let mysql      = require('mysql2');
   let connection = mysql.createConnection(MySQL_Configs);
   connection.connect();

	const email = req.body.email;
	const password = req.body.password;
	if (email && password) {
		connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {

         if (error) return console.error(error.message);
         // res.status(200).send(results);

			if (results.length > 0) {
            //res.status(200).send("Login successful"); //Response status code 200 means correct. 500 means incorrect.
            res.status(200).send(results);
			} else {
				//response.send('Incorrect Username and/or Password!');
            res.send("Login unsuccessful");
            res.status(500).send("Login unsuccessful");
			}
			//res.end();*/
		});
	}
   connection.end();
});

/*-----------POST - Stickynotes----------------*/

app.post('/stickynotes', (req, res)=>{
   let mysql      = require('mysql2');
   let connection = mysql.createConnection(MySQL_Configs);
   connection.connect();

   // handle the POST request.
   let stickynote = {
     userid: req.body.userid,
     stickynoteid: req.body.stickynoteid,
     title: req.body.title,
     posx: req.body.posx,
     posy: req.body.posy,
     bgcolor:req.body.bgcolor,
     color:req.body.color,
     text:req.body.text
    }
    connection.query('INSERT INTO stickynotes SET ?', stickynote, function (err, results) {
      if (err) throw err;
      // if there are no errors send an OK message.
      // res.send('Stickynote Saved succesfully');
      res.sendStatus(200);
    });
  connection.end();
  });


/*-----------POST - Stickynotes----------------*/

app.post('/stickynotes', (req, res) => {

  var mysql = require('mysql2');
  var connection = mysql.createConnection(MySQL_Configs);

  connection.connect();

  // handle the POST request.
  var stickynote = {
    userid: req.body.userid,
    stickynoteid: req.body.stickynoteid,
    title: req.body.title,
    posx: req.body.posx,
    posy: req.body.posy,
    bgcolor: req.body.bgcolor,
    color: req.body.color,
    text: req.body.text
  }

  connection.query('INSERT INTO stickynotes SET ?', stickynote, function (err, results) {
    if (err) throw err;
    // if there are no errors send an OK message.
    // res.send('Stickynote Saved succesfully');
    res.sendStatus(200);
  });
  connection.end();
});

/*-----------Listening to PORT----------------*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


/*-----------------------------------------------------------------------------------------------------/*
/*
To delete data in MySQL database from a node.js application, you follow these steps:

--Establish a connection to the MySQL database.
--Execute a DELETE statement by calling the query() method on a Connection object.
--Disconnect from the MySQL database server.

app.get('/stickynotes', (req, res) => {
   let mysql      = require('mysql2');
   let connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'react-stickynotes-user',
     password : 'password123',
     database : 'stickynotesapp'
   });

   connection.connect();

   let sql = `DELETE FROM stickynotes WHERE stickynotekey = ?`;
   connection.query(sql, 1, (error, results, fields)=> {
      if (error)
      return console.error(error.message);
      res.send(results);
      console.log('Deleted Row(s):', results.affectedRows);
    });

   connection.end();
   })
*/

/*-----------fake api notes----------------*/
/*
app.get('/notes', (req, res) => {
   // sql.execute("get the notes from database");
   const notes = [
      {
         key: "1",
         title: "ToDo1",
         positionX: "100px",
         positionY: "150px",
         color: "black",
         bgColor: "blue",
         text: "test"
      },
      {
         key: "2",
         title: "ToDo2",
         positionX: "400px",
         positionY: "600px",
         color: "black",
         bgColor: "yellow",
         text: "test"
      },
      {
         key: "3",
         title: "ToDo3",
         positionX: "200px",
         positionY: "300px",
         color: "black",
         bgColor: "pink",
         text: "test"
      },
   ]

   //console.log(notes[0].positionX)
   res.send(notes)
 });
*/
/*-----------------------------------------------------------------------------------------------------*/
