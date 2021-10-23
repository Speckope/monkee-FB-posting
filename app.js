const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const port = 3000;

const privateKey = fs.readFileSync('./sslcert/key.pem', 'utf8');
const certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log('working!');
});
