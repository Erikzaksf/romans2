var numberInput = "";
var thousands = "M";
var hundreds = ["CM", "D", "CD", "C"]
var tens = ["XC", "L", "XL", "X"]
var ones = ["IX", "V", "IV", "I"]
var div1 = 1000;
var div2 = 100;
var div3 = 10;
var div4 = 1;

debugger

var converter = function (num) {
   num = numberInput / div1
}

















$(document).ready(function() {
  $("form#regularNumber").submit(function(event) {
    event.preventDefault();
  var numberInput = parseInt($("input#number").val());
    var result = converter(numberInput);
    $(".well").show();
    $(".rNumeral").text(result);

  });
});
