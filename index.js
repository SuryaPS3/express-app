import { userLogin, userSignup } from './controller.js';
import express from 'express';

const app = express();

const PORT = 4000;

//simple route 
app.get('/',(req,res)=>{
    res.send("Hello Express");
})

app.get('/user/login',userLogin);
app.get('/user/signup',userSignup);
//dynamic route 
app.get('/user/:username',(req,res)=>{
    const uname = req.params.username;
    res.send(`Hello, ${uname}`);
});

//adding post method
app.post('/user/create',express.json(),(req,res)=>{
    const {name,email} =  req.body;
    res.json({message:`User ${name} with email ${email} created successfully`});
})

//to start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})