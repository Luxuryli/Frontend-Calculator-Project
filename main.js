function appendToOutput(value) {
    document.getElementById("output").value += value;
}

function calculate() {
    var expression = document.getElementById("output").value;
    var result;

    try {
        result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid expression";
        }
    } catch (error) {
        result = "Error";
    }

    document.getElementById("output").value = result;
}
