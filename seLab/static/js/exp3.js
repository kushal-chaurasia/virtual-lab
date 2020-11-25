// THis script has been developed by kushal chaurasia 


// for actor extraction of data
var addActor = document.getElementById('addActor');


addActor.addEventListener("click", function (e) {
    var actor = document.getElementById('actor');
    var actorData = localStorage.getItem('actorData');
    if (actorData == null) {

        actorDataObj = [];
    }
    else {
        actorDataObj = JSON.parse(actorData);
    }
    actorDataObj.push(actor.value);

    localStorage.setItem('actorData', JSON.stringify(actorDataObj));
    console.log()
    actor.value = "";
    
    showActor();
    
});




// show actor added
function showActor() {
    var actorData = localStorage.getItem('actorData');
    if (actorData == null) {
        actorDataObj = [];
    }
    else {
        actorDataObj = JSON.parse(actorData);
    }
    var actorName = "";
    var actorListHtml = ""
    actorDataObj.forEach(function (element, index) {
        actorName += ` <p>${element} <br>
        <button type="button" id="${index}"  onclick = "deleteActor(this.id)" class="btn btn-info  btn-sm" >Remove</button> </p>   `

    });


    var actorList = document.getElementById('actorList');
    var actorDataElm = document.getElementById('actorData');
   
    if (actorData.length != 0) {
        actorDataElm.innerHTML = actorName;
        actorList.innerHTML = actorListHtml;
       
    }
}


// delete   button functionality for actor
function deleteActor(index) {
    var actorData = localStorage.getItem('actorData');
    if (actorData == null) {
        actorDataObj = [];
    }
    else {
        actorDataObj = JSON.parse(actorData);
    }

    actorDataObj.splice(index, 1);
    localStorage.setItem('actorData', JSON.stringify(actorDataObj));

    showActor();
}



// for fetching details of cases

var addCase = document.getElementById('addCase');


addCase.addEventListener("click", function (e) {
    var useCase = document.getElementById('useCase');
    var caseData = localStorage.getItem('caseData');
    if (caseData == null) {
        caseDataObj = [];
    }
    else {
        caseDataObj = JSON.parse(caseData);
    }
    caseDataObj.push(useCase.value);
    localStorage.setItem('caseData', JSON.stringify(caseDataObj));
    useCase.value = "";

    showCase();
});
// show cases added
function showCase() {
    var caseData = localStorage.getItem('caseData');
    if (caseData == null) {
        caseDataObj = [];
    }
    else {
        caseDataObj = JSON.parse(caseData);
    }
    var caseName = "";
    var caseListHtml = ""
    caseDataObj.forEach(function (element, index) {
        caseName += ` <p>${element} <br>
        <button type="button" id="case_${index}"  onclick = "deleteCase(this.id)" class="btn btn-info  btn-sm" >Remove</button>
        </p>
            `

        
        
    });


    var caseList = document.getElementById('caseList'); 
    var caseDataElm = document.getElementById('caseData');
    if (caseData.length != 0) {
        caseDataElm.innerHTML = caseName;
        caseList.innerHTML = caseListHtml;
        
        
    }
    
}

// remove case

function deleteCase(index) {
    var caseData = localStorage.getItem('caseData');
    if (caseData == null) {
        caseDataObj = [];
    }
    else {
        caseDataObj = JSON.parse(caseData);
    }

    caseDataObj.splice(index, 1);
    localStorage.setItem('caseData', JSON.stringify(caseDataObj));

    showCase();
}







var lastStep = document.getElementById('lastStep');
lastStep.addEventListener("click", function (e) {
    var relation = document.getElementById("relation");
    var relationValue = relation.options[relation.selectedIndex].value;
    switch (relationValue) {
        case 'association':
            var firstElement = document.getElementById('actorList')
            var firstElementValue = firstElement.options[firstElement.selectedIndex].value;

            var firstActor = actorDataObj.includes(firstElementValue) ;
            var secondElement = document.getElementById('caseList')
            var secondElementValue = secondElement.options[secondElement.selectedIndex].value;
            var secondCase = caseDataObj.includes(secondElementValue) ;

            if(firstActor == true && secondCase == true){
                
                
            }

            else{
                alert('Only association is  possible between an Actor and Case')
            }


        
            
           
            
        
            



            break;
        case 'generalization':
            console.log('generalization')
            break;
        case 'includ':
            console.log('includ')
            break;
        case 'extent':
            console.log('extent')
            break;
        default:
            alert('pleaase select any values')
            break;
    }



});
