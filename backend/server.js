const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Issue = require('./models/Issue');
const User = require('./models/user');
const app = express();
const rtsIndex = require('./routes/index.router');


const router = express.Router();


app.use(cors());
app.use(bodyParser.json());
app.use('/api', rtsIndex);


mongoose.connect('mongodb://localhost:27017/M_demo',{useNewUrlParser:true});


const connection = mongoose.connection;

connection.once('open',() =>{
console.log("mongodb database connected");
});


router.route('/issues').get((req,res) => {
    Issue.find((err,issues) =>{
        if (err)
        console.log(err);
        else
        res.json(issues);
    });
});


router.route('/issues/:id').get((req,res)=>{
    Issue.findById(req.params.id,(err,issue) =>{
        if (err)
        console.log(err);
        else
        res.json(issue);

    });
});


router.route('/issues/add').post((req,res) =>{
    let issue = new Issue(req.body);
    issue.save()
    .then(issue =>{
        res.status(200).json({"issue":"added successfully"});
    })
    .catch(err =>{
        res.status(400).send("failed to create new record");
    });
});

router.route('/issues/update/:id').post((req,res)=>{
    Issue.findById(req.params.id,(err,issue) =>{
        if (!issue)
        return next (new Error("could not load document"));
        else{
        issue.title = req.body.title;
        issue.responsible = req.body.responsible;
        issue.severity = req.body.severity;
        issue.description = req.body.description;
        issue.status = req.body.status;


        issue.save().then(issue =>{
            res.json('issue update');
        }).catch(err =>{
            res.status(400).send("update failed");
        });
    }

    });
});


router.route('/issues/delete/:id').get((req,res) => {
    Issue.findByIdAndRemove({_id:req.params.id},(err,issue) =>{
        if (err)
        res.json(err);
        else
        res.json("remove successfully");

    });
});





app.use('/',router);

//app.get('/',(req,res)=> res.send("hello world!"));
app.listen(4000,() => console.log("express server running on port 4000"));

