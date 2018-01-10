/*
    String-Format Reference:
        https://www.npmjs.com/package/string-format#formatextendprototype-transformers

    JavaScript Referrence:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

var format = require("string-format");
format.extend(String.prototype, {
    escape: function(s) {
      return s.replace(/[&<>"'`]/g, function(c) {
        return '&#' + c.charCodeAt(0) + ';'
      })
    },
    upper: function(s) { return s.toString().toUpperCase(); },
    lower: function(s) { return s.toString().toLowerCase(); }
  })
   

var myName = 'Mr. Prin';
console.log("Hello NodeJs - {}".format(myName));
console.log("Hello NodeJs - {!upper}".format(myName));
console.log("Hello NodeJs - {!lower}".format(myName));

var str = "Loop index = {}";
for(var i=0;i<=9;i++){
    console.log(str.format(i));
}

