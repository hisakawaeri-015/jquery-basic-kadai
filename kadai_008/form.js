$(function() {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをredにする
    $('.text-box').val('クリックされました');
  });
});