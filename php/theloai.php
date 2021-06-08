<?php
require_once("server.php");
$event = $_POST['event'];

switch ($event) {
    case "inserttl":
    $MaTL=$_POST['MaTL'];
    $TenTL=$_POST['TenTL']; 

    $sql="INSERT INTO `theloai` (MaTL,TenTL) VALUES('".$MaTL."','".$TenTL."')";

            if (mysqli_query($conn, $sql)) { 
                $res[$event] = 1;//insert thanh cong
            } else {
                $res[$event] = 0;//insert that bai
            }
        echo json_encode($res); //TRA VE CLIENT {"inserpbl":1}->TC,{"inserpbl":0}->TB
        mysqli_close($conn);
        break;
    case "deletetl":
        $MaTL=$_POST['MaTL'];
        $sql="DELETE FROM `theloai` WHERE MaTL='".$MaTL."'";
            mysqli_query($conn, $sql);
            if(mysqli_affected_rows($conn)) {
                $res[$event] = true;
            } else {
                $res[$event] = false;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "updatetl":
        $MaTL=$_POST['MaTL'];
        $TenTL=$_POST['TenTL']; 
        $sql="UPDATE  `theloai` SET TenTL='".$TenTL."' WHERE MaTL ='".$MaTL."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDStheloai":
        
        $mang=array();
      
        $record=$_POST['record'];
        $page=$_POST['page'];
      
        $vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select * from theloai ".$limit); 
        while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['MaTL'];
            $usertemp['MaTL']=$rows['MaTL'];
            $usertemp['TenTL']=$rows['TenTL'];


            
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from theloai");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
        $jsonData['totalpage'] =ceil($row['total']/$record);
        $jsonData['page'] =(int)$page;
        $jsonData['items'] =$mang;
        
        echo json_encode($jsonData);
        mysqli_close($conn);
         break;
        default:
        # code...
        break;
}
?>