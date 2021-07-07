const pool = require('./../db')

todos = []

todos.createTodoModel = async({title,content})=>{
    const query = `insert into todos (title,content) values (?,?)`;
    const params = [title,content];
    const res = await pool.makeQuery(query,params);
    return res;
}


todos.updateTodoModel = async({title,content,id})=>{
    const query = `update todos set title= ?, content = ? where id = ?`;
    console.log(id);
    const params = [title,content,id];
    const res = await pool.makeQuery(query,params);
    return res;
}

todos.getTodosModel = async()=>{
    const query = `select * from todos`;
    const params = [];
    const res = await pool.makeQuery(query,params);
    return res;
}
todos.getATodoModel = async(id)=>{
    const query = `select * from todos where id =?`;
    const params = [id];
    const res = await pool.makeQuery(query,params);
    return res[0];
}


todos.deleteTodosModel = async(id)=>{
    const query = `delete from todos where id = ?`;
    const params = [id];
    const res = await pool.makeQuery(query,params);
    return res;
}


module.exports = todos;
