function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;

	numeroAleatorio = Math.floor(Math.random()* 10)+1;

	if (numeroAleatorio >=9)
	{
		alert (numeroAleatorio + " Excelente!");
	}
	else if(numeroAleatorio <4)
	{
		alert(numeroAleatorio + " Vamos que se puede!");
	}
	else
	{
		alert (numeroAleatorio + " Aprobó");
	}

}//FIN DE LA FUNCIÓN