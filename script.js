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

// This is the process occuring step by step until the functions recursive requiremenet is met.

        // sumOfRangeRecursive(3, 0)
        //     sumOfRangeRecursive(2, 3)
        //         sumOfRangeRecursive(1, 5)
        //             sumOfRangeRecursive(0, 6)
        //             return 6
        //         return 6
        //     return 6
        // return 6

// let printChildren = (t) => {
//     // ???
// }

let printChildrenRecursive = (t) => {
    // this initial guard is if it is equal to zero the loop is immediately exited
    if(t.children.length === 0) {
        return;
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    })
}

// So this code works as such: When the initial function call occurs it calls again to work through the 
// names at the same level that it has now moved too. In this case starting with Jeff, the onto Samuel 
// and Dan, the actual calls look like this

            // printChildrenRecursive('Jeff')
            //     // Samuel contains no children in the array so the only thing needed to return is name
            //     printChildrenRecursive("Samuel")
            //     return
            //     // Dan contains two children with no further children so the return
            //     printChildrenRecursive("Dan")
            //         // these two will loop first before the return of "Dan"
            //         printChildrenRecursive("Jerry")
            //         return
            //         printChildrenRecursive("Jason")
            //         return 
            //     return






const tree = {
    name: 'Jeff',
    children: [
        {
            name: "Samuel",
            children: []
        }, 
        {
            name: "Dan",
            children: [
                {name: "Jerry", children: []},
                {name: "Jason", children: []}
            ]
        }
    ]
}