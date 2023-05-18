//const express = require('express');
//const fetch = require('node-fetch');
import express from 'express';
//import fetch from 'node-fetch';
import axios from 'axios';
const app = express();
const usedID = "SCRATCH ID HERE"
let characterArray = ["'", "<", ">","?", "/", "`", "", " ","=", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", ".", "-", "!", "@", "#", "$", "%", "^", "&", "*", "(",")", "_", "+", "|", "\\", ":", "\n", ";",",","{","}"];
const port=6980


app.get('/', (req, res) => {
        axios.get(`https://clouddata.scratch.mit.edu/logs?projectid=${usedID}&limit=100000&offset=0`)
        .then(response => {
                // console.log(response.data)
                let message = ""


                for (let i = 0; i != response.data.length - 1; i++) {
                        message = message + response.data[i].value
                }
                console.log(message)
                let split = message.match(/.{2}/g);
                let decodedMessage = ""

                //for (let i = 0; i < message.length / 2; i += 2) {
                //
                //}
        for (let i = 0; i < split.length; i++) {
            let decodedBlock=numToChar(split[i])
            if (split[i]==-1) {
                                console.log("Broken")
                break;
                        }
            decodedMessage = decodedMessage+decodedBlock
        }
        console.log(decodedMessage)
                return res.send(decodedMessage.replace(/undefined/g,''));
        })
        .catch(error => {
                console.log(error);
        });
        //return res.send('Received a GET HTTP method');

});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}}!`),
);

function numToChar(num) {
        let number = parseInt(num)
        return characterArray[number - 1]
}
