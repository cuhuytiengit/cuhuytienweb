// JavaScript Document
//bat su kien nut them
$(".btn_luuthongtin").click(function(){
	//alert_info("test");
	//lay gia tri tu form
	var maphanmem=$(".txtmapm").val();//lay gia tri tu nguoi dung nhap tren form
	var tenphanmem=$(".txttennpm").val();//lay gia tri tu nguoi dung nhap tren form
	var hedieuhanh=$(".txthedieuhanh").val();//lay gia tri tu nguoi dung nhap tren form
	var tinhnang=$(".txttinhnang").val();
	var namgt=$(".txtnamgt").val();

	if(maphanmem=="" || maphanmem.length !=5)
	{
		alert_info("Mã phần mềm không để trống hoặc số kí tự khác 5");
	}else if(tenphanmem=="")
	{
		alert_info("Tên phần mềm không để trống");
	}else if(hedieuhanh=="")
	{
		alert_info("Hệ điều hành không để trống");
	}else if(tinhnang=="")
	{
		alert_info("Tính năng không để trống");
	}else if( namgt == "")
	{
		alert_info("Năm giới thiệu không được ghi kiểu kí tự hoặc bỏ trống");
	}else{
		
		var data = {
			event: "insertpm",
			maphanmem:maphanmem,
			tenphanmem:tenphanmem,
			hedieuhanh:hedieuhanh,
			tinhnang:tinhnang,
			namgt:namgt
		}

		queryDataPostJSon("php/phanmem.php", data,(res) => {
			console.log(res);
			if(res["insertpm" ]== 1 ) {
			alert_success("Thêm Thành công");
				builddsphanmem(phanmem_current,recordphanmem);
				$(".txtmapm").val("");
				$(".txttennpm").val("");
				$(".txthedieuhanh").val("");
				$(".txttinhnang").val("");
				$(".txtnamgt").val("");
			}else
			{
				alert_error("Thêm Không Thành công");
			}
		});
	}

});
$(".btn_xoathongtin").click(function(){
	
	var maphanmem=$(".txtmapm").val();//lay gia tri tu nguoi dung nhap tren form
	bootbox.confirm("Bạn có chắc xóa phần mềm "+maphanmem+" này không?",function(result){
		if(result==true){
			console.log("đã đồng ý xóa");
			var datasend={
			event:"deletett",
			maphanmem:maphanmem
		}
		queryDataPostJSon("php/phanmem.php",datasend,function(res){
			console.log(res);
			if(res["deletett"] ==true){
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

$(".btn_resetthongtin").click(function(){
    $(".txtmapm").val("");//THAY giá trị từ ô nhập liệu về mặc định
    $(".txttennpm").val("");
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


var recordphanmem=5;//so record hien thi la 2
var resallphanmem;//khai bao mang luu tru du lieu doi json 
function builddsphanmem(page,record) {  
    var dataSend={
		event:"getDSPhanmem",
		page:page,
        record:record
    } 
    $(".listphanmem").html("<img src='loading.gif' width='5px' height='5px'/>");
    queryData("php/phanmem.php",dataSend,function (res) { 
           $(".listphanmem").html("");
           buildHTMLPhanMemData(res);
    });
}

function buildHTMLPhanMemData(res) {
   if(res.total==0){
	    $(".listphanmem").html("Chưa có nội dung");	
   }else{  
    var data = res.items; 
    resallphanmem=data;
	var stt=1;
	var currentpage=parseInt(res.page);
    stt=printSTT(recordphanmem,currentpage);
    var html='';	
    for (item in data) {
        var list=data[item];
        html=html +
            '<tr data-matl="' + list.maphanmem + '" data-name="'+list.tenphanmem+'" data-hedieuhanh="'+list.hedieuhanh+'"  data-tinhnang="'+list.tinhnang+'" data-namgt="'+list.namgt+'"data-vt="' + item + '">' +
            '<td>' + stt + '</td>' +
			'<td>' + list.maphanmem+'</td>'+
			'<td>' + list.tenphanmem+'</td>'+
			'<td>' + list.hedieuhanh+'</td>'+
			'<td>' + list.tinhnang+'</td>'+
			'<td>' + list.namgt+'</td>'+
			'<td class="click_sua_phan_mem"><i class="fa fa-eye"></i></td>'+
            '</tr>';
        stt++;
		
        $(".listphanmem").html(html)
    }
    buildSlidePage($(".pagenumberphanmem"),5,res.page,res.totalpage);
   }
}
var phanmem_current=0;
$(".pagenumberphanmem").on('click','button',function () {
    
    phanmem_current=$(this).val();
    builddsphanmem($(this).val(),recordphanmem);
    
});
$(".listphanmem").on('click',".click_sua_phan_mem",function(){
	//alert_info("gg");
	//Lay gia tri matl tu dong click chon
	var vt=$(this).parents("tr").attr("data-vt");
	var maphanmem=$(this).parents("tr").attr("data-matl");
	var tenphanmem=$(this).parents("tr").attr("data-name");
	var hedieuhanh=$(this).parents("tr").attr("data-hedieuhanh");
	var tinhnang=$(this).parents("tr").attr("data-tinhnang");
	var namgt=$(this).parents("tr").attr("data-namgt");
	//alert_info("gg"+matl+tentl);
	//$(".txtmatl").val(matl);
	//$(".txttentl").val(tentl);
	 
	$(".txtmapm").val(resallphanmem[vt].maphanmem);
	$(".txttennpm").val(resallphanmem[vt].tenphanmem);
	$(".txthedieuhanh").val(resallphanmem[vt].hedieuhanh);
	$(".txttinhnang").val(resallphanmem[vt].tinhnang);
	$(".txtnamgt").val(resallphanmem[vt].namgt);
    
});
$(".btn_updatethongtin").click(function(){
	var maphanmem=$(".txtmapm").val();//lay gia tri tu nguoi dung nhap tren form
	var tenphanmem=$(".txttennpm").val();
	var hedieuhanh=$(".txthedieuhanh").val();//lay gia tri tu nguoi dung nhap tren form
	var tinhnang=$(".txttinhnang").val();
	var namgt=$(".txtnamgt").val();//lay gia tri tu nguoi dung nhap tren form
	bootbox.confirm("Bạn có chắc cập nhật phần mềm "+maphanmem+" hay không?",function(result){
		if(result==true){
			
			var datasend={
			event:"update",
			maphanmem:maphanmem,
			tenphanmem: tenphanmem,
			hedieuhanh:hedieuhanh,
			tinhnang:tinhnang,
			namgt: namgt
		}
		queryDataPostJSon("php/phanmem.php",datasend,function(res){
		//	console.log(res);
			if(res["update"]==true){
				alert_success("cập nhật Thành công");
				builddsphanmem(phanmem_current,recordphanmem);
				$(".txtmapm").val("");
				$(".txttennpm").val("");
				$(".txthedieuhanh").val("");
				$(".txttinhnang").val("");
				$(".txtnamgt").val("");
			}else
			{
				alert_error("cập nhật Không Thành công");
			}
		});
		}
		else
		{
		}
	});
});

buildUserDropdown();
function buildUserDropdown(){

   
	var user=localStorage.getItem("userIDE");
	var avatar=localStorage.getItem("avatar");
	
	if(user==undefined || user==null||user==""){
		
		//$(".titleusername").html("");
	 //  $(".avatarimage").attr("src",urllocal+"images/logothuyloi.png");
	  location.href="login.html";
	}
	else{
		//alert_info(""+user);
		$(".username").html(user);
		$(".avatar-image").attr("src","images/"+avatar);
	}
	
}
$(".btn_logout").click(function(){
	logout();
});
//goi ham senGuiData()
//senGuiData();