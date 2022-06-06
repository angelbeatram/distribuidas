const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = './src/lib/pizza.csv';

var jsd=0



csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
        console.log(json)

    });

module.exports={
    jsd: 1
}
