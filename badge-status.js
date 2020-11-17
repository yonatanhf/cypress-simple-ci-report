'use strict';
const report = './cypress/reports/mochareports/report.json';
const fs = require('fs');
let data = {};
let reportData = {};

try{
    data = fs.readFileSync(report);
    reportData = JSON.parse(data);
    console.log(reportData.stats.tests === reportData.stats.passes);
} catch(err){
    console.log(false);
}