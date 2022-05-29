function openFumo(evt, fumoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("open");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("open", "closed");
    }
    document.getElementById(fumoName).style.display = "flex";
    evt.currentTarget.className = evt.currentTarget.className.replace("closed", "open");
}

function showname() {
    var name = document.getElementById('File');
    alert('Selected file: ' + name.files.item(0).name);
    alert('Selected file: ' + name.files.item(0).size);
    alert('Selected file: ' + name.files.item(0).type);
};