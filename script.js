let countDown = (num) => {
    for(let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("Countdown is ended");
}

// this loop is 
let countDownRecursive = (num) => {
    if(num <= 0) {
        console.log('Countdown has ended recursively');
        return
    }
    console.log(num)

    // code is num - 1 because its performing the loop that subtracts one each round. 
    countDownRecursive(num - 1);
}

// the process occuring here is an up and down search
            // countDownRecursive(3);
            //     countDownRecursive(2);
            //         countDownRecursive(1);
            //             countDownRecursive(0);
            //             return
            //         return
            //     return
            // return



// here we will make a more practical example where are taking an input and constantly growing our 
// input inside of our recursive functions

// this is the initial example to be refactored
let sumOfRange = (n) => {
    let total = 0;
    for(let i = n; i > 0; i--) {
        total += i
    }
    return total;
}

// intital example refactored
let sumOfRangeRecursive = (n, total = 0) => {   
//    this is a guard clause which will safeguard from an infinite loop
    if(n <= 0) {
       return total;
    }
    // if the guard clause is disregarded this code will execute, allowing the code to recurse
    // to return back to the initial if statement again and again until the clause is met.
    // it is n - 1 because of the iteration that is taking place each time the guard clause isnt met.
    return sumOfRangeRecursive(n-1, total + n);
}