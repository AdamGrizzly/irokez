function go(){
    var text = document.getElementById('minify').value
    var output = document.getElementById('output')

    let s = text.split('{',).join('{</br>');
    let r = s.split(';',).join(';  '); 
    output.innerHTML = r.split('  ',).join('</br>   ');  
}