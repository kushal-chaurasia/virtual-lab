let addEntity = document.getElementById('addEntity');

addEntity.addEventListener("click", function(){
   let entity= document.getElementById('entity');
   let entityData = localStorage.getItem('entityData');

   if (entityData == null) {
      entityDataObj = []; 
   } else {
      entityDataObj = JSON.parse(entityData);
   }
   entityDataObj.push(entity.value);
   localStorage.setItem('entityData', JSON.stringify(entityDataObj));
   entity.value = ""
   showEntity();
   let weakValue = document.getElementById('weakValue')
   abc = "";
   if (document.getElementById("weak").checked == false) {
       abc += `yes`;
   } else {
      abc += `no`;
   }
   weakValue.innerHTML = abc;
})

function showEntity(){
   let entityData = localStorage.getItem('entityData');

   if (entityData == null) {
      entityDataObj = []; 
   } 
   else {
      entityDataObj = JSON.parse(entityData);
   }
   var entityName = "";
   var entityListHtml = "";
   entityDataObj.forEach(function (element, index) {
      entityName += ` <p>${element} <br>
      <button type="button" id="${index}"  onclick = "deleteEntity(this.id)" class="btn btn-info  btn-sm" >Remove</button> </p>   `
      entityListHtml += `
        <option  value="${element}">  ${element}</option>
                        `

  });
   var entityList = document.getElementsByClassName('eventList');
   var entityDataElm = document.getElementById('entityData');
   if (entityData.length != 0){
      entityDataElm.innerHTML = entityName;
      for( x=0; x <entityList.length; x++){
         entityList[x].innerHTML = entityListHtml;
   }
   }
}
function deleteEntity(index) {
   var entityData = localStorage.getItem('entityData');
   if (entityData == null) {
       entityDataObj = [];
   }
   else {
       entityDataObj = JSON.parse(entityData);
   }

   entityDataObj.splice(index, 1);
   localStorage.setItem('entityData', JSON.stringify(entityDataObj));

   showEntity();
}
