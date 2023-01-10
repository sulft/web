const client = require('./connection.js');
const bodyParser = require ("body-parser");
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.listen(8070, ()=>{
    console.log("Le serveur écoute le port 8070");
})

client.connect();

app.get('/contacts', (req, res)=>{
    client.query(`Select * from contacts`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            res.send(err.message);
        }
    });
    client.end;
})

app.get('/contacts/:id', (req, res)=>{
    client.query(`Select * from contacts where id =${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            console.log("affichage d'element")
        } else {
            res.send(err.message);
        }
    });
    client.end;
})

//ajout contact
app.post('/contacts', (req, res) => {
    console.log("test222");
    const contact = req.body;
    let insertQuery = `INSERT INTO contacts (prenom, nom, description, email) VALUES ('${contact.prenom}','${contact.nom}','${contact.description}','${contact.email}');`;

    client.query(insertQuery, (err,result) => {
        if(!err){
            res.send(result.rows);
        } else { 
            res.send(err.message);
        }
    });
   
    client.end;
})

app.put('/contacts/:id', (req, res) => {
    const contact = req.body;
    console.log(req);
    let insertQuery = `UPDATE contacts SET prenom = '${contact.prenom}', nom = '${contact.nom}', description = '${contact.description}', email ='${contact.email}' WHERE id = ${contact.id};`;

    client.query(insertQuery, (err,result) => {
        if(!err){
            res.send('La mise à jour à bien eu lieu');
        } else {
            res.send(err.message);
        }
    });
   
    client.end;
})

app.delete('/contacts/:id', (req,res)=>{
    let insertQuery = `DELETE from contacts where id =${req.params.id}`;

    client.query(insertQuery, (err,result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            console.log(err.message)
        }
    })

    client.end;
})