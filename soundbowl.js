const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let gainNode;
gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

window.onload = onLoadEvent;
function onLoadEvent() {
    let redStarted = false;
    let oraStarted = false;
    let yelStarted = false;
    let greStarted = false;
    let liblStarted = false;
    let dablStarted = false;
    let purStarted = false;

    let redOsc;
    let oraOsc;
    let yelOsc;
    let greOsc;
    let liblOsc;
    let dablOsc;
    let purOsc;

    var redBowl = document.getElementById('sept-red');
    var oraBowl = document.getElementById('sept-ora');
    var yelBowl = document.getElementById('sept-yel');
    var greBowl = document.getElementById('sept-gre');
    var liblBowl = document.getElementById('sept-libl');
    var dablBowl = document.getElementById('sept-dabl');
    var purBowl = document.getElementById('sept-pur');




    

    redBowl.onclick = function() {
        if (!redStarted) {
            redOsc = audioContext.createOscillator();
            prepOscillator(258,redOsc);
            redOsc.start();
            redStarted = true;
            document.getElementsByClassName('ripple-behind-red')[0].style.display='block';
        } else {
            takeDownOscillator(redOsc);
            redStarted = false;
            document.getElementsByClassName('ripple-behind-red')[0].style.display='none';
        }
    }

    oraBowl.onclick = function() {
        if (!oraStarted) {
            oraOsc = audioContext.createOscillator();
            prepOscillator(285,oraOsc);
            oraOsc.start();
            oraStarted = true;
            document.getElementsByClassName('ripple-behind-ora')[0].style.display='block';
        } else {
            takeDownOscillator(oraOsc);
            oraStarted = false;
            document.getElementsByClassName('ripple-behind-ora')[0].style.display='none';
        }
    }

    yelBowl.onclick = function() {
        if (!yelStarted) {
            yelOsc = audioContext.createOscillator();
            prepOscillator(325,yelOsc);
            yelOsc.start();
            yelStarted = true;
            document.getElementsByClassName('ripple-behind-yel')[0].style.display='block';
        } else {
            takeDownOscillator(yelOsc);
            yelStarted = false;
            document.getElementsByClassName('ripple-behind-yel')[0].style.display='none';
        }
    }

    greBowl.onclick = function() {
        if (!greStarted) {
            greOsc = audioContext.createOscillator();
            prepOscillator(343,greOsc);
            greOsc.start();
            greStarted = true;
            document.getElementsByClassName('ripple-behind-gre')[0].style.display='block';
        } else {
            takeDownOscillator(greOsc);
            greStarted = false;
            document.getElementsByClassName('ripple-behind-gre')[0].style.display='none';
        }
    }

    liblBowl.onclick = function() {
        if (!liblStarted) {
            liblOsc = audioContext.createOscillator();
            prepOscillator(383,liblOsc);
            liblOsc.start();
            liblStarted = true;
            document.getElementsByClassName('ripple-behind-libl')[0].style.display='block';
        } else {
            takeDownOscillator(liblOsc);
            liblStarted = false;
            document.getElementsByClassName('ripple-behind-libl')[0].style.display='none';
        }
    }

    dablBowl.onclick = function() {
        if (!dablStarted) {
            dablOsc = audioContext.createOscillator();
            prepOscillator(432,dablOsc);
            dablOsc.start();
            dablStarted = true;
            document.getElementsByClassName('ripple-behind-dabl')[0].style.display='block';
        } else {
            takeDownOscillator(dablOsc);
            dablStarted = false;
            document.getElementsByClassName('ripple-behind-dabl')[0].style.display='none';
        }
    }

    purBowl.onclick = function() {
        if (!purStarted) {
            purOsc = audioContext.createOscillator();
            prepOscillator(486,purOsc);
            purOsc.start();
            purStarted = true;
            document.getElementsByClassName('ripple-behind-pur')[0].style.display='block';
        } else {
            takeDownOscillator(purOsc);
            purStarted = false;
            document.getElementsByClassName('ripple-behind-pur')[0].style.display='none';
        }
    }







    function prepOscillator(frequency, oscillator) {
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(gainNode);
        gainNode.gain.value = (1/7);
    }

    function takeDownOscillator(oscillator) {
        oscillator.stop();
        oscillator.disconnect();
    }
}