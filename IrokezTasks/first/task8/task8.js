window.onload = function () {
    var btn = document.getElementById("btn");
    function searchYear() {
       var input = document.getElementById("input").value;

       if ( input > 0 && input < 9999) {
          if ( input % 4 == 0) {
             alert( input + "високосный год")
          } else {
             alert(input + " не високосный год");
          }
       } else {
          alert("не корректно введены параметры");
       }
    }
 
    btn.addEventListener("click", searchYear)
 }