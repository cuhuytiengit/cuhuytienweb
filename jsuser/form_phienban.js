// JavaScript Document
//bat su kien nut them
$(".btn_luuphienban").click(function(){
	//alert_info("test");
	//lay gia tri tu form
	var MaPB=$(".txtmapb").val();//lay gia tri tu nguoi dung nhap tren form
	var TenPB=$(".txttennpb").val();//lay gia tri tu nguoi dung nhap tren form
	if(MaPB=="" || MaPB.length !=5)
	{
		alert_info("Mã phiên bản không để trống hoặc số kí tự khác 5");
	}else if(TenPB=="")
	{
		alert_info("Tên phiên bản không để trống");
	}else{
		
		var data = {
			event: "insertpb",
			MaPB:MaPB,
			TenPB:TenPB,
	
		}

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
	}

});
$(".btn_xoaphienban").click(function(){
	
	var MaPB=$(".txtmapb").val();//lay gia tri tu nguoi dung nhap tren form
	bootbox.confirm("Bạn có chắc xóa phiên bản "+MaPB+" này không?",function(result){
		if(result==true){
			console.log("đã đồng ý xóa");
			var datasend={
			event:"deletepb",
			MaPB:MaPB
		}
		queryDataPostJSon("php/phienban.php",datasend,function(res){
			console.log(res);
			if(res["deletepb"] ==true){
				alert_success("Xóa Thành công");
			}else
			{
				alert_error("Xóa Không Thành công");
			}
		});
		}
		else
		{
		}
		
	});
});

$(".btn_resetphienban").click(function(){
    $(".txtmapb").val("");//THAY giá trị từ ô nhập liệu về mặc định
    $(".txttennpb").val("");
    $(".txthedieuhanh").val("");
    $(".txttinhnang").val("");
    $(".txtnamgt").val("");
});
//viet ham gui data len server. server dap tra chao
function senGuiData()
{
	var datasend={
		event:"guidata"
	}
	queryDataGet("php/api_process.php",datasend,function(res){
		//nhan du lieu tu server tra ve
		alert_info(res);
	});
	queryDataPost("php/api_process_post.php",datasend,function(res){
		//nhan du lieu tu server tra ve
		alert_info("Post:"+res);
	});
}


var recordphienban=5;//so record hien thi la 2
var resallphienban;//khai bao mang luu tru du lieu doi json 
function builddsphienban(page,record) {  
    var dataSend={
		event:"getDSphienban",
		page:page,
        record:record
    } 
    $(".listphienban").html("<img src='loading.gif' width='5px' height='5px'/>");
    queryData("php/phienban.php",dataSend,function (res) { 
           $(".listphienban").html("");
           buildHTMLphienbanData(res);
    });
}

function buildHTMLphienbanData(res) {
   if(res.total==0){
	    $(".listphienban").html("Chưa có nội dung");	
   }else{  
    var data = res.items; 
    resallphienban=data;
	var stt=1;
	var currentpage=parseInt(res.page);
    stt=printSTT(recordphienban,currentpage);
    var html='';	
    for (item in data) {
        var list=data[item];
        html=html +
            '<tr data-matl="' + list.MaPB + '" data-name="'+list.TenPB +'"data-vt="' + item + '">' +
            '<td>' + stt + '</td>' +
			'<td>' + list.MaPB+'</td>'+
			'<td>' + list.TenPB+'</td>'+
			'<td class="click_sua_phien_ban"><i class="fa fa-eye"></i></td>'+
            '</tr>';
        stt++;
		
        $(".listphienban").html(html)
    }
    buildSlidePage($(".pagenumberphienban"),5,res.page,res.totalpage);
   }
}
var phienban_current=0;
$(".pagenumberphienban").on('click','button',function () {
    
    phienban_current=$(this).val();
    builddsphienban($(this).val(),recordphienban);
    
});
$(".listphienban").on('click',".click_sua_phien_ban",function(){
	//alert_info("gg");
	//Lay gia tri matl tu dong click chon
	var vt=$(this).parents("tr").attr("data-vt");
	var MaPB=$(this).parents("tr").attr("data-matl");
	var TenPB=$(this).parents("tr").attr("data-name");
	//alert_info("gg"+matl+tentl);
	//$(".txtmatl").val(matl);
	//$(".txttentl").val(tentl);
	 
	$(".txtmapb").val(resallphienban[vt].MaPB);
	$(".txttennpb").val(resallphienban[vt].TenPB);
    
});
$(".btn_updatephienban").click(function(){
	var MaPB=$(".txtmapb").val();//lay gia tri tu nguoi dung nhap tren form
	var TenPB=$(".txttennpb").val();
	bootbox.confirm("Bạn có muốn cập nhật phiên bản "+MaPB+" này không?",function(result){
		if(result==true){
			
			var datasend={
			event:"update",
			MaPB:MaPB,
			TenPB: TenPB,

		}
		queryDataPostJSon("php/phienban.php",datasend,function(res){
		//	console.log(res);
			if(res["update"]==true){
				alert_success("cập nhật thành công");
				builddsphienban(phienban_current,recordphienban);
				$(".txtmapb").val("");
				$(".txttennpb").val("");
			}else
			{
				alert_error("Cập nhật Không Thành công");
			}
		});
		}
		else
		{
		}
	});
});
//goi ham senGuiData()
//senGuiData();