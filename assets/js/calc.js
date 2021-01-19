var content = ''
var plus = '+'
var min = '-'
var div = '/'
var mul = '*'
var point = '.'
var zero = '0'
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
onkeydown = function(event) {
    var code = event.keyCode
    console.log(code)
    if(code==105 || code==57) append(content=content+nine)
    else if(code==104 || code==56) append(content=content+eight)
    else if(code==103 || code==55) append(content=content+seven)
    else if(code==102 || code==54) append(content=content+six)
    else if(code==101 || code==53) append(content=content+five)
    else if(code==100 || code==52) append(content=content+four)
    else if(code==99 || code==51) append(content=content+three)
    else if(code==98 || code==50) append(content=content+two)
    else if(code==97 || code==49) append(content=content+one)
    else if(code==96 || code==48) append(content=content+zero)
    else if(code==110 || code==190) append(content=content+point)
    else if(code==13) {
        try {
            append(content=eval(content));
        } catch(e) {
            append(ERROR)
        }
    }
    else if(code==107 || code==187) append(content=content+plus)
    else if(code==109 || code==189) append(content=content+min)
    else if(code==106 || code==56) append(content=content+mul)
    else if(code==111 || code==191) append(content=content+div)
}
