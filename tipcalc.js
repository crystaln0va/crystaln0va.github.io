function calcTip(){

    /** Gets subtotal input box */
    var subtotalElem = document.getElementById('subtotal');

    /** Gets tip input box */
	var tipElem = document.getElementById('tip');

    /** Gets 'total' paragraph */
	var totalElem = document.getElementById('total');

	var subtotal = parseFloat(subtotalElem.value);
	var tip = (subtotal * parseFloat(tipElem.value))/100;

    if(isNaN(tip)||isNaN(subtotal)){
        alert("Please enter a valid value!");
        tipElem.value='';
        subtotalElem.value='';
        return;
    }
   
    var total = subtotal+tip;
    totalElem.innerHTML = '$' + total;

}