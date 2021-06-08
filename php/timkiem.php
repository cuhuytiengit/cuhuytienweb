<? php
    if (isset ($ _ POST [ ‘timkiem’])) {
$ key = addslashes ($ _ POST [ ‘khóa_tìm_kiếm’]);
$ sql = “SELECT * FROM tintuc WHERE (LOWER (tiêu đề) LIKE ‘% $ key%’ OR LOWER (noidung) LIKE ‘% $ key%’)”;
$ KQ = mysql_query ($ sql);
if (mysql_num_rows ($ KQ) <> 0) {
>?
<div class = “bảng khối”>
<style h2 = “text-transform: chữ hoa”> <a href=””> Kết quả tìm kiếm </a> </ h2>

thẻ <div class = “content”>
<? php
while ($ row = mysql_fetch_object ($ KQ)) {
?>

//Nội dung cần hiển thị
<?php
}
?>
</div>
</div>
<?php
}
}
?>