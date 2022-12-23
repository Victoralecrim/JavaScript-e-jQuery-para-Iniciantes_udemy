// $(function(){
//    $('#azul').click(function(){
//       $('p').css("background-color", "blue");
//       $('p').fadeOut();
//       $('p').delay(1000);
//       $('p').fadeIn();
//    });
//    $('#vermelho').click(function(){
//       $('p').css("background-color", "red");
//       // $('p').fadeOut('fast');
//       // $('p').fadeIn(5000);
//       $('#mensagem').text("cor alterada com sucesso");
//       $('#mensagem').css({color: 'red', border:'1px solid red'})
//       .delay(3000).fadeOut('fast')
//       .addClass('green')

//       $('button').removeClass('red')
//    }); 

// });

$(function() {
   $('#l1').click(function(){
      $('#i1').show();
      $('#i2').hide();
      $('#i3').hide();
      $('#i4').hide();
   });
   $('#l2').click(function(){
      $('#i1').hide();
      $('#i2').show();
      $('#i3').hide();
      $('#i4').hide();
   });
   $('#l3').click(function(){
      $('#i1').hide();
      $('#i2').hide();
      $('#i3').show();
      $('#i4').hide();
   });
   $('#l4').click(function(){
      $('#i1').hide();
      $('#i2').hide();
      $('#i3').hide();
      $('#i4').show();
   });
})