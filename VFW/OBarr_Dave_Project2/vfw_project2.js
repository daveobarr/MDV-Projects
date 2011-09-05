/*	VFW Project 2
	Term 1109
	Dave O'Barr
	September 8, 2011 */


/* Exercise 1 Does a string follow a 123-456-7890 pattern like a phone number? */

var checkNumber = function (number) {
					if (number.length != 12) {return false;}
					if (number.charAt(3) != "-") {return false;}
					if (number.charAt(7) != "-") {return false;}
					return true;
								
};


/* Exercise 2 Does a string follow an aaa@bbb.ccc pattern like an email address? */

var checkEmailAddress = function (address) {
						var tally = 0;
						var tally2 = 0;
					for (i = 0; i < address.length; i++) {
					if (address.charAt(i) == "@") {
						tally++;
					}
					if (address.charAt(i) == ".") {
						tally2++;
					}
					if (tally == 1 && tally2 > 0) {return "Valid"}
						}
						return "NOT valid";	
};




/* Exercise 3 Is the string a URL? (Does it start with http: or https:?) */

var checkURL = function (webAddress) {
				if (webAddress.substring(0,5) == "http:") {return "This is a valid email address"}
				if (webAddress.substring(0,6) == "https:") {return "This is a valid email address"}
				return "This is NOT a valid email address";
};


/* Exercise 4 Given a string that is a list of things separated by a given string, as well as another string
 *separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c". */

var letterSwat = function (replace,a,b) {
					var swapOut = "";
					for (var i = 0; i < replace.length; i++) {
						if (replace.charAt(i) == a) {
							swapOut = swapOut + b;
								
						} else {
							swapOut = swapOut + replace.charAt(i)
							}
							
						
					}
					return swapOut;
};



/* Exercise 5 Find the total value of just the numbers in an array, even if some of the items are not numbers.*/

var totalArray =  function (myArray) {
				var total = 0;
				for (var i = 0; i < myArray.length; i++) {
 				total += myArray[i];
}
				return total;

};


/* Exercise 6 Given a string version of a number such as "42", return the value as an actual Number, such as 42 */

var prestoChangeo = function (stringInput) {
					var outPut = 0;
					outPut = parseFloat (stringInput);
					return outPut;
};








/* TESTING AREA */

if (checkNumber("727-902-5012")) {
		console.log ("This is a valid number");

			} else {
				console.log ("This is NOT a valid phone number");

};
	
console.log (checkEmailAddress ("daveo@frontierlighting.com"));	

console.log (checkURL ("http:\\www.yahoo.com"));

console.log (letterSwat("My n0me is D0ve 0nd I 0m 0wsome.", "0", "a"));

console.log (totalArray([1,2,3,4,5,6]));

console.log (prestoChangeo("42 sheep") + 2);
