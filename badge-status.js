'use strict';
const report = './cypress/reports/mochareports/report.json';
const fs = require('fs');
let data = {};
let reportData = {};

try{
    data = fs.readFileSync(report);
    reportData = JSON.parse(data);
    if(reportData.stats.tests === reportData.stats.passes)
            console.log('Completed');
    else if(reportData.stats.passes === 0)
            console.log('Not-Completed');
    else
            console.log('Partially-completed');
} catch(err){
    console.log('Not tested, retry');
}