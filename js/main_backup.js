$(document).ready(function() {
  /*************** 창크기감지******************/
  var windowWidth = window.innerWidth;
  KindOfEquipment = 3;

  if (windowWidth > 1024) {
    if ($("body").find(".Wide").length) {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
    } else {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      $("#wrap").addClass("Wide");
    }
  }
  if (windowWidth <= 1024 && windowWidth > 768) {
    if ($("body").find(".Tablet").length) {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Mobile");
    } else {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Mobile");
      $("#wrap").addClass("Tablet");
    }
  }
  if (windowWidth <= 768) {
    if ($("body").find(".Mobile").length) {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Tablet");
    } else {
      $("#wrap").removeClass("Wide");
      $("#wrap").removeClass("Tablet");
      $("#wrap").addClass("Mobile");
    }
  }

  if ($("#wrap").is(".Wide")) {
    KindOfEquipment = 3;
  }
  if ($("#wrap").is(".Tablet")) {
    KindOfEquipment = 2;
  }
  if ($("#wrap").is(".Mobile")) {
    KindOfEquipment = 1;
  }
  /*************** 창크기감지******************/
  var navToggle = 1;
  ResizeSituation = 0;
  $(window).resize(function () {
    $("body").removeClass("menu-on");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 1024 && windowWidth > 768) {
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
        document.body.style.overflow = 'unset';
        navToggle = 1;
        ResizeSituation = 1;
        KindOfEquipment = 2;
      } else {
        return false;
      }
    }
    if (windowWidth <= 768) {
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
    if (windowWidth > 1024) {
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
        /* brand text */
        $(".brand_contents_top>.brand_content_textbox>p").html('현대약품은 "인류보건 향상"의' + "<br>" + "기업이념을 바탕으로 모두가 건강하고 따뜻한" + "<br>" + "세상을 만들기 위한 지속적인 노력을 해오고 있습니다.");
        /* banner2 text */
        $(".banner2_section_wrap>p").html("기본을 지키는 사람들," + "<br>" + "현대약품의 미래를 만들어 갈 인재를 찾습니다.");
        document.body.style.overflow = 'unset';
        navToggle = 1;
        ResizeSituation = 3;
        KindOfEquipment = 3;
      } else {
        return false;
      }
    }
  });

/* nav toggle ==> mobile~tablet */
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
/* sub nav toggle ==> mobile~tablet */
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
/* nav hover ==> wide */
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
/* ======== products slide start======== */
var mainSwiper = new Swiper('.swiper-container-products', {
  slidesPerGroup : 1, //한번에 슬라이딩될 개수
  centeredSlides: true,    //센터모드
  loop: true, //무한반복 할지말지
  loopedSlides: 1,
  lazy : {
    loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
  },
  navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
  },
    pagination : {   // 페이저 버튼 사용자 설정
        el : '.swiper-pagination',  // 페이저 버튼을 담을 태그 설정
        type : 'progressbar', // 버튼 모양 결정
    },
     a11y: { // 웹접근성 
    enabled: true,
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',   
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
    breakpoints:{
      200: { //200px 이상의 크기에서 옵션 값 
        slidesPerView : 1, //보여질 개수
        spaceBetween : 100, //아이템 사이 간격
        },
        759 : {//759px 이상의 크기에서 옵션 값 
          slidesPerView : 1, //보여질 개수
          spaceBetween : 100, //아이템 사이 간격
        },
        1023 : {//1023px 이상의 크기에서 옵션 값 
          slidesPerView : 1, //보여질 개수
          spaceBetween : 250, //아이템 사이 간격
        },
        1650 : {//1919px 이상의 크기에서 옵션 값 
          slidesPerView : 1, //보여질 개수
          spaceBetween : 10, //아이템 사이 간격
        }
    }
})
/* ======== products slide end ======== */
/* ======== news slide start ======== */
var newsSwiper = new Swiper('.news_slider .swiper-container-news', {
  slidesPerGroup : 1, //한번에 슬라이딩될 개수
  centeredSlides: false,    //센터모드
  loop: true, //무한반복 할지말지
  loopAdditionalSlides: 1,
  loopedSlides: 1,
  lazy : {
    loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
  },
     a11y: { // 웹접근성 
    enabled: true,
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',   
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
  navigation: {
    nextEl: ".news_slider .swiper-button-next-news",
    prevEl: ".news_slider .swiper-button-prev-news",
  },
    breakpoints:{
      200: { //200px 이상의 크기에서 옵션 값 
        slidesPerView : 1, //보여질 개수
        spaceBetween : 100, //아이템 사이 간격
        },
        759 : {//759px 이상의 크기에서 옵션 값 
          slidesPerView : 1, //보여질 개수
          spaceBetween : 83, //아이템 사이 간격
        },
        1023 : {//1023px 이상의 크기에서 옵션 값 
          slidesPerView : 1, //보여질 개수
          spaceBetween : 20, //아이템 사이 간격
        },
        1650 : {//1650px 이상의 크기에서 옵션 값 
          slidesPerView : 2.5, //보여질 개수
          spaceBetween : 20, //아이템 사이 간격
        }
    }
});

/* ======== news slide end ======== */
/* header scroll event */
var lastScroll = 0;
$(window).on('scroll', function(){
  var scrollTop = $(this).scrollTop();
  if(scrollTop > lastScroll) {
      //down
      $('header').removeClass('on').removeClass('trans');
  } else {
      // up
      $('header').addClass('on');
  }
  lastScroll = scrollTop;
});

/* scroll Top detect */
$(window).on({'scroll':function(){
  var scrollTop = $(window).scrollTop();
    if (scrollTop === 0) {
        $('header').addClass('top');
    } else {
        $('header').removeClass('top');
    }
  }});
/* footer text slide */
var footerToggle = 1;
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
var krToggle = 1;
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
});