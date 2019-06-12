function sumNum(){
    var res=0
    var input = document.getElementById('number').value
    input = [].slice.call(input);
    input.forEach(function (i) {
        res+=(+i)||0
    });
    alert(res);
}