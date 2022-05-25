function openFumo(evt, fumoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("closed");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = "closed";
    }
    document.getElementById(fumoName).style.display = "block";
    evt.currentTarget.className = "open";
}
