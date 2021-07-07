// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import todoRouter from './routes/todosRoutes.js';
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const todoRouter = require('./routes/todosRoutes')

const app = express();
dotenv.config();
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Welcome to server...");
})
app.use('/todos',todoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>console.log(`server is running on port ${PORT}`))




