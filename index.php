<?php require_once("prote/maxProtector.class.php"); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <title>BAT Management</title>
   <link href="style/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","xmls/batfile.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
x=xmlDoc.getElementsByTagName("client");

function displayclientInfo(i)
{
name=(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
surname=(x[i].getElementsByTagName("surname")[0].childNodes[0].nodeValue);
email=(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
tel=(x[i].getElementsByTagName("tel")[0].childNodes[0].nodeValue);
txt="Name: "+name+"<br />Surname: "+surname+"<br />email: "+email+"<br />Telephone: "+tel;
document.getElementById("showclients").innerHTML=txt;
}
</script>

</head>

<body>
	<div id='showclients'>Click on a client to display his information.</div><br />
<script type="text/javascript">
document.write("<table border='1'>");
for (var i=0;i<x.length;i++)
  { 
  document.write("<tr onclick='displayclientInfo(" + i + ")'>");
  document.write("<td>");
  document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  document.write("</td><td>");
  document.write(x[i].getElementsByTagName("surname")[0].childNodes[0].nodeValue);
  document.write("</td></tr>");
  }
document.write("</table>");
</script>
</body>   