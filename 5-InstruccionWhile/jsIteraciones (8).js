function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	
	do 
	{
		numero = parseInt(prompt("Ingrese un número: "));
	
		if(numero>=0)
		{
			positivo=positico+numero;
		}
		else
		{
			negativo=vegativo*numero;
			contadorNegativos=contadorNegativos+1;
		}

		respuesta = prompt("¿Desea continuar?: ");
	}while(respuesta == "si");

document.getElementById('suma').value=positivo;
if(contadorNegativos==0)
{
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN