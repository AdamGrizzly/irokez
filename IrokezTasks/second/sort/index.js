var dict = []
go = () => {
    var input = document.getElementById('input').value
    var pieces = input.split(' ');
    for ( var i = 0 ; i < pieces.length ; i++ ) {
        dict.push(Number(pieces[i]))
    }
    sortNumber = (a,b)=> a-b
    dict.sort(sortNumber)
    alert(dict)
}