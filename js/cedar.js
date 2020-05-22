!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
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
    n((n.s = 44));
})({
  0: function (e, t) {
    e.exports = React;
  },
  1: function (e, t, n) {
    "use strict";
    (function (e) {
      var n;
      "undefined" != typeof window ? (n = window) : void 0 !== e && (n = e),
        (t.a = n);
    }.call(this, n(4)));
  },
  2: function (e, t, n) {
    "use strict";
    var a = n(1);
    t.a = function (e, t) {
      var n = t.name;
      if (((e.displayName = n), void 0 !== a.a))
        return (
          a.a.__templates || (a.a.__templates = {}),
          (a.a.__templates[n] = e),
          { Template: e, name: n }
        );
    };
  },
  3: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var a = n(1);
    function r() {
      return a.a.__components;
    }
  },
  4: function (e, t) {
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
    var a;
    a = (function () {
      return this;
    })();
    try {
      a = a || new Function("return this")();
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
        (a = window);
    }
    e.exports = a;
  },
  44: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0),
      r = n.n(a),
      o = n(2),
      l = n(3);
    function c() {
      return (c =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    function i(e, t) {
      if (null == e) return {};
      var n,
        a,
        r = (function (e, t) {
          if (null == e) return {};
          var n,
            a,
            r = {},
            o = Object.keys(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++)
          (n = o[a]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (r[n] = e[n]));
      }
      return r;
    }
    function m(e) {
      var t = e.styles,
        n = i(e, ["styles"]),
        a = Object(l.a)(),
        o = t.forElement("header").color,
        m = new Date().getFullYear();
      return r.a.createElement(
        a.LandingPage,
        c({ styles: t }, n, { style: t.forElement("page") }),
        r.a.createElement(
          "div",
          { className: "container" },
          r.a.createElement(
            "header",
            null,
            r.a.createElement("div", {
              className: "header-accent",
              style: { backgroundColor: o },
            }),
            r.a.createElement(
              "div",
              { className: "header-background-container" },
              r.a.createElement("div", {
                className: "header-background",
                style: t.forElement("header_background"),
              })
            ),
            r.a.createElement(
              "div",
              { className: "header-container" },
              r.a.createElement(
                "div",
                { className: "header" },
                r.a.createElement(a.Heading, {
                  className: "heading heading-primary",
                  name: "header",
                  defaults: {
                    content:
                      "Your catchy page headline goes here. Lorem ipsum dolor.",
                  },
                }),
                r.a.createElement(a.Heading, {
                  className: "subheader",
                  name: "subheader",
                  tag: "h2",
                  defaults: {
                    content:
                      "Short intro paragraph goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare.",
                  },
                })
              ),
              r.a.createElement(
                "div",
                { className: "card", style: t.forElement("card") },
                r.a.createElement(a.Heading, {
                  className: "heading heading-tertiary",
                  name: "form_header",
                  tag: "h2",
                  defaults: { content: "Register Today" },
                }),
                r.a.createElement(a.Content, {
                  className: "form-content",
                  name: "form_content",
                  defaults: {
                    content:
                      "Do not miss your chance. Fill out the form below and sign up today.",
                  },
                }),
                r.a.createElement(
                  a.Form,
                  {
                    style: t.forElement("form", { backgroundColor: "#ffffff" }),
                  },
                  r.a.createElement(a.Errors, null),
                  r.a.createElement(
                    a.CustomFields,
                    null,
                    r.a.createElement(a.AddFieldButton, null),
                    r.a.createElement(a.Button, {
                      name: "submit",
                      group: "button",
                      defaults: { content: "Get a free ebook" },
                    })
                  )
                ),
                r.a.createElement(a.Content, {
                  name: "disclaimer",
                  defaults: {
                    content:
                      "We respect your privacy. Unsubscribe at any time.",
                  },
                })
              )
            )
          ),
          r.a.createElement(
            "div",
            { className: "main-container" },
            r.a.createElement("div", {
              className: "main-background",
              style: {
                backgroundColor: t.forElement("content_background")
                  .backgroundColor,
              },
            }),
            r.a.createElement("div", {
              className: "main-background",
              style: t.forElement("content_background"),
            }),
            r.a.createElement(
              "div",
              { className: "main" },
              r.a.createElement(
                "div",
                { className: "author" },
                r.a.createElement(a.Image, {
                  className: "avatar",
                  name: "image",
                  size: { h: 275, w: 225 },
                }),
                r.a.createElement(
                  "div",
                  { className: "author-bio" },
                  r.a.createElement(a.Content, {
                    name: "name",
                    defaults: { content: "First Last Name" },
                  }),
                  r.a.createElement(a.Content, {
                    name: "title",
                    defaults: { content: "New York Times Bestselling Author" },
                  })
                )
              ),
              r.a.createElement(
                "div",
                { className: "columns" },
                r.a.createElement(
                  "div",
                  { className: "column" },
                  r.a.createElement(a.Heading, {
                    className: "heading heading-secondary",
                    name: "about_label",
                    group: "content_header",
                    tag: "h3",
                    defaults: { content: "Who am I?" },
                  }),
                  r.a.createElement(a.Content, {
                    className: "content",
                    name: "about_content",
                    group: "content",
                    defaults: {
                      content: "Provide some more detail in this content area",
                    },
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "column" },
                  r.a.createElement(a.Heading, {
                    className: "heading heading-secondary",
                    name: "content_header",
                    tag: "h3",
                    defaults: { content: "What will you learn?" },
                  }),
                  r.a.createElement(a.Content, {
                    className: "content",
                    name: "content",
                    defaults: {
                      content: "Provide some more detail in this content area",
                    },
                  })
                )
              )
            )
          ),
          r.a.createElement(a.Content, {
            name: "copyright",
            defaults: { content: "© ".concat(m, " All rights reserved") },
          }),
          r.a.createElement(
            "div",
            {
              className: "powered-by-container",
              style: t.forElement("copyright"),
            },
            r.a.createElement(a.PoweredBy, null)
          )
        )
      );
    }
    (m.style = "landing_page"),
      (m.categories = ["Product"]),
      (m.thumbnail = ""),
      (m.preview = "https://demo.ck.page/cedar"),
      (m.fields = [
        { name: "first_name", label: "Your first name" },
        { name: "email_address", label: "Your email address" },
      ]),
      (t.default = Object(o.a)(m, { name: "Cedar" }));
  },
});
//# sourceMappingURL=cedar.js.map
