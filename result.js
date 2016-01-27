function resultt(Q1,Q2,Q3,Q4,Q5){
var cat1 = form1.elements[Q1];
var cat2 = form1.elements[Q2];
var cat3 = form1.elements[Q3];
var cat4 = form1.elements[Q4];
var cat5 = form1.elements[Q5];


window.anscor;
window.anscor1;
window.anscor2;
window.anscor3;
window.anscor4;


for( var i=0;i<cat1.length;i++)
 {
	var ans=cat1[i];
	if(ans.checked){
	 anscor=ans.value;
	    if(anscor=="Washington")
	       {
			 document.getElementById('yes').style.display = "block"
		     document.getElementById('no').style.display = "none"
	       }
		else 
		   {
			 document.getElementById('no').style.display = "block"
		     document.getElementById('yes').style.display = "none"
		   }
         }
 }

for( var i=0;i<cat2.length;i++)
 {
    var ans=cat2[i];
    if(ans.checked){
     anscor1=ans.value;
        if(anscor1=="SocialWorker")	 
           {
		     document.getElementById('yes1').style.display = "block"
			 document.getElementById('no1').style.display = "none"
           }
	    else 
	       {
		     document.getElementById('no1').style.display = "block"
			 document.getElementById('yes1').style.display = "none"
	       }
          } 
  }

for( var i=0;i<cat3.length;i++)
 {
     var ans=cat3[i];							
      if(ans.checked){
       anscor2=ans.value;
          if(anscor2=="Barack Obama")	 
             {
		        document.getElementById('yes2').style.display = "block"
			 document.getElementById('no2').style.display = "none"
             }
	else 
	         {
		document.getElementById('no2').style.display = "block"
			document.getElementById('yes2').style.display = "none"
	         }
           }
  } 

for( var i=0;i<cat4.length;i++)
{
    var ans=cat4[i];							
     if(ans.checked){
      anscor3=ans.value;
         if(anscor3=="Graham Bell")	 
            {
		        document.getElementById('yes3').style.display = "block"
			 document.getElementById('no3').style.display = "none"
            }
	else 
	         {
		document.getElementById('no3').style.display = "block"
			document.getElementById('yes3').style.display = "none"
	         }
          }
 } 

for( var i=0;i<cat5.length;i++)
{
    var ans=cat5[i];							
     if(ans.checked){
      anscor4=ans.value;
         if(anscor4=="India")	 
            {
		        document.getElementById('yes4').style.display = "block"
			 document.getElementById('no4').style.display = "none"
            }
	else 
	         {
		document.getElementById('no4').style.display = "block"
			document.getElementById('yes4').style.display = "none"
	         }
          }
 } 

}


	
