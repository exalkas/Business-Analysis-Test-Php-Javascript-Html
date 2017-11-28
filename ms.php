<?php require_once("prote/maxProtector.class.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>BAT Management System</title>

<?php
if ($_GET["action"]!="" )
{

 function removechld($i)
{
       $dom = new DOMDocument();
       $dom->load('bat.xml');
 if  ($dom->getElementsByTagName('client')->length<=1) {echo "<div  style='margin-left:auto;margin-right:auto;width:700px;color:#232323;font: 12px tahoma';>Cannot delete last record. For technical reasons you must leave at least one record. Thank you for your understanding.<br /><br /></div>";return false;}

$y=$dom->getElementsByTagName("client")->item($i);
$dat=$dom->getElementsByTagName("date")->item($i)->nodeValue;
$x=$dom->documentElement->removeChild($y);

echo "<script type='text/javascript'>window.location='ms.php';</script>";
$dom->save("bat.xml");

unlink("results/". $dat . ".jpg");
unlink("results/". $dat . ".pdf");

}

removechld($_GET["action"] );

}
?>

<script type="text/javascript">
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","bat.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
x=xmlDoc.getElementsByTagName("client");

function displayclientInfo(i)
{
name=(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
surname=(x[i].getElementsByTagName("surname")[0].childNodes[0].nodeValue);
company=(x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue);
position=(x[i].getElementsByTagName("position")[0].childNodes[0].nodeValue);
business=(x[i].getElementsByTagName("businessarea")[0].childNodes[0].nodeValue);
employeesno=(x[i].getElementsByTagName("employeesno")[0].childNodes[0].nodeValue);
adress=(x[i].getElementsByTagName("address")[0].childNodes[0].nodeValue);
city=(x[i].getElementsByTagName("city")[0].childNodes[0].nodeValue);
postcode=(x[i].getElementsByTagName("zip")[0].childNodes[0].nodeValue);
email=(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
tel=(x[i].getElementsByTagName("telephone")[0].childNodes[0].nodeValue);
fax=(x[i].getElementsByTagName("fax")[0].childNodes[0].nodeValue);
dat=(x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue);

executive=(x[i].getElementsByTagName("executive")[0].childNodes[0].nodeValue);
organization=(x[i].getElementsByTagName("organization")[0].childNodes[0].nodeValue);
repeatsales=(x[i].getElementsByTagName("repeatsales")[0].childNodes[0].nodeValue);
finance=(x[i].getElementsByTagName("finance")[0].childNodes[0].nodeValue);
operations=(x[i].getElementsByTagName("operations")[0].childNodes[0].nodeValue);
qualityassurance=(x[i].getElementsByTagName("qualityassurance")[0].childNodes[0].nodeValue);
newsales=(x[i].getElementsByTagName("newsales")[0].childNodes[0].nodeValue);
stress=(x[i].getElementsByTagName("stress")[0].childNodes[0].nodeValue);
principles=(x[i].getElementsByTagName("principles")[0].childNodes[0].nodeValue);
help=(x[i].getElementsByTagName("help")[0].childNodes[0].nodeValue);


txt="Name: "+name+"<br />Surname: "+surname+"<br />Company name: "+company+"<br />Position: "+position+"<br />Business area: "+business+"<br />Number of employees: "+employeesno+"<br />Address: "+adress+"<br />City: "+city+"<br />Zip: "+postcode+"<br />email: "+email+"<br />Telephone: "+tel+"<br />Fax: "+fax+"<br />Date 'Year,Month,Day,Hours,minutes,seconds': "+dat+"<br /><strong>Score</strong><br />Executive: "+executive+"<br />Organization: "+organization+"<br />Repeat sales: "+repeatsales+"<br />Finance: "+finance+"<br />Operations: "+operations+"<br />Quality Assurance: "+qualityassurance+"<br />New Sales: "+newsales+"<br />Stress: "+stress+"<br />Principles: "+principles+"<br />Help: "+help;
document.getElementById("showClients").innerHTML=txt;
}

function deleteme(val)
{
var answer = confirm ("Are you sure you want to delete this record? Press ok to delete.");

if (answer){
window.location="ms.php"+"?"+"action="+val;}
else
{window.location="ms.php";}
}

</script>
</head>

<body>
<div  style="margin-left:auto;margin-right:auto;width:700px;color:#232323;font: 12px tahoma;">
<div id='showClients' style="width:290px;float:left;">Welcome.<br /> Click on a client to display his information.</div>
<div style="width:300px;float:left;">
<script type="text/javascript">
document.write("<table border='1' style='width:100%;'>");
for (var i=0;i<x.length;i++)
  { 
  document.write("<tr style='cursor:pointer;' onclick='displayclientInfo(" + i + ")'>");
  document.write("<td>");
  document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  document.write("</td><td>");
  document.write(x[i].getElementsByTagName("surname")[0].childNodes[0].nodeValue);
  document.write("</td><td>");
 document.write(x[i].getElementsByTagName("telephone")[0].childNodes[0].nodeValue);
  document.write("</td><td>");
 document.write(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
  document.write("</td><td>");
  document.write("<button type='button' id='"+i+ "' onclick='deleteme("+i+")'>Delete</button");
  document.write("</td></tr>");
  }
document.write("</table>");
</script>
</div>

</div>
</body>
</html>