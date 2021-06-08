// JavaScript Document
//bat su kien nut them
$(".btn_luutheloai").click(function(){
	//alert_info("test");
	//lay gia tri tu form
	var MaTL=$(".txtmatlpm").val();//lay gia tri tu nguoi dung nhap tren form
	var TenTL=$(".txttentlpm").val();//lay gia tri tu nguoi dung nhap tren form
	if(MaTL=="" || MaTL.length !=5)
	{
		alert_info("Mã thể loại không để trống hoặc số kí tự khác 5");
	}else if(TenTL=="")
	{
		alert_info("Tên thể loại không để trống");
	}else{
		
		var data = {
			event: "inserttl",
			MaTL:MaTL,
			TenTL:TenTL,
	
		}

		queryDataPostJSon("php/theloai.php", data,(res) => {
			console.log(res);
			if(res["inserttl" ]== 1 ) {
			alert_success("Thêm Thành công");
				builddstheloai(theloai_current,recordtheloai);
				$(".txtmatlpm").val("");
				$(".txttentlpm").val("");
			}else
			{
				alert_error("Thêm Không Thành công");
			}
		});
	}

});
$(".btn_xoatheloai").click(function(){
	
	var MaTL=$(".txtmatlpm").val();//lay gia tri tu nguoi dung nhap tren form
	bootbox.confirm("Bạn có chắc xóa thể loại"+MaTL+" này không?",function(result){
		if(result==true){
			console.log("đã đồng ý xóa");
			var datasend={
			event:"deletetl",
			MaTL:MaTL
		}
		queryDataPostJSon("php/theloai.php",datasend,function(res){
			console.log(res);
			if(res["deletetl"] ==true){
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

$(".btn_resettheloai").click(function(){
    $(".txtmatlpm").val("");//THAY giá trị từ ô nhập liệu về mặc định
    $(".txttentlpm").val("");
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


var recordtheloai=5;//so record hien thi la 2
var resalltheloai;//khai bao mang luu tru du lieu doi json 
function builddstheloai(page,record) {  
    var dataSend={
		event:"getDStheloai",
		page:page,
        record:record
    } 
    $(".listtheloai").html("<img src='loading.gif' width='5px' height='5px'/>");
    queryData("php/theloai.php",dataSend,function (res) { 
           $(".listtheloai").html("");
           buildHTMLtheloaiData(res);
    });
}

function buildHTMLtheloaiData(res) {
   if(res.total==0){
	    $(".listtheloai").html("Chưa có nội dung");	
   }else{  
    var data = res.items; 
    resalltheloai=data;
	var stt=1;
	var currentpage=parseInt(res.page);
    stt=printSTT(recordtheloai,currentpage);
    var html='';	
    for (item in data) {
        var list=data[item];
        html=html +
            '<tr data-matl="' + list.MaTL + '" data-name="'+list.TenTL +'"data-vt="' + item + '">' +
            '<td>' + stt + '</td>' +
			'<td>' + list.MaTL+'</td>'+
			'<td>' + list.TenTL+'</td>'+
			'<td class="click_sua_the_loai"><i class="fa fa-eye"></i></td>'+
            '</tr>';
        stt++;
		
        $(".listtheloai").html(html)
    }
    buildSlidePage($(".pagenumbertheloai"),5,res.page,res.totalpage);
   }
}
var theloai_current=0;
$(".pagenumbertheloai").on('click','button',function () {
    
    theloai_current=$(this).val();
    builddstheloai($(this).val(),recordtheloai);
    
});
$(".listtheloai").on('click',".click_sua_the_loai",function(){
	//alert_info("gg");
	//Lay gia tri matl tu dong click chon
	var vt=$(this).parents("tr").attr("data-vt");
	var MaTL=$(this).parents("tr").attr("data-matl");
	var TenTL=$(this).parents("tr").attr("data-name");
	//alert_info("gg"+matl+tentl);
	//$(".txtmatl").val(matl);
	//$(".txttentl").val(tentl);
	 
	$(".txtmatlpm").val(resalltheloai[vt].MaTL);
	$(".txttentlpm").val(resalltheloai[vt].TenTL);
    
});
$(".btn_updatetheloai").click(function(){
	var MaTL=$(".txtmatlpm").val();//lay gia tri tu nguoi dung nhap tren form
	var TenTL=$(".txttentlpm").val();
	bootbox.confirm("Bạn có chắc cập nhật lại thể loại phần mềm"+MaTL+" hay không?",function(result){
		if(result==true){
			
			var datasend={
			event:"updatetl",
			MaTL:MaTL,
			TenTL: TenTL,

		}
		queryDataPostJSon("php/theloai.php",datasend,function(res){
		//	console.log(res);
			if(res["updatetl"]==true){
				alert_success("Cập nhật thành công");
				builddstheloai(theloai_current,recordtheloai);
				$(".txtmatlpm").val("");
				$(".txttentlpm").val("");
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