!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).LocomotiveScroll = e());
})(this, function () {
  "use strict";
  function s(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function o(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function e(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t &&
        (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, s);
    }
    return i;
  }
  function i(n) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? e(Object(o), !0).forEach(function (t) {
            var e, i, s;
            (e = n),
              (s = o[(i = t)]),
              i in e
                ? Object.defineProperty(e, i, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[i] = s);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : e(Object(o)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
          });
    }
    return n;
  }
  function l(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && a(t, e);
  }
  function r(t) {
    return (r = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function a(t, e) {
    return (a =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function c(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function h(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? c(t) : e;
  }
  function u(t, e, i) {
    return (u =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var s = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = r(t));

              );
              return t;
            })(t, e);
            if (s) {
              var n = Object.getOwnPropertyDescriptor(s, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  function v(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = new Array(t.length); e < t.length; e++)
            i[e] = t[e];
          return i;
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  var d = {
      el: document,
      elMobile: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      smoothMobile: !1,
      direction: "vertical",
      lerp: 0.1,
      class: "is-inview",
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      scrollFromAnywhere: !1,
    },
    f = (function () {
      function e() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        s(this, e),
          Object.assign(this, d, t),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowMiddle = this.windowHeight / 2),
          (this.els = []),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: this.html.offsetHeight,
          }),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        o(e, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "initEvents",
            value: function () {
              var e = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (t) {
                  t.addEventListener("click", e.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-offset")
                  )
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (i) {
              var s = this,
                n = this.instance.scroll.y,
                o = n + this.windowHeight;
              this.els.forEach(function (t, e) {
                !t ||
                  (t.inView && !i) ||
                  (o >= t.top && n < t.bottom && s.setInView(t, e)),
                  t &&
                    t.inView &&
                    (o < t.top || n > t.bottom) &&
                    s.setOutOfView(t, e);
              }),
                (this.els = this.els.filter(function (t, e) {
                  return null !== t;
                })),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1)),
                t.repeat ||
                  t.speed ||
                  t.sticky ||
                  ((!t.call || (t.call && this.hasCallEventSet)) &&
                    (this.els[e] = null));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  s = i.indexOf(e);
                s < 0 ||
                  (i.splice(s, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                s = this.listeners[i];
              s &&
                0 !== s.length &&
                s.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (t) {
                  e.el.removeEventListener(e.namespace + t, e.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (t) {
                  t.removeEventListener("click", e.setScrollTo, !1);
                });
            },
          },
        ]),
        e
      );
    })(),
    p =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function t(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var y = t(function (t, e) {
      t.exports = {
        polyfill: function () {
          var a = window,
            c = document;
          if (
            !(
              "scrollBehavior" in c.documentElement.style &&
              !0 !== a.__forceSmoothScrollPolyfill__
            )
          ) {
            var t,
              e = a.HTMLElement || a.Element,
              l = 468,
              h = {
                scroll: a.scroll || a.scrollTo,
                scrollBy: a.scrollBy,
                elementScroll: e.prototype.scroll || d,
                scrollIntoView: e.prototype.scrollIntoView,
              },
              u =
                a.performance && a.performance.now
                  ? a.performance.now.bind(a.performance)
                  : Date.now,
              i =
                ((t = a.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                  ? 1
                  : 0);
            (a.scroll = a.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? r.call(
                        a,
                        c.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : a.scrollX || a.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : a.scrollY || a.pageYOffset
                      )
                    : h.scroll.call(
                        a,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : a.scrollX || a.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : a.scrollY || a.pageYOffset
                      ));
              }),
              (a.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (s(arguments[0])
                    ? h.scrollBy.call(
                        a,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : r.call(
                        a,
                        c.body,
                        ~~arguments[0].left + (a.scrollX || a.pageXOffset),
                        ~~arguments[0].top + (a.scrollY || a.pageYOffset)
                      ));
              }),
              (e.prototype.scroll = e.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== s(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      r.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      h.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (e.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : h.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (e.prototype.scrollIntoView = function () {
                if (!0 !== s(arguments[0])) {
                  var t = (function (t) {
                      for (
                        ;
                        t !== c.body &&
                        !1 ===
                          ((i = n((e = t), "Y") && o(e, "Y")),
                          (s = n(e, "X") && o(e, "X")),
                          i || s);

                      )
                        t = t.parentNode || t.host;
                      var e, i, s;
                      return t;
                    })(this),
                    e = t.getBoundingClientRect(),
                    i = this.getBoundingClientRect();
                  t !== c.body
                    ? (r.call(
                        this,
                        t,
                        t.scrollLeft + i.left - e.left,
                        t.scrollTop + i.top - e.top
                      ),
                      "fixed" !== a.getComputedStyle(t).position &&
                        a.scrollBy({
                          left: e.left,
                          top: e.top,
                          behavior: "smooth",
                        }))
                    : a.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth",
                      });
                } else
                  h.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function d(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function s(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function n(t, e) {
            return "Y" === e
              ? t.clientHeight + i < t.scrollHeight
              : "X" === e
              ? t.clientWidth + i < t.scrollWidth
              : void 0;
          }
          function o(t, e) {
            var i = a.getComputedStyle(t, null)["overflow" + e];
            return "auto" === i || "scroll" === i;
          }
          function f(t) {
            var e,
              i,
              s,
              n,
              o = (u() - t.startTime) / l;
            (n = o = 1 < o ? 1 : o),
              (e = 0.5 * (1 - Math.cos(Math.PI * n))),
              (i = t.startX + (t.x - t.startX) * e),
              (s = t.startY + (t.y - t.startY) * e),
              t.method.call(t.scrollable, i, s),
              (i === t.x && s === t.y) || a.requestAnimationFrame(f.bind(a, t));
          }
          function r(t, e, i) {
            var s,
              n,
              o,
              l,
              r = u();
            (l =
              t === c.body
                ? ((n = (s = a).scrollX || a.pageXOffset),
                  (o = a.scrollY || a.pageYOffset),
                  h.scroll)
                : ((n = (s = t).scrollLeft), (o = t.scrollTop), d)),
              f({
                scrollable: s,
                method: l,
                startTime: r,
                startX: n,
                startY: o,
                x: e,
                y: i,
              });
          }
        },
      };
    }),
    m =
      (y.polyfill,
      (function (t) {
        function i() {
          var t,
            e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            s(this, i),
            (t = h(this, r(i).call(this, e))),
            window.addEventListener("scroll", t.checkScroll, !1),
            y.polyfill(),
            t
          );
        }
        return (
          l(i, f),
          o(i, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  u(r(i.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                u(r(i.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.timestamp = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  this.els.length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      (Date.now() - this.timestamp))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                this.els.length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var h = this;
                (this.els = []),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (t, e) {
                      var i = t.dataset[h.name + "Class"] || h.class,
                        s = t.getBoundingClientRect().top + h.instance.scroll.y,
                        n = s + t.offsetHeight,
                        o =
                          "string" == typeof t.dataset[h.name + "Offset"]
                            ? t.dataset[h.name + "Offset"].split(",")
                            : h.offset,
                        l = t.dataset[h.name + "Repeat"],
                        r = t.dataset[h.name + "Call"];
                      l = "false" != l && (null != l || h.repeat);
                      var a = h.getRelativeOffset(o),
                        c = {
                          el: t,
                          id: e,
                          class: i,
                          top: s + a[0],
                          bottom: n - a[1],
                          offset: o,
                          repeat: l,
                          inView: !!t.classList.contains(i),
                          call: r,
                        };
                      h.els.push(c);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var o = this;
                this.els.forEach(function (t, e) {
                  var i =
                      t.el.getBoundingClientRect().top + o.instance.scroll.y,
                    s = i + t.el.offsetHeight,
                    n = o.getRelativeOffset(t.offset);
                  (o.els[e].top = i + n[0]), (o.els[e].bottom = s - n[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t, e, i, s, n, o) {
                var l,
                  r = e ? parseInt(e) : 0;
                if ("string" == typeof t) {
                  if ("top" === t) l = this.html;
                  else if ("bottom" === t)
                    l = this.html.offsetHeight - window.innerHeight;
                  else if (!(l = document.querySelector(t))) return;
                } else if ("number" == typeof t) l = parseInt(t);
                else {
                  if (!t || !t.tagName)
                    return void console.warn(
                      "`targetOption` parameter is not valid"
                    );
                  l = t;
                }
                if (
                  ((r =
                    "number" != typeof l
                      ? l.getBoundingClientRect().top +
                        r +
                        this.instance.scroll.y
                      : l + r),
                  o)
                ) {
                  r = r.toFixed();
                  window.addEventListener("scroll", function t() {
                    window.pageYOffset.toFixed() === r &&
                      (window.removeEventListener("scroll", t), o());
                  });
                }
                window.scrollTo({ top: r, behavior: "smooth" });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                u(r(i.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          i
        );
      })()),
    g = Object.getOwnPropertySymbols,
    w = Object.prototype.hasOwnProperty,
    b = Object.prototype.propertyIsEnumerable;
  var S = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(e)
          .map(function (t) {
            return e[t];
          })
          .join("")
      )
        return !1;
      var s = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          s[t] = t;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
      );
    } catch (t) {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, e) {
        for (
          var i,
            s,
            n = (function (t) {
              if (null == t)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(t);
            })(t),
            o = 1;
          o < arguments.length;
          o++
        ) {
          for (var l in (i = Object(arguments[o])))
            w.call(i, l) && (n[l] = i[l]);
          if (g) {
            s = g(i);
            for (var r = 0; r < s.length; r++)
              b.call(i, s[r]) && (n[s[r]] = i[s[r]]);
          }
        }
        return n;
      };
  function k() {}
  k.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var s = this;
      function n() {
        s.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          s = 0,
          n = i.length;
        s < n;
        s++
      )
        i[s].fn.apply(i[s].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var o = 0, l = s.length; o < l; o++)
          s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var E = k,
    T = t(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, s) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != s ? s : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                0 < e
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, s, n, o, l, r;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((s = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (r = s.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (l = r / s.length),
                    (n = o / i.length),
                    Math.abs(l) < Math.abs(n * this.tolerance) &&
                      this.sensitivity < Math.abs(n) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }.call(p));
    }),
    O = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: -1 < navigator.userAgent.indexOf("Firefox"),
    },
    D = Object.prototype.toString,
    L = Object.prototype.hasOwnProperty;
  function _(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var M = T.Lethargy,
    x = "virtualscroll",
    C = P,
    H = 37,
    j = 38,
    B = 39,
    Y = 40,
    A = 32;
  function P(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          L.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == D.call(t[i]) &&
            e.push(i);
      for (var s = 0; s < e.length; s++) {
        var n = e[s];
        t[n] = _(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = S(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new M()),
      (this._emitter = new E()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function R(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function X(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        s = i.transform || i.webkitTransform || i.mozTransform,
        n = s.match(/^matrix3d\((.+)\)$/);
      return (
        n
          ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
          : ((n = s.match(/^matrix\((.+)\)$/)),
            (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function I(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (P.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(x, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (P.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          O.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (P.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (P.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (P.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        s = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = s.pageX),
        (this.touchStartY = s.pageY),
        this._notify(t);
    }),
    (P.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case H:
        case j:
          e.deltaY = this.options.keyStep;
          break;
        case B:
        case Y:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case A:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (P.prototype._bind = function () {
      O.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        O.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        O.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        O.hasPointer &&
          O.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        O.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (P.prototype._unbind = function () {
      O.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        O.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        O.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        O.hasPointer &&
          O.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        O.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (P.prototype.on = function (t, e) {
      this._emitter.on(x, t, e);
      var i = this._emitter.e;
      i && i[x] && 1 === i[x].length && this._bind();
    }),
    (P.prototype.off = function (t, e) {
      this._emitter.off(x, t, e);
      var i = this._emitter.e;
      (!i[x] || i[x].length <= 0) && this._unbind();
    }),
    (P.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (P.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var V = 4,
    F = 1e-7,
    W = 10,
    q = "function" == typeof Float32Array;
  function K(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function z(t, e) {
    return 3 * e - 6 * t;
  }
  function N(t) {
    return 3 * t;
  }
  function U(t, e, i) {
    return ((K(e, i) * t + z(e, i)) * t + N(e)) * t;
  }
  function $(t, e, i) {
    return 3 * K(e, i) * t * t + 2 * z(e, i) * t + N(e);
  }
  function G(t) {
    return t;
  }
  var J = function (o, e, l, i) {
      if (!(0 <= o && o <= 1 && 0 <= l && l <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (o === e && l === i) return G;
      for (var r = q ? new Float32Array(11) : new Array(11), t = 0; t < 11; ++t)
        r[t] = U(0.1 * t, o, l);
      function s(t) {
        for (var e = 0, i = 1; 10 !== i && r[i] <= t; ++i) e += 0.1;
        var s = e + 0.1 * ((t - r[--i]) / (r[i + 1] - r[i])),
          n = $(s, o, l);
        return 0.001 <= n
          ? (function (t, e, i, s) {
              for (var n = 0; n < V; ++n) {
                var o = $(e, i, s);
                if (0 === o) return e;
                e -= (U(e, i, s) - t) / o;
              }
              return e;
            })(t, s, o, l)
          : 0 === n
          ? s
          : (function (t, e, i, s, n) {
              for (
                var o, l, r = 0;
                0 < (o = U((l = e + (i - e) / 2), s, n) - t)
                  ? (i = l)
                  : (e = l),
                  Math.abs(o) > F && ++r < W;

              );
              return l;
            })(t, e, e + 0.1, o, l);
      }
      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : U(s(t), e, i);
      };
    },
    Q = 38,
    Z = 40,
    tt = 32,
    et = 9,
    it = 33,
    st = 34,
    nt = 36,
    ot = 35,
    lt = (function (t) {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          s(this, n),
          window.scrollTo(0, 0),
          (history.scrollRestoration = "manual"),
          (t = h(this, r(n).call(this, e))).inertia &&
            (t.lerp = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = []),
          (t.stop = !1),
          (t.checkKey = t.checkKey.bind(c(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        l(n, f),
        o(n, [
          {
            key: "init",
            value: function () {
              var e = this;
              this.html.classList.add(this.smoothClass),
                (this.instance = i({ delta: { x: 0, y: 0 } }, this.instance)),
                (this.vs = new C({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    -1 < navigator.platform.indexOf("Win") ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (t) {
                  e.stop ||
                    (e.isTicking ||
                      e.isDraggingScrollbar ||
                      (requestAnimationFrame(function () {
                        e.updateDelta(t), e.isScrolling || e.startScrolling();
                      }),
                      (e.isTicking = !0)),
                    (e.isTicking = !1));
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.transformElements(!0, !0),
                this.checkScroll(!0),
                u(r(n.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              this.instance.limit = this.el.offsetHeight - this.windowHeight;
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              this.scrollToRaf &&
                (cancelAnimationFrame(this.scrollToRaf),
                (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                t.keyCode == et &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0), (document.body.scrollTop = 0);
                  });
              else {
                switch (t.keyCode) {
                  case et:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        e.scrollTo(
                          document.activeElement,
                          -window.innerHeight / 2
                        );
                    });
                    break;
                  case Q:
                    this.instance.delta.y -= 240;
                    break;
                  case Z:
                    this.instance.delta.y += 240;
                    break;
                  case it:
                    this.instance.delta.y -= window.innerHeight;
                    break;
                  case st:
                    this.instance.delta.y += window.innerHeight;
                    break;
                  case nt:
                    this.instance.delta.y -= this.instance.limit;
                    break;
                  case ot:
                    this.instance.delta.y += this.instance.limit;
                    break;
                  case tt:
                    document.activeElement instanceof HTMLInputElement ||
                      document.activeElement instanceof HTMLTextAreaElement ||
                      (t.shiftKey
                        ? (this.instance.delta.y -= window.innerHeight)
                        : (this.instance.delta.y += window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                  this.instance.delta.y > this.instance.limit &&
                    (this.instance.delta.y = this.instance.limit),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this;
              if (
                (0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0]) ||
                this.isScrolling ||
                this.isDraggingScrollbar
              ) {
                this.hasScrollTicking ||
                  (requestAnimationFrame(function () {
                    return t.checkScroll();
                  }),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var e = Math.abs(
                  this.instance.delta.y - this.instance.scroll.y
                );
                !this.animatingScroll &&
                  ((e < 0.5 && 0 != this.instance.delta.y) ||
                    (e < 0.5 && 0 == this.instance.delta.y)) &&
                  this.stopScrolling();
                for (var i = this.sections.length - 1; 0 <= i; i--)
                  this.sections[i].persistent ||
                  (this.instance.scroll.y > this.sections[i].offset &&
                    this.instance.scroll.y < this.sections[i].limit)
                    ? (this.transform(
                        this.sections[i].el,
                        0,
                        -this.instance.scroll.y
                      ),
                      this.sections[i].inView ||
                        ((this.sections[i].inView = !0),
                        (this.sections[i].el.style.opacity = 1),
                        (this.sections[i].el.style.pointerEvents = "all"),
                        this.sections[i].el.setAttribute(
                          "data-".concat(this.name, "-section-inview"),
                          ""
                        )))
                    : (this.sections[i].inView &&
                        ((this.sections[i].inView = !1),
                        (this.sections[i].el.style.opacity = 0),
                        (this.sections[i].el.style.pointerEvents = "none"),
                        this.sections[i].el.removeAttribute(
                          "data-".concat(this.name, "-section-inview")
                        )),
                      this.transform(this.sections[i].el, 0, 0));
                this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.timestamp = Date.now())),
                  this.detectElements(),
                  this.transformElements();
                var s =
                  (this.instance.scroll.y / this.instance.limit) *
                  this.scrollBarLimit;
                this.transform(this.scrollbarThumb, 0, s),
                  u(r(n.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowMiddle = this.windowHeight / 2),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              (this.instance.delta.y -= t.deltaY * this.multiplier),
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit &&
                  (this.instance.delta.y = this.instance.limit);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll.y = R(
                    this.instance.scroll.y,
                    this.instance.delta.y,
                    this.lerp
                  ))
                : this.instance.scroll.y > this.instance.limit
                ? this.setScroll(this.instance.scroll.x, this.instance.limit)
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll.x, 0)
                : this.setScroll(this.instance.scroll.x, this.instance.delta.y);
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta.y != this.instance.scroll.y
                ? (this.instance.speed =
                    (this.instance.delta.y - this.instance.scroll.y) /
                    Math.max(1, Date.now() - this.timestamp))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              (this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                this.instance.limit + this.windowHeight <= this.windowHeight ||
                  ((this.scrollbarHeight =
                    this.scrollbar.getBoundingClientRect().height),
                  (this.scrollbarThumb.style.height = "".concat(
                    (this.scrollbarHeight * this.scrollbarHeight) /
                      (this.instance.limit + this.scrollbarHeight),
                    "px"
                  )),
                  (this.scrollBarLimit =
                    this.scrollbarHeight -
                    this.scrollbarThumb.getBoundingClientRect().height));
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              this.instance.limit + this.windowHeight <= this.windowHeight ||
                ((this.scrollbarHeight =
                  this.scrollbar.getBoundingClientRect().height),
                (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                    (this.instance.limit + this.scrollbarHeight),
                  "px"
                )),
                (this.scrollBarLimit =
                  this.scrollbarHeight -
                  this.scrollbarThumb.getBoundingClientRect().height));
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (e) {
              var i = this;
              !this.isTicking &&
                this.isDraggingScrollbar &&
                (requestAnimationFrame(function () {
                  var t =
                    (((100 * e.clientY) / i.scrollbarHeight) *
                      i.instance.limit) /
                    100;
                  0 < t && t < i.instance.limit && (i.instance.delta.y = t);
                }),
                (this.isTicking = !0)),
                (this.isTicking = !1);
            },
          },
          {
            key: "addElements",
            value: function () {
              var k = this;
              (this.els = []),
                (this.parallaxElements = []),
                this.sections.forEach(function (t, S) {
                  k.sections[S].el
                    .querySelectorAll("[data-".concat(k.name, "]"))
                    .forEach(function (t, e) {
                      var i,
                        s,
                        n = t.dataset[k.name + "Class"] || k.class,
                        o = t.dataset[k.name + "Repeat"],
                        l = t.dataset[k.name + "Call"],
                        r = t.dataset[k.name + "Position"],
                        a = t.dataset[k.name + "Delay"],
                        c = t.dataset[k.name + "Direction"],
                        h = "string" == typeof t.dataset[k.name + "Sticky"],
                        u =
                          !!t.dataset[k.name + "Speed"] &&
                          parseFloat(t.dataset[k.name + "Speed"]) / 10,
                        d =
                          "string" == typeof t.dataset[k.name + "Offset"]
                            ? t.dataset[k.name + "Offset"].split(",")
                            : k.offset,
                        f = t.dataset[k.name + "Target"];
                      s =
                        void 0 !== f ? document.querySelector("".concat(f)) : t;
                      var p =
                          (i = k.sections[S].inView
                            ? s.getBoundingClientRect().top +
                              k.instance.scroll.y -
                              X(s).y
                            : s.getBoundingClientRect().top -
                              X(k.sections[S].el).y -
                              X(s).y) + s.offsetHeight,
                        y = (p - i) / 2 + i;
                      if (h) {
                        var v = t.getBoundingClientRect().top,
                          m = v - i;
                        (i += window.innerHeight),
                          (y =
                            ((p = v + s.offsetHeight - t.offsetHeight - m) -
                              i) /
                              2 +
                            i);
                      }
                      o = "false" != o && (null != o || k.repeat);
                      var g = [0, 0];
                      if (d)
                        for (var w = 0; w < d.length; w++)
                          "string" == typeof d[w]
                            ? d[w].includes("%")
                              ? (g[w] = parseInt(
                                  (d[w].replace("%", "") * k.windowHeight) / 100
                                ))
                              : (g[w] = parseInt(d[w]))
                            : (g[w] = d[w]);
                      var b = {
                        el: t,
                        id: e,
                        class: n,
                        top: i + g[0],
                        middle: y,
                        bottom: p - g[1],
                        offset: d,
                        repeat: o,
                        inView: !!t.classList.contains(n),
                        call: l,
                        speed: u,
                        delay: a,
                        position: r,
                        target: s,
                        direction: c,
                        sticky: h,
                      };
                      k.els.push(b),
                        (!1 !== u || h) && k.parallaxElements.push(b);
                    });
                });
            },
          },
          {
            key: "addSections",
            value: function () {
              var o = this;
              this.sections = [];
              var t = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === t.length && (t = [this.el]),
                t.forEach(function (t, e) {
                  var i =
                      t.getBoundingClientRect().top -
                      1.5 * window.innerHeight -
                      X(t).y,
                    s =
                      i +
                      t.getBoundingClientRect().height +
                      2 * window.innerHeight,
                    n = {
                      el: t,
                      offset: i,
                      limit: s,
                      inView: !1,
                      persistent:
                        "string" == typeof t.dataset[o.name + "Persistent"],
                    };
                  o.sections[e] = n;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, s) {
              var n;
              if (s) {
                var o = X(t),
                  l = R(o.x, e, s),
                  r = R(o.y, i, s);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(l, ",")
                  .concat(r, ",0,1)");
              } else
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (s) {
              var n = this,
                o =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                l = this.instance.scroll.y + this.windowHeight,
                r = this.instance.scroll.y + this.windowMiddle;
              this.parallaxElements.forEach(function (t, e) {
                var i = !1;
                if ((s && (i = 0), t.inView || o))
                  switch (t.position) {
                    case "top":
                      i = n.instance.scroll.y * -t.speed;
                      break;
                    case "elementTop":
                      i = (l - t.top) * -t.speed;
                      break;
                    case "bottom":
                      i = (n.instance.limit - l + n.windowHeight) * t.speed;
                      break;
                    default:
                      i = (r - t.middle) * -t.speed;
                  }
                t.sticky &&
                  (i = t.inView
                    ? n.instance.scroll.y - t.top + window.innerHeight
                    : n.instance.scroll.y < t.top - window.innerHeight &&
                      n.instance.scroll.y < t.top - window.innerHeight / 2
                    ? 0
                    : n.instance.scroll.y > t.bottom &&
                      n.instance.scroll.y > t.bottom + 100 &&
                      t.bottom - t.top + window.innerHeight),
                  !1 !== i &&
                    ("horizontal" === t.direction
                      ? n.transform(t.el, i, 0, !s && t.delay)
                      : n.transform(t.el, 0, i, !s && t.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              var i,
                s = this,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1e3,
                o =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : [0.25, 0, 0.35, 1],
                l =
                  4 < arguments.length &&
                  void 0 !== arguments[4] &&
                  arguments[4],
                r = 5 < arguments.length ? arguments[5] : void 0,
                a = e ? parseInt(e) : 0;
              if (((o = J.apply(void 0, v(o))), "string" == typeof t)) {
                if ("top" === t) i = 0;
                else if ("bottom" === t) i = this.instance.limit;
                else if (!(i = document.querySelector(t))) return;
              } else if ("number" == typeof t) i = parseInt(t);
              else {
                if (!t || !t.tagName)
                  return void console.warn(
                    "`targetOption` parameter is not valid"
                  );
                i = t;
              }
              if ("number" != typeof i) {
                if (!I(i).includes(this.el)) return;
                var c = i.getBoundingClientRect().top,
                  h = I(i).find(function (e) {
                    return s.sections.find(function (t) {
                      return t.el == e;
                    });
                  }),
                  u = 0;
                h && (u = X(h).y), (a = c + a - u);
              } else a = i + a;
              var d = parseFloat(this.instance.delta.y),
                f = Math.max(0, Math.min(a, this.instance.limit)) - d,
                p = function (t) {
                  l
                    ? s.setScroll(s.instance.delta.x, d + f * t)
                    : (s.instance.delta.y = d + f * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var y = Date.now();
              !(function t() {
                var e = (Date.now() - y) / n;
                1 < e
                  ? (p(1),
                    (s.animatingScroll = !1),
                    0 == n && s.update(),
                    r && r())
                  : ((s.scrollToRaf = requestAnimationFrame(t)), p(o(e)));
              })();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = i({}, this.instance, {
                scroll: { x: t, y: e },
                delta: { x: t, y: e },
                speed: 0,
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              u(r(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        n
      );
    })();
  return (function () {
    function e() {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      s(this, e), (this.options = t), Object.assign(this, d, t), this.init();
    }
    return (
      o(e, [
        {
          key: "init",
          value: function () {
            if (
              (this.smoothMobile ||
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    1 < navigator.maxTouchPoints)),
              !0 !== this.smooth || this.isMobile
                ? (this.scroll = new m(this.options))
                : (this.scroll = new lt(this.options)),
              this.scroll.init(),
              window.location.hash)
            ) {
              var t = window.location.hash.slice(
                  1,
                  window.location.hash.length
                ),
                e = document.getElementById(t);
              e && this.scroll.scrollTo(e);
            }
          },
        },
        {
          key: "update",
          value: function () {
            this.scroll.update();
          },
        },
        {
          key: "start",
          value: function () {
            this.scroll.startScroll();
          },
        },
        {
          key: "stop",
          value: function () {
            this.scroll.stopScroll();
          },
        },
        {
          key: "scrollTo",
          value: function (t, e, i, s, n, o) {
            this.scroll.scrollTo(t, e, i, s, n, o);
          },
        },
        {
          key: "setScroll",
          value: function (t, e) {
            this.scroll.setScroll(t, e);
          },
        },
        {
          key: "on",
          value: function (t, e) {
            this.scroll.setEvents(t, e);
          },
        },
        {
          key: "off",
          value: function (t, e) {
            this.scroll.unsetEvents(t, e);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.scroll.destroy();
          },
        },
      ]),
      e
    );
  })();
});
