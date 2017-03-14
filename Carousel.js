(function(w){
    	var sw = document.body.clientWidth,
				current = 0,
				breakpointSize = window.getComputedStyle(document.body,':after').getPropertyValue('content'),
				multiplier = 1, /*Determines the number of panels*/
				$carousel = $('.c'),
				$cList = $('.c-list'),
				$cWidth = $carousel.outerWidth(),
				$li = $('.c li'),
				$liLength = $li.size(),
				numPages = $liLength/multiplier,
				$prev = $('.c-nav .prev'),
				$next = $('.c-nav .next');
			
			$(document).ready(function() {
				buildCarousel();
			});
			
			
			$(window).resize(function(){ //On Window Resize
				sw = document.body.clientWidth;
				$cWidth = $carousel.width();
				breakpointSize = window.getComputedStyle(document.body,':after').getPropertyValue('content');  /* Conditional CSS http://adactio.com/journal/5429/ */
				sizeCarousel();
				posCarousel();
			});
			
			function sizeCarousel() { //Determine the size and number of panels to reveal
				current = 0;
				if (breakpointSize == 'medium') {
					multiplier = 2;
					
				} else if (breakpointSize == 'large') {
					multiplier = 3;
				} else {
					multiplier = 1;
				}
				
				animLimit = $liLength/multiplier-1;
				
				$li.outerWidth($cWidth/multiplier); //Set panel widths
				
			}
			
			
			function buildCarousel() { //Build the Carousel
				sizeCarousel();
			}
			
			function posCarousel() { //Animate Carousel. CSS transitions used for the actual animation.
				var pos = -current * $cWidth;
				$cList.css("left",pos);
			}
			
			$prev.click(function(e){ //Previous Button Click
				e.preventDefault();
				if(current>0) {
					current--;
				}
				posCarousel();
				
			});
			$next.click(function(e){ //Next Button Click
				e.preventDefault();
				if(current<animLimit) {
					current++;
				}
				posCarousel();
			});
		})(this);