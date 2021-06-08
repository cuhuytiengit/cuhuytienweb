<?php
require_once("server.php");
$event = $_POST['event'];

switch ($event) {
   case "login":
        $mang=array();
        $u=$_POST['username'];
        $p=md5($_POST['password']);
        
        $sql=mysqli_query($conn,"select * from user where username='".$u."' and password='".$p."'");
        $t=''; 
        while($rows=mysqli_fetch_array($sql))
        {      
            $usertemp['username']=$rows['username'];
            $usertemp['password']=$rows['password'];
            $usertemp['avatar']=$rows['avatar'];
            $t=$rows['username'];
        
        }
        if($t!=''){
          $jsonData['event'] =1;
          $jsonData['items'] = $usertemp;

          echo json_encode($jsonData);
        }else
        {
           $jsonData['event'] =0;
           //$jsonData['items'] = $usertemp;

           echo json_encode($jsonData);
        }
        mysqli_close($conn);
    break;

	case "insertpm":
    $maphanmem=$_POST['maphanmem'];
	$tenphanmem=$_POST['tenphanmem']; 
    $hedieuhanh=$_POST['hedieuhanh'];
    $tinhnang=$_POST['tinhnang'];  
    $namgt=$_POST['namgt'];
    $sql="INSERT INTO `phanmem` (maphanmem,tenphanmem,hedieuhanh,tinhnang,namgt) VALUES('".$maphanmem."','".$tenphanmem."','".$hedieuhanh."','".$tinhnang."','".$namgt."')";

            if (mysqli_query($conn, $sql)) { 
                $res[$event] = 1;//insert thanh cong
            } else {
                $res[$event] = 0;//insert that bai
            }
        echo json_encode($res); //TRA VE CLIENT {"inserttl":1}->TC,{"inserttl":0}->TB
        mysqli_close($conn);
        break;
	case "deletett":
		$maphanmem=$_POST['maphanmem'];
        $sql="DELETE FROM `phanmem` WHERE maphanmem='".$maphanmem."'";
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
        $maphanmem=$_POST['maphanmem'];
        $tenphanmem=$_POST['tenphanmem']; 
        $hedieuhanh=$_POST['hedieuhanh'];
        $tinhnang=$_POST['tinhnang'];
        $namgt=$_POST['namgt']; 
        $sql="UPDATE  `phanmem` SET tenphanmem='".$tenphanmem."' , hedieuhanh='".$hedieuhanh."', tinhnang='".$tinhnang."' , namgt='".$namgt."' WHERE maphanmem ='".$maphanmem."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSPhanmem":
		
		$mang=array();
      
        $record=$_POST['record'];
        $page=$_POST['page'];
      
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select * from phanmem ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['maphanmem'];
            $usertemp['maphanmem']=$rows['maphanmem'];
            $usertemp['tenphanmem']=$rows['tenphanmem'];
            $usertemp['hedieuhanh']=$rows['hedieuhanh'];
            $usertemp['tinhnang']=$rows['tinhnang'];
            $usertemp['namgt']=$rows['namgt'];


            
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from phanmem");
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