$(function(){
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
		showcontent();
		 seft=[];
		 logout();
		  loginbt();
		  hascookie();
		  setfooter();
		 seft.reset=$('#regform').html();
		 seft.userchack=seft.passchack=seft.notpasschack=false;
	})();
//	function passshow(){
//		$('.glyphicon-eye-open').click(function(){
//		$('#notpass').attr('type','text');
//	}).mouseout(function(){
//		setTimeout(function(){
//			$('#notpass').attr('type','password');
//		},1000);
//	});
//	};
	function close(){
		$('.close').click(function(){
			$.each($('form'),function(index){
				$('form')[index].reset();
			});
		$('#regform').html(seft.reset);
		$('.error').hide();
		$('.fail').hide();
		});
	};
	$('#reg_a').click(function(){
		close();
		 usercheck();
		 regbt();		 
		validate();
		if($(window).width()>760){
		prompt();
		
	};
		});
	$('#login_a').click(function(){
		close();
		
	});
	function prompt(){	
		$('#rge .form-group input').each(function(){
			$(this).popover({
				trigger:'focus'
			});
		});
	};
	function validate(){
		$('#pass').blur(function(){
			$('.fail').show();
			if($(this).val()!=''){
			if($(this).val().length<6){
				 error.call($(this));
				 seft.passchack=false;
				  $('.fail').html('密码不得少于两位');
			}else{
				success.call($(this));
				seft.passchack=true;
				$('.fail').html('');
			};
			};
			$(this).focus(function(){
				$(this).parent().find('span').removeClass().addClass('glyphicon glyphicon-lock form-control-feedback').css('color','initial');
				$(this).parent().parent().removeClass().addClass('form-group has-feedback');
			});
		});
		$('#notpass').blur(function(){
				$('.fail').show();
			if($(this).val()!=''){
				if($(this).val()!=$('#pass').val()||$(this).val().length<6){
				 error.call($(this));
				 seft.notpasschack=false;
				 $('.fail').html('密码两次输入不同');
			}else{
				success.call($(this));
				seft.notpasschack=true;
				$('.fail').html('');
			};
			};		
			$(this).focus(function(){
				$(this).parent().find('span').removeClass().addClass('glyphicon glyphicon-lock form-control-feedback').css('color','initial');
				$(this).parent().parent().removeClass().addClass('form-group has-feedback');
				});
		});
	};
	function success(){
		$(this).parent().find('span').removeClass().addClass('glyphicon glyphicon-ok form-control-feedback').css('color','#3c763d');
		$(this).parent().parent().removeClass().addClass('form-group has-success has-feedback');
	};
	function error(){
		$(this).parent().find('span').removeClass().addClass('glyphicon glyphicon-remove form-control-feedback').css('color','#a94442');
		$(this).parent().parent().removeClass().addClass('form-group has-error has-feedback');
	};
	function usercheck(){
		$('#user').blur(function(){
		if($(this).val()!=''){
			if($(this).val().length>=2){
				$.ajax({
				type:"post",
				url:"is_user.php",
				data:{
					'user':$('#user').val()
				},
				beforeSend : function (jqXHR, settings) {
					$('#usercheck').removeClass('glyphicon-user').html('<img src="img/loading.gif" />');
				},
				success : function(response, status){
					var json = $.parseJSON(response);
					if(json){
						success.call($('#user'));
						$('#usercheck').children().remove();
						 seft.userchack=true;
						  $('.fail').html('');
					}else{
						error.call($('#user'));
						$('#usercheck').children().remove();
						 seft.userchack=false;
						 $('.fail').html('账号已被注册').show();
					};
				},
				async:true
			});
			}else{
				error.call($('#user'));
				 seft.userchack=false;
			};
			};
			$(this).focus(function(){
				$(this).parent().find('span').removeClass().addClass('glyphicon glyphicon-user form-control-feedback').css('color','initial').children().remove();
				$(this).parent().parent().removeClass().addClass('form-group has-feedback');
			});
		});
	};
	function regbt(){
		$('#regbt').click(function(){
			if(seft.userchack&&seft.passchack&&seft.notpasschack){
				$(this).button('disable');
					var user=$('#user').val();
				$.ajax({
				type:"post",
				url:"add.php",
				data:{
					'user':$('#user').val(),
					'pass':$('#pass').val(),
					'sex':$('input[name=sex]:checked').val()
				},
				beforeSend : function (jqXHR, settings) {
					$('#rge').modal('hide');
					loginloding($('#state .modal-content'),'账号注册');
				},
				success : function(response, status){
					var json = $.parseJSON(response);
					if(json){
						loginsucc($('#state .modal-content'),user,0,'账号注册');
					}else{
					loginfail($('#state .modal-content'),'账号注册',$('#rge'));
					
					};
				},
				async:true,
				
			});
			};
			
	});
	};
	function loginloding(obj,text){
		obj.html('<p class="imgloding">'+text+'中...</p>');
		$('#state').modal('show');
	};
	function loginsucc(obj,user,day,text){
		obj.html('<p class="imgsuccess">'+text+'成功...</p>');
		           if (day) {	          
							$.cookie('user',user,{
								expires : 7,
							});
						}else{
							$.cookie('user', user);
						};
					setTimeout(function(){
						obj.parent().parent().modal('hide');		
						usercookie();
					},1000);
					successlogin();
	};
	function loginfail(obj,text,obj2){
		obj.html('<p class="imgfail">'+text+'失败...</p>');
		setTimeout(function(){
			$('#state').modal('hide');
			obj2.modal('show');
		},1000);
	};
	function logout(){
		$('#logout').click(function(){
		$.removeCookie('user');
		window.location.href='/mytest/index.html';
		$('#reg_a').show().html('注册');
			$('#member').hide();
			$('#logout').hide();
			$('#login_a').show();
		});
	};
	function usercookie(){
			$('#reg_a').hide();
			$('#member').show().html($.cookie('user'));
			$('#logout').show();
			$('#login_a').hide();
	};
	function hascookie(){
		if($.cookie('user')){
			usercookie();
		}else{
			$('#reg_a').show();
			$('#member').hide().html('');
			$('#logout').hide();
			$('#login_a').show();
		};
	};
	function loginbt(){
		$('#loginbt').click(function(){
			$('.error').hide();
			if($('#user2').val().length>=2&&$('#pass2').val().length>=6){
				var user=$('#user2').val();
				var day=$('#expires').is(':checked');
				$.ajax({
				type:"post",
				url:"login.php",
				data:{
					'login_user':$('#user2').val(),
					'login_pass':$('#pass2').val()
				},
				beforeSend : function (jqXHR, settings) {
					$('#login').modal('hide');
				loginloding($('#state .modal-content'),'账号登录');			
				},
				success : function(response, status){
					var json = $.parseJSON(response);
					if(json){
						loginsucc($('#state .modal-content'),user,day,'账号登录');
						$('.error').hide();
					}else{
						loginfail($('#state .modal-content'),'账号登录',$('#login'));
						$('.error').show();
					};
				},
				async:true
			});
			}else{
			$('.error').show();	
			};
			
		});
	};
	function successlogin(){
		
			if($(window).width()>760){
			 var ue = UE.getEditor('container',{
		        	elementPathEnabled:false,
		        	initialFrameWidth:'100%',
		        	initialFrameHeight:150,
		        	autoHeightEnabled:false
		        });
	}else{
		 var ue = UE.getEditor('container',{
		        	elementPathEnabled:false,
		        	initialFrameWidth:'100%',
		        	initialFrameHeight:150,
		        	autoHeightEnabled:false,
		        toolbars: [
    [ 'source', 'undo', 'redo', 'bold']
]
		        });
	};		
	};
	
		$('#question_button').click(function(){
			if($.cookie('user')){
			successlogin();
			$('#questionbox').modal('show');
			questionbt();
			}else{
			$('#state').modal('show');
		$('#state .modal-content').html('<p class="imgfail">请登陆后操作...</p>');
		
		setTimeout(function(){
			$('#state .modal-content').parent().parent().modal('hide');	
			$('#login').modal('show');
		},1000);
		};
		});
	
	function questionbt(){
		$('#questiontitle').focus(function(){
			$('.questionerror').html('');	
		});
		UE.getEditor('container').addListener('focus',function(){
		 	$('.questionerror').html('');
		});	
		$('#questionbt').click(function(){
			if($('#questiontitle').val()==''||UE.getEditor('container').getPlainTxt().length<10){
				if(UE.getEditor('container').getPlainTxt().length<10){
				$('.questionerror').html('问题内容不得少于10个字');	
				};
				if($('#questiontitle').val()==''){
					$('.questionerror').html('问题名称不得为空');
				};
			}else{
				$.ajax({
					type:"post",
					url:"add_content.php",
					data:{
					'title':$('#questiontitle').val(),
					'content':UE.getEditor('container').getPlainTxt(),
					'user':$.cookie('user'),
				},
				beforeSend : function (jqXHR, settings) {				
				loginloding($('#state .modal-content'),'问题发布');	
				$('#questionbox').modal('hide');
				},
				success : function(response, status){
					var json = $.parseJSON(response);
					if(json){					
					$('#state .modal-content').html('<p class="imgsuccess">问题发布成功...</p>');
					$('#questiontitle').val('');
					UE.getEditor('container').setContent('请输入问题描述！',false);;
					setTimeout(function(){
						$('#state .modal-content').parent().parent().modal('hide');		
					},1000);
					}else{
						loginfail($('#state .modal-content'),'问题发布',$('#questionbox'));
					};
				},
					async:true
				});
			};
		});
	};
	function showcontent(){

	$.ajax({
		url : 'show_content.php',
		type : 'POST',
		success : function (response, status, xhr) {
			var json = $.parseJSON(response);
			var html = '';
			var arr = [];
			var summary = [];
			$.each(json, function (index, value) {
				html += '<h4>' + value.user + ' 发表于 ' + value.date + '</h4><h3>' + value.title + '</h3><div class="editor">' + value.content + '</div><div class="bottom"><span class="comment" data-id="' + value.id + '">' + value.count + '条评论</span> <span class="up">收起</span></div><div class="comment_list"></div><hr noshade="noshade" size="1" />';
			});
			$('.content').append(html);
			setfooter();
			$.each($('.editor'), function (index, value) {
				arr[index] = $(value).html();
				summary[index] = arr[index].substr(0, 200);
				
				if (summary[index].substring(199,200) == '<') {
					summary[index] = replacePos(summary[index], 200, '');
				}
				if (summary[index].substring(198,200) == '</') {
					summary[index] = replacePos(summary[index], 200, '');
					summary[index] = replacePos(summary[index], 199, '');
				}
				
				if (arr[index].length > 200) {
					summary[index] += '...<span class="down">显示全部</span>';
					$(value).html(summary[index]);
				}
				$('.bottom .up').hide();
			});
			
			$.each($('.editor'), function (index, value) {
				$(this).on('click', '.down', function () {
					$('.editor').eq(index).html(arr[index]);
					$(this).hide();
					$('.bottom .up').eq(index).show();
				});
			});
			
			$.each($('.bottom'), function (index, value) {
				$(this).on('click', '.up', function () {
					$('.editor').eq(index).html(summary[index]);
					$(this).hide();
					$('.editor .down').eq(index).show();
				});
			});
			
			$.each($('.bottom'), function (index, value) {
				$(this).on('click', '.comment', function () {
					var comment_this = this;
					if ($.cookie('user')) {
						if (!$('.comment_list').eq(index).has('form').length) {
							$.ajax({
								url : 'show_comment.php',
								type : 'POST',
								data : {
									titleid : $(comment_this).attr('data-id'),
								},
								beforeSend : function (jqXHR, settings) {
									$('.comment_list').eq(index).append('<dl class="comment_load"><dd>正在加载评论</dd></dl>');
								},
								success : function (response, status) {
									$('.comment_list').eq(index).find('.comment_load').hide();
									var json_comment = $.parseJSON(response);
									var count = 0;
									$.each(json_comment, function (index2, value) {
										count = value.count;
										$('.comment_list').eq(index).append('<dl class="comment_content"><dt>' + value.user + '</dt><dd>' + value.comment + '</dd><dd class="date">' + value.date + '</dd></dl>');
									});
									$('.comment_list').eq(index).append('<dl><dd><span class="load_more">加载更多评论</span></dd></dl>');
									var page = 2;
									if (page > count) {
										$('.comment_list').eq(index).find('.load_more').off('click');
										$('.comment_list').eq(index).find('.load_more').hide();
									}
									$('.comment_list').eq(index).find('.load_more').button().on('click', function () {
										$('.comment_list').eq(index).find('.load_more').button('disable');
										$.ajax({
											url : 'show_comment.php',
											type : 'POST',
											data : {
												titleid : $(comment_this).attr('data-id'),
												page : page,
											},
											beforeSend : function (jqXHR, settings) {
												$('.comment_list').eq(index).find('.load_more').html('<img src="img/more_load.gif" />');
											},
											success : function (response, status) {
												var json_comment_more = $.parseJSON(response);
												$.each(json_comment_more, function (index3, value) {
													$('.comment_list').eq(index).find('.comment_content').last().after('<dl class="comment_content"><dt>' + value.user + '</dt><dd>' + value.comment + '</dd><dd class="date">' + value.date + '</dd></dl>');
												});
												$('.comment_list').eq(index).find('.load_more').html('加载更多评论');
												page++;
												if (page > count) {
													$('.comment_list').eq(index).find('.load_more').off('click');
													$('.comment_list').eq(index).find('.load_more').hide();
												}
											}
										});
									});
									$('.comment_list').eq(index).append('<form><dl class="comment_add"><dt><textarea name="comment"></textarea></dt><dd><input type="hidden" name="titleid" value="' + $(comment_this).attr('data-id') + '" /><input type="hidden" name="user" value="' + $.cookie('user') + '" /><span class="plnull"></span><input type="button" class="btn btn-info btn-block" value="发表" /></dd></dl></form>');
									$('.comment_list').eq(index).find('textarea').focus(function(){
											$('.plnull').html('');
																											
									});
									$('.comment_list').eq(index).find('input[type=button]').button().click(function () {
										var _this = this;
										if($('.comment_list').eq(index).find('textarea').val().length<5){
											$('.plnull').html('评论不得少于5个字');
										}else{
											$('.plnull').html('');
											$.ajax({
											url : 'add_comment.php',
											type : 'POST',
											data:$('.comment_list').eq(index).find('form').serialize(),
											beforeSend : function (jqXHR, settings) {
												loginloding($('#state .modal-content'),'评论提交');
												
											},
											success : function (response, status) {
												if (response) {		
													$('#state .modal-content').html('<p class="imgsuccess">评论提交成功...</p>');
													$('.comment_list').eq(index).prev('.bottom').find('.comment').html((Number($('.comment_list').eq(index).prev('.bottom').find('.comment').html().substr(0,1))+1)+'条评论');
													setTimeout(function () {
														var date = new Date();
														$('#state .modal-content').parent().parent().modal('hide');
														$('.comment_list').eq(index).prepend('<dl class="comment_content"><dt>' + $.cookie('user')+ '</dt><dd>' + $('.comment_list').eq(index).find('textarea').val() + '</dd><dd>' +date.getFullYear() + '-' + (date.getMonth()+ 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' +date.getMinutes() + ':' + date.getSeconds() + '</dd></dl>');
														$('.comment_list').eq(index).find('form')[0].reset();
													}, 1000);	
												}
											},
										});
										};
										
									});
								},
							});
						}
						if ($('.comment_list').eq(index).is(':hidden')) {
							$('.comment_list').eq(index).show();
							
						} else {
							$('.comment_list').eq(index).hide();
						}
					}else{
						$('#state').modal('show');
		$('#state .modal-content').html('<p class="imgfail">请登陆后操作...</p>');
		
		setTimeout(function(){
			$('#state .modal-content').parent().parent().modal('hide');	
			$('#login').modal('show');
		},1000);
					};
				});
			});		
		},
	});
	};
	function replacePos(strObj, pos, replaceText) {
	return strObj.substr(0, pos-1) + replaceText + strObj.substring(pos, strObj.length);
}
});