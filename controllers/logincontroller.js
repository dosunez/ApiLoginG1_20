'use strict'

var loginmodel = require("../models/loginmodel"),
logincontroller = () => {};

logincontroller.addForm = (req, res, next) =>
res.render('add-usuario', {title: 'Agregar nuevo Usuario'})

logincontroller.error404 = (req, res, next) => {
    let error = new Error(),
    locals = {
        title: 'Error 404',
        description: 'Recurso no encontrado',
        error:error
    }
    error.status = 404
    res.render('error', locals)
    next()
}

logincontroller.getAll = (req, res, next) => {
 
    loginmodel.getAll((err, rows)=> {

        if(err){
            let locals = {
                title: 'Error al consultar BD',
                description: 'Error de sintaxis SQL',
                error:err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title: 'Listado de usuarios',
                data: rows
            }
            res.status(200).send(rows.rows)
        }
    })

};

logincontroller.getOne = (req, res, next) => {
 
    let codigo_usuario = req.body.codigo_usuario
    console.log(codigo_usuario)

    loginmodel.getOne(codigo_usuario,(err, rows)=> {
        console.log(err, '---',rows)
        if(err){
            let locals = {
                title: `Error al buscar el registro: ${codigo_usuario}`,
                description: 'Error sintaxis SQL',
                error:err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title: 'Listado de usuarios',
                data: rows
            }
            res.status(200).send(rows.rows)
        }
    })

};

logincontroller.post = (req,res, next)=>{ 
    let Usuario = { 
        codigo_usuario: req.body.codigo_usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        password: req.body. password,
        email: req.body.email,
        estado: req.body.estado,
        fecha_hora_ingreso: req.body.fecha_hora_ingreso,
        password_expira: req.body.password_expira,
        dias_caducidad_password: req.body.dias_caducidad_password,
        rol: req.body.rol,
        numero_intentos_incorrectos: req.body.numero_intentos_incorrectos,
        fecha_registro: req.body.fecha_registro
     }

    console.log(Usuario)

    loginmodel.post(Usuario, (err)=>{ 
        if(err){ 
            let locals = { 
                title: `Error al ingresar registro con el id: ${Usuario.codigo_usuario}`,
                description: 'Error de sintaxis SQL',
                error:err
             }
             res.status(520).json(err);
         }else{ 
            res.send('Usuario ingresado de forma correcta')
          }
          
    }
    )
};




module.exports= logincontroller;