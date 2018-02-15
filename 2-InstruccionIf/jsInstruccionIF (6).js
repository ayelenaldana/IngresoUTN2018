function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if(edad<13)
{
    alert("Sos niñx.");
}
else if(edad>=18)
{
    alert("Sos adultx.");
}
else
 {
    alert("Sos adolescente.");
 }  

}//FIN DE LA FUNCIÓN