import { userLogin, userSignup } from './controller.js';
import express from 'express';

const app = express();

const PORT = 4000;

//simple route 
app.get('/',(req,res)=>{
    res.send("Hello Express");
})

app.get('/user/:name/:age',(req,res)=>{
    const {name,age} = req.params;
    
    // Validate age is a 2-digit number
    if (!/^[0-9]{2}$/.test(age)) {
        return res.status(400).json({error: 'Age must be a 2-digit number'});
    }
    
    res.json({name,age});
})

// catch all error route (must be last)
app.use((req,res)=>{
    res.status(404).send("Sorry, page not found");
})
//to start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})