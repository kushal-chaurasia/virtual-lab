// this simulation is developed by kushal chaurasia



var organicKLOC  = document.getElementById("myRange");
var embedKLOC = document.getElementById("embed");

var organicEffort = document.getElementById("effort");
var organicTime = document.getElementById("time");
var organicNo = document.getElementById("dev");

var organicOut = document.getElementById("output");

organicOut.innerHTML = organicKLOC.value;
// for functiononing of simulator
organicKLOC.oninput = function(){
    organicOut.innerHTML = this.value;
    organicEffort.innerHTML = 2.4 * Math.pow(organicKLOC.value, 1.05) ; 
    organicTime.innerHTML = 2.5 * Math.pow(2.4 * Math.pow(organicKLOC.value, 1.05), 0.38) ;
    organicNo.innerHTML = parseInt((2.4 * Math.pow(organicKLOC.value, 1.05)  )/(2.5 * Math.pow(2.4 * Math.pow(organicKLOC.value, 1.05), 0.38)));  
    
}

var semiKLOC = document.getElementById("semi");
var semiEffort = document.getElementById("semiEffort");
var semiTime = document.getElementById("semiTime");
var semiNo = document.getElementById("semiDev");

var organicOut = document.getElementById("semiOut");

organicOut.innerHTML = semiKLOC.value;

semiKLOC.oninput = function(){
    semiOut.innerHTML = this.value;
    semiEffort.innerHTML = 3 * Math.pow(semiKLOC.value, 1.12) ; 
    semiTime.innerHTML = 2.5 * Math.pow(3 * Math.pow(semiKLOC.value, 1.12), 0.35) ;
    semiNo.innerHTML = parseInt((3 * Math.pow(semiKLOC.value, 1.12)) / (2.5 * Math.pow(3 * Math.pow(semiKLOC.value, 1.12), 0.35)));  
    
}

var embedKLOC = document.getElementById("embed");
var embedEffort = document.getElementById("embedEffort");
var embedTime = document.getElementById("embedTime");
var embedNo = document.getElementById("embedDev");

var embedOut = document.getElementById("embedOut");

embedOut.innerHTML = embedKLOC.value;

embedKLOC.oninput = function(){
    embedOut.innerHTML = this.value;
    embedEffort.innerHTML = 3.6 * Math.pow(embedKLOC.value, 1.2) ; 
    embedTime.innerHTML = 2.5 * Math.pow(3.6 * Math.pow(embedKLOC.value, 1.2), 0.32) ;
    embedNo.innerHTML = parseInt((3.6 * Math.pow(embedKLOC.value, 1.2)) / (2.5 * Math.pow(3.6 * Math.pow(embedKLOC.value, 1.2), 0.32)));  
    
}








