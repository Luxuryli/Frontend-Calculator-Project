function getOutput(value) {
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

    const output = document.getElementById('output');
    const equal = document.getElementById ('equal');

    document.addEventListener('keydown' ,  (event)  => {
        console.log(event)
        if(event.key == "0") {output.value += event.key;}
        if(event.key == "1") {output.value += event.key;}       
         if(event.key == "2") {output.value += event.key;}       
         if(event.key == "3") {output.value += event.key;}       
         if(event.key == "4") {output.value += event.key;}        
         if(event.key == "5") {output.value += event.key;}        
         if(event.key == "6") {output.value += event.key;}        
         if(event.key == "7") {output.value += event.key;}        
         if(event.key == "8") {output.value += event.key;}
        if(event.key == "9") {output.value += event.key;}
        if(event.key == ".") {output.value += event.key;}
        if(event.key == "Backspace") {output.value = output.value.slice(0,-1);}
        if(event.key == "+") {output.value += event.key;}
        if(event.key == "-") {output.value += event.key;}      
        if(event.key == "/") {output.value += event.key;}        
        if(event.key == "*") {output.value += event.key;}
        if(event.key == "=") {output.value = calculate();}

    })

    function calculate() {
    try {
        return eval(output.value);
    } catch (error) {
        return "Error";
    }
}
