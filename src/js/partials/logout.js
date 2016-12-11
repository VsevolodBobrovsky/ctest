var logout = document.getElementById('logout');

logout.onclick = function(){
	logged.classList.remove('inner-visible');
	auth.classList.add('inner-visible');
}