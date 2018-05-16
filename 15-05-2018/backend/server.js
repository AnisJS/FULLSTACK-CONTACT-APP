const express = require ("express");
const assert = require('assert')
const {MongoClient,ObjectID} = require ("mongodb");
const bodyParser = require ("body-parser");



const app= express();


app.listen(3001,(err) =>{
if (err) {
    console.log("server is dead")}
else 
    {console.log("server is running ")}
})

const mongo_url = "mongo://localhost:27017"

const database= "contact"

MongoClient.connect(mongo_url , (err,client) => {
    assert.equal(null , err , "can not connect to mongo db")
    const db = client.db(database)


    // definir les données importées de l'axios

    app.post ('/contacts',(req,res) => {
        let new_contact = req.body
            //  creer une collection friends  et destruct l'objet friend
        db.collection('friends').insertOne({...new_contact},(err,data)=>{
            //  envoyer un message du backend au frontend res.send
            if (err) {res.send ('cant add the new contact')}
            else {  res.send('conatct added')}
        })
    })


    app.get('/contacts',(req,res)=>{
        //  acceder a la classe friends les importés les rendre en tableau 
        db.collection('friends').find().toArray((err,data) => {
            res.send(data)
        })
    })

    app.get('/contact/:id', (req , res) =>{
        // pour que le mongo puisse connaitre que c'est l'id 
            const id = ObjectID(req.params.id)
            db.collection('friends').findOne({_id:id},(err,data) => {
                if (err) 
                {req.send('can not find id') }
                else 
                { req.send(data)}
            }) 
    })

    app.delete('contact/:id',(req,res)=>{
        const id = ObjectID(req.params.id)
        db.collection('friends').findOneAndDelete({_id:id},(err,data) => {
            if (err) 
                {req.send('can not delete requested contact') }
            else 
                { req.send('contact removed')}
        })
    })

    app.put('contatct\:id',(req,res) => {
        const id= ObjectID(req.params.id)

        const updatedInformation = req.body
        // fonction mongodb (objet,modéfication,callback (err,data))
        //  modéfication => use set (as set state) and not push 
        db.collection('friends').findOneAndUpdate({_id:id},{$set:{...updatedInformation}},(err,data) => {
             if (err) 
             { req.send('can not Update the contact')}
             else 
             {req.send('contact is Updated')}
        })
    })
})