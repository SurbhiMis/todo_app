const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    database : 'todos-db',
    user: "root",
    password:""
})

pool.makeQuery = (query,params=[])=>{
    return new Promise((resolve,reject)=>{
        pool.query(query,params,(err,res)=>{
            if(err)
                reject(err);
            else{
                resolve(res);
            }
        })
    })
}

module.exports = pool;