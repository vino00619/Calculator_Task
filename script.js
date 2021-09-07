var container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('onkeypress', 'myFunction(event)')  //---------new
container.setAttribute('onkeydown', 'number(event)')      //---------new

var row = document.createElement('div');
row.setAttribute('class', 'row');

var col = document.createElement('div');
col.setAttribute('class', 'col-12-sm');

var h1 = document.createElement("h1");
var b = document.createElement("b");
b.innerHTML = "Calculator Task";
h1.append(b);
col.append(h1);
row.append(col);

var calculator = document.createElement('div');
calculator.setAttribute('class', 'calculator');

var input = document.createElement('input');
input.setAttribute('type', 'text');  //--------------------------can we able to give restriction of alphabets here???
input.setAttribute('placeholder', 'Click here to Start!');
input.setAttribute('id', 'dispOutput');
// input.setAttribute('onkeypress', 'myFunction(event)');         //----------------------- function
input.setAttribute('onclick', 'alphaClear()');             //-----------------------  function

var button1 = document.createElement('button');
button1.setAttribute('onclick', 'Clear()');
button1.innerHTML = 'AC';

var button2 = document.createElement('button');
button2.setAttribute('onclick', 'del()');                //----------------------- incomplete
button2.innerHTML = 'DEL';

var button3 = document.createElement('button');
button3.setAttribute('onclick', 'display("%")');                //----------------------- is display a method???
button3.innerHTML = '%';

var button4 = document.createElement('button');
button4.setAttribute('onclick', 'display("/")' );                
button4.innerHTML = '/';

var button5 = document.createElement('button');
button5.setAttribute('onclick', 'display("7")');                
button5.innerHTML = '7';

var button6 = document.createElement('button');
button6.setAttribute('onclick', 'display("8")');                
button6.innerHTML = '8';

var button7 = document.createElement('button');
button7.setAttribute('onclick', 'display("9")');                
button7.innerHTML = '9';

var button8 = document.createElement('button');
button8.setAttribute('onclick', 'display("*")');                
button8.innerHTML = '*';

var button9 = document.createElement('button');
button9.setAttribute('onclick', 'display("4")');                
button9.innerHTML = '4';

var button10 = document.createElement('button');
button10.setAttribute('onclick', 'display("5")');                
button10.innerHTML = '5';

var button11 = document.createElement('button');
button11.setAttribute('onclick', 'display("6")');                
button11.innerHTML = '6';

var button12 = document.createElement('button');
button12.setAttribute('onclick', 'display("-")');                
button12.innerHTML = '-';

var button13 = document.createElement('button');
button13.setAttribute('onclick', 'display("1")');                
button13.innerHTML = '1';

var button14 = document.createElement('button');
button14.setAttribute('onclick', 'display("2")');                
button14.innerHTML = '2';

var button15 = document.createElement('button');
button15.setAttribute('onclick', 'display("3")');                
button15.innerHTML = '3';

var button16 = document.createElement('button');
button16.setAttribute('onclick', 'display("+")' );                
button16.innerHTML = '+';

var button17 = document.createElement('button');
button17.setAttribute('onclick', 'display("0")' );                
button17.innerHTML = '0';

var button18 = document.createElement('button');
button18.setAttribute('onclick', 'display("00")');                
button18.innerHTML = '00';

var button19 = document.createElement('button');
button19.setAttribute('onclick', 'display(".")');                
button19.innerHTML = '.';

var button20 = document.createElement('button');
button20.setAttribute("onclick", "calculate()");        //----------------------- funtion??????
button20.setAttribute("class", "equalto"); 
button20.setAttribute("id", "equal");
// button20.setAttribute("id", "dot"); //----------------------- funtion?????? 
button20.innerHTML = '=';

calculator.append(input, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10,
                    button11, button12, button13, button14, button15, button16, button17, button18, button19, button20);

container.append(row, calculator);

document.body.append(container);



var dispOutput = document.getElementById('dispOutput');

function display(num){
    dispOutput.value= dispOutput.value+num;
}

function calculate(){
  try{
    dispOutput.value=eval(dispOutput.value);
  }
  catch(err){
    alert("Invalid")
  }
}
function Clear(){
    dispOutput.value="";
}
function del(){
    dispOutput.value= dispOutput.value.slice(0,-1);
}

function myFunction(event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.getElementById('equal').click()
  }

  var alpha = /^[A-Za-z]$/
  // var x = event.key
  if (event.key.match(alpha)) {
    alert('Only numbers are allowed.')
    location.reload()
  }
}

function number(event) {
  if (event.keyCode === 46) {
    event.preventDefault()
    input.value = ' '
  }
  if (event.keyCode === 8) {
    event.preventDefault()
    input.value = input.value.slice(0, -1)
  }
  if (event.keyCode === 191 || event.keyCode === 111) {
    event.preventDefault()
    input.value = input.value + '/'
  }
  if (event.keyCode === 55 || event.keyCode === 103) {
    event.preventDefault()
    input.value = input.value + 7
  }
  if (event.keyCode === 56 || event.keyCode === 104) {
    event.preventDefault()
    input.value = input.value + 8
  }
  if (event.keyCode === 57 || event.keyCode === 105) {
    event.preventDefault()
    input.value = input.value + 9
  }
  if (event.keyCode === 106) {
    event.preventDefault()
    input.value = input.value + '*'
  }
  if (event.keyCode === 52 || event.keyCode === 100) {
    event.preventDefault()
    input.value = input.value + 4
  }
  if (event.keyCode === 53 || event.keyCode === 101) {
    event.preventDefault()
    input.value = input.value + 5
  }
  if (event.keyCode === 54 || event.keyCode === 102) {
    event.preventDefault()
    input.value = input.value + 6
  }
  if (event.keyCode === 189 || event.keyCode === 109) {
    event.preventDefault()
    input.value = input.value + '-'
  }
  if (event.keyCode === 49 || event.keyCode === 97) {
    event.preventDefault()
    input.value = input.value + 1
  }
  if (event.keyCode === 50 || event.keyCode === 98) {
    event.preventDefault()
    input.value = input.value + 2
  }
  if (event.keyCode === 51 || event.keyCode === 99) {
    event.preventDefault()
    input.value = input.value + 3
  }
  if (event.keyCode === 187 || event.keyCode === 107) {
    event.preventDefault()
    input.value = input.value + '+'
  }
  if (event.keyCode === 48 || event.keyCode === 96) {
    event.preventDefault()
    input.value = input.value + 0
  }
  if (event.keyCode === 190 || event.keyCode === 110) {
    event.preventDefault()
    document.getElementById('dot').click()
  }
  if ((event.keyCode === 16 + event.keyCode) === 53) {
    event.preventDefault()
    input.value = input.value + '%'
  }
}

