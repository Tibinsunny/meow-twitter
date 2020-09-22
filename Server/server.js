const express=require('express');
const app=express();
const cors = require('cors');
require('dotenv').config()
app.use(express.json())
app.use(cors())
//Db Config
const db = require('monk')(process.env.DB)
const users = db.get('meows')

app.get('/',(req,res) => {
 users.find().then(mews => res.json(mews));
})

function checkInput(newMew)
{
return newMew.toString().trim()!== ''
}

app.post('/',(req,res) => {
    const mew=req.body.mew;
    if(checkInput(mew))
    {
        users.insert({ mewContent:mew}).then(result => {
            res.json({response:"Updated"})
        })
    }
    else
    {
        res.json({response:"Something Went Worong"})
    }
  
    })



app.listen(process.env.PORT || 1337 ,() => {
    console.log("Server Up and Running ")
})