var balance = 2000;
var budget_margin = 236;
var campaign_style, power_style, emission_style, organization_style, transportation_style, migration_style, disease_style, water_style, bioengineering_style, child_style;

function mitigation(){
//	homepage
	document.getElementById("mitigation").style.display = "none";
	document.getElementById("adaptation").style.display = "none";
	document.getElementById("mitigation_button").style.display = "none";
	document.getElementById("mitigation_button_text").style.display = "none";
	document.getElementById("adaptation_button").style.display = "none";
	document.getElementById("adaptation_button_text").style.display = "none";
	
	
//mitigation
	document.getElementById("campaign_card").style.display = "block";
	document.getElementById("power_card").style.display = "block";
	document.getElementById("emission_card").style.display = "block";
	document.getElementById("organization_card").style.display = "block";
	document.getElementById("transportation_card").style.display = "block";
	
//mitigation explaination
	document.getElementById("campaign_explaination").style.display = "block";
	document.getElementById("power_explaination").style.display = "block";
	document.getElementById("emission_explaination").style.display = "block";
	document.getElementById("organization_explaination").style.display = "block";
	document.getElementById("transport_explaination").style.display = "block";
}

function adaptation(){
//	homepage
	document.getElementById("mitigation").style.display = "none";
	document.getElementById("adaptation").style.display = "none";
	document.getElementById("mitigation_button").style.display = "none";
	document.getElementById("mitigation_button_text").style.display = "none";
	document.getElementById("adaptation_button").style.display = "none";
	document.getElementById("adaptation_button_text").style.display = "none";
	
	
//adaptation
	document.getElementById("migration_card").style.display = "block";
	document.getElementById("disease_card").style.display = "block";
	document.getElementById("water_card").style.display = "block";
	document.getElementById("bioengineering_card").style.display = "block";
	document.getElementById("child_card").style.display = "block";
	
//adaptation explaination
		document.getElementById("migration_explaination").style.display = "block";
	document.getElementById("disease_explaination").style.display = "block";
	document.getElementById("water_explaination").style.display = "block";
	document.getElementById("bioengineering_explaination").style.display = "block";
	document.getElementById("child_explaination").style.display = "block";
}

function homepage(){
	//homepage
	document.getElementById("mitigation").style.display = "block";
	document.getElementById("adaptation").style.display = "block";
	document.getElementById("mitigation_button").style.display = "block";
	document.getElementById("mitigation_button_text").style.display = "block";
	document.getElementById("adaptation_button").style.display = "block";
	document.getElementById("adaptation_button_text").style.display = "block";
	//adaptation
	document.getElementById("migration_card").style.display = "none";
	document.getElementById("disease_card").style.display = "none";
	document.getElementById("water_card").style.display = "none";
	document.getElementById("bioengineering_card").style.display = "none";
	document.getElementById("child_card").style.display = "none";
	//mitigation
	document.getElementById("campaign_card").style.display = "none";
	document.getElementById("power_card").style.display = "none";
	document.getElementById("emission_card").style.display = "none";
	document.getElementById("organization_card").style.display = "none";
	document.getElementById("transportation_card").style.display = "none";
	
	//mitigation explaination
	document.getElementById("campaign_explaination").style.display = "none";
	document.getElementById("power_explaination").style.display = "none";
	document.getElementById("emission_explaination").style.display = "none";
	document.getElementById("organization_explaination").style.display = "none";
	document.getElementById("transport_explaination").style.display = "none";
	
	//adaptation explaination
	document.getElementById("migration_explaination").style.display = "none";
	document.getElementById("disease_explaination").style.display = "none";
	document.getElementById("water_explaination").style.display = "none";
	document.getElementById("bioengineering_explaination").style.display = "none";
	document.getElementById("child_explaination").style.display = "none";
	
	//strategy page
	document.getElementById("strategy_box").style.display = "none";
	
	//message center
	document.getElementById("message_box").style.display = "none";
}

//Mitigation page

function insufficient_fund (){
	alert("Sorry, insufficient fund");
}

function campaign_budget(){
	//balance
	if(campaign_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   if(balance - 200 <0){
		insufficient_fund();
	}else{
		balance = balance - 200;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 26.6;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		// strategy page
		document.getElementById("campaign_strategy").style.display = "block"
		sessionStorage.setItem("campaign_status", "block");
		campaign_style = sessionStorage.getItem("campaign_status");
	}
	   }
}

function power_budget(){
	//balance
	if(document.getElementById("power_message").style.display == "block" || power_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   if(balance - 600 < 0){
		insufficient_fund();
	} else {
		balance = balance - 600;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 79.8;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		
		//message page
		setTimeout(function(){
			   document.getElementById("unread").style.display = "block";
			   document.getElementById("message_center").style.display = "none";
			    document.getElementById("power_message").style.display = "block";
		   }, 5000);
	}
	   }
	}

function emission_budget(){
	//balance
	if(emission_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
		   if(organization_style == null){
			  document.getElementById("emission_rejection").style.display = "block";
			  } else{
			     if(balance - 500 < 0){
		insufficient_fund();
	} else {
		balance = balance - 500;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 66.5;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("emission_strategy").style.display = "block";
		sessionStorage.setItem("emission_status", "block");
		emission_style = sessionStorage.getItem("emission_status");
	}
			  }
	   }
	}

function organization_budget(){
	//balance
	if(organization_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   if(balance - 500 < 0){
		insufficient_fund();
	} else {
		balance = balance - 500;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 66.5;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("organization_strategy").style.display = "block";
		sessionStorage.setItem("organization_status", "block");
		organization_style = sessionStorage.getItem("organization_status");
	}
	   }
	
	}

function transportation_budget(){
	//balance
	if(transportation_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   if(balance - 700 < 0){
		insufficient_fund();
	} else {
		balance = balance - 700;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 93.1;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("transportation_strategy").style.display = "block";
		sessionStorage.setItem("transportation_status", "block");
		transportation_style = sessionStorage.getItem("transportation_status");
	}
	   }
}

//Adaptation page

function migration_budget(){
	//balance
	if(migration_style == "block"){
	   window.alert("You've already selected this strategy.");
	   }else{
	   if(balance - 200 <0){
		insufficient_fund();
	}else{
		balance = balance - 200;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 26.6;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("migration_strategy").style.display = "block";
		sessionStorage.setItem("migration_status", "block");
		migration_style = sessionStorage.getItem("migration_status");
	}
	   }
}
	
function disease_budget(){
	if(disease_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   //balance
	if(balance - 200 <0){
		insufficient_fund();
	}else{
		balance = balance - 200;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 26.6;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("disease_strategy").style.display = "block";
		sessionStorage.setItem("disease_status", "block");
		disease_style = sessionStorage.getItem("disease_status");
	}
	   }
	
}

function water_budget(){
	if(water_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   //balance
	if(balance - 500 < 0){
		insufficient_fund();
	} else {
		balance = balance - 500;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 66.5;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("water_strategy").style.display = "block";
		sessionStorage.setItem("water_status", "block");
		water_style = sessionStorage.getItem("water_status");
	}
	   }
	}

function bioengineering_budget(){
	if(bioengineering_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
	   //balance
	if(balance - 700 < 0){
		insufficient_fund();
	} else {
		balance = balance - 700;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 93.1;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
	//strategy page
		document.getElementById("bioengineering_strategy").style.display = "block";
		sessionStorage.setItem("bioengineering_status", "block");
		migration_style = sessionStorage.getItem("bioengineering_status");	
	}
	   }
}

function child_budget(){
	if(child_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
		   if(organization_style == null){
			  document.getElementById("child_rejection").style.display = "block";
			  }else{
			  	   //balance
	if(balance - 600 < 0){
		insufficient_fund();
	} else {
		balance = balance - 600;
		document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 79.8;
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		//strategy page
		document.getElementById("child_strategy").style.display = "block";
		sessionStorage.setItem("child_status", "block");
		child_style = sessionStorage.getItem("child_status");
	}
			  }
	   }
	}

//year bar
function move(){
	var elem = document.getElementById("year_bar");
	var sig = document.getElementById("triangle");
	var year = document.getElementById("year");
	var width = 1;
	var triangle_position = -10.5;
	var year_position = -20.5;
	var year_num = 2020;
	var id = setInterval(frame, 500);
	var id2 = setInterval(frame2, 8000);
	function frame(){
		if(width >= 100){
			clearInterval(id);
			window.alert("Time's up.");
			scenario();
		} else{
			width++;
			year_position = year_position +2.66;
			triangle_position = triangle_position + 2.66;
			elem.style.width = width + '%';
			sig.style.marginLeft = triangle_position + 'px';
			year.style.marginLeft = year_position + 'px';
		}
	}
	
	function frame2(){
		if (width >= 100){
			clearInterval(id2);
		}else{
			year_num = year_num + 5;
			year.innerHTML = year_num;
		}
	}
}

//strategy page

function strategy(){
	//strategy page
	document.getElementById("strategy_box").style.display = "block";
	document.getElementById("campaign_strategy").style.display = campaign_style;
	document.getElementById("power_strategy").style.display = power_style;
	document.getElementById("emission_strategy").style.display = emission_style;
	document.getElementById("organization_strategy").style.display = organization_style;
	document.getElementById("transportation_strategy").style.display = transportation_style;
	
	document.getElementById("migration_strategy").style.display = migration_style;
	document.getElementById("disease_strategy").style.display = disease_style;
	document.getElementById("water_strategy").style.display = water_style;
	document.getElementById("bioengineering_strategy").style.display = bioengineering_style;
	document.getElementById("child_strategy").style.display = child_style;
	//	homepage
	document.getElementById("mitigation").style.display = "none";
	document.getElementById("adaptation").style.display = "none";
	document.getElementById("mitigation_button").style.display = "none";
	document.getElementById("mitigation_button_text").style.display = "none";
	document.getElementById("adaptation_button").style.display = "none";
	document.getElementById("adaptation_button_text").style.display = "none";
	
	//adaptation
	document.getElementById("migration_card").style.display = "none";
	document.getElementById("disease_card").style.display = "none";
	document.getElementById("water_card").style.display = "none";
	document.getElementById("bioengineering_card").style.display = "none";
	document.getElementById("child_card").style.display = "none";
	//mitigation
	document.getElementById("campaign_card").style.display = "none";
	document.getElementById("power_card").style.display = "none";
	document.getElementById("emission_card").style.display = "none";
	document.getElementById("organization_card").style.display = "none";
	document.getElementById("transportation_card").style.display = "none";
	
	//mitigation explaination
	document.getElementById("campaign_explaination").style.display = "none";
	document.getElementById("power_explaination").style.display = "none";
	document.getElementById("emission_explaination").style.display = "none";
	document.getElementById("organization_explaination").style.display = "none";
	document.getElementById("transport_explaination").style.display = "none";
	
	//adaptation explaination
	document.getElementById("migration_explaination").style.display = "none";
	document.getElementById("disease_explaination").style.display = "none";
	document.getElementById("water_explaination").style.display = "none";
	document.getElementById("bioengineering_explaination").style.display = "none";
	document.getElementById("child_explaination").style.display = "none";
	
	//message center
	document.getElementById("message_box").style.display = "none";
	
}

//message page

function message_center(){
	//message page
document.getElementById("message_box").style.display = "block";

	//strategy page
	document.getElementById("strategy_box").style.display = "none";
	//	homepage
	document.getElementById("mitigation").style.display = "none";
	document.getElementById("adaptation").style.display = "none";
	document.getElementById("mitigation_button").style.display = "none";
	document.getElementById("mitigation_button_text").style.display = "none";
	document.getElementById("adaptation_button").style.display = "none";
	document.getElementById("adaptation_button_text").style.display = "none";
	
	//adaptation
	document.getElementById("migration_card").style.display = "none";
	document.getElementById("disease_card").style.display = "none";
	document.getElementById("water_card").style.display = "none";
	document.getElementById("bioengineering_card").style.display = "none";
	document.getElementById("child_card").style.display = "none";
	//mitigation
	document.getElementById("campaign_card").style.display = "none";
	document.getElementById("power_card").style.display = "none";
	document.getElementById("emission_card").style.display = "none";
	document.getElementById("organization_card").style.display = "none";
	document.getElementById("transportation_card").style.display = "none";
	
	//mitigation explaination
	document.getElementById("campaign_explaination").style.display = "none";
	document.getElementById("power_explaination").style.display = "none";
	document.getElementById("emission_explaination").style.display = "none";
	document.getElementById("organization_explaination").style.display = "none";
	document.getElementById("transport_explaination").style.display = "none";
	
	//adaptation explaination
	document.getElementById("migration_explaination").style.display = "none";
	document.getElementById("disease_explaination").style.display = "none";
	document.getElementById("water_explaination").style.display = "none";
	document.getElementById("bioengineering_explaination").style.display = "none";
	document.getElementById("child_explaination").style.display = "none";
	
}

function rectangle(){
	document.getElementById("power_message_detail").style.display = "block"
	document.getElementById("unread").style.display = "none";
	document.getElementById("message_center").style.display = "block";
}

function rectangle2(){
	document.getElementById("power_message2_detail").style.display = "block"
	document.getElementById("unread").style.display = "none";
	document.getElementById("message_center").style.display = "block";
}

function rectangle3(){
	document.getElementById("power_message3_detail").style.display = "block"
	document.getElementById("unread").style.display = "none";
	document.getElementById("message_center").style.display = "block";
}


function yes(){
	if(balance - 800 < 0){
	   insufficient_fund();
	   }else{
		   balance = balance - 800;
		   document.getElementById("power_message_detail").style.display = "none";
		   
		   document.getElementById("yes").style.display = "none";
		   document.getElementById("no").style.display = "none";
		   document.getElementById("yesyes").style.display = "block";
		   
		   document.getElementById("budget").innerHTML = balance;
		document.getElementById("budget_bar").style.width = balance / 2000 * 266 + 'px';
		budget_margin = budget_margin - 106.4;
		   //strategy page
		document.getElementById("power_strategy").style.display = "block";
		sessionStorage.setItem("power_status", "block");
		power_style = sessionStorage.getItem("power_status");
		   
		if(budget_margin > 0){
			document.getElementById("budget").style.marginLeft = budget_margin + 'px';
		} else {
			document.getElementById("budget").style.marginLeft = 0 + 'px';
		}
		   setTimeout(function(){
			   document.getElementById("unread").style.display = "block";
			   document.getElementById("message_center").style.display = "none";
			    document.getElementById("power_message2").style.display = "block";
		   }, 5000);
		   
	   }
}

function no(){
	document.getElementById("power_message_detail").style.display = "none";
	
	document.getElementById("yes").style.display = "none";
		   document.getElementById("no").style.display = "none";
		   document.getElementById("no2").style.display = "block";
	
	setTimeout(function(){
		 document.getElementById("unread").style.display = "block";
		document.getElementById("message_center").style.display = "none";
		document.getElementById("power_message3").style.display = "block";
		//strategy page
		document.getElementById("power_strategy").style.display = "none";
		sessionStorage.setItem("power_status", "none");
		power_style = sessionStorage.getItem("power_status");
	}, 5000);
}

function close1(){
	document.getElementById("power_message_detail").style.display = "none";
}

function close2(){
	document.getElementById("power_message2_detail").style.display = "none";
}

function close3(){
	document.getElementById("power_message3_detail").style.display = "none";
}

function got_it(){
	document.getElementById("heat_news").style.display = "none";
	document.getElementById("disease_news").style.display = "none";
	document.getElementById("child_rejection").style.display = "none";
	document.getElementById("emission_rejection").style.display = "none";
}

function flash_news(){
	setTimeout(function(){document.getElementById("disease_news").style.display = "block"}, 25000);
	setTimeout(function(){document.getElementById("heat_news").style.display = "block"}, 15000);
}

function scenario(){
	document.getElementById("map").style.display = "block";
	
	//IPCC report
	if(emission_style == "block"){
		document.getElementById("temperature2").style.display = "block";
	}
	
	if(emission_style !== "block" && power_style == "block" || transportation_style == "block" || organization_style == "block"){
	   document.getElementById("temperature1").style.display = "block";
	   }
	
	if(emission_style !== "block" && organization_style !== "block" && power_style !== "block" && transportation_style !== "block"){
	   document.getElementById("temperature3").style.display = "block";
	   }
	
	//news
	if(migration_style == "block" || emission_style == "block"){
	   document.getElementById("scenario_migration_title2").style.display = "block";
		document.getElementById("path3").style.display = "block";
	   } else{
		   document.getElementById("path7").style.display = "block";document.getElementById("scenario_migration_title").style.display = "block";
	   }
	if(campaign_style == "block"){
	document.getElementById("scenario_terrorism_title").style.display = "block";
		document.getElementById("path2").style.display = "block";
	}
	
	if(organization_style == "block"){
 document.getElementById("scenario_organization_title").style.display = "block";
		document.getElementById("path5").style.display = "block";
	   }
	
	if(transportation_style == "block"){
document.getElementById("scenario_transportation_title").style.display = "block";
		document.getElementById("path6").style.display = "block";
	   }
	
	if(power_style == "block"){
document.getElementById("scenario_power_title").style.display = "block";
		document.getElementById("path4").style.display = "block";
	   }
	//title, cloud
	document.getElementById("homepage-title").style.display = "none";
	document.getElementById("cloud2").style.display = "none";
	document.getElementById("cloud3").style.display = "none";
	
	//homepage
	document.getElementById("mitigation").style.display = "none";
	document.getElementById("adaptation").style.display = "none";
	document.getElementById("mitigation_button").style.display = "none";
	document.getElementById("mitigation_button_text").style.display = "none";
	document.getElementById("adaptation_button").style.display = "none";
	document.getElementById("adaptation_button_text").style.display = "none";
	
	//adaptation
	document.getElementById("migration_card").style.display = "none";
	document.getElementById("disease_card").style.display = "none";
	document.getElementById("water_card").style.display = "none";
	document.getElementById("bioengineering_card").style.display = "none";
	document.getElementById("child_card").style.display = "none";
	//mitigation
	document.getElementById("campaign_card").style.display = "none";
	document.getElementById("power_card").style.display = "none";
	document.getElementById("emission_card").style.display = "none";
	document.getElementById("organization_card").style.display = "none";
	document.getElementById("transportation_card").style.display = "none";
	
	//mitigation explaination
	document.getElementById("campaign_explaination").style.display = "none";
	document.getElementById("power_explaination").style.display = "none";
	document.getElementById("emission_explaination").style.display = "none";
	document.getElementById("organization_explaination").style.display = "none";
	document.getElementById("transport_explaination").style.display = "none";
	
	//adaptation explaination
	document.getElementById("migration_explaination").style.display = "none";
	document.getElementById("disease_explaination").style.display = "none";
	document.getElementById("water_explaination").style.display = "none";
	document.getElementById("bioengineering_explaination").style.display = "none";
	document.getElementById("child_explaination").style.display = "none";
	//message center
	document.getElementById("message_box").style.display = "none";
	document.getElementById("message_center").style.display = "none";
	//strategy page
	document.getElementById("strategy_box").style.display = "none";
	document.getElementById("my_strategy").style.display = "none";
}

//scenario news

function scenario_organization(){
	document.getElementById("scenario_organization_detail").style.display = "block";
}


function scenario_terrorism(){
	document.getElementById("scenario_terrorism_detail").style.display = "block";
}

function scenario_transportation(){
document.getElementById("scenario_transportation_detail").style.display = "block";
}

function scenario_power(){
	document.getElementById("scenario_power_detail").style.display = "block";
}

function scenario_migration(){
	document.getElementById("scenario_migration_detail").style.display = "block";
}

function scenario_migration2(){
	document.getElementById("scenario_migration_detail2").style.display = "block";
}

function scenario_child(){
	document.getElementById("scenario_child_detail").style.display = "block";
}

function scenario_bioengineering(){
document.getElementById("scenario_bioengineering_detail").style.display = "block";
}

function scenario_detail_close(){
	document.getElementById("scenario_organization_detail").style.display = "none";
	document.getElementById("scenario_terrorism_detail").style.display = "none";
	document.getElementById("scenario_power_detail").style.display = "none";
	document.getElementById("scenario_transportation_detail").style.display = "none";
	document.getElementById("scenario_migration_detail").style.display = "none";
	document.getElementById("scenario_migration_detail2").style.display = "none";
	document.getElementById("scenario_child_detail").style.display = "none";
	document.getElementById("scenario_bioengineering_detail").style.display = "none";
	
}

window.onload = flash_news();

