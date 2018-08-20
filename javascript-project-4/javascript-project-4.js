//BASIC PROMISE USING NEW PROMISE
// LEVEL 1
const numberOrNot = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input === "number") {
            resolve("input is a number")
        } else {
            reject(Error("input is not a number"))
        }
    });
};

// LEVEL 1 CHECK OUTPUT
// numberOrNot(2).then(response => console.log(response)).catch(error => console.log(error))
// numberOrNot(30).then(response => console.log(response)).catch(error => console.log(error))
// numberOrNot(true).then(response => console.log(response)).catch(error => console.log(error))


//LEVEL 2 REWRITE USING PROMISE.RESOLVE
const numberOrNotAsync = (input) => {
    if (typeof input === "number") {
        return Promise.resolve("input is a number")
    } else {
        return Promise.reject(Error("input is not a number"))
    }
}

// LEVEL 2 CHECK OUTPUT
// numberOrNotAsync("xxx").then(response => console.log(response)).catch(error => console.log(error))
// numberOrNotAsync(2).then(response => console.log(response)).catch(error => console.log(error))





// LEVEL 3
const checkVariableType = (input) => {
    switch (typeof input) {
        case "string":
            return Promise.resolve("input is a string")
            break;
        case "number":
            return Promise.resolve("input is a number")
            break;
        case "boolean":
            return Promise.resolve("input is a boolean")
            break;
        case "undefined":
            return Promise.reject(Error("please input a variable"))
    }
}

// LEVEL 3 CHECK OUTPUT
// checkVariableType("abc").then(res => console.log(res)).catch(err => console.log(err))
// checkVariableType(2).then(res => console.log(res)).catch(err => console.log(err))
// checkVariableType(true).then(res => console.log(res)).catch(err => console.log(err))
// checkVariableType().then(res => console.log(res)).catch(err => console.log(err))


//CHAINNING PROMISE
//LEVEL 4
const numberValidation = (input) => {
    if (typeof input === "number") {
        return Promise.resolve(input)
    } else {
        return Promise.reject(Error("input is not a number"))
    }
};
const multipleByTwo = (result) => {
    return Promise.resolve(result * 2)
}
const multipleByThree = (result) => {
    return Promise.resolve(result * 3)
}

// LEVEL 4 CHECK OUTPUT
// numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
// numberValidation("").then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))


// LEVEL 5 CHECK OUTPUT
// const fn1 = async () => {
//     console.log("before promise")
//     await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
//     console.log("after promise")
// }
// fn1()

// LEVEL 6 CHECK OUTPUT
// const fn2 = async () => {
//     let result = await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => { return res }).catch(err => { return err })
//     console.log(result)
// }
// fn2()

let result = numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => { return res }).catch(err => { return err })
console.log(result)


//LEVEL 7 (just experiment)
// const addPositiveNumber = (a, b) => {
//     //check is input is number
//     if (typeof a === "number" && typeof b === "number") {
//         return Promise.resolve(a + b)
//     } else {
//         return Promise.reject(Error("input is not a number"))
//     }
// };

// const IsResultMoreThanZero = (result) => {
//     if (result) {
//         return Promise.resolve("result more than zero")
//     } else {
//         return Promise.reject(Error("result not more than zero"))
//     }
// }

// addPositiveNumber(2, 2).then(IsResultMoreThanZero).then(res => console.log(res)).catch(err => console.log(err))