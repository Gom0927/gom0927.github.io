function convertStr() {
  var output = document.getElementById("ti2");
  var input = document.getElementById("ti1").value;
  output.value = "";
  for (var i = 0; i < input.length; i++) {
      output.value += input[i].charCodeAt(0).toString(2) + " ";
  }
}
function pr(con) {
  var output = document.getElementById("ti2");
  return output.value = con;
}
