function fizzBuzz(a){
    let b;
    if (a%3===0 && a%5===0){
        b = "Fizzbuzz!";
        return b;
    }
    else if (a%3 === 0){
        b = "Fizz!";
        return b;
    }
    else if (a%5 === 0){
        b = "Buzz!";
        return b;
    }
    else if (isNaN(a)){
        b="Number please!";
        return b;
    }
    else {
        return a;
    }
}

