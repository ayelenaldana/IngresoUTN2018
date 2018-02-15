function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Febrero":
    alert ("Este mes tiene 28 días");
    break;
    default:
    alert ("Este mes tiene 30 o más días");
    break;
}	
	



}//FIN DE LA FUNCIÓN