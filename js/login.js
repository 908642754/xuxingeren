$(function(){
	function navtable(){
		$('.nav-slider a').on('click',function(){
		$('.nav-slider a').removeClass('active');
		$(this).addClass('active');
		if($(this).index()==0){
			$('.nav-slider-bar').css('left','0em');
			$('.view').hide();
			$('.signup').show();
		}else{
			$('.nav-slider-bar').css('left','4em');
			$('.view').hide();
			$('.signin').show();
		};
	});
	}
	 $(window).resize(function(){
	 	setfooter();
	 });
	
	function setfooter(){
		 if($('body').height()>$(window).height()){
	 	$('#footer').removeClass('fixed');
	 }else{
	 	$('#footer').addClass('fixed');
	 }
	};
	(function(){
		setfooter();
		navtable();
	})();
});