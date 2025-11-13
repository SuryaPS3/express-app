const express = require('express');

const app = express();

const PORT = 4000;

//simple route 
app.get('/',(req,res)=>{
    res.send("Hello Express");
})

//to start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})