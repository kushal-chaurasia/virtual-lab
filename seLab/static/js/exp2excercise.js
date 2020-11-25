

function organic() {
    var organicKDSI = document.getElementById('organicKDSI');
    var organicEAF = document.getElementById('organicEAF');
    var organicEPM = document.getElementById('organicEPM');
    var organicTime = document.getElementById('organicTime');
    var organicEffortCorrect = document.getElementById('organicEffortCorrect');
    var organicTimeCorrect = document.getElementById('organicTimeCorrect');
    var organicDev = document.getElementById('organicDev');

    organicEPM.innerHTML = 2.4 * Math.pow(organicKDSI.value, 1.05) ; 
    organicTime.innerHTML = 2.5 * Math.pow(2.4 * Math.pow(organicKDSI.value, 1.05), 0.38) ;
    organicEffortCorrect.innerHTML = 2.4 * Math.pow(organicKDSI.value, 1.05) * organicEAF.value;
    organicTimeCorrect.innerHTML = 2.5 * Math.pow((2.4 * Math.pow(organicKDSI.value, 1.05) * organicEAF.value), 0.38);
    organicDev.innerHTML = parseInt(( 2.4 * Math.pow(organicKDSI.value, 1.05) * organicEAF.value)/(2.5 * Math.pow((2.4 * Math.pow(organicKDSI.value, 1.05) * organicEAF.value), 0.38)));
}

function semiAttached() {
    var saKDSI = document.getElementById('saKDSI');
    var saEAF = document.getElementById('saEAF');
    var saEPM = document.getElementById('saEffort');
    var saTime = document.getElementById('saTime');
    var saEffortCorrect = document.getElementById('saEffortCorrect');
    var saTimeCorrect = document.getElementById('saTimeCorrect');
    var saDev = document.getElementById('saDev');

    saEPM.innerHTML = 3 * Math.pow(saKDSI.value, 1.12) ; 
    saTime.innerHTML = 2.5 * Math.pow(3 * Math.pow(saKDSI.value, 1.12), 0.35) ;
    saEffortCorrect.innerHTML = 3 * Math.pow(saKDSI.value, 1.12) * saEAF.value;
    saTimeCorrect.innerHTML = 2.5 * Math.pow((3 * Math.pow(saKDSI.value, 1.12) * saEAF.value), 0.35);
    saDev.innerHTML = parseInt(( 3 * Math.pow(saKDSI.value, 1.12) * saEAF.value)/(2.5 * Math.pow((3 * Math.pow(saKDSI.value, 1.12) * saEAF.value), 0.35)));
}


function embed() {
    var embdKDSI = document.getElementById('embdKDSI');
    var embdEAF = document.getElementById('embdEAF');
    var embdEPM = document.getElementById('embdEffort');
    var embdTime = document.getElementById('embdTime');
    var embdEffortCorrect = document.getElementById('embdEffortCorrect');
    var embdTimeCorrect = document.getElementById('embdTimeCorrect');
    var embdDev = document.getElementById('embdDev');

    embdEPM.innerHTML = 3.6 * Math.pow(embdKDSI.value, 1.2) ; 
    embdTime.innerHTML = 2.5 * Math.pow((3.6 * Math.powembdaKDSI.value, 1.2), 0.32) ;
    embdEffortCorrect.innerHTML = 3.6 * Math.pow(embdKDSI.value, 1.2) * embdEAF.value;
    embdTimeCorrect.innerHTML = 2.5 * Math.pow((3.6 * Math.pow(embdKDSI.value, 1.2) * embdEAF.value), 0.32);
    embdDev.innerHTML = parseInt(( 3.6 * Math.pow(embdKDSI.value, 1.2) * embdEAF.value)/(2.5 * Math.pow((3 * Math.pow(embdKDSI.value, 1.2) * embdEAF.value), 0.32)));
}
