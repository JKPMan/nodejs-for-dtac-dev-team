/*
    Plug-In: 
        Node.js Modules Intellisense
        Node.js Extension Pack
*/

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false


*/

console.log("Hello NodeJs");

var str = "Loop index = ";
for(var i=0;i<=9;i++){
    console.log(str + (i+1));
}

