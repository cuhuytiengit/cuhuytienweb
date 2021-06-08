<?php
require_once("server.php");
$event = $_POST['event'];

switch ($event) {
    case "insertpb":
    $MaPB=$_POST['MaPB'];
    $TenPB=$_POST['TenPB']; 

    $sql="INSERT INTO `phienban` (MaPB,TenPB) VALUES('".$MaPB."','".$TenPB."')";

            if (mysqli_query($conn, $sql)) { 
                $res[$event] = 1;//insert thanh cong
            } else {
                $res[$event] = 0;//insert that bai
            }
        echo json_encode($res); //TRA VE CLIENT {"inserpbl":1}->TC,{"inserpbl":0}->TB
        mysqli_close($conn);
        break;
    case "deletepb":
        $MaPB=$_POST['MaPB'];
        $sql="DELETE FROM `phienban` WHERE MaPB='".$MaPB."'";
            mysqli_query($conn, $sql);
            if(mysqli_affected_rows($conn)) {
                $res[$event] = true;
            } else {
                $res[$event] = false;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "update":
        $MaPB=$_POST['MaPB'];
        $TenPB=$_POST['TenPB']; 
        $sql="UPDATE  `phienban` SET TenPB='".$TenPB."' WHERE MaPB ='".$MaPB."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSphienban":
        
        $mang=array();
      
        $record=$_POST['record'];
        $page=$_POST['page'];
      
        $vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select * from phienban ".$limit); 
        while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['MaPB'];
            $usertemp['MaPB']=$rows['MaPB'];
            $usertemp['TenPB']=$rows['TenPB'];


            
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from phienban");
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