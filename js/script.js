function openFumo(evt, fumoName) {
    topFunction();
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("open");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("open", "closed");
    }
    if (fumoName == "Contact") {
        document.getElementById(fumoName).style.display = "flex";
    } else { document.getElementById(fumoName).style.display = "block"; }
    evt.currentTarget.className = evt.currentTarget.className.replace("closed", "open");
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showname() {
    var name = document.getElementById('File');
    document.getElementById('file-subject').innerHTML = "File Upload: " + name.files.item(0).name;
};