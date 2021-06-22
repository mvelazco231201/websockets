const mysqlConnection=require('../mysql');

module.exports = {

    listAll:(req,res)=>{ 
        mysqlConnection.query('SELECT * FROM tareas',(err,rows,fields)=>{
            if (!err)
               res.json(rows);
            else
               res.json(err);
         })
    },
    /*listOne:(req,res)=>{
        let id = req.params.id;
         mysql.mysqlConnection.query(`select * from tareas where id = ?`, req.params.id, (err,rows,fields)=>{
            if (!err)
            res.json(rows);
         else
            res.json(err);
      })
    },*/
    edit:(req,res)=>{
        mysqlConnection.query('UPDATE tareas SET ? where id=?',[req.body, req.params.id],(err,rows,fields)=>{
           if (!err)
              res.json(rows);               
            else
              res.json(err);
        })
     },

    create:(req,res)=>{
        let Nombre = req.body.Nombre;
        let Descripcion = req.body.Descripcion;
        let FechaCreacion = req.body.FechaCreacion;
        //let FechaTermino =

        mysqlConnection.query('INSERT INTO tareas (Nombre, Descripción, FechaCreacion) values(?,?,?)',
        [Nombre,Descripcion,FechaCreacion],(err,rows,fields)=>{
            if(!err)
            res.json(rows);
            else
            res.json(err);
        })
    }
}
