swapmain("f_trangchu");
function swapmain(main)
{
	//main chính là tên của form group mà mình đặt
    $(".f_soluocIDE").addClass("is-hidden");
    $(".f_chucnangIDE").addClass("is-hidden");
	$(".f_loiichdemlai").addClass("is-hidden");
	$(".f_trangchu").addClass("is-hidden");
    $(".f_visualstudio").addClass("is-hidden");
    $(".f_eclipse").addClass("is-hidden");
    $(".f_netbeans").addClass("is-hidden");
    $(".f_pycharm").addClass("is-hidden");
    $(".f_IntelliJIDEA").addClass("is-hidden");
    $(".f_CodeBlocks").addClass("is-hidden");
    $(".f_AptanaStudio3").addClass("is-hidden");
    $(".f_Komodo").addClass("is-hidden");
    $(".f_RubyMine").addClass("is-hidden");
    $(".f_Xcode").addClass("is-hidden");
    $(".f_phanmem").addClass("is-hidden");
    $(".f_phienban").addClass("is-hidden");
    $(".f_khoahoccb").addClass("is-hidden");
    $(".f_khoahocnc").addClass("is-hidden");
    $(".f_theloai").addClass("is-hidden");
    $("."+main).removeClass("is-hidden");
}

//swapmain("form_theloai");
//bắt sự kiện click vào menu
$(".menu_soluocIDE").click(function(){
    swapmain("f_soluocIDE");
		var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Giới Thiệu</a></li>'+
                          '<li class="active">SƠ LƯỢC VỀ IDE</li>' ;
$(".titlebreadcrumb ").html(taghtml)

});

$(".menu_chucnangIDE").click(function(){
    swapmain("f_chucnangIDE");
		var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Giới Thiệu</a></li>'+
                          '<li class="active">CHỨC NĂNG CỦA IDE</li>' ;
$(".titlebreadcrumb ").html(taghtml)

});
$(".menu_loiichdemlai").click(function(){
    swapmain("f_loiichdemlai");
		var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Giới Thiệu</a></li>'+
                          '<li class="active">LỢI ÍCH CỦA IDE ĐỐI VỚI LẬP TRÌNH VIÊN</li>' ;
 $(".titlebreadcrumb ").html(taghtml)
});
$(".menu_khoahoccb").click(function(){
    swapmain("f_khoahoccb");
        var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Khóa Học</a></li>'+
                          '<li class="active">Khóa Học Cơ Bản</li>' ;
 $(".titlebreadcrumb ").html(taghtml)
});
$(".menu_khoahocnc").click(function(){
    swapmain("f_khoahocnc");
        var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Khóa Học</a></li>'+
                          '<li class="active">Khóa Học Nâng Cao</li>' ;
 $(".titlebreadcrumb ").html(taghtml)
});


$(".menu_phanmem ").click(function(){
    swapmain("f_phanmem");
    var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Dữ liệu</a></li>'+
                          '<li class="active">Phần Mềm</li>' ;
    $(".titlebreadcrumb").html(taghtml);
    builddsphanmem(0,recordphanmem);
});
$(".menu_phienban ").click(function(){
    swapmain("f_phienban");
    var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Dữ liệu</a></li>'+
                          '<li class="active">Phiên bản</li>' ;
    $(".titlebreadcrumb").html(taghtml);
    builddsphienban(0,recordphienban);
});
$(".menu_theloai ").click(function(){
    swapmain("f_theloai");
    var taghtml = '<li><a href="#">'+
                          '<li><a href="#">Dữ liệu</a></li>'+
                          '<li class="active">Thể Loại</li>' ;
    $(".titlebreadcrumb").html(taghtml);
    builddsphanmem(0,recordphanmem);
});

$(".menu_trangchu").click(function(){
     swapmain("f_trangchu");
 $(".titlebreadcrumb ").html(taghtml)
 });

$(".menu_visuastudio").click(function(){
    swapmain("f_visualstudio");
$(".titlebreadcrumb ").html(taghtml)
});

$(".menu_visuastudio").click(function(){
    swapmain("f_visualstudio");
$(".titlebreadcrumb ").html(taghtml)
});

$(".menu_eclipse").click(function(){
    swapmain("f_eclipse");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_pycharm").click(function(){
    swapmain("f_pycharm");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_netbeans").click(function(){
    swapmain("f_netbeans");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_IntelliJIDEA").click(function(){
    swapmain("f_IntelliJIDEA");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_CodeBlocks").click(function(){
    swapmain("f_CodeBlocks");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_AptanaStudio3").click(function(){
    swapmain("f_AptanaStudio3");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_Komodo").click(function(){
    swapmain("f_Komodo");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_RubyMine").click(function(){
    swapmain("f_RubyMine");
$(".titlebreadcrumb ").html(taghtml)
});
$(".menu_Xcode").click(function(){
    swapmain("f_Xcode");
$(".titlebreadcrumb ").html(taghtml)
});


//bat su kien nut xu ly dh

//Xuat thong bao khi thao tac that bai
function alert_error(mes) {
    bootbox.alert({
        size: "small",
        title: "<span style='color: red'>Thất bại</span>",
        message: mes,
        callback: function(){ /* your callback code */ }
    });
}
//Xuat thong bao khi thao tac thanh cong
function alert_success(mes,callback) {
    bootbox.alert({
        size: "small",
        title: "Thành công",
        message: mes,
        callback: callback
    });
}
//Xuat thong bao khi thao tac hien thi thong tin
function alert_info(mes) {
    bootbox.alert({
        size: "small",
        title: "Thông báo",
        message: mes,
        callback: function(){ /* your callback code */ }
    });
}
function isNumber(n) { 
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
} 
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Su dung truyen kieu get
function queryDataGet(url,dataSend,callback){
    
    $.ajax({
        type: 'GET',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'text',
        success: callback
    });
}
//Su dung truyen kieu post bao mat
 function queryDataPost(url,dataSend,callback){
    
     $.ajax({
        type: 'POST',
        url: url,
        data: dataSend,
        async: true,
       dataType: 'text',
        success: callback
   });
}

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
//Hàm hiển thị phân trang
function buildSlidePage(obj,codan,pageActive,totalPage) {
    var html="";
    pageActive=parseInt(pageActive);
    for(i = 1 ; i <=codan; i++) {
        if(pageActive-i<0) break;
        html='<button type="button" class="btn btn-outline btn-default" value="'+(pageActive-i)+'">'+(pageActive-i+1)+'</button>'+html;
    }
    if(pageActive>codan){
        html='<button type="button" class="btn btn-outline btn-default" value="'+(pageActive-i)+'">...</button>'+html;
    }
    html+='<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="'+pageActive+'">'+(pageActive+1)+'</button>';
    for(i = 1 ; i <=codan; i++){
        if(pageActive+i>=totalPage) break;
        html=html+'<button  type="button" class="btn btn-outline btn-default" value="'+(pageActive+i)+'">'+(pageActive+i+1)+'</button>';
    }
    if(totalPage-pageActive>codan+1){
        html=html+'<button type="button" value="'+(pageActive+i)+'" class="btn btn-outline btn-default">...</button>';
    }
    obj.html(html);
}
function queryData(url,dataSend,callback){
    
    $.ajax({
        type: 'POST',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'JSON',
        success: callback
    });
}
function printSTT(record,pageCurr){
    if ((pageCurr+1)==1) {
        return 1;
    }else{
        return record*(pageCurr+1)-(record-1);
    }
}
function logout() {
   
           localStorage.removeItem("userIDE");
           localStorage.removeItem("passIDE");
           //localStorage.removeItem("avatar");
            localStorage.removeItem("remmemberIDE");
           
           location.href ="login.html";
       
}
