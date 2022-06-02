// Assign the html elements to a variable
function average (){
    var sub1 = parseInt(document.getElementById("Math").value);
    var sub2 = parseInt(document.getElementById("English").value);
    var sub3 = parseInt(document.getElementById("Science").value);
    var sub4 = parseInt(document.getElementById("Computer").value);
}
var message = document.querySelector("h2");
var btn = document.querySelector("button");

// Add an event handler for the button
btn.addEventListener('click', function () {
  message.textContent = "The average grade of: Caryll G. Ybanez is";
});
