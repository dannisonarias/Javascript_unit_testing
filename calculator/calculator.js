const calculator = ((a, b) => {

    const sum = (a,b) =>{
        return a+b;
    }

    const subtract = (a,b) =>{
        return a-b;
    }


    const divide = (a,b) =>{
        return a/b;
    }

    const multiply = (a,b) =>{
        return a*b;
    }

    return {sum,subtract,divide,multiply}

})();

module.exports = calculator;