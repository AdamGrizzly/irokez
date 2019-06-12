function go(){
    var input = document.getElementById('time').value
    input = input % 6
    if( input < 3){
        alert('green')
    }else if(input<4){
        alert('yellow')
    }else{
        alert('red')
    }
}