import { userLogin, userSignup } from './controller.js';
import express from 'express';

const app = express();

const PORT = 4000;

//simple route 
app.get('/',(req,res)=>{
    res.send("Hello Express");
})

// now we'll create routes for 
app.get('/user/:name/:id',(req,res)=>{
    const {name,id} = req.params;
    res.json({name,id});
})
//to start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})