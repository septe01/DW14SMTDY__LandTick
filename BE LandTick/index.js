// instantiate express module
const express = require("express");
// initiate body-parser
const bodyParser = require("body-parser");
require("express-group-routes");

// // multer input file
// const multer = require("multer");
// // const upload = multer({ dest: 'uploads/'})
// var path = require("path");

// -- authenticated
const { authenticated } = require("./middleware/auth");
// -- end authenticated

// use express in app variable
const app = express();

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const path = require("path");
//config get file image
app.use(express.static("controllers/public/images/")); // result http://localhost:5004/picture-1583943302009.jpg

// define the server port
const port = 5004;
// const port = process.env.PORT || 4000;

// allow this app to receive incoming json request
app.use(bodyParser.json());

// multer
// set storage
// const storage = multer.diskStorage({
//   destination: path.join(`${__dirname}./../public/images/`),
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// // init upload
// const upload = multer({
//   storage: storage
// }).single("picture");

// import controller
const LoginController = require("./controllers/login");
const UserController = require("./controllers/user/user");
const RegistrasiController = require("./controllers/register/register");
const OrderController = require("./controllers/order/order");
const TicketController = require("./controllers/ticket/ticket");
const TrainsController = require("./controllers/type-train/trains");

// -- create groups routes
// -- Endpoint
app.group("/api/v1", router => {
  //strukturing folder
  router.post("/login", LoginController.store);
  router.post("/register", RegistrasiController.store);
  // user
  router.get("/userAuth", authenticated, UserController.userAuth);
  // Ticket
  router.post("/ticket", authenticated, TicketController.store);
  router.get("/ticket", TicketController.index);
  router.get("/ticket/:id", authenticated, TicketController.show);
  // Trains
  router.get("/trains", TrainsController.index);

  //order
  router.get("/my_tickets", authenticated, OrderController.myticket);
  router.post("/order", authenticated, OrderController.order);
  router.get("/order", OrderController.index);
  router.get("/order/:id", authenticated, OrderController.show);
  router.patch("/order/:id", authenticated, OrderController.update);
  // upload file
  router.patch("/upload/:id", authenticated, OrderController.upload);
});

// app.group("/api/v1", router => { //using group routes
//   router.get("/login", (req, res) => {
//     res.send("hallo");
//   });
// });

// --- create the homepage route
app.get("/", (req, res) => {
  //create route endpoind
  res.send("hello septehabudin");
});

app.listen(port);
