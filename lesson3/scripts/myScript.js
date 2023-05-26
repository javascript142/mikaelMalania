function calculator(num1, num2, action='add') {
    if (action == "add") {
        return num1 + num2;
    }
    else if (action == "subtract") {
        return num1 - num2;
    }
    else if (action == "multiply") {
        return num1 * num2;
    }
    else if (action == "divide") {
        return num1 / num2;
    }
    else {
        return "Invalid action";
    }
}

function sumAllArrays(array1=[], array2=[],array3=[], array4=[],array5=[]) {
    let sumOfArray1 = array1.length;
    let sumOfArray2 = array2.length;
    let sumOfArray3 = array3.length;
    let sumOfArray4 = array4.length;
    let sumOfArray5 = array5.length;
    return sumOfArray1 + sumOfArray2 + sumOfArray3 + sumOfArray4 + sumOfArray5;
}

// alert(sumAllArrays([1,2,3], [1,2,3], [1,2,3]))

// Arrow functions


const countAllArrayItems = (array1=[], array2=[],array3=[], array4=[],array5=[]) => {
    let sumOfArray1 = array1.length;
    let sumOfArray2 = array2.length;
    let sumOfArray3 = array3.length;
    let sumOfArray4 = array4.length;
    let sumOfArray5 = array5.length;
    return sumOfArray1 + sumOfArray2 + sumOfArray3 + sumOfArray4 + sumOfArray5;
}

// alert(countAllArrayItems([1,2,3], [1,2,3], [1,2,3]))