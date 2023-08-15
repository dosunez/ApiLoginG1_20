"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  AlumnoController = require("../controllers/alumno-controller"),
  express = require("express"),
  router = express.Router();

router
  //****ALUMNO EJEMPLO****
  .get("/alumno/getall", AlumnoController.getAll)
  .get("/alumno/getone/:no_cuenta", AlumnoController.getOne)
  .post("/alumno/insertar/:no_cuenta", AlumnoController.post)
  .put("/alumno/actualizar/:no_cuenta", AlumnoController.put)
  .delete("/alumno/eliminar/:no_cuenta", AlumnoController.delete)
  .use(AlumnoController.error404);

module.exports = router;
