$(document).ready(function() {
  /* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 창크기감지 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
  var windowWidth = window.innerWidth;
  if (windowWidth > 1023) {
    if ($("body").find(".Wide").length) {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
    } else {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      $("#wrap").addClass("Wide");
    }
  }
  if (windowWidth <= 1023 && windowWidth >= 768) {
    if ($("body").find(".Tablet").length) {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Mobile");
    } else {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Mobile");
      $("#wrap").addClass("Tablet");
    }
  }
  if (windowWidth <= 767) {
    if ($("body").find(".Mobile").length) {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Tablet");
    } else {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Tablet");
      $("#wrap").addClass("Mobile");
    }
  }
  /* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲ 창크기감지 ▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
  /* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 창크기변화감지 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
  var navToggle = 1;
  var krToggle = 1;
  var footerToggle = 1;
  var lastScroll = 0;
  ResizeSituation = 0;
  $(window).resize(function () {
    $("body").removeClass("menu-on");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 1023 && windowWidth > 767) {
      if (ResizeSituation != 1) {
        if ($("body").find(".Tablet").length) {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("Mobile");
        } else {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("Mobile");
          $("#wrap").addClass("Tablet");
        }
        $('.m_btn').removeClass('on');
        $('.nav_inner').removeClass().addClass('nav_inner').addClass('tablet_down');
        $('nav').removeClass();
        $('.footer_contents>strong>span').removeClass('on');
        $('.footer_contents>.slide_text_box').removeClass().addClass('slide_text_box')
        document.body.style.overflow = 'unset';
        footerToggle = 1;
        navToggle = 1;
        ResizeSituation = 1;
        KindOfEquipment = 2;
      } else {
        return false;
      }
    }
    if (windowWidth <= 767) {
      if (ResizeSituation != 2) {
        if ($("body").find(".Mobile").length) {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("Tablet");
        } else {
          $("#wrap").removeClass("Wide");
          $("#wrap").removeClass("Tablet");
          $("#wrap").addClass("Mobile");
        }
        $('.m_btn').removeClass('on');
        $('.nav_inner').removeClass().addClass('nav_inner').addClass('mobile_down');
        $('nav').removeClass();
        document.body.style.overflow = 'unset';
        navToggle = 1;
        ResizeSituation = 2;
        KindOfEquipment = 1;
      } else {
        return false;
      }
    }
    if (windowWidth > 1023) {
      if (ResizeSituation != 3) {
        if ($("body").find(".Wide").length) {
          $("#wrap").removeClass("Tablet");
          $("#wrap").removeClass("Mobile");
        } else {
          $("#wrap").removeClass("Tablet");
          $("#wrap").removeClass("Mobile");
          $("#wrap").addClass("Wide");
        }
        $('.m_btn').removeClass('on');
        $('.nav_inner').removeClass().addClass('nav_inner')
        $('nav').removeClass();
        $('.gnb>li').removeClass();
        $('.gnb>li>a').removeClass();
        document.body.style.overflow = 'unset';
        navToggle = 1;
        ResizeSituation = 3;
        KindOfEquipment = 3;
      } else {
        return false;
      }
    }
  });
  /* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲ 창크기변화감지 ▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
/* 연혁 반복태그들 addclass */
$(function(){
  $('.content_title').addClass('clearfix');
  $('.content_inner').addClass('clearfix');
  $('.history_content_box').addClass('clearfix');
});
/* nav toggle ==> mobile~tablet 에서 작동 */
$('.m_btn').on('click', function() {
  if($('#wrap').hasClass('Mobile')){
    if (navToggle === 1) {
      $(this).addClass('on');
      $('.nav_inner').removeClass().addClass('nav_inner').addClass('mobile_up');
      $('nav').addClass('modal');
      $('.gnb>li').removeClass();
      $('.gnb>li>a').removeClass();
      document.body.style.overflow = 'hidden';
      navToggle = 2;
    } else {
      navToggle = 1;
      $(this).removeClass('on');
      $('.nav_inner').removeClass().addClass('nav_inner').addClass('mobile_down');
      $('nav').removeClass();
      document.body.style.overflow = 'unset';
    }
  } else if($('#wrap').hasClass('Tablet')){
    if(navToggle===1){
      $(this).addClass('on');
      $('.nav_inner').removeClass().addClass('nav_inner').addClass('tablet_up');
      $('nav').addClass('modal');
      $('.gnb>li').removeClass();
      $('.gnb>li>a').removeClass();
      document.body.style.overflow = 'hidden';
      navToggle = 2;
      }else{
      $(this).removeClass('on');
      $('.nav_inner').removeClass().addClass('nav_inner').addClass('tablet_down');
      $('nav').removeClass();
      document.body.style.overflow = 'unset';
      navToggle = 1;
      };
  }
});
/* sub nav toggle ==> mobile~tablet 에서 작동 */
$('.gnb>li>a').click(function(event) {
  if($('#wrap').hasClass('Mobile')  || $('#wrap').hasClass('Tablet')){
    // 기본 클릭 동작 막기
  event.preventDefault();
  // 클릭한 a 태그의 부모 li 요소를 저장
  var $parentLi = $(this).parent('li');
  // 클릭한 a 태그를 제외한 나머지 li 요소들의 a 태그 중에 클래스가 'on'인 것 찾아서 처리
  $('.gnb>li').not($parentLi).children('a.on').each(function() {
      $(this).removeClass('on');
      $(this).parent('li').removeClass('submobiledown').addClass('submobileup');
  });
  // 클릭한 a 태그의 부모 li 요소 클래스 처리
  if ($parentLi.hasClass('submobiledown')) {
      $(this).removeClass('on');
      $parentLi.removeClass('submobiledown').addClass('submobileup');
  } else {
      $parentLi.removeClass('submobileup').addClass('submobiledown');
      $(this).addClass('on');
  }
  }
});
/* nav hover ==> wide 에서 작동 */
$('.gnb>li').mouseenter(function(){
  if($('#wrap').hasClass('Wide')){
    $('.sub_bg').slideDown(300);
    $('.sub').addClass('hover');
    if ($('header').hasClass('top')) {
      $('header').removeClass('top');
    };
  }
});
$('header').mouseleave(function(){
  if($('#wrap').hasClass('Wide')){
    $('.sub_bg').slideUp(300);
    $('.sub').removeClass('hover');
    var scrollTop = $(window).scrollTop();
    if (scrollTop === 0) {
      $('header').addClass('top');
    } else {
      $('header').removeClass('top');
    };
  }
});
/* 여기서부터 상시작동 함수 */
$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치를 가져옵니다.
  var windowHeight = $(window).height();
  $('section > div > div').each(function(){
    var contentOffset = $(this).offset().top;
    var contentHeight = $(this).outerHeight();
    if (scrollTop + 500 >= contentOffset) { // 스크롤 위치가 대상 요소의 상단 위치에 도달하면
      $(this).addClass('on'); // 클래스 이름을 추가합니다.
  } else if(scrollTop > contentOffset + contentHeight || scrollTop + windowHeight < contentOffset) {
      $(this).removeClass('on'); // 그렇지 않으면 클래스 이름을 제거합니다.
  }
  });
});
/* header scroll event */
$(window).on('scroll', function(){
  var scrollTop1 = $(this).scrollTop();
  if(scrollTop1 > lastScroll) {
      //down
      $('header').removeClass('on').removeClass('trans');
  } else {
      // up
      $('header').addClass('on');
  }
  lastScroll = scrollTop1;
});
/* scroll Top detect */
$(window).on({'scroll':function(){
  var scrollTop2 = $(window).scrollTop();
    if (scrollTop2 === 0) {
        $('header').addClass('top');
    } else {
        $('header').removeClass('top');
    }
  }});
/* footer text slide */
$('.footer_contents>strong').on('click',function(){
  if(footerToggle===1){
    $('.footer_contents>strong>span').addClass('on');
    $('.footer_contents>.slide_text_box').removeClass().addClass('slide_text_box').addClass('footer_up');
    footerToggle = 2;
  }else{
    $('.footer_contents>strong>span').removeClass('on');
    $('.footer_contents>.slide_text_box').removeClass().addClass('slide_text_box').addClass('footer_down');
    footerToggle = 1;
  }
});
/* KR btn toggle */
$('.slide_top>button').on('click',function(){
  if(krToggle == 1){
    $(this).addClass('on');
    $('.slide_lng').animate({
      'height':'68px'
    },300);
    krToggle = 2;
  }else{
    $(this).removeClass('on');
    $('.slide_lng').animate({
      'height':'34px'
    },300);
    krToggle = 1;
  }
});
/* 연혁 스크롤이벤트 함수 bar높이조절+해당높이 지나갈시 addclass,removeclass */
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var historyWrap = $('.history_wrap');
  var bar = $('.bar');
  var historyWrapTop = historyWrap.offset().top;
  var historyWrapBottom = historyWrapTop + historyWrap.outerHeight();

  // Check if the top of .history_wrap is at the center of the viewport
  if (historyWrapTop <= (scrollTop + windowHeight / 2) && historyWrapBottom >= (scrollTop + windowHeight / 2)) {
      var newHeight = (scrollTop + windowHeight / 2) - historyWrapTop;
      bar.height(newHeight);
            // .content_title 요소에 대해 스크롤 이벤트 처리
            $('.content_title').each(function() {
              var contentOffset = $(this).offset().top;
              if($('#wrap').hasClass('Mobile')){
                if ((scrollTop + 100 + windowHeight / 2) >= contentOffset) {
                  $(this).addClass('on');
              } else {
                  $(this).removeClass('on');
              }
              } else if($('#wrap').hasClass('Tablet')){
                if ((scrollTop + 50 + windowHeight / 2) >= contentOffset) {
                  $(this).addClass('on');
              } else {
                  $(this).removeClass('on');
              }
              } else if($('#wrap').hasClass('Wide')){
                if ((scrollTop + 50 + windowHeight / 2) >= contentOffset) {
                  $(this).addClass('on');
              } else {
                  $(this).removeClass('on');
              }
              };
          });
          // .content_inner 요소에 대해 스크롤 이벤트 처리
          $('.content_inner').each(function() {
            var contentOffset = $(this).offset().top;
            if($('#wrap').hasClass('Mobile')){
              if ((scrollTop + 100 + windowHeight / 2) >= contentOffset) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
            } else if($('#wrap').hasClass('Tablet')){
              if ((scrollTop + 50 + windowHeight / 2) >= contentOffset) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
            } else if($('#wrap').hasClass('Wide')){
              if ((scrollTop + 50 + windowHeight / 2) >= contentOffset) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
            };
        });
  }


});
/* 연혁 메뉴 스크롤이벤트 fixed */
$(window).on('scroll', function() {
      var $historyMenu = $('.history_wrap');
      var historyMenuTop = $historyMenu.offset().top;
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= historyMenuTop) {
            $('.history_menu').css({
                'position': 'fixed',
            });
        } else {
          $('.history_menu').css({
                'position': 'absolute',
                'top': '0px'
            });
        }
});
    var $historyMenu = $('.history_menu');
    var $header = $('header'); // header 요소를 선택하세요.
    function updateHistoryMenuPosition() {
        var headerTop = parseInt($header.css('top'), 10) || 0;
        var scrollTop = $(window).scrollTop();
        var historyMenuTop = $('.history_wrap').offset().top;
        var headerHeight = $header.outerHeight();
        if (scrollTop >= historyMenuTop) {
            $historyMenu.css({
                'top': headerTop + headerHeight +'px' // header의 top 값에 따라 위치 조정
            });
        }
    }
    // 정기적으로 header의 위치를 체크하고 history_menu 위치 업데이트
    setInterval(updateHistoryMenuPosition, 10);
/* sub-2 fixed 메뉴바 addclass removeclass */
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop(); // 스크롤 위치 가져오기
  var $historyMenu = $('.history_menu');
  var historyTarget = ['#2020', '#2010', '#2000', '#1990', '#1980', '#1970'];

  historyTarget.forEach(function(history, index) {
      var historyTop = $(history).offset().top;
      if (scrollTop >= historyTop - 100) { // 약간의 오차를 줄 수 있는 여유 추가
          $historyMenu.find('ul > li > a').addClass('on').removeClass('on');
          $historyMenu.find('ul > li > a').removeClass('on').eq(index).addClass('on');
      }
  });
});
});
