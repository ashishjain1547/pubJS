console.log("Calculator!!");

var a = parseInt(prompt("Enter first no.: "));
var b = parseInt(prompt("Enter second no.: "));
var c = parseInt(prompt("1.Addition 2.Subtraction 3.Multiplication 4.Division: "));

switch (c) {
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        if(b == 0){
            console.log("Zero division error");
        }
        else{
            console.log(a/b);
        }
        break;
    default:
         console.log("Enter valid no.");
         break;
}

