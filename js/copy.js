$(document).ready(function () {
  /*************** 창크기감지******************/
  var windowWidth = $("#wrap").width();
  KindOfEquipment = 3;

  if (windowWidth > 1024) {
    if ($("body").find(".Wide").length) {
      $("#wrap").removeClass("Tablet");
      $("#wrap").removeClass("Mobile");
      /* headerFixed(40, 120) //0320 삭제 */
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
      /* headerFixed(0, 60) //0320 삭제 */
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
      /* headerFixed(0, 60) //0320 삭제 */
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
  ResizeSituation = 0;
  $(window).resize(function () {
    $("body").removeClass("menu-on");
    var windowWidth = $("#wrap").width();

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
        $(".header .gnb-box").css(
          "display",
          "none"
        ); /* 0320 - 모바일헤더 수정 */
        $(".mo-gnb-bg").hide();
        // $('.gnb-box .gnb > ul li.depth1 > a.tit').removeClass('on');
        /* headerFixed(0, 60) //0320 삭제 */
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
        /* headerFixed(0, 60) //0320 삭제 */
        $(".header .gnb-box").css(
          "display",
          "none"
        ); /* 0321 - 모바일헤더 추가 */
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
        $(".header .gnb-box").css(
          "display",
          "block"
        ); /* 0320 - 모바일헤더 수정 */
        $(".top2m").css({ display: "none" });
        $(".top3m").removeAttr("style");
        $(".tabBox .list").show(); //서브 탭메뉴
        $("body").removeClass("popup-on");
        /* headerFixed(40, 120) //0320 삭제 */
        ResizeSituation = 3;
        KindOfEquipment = 3;
      } else {
        return false;
      }
    }
  });

  /************GNB-PC용******************/
  var currGnb_index = null;
  //gnb 열기
  $(".gnb .depth1")
    .children("a")
    .on({
      "mouseenter focusin": function () {
        if (KindOfEquipment == 3) {
          if ($(this).parent().index() != currGnb_index) {
            //현재 대메뉴 에서 다시 마우스 오버시 깜박임 방지
            $(".top2m").hide();
            $(".gnb .depth1").removeClass("on");
            $(this).parent().addClass("on");

            var HH = $(this).siblings(".top2m").height();
            //alert("기본 받은값"+HH);

            $(this)
              .siblings(".top2m")
              .find(".top2m-title")
              .css("height", HH); /*좌우 높이 같게 */
            $(".pc-gnb-bg")
              .addClass("on")
              .css("height", HH + 2);
            $(this).siblings(".top2m").stop().show();

            currGnb_index = $(this).parent().index();
          }
        }
      }
    });

  //gnb닫기
  $(".gnb").on({
    mouseleave: function () {
      if (KindOfEquipment == 3) {
        $(".top2m").hide();
        $(".gnb .depth1").removeClass("on");
        $(".pc-gnb-bg").removeClass("on").css("height", "0");

        currGnb_index = null;
      }
    }
  });

  //gnb(pc) 마지막 focusout 처리
  var $gnbLast3m = $(".gnb > ul > li:last-child")
    .prev()
    .find(".top2m-list > li:last-child > .top3m ul li:last-child"); //0203 수정
  var $gnbLast2m = $(".gnb > ul > li:last-child")
    .prev()
    .find(".top2m-list > li:last-child"); //0203 수정
  if ($gnbLast3m.length) {
    $gnbLast3m.on({
      focusout: function () {
        if (KindOfEquipment == 3) {
          $(".top2m").hide();
          $(".gnb .depth1").removeClass("on");
          $(".pc-gnb-bg").css("height", "0");
          currGnb_index = null;
        }
      }
    });
  } else {
    $gnbLast2m.on({
      focusout: function () {
        if (KindOfEquipment == 3) {
          $(".top2m").hide();
          $(".gnb .depth1").removeClass("on");
          $(".pc-gnb-bg").css("height", "0");
          currGnb_index = null;
        }
      }
    });
  }

  //모바일 뎁스1 클릭
  $(".gnb a.tit").on("click", function (event) {
    var $target = $(event.target);
    if (KindOfEquipment <= 2) {
      if ($target.is(".on")) {
        $(this).removeClass("on").next(".menuBox").slideUp();
        //return false;
      } else {
        $(".gnb a.tit").removeClass("on").next(".menuBox").slideUp();
        $(this).addClass("on").next(".menuBox").slideDown();
        $(".top3m").removeClass("on").hide();
      }
      return false;
    } else {
      return true;
    }
  });
  //모바일 뎁스2 클릭
  $(".depth2 a.plus").on("click", function () {
    if (KindOfEquipment <= 2) {
      var Top3OnOff = $(this).is(".on");
      if (Top3OnOff == true) {
        $(this).siblings(".top3m").removeClass("on").slideUp();
        $(this).removeClass("on");
        return false;
      } else if (Top3OnOff == false) {
        $(".depth2 a.plus").not($(this)).removeClass("on");
        $(this).addClass("on");
        $(".top3m").not($(this).siblings()).removeClass("on").slideUp();
        $(this).siblings(".top3m").addClass("on").slideDown();
        return false;
      }
    }
  });

  /************모바일 GNB 열기/닫기******************/
  $(".mo-gnb-open > button").on("click", function () {
    $("body").addClass("popup-on");
    // $('body').css({'overflow' : 'hidden'});
    $(".mo-gnb-bg").show();
    $(".header .gnb-box").css("display", "block"); /* 0320 - 모바일헤더 수정 */
    // $('.gnb-box .gnb > ul li.depth1 > a.tit').removeClass('on');

    if ($(".gnb").find(".tit.on").length) {
      var $titOn = $(".gnb").find(".tit.on");
      $titOn.parent(".depth1").find(".top2m").css({ display: "block" });
      console.log($titOn);
    } else {
    }

    return false;
  });

  $(".mo-gnb-close > button , .mo-gnb-bg").on("click", function () {
    $("body").removeClass("popup-on");
    // $('body').css({'overflow' : 'initial'});
    /* $('.gnb a.tit').removeClass('on').next('.menuBox').hide();
		$('.top3m').removeClass('on').hide(); */

    $(".header .gnb-box").css("display", "none"); /* 0320 - 모바일헤더 수정 */
    $(".mo-gnb-bg").hide();
    return false;
  });

  /************전체메뉴보기******************/

  $(".btn-menu-open > button").on("click", function () {
    /* if ($('body').find('.headerFixed').length) { //0320 삭제
			$(this).closest('.menu-all').find('.menu-list').css({'top' : 81});
		} else {
			$(this).closest('.menu-all').find('.menu-list').css({'top' : 121});
		} */

    $(this).closest(".menu-all").find(".menu-list").css({ top: 121 }); //0320 추가
    $("body").addClass("menu-on");
    $(".menu-all-layer").show();
    $(".btn-menu-close > button").focus();
    return false;
  });

  var $menuLast3m = $(".menu-list-inner > ul > li:last-child").find(
    ".depth2 > li:last-child > .depth3 ul li:last-child"
  );
  var $menuLast2m = $(
    ".menu-list-inner > ul > li:last-child .depth2 > li:last-child"
  );
  if ($menuLast3m.length) {
    $gnbLast3m.on({
      focusout: function () {
        if (KindOfEquipment == 3) {
          $(".btn-menu-close > button").focus();
        }
      }
    });
  } else {
    $menuLast2m.on({
      focusout: function () {
        if (KindOfEquipment == 3) {
          $(".btn-menu-close > button").focus();
        }
      }
    });
  }

  $(".btn-menu-close > button").on("click", function () {
    $(".menu-all-layer").hide();
    $(".btn-menu-open > button").focus();
    $("body").removeClass("menu-on");
    return false;
  });
  console.log(KindOfEquipment);
});


