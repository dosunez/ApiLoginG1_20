'use strict'

var conn = require("../config/db-connection"),
loginmodel = () => {};

    loginmodel.getOne = (codigo_usuario, cb)=>
    conn.query('SELECT "nombre","apellido","password","estado"  FROM public."usuario" WHERE "codigo_usuario" = $1', [codigo_usuario],cb);


 loginmodel.getAll = (cb)=> conn.query ('SELECT "codigo_usuario", "nombre", "apellido", "password", "email", "estado", TO_CHAR("fecha_hora_ingreso", '+"'YYYY-MM-DD'"+') as "fecha_hora_ingreso", "password_expira", "dias_caducidad_password", "rol", "numero_intentos_incorrectos", TO_CHAR("fecha_registro", '+"'YYYY-MM-DD'"+') as "fecha_registro" FROM public."usuario";', cb);
//  loginmodel.getAll = (cb)=> conn.query ('select * from usuario";', cb);


loginmodel.post = (data, cb)=> conn.query ('call public."p_usuario_insert" ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',
    [   data.codigo_usuario,
        data.nombre,
        data.apellido,
        data.password,
        data.email,
        data.estado,
        data.fecha_hora_ingreso,
        data.password_expira,
        data.dias_caducidad_password,
        data.rol,
        data.numero_intentos_incorrectos,
        data.fecha_registro,
    ], cb)

 module.exports = loginmodel;