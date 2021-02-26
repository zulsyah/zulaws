const express = require("express")
const epf = require("express-php-fpm").default
const https = require('https');
const fs = require('fs');
var os = require("os");

if ( os.hostname() == 'emoovit-cnc'){
  console.log('You run this server at correct AWS EC2');
} else {
  console.log('You are in DEBUG MODE');
}

const credentials = {
  key: fs.readFileSync('ssl/private.key'),
  cert: fs.readFileSync('ssl/certificate.crt')
};

const options = {
    // root of your php files
    documentRoot: __dirname + "/www/",
   
    // extra env variables
    env: {},
   
    // connection to your php-fpm server
    socketOptions: { port: 9000 },
}

const zul = express()
const httpRedirect = express();

zul.use("/", epf(options));
zul.use('/scripts', express.static(`${__dirname}/node_modules/`));

// zul.get('*', function(req, res){
//   return res.redirect('../home/errorPage.php');
// });

// set up a route to redirect http to https
httpRedirect.use(function(req, res, next) {
  if(!req.secure) {
    // console.log("redirect to HTTPS");
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
});

httpRedirect.listen(80);

var server = https.createServer(credentials,zul);
server.listen(443, () => console.log('Zul public website is running in HTTPS mode'));