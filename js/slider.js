//var image = new Image();
//image.src = "images/ressources/example.jpg";

// var canvas;
// var imgd;
// var pix;
// var ctx;
// 

// $(window).load(function() {
	// uploadedImage = $('#uploadedImg');
	// if(uploadedImage.length){
		// image = new Image();
		// image.src = uploadedImage.attr('src');
		// canvas = document.getElementById("canvas");
		// canvas.height = image.height;
		// canvas.width = image.width;
		// ctx = canvas.getContext('2d');
		// ctx.drawImage(image, 0, 0);
// 		
		// //$("#testCanvas").css({"width":image.width, "height":image.height })
		// //$("#imagesub").css({"width":(image.width + 20)})
	// }
// 	
// });



// $(document).ready(function() {
// 	
		// //set initial values and handle onslide event
		// $("#sliderArea > div").each(function(){
			// var id = $(this).attr("id");
			// var val = 0;
			// var min = 0;
			// var max = 0
			// var divisor = 1;
			// var step_width = 1;
// 			
			// //initial values for contrast, brightness and exposure
			// switch (id){
				// case "contrast":min = 100; max = 1000; val = 100; divisor = 100; step_width = 5; break;
				// case "brightness": min = -128; max = 128; val = 0;break;
				// case "exposure": val = 0;break;
				// default: val = 50;break;
			// }
// 			
			// $("#" + id).slider({
				// range: "min",
				// value: val,
				// min: min,
				// max: max,
				// step : step_width,
				// slide: function( event, ui ) {
					// var contrast = $('#contrast').slider("value")/100;
					// var brightness = $('#brightness').slider("value");
					// updateImage(contrast, brightness);
			// }});	
		// });
// 
// 		
// 
// 		
		// //toggle settings -contrast, saturation, exposure
		// $("#settings").toggle(function(){
			// $("#sliderArea p").animate({opacity:1},"slow");
			// $("#sliderArea").animate({height:150, width:300},"slow");
			// $("#overlay").show();	
		// }, function(){
			// $("#sliderArea p").animate({opacity:0},"slow");
			// $("#sliderArea").animate({height:20, width:22},"slow");
			// $("#overlay").hide();
		// } );
// 		
		// $("#settings").hover(
			// function(){$("#sliderArea").addClass("sliderAreaHover");},
			// function(){$("#sliderArea").removeClass("sliderAreaHover")
		// });
// 		
		// $("#overlay").click(function(){
			// $("#overlay").hide();
		// });
// 
// 		
// });
// 
// 
// function updateImage(contrast, brightness) {
// 	
	// //ctx.drawImage(image, 0, 0);
	// imgd = originalImageData;
// 
	// //imgd = ctx.getImageData(0,0,image.width, image.height);
// 
	// pix = imgd.data
// 
	// for(var i = 0, n = pix.length; i < n; i += 4) {
		// //read pixel values
		// var r = pix[i];
		// var g = pix[i + 1];
		// var b = pix[i + 2];
		// var alpha = pix[i + 3];
// 		
		// var lum = 0.299 * r + 0.587 * g + 0.114 * b;
		// var cb = -0.168736 * r - 0.331264 * g + 0.5 * b;
		// var cr = 0.5 * r - 0.418688 * g - 0.081312 * b;
// 		
		// lum = contrast*(lum - 127.5) + 127.5 + brightness;
// 		
		// r = (lum + 1.402 * cr);
		// g = (lum - 0.3441 *cb - 0.7141* cr);
		// b = (lum + 1.772 * cb);
// 		
		// pix[i] = r;
		// pix[i + 1] = g;
		// pix[i + 2] = b;
		// pix[i + 3] = alpha;
	// }
// 	
	// ctx.putImageData(imgd, 0, 0);
// }