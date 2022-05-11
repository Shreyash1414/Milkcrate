import express from "express";
// All Imports
import { dairyRegestration } from './routes/regestration/dairyRegestration.js';
import{dairyLogin} from './routes/login/dairyLogin.js';
import{dairyInfo} from './routes/credentials/dairyInfo.js';
import{profileInfo} from './routes/credentials/profileInfo.js';
import{farmerReg} from './routes/regestration/farmerRegistration.js';
// const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());


app.listen(3000 , ()=>{
    console.log("listning at port 3000........");
})

// api
// Regestration Api's
app.post("/api/registration/dairy",dairyRegestration);


app.post("/api/login/dairy",dairyLogin);


// diary Credential
app.post("/api/credentials/dairyId",dairyInfo);
app.post("/api/dairyProfile/dairyId",profileInfo);

//Farmer Registration

app.post("/api/user/reg",farmerReg);