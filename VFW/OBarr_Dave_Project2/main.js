/*	VFW Project 2
	Term 1109
	Dave O'Barr
	September 8, 2011 */


function getItems(){
	if (localStorage.getItem("appLampType")) {
		var lampType = 		localStorage.getItem("appLampType");
		var wattage = 		localStorage.getItem("appWattage");
		var yourName = 		localStorage.getItem("appYourname");
		var quantity = 		localStorage.getItem("appQuantity");
		var delivery = 		localStorage.getItem("appDelivery");
		var dateRequired = 	localStorage.getItem("appDateRequired");
	}
};

function storeItems(id) {
		var lampType = 		document.getelementById("lampType").value;
		var wattage = 		document.getelementById("wattage").value;
		var yourName = 		document.getelementById"yourName").value;
		var quantity = 		document.getelementById("quantity").value;
		var delivery = 		document.getelementById("delivery").value;
		var dateRequired = 	document.getelementById"dateRequired").value;
		
		localStorage.getItem("appLampType", lampType);
		localStorage.getItem("appWattage", wattege);
		localStorage.getItem("appYourname", yourName);
		localStorage.getItem("appQuantity", quantity);
		localStorage.getItem("appDelivery", delivery);
		localStorage.getItem("appDateRequired", dateRequired);
};

var viewOrder = [
		lampType,
		wattage,
		yourName,
		quantity,
		delivery,
		dateRequired
];		

alert (viewOrder);


