var content = ''
var plus = '+'
var min = '-'
var div = '/'
var mul = '*'
var point = '.'
var zero = '0'A
var one = '1'
var two = '2'
var three = '3'
var four = '4'
var five = '5'
var six = '6'
var seven = '7'
var eight = '8'
var nine = '9'
var ERROR = 'ERROR'

function append(b) {
    document.getElementById('result').innerHTML = b;
}
function reset() {
    content = "";
    document.getElementById('result').innerHTML = content;
    return content;
}
