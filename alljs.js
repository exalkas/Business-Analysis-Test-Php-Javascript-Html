var currentLayer = 'page1';
//document.getElementById('NAME').focus();
	function checkform(theform){
		var why = "";
		if(theform.txtInput.value == ""){
			why += "- Security code should not be empty.\n";
		}
		if(theform.txtInput.value != ""){
			if(ValidCaptcha(theform.txtInput.value) == false){
				why += "- Security code did not match.\n";
			}
		}
		if(why != ""){
			alert(why);
			return false;
		}
else {return true;}
	}
 
// Validate the Entered input aganist the generated security code function   
function ValidCaptcha(){
	var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
	var str2 = removeSpaces(document.getElementById('txtInput').value);
	if (str1 == str2){
		return true;	
	}else{
		return false;
	}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string){
	return string.split(' ').join('');
}



//  END OF CAPTCHA

function testForEnter() 
{    
	if (event.keyCode == 13) 
	{        
		event.cancelBubble = true;
		event.returnValue = false;
         }
} 

function showLayer2(){

if (validate())
{
if (checkform(document.form1)) {
	hideLayer('page1');
	document.getElementById('page2').style.visibility = 'visible';
	currentLayer = 'page2';
	}
	else
	{return false;}
}
else
{return false;}
}

function showLayer3(){
if ((!document.form1.RadioGroup1[0].checked  && !document.form1.RadioGroup1[1].checked  && !document.form1.RadioGroup1[2].checked)
 || (!document.form1.RadioGroup2[0].checked  && !document.form1.RadioGroup2[1].checked  && !document.form1.RadioGroup2[2].checked) 
 || (!document.form1.RadioGroup3[0].checked  && !document.form1.RadioGroup3[1].checked  && !document.form1.RadioGroup3[2].checked) 
 || (!document.form1.RadioGroup4[0].checked  && !document.form1.RadioGroup4[1].checked  && !document.form1.RadioGroup4[2].checked)
 || (!document.form1.RadioGroup5[0].checked  && !document.form1.RadioGroup5[1].checked  && !document.form1.RadioGroup5[2].checked)
 || (!document.form1.RadioGroup6[0].checked  && !document.form1.RadioGroup6[1].checked  && !document.form1.RadioGroup6[2].checked)
 || (!document.form1.RadioGroup7[0].checked  && !document.form1.RadioGroup7[1].checked  && !document.form1.RadioGroup7[2].checked)
 || (!document.form1.RadioGroup8[0].checked  && !document.form1.RadioGroup8[1].checked  && !document.form1.RadioGroup8[2].checked)
 || (!document.form1.RadioGroup9[0].checked  && !document.form1.RadioGroup9[1].checked  && !document.form1.RadioGroup9[2].checked)
 || (!document.form1.RadioGroup10[0].checked  && !document.form1.RadioGroup10[1].checked  && !document.form1.RadioGroup10[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page2');
	document.getElementById('page3').style.visibility = 'visible';
	currentLayer = 'page3';}
}

function showLayer4(){
if ((!document.form1.RadioGroup11[0].checked  && !document.form1.RadioGroup11[1].checked  && !document.form1.RadioGroup11[2].checked)
 || (!document.form1.RadioGroup12[0].checked  && !document.form1.RadioGroup12[1].checked  && !document.form1.RadioGroup12[2].checked) 
 || (!document.form1.RadioGroup13[0].checked  && !document.form1.RadioGroup13[1].checked  && !document.form1.RadioGroup13[2].checked) 
 || (!document.form1.RadioGroup14[0].checked  && !document.form1.RadioGroup14[1].checked  && !document.form1.RadioGroup14[2].checked)
 || (!document.form1.RadioGroup15[0].checked  && !document.form1.RadioGroup15[1].checked  && !document.form1.RadioGroup15[2].checked)
 || (!document.form1.RadioGroup16[0].checked  && !document.form1.RadioGroup16[1].checked  && !document.form1.RadioGroup16[2].checked)
 || (!document.form1.RadioGroup17[0].checked  && !document.form1.RadioGroup17[1].checked  && !document.form1.RadioGroup17[2].checked)
 || (!document.form1.RadioGroup18[0].checked  && !document.form1.RadioGroup18[1].checked  && !document.form1.RadioGroup18[2].checked)
 || (!document.form1.RadioGroup19[0].checked  && !document.form1.RadioGroup19[1].checked  && !document.form1.RadioGroup19[2].checked)
 || (!document.form1.RadioGroup20[0].checked  && !document.form1.RadioGroup20[1].checked  && !document.form1.RadioGroup20[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page3');
	document.getElementById('page4').style.visibility = 'visible';
	currentLayer = 'page4';}
}

function showLayer5(){
if ((!document.form1.RadioGroup21[0].checked  && !document.form1.RadioGroup21[1].checked  && !document.form1.RadioGroup21[2].checked)
 || (!document.form1.RadioGroup22[0].checked  && !document.form1.RadioGroup22[1].checked  && !document.form1.RadioGroup22[2].checked) 
 || (!document.form1.RadioGroup23[0].checked  && !document.form1.RadioGroup23[1].checked  && !document.form1.RadioGroup23[2].checked) 
 || (!document.form1.RadioGroup24[0].checked  && !document.form1.RadioGroup24[1].checked  && !document.form1.RadioGroup24[2].checked)
 || (!document.form1.RadioGroup25[0].checked  && !document.form1.RadioGroup25[1].checked  && !document.form1.RadioGroup25[2].checked)
 || (!document.form1.RadioGroup26[0].checked  && !document.form1.RadioGroup26[1].checked  && !document.form1.RadioGroup26[2].checked)
 || (!document.form1.RadioGroup27[0].checked  && !document.form1.RadioGroup27[1].checked  && !document.form1.RadioGroup27[2].checked)
 || (!document.form1.RadioGroup28[0].checked  && !document.form1.RadioGroup28[1].checked  && !document.form1.RadioGroup28[2].checked)
 || (!document.form1.RadioGroup29[0].checked  && !document.form1.RadioGroup29[1].checked  && !document.form1.RadioGroup29[2].checked)
 || (!document.form1.RadioGroup30[0].checked  && !document.form1.RadioGroup30[1].checked  && !document.form1.RadioGroup30[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page4');
	document.getElementById('page5').style.visibility = 'visible';
	currentLayer = 'page5';}
}

function showLayer6(){
if ((!document.form1.RadioGroup31[0].checked  && !document.form1.RadioGroup31[1].checked  && !document.form1.RadioGroup31[2].checked)
 || (!document.form1.RadioGroup32[0].checked  && !document.form1.RadioGroup32[1].checked  && !document.form1.RadioGroup32[2].checked) 
 || (!document.form1.RadioGroup33[0].checked  && !document.form1.RadioGroup33[1].checked  && !document.form1.RadioGroup33[2].checked) 
 || (!document.form1.RadioGroup34[0].checked  && !document.form1.RadioGroup34[1].checked  && !document.form1.RadioGroup34[2].checked)
 || (!document.form1.RadioGroup35[0].checked  && !document.form1.RadioGroup35[1].checked  && !document.form1.RadioGroup35[2].checked)
 || (!document.form1.RadioGroup36[0].checked  && !document.form1.RadioGroup36[1].checked  && !document.form1.RadioGroup36[2].checked)
 || (!document.form1.RadioGroup37[0].checked  && !document.form1.RadioGroup37[1].checked  && !document.form1.RadioGroup37[2].checked)
 || (!document.form1.RadioGroup38[0].checked  && !document.form1.RadioGroup38[1].checked  && !document.form1.RadioGroup38[2].checked)
 || (!document.form1.RadioGroup39[0].checked  && !document.form1.RadioGroup39[1].checked  && !document.form1.RadioGroup39[2].checked)
 || (!document.form1.RadioGroup40[0].checked  && !document.form1.RadioGroup40[1].checked  && !document.form1.RadioGroup40[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page5');
	document.getElementById('page6').style.visibility = 'visible';
	currentLayer = 'page6';}
}

function showLayer7(){
if ((!document.form1.RadioGroup41[0].checked  && !document.form1.RadioGroup41[1].checked  && !document.form1.RadioGroup41[2].checked)
 || (!document.form1.RadioGroup42[0].checked  && !document.form1.RadioGroup42[1].checked  && !document.form1.RadioGroup42[2].checked) 
 || (!document.form1.RadioGroup43[0].checked  && !document.form1.RadioGroup43[1].checked  && !document.form1.RadioGroup43[2].checked) 
 || (!document.form1.RadioGroup44[0].checked  && !document.form1.RadioGroup44[1].checked  && !document.form1.RadioGroup44[2].checked)
 || (!document.form1.RadioGroup45[0].checked  && !document.form1.RadioGroup45[1].checked  && !document.form1.RadioGroup45[2].checked)
 || (!document.form1.RadioGroup46[0].checked  && !document.form1.RadioGroup46[1].checked  && !document.form1.RadioGroup46[2].checked)
 || (!document.form1.RadioGroup47[0].checked  && !document.form1.RadioGroup47[1].checked  && !document.form1.RadioGroup47[2].checked)
 || (!document.form1.RadioGroup48[0].checked  && !document.form1.RadioGroup48[1].checked  && !document.form1.RadioGroup48[2].checked)
 || (!document.form1.RadioGroup49[0].checked  && !document.form1.RadioGroup49[1].checked  && !document.form1.RadioGroup49[2].checked)
 || (!document.form1.RadioGroup50[0].checked  && !document.form1.RadioGroup50[1].checked  && !document.form1.RadioGroup50[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page6');
	document.getElementById('page7').style.visibility = 'visible';
	currentLayer = 'page7';}
}

function showLayer8(){
if ((!document.form1.RadioGroup51[0].checked  && !document.form1.RadioGroup51[1].checked  && !document.form1.RadioGroup51[2].checked)
 || (!document.form1.RadioGroup52[0].checked  && !document.form1.RadioGroup52[1].checked  && !document.form1.RadioGroup52[2].checked) 
 || (!document.form1.RadioGroup53[0].checked  && !document.form1.RadioGroup53[1].checked  && !document.form1.RadioGroup53[2].checked) 
 || (!document.form1.RadioGroup54[0].checked  && !document.form1.RadioGroup54[1].checked  && !document.form1.RadioGroup54[2].checked)
 || (!document.form1.RadioGroup55[0].checked  && !document.form1.RadioGroup55[1].checked  && !document.form1.RadioGroup55[2].checked)
 || (!document.form1.RadioGroup56[0].checked  && !document.form1.RadioGroup56[1].checked  && !document.form1.RadioGroup56[2].checked)
 || (!document.form1.RadioGroup57[0].checked  && !document.form1.RadioGroup57[1].checked  && !document.form1.RadioGroup57[2].checked)
 || (!document.form1.RadioGroup58[0].checked  && !document.form1.RadioGroup58[1].checked  && !document.form1.RadioGroup58[2].checked)
 || (!document.form1.RadioGroup59[0].checked  && !document.form1.RadioGroup59[1].checked  && !document.form1.RadioGroup59[2].checked)
 || (!document.form1.RadioGroup60[0].checked  && !document.form1.RadioGroup60[1].checked  && !document.form1.RadioGroup60[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page7');
	document.getElementById('page8').style.visibility = 'visible';
	currentLayer = 'page8';}
}

function showLayer9(){
if ((!document.form1.RadioGroup61[0].checked  && !document.form1.RadioGroup61[1].checked  && !document.form1.RadioGroup61[2].checked)
 || (!document.form1.RadioGroup62[0].checked  && !document.form1.RadioGroup62[1].checked  && !document.form1.RadioGroup62[2].checked) 
 || (!document.form1.RadioGroup63[0].checked  && !document.form1.RadioGroup63[1].checked  && !document.form1.RadioGroup63[2].checked) 
 || (!document.form1.RadioGroup64[0].checked  && !document.form1.RadioGroup64[1].checked  && !document.form1.RadioGroup64[2].checked)
 || (!document.form1.RadioGroup65[0].checked  && !document.form1.RadioGroup65[1].checked  && !document.form1.RadioGroup65[2].checked)
 || (!document.form1.RadioGroup66[0].checked  && !document.form1.RadioGroup66[1].checked  && !document.form1.RadioGroup66[2].checked)
 || (!document.form1.RadioGroup67[0].checked  && !document.form1.RadioGroup67[1].checked  && !document.form1.RadioGroup67[2].checked)
 || (!document.form1.RadioGroup68[0].checked  && !document.form1.RadioGroup68[1].checked  && !document.form1.RadioGroup68[2].checked)
 || (!document.form1.RadioGroup69[0].checked  && !document.form1.RadioGroup69[1].checked  && !document.form1.RadioGroup69[2].checked)
 || (!document.form1.RadioGroup70[0].checked  && !document.form1.RadioGroup70[1].checked  && !document.form1.RadioGroup70[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page8');
	document.getElementById('page9').style.visibility = 'visible';
	currentLayer = 'page9';}
}

function showLayer10(){
if ((!document.form1.RadioGroup71[0].checked  && !document.form1.RadioGroup71[1].checked  && !document.form1.RadioGroup71[2].checked)
 || (!document.form1.RadioGroup72[0].checked  && !document.form1.RadioGroup72[1].checked  && !document.form1.RadioGroup72[2].checked) 
 || (!document.form1.RadioGroup73[0].checked  && !document.form1.RadioGroup73[1].checked  && !document.form1.RadioGroup73[2].checked) 
 || (!document.form1.RadioGroup74[0].checked  && !document.form1.RadioGroup74[1].checked  && !document.form1.RadioGroup74[2].checked)
 || (!document.form1.RadioGroup75[0].checked  && !document.form1.RadioGroup75[1].checked  && !document.form1.RadioGroup75[2].checked)
 || (!document.form1.RadioGroup76[0].checked  && !document.form1.RadioGroup76[1].checked  && !document.form1.RadioGroup76[2].checked)
 || (!document.form1.RadioGroup77[0].checked  && !document.form1.RadioGroup77[1].checked  && !document.form1.RadioGroup77[2].checked)
 || (!document.form1.RadioGroup78[0].checked  && !document.form1.RadioGroup78[1].checked  && !document.form1.RadioGroup78[2].checked)
 || (!document.form1.RadioGroup79[0].checked  && !document.form1.RadioGroup79[1].checked  && !document.form1.RadioGroup79[2].checked)
 || (!document.form1.RadioGroup80[0].checked  && !document.form1.RadioGroup80[1].checked  && !document.form1.RadioGroup80[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page9');
	document.getElementById('page10').style.visibility = 'visible';
	currentLayer = 'page10';}
}

function showLayer11(){
if ((!document.form1.RadioGroup81[0].checked  && !document.form1.RadioGroup81[1].checked  && !document.form1.RadioGroup81[2].checked)
 || (!document.form1.RadioGroup82[0].checked  && !document.form1.RadioGroup82[1].checked  && !document.form1.RadioGroup82[2].checked) 
 || (!document.form1.RadioGroup83[0].checked  && !document.form1.RadioGroup83[1].checked  && !document.form1.RadioGroup83[2].checked) 
 || (!document.form1.RadioGroup84[0].checked  && !document.form1.RadioGroup84[1].checked  && !document.form1.RadioGroup84[2].checked)
 || (!document.form1.RadioGroup85[0].checked  && !document.form1.RadioGroup85[1].checked  && !document.form1.RadioGroup85[2].checked)
 || (!document.form1.RadioGroup86[0].checked  && !document.form1.RadioGroup86[1].checked  && !document.form1.RadioGroup86[2].checked)
 || (!document.form1.RadioGroup87[0].checked  && !document.form1.RadioGroup87[1].checked  && !document.form1.RadioGroup87[2].checked)
 || (!document.form1.RadioGroup88[0].checked  && !document.form1.RadioGroup88[1].checked  && !document.form1.RadioGroup88[2].checked)
 || (!document.form1.RadioGroup89[0].checked  && !document.form1.RadioGroup89[1].checked  && !document.form1.RadioGroup89[2].checked)
 || (!document.form1.RadioGroup90[0].checked  && !document.form1.RadioGroup90[1].checked  && !document.form1.RadioGroup90[2].checked)) 
{alert("Please answer all questions in this part before continuing");}
else {hideLayer('page10');
	document.getElementById('page11').style.visibility = 'visible';
	currentLayer = 'page11';}
}

function showLayer12(){
if ((!document.form1.RadioGroup91[0].checked  && !document.form1.RadioGroup91[1].checked  && !document.form1.RadioGroup91[2].checked)
 || (!document.form1.RadioGroup92[0].checked  && !document.form1.RadioGroup92[1].checked  && !document.form1.RadioGroup92[2].checked) 
 || (!document.form1.RadioGroup93[0].checked  && !document.form1.RadioGroup93[1].checked  && !document.form1.RadioGroup93[2].checked) 
 || (!document.form1.RadioGroup94[0].checked  && !document.form1.RadioGroup94[1].checked  && !document.form1.RadioGroup94[2].checked)
 || (!document.form1.RadioGroup95[0].checked  && !document.form1.RadioGroup95[1].checked  && !document.form1.RadioGroup95[2].checked)
 || (!document.form1.RadioGroup96[0].checked  && !document.form1.RadioGroup96[1].checked  && !document.form1.RadioGroup96[2].checked)
 || (!document.form1.RadioGroup97[0].checked  && !document.form1.RadioGroup97[1].checked  && !document.form1.RadioGroup97[2].checked)
 || (!document.form1.RadioGroup98[0].checked  && !document.form1.RadioGroup98[1].checked  && !document.form1.RadioGroup98[2].checked)
 || (!document.form1.RadioGroup99[0].checked  && !document.form1.RadioGroup99[1].checked  && !document.form1.RadioGroup99[2].checked)
 || (!document.form1.RadioGroup100[0].checked  && !document.form1.RadioGroup100[1].checked  && !document.form1.RadioGroup100[2].checked)) 
{alert("Please answer all questions in this part before continuing");
return false;}
}

function showLayer(lyr){
	hideLayer(currentLayer);
	document.getElementById(lyr).style.visibility = 'visible';
	currentLayer = lyr;
}

function hideLayer(lyr){
	document.getElementById(lyr).style.visibility = 'hidden';
}

function showValues(form){
	var values = '';
	var len = form.length - 1; //Leave off Submit Button
	for(i=0; i<len; i++){
		if(form[i].id.indexOf("C")!=-1||form[i].id.indexOf("B")!=-1)//Skip Continue and Back Buttons
			continue;
		values += form[i].id;
		values += ': ';
		values += form[i].value;
		values += '\n';
	}
	alert(values);
}

function validate()
{

   if( document.form1.Name.value == "" )
   {
     alert( "Please provide your name!" );
     document.form1.Name.focus() ;
     return false;
   }

   if( document.form1.Surname.value == "" )
   {
     alert( "Please provide your Surname!" );
     document.form1.Surname.focus() ;
     return false;
   }

   if( document.form1.Email.value == "" )
   {
     alert( "Please provide your Email!" );
     document.form1.Email.focus() ;
     return false;
   }
   
   if( document.form1.Telephone.value == "" || isNaN(document.form1.Telephone.value) ||
document.form1.Telephone.value.length <= 5)
   {
     alert( "Please enter a valid telephone!" );
     document.form1.Telephone.focus() ;
     return false;
   }

 var emailID = document.form1.Email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID")
       document.form1.Email.focus() ;
       return false;
   }

   return true;
}

function validateEmail()
{
   var emailID = document.form1.Email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID")
       document.form1.Email.focus() ;
       return false;
   }
   return true;
}

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","xmls/qs.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

function fillin()
{
q1=xmlDoc.getElementsByTagName("q001")[0].childNodes[0].nodeValue;
document.getElementById("p001").innerHTML=q1;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a1_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup1\" value=\"Yes\" id=\"RadioGroup1_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a1_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup1\" value=\"Maybe\" id=\"RadioGroup1_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a1_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup1\" value=\"No\" id=\"RadioGroup1_2\" \\>";

q2=xmlDoc.getElementsByTagName("q002")[0].childNodes[0].nodeValue;
document.getElementById("p002").innerHTML=q2;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a2_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup2\" value=\"Yes\" id=\"RadioGroup2_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a2_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup2\" value=\"Maybe\" id=\"RadioGroup2_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a2_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup2\" value=\"No\" id=\"RadioGroup2_2\" \\>";

q3=xmlDoc.getElementsByTagName("q003")[0].childNodes[0].nodeValue;
document.getElementById("p003").innerHTML=q3;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a3_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup3\" value=\"Yes\" id=\"RadioGroup3_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a3_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup3\" value=\"Maybe\" id=\"RadioGroup3_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a3_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup3\" value=\"No\" id=\"RadioGroup3_2\" \\>";

q4=xmlDoc.getElementsByTagName("q004")[0].childNodes[0].nodeValue;
document.getElementById("p004").innerHTML=q4;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a4_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup4\" value=\"Yes\" id=\"RadioGroup4_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a4_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup4\" value=\"Maybe\" id=\"RadioGroup4_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a4_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup4\" value=\"No\" id=\"RadioGroup4_2\" \\>";

q5=xmlDoc.getElementsByTagName("q005")[0].childNodes[0].nodeValue;
document.getElementById("p005").innerHTML=q5;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a5_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup5\" value=\"Yes\" id=\"RadioGroup5_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a5_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup5\" value=\"Maybe\" id=\"RadioGroup5_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a5_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup5\" value=\"No\" id=\"RadioGroup5_2\" \\>";

q6=xmlDoc.getElementsByTagName("q006")[0].childNodes[0].nodeValue;
document.getElementById("p006").innerHTML=q6;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a6_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup6\" value=\"Yes\" id=\"RadioGroup6_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a6_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup6\" value=\"Maybe\" id=\"RadioGroup6_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a6_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup6\" value=\"No\" id=\"RadioGroup6_2\" \\>";

q7=xmlDoc.getElementsByTagName("q007")[0].childNodes[0].nodeValue;
document.getElementById("p007").innerHTML=q7;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a7_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup7\" value=\"Yes\" id=\"RadioGroup7_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a7_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup7\" value=\"Maybe\" id=\"RadioGroup7_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a7_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup7\" value=\"No\" id=\"RadioGroup7_2\" \\>";

q8=xmlDoc.getElementsByTagName("q008")[0].childNodes[0].nodeValue;
document.getElementById("p008").innerHTML=q8;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a8_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup8\" value=\"Yes\" id=\"RadioGroup8_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a8_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup8\" value=\"Maybe\" id=\"RadioGroup8_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a8_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup8\" value=\"No\" id=\"RadioGroup8_2\" \\>";

q9=xmlDoc.getElementsByTagName("q009")[0].childNodes[0].nodeValue;
document.getElementById("p009").innerHTML=q9;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a9_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup9\" value=\"Yes\" id=\"RadioGroup9_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a9_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup9\" value=\"Maybe\" id=\"RadioGroup9_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a9_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup9\" value=\"No\" id=\"RadioGroup9_2\" \\>";

q10=xmlDoc.getElementsByTagName("q010")[0].childNodes[0].nodeValue;
document.getElementById("p010").innerHTML=q10;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a10_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup10\" value=\"Yes\" id=\"RadioGroup10_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a10_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup10\" value=\"Maybe\" id=\"RadioGroup10_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a10_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup10\" value=\"No\" id=\"RadioGroup10_2\" \\>";

q11=xmlDoc.getElementsByTagName("q011")[0].childNodes[0].nodeValue;
document.getElementById("p011").innerHTML=q11;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a11_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup11\" value=\"Yes\" id=\"RadioGroup11_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a11_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup11\" value=\"Maybe\" id=\"RadioGroup11_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a11_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup11\" value=\"No\" id=\"RadioGroup11_2\" \\>";

q12=xmlDoc.getElementsByTagName("q012")[0].childNodes[0].nodeValue;
document.getElementById("p012").innerHTML=q12;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a12_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup12\" value=\"Yes\" id=\"RadioGroup12_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a12_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup12\" value=\"Maybe\" id=\"RadioGroup12_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a12_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup12\" value=\"No\" id=\"RadioGroup12_2\" \\>";

q13=xmlDoc.getElementsByTagName("q013")[0].childNodes[0].nodeValue;
document.getElementById("p013").innerHTML=q13;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a13_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup13\" value=\"Yes\" id=\"RadioGroup13_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a13_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup13\" value=\"Maybe\" id=\"RadioGroup13_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a13_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup13\" value=\"No\" id=\"RadioGroup13_2\" \\>";

q14=xmlDoc.getElementsByTagName("q014")[0].childNodes[0].nodeValue;
document.getElementById("p014").innerHTML=q14;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a14_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup14\" value=\"Yes\" id=\"RadioGroup14_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a14_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup14\" value=\"Maybe\" id=\"RadioGroup14_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a14_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup14\" value=\"No\" id=\"RadioGroup14_2\" \\>";

q15=xmlDoc.getElementsByTagName("q015")[0].childNodes[0].nodeValue;
document.getElementById("p015").innerHTML=q15;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a15_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup15\" value=\"Yes\" id=\"RadioGroup15_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a15_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup15\" value=\"Maybe\" id=\"RadioGroup15_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a15_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup15\" value=\"No\" id=\"RadioGroup15_2\" \\>";

q16=xmlDoc.getElementsByTagName("q016")[0].childNodes[0].nodeValue;
document.getElementById("p016").innerHTML=q16;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a16_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup16\" value=\"Yes\" id=\"RadioGroup16_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a16_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup16\" value=\"Maybe\" id=\"RadioGroup16_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a16_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup16\" value=\"No\" id=\"RadioGroup16_2\" \\>";

q17=xmlDoc.getElementsByTagName("q017")[0].childNodes[0].nodeValue;
document.getElementById("p017").innerHTML=q17;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a17_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup17\" value=\"Yes\" id=\"RadioGroup17_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a17_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup17\" value=\"Maybe\" id=\"RadioGroup17_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a17_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup17\" value=\"No\" id=\"RadioGroup17_2\" \\>";

q18=xmlDoc.getElementsByTagName("q018")[0].childNodes[0].nodeValue;
document.getElementById("p018").innerHTML=q18;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a18_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup18\" value=\"Yes\" id=\"RadioGroup18_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a18_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup18\" value=\"Maybe\" id=\"RadioGroup18_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a18_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup18\" value=\"No\" id=\"RadioGroup18_2\" \\>";

q19=xmlDoc.getElementsByTagName("q019")[0].childNodes[0].nodeValue;
document.getElementById("p019").innerHTML=q19;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a19_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup19\" value=\"Yes\" id=\"RadioGroup19_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a19_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup19\" value=\"Maybe\" id=\"RadioGroup19_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a19_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup19\" value=\"No\" id=\"RadioGroup19_2\" \\>";

q20=xmlDoc.getElementsByTagName("q020")[0].childNodes[0].nodeValue;
document.getElementById("p020").innerHTML=q20;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a20_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup20\" value=\"Yes\" id=\"RadioGroup20_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a20_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup20\" value=\"Maybe\" id=\"RadioGroup20_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a20_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup20\" value=\"No\" id=\"RadioGroup20_2\" \\>";

q21=xmlDoc.getElementsByTagName("q021")[0].childNodes[0].nodeValue;
document.getElementById("p021").innerHTML=q21;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a21_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup21\" value=\"Yes\" id=\"RadioGroup21_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a21_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup21\" value=\"Maybe\" id=\"RadioGroup21_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a21_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup21\" value=\"No\" id=\"RadioGroup21_2\" \\>";

q22=xmlDoc.getElementsByTagName("q022")[0].childNodes[0].nodeValue;
document.getElementById("p022").innerHTML=q22;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a22_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup22\" value=\"Yes\" id=\"RadioGroup22_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a22_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup22\" value=\"Maybe\" id=\"RadioGroup22_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a22_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup22\" value=\"No\" id=\"RadioGroup22_2\" \\>";

q23=xmlDoc.getElementsByTagName("q023")[0].childNodes[0].nodeValue;
document.getElementById("p023").innerHTML=q23;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a23_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup23\" value=\"Yes\" id=\"RadioGroup23_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a23_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup23\" value=\"Maybe\" id=\"RadioGroup23_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a23_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup23\" value=\"No\" id=\"RadioGroup23_2\" \\>";

q24=xmlDoc.getElementsByTagName("q024")[0].childNodes[0].nodeValue;
document.getElementById("p024").innerHTML=q24;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a24_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup24\" value=\"Yes\" id=\"RadioGroup24_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a24_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup24\" value=\"Maybe\" id=\"RadioGroup24_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a24_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup24\" value=\"No\" id=\"RadioGroup24_2\" \\>";

q25=xmlDoc.getElementsByTagName("q025")[0].childNodes[0].nodeValue;
document.getElementById("p025").innerHTML=q25;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a25_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup25\" value=\"Yes\" id=\"RadioGroup25_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a25_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup25\" value=\"Maybe\" id=\"RadioGroup25_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a25_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup25\" value=\"No\" id=\"RadioGroup25_2\" \\>";

q26=xmlDoc.getElementsByTagName("q026")[0].childNodes[0].nodeValue;
document.getElementById("p026").innerHTML=q26;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a26_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup26\" value=\"Yes\" id=\"RadioGroup26_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a26_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup26\" value=\"Maybe\" id=\"RadioGroup26_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a26_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup26\" value=\"No\" id=\"RadioGroup26_2\" \\>";

q27=xmlDoc.getElementsByTagName("q027")[0].childNodes[0].nodeValue;
document.getElementById("p027").innerHTML=q27;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a27_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup27\" value=\"Yes\" id=\"RadioGroup27_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a27_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup27\" value=\"Maybe\" id=\"RadioGroup27_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a27_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup27\" value=\"No\" id=\"RadioGroup27_2\" \\>";

q28=xmlDoc.getElementsByTagName("q028")[0].childNodes[0].nodeValue;
document.getElementById("p028").innerHTML=q28;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a28_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup28\" value=\"Yes\" id=\"RadioGroup28_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a28_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup28\" value=\"Maybe\" id=\"RadioGroup28_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a28_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup28\" value=\"No\" id=\"RadioGroup28_2\" \\>";

q29=xmlDoc.getElementsByTagName("q029")[0].childNodes[0].nodeValue;
document.getElementById("p029").innerHTML=q29;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a29_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup29\" value=\"Yes\" id=\"RadioGroup29_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a29_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup29\" value=\"Maybe\" id=\"RadioGroup29_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a29_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup29\" value=\"No\" id=\"RadioGroup29_2\" \\>";

q30=xmlDoc.getElementsByTagName("q030")[0].childNodes[0].nodeValue;
document.getElementById("p030").innerHTML=q30;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a30_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup30\" value=\"Yes\" id=\"RadioGroup30_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a30_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup30\" value=\"Maybe\" id=\"RadioGroup30_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a30_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup30\" value=\"No\" id=\"RadioGroup30_2\" \\>";

q31=xmlDoc.getElementsByTagName("q031")[0].childNodes[0].nodeValue;
document.getElementById("p031").innerHTML=q31;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a31_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup31\" value=\"Yes\" id=\"RadioGroup31_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a31_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup31\" value=\"Maybe\" id=\"RadioGroup31_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a31_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup31\" value=\"No\" id=\"RadioGroup31_2\" \\>";

q32=xmlDoc.getElementsByTagName("q032")[0].childNodes[0].nodeValue;
document.getElementById("p032").innerHTML=q32;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a32_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup32\" value=\"Yes\" id=\"RadioGroup32_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a32_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup32\" value=\"Maybe\" id=\"RadioGroup32_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a32_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup32\" value=\"No\" id=\"RadioGroup32_2\" \\>";

q33=xmlDoc.getElementsByTagName("q033")[0].childNodes[0].nodeValue;
document.getElementById("p033").innerHTML=q33;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a33_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup33\" value=\"Yes\" id=\"RadioGroup33_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a33_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup33\" value=\"Maybe\" id=\"RadioGroup33_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a33_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup33\" value=\"No\" id=\"RadioGroup33_2\" \\>";

q34=xmlDoc.getElementsByTagName("q034")[0].childNodes[0].nodeValue;
document.getElementById("p034").innerHTML=q34;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a34_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup34\" value=\"Yes\" id=\"RadioGroup34_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a34_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup34\" value=\"Maybe\" id=\"RadioGroup34_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a34_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup34\" value=\"No\" id=\"RadioGroup34_2\" \\>";

q35=xmlDoc.getElementsByTagName("q035")[0].childNodes[0].nodeValue;
document.getElementById("p035").innerHTML=q35;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a35_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup35\" value=\"Yes\" id=\"RadioGroup35_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a35_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup35\" value=\"Maybe\" id=\"RadioGroup35_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a35_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup35\" value=\"No\" id=\"RadioGroup35_2\" \\>";

q36=xmlDoc.getElementsByTagName("q036")[0].childNodes[0].nodeValue;
document.getElementById("p036").innerHTML=q36;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a36_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup36\" value=\"Yes\" id=\"RadioGroup36_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a36_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup36\" value=\"Maybe\" id=\"RadioGroup36_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a36_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup36\" value=\"No\" id=\"RadioGroup36_2\" \\>";

q37=xmlDoc.getElementsByTagName("q037")[0].childNodes[0].nodeValue;
document.getElementById("p037").innerHTML=q37;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a37_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup37\" value=\"Yes\" id=\"RadioGroup37_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a37_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup37\" value=\"Maybe\" id=\"RadioGroup37_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a37_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup37\" value=\"No\" id=\"RadioGroup37_2\" \\>";

q38=xmlDoc.getElementsByTagName("q038")[0].childNodes[0].nodeValue;
document.getElementById("p038").innerHTML=q38;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a38_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup38\" value=\"Yes\" id=\"RadioGroup38_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a38_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup38\" value=\"Maybe\" id=\"RadioGroup38_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a38_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup38\" value=\"No\" id=\"RadioGroup38_2\" \\>";

q39=xmlDoc.getElementsByTagName("q039")[0].childNodes[0].nodeValue;
document.getElementById("p039").innerHTML=q39;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a39_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup39\" value=\"Yes\" id=\"RadioGroup39_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a39_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup39\" value=\"Maybe\" id=\"RadioGroup39_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a39_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup39\" value=\"No\" id=\"RadioGroup39_2\" \\>";

q40=xmlDoc.getElementsByTagName("q040")[0].childNodes[0].nodeValue;
document.getElementById("p040").innerHTML=q40;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a40_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup40\" value=\"Yes\" id=\"RadioGroup40_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a40_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup40\" value=\"Maybe\" id=\"RadioGroup40_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a40_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup40\" value=\"No\" id=\"RadioGroup40_2\" \\>";

q41=xmlDoc.getElementsByTagName("q041")[0].childNodes[0].nodeValue;
document.getElementById("p041").innerHTML=q41;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a41_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup41\" value=\"Yes\" id=\"RadioGroup41_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a41_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup41\" value=\"Maybe\" id=\"RadioGroup41_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a41_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup41\" value=\"No\" id=\"RadioGroup41_2\" \\>";

q42=xmlDoc.getElementsByTagName("q042")[0].childNodes[0].nodeValue;
document.getElementById("p042").innerHTML=q42;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a42_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup42\" value=\"Yes\" id=\"RadioGroup42_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a42_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup42\" value=\"Maybe\" id=\"RadioGroup42_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a42_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup42\" value=\"No\" id=\"RadioGroup42_2\" \\>";

q43=xmlDoc.getElementsByTagName("q043")[0].childNodes[0].nodeValue;
document.getElementById("p043").innerHTML=q43;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a43_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup43\" value=\"Yes\" id=\"RadioGroup43_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a43_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup43\" value=\"Maybe\" id=\"RadioGroup43_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a43_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup43\" value=\"No\" id=\"RadioGroup43_2\" \\>";

q44=xmlDoc.getElementsByTagName("q044")[0].childNodes[0].nodeValue;
document.getElementById("p044").innerHTML=q44;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a44_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup44\" value=\"Yes\" id=\"RadioGroup44_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a44_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup44\" value=\"Maybe\" id=\"RadioGroup44_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a44_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup44\" value=\"No\" id=\"RadioGroup44_2\" \\>";

q45=xmlDoc.getElementsByTagName("q045")[0].childNodes[0].nodeValue;
document.getElementById("p045").innerHTML=q45;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a45_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup45\" value=\"Yes\" id=\"RadioGroup45_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a45_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup45\" value=\"Maybe\" id=\"RadioGroup45_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a45_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup45\" value=\"No\" id=\"RadioGroup45_2\" \\>";

q46=xmlDoc.getElementsByTagName("q046")[0].childNodes[0].nodeValue;
document.getElementById("p046").innerHTML=q46;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a46_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup46\" value=\"Yes\" id=\"RadioGroup46_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a46_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup46\" value=\"Maybe\" id=\"RadioGroup46_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a46_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup46\" value=\"No\" id=\"RadioGroup46_2\" \\>";

q47=xmlDoc.getElementsByTagName("q047")[0].childNodes[0].nodeValue;
document.getElementById("p047").innerHTML=q47;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a47_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup47\" value=\"Yes\" id=\"RadioGroup47_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a47_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup47\" value=\"Maybe\" id=\"RadioGroup47_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a47_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup47\" value=\"No\" id=\"RadioGroup47_2\" \\>";

q48=xmlDoc.getElementsByTagName("q048")[0].childNodes[0].nodeValue;
document.getElementById("p048").innerHTML=q48;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a48_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup48\" value=\"Yes\" id=\"RadioGroup48_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a48_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup48\" value=\"Maybe\" id=\"RadioGroup48_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a48_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup48\" value=\"No\" id=\"RadioGroup48_2\" \\>";

q49=xmlDoc.getElementsByTagName("q049")[0].childNodes[0].nodeValue;
document.getElementById("p049").innerHTML=q49;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a49_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup49\" value=\"Yes\" id=\"RadioGroup49_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a49_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup49\" value=\"Maybe\" id=\"RadioGroup49_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a49_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup49\" value=\"No\" id=\"RadioGroup49_2\" \\>";

q50=xmlDoc.getElementsByTagName("q050")[0].childNodes[0].nodeValue;
document.getElementById("p050").innerHTML=q50;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a50_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup50\" value=\"Yes\" id=\"RadioGroup50_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a50_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup50\" value=\"Maybe\" id=\"RadioGroup50_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a50_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup50\" value=\"No\" id=\"RadioGroup50_2\" \\>";

q51=xmlDoc.getElementsByTagName("q051")[0].childNodes[0].nodeValue;
document.getElementById("p051").innerHTML=q51;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a51_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup51\" value=\"Yes\" id=\"RadioGroup51_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a51_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup51\" value=\"Maybe\" id=\"RadioGroup51_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a51_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup51\" value=\"No\" id=\"RadioGroup51_2\" \\>";

q52=xmlDoc.getElementsByTagName("q052")[0].childNodes[0].nodeValue;
document.getElementById("p052").innerHTML=q52;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a52_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup52\" value=\"Yes\" id=\"RadioGroup52_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a52_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup52\" value=\"Maybe\" id=\"RadioGroup52_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a52_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup52\" value=\"No\" id=\"RadioGroup52_2\" \\>";

q53=xmlDoc.getElementsByTagName("q053")[0].childNodes[0].nodeValue;
document.getElementById("p053").innerHTML=q53;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a53_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup53\" value=\"Yes\" id=\"RadioGroup53_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a53_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup53\" value=\"Maybe\" id=\"RadioGroup53_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a53_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup53\" value=\"No\" id=\"RadioGroup53_2\" \\>";

q54=xmlDoc.getElementsByTagName("q054")[0].childNodes[0].nodeValue;
document.getElementById("p054").innerHTML=q54;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a54_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup54\" value=\"Yes\" id=\"RadioGroup54_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a54_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup54\" value=\"Maybe\" id=\"RadioGroup54_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a54_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup54\" value=\"No\" id=\"RadioGroup54_2\" \\>";

q55=xmlDoc.getElementsByTagName("q055")[0].childNodes[0].nodeValue;
document.getElementById("p055").innerHTML=q55;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a55_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup55\" value=\"Yes\" id=\"RadioGroup55_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a55_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup55\" value=\"Maybe\" id=\"RadioGroup55_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a55_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup55\" value=\"No\" id=\"RadioGroup55_2\" \\>";

q56=xmlDoc.getElementsByTagName("q056")[0].childNodes[0].nodeValue;
document.getElementById("p056").innerHTML=q56;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a56_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup56\" value=\"Yes\" id=\"RadioGroup56_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a56_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup56\" value=\"Maybe\" id=\"RadioGroup56_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a56_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup56\" value=\"No\" id=\"RadioGroup56_2\" \\>";

q57=xmlDoc.getElementsByTagName("q057")[0].childNodes[0].nodeValue;
document.getElementById("p057").innerHTML=q57;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a57_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup57\" value=\"Yes\" id=\"RadioGroup57_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a57_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup57\" value=\"Maybe\" id=\"RadioGroup57_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a57_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup57\" value=\"No\" id=\"RadioGroup57_2\" \\>";

q58=xmlDoc.getElementsByTagName("q058")[0].childNodes[0].nodeValue;
document.getElementById("p058").innerHTML=q58;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a58_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup58\" value=\"Yes\" id=\"RadioGroup58_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a58_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup58\" value=\"Maybe\" id=\"RadioGroup58_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a58_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup58\" value=\"No\" id=\"RadioGroup58_2\" \\>";

q59=xmlDoc.getElementsByTagName("q059")[0].childNodes[0].nodeValue;
document.getElementById("p059").innerHTML=q59;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a59_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup59\" value=\"Yes\" id=\"RadioGroup59_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a59_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup59\" value=\"Maybe\" id=\"RadioGroup59_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a59_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup59\" value=\"No\" id=\"RadioGroup59_2\" \\>";

q60=xmlDoc.getElementsByTagName("q060")[0].childNodes[0].nodeValue;
document.getElementById("p060").innerHTML=q60;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a60_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup60\" value=\"Yes\" id=\"RadioGroup60_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a60_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup60\" value=\"Maybe\" id=\"RadioGroup60_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a60_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup60\" value=\"No\" id=\"RadioGroup60_2\" \\>";

q61=xmlDoc.getElementsByTagName("q061")[0].childNodes[0].nodeValue;
document.getElementById("p061").innerHTML=q61;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a61_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup61\" value=\"Yes\" id=\"RadioGroup61_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a61_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup61\" value=\"Maybe\" id=\"RadioGroup61_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a61_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup61\" value=\"No\" id=\"RadioGroup61_2\" \\>";

q62=xmlDoc.getElementsByTagName("q062")[0].childNodes[0].nodeValue;
document.getElementById("p062").innerHTML=q62;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a62_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup62\" value=\"Yes\" id=\"RadioGroup62_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a62_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup62\" value=\"Maybe\" id=\"RadioGroup62_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a62_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup62\" value=\"No\" id=\"RadioGroup62_2\" \\>";

q63=xmlDoc.getElementsByTagName("q063")[0].childNodes[0].nodeValue;
document.getElementById("p063").innerHTML=q63;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a63_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup63\" value=\"Yes\" id=\"RadioGroup63_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a63_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup63\" value=\"Maybe\" id=\"RadioGroup63_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a63_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup63\" value=\"No\" id=\"RadioGroup63_2\" \\>";

q64=xmlDoc.getElementsByTagName("q064")[0].childNodes[0].nodeValue;
document.getElementById("p064").innerHTML=q64;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a64_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup64\" value=\"Yes\" id=\"RadioGroup64_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a64_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup64\" value=\"Maybe\" id=\"RadioGroup64_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a64_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup64\" value=\"No\" id=\"RadioGroup64_2\" \\>";

q65=xmlDoc.getElementsByTagName("q065")[0].childNodes[0].nodeValue;
document.getElementById("p065").innerHTML=q65;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a65_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup65\" value=\"Yes\" id=\"RadioGroup65_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a65_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup65\" value=\"Maybe\" id=\"RadioGroup65_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a65_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup65\" value=\"No\" id=\"RadioGroup65_2\" \\>";

q66=xmlDoc.getElementsByTagName("q066")[0].childNodes[0].nodeValue;
document.getElementById("p066").innerHTML=q66;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a66_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup66\" value=\"Yes\" id=\"RadioGroup66_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a66_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup66\" value=\"Maybe\" id=\"RadioGroup66_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a66_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup66\" value=\"No\" id=\"RadioGroup66_2\" \\>";

q67=xmlDoc.getElementsByTagName("q067")[0].childNodes[0].nodeValue;
document.getElementById("p067").innerHTML=q67;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a67_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup67\" value=\"Yes\" id=\"RadioGroup67_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a67_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup67\" value=\"Maybe\" id=\"RadioGroup67_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a67_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup67\" value=\"No\" id=\"RadioGroup67_2\" \\>";

q68=xmlDoc.getElementsByTagName("q068")[0].childNodes[0].nodeValue;
document.getElementById("p068").innerHTML=q68;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a68_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup68\" value=\"Yes\" id=\"RadioGroup68_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a68_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup68\" value=\"Maybe\" id=\"RadioGroup68_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a68_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup68\" value=\"No\" id=\"RadioGroup68_2\" \\>";

q69=xmlDoc.getElementsByTagName("q069")[0].childNodes[0].nodeValue;
document.getElementById("p069").innerHTML=q69;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a69_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup69\" value=\"Yes\" id=\"RadioGroup69_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a69_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup69\" value=\"Maybe\" id=\"RadioGroup69_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a69_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup69\" value=\"No\" id=\"RadioGroup69_2\" \\>";

q70=xmlDoc.getElementsByTagName("q070")[0].childNodes[0].nodeValue;
document.getElementById("p070").innerHTML=q70;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a70_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup70\" value=\"Yes\" id=\"RadioGroup70_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a70_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup70\" value=\"Maybe\" id=\"RadioGroup70_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a70_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup70\" value=\"No\" id=\"RadioGroup70_2\" \\>";

q71=xmlDoc.getElementsByTagName("q071")[0].childNodes[0].nodeValue;
document.getElementById("p071").innerHTML=q71;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a71_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup71\" value=\"Yes\" id=\"RadioGroup71_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a71_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup71\" value=\"Maybe\" id=\"RadioGroup71_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a71_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup71\" value=\"No\" id=\"RadioGroup71_2\" \\>";

q72=xmlDoc.getElementsByTagName("q072")[0].childNodes[0].nodeValue;
document.getElementById("p072").innerHTML=q72;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a72_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup72\" value=\"Yes\" id=\"RadioGroup72_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a72_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup72\" value=\"Maybe\" id=\"RadioGroup72_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a72_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup72\" value=\"No\" id=\"RadioGroup72_2\" \\>";

q73=xmlDoc.getElementsByTagName("q073")[0].childNodes[0].nodeValue;
document.getElementById("p073").innerHTML=q73;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a73_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup73\" value=\"Yes\" id=\"RadioGroup73_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a73_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup73\" value=\"Maybe\" id=\"RadioGroup73_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a73_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup73\" value=\"No\" id=\"RadioGroup73_2\" \\>";

q74=xmlDoc.getElementsByTagName("q074")[0].childNodes[0].nodeValue;
document.getElementById("p074").innerHTML=q74;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a74_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup74\" value=\"Yes\" id=\"RadioGroup74_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a74_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup74\" value=\"Maybe\" id=\"RadioGroup74_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a74_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup74\" value=\"No\" id=\"RadioGroup74_2\" \\>";

q75=xmlDoc.getElementsByTagName("q075")[0].childNodes[0].nodeValue;
document.getElementById("p075").innerHTML=q75;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a75_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup75\" value=\"Yes\" id=\"RadioGroup75_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a75_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup75\" value=\"Maybe\" id=\"RadioGroup75_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a75_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup75\" value=\"No\" id=\"RadioGroup75_2\" \\>";

q76=xmlDoc.getElementsByTagName("q076")[0].childNodes[0].nodeValue;
document.getElementById("p076").innerHTML=q76;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a76_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup76\" value=\"Yes\" id=\"RadioGroup76_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a76_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup76\" value=\"Maybe\" id=\"RadioGroup76_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a76_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup76\" value=\"No\" id=\"RadioGroup76_2\" \\>";

q77=xmlDoc.getElementsByTagName("q077")[0].childNodes[0].nodeValue;
document.getElementById("p077").innerHTML=q77;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a77_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup77\" value=\"Yes\" id=\"RadioGroup77_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a77_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup77\" value=\"Maybe\" id=\"RadioGroup77_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a77_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup77\" value=\"No\" id=\"RadioGroup77_2\" \\>";

q78=xmlDoc.getElementsByTagName("q078")[0].childNodes[0].nodeValue;
document.getElementById("p078").innerHTML=q78;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a78_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup78\" value=\"Yes\" id=\"RadioGroup78_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a78_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup78\" value=\"Maybe\" id=\"RadioGroup78_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a78_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup78\" value=\"No\" id=\"RadioGroup78_2\" \\>";

q79=xmlDoc.getElementsByTagName("q079")[0].childNodes[0].nodeValue;
document.getElementById("p079").innerHTML=q79;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a79_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup79\" value=\"Yes\" id=\"RadioGroup79_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a79_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup79\" value=\"Maybe\" id=\"RadioGroup79_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a79_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup79\" value=\"No\" id=\"RadioGroup79_2\" \\>";

q80=xmlDoc.getElementsByTagName("q080")[0].childNodes[0].nodeValue;
document.getElementById("p080").innerHTML=q80;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a80_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup80\" value=\"Yes\" id=\"RadioGroup80_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a80_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup80\" value=\"Maybe\" id=\"RadioGroup80_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a80_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup80\" value=\"No\" id=\"RadioGroup80_2\" \\>";

q81=xmlDoc.getElementsByTagName("q081")[0].childNodes[0].nodeValue;
document.getElementById("p081").innerHTML=q81;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a81_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup81\" value=\"Yes\" id=\"RadioGroup81_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a81_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup81\" value=\"Maybe\" id=\"RadioGroup81_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a81_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup81\" value=\"No\" id=\"RadioGroup81_2\" \\>";

q82=xmlDoc.getElementsByTagName("q082")[0].childNodes[0].nodeValue;
document.getElementById("p082").innerHTML=q82;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a82_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup82\" value=\"Yes\" id=\"RadioGroup82_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a82_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup82\" value=\"Maybe\" id=\"RadioGroup82_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a82_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup82\" value=\"No\" id=\"RadioGroup82_2\" \\>";

q83=xmlDoc.getElementsByTagName("q083")[0].childNodes[0].nodeValue;
document.getElementById("p083").innerHTML=q83;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a83_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup83\" value=\"Yes\" id=\"RadioGroup83_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a83_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup83\" value=\"Maybe\" id=\"RadioGroup83_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a83_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup83\" value=\"No\" id=\"RadioGroup83_2\" \\>";

q84=xmlDoc.getElementsByTagName("q084")[0].childNodes[0].nodeValue;
document.getElementById("p084").innerHTML=q84;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a84_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup84\" value=\"Yes\" id=\"RadioGroup84_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a84_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup84\" value=\"Maybe\" id=\"RadioGroup84_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a84_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup84\" value=\"No\" id=\"RadioGroup84_2\" \\>";

q85=xmlDoc.getElementsByTagName("q085")[0].childNodes[0].nodeValue;
document.getElementById("p085").innerHTML=q85;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a85_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup85\" value=\"Yes\" id=\"RadioGroup85_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a85_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup85\" value=\"Maybe\" id=\"RadioGroup85_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a85_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup85\" value=\"No\" id=\"RadioGroup85_2\" \\>";

q86=xmlDoc.getElementsByTagName("q086")[0].childNodes[0].nodeValue;
document.getElementById("p086").innerHTML=q86;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a86_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup86\" value=\"Yes\" id=\"RadioGroup86_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a86_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup86\" value=\"Maybe\" id=\"RadioGroup86_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a86_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup86\" value=\"No\" id=\"RadioGroup86_2\" \\>";

q87=xmlDoc.getElementsByTagName("q087")[0].childNodes[0].nodeValue;
document.getElementById("p087").innerHTML=q87;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a87_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup87\" value=\"Yes\" id=\"RadioGroup87_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a87_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup87\" value=\"Maybe\" id=\"RadioGroup87_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a87_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup87\" value=\"No\" id=\"RadioGroup87_2\" \\>";

q88=xmlDoc.getElementsByTagName("q088")[0].childNodes[0].nodeValue;
document.getElementById("p088").innerHTML=q88;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a88_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup88\" value=\"Yes\" id=\"RadioGroup88_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a88_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup88\" value=\"Maybe\" id=\"RadioGroup88_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a88_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup88\" value=\"No\" id=\"RadioGroup88_2\" \\>";

q89=xmlDoc.getElementsByTagName("q089")[0].childNodes[0].nodeValue;
document.getElementById("p089").innerHTML=q89;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a89_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup89\" value=\"Yes\" id=\"RadioGroup89_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a89_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup89\" value=\"Maybe\" id=\"RadioGroup89_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a89_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup89\" value=\"No\" id=\"RadioGroup89_2\" \\>";

q90=xmlDoc.getElementsByTagName("q090")[0].childNodes[0].nodeValue;
document.getElementById("p090").innerHTML=q90;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a90_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup90\" value=\"Yes\" id=\"RadioGroup90_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a90_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup90\" value=\"Maybe\" id=\"RadioGroup90_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a90_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup90\" value=\"No\" id=\"RadioGroup90_2\" \\>";

q91=xmlDoc.getElementsByTagName("q091")[0].childNodes[0].nodeValue;
document.getElementById("p091").innerHTML=q91;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a91_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup91\" value=\"Yes\" id=\"RadioGroup91_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a91_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup91\" value=\"Maybe\" id=\"RadioGroup91_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a91_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup91\" value=\"No\" id=\"RadioGroup91_2\" \\>";

q92=xmlDoc.getElementsByTagName("q092")[0].childNodes[0].nodeValue;
document.getElementById("p092").innerHTML=q92;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a92_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup92\" value=\"Yes\" id=\"RadioGroup92_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a92_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup92\" value=\"Maybe\" id=\"RadioGroup92_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a92_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup92\" value=\"No\" id=\"RadioGroup92_2\" \\>";

q93=xmlDoc.getElementsByTagName("q093")[0].childNodes[0].nodeValue;
document.getElementById("p093").innerHTML=q93;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a93_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup93\" value=\"Yes\" id=\"RadioGroup93_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a93_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup93\" value=\"Maybe\" id=\"RadioGroup93_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a93_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup93\" value=\"No\" id=\"RadioGroup93_2\" \\>";

q94=xmlDoc.getElementsByTagName("q094")[0].childNodes[0].nodeValue;
document.getElementById("p094").innerHTML=q94;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a94_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup94\" value=\"Yes\" id=\"RadioGroup94_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a94_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup94\" value=\"Maybe\" id=\"RadioGroup94_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a94_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup94\" value=\"No\" id=\"RadioGroup94_2\" \\>";

q95=xmlDoc.getElementsByTagName("q095")[0].childNodes[0].nodeValue;
document.getElementById("p095").innerHTML=q95;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a95_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup95\" value=\"Yes\" id=\"RadioGroup95_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a95_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup95\" value=\"Maybe\" id=\"RadioGroup95_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a95_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup95\" value=\"No\" id=\"RadioGroup95_2\" \\>";

q96=xmlDoc.getElementsByTagName("q096")[0].childNodes[0].nodeValue;
document.getElementById("p096").innerHTML=q96;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a96_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup96\" value=\"Yes\" id=\"RadioGroup96_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a96_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup96\" value=\"Maybe\" id=\"RadioGroup96_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a96_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup96\" value=\"No\" id=\"RadioGroup96_2\" \\>";

q97=xmlDoc.getElementsByTagName("q097")[0].childNodes[0].nodeValue;
document.getElementById("p097").innerHTML=q97;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a97_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup97\" value=\"Yes\" id=\"RadioGroup97_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a97_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup97\" value=\"Maybe\" id=\"RadioGroup97_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a97_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup97\" value=\"No\" id=\"RadioGroup97_2\" \\>";

q98=xmlDoc.getElementsByTagName("q098")[0].childNodes[0].nodeValue;
document.getElementById("p098").innerHTML=q98;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a98_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup98\" value=\"Yes\" id=\"RadioGroup98_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a98_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup98\" value=\"Maybe\" id=\"RadioGroup98_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a98_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup98\" value=\"No\" id=\"RadioGroup98_2\" \\>";

q99=xmlDoc.getElementsByTagName("q099")[0].childNodes[0].nodeValue;
document.getElementById("p099").innerHTML=q99;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a99_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup99\" value=\"Yes\" id=\"RadioGroup99_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a99_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup99\" value=\"Maybe\" id=\"RadioGroup99_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a99_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup99\" value=\"No\" id=\"RadioGroup99_2\" \\>";

q100=xmlDoc.getElementsByTagName("q100")[0].childNodes[0].nodeValue;
document.getElementById("p100").innerHTML=q100;
an1=xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
document.getElementById("a100_1").innerHTML=an1 +" <input type=\"radio\" name=\"RadioGroup100\" value=\"Yes\" id=\"RadioGroup100_0\" \\>";
an2=xmlDoc.getElementsByTagName("answer2")[0].childNodes[0].nodeValue;
document.getElementById("a100_2").innerHTML=an2 +" <input type=\"radio\" name=\"RadioGroup100\" value=\"Maybe\" id=\"RadioGroup100_1\" \\>";
an3=xmlDoc.getElementsByTagName("answer3")[0].childNodes[0].nodeValue;
document.getElementById("a100_3").innerHTML=an3 +" <input type=\"radio\" name=\"RadioGroup100\" value=\"No\" id=\"RadioGroup100_2\" \\>";
}