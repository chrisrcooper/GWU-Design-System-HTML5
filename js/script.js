/* Author: cooper@gwu.edu

*/

$(document).ready(function()
{
	/*
	 * prep scrollable, part of jQuery Tools
	 */
	
	$(".scrollable").scrollable();
	$("#browsable").navigator().height($("#browsable .items").height());;
	 
	/*
	 * give elements max height of tallest child
	 */
	$('div.summary-container').equalHeights();
	$('section.selector-links div.link-container').equalHeights();
	$('section.rotating-sidebar div.items').equalHeights();
	

	/*
	 * search clear and replace
	 */
	$('#search input').focus(
		function(){
		search_value = $(this).attr('value');
		$(this).attr('value','');			
	}).blur(
		function(){					
		if($(this).val() == "")	
			$(this).attr('value',''+search_value+'');
	}); 
	
	/*
	 * featured carousel
	 */
	$('section.featured-carousel div.slide:not(selected)').click(function()
	{
		$(this).siblings('.selected').removeClass('selected');
		$(this).addClass('selected');	
		var slide_clicked = $(this).index()+1;
		var set_clicked = $(this).parent().index()+1;		
		
		$('div.summary-container .summary.selected').removeClass('selected');
		$('div.summary-container .summary:nth-child('+(((set_clicked-1)*3)+slide_clicked)+')').addClass('selected');
					
	});
	
	/*
	 * selector links
	 */
	$('section.selector-links select').change(function()
	{
		var option_clicked = $(this).children(':selected').index()+1;
		
		$(this).next().children('ul:visible').removeClass('selected');
		$(this).next().children('ul:nth-child('+option_clicked+')').addClass('selected');
	});
	
	/*
	 * local header
	 */
	$('div.hero-container ul.menu li:not(.selected)').live("mouseenter",function(){
		var menu_hovered = $(this).index()+1;
		
		//reset the menu
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		
		//set the image
		$(this).parent().siblings('div.images').children(':visible').removeClass('selected').siblings(':nth-child('+menu_hovered+')').addClass('selected');
		
		//set the caption
		$(this).parent().siblings('ul.captions').children(':visible').removeClass('selected').siblings(':nth-child('+menu_hovered+')').addClass('selected');
	});
	
});





















