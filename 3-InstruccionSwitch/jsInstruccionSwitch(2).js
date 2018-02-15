function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":   
    case "Junio":
    alert ("Falta para el invierno");
    break;
    case "Julio":
    case "Agosto":
    alert ("Abrigate que hace frio");
    break;
    default:
    alert ("Ya se fué el frio, llegó el calorcito!");
    break;
}




}//FIN DE LA FUNCIÓN