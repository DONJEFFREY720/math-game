function send(){

number1 = document.getElementById("questuon_input1").value
number2 = document.getElementById("questuon_input2").value
actual_answer = praseInt(number1) *praseInt(number2)
question_number= "<h4>"+number1+"X"+number2+"</h4>"
input_box = "<br>ANSWER:<input type='text' id='input_check_box'>";
check_button =  "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number+input_box+check_button

document.getElementById("output").innerHTML = row;
document.getElementById("questuon_input1").value="";
document.getElementById("questuon_input2").value="";


}
