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