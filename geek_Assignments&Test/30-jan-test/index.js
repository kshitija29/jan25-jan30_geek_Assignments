// Fibonacci 

var n=prompt("enter No");
n=parseInt(n)
var first = 0
var second = 1;
        console.log(first);
console.log(second);
    for (var i = 1; i < n; i++) 

   {     
console.log(second);
        var next = first + second ;

        first = second;

        second = next;

    }
