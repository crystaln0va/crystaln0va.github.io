window.onload = onLoadEvent;

function onLoadEvent() {
    var btnDecorate = document.getElementById("btndecorate");
    var chkbling = document.getElementById("chkbling");
    var btnigpay = document.getElementById("btnigpay");
    var btnmalkovich = document.getElementById("btnmalkovich");
    btnDecorate.onclick = onButtonclick;
    chkbling.onchange = onBlingChanged;
    btnigpay.onclick = btnIgpayClick;
    btnmalkovich.onclick = btnMalkovichClick;
}
function onButtonclick() {
    setInterval(changeFontSize,500);
}

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

function btnIgpayClick(){
    var txtinput = document.getElementById("txtinput");
    var text=txtinput.value.trim();
    var result='';
    if(text.length>0){
        var words=text.split(" ");
        for(let i=0;i<words.length;i++){
            let w=words[i].trim();
            let tempw=translatePigLatin(w);
            result+=tempw+" ";
        }
        txtinput.value=result;
        
    }
}