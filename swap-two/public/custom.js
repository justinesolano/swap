$(document).ready(function(){
   $("#swap").change(function(){
     $("#swapIcon").removeAttr('class').addClass($(this).val());
     
   });
    $("#swapTo").change(function(){
     $("#swapIconTo").removeAttr('class').addClass($(this).val());
     
   });

});