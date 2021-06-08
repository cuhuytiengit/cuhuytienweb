<?php
//lay du lieu tu client gui len
  $event=$_POST["event"];
  switch ($event)
  {
	  case "guidata":
		echo "hello tao nhan duoc roi";
	  break;
	  default:
		echo "Sorry. Khong duoc vao trag web<a href='google.com'>Google.com</a>";
		break;
	  break;
  }

?>