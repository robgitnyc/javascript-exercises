 repeatString = function(string, times) {
        let txt = "";	
	if (times <0) {
		return "ERROR";
	}		
	for (i = 0; i<times ; i++) {
		txt += string;
	}	
	return txt;

};

// Do not edit below this line
module.exports = repeatString;
