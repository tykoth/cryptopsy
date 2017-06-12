let args = process.argv.slice(2);
let CryptoJS = require("crypto-js");

let key  = CryptoJS.enc.Hex.parse(args[1] || 0);
let iv = CryptoJS.enc.Hex.parse(args[2] || 0);


let encrypted = CryptoJS.DES.encrypt(args[0], key, { 
	iv: iv	
});   


let decrypted = CryptoJS.DES.decrypt(args[0], key, { 
	iv: iv, 
});               

console.dir({
	'original':args[0],
	'encrypted':encrypted.toString(),
	'decrypted':decrypted.toString(CryptoJS.enc.Utf8),
	'key':key,
	'iv':iv
}, {colors:true});