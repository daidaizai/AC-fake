$$.ready(function(){
		//按钮位置调整
	InfoPlus.Language.kill={
		 message: "取消表单",
        blockMessage: "正在为您取消,请稍候...",
        title: "取消",
        confirmTitle: "确定取消本次服务吗？",
        success: "取消成功！",
        confirm: "取消后当前业务将立即结束",
        reason: "您可以填写取消备注描述取消原因",
        tip: "取消本流程，立即结束当前业务",
        menuTip: "取消本流程"
	};
	var kill=$(".command_button_content.kill");
	if(kill.size()>0){
		var txt=kill.find("nobr").html();
		if(txt=="终止"){
			kill.find("nobr").html("取消");
		}
		var tip=kill.find(".toolbar_button_tip").html();
		if(tip.indexOf("终止")>-1){
			var newTip=tip.replace("终止","取消");
			kill.find(".toolbar_button_tip").html(newTip);
		}
	}
	if($("#form_command_bar li.command_button").size()>0){
			var divs=$("<div class='btns'></div>");
			$(".infoplus_view:last").append(divs);
			if (document.body.style.overflow!="hidden"&&document.body.scroll!="no"&&document.body.scrollWidth>document.body.offsetWidth) {
				var btnGroup=$("<ul class='btn_group'></ul>")
				$("body").append(btnGroup);
			} else {
				var btnGroup=$("<ul class='btn_group btn_toEnd'></ul>")
				$(".btns").append(btnGroup);
			}
			$("#form_command_bar li.command_button").each(function(index,item){
				var newLi=$("<li>"+$(item).html()+"</li>");
				newLi.click(function(){
//					for(var i=0;i<intervalGroup.length;i++){
//						clearInterval(intervalGroup[i]);
//					}
					$(item).click();
				})
				$(".btn_group").append(newLi);
			})
			
	}

	
	
	
})
