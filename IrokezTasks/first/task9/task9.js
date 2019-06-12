window.onload = function () {
    function selectElementContents(el) {
    if (document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");
    } else if (window.getSelection && document.createRange) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    }
}

function make_copy_button(el) {
    var copy_btn = document.createElement('input');
    copy_btn.type = "button";
    el.parentNode.insertBefore(copy_btn, el.nextSibling);
    copy_btn.onclick = function() {
        selectElementContents(el);
    };

    if (document.queryCommandSupported("copy") || parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) >= 42) {
        copy_btn.value = "Copy to Clipboard";
    } else {
        copy_btn.value = "Select All (then press CTRL+C to Copy)";
    }
}

make_copy_button(document.getElementById("markup"));
}