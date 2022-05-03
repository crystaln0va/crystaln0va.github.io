window.onload = onLoadEvent;

function onLoadEvent() {
    /** Load buttons to be ready for action */
    var addtaskbutton = document.getElementById('addtaskbutton');
    var clearbutton = document.getElementById('clearbutton');

    /** Assign functions (right side) to actions (left side) */
    addtaskbutton.onclick = submitListItem;
}


function submitListItem() {
    var userinput = document.getElementById('userinput');
    var output1 = document.getElementById('output1');
    var counter = 0;

    localStorage.setItem(counter.toString(), userinput.value);
    counter++;

    var outputString = "";
    for (let i = 0 ; i < localStorage.length ; i++) {
        outputString = outputString + "\n" + localStorage.getItem(i.toString());
    }

    output1.innerHTML = outputString;
}