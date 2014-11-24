(function(){
	
	ModuleLoader.load('.jcc-header-section', './partials/header.html');
	ModuleLoader.load('.jcc-content-section', './partials/Welcome.html');
})();

var Login = (function(){
	
	var username = 'anandsivaj@gmail.com';
	var password = 'sivaji27';
	
	return {
		
		onSignInClicked: function() {
			
			var loginForm = document.forms['login'];
			var user = this.validateUsername(loginForm.username.value);
			var pass = this.validatePassword(loginForm.password.value);
						
			if (user.valid && pass.valid) {
				return alert("Login success");
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
