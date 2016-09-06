var express = require("express");
var school = express.Router();
var Vschool = require("../models/classSchema");

school.route("/")
    .get(function (req, res) {
        Vschool.find(function (err, ppl) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(ppl);
            };
        });
    })

.post(function (req, res) {
    var newPerson = new Vschool(req.body);
    newPerson.save(function (err, newPersonObj) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newPersonObj);
        }
    });
});

school.route("/:id")
    .get(function (req, res) {
        Vschool.findById(req.params.id, function (err, aPerson) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(aPerson);
            }
        })
    })

    .put(function(req, res){
    Vschool.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedPer){
        if(err){
            res.status(500).send(err);
        } else {
            res.send(updatedPer)
        }
    } )
})
    .delete(function(req, res){
    Vschool.findByIdAndRemove(req.params.id, function(err, deletedobj){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(deletedobj);
        }
    })
});

schoo.route("/")
    .get(function(req, res){
        if(req.query.newId){
            Vschool.find({
                idNum : req.query.newId
                
            },
                function(err,stud){
                if(err){
                    res.status(500).send(err)
                }else {
                    res.send(stud);
                }
            });
        }else{
            Vschool.find(function(err, stud){
                if(err){
                    res.status(500).send(err)
                }else{
                    res.send(stud);
                }
            })
        }
//    Vschool.findOneAndUpdate(req.query, req.body , {new:true}, function)
})

module.exports = school;