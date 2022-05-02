window.onload = onLoadEvent;

function onLoadEvent() {
    /* Make font get freaky */
    var btnDecorate = document.getElementById("btndecorate");
    /* Turn text green underline */
    var chkbling = document.getElementById("chkbling");

    btnDecorate.onclick = onButtonclick;
    chkbling.onchange = onBlingChanged;
}

/* Font sizer */
function onButtonclick() {
    setInterval(changeFontSize,500);
}

/*  */
function onBlingChanged() {
    var txtinput = document.getElementById("txtinput");
    if (this.checked) {
        txtinput.style.fontWeight = "bold";
        txtinput.style.color = "green";
        txtinput.style.textDecoration = "underline";
    } else {
        txtinput.style.fontWeight = "normal";
        txtinput.style.color = "black";
        txtinput.style.textDecoration = "none";
    }
}

function changeFontSize(){
        var txtinput = document.getElementById("txtinput");
        var style = window.getComputedStyle(txtinput,null).getPropertyValue('font-size');
        var size = parseFloat(style); 
        txtinput.style.fontSize = (size + 3) + 'px';
}