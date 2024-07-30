function convertTemperature(){
    const a =  32;  
    const b =  9/5;  
    const d =  5/9;  
    var input = Number(prompt("Enter the degrees"));
    var operation = prompt(" Menu : 1. Farenheit - 2. Celsius");
    
    if(operation=="1"){
        var F = (input * b) + a;
        document.getElementById("answer").innerHTML+= F + " degrees Farenheit"; 
    }
    else if(operation=="2"){
        var C = (input - a) * d;
        document.getElementById("answer").innerHTML+= C + " degrees Celsius";
        
    }
}