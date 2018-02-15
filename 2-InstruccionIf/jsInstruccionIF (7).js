function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad = document.getElementById("edad").value;

estadoCivil = document.getElementById("estadoCivil").value;

if (edad < 18 && estadoCivil != "Soltero")
{
    alert ("Sos muy pequeñx para no ser solterx.");
}

	


}//FIN DE LA FUNCIÓN