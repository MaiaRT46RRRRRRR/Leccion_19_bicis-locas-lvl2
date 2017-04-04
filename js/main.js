function validateForm(){
	
	
 var name       = document.getElementById("name").value;
 var lastname   = document.getElementById("lastname").value;
 var password   = document.getElementById("input-password").value;
 var email      = document.getElementById("input-email").value;
 var opcion     = document.getElementById("opcion").value;
 
 var name_error = document.getElementById("name_error") ;//.classList.add("tooltip");
 var lastname_error = document.getElementById("lastname_error");//.classList.add("tooltip");
 var email_error = 	document.getElementById("email_error") ;//.classList.add("tooltip");
 var password_error = 	document.getElementById("password_error") ;//.classList.add("tooltip");
 var opcion_error = 	document.getElementById("opcion_error");//.classList.add("tooltip");

 var texto = /[A-Z]{1,}[a-z]+/ ;
 var correo =/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ ;

	// Validación de nombre
	document.getElementById("name_error").classList.add("tooltip");
	document.getElementById("lastname_error").classList.add("tooltip");
	document.getElementById("email_error").classList.add("tooltip");
	document.getElementById("password_error").classList.add("tooltip");
	document.getElementById("opcion_error").classList.add("tooltip");
	 

	if(name != ""){
		if(!name.match(texto)){
			printClass('name_error');
			showMessage("name_error","Solo se aceptan letras ,el 1° Caracter debe estar en Mayúscula");
		}	
	} else {
		printClass('name_error');
	 	showMessage("name_error","Debe ingresar su nombre");	
	}
	
	//vali(name, texto, name_error , "Solo se aceptan letras ,el 1° Caracter debe estar en Mayúscula" , "Debe ingresar su apellido");
	// Validación de apellido

   	if (lastname  != "") {
   		if(!name.match(texto)){
   			printClass('lastname_error');
    		showMessage("lastname_error","Solo se aceptan letras ,el 1° Caracter debe estar en Mayúscula");
  		}
  	} else {  
  		printClass('lastname_error');
		showMessage("lastname_error","Debe ingresar su apellido");
	}
	// Validación de correo
	if (email  != "") {
   		if(!email.match(correo)){
   			printClass('email_error');
    		showMessage('email_error',"El correo debe de tener el siguiente dominio: \n Sign in xxxx@yyyyy.zzzz");
 		 }
  	} else {  
  		printClass('email_error');
		showMessage("email_error","Debe ingresar su correo");
	}
	// Validación de contraseña
    if (password != "" ){
 		if(password.length < 7 || password == "password" || password == "123456" || password == "098754"){
   			printClass('password_error');
   			showMessage('password_error'," La contraseña debe tener al menos 6 digitos, \n y no pueden ser 123456 \n o 098754");
  		} 	
  	}else {
  		printClass('password_error');
  		showMessage("password_error","Debe ingresar su contraseña");
  	}
  	// Validacion seleccion de bicicleta
    if (opcion == 0){
    	printClass('opcion_error');
   	showMessage("opcion_error","Debe seleccionar al menos una opcion de bicicleta");
    }
} 
 /*

function vali(elem , comp, error , mens1 , mens2){

	if(elem != ""){
		if(!elem.match(comp)){
			printClass(error);
			showMessage(error,"Solo se aceptan letras ,el 1° Caracter debe estar en Mayúscula");
		}	
	} else {
		printClass(error);
	 	showMessage(error,"Debe ingresar su nombre");	
	}
}
*/
function showMessage(element,message) {
  var e = document.getElementById(element);
  e.innerHTML = "";
  e.innerHTML = message;
}

function printClass(elem){
	document.getElementById(elem).classList.remove("tooltip");
	document.getElementById(elem).classList.add("tooltiptext");
}
