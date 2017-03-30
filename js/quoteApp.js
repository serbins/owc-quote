// ===== Quote App for Residential Window Cleaning ===== //


function calculate() {
	
	//First Floor 
	var entry = 7;
	var qty1 = document.getElementById("qty1").value;
	var threePaneSetOne = 21;
	var qty2 = document.getElementById("qty2").value;
    var fivePaneSetOne = 35;
	var qty3 = document.getElementById("qty3").value;
    var l2rOne = 7;
	var qty4 = document.getElementById("qty4").value;
	var udOne= 7;
	var qty5 = document.getElementById("qty5").value;
	var sliderOne = 10;
	var qty6 = document.getElementById("qty6").value;
	var gardenOne = 21;
	var qty7 = document.getElementById("qty7").value;
	var bathOne = 7;
	var qty8 = document.getElementById("qty8").value;
	var halfOne = 7;
	var qty9 = document.getElementById("qty9").value;
	var fullOne = 7;
	var qty10 = document.getElementById("qty10").value;
	var xlOne = 9;
	var qty11 = document.getElementById("qty11").value;
	var frenchOne = 1.50;
	var qty12 = document.getElementById("qty12").value;
	var garage = 18;
	var qty13 = document.getElementById("qty13").value;
	//Add Ons
    var mdOne = 7;
	var qty30 = document.getElementById("qty30").value;
    
    //Second Floor 
    	var threePaneSetTwo = 27;
	var qty14 = document.getElementById("qty14").value;
    var fivePaneSetTwo = 45;
	var qty15 = document.getElementById("qty15").value;
    var l2rTwo = 10;
	var qty16 = document.getElementById("qty16").value;
	var udTwo= 10;
	var qty17 = document.getElementById("qty17").value;
	var sliderTwo = 10;
	var qty18 = document.getElementById("qty18").value;
	var gardenTwo = 21;
	var qty19 = document.getElementById("qty19").value;
	var bathTwo = 10;
	var qty20 = document.getElementById("qty20").value;
	var halfTwo = 10;
	var qty21 = document.getElementById("qty21").value;
	var fullTwo = 10;
	var qty22 = document.getElementById("qty22").value;
	var xlTwo = 10;
	var qty23 = document.getElementById("qty23").value;
	var frenchTwo = 1.50;
	var qty24 = document.getElementById("qty24").value;
    //Add Ons
    var mdTwo = 10;
	var qty31 = document.getElementById("qty31").value;
    
    
    //Skylights
    
	var skylightInOut = 10; 
    var qty25 = document.getElementById("qty25").value; 
    var skylightOut = 5; 
    var qty26 = document.getElementById("qty26").value; 
    

    
    //Screen Cleaning
	var regScreen = 3; 
    var qty27 = document.getElementById("qty27").value; 
    var xlScreen= 6; 
    var qty28 = document.getElementById("qty28").value; 
    var bathScreen = 1.50; 
    var qty29 = document.getElementById("qty29").value; 
    
    

	var total = qty1 * entry + qty2 * threePaneSetOne + qty3 * fivePaneSetOne + qty4 * l2rOne + qty5 * udOne + qty6 * sliderOne + qty7 * gardenOne + qty8 * bathOne + qty9 * halfOne + qty10 * fullOne + qty11 * xlOne + qty12 * frenchOne + qty13 * garage + qty14 * threePaneSetTwo + qty15 * fivePaneSetTwo + qty16 * l2rTwo + qty17 * udTwo + qty18 * sliderTwo + qty19 * gardenTwo + qty20 * bathTwo + qty21 * halfTwo + qty22 * fullTwo + qty23 * xlTwo + qty24 * frenchTwo + qty25 * skylightInOut + qty26 * skylightOut + qty27 * regScreen + qty28 * xlScreen + qty29 * bathScreen + qty30 * mdOne + qty31 * mdTwo;
	
	document.getElementById("quote").innerHTML = "$ " + total ;
	
}


document.getElementById("add").onmouseover = function() { calculate(); };




// HIDE AND SHOW RSULT BUTTONS //

	



