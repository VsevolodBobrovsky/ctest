var auth = document.getElementById('auth');
var valid = document.getElementById('valid');
var login = document.getElementById('login');
var pass = document.getElementById('pass');
var loginMask = /^[A-Za-z0-9_]{0,20}$/;

auth.onsubmit = function(){
	event.preventDefault();
	validation();
}

function validation(){
	if (login.value === ''){
		valid.textContent = 'All the fields should be fulfilled.';
		login.classList.add('auth-input-invalid');
		login.focus();
	}
	else if (!loginMask.test(login.value)){
		valid.innerHTML = 'Login should contain correct symbols.';
		login.classList.add('auth-input-invalid');
		login.focus();
	}
	else if (pass.value === ''){
		valid.textContent = 'All the fields should be fulfilled.';
		login.classList.remove('auth-input-invalid');
		pass.classList.add('auth-input-invalid');
		pass.focus();
	}
	else if (pass.value.length < 8){
		valid.textContent = 'Password should contain at least 8 symbols.';
		login.classList.remove('auth-input-invalid');
		pass.classList.add('auth-input-invalid');
		pass.focus();
	}
	else{		
		login.classList.remove('auth-input-invalid');
		pass.classList.remove('auth-input-invalid');
		username.textContent = login.value + ',';
		login.value = pass.value = valid.textContent = '';
		auth.classList.remove('inner-visible');
		logged.classList.add('inner-visible');
	}
}