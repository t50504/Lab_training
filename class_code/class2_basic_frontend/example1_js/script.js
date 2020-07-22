function myFunction() {
  var input1 = document.getElementById("in1").value;
  var input2 = document.getElementById("in2").value;
  var result = document.getElementById("result");
  result.innerHTML = parseInt(input1,10)+parseInt(input2,10);
}

var count = 0; //global variable
function myFunction2() {
  count += 1; 
  
  if(count > 3){
    alert('out of range!');
    count = 0;
  };
  
  var result2 = document.getElementById("result2");
  result2.innerHTML = count;
};