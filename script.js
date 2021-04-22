function YourAge() {
  var BirthYear = document.getElementById("Age").value;
  var CurrentYear = document.getElementById("Year").value;
  var Myage = parseFloat(CurrentYear) - parseFloat(BirthYear);
  document.getElementById("h3").innerHTML = Myage;
}