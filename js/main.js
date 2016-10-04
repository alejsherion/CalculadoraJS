calculator = {
  op1 : null,
  op2 : null,
  operator : null,
  chek_input: function(){
    var input = document.getElementById("input"); //User Input
    var input_text = input.textContent; //Atributo
    var error = document.querySelector("#error");
    var input_number = Number(input_text);// Create a number if possible
    if(input_number !== NaN){ //Check if the input_number is NOT A NUMBER
      if(this.op1 === null){
        this.op1 = input_number;
      }
      else{
        this.op2 = input_number;
      }
    };
  }
};

// Define un nuevo escucha para un evento (sobreescribe el evento de lo que hacia antes)
document.addEventListener("DOMContentLoaded", function (event) {
  var input = document.getElementById("input");
  var output = document.getElementById("result");
  var controlPad = document.getElementById("controlPad");

  // Add event over each button operators
  var operartorButtons = document.querySelectorAll("#operators button");
  for (var button in operartorButtons) {
    button.addEventListener("click", calculator.chek_input);
  }
  console.log("Initiated");
});
