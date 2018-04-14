$(document).ready(function () {
  "use strict";
  (new WOW).init();
  $("#container-mixItUp").mixItUp();
  $("#preloader").height($(window).height());
  $(window).resize(function () {
    $("#preloader").height($(window).height())
  });
  var win = $(window);
  win.on("load", function () {
    $("#preloader").delay(1e3).fadeOut("slow");
    $("body").addClass("visibility")
  });
  $(".navbar-default .navbar-nav>li>a i.fa.fa-search").click(function () {
    $(".top-search").fadeIn(function () {
      $(".top-search").addClass("topsearch-js");
      $(".menu-nav").addClass("margin-top-nav-one")
    })
  });
  $(".top-search form label .fa-close").click(function () {
    $(".top-search").fadeOut(function () {
      $(".menu-nav").addClass("margin-top-nav-two")
    })
  });
  $(window).scroll(function () {
    var heightScroll = $(this).scrollTop();
    if (heightScroll >= 46) {
      $(".menu-nav .navbar-default").attr("id", "whiteFixed");
      $(".navbar>.container-fluid .navbar-brand").attr("id", "brandColorFixed");
      $(".navbar-default .navbar-nav>li>a").attr("id", "linkColorFixed");
      $(".navbar-default .navbar-toggle .icon-bar").attr("id", "icon-barColor")
    } else {
      $("#whiteFixed").removeAttr("id");
      $("#brandColorFixed").removeAttr("id");
      $(".navbar-default .navbar-nav>li>a").removeAttr("id");
      $(".navbar-default .navbar-toggle .icon-bar").removeAttr("id")
    }
  });
  $(window).resize(function () {
    $(window).scroll(function () {
      var heightScroll = $(this).scrollTop();
      if (heightScroll >= 46) {
        $(".menu-nav .navbar-default").attr("id", "whiteFixed");
        $(".navbar>.container-fluid .navbar-brand").attr("id", "brandColorFixed");
        $(".navbar-default .navbar-nav>li>a").attr("id", "linkColorFixed");
        $(".navbar-default .navbar-toggle .icon-bar").attr("id", "icon-barColor")
      } else {
        $("#whiteFixed").removeAttr("id");
        $("#brandColorFixed").removeAttr("id");
        $(".navbar-default .navbar-nav>li>a").removeAttr("id");
        $(".navbar-default .navbar-toggle .icon-bar").removeAttr("id")
      }
    })
  });
  $(".header-home").height($(window).height());
  $(window).resize(function () {
    $(".header-home").height($(window).height())
  });
  var breakHeight = $(window).width();
  if (breakHeight >= 766) {
    $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height());
    $(window).resize(function () {
      $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height())
    })
  } else {
    $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height());
    $(window).resize(function () {
      $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height())
    })
  }
  $(window).resize(function () {
    var breakHeight = $(window).width();
    if (breakHeight >= 766) {
      $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height());
      $(window).resize(function () {
        $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height())
      })
    } else {
      $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height());
      $(window).resize(function () {
        $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height())
      })
    }
  });
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px"
      }
    }
  }
  $(".my-skills .bg-overly-skills").height($(".my-skills").height());
  $(window).resize(function () {
    $(".my-skills .bg-overly-skills").height($(".my-skills").height())
  });
  $(".portfolio .filter-section ul li a").click(function () {
    $(".portfolio .filter-section ul li a").children().fadeOut(1e3);
    $(this).children().fadeIn(1e3)
  });
  $(".portfolio-item .portfolio-media .work-contents").outerHeight($(".portfolio-item .portfolio-media .work-img img").outerHeight());
  $(window).resize(function () {
    $(".portfolio-item .portfolio-media .work-contents").outerHeight($(".portfolio-item .portfolio-media .work-img img").outerHeight())
  });
  $(".share-project .bg-overly-share-project").height($(".share-project").height());
  $(window).resize(function () {
    $(".share-project .bg-overly-share-project").height($(".share-project").height())
  });
  $(".social-media-team").width($(".img-personale-team img").width());
  $(window).resize(function () {
    $(".social-media-team").width($(".img-personale-team img").width())
  });
  $(".social-media-team").height($(".img-personale-team img").height());
  $(window).resize(function () {
    $(".social-media-team").height($(".img-personale-team img").height())
  });
  $(".my-blogs .tags-time").width($(".my-blogs .img-blog").width());
  $(window).resize(function () {
    $(".my-blogs .tags-time").width($(".my-blogs .img-blog").width())
  });
  $(".location-contact .location iframe").outerHeight($(".location-contact .contact").outerHeight());
  $(window).resize(function () {
    $(".location-contact .location iframe").outerHeight($(".location-contact .contact").outerHeight())
  });
  $(".scroll-home").click(function () {
    $("html, body").animate({
      scrollTop: $("#header-home").offset().top
    }, 1e3)
  });
  $(".scroll-about").click(function () {
    $("html, body").animate({
      scrollTop: $("#scroll-about").offset().top
    }, 1e3)
  });
  $(".scroll-services").click(function () {
    $("html, body").animate({
      scrollTop: $("#scroll-services").offset().top
    }, 1e3)
  });
  $(".scroll-skills").click(function () {
    $("html, body").animate({
      scrollTop: $("#scroll-skills").offset().top - 6
    }, 1e3)
  });
  $(".scroll-Portfolio").click(function () {
    $("html, body").animate({
      scrollTop: $("#scroll-portfolio").offset().top
    }, 1e3)
  });
  $(".scroll-contact, .talk-head, .btn-share-new").click(function () {
    $("html, body").animate({
      scrollTop: $("#scroll-contact").offset().top - 80
    }, 1e3)
  });
  $(".scroll-blog").click(function () {
    $("html, body").animate({
      scrollTop: $("#scroll-blog").offset().top
    }, 1e3)
  })
});