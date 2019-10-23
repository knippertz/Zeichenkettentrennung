function work()
{
var text = document.getElementById("inputEins").value
var position = document.getElementById("inputZwei").value
if(document.getElementById("trennDavor").checked) 
    {
    document.getElementById("vordererTeil").innerHTML = text.slice(0,position);
    }
if(document.getElementById("trennDanach").checked)
    {
    document.getElementById("hintererTeil").innerHTML = text.slice(position);
    }
}
