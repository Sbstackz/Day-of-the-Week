


$("select.weekDays").change(function(){
    var expr = $(this).children("option:selected").val();
        

switch (expr){
   case 'Monday': 
      alert("lazyday");
       break;
       case 'Tuesday': 
       alert('cuddleday');
       break; 
    case 'Wendsday': 
       alert('middle day of the week');
       break; 
       case 'Thursday': 
       alert('close to friday');
       break;  
     case 'Friday': 
       alert('FUNDAY');
       break;
        case 'Saturday': 
       alert('WEEkend chillday');
       break; 
        case 'Sunday': 
       alert('back to work');
       break;    
}});