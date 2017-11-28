<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Business Analysis Test - Results</title>

</head>

<body style="color:#232323;font: 10pt tahoma;margin-left:auto;margin-right:auto;width:500px;">
<?php
require('prote/fpdf.php');
date_default_timezone_set('UTC');
$today = date("YmdHis");
$test = $_POST['RadioGroup1'];

$name=$_POST['Name'];
$surname=$_POST['Surname'];
$companyname=$_POST['Companyname'];
$position=$_POST['Position'];
$businessarea=$_POST['Businessarea'];
$employees=$_POST['Employees'];
$address=$_POST['Address'];
$city=$_POST['City'];
$email=$_POST['Email'];
$zip=$_POST['Zip'];
$telephone=$_POST['Telephone'];
$fax=$_POST['Fax'];

//if (empty($name) || empty($surname) || empty($email)) {exit("Please fill in the form first");} 

if (empty($name)) {$name='Unknown';}
if (empty($surname)) {$surname='Unknown';}
if (empty($companyname)) {$companyname='Unknown';}
if (empty($position)) {$position='Unknown';}
if (empty($businessarea)) {$businessarea='Unknown';}
if (empty($employees)) {$employees='Unknown';}
if (empty($address)) {$address='Unknown';}
if (empty($city)) {$city='Unknown';}
if (empty($email)) {$email='Unknown';}
if (empty($zip)) {$zip='Unknown';}
if (empty($telephone)) {$telephone='Unknown';}
if (empty($fax)) {$fax='Unknown';}

echo "<div>";
echo "<span style='font-weight:bold;'>Business Analysis Test</span><br /><hr />";
echo "<p>Thank you very much.</p>";
echo  "<p>Your test is completed <span style='font-weight:bold;'>successfully</span>. </p><p>Soon you will receive an email including the results of your test <br />and one of our consultants will contact you in order to give you the analysis of the test.</p>";
echo "<p>The results will be emailed to <span style='font-weight:bold;'>" . $_POST['Email'] . "</span></p>";
echo "<p> Have a nice day.</p><hr /></div>";


$cat1=0;
$cat2=0;
$cat3=0;
$cat4=0;
$cat5=0;
$cat6=0;
$cat7=0;
$cat8=0;
$cat9=0;
$cat10=0;
$a1=$_POST['RadioGroup1'];
$a2=$_POST['RadioGroup2'];
$a3=$_POST['RadioGroup3'];
$a4=$_POST['RadioGroup4'];
$a5=$_POST['RadioGroup5'];
$a6=$_POST['RadioGroup6'];
$a7=$_POST['RadioGroup7'];
$a8=$_POST['RadioGroup8'];
$a9=$_POST['RadioGroup9'];
$a10=$_POST['RadioGroup10'];
$a11=$_POST['RadioGroup11'];
$a12=$_POST['RadioGroup12'];
$a13=$_POST['RadioGroup13'];
$a14=$_POST['RadioGroup14'];
$a15=$_POST['RadioGroup15'];
$a16=$_POST['RadioGroup16'];
$a17=$_POST['RadioGroup17'];
$a18=$_POST['RadioGroup18'];
$a19=$_POST['RadioGroup19'];
$a20=$_POST['RadioGroup20'];
$a21=$_POST['RadioGroup1'];
$a22=$_POST['RadioGroup2'];
$a23=$_POST['RadioGroup3'];
$a24=$_POST['RadioGroup4'];
$a25=$_POST['RadioGroup5'];
$a26=$_POST['RadioGroup6'];
$a27=$_POST['RadioGroup7'];
$a28=$_POST['RadioGroup8'];
$a29=$_POST['RadioGroup9'];
$a30=$_POST['RadioGroup10'];
$a31=$_POST['RadioGroup11'];
$a32=$_POST['RadioGroup12'];
$a33=$_POST['RadioGroup13'];
$a34=$_POST['RadioGroup14'];
$a35=$_POST['RadioGroup15'];
$a36=$_POST['RadioGroup16'];
$a37=$_POST['RadioGroup17'];
$a38=$_POST['RadioGroup18'];
$a39=$_POST['RadioGroup19'];
$a40=$_POST['RadioGroup20'];
$a41=$_POST['RadioGroup1'];
$a42=$_POST['RadioGroup2'];
$a43=$_POST['RadioGroup3'];
$a44=$_POST['RadioGroup4'];
$a45=$_POST['RadioGroup5'];
$a46=$_POST['RadioGroup6'];
$a47=$_POST['RadioGroup7'];
$a48=$_POST['RadioGroup8'];
$a49=$_POST['RadioGroup9'];
$a50=$_POST['RadioGroup10'];
$a51=$_POST['RadioGroup11'];
$a52=$_POST['RadioGroup12'];
$a53=$_POST['RadioGroup13'];
$a54=$_POST['RadioGroup14'];
$a55=$_POST['RadioGroup15'];
$a56=$_POST['RadioGroup16'];
$a57=$_POST['RadioGroup17'];
$a58=$_POST['RadioGroup18'];
$a59=$_POST['RadioGroup19'];
$a60=$_POST['RadioGroup20'];
$a61=$_POST['RadioGroup1'];
$a62=$_POST['RadioGroup2'];
$a63=$_POST['RadioGroup3'];
$a64=$_POST['RadioGroup4'];
$a65=$_POST['RadioGroup5'];
$a66=$_POST['RadioGroup6'];
$a67=$_POST['RadioGroup7'];
$a68=$_POST['RadioGroup8'];
$a69=$_POST['RadioGroup9'];
$a70=$_POST['RadioGroup10'];
$a71=$_POST['RadioGroup11'];
$a72=$_POST['RadioGroup12'];
$a73=$_POST['RadioGroup13'];
$a74=$_POST['RadioGroup14'];
$a75=$_POST['RadioGroup15'];
$a76=$_POST['RadioGroup16'];
$a77=$_POST['RadioGroup17'];
$a78=$_POST['RadioGroup18'];
$a79=$_POST['RadioGroup19'];
$a80=$_POST['RadioGroup20'];
$a80=$_POST['RadioGroup20'];
$a81=$_POST['RadioGroup1'];
$a82=$_POST['RadioGroup2'];
$a83=$_POST['RadioGroup3'];
$a84=$_POST['RadioGroup4'];
$a85=$_POST['RadioGroup5'];
$a86=$_POST['RadioGroup6'];
$a87=$_POST['RadioGroup7'];
$a88=$_POST['RadioGroup8'];
$a89=$_POST['RadioGroup9'];
$a90=$_POST['RadioGroup10'];
$a91=$_POST['RadioGroup11'];
$a92=$_POST['RadioGroup12'];
$a93=$_POST['RadioGroup13'];
$a94=$_POST['RadioGroup14'];
$a95=$_POST['RadioGroup15'];
$a96=$_POST['RadioGroup16'];
$a97=$_POST['RadioGroup17'];
$a98=$_POST['RadioGroup18'];
$a99=$_POST['RadioGroup19'];
$a100=$_POST['RadioGroup20'];

switch ($a1)
{
	case 'Yes':
	$cat1+=9;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=0;
	break;
}
switch ($a11)
{
	case 'Yes':
	$cat1+=0;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=9;
	break;
}
switch ($a21)
{
	case 'Yes':
	$cat1+=0;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=9;
	break;
}
switch ($a31)
{
	case 'Yes':
	$cat1+=0;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=9;
	break;
}
switch ($a41)
{
	case 'Yes':
	$cat1+=0;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=9;
	break;
}
switch ($a51)
{
	case 'Yes':
	$cat1+=9;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=0;
	break;
}
switch ($a61)
{
	case 'Yes':
	$cat1+=9;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=0;
	break;
}
switch ($a71)
{
	case 'Yes':
	$cat1+=0;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=9;
	break;
}
switch ($a81)
{
	case 'Yes':
	$cat1+=0;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=9;
	break;
}
switch ($a91)
{
	case 'Yes':
	$cat1+=9;
	break;
	case 'Maybe':
	$cat1+=3;
	break;
	case 'No':
	$cat1+=0;
	break;
}

switch ($a2)
{
	case 'Yes':
	$cat2+=9;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=0;
	break;
}
switch ($a12)
{
	case 'Yes':
	$cat2+=0;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=9;
	break;
}
switch ($a22)
{
	case 'Yes':
	$cat2+=9;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=0;
	break;
}
switch ($a32)
{
	case 'Yes':
	$cat2+=0;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=9;
	break;
}
switch ($a42)
{
	case 'Yes':
	$cat2+=0;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=9;
	break;
}
switch ($a52)
{
	case 'Yes':
	$cat2+=9;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=0;
	break;
}
switch ($a62)
{
	case 'Yes':
	$cat2+=9;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=0;
	break;
}
switch ($a72)
{
	case 'Yes':
	$cat2+=0;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=9;
	break;
}
switch ($a82)
{
	case 'Yes':
	$cat2+=9;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=0;
	break;
}
switch ($a92)
{
	case 'Yes':
	$cat2+=9;
	break;
	case 'Maybe':
	$cat2+=3;
	break;
	case 'No':
	$cat2+=0;
	break;
}

switch ($a3)
{
	case 'Yes':
	$cat3+=0;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=9;
	break;
}
switch ($a13)
{
	case 'Yes':
	$cat3+=9;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=0;
	break;
}
switch ($a23)
{
	case 'Yes':
	$cat3+=9;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=0;
	break;
}
switch ($a33)
{
	case 'Yes':
	$cat3+=0;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=9;
	break;
}
switch ($a43)
{
	case 'Yes':
	$cat3+=9;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=0;
	break;
}
switch ($a53)
{
	case 'Yes':
	$cat3+=9;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=0;
	break;
}
switch ($a63)
{
	case 'Yes':
	$cat3+=0;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=9;
	break;
}
switch ($a73)
{
	case 'Yes':
	$cat3+=9;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=0;
	break;
}
switch ($a83)
{
	case 'Yes':
	$cat3+=9;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=0;
	break;
}
switch ($a93)
{
	case 'Yes':
	$cat3+=0;
	break;
	case 'Maybe':
	$cat3+=3;
	break;
	case 'No':
	$cat3+=9;
	break;
}

switch ($a4)
{
	case 'Yes':
	$cat4+=9;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=0;
	break;
}
switch ($a14)
{
	case 'Yes':
	$cat4+=0;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=9;
	break;
}
switch ($a24)
{
	case 'Yes':
	$cat4+=0;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=9;
	break;
}
switch ($a34)
{
	case 'Yes':
	$cat4+=9;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=0;
	break;
}
switch ($a44)
{
	case 'Yes':
	$cat4+=9;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=0;
	break;
}
switch ($a54)
{
	case 'Yes':
	$cat4+=0;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=9;
	break;
}
switch ($a64)
{
	case 'Yes':
	$cat4+=9;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=0;
	break;
}
switch ($a74)
{
	case 'Yes':
	$cat4+=0;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=9;
	break;
}
switch ($a84)
{
	case 'Yes':
	$cat4+=9;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=0;
	break;
}
switch ($a94)
{
	case 'Yes':
	$cat4+=9;
	break;
	case 'Maybe':
	$cat4+=3;
	break;
	case 'No':
	$cat4+=0;
	break;
}

switch ($a5)
{
	case 'Yes':
	$cat5+=9;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=0;
	break;
}
switch ($a15)
{
	case 'Yes':
	$cat5+=9;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=0;
	break;
}
switch ($a25)
{
	case 'Yes':
	$cat5+=0;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=9;
	break;
}
switch ($a35)
{
	case 'Yes':
	$cat5+=0;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=9;
	break;
}
switch ($a45)
{
	case 'Yes':
	$cat5+=0;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=9;
	break;
}
switch ($a55)
{
	case 'Yes':
	$cat5+=0;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=9;
	break;
}
switch ($a65)
{
	case 'Yes':
	$cat5+=9;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=0;
	break;
}
switch ($a75)
{
	case 'Yes':
	$cat5+=0;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=9;
	break;
}
switch ($a85)
{
	case 'Yes':
	$cat5+=9;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=0;
	break;
}
switch ($a95)
{
	case 'Yes':
	$cat5+=9;
	break;
	case 'Maybe':
	$cat5+=3;
	break;
	case 'No':
	$cat5+=0;
	break;
}

switch ($a6)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}
switch ($a16)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}
switch ($a26)
{
	case 'Yes':
	$cat6+=0;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=9;
	break;
}
switch ($a36)
{
	case 'Yes':
	$cat6+=0;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=9;
	break;
}
switch ($a46)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}
switch ($a56)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}
switch ($a66)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}
switch ($a76)
{
	case 'Yes':
	$cat6+=0;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=9;
	break;
}
switch ($a86)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}
switch ($a96)
{
	case 'Yes':
	$cat6+=9;
	break;
	case 'Maybe':
	$cat6+=3;
	break;
	case 'No':
	$cat6+=0;
	break;
}

switch ($a7)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a17)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a27)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a37)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a47)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a57)
{
	case 'Yes':
	$cat7+=0;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=9;
	break;
}
switch ($a67)
{
	case 'Yes':
	$cat7+=0;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=9;
	break;
}
switch ($a77)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a87)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}
switch ($a97)
{
	case 'Yes':
	$cat7+=9;
	break;
	case 'Maybe':
	$cat7+=3;
	break;
	case 'No':
	$cat7+=0;
	break;
}

switch ($a8)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a18)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a28)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a38)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a48)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a58)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a68)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a78)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}
switch ($a88)
{
	case 'Yes':
	$cat8+=9;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=0;
	break;
}
switch ($a98)
{
	case 'Yes':
	$cat8+=0;
	break;
	case 'Maybe':
	$cat8+=3;
	break;
	case 'No':
	$cat8+=9;
	break;
}

switch ($a9)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a19)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a29)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a39)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a49)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a59)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a69)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a79)
{
	case 'Yes':
	$cat9+=0;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=9;
	break;
}
switch ($a89)
{
	case 'Yes':
	$cat9+=9;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=0;
	break;
}
switch ($a99)
{
	case 'Yes':
	$cat9+=9;
	break;
	case 'Maybe':
	$cat9+=3;
	break;
	case 'No':
	$cat9+=0;
	break;
}

switch ($a10)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a20)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a30)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a40)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a50)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a60)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a70)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}
switch ($a80)
{
	case 'Yes':
	$cat10+=0;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=9;
	break;
}
switch ($a90)
{
	case 'Yes':
	$cat10+=0;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=9;
	break;
}
switch ($a100)
{
	case 'Yes':
	$cat10+=9;
	break;
	case 'Maybe':
	$cat10+=3;
	break;
	case 'No':
	$cat10+=0;
	break;
}


function batgraph($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$today)
{
global $filepdf;

$im = @imagecreatefromjpeg('prote/batnew.jpg');
if ($im)
{

$blue= imagecolorallocate($im, 0, 0, 255);
$black = imagecolorallocate($im, 0, 0, 0);
imagesetthickness($im, 2);

//imageline($im, 67, 470, 143,440, $black);
//imagefilledellipse($im, 67, 470, 9, 9, $black);
//imagefilledellipse($im, 143, 440, 9, 9, $black);
//Draw lines and eclipses
//1
imagefilledellipse($im, 65, 470-$cat1*3, 9, 9, $black);
imageline($im, 65, 470-$cat1*3, 143,470-$cat2*3, $black);
//2
imagefilledellipse($im, 143,470-$cat2*3, 9, 9, $black);
imageline($im, 143, 470-$cat2*3, 219,470-$cat3*3, $black);
//3
imagefilledellipse($im, 219,470-$cat3*3, 9, 9, $black);
imageline($im, 219, 470-$cat3*3, 295,470-$cat4*3, $black);
//4
imagefilledellipse($im, 295,470-$cat4*3, 9, 9, $black);
imageline($im, 295, 470-$cat4*3, 371,470-$cat5*3, $black);
//5
imagefilledellipse($im, 373,470-$cat5*3, 9, 9, $black);
imageline($im, 373, 470-$cat5*3, 449,470-$cat6*3, $black);
//6
imagefilledellipse($im, 449,470-$cat6*3, 9, 9, $black);
imageline($im, 449, 470-$cat6*3, 523,470-$cat7*3, $black);
//7
imagefilledellipse($im, 525,470-$cat7*3, 9, 9, $black);
imageline($im, 525, 470-$cat7*3, 599,470-$cat8*3, $black);
//8
imagefilledellipse($im, 601,470-$cat8*3, 9, 9, $black);
imageline($im, 601, 470-$cat8*3, 677,470-$cat9*3, $black);
//9
imagefilledellipse($im, 678,470-$cat9*3, 9, 9, $black);
imageline($im, 678, 470-$cat9*3, 755,470-$cat10*3, $black);
//10
imagefilledellipse($im, 755,470-$cat10*3, 9, 9, $black);
  

// Add the text
imagestring($im, 5, 59, 450-$cat1*3,$cat1, $black);
imagestring($im, 5, 135, 450-$cat2*3,$cat2, $black);
imagestring($im, 5, 211, 450-$cat3*3,$cat3, $black);
imagestring($im, 5, 287, 450-$cat4*3,$cat4, $black);
imagestring($im, 5, 363, 450-$cat5*3,$cat5, $black);
imagestring($im, 5, 439, 450-$cat6*3,$cat6, $black);
imagestring($im, 5, 518, 450-$cat7*3,$cat7, $black);
imagestring($im, 5, 594, 450-$cat8*3,$cat8, $black);
imagestring($im, 5, 670, 450-$cat9*3,$cat9, $black);
imagestring($im, 5, 746, 450-$cat10*3,$cat10, $black);

// Using imagepng() results in clearer text compared with imagejpeg()
$filenamegif="results/".$today . "." . "jpg";

imagejpeg($im,$filenamegif,98);
imagedestroy($im);
}
else
{
echo "Error loading image";
}

$filenamepdf="results/".$today . "." . "pdf";
$pdf= new FPDF();
$pdf->SetAuthor('MentorGroup');
$pdf->SetTitle('BAT');
$pdf->AddPage('L'); 
$pdf->SetDisplayMode(real,'default'); 
$pdf->Image($filenamegif,38,20);
$pdf->Output($filenamepdf,'F');
}

function exporttoxml($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$name,$surname,$companyname,$position,$businessarea,$employees,$address,$city,$email,$zip,$telephone,$fax,$today)
{
$xml = simplexml_load_file("xmls/batfile.xml"); //This line will load the XML file. 
$sxe = new SimpleXMLElement($xml->asXML()); //In this line it create a SimpleXMLElement object with the source of the XML file. 
//The following lines will add a new child and others child inside the previous child created. 
$client = $sxe->addChild("client"); 
$client->addChild("name", $name); 
$client->addChild("surname", "$surname"); 
$client->addChild("company", $companyname); 
$client->addChild("position", "$position"); 
$client->addChild("business", $businessarea); 
$client->addChild("employeesno", "$employees"); 
$client->addChild("adress", $address); 
$client->addChild("city", "$city"); 
$client->addChild("postcode", $zip); 
$client->addChild("email", "$email"); 
$client->addChild("tel", $telephone); 
$client->addChild("fax", "$fax"); 
$client->addChild("executive", "$cat1"); 
$client->addChild("organization", "$cat2"); 
$client->addChild("repeatesales", "$cat3"); 
$client->addChild("finance", "$cat4"); 
$client->addChild("operations", "$cat5"); 
$client->addChild("qualityassurance", "$cat6"); 
$client->addChild("newsales", "$cat7"); 
$client->addChild("stress", "$cat8"); 
$client->addChild("principles", "$cat9"); 
$client->addChild("help", "$cat10"); 

//This next line will overwrite the original XML file with new data added 
$sxe->asXML("xmls/batfile.xml"); 
}

function exporttoxmldom($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$name,$surname,$companyname,$position,$businessarea,$employees,$address,$city,$email,$zip,$telephone,$fax,$today)
{
$dom = new DOMDocument();
$dom->load('bat.xml');

$dom->formatoutput = true;
$batclients = $dom->documentElement;

$client = $dom->createElement("client");
$dom->appendChild($client);
// $candidate -> appendChild($newElement);
// create child element
$namexml = $dom->createElement("name");
$client->appendChild($namexml);
// create text node
$nametext= $dom->createTextNode($name);
$namexml->appendChild($nametext);

// create child element
$surnamexml = $dom->createElement("surname");
$client->appendChild($surnamexml);
// create text node
$surnametext= $dom->createTextNode($surname);
$surnamexml->appendChild($surnametext);

// create child element
$companyxml = $dom->createElement("company");
$client->appendChild($companyxml);
// create text node
$companytext= $dom->createTextNode($companyname);
$companyxml->appendChild($companytext);

// create child element
$positionxml = $dom->createElement("position");
$client->appendChild($positionxml);
// create text node
$positiontext= $dom->createTextNode($position);
$positionxml->appendChild($positiontext);

// create child element
$businessareaxml = $dom->createElement("businessarea");
$client->appendChild($businessareaxml);
// create text node
$businessareatext= $dom->createTextNode($businessarea);
$businessareaxml->appendChild($businessareatext);

// create child element
$employeesnoxml = $dom->createElement("employeesno");
$client->appendChild($employeesnoxml);
// create text node
$employeesnotext= $dom->createTextNode($employees);
$employeesnoxml->appendChild($employeesnotext);

// create child element
$addressxml = $dom->createElement("address");
$client->appendChild($addressxml);
// create text node
$addresstext= $dom->createTextNode($address);
$addressxml->appendChild($addresstext);

// create child element
$cityxml = $dom->createElement("city");
$client->appendChild($cityxml);
// create text node
$citytext= $dom->createTextNode($city);
$cityxml->appendChild($citytext);

// create child element
$zipxml = $dom->createElement("zip");
$client->appendChild($zipxml);
// create text node
$ziptext= $dom->createTextNode($zip);
$zipxml->appendChild($ziptext);

// create child element
$emailxml = $dom->createElement("email");
$client->appendChild($emailxml);
// create text node
$emailtext= $dom->createTextNode($email);
$emailxml->appendChild($emailtext);


// create child element
$telephonexml = $dom->createElement("telephone");
$client->appendChild($telephonexml);
// create text node
$telephonetext= $dom->createTextNode($telephone);
$telephonexml->appendChild($telephonetext);

// create child element
$faxxml = $dom->createElement("fax");
$client->appendChild($faxxml);
// create text node
$faxtext= $dom->createTextNode($fax);
$faxxml->appendChild($faxtext);

// create child element
$datexml = $dom->createElement("date");
$client->appendChild($datexml);
// create text node
$datetext= $dom->createTextNode($today);
$datexml->appendChild($datetext);

// create child element
$executivexml = $dom->createElement("executive");
$client->appendChild($executivexml);
// create text node
$executivetext= $dom->createTextNode($cat1);
$executivexml->appendChild($executivetext);

// create child element
$organizationxml = $dom->createElement("organization");
$client->appendChild($organizationxml);
// create text node
$organizationtext= $dom->createTextNode($cat2);
$organizationxml->appendChild($organizationtext);

// create child element
$repeatsalesxml = $dom->createElement("repeatsales");
$client->appendChild($repeatsalesxml);
// create text node
$repeatsalestext= $dom->createTextNode($cat3);
$repeatsalesxml->appendChild($repeatsalestext);

// create child element
$financexml = $dom->createElement("finance");
$client->appendChild($financexml);
// create text node
$financetext= $dom->createTextNode($cat4);
$financexml->appendChild($financetext);

// create child element
$operationsxml = $dom->createElement("operations");
$client->appendChild($operationsxml);
// create text node
$operationstext= $dom->createTextNode($cat5);
$operationsxml->appendChild($operationstext);

// create child element
$qualityassurancexml = $dom->createElement("qualityassurance");
$client->appendChild($qualityassurancexml);
// create text node
$qualityassurancetext= $dom->createTextNode($cat6);
$qualityassurancexml->appendChild($qualityassurancetext);

// create child element
$newsalesxml = $dom->createElement("newsales");
$client->appendChild($newsalesxml);
// create text node
$newsalestext= $dom->createTextNode($cat7);
$newsalesxml->appendChild($newsalestext);

// create child element
$stressxml = $dom->createElement("stress");
$client->appendChild($stressxml);
// create text node
$stresstext= $dom->createTextNode($cat8);
$stressxml->appendChild($stresstext);

// create child element
$principlesxml = $dom->createElement("principles");
$client->appendChild($principlesxml);
// create text node
$principlestext= $dom->createTextNode($cat9);
$principlesxml ->appendChild($principlestext);

// create child element
$helpxml = $dom->createElement("help");
$client->appendChild($helpxml);
// create text node
$helptext= $dom->createTextNode($cat10);
$helpxml->appendChild($helptext);

$batclients->appendChild($client);
$test=$dom->save("bat.xml");
}

function sendemail ($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$name,$surname,$companyname,$position,$businessarea,$employees,$address,$city,$email,$zip,$telephone,$fax,$today,$pdfdoc)
{
// email stuff (change data below)
$to = $email; 
$toowner = "alkas@alkas.gr"; 
$from = "alkas@alkas.gr"; 
$subject = "Business Analysis Test results";
$subjectowner = "Someone did a Business Analysis Test and here are the results";  
$message = "<p>Thank you very much for your time.</p><p>Please see the attachment with the results of your test.</p>";
$message .= "<p>one of our consultants will contact you </p><p>in order to give you the analysis of the test.</p>"; 

$messageowner = "Here are the data:<br />";
$messageowner .= "Name: " . $name . "<br />";
$messageowner .= "Surname: " . $surname . "<br />";
$messageowner .= "Company: " . $companyname . "<br />";
$messageowner .= "Position: " . $position . "<br />";
$messageowner .= "Business area: " . $businessarea . "<br />";
$messageowner .= "Number of emploees: " . $employees . "<br />";
$messageowner .= "Address: " . $address . "<br />";
$messageowner .= "City: " . $city . "<br />";
$messageowner .= "Zip: " . $zip . "<br />";
$messageowner .= "Email: " . $email . "<br />";
$messageowner .= "Telephone: " . $telephone . "<br />";
$messageowner .= "Fax: " . $fax . "<br />";
$messageowner .= "<p>Here are the scores: </p>";
$messageowner .= "Executive: " . $cat1 . "<br />";
$messageowner .= "Organization: " . $cat2 . "<br />";
$messageowner .= "Repeatesales: " . $cat3 . "<br />";
$messageowner .= "Finance: " . $cat4 . "<br />";
$messageowner .= "Operations: " . $cat5 . "<br />";
$messageowner .= "Quality Assurance: " . $cat6 . "<br />";
$messageowner .= "Newsales: " . $cat7 . "<br />";
$messageowner .= "Stress: " . $cat8 . "<br />";
$messageowner .= "Principles: " . $cat9 . "<br />";
$messageowner .= "Help: " . $cat10 . "<br />";


// a random hash will be necessary to send mixed content
$separator = md5(time());
$separator2 = md5(time()); 
// carriage return type (we use a PHP end of line constant)
$eol = PHP_EOL;
 
// attachment name
$filename = "results/" . $today . ".pdf";
 
// encode data (puts attachment in proper format)

$attachment = chunk_split(base64_encode(file_get_contents($filename)));
//
// main header (multipart mandatory)
$headers  = "From: ".$from.$eol;
$headers .= "MIME-Version: 1.0".$eol; 
$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"".$eol.$eol; 
$headers .= "Content-Transfer-Encoding: 7bit".$eol;
$headers .= "This is a MIME encoded message.".$eol.$eol;
 
// message
$headers .= "--".$separator.$eol;
$headers .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
$headers .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
$headers .= $message.$eol.$eol;
 
// attachment
$headers .= "--".$separator.$eol;
$headers .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 
$headers .= "Content-Transfer-Encoding: base64".$eol;
$headers .= "Content-Disposition: attachment".$eol.$eol;
$headers .= $attachment.$eol.$eol;
$headers .= "--".$separator."--";


$headers  = "From: ".$from.$eol;
$headers .= "MIME-Version: 1.0".$eol; 
$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"".$eol.$eol; 
$headers .= "Content-Transfer-Encoding: 7bit".$eol;
$headers .= "This is a MIME encoded message.".$eol.$eol;
 
// message
$headers .= "--".$separator.$eol;
$headers .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
$headers .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
$headers .= $message.$eol.$eol;
 
// attachment
$headers .= "--".$separator.$eol;
$headers .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 
$headers .= "Content-Transfer-Encoding: base64".$eol;
$headers .= "Content-Disposition: attachment".$eol.$eol;
$headers .= $attachment.$eol.$eol;
$headers .= "--".$separator."--";
// 
 
// main header (multipart mandatory)
$headers2  = "From: ".$from.$eol;
$headers2 .= "MIME-Version: 1.0".$eol; 
$headers2 .= "Content-Type: multipart/mixed; boundary=\"".$separator2."\"".$eol.$eol; 
$headers2 .= "Content-Transfer-Encoding: 7bit".$eol;
$headers2 .= "This is a MIME encoded message.".$eol.$eol;
 
// message
$headers2 .= "--".$separator2.$eol;
$headers2 .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
$headers2 .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
$headers2 .= $messageowner.$eol.$eol;
 
// attachment
$headers2 .= "--".$separator2.$eol;
$headers2 .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 
$headers2 .= "Content-Transfer-Encoding: base64".$eol;
$headers2 .= "Content-Disposition: attachment".$eol.$eol;
$headers2 .= $attachment.$eol.$eol;
$headers2 .= "--".$separator2."--";


$headers2  = "From: ".$from.$eol;
$headers2 .= "MIME-Version: 1.0".$eol; 
$headers2 .= "Content-Type: multipart/mixed; boundary=\"".$separator2."\"".$eol.$eol; 
$headers2 .= "Content-Transfer-Encoding: 7bit".$eol;
$headers2 .= "This is a MIME encoded message.".$eol.$eol;
 
// message
$headers2 .= "--".$separator2.$eol;
$headers2 .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
$headers2 .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
$headers2 .= $messageowner.$eol.$eol;
 
// attachment
$headers2 .= "--".$separator2.$eol;
$headers2 .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 
$headers2 .= "Content-Transfer-Encoding: base64".$eol;
$headers2 .= "Content-Disposition: attachment".$eol.$eol;
$headers2 .= $attachment.$eol.$eol;
$headers2 .= "--".$separator2."--";
 
// send message
mail($to, $subject, "", $headers);

mail($toowner, $subjectowner, "", $headers2);
}

batgraph($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$today);
//exporttoxml($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$name,$surname,$companyname,$position,$businessarea,$employees,$address,$city,$email,$zip,$telephone,$fax,$today);
exporttoxmldom($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$name,$surname,$companyname,$position,$businessarea,$employees,$address,$city,$email,$zip,$telephone,$fax,$today);
sendemail($cat1,$cat2,$cat3,$cat4,$cat5,$cat6,$cat7,$cat8,$cat9,$cat10,$name,$surname,$companyname,$position,$businessarea,$employees,$address,$city,$email,$zip,$telephone,$fax,$today,$pdfdoc);
?>
</body></html>