$(".btn_muakhoahoc").click(function(){
	

		queryDataPostJSon("php/phienban.php", data,(res) => {
			console.log(res);
			if(res["insertpb" ]== 1 ) {
			alert_success("Thêm Thành công");
				builddsphienban(phienban_current,recordphienban);
				$(".txtmapb").val("");
				$(".txttennpb").val("");
			}else
			{
				alert_error("Thêm Không Thành công");
			}
		});
	

});