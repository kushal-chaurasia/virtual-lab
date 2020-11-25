//window.onload = function () {
//    draggable('calculator');
//};
//
//var dragObj = null;
//function draggable(id)
//{
//    var obj = document.getElementById(id);
//    obj.style.position = "absolute";
//    obj.onmousedown = function () {
//        dragObj = obj;
//    }
//}
//
//document.onmouseup = function (e) {
//    dragObj = null;
//};
//
//document.onmousemove = function (e) {
//    var x = e.pageX;
//    var y = e.pageY;
//
//    if (dragObj == null)
//        return;
//
//    dragObj.style.left = x + "px";
//    dragObj.style.top = y + "px";
//};

function del(val)
{
    document.getElementById("d").value = val;//calculate value

}
function v(val)
{
    document.getElementById("d").value += val;//read value

}

function Root(fn)

{


    if (fn == "sq")
        document.getElementById("d").value = Math.sqrt(document.getElementById("d").value);
    else if (fn == "cu")
        document.getElementById("d").value = Math.pow(document.getElementById("d").value, 1 / 3);

}

function Power(fn)

{

    if (fn == "sq")
        document.getElementById("d").value = Math.pow(document.getElementById("d").value, 2);

    else if (fn == "cu")
        document.getElementById("d").value = Math.pow(document.getElementById("d").value, 3);

}

function TrigFunc(tn) {

    if (tn == "sin")
        document.getElementById("d").value = Math.sin(document.getElementById("d").value);

    else if (tn == "cos")
        document.getElementById("d").value = Math.cos(document.getElementById("d").value);
    else if (tn == "tan")
        document.getElementById("d").value = Math.tan(document.getElementById("d").value);

}



function eqls()
{
    try
    {
        del(eval(document.getElementById("d").value))
    }
    catch (eqls)
    {
        del('Error')
    }
}

function calcul() {

    document.getElementById("hide").style.display = "block";
    document.getElementById("close").style.display = "block";
}

function ok() {
    document.getElementById("hide").style.display = "none";
    document.getElementById("close").style.display = "none";
}

