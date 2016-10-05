var calculator = {
  result : null,
  operator : null,
  chek_input: function(){
    console.log("Check input");
    var self = calculator;

    var input = document.getElementById("input"); //User Input
    var input_text = input.value; //Atributo
    var error = document.querySelector("#error");

    var input_number = Number(input_text);// Create a number if possible
    if(Number.isNaN(input_number)){ //Check if the input_number is NOT A NUMBER
      input.value = "";
      console.log("Error");
    }
  },
  set_number: function(button) {
    return function () {
      var input = document.getElementById("input");
      console.log("" + input.value + button.textContent);
      input.value = "" + input.value + button.textContent;
    };
  },
  exec_operator: function (button) {
    return function () {

      if(self.result === null){

      }
      self.operator = button.textContent;

    };
  },
  clear: function () {
    this.result = null;
    this.operator = null;
    var input = document.getElementById("input");
    input.value = "";
  },
  operatorType: function () {

  }
};

// Define un nuevo escucha para un evento (sobreescribe el evento de lo que hacia antes)
document.addEventListener("DOMContentLoaded", function (event) {
  var output = document.getElementById("result");
  var controlPad = document.getElementById("controlPad");
  var operartorButtons = controlPad.querySelectorAll("#operators button");
  // Add event over each button operators
  var i;
  for (i = 0; i < operartorButtons.length; i++) {
    operartorButtons[i].addEventListener("click", calculator.chek_input);
  }

  var numberButtons = controlPad.querySelectorAll("#numbers button");
  for (i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", calculator.set_number(numberButtons[i]));
  }

  var clearButton = controlPad.querySelector("#clear");
  clear.addEventListener("click", calculator.clear);

  console.log("Initiated");
});
