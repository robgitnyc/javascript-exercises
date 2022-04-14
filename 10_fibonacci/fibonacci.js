function fibonacci(place) {
    if (place < 0) {
        return "OOPS";
    }
    fiboArr = [1,1]
    for (i = 2; i < place ; i++) {
        fiboArr.push(fiboArr[i-2]+fiboArr[i-1])
    }
    return fiboArr[place-1];
}

// Do not edit below this line
module.exports = fibonacci;
