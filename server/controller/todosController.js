const { createTodoModel, getTodosModel, deleteTodosModel, getATodoModel, updateTodoModel } = require("./../model/todosModel") ;

const createTodoController = async(req,res)=>{
    const todos = req.body;
    try {
        const rows = await createTodoModel({...todos});
     // console.log(rows.insertId);
        const result = await getATodoModel(rows.insertId);
        // console.log(result);
        res.status(200).json(result);

    } catch (err) {
        res.status(404).json(err.message)
    }
}

const updateTodoController = async(req,res)=>{
    const id= parseInt(req.params.id);
    const todos = req.body;
    console.log(id);
    try {
        const result = await updateTodoModel({...todos,id:id});
        // console.log(result);
        if(result.affectedRows > 0){
            res.json({message: "Todo updated successfully..."});
        }
        else{
            res.json({message: "No rows affected"});
        }
        // else{
        //     res.status(404)
        // }
        // const result = await getATodoModel(rows.insertId);
        

    } catch (err) {
        res.status(404).json(err.message)
    }
}

const getTodosController = async(req,res)=>{
    try {
        const result = await getTodosModel();
        res.status(201).json(result);

    } catch (err) {
        res.status(409).json(err.message)
    }
}

const deleteTodosController = async(req,res)=>{
    const id = parseInt(req.params.id);
    try {
        const result = await deleteTodosModel(id);
        res.json({message: "Todo deleted successfully..."});

    } catch (err) {
        res.status(404).json(err.message)
    }
}





module.exports = {
    createTodoController,getTodosController,deleteTodosController,updateTodoController
}