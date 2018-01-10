//Assignment operators
    //operand1 operator operand2
    var str = "Hello World";
    console.log(str);

    //operator operand
    var a = 1;
    ++a;
    console.log(a);

    //operand operator
    a++;
    console.log(a);

//Comparison operators
//==, ===, !=, !==, >, <, >=, <=
    console.log(1=="1");
    console.log(1==="1");


    //Arithmetic operators
    //Remainder (%)
    console.log(12 % 5);

    //Increment (++)	
    var x = 100;
    console.log(++x);

    //Decrement (--)
    console.log(--x);

    //Unary negation (-)
    console.log(-x);

    //Unary plus (+)
    console.log(+x);

    //Exponentiation operator (**) 
    console.log(2 ** 3);
    console.log(10 ** -1);


    //Bitwise operators
    //Bitwise AND
    console.log(0 & 0);
    console.log(0 & 1);
    console.log(1 & 0);
    console.log(1 & 1);

    //Bitwise OR
    console.log(0 | 0);
    console.log(0 | 1);
    console.log(1 | 0);
    console.log(1 | 1);

    //Bitwise XOR
    console.log(0 ^ 0);
    console.log(0 ^ 1);
    console.log(1 ^ 0);
    console.log(1 ^ 1);

    //Bitwise NOT
    //Bitwise NOTing any number x yields -(x + 1). For example, ~-5 yields 4.
    var str = 'rawr';
    var searchFor = 'a';
    if (~str.indexOf(searchFor)) {
        console.log("searchFor is in the string");
    } else {
        console.log("searchFor is not in the string");
    }

    //Left shift
    //1 = 0001, 2 =0010
    //1 << 2 = 1000 = 4
    console.log(1<<2);

    //Sign-propagating right shift
    //1 = 0001, 2 =0010
    //4 << 2 = 0001 = 1
    console.log(4 >> 2);
    console.log(-1 >> -2);

    //Zero-fill right shift
    /*This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is always non-negative.*/
    console.log(4 >>> 2);
    console.log(-1 >>> -2);

//Logical operators
// &&, ||, !
    console.log(1==1 && 1==2);
    console.log(1==1 || 1==2);
    console.log(!true);

//String operators
    console.log("Hello " + "World");

//Conditional (ternary) operator
    1=="1"?console.log(true):console.log(false);
    1==="1"?console.log(true):console.log(false);

//Comma operator
    var x = [0,1,2,3,4,5,6,7,8,9];
    for(var i=0;i<=x.length-1;i++)
        console.log("value = "+x[i]);

//Unary operators
    y = "Hello World";
    console.log("value of 'y' is ", y);
    var res = delete y;
    console.log(res);
    //console.log("delete result is ", res,"y=", y);
    
//Relational operator
    var strArr = ['zero', 'one', 'two', 'three', 'four'];
    console.log(0 in strArr);
    console.log(5 in strArr);
