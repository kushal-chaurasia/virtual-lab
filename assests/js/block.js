var curitem = 0;

   function loadNewPage(idx) {
      document.getElementById("itembody" + curitem).style.display = "none";
      document.getElementById("itembody" + idx).style.display = "block";
      curitem = idx;
   }
function showHide(shID) {
   if (document.getElementById(shID)) {
      if (document.getElementById(shID+'-show').style.display != 'none') {
         document.getElementById(shID+'-show').style.display = 'none';
         document.getElementById(shID).style.display = 'block';
      }
      else {
         document.getElementById(shID+'-show').style.display = 'inline';
         document.getElementById(shID).style.display = 'none';
      }
   }
}