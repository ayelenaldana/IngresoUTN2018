function Mostrar()
{

	var contador=0;
	var numero;
	var mayor;
	var menor;
	var seguir;
	//var flag =0;

	do
	{
		numero = parseInt(prompt("Ingrese número: "));
		contador ++;
		//if(numero>mayor || flag ==0)
		//{
		// mayor = numero;
		//}
		//if(numero<menor || flag == 0)
		// {
			//menor=numero;
			//flag =1;
		//} (si uso flag, debo eliminar var contador e if(contador == 1) con sus llaves)

		if(contador ==1)
		{
			mayor=numero;
			menor=numero;

		}
		if(numero>mayor)
		{
			mayor = numero;
		}
		if(numero < menor)
		{
			menor = numero;
		}
		seguir = prompt("¿Desea continuar?");
	}while(seguir == "si"); 
	
		document.getElementById("maximo").value = "El mayor es " + mayor;
		document.getElementById("minimo").value = "El menor es " + menor;
	
	




}//FIN DE LA FUNCIÓN