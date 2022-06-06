import {query} from "express-validator/check";

const {MongoClient} = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://distri:distri@cluster0.htmryre.mongodb.net/?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://Fragoso_Mexico:POTRISH44@elclustermasproodeladee.ant5j.mongodb.net/?retryWrites=true&w=majority";

let dbo,dbo2, barah,carah, pizzah,total1,total2,total3,total4,result6,pizza1,pizza2,pizza3,pizza4;


export  async function base2(){
    MongoClient.connect(uri2, function (err, db) {
        if (err) throw err;
        let dbo3 = db.db("nodo_Luis");
        dbo3.collection("pizzaluis").aggregate([{$match:{$or:[{Company:"IMO's Pizza"},{Company:"Domino's Pizza"},{Company:"Pizza Hut"},{Company:"Godfather's Pizza"}]}},
            {$group:{_id:'$Company', total:{$sum:{$multiply:['$Price','$Unitsperweek',1/100]}}}}
        ]).sort({total:-1}).limit(4).toArray(function (err, result3)
        {
            if (err) throw err;
            else{
                let ds=result3[0];
                let ds2=result3[1];
                let ds3=result3[2];
                let ds4=result3[3];
                total1=ds.total;
                 total2=ds2.total;
                total3=ds3.total;
                total4=ds4.total;

                result6=result3;
            }

        });
    });

}


export async function base() {
    MongoClient.connect(uri, function (err, db) {
        if (err)
            throw err;
        dbo = db.db("pizza");
        dbo2=db.db("nodo_vale");
        dbo2.collection("pizzavale").find({Company: 'Pizza Hut'}).sort({"Price": +1}).limit(1).toArray(function (err, bara) {
            if (err) throw err;
            else {
                    barah=bara;
            }
        });

        dbo2.collection("pizzavale").find({Company: 'Pizza Hut'}).sort({"Price": -1}).limit(1).toArray(function (err, cara) {
            if (err) throw err;
            else {
                 carah=cara
            }
        });


        dbo2.collection("pizzavale_4").aggregate([{$match:{$or:[{Company:"IMO's Pizza"},{Company:"Domino's Pizza"},{Company:"Pizza Hut"},{Company:"Godfather's Pizza"}]}},
            {$group:{_id:'$Company', total:{$sum:{$multiply:['$Unitsperweek']}}}}]).toArray(function (err, pi) {
            if (err) throw err;
            else {
                let ds0 = pi[0];
                let ds2 = pi[1];
                let ds3 = pi[2];
                let ds4 = pi[3];
                pizza1 = ds0.total;
                pizza2 = ds2.total;
                pizza3 = ds3.total;
                pizza4 = ds4.total;
            }
        });


        dbo.collection("pizzas").find({Company: 'Pizza Hut'}).toArray(function (err, piizza) {
            if (err) throw err;
            else {
                    pizzah=piizza
            }
        });
    });

}


export {pizzah,barah,carah,dbo,total1,total2,total3,total4,result6,pizza1,pizza2,pizza3,pizza4}

/* await client.connect();
 const database = client.db('pizza');
 const movies = database.collection('pizzas');
 const query={Company: 'pizza hut'}
 const d= await movies.find({}).toArray(function (err, result) {
     if (err) throw err;
     console.log(result);
*/


//run().catch(console.dir);