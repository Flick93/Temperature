//creating the function
//display on the console the mult by 5
function multiplication(myNumber){//myNumber is local variable (scope of vars)
    document.write("<p class='test'>" + myNumber*5 + "</p>");
}

//multiplication(3);//run/execute the function

function tempConversion(){
    var Celsius = Number(prompt("Enter the degrees:"));
    const d= 9/5;    
    const a=  32;    
    var total = (Celsius * d) + a

document.getElementById("cRate").innerHTML+=`
    <p>The conversion of ${Celsius} degrees Celsius to Farenheit is ${total} degrees. </p>
`;
}


//document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>");

// document.getElementById("products").innerHTML+=`
//       <p> Name: ${product} </p>
//       <p> Subtotal: ${subtotal} </p>
//      <p> Total: ${total} </p>
//   `;

