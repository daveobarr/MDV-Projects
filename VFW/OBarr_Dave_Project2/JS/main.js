/*	VFW Project 2
	Term 1109
	Dave O'Barr
	September 8, 2011 */

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

alert(viewOrder);
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
		localStorage.setItem('comments',comments);
		
alert("Saved");
		
		

	
};

function clearLocal() {
	localStorage.clear();
	return false;
};




