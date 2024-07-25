
$(function() {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function(){
    // id属性がtargetの要素のテキストをHello!にする
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });
});