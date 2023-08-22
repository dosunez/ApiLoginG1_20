"use strict";

var  logincontroller = require("../controllers/logincontroller"),
  express = require("express"),
  router = express.Router();

router
  // Login
  .get("/login/getall", logincontroller.getAll)
  .post("/login/:Codigo-login", logincontroller.getOne)
  .post("/login/insertar", logincontroller.post)
  .use(logincontroller.error404);

module.exports = router;
