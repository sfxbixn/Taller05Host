var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();


function guardarDatos(user){
	var usuario={
		uid	:user.uid,
		nombre	:user.displayName,
		email	:user.email,
		foto	:user.photoURL
	}
	firebase.database().ref("taller05be/Usuarios"+user.uid).set(usuario)
}


//jquery sujeta la etiqueta root
$('#loginGoogle').click(function(){
	firebase.auth()
	.signInWithPopup(providerGoogle)
	.then(function(result){
		console.log(result.user);
		$('#login').hide();
		$('#root').append(result.user.displayName);
		$('#root').append("<img src='"+result.user.photoURL+"'/>");
		guardarDatos(result.user)
	});
});
$('#loginFacebook').click(function(){
	firebase.auth()
	.signInWithPopup(providerFacebook)
	.then(function(result){
		console.log(result.user);
		$('#login').hide();
		$('#root').append(result.user.displayName);
		$('#root').append("<img src='"+result.user.photoURL+"'/>");
		guardarDatos(result.user)
	});
});