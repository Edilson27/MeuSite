/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Movimento dos Slides das imagens
$(function(){
   $('#slide img:eq(0)').addClass("ativo").show();
   var texto = $(".ativo").attr("alt");
   //$('#slide').prepend("<p>" + texto + "</p>");
   setInterval(slide, 3000);
   
   function slide(){
       if($('.ativo').next().size()){
           $('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
       } else {
           $('.ativo').fadeOut().removeClass("ativo");
           $('#slide img:eq(0)').fadeIn().addClass("ativo");
       }
   }
});


//Janela Modal
$('#show-modal').on('click',function(){
    $('.overlay, .notice').show();
})

$('.overlay, .close').on('click', function(){
    $('.overlay, .notice').hide();
})

$('.overlay, .close').keypress('ESC', function(){
    $('.overlay, .notice').hide();
})