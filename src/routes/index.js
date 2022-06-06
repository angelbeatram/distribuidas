const express = require('express');
const router = express.Router();

//var Data = require("../lib/mongo")
import {base, pizzah, barah, carah, dbo} from '../lib/mongo';
import {base2,total1,total2,total3,total4,pizza1,pizza2,pizza3,pizza4} from '../lib/mongo'
let total,bara, cara, result1, car1, bar1,top1

const {MongoClient} = require("mongodb");
const uri2 = "mongodb+srv://Fragoso_Mexico:POTRISH44@elclustermasproodeladee.ant5j.mongodb.net/?retryWrites=true&w=majority";
base();
base2();
router.get('/', async (req, res) => {
    MongoClient.connect(uri2, function (err, db) {
        if (err) throw err;
       let dbo2 = db.db("nodo_Luis");

        dbo2.collection("pizzaluis").aggregate([{$match:{$or:[{Company:"IMO's Pizza"},{Company:"Domino's Pizza"},
                    {Company:"Pizza Hut"},{Company:"Godfather's Pizza"}]}},
            {$group:{_id:{$sum:'$Company'},total:{$sum:{$multiply:['$Unitsperweek']}}}}
        ]).toArray(function (err, result)
        {
            if (err) throw err;
            total=result;
        });

        dbo2.collection("pizzaluis").find().sort({"Unitsperweek":-1}).limit(10).toArray(function (err, top) {
            if (err) throw err;
            top1=top;

        });
    });

    await dbo.collection("pizzavale").find().sort({"Price": +1}).limit(1).toArray(function (err, barata) {
        if (err) throw err;
        else {
            bara = barata;
            dbo.collection("pizzavale").find().sort({"Price": -1}).limit(1).toArray(function (err, carata) {
                if (err) throw err;
                else {
                    cara = carata;

                        res.render('index', {bara,top1, cara,total,god:total1,domi:total3,hut:total2,imo:total4,gods:pizza1,domis:pizza2,huts:pizza3,imos:pizza4});
                }
            });
        }
    });
});


router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/pizzas', async (req, res) => {
    let pizzas;

});

router.get('/hut', async (req, res) => {

    result1 = pizzah
    cara = carah
    bara = barah

    res.render('pizzas', {cara, bara, result1});
});

router.get('/dominos', async (req, res) => {
    await dbo.collection("pizzavale").find({Company: "Domino's Pizza"}).sort({"Price": +1}).limit(1).toArray(function (err, barata) {
        if (err) throw err;
        else {
            bara = barata;
        }
    });
    await dbo.collection("pizzavale").find({Company: "Domino's Pizza"}).sort({"Price": -1}).limit(1).toArray(function (err, carata) {
        if (err) throw err;
        else {
            cara = carata;
        }
    });
    await dbo.collection("pizzas").find({Company: "Domino's Pizza"}).toArray(function (err, result) {
        if (err) throw err;
        else {
            result1 = result
        }
    });
    res.render('pizzas', {result1, cara, bara});
});

router.get('/imos', async (req, res) => {
    await dbo.collection("pizzavale").find({Company: "IMO's Pizza"}).sort({"Price": +1}).limit(1).toArray(function (err, barata) {
        if (err) throw err;
        else {
            bara = barata;
        }
    });
    await dbo.collection("pizzavale").find({Company: "IMO's Pizza"}).sort({"Price": -1}).limit(1).toArray(function (err, carata) {
        if (err) throw err;
        else {
            cara = carata;
        }
    });
    await dbo.collection("pizzas").find({Company: "IMO's Pizza"}).toArray(function (err, result1) {
        if (err) throw err;
        else {
            res.render('pizzas', {result1, cara, bara});
        }
    });
});

router.get('/god', async (req, res) => {
    await dbo.collection("pizzavale").find({Company: "Godfather's Pizza"}).sort({"Price": +1}).limit(1).toArray(function (err, barata) {
        if (err) throw err;
        else {
            bara = barata;
        }
    });
    await dbo.collection("pizzavale").find({Company: "Godfather's Pizza"}).sort({"Price": -1}).limit(1).toArray(function (err, carata) {
        if (err) throw err;
        else {
            cara = carata;
        }
    });
    await dbo.collection("pizzas").find({Company: "Godfather's Pizza"}).toArray(function (err, result1) {
        if (err) throw err;
        else {
            res.render('pizzas', {result1, cara, bara});
        }
    });
});

module.exports = router;