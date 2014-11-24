(function(){
	
	ModuleLoader.load('.jcc-header-section', './partials/header.html');
	ModuleLoader.load('.jcc-content-section', './partials/login.html');
})();

var Login = (function() {
	
	var username = 'anandsivaj@gmail.com';
	var password = 'sivaji27';
	
	return {
		
		onSignInClicked: function() {
			
			var loginForm = document.forms['login'];
			var user = this.validateUsername(loginForm.username.value);
			var pass = this.validatePassword(loginForm.password.value);
						
			if (user.valid && pass.valid) {
				
				loginForm.style.display = "none";
				
				var loggedUser = document.forms['loggedUser'];
				
				loggedUser.style.display = "inline-block";
				document.getElementsByClassName("jcc-logged-ser-text")[0].innerHTML = loginForm.username.value;
				
				ModuleLoader.load('.jcc-content-section', './partials/home.html');
				return null;
			} 
			
			if (!user.valid) {
				var userError = document.getElementById("userErrorMsg");
				userError.innerHTML = user.msg;
				userError.hidden = !user.valid;
			}
			
			if (!pass.valid) {
				var passError = document.getElementById("passErrorMsg");
				passError.innerHTML = pass.msg;
				passError.hidden = !pass.valid;
			}
		},
		
		onSignOutClicked: function() {
			
			var loggedUser = document.forms['loggedUser'],
				loginForm = document.forms['login'];
				
			loggedUser.style.display = "none";
			
			loginForm.style.display = "inline-block";
			loginForm.username.value = "";
			loginForm.password.value = "";
			
			ModuleLoader.load('.jcc-content-section', './partials/login.html');
		},
		
		validateUsername: function(user) {
			
			return {
				valid: user.length && user === username,
				msg: (user.length == 0) ? "Username is required" : (user !== username) ? "Invalid Username" : ""
			};
		},
		
		validatePassword: function(pass) {
			
			return {
				valid: pass.length && pass === password,
				msg: (pass.length == 0) ? "Username is required" : (pass !== password) ? "Invalid Password" : ""
			};
		},
		
		clearInvalid: function() {
			
			var userError = document.getElementById("userErrorMsg");
			var passError = document.getElementById("passErrorMsg");
			
			userError.innerHTML = "";
			userError.hidden = true;
				
			passError.innerHTML = "";
			passError.hidden = true;
		}
	};
})();
