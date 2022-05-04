window.onload = onLoadEvent;

class Account {
    #accountName;
    #balance;
    static accountInfoList = [];

    constructor() {
        
    }
    setAccountName(accN) {
        this.#accountName = accN;
    }
    setBalance(bal) {
        this.#balance = bal;
    }
    getAccountName() {
        return this.#accountName;
    }
    getBalance() {
        return this.#balance;
    }
}

function onLoadEvent() {
    

    var createacc_button = document.getElementById('createacc_button');
    var take_acc_input = document.getElementById('take_acc_input');
    var take_dep_input = document.getElementById('take_dep_input');
    var display_textarea = document.getElementById('display_textarea');

    createacc_button.onclick = function() {
        /** Make a new instance of Account */
        var acc = new Account();
        acc.setAccountName(take_acc_input.value);
        acc.setBalance(take_dep_input.value);
        Account.accountInfoList.push(acc);
        

        /** Display the list in display field */
        display_textarea.textContent = returnItems();
        /** "Account Name: " + Account.accountInfoList[0].getAccountName() + " Balance: " + Account.accountInfoList[0].getBalance(); */

        function returnItems() {
            let i;
            var allDisplay = "";
            for (i=0; i < Account.accountInfoList.length; i++) {
                allDisplay = allDisplay + "Account Name: " + Account.accountInfoList[i].getAccountName() + " Balance: " + Account.accountInfoList[i].getBalance() + "\n";
            }
            return allDisplay;
        }
        
    }


}