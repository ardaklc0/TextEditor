document.getElementById('btn-save').addEventListener('click', function() {
    var text = document.getElementById('text-panel').innerHTML;
    console.log(text);
});

document.getElementById('btn-bold').addEventListener('click', function() {
    document.execCommand('bold');
});

document.getElementById('btn-italic').addEventListener('click', function() {
    document.execCommand('italic');
});

document.getElementById('btn-underline').addEventListener('click', function() {
    document.execCommand('underline');
});

document.getElementById('btn-left').addEventListener('click', function() {
    document.execCommand('justifyLeft');
});

document.getElementById('btn-center').addEventListener('click', function() {
    document.execCommand('justifyCenter');
});

document.getElementById('btn-right').addEventListener('click', function() {
    document.execCommand('justifyRight');
});

document.getElementById('btn-justify').addEventListener('click', function() {
    document.execCommand('justifyFull');
});

document.getElementById('btn-list').addEventListener('click', function() {
    document.execCommand('insertUnorderedList');
});

document.getElementById('btn-list-ol').addEventListener('click', function() {
    document.execCommand('insertOrderedList');
});

document.getElementById('btn-link').addEventListener('click', function() {
    var url = prompt("Enter the URL:");
    document.execCommand('createLink', false, url);
});

document.getElementById('btn-image').addEventListener('click', function() {
    var url = prompt("Enter the image URL:");
    document.execCommand('insertImage', false, url);
});

document.getElementById('font-select').addEventListener('change', function() {
    var font = this.value;
    document.execCommand('fontName', false, font);
});

document.getElementById('font-size-select').addEventListener('change', function() {
    var size = this.value;
    document.execCommand('fontSize', false, size);
});