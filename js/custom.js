// Made by www.musavvir.info

$(function(){
  $(".typed").typed({
    strings: ["digital product designer", "UX designer", "student of economics", "student of Mandarin", "Bangladeshi", "horrible swimmer"],
    typeSpeed: 50,
    backDelay: 2500,
    loop: true,
    shuffle: false
  });
  $(".typedbn").typed({
    strings: ["ডিজিটাল প্রোডাক্ট ডিজাইনার", "ইউ-এক্স ডিজাইনার", "অর্থনীতির ছাত্র", "ম্যান্ডারিন ভাষার ছাত্র", "বাংলাদেশি", "জঘন্য সাতারু"],
    typeSpeed: 50,
    backDelay: 2500,
    loop: true,
    shuffle: false
  });
  $(".typedcn").typed({
    strings: ["學過經濟學的數位產品設計師", "正在學習中文的孟加拉人", "不太會游泳的人"],
    typeSpeed: 50,
    backDelay: 2500,
    loop: true,
    shuffle: false
  });
});

// Made by www.musavvir.info

$(function(){
  //set or get lang
  $('body').attr('data-current-lang','cn');

  $('[data-switch-lang]').click(function(){

    var newLang = $(this).attr('data-switch-lang'),
        currentLang = $('body').attr('data-current-lang');

    if (newLang !== currentLang){

      //swap content
      $('[data-lang="' + newLang + '"]').show();
      $('[data-lang="' + $('body').attr('data-current-lang') + '"]').hide();

      //set language for future needs
      $('body').attr('data-current-lang',newLang);

      //optional
      $('.dropdownTrigger[data-dropdown-id="language"]').text(newLang);

      //Recalculate panels and equal elements
      $(window).resize();
    }
  });
});

// Made by www.musavvir.info
