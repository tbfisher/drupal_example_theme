jQuery(document).ready(function($) {
  
  console.log( 'success!' );

  var div = $("div").length;
  var span = $("span").length;

  
  $('.region-content').html("<ul><li> Numbers Var is: "+div+"</li><li>"+span+"</li><li>div's outnumber span's: "+(span<div)+" </li></ul>");
    
   // $('li').each (function(){ 
   	// jQuery(string).length; 
   // 	console.log($(this).text().length + "test");
   // });   

 $('.region-content ul li').each(function(){
                var strlen = $(this).text().length;
                var trimmed = $(this).text().split(" ").join("").length;
                   console.log("This is the length of each li: " + strlen);
                   console.log("This is the length of each li without white spaces: " + trimmed);
            });

 

});

