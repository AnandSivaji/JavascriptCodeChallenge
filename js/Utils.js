var Ajax = {

	doGet: function(url, successCallback, failureCallback, async) {

		var xmlhttp = this.getXmlHttpSource(successCallback, failureCallback);
		async = async ? true : false;
		xmlhttp.open('GET', url, async);
		xmlhttp.send();
	},
	
	doPost: function(url, successCallback, failureCallback, async) {

		var xmlhttp = this.getXmlHttpSource(successCallback, failureCallback);
		async = async ? true : false;
		xmlhttp.open('POST', url, async);
		xmlhttp.send();
	},
	
	doPut: function(url, successCallback, failureCallback, async) {

		var xmlhttp = this.getXmlHttpSource(successCallback, failureCallback);
		async = async ? true : false;
		xmlhttp.open('PUT', url, async);
		xmlhttp.send();
	},
	
	getXmlHttpSource: function(successCallback, failureCallback) {
		
		var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				successCallback(xmlhttp);
			} else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
				failureCallback(xmlhttp);
			}
		};
		
		return xmlhttp;
	}
};

var ModuleLoader = {
	
	load: function(element, url) {
		
		var selector = element.contains('#') ? 'ID' : element.contains('.') ? "CLASS" : "TAG";
		var selectedElement = null;
		
		switch(selector) {
			
			case 'ID': {
				selectedElement = document.getElementById(element.substring(element.indexOf('#') + 1), element.length);
				break;
			}
			
			case 'CLASS': {
				selectedElement = document.getElementsByClassName(element.substring(element.indexOf('.') + 1), element.length)[0];
				break;
			}
			
			case 'TAG': {
				selectedElement = document.getElementsTagName(element)[0];
				break;
			}
		}
		
		if (selectedElement) {
			
			Ajax.doGet(url, function(response) {
				selectedElement.innerHTML = response.responseText;
			}, function(response) {
				alert("Loading Module ended up with error");
			});
		} 
	} 
};
