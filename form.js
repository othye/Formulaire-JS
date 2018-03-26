
// Fontion on submit
var Fomul = document.formul;

function validate()
{

	if( formul.nom.value == "" )
	{
		alert( "Veuillez renseigner votre Nom " );
		formul.nom.focus() ;
		return false;
	}

	if( formul.prenom.value == "" )
	{
		alert( "Veuillez renseigner votre Prenom " );
		formul.prenom.focus() ;
		return false;
	}

	if( formul.email.value == "" )
	{
		alert( "Veuillez renseigner votre E-mail" );
		formul.email.focus() ;
		return false;
	}

	if( formul.situation.value == "-1" )
	{
		alert( "Veuillez choisir votre statut" );
		return false;
	}

	if( formul.sujet.value == "" )
	{
		alert( " Veuillez renseigner votre sujet" );
		formul.sujet.focus() ;
		return false;
	}

	if( formul.message.value == "" )
	{
		alert( "Vous avez oublié de poser votre question!" );
		formul.message.focus() ;
		return false;
	} 

	//recupere tous les objet qui ont le nom "name" 
	var genre = document.getElementsByName('genre'); 
	var genreValue=false;
	//Pour chaque objets.... 
	for(i=0;i<genre.length;i++) { 
		//Si l'objet en cours en coch� on renvoie true 
		if (genre[i].checked==true) {
			genreValue= true; 
		}
	} 
	if(!genreValue){
		alert("Merci de cocher votre civilité");
		return false;
	}

	var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

	if(reg.test(formul.email.value)){
		return(true);
	}
	else{
		alert("Votre E-mail est incorrect");
		return(false);
	}


	return( true );
}




