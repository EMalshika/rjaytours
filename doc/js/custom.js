;(function( $ ){

	/* ON WINDOW SCROLL FUNCTION */
	$( document ).ready(function() {
		onePagescroll();
	});
	$(window).resize(function(){
		onePagescroll();
	});
	function onePagescroll(){	
		/* Page Scroll to id fn call */
		$(".navigation a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".navigation a"
		});
		
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
	};

})( jQuery );