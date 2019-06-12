function searchNum(){
    var num = document.getElementById('bigNum').value
    var req = document.getElementById('smallNum').value
    alert(num.split(req).length-1)
}