function isNumeric (e) {
					const event = e || window.event;
					let key = event.keyCode || event.which;
					key = String.fromCharCode(key);
					const regex = /[0-9]|\./;
					if (!regex.test(key)) { 
						event.returnValue = false;
						if (event.preventDefault) event.preventDefault
					}
				}