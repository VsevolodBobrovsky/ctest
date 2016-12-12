var logout = document.getElementById('logout');

logout.onclick = function(){
	username.textContent = 'Hello,';
	logged.classList.remove('inner-visible');
	auth.classList.add('inner-visible');
}