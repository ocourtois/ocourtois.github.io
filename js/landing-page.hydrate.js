var __LandingPage = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 4))
  );
})([
  function (e, t) {
    e.exports = React;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var n;
      "undefined" != typeof window ? (n = window) : void 0 !== e && (n = e),
        (t.a = n);
    }.call(this, n(3)));
  },
  function (e, t) {
    e.exports = ReactDOM;
  },
  function (e, t) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
        (r = window);
    }
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      a = n(2),
      u = n.n(a);
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function c(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var l = function (e, t) {
        return (
          (n = t.split("".concat(e, "."))[1]),
          [
            (r = n.split("-"))[0],
            r.slice(1).map(function (e) {
              return (function (e) {
                return ""
                  .concat(e.slice(0, 1).toUpperCase())
                  .concat(e.slice(1));
              })(e);
            }),
          ].join("")
        );
        var n, r;
      },
      f = function (e, t, n) {
        return t
          .filter(function (t) {
            return 0 == t.name.indexOf("".concat(e, "."));
          })
          .filter(function (t) {
            return !n || Object.prototype.hasOwnProperty.call(n, l(e, t.name));
          })
          .reduce(function (t, n) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      c(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : i(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, t, c({}, l(e, n.name), n.value));
          }, {});
      };
    function s(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    var p = function () {
      return o.a.createElement(
        "ul",
        {
          className: "alert alert-error",
          "data-element": "errors",
          "data-group": "alert",
        },
        [].map(function (e) {
          return o.a.createElement("li", { key: e }, e);
        })
      );
    };
    function d() {
      return (d =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function m(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var y = function (e) {
      var t = e.as,
        n = m(e, ["as"]);
      return o.a.createElement(
        t,
        d({}, n, { dangerouslySetInnerHTML: { __html: "" } })
      );
    };
    var b = function (e) {
      return I(e.name).src ? o.a.createElement(y, { as: "div" }) : null;
    };
    function v() {
      return (v =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function O(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var g = function (e) {
        var t = e.name,
          n = e.className,
          r = O(e, ["name", "className"]),
          a = I(t).src;
        if (!a) return null;
        var u = (function (e) {
          try {
            if (e.includes("youtube.com/watch?"))
              return e.split("/watch?v=").pop();
            if (e.includes("youtu.be")) return e.split("/").pop();
          } catch (e) {
            return null;
          }
        })(a);
        return o.a.createElement(
          "div",
          v({ className: "video ".concat(n) }, r),
          o.a.createElement(
            "div",
            {
              className: "video-frame",
              style: {
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
              },
            },
            o.a.createElement("iframe", {
              width: "2560",
              height: "1440",
              style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "0px",
                top: "0px",
              },
              src:
                "https://www.youtube.com/embed/" +
                u +
                "?autoplay=0&color=white&modestbranding=1&rel=0",
              frameBorder: "0",
              allow:
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: !0,
            })
          )
        );
      },
      h = n(1);
    function j(e, t) {
      void 0 === h.a || h.a.__components || (h.a.__components = {}),
        (h.a.__components[e] = t);
    }
    function w() {
      return (w =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function E(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var P = !1;
    var S = function (e) {
      var t = e.children,
        n = e.style,
        r = e.uid;
      return o.a.createElement(
        "div",
        { className: "page", style: n, "data-uid": r },
        t
      );
    };
    j("Form", function (e) {
      var t = e.style,
        n = e.children,
        a = E(e, ["style", "children"]),
        u = _(),
        i = u.id,
        c = u.uid,
        l = u.action,
        f = u.settings,
        s = Object(r.useRef)();
      return (
        Object(r.useLayoutEffect)(function () {
          var e;
          (e = {
            element: s.current,
            id: i,
            uid: c,
            template: "",
            settings: f,
          }),
            P || ((window.__sv_forms = [e]), (P = !0));
        }, []),
        o.a.createElement(
          "form",
          w(
            {
              ref: s,
              method: "POST",
              action: l,
              style: t,
              "data-sv-form": i,
              "data-uid": c,
              className: "form",
            },
            a
          ),
          n
        )
      );
    }),
      j("LandingPage", S),
      j("AddFieldButton", function () {
        return null;
      }),
      j("Button", function (e) {
        var t = e.onClick;
        return o.a.createElement(y, { as: "button", onClick: t });
      }),
      j("CustomFields", function () {
        return o.a.createElement(y, { as: "div" });
      }),
      j("Content", function () {
        return o.a.createElement(y, { as: "div" });
      }),
      j("Errors", p),
      j("Event", function () {
        return o.a.createElement(y, { as: "div" });
      }),
      j("Heading", function () {
        return o.a.createElement(y, { as: "div" });
      }),
      j("Image", b),
      j("PoweredBy", function () {
        return o.a.createElement(y, { as: "a" });
      }),
      j("Video", g),
      n.d(t, "useInfo", function () {
        return _;
      }),
      n.d(t, "useSettings", function () {
        return k;
      }),
      n.d(t, "useStyles", function () {
        return C;
      }),
      n.d(t, "useElement", function () {
        return I;
      }),
      n.d(t, "useElements", function () {
        return M;
      });
    var x = o.a.createContext({});
    function _() {
      return Object(r.useContext)(x);
    }
    function k() {
      return Object(r.useContext)(x).settings;
    }
    function C() {
      var e = Object(r.useContext)(x).styles;
      return {
        forElement: function (t, n) {
          var r = (function (e, t) {
            var n = [];
            return (
              t
                .filter(function (t) {
                  var n = t.name,
                    r = t.value;
                  return (
                    n === "".concat(e, ".background-image") &&
                    r.match("data:image/svg")
                  );
                })
                .forEach(function () {
                  return n.push(
                    {
                      name: "".concat(e, ".background-size"),
                      value: "auto auto",
                    },
                    {
                      name: "".concat(e, ".background-repeat"),
                      value: "repeat",
                    }
                  );
                }),
              [].concat(s(t), n)
            );
          })(t, e);
          return f(t, r, n);
        },
      };
    }
    function I(e) {
      return (
        Object(r.useContext)(x).elements.filter(function (t) {
          return t.name === e;
        })[0] || {}
      );
    }
    var N = function (e) {
        return "Custom" === e.type;
      },
      A = function (e) {
        return "Input" === e.type || N(e);
      },
      M = function () {
        var e = Object(r.useContext)(x).elements;
        return { all: e, custom: e.filter(N), inputs: e.filter(A) };
      };
    function T(e) {
      var t = e.children,
        n = C(),
        r = M();
      return o.a.cloneElement(t, { elements: r, styles: n });
    }
    function D(e) {
      var t = e.id,
        n = e.uid,
        r = e.action,
        a = e.children,
        u = e.elements,
        i = void 0 === u ? [] : u,
        c = e.settings,
        l = void 0 === c ? [] : c,
        f = e.styles,
        s = void 0 === f ? [] : f;
      return o.a.createElement(
        x.Provider,
        {
          value: {
            id: t,
            uid: n,
            action: r,
            elements: i,
            settings: l,
            styles: s,
          },
        },
        o.a.createElement(T, null, a)
      );
    }
    if (document && document.body.dataset.template) {
      var F = document.body.dataset.template,
        B = window.__templates[F],
        L = document.body.children[0],
        R = window.__props || { elements: [], settings: [], styles: [] };
      u.a.hydrate(o.a.createElement(D, R, o.a.createElement(B, null)), L);
    }
    t.default = D;
  },
]).default;
//# sourceMappingURL=landing-page.hydrate.js.map
