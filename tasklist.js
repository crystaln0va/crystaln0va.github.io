window.onload = onLoadEvent;

function onLoadEvent() {
    
    /** Load buttons to be ready for action */
    var save_value = document.getElementById('save_value');
    var delete_data = document.getElementById('delete_data');

    var take_input = document.getElementById('take_input');
    var save_value = document.getElementById('save_value');
    var delete_data = document.getElementById('delete_data');
    var localstorage_value = document.getElementById('localstorage_value');

    /** Default display */
    localstorage_value.textContent = localStorage.getItem("name");
    if(localStorage.getItem("name") === null) localstorage_value.textContent = "";


    save_value.onclick = function() {
        var old = localStorage.getItem("name");
        if(old === null) old = "";
        localStorage.setItem("name", old + take_input.value + "\n");
        localstorage_value.textContent = localStorage.getItem("name");
        take_input.value = "";
    }

    delete_data.onclick = function () {
        localStorage.clear();
        localstorage_value.textContent = "";
    }
}


