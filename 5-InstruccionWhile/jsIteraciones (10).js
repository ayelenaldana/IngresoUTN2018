/*1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
function Mostrar()
{
	var contadorNeg = 0;
	var contadorPos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var numero;
	var seguir;
	var diferencia;
	
	do
	{
		numero = parseInt(prompt("Ingrese un número: "));

		if(numero > 0)
		{
			ContadorPos ++;
			acumuladorPos = acumuladorPos + numero;
		}
		else if(numero<0)
		{	
			contadorNeg ++;
			acumuladorNeg = acumuladorNeg + numero;
		}
		else
		{
			ContadorCeros++;

		}

		if(numero%2 == 0)
		{
			contadorPares ++;
		}

		seguir = prompt("¿Desea continuar? ");	
	}while(seguir == "si");

	if(contadorNeg != 0)
	{
		promedioNeg = acumuladorNeg / acumuladorPos;
	}

	if (contadorPos != 0)
	{
		promedioPos = acumuladorPos / acumuladorNeg;
	}

		diferencia = acumuladorPos - acumuladorNeg;


	
	document.write("1-La suma de los negativos es: " + acumuladorNeg + "<br/>");
	docuemnt.write("2- La suma de los positivos es: " + acumuladorPos + "<br/>");
	docuemnt.write("2- La cantidad de los positivos es: " + contadorPos + "<br/>");
	docuemnt.write("2- La cantidad de los negativos es: " + acumuladorNeg + "<br/>");
	docuemnt.write("2- La cantidad de los ceros es: " + contadorCeros + "<br/>");
	docuemnt.write("2- La cantidad de los pares es: " + CcontadorPares + "<br/>");
	docuemnt.write("2- La suma de los positivos es: " + acumuladorPos + "<br/>");




}//FIN DE LA FUNCIÓN