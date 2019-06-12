go=()=>{
    var text = document.getElementById('input').value
    text = text.replace(/\s+/g, '');
    var output = document.getElementById('output');
    output.innerHTML = text
}
