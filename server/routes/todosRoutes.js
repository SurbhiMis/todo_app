const { getTodosController, createTodoController, deleteTodosController, updateTodoController } = require('../controller/todosController');

const router = require('express').Router();


router.get('/',getTodosController);

router.post('/',createTodoController);

router.delete('/:id',deleteTodosController);

router.put('/:id',updateTodoController);

// router.get('/:id',updateTodoController);

module.exports = router;