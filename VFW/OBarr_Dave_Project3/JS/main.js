/*	VFW Project 3
	Term 1109
	Dave O'Barr
	September 15, 2011 */
	
window.onload = getItems();
function getItems(){
	if (localStorage.getItem('applampType')){
	var lampType = 		localStorage.getItem('applampType');
	var wattage = 		localStorage.getItem('appwattage');
	var yourName = 		localStorage.getItem('appyourName');
	var quantity = 		localStorage.getItem('appquantity');
	var delivery = 		localStorage.getItem('appdelivery');
	var dateRequired = 	localStorage.getItem('appdateRequired');
	var comments = 		localStorage.getItem('comments');

	var viewOrder = [
		lampType,
		wattage,
		yourName,
		quantity,
		delivery,
		dateRequired,
		comments
];

document.getElementById('main').style.display = 'none';

	var clearLink = document.getElementById('clear');
		clearLink.style.display = 'block';	

//alert(viewOrder);
	}

};


function storeItems(id) {

	var lampType = 		document.getElementById('lampType').value;
	var wattage = 		document.getElementById('wattage').value;
	var yourName = 		document.getElementById('yourName').value;
	var quantity = 		document.getElementById('quantity').value;
	var delivery = 		document.getElementById('delivery').value;
	var dateRequired = 	document.getElementById('dateRequired').value;
	var comments = 		document.getElementById('comments').value;
			
		localStorage.setItem('applampType',lampType);
		localStorage.setItem('appwattage',wattage);
		localStorage.setItem('appyourName',yourName);
		localStorage.setItem('appquantity',quantity);
		localStorage.setItem('appdelivery',delivery);
		localStorage.setItem('appdateRequired',dateRequired);
		localStorage.setItem('appcomments',comments);
		
//alert("Saved");
		
		

	
};

function clearLocal() {
	localStorage.clear();
	return false;
};

function validateForm () {
	var getlampType = document.forms [0] ['lampType'].value;
		if (getlampType.length < 1) {
			document.getElementById('lampType').style.border = '1px solid red';
		var encourage = prompt ('Please Select Lamp Type.');
			if (encourage != null && encourage != '') {
				document.forms [0] ['lampType'].value = encourage;
			}
			return false;
			} else {
				document.getElementById('lampType').style.border = '1px solid #ccc';
		}
		
	var getwattage = document.forms [0] ['wattage'].value;
		if (getwattage.length < 1) {
			document.getElementById('wattage').style.border = '1px solid red';
			var encourage = prompt ('Please Select Wattage.');
				if (encourage != null && encourage != '') {
					document.forms [0] ['wattage'].value = encourage;
			}
			return false;
			} else {
					document.getElementById('wattage').style.border = '1px solid #ccc';
		} 
	
	var getyourName = document.forms [0] ['yourName'].value;
		if (getyourName.length < 1) {
			document.getElementById('yourName').style.border = '1px solid red';
		var encourage = prompt ('Please Enter Your Name.');
			if (encourage != null && encourage != '') {
				document.forms [0] ['yourName'].value = encourage;
			}
			return false;
			} else {
				document.getElementById('yourName').style.border = '1px solid #ccc';
		}	
		
	var getdateRequired = document.forms [0] ['dateRequired'].value;
		if (getdateRequired == '') {
			document.getElementById('dateRequired').style.border = '1px solid red';
		var encourage = prompt ('Please Select Date Required.');
			if (encourage != null && encourage != '') {
				document.forms [0] ['dateRequired'].value = encourage;
			}
			return false;
			} else {
				document.getElementById('dateRequired').style.border = '1px solid #ccc';
		}
		alert('Form Submitted');		
};
