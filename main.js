//const express = require('express');
//const fetch = require('node-fetch');
import express from 'express';
import fetch from 'node-fetch';
import axios from 'axios';
const app = express();
const usedID = "SCRATCH GAME ID GOES HERE"
let characterArray = ["'", "<", ">", "?", "/", "`", "=", " ", "a", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", ".", "-", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", "\\", ":", "\n", ";"];

app.get('/', (req, res) => {
	axios.get(`https://clouddata.scratch.mit.edu/logs?projectid=${usedID}&limit=100000&offset=0`)
	.then(response => {
		console.log(response.data)
		let message = ""
		for (let i = response.data.length - 1; i != -1; i--) {
			message = message + response.data[i].value
		}
		let split = message.match(/.{2}/g);
		console.log(split)
		let decodedMessage = ""
		//for (let i = 0; i < message.length / 2; i += 2) {
		//	
		//}
		for (let i = 0; i < split.length; i++) {
			decodedMessage = decodedMessage + numToChar(split[i])
		}
		console.log(decodedMessage)
		return res.send(decodedMessage);
		
		
	})
	.catch(error => {
		console.log(error);
	});
	//return res.send('Received a GET HTTP method');
	
});

app.listen(6980, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

function numToChar(num) {
	let number = parseInt(num)
	return characterArray[number - 1]
}
