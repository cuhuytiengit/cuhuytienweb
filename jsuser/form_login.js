$(".btn_login").click(function() {
		var username=$(".txtuser").val();
		var password=$(".txtpass").val();
		if(username==""){
			alert_info("Vui lòng nhập tên đăng nhập");
		}else if(password=="")
		{
			alert_info("Vui lòng nhập mật khẩu");
		
		}else{
			
			var datasend = {
                        event: "login",
                        username:username,
						password:password
                    };
                    console.log(datasend);
                       
                    queryDataPostJSon("php/phanmem.php",datasend, function (data) {
						 console.log(data);
                       
                         
						 if(data.event==1){
						
	
								if ($(".remember").is(':checked')) {
									localStorage.setItem("remmemberIDE", true);
								}
								localStorage.setItem("userIDE", data.items.username);
								localStorage.setItem("passIDE", password);
								localStorage.setItem("avatar", data.items.avatar);
			
								location.href ="index.html";
						 
						 }else
						 {
							 alert_info("Tài khoản chưa đúng");
							 $(".txtuser").val("");
							 $(".txtpass").val("");
						 }
                        
                    });
		}
});
function queryDataPostJSon(url,dataSend,callback){
    
    $.ajax({
        type: 'POST',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'JSON',
        success: callback
    });
}