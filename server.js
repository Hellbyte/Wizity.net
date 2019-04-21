/*

COPYRIGHT:       All rights copyright to Wizity.net
DESCRIPTION:     Main server for Wizity.net

*/

const express = require("express");
const app = express();
const socket_io = require("socket.io");
const server = socket_io(app.listen(1717));
const express_session = require("express-session")({
  name: "session",
  secret: "nejaky tajný kod",
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
});
const shared_session = require("express-socket.io-session");
const express_handlebars = require("express-handlebars");
const mysql = require("mysql");
const mysqli = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});
const body_parser = require("body-parser");
const sha256 = require("js-sha256");

app.use(express_session);
server.use(shared_session(express_session));
mysqli.connect();
app.use(express.static("assets"));
app.engine("handlebars", express_handlebars());
app.set("view engine", "handlebars");
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
/**********************************************************************************************/

// Index
app.get("/", (req, res) => {
  const userID = req.session.userID;

  if(userID) res.redirect("/lobby");
  else res.render("index");
});
/**********************************************************************************************/

app.post("/login", (req, res) => {
  const userID = req.session.userID;
  const email = req.body.email;
  const password = sha256(req.body.password);

  if(userID){
    res.json({
      error: "You are already logged in."
    });
  }

  else{
    mysqli.query("SELECT 1 FROM users WHERE email='"+ email +"'", (err, emailSuccess) => {

      if(emailSuccess[0]){
        mysqli.query("SELECT id FROM users WHERE email='"+ email +"' AND password='"+ password +"'", (err, loginSuccess) => {

          if(loginSuccess[0]){
            req.session.userID = loginSuccess[0].id;

            res.json({
              redirect: "/lobby"
            });
          }

          else{
            res.json({
              error: "You entered bad password."
            });
          }

        }); // loginSuccess
      }

      else{
        res.json({
          error: "User with this email doesn't exist."
        });
      }

    }); // emailSuccess
  }

});
/**********************************************************************************************/

// Lobby
app.get("/lobby", (req, res) => {
  const userID = req.session.userID;

  if(userID){
    res.render("lobby");
  }

  else{
    res.redirect("/logout");
  }

});
/**********************************************************************************************/

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
/**********************************************************************************************/

// Socket
server.on("connection", (client) => {
  var userID = client.handshake.session.userID;

  console.log(userID)
});
/**********************************************************************************************/
