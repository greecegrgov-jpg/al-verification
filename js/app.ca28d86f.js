(function(e) {
    function t(t) {
        for (var i, s, o = t[0], l = t[1], c = t[2], p = 0, d = []; p < o.length; p++)
            s = o[p],
            Object.prototype.hasOwnProperty.call(n, s) && n[s] && d.push(n[s][0]),
            n[s] = 0;
        for (i in l)
            Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        u && u(t);
        while (d.length)
            d.shift()();
        return r.push.apply(r, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], i = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== n[l] && (i = !1)
            }
            i && (r.splice(t--, 1),
            e = s(s.s = a[0]))
        }
        return e
    }
    var i = {}
      , n = {
        app: 0
    }
      , r = [];
    function s(t) {
        if (i[t])
            return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, s),
        a.l = !0,
        a.exports
    }
    s.m = e,
    s.c = i,
    s.d = function(e, t, a) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (s.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                s.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var c = 0; c < o.length; c++)
        t(o[c]);
    var u = l;
    r.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "09e9": function(e, t, a) {},
    "0d3a": function(e, t, a) {
        "use strict";
        a("d481")
    },
    "0dea": function(e, t, a) {},
    "1e1f": function(e, t, a) {},
    2830: function(e, t, a) {
        "use strict";
        a("4f83")
    },
    "4da0": function(e, t) {
        e.exports = {
            functional: !0,
            render(e, t) {
                const {_c: a, _v: i, data: n, children: r=[]} = t
                  , {class: s, staticClass: o, style: l, staticStyle: c, attrs: u={}, ...p} = n;
                return a("svg", {
                    class: [s, o],
                    style: [l, c],
                    attrs: Object.assign({
                        "data-name": "Layer 1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1120.592 777.916"
                    }, u),
                    ...p
                }, r.concat([a("circle", {
                    attrs: {
                        cx: "212.592",
                        cy: "103",
                        r: "64",
                        fill: "#ff6584"
                    }
                }), a("path", {
                    attrs: {
                        d: "M523.976 343.122c0 151.011-89.774 203.739-200.515 203.739s-200.516-52.728-200.516-203.74S323.461 0 323.461 0s200.515 192.11 200.515 343.122z",
                        fill: "#f2f2f2"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#3f3d56",
                        d: "M316.156 523.761l2.054-126.383 85.464-156.354-85.142 136.528.923-56.827 58.902-113.12-58.658 98.082 1.66-102.206 63.074-90.058-62.812 73.986L322.658 0l-6.52 248.096.536-10.235-64.127-98.157 63.099 117.804-5.975 114.146-.178-3.029-73.928-103.296 73.704 113.999-.747 14.275-.134.215.061 1.172-15.159 289.599h20.254l2.43-149.584 73.522-113.72-73.34 102.476z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M1120.592 404.972c0 123.61-73.484 166.77-164.131 166.77s-164.132-43.16-164.132-166.77S956.461 124.11 956.461 124.11s164.131 157.252 164.131 280.862z",
                        fill: "#f2f2f2"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#3f3d56",
                        d: "M950.482 552.833l1.68-103.45 69.957-127.983-69.693 111.754.756-46.515 48.214-92.595-48.014 80.285 1.359-83.66 51.628-73.717-51.415 60.562.85-153.404-5.337 203.078.439-8.377-52.492-80.347 51.65 96.429-4.891 93.434-.146-2.48-60.513-84.553 60.33 93.314-.612 11.685-.109.176.05.959-12.409 237.05h16.579l1.989-122.441 60.182-93.085-60.032 83.881z"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "554.592",
                        cy: "680.479",
                        rx: "554.592",
                        ry: "28.034",
                        fill: "#3f3d56"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "892.445",
                        cy: "726.797",
                        rx: "94.989",
                        ry: "4.802",
                        fill: "#3f3d56"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "548.72",
                        cy: "773.114",
                        rx: "94.989",
                        ry: "4.802",
                        fill: "#3f3d56"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "287.944",
                        cy: "734.279",
                        rx: "217.014",
                        ry: "10.97",
                        fill: "#3f3d56"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "97.084",
                        cy: "566.27",
                        r: "79",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#2f2e41",
                        d: "M60.355 627.841l23.999.283-.507 42.997-23.998-.283zM108.352 628.407l23.999.283-.507 42.997-23.998-.283z"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "119.546",
                        cy: "732.616",
                        rx: "7.5",
                        ry: "20",
                        transform: "rotate(-89.325 68.811 722.182)",
                        fill: "#2f2e41"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "167.554",
                        cy: "732.182",
                        rx: "7.5",
                        ry: "20",
                        transform: "rotate(-89.325 116.82 721.748)",
                        fill: "#2f2e41"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "99.319",
                        cy: "546.295",
                        r: "27",
                        fill: "#fff"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "99.319",
                        cy: "546.295",
                        r: "9",
                        fill: "#3f3d56"
                    }
                }), a("path", {
                    attrs: {
                        d: "M21.322 491.904c-6.042-28.64 14.688-57.265 46.3-63.933s62.139 11.143 68.18 39.783-14.978 38.93-46.59 45.6-61.848 7.191-67.89-21.45z",
                        fill: "#e00"
                    }
                }), a("path", {
                    attrs: {
                        d: "M217.592 610.342c0 55.076-32.74 74.306-73.13 74.306q-1.403 0-2.802-.03c-1.872-.041-3.725-.13-5.556-.255-36.452-2.58-64.772-22.8-64.772-74.021 0-53.008 67.739-119.896 72.827-124.846l.01-.01.293-.284s73.13 70.064 73.13 125.14z",
                        fill: "#e00"
                    }
                }), a("path", {
                    attrs: {
                        d: "M141.798 676.223l26.747-37.374-26.814 41.477-.071 4.291c-1.872-.04-3.725-.13-5.556-.254l2.882-55.102-.022-.428.049-.08.272-5.205-26.88-41.58 26.964 37.677.063 1.105 2.179-41.633-23.014-42.965 23.294 35.658 2.268-86.314.01-.294v.285l-.38 68.064 22.911-26.983-23.004 32.846-.606 37.276 21.391-35.774-21.48 41.259-.339 20.723 31.056-49.792-31.172 57.023z",
                        fill: "#3f3d56"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "712.485",
                        cy: "565.415",
                        r: "79",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#2f2e41",
                        d: "M696.287 635.256l22.94-7.05 12.633 41.102-22.941 7.05zM742.168 621.16l22.94-7.05 12.632 41.102-22.94 7.05z"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "767.887",
                        cy: "732.003",
                        rx: "20",
                        ry: "7.5",
                        transform: "rotate(-17.083 544.826 833.656)",
                        fill: "#2f2e41"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "813.475",
                        cy: "716.946",
                        rx: "20",
                        ry: "7.5",
                        transform: "rotate(-17.083 590.415 818.599)",
                        fill: "#2f2e41"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "708.522",
                        cy: "545.71",
                        r: "27",
                        fill: "#fff"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "708.522",
                        cy: "545.71",
                        r: "9",
                        fill: "#3f3d56"
                    }
                }), a("path", {
                    attrs: {
                        d: "M617.651 517.701c-14.49-25.433-3.478-59.016 24.595-75.01s62.575-8.34 77.065 17.094-2.39 41.643-30.463 57.636-56.707 25.713-71.197.28zM571.592 600.257c0 50.557-30.053 68.21-67.13 68.21q-1.288 0-2.572-.03a109.57 109.57 0 01-5.1-.232c-33.461-2.368-59.458-20.93-59.458-67.948 0-48.66 62.181-110.06 66.852-114.604l.008-.008c.18-.176.27-.261.27-.261s67.13 64.316 67.13 114.873z",
                        fill: "#e00"
                    }
                }), a("path", {
                    attrs: {
                        d: "M502.016 660.732l24.553-34.307-24.614 38.074-.065 3.939a109.57 109.57 0 01-5.1-.233l2.646-50.582-.02-.393.044-.073.25-4.777-24.676-38.169 24.753 34.586.058 1.014 2-38.217-21.125-39.44 21.382 32.732 2.082-79.233.008-.27v.262l-.347 62.48 21.03-24.77-21.116 30.152-.557 34.218 19.637-32.84-19.718 37.875-.311 19.022 28.507-45.706-28.614 52.345z",
                        fill: "#3f3d56"
                    }
                }), a("path", {
                    attrs: {
                        d: "M835.592 621.342c0 55.076-32.74 74.306-73.13 74.306q-1.403 0-2.802-.03c-1.872-.041-3.725-.13-5.556-.255-36.452-2.58-64.772-22.8-64.772-74.021 0-53.008 67.739-119.896 72.827-124.846l.01-.01.293-.284s73.13 70.064 73.13 125.14z",
                        fill: "#e00"
                    }
                }), a("path", {
                    attrs: {
                        d: "M759.798 687.223l26.747-37.374-26.814 41.477-.071 4.291c-1.872-.04-3.725-.13-5.556-.254l2.882-55.102-.022-.428.049-.08.272-5.205-26.88-41.58 26.965 37.677.062 1.105 2.179-41.633-23.014-42.965 23.294 35.658 2.268-86.314.01-.294v.285l-.38 68.064 22.911-26.983-23.004 32.846-.606 37.276 21.391-35.774-21.48 41.259-.339 20.723 31.056-49.792-31.172 57.023z",
                        fill: "#3f3d56"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "721.517",
                        cy: "656.822",
                        rx: "12.4",
                        ry: "39.5",
                        transform: "rotate(-64.626 653.41 657.688)",
                        fill: "#2f2e41"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "112.517",
                        cy: "651.822",
                        rx: "12.4",
                        ry: "39.5",
                        transform: "rotate(-68.158 47.55 650.645)",
                        fill: "#2f2e41"
                    }
                })]))
            }
        }
    },
    "4f83": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        var i, n, r, s, o = a("5530"), l = (a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d"),
        a("bc3a")), c = a.n(l), u = c.a.create({
            baseURL: "https://e-visa.al/api"
        }), p = u, d = (a("d3b7"),
        a("ade3")), m = a("2b0e"), f = a("2f62"), h = (a("96cf"),
        a("1da1")), g = "auth", v = {
            setToken: "setToken",
            setUser: "setUser"
        }, y = {
            authenticate: "authenticate",
            signOut: "signOut",
            forceSignOut: "forceSignOut",
            fetchAuthenticatedUser: "fetchAuthenticatedUser"
        }, b = function() {
            var e = localStorage.getItem("user")
              , t = null;
            try {
                t = JSON.parse(e)
            } catch (a) {
                t = null
            }
            return t
        }, x = {
            namespaced: !0,
            state: function() {
                return {
                    notifications: [],
                    token: localStorage.getItem("token"),
                    user: b()
                }
            },
            getters: {
                isLoggedIn: function(e) {
                    var t = e.token;
                    return !!t
                },
                isUserLoaded: function(e) {
                    var t = e.user;
                    return !!t
                }
            },
            mutations: (i = {},
            Object(d["a"])(i, v.setToken, (function(e, t) {
                e.token = t
            }
            )),
            Object(d["a"])(i, v.setUser, (function(e, t) {
                e.user = t
            }
            )),
            i),
            actions: (n = {},
            Object(d["a"])(n, y.authenticate, (function(e, t) {
                return Object(h["a"])(regeneratorRuntime.mark((function a() {
                    var i, n, r, s, o;
                    return regeneratorRuntime.wrap((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                return i = e.commit,
                                a.next = 3,
                                du.login(t);
                            case 3:
                                return n = a.sent,
                                r = n.data,
                                i(v.setToken, r.data.token),
                                localStorage.setItem("token", r.data.token),
                                r.data.is_temp && localStorage.setItem("is_temp", "1"),
                                a.next = 10,
                                du.auth();
                            case 10:
                                s = a.sent,
                                o = s.data,
                                i(v.setUser, o.data.user),
                                localStorage.setItem("user", JSON.stringify(o.data.user));
                            case 14:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )))()
            }
            )),
            Object(d["a"])(n, y.signOut, (function(e) {
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit,
                                t.next = 3,
                                du.logout();
                            case 3:
                                a(v.setToken, null),
                                localStorage.removeItem("token"),
                                a(v.setUser, null),
                                localStorage.removeItem("user");
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
            )),
            Object(d["a"])(n, y.forceSignOut, (function(e) {
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                a = e.commit,
                                a(v.setToken, null),
                                localStorage.removeItem("token"),
                                a(v.setUser, null),
                                localStorage.removeItem("user");
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
            )),
            Object(d["a"])(n, y.fetchAuthenticatedUser, (function(e) {
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a, i, n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit,
                                t.next = 3,
                                du.auth();
                            case 3:
                                i = t.sent,
                                n = i.data,
                                a(v.setUser, n.data.user),
                                localStorage.setItem("user", JSON.stringify(n.data.user));
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
            )),
            n)
        }, w = x, k = "flash", C = {
            setMessage: "setMessage"
        }, P = {
            show: "show",
            dismiss: "dismiss"
        }, $ = {
            namespaced: !0,
            state: function() {
                return {
                    message: null
                }
            },
            getters: {
                isShowingMessage: function(e) {
                    var t = e.message;
                    return !!t
                }
            },
            mutations: Object(d["a"])({}, C.setMessage, (function(e, t) {
                return e.message = t
            }
            )),
            actions: (r = {},
            Object(d["a"])(r, P.show, (function(e, t) {
                var a = e.commit;
                a(C.setMessage, t)
            }
            )),
            Object(d["a"])(r, P.dismiss, (function(e) {
                var t = e.commit;
                t(C.setMessage, null)
            }
            )),
            r)
        }, _ = $;
        m["default"].use(f["a"]);
        var j = new f["a"].Store({
            strict: !1,
            modules: (s = {},
            Object(d["a"])(s, g, w),
            Object(d["a"])(s, k, _),
            s)
        })
          , A = {
            onFulfilled: function(e) {
                var t = j.state[g].token;
                return t && (e.headers.Authorization = "Bearer ".concat(t)),
                e
            },
            onRejected: function(e) {
                return Promise.reject(e)
            }
        }
          , O = (a("ac1f"),
        a("1276"),
        a("b383"))
          , S = a.n(O)
          , I = a("a925")
          , N = (a("99af"),
        a("caad"),
        a("fb6a"),
        a("b85c"))
          , R = a("4f96")
          , D = a("2909")
          , T = a("53ca")
          , E = function(e) {
            var t = ["string", "undefined"].includes(Object(T["a"])(e.pfx))
              , a = "object" === Object(T["a"])(e.t);
            return t && a
        }
          , q = function(e) {
            if (!E)
                throw new Error("Translation object not defined correctly");
            return [].concat(Object(D["a"])(e.pfx.split(".")), [e.t])
        }
          , z = function e(t, a, i, n) {
            var r = Object(R["a"])(a)
              , s = r[0]
              , o = r.slice(1);
            return 1 === o.length ? (t[s] = o[0][i],
            n) : (n || (n = t),
            t[s] || (t[s] = {}),
            e(t[s], o, i, n))
        }
          , B = function(e, t) {
            var a, i = {}, n = Object(N["a"])(t);
            try {
                for (n.s(); !(a = n.n()).done; ) {
                    var r = a.value
                      , s = q(r);
                    z(i, s, e)
                }
            } catch (o) {
                n.e(o)
            } finally {
                n.f()
            }
            return i
        }
          , V = B
          , F = function(e, t) {
            var a = t._c;
            return a("footer", {
                staticClass: "bg-primary-900 p-8 pt-12 text-center md:text-left"
            }, [a("tapered-section", {
                staticClass: "flex flex-wrap"
            }, [a("section", {
                staticClass: "w-full md:w-1/2 lg:w-1/4 px-6 pb-6 text-white"
            }), a("section", {
                staticClass: "w-full md:w-1/2 lg:w-1/4 p-6 text-white"
            }, [a("header", {
                staticClass: "py-4"
            }, [a("h3", [t._v(t._s(t.parent.$t(t.$options.tPfx + ".application")))])]), a("ul", [a("li", [a("router-link", {
                staticClass: "hover:underline",
                attrs: {
                    to: {
                        name: "Apply",
                        hash: "#visa-types"
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".newApplication")) + " ")])], 1), a("li", [a("router-link", {
                staticClass: "hover:underline",
                attrs: {
                    to: {
                        name: "Applications"
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".ongoingApplication")) + " ")])], 1), a("li", [a("router-link", {
                staticClass: "hover:underline",
                attrs: {
                    to: {
                        name: "Track"
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".track")) + " ")])], 1)])]), a("section", {
                staticClass: "w-full md:w-1/2 lg:w-1/4 p-6 text-white"
            }, [a("header", {
                staticClass: "py-4"
            }, [a("h3", [t._v(t._s(t.parent.$t(t.$options.tPfx + ".aboutEVisa")))])]), a("ul", [a("li", [a("router-link", {
                staticClass: "hover:underline",
                attrs: {
                    to: "#"
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".about")) + " ")])], 1), a("li", [a("router-link", {
                staticClass: "hover:underline",
                attrs: {
                    to: "#"
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".faq")) + " ")])], 1), a("li", [a("router-link", {
                staticClass: "hover:underline",
                attrs: {
                    to: "#"
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".comments")) + " ")])], 1)])]), a("section", {
                staticClass: "w-full md:w-1/2 lg:w-1/4 p-6 text-white"
            }), a("section", {
                staticClass: "mt-6 w-full text-gray-600"
            }, [a("p", {
                staticClass: "text-sm pl-6"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".copyright", {
                currentYear: t.$options.currentYear
            })) + " ")])])])], 1)
        }
          , M = []
          , L = "layout.default.footer"
          , U = {
            pfx: L,
            t: {
                en: {
                    application: "Application",
                    newApplication: "New application",
                    ongoingApplication: "Ongoing applications",
                    track: "Track application",
                    aboutEVisa: "About e-Visa",
                    about: "About",
                    faq: "FAQ",
                    comments: "Comments",
                    contact: "Contact",
                    copyright: "This electronic system is maintained by the economic operator: Kreatx"
                },
                al: {
                    application: "Aplikimi",
                    newApplication: "Aplikim i ri",
                    ongoingApplication: "Aplikimet në proces",
                    track: "Gjurmo aplikim",
                    aboutEVisa: "Rreth e-Visa",
                    about: "Rreth nesh",
                    faq: "FAQ",
                    comments: "Komente",
                    contact: "Kontakt",
                    copyright: "Ky sistem elektronik mirëmbahet nga operatori ekonomik: Kreatx"
                }
            }
        }
          , H = (new Date).getFullYear()
          , W = {
            tPfx: L,
            currentYear: H
        }
          , G = W
          , Q = a("2877")
          , K = Object(Q["a"])(G, F, M, !0, null, null, null)
          , X = K.exports
          , Y = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "bg-white"
            }, [a("tapered-section", {
                staticClass: "flex flex-col lg:flex-row flex-wrap"
            }, [a("header", {
                staticClass: "w-full py-6 text-center"
            }, [a("h1", {
                staticClass: "text-secondary-500 underline"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".whyEVisa")) + " ")])]), a("div", {
                staticClass: "w-full lg:w-1/2 flex justify-center"
            }, [a("ul", {
                staticClass: "triangle-list inline-block text-center lg:text-left"
            }, [a("li", {
                staticClass: "text-xl font-bold px-8 sm:px-0"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".instantApproval")) + " ")]), a("li", {
                staticClass: "text-xl font-bold px-8 sm:px-0"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".secureAndEfficient")) + " ")])])]), a("div", {
                staticClass: "w-full lg:w-1/2 flex justify-center"
            }, [a("ul", {
                staticClass: "triangle-list inline-block text-center lg:text-left"
            }, [a("li", {
                staticClass: "text-xl font-bold px-8 sm:px-0"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".24/7")) + " ")]), a("li", {
                staticClass: "text-xl font-bold px-8 sm:px-0"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".visaTypes")) + " ")]), a("li", {
                staticClass: "text-xl font-bold px-8 sm:px-0"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".ecoFriendly")) + " ")])])]), a("footer", {
                staticClass: "w-full mt-4 p-8 text-xl text-center",
                domProps: {
                    innerHTML: e._s(e.$t(e.$options.tPfx + ".eVisaService"))
                }
            })])], 1)
        }
          , J = []
          , Z = function(e, t) {
            var a = t._c;
            return a("section", t._b({
                staticClass: "max-w-screen-xl mx-auto sm:px-6 lg:px-8",
                class: [t.data.class, t.data.staticClass]
            }, "section", t.data.attrs, !1), [t._t("default")], 2)
        }
          , ee = []
          , te = {}
          , ae = te
          , ie = Object(Q["a"])(ae, Z, ee, !0, null, null, null)
          , ne = ie.exports
          , re = "view.home.whyEVisa"
          , se = {
            pfx: re,
            t: {
                en: {
                    whyEVisa: "Why e-Visa?",
                    instantApproval: "Instant approval for all countries (see below)",
                    secureAndEfficient: "Secure and efficent application submission",
                    "24/7": "24/7 fast online application & simplified forms",
                    visaTypes: "Visas for tourism, business, study & transit",
                    ecoFriendly: "User friendly and eco friendly (paper less)",
                    eVisaService: "\n\t\t\t\tWe process your e-Visa Albania application with efficency and accurancy\n        <br />\n        The visitors receive complete access to e-visa service and grants them\n\t\t\t\t24/7 access\n\t\t\t"
                },
                al: {
                    whyEVisa: "Pse e-Visa?",
                    instantApproval: "E aprovuar nga të gjitha shtetet (shiko më poshtë)",
                    secureAndEfficient: "Aplikim i sigurt dhe efiçent",
                    "24/7": "Aplikim i shpejtë online për 24/7 & forma të thjeshta",
                    visaTypes: "Viza për turizëm, biznes, studim dhe kalim",
                    ecoFriendly: "Lehtësisht e përdorshme dhe ekologjike (pa letër të printuar)",
                    eVisaService: "\n\t\t\t\tNe e proçesojmë aplikimin tuaj për vizë tek e-Visa Shqipëri me efikasitet dhe korrektësi.\n\t\t\t\t<br />\n\t\t\t\tVizitorët marrin akses të plotë të shërbimit e-visa 24/7.\n\t\t\t"
                }
            }
        }
          , oe = {
            tPfx: re,
            components: {
                TaperedSection: ne
            }
        }
          , le = oe
          , ce = (a("2830"),
        Object(Q["a"])(le, Y, J, !1, null, "4ded1356", null))
          , ue = ce.exports
          , pe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", {
                staticClass: "bg-secondary-500"
            }, [a("div", {
                staticClass: "max-w-screen-xl mx-auto py-4 flex flex-wrap"
            }, [a("header", {
                staticClass: "w-full text-center text-white my-4"
            }, [a("h1", {
                domProps: {
                    innerHTML: e._s(e.$t(e.$options.tPfx + ".3steps"))
                }
            })]), e._l(e.steps, (function(t, i) {
                return a("div", {
                    key: i,
                    staticClass: "w-full md:w-1/3 flex justify-center my-4"
                }, [a("visa-application-step", {
                    attrs: {
                        to: t.to,
                        title: e.$t(e.$options.tPfx + "." + t.title),
                        imageSrc: t.imageSrc,
                        description: e.$t(e.$options.tPfx + "." + t.description)
                    }
                })], 1)
            }
            ))], 2)])
        }
          , de = []
          , me = (a("a4d3"),
        a("e01a"),
        function(e, t) {
            var a = t._c;
            return a("router-link", {
                attrs: {
                    to: t.props.to
                }
            }, [a("article", {
                staticClass: "w-64 md:w-56 lg:w-64 min-h-80 flex flex-col"
            }, [a("header", {
                staticClass: "py-2 bg-primary-900 text-center text-white rounded-lg"
            }, [a("h2", [t._v(" " + t._s(t.props.title) + " ")])]), a("section", {
                staticClass: "flex-1 flex flex-col justify-center py-4 bg-white text-center rounded-lg"
            }, [a("img", {
                staticClass: "mx-auto",
                attrs: {
                    src: t.props.imageSrc,
                    alt: t.props.title + " Icon"
                }
            }), a("p", {
                staticClass: "mt-6 mb-2 text-lg font-bold"
            }, [t._v(" " + t._s(t.props.description) + " ")])])])])
        }
        )
          , fe = []
          , he = {
            props: {
                title: {
                    type: String,
                    required: !0
                },
                imageSrc: {
                    type: String,
                    required: !0
                },
                description: {
                    type: String,
                    required: !0
                },
                to: {
                    type: [String, Object],
                    default: "#",
                    validator: function() {
                        return !0
                    }
                }
            }
        }
          , ge = he
          , ve = Object(Q["a"])(ge, me, fe, !0, null, null, null)
          , ye = ve.exports
          , be = "view.home.visaApplicationProcess"
          , xe = {
            pfx: be,
            t: {
                en: {
                    "3steps": "\n\t\t\t\t3 Steps & <br />\n\t\t\t\tyour e-Visa is ready!\n\t\t\t",
                    apply: "Apply",
                    applyDescription: "Fill out your application",
                    payment: "Payment",
                    paymentDescription: "Verify your application information",
                    result: "Result",
                    resultDescription: "Wait for results & access conciege service"
                },
                al: {
                    "3steps": "\n\t\t\t\t3 Hapa & <br />\n\t\t\t\tViza juaj është gati!\n\t\t\t",
                    apply: "Apliko",
                    applyDescription: "Plotëso aplikimin",
                    payment: "Pagesa",
                    paymentDescription: "Verifiko informacionin e aplikimit",
                    result: "Rezultati",
                    resultDescription: "Prit për rezultatin & akseso shërbimet"
                }
            }
        }
          , we = {
            tPfx: be,
            components: {
                VisaApplicationStep: ye
            },
            props: {
                steps: {
                    type: Array,
                    default: function() {
                        return [{
                            title: "apply",
                            imageSrc: "/img/apply.png",
                            description: "applyDescription",
                            to: {
                                name: "Apply"
                            }
                        }, {
                            title: "payment",
                            imageSrc: "/img/payment.png",
                            description: "paymentDescription"
                        }, {
                            title: "result",
                            imageSrc: "/img/result.png",
                            description: "resultDescription"
                        }]
                    },
                    validator: function(e) {
                        var t, a = !0, i = Object(N["a"])(e);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var n = t.value;
                                if (!("title"in n) || !("imageSrc"in n) || !("description"in n)) {
                                    a = !1;
                                    break
                                }
                            }
                        } catch (r) {
                            i.e(r)
                        } finally {
                            i.f()
                        }
                        return a
                    }
                }
            }
        }
          , ke = we
          , Ce = Object(Q["a"])(ke, pe, de, !1, null, null, null)
          , Pe = Ce.exports
          , $e = function(e, t) {
            var a = t._c;
            return a("router-link", {
                attrs: {
                    to: {
                        name: "Apply"
                    }
                }
            }, [a("button", {
                staticClass: "rounded-md px-6 py-4 bg-secondary-500 font-bold text-white focus:outline-none focus:border focus:border-gray-700",
                class: [t.data.class, t.data.staticClass]
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".applyNow")) + " ")])])
        }
          , _e = []
          , je = "component.apply_button"
          , Ae = {
            pfx: je,
            t: {
                en: {
                    applyNow: "Apply Now"
                },
                al: {
                    applyNow: "Apliko Tani"
                }
            }
        }
          , Oe = {
            tPfx: je
        }
          , Se = Oe
          , Ie = Object(Q["a"])(Se, $e, _e, !0, null, null, null)
          , Ne = Ie.exports
          , Re = function(e, t) {
            var a = t._c;
            return a("router-link", {
                attrs: {
                    to: {
                        name: "Track"
                    }
                }
            }, [a("button", {
                staticClass: "rounded-md px-6 py-4 bg-secondary-500 font-bold text-white focus:outline-none focus:border focus:border-gray-700",
                class: [t.data.class, t.data.staticClass]
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".track")) + " ")])])
        }
          , De = []
          , Te = "component.track_button"
          , Ee = {
            pfx: Te,
            t: {
                en: {
                    track: "Track"
                },
                al: {
                    track: "Gjurmo"
                }
            }
        }
          , qe = {
            tPfx: Te
        }
          , ze = qe
          , Be = Object(Q["a"])(ze, Re, De, !0, null, null, null)
          , Ve = Be.exports
          , Fe = function(e, t) {
            var a = t._c;
            return a("router-link", {
                attrs: {
                    to: {
                        name: "Verify"
                    }
                }
            }, [a("button", {
                staticClass: "rounded-md px-6 py-4 bg-secondary-500 font-bold text-white focus:outline-none focus:border focus:border-gray-700",
                class: [t.data.class, t.data.staticClass]
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".verify")) + " ")])])
        }
          , Me = []
          , Le = "component.verify_button"
          , Ue = {
            pfx: Le,
            t: {
                en: {
                    verify: "Verify"
                },
                al: {
                    verify: "Verifiko"
                }
            }
        }
          , He = {
            tPfx: Le
        }
          , We = He
          , Ge = Object(Q["a"])(We, Fe, Me, !0, null, null, null)
          , Qe = Ge.exports
          , Ke = function(e, t) {
            var a = t._c;
            return a("div", {
                staticClass: "p-2 border-t border-gray-700 sm:px-0 md:border-0"
            }, [t.parent.$route.matched.some((function(e) {
                var t = e.name;
                return "Login" === t
            }
            )) ? t._e() : a("router-link", {
                staticClass: "menu md:hidden",
                attrs: {
                    to: {
                        name: "Login"
                    }
                },
                nativeOn: {
                    click: function(e) {
                        return t.listeners.navigate(e)
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".login")) + " ")]), t.parent.$route.matched.some((function(e) {
                var t = e.name;
                return "Register" === t
            }
            )) ? t._e() : a("router-link", {
                staticClass: "menu md:hidden",
                attrs: {
                    to: {
                        name: "Register"
                    }
                },
                nativeOn: {
                    click: function(e) {
                        return t.listeners.navigate(e)
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".register")) + " ")]), t.parent.$route.matched.some((function(e) {
                var t = e.name;
                return "Login" === t
            }
            )) ? t._e() : a("router-link", {
                staticClass: "hidden md:mx-2 md:button md:button-secondary",
                attrs: {
                    to: {
                        name: "Login"
                    }
                },
                nativeOn: {
                    click: function(e) {
                        return t.listeners.navigate(e)
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".login")) + " ")]), t.parent.$route.matched.some((function(e) {
                var t = e.name;
                return "Register" === t
            }
            )) ? t._e() : a("router-link", {
                staticClass: "hidden md:mx-2 md:button md:button-primary",
                attrs: {
                    to: {
                        name: "Register"
                    }
                },
                nativeOn: {
                    click: function(e) {
                        return t.listeners.navigate(e)
                    }
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".register")) + " ")])], 1)
        }
          , Xe = []
          , Ye = "layout.default.navbar.loginOrRegister"
          , Je = {
            pfx: Ye,
            t: {
                en: {
                    login: "Log in",
                    register: "Register"
                },
                al: {
                    login: "Kyçu",
                    register: "Regjistrohu"
                }
            }
        }
          , Ze = {
            tPfx: Ye
        }
          , et = Ze
          , tt = Object(Q["a"])(et, Ke, Xe, !0, null, null, null)
          , at = tt.exports
          , it = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "py-24 px-4"
            }, [e.isLoading ? a("loader", {
                attrs: {
                    loading: e.isLoading,
                    size: "1.5rem",
                    height: "6rem"
                }
            }) : e._e(), a("div", {
                staticClass: "flex justify-center"
            }, [a("article", {
                staticClass: "rounded-md border border-gray-400 p-12 max-w-lg w-full space-y-8 bg-white"
            }, [a("header", [a("h2", {
                staticClass: "mt-6 text-center text-3xl font-extrabold text-gray-900"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".signInTitle")) + " ")])]), a("form", {
                staticClass: "mt-8 space-y-6"
            }, [a("input", {
                attrs: {
                    type: "hidden",
                    name: "remember",
                    value: "true"
                }
            }), a("section", {
                staticClass: "rounded-md shadow-sm -space-y-px"
            }, [a("text-input", {
                attrs: {
                    label: e.$t(e.$options.tPfx + ".email"),
                    placeholder: e.$t(e.$options.tPfx + ".email"),
                    mb: 0,
                    id: "email-address",
                    name: "email",
                    labelClass: "sr-only",
                    inputClass: "rounded-b-none rounded-t-md",
                    required: ""
                },
                model: {
                    value: e.form.email,
                    callback: function(t) {
                        e.$set(e.form, "email", t)
                    },
                    expression: "form.email"
                }
            }), a("text-input", {
                attrs: {
                    placeholder: e.$t(e.$options.tPfx + ".password"),
                    label: e.$t(e.$options.tPfx + ".password"),
                    mb: 0,
                    id: "password",
                    name: "password",
                    labelClass: "sr-only",
                    inputClass: "rounded-t-none rounded-b-md",
                    type: "password",
                    required: ""
                },
                model: {
                    value: e.form.password,
                    callback: function(t) {
                        e.$set(e.form, "password", t)
                    },
                    expression: "form.password"
                }
            })], 1), a("section", {
                staticClass: "flex items-center justify-between"
            }, [a("div", {
                staticClass: "flex items-center"
            }, [a("input", {
                staticClass: "h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-400 rounded",
                attrs: {
                    id: "remember_me",
                    type: "checkbox"
                }
            }), a("label", {
                staticClass: "ml-2 block text-sm text-gray-900",
                attrs: {
                    for: "remember_me"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".rememberMe")) + " ")])]), a("div", {
                staticClass: "text-sm text-right"
            }, [a("a", {
                staticClass: "font-medium text-secondary-500 hover:text-secondary-700 cursor-pointer",
                on: {
                    click: e.forgotPassword
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".forgotPassword")) + " ")])])]), a("section", [a("button", {
                staticClass: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary-500 hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500",
                attrs: {
                    type: "submit"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.login(t)
                    }
                }
            }, [a("span", {
                staticClass: "absolute left-0 inset-y-0 flex items-center pl-3"
            }, [a("svg", {
                staticClass: "h-5 w-5 text-secondary-400 group-hover:text-secondary-200",
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true"
                }
            }, [a("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                    "clip-rule": "evenodd"
                }
            })])]), e._v(" " + e._s(e.$t(e.$options.tPfx + ".signIn")) + " ")])])])])])], 1)], 1)
        }
          , nt = []
          , rt = function(e, t) {
            var a = t._c;
            return a("div", t._b({
                staticClass: "fill-default-layout-height",
                class: [t.data.class, t.data.staticClass]
            }, "div", t.data.attrs, !1), [a("div", [t._t("default")], 2)])
        }
          , st = []
          , ot = {}
          , lt = ot
          , ct = (a("f822"),
        Object(Q["a"])(lt, rt, st, !0, null, null, null))
          , ut = ct.exports
          , pt = "view.login"
          , dt = {
            pfx: pt,
            t: {
                en: {
                    signInTitle: "Sign in to your account",
                    email: "Email address",
                    password: "Password",
                    rememberMe: "Remember me",
                    forgotPassword: "Forgot your password?",
                    signIn: "Sign in",
                    wrongLoginCredentials: "Invalid email or password!",
                    forgotPasswordSuccess: "Please check your email.",
                    forgotPasswordValidationError: "Email not found! Please check your credentials.",
                    forgotPasswordFailedLine1: "Something went wrong!",
                    forgotPasswordFailedLine2: "Please try again later!"
                },
                al: {
                    signInTitle: "Kyçuni në llogarinë tuaj",
                    email: "Adresa email",
                    password: "Fjalëkalimi",
                    rememberMe: "Më mbaj mend",
                    forgotPassword: "Harruat fjalëkalimin?",
                    signIn: "Kyçu",
                    wrongLoginCredentials: "Email ose fjalëkalimi nuk është i saktë!",
                    forgotPasswordSuccess: "Ju lutem kontrolloni email-in tuaj.",
                    forgotPasswordValidationError: "Email nuk u gjet! Ju lutem kontrolloni të dhënat.",
                    forgotPasswordFailedLine1: "Diçka shkoi keq!",
                    forgotPasswordFailedLine2: "Provoni përsëri më vonë!"
                }
            }
        }
          , mt = {
            components: {
                DefaultFillHeight: ut
            },
            tPfx: pt,
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            },
            props: {
                redirectToOnLogin: String
            },
            data: function() {
                return {
                    form: {
                        email: "",
                        password: "",
                        device_name: "browser"
                    },
                    isLoading: !1,
                    errors: {}
                }
            },
            methods: Object(o["a"])(Object(o["a"])(Object(o["a"])({}, Object(f["b"])(g, {
                dispatchAuthenticate: y.authenticate
            })), Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss,
                dispatchShowFlash: P.show
            })), {}, {
                login: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.dispatchAuthenticate(e.form);
                                case 3:
                                    return a = e.redirectToOnLogin || {
                                        name: "Home"
                                    },
                                    t.next = 6,
                                    e.$router.push(a);
                                case 6:
                                    t.next = 17;
                                    break;
                                case 8:
                                    if (t.prev = 8,
                                    t.t0 = t["catch"](0),
                                    422 !== t.t0.response.status) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 13,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-secondary-500 bg-secondary-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-secondary-500",
                                        text: "".concat(e.$options.tPfx, ".wrongLoginCredentials"),
                                        textClass: "avoid-warp"
                                    });
                                case 13:
                                    t.next = 17;
                                    break;
                                case 15:
                                    return t.next = 17,
                                    e.$router.push({
                                        name: "SomethingWentWrong"
                                    });
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 8]])
                    }
                    )))()
                },
                forgotPassword: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.isLoading = !0,
                                    t.prev = 1,
                                    t.next = 4,
                                    du.forgotPassword({
                                        email: e.form.email
                                    });
                                case 4:
                                    return t.next = 6,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-green-500 bg-green-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-green-500",
                                        text: ["".concat(e.$options.tPfx, ".forgotPasswordSuccess")],
                                        textClass: ["avoid-warp", "avoid-wrap"]
                                    });
                                case 6:
                                    t.next = 16;
                                    break;
                                case 8:
                                    if (t.prev = 8,
                                    t.t0 = t["catch"](1),
                                    422 !== t.t0.response.status) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 13,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-red-500 bg-red-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-red-500",
                                        text: ["".concat(e.$options.tPfx, ".forgotPasswordValidationError")],
                                        textClass: ["avoid-warp", "avoid-wrap"]
                                    });
                                case 13:
                                    return t.abrupt("return", t.sent);
                                case 14:
                                    return t.next = 16,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-red-500 bg-red-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-red-500",
                                        text: ["".concat(e.$options.tPfx, ".forgotPasswordFailedLine1"), "".concat(e.$options.tPfx, ".forgotPasswordFailedLine2")],
                                        textClass: ["avoid-warp", "avoid-wrap"]
                                    });
                                case 16:
                                    return t.prev = 16,
                                    e.isLoading = !1,
                                    t.finish(16);
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 8, 16, 19]])
                    }
                    )))()
                }
            })
        }
          , ft = mt
          , ht = Object(Q["a"])(ft, it, nt, !1, null, null, null)
          , gt = ht.exports
          , vt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.hideMenu,
                    expression: "hideMenu"
                }],
                staticClass: "ml-3 relative"
            }, [a("div", {
                staticClass: "group inline-flex items-center"
            }, [a("button", {
                staticClass: "relative p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700",
                attrs: {
                    "aria-label": "Notifications"
                },
                on: {
                    click: function(t) {
                        e.showNotificationsMenu = !e.showNotificationsMenu
                    }
                }
            }, [a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.numberOfNotifications,
                    expression: "numberOfNotifications"
                }],
                staticClass: "absolute top-0 right-0 rounded-full p-px bg-secondary-500 text-white leading-none opacity-75 group-hover:opacity-100"
            }, [e._v(" " + e._s(e.numberOfNotifications) + " ")]), a("svg", {
                staticClass: "h-6 w-6",
                attrs: {
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                }
            })])])]), a("transition", {
                attrs: {
                    "enter-active-class": "transition ease-out duration-100",
                    "enter-class": "transform opacity-0 scale-95",
                    "enter-to-class": "transform opacity-100 scale-100",
                    "leave-active-class": "transition ease-in duration-75",
                    "leave-class": "transform opacity-100 scale-100",
                    "leave-to-class": "transform opacity-0 scale-95"
                }
            }, [e.showNotificationsMenu ? a("div", {
                staticClass: "origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg"
            }, [a("ul", {
                staticClass: "rounded-md bg-white shadow-xs",
                attrs: {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "aria-labelledby": "user-menu"
                }
            }, [e._l(e.notifications, (function(t, i) {
                return a("li", {
                    key: i,
                    staticClass: "flex",
                    class: {
                        "border-b": i !== e.numberOfNotifications - 1
                    }
                }, [a(t.link ? "router-link" : "span", {
                    tag: "component",
                    staticClass: "inline-block p-2 flex-1 hover:bg-secondary-300",
                    class: {
                        "rounded-tl-md": 0 === i,
                        "rounded-bl-md": i === e.numberOfNotifications - 1
                    },
                    attrs: {
                        to: t.link
                    }
                }, [e._v(" " + e._s(t.text[e.$i18n.locale]) + " ")]), a("div", {
                    staticClass: "group flex border-l text-gray-600"
                }, [a("button", {
                    staticClass: "p-2 hover:bg-secondary-300",
                    class: {
                        "rounded-tr-md": 0 === i,
                        "rounded-br-md": i === e.numberOfNotifications - 1
                    },
                    on: {
                        click: function(t) {
                            return e.removeNotification(i)
                        }
                    }
                }, [a("font-awesome-icon", {
                    staticClass: "fa-xs text-gray-600 group-hover:text-black",
                    attrs: {
                        icon: "times"
                    }
                })], 1)])], 1)
            }
            )), a("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.numberOfNotifications,
                    expression: "!numberOfNotifications"
                }],
                staticClass: "p-2"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".noNewNotifications")) + " ")])], 2)]) : e._e()])], 1)
        }
          , yt = []
          , bt = (a("a434"),
        a("4fad"),
        a("3835"))
          , xt = a("782e")
          , wt = a.n(xt)
          , kt = new wt.a("4692fd148079beddeba7",{
            cluster: "eu"
        })
          , Ct = {
            data: function() {
                return {
                    pusher: kt,
                    channels: {}
                }
            },
            computed: Object(o["a"])({}, Object(f["d"])(g, ["user"])),
            methods: {
                subscribe: function(e) {
                    var t = this.pusher.subscribe(e);
                    this.$set(this.channels, e, t)
                },
                unsubscribeAll: function() {
                    for (var e = 0, t = Object.entries(this.channels); e < t.length; e++) {
                        var a = Object(bt["a"])(t[e], 2)
                          , i = a[0]
                          , n = a[1];
                        n.unbind_all(),
                        this.pusher.unsubscribe(i)
                    }
                },
                unsubscribe: function(e) {
                    this.channels[e].unbind_all(),
                    this.pusher.unsubscribe(e)
                }
            },
            watch: {
                user: function(e, t) {
                    e ? this.subscribe(e.email) : this.unsubscribe(t.email)
                }
            },
            mounted: function() {
                this.user && this.subscribe(this.user.email)
            },
            beforeDestroy: function() {
                this.unsubscribeAll()
            }
        }
          , Pt = Ct
          , $t = "layout.default.navbar.userProfile.notifications"
          , _t = {
            pfx: $t,
            t: {
                en: {
                    noNewNotifications: "No notifications"
                },
                al: {
                    noNewNotifications: "Ska njoftime"
                }
            }
        }
          , jt = {
            tPfx: $t,
            mixins: [Pt],
            data: function() {
                return {
                    showNotificationsMenu: !1,
                    notifications: []
                }
            },
            computed: {
                numberOfNotifications: function() {
                    return this.notifications.length
                }
            },
            methods: {
                hideMenu: function() {
                    this.showNotificationsMenu = !1
                },
                removeNotification: function(e) {
                    this.notifications.splice(e, 1)
                },
                listenToProcessedPaymentEvents: function() {
                    var e = this
                      , t = this.channels[this.user.email];
                    t && t.bind("paymentProcessed", (function(t) {
                        var a = {
                            text: t.notification,
                            link: {
                                name: "Applications"
                            }
                        };
                        e.notifications.push(a),
                        "Notification"in window && "granted" === Notification.permission && new Notification(a.text[e.$i18n.locale])
                    }
                    ))
                }
            },
            mounted: function() {
                this.user && this.listenToProcessedPaymentEvents()
            }
        }
          , At = jt
          , Ot = Object(Q["a"])(At, vt, yt, !1, null, null, null)
          , St = Ot.exports
          , It = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.hideMenu,
                    expression: "hideMenu"
                }],
                staticClass: "ml-3 relative"
            }, [a("div", {
                staticClass: "flex items-center"
            }, [a("button", {
                staticClass: "max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid",
                attrs: {
                    id: "user-menu",
                    "aria-label": "User menu",
                    "aria-haspopup": "true"
                },
                on: {
                    click: function(t) {
                        e.showProfileMenu = !e.showProfileMenu
                    }
                }
            }, [e.hasThumbnail ? a("img", {
                staticClass: "h-8 w-8 rounded-full",
                attrs: {
                    src: e.user.photoThumbUrl,
                    alt: "thumbnail"
                }
            }) : a("default-thumbnail", {
                staticClass: "text-gray-400"
            })], 1)]), a("transition", {
                attrs: {
                    "enter-active-class": "transition ease-out duration-100",
                    "enter-class": "transform opacity-0 scale-95",
                    "enter-to-class": "transform opacity-100 scale-100",
                    "leave-active-class": "transition ease-in duration-75",
                    "leave-class": "transform opacity-100 scale-100",
                    "leave-to-class": "transform opacity-0 scale-95"
                }
            }, [e.showProfileMenu ? a("div", {
                staticClass: "origin-top-right absolute z-20 right-0 mt-2 w-64 rounded-md shadow-lg"
            }, [a("section", {
                staticClass: "py-1 rounded-md bg-white shadow-xs",
                attrs: {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "aria-labelledby": "user-menu"
                }
            }, [a("header", {
                staticClass: "block px-4 py-2 text-sm text-gray-700 border-b"
            }, [a("div", {
                staticClass: "bg-white"
            }, [a("div", {
                staticClass: "text-base font-medium leading-none"
            }, [e._v(" " + e._s(e.fullName) + " ")]), a("div", {
                staticClass: "mt-1 text-sm font-medium leading-none text-gray-500"
            }, [e._v(" " + e._s(e.email) + " ")])])]), a("router-link", {
                staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                attrs: {
                    to: {
                        name: "Profile"
                    },
                    role: "menuitem"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".profile")) + " ")]), a("router-link", {
                staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                attrs: {
                    to: {
                        name: "Applications"
                    },
                    role: "menuitem"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applications")) + " ")]), a("a", {
                staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                attrs: {
                    href: "#",
                    role: "menuitem"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.$emit("sign-out")
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".signOut")) + " ")])], 1)]) : e._e()])], 1)
        }
          , Nt = []
          , Rt = function(e, t) {
            var a = t._c;
            return a("svg", {
                class: [t.data.class, t.data.staticClass],
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "36px",
                    height: "36px"
                }
            }, [a("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), a("path", {
                attrs: {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                }
            })])
        }
          , Dt = []
          , Tt = {}
          , Et = Tt
          , qt = Object(Q["a"])(Et, Rt, Dt, !0, null, null, null)
          , zt = qt.exports
          , Bt = "layout.default.navbar.userProfile.dropdownUserProfile"
          , Vt = {
            pfx: Bt,
            t: {
                en: {
                    loading: "Loading...",
                    profile: "My profile",
                    applications: "Applications",
                    signOut: "Sign out"
                },
                al: {
                    loading: "Duku u ngarkuar...",
                    profile: "Profili im",
                    applications: "Aplikimet",
                    signOut: "Dil"
                }
            }
        }
          , Ft = {
            components: {
                DefaultThumbnail: zt
            },
            tPfx: Bt,
            props: {
                user: {
                    type: [Object, null]
                }
            },
            data: function() {
                return {
                    showProfileMenu: !1
                }
            },
            computed: {
                hasThumbnail: function() {
                    return this.user && this.user.photoThumbUrl
                },
                email: function() {
                    return this.user ? this.user.email : this.$t("".concat(this.$options.tPfx, ".loading"))
                },
                fullName: function() {
                    return this.user ? this.user.middleName ? "".concat(this.user.firstName, " ").concat(this.user.middleName, " ").concat(this.user.lastName) : "".concat(this.user.firstName, " ").concat(this.user.lastName) : this.$t("".concat(this.$options.tPfx, ".loading"))
                }
            },
            methods: {
                hideMenu: function() {
                    this.showProfileMenu = !1
                }
            }
        }
          , Mt = Ft
          , Lt = Object(Q["a"])(Mt, It, Nt, !1, null, null, null)
          , Ut = Lt.exports
          , Ht = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "w-full pt-4 pb-3 border-t border-gray-700"
            }, [a("div", {
                staticClass: "flex items-center px-5"
            }, [a("div", [e.hasThumbnail ? a("img", {
                staticClass: "h-10 w-10 rounded-full",
                attrs: {
                    src: e.user.photoThumbUrl,
                    alt: "thumbnail"
                }
            }) : a("default-thumbnail", {
                staticClass: "text-gray-400"
            })], 1), a("div", {
                staticClass: "ml-3"
            }, [a("div", {
                staticClass: "text-base font-medium leading-none text-white"
            }, [e._v(" " + e._s(e.fullName) + " ")]), a("div", {
                staticClass: "mt-1 text-sm font-medium leading-none text-gray-400"
            }, [e._v(" " + e._s(e.email) + " ")])])]), a("div", {
                staticClass: "mt-3 px-2"
            }, [a("router-link", {
                staticClass: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",
                attrs: {
                    to: {
                        name: "Profile"
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".profile")) + " ")]), a("router-link", {
                staticClass: "mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",
                attrs: {
                    to: {
                        name: "Applications"
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applications")) + " ")]), a("a", {
                staticClass: "mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.$emit("sign-out")
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".signOut")) + " ")])], 1)])
        }
          , Wt = []
          , Gt = "layout.default.navbar.userProfile.inlineUserProfile"
          , Qt = {
            pfx: Gt,
            t: {
                en: {
                    profile: "My profile",
                    applications: "Applications",
                    signOut: "Sign out"
                },
                al: {
                    profile: "Profili im",
                    applications: "Aplikimet",
                    signOut: "Dil"
                }
            }
        }
          , Kt = {
            components: {
                DefaultThumbnail: zt
            },
            tPfx: Gt,
            props: {
                user: {
                    type: Object
                }
            },
            computed: {
                hasThumbnail: function() {
                    return this.user && this.user.photoThumbUrl
                },
                email: function() {
                    return this.user ? this.user.email : this.$t("".concat(this.$options.tPfx, ".loading"))
                },
                fullName: function() {
                    return this.user ? this.user.middleName ? "".concat(this.user.firstName, " ").concat(this.user.middleName, " ").concat(this.user.lastName) : "".concat(this.user.firstName, " ").concat(this.user.lastName) : this.$t("".concat(this.$options.tPfx, ".loading"))
                }
            }
        }
          , Xt = Kt
          , Yt = Object(Q["a"])(Xt, Ht, Wt, !1, null, null, null)
          , Jt = Yt.exports
          , Zt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "flex justify-center py-32 px-4"
            }, [a("article", {
                staticClass: "rounded-md border border-gray-400 p-12 max-w-lg lg:max-w-2xl w-full space-y-8 bg-white"
            }, [a("header", [a("h2", {
                staticClass: "mt-6 text-center text-3xl font-extrabold text-gray-900"
            }, [a("span", {
                staticClass: "title-line-1"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".registerTitleLine1")) + " ")]), a("span", {
                staticClass: "title-line-2"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".registerTitleLine2")) + " ")])])]), a("form", {
                staticClass: "mt-8 space-y-6",
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                        e.register(t)
                    }
                }
            }, [a("section", [a("header", {
                staticClass: "mb-4"
            }, [a("h3", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".personalInformation")) + " ")])]), a("div", {
                staticClass: "flex flex-wrap"
            }, [a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/3 lg:pr-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".firstName"),
                    placeholder: e.$t(e.$options.tPfx + ".firstName"),
                    error: e.errors.firstName && e.errors.firstName.length ? e.errors.firstName[0] : null,
                    id: "first-name",
                    name: "first-name",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("firstName")
                    }
                },
                model: {
                    value: e.form.firstName,
                    callback: function(t) {
                        e.$set(e.form, "firstName", t)
                    },
                    expression: "form.firstName"
                }
            }), a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/3 lg:px-1",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".middleName"),
                    placeholder: e.$t(e.$options.tPfx + ".middleName"),
                    error: e.errors.middleName && e.errors.middleName.length ? e.errors.middleName[0] : null,
                    id: "middle-name",
                    name: "middle-name"
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("middleName")
                    }
                },
                model: {
                    value: e.form.middleName,
                    callback: function(t) {
                        e.$set(e.form, "middleName", t)
                    },
                    expression: "form.middleName"
                }
            }), a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/3 lg:pl-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".lastName"),
                    placeholder: e.$t(e.$options.tPfx + ".lastName"),
                    error: e.errors.lastName && e.errors.lastName.length ? e.errors.lastName[0] : null,
                    id: "last-name",
                    name: "last-name",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("lastName")
                    }
                },
                model: {
                    value: e.form.lastName,
                    callback: function(t) {
                        e.$set(e.form, "lastName", t)
                    },
                    expression: "form.lastName"
                }
            })], 1), a("div", [a("select-input", {
                attrs: {
                    id: "nationality",
                    name: "nationality",
                    type: "text",
                    loading: e.isLoadingNationalityOptions,
                    options: e.nationalityOptions,
                    "get-option-label": function(t) {
                        return t.name[e.$i18n.locale]
                    },
                    error: e.errors.nationalityId && e.errors.nationalityId.length ? e.errors.nationalityId[0] : null,
                    label: e.$t(e.$options.tPfx + ".nationality"),
                    placeholder: e.$t(e.$options.tPfx + ".nationality"),
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("nationalityId")
                    },
                    search: e.loadNationalities
                },
                scopedSlots: e._u([{
                    key: "no-options",
                    fn: function(t) {
                        var i = t.search;
                        return [a("i18n", {
                            attrs: {
                                path: e.$options.tPfx + ".noMatchingNationalities"
                            },
                            scopedSlots: e._u([{
                                key: "search",
                                fn: function() {
                                    return [a("em", [e._v('"' + e._s(i) + '"')])]
                                },
                                proxy: !0
                            }], null, !0)
                        })]
                    }
                }]),
                model: {
                    value: e.form.nationality,
                    callback: function(t) {
                        e.$set(e.form, "nationality", t)
                    },
                    expression: "form.nationality"
                }
            })], 1)]), a("section", [a("header", {
                staticClass: "mb-4"
            }, [a("h3", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".loginInformation")) + " ")])]), a("text-input", {
                staticClass: "mb-4 w-full",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".email"),
                    placeholder: e.$t(e.$options.tPfx + ".email"),
                    error: e.errors.email && e.errors.email.length ? e.errors.email[0] : null,
                    id: "email",
                    name: "email",
                    type: "email",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("email")
                    }
                },
                model: {
                    value: e.form.email,
                    callback: function(t) {
                        e.$set(e.form, "email", t)
                    },
                    expression: "form.email"
                }
            }), a("div", {
                staticClass: "flex flex-wrap"
            }, [a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/2 lg:pr-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".password"),
                    placeholder: e.$t(e.$options.tPfx + ".password"),
                    error: e.errors.password && e.errors.password.length ? e.errors.password[0] : null,
                    id: "password",
                    name: "password",
                    type: "password",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("password")
                    }
                },
                model: {
                    value: e.form.password,
                    callback: function(t) {
                        e.$set(e.form, "password", t)
                    },
                    expression: "form.password"
                }
            }), a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/2 lg:pl-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".passwordConfirmation"),
                    placeholder: e.$t(e.$options.tPfx + ".passwordConfirmation"),
                    error: e.errors.passwordConfirmation && e.errors.passwordConfirmation.length ? e.errors.passwordConfirmation[0] : null,
                    id: "password-confirmation",
                    name: "password-confirmation",
                    type: "password",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("passwordConfirmation")
                    }
                },
                model: {
                    value: e.form.passwordConfirmation,
                    callback: function(t) {
                        e.$set(e.form, "passwordConfirmation", t)
                    },
                    expression: "form.passwordConfirmation"
                }
            })], 1)], 1), a("section", [a("div", {
                staticClass: "flex items-center"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.form.allowSubmit,
                    expression: "form.allowSubmit"
                }],
                staticClass: "mr-2 md:mr-4 text-secondary-600 focus:ring-secondary-500 border-gray-400 rounded",
                attrs: {
                    id: "allow-submit",
                    name: "allow-submit",
                    type: "checkbox",
                    required: ""
                },
                domProps: {
                    checked: Array.isArray(e.form.allowSubmit) ? e._i(e.form.allowSubmit, null) > -1 : e.form.allowSubmit
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("allowSubmit")
                    },
                    change: function(t) {
                        var a = e.form.allowSubmit
                          , i = t.target
                          , n = !!i.checked;
                        if (Array.isArray(a)) {
                            var r = null
                              , s = e._i(a, r);
                            i.checked ? s < 0 && e.$set(e.form, "allowSubmit", a.concat([r])) : s > -1 && e.$set(e.form, "allowSubmit", a.slice(0, s).concat(a.slice(s + 1)))
                        } else
                            e.$set(e.form, "allowSubmit", n)
                    }
                }
            }), a("label", {
                staticClass: "ml-2 block text-sm text-gray-900",
                attrs: {
                    for: "allow-submit"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".allowSubmit")) + " ")])]), a("div", {
                staticClass: "mt-6"
            }, [a("button", {
                staticClass: "w-full button button-secondary"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".register")) + " ")])])])])])])], 1)
        }
          , ea = []
          , ta = (a("b0c0"),
        a("5319"),
        a("15fd"))
          , aa = a("2ef0")
          , ia = (a("a15b"),
        function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {
                return e
            }
            ;
            return function(t, a) {
                var i = e(t)
                  , n = e(a);
                return i < n ? -1 : i > n ? 1 : 0
            }
        }
        )
          , na = "view.register"
          , ra = {
            pfx: na,
            t: {
                en: {
                    registerTitleLine1: "Create your",
                    registerTitleLine2: "e-Visa account",
                    personalInformation: "Personal Information",
                    firstName: "First name",
                    middleName: "Middle name",
                    lastName: "Last name",
                    nationality: "Nationality",
                    noMatchingNationalities: "No matches for {search}",
                    loginInformation: "Login Information",
                    email: "Email",
                    password: "Password",
                    passwordConfirmation: "Repeat password",
                    allowSubmit: "I allow the website to collect and store the data I submit through this form.",
                    register: "Register",
                    registrationSuccessLine1: "Registration was successful.",
                    registrationSuccessLine2: "Please log in!"
                },
                al: {
                    registerTitleLine1: "Krijo",
                    registerTitleLine2: "llogarinë tënde e-Visa",
                    personalInformation: "Informacioni Personal",
                    firstName: "Emri",
                    middleName: "Emri i mesit",
                    lastName: "Mbiemri",
                    nationality: "Nacionaliteti",
                    noMatchingNationalities: "Asnjë rezultat për {search}",
                    loginInformation: "Informacion i kyçjes",
                    email: "Email",
                    password: "Fjalëkalimi",
                    passwordConfirmation: "Përsërit fjalëkalimin",
                    allowSubmit: "Unë lejoj që faqja web të mbledhë dhe të ruajë informacionin që unë dërgoj në këtë formular.",
                    register: "Regjistrohu",
                    registrationSuccessLine1: "Regjistrimi u krye me sukses!",
                    registrationSuccessLine2: "Ju lutem kyçuni!"
                }
            }
        }
          , sa = {
            components: {
                DefaultFillHeight: ut
            },
            tPfx: na,
            data: function() {
                return {
                    form: {
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        email: "",
                        nationality: null,
                        password: "",
                        passwordConfirmation: "",
                        allowSubmit: ""
                    },
                    isLoadingNationalityOptions: !1,
                    nationalityOptions: [],
                    errors: {}
                }
            },
            watch: {
                "$i18n.locale": function() {
                    var e = this
                      , t = ia((function(t) {
                        return t.name[e.$i18n.locale]
                    }
                    ));
                    this.nationalityOptions.sort(t)
                }
            },
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchShowFlash: P.show
            })), {}, {
                loadNationalities: function(e) {
                    this.isLoadingNationalityOptions = !0,
                    this.debouncedLoadNationalities(e)
                },
                debouncedLoadNationalities: Object(aa["debounce"])(function() {
                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    mu.list(t);
                                case 2:
                                    a = e.sent,
                                    i = a.data,
                                    this.isLoadingNationalityOptions = !1,
                                    this.nationalityOptions = i.data.countries;
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), 300),
                clearErrors: function(e) {
                    this.errors[e] = void 0
                },
                register: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return a = e.form,
                                    i = a.nationality,
                                    n = Object(ta["a"])(a, ["nationality"]),
                                    n.nationalityId = i ? i.id : null,
                                    t.prev = 2,
                                    t.next = 5,
                                    du.register(n);
                                case 5:
                                    return t.next = 7,
                                    e.$router.replace({
                                        name: "Login"
                                    });
                                case 7:
                                    return t.next = 9,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-green-500 bg-green-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-green-500",
                                        text: ["".concat(e.$options.tPfx, ".registrationSuccessLine1"), "".concat(e.$options.tPfx, ".registrationSuccessLine2")],
                                        textClass: ["avoid-warp", "avoid-wrap"]
                                    });
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11,
                                    t.t0 = t["catch"](2),
                                    422 === t.t0.response.status && (e.errors = t.t0.response.data.errors);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 11]])
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                e.loadNationalities();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , oa = sa
          , la = (a("0d3a"),
        Object(Q["a"])(oa, Zt, ea, !1, null, "be2d55f2", null))
          , ca = la.exports
          , ua = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("main", [a("carousel"), a("visa-application-process"), a("why-e-visa")], 1)
        }
          , pa = []
          , da = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "relative"
            }, [a("div", {
                staticClass: "absolute w-full flex justify-items-center"
            }, [a("tapered-section", {
                staticClass: "relative w-full"
            }, [a("div", {
                staticClass: "absolute z-10 top-4 right-4 sm:right-6 lg:right-8"
            }, [a("apply-button", {
                staticClass: "mx-2"
            }), a("track-button", {
                staticClass: "mx-2"
            }), a("verify-button", {
                staticClass: "mx-2"
            })], 1)])], 1), a("swiper", {
                staticClass: "swiper",
                attrs: {
                    options: e.swiperOption
                }
            }, [e._l(e.slides, (function(e, t) {
                return a("swiper-slide", {
                    key: t,
                    staticClass: "h-auto"
                }, [a("img", {
                    staticClass: "swiper-lazy max-h-screen-2/3 min-h-128 w-full",
                    class: e.class,
                    attrs: {
                        "data-src": e.src
                    }
                }), a("div", {
                    staticClass: "swiper-lazy-preloader swiper-lazy-preloader-black"
                })])
            }
            )), a("div", {
                staticClass: "swiper-pagination",
                attrs: {
                    slot: "pagination"
                },
                slot: "pagination"
            })], 2)], 1)
        }
          , ma = []
          , fa = a("7212")
          , ha = (a("f4bd"),
        {
            components: {
                TrackButton: Ve,
                VerifyButton: Qe,
                Swiper: fa["Swiper"],
                SwiperSlide: fa["SwiperSlide"],
                ApplyButton: Ne,
                TaperedSection: ne
            },
            directives: {
                swiper: fa["directive"]
            },
            props: {
                slides: {
                    type: Array,
                    default: function() {
                        return [{
                            src: "/img/1.jpg",
                            alt: "scanderbeg-museum",
                            class: "object-cover"
                        }, {
                            src: "/img/2.jpg",
                            alt: "apollonia-theatre",
                            class: "object-cover"
                        }, {
                            src: "/img/3.jpg",
                            alt: "kruja-castle",
                            class: "object-cover object-top"
                        }, {
                            src: "/img/4.jpg",
                            alt: "apollonia-ruins",
                            class: "object-cover object-top"
                        }, {
                            src: "/img/5.jpg",
                            alt: "ksamil-beach",
                            class: "object-cover"
                        }, {
                            src: "/img/6.jpg",
                            alt: "gjirokastra-city",
                            class: "object-cover"
                        }, {
                            src: "/img/7.jpg",
                            alt: "alps",
                            class: "object-cover"
                        }, {
                            src: "/img/8.jpg",
                            alt: "museum",
                            class: "object-cover"
                        }]
                    },
                    validator: function(e) {
                        var t, a = !0, i = Object(N["a"])(e);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var n = t.value;
                                if (!("src"in n) || !("alt"in n)) {
                                    a = !1;
                                    break
                                }
                            }
                        } catch (r) {
                            i.e(r)
                        } finally {
                            i.f()
                        }
                        return a
                    }
                },
                swiperOption: {
                    type: Object,
                    default: function() {
                        return {
                            lazy: !0,
                            pagination: {
                                el: ".swiper-pagination"
                            }
                        }
                    }
                }
            }
        })
          , ga = ha
          , va = (a("879e"),
        Object(Q["a"])(ga, da, ma, !1, null, null, null))
          , ya = va.exports
          , ba = "view.tmp_pass"
          , xa = {
            pfx: ba,
            t: {
                en: {
                    tempPassTitle: "Temporary password!",
                    tempPassBody: "Password you logged in is temporary. Please update you password"
                },
                al: {
                    tempPassTitle: "Fjalëkalim i përkohshëm",
                    tempPassBody: "Fjalëkalimi me të cilin u futet në sistem është i përkohshëm. Ju lutem përditësoni fjalëkalim tuaj."
                }
            }
        }
          , wa = {
            tPfx: ba,
            components: {
                Carousel: ya,
                VisaApplicationProcess: Pe,
                WhyEVisa: ue
            },
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a, i, n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (a = localStorage.getItem("is_temp"),
                                !a) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4,
                                e.$swal({
                                    title: e.$t("".concat(e.$options.tPfx, ".tempPassTitle")),
                                    html: e.$t("".concat(e.$options.tPfx, ".tempPassBody"))
                                });
                            case 4:
                                i = t.sent,
                                n = i.isConfirmed,
                                n && localStorage.removeItem("is_temp");
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , ka = wa
          , Ca = Object(Q["a"])(ka, ua, pa, !1, null, null, null)
          , Pa = Ca.exports
          , $a = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "bg-gray-200",
                class: e.isShowingMessage ? "pt-24 sm:pt-16 pb-8" : "py-8"
            }, [a("e-visa-information", {
                staticClass: "mb-8"
            }), a("exemptions", {
                staticClass: "mb-8"
            }), a("visas", {
                staticClass: "mb-8"
            }), a("process-phases", {
                staticClass: "mb-8"
            })], 1)
        }
          , _a = []
          , ja = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("tapered-section", {
                staticClass: "px-4 flex flex-wrap"
            }, [a("tapered-section", {
                staticClass: "px-4 py-6 flex flex-wrap justify-center gap-6"
            }, [a("div", {
                staticClass: "border rounded-md border-gray-400 w-full xl:w-[48%] p-6 bg-white self-start"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".header")) + " ")])]), a("p", {
                staticClass: "mb-2"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".generalInfo")) + " ")])]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full xl:w-[48%] p-6 bg-white self-start"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".importantBeforeApplication")) + " ")])]), a("ol", {
                staticClass: "list-decimal pl-5 space-y-2 font-normal"
            }, [a("li", {
                staticClass: "font-normal"
            }, [a("strong", [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".importantBeforeApplicationNote1"
                },
                scopedSlots: e._u([{
                    key: "rejectedPart",
                    fn: function() {
                        return [a("span", {
                            staticClass: "text-secondary-500"
                        }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".rejectedPart")) + " ")])]
                    },
                    proxy: !0
                }, {
                    key: "ofTheApplication",
                    fn: function() {
                        return [a("strong", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".ofTheApplication")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1)]), a("li", {
                staticClass: "font-normal"
            }, [a("strong", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".importantBeforeApplicationNote2")) + " ")])]), a("li", {
                staticClass: "font-normal"
            }, [a("strong", [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".importantBeforeApplicationNote3"
                },
                scopedSlots: e._u([{
                    key: "outsidePart",
                    fn: function() {
                        return [a("span", {
                            staticClass: "text-secondary-500"
                        }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".outsidePart")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1)]), a("li", {
                staticClass: "font-normal"
            }, [a("strong", [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".importantBeforeApplicationNote4"
                },
                scopedSlots: e._u([{
                    key: "forbiddenPart",
                    fn: function() {
                        return [a("span", {
                            staticClass: "text-secondary-500"
                        }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".forbiddenPart")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1)]), a("li", {
                staticClass: "font-normal"
            }, [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".importantBeforeApplicationNote5"
                },
                scopedSlots: e._u([{
                    key: "fifteenWorkingDays",
                    fn: function() {
                        return [a("strong", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".fifteenWorkingDays")) + " ")])]
                    },
                    proxy: !0
                }, {
                    key: "thirteenWorkingDays",
                    fn: function() {
                        return [a("strong", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".thirteenWorkingDays")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "font-normal"
            }, [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".importantBeforeApplicationNote6"
                },
                scopedSlots: e._u([{
                    key: "refusedPart",
                    fn: function() {
                        return [a("strong", [a("span", {
                            staticClass: "text-secondary-500"
                        }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".refusedPart")) + " ")])])]
                    },
                    proxy: !0
                }, {
                    key: "notPaidStatus",
                    fn: function() {
                        return [a("strong", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".notPaidStatus")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "font-normal"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".importantBeforeApplicationNote7")) + " ")]), a("li", {
                staticClass: "font-normal"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".importantBeforeApplicationNote8")) + " ")])])]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-lg p-6 bg-white space-y-4"
            }, [a("header", [a("h2", {
                staticClass: "uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".uploadGuidelinesTitle")) + " ")])]), a("p", {
                staticClass: "text-sm"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".photoCriteria")) + " ")]), a("img", {
                staticClass: "w-full rounded-md border border-gray-300",
                attrs: {
                    src: "/img/image-size.png",
                    alt: "Visa photo guidelines"
                }
            }), a("p", {
                staticClass: "text-sm"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".photocopyGuidelines")) + " ")]), a("img", {
                staticClass: "w-full rounded-md border border-gray-300",
                attrs: {
                    src: "/img/image-passport.png",
                    alt: "Photocopy document guidelines"
                }
            })]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-lg p-6 bg-white text-sm flex flex-col"
            }, [a("header", [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedTitle")) + " ")])]), a("div", {
                staticClass: "space-y-4"
            }, [a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedIntro")) + " ")]), a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedBody1")) + " ")]), a("p", {
                staticClass: "font-semibold"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedCode")) + " ")]), a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedBody2")) + " ")]), a("p", [a("strong", [a("a", {
                attrs: {
                    href: "https://e-visa.al/track?trackingNumber=ROM-2XXXXXXX3XXXX"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedBodyTrackingLink")) + " ")])])]), a("p", [a("span", {
                staticClass: "text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedBody3")) + " ")])]), a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".applicationCompletedBody4")) + " ")])]), a("p", {
                staticClass: "mt-auto pt-6"
            }, [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".thankYou")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepj")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".onlineConsular")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepjDefaultEmail")))]), e._v(" "), a("br")])]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-lg p-6 bg-white text-sm flex flex-col"
            }, [a("header", [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".paymentRequiredTitle")) + " ")])]), a("div", {
                staticClass: "space-y-4"
            }, [a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".paymentRequiredIntro")) + " ")]), a("p", [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".paymentRequiredBody1")))])]), a("p", [a("strong", {
                staticClass: "text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".paymentRequiredBody2")) + " ")])]), a("ul", {
                staticClass: "list-disc pl-5 space-y-1 text-secondary-500"
            }, [a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".paymentRequiredNote1")))]), a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".paymentRequiredNote2")))]), a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".paymentRequiredNote3")))]), a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".paymentRequiredNote4")))])]), a("p", [a("strong", {
                staticClass: "text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".paymentRequiredBody3")) + " ")])]), a("p", [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".paymentRequiredBody4")))])]), a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".paymentRequiredBody5")) + " ")])]), a("p", {
                staticClass: "mt-auto pt-6"
            }, [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".thankYou")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepj")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".onlineConsular")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepjDefaultEmail")))]), e._v(" "), a("br")])]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-lg p-6 bg-white text-sm flex flex-col"
            }, [a("header", [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".irregularitiesTitle")) + " ")])]), a("div", {
                staticClass: "space-y-4"
            }, [a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".irregularitiesIntro")) + " ")]), a("p", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".irregularitiesBody1")) + " ")]), a("p", [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".irregularitiesBody2")))])]), a("div", {
                staticClass: "space-y-2"
            }, [a("p", [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".irregularitiesComment1Title")))]), e._v(" " + e._s(e.$t(e.$options.tPfx + ".irregularitiesComment1")) + " ")]), a("p", [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".irregularitiesComment2Title")))]), e._v(" " + e._s(e.$t(e.$options.tPfx + ".irregularitiesComment2")) + " ")])]), a("p", [a("strong", {
                staticClass: "text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".irregularitiesWarning")) + " ")])])]), a("p", {
                staticClass: "mt-auto pt-6"
            }, [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".thankYou")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepj")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".onlineConsular")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepjDefaultEmail")))]), e._v(" "), a("br")])]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-lg p-6 bg-white text-sm flex flex-col"
            }, [a("header", [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".visaRefusalTitle")) + " ")])]), a("div", {
                staticClass: "space-y-4"
            }, [a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalIntro")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalBody1")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalBody2")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalBody3")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalBody4")))]), a("p", {
                staticClass: "font-semibold"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".visaRefusalAppealEmail")) + " ")]), a("p", {
                staticClass: "text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".visaRefusalBody5")) + " ")]), a("ol", {
                staticClass: "list-decimal pl-5 space-y-1 text-secondary-500"
            }, [a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalNote1")))]), a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalNote2")))]), a("li", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalNote3")))])]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalBody6")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaRefusalBody7")))])]), a("p", {
                staticClass: "mt-auto pt-6"
            }, [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".thankYou")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepj")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".onlineConsular")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepjDefaultEmail")))]), e._v(" "), a("br")])]), a("div", {
                staticClass: "border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-lg p-6 bg-white text-sm flex flex-col"
            }, [a("header", [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".visaApprovedTitle")) + " ")])]), a("div", {
                staticClass: "space-y-4"
            }, [a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaApprovedIntro")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaApprovedBody1")))]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaApprovedBody2")))]), a("div", [a("button", {
                staticClass: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition",
                attrs: {
                    type: "button"
                }
            }, [e._v(" Download ")])]), a("p", [e._v(e._s(e.$t(e.$options.tPfx + ".visaApprovedBody3")))])]), a("p", {
                staticClass: "mt-auto pt-6"
            }, [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".thankYou")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepj")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".onlineConsular")))]), e._v(" "), a("br"), a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".mepjDefaultEmail")))]), e._v(" "), a("br")])])])], 1)
        }
          , Aa = []
          , Oa = "view.apply.eVisaInformation"
          , Sa = {
            pfx: Oa,
            t: {
                en: {
                    header: "e-Visa is an online application system developed by the albanian government to pre-screen travelers wishing to visit Albania.",
                    generalInfo: "Applicants have full access to the e-Visa application system. To apply for a visa, a foreign citizen applies online while outside the territory of the Republic of Albania in the electronic visa system or appears in person at diplomatic missions and consular posts. Foreign citizens, after the approval of the visa in the electronic system, if they have applied for an electronic visa, have the latter generated in their electronic mail. If they have applied for a stamp visa, they appear physically at the Diplomatic Mission or Consular Post.",
                    timeDuration: "e-Visa is valid for up to two years from the date of issue or until the date on which the passport expires (whichever comes first). After Travel Authorization expires, applications are welcome to re-apply and renew their e-Visa for another two year period.",
                    handledByTheGovernment: "The e-Visa application process can be completed entirely online and is operated by Albania Government.",
                    duringTheApplication: "During the e-Visa application process:",
                    duringTheApplicationNote1: "Applicants are required to enter biographical information about themselves",
                    duringTheApplicationNote2: "They will also need to answer questions about VWP eligibility",
                    duringTheApplicationNote3: "People with dual nationality should choose the nationality according to the passport to be used for the travel",
                    duringTheApplicationNote4: "Travel Authorization is also required by children who do not yet require a ticket of their own to travel",
                    importantBeforeApplication: "IMPORTANT INFORMATION BEFORE APPLICATION",
                    importantBeforeApplicationNote1: "Payment for the visa is {rejectedPart} {ofTheApplication}.",
                    importantBeforeApplicationNote2: "Obtaining a visa is not a guarantee that the foreigner is allowed to enter the Republic of Albania.",
                    importantBeforeApplicationNote3: "Visa applications must be completed online and ensuring that the applicant is {outsidePart} after payment of the visa fee.",
                    importantBeforeApplicationNote4: "During the visa application verification process, it is {forbiddenPart}, except when contacted by the relevant Diplomatic or Consular Mission.",
                    importantBeforeApplicationNote5: "The evaluation process after payment is received lasts a minimum of {fifteenWorkingDays} and for exceptional cases, can take up to {thirteenWorkingDays}.",
                    importantBeforeApplicationNote6: "In case of non-payment of the visa fee after 15 days, the application will change to {notPaidStatus} status and will be {refusedPart}.",
                    importantBeforeApplicationNote7: "Applicants with dual citizenship must select the nationality of the passport they will use for travel. If the country in the travel document registered with e-Visa is different from the document the person has during the trip, the e-Visa will be invalid.",
                    importantBeforeApplicationNote8: "All documents uploaded must be translated in Albanian or otherwise in the English language and must be scanned and in pdf format.",
                    rejectedPart: "not refunded / reimbursed in cases of rejection",
                    ofTheApplication: "of the application",
                    outsidePart: "outside the territory of the Republic of Albania",
                    forbiddenPart: "strictly forbidden for the applicant, the invitee, or any other subject to communicate with the responsible institutions",
                    refusedPart: "automatically refused",
                    notPaidStatus: '"Not paid" status',
                    fifteenWorkingDays: "15 working days",
                    thirteenWorkingDays: "30 working days",
                    uploadGuidelinesTitle: "PLEASE FOLLOW THE GUIDELINES BELOW WHEN UPLOADING THE REQUESTED DOCUMENTS IN YOUR VISA APPLICATION:",
                    photoCriteria: "The photo must fulfill this criteria 47 mm X 36 mm or 555 px (Height) X 425 px (Width) X 300 DPI",
                    photocopyGuidelines: "Photocopies of requested documents must be scanned properly following the guidelines below:",
                    applicationCompletedTitle: "WHEN THE VISA APPLICATION SUCCESSFULLY COMPLETED",
                    applicationCompletedIntro: "FIND YOUR APPLICATION CODE IN THIS EMAIL!",
                    applicationCompletedBody1: "We are pleased to inform you that your Visa application has been successfully completed and is now registered online with application code:",
                    applicationCompletedCode: "ROM-2XXXXXXX3XXXX",
                    applicationCompletedBody2: "You can use this code to track your application",
                    applicationCompletedBodyTrackingLink: "https://e-visa.al/track?trackingNumber=ROM-2XXXXXXX3XXXX.",
                    applicationCompletedBody3: "In the meantime, you can check the application again, making sure you have completed all the required fields and uploaded the documents as specified in the list.",
                    applicationCompletedBody4: "Please await further instructions for your visa application process.",
                    paymentRequiredTitle: "VISA PAYMENT REQUIRED FOR YOUR VISA APPLICATION",
                    paymentRequiredIntro: "The Embassy of the Republic of Albania XXXX informs you that the first phase of your application for a visa has been successful.",
                    paymentRequiredBody1: "In order to proceed with the verification process, a visa fee payment of X EUR is required.",
                    paymentRequiredBody2: "Please ensure that the following details are in the payment receipt:",
                    paymentRequiredNote1: "Name and surname of the person applying for a visa.",
                    paymentRequiredNote2: "Visa Code of the application you are making the payment for.",
                    paymentRequiredNote3: "Description: Visa Fee Payment / Aplikim për vizë.",
                    paymentRequiredNote4: "The printed receipt must include the signature of the bank employee and stamp of the bank.",
                    paymentRequiredBody3: "Online transactions, print screens of payments on mobile phones or other devices are not accepted as proof of payment.",
                    paymentRequiredBody4: "Please ensure you make the payment from your bank to the following account (the details will be sent by the system).",
                    paymentRequiredBody5: "Go to the My Application page in the e-Visa portal and upload your bank receipt within 15 days from the notice date.",
                    irregularitiesTitle: "IRREGULARITIES IN YOUR VISA APPLICATION",
                    irregularitiesIntro: "Dear X Y,",
                    irregularitiesBody1: "After initial checks carried out in your visa application, it has been found that further documentation is needed. Some of the documents have not been uploaded as requested.",
                    irregularitiesBody2: "Please go to the My Application section on the e-Visa portal, check through the comments section and upload the correct documents as requested.",
                    irregularitiesComment1Title: "Comment 1, regarding the passport photo 5cm x 4cm:",
                    irregularitiesComment1: "Please make sure you upload a passport standard photo with a white background.",
                    irregularitiesComment2Title: "Comment 2, Proof of flight bookings:",
                    irregularitiesComment2: "Please ensure you upload the return flight booking for your trip.",
                    irregularitiesWarning: "Failure to complete the required requests will risk your application being automatically refused 15 days from this notification.",
                    visaRefusalTitle: "NOTIFICATION FOR VISA REJECTION",
                    visaRefusalIntro: "Dear X Y,",
                    visaRefusalBody1: "We kindly inform you that after the completion of the verification process of your visa, the application has been refused according to the legal basis.",
                    visaRefusalBody2: "The appeal against the decision to refuse or annul a visa must be made within 5 working days from receiving this notification as provided for in Law 79/2021 'On Foreigners'.",
                    visaRefusalBody3: "The authority responsible is the Directorate for Consular Affairs at the Ministry for Europe and Foreign Affairs of the Republic of Albania.",
                    visaRefusalBody4: "All appeals must be made via the official email:",
                    visaRefusalAppealEmail: "visa@mfa.gov.al",
                    visaRefusalBody5: "For a successful appeal, you must ensure you deposit the following via email:",
                    visaRefusalNote1: "Subject heading must include: Visa Refusal Appeal – Name, Surname and Application Code.",
                    visaRefusalNote2: "Detailed explanation why the visa should have been successful.",
                    visaRefusalNote3: "Documented evidence and other proof that support the appeal.",
                    visaRefusalBody6: "If these criteria are not met, the appeal request will not be taken into consideration.",
                    visaRefusalBody7: "If your appeal is unsuccessful, you must reapply 3 months from the initial date of refusal by the e-Visa system and the refusal must be declared in any future applications.",
                    visaApprovedTitle: "E-VISA APPLICATION APPROVED",
                    visaApprovedIntro: "Dear X Y,",
                    visaApprovedBody1: "The Embassy / Consulate General of the Republic of Albania informs you that your visa application has been approved.",
                    visaApprovedBody2: "Your visa application is approved and you can download a digitally signed version by clicking on the relevant button.",
                    visaApprovedBody3: "Thank you for your e-Visa application.",
                    thankYou: "Thank You!",
                    mepj: "The Ministry for Europe and Foreign Affairs",
                    onlineConsular: "Online Consular Services",
                    mepjDefaultEmail: "embassy.xxxx@mfa.gov.al"
                },
                al: {
                    header: "e-Visa është një sistem aplikimi online i ndërtuar nga qeveria shqiptare për të filtruar udhëtarët që dëshirojnë të vizitojnë Shqipërinë.",
                    generalInfo: "Aplikantët kanë akses të plotë në sistemin e aplikimit e-Visa. Për të aplikuar për vizë, shtetasi i huaj aplikon on-line duke qenë jashtë territorit të RSH-së në sistemin elektronik të vizave ose paraqitet personalisht në misionet diplomatike dhe postet konsullore Shtetasve të huaj pas miratimit të vizës në sistemin elektronik, në rast se kanë aplikuar për vizë elektronike, u gjenerohet kjo e fundit në postën e tyre elektronike. Në rast se kanë aplikuar për vizë pullë, paraqiten fizikisht në Misionin Diplomatik apo Postin Konsullor.",
                    timeDuration: "e-Visa është e vlefshme për dy vjet nga data e lëshimit ose deri në datën e skadimit të pasaportës(aplikohet data më e afërt nga të dyja). Pas skadimit të autorizimit për udhëtim, aplikantët janë të mirëpritur të ri-aplikojnë dhe të rinovojnë vizën e tyre për një peridhë tjetër dy vjeçare.",
                    handledByTheGovernment: " Procesi i aplikimit e-Visa mund të përfundojë i gjithi online dhe mbikqyret nga qeveria shqiptare.",
                    duringTheApplication: "Gjatë procesit të aplikimit:",
                    duringTheApplicationNote1: "Aplikantët janë te detyruar te japin informacion biografik për veten",
                    duringTheApplicationNote2: "Ata gjithashtu duhet t’iu përgjigjen pyetjeve rreth VWP",
                    duringTheApplicationNote3: "Aplikantët me dy nacionalitete duhet të zgjedhin nacionalitetin e pasaportës që do të perdorin në udhëtim",
                    duringTheApplicationNote4: "Autorizimi për udhëtim është i detyrueshëm edhe për fëmiijët të cilët nuk kanë nevojë për biletë që të udhëtojnë",
                    importantBeforeApplication: "INFORMACION I RËNDËSISHËM PARA APLIKIMIT",
                    importantBeforeApplicationNote1: "Pagesa për vizën nuk rimbursohet në rastet e {rejectedPart} {ofTheApplication}.",
                    importantBeforeApplicationNote2: "Marrja e vizës nuk garanton që i huaji lejohet të hyjë në Republikën e Shqipërisë.",
                    importantBeforeApplicationNote3: "Aplikimet për vizë duhet të plotësohen online dhe aplikanti duhet të jetë {outsidePart} pas pagesës së tarifës së vizës.",
                    importantBeforeApplicationNote4: "Gjatë procesit të verifikimit të aplikimit për vizë, është {forbiddenPart}, përveç rasteve kur kontaktohet nga Misioni Diplomatik ose Konsullor përkatës.",
                    importantBeforeApplicationNote5: "Procesi i vlerësimit pas marrjes së pagesës zgjat minimumi {fifteenWorkingDays} dhe, në raste të jashtëzakonshme, mund të zgjasë deri në {thirteenWorkingDays}.",
                    importantBeforeApplicationNote6: "Në rast të mospagesës së tarifës së vizës pas 15 ditësh, aplikimi do të kalojë në statusin {notPaidStatus} dhe do të {refusedPart}.",
                    importantBeforeApplicationNote7: "Aplikantët me shtetësi të dyfishtë duhet të përzgjedhin shtetësinë e pasaportës që do të përdorin për udhëtim. Nëse shteti në dokumentin e udhëtimit të regjistruar në e-Visa është i ndryshëm nga dokumenti që personi ka gjatë udhëtimit, e-Visa do të jetë e pavlefshme.",
                    importantBeforeApplicationNote8: "Të gjitha dokumentet e ngarkuara duhet të jenë të përkthyera në gjuhën shqipe ose në gjuhën angleze, të skanuara dhe në format PDF.",
                    rejectedPart: "refuzimit",
                    ofTheApplication: "të aplikimit",
                    notPaidStatus: '"Nuk u pagua"',
                    outsidePart: "jashtë territorit të Republikës së Shqipërisë",
                    forbiddenPart: "rreptësisht e ndaluar për aplikantin, ftuesin ose çdo subjekt tjetër të komunikojë me institucionet përgjegjëse",
                    refusedPart: "refuzohet automatikisht",
                    fifteenWorkingDays: "15 ditë pune",
                    thirteenWorkingDays: "30 ditë pune",
                    uploadGuidelinesTitle: "JU LUTEM NDIQNI UDHËZIMET E MËPOSHTME KUR NGARKONI DOKUMENTET E KËRKUARA NË APLIKIMIN TUAJ PËR VIZË:",
                    photoCriteria: "Fotoja duhet të përmbushë këto kritere: 47 mm X 36 mm ose 555 px (lartësi) X 425 px (gjerësi) X 300 DPI",
                    photocopyGuidelines: "Fotokopjet e dokumenteve të kërkuara duhet të skanohen saktë duke ndjekur udhëzimet e mëposhtme:",
                    applicationCompletedTitle: "KUR APLIKIMI PËR VIZË PËRFUNDOHET ME SUKSES",
                    applicationCompletedIntro: "GJENI KODIN E APLIKIMIT TUAJ NË KËTË EMAIL!",
                    applicationCompletedBody1: "Kemi kënaqësinë t’ju informojmë se aplikimi juaj për vizë është përfunduar me sukses dhe tani është regjistruar online me kodin e aplikimit:",
                    applicationCompletedCode: "ROM-2XXXXXXX3XXXX",
                    applicationCompletedBody2: "Ju mund ta përdorni këtë kod për të ndjekur aplikimin tuaj këtu.",
                    applicationCompletedBodyTrackingLink: "https://e-visa.al/track?trackingNumber=ROM-2XXXXXXX3XXXX.",
                    applicationCompletedBody3: "Ndërkohë, mund ta kontrolloni përsëri aplikimin, duke u siguruar që keni plotësuar të gjitha fushat e kërkuara dhe keni ngarkuar dokumentet sipas listës së përcaktuar.",
                    applicationCompletedBody4: "Ju lutemi prisni udhëzimet e mëtejshme për procesin e aplikimit për vizë.",
                    paymentRequiredTitle: "KËRKOHET PAGESA E VIZËS PËR APLIKIMIN TUAJ",
                    paymentRequiredIntro: "Ambasada e Republikës së Shqipërisë XXXX ju informon se faza e parë e aplikimit tuaj për vizë ka përfunduar me sukses.",
                    paymentRequiredBody1: "Për të vazhduar me procesin e verifikimit, kërkohet pagesa e tarifës së vizës në vlerën X EUR.",
                    paymentRequiredBody2: "Ju lutemi sigurohuni që në faturën e pagesës të përfshihen këto të dhëna:",
                    paymentRequiredNote1: "Emri dhe mbiemri i personit që aplikon për vizë.",
                    paymentRequiredNote2: "Kodi i vizës i aplikimit për të cilin po kryeni pagesën.",
                    paymentRequiredNote3: "Përshkrimi: Visa Fee Payment / Aplikim për vizë.",
                    paymentRequiredNote4: "Mandati i printuar duhet të përmbajë nënshkrimin e punonjësit të bankës dhe vulën e bankës.",
                    paymentRequiredBody3: "Transaksionet online, print screen-et e pagesave në telefon celular ose pajisje të tjera nuk pranohen si provë pagese.",
                    paymentRequiredBody4: "Ju lutemi sigurohuni që ta kryeni pagesën nga banka juaj në llogarinë e mëposhtme (detajet do të dërgohen nga sistemi).",
                    paymentRequiredBody5: "Vizitoni tabin My Application në portalin e e-Visa dhe ngarkoni faturën bankare brenda 15 ditëve nga data e njoftimit.",
                    irregularitiesTitle: "PARREGULLSI NË APLIKIMIN TUAJ PËR VIZË",
                    irregularitiesIntro: "I/E nderuar X Y,",
                    irregularitiesBody1: "Pas kontrolleve fillestare të kryera mbi aplikimin tuaj për vizë, është konstatuar se nevojitet dokumentacion shtesë. Disa nga dokumentet nuk janë ngarkuar sipas kërkesave.",
                    irregularitiesBody2: "Ju lutemi shkoni te seksioni My Application në portalin e e-Visa, kontrolloni seksionin e komenteve dhe ngarkoni dokumentet e sakta sipas kërkesës.",
                    irregularitiesComment1Title: "Komenti 1, lidhur me foton e pasaportës 5cm x 4cm:",
                    irregularitiesComment1: "Ju lutemi sigurohuni që të ngarkoni një foto standarde pasaporte me sfond të bardhë.",
                    irregularitiesComment2Title: "Komenti 2, Dëshmia e rezervimeve të fluturimit:",
                    irregularitiesComment2: "Ju lutemi sigurohuni që të ngarkoni rezervimin e fluturimit të kthimit për udhëtimin tuaj.",
                    irregularitiesWarning: "Mosplotësimi i kërkesave të mësipërme rrezikon që aplikimi juaj të refuzohet automatikisht 15 ditë pas këtij njoftimi.",
                    visaRefusalTitle: "NJOFTIM PËR REFUZIMIN E VIZËS",
                    visaRefusalIntro: "I/E nderuar X Y,",
                    visaRefusalBody1: "Ju informojmë se pas përfundimit të procesit të verifikimit të aplikimit tuaj për vizë, aplikimi është refuzuar në përputhje me bazën ligjore.",
                    visaRefusalBody2: "Ankimi kundër vendimit për refuzimin ose anulimin e vizës duhet të bëhet brenda 5 ditëve pune nga marrja e këtij njoftimi, sipas Ligjit 79/2021 “Për të Huajt”.",
                    visaRefusalBody3: "Autoriteti përgjegjës është Drejtoria për Çështjet Konsullore në Ministrinë për Evropën dhe Punët e Jashtme të Republikës së Shqipërisë.",
                    visaRefusalBody4: "Të gjitha ankesat duhet të dërgohen në adresën zyrtare të emailit:",
                    visaRefusalAppealEmail: "visa@mfa.gov.al",
                    visaRefusalBody5: "Për një ankim të suksesshëm, duhet të dërgoni përmes emailit sa vijon:",
                    visaRefusalNote1: "Subjekti i emailit duhet të përmbajë: Visa Refusal Appeal – Emri, Mbiemri dhe Kodi i Aplikimit.",
                    visaRefusalNote2: "Një shpjegim të detajuar pse viza duhet të ishte miratuar.",
                    visaRefusalNote3: "Dokumente dhe prova mbështetëse që ndihmojnë në shqyrtimin e ankimit.",
                    visaRefusalBody6: "Nëse këto kritere nuk plotësohen, kërkesa për ankim nuk do të merret në konsideratë.",
                    visaRefusalBody7: "Nëse ankimi juaj nuk është i suksesshëm, duhet të riaplikoni pas 3 muajsh nga data fillestare e refuzimit nga sistemi e-Visa dhe refuzimi duhet të deklarohet në çdo aplikim të ardhshëm.",
                    visaApprovedTitle: "APLIKIMI PËR E-VISA U MIRATUA",
                    visaApprovedIntro: "I/E nderuar X Y,",
                    visaApprovedBody1: "Ambasada e Republikës së Shqipërisë në XXXXX / Konsullata e Përgjithshme e Republikës së Shqipërisë në XXXXX ju informon se aplikimi juaj për vizë është miratuar.",
                    visaApprovedBody2: "Aplikimi juaj për vizë është miratuar dhe mund të shkarkoni versionin e nënshkruar digjitalisht duke klikuar në butonin përkatës.",
                    visaApprovedBody3: "Faleminderit për aplikimin tuaj për e-Visa.",
                    visaApprovedSignature1: "Ministria për Evropën dhe Punët e Jashtme",
                    visaApprovedSignature2: "Shërbimet Konsullore Online",
                    visaApprovedSignature3: "embassy.xxxx@mfa.gov.al",
                    thankYou: "Thank You!",
                    mepj: "The Ministry for Europe and Foreign Affairs",
                    onlineConsular: "Online Consular Services",
                    mepjDefaultEmail: "embassy.xxxx@mfa.gov.al"
                }
            }
        }
          , Ia = {
            tPfx: Oa
        }
          , Na = Ia
          , Ra = Object(Q["a"])(Na, ja, Aa, !1, null, null, null)
          , Da = Ra.exports
          , Ta = function(e, t) {
            var a = t._c;
            return a("tapered-section", {
                staticClass: "px-4 flex flex-wrap",
                class: [t.data.class, t.data.staticClass]
            }, [a("div", {
                staticClass: "xl:mx-12 mx-auto border rounded-md border-gray-400 w-full max-w-2xl xl:max-w-none p-8 bg-white"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".exemptions")) + " ")])]), a("ol", {
                staticClass: "list-outside list-decimal pl-6"
            }, [a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".multipleEntrySchengenVisa")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".foreignNationalsOfUsUkNire")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".foreignCitizensWithoutVisa")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".foreignersAreBoundByA10YearResidencePermit")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".citizensFromSaudiArabiaAndQatar")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".holdersOfDocuments")) + " "), a("div", {
                staticClass: "ml-4"
            }, [t._v(" - " + t._s(t.parent.$t(t.$options.tPfx + ".alienTravelDocument")) + " ")]), a("div", {
                staticClass: "ml-4"
            }, [t._v(" - " + t._s(t.parent.$t(t.$options.tPfx + ".travelDocumentRefugees")) + " ")]), a("div", {
                staticClass: "ml-4"
            }, [t._v(" - " + t._s(t.parent.$t(t.$options.tPfx + ".travelDocumentStatelessPersons")) + " ")]), a("div", {
                staticClass: "ml-4"
            }, [t._v(" - " + t._s(t.parent.$t(t.$options.tPfx + ".travelDocumentSubsidiaryProtection")) + " ")])])]), a("div", {
                staticClass: "card-for-link-preview"
            }, [a("a", {
                staticClass: "link-preview-header mb-2",
                attrs: {
                    href: t.parent.$t(t.$options.tPfx + ".link")
                }
            }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".visaRegimeForForeigners")) + " ")]), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaRegimeForForeignersContent")) + " ")]), a("a", {
                staticClass: "link-preview-text",
                attrs: {
                    href: t.parent.$t(t.$options.tPfx + ".link")
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".link")) + " ")])])])])
        }
          , Ea = []
          , qa = "view.apply.processPhases.exemptions"
          , za = {
            pfx: qa,
            t: {
                en: {
                    exemptions: "CAN ENTER ALBANIA WITHOUT A VISA:",
                    multipleEntrySchengenVisa: "Foreign citizens who have a valid, multiple-entry Schengen visa, which has been previously used in one of the Schengen states, or foreign citizens who have a valid permit of stay in one of the Schengen states. The citizens are obliged to leave the territory of the Republic of Albania no later than 3 (three) days from the date of expiry of the validity of the above-mentioned documents",
                    foreignNationalsOfUsUkNire: "Foreign citizens who have a valid, multiple-entry visa or a valid residence permit, issued by the countries of the European Union, the United States of America and the United Kingdom of Great Britain and Northern Ireland, including the electronic format, which has been previously used in the respective country of issuance. The citizens are obliged to leave the territory of the Republic of Albania no later than 3 (three) days from the date of expiry of the validity of the above-mentioned documents.",
                    foreignersAreBoundByA10YearResidencePermit: "Foreign citizens who have a 10-year residence permit, issued by the competent authority of the United Arab Emirates, valid not less than one year from the moment of entry.",
                    citizensFromSaudiArabiaAndQatar: "Citizens from Saudi Arabia and Qatar can enter without a visa, only for tourism purpose for the period 15 April 2026 until 31 December 2026 with the document passport. ",
                    foreignCitizensWithoutVisa: "Foreign citizens who enter and stay without visa in the Schengen area.",
                    holdersOfDocuments: "Holders of documents for travel by EU member states as follows: ",
                    alienTravelDocument: "Alien's travel document,",
                    travelDocumentRefugees: "Travel document (Refugees, Geneva Convention of 28 July 1951),",
                    travelDocumentStatelessPersons: "Travel document (Stateless persons, NY Convention of 28 September 1954),",
                    travelDocumentSubsidiaryProtection: "Travel document for person enjoying subsidiary protection.",
                    visaRegimeForForeigners: "Visa regime for foreign citizens",
                    visaRegimeForForeignersContent: "The visa regime for foreign citizens in the Republic of Albania is provided by Law No. 79/2021 “On foreigners” and by the Decision of the Council of Ministers No. 858, dated 29.12.2021, “On the definition of the criteria of procedures and documentation for entry, stay and treatment of foreigners in the Republic of Albania”.",
                    link: "https://punetejashtme.gov.al/en/regjimi-i-vizave-per-te-huajt/"
                },
                al: {
                    exemptions: "HYJNË PA VIZË NË SHQIPËRI:",
                    multipleEntrySchengenVisa: "Të huajt që kanë një vizë të vlefshme Shengen, me shumë kalime, e cila është përdorur më parë në një nga vendet e zonës Shengen, ose që kanë një leje të vlefshme qëndrimi në një nga vendet e zonës Shengen. Shtetasit e përfshirë në këtë shkronjë kanë detyrimin të dalin nga territori i Republikës së Shqipërisë jo më vonë se 3 (tri) ditë nga data e përfundimit të vlefshmërisë së dokumenteve të sipërpërmendura;",
                    foreignNationalsOfUsUkNire: "Të huajt që janë të pajisur me vizë të vlefshme me shumë hyrje-dalje apo leje qëndrimi të vlefshme, të lëshuar nga vendet e Bashkimit Evropian, Shtetet e Bashkuara të Amerikës dhe Britania e Madhe e Irlanda e Veriut, përfshirë edhe në formatin elektronik, me kushtin që vizat të jenë përdorur më parë në këto shtete; Shtetasit e përfshirë në këtë shkronjë kanë detyrimin të dalin nga territori i Republikës së Shqipërisë jo më vonë se 3 (tri) ditë nga data e përfundimit të vlefshmërisë së dokumenteve të sipërpërmendura;",
                    foreignersAreBoundByA10YearResidencePermit: "Të huajt që janë të pajisur me leje qëndrimi 10 vjeçare, e lëshuar nga autoritetet e Emirateve të Bashkuara Arabe, e vlefshme jo më pak se një vit nga momenti i hyrjes.",
                    citizensFromSaudiArabiaAndQatar: "Shtetasit nga Arabia Saudite dhe Katar mund të udhëtojnë pa vizë, vetëm për qëllime turistike për periudhën 15 prill 2026 deri më 31 dhjetor 2026 me dokumentin pasaportë.",
                    foreignCitizensWithoutVisa: "Shtetasit e huaj që hyjnë dhe qëndrojnë në shtetet e zonës shengen pa vizë.",
                    holdersOfDocuments: "Mbajtësit e dokumenteve të udhëtimi për të huaj të lëshuar nga vendet anëtare të BE-së: ",
                    alienTravelDocument: "Alien's travel document,",
                    travelDocumentRefugees: "Travel document (Refugees, Geneva Convention of 28 July 1951),",
                    travelDocumentStatelessPersons: "Travel document (Stateless persons, NY Convention of 28 September 1954),",
                    travelDocumentSubsidiaryProtection: "Travel document for person enjoying subsidiary protection.",
                    visaRegimeForForeigners: "Regjimi i vizave për të huajt.",
                    visaRegimeForForeignersContent: "Regjimi i vizave për të huajt përcaktohet në bazë të Ligjit, 79/2021, “Për të huajt”, dhe VKM nr. 858, datë 29.12.2021 për “Për përcaktimin e kritereve, të procedurave dhe dokumentacionit për hyrjen, qëndrimin dhe trajtimin e të huajve në RSh”.",
                    link: "https://punetejashtme.gov.al/regjimi-i-vizave-per-te-huajt"
                }
            }
        }
          , Ba = {
            components: {
                TaperedSection: ne
            },
            tPfx: qa
        }
          , Va = Ba
          , Fa = (a("ac3e"),
        Object(Q["a"])(Va, Ta, Ea, !0, null, null, null))
          , Ma = Fa.exports
          , La = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("tapered-section", {
                staticClass: "my-12 px-4 flex flex-wrap"
            }, [a("header", {
                staticClass: "w-full text-center my-4"
            }, [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".phases")) + " ")])]), a("first-phase"), a("second-phase"), a("notes")], 1)
        }
          , Ua = []
          , Ha = function(e, t) {
            var a = t._c;
            return a("div", {
                staticClass: "xl:mx-12 my-4 border rounded-md border-gray-400 w-full p-8 bg-white"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".firstPhase")) + " ")])]), a("ol", {
                staticClass: "list-outside list-decimal pl-6"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".doneOnline"
                },
                scopedSlots: t._u([{
                    key: "outsideOfCountry",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".outsideOfCountry")) + " ")])]
                    },
                    proxy: !0
                }])
            }), a("header", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".verificationByTheConsul")) + " ")]), a("ol", {
                staticClass: "list-outside list-lower-alpha pl-6"
            }, [a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".approvedByTheConsul"
                },
                scopedSlots: t._u([{
                    key: "itIsRegular",
                    fn: function() {
                        return [a("strong", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".itIsRegular")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".hasIrregularties"
                },
                scopedSlots: t._u([{
                    key: "irregularties",
                    fn: function() {
                        return [a("strong", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".irregularties")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".rejectedByTheConsul"
                },
                scopedSlots: t._u([{
                    key: "doesNotFulfillTheNecessaryElements",
                    fn: function() {
                        return [a("strong", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".doesNotFulfillTheNecessaryElements")) + " ")])]
                    },
                    proxy: !0
                }])
            })], 1)])], 1)])
        }
          , Wa = []
          , Ga = "view.apply.processPhases.firstPhase"
          , Qa = {
            pfx: Ga,
            t: {
                en: {
                    firstPhase: "First phase",
                    doneOnline: "Visa application process is only accepted if it is completed online, and you must ensure that {outsideOfCountry} after payment of the visa fee.",
                    outsideOfCountry: "You are outside of the territory of the Republic of Albania ",
                    verificationByTheConsul: "The application is pre-verified by the consul including the application form and uploaded documents and if the application:",
                    approvedByTheConsul: "{itIsRegular} a notification is sent that the application has been accepted and a visa fee is requested, according to the cost and type of visa requested;",
                    approved: "application has been accepted",
                    itIsRegular: "is correct,",
                    hasIrregularties: "{irregularties} it is turned back to the applicant requesting the correct documents to be uploaded according to the instructions sent;",
                    irregularties: "has irregularities,",
                    rejectedByTheConsul: "{doesNotFulfillTheNecessaryElements} for the required visa, the application is rejected according to the legal framework.",
                    doesNotFulfillTheNecessaryElements: "does not fulfil any of the criteria necessary",
                    rejected: "has been refused"
                },
                al: {
                    firstPhase: "Faza e parë",
                    doneOnline: "Procesi i aplikimit për vizë kryhet vetëm online dhe duke u siguruar që aplikanti është {outsideOfCountry} në momentin e pagesës për tarifën e vizës.",
                    outsideOfCountry: "jashtë territorit të Republikës së Shqipërisë ",
                    verificationByTheConsul: "Aplikimi verifikohet paraprakisht nga konsulli duke përfshirë formularin e aplikimit dhe  dokumentet e ngarkuara dhe nëse aplikimi:",
                    approvedByTheConsul: "{itIsRegular},  i  dërgon  aplikuesit  statusin pranuar  aplikimi dhe  i  përcakton  tarifën  e  pagesës  së vizës, sipas tarifave të përcaktuara",
                    itIsRegular: "është  i  rregullt",
                    hasIrregularties: "{irregularties}, i rikthen shtetasit aplikimin për plotësimin e dokumenteve apo të dhënave sipas udhëzimeve",
                    irregularties: "ka parregullsi",
                    rejectedByTheConsul: "{doesNotFulfillTheNecessaryElements}, të nevojshëm për vizën e kërkuar, i refuzohet aplikimi sipas përcaktimit ligjor",
                    doesNotFulfillTheNecessaryElements: "nuk përmbush asnjë kriter"
                }
            }
        }
          , Ka = {
            tPfx: Ga
        }
          , Xa = Ka
          , Ya = Object(Q["a"])(Xa, Ha, Wa, !0, null, null, null)
          , Ja = Ya.exports
          , Za = function(e, t) {
            var a = t._c;
            return a("div", {
                staticClass: "xl:mx-12 my-4 border rounded-md border-gray-400 w-full p-8 bg-white"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".notes")) + " ")])]), a("ol", {
                staticClass: "list-outside list-decimal pl-6"
            }, [a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".daysOfTheIntendedDateOfTravelInformation"
                },
                scopedSlots: t._u([{
                    key: "daysOfTheIntendedDate",
                    fn: function() {
                        return [a("strong", [t._v(t._s(t.parent.$t(t.$options.tPfx + ".daysOfTheIntendedDate")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".noRefund"
                },
                scopedSlots: t._u([{
                    key: "noRefundOrReimbursed",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".noRefundOrReimbursed")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".documentationFromTheCountryOfOrigin")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".entryNotGuaranteed")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".outsideOfAlbanian"
                },
                scopedSlots: t._u([{
                    key: "outsideOfTerritory",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".outsideOfTerritory")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".inviterDetails"
                },
                scopedSlots: t._u([{
                    key: "invitationFormat",
                    fn: function() {
                        return [a("strong", [a("a", {
                            attrs: {
                                href: "/documents/format-ftese.docx"
                            }
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".invitationFormat")) + " ")])])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".duringVerificationProcessRule"
                },
                scopedSlots: t._u([{
                    key: "forbiddenCommunication",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".forbiddenCommunication")))])]
                    },
                    proxy: !0
                }, {
                    key: "contactedByThem",
                    fn: function() {
                        return [a("strong", [t._v(t._s(t.parent.$t(t.$options.tPfx + ".contactedByThem")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".durationAndDeadline")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".exceedingTheFifteenDayPaymentPeriod"
                },
                scopedSlots: t._u([{
                    key: "automaticallyRejected",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".automaticallyRejected")))])]
                    },
                    proxy: !0
                }, {
                    key: "notPaid",
                    fn: function() {
                        return [a("strong", [t._v(t._s(t.parent.$t(t.$options.tPfx + ".notPaid")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".forChildren")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".reApplyRule")) + " "), a("p", {
                staticClass: "card-for-email"
            }, [a("i", {
                staticClass: "text-secondary-500"
            }, [t._v("*")]), t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".appealForTheDecision")) + " "), a("br"), a("strong", [a("a", {
                staticClass: "email-text",
                attrs: {
                    href: "mailto: visa@mfa.gov.al"
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".email")) + " ")])]), a("br"), a("strong", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".responsibleAuthority")) + " ")]), a("br"), t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".directorateOfConsular")) + " ")])]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".travelDocuments")) + " ")])])])
        }
          , ei = []
          , ti = "view.apply.processPhases.notes"
          , ai = {
            pfx: ti,
            t: {
                en: {
                    notes: "Additional notes.",
                    daysOfTheIntendedDateOfTravelInformation: "If you wish to travel to the Republic of Albania and are required to apply for a visa, {daysOfTheIntendedDate} . The application will be refused if your intended date of travel is longer than 90 days from the date of your visa application.",
                    daysOfTheIntendedDate: "the application must be made within 90 days of the intended date of travel",
                    durationAndDeadline: "The deadline for evaluating applications usually takes 15 working days from the day when the payment for the visa is made. For exceptional cases, the verification process can take up to 30 working days.",
                    exceedingTheFifteenDayPaymentPeriod: "In  case  of  non-payment  of  the  visa  fee  within  15  days,  the  application  will  change  to “{notPaid}” status and will be {automaticallyRejected}.",
                    notPaid: "Not paid",
                    automaticallyRejected: "automatically rejected",
                    appealForTheDecision: 'Within 5 working days from the receipt of the decision, the interested foreigner has the right to appeal against the decision of refusal / annulment of the visa with the   relevant   arguments   and   evidence,   as   provided   for   in   Law   79/2021   "On Foreigners", only at the following email address:',
                    email: "visa@mfa.gov.al",
                    responsibleAuthority: "The only authority responsible for reviewing requests for appealing decisions is: ",
                    directorateOfConsular: "The Directorate for Consular Affairs at the Ministry for Europe and Foreign Affairs",
                    documentationFromTheCountryOfOrigin: "The documentation from the country of origin and/or from the country where the foreigner had a legal stay must be translated into the Albanian or English language, certified and legalized based on the obligations arising from international agreements.",
                    duringVerificationProcessRule: "During  the  visa  application  verification  process,  it  is {forbiddenCommunication}, {contactedByThem}.",
                    forbiddenCommunication: "strictly  forbidden  for  the  applicant, the invitee, or any other subject to communicate with the responsible institutions",
                    contactedByThem: "except when contacted by them",
                    forChildren: "The  visa  application  for  children  under  18  years  old  is  made  by  one  of  the  parents,  legal guardian or the person that is the legal carer.",
                    applyAfterRefusal: "After the rejection of the stamp visa and e-visa, the foreigner has the right to reapply only after he has closed the appeal procedures, in case he has exercised this right or, if three months have passed from the date of receipt of the refusal decision.",
                    entryNotGuaranteed: "Obtaining a visa is not a guarantee that the foreigner is allowed to enter the Republic of Albania",
                    vaccinationCards: "Foreigners coming from countries affected by the epidemic or disease, at the Border Crossing Point can be requested to provide the original international vaccination card.",
                    reApplyRule: "After the rejection of the visa sticker or electronic visa application. The foreign citizen has the right to reapply only after all appeal procedures have been exhausted, or after three months have passed from the date of receipt of rejection.",
                    travelDocuments: "Applicants with dual citizenship must select the nationality of the passport they will use for travel.  If  the  country  in  the  travel  document  registered  with  e-Visa  is  different  from  the document the person has during the trip, the e-Visa will be invalid. By travel document we define passport and identity card (for residents of specific countries). Other documents are not acceptable for an e-Visa application.",
                    noRefund: 'Referring to point 5 of article 28, based on law No. 79/2021 "For foreigners": The payment for the visa sticker or electronic visa is {noRefundOrReimbursed} of the application',
                    noRefundOrReimbursed: "not refunded / reimbursed in cases of rejection",
                    outsideOfAlbanian: " Visa application process is only accepted if it is completed online, and ensuring that the applicant is {outsideOfTerritory} after payment of the visa fee.",
                    outsideOfTerritory: "outside the territory of the Republic of Albania",
                    inviterDetails: "The host is an Albanian citizen or a foreigner citizen, resident in the Republic of Albania, or\nlegal person who exercises activities under Albanian legislation, who declares in writing\nthat he assumes responsibilities for staying and leaving the foreigner in/from the Republic\nof Albania, according to the legal provisions in force. {invitationFormat}",
                    invitationFormat: "INVITATION FORMAT (download)"
                },
                al: {
                    notes: "Shënime.",
                    daysOfTheIntendedDateOfTravelInformation: "Aplikimi për vizë nga i huaji bëhet {daysOfTheIntendedDate} për të ardhur në Republikën e Shqipërisë.",
                    daysOfTheIntendedDate: "jo më shumë se 90 ditë përpara datës së planifikuar",
                    durationAndDeadline: "Afati i vlerësimit të kërkesës si rregull zgjat 15 ditë pune nga dita e kryerjes së pagesës për vizë. Për raste përjashtimore zgjat deri në 30 ditë pune.",
                    exceedingTheFifteenDayPaymentPeriod: "Në rast të mos pagesës brenda 15 ditëve të tarifës së vizës, aplikimi do të kalojë në statusin “{notPaid}” dhe {automaticallyRejected}.",
                    notPaid: "Nuk u pagua",
                    automaticallyRejected: "do të refuzohet automatikisht",
                    appealForTheDecision: "Brenda 5 ditë pune nga marrja e vendimit, i huaji i interesuar ka të drejtë të apelojë kundër vendimit të refuzimit/anulimit të vizës me argumentet dhe provat përkatëse, siç parashikohet në ligjin 79/2021 “Për të huajt”, vetëm në adresën elektronike (email): ",
                    email: "visa@mfa.gov.al",
                    responsibleAuthority: "Autoriteti i vetëm përgjegjës për shqyrtimin e kërkesave për apelimin e vendimeve është: ",
                    directorateOfConsular: "Drejtoria e Çështjeve Konsullore pranë Ministrisë për Evropën dhe Punët e Jashtme",
                    documentationFromTheCountryOfOrigin: "Dokumentacioni nga vendi i origjinës dhe/ose nga vendi ku i huaji ka pasur qëndrim të ligjshëm duhet të  jetë  i  përkthyer  në  shqip  ose anglisht,  i  vërtetuar  dhe  i  legalizuar  në  bazë  të  detyrimeve,  që rrjedhin nga marrëveshjet ndërkombëtare.",
                    duringVerificationProcessRule: "Gjatë  procesit  të  verifikimit  të  aplikimit  për  vizë  {forbiddenCommunication} {contactedByThem}",
                    forbiddenCommunication: "është rreptësisht i ndaluar komunikimi i aplikuesit, ftuesit, apo çdo subjekti tjetër me strukturat përgjegjëse",
                    contactedByThem: "përveç rasteve kur kontaktoheni prej tyre",
                    forChildren: "Aplikimi i vizës për fëmijët nën 18 vjeç bëhet nga njëri prind, ose kujdestari ligjor ose personi që e ka në ngarkim.",
                    applyAfterRefusal: "Pas refuzimit të vizës pullë dhe elektronike, i huaji ka të drejtë të riaplikojë vetëm pasi të ketë mbyllur procedurat e ankimit, në rast se e ka ushtruar këtë të drejtë ose, në të kundërt, pasi të kenë kaluar tre muaj nga data e marrjes së vendimit për refuzim.",
                    entryNotGuaranteed: "Marrja e vizës nuk është garanci që të huajit i lejohet hyrja në Republikën e Shqipërisë.",
                    vaccinationCards: "Të huajit që vjen nga vende të prekura nga epidemi ose sëmundje, në Pikën e Kalimit Kufitar, i kërkohet kartela origjinale e vaksinimit ndërkombëtar.",
                    reApplyRule: "Pas refuzimit të vizës pullë dhe elektronike, i huaji ka të drejtë të riaplikojë vetëm pasi të ketë mbyllur procedurat e ankimimit, në rast se e ka ushtruar këtë të drejtë ose, në të kundërt, pasi të kenë kaluar tre muaj nga data e marrjes së vendimit për refuzim.",
                    travelDocuments: "Aplikantët me dyshtetësi duhet të zgjedhin nacionalitetin e pasaportës që do të përdorin në udhëtim. Në qoftë se shteti në dokumentin e udhëtimit të regjistruar tek e-Visa është i ndryshëm nga dokumenti që personi ka gjatë udhëtimit, e-Visa do të jetë e pavlefshme. Me dokument udhëtimi përcaktojmë, pasaportën dhe kartën e identitetit (për banorë të vendeve specifike). Dokumente të tjerë nuk janë të pranueshëm për një aplikim e-Visa.",
                    noRefund: "Referuar pikës 5, neni 28, ligji 79/2021 “Për të huajt”: Pagesa për vizën pullë ose elektronike {noRefundOrReimbursed} të aplikimit.",
                    noRefundOrReimbursed: "nuk kthehet / rimbursohet në rastet e refuzimit",
                    outsideOfAlbanian: " Procesi  i  aplikimit  për  vizë  kryhet  vetëm  online  dhe  duke  u  siguruar  që  aplikanti  është {outsideOfTerritory} në momentin e pagesës për tarifën e vizës.",
                    outsideOfTerritory: "jashtë territorit të Republikës së Shqipërisë",
                    inviterDetails: "Ftues është shtetasi shqiptar ose i huaji, banor në Republikën e Shqipërisë, ose personi\njuridik shqiptar apo i huaj që ushtron veprimtari sipas legjislacionit shqiptar, i cili deklaron\nme shkrim se merr përsipër përgjegjësitë për qëndrimit dhe largimin e të huajit në/nga\nRepublika e Shqipërisë, sipas dispozitave ligjore në fuqi. {invitationFormat}",
                    invitationFormat: "FORMATI I FTESËS (shkarko)"
                }
            }
        }
          , ii = {
            tPfx: ti
        }
          , ni = ii
          , ri = Object(Q["a"])(ni, Za, ei, !0, null, null, null)
          , si = ri.exports
          , oi = function(e, t) {
            var a = t._c;
            return a("div", {
                staticClass: "xl:mx-12 my-4 border rounded-md border-gray-400 w-full p-8 bg-white"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".secondPhase")) + " ")])]), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".downloadPrices")) + " "), a("a", {
                attrs: {
                    href: "/documents/tarifat-e-vizes.docx"
                }
            }, [a("u", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".here")) + " ")])])]), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaPricesAdult")) + " ")]), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaPricesApplyFor")) + " ")]), a("ol", {
                staticClass: "list-outside list-decimal pl-6"
            }, [a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaPricesUnder6YearsOld")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaPricesPassportHolders")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaPricesHumanitarianCases")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".visaPricesReciprocityAgreements")) + " ")])]), a("strong", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".paidAndApproved")) + " ")]), a("ol", {
                staticClass: "list-outside list-decimal pl-6"
            }, [a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".evaluationProcess"
                },
                scopedSlots: t._u([{
                    key: "rejected",
                    fn: function() {
                        return [a("strong", [t._v(t._s(t.parent.$t(t.$options.tPfx + ".rejected")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".emailNotification")) + " ")]), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".approvedVisa"
                },
                scopedSlots: t._u([{
                    key: "ifVisaIsApproved",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-green-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".ifVisaIsApproved")))])]
                    },
                    proxy: !0
                }, {
                    key: "entering",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-green-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".entering")))])]
                    },
                    proxy: !0
                }, {
                    key: "leaving",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".leaving")))])]
                    },
                    proxy: !0
                }])
            })], 1), a("li", {
                staticClass: "mb-1"
            }, [a("i18n", {
                attrs: {
                    path: t.$options.tPfx + ".rejectedVisa"
                },
                scopedSlots: t._u([{
                    key: "ifVisaIsRejected",
                    fn: function() {
                        return [a("strong", {
                            staticClass: "text-secondary-500"
                        }, [t._v(t._s(t.parent.$t(t.$options.tPfx + ".ifVisaIsRejected")))])]
                    },
                    proxy: !0
                }])
            })], 1)])])
        }
          , li = []
          , ci = "view.apply.processPhases.secondPhase"
          , ui = {
            pfx: ci,
            t: {
                en: {
                    secondPhase: "Second phase",
                    downloadPrices: "Visa fees for foreign citizens according to Council of Ministers No. 329, dated 29.05.2024 for the desired type of visa can be found HERE: ",
                    here: "here",
                    visaPricesAdult: "Visa fees for minors aged 6-12 are half the visa fees for adults.",
                    visaPricesApplyFor: "The visa fee does not apply to: ",
                    visaPricesUnder6YearsOld: "children under the age of 6.",
                    visaPricesPassportHolders: "holders of diplomatic and service passports in compliance with and in application of the principle of reciprocity.",
                    visaPricesHumanitarianCases: "humanitarian cases.",
                    visaPricesReciprocityAgreements: "cases where there is a reciprocity agreement at the government level.",
                    paidAndApproved: "After the applicant pays the visa fee, the following steps are undertaken:",
                    evaluationProcess: "The applicant is notified via email that the application is in the “evaluation process” stage",
                    emailNotification: "The applicant is notified via the e-Visa system in their email of the decision of the responsible state authorities.  The assessment process as a rule takes up to 15 working days and in exceptional cases it can take up to 30 working days",
                    approvedVisa: "{ifVisaIsApproved}, the electronic visa is generated by the e-Visa system and sent by email to the applicant. You must be in possession of the visa at the Border Crossing Point of the Republic of Albania, when {entering} and {leaving} the territory",
                    ifVisaIsApproved: "If the visa is approved",
                    entering: "entering",
                    leaving: "leaving",
                    rejectedVisa: "{ifVisaIsRejected} the applicant is informed via their email with the legal arguments for the visa rejection/annulment.",
                    ifVisaIsRejected: "If the visa is rejected/canceled:",
                    appealForTheDecision: 'Within 5 working days from the receipt of the decision, the interested foreigner has the right to appeal against the decision of refusal / annulment of the visa with the   relevant   arguments   and   evidence,   as   provided   for   in   Law   79/2021   "On Foreigners", only at the following email address:',
                    email: "visa@mfa.gov.al",
                    responsibleAuthority: "The only authority responsible for reviewing requests for appealing decisions is: ",
                    directorateOfConsular: "The Directorate for Consular Affairs at the Ministry for Europe and Foreign Affairs"
                },
                al: {
                    secondPhase: "Faza e dytë",
                    downloadPrices: "Tarifat e vizës për shtetasit e huaj sipas VKM nr. 329, datë 29.05.2024 për llojin e dëshiruar të vizës i gjeni: ",
                    here: "këtu",
                    visaPricesAdult: "Tarifat e vizave për të miturit nga mosha 6-12 vjeç janë sa gjysma e tarifave të vizave për të rriturit.",
                    visaPricesApplyFor: "Tarifa për vizat nuk zbatohet për:",
                    visaPricesUnder6YearsOld: "fëmijët nën moshën 6 vjeç.",
                    visaPricesPassportHolders: "mbajtësit e pasaportave diplomatike dhe të shërbimit në respekt dhe zbatim të parimit të reciprocitetit.",
                    visaPricesHumanitarianCases: "rastet humanitare.",
                    visaPricesReciprocityAgreements: "rastet kur ka marrëveshje reciprociteti në nivel qeverie.",
                    paidAndApproved: "Pas kryerjes së pagesës së tarifës së vizës nga aplikuesi, procedohet si vijon:",
                    evaluationProcess: "Aplikuesi nëpërmjet emailit njoftohet, që stadi i aplikimit të tij është në “proces vlerësimi”",
                    emailNotification: "Aplikuesi njoftohet nga sistemi e-Visa nëpërmjet emailit për vendimin e autoriteteve përgjegjëse shtetërore. Procesi i vlerësimit, si rregull zgjat deri në 15 ditë pune, por në raste përjashtimore mund të zgjasë deri në 30 ditë pune",
                    endOfEvaluation: "Pas përfundimit të procesit të vlerësimit i cili zgjat deri në 15 ditë, dhe për raste përjashtimore deri në  30  ditë  konsulli  lajmëron  aplikuesin  nëpërmjet  emailit  për  vendimin  e  autoriteteve  përgjegjëse shtetërore",
                    approvedVisa: "{ifVisaIsApproved},viza elektronike gjenerohet nga sistemi e-Visa dhe dërgohet me\nemail aplikantit. Ju duhet ta jeni i pajisur me vizën përkatëse kur të jeni në Pikën e Kalimit\nKufitar të Republikës së Shqipërisë-së, në {entering} dhe {leaving} nga territori",
                    ifVisaIsApproved: "Nëse viza është miratuar",
                    entering: "hyrje",
                    leaving: "dalje",
                    rejectedVisa: "{ifVisaIsRejected} Aplikuesi njoftohet nëpërmjet emailit me argumentin ligjor për refuzimin/anulimin e vizës.",
                    ifVisaIsRejected: "Nëse viza është refuzuar/anuluar: ",
                    appealForTheDecision: "Brenda 5 ditë pune nga marrja e vendimit, i huaji i interesuar ka të drejtë të apelojë kundër vendimit të refuzimit/anulimit të vizës me argumentet dhe provat përkatëse, siç parashikohet në ligjin 79/2021 “Për të huajt”, vetëm në adresën elektronike (email): ",
                    email: "visa@mfa.gov.al",
                    responsibleAuthority: "Autoriteti i vetëm përgjegjës për shqyrtimin e kërkesave për apelimin e vendimeve është: ",
                    directorateOfConsular: "Drejtoria e Çështjeve Konsullore pranë Ministrisë për Evropën dhe Punët e Jashtme"
                }
            }
        }
          , pi = {
            tPfx: ci
        }
          , di = pi
          , mi = (a("e58b"),
        Object(Q["a"])(di, oi, li, !0, null, null, null))
          , fi = mi.exports
          , hi = "view.apply.processPhases"
          , gi = {
            pfx: hi,
            t: {
                en: {
                    phases: "Application phases"
                },
                al: {
                    phases: "Fazat e aplikimit"
                }
            }
        }
          , vi = {
            components: {
                FirstPhase: Ja,
                SecondPhase: fi,
                Notes: si
            },
            tPfx: hi
        }
          , yi = vi
          , bi = Object(Q["a"])(yi, La, Ua, !1, null, null, null)
          , xi = bi.exports
          , wi = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("tapered-section", {
                staticClass: "px-4"
            }, [a("section", {
                staticClass: "flex flex-wrap pb-8",
                attrs: {
                    id: "visa-types"
                }
            }, [e.isLoadingCategoryGroups ? a("loader", {
                attrs: {
                    loading: e.isLoadingCategoryGroups,
                    size: "1.5rem",
                    margin: "4px"
                }
            }) : a("div", [a("div", {
                staticClass: "w-full flex flex-wrap"
            }, [a("header", {
                staticClass: "w-full text-center my-4"
            }, [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".selectVisaCategoryGroup")) + " ")])]), a("visa-category-group", {
                staticClass: "mx-auto lg:ml-8 xl:ml-12 category-c",
                attrs: {
                    hideRemoveButton: "",
                    isSelected: e.isElectronic,
                    title: e.$t(e.$options.tPfx + ".electronicVisa"),
                    subtitle: e.$t(e.$options.tPfx + ".electronicVisaSubtitle"),
                    description: e.$t(e.$options.tPfx + ".electronicVisaDescription")
                },
                on: {
                    click: function(t) {
                        return e.selectOrElectronicVisa(!0)
                    }
                }
            }), a("visa-category-group", {
                staticClass: "mx-auto lg:mr-8 xl:mr-12 category-d",
                attrs: {
                    hideRemoveButton: "",
                    isSelected: !e.isElectronic,
                    title: e.$t(e.$options.tPfx + ".stampedVisa"),
                    subtitle: e.$t(e.$options.tPfx + ".stampedVisaSubtitle"),
                    description: e.$t(e.$options.tPfx + ".stampedVisaDescription")
                },
                on: {
                    click: function(t) {
                        return e.selectOrElectronicVisa(!1)
                    }
                }
            })], 1), a("div", {
                staticClass: "w-full flex flex-wrap"
            }, [a("header", {
                staticClass: "w-full text-center my-4"
            }, [a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".selectVisaCategoryGroup")) + " ")])]), a("visa-category-group", {
                staticClass: "mx-auto lg:ml-8 xl:ml-12 category-a",
                attrs: {
                    isSelected: e.aCategoryIsSelected,
                    title: e.$t(e.$options.tPfx + ".typeATitle"),
                    subtitle: e.$t(e.$options.tPfx + ".typeASubtitle"),
                    description: e.$t(e.$options.tPfx + ".typeADescription"),
                    info: e.$t(e.$options.tPfx + ".typeAInfo")
                },
                on: {
                    click: function(t) {
                        return e.selectOrDeselectCategoryGroup("A")
                    }
                }
            }), a("visa-category-group", {
                staticClass: "mx-auto lg:ml-8 xl:mr-12 category-c",
                attrs: {
                    isSelected: e.cCategoryIsSelected,
                    title: e.$t(e.$options.tPfx + ".typeCTitle"),
                    subtitle: e.$t(e.$options.tPfx + ".typeCSubtitle"),
                    description: e.$t(e.$options.tPfx + ".typeCDescription"),
                    info: e.$t(e.$options.tPfx + ".typeCInfo")
                },
                on: {
                    click: function(t) {
                        return e.selectOrDeselectCategoryGroup("C")
                    }
                }
            }), a("visa-category-group", {
                staticClass: "mx-auto xl:ml-12 w-full category-d",
                attrs: {
                    isSelected: e.dCategoryIsSelected,
                    title: e.$t(e.$options.tPfx + ".typeDTitle"),
                    subtitle: e.$t(e.$options.tPfx + ".typeDSubtitle"),
                    description: e.$t(e.$options.tPfx + ".typeDDescription"),
                    eAlbaniaLink: !0
                },
                on: {
                    click: function(t) {
                        return e.selectOrDeselectCategoryGroup("D")
                    }
                }
            }), a("visa-category-group", {
                staticClass: "mx-auto xl:ml-12 w-full category-d",
                attrs: {
                    isSelected: e.VABCategoryIsSelected,
                    title: e.$t(e.$options.tPfx + ".typeVABTitle"),
                    subtitle: e.$t(e.$options.tPfx + ".typeVABSubtitle"),
                    description: e.$t(e.$options.tPfx + ".typeVABDescription"),
                    info: e.$t(e.$options.tPfx + ".typeVABInfo")
                },
                on: {
                    click: function(t) {
                        return e.selectOrDeselectCategoryGroup("VAB")
                    }
                }
            })], 1)])], 1), a("section", {
                staticClass: "flex flex-wrap mx-auto lg:mx-8 xl:mx-12",
                attrs: {
                    id: "visa-type-list"
                }
            }, [a("header", {
                staticClass: "w-full text-center my-4"
            }, [e.hasSelectedCategory ? a("h2", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".browseVisasOfCategory", {
                category: e.selectedCategoryLabel
            })) + " ")]) : e.isLoadingCategoryGroups ? e._e() : a("h2", {
                staticClass: "border-t-4 border-b-4 border-dashed border-secondary-500 text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".pleaseSelecteCategory")) + " ")])]), e.hasSelectedCategory ? a("visa-types", {
                attrs: {
                    "visa-types": e.visaTypes,
                    "is-electronic": e.isElectronic
                }
            }) : e._e()], 1)])
        }
          , ki = []
          , Ci = (a("4160"),
        a("159b"),
        function(e, t) {
            var a = t._c;
            return a("section", t._g(t._b({
                staticClass: "relative group my-4 rounded border-4 max-w-md xl:max-w-lg p-8 bg-white cursor-pointer",
                class: [t.data.class, t.data.staticClass, t.props.isSelected ? "border-solid border-secondary-500" : "border-dashed border-gray-400 hover:border-secondary-500"]
            }, "section", t.data.attrs, !1), t.listeners), [a("header", {
                staticClass: "mb-4"
            }, [a("h2", [t._v(t._s(t.props.title))]), a("h3", [t._v(t._s(t.props.subtitle))])]), a("p", [t._v(" " + t._s(t.props.description) + " ")]), t.props.eAlbaniaLink ? a("div", [a("br"), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".linkForApplication")) + " ")]), a("a", {
                staticClass: "link-preview-text",
                attrs: {
                    href: t.parent.$t(t.$options.tPfx + ".eAlbaniaLinkRedirect")
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".eAlbaniaLinkRedirect")) + " ")])]) : t._e(), a("p", [a("br"), t._v(" " + t._s(t.props.info) + " ")]), a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.props.isSelected,
                    expression: "!props.isSelected"
                }],
                staticClass: "absolute hidden group-hover:inline top-0 right-0 p-2 border-b-4 border-l-4 border-dashed rounded-bl-md border-secondary-500 text-secondary-500 leading-none font-bold bg-secondary-100 text-xs uppercase"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".select")) + " ")]), a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.props.isSelected,
                    expression: "props.isSelected"
                }],
                staticClass: "absolute top-0 right-0 p-2 border-b-4 border-l-4 rounded-bl-md border-secondary-500 text-secondary-500 leading-none font-bold bg-secondary-100 text-xs group-hover:bg-secondary-300 group-hover:text-white uppercase"
            }, [t.props.hideRemoveButton ? a("span", [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".selected")) + " ")]) : a("div", [a("span", {
                staticClass: "group-hover:hidden"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".selected")) + " ")]), a("span", {
                staticClass: "hidden group-hover:inline"
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + ".deselect")) + " ")])])])])
        }
        )
          , Pi = []
          , $i = "view.apply.visas.visaTypeCategory"
          , _i = {
            pfx: $i,
            t: {
                en: {
                    select: "Select",
                    selected: "Selected",
                    deselect: "Deselect",
                    linkForApplication: "LINK FOR THE APPLICATION: ",
                    eAlbaniaLinkRedirect: "https://e-albania.al/ServiceDetails/15146"
                },
                al: {
                    select: "Zgjidh",
                    selected: "Zgjedhur",
                    deselect: "Hiq",
                    linkForApplication: "LINK PËR APLIKIMIN: ",
                    eAlbaniaLinkRedirect: "https://e-albania.al/ServiceDetails/15146"
                }
            }
        }
          , ji = {
            tPfx: $i,
            props: {
                title: {
                    type: String,
                    required: !0
                },
                subtitle: {
                    type: String,
                    required: !0
                },
                description: {
                    type: String,
                    required: !0
                },
                eAlbaniaLink: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                info: {
                    type: String,
                    required: !1
                },
                isSelected: {
                    type: Boolean,
                    default: !1
                },
                hideRemoveButton: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , Ai = ji
          , Oi = Object(Q["a"])(Ai, Ci, Pi, !0, null, null, null)
          , Si = Oi.exports
          , Ii = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("ul", {
                staticClass: "mx-auto border border-gray-400 rounded-md p-4 md:p-8 w-full bg-white"
            }, e._l(e.visaTypes, (function(t) {
                return a("visa-type", {
                    key: t.id,
                    attrs: {
                        "visa-type": t,
                        "all-visa-types": e.visaTypes,
                        "is-electronic": e.isElectronic
                    }
                })
            }
            )), 1)
        }
          , Ni = []
          , Ri = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("li", {
                staticClass: "mx-2 mt-2",
                class: {
                    "mb-8": e.isExpanded
                }
            }, [a("header", {
                staticClass: "group flex items-center border rounded-md cursor-pointer p-4 mb-2",
                class: {
                    "border-gray-400 hover:border-secondary-500": !e.isExpanded,
                    "border-secondary-500 bg-secondary-300": e.isExpanded
                },
                on: {
                    click: function(t) {
                        e.isExpanded = !e.isExpanded
                    }
                }
            }, [a("span", {
                staticClass: "mr-auto"
            }, [e._v(" " + e._s(e.visaType.title[e.$i18n.locale]) + " (" + e._s(e.visaType.categoryGroup) + ") ")]), a("span", {
                staticClass: "ml-4"
            }, [a("font-awesome-icon", {
                staticClass: "group-hover:text-secondary-500",
                attrs: {
                    icon: "chevron-down",
                    rotation: e.isExpanded ? 180 : void 0
                }
            })], 1)]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isExpanded,
                    expression: "isExpanded"
                }]
            }, [a("document-categories", {
                attrs: {
                    "document-categories": e.visaType.documentCategories
                }
            }), a("button", {
                staticClass: "mt-4 block button button-secondary w-full md:w-auto md:mx-auto lg:mx-0 p-8 md:px-24 py-2",
                attrs: {
                    disabled: e.applyButtonIsDisabled
                },
                on: {
                    click: e.apply
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".apply")) + " ")])], 1)])
        }
          , Di = []
          , Ti = (a("7db0"),
        a("8c4f"))
          , Ei = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", {
                staticClass: "pr-2",
                class: e.documentCategories.length > 9 ? "pl-8" : "pl-6"
            }, [a("ol", {
                staticClass: "list-decimal list-outside"
            }, [a("li", {
                staticClass: "mb-2"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".onlineForm")) + " ")]), e._l(e.documentCategories, (function(t) {
                return a("li", {
                    key: t.id,
                    staticClass: "mb-2"
                }, [e._v(" " + e._s(t.title[e.$i18n.locale]) + " ")])
            }
            ))], 2)])
        }
          , qi = []
          , zi = "view.apply.visas.visaTypes.visaType.documentCategory"
          , Bi = {
            pfx: zi,
            t: {
                en: {
                    onlineForm: "Visa application form, completed by the applicant, which is available online free of charge (the application form is completed online during the application, is generated and downloaded by the system)"
                },
                al: {
                    onlineForm: "Formulari i aplikimit për vizë, i plotësuar nga aplikuesi, i cili gjenerohet online pa pagesë (formulari plotësohet online gjatë aplikimit dhe gjenerohet e shkarkohet nga sistemi)"
                }
            }
        }
          , Vi = {
            tPfx: zi,
            props: {
                documentCategories: {
                    type: Array,
                    required: !0
                }
            }
        }
          , Fi = Vi
          , Mi = Object(Q["a"])(Fi, Ei, qi, !1, null, null, null)
          , Li = Mi.exports
          , Ui = Ti["a"].isNavigationFailure
          , Hi = Ti["a"].NavigationFailureType
          , Wi = "view.apply.visas.visaTypes.visaType"
          , Gi = {
            pfx: Wi,
            t: {
                en: {
                    apply: "Apply",
                    createApplicationFailedLine1: "Something went wrong!",
                    createApplicationFailedLine2: "Please try again later!",
                    dearApplicant: "To all concerned,",
                    followInstructions: 'The Republic of Albania has changed its procedures for some Type D visas to foreigners by way of the Unique Permit that is now issued. All foreign citizens must apply via the e-Albania Portal and follow the instructions for the "Application for Residence/Unique Permit"\nIn the following link: ',
                    beforeVisaIsMade: "This procedure must be completed before an application for a visa can be made.",
                    afterConfirmationFromAkpa: "After the approval of the Unique Permit by AKPA, you will receive an email with the relevant instructions to be followed for the visa application via",
                    continueWithApplication: "and only then can you continue with the rest of the procedures of your application.",
                    thankYou: "Thank You"
                },
                al: {
                    apply: "Apliko",
                    createApplicationFailedLine1: "Diçka shkoi keq!",
                    createApplicationFailedLine2: "Provoni përsëri më vonë!",
                    dearApplicant: "I/E nderuar qytetar,",
                    followInstructions: 'Lutemi ndiqni udhëzimet për procedurën e aplikimit paraprakisht "Aplikim për leje qëndrimi/ unike / Residence/ Unique permit" në portalin e-albania',
                    beforeVisaIsMade: "para se të aplikoni për vizë D për motivin e kërkuar.",
                    afterConfirmationFromAkpa: "Vetëm pas miratimit të lejes unike nga AKPA do të merrni emailin me udhëzimet përkatëse për llogarine tuaj në plaformën",
                    continueWithApplication: "dhe mund të vijoni me aplikimin.",
                    thankYou: "Faleminderit!"
                }
            }
        }
          , Qi = {
            tPfx: Wi,
            components: {
                DocumentCategories: Li
            },
            props: {
                visaType: {
                    type: Object,
                    required: !0
                },
                allVisaTypes: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isElectronic: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    applyButtonIsDisabled: !1,
                    isExpanded: !1
                }
            },
            computed: Object(o["a"])({}, Object(f["c"])(g, ["isLoggedIn"])),
            mounted: function() {
                this.checkApplicationLimit()
            },
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchShowFlash: P.show
            })), {}, {
                checkApplicationLimit: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    vu.checkApplicationLimit(e.visaType.id);
                                case 3:
                                    a = t.sent,
                                    i = a.data,
                                    e.applyButtonIsDisabled = i.data.hasReachedLimit,
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t["catch"](0),
                                    e.applyButtonIsDisabled = !1;
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 8]])
                    }
                    )))()
                },
                showCreateApplicationError: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var i, n, r, s;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (s = null === (i = e.response) || void 0 === i || null === (n = i.data) || void 0 === n || null === (r = n.errors) || void 0 === r ? void 0 : r.limitType,
                                    "c_visa_daily_national" !== s && "c_visa_daily_consulate" !== s) {
                                        a.next = 5;
                                        break
                                    }
                                    return a.next = 4,
                                    t.dispatchShowFlash({
                                        class: "sm:block md:inline-block mx-auto border-secondary-500 bg-secondary-200 max-w-2xl xl:max-w-lg md:min-w-2xl",
                                        iconClass: "hover:text-secondary-500",
                                        text: "view.questionary.".concat(s),
                                        textClass: "avoid-warp"
                                    });
                                case 4:
                                    return a.abrupt("return");
                                case 5:
                                    return a.next = 7,
                                    t.showCreateApplicationFailedError();
                                case 7:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                showCreateApplicationFailedError: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block mx-auto border-secondary-500 bg-secondary-200 max-w-2xl xl:max-w-lg md:min-w-2xl",
                                        iconClass: "hover:text-secondary-500",
                                        text: ["".concat(e.$options.tPfx, ".createApplicationFailedLine1"), "".concat(e.$options.tPfx, ".createApplicationFailedLine2")],
                                        textClass: ["avoid-warp", "avoid-wrap"]
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                apply: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r, s, o, l;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a = 1 === e.visaType.id,
                                    i = a && e.allVisaTypes.find((function(e) {
                                        return e.isVisa24h
                                    }
                                    )),
                                    n = i ? i.id : e.visaType.id,
                                    e.isLoggedIn) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.prev = 4,
                                    t.next = 7,
                                    e.$router.push({
                                        name: "CreateApplicationRedirecter",
                                        query: {
                                            visaTypeId: n
                                        }
                                    });
                                case 7:
                                    t.next = 13;
                                    break;
                                case 9:
                                    if (t.prev = 9,
                                    t.t0 = t["catch"](4),
                                    Ui(t.t0, Hi.redirected)) {
                                        t.next = 13;
                                        break
                                    }
                                    throw t.t0;
                                case 13:
                                    return t.abrupt("return");
                                case 14:
                                    return e.applyButtonIsDisabled = !0,
                                    t.prev = 15,
                                    t.next = 18,
                                    hu.create({
                                        visaTypeId: n,
                                        isElectronic: e.isElectronic
                                    });
                                case 18:
                                    if (r = t.sent,
                                    s = r.data,
                                    o = s.data.display_fer_notification,
                                    !o) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.next = 24,
                                    e.$swal({
                                        html: '<div style="text-align: left; margin-bottom: 10px">' + e.$t("".concat(e.$options.tPfx, ".dearApplicant")) + '</div><div style="text-align: left; margin-bottom: 10px;"> ' + e.$t("".concat(e.$options.tPfx, ".followInstructions")) + '<br><a style="color: #187cbc" href="https://e-albania.al/ServiceDetails/15146"> (https://e-albania.al/ServiceDetails/15146) </a>' + e.$t("".concat(e.$options.tPfx, ".beforeVisaIsMade")) + '</div><div style="text-align: left; margin-bottom: 10px; font-weight: bold">' + e.$t("".concat(e.$options.tPfx, ".afterConfirmationFromAkpa")) + ' <a style="color: #187cbc" href="https://e-visa.al/">https://e-visa.al/</a>' + e.$t("".concat(e.$options.tPfx, ".continueWithApplication")) + '</div><div style="text-align: left">' + e.$t("".concat(e.$options.tPfx, ".thankYou")) + "</div>",
                                        width: "1000px"
                                    });
                                case 24:
                                    return t.abrupt("return");
                                case 25:
                                    l = s.data.application.id,
                                    e.$router.push({
                                        name: "Questionary",
                                        params: {
                                            applicationId: l
                                        }
                                    }),
                                    t.next = 35;
                                    break;
                                case 29:
                                    return t.prev = 29,
                                    t.t1 = t["catch"](15),
                                    t.next = 33,
                                    e.showCreateApplicationError(t.t1);
                                case 33:
                                    return t.next = 35,
                                    e.$scrollTo("#navbar", 300);
                                case 35:
                                    return t.prev = 35,
                                    e.applyButtonIsDisabled = !1,
                                    t.finish(35);
                                case 38:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[4, 9], [15, 29, 35, 38]])
                    }
                    )))()
                }
            })
        }
          , Ki = Qi
          , Xi = Object(Q["a"])(Ki, Ri, Di, !1, null, null, null)
          , Yi = Xi.exports
          , Ji = {
            components: {
                VisaType: Yi
            },
            props: {
                visaTypes: {
                    type: Array,
                    default: function() {
                        return {}
                    },
                    validator: function() {
                        return !0
                    }
                },
                isElectronic: {
                    type: Boolean,
                    default: !0
                }
            }
        }
          , Zi = Ji
          , en = Object(Q["a"])(Zi, Ii, Ni, !1, null, null, null)
          , tn = en.exports
          , an = "view.apply.visas"
          , nn = {
            pfx: an,
            t: {
                en: {
                    selectVisaCategoryGroup: "Select the desired visa type",
                    visaCategoryLabels: {
                        A: "A",
                        C: "C",
                        D: "D",
                        VAB: "Visa at Border"
                    },
                    typeATitle: "Visa Type “A”",
                    typeASubtitle: "Airport transit visa",
                    typeADescription: "It is issued in the form of a stamp visa or printed in electronic format, which gives to the holder the right to enter and stay in the international area of an airport circulation until necessary for the next flight to the country of destination. The validity of this visa corresponds to the time period and flight ticket reservation the visa applicant foresees for the transiting.",
                    typeAInfo: "Type “A” visa may be issued with one, two or multiple entry.",
                    typeCTitle: "Visa Type “C”",
                    typeCSubtitle: "Short stay visa",
                    typeCDescription: "It is issued in the form of a stamp visa or printed in electronic format, which entitles its holder to enter and stay in the Republic of Albania for up to 90 days within 180 days, starting from the date of first entry.",
                    typeCInfo: "Type “C” visa can be issued with one, two or more entries.",
                    typeDTitle: "Visa Type “D”",
                    typeDSubtitle: "Long stay visa",
                    typeDDescription: "It is issued in the form of a stamp visa or printed in electronic form for foreign citizens who intend to stay in the Republic of Albania for more than 90 days within 180 days, and when, to obtain a residence permit, these citizens are required to have a visa.",
                    typeVABTitle: "Viza Type “Visa At The Border”",
                    typeVABSubtitle: "For crews of navigation vehicles",
                    typeVABDescription: "Issued in the form of a visa printed in electronic format, which is applied only for the crews of Albanian or foreign navigation vehicles, which request permission to embark or reembark, to return to their country after the end of the work contract, as well as in cases of crew change.",
                    typeVABInfo: "The visa at the border is issued for foreigners who embark or re-embark, with 1 (one) entry and with a stay duration of 1 (one) to 5 (five) days.",
                    pleaseSelecteCategory: "Please select visa type to browse available visas",
                    browseVisasOfCategory: "Browse type {category} visas",
                    electronicVisa: "Electronic Visa",
                    electronicVisaSubtitle: "Electronic Visa",
                    electronicVisaDescription: "It is an authorization printed in electronic form, generated with an electronic stamp and sent to the applicant by email, without the need to physically appear at the Diplomatic / Consular Representations of the Republic of Albania.",
                    electronicVisaInfo: "Upon approval, the visa is generated , digitally signed and sent to the applicant via email. There is no need to present yourself to the consulate/embassy to receive the visa.\n",
                    stampedVisa: "Stamped Visa",
                    stampedVisaSubtitle: "Stamped Visa",
                    stampedVisaDescription: "It is the authorization in the form of a stamp visa. In case of visa approval, the applicant physically presents for the withdrawal of the visa at the Diplomatic / Consular Representations of the Republic of Albania.",
                    stampedVisaInfo: "Upon approval the applicant should present himself to the consulate /embassy where he did the application in order to receive the visa."
                },
                al: {
                    selectVisaCategoryGroup: "Zgjidhni llojin e dëshiruar të vizës",
                    visaCategoryLabels: {
                        A: "A",
                        C: "C",
                        D: "D",
                        VAB: "Viza në Kufi"
                    },
                    typeATitle: "Visa Type “A”",
                    typeASubtitle: "Viza tranzit në aeroport",
                    typeADescription: "Lëshohet në formën e një vize pullë ose e printuar në format elektronik, e cila i jep të drejtën mbajtësit të hyjë dhe të qëndrojë në zonën për qarkullim ndërkombëtar të aeroportit deri   në   nisjen   e   fluturimit   për   në   vendin   e destinacionit.  Vlefshmëria  e  kësaj  vize  jepet  në përputhje  me  kohën  dhe  rezervimet  e  biletave  për udhëtimin/et, në të cilin/at aplikuesi parashikon të kalojë transit.",
                    typeAInfo: "Viza e tipit “A” lëshohet me një, dy ose shumë hyrje-dalje.",
                    typeCTitle: "Viza e tipit “C”",
                    typeCSubtitle: "Qëndrim afatshkurtër",
                    typeCDescription: "Lëshohet në formën e një vize pullë ose e printuar në format elektronik, e cila i jep të drejtën mbajtësit të saj të hyjë dhe të qëndrojë në Republikën e Shqipërisë deri në 90 ditë brenda 180 ditëve, duke filluar nga data e hyrjes së parë.",
                    typeCInfo: "Viza e tipit “C” mund të lëshohet me një, dy ose shumë hyrje.",
                    typeDTitle: "Viza e tipit “D”",
                    typeDSubtitle: "Qëndrim afatgjatë",
                    typeDDescription: "Lëshohet në formën e një vize pullë ose e printuar në format elektronik për shtetasit e huaj që synojnë të qëndrojnë në Republikën e Shqipërisë më shumë se 90 ditë brenda 180 ditëve, dhe kur, për t’u pajisur me leje qëndrimi, për këta shtetas kërkohet vizë.",
                    typeVABTitle: "Viza e tipit “Viza në Kufi”",
                    typeVABSubtitle: "Për ekipazhet e mjeteve të navigacionit",
                    typeVABDescription: "Lëshohet në formën e një vize të printuar në format elektronik, e cila aplikohet vetëm për ekuipazhet e mjeteve të navigimit, shqiptare ose të huaja, të cilët kërkojnë leje për të u imbarkuar ose ri-imbarkuar, për t’u kthyer në vendin e tyre pas përfundimit të kontratës së punës, si dhe në rastet e ndryshimit të ekuipazhit.",
                    typeVABInfo: "Viza në kufi lëshohet për të huajt që imbarkojnë ose ri-imbarkojnë, me një hyrje (1) dhe me një periudhë qëndrimi prej 1 (një) deri në 5 (pesë) ditë.",
                    pleaseSelecteCategory: "Ju lutem zgjidhni llojin e vizës që të shfletoni vizat e vlefshme",
                    browseVisasOfCategory: "Shfletoni visat e tipit {category}",
                    electronicVisa: "Viza Elektronike",
                    electronicVisaSubtitle: "Viza Elektronike",
                    electronicVisaDescription: "Është autorizim i printuar nga format elektronik, gjenerohet me vulë elektronike dhe aplikantit i dërgohet në email, pa patur nevojë te paraqitet fizikisht në Përfaqësitë diplomatike/konsullore të RSh-së.",
                    electronicVisaInfo: "Në rast miratimi, viza gjenerohet me vulë elektronike dhe aplikantit i dërgohet në email, pa patur nevojë te paraqitet ne përfaqësi",
                    stampedVisa: "Viza Pullë",
                    stampedVisaSubtitle: "Viza Pullë",
                    stampedVisaDescription: "Është autorizimi në formën e një vize pullë. Në rast miratimi të vizës, aplikanti paraqitet fizikisht për tërheqjen e vizës në Përfaqësitë diplomatike/konsullore të RSh-së.",
                    stampedVisaInfo: "Në rast miratimi të vizës, qytetari paraqitet personalisht për tërheqjen e vizës pranë përfaqësisë."
                }
            }
        }
          , rn = {
            tPfx: an,
            components: {
                VisaCategoryGroup: Si,
                VisaTypes: tn
            },
            data: function() {
                return {
                    isLoadingCategoryGroups: !1,
                    categoryGroups: {
                        A: [],
                        C: [],
                        D: [],
                        VAB: []
                    },
                    selectedCategoryGroup: null,
                    isElectronic: !0
                }
            },
            computed: {
                hasSelectedCategory: function() {
                    return null !== this.selectedCategoryGroup && void 0 !== this.selectedCategoryGroup
                },
                selectedCategoryLabel: function() {
                    return this.selectedCategoryGroup ? this.$t("".concat(this.$options.tPfx, ".visaCategoryLabels.").concat(this.selectedCategoryGroup)) : ""
                },
                aCategoryIsSelected: function() {
                    return "A" === this.selectedCategoryGroup
                },
                cCategoryIsSelected: function() {
                    return "C" === this.selectedCategoryGroup
                },
                dCategoryIsSelected: function() {
                    return "D" === this.selectedCategoryGroup
                },
                VABCategoryIsSelected: function() {
                    return "VAB" === this.selectedCategoryGroup
                },
                visaTypes: function() {
                    return this.hasSelectedCategory ? this.categoryGroups[this.selectedCategoryGroup] : []
                }
            },
            methods: {
                loadCategoryGroups: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.isLoadingCategoryGroups = !0,
                                    t.next = 3,
                                    fu.list();
                                case 3:
                                    a = t.sent,
                                    i = a.data,
                                    i.data.visaTypes.forEach((function(t) {
                                        "C" === t.categoryGroup ? e.categoryGroups.C.push(t) : "D" === t.categoryGroup ? e.categoryGroups.D.push(t) : "A" === t.categoryGroup ? e.categoryGroups.A.push(t) : "VAB" === t.categoryGroup && e.categoryGroups.VAB.push(t)
                                    }
                                    )),
                                    e.isLoadingCategoryGroups = !1;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                selectOrDeselectCategoryGroup: function(e) {
                    var t = this;
                    this.selectedCategoryGroup !== e ? (this.selectedCategoryGroup = e,
                    this.$nextTick((function() {
                        t.$scrollTo("#visa-type-list", 300)
                    }
                    ))) : this.selectedCategoryGroup = null
                },
                selectOrElectronicVisa: function(e) {
                    this.isElectronic = e
                }
            },
            mounted: function() {
                this.loadCategoryGroups()
            }
        }
          , sn = rn
          , on = (a("6c1f"),
        Object(Q["a"])(sn, wi, ki, !1, null, null, null))
          , ln = on.exports
          , cn = {
            draft: "DRAFT",
            open: "OPEN",
            consularInProgress: "CONSULAR_IN_PROGRESS",
            chiefPoliceInProgress: "CHIEF_POLICE_IN_PROGRESS",
            consularNeedChanges: "CONSULAR_NEED_CHANGES",
            chiefPoliceNeedChanges: "CHIEF_POLICE_NEED_CHANGES",
            waitingForPayment: "WAITING_FOR_PAYMENT",
            chiefPolicewaitingForPayment: "CHIEF_POLICE_WAITING_FOR_PAYMENT",
            waitingFerPayment: "WAITING_FER_PAYMENT",
            verifyPayment: "VERIFY_PAYMENT",
            unpaid: "UNPAID",
            paid: "PAID",
            chiefPolicePaid: "CHIEF_POLICE_PAID",
            ferPaid: "FER_PAID",
            rejected: "REJECTED",
            rejectedAKPA: "AKPA_REJECTED",
            dckInProgress: "DCK_IN_PROGRESS",
            verificationInProgress: "VERIFICATION_IN_PROGRESS",
            shishInProgress: "SHISH_IN_PROGRESS",
            pkInInProgress: "PK_IN_IN_PROGRESS",
            shishApproved: "SHISH_APPROVED",
            pkApproved: "PK_APPROVED",
            shishRejected: "SHISH_REJECTED",
            pkRejected: "PK_REJECTED",
            verifiedByShishPk: "VERIFIED_BY_SHISH_PK",
            verifiedByMinistry: "VERIFIED_BY_MINISTRY",
            approved: "APPROVED",
            printedGenerated: "PRINTED_GENERATED",
            notShowedUp: "NOT_SHOWED_UP",
            appealed: "APPEALED",
            appeal_rejected: "APPEAL_REJECTED",
            reapplication: "REAPPLICATION",
            canceled: "CANCELED",
            canceledByApplicant: "CANCELED_BY_APPLICANT"
        }
          , un = cn
          , pn = "view.apply"
          , dn = {
            pfx: pn,
            t: {
                en: {
                    applicationsInDraft: 'You have an unfinalized "{visaType}" application. Do you wish to continue?'
                },
                al: {
                    applicationsInDraft: 'Ju keni një aplikacion për "{visaType}" të pafinalizuar. Dëshironi ta vazhdoni?'
                }
            }
        }
          , mn = {
            tPfx: pn,
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            },
            components: {
                EVisaInformation: Da,
                Visas: ln,
                ProcessPhases: xi,
                Exemptions: Ma
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"])), Object(f["c"])(g, ["isLoggedIn"])),
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss
            })), {}, {
                checkForDraftsApplications: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r, s, o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    hu.all(un.draft);
                                case 2:
                                    if (a = t.sent,
                                    i = a.data,
                                    n = i.data.applications,
                                    !n.length) {
                                        t.next = 13;
                                        break
                                    }
                                    return r = n[0],
                                    t.next = 9,
                                    e.$swal({
                                        title: e.$t("".concat(e.$options.tPfx, ".applicationsInDraft"), {
                                            visaType: r.visaType.title[e.$i18n.locale]
                                        }),
                                        showCancelButton: !0
                                    });
                                case 9:
                                    return s = t.sent,
                                    o = s.isConfirmed,
                                    o && e.$router.push({
                                        name: "Questionary",
                                        params: {
                                            applicationId: r.id
                                        }
                                    }),
                                    t.abrupt("return", o);
                                case 13:
                                    return t.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                e.isLoggedIn && e.checkForDraftsApplications();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , fn = mn
          , hn = Object(Q["a"])(fn, $a, _a, !1, null, null, null)
          , gn = hn.exports
          , vn = function(e, t) {
            var a = t._c;
            return t.parent.$route.meta.title ? a("header", t._b({
                staticClass: "bg-secondary-500 shadow-xl",
                attrs: {
                    id: "page-title"
                }
            }, "header", t.data.attrs, !1), [a("tapered-section", {
                staticClass: "py-4 px-4"
            }, [a("h1", {
                staticClass: "text-white"
            }, [a("portal-target", {
                staticClass: "inline",
                attrs: {
                    name: "page-title"
                }
            }, [t._v(" " + t._s(t.parent.$t(t.$options.tPfx + "." + t.parent.$route.meta.title)) + " ")]), a("portal-target", {
                staticClass: "inline",
                attrs: {
                    name: "after-page-title"
                }
            })], 1)])], 1) : t._e()
        }
          , yn = []
          , bn = "layout.default.eTitle"
          , xn = {
            pfx: bn,
            t: {
                en: {
                    login: "Login",
                    register: "Register",
                    apply: "Apply",
                    applications: "My applications",
                    profile: "My profile",
                    questionary: "Visa application form",
                    payment: "Payment",
                    track: "Track application",
                    verify: "Verify visa",
                    about: "About",
                    "download-visa": "Download Your Visa",
                    appeal: "Appeal"
                },
                al: {
                    login: "Kyçu",
                    register: "Regjistrohu",
                    apply: "Apliko",
                    applications: "Aplikimet e mia",
                    profile: "Profili im",
                    questionary: "Formulari i aplikimit për vizë",
                    payment: "Pagesa",
                    track: "Gjurmo aplikimin",
                    verify: "Verifiko vizen",
                    about: "Rreth nesh",
                    "download-visa": "Shkarkoni Vizën Tuaj",
                    appeal: "Apelo"
                }
            }
        }
          , wn = {
            tPfx: bn
        }
          , kn = wn
          , Cn = Object(Q["a"])(kn, vn, yn, !0, null, null, null)
          , Pn = Cn.exports
          , $n = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "p-2 sm:px-0"
            }, e._l(e.linksWithLoggedInChecked, (function(t, i) {
                return a("router-link", {
                    key: i,
                    staticClass: "menu",
                    attrs: {
                        to: t.to
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.$emit("navigate")
                        }
                    }
                }, [e._v(" " + e._s(e.$t(e.$options.tPfx + "." + t.text)) + " ")])
            }
            )), 1)
        }
          , _n = []
          , jn = "layout.default.navbar.menus"
          , An = {
            pfx: jn,
            t: {
                en: {
                    home: "Home",
                    apply: "Apply",
                    track: "Track",
                    applications: "Applications"
                },
                al: {
                    home: "Kryefaqja",
                    apply: "Apliko",
                    track: "Gjurmo",
                    applications: "Aplikimet"
                }
            }
        }
          , On = {
            tPfx: jn,
            data: function() {
                return {
                    links: [{
                        text: "home",
                        to: {
                            name: "Home"
                        }
                    }, {
                        text: "apply",
                        to: {
                            name: "Apply"
                        }
                    }, {
                        text: "track",
                        to: {
                            name: "Track"
                        }
                    }]
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["c"])(g, ["isLoggedIn"])), {}, {
                linksWithLoggedInChecked: function() {
                    var e = [];
                    return this.isLoggedIn && (e = []),
                    [].concat(Object(D["a"])(this.links), Object(D["a"])(e))
                }
            })
        }
          , Sn = On
          , In = Object(Q["a"])(Sn, $n, _n, !1, null, null, null)
          , Nn = (In.exports,
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200",
                class: {
                    "py-8": !e.isShowingMessage,
                    "pt-32 pb-8": e.isShowingMessage
                },
                attrs: {
                    id: "questionary"
                }
            }, [e.isLoadingApplication ? a("loader", {
                attrs: {
                    loading: e.isLoadingApplication,
                    size: "1.5rem",
                    margin: "4px"
                }
            }) : a("tapered-section", {
                staticClass: "px-4"
            }, [a("questionary-title-portal", {
                attrs: {
                    title: e.visaTypeTitle[e.$i18n.locale],
                    "visa-label": e.visaLabel
                }
            }), a("pages", {
                staticClass: "mb-8",
                attrs: {
                    pages: e.pages,
                    value: e.page,
                    "only-backwards": e.pagesOnlyGoBackward
                },
                on: {
                    input: e.goToPage
                }
            }), a("questions", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isLastPage,
                    expression: "!isLastPage"
                }],
                staticClass: "mb-8",
                attrs: {
                    "application-status-code": e.applicationStatusCode,
                    questions: e.currentPageQuestions,
                    disabled: e.applicationIsLocked,
                    "show-comments": e.showComments,
                    id: "questions"
                },
                on: {
                    "question-answered": e.onQuestionAnswered,
                    "question-synched": e.onQuestionSynched
                }
            }), a("documents", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLastPage,
                    expression: "isLastPage"
                }],
                staticClass: "mb-8",
                attrs: {
                    "application-id": e.applicationId,
                    "document-categories": e.documentCategories,
                    disabled: e.applicationIsLocked,
                    "show-comments": e.showComments
                },
                on: {
                    "document-uploaded": e.onDocumentUploaded,
                    "document-deleted": e.onDocumentDeleted,
                    "document-size-error": e.onDocumentSizeError,
                    "document-dimension-error": e.onDocumentDimensionError,
                    "document-type-error": e.onDocumentTypeError
                }
            }), a("page-controls", {
                attrs: {
                    value: e.page,
                    "is-first-page": e.isFirstPage,
                    "is-last-page": e.isLastPage,
                    "is-locked": e.applicationIsLocked,
                    "is-finalizing": e.isFinalizingApplication,
                    "next-button-is-disabled": e.nextButtonIsDisabled,
                    "num-pages": e.pages.length
                },
                on: {
                    next: e.goToNextPage,
                    back: e.goToPrevPage,
                    finalize: e.finalizeApplication
                }
            })], 1)], 1)
        }
        )
          , Rn = [];
        a("d81d"),
        a("a9e3"),
        a("6062"),
        a("2532"),
        a("3ca3"),
        a("ddb0");
        //! Must be function to preserve Vue this context
        function Dn(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#page-title";
            window.innerWidth < 768 ? this.$scrollTo(e, t) : this.$scrollTo(a, t)
        }
        var Tn = Dn
          , En = {
            countryOfResidence: 1101,
            consularRepresentation: 1102,
            dateOfBirth: 1106,
            currentNationality: 1109,
            residencePermit: 1115,
            passportNumber: 2102,
            passportDateOfIssue: 2104,
            passportDateOfExpiry: 2105,
            dateOfArrival: 3103,
            dateOfDeparture: 3104,
            numberOfEntrances: 3105,
            durationOfStay: 3106,
            visaCategoryGroup: 3109,
            host: 5099,
            hostNameIfCompany: 5100,
            hostName: 5101,
            hostSurname: 5102,
            hostBirthday: 5103,
            hostSex: 5104,
            hostPhone: 5105,
            hostEmail: 5106,
            hostFullAddress: 5107,
            hostPersonalNumber: 5108,
            hostExpensesPaidBy: 5109,
            hostExpensesPaidByDetails: 5110,
            hostMeansOfSupport: 5111,
            hostInsuranceValidUntil: 5112,
            applicantEmail: 6103,
            visaTypeAHostQuestionCode: 10009,
            invitationFromHostInstitution: 10015,
            invitationFromHostInstitutionWhenNecessary: 10043,
            invitationFromTheScientificSubject: 10062
        }
          , qn = En
          , zn = a("e3ee")
          , Bn = a("1d9b")
          , Vn = a("4e31")
          , Fn = a("1212")
          , Mn = a("7677");
        function Ln(e) {
            var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return t.test(String(e).toLowerCase())
        }
        var Un = Ln;
        function Hn(e) {
            var t = /^[a-z0-9]+$/;
            return t.test(String(e).toLowerCase())
        }
        var Wn = Hn;
        function Gn(e) {
            return e >= 0 && e <= 30
        }
        var Qn = Gn;
        function Kn(e) {
            var t = e;
            if (this.questionHasAnswer(t)) {
                var a = Object(zn["a"])(t.answers[0].answer.en);
                if (Object(Bn["a"])(a) || Object(Vn["a"])(a))
                    return t.error = "isTodayOrInThePast",
                    !1;
                var i = this.getQuestionByCode(qn.dateOfDeparture);
                if (this.questionHasAnswer(i)) {
                    var n = Object(zn["a"])(i.answers[0].answer.en);
                    if (Object(Fn["a"])(a, n))
                        return t.error = "isAfterOtherDate",
                        t.errorParams.relatedQuestion = i,
                        !1
                }
            }
            return !0
        }
        function Xn(e) {
            var t = e;
            if (this.questionHasAnswer(t)) {
                var a = Object(zn["a"])(t.answers[0].answer.en);
                if (Object(Bn["a"])(a) || Object(Vn["a"])(a))
                    return t.error = "isTodayOrInThePast",
                    !1;
                var i = this.getQuestionByCode(qn.dateOfArrival);
                if (this.questionHasAnswer(i)) {
                    var n = Object(zn["a"])(i.answers[0].answer.en);
                    if (Object(Mn["a"])(t, n))
                        return t.error = "isBeforeOtherDate",
                        t.errorParams.relatedQuestion = i,
                        !1
                }
            }
            return !0
        }
        function Yn(e) {
            var t = e
              , a = this.getQuestionByCode(qn.passportDateOfExpiry);
            if (this.questionHasAnswer(t) && this.questionHasAnswer(a)) {
                var i = Object(zn["a"])(t.answers[0].answer.en)
                  , n = Object(zn["a"])(a.answers[0].answer.en);
                if (Object(Fn["a"])(i, n))
                    return t.error = "isAfterOtherDate",
                    t.errorParams.relatedQuestion = a,
                    !1
            }
            return !0
        }
        function Jn(e) {
            var t = e;
            if (this.questionHasAnswer(t)) {
                var a = Object(zn["a"])(t.answers[0].answer.en);
                if (Object(Bn["a"])(a) || Object(Vn["a"])(a))
                    return t.error = "isTodayOrInThePast",
                    !1;
                var i = this.getQuestionByCode(qn.passportDateOfIssue);
                if (this.questionHasAnswer(i)) {
                    var n = Object(zn["a"])(i.answers[0].answer.en);
                    if (Object(Mn["a"])(a, n))
                        return i.error = "isAfterOtherDate",
                        i.errorParams.relatedQuestion = t,
                        !1
                }
            }
            return !0
        }
        function Zn(e) {
            var t = e;
            if (this.questionHasAnswer(t)) {
                var a = t.answers[0].answer.en
                  , i = Un(a);
                if (!i)
                    return e.error = "invalidEmail",
                    !1
            }
            return !0
        }
        function er(e) {
            var t = e;
            if (this.questionHasAnswer(t)) {
                var a = t.answers[0].answer.en
                  , i = Wn(a);
                if (!i)
                    return e.error = "invalidPassportNumber",
                    !1
            }
            return !0
        }
        function tr(e, t) {
            var a = e;
            if (this.questionHasAnswer(a)) {
                var i = a.answers[0].answer.en
                  , n = Qn(i, t);
                if (!n)
                    return e.error = "invalidDurationOfStayTypeC",
                    !1
            }
            return !0
        }
        var ar = {
            validateDateOfArrival: Kn,
            validateDateOfDeparture: Xn,
            validatePassportDateOfIssue: Yn,
            validatePassportDateOfExpiry: Jn,
            validateEmailQuestion: Zn,
            validatePassportNumberQuestion: er,
            validateDurationOfStayTypeCQuestion: tr
        }
          , ir = {
            under18parentalApproval: 10008,
            residencePermitOver12Months: 10104
        }
          , nr = ir
          , rr = {
            textarea: "textarea",
            date: "date",
            input: "input",
            radio: "radio",
            select: "select"
        }
          , sr = rr;
        function or(e) {
            this.$set(e, "minDate", null),
            this.$set(e, "maxDate", null),
            this.$set(e, "disabledDates", null),
            this.$set(e, "initialView", "day")
        }
        var lr = {
            addAuxPropsToDateQuestion: or,
            addAuxPropsToQuestion: function(e) {
                this.$set(e, "error", null),
                this.$set(e, "errorCount", null),
                this.$set(e, "errorParams", {}),
                this.$set(e, "dirty", !1),
                e.type === sr.date && this.addAuxPropsToDateQuestion(e)
            }
        }
          , cr = {
            addAuxPropsToDocumentCategory: function(e) {
                this.$set(e, "error", null),
                this.$set(e, "errorCount", null),
                this.$set(e, "errorParams", null)
            }
        }
          , ur = a("069e")
          , pr = a("f7f1")
          , dr = a("5dea")
          , mr = {
            applyCountryOfResidenceSideEffects: function(e) {
                var t = e
                  , a = this.getQuestionByCode(qn.consularRepresentation);
                if (this.questionHasAnswer(t)) {
                    var i, n = t.answers[0].answer, r = t.options.find((function(e) {
                        return e.name.al === n.al
                    }
                    ));
                    if (this.questionHasAnswer(a)) {
                        var s = a.answers[0].answer.al
                          , o = a.answers[0].answer.en;
                        i = a.options.find((function(e) {
                            return e.name.al === s && e.name.en === o
                        }
                        )),
                        this.addEmailOfConsularRepresentationToErrorMessage(o)
                    }
                    if (i) {
                        var l = r.consularRepresentations.map((function(e) {
                            return JSON.stringify(e)
                        }
                        )).includes(JSON.stringify(i));
                        l || r.consularRepresentations.push(i)
                    }
                    a.options = r.consularRepresentations
                }
            },
            applyCurrentNationalitySideEffects: function(e) {
                var t = e;
                if (this.questionHasAnswer(t)) {
                    var a = t.answers[0].answer
                      , i = t.options.find((function(e) {
                        return e.name.al === a.al
                    }
                    ));
                    i.requiresVisa || (this.currentNationalityDoesNotRequireVisa = !0,
                    this.$swal(this.$t("".concat(this.$options.tPfx, ".currentNationalyVisaNotRequired"))))
                }
            },
            applyDateOfBirthSideEffects: function(e) {
                var t = e;
                if (e.initialView = "year",
                e.maxDate = new Date,
                this.questionHasAnswer(t)) {
                    var a = new Date(t.answers[0].answer.en)
                      , i = new Date;
                    Object(ur["a"])(i, a) < 18 && (this.under18DocumentIsRequired = !0)
                }
            },
            applyResidencePermitSideEffects: function(e) {
                var t = e;
                if (this.questionHasAnswer(t)) {
                    var a = t.answers[0].answer.en;
                    "Yes" === a && (this.residencePermitOver12MonthsIsRequired = !0)
                }
            },
            applyPassportDateOfIssueSideEffects: function(e) {
                var t = e;
                t.initialView = "year",
                t.maxDate = new Date
            },
            applyPassportExpiryDateSideEffects: function(e) {
                var t = e;
                t.initialView = "year",
                t.minDate = new Date
            },
            applyDateOfArrivalSideEffects: function(e) {
                var t = e
                  , a = this.getQuestionByCode(qn.dateOfDeparture);
                if (t.initialView = "month",
                t.minDate = new Date,
                this.questionHasAnswer(t)) {
                    var i = Object(zn["a"])(t.answers[0].answer.en);
                    a.minDate = Object(pr["a"])(i, 1)
                } else
                    a.minDate = Object(pr["a"])(t.minDate, 1)
            },
            applyDateOfDepartureSideEffects: function(e) {
                var t = e;
                if (t.initialView = "month",
                this.questionHasAnswer(t)) {
                    var a = Object(zn["a"])(t.answers[0].answer.en)
                      , i = this.getQuestionByCode(qn.dateOfArrival);
                    i.maxDate = Object(dr["a"])(a, 1)
                }
            }
        }
          , fr = a("fd3a");
        function hr(e) {
            e.forEach((function(e) {
                e.isRequired = 0,
                e.question.al = e.question.al.replace(" *", ""),
                e.question.en = e.question.en.replace(" *", "")
            }
            ))
        }
        function gr(e) {
            e.forEach((function(e) {
                e.isRequired = 1,
                e.question.al += " *",
                e.question.en += " *"
            }
            ))
        }
        var vr = {
            makeQuestionsNotRequired: hr,
            makeQuestionsRequired: gr
        }
          , yr = {
            applyCountryOfResidenceSideEffectsAfterServerSync: function(e) {
                var t = this;
                return Object(h["a"])(regeneratorRuntime.mark((function a() {
                    var i, n, r, s, o, l, c, u;
                    return regeneratorRuntime.wrap((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                if (i = e,
                                n = t.getQuestionByCode(qn.consularRepresentation),
                                r = t.questionHasAnswer(i),
                                s = t.questionHasAnswer(n),
                                !r || s) {
                                    a.next = 9;
                                    break
                                }
                                return o = i.answers[0].answer,
                                l = i.options.find((function(e) {
                                    return e.name.al === o.al
                                }
                                )),
                                n.options = l.consularRepresentations,
                                a.abrupt("return");
                            case 9:
                                if (!r || !s) {
                                    a.next = 18;
                                    break
                                }
                                return n.answers[0].toDelete = !0,
                                n.dirty = !0,
                                a.next = 14,
                                t.onQuestionSynched({
                                    question: n
                                });
                            case 14:
                                return c = i.answers[0].answer,
                                u = i.options.find((function(e) {
                                    return e.name.al === c.al
                                }
                                )),
                                n.options = u.consularRepresentations,
                                a.abrupt("return");
                            case 18:
                                if (r || !s) {
                                    a.next = 25;
                                    break
                                }
                                return n.answers[0].toDelete = !0,
                                n.dirty = !0,
                                a.next = 23,
                                t.onQuestionSynched({
                                    question: n
                                });
                            case 23:
                                return n.options = [],
                                a.abrupt("return");
                            case 25:
                                r || s || (n.options = []);
                            case 26:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )))()
            },
            applyConsularRepresentationSideEffectsAfterServerSync: function(e) {
                var t = this;
                return Object(h["a"])(regeneratorRuntime.mark((function a() {
                    return regeneratorRuntime.wrap((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                t.addEmailOfConsularRepresentationToErrorMessage(e.answers[0].answer.en);
                            case 1:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )))()
            },
            applyCurrentNationalitySideEffectsAfterServerSync: function(e) {
                var t = this;
                return Object(h["a"])(regeneratorRuntime.mark((function a() {
                    var i, n, r;
                    return regeneratorRuntime.wrap((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                if (i = e,
                                !t.questionHasAnswer(i)) {
                                    a.next = 8;
                                    break
                                }
                                if (n = i.answers[0].answer,
                                r = i.options.find((function(e) {
                                    return e.name.al === n.al
                                }
                                )),
                                r.requiresVisa) {
                                    a.next = 8;
                                    break
                                }
                                return t.currentNationalityDoesNotRequireVisa = !0,
                                t.$swal(t.$t("".concat(t.$options.tPfx, ".currentNationalyVisaNotRequired"))),
                                a.abrupt("return");
                            case 8:
                                return t.currentNationalityDoesNotRequireVisa = !1,
                                a.abrupt("return");
                            case 10:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )))()
            },
            applyDateOfBirthSideEffectsAfterServerSync: function(e) {
                var t = e;
                if (this.questionHasAnswer(t)) {
                    var a = new Date(t.answers[0].answer.en)
                      , i = new Date;
                    Object(ur["a"])(i, a) < 18 ? this.under18DocumentIsRequired = !0 : this.under18DocumentIsRequired = !1
                } else
                    this.under18DocumentIsRequired = !1
            },
            applyResidencePermitSideEffectsAfterServerSync: function(e) {
                var t = e;
                if (this.questionHasAnswer(t)) {
                    var a = t.answers[0].answer.en;
                    this.residencePermitOver12MonthsIsRequired = "Yes" === a
                } else
                    this.residencePermitOver12MonthsIsRequired = !1
            },
            applyDateOfArrivalSideEffectsAfterServerSync: function(e) {
                var t = e
                  , a = this.getQuestionByCode(qn.dateOfDeparture);
                if (this.questionHasAnswer(t)) {
                    var i = Object(zn["a"])(t.answers[0].answer.en);
                    a.minDate = Object(pr["a"])(i, 1)
                } else
                    a.minDate = Object(fr["a"])(t.minDate, 1)
            },
            applyDateOfDepartureSideEffectsAfterServerSync: function(e) {
                var t = e
                  , a = this.getQuestionByCode(qn.dateOfArrival);
                if (this.questionHasAnswer(t)) {
                    var i = Object(zn["a"])(t.answers[0].answer.en);
                    a.maxDate = Object(dr["a"])(i, 1)
                } else
                    a.maxDate = null
            },
            applyHostSideEffectsAfterServerSync: function(e) {
                var t, a, i = this.getQuestionByCode(qn.hostBirthday), n = this.getQuestionByCode(qn.hostSex), r = this.getQuestionByCode(qn.hostNameIfCompany);
                vr.makeQuestionsNotRequired([i, n, r]);
                var s = []
                  , o = null === e || void 0 === e || null === (t = e.answers[0]) || void 0 === t || null === (a = t.answer) || void 0 === a ? void 0 : a.en;
                s = "Person" === o ? [i, n] : [r],
                vr.makeQuestionsRequired(s)
            }
        }
          , br = function(e, t) {
            var a = t._c;
            return a("portal", {
                attrs: {
                    to: "after-page-title"
                }
            }, [a("div", {
                staticClass: "inline ml-2",
                attrs: {
                    title: t.props.title
                }
            }, [a("font-awesome-icon", {
                attrs: {
                    icon: "info-circle"
                }
            })], 1), a("span", {
                staticClass: "ml-3"
            }, [t._v("(" + t._s(t.props.visaLabel) + ")")])])
        }
          , xr = []
          , wr = {
            props: {
                title: String,
                visaLabel: String
            }
        }
          , kr = wr
          , Cr = Object(Q["a"])(kr, br, xr, !0, null, null, null)
          , Pr = Cr.exports
          , $r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", [e.pages.length ? [a("pages-mobile", {
                staticClass: "md:hidden",
                attrs: {
                    value: e.value,
                    pages: e.pagesWithNames,
                    "selected-page-index": e.selectedPageIndex,
                    "only-backwards": e.onlyBackwards,
                    "translation-namespace": e.$options.tPfx
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t)
                    }
                }
            }), a("pages-web", {
                staticClass: "hidden md:flex",
                attrs: {
                    value: e.value,
                    pages: e.pagesWithNames,
                    "selected-page-index": e.selectedPageIndex,
                    "only-backwards": e.onlyBackwards,
                    "translation-namespace": e.$options.tPfx
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t)
                    }
                }
            })] : e._e()], 2)
        }
          , _r = []
          , jr = function(e, t) {
            if (8 === t.length)
                switch (e) {
                case 1:
                    return "personalInformation";
                case 2:
                    return "passportInformation";
                case 3:
                    return "visaInformation";
                case 4:
                    return "hostInformation";
                case 5:
                    return "addressAndContact";
                case 6:
                    return "employmentInformation";
                case 7:
                    return "fillOfApplication";
                case 8:
                    return "uploadDocuments";
                default:
                    return null
                }
            if (9 === t.length)
                switch (e) {
                case 1:
                    return "personalInformation";
                case 2:
                    return "passportInformation";
                case 3:
                    return "visaInformation";
                case 4:
                    return "familyMembersInformation";
                case 5:
                    return "hostInformation";
                case 6:
                    return "addressAndContact";
                case 7:
                    return "employmentInformation";
                case 8:
                    return "fillOfApplication";
                case 9:
                    return "uploadDocuments";
                default:
                    return null
                }
            switch (e) {
            case 1:
                return "personalInformation";
            case 2:
                return "passportInformation";
            case 3:
                return "visaInformation";
            case 4:
                return "familyMembersInformation";
            case 5:
                return "hostInformation";
            case 6:
                return "addressAndContact";
            case 7:
                return "uploadDocuments";
            default:
                return null
            }
        }
          , Ar = jr
          , Or = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "mx-auto max-w-md"
            }, [a("div", {
                staticClass: "rounded-md bg-white"
            }, [a("pages-modal", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.modalIsOpen,
                    expression: "modalIsOpen"
                }],
                attrs: {
                    value: e.value,
                    pages: e.pages,
                    "translation-namespace": e.translationNamespace,
                    "only-backwards": e.onlyBackwards
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t)
                    },
                    close: function(t) {
                        e.modalIsOpen = !1
                    }
                }
            }), a("div", {
                staticClass: "border-2 rounded-md border-primary-900"
            }, [a("button", {
                staticClass: "block p-2 w-full rounded-t-sm text-primary-900 text-center cursor-pointer",
                class: {
                    "h-10 no-further-options": !e.showOpenModalInTheBegining
                },
                on: {
                    click: function(t) {
                        return e.conditionallyOpenModal(e.showOpenModalInTheBegining)
                    }
                }
            }, [e._v(" " + e._s(e.showOpenModalInTheBegining ? "..." : "") + " ")]), e._l(e.pagesToRender, (function(t) {
                return a("button", {
                    key: t.page,
                    staticClass: "block p-2 w-full text-center cursor-pointer",
                    class: {
                        "bg-secondary-500 text-white": t.page === e.value,
                        "text-primary-900": t.page !== e.value,
                        "bg-gray-300 cursor-not-allowed": e.onlyBackwards && t.page > e.value
                    },
                    on: {
                        click: function(a) {
                            return e.$emit("input", t.page)
                        }
                    }
                }, [e._v(" " + e._s(e.$t(e.translationNamespace + "." + t.title)) + " ")])
            }
            )), a("button", {
                staticClass: "block p-2 w-full rounded-b-sm text-primary-900 text-center cursor-pointer",
                class: {
                    "h-10 no-further-options": !e.showOpenModalInTheEnd
                },
                on: {
                    click: function(t) {
                        return e.conditionallyOpenModal(e.showOpenModalInTheEnd)
                    }
                }
            }, [e._v(" " + e._s(e.showOpenModalInTheEnd ? "..." : "") + " ")])], 2)], 1)])
        }
          , Sr = []
          , Ir = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", {
                ref: "backdrop",
                staticClass: "fixed top-0 right-0 bottom-0 left-0 flex items-center p-8 backdrop-blur z-40",
                on: {
                    click: e.closeModalOnBackdropClick
                }
            }, [a("div", {
                staticClass: "border rounded-md border-secondary-500 p-8 w-full bg-white shadow-xl"
            }, [a("div", {
                staticClass: "mb-8 border-2 rounded-md border-primary-900"
            }, e._l(e.pages, (function(t) {
                return a("button", {
                    key: t.page,
                    staticClass: "page block p-2 w-full text-center cursor-pointer",
                    class: {
                        "bg-secondary-500 text-white": t.page === e.value,
                        "text-primary-900": t.page !== e.value,
                        "bg-gray-300 cursor-not-allowed": e.onlyBackwards && t.page > e.value
                    },
                    on: {
                        click: function(a) {
                            return e.emitInputAndClose(t.page)
                        }
                    }
                }, [e._v(" " + e._s(e.$t(e.translationNamespace + "." + t.title)) + " ")])
            }
            )), 0), a("button", {
                staticClass: "w-full button button-secondary",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.translationNamespace + ".close")) + " ")])])])
        }
          , Nr = []
          , Rr = {
            props: {
                pages: {
                    type: Array,
                    required: !0
                },
                value: {
                    type: Number,
                    required: !0
                },
                translationNamespace: {
                    type: String,
                    required: !0
                },
                onlyBackwards: {
                    type: Boolean,
                    required: !0
                }
            },
            methods: {
                emitInputAndClose: function(e) {
                    this.$emit("input", e),
                    this.$emit("close")
                },
                closeModalOnBackdropClick: function(e) {
                    e.srcElement === this.$refs.backdrop && this.$emit("close")
                }
            }
        }
          , Dr = Rr
          , Tr = (a("d2cb"),
        Object(Q["a"])(Dr, Ir, Nr, !1, null, "afdec600", null))
          , Er = Tr.exports
          , qr = {
            components: {
                PagesModal: Er
            },
            props: {
                pages: {
                    type: Array,
                    required: !0
                },
                value: {
                    type: Number,
                    required: !0
                },
                selectedPageIndex: {
                    type: Number,
                    required: !0
                },
                translationNamespace: {
                    type: String,
                    required: !0
                },
                onlyBackwards: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    modalIsOpen: !1
                }
            },
            computed: {
                showOpenModalInTheBegining: function() {
                    return this.selectedPageIndex - 2 >= 0
                },
                showOpenModalInTheEnd: function() {
                    return this.pages.length - this.selectedPageIndex - 3 >= 0
                },
                pagesToRender: function() {
                    if (0 === this.selectedPageIndex)
                        return [this.pages[0], this.pages[1], this.pages[2]];
                    if (this.selectedPageIndex === this.pages.length - 1) {
                        var e = this.selectedPageIndex;
                        return [this.pages[e - 2], this.pages[e - 1], this.pages[e]]
                    }
                    var t = this.selectedPageIndex;
                    return [this.pages[t - 1], this.pages[t], this.pages[t + 1]]
                }
            },
            methods: {
                conditionallyOpenModal: function(e) {
                    e && (this.modalIsOpen = !0)
                }
            }
        }
          , zr = qr
          , Br = (a("73d0"),
        Object(Q["a"])(zr, Or, Sr, !1, null, "08ad5e2d", null))
          , Vr = Br.exports
          , Fr = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "flex justify-center items-start"
            }, e._l(e.pages, (function(t) {
                return a("button", {
                    key: t.page,
                    staticClass: "p-2 w-24 lg:w-32 cursor-pointer",
                    class: {
                        "cursor-pointer": !e.onlyBackwards || e.onlyBackwards && t.page <= e.value,
                        "cursor-not-allowed": e.onlyBackwards && t.page > e.value
                    },
                    attrs: {
                        title: e.onlyBackwards && t.page > e.value ? e.$t(e.translationNamespace + ".pageOnlyBackwards") : e.$t(e.translationNamespace + "." + t.title)
                    },
                    on: {
                        click: function(a) {
                            return e.$emit("input", t.page)
                        }
                    }
                }, [a("span", {
                    staticClass: "inline-block w-full h-1",
                    class: {
                        "bg-primary-900": t.page !== e.value && (!e.onlyBackwards || e.onlyBackwards && t.page <= e.value),
                        "bg-gray-400": t.page !== e.value && e.onlyBackwards && t.page > e.value,
                        "bg-secondary-500": t.page === e.value
                    }
                }), e._v(" " + e._s(e.$t(e.translationNamespace + "." + t.title)) + " ")])
            }
            )), 0)
        }
          , Mr = []
          , Lr = {
            props: {
                pages: {
                    type: Array,
                    required: !0
                },
                value: {
                    type: Number,
                    required: !0
                },
                selectedPageIndex: {
                    type: Number,
                    required: !0
                },
                translationNamespace: {
                    type: String,
                    required: !0
                },
                onlyBackwards: {
                    type: Boolean,
                    required: !0
                }
            }
        }
          , Ur = Lr
          , Hr = Object(Q["a"])(Ur, Fr, Mr, !1, null, null, null)
          , Wr = Hr.exports
          , Gr = "view.questionary.pages"
          , Qr = {
            pfx: Gr,
            t: {
                en: {
                    personalInformation: "Personal information",
                    passportInformation: "Passport information",
                    visaInformation: "Visa information",
                    familyMembersInformation: "Family members information",
                    hostInformation: "Host information",
                    addressAndContact: "Address & contact",
                    employmentInformation: "Employment Information",
                    fillOfApplication: "Application fill information",
                    uploadDocuments: "Upload documents",
                    close: "Close",
                    pageOnlyBackwards: "You can only go backwards when creating an application"
                },
                al: {
                    personalInformation: "Informacion personal",
                    passportInformation: "Informacion i pasaportës",
                    visaInformation: "Informacion i vizës",
                    familyMembersInformation: "Informacion i anëtarve të familjes",
                    hostInformation: "Informacion i pritësit",
                    addressAndContact: "Adresa & Kontakt",
                    employmentInformation: "Informacion mbi punësimin",
                    fillOfApplication: "Plotësimi i aplikimit",
                    uploadDocuments: "Ngarkimi i dokumentave",
                    close: "Mbyll",
                    pageOnlyBackwards: "Ju mund te shkoni vetëm mbrapa gjatë krijimit të aplikimit"
                }
            }
        }
          , Kr = {
            tPfx: Gr,
            components: {
                PagesMobile: Vr,
                PagesWeb: Wr
            },
            props: {
                pages: {
                    type: Array,
                    required: !0
                },
                value: {
                    type: Number,
                    required: !0
                },
                onlyBackwards: {
                    type: Boolean,
                    required: !0
                }
            },
            computed: {
                pagesWithNames: function() {
                    var e = this;
                    return this.pages.map((function(t) {
                        return {
                            page: t,
                            title: Ar(t, e.pages)
                        }
                    }
                    ))
                },
                selectedPageIndex: function() {
                    return this.value - 1
                }
            }
        }
          , Xr = Kr
          , Yr = Object(Q["a"])(Xr, $r, _r, !1, null, null, null)
          , Jr = Yr.exports
          , Zr = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("article", {
                staticClass: "border rounded-md border-gray-400 p-4 md:p-8 bg-white"
            }, e._l(e.questionsBySection.entries(), (function(t, i) {
                var n = t[0]
                  , r = t[1];
                return a("section", {
                    key: n,
                    staticClass: "flex flex-wrap"
                }, [a("header", {
                    staticClass: "w-full mb-4"
                }, [a("h2", {
                    staticClass: "text-center"
                }, [e._v(e._s(JSON.parse(n)[e.$i18n.locale]))])]), e._l(r, (function(t, n) {
                    return a("question", {
                        key: t.code,
                        staticClass: "w-full md:w-1/2",
                        attrs: {
                            "application-status-code": e.applicationStatusCode,
                            "question-number": e.getQuestionNumber(i, n),
                            question: t,
                            disabled: e.disabled,
                            "show-comment": e.showComments
                        },
                        on: {
                            answered: function(t) {
                                return e.$emit("question-answered", t)
                            },
                            synched: function(t) {
                                return e.$emit("question-synched", t)
                            }
                        }
                    })
                }
                ))], 2)
            }
            )), 0)
        }
          , es = []
          , ts = (a("4ec9"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "p-2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0",
                class: {
                    "border border-secondary-500 rounded-md justify-between": e.showComment && e.comment,
                    "justify-end": !e.showComment || !e.comment
                }
            }, [e.showComment && e.comment ? a("span", {
                staticClass: "mb-4 italic text-xs text-secondary-500"
            }, [a("font-awesome-icon", {
                staticClass: "fa-sm",
                attrs: {
                    icon: "info-circle"
                }
            }), e._v(" " + e._s(e.$t(e.$options.tPfx + ".comment")) + ": " + e._s(e.comment[e.$i18n.locale]) + " ")], 1) : e._e(), a(e.dynamicQuestionComponent, e._g(e._b({
                tag: "component",
                staticClass: "w-full",
                scopedSlots: e._u([e.questionIsSelect || e.questionIsRadio ? {
                    key: "no-options",
                    fn: function(t) {
                        var i = t.search;
                        return [a("i18n", {
                            attrs: {
                                path: e.$options.tPfx + ".noMatches"
                            },
                            scopedSlots: e._u([{
                                key: "search",
                                fn: function() {
                                    return [a("em", [e._v('"' + e._s(i) + '"')])]
                                },
                                proxy: !0
                            }], null, !0)
                        })]
                    }
                } : null], null, !0)
            }, "component", e.dynamicAttributes, !1), e.dynamicEventHandlers))], 1)])
        }
        )
          , as = []
          , is = function(e) {
            switch (e) {
            case sr.date:
                return "date-input";
            case sr.textarea:
            case sr.input:
                return "text-input";
            case sr.radio:
            case sr.select:
                return "select-input"
            }
        }
          , ns = is
          , rs = function(e) {
            switch (e) {
            case sr.textarea:
            case sr.input:
                return "text";
            case sr.select:
                return "select";
            case sr.date:
                return "date";
            case sr.radio:
                return "radio"
            }
        }
          , ss = rs
          , os = "view.questionary.questions.question"
          , ls = {
            pfx: os,
            t: {
                en: {
                    isRequired: "This question is required",
                    isTodayOrInThePast: "Date cannot be today or in the past",
                    isAfterOtherDate: 'Date cannot be after "{otherQuestion}"',
                    isBeforeOtherDate: 'Date cannot be before "{otherQuestion}"',
                    noMatches: "No matches for {search}",
                    comment: "Comment",
                    invalidEmail: "Invalid email",
                    invalidPassportNumber: "Passport Number should not have spaces, and it should contain only letters from the English alphabet (Aa-Zz)and numbers(0-9)",
                    invalidDurationOfStayTypeC: "The number of days of stay should be a number format and should be up to 30 days",
                    pleaseInsertLatinCharacters: "Please use only latin characters",
                    passportNumberIsNotAllowedToApplyForVisa: "This passport number is not allowed to apply for visa"
                },
                al: {
                    isRequired: "Kjo pyetje eshte e detyrueshme",
                    isTodayOrInThePast: "Nuk mund të jetë data e sotme ose datë e kaluar",
                    isAfterOtherDate: 'Data nuk mund të jetë pas "{otherQuestion}"',
                    isBeforeOtherDate: 'Data nuk mund të jetë para "{otherQuestion}"',
                    noMatches: "Asnjë rezultat për {search}",
                    comment: "Koment",
                    invalidEmail: "Format i gabuar i emailit",
                    invalidPassportNumber: "Pashaporta nuk duhet të ketë hapësira, dhe duhet të përmbajë vetëm shkronja nga alfabeti Anglez(Aa-Zz) dhe numra(0-9)",
                    invalidDurationOfStayTypeC: "Numri i ditëve të qëndrimit duhet të jetë në format numër dhe të jetë deri në 30 ditë",
                    pleaseInsertLatinCharacters: "Ju lutem përdorni vetëm gërma latine",
                    passportNumberIsNotAllowedToApplyForVisa: "Ky numër pasaporte nuk është i lejuar që të aplikojë për vizë"
                }
            }
        }
          , cs = {
            tPfx: os,
            props: {
                applicationStatusCode: {
                    type: [String]
                },
                question: {
                    type: Object,
                    required: !0
                },
                disabled: {
                    type: Boolean,
                    required: !0
                },
                showComment: {
                    type: Boolean,
                    required: !0
                },
                questionNumber: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                dynamicQuestionComponent: function() {
                    return ns(this.question.type)
                },
                inputType: function() {
                    return ss(this.question.type)
                },
                questionIsSelect: function() {
                    return this.question.type === sr.select
                },
                questionIsRadio: function() {
                    return this.question.type === sr.radio
                },
                questionIsDate: function() {
                    return this.question.type === sr.date
                },
                localizedError: function() {
                    if (!this.question.error)
                        return this.question.error;
                    var e = {};
                    return this.question.errorParams.relatedQuestion && (e.otherQuestion = this.question.errorParams.relatedQuestion.question[this.$i18n.locale]),
                    console.log(e),
                    this.$t("".concat(this.$options.tPfx, ".").concat(this.question.error), e)
                },
                localizedLabel: function() {
                    var e = this.question.question[this.$i18n.locale]
                      , t = e.includes("*");
                    return "en" === this.$i18n.locale && this.question.isRequired && !t ? "".concat(this.questionNumber, " ").concat(e, " *") : "".concat(this.questionNumber, " ").concat(e)
                },
                comment: function() {
                    var e = this.question.comments;
                    if (e[0])
                        return this.question.comments[0].comment
                },
                //! Bind all props dynamically based on the question type
                dynamicAttributes: function() {
                    var e, t, a = this;
                    this.question.code === qn.visaCategoryGroup && localStorage.setItem("visa_type", null === (e = this.question.answers[0]) || void 0 === e || null === (t = e.answer) || void 0 === t ? void 0 : t.en);
                    var i = localStorage.getItem("visa_type")
                      , n = this.disabled || this.question.code === qn.visaCategoryGroup || this.question.code === qn.countryOfResidence && (this.applicationStatusCode === un.consularNeedChanges || this.applicationStatusCode === un.chiefPoliceNeedChanges) || this.question.code === qn.consularRepresentation && this.applicationStatusCode === un.consularNeedChanges || this.question.code === qn.durationOfStay && "D" === i || this.question.code === qn.numberOfEntrances && "VAB" === i;
                    return this.questionIsSelect || this.questionIsRadio ? {
                        disabled: n,
                        options: this.question.options || [],
                        getOptionLabel: function(e) {
                            return e.name ? e.name[a.$i18n.locale] : ""
                        },
                        reduce: function(e) {
                            return e.name
                        },
                        label: this.localizedLabel,
                        error: this.localizedError,
                        value: this.question.answers[0] ? this.question.answers[0].answer : null
                    } : this.questionIsDate ? {
                        error: this.localizedError,
                        initialView: this.question.initialView,
                        label: this.localizedLabel,
                        disabled: n,
                        minDate: this.question.minDate,
                        maxDate: this.question.maxDate,
                        disabledDates: this.question.disabledDates,
                        value: this.question.answers[0] && this.question.answers[0].answer ? this.question.answers[0].answer.en : ""
                    } : {
                        disabled: n,
                        type: this.inputType,
                        label: this.localizedLabel,
                        error: this.localizedError,
                        value: this.question.answers[0] && this.question.answers[0].answer ? this.question.answers[0].answer.en : ""
                    }
                },
                dynamicEventHandlers: function() {
                    return this.questionIsSelect || this.questionIsRadio ? {
                        input: this.onQuestionAnswered,
                        close: this.onAnswerSync,
                        clear: this.onAnswerSync
                    } : this.questionIsDate ? {
                        input: this.onQuestionAnsweredAndSynchedOnNextTick
                    } : {
                        input: this.onQuestionAnswered,
                        blur: this.onAnswerSync
                    }
                }
            },
            methods: {
                onQuestionAnswered: function(e) {
                    this.$emit("answered", {
                        answer: e,
                        question: this.question
                    })
                },
                onAnswerSync: function() {
                    this.$emit("synched", {
                        question: this.question
                    })
                },
                onQuestionAnsweredAndSynchedOnNextTick: function(e) {
                    var t = this;
                    this.$emit("answered", {
                        answer: e,
                        question: this.question
                    }),
                    this.$nextTick((function() {
                        t.$emit("synched", {
                            question: t.question
                        })
                    }
                    ))
                }
            }
        }
          , us = cs
          , ps = Object(Q["a"])(us, ts, as, !1, null, null, null)
          , ds = ps.exports
          , ms = {
            components: {
                Question: ds
            },
            props: {
                applicationStatusCode: {
                    type: [String]
                },
                questions: {
                    type: Array,
                    required: !0
                },
                disabled: {
                    type: Boolean,
                    required: !0
                },
                showComments: {
                    type: Boolean,
                    required: !0
                }
            },
            computed: {
                questionsBySection: function() {
                    var e, t = new Map, a = Object(N["a"])(this.questions);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var i = e.value
                              , n = JSON.stringify(i.title)
                              , r = t.has(n);
                            r ? t.get(n).push(i) : t.set(n, [i])
                        }
                    } catch (s) {
                        a.e(s)
                    } finally {
                        a.f()
                    }
                    return t
                }
            },
            methods: {
                getQuestionNumber: function(e, t) {
                    return "".concat(e + 1, ".").concat(t + 1)
                }
            }
        }
          , fs = ms
          , hs = Object(Q["a"])(fs, Zr, es, !1, null, null, null)
          , gs = hs.exports
          , vs = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("article", {
                staticClass: "border rounded-md border-gray-400 p-4 md:p-8 bg-white"
            }, [a("header", {
                staticClass: "w-full mb-4"
            }, [a("h2", {
                staticClass: "text-center"
            }, [e._v(e._s(e.$t(e.$options.tPfx + ".documents")))])]), a("section", {
                staticClass: "flex flex-wrap items-end"
            }, e._l(e.documentCategories, (function(t, i) {
                return a("document", {
                    key: t.id,
                    staticClass: "w-full lg:w-1/2",
                    attrs: {
                        index: i + 1,
                        "application-id": e.applicationId,
                        "document-category": t,
                        disabled: e.disabled,
                        "show-comment": e.showComments
                    },
                    on: {
                        uploaded: function(t) {
                            return e.$emit("document-uploaded", t)
                        },
                        deleted: function(t) {
                            return e.$emit("document-deleted", t)
                        },
                        "size-error": function(t) {
                            return e.$emit("document-size-error", t)
                        },
                        "type-error": function(t) {
                            return e.$emit("document-type-error", t)
                        },
                        "dimension-error": function(t) {
                            return e.$emit("document-dimension-error", t)
                        }
                    }
                })
            }
            )), 1)])
        }
          , ys = []
          , bs = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "p-2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2",
                class: {
                    "border border-secondary-500 rounded-md justify-between": e.showComment && e.comment,
                    "justify-end": !e.showComment || !e.comment
                }
            }, [e.showComment && e.comment ? a("span", {
                staticClass: "mb-4 italic text-xs text-secondary-500"
            }, [a("font-awesome-icon", {
                staticClass: "fa-sm",
                attrs: {
                    icon: "info-circle"
                }
            }), e._v(" " + e._s(e.$t(e.$options.tPfx + ".comment")) + ": " + e._s(e.comment[e.$i18n.locale]) + " ")], 1) : e._e(), a("file-input", {
                attrs: {
                    deletable: "",
                    "show-description": "",
                    disabled: e.disabled,
                    description: e.capitalizedDescription,
                    "has-invitation-document": e.questionCodesWithInviteDocument.includes(e.documentCategory.code),
                    label: e.localizedLabel,
                    "upload-hint": e.$t(e.$options.tPfx + ".uploadHint"),
                    accept: e.accept,
                    "max-size": e.documentCategory.maxSize,
                    "upload-url": e.uploadUrl,
                    "delete-url": e.deleteUrl,
                    origin: e.documentOrigin,
                    headers: e.authorizationHeader,
                    "additional-post-data": e.additionalPostData,
                    "reduce-response": function(e) {
                        return e.data.data.document
                    },
                    error: e.localizedError,
                    value: e.document,
                    close: e.$t(e.$options.tPfx + ".close"),
                    confirm: e.$t(e.$options.tPfx + ".confirm"),
                    "file-name": "document"
                },
                on: {
                    input: e.onDocumentAdded,
                    "upload-error": e.toDo,
                    deleted: e.onDocumentRemoved,
                    "delete-error": e.toDo,
                    "file-size-error": e.onDocumentSizeError,
                    "file-type-error": e.onDocumentTypeError,
                    "file-dimension-error": e.onDocumentDimensionError
                }
            })], 1)])
        }
          , xs = []
          , ws = (a("13d5"),
        a("cc1d"))
          , ks = a.n(ws)
          , Cs = (a("b680"),
        1073741824)
          , Ps = 1048576
          , $s = 1024
          , _s = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return e > Cs ? "".concat((e / Cs).toFixed(t), "GB") : e > Ps ? "".concat((e / Ps).toFixed(t), "MB") : e > $s ? "".concat((e / $s).toFixed(t), "KB") : "".concat(e, "B")
        }
          , js = _s
          , As = "view.questionary.documents.document"
          , Os = {
            pfx: As,
            t: {
                en: {
                    uploadHint: "Select or drop file to upload",
                    documentInvalidType: "File type {type} is invalid. Only {acceptReadable} is allowed. | File type is invalid. Only {acceptReadable} are allowed.",
                    documentInvalidSize: "Document size is invalid. Max size is {maxSizeReadable}.",
                    documentDimensionSize: "Document measuring is invalid. The measuring should be 47mm x 36mm (555px x 425px at 300 DPI).",
                    isRequired: "Document is required",
                    close: "Close",
                    confirm: "Confirm",
                    isRequiredUnder18: "Parental or legal guardian approval is required for minors under 18 years old",
                    comment: "Comment"
                },
                al: {
                    uploadHint: "Zgjidh ose tërhiq dokument",
                    documentInvalidType: "Lloji i dokumentit {type} nuk është i vlefshëm. Lejohet vetëm lloji {acceptReadable} | Lejohet vetëm llojet {acceptReadable}.",
                    documentInvalidSize: "Madhësia e dokumentit nuk është e vlefshme. Madhësia maksimale është {maxSizeReadable}.",
                    documentDimensionSize: "Përmasat e imazhit nuk janë të vlefshme. Përmasat duhet të jenë 47 mm x 36 mm (555px x 425px at 300 DPI).",
                    isRequired: "Dokumenti nuk mund të jetë bosh",
                    close: "Mbyll",
                    confirm: "Konfirmo",
                    isRequiredUnder18: "Deklarata e pëlqimit të prindërit ose kujdestarit ligjor është e detyrueshme për fëmijët nën 18 vjeç",
                    comment: "Koment"
                }
            }
        }
          , Ss = {
            tPfx: As,
            props: {
                applicationId: {
                    type: [Number, String],
                    required: !0
                },
                documentCategory: {
                    type: Object,
                    required: !0
                },
                index: {
                    type: Number,
                    required: !0
                },
                disabled: {
                    type: Boolean,
                    required: !0
                },
                showComment: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    questionCodesWithInviteDocument: [qn.visaTypeAHostQuestionCode, qn.invitationFromTheScientificSubject, qn.invitationFromHostInstitution, qn.invitationFromHostInstitutionWhenNecessary]
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["d"])(g, ["token"])), {}, {
                allowedTypes: function() {
                    return this.documentCategory.allowedTypes
                },
                humanReadableMaxSize: function() {
                    return js(this.documentCategory.maxSize, 0)
                },
                accept: function() {
                    return this.documentCategory.allowedTypes.reduce((function(e, t) {
                        return e ? "".concat(e, ", ").concat(ks.a.types[t]) : ks.a.types[t]
                    }
                    ), "")
                },
                authorizationHeader: function() {
                    return {
                        Authorization: "Bearer ".concat(this.token)
                    }
                },
                documentOrigin: function() {
                    return "https://e-visa.al/api"
                },
                uploadUrl: function() {
                    return "".concat(this.documentOrigin, "/me/applications/").concat(this.applicationId, "/documents")
                },
                deleteUrl: function() {
                    var e = this.documentCategory.documents[0] ? this.documentCategory.documents[0].id : null;
                    return e ? "".concat(this.documentOrigin, "/me/applications/").concat(this.applicationId, "/documents/").concat(e) : ""
                },
                additionalPostData: function() {
                    return {
                        documentCategoryId: this.documentCategory.id
                    }
                },
                typeErrorText: function() {
                    var e = this.allowedTypes.length
                      , t = this.allowedTypes.join(", ");
                    return this.$tc("".concat(this.$options.tPfx, ".documentInvalidType"), e, {
                        type: t
                    })
                },
                document: function() {
                    if (!this.documentCategory.documents[0])
                        return null;
                    var e = this.documentCategory.documents[0];
                    return e.name = this.documentCategory.title[this.$i18n.locale],
                    e
                },
                localizedError: function() {
                    return this.documentCategory.error ? this.$tc("".concat(this.$options.tPfx, ".").concat(this.documentCategory.error), this.documentCategory.errorCount, this.documentCategory.errorParams) : null
                },
                localizedLabel: function() {
                    var e = this.documentCategory.title[this.$i18n.locale]
                      , t = e.includes("*");
                    return this.documentCategory.isRequired && !t && (e = "".concat(e, " *")),
                    "".concat(this.index, " ").concat(e)
                },
                capitalizedDescription: function() {
                    var e = this.documentCategory.description[this.$i18n.locale];
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                comment: function() {
                    var e = this.documentCategory.comments;
                    if (e[0])
                        return this.documentCategory.comments[0].comment
                }
            }),
            methods: {
                toDo: function() {
                    console.log("error handling when api calls fail!")
                },
                onDocumentAdded: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    t.$emit("uploaded", {
                                        document: e,
                                        documentCategory: t.documentCategory
                                    });
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                onDocumentRemoved: function() {
                    this.$emit("deleted", {
                        documentCategory: this.documentCategory
                    })
                },
                onDocumentSizeError: function(e) {
                    this.$emit("size-error", {
                        error: e,
                        count: 1,
                        documentCategory: this.documentCategory
                    })
                },
                onDocumentDimensionError: function(e) {
                    this.$emit("dimension-error", {
                        error: e,
                        documentCategory: this.documentCategory
                    })
                },
                onDocumentTypeError: function(e) {
                    this.$emit("type-error", {
                        error: e,
                        count: this.allowedTypes.length,
                        documentCategory: this.documentCategory
                    })
                }
            }
        }
          , Is = Ss
          , Ns = Object(Q["a"])(Is, bs, xs, !1, null, null, null)
          , Rs = Ns.exports
          , Ds = "view.questionary.documents"
          , Ts = {
            pfx: Ds,
            t: {
                en: {
                    documents: "Upload documents"
                },
                al: {
                    documents: "Ngarkoni dokumentat"
                }
            }
        }
          , Es = {
            tPfx: Ds,
            components: {
                Document: Rs
            },
            props: {
                applicationId: {
                    type: [Number, String],
                    required: !0
                },
                documentCategories: {
                    type: Array,
                    required: !0
                },
                disabled: {
                    type: Boolean,
                    required: !0
                },
                showComments: {
                    type: Boolean,
                    required: !0
                }
            }
        }
          , qs = Es
          , zs = Object(Q["a"])(qs, vs, ys, !1, null, null, null)
          , Bs = zs.exports
          , Vs = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("footer", {
                staticClass: "flex flex-wrap justify-between border rounded-md border-gray-400 md:p-12 bg-white"
            }, [a("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isFirstPage,
                    expression: "!isFirstPage"
                }],
                staticClass: "m-6 md:m-0 md:mr-auto py-2 px-8 w-full md:w-auto button button-secondary",
                on: {
                    click: function(t) {
                        return e.$emit("back")
                    }
                }
            }, [a("font-awesome-icon", {
                staticClass: "mr-2",
                attrs: {
                    icon: "arrow-left"
                }
            }), e._v(" " + e._s(e.$t(e.$options.tPfx + ".back")) + " ")], 1), a("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isLastPage,
                    expression: "!isLastPage"
                }],
                staticClass: "m-6 md:m-0 md:ml-auto py-2 px-8 w-full md:w-auto button button-secondary",
                attrs: {
                    disabled: e.nextButtonIsDisabled
                },
                on: {
                    click: function(t) {
                        return e.$emit("next")
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".next")) + " "), a("font-awesome-icon", {
                staticClass: "ml-2",
                attrs: {
                    icon: "arrow-right"
                }
            })], 1), e.isLastPage && !e.isLocked ? a("loading-button", {
                staticClass: "m-6 md:m-0 md:ml-auto py-2 px-8 w-full md:w-auto button button-secondary",
                attrs: {
                    "is-loading": e.isFinalizing
                },
                on: {
                    click: function(t) {
                        return e.$emit("finalize")
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".finalize")) + " "), a("font-awesome-icon", {
                staticClass: "ml-2",
                attrs: {
                    icon: "arrow-right"
                }
            })], 1) : e._e()], 1)
        }
          , Fs = []
          , Ms = "view.questionary.pageControls"
          , Ls = {
            pfx: Ms,
            t: {
                en: {
                    next: "Next",
                    back: "Back",
                    finalize: "Finalize"
                },
                al: {
                    next: "Tjetra",
                    back: "Mbrapa",
                    finalize: "Përfundo"
                }
            }
        }
          , Us = {
            tPfx: Ms,
            props: {
                value: {
                    type: Number,
                    required: !0
                },
                isFirstPage: {
                    type: Boolean,
                    required: !0
                },
                isLastPage: {
                    type: Boolean,
                    required: !0
                },
                isLocked: {
                    type: Boolean,
                    required: !0
                },
                nextButtonIsDisabled: {
                    type: Boolean,
                    required: !0
                },
                isFinalizing: {
                    type: Boolean,
                    required: !0
                }
            }
        }
          , Hs = Us
          , Ws = Object(Q["a"])(Hs, Vs, Fs, !1, null, null, null)
          , Gs = Ws.exports
          , Qs = "view.questionary"
          , Ks = {
            pfx: Qs,
            t: {
                en: {
                    currentNationalyVisaNotRequired: "For the currently selected nationality, visa is not required to travel to the Republic of Albania",
                    somethingWentWrong: "Something went wrong!",
                    somethingWentWrongWithEmailAddress: "Something went wrong! Please try again later.",
                    validationFailed: "Please fill all required fields!",
                    blockedApplicantPassportNumber: "You have used a passport number that is not allowed to apply for visa!",
                    c_visa_daily_national: "The daily limit for Category C visa applications has been reached. You cannot submit this application today. Please try again tomorrow.",
                    c_visa_daily_consulate: "The daily application limit for this consular office has been reached. Please try again tomorrow.",
                    electronicVisa: "Electronic Visa",
                    stampedVisa: "Stamped Visa"
                },
                al: {
                    currentNationalyVisaNotRequired: "Për shtetësinë e zgjedhur nuk nevojivet vizë për të udhëtuar në Republikën e Shqipërisë",
                    somethingWentWrong: "Diçka shkoi keq!",
                    somethingWentWrongWithEmailAddress: "Diçka shkoi keq! Ju lutem provoni përsëri më vonë.",
                    validationFailed: "Ju lutem plotësoni të gjithë fushat e detyrueshme!",
                    blockedApplicantPassportNumber: "Ju keni përdorur një numër pasaporte i cili nuk është i lejuar të aplikojë për vizë!",
                    c_visa_daily_national: "Është arritur limiti ditor i aplikimeve për vizat e kategorisë C. Nuk mund ta dërgoni këtë aplikim sot. Ju lutem provoni përsëri nesër.",
                    c_visa_daily_consulate: "Është arritur limiti ditor i aplikimeve për këtë zyrë konsullore. Ju lutem provoni përsëri nesër.",
                    electronicVisa: "Vizë Elektronike",
                    stampedVisa: "Vizë Pullë"
                }
            }
        }
          , Xs = {
            tPfx: Qs,
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            },
            components: {
                QuestionaryTitlePortal: Pr,
                Pages: Jr,
                Questions: gs,
                Documents: Bs,
                PageControls: Gs
            },
            props: {
                applicationId: [Number, String]
            },
            data: function() {
                return {
                    application: {},
                    page: 1,
                    isLoadingApplication: !1,
                    isFinalizingApplication: !1,
                    currentNationalityDoesNotRequireVisa: !1,
                    under18DocumentIsRequired: !1,
                    residencePermitOver12MonthsIsRequired: !1
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"])), {}, {
                visaTypeTitle: function() {
                    return this.application.visaType ? this.application.visaType.title : {
                        en: "",
                        al: ""
                    }
                },
                visaLabel: function() {
                    return this.application.is_electronic ? this.$t("".concat(this.$options.tPfx, ".electronicVisa")) : this.$t("".concat(this.$options.tPfx, ".stampedVisa"))
                },
                applicationStatusCode: function() {
                    return this.application.status ? this.application.status.code : null
                },
                documentCategories: function() {
                    return this.application.visaType ? this.application.visaType.documentCategories : []
                },
                questions: function() {
                    return this.application.visaType ? this.application.visaType.questions : []
                },
                pages: function() {
                    if (!this.application.visaType)
                        return [];
                    var e = new Set;
                    this.questions.forEach((function(t) {
                        e.add(t.page)
                    }
                    ));
                    var t = Object(D["a"])(e).sort()
                      , a = t[t.length - 1] + 1;
                    return t.push(a),
                    t
                },
                isLastPage: function() {
                    return this.page === this.pages[this.pages.length - 1]
                },
                isFirstPage: function() {
                    return this.page === this.pages[0]
                },
                nextButtonIsDisabled: function() {
                    return this.currentNationalityDoesNotRequireVisa
                },
                currentPageQuestions: function() {
                    var e, t = [], a = Object(N["a"])(this.questions);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var i = e.value;
                            i.page === this.page && t.push(i)
                        }
                    } catch (n) {
                        a.e(n)
                    } finally {
                        a.f()
                    }
                    return t
                },
                currentAnswersAreValid: function() {
                    var e, t = !0, a = Object(N["a"])(this.currentPageQuestions);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var i = e.value;
                            if (i.error) {
                                t = !1;
                                break
                            }
                        }
                    } catch (n) {
                        a.e(n)
                    } finally {
                        a.f()
                    }
                    return t
                },
                showComments: function() {
                    return !!this.application.status && (this.applicationStatusCode === un.consularNeedChanges || this.applicationStatusCode === un.chiefPoliceNeedChanges)
                },
                userCanMakeChanges: function() {
                    return !!this.application.status && (this.applicationStatusCode === un.draft || this.applicationStatusCode === un.consularNeedChanges || this.applicationStatusCode === un.chiefPoliceNeedChanges)
                },
                applicationIsLocked: function() {
                    return !this.userCanMakeChanges
                },
                pagesOnlyGoBackward: function() {
                    return !this.application.status || this.applicationStatusCode === un.draft
                }
            }),
            methods: Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({
                scrollToResponsive: Tn
            }, Object(f["b"])(k, {
                dispatchShowFlash: P.show,
                dispatchDismissFlash: P.dismiss
            })), lr), cr), {}, {
                handleErrorResponse: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    a.t0 = e.response.status,
                                    a.next = 404 === a.t0 ? 3 : 403 === a.t0 ? 6 : 9;
                                    break;
                                case 3:
                                    return a.next = 5,
                                    t.$router.push({
                                        name: "Apply",
                                        hash: "#visa-types"
                                    });
                                case 5:
                                    return a.abrupt("return", a.sent);
                                case 6:
                                    return a.next = 8,
                                    t.$router.replace({
                                        name: "Home"
                                    });
                                case 8:
                                    return a.abrupt("return", a.sent);
                                case 9:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                questionHasAnswer: function(e) {
                    return !!e.answers[0] && !!e.answers[0].answer
                },
                getQuestionByCode: function(e) {
                    return this.questions.find((function(t) {
                        return t.code === e
                    }
                    ))
                },
                addEmailOfConsularRepresentationToErrorMessage: function(e) {
                    e || (e = "Default Consular");
                    var t = " Please try again later."
                      , a = " Ju lutem provoni përsëri më vonë.";
                    Ks.t.en.somethingWentWrongWithEmailAddress = Ks.t.en.somethingWentWrong + t,
                    Ks.t.al.somethingWentWrongWithEmailAddress = Ks.t.al.somethingWentWrong + a
                }
            }, mr), {}, {
                applyQuestionSideEffects: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (i = localStorage.getItem("visa_type"),
                                    e.code !== qn.countryOfResidence || "VAB" === i) {
                                        a.next = 3;
                                        break
                                    }
                                    return a.abrupt("return", t.applyCountryOfResidenceSideEffects(e));
                                case 3:
                                    if (e.code !== qn.currentNationality) {
                                        a.next = 5;
                                        break
                                    }
                                    return a.abrupt("return", t.applyCurrentNationalitySideEffects(e));
                                case 5:
                                    if (e.code !== qn.dateOfBirth) {
                                        a.next = 7;
                                        break
                                    }
                                    return a.abrupt("return", t.applyDateOfBirthSideEffects(e));
                                case 7:
                                    if (e.code !== qn.residencePermit) {
                                        a.next = 9;
                                        break
                                    }
                                    return a.abrupt("return", t.applyResidencePermitSideEffects(e));
                                case 9:
                                    if (e.code !== qn.passportDateOfIssue) {
                                        a.next = 11;
                                        break
                                    }
                                    return a.abrupt("return", t.applyPassportDateOfIssueSideEffects(e));
                                case 11:
                                    if (e.code !== qn.passportDateOfExpiry) {
                                        a.next = 13;
                                        break
                                    }
                                    return a.abrupt("return", t.applyPassportExpiryDateSideEffects(e));
                                case 13:
                                    if (e.code !== qn.dateOfArrival) {
                                        a.next = 15;
                                        break
                                    }
                                    return a.abrupt("return", t.applyDateOfArrivalSideEffects(e));
                                case 15:
                                    if (e.code !== qn.dateOfDeparture) {
                                        a.next = 17;
                                        break
                                    }
                                    return a.abrupt("return", t.applyDateOfDepartureSideEffects(e));
                                case 17:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadApplication: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r, s, o, l, c, u, p;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    e.isLoadingApplication = !0,
                                    t.next = 4,
                                    hu.get(e.applicationId);
                                case 4:
                                    a = t.sent,
                                    i = a.data,
                                    e.application = i.data.application,
                                    "D" !== e.application.visaType.categoryGroup && "C" !== e.application.visaType.categoryGroup || (n = e.application.visaType.questions,
                                    r = [qn.hostPhone, qn.hostEmail, qn.hostName, qn.hostSurname, qn.hostFullAddress, qn.hostPersonalNumber, qn.hostExpensesPaidBy, qn.hostExpensesPaidByDetails, qn.hostMeansOfSupport],
                                    n = n.map((function(t) {
                                        var a = t.code;
                                        return r.includes(a) && (t.isRequired = 1,
                                        t.question.al += " *",
                                        t.question.en += " *"),
                                        a === qn.host && e.applyHostSideEffectsAfterServerSync(t),
                                        t
                                    }
                                    )),
                                    e.application.visaType.questions = n),
                                    //! Add some properties which are needed based on question type
                                    s = Object(N["a"])(e.application.visaType.questions);
                                    try {
                                        for (s.s(); !(o = s.n()).done; )
                                            l = o.value,
                                            e.addAuxPropsToQuestion(l);
                                        //! I.E. fill options of selects whose list is defined by previous option
                                    } catch (d) {
                                        s.e(d)
                                    } finally {
                                        s.f()
                                    }
                                    c = Object(N["a"])(e.application.visaType.questions);
                                    try {
                                        for (c.s(); !(u = c.n()).done; )
                                            p = u.value,
                                            e.applyQuestionSideEffects(p);
                                        //! this.$set some error properties
                                    } catch (d) {
                                        c.e(d)
                                    } finally {
                                        c.f()
                                    }
                                    e.application.visaType.documentCategories.forEach(e.addAuxPropsToDocumentCategory),
                                    e.isLoadingApplication = !1,
                                    t.next = 20;
                                    break;
                                case 16:
                                    return t.prev = 16,
                                    t.t0 = t["catch"](0),
                                    t.next = 20,
                                    e.handleErrorResponse(t.t0);
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 16]])
                    }
                    )))()
                }
            }, ar), {}, {
                validateQuestion: function(e) {
                    var t = !0;
                    if (e.isRequired && 0 === e.answers.length && (e.error = "isRequired",
                    t = !1),
                    e.code === qn.dateOfArrival)
                        t = t && this.validateDateOfArrival(e);
                    else if (e.code === qn.dateOfDeparture)
                        t = t && this.validateDateOfDeparture(e);
                    else if (e.code === qn.passportDateOfIssue)
                        t = t && this.validatePassportDateOfIssue(e);
                    else if (e.code === qn.passportDateOfExpiry)
                        t = t && this.validatePassportDateOfExpiry(e);
                    else if (e.code === qn.applicantEmail || e.code === qn.hostEmail)
                        t = t && this.validateEmailQuestion(e);
                    else if (e.code === qn.passportNumber)
                        t = t && this.validatePassportNumberQuestion(e) && "passportNumberIsNotAllowedToApplyForVisa" != e.error;
                    else if (e.code === qn.durationOfStay) {
                        var a = this.application.visaType.category;
                        "C" === a && (t = t && this.validateDurationOfStayTypeCQuestion(e))
                    }
                    return !!t && (e.error = null,
                    e.errorParams = {},
                    e.errorCount = null,
                    !0)
                },
                validateCurrentPageQuestions: function() {
                    var e = this;
                    return this.currentPageQuestions.forEach((function(t) {
                        e.validateQuestion(t)
                    }
                    )),
                    this.currentAnswersAreValid
                },
                onQuestionAnswered: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var i, n, r, s, o;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (!t.applicationIsLocked) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    i = "object" === Object(T["a"])(e.answer) && null !== e.answer,
                                    n = null === e.answer || "" === e.answer,
                                    //! Select already return an object
                                    //! For inputs create object whose locales are the same
                                    r = i ? e.answer : n ? null : {
                                        en: e.answer,
                                        al: e.answer
                                    },
                                    //! You can find the question via for loop, but the references stay the same
                                    //! const question = this.questions.find((question) => question.id === payload.question.id);
                                    s = e.question,
                                    o = {
                                        answer: r,
                                        id: null,
                                        applicationId: t.applicationId,
                                        questionId: e.question.id,
                                        question: {
                                            en: e.question.question.en,
                                            al: e.question.question.al
                                        }
                                    },
                                    s.answers.length ? (o.id = s.answers[0].id,
                                    r || o.id ? !r && o.id ? (o.toDelete = !0,
                                    s.answers.pop(),
                                    s.answers.push(o)) : r && (s.answers.pop(),
                                    s.answers.push(o)) : s.answers.pop()) : s.answers.push(o),
                                    //! When question is dirty it is synchronized to server on blur/close
                                    s.dirty = !0,
                                    t.validateQuestion(s);
                                case 10:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                }
            }, yr), {}, {
                applyQuestionSideEffectsAfterServerSync: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (e.code !== qn.countryOfResidence) {
                                        a.next = 4;
                                        break
                                    }
                                    return a.next = 3,
                                    t.applyCountryOfResidenceSideEffectsAfterServerSync(e);
                                case 3:
                                    return a.abrupt("return", a.sent);
                                case 4:
                                    if (e.code !== qn.consularRepresentation) {
                                        a.next = 8;
                                        break
                                    }
                                    return a.next = 7,
                                    t.applyConsularRepresentationSideEffectsAfterServerSync(e);
                                case 7:
                                    return a.abrupt("return", a.sent);
                                case 8:
                                    if (e.code !== qn.currentNationality) {
                                        a.next = 12;
                                        break
                                    }
                                    return a.next = 11,
                                    t.applyCurrentNationalitySideEffectsAfterServerSync(e);
                                case 11:
                                    return a.abrupt("return", a.sent);
                                case 12:
                                    if (e.code !== qn.dateOfBirth) {
                                        a.next = 14;
                                        break
                                    }
                                    return a.abrupt("return", t.applyDateOfBirthSideEffectsAfterServerSync(e));
                                case 14:
                                    if (e.code !== qn.residencePermit) {
                                        a.next = 16;
                                        break
                                    }
                                    return a.abrupt("return", t.applyResidencePermitSideEffectsAfterServerSync(e));
                                case 16:
                                    if (e.code !== qn.dateOfArrival) {
                                        a.next = 18;
                                        break
                                    }
                                    return a.abrupt("return", t.applyDateOfArrivalSideEffectsAfterServerSync(e));
                                case 18:
                                    if (e.code !== qn.dateOfDeparture) {
                                        a.next = 20;
                                        break
                                    }
                                    return a.abrupt("return", t.applyDateOfDepartureSideEffectsAfterServerSync(e));
                                case 20:
                                    if (e.code !== qn.host) {
                                        a.next = 24;
                                        break
                                    }
                                    if (i = t.application.visaType.categoryGroup,
                                    "D" !== i && "C" !== i) {
                                        a.next = 24;
                                        break
                                    }
                                    return a.abrupt("return", t.applyHostSideEffectsAfterServerSync(e));
                                case 24:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                onQuestionSynched: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var i, n, r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    if (!t.applicationIsLocked) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    if (i = t.questions.find((function(t) {
                                        return t.id === e.question.id
                                    }
                                    )),
                                    i.dirty) {
                                        a.next = 5;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 5:
                                    if (!(i.answers.length && i.answers[0].toDelete && i.answers[0].id) || i.error) {
                                        a.next = 11;
                                        break
                                    }
                                    return a.next = 8,
                                    gu.delete(t.applicationId, i.answers[0].id);
                                case 8:
                                    return i.answers.pop(),
                                    t.applyQuestionSideEffectsAfterServerSync(i),
                                    a.abrupt("return");
                                case 11:
                                    if ("passportNumberIsNotAllowedToApplyForVisa" == i.error && (i.error = ""),
                                    !i.answers.length || i.error) {
                                        a.next = 25;
                                        break
                                    }
                                    return a.prev = 13,
                                    a.next = 16,
                                    gu.createOrUpdate(t.applicationId, i.answers[0]);
                                case 16:
                                    n = a.sent,
                                    r = n.data,
                                    i.answers[0].id = r.data.answer.id,
                                    i.dirty = !1,
                                    a.next = 25;
                                    break;
                                case 22:
                                    a.prev = 22,
                                    a.t0 = a["catch"](13),
                                    i.error = a.t0.response.data.errors;
                                case 25:
                                    return a.next = 27,
                                    t.applyQuestionSideEffectsAfterServerSync(i);
                                case 27:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, null, [[13, 22]])
                    }
                    )))()
                },
                onDocumentUploaded: function(e) {
                    //! Can find by looping through all categories, but references are the same
                    var t = e.documentCategory;
                    t.error && (t.error = null,
                    t.errorParams = null),
                    t.documents.push(e.document)
                },
                onDocumentDeleted: function(e) {
                    //! Can find by looping through all categories, but references are the same
                    var t = e.documentCategory;
                    t.documents.pop()
                },
                onDocumentSizeError: function(e) {
                    //! Can find by looping through all categories, but references are the same
                    var t = e.documentCategory;
                    t.error = "documentInvalidSize",
                    t.errorCount = e.count,
                    t.errorParams = e.error
                },
                onDocumentDimensionError: function(e) {
                    if (5 === e.documentCategory.id) {
                        var t = e.documentCategory;
                        t.error = "documentDimensionSize",
                        t.errorCount = e.count,
                        t.errorParams = e.error
                    }
                },
                onDocumentTypeError: function(e) {
                    //! Can find by looping through all categories, but references are the same
                    var t = e.documentCategory;
                    t.error = "documentInvalidType",
                    t.errorCount = e.count,
                    t.errorParams = e.error
                },
                validateDocument: function(e) {
                    return e.isRequired && !e.documents.length ? (e.error = "isRequired",
                    e.errorCount = 1,
                    e.errorParams = {},
                    !1) : e.code === nr.under18parentalApproval && this.under18DocumentIsRequired && !e.documents.length ? (e.error = "isRequiredUnder18",
                    e.errorCount = 1,
                    e.errorParams = {},
                    !1) : !(e.code === nr.residencePermitOver12Months && this.residencePermitOver12MonthsIsRequired && !e.documents.length) || (e.error = "isRequired",
                    e.errorCount = 1,
                    e.errorParams = {},
                    !1)
                },
                validateDocuments: function() {
                    var e, t = !0, a = Object(N["a"])(this.documentCategories);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var i = e.value
                              , n = this.validateDocument(i);
                            t = t && n
                        }
                    } catch (r) {
                        a.e(r)
                    } finally {
                        a.f()
                    }
                    return t
                },
                goToPage: function(e) {
                    this.pagesOnlyGoBackward && e > this.page || (this.applicationIsLocked || (this.validateCurrentPageQuestions(),
                    this.pagesOnlyGoBackward || this.currentAnswersAreValid)) && (this.page = e)
                },
                goToNextPage: function() {
                    var e = this;
                    this.isLastPage || (this.applicationIsLocked || (this.validateCurrentPageQuestions(),
                    this.currentAnswersAreValid) ? (this.page += 1,
                    this.scrollToResponsive("#questions")) : this.$nextTick((function() {
                        e.$scrollTo("label.has-error")
                    }
                    )))
                },
                goToPrevPage: function() {
                    this.isFirstPage || (this.page -= 1,
                    this.scrollToResponsive("#questions"))
                },
                getFinalizeErrorMessage: function(e) {
                    var t, a, i, n, r = null === (t = e.response) || void 0 === t || null === (a = t.data) || void 0 === a || null === (i = a.errors) || void 0 === i ? void 0 : i.limitType;
                    if ("c_visa_daily_national" === r || "c_visa_daily_consulate" === r)
                        return "".concat(this.$options.tPfx, ".").concat(r);
                    var s, o = null === (n = e.response) || void 0 === n ? void 0 : n.status;
                    return 422 === o ? !0 === (null === (s = e.response.data.errors) || void 0 === s ? void 0 : s.blockedApplicantPassportNumber) ? "".concat(this.$options.tPfx, ".blockedApplicantPassportNumber") : "".concat(this.$options.tPfx, ".validationFailed") : "".concat(this.$options.tPfx, ".somethingWentWrongWithEmailAddress")
                },
                finalizeApplication: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.applicationIsLocked) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (e.validateDocuments()) {
                                        t.next = 5;
                                        break
                                    }
                                    return e.$nextTick((function() {
                                        e.$scrollTo("label.has-error")
                                    }
                                    )),
                                    t.abrupt("return");
                                case 5:
                                    if (!e.isFinalizingApplication) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    return e.isFinalizingApplication = !0,
                                    t.prev = 8,
                                    t.next = 11,
                                    hu.finalize(e.applicationId);
                                case 11:
                                    return t.next = 13,
                                    e.$router.push({
                                        name: "Applications"
                                    });
                                case 13:
                                    t.next = 20;
                                    break;
                                case 15:
                                    return t.prev = 15,
                                    t.t0 = t["catch"](8),
                                    a = e.getFinalizeErrorMessage(t.t0),
                                    t.next = 20,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-secondary-500 bg-secondary-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-secondary-500",
                                        text: a,
                                        textClass: "avoid-warp"
                                    });
                                case 20:
                                    return t.prev = 20,
                                    e.isFinalizingApplication = !1,
                                    t.finish(20);
                                case 23:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[8, 15, 20, 23]])
                    }
                    )))()
                },
                showIrregularitiesComment: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.application.status.code === un.consularNeedChanges) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-secondary-500 bg-secondary-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-secondary-500",
                                        text: e.application.status.comment,
                                        textClass: "avoid-warp"
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.loadApplication();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , Ys = Xs
          , Js = Object(Q["a"])(Ys, Nn, Rn, !1, null, null, null)
          , Zs = Js.exports
          , eo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", [a("tapered-section", {
                staticClass: "flex flex-wrap p-12"
            }, [a("header", {
                staticClass: "mb-12 w-full"
            }, [a("h1", {
                staticClass: "text-center text-lg md:text-5xl"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".somethingWentWrong")) + " ")]), a("h2", {
                staticClass: "text-center text-base md:text-2xl text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".pleaseTryAgainLater")) + " ")])]), a("div", {
                staticClass: "mb-12 flex w-full"
            }, [a("div", {
                staticClass: "max-w-3xl mx-auto flex-1"
            }, [a("server-error-svg")], 1)])])], 1)
        }
          , to = []
          , ao = a("6159")
          , io = a.n(ao)
          , no = "view.somethingWentWrong"
          , ro = {
            pfx: no,
            t: {
                en: {
                    somethingWentWrong: "Something went wrong!",
                    pleaseTryAgainLater: "Please try again later!"
                },
                al: {
                    somethingWentWrong: "Diçka shkoi keq!",
                    pleaseTryAgainLater: "Provoni sërish më vonë!"
                }
            }
        }
          , so = {
            tPfx: no,
            components: {
                ServerErrorSvg: io.a
            }
        }
          , oo = so
          , lo = Object(Q["a"])(oo, eo, to, !1, null, null, null)
          , co = lo.exports
          , uo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", [a("tapered-section", {
                staticClass: "flex flex-wrap p-12"
            }, [a("header", {
                staticClass: "mb-12 w-full"
            }, [a("h1", {
                staticClass: "text-center text-lg md:text-5xl"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".notFound")) + " ")]), a("h2", {
                staticClass: "text-center text-base md:text-2xl text-secondary-500"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".doesNotExist")) + " ")])]), a("div", {
                staticClass: "mb-12 flex w-full"
            }, [a("div", {
                staticClass: "max-w-3xl mx-auto flex-1"
            }, [a("not-found-error-svg")], 1)])])], 1)
        }
          , po = []
          , mo = a("4da0")
          , fo = a.n(mo)
          , ho = "view.notFound"
          , go = {
            pfx: ho,
            t: {
                en: {
                    notFound: "Not found",
                    doesNotExist: "The page you requested doesn't seem to exist..."
                },
                al: {
                    notFound: "Nuk u gjet",
                    doesNotExist: "Faqja që po kërkoni nuk ekziston..."
                }
            }
        }
          , vo = {
            tPfx: ho,
            components: {
                NotFoundErrorSvg: fo.a
            }
        }
          , yo = vo
          , bo = Object(Q["a"])(yo, uo, po, !1, null, null, null)
          , xo = bo.exports
          , wo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4 py-12"
            }, [e.isLoadingApplications ? a("loader", {
                attrs: {
                    loading: e.isLoadingApplications,
                    size: "1.5rem",
                    margin: "4px"
                }
            }) : e._e(), e.isLoadingApplications || e.applications.length ? !e.isLoadingApplications && e.applications.length ? a("article", {
                staticClass: "border border-gray-400 rounded-md p-2 sm:p-4 md:p-8 bg-white"
            }, [a("t-table", {
                attrs: {
                    headers: [{
                        text: e.$t(e.$options.tPfx + ".trackingNumber")
                    }, {
                        text: e.$t(e.$options.tPfx + ".visaType")
                    }, {
                        text: e.$t(e.$options.tPfx + ".status")
                    }, {
                        text: e.$t(e.$options.tPfx + ".actions"),
                        className: "text-center"
                    }],
                    data: e.applications,
                    responsive: !0,
                    "responsive-breakpoint": 768
                },
                scopedSlots: e._u([{
                    key: "tbody",
                    fn: function(t) {
                        var i = t.tbodyClass
                          , n = t.trClass
                          , r = t.tdClass
                          , s = t.renderResponsive
                          , o = t.data;
                        return [s ? [e._l(o, (function(t) {
                            return a("tbody", {
                                key: t.id,
                                class: i,
                                attrs: {
                                    id: "application-" + t.trackingNumber
                                }
                            }, [a("tr", {
                                class: n
                            }, [a("th", {
                                staticClass: "text-sm font-semibold text-gray-600 uppercase"
                            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".trackingNumber")) + " ")]), a("td", {
                                class: [r, "relative"]
                            }, [a("router-link", {
                                staticClass: "text-secondary-500 hover:underline",
                                attrs: {
                                    to: {
                                        name: "Questionary",
                                        params: {
                                            applicationId: t.id
                                        }
                                    }
                                }
                            }, [e._v(" " + e._s(t.trackingNumber) + " ")])], 1), a("td", {
                                staticClass: "p-2",
                                attrs: {
                                    rowspan: "3",
                                    colspan: "2"
                                }
                            }, [a("div", {
                                staticClass: "flex flex-col"
                            }, [a("span", {
                                staticClass: "mb-2 text-sm font-semibold text-gray-600 uppercase"
                            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".actions")) + " ")]), a("application-actions", {
                                staticClass: "mx-auto",
                                attrs: {
                                    application: t
                                }
                            })], 1)])]), a("tr", {
                                class: n
                            }, [a("th", {
                                staticClass: "text-sm font-semibold text-gray-600 uppercase"
                            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".visaType")) + " ")]), a("td", {
                                class: [r, "td-overflow"]
                            }, [e._v(" " + e._s(t.visaType.title[e.$i18n.locale]) + " ")])]), a("tr", {
                                class: n
                            }, [a("th", {
                                staticClass: "p-2 text-sm font-semibold text-gray-600 uppercase"
                            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".status")) + " ")]), a("td", {
                                staticClass: "px-3 py-4"
                            }, [a("span", {
                                staticClass: "rounded-full py-2 px-4",
                                class: e.statusToTailwindClasses(t.status.code, t.status.name[e.$i18n.locale])
                            }, [e._v(" " + e._s(t.status.name[e.$i18n.locale].replace("/", " / ")) + " ")])])])])
                        }
                        )), a("tfoot", {
                            staticClass: "h-4"
                        })] : e._e()]
                    }
                }, {
                    key: "row",
                    fn: function(t) {
                        var i = t.trClass
                          , n = t.tdClass
                          , r = t.row;
                        return [a("tr", {
                            class: i,
                            attrs: {
                                id: "application-" + r.trackingNumber
                            }
                        }, [a("td", {
                            class: n
                        }, [a("router-link", {
                            staticClass: "text-secondary-500 hover:underline",
                            attrs: {
                                to: {
                                    name: "Questionary",
                                    params: {
                                        applicationId: r.id
                                    }
                                }
                            }
                        }, [e._v(" " + e._s(r.trackingNumber) + " ")])], 1), a("td", {
                            class: n
                        }, [e._v(" " + e._s(r.visaType.title[e.$i18n.locale]) + " ")]), a("td", {
                            class: n
                        }, [a("span", {
                            staticClass: "rounded-full whitespace-no-wrap",
                            class: e.statusToTailwindClasses(r.status.code, r.status.name[e.$i18n.locale])
                        }, [e._v(" " + e._s(r.status.name[e.$i18n.locale].replace("/", " / ")) + " ")])]), a("td", {
                            staticClass: "p-2"
                        }, [a("application-actions", {
                            attrs: {
                                application: r
                            }
                        })], 1)])]
                    }
                }])
            })], 1) : e._e() : a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 bg-white"
            }, [a("div", [e._v(e._s(e.$t(e.$options.tPfx + ".noApplications")))])])], 1)], 1)
        }
          , ko = []
          , Co = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "flex flex-col md:flex-row justify-center"
            }, [e.canDownloadGeneratedVisa ? a("button", {
                staticClass: "button button-compact button-green px-3",
                attrs: {
                    title: e.$t(e.$options.tPfx + ".downloadVisa")
                },
                on: {
                    click: e.downloadGeneratedVisa
                }
            }, [a("font-awesome-icon", {
                staticClass: "text-white",
                attrs: {
                    icon: "file-download"
                }
            })], 1) : e._e(), e.canCancel ? a("button", {
                staticClass: "button button-compact button-secondary px-3",
                attrs: {
                    title: e.$t(e.$options.tPfx + ".cancelApplication")
                },
                on: {
                    click: e.cancelApplication
                }
            }, [a("font-awesome-icon", {
                staticClass: "text-white",
                attrs: {
                    icon: "trash"
                }
            })], 1) : e._e(), e.needsPayment ? a("router-link", {
                attrs: {
                    to: {
                        name: "Payment",
                        params: {
                            applicationId: e.application.id
                        }
                    }
                }
            }, [a("button", {
                staticClass: "button button-compact button-secondary px-3",
                attrs: {
                    title: e.$t(e.$options.tPfx + ".pay")
                }
            }, [a("font-awesome-icon", {
                staticClass: "text-white",
                attrs: {
                    icon: "euro-sign"
                }
            })], 1)]) : e._e(), e.canAppeal ? a("router-link", {
                attrs: {
                    to: {
                        name: "Appeal",
                        params: {
                            applicationId: e.application.id
                        }
                    }
                }
            }, [a("button", {
                staticClass: "button button-compact button-secondary px-3",
                attrs: {
                    title: e.$t(e.$options.tPfx + ".appeal")
                }
            }, [a("font-awesome-icon", {
                staticClass: "text-white",
                attrs: {
                    icon: "gavel"
                }
            })], 1)]) : e._e(), a("router-link", {
                staticClass: "mt-2 md:ml-2 md:mt-0",
                attrs: {
                    target: e.hasActionsOtherThanViewOrEdit ? "_blank" : "",
                    to: {
                        name: "Questionary",
                        params: {
                            applicationId: e.application.id
                        }
                    }
                }
            }, [a("button", {
                staticClass: "button button-compact",
                class: {
                    "button-info": !e.canBeEdited,
                    "button-yellow": e.canBeEdited && e.isDraft,
                    "button-secondary": e.canBeEdited && e.hasIrregularities
                },
                attrs: {
                    title: e.$t(e.$options.tPfx + "." + (e.canBeEdited ? "edit" : "view"))
                }
            }, [a("font-awesome-icon", {
                staticClass: "text-white",
                attrs: {
                    icon: e.canBeEdited ? "edit" : "eye"
                }
            })], 1)])], 1)
        }
          , Po = []
          , $o = (a("466d"),
        a("2b3d"),
        function(e) {
            var t = ks.a.extensions[e["content-type"]][0]
              , a = e["content-disposition"]
              , i = "file.".concat(t);
            if (a) {
                var n = a.match(/filename="(.+)"/);
                2 === n.length && (i = n[1])
            }
            return "".concat(i)
        }
        )
          , _o = function(e, t) {
            var a = window.URL.createObjectURL(new Blob([e]))
              , i = document.createElement("a");
            i.href = a,
            i.setAttribute("download", t),
            i.click(),
            window.URL.revokeObjectURL(a)
        }
          , jo = _o
          , Ao = "view.applications.applicationActions"
          , Oo = {
            pfx: Ao,
            t: {
                en: {
                    view: "View application",
                    edit: "Edit application",
                    pay: "Make payment",
                    downloadVisa: "Download e-visa",
                    appeal: "Appeal",
                    cancelApplication: "Cancel Application",
                    yes: "Yes",
                    no: "No",
                    cancelApplicationQuestion: "Do you want to cancel this application?",
                    applicationCanceledWithSuccess: "Application cancelled successfully!",
                    errorMessage: "Something went wrong, please try again."
                },
                al: {
                    view: "Shiko applikimin",
                    edit: "Modifiko aplikimin",
                    pay: "Bëj pagesen",
                    downloadVisa: "Shkarko e-visa",
                    appeal: "Apelo",
                    yes: "Po",
                    no: "Jo",
                    cancelApplication: "Anulo Aplikimin",
                    cancelApplicationQuestion: "Doni ta anuloni këtë aplikim?",
                    applicationCanceledWithSuccess: "Aplikimi u anulua me sukses!",
                    errorMessage: "Një gabim i papritur ndodhi, ju lutem provoni përseri."
                }
            }
        }
          , So = {
            tPfx: Ao,
            props: {
                application: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                isDraft: function() {
                    return this.application.status.code === un.draft
                },
                hasIrregularities: function() {
                    return this.application.status.code === un.consularNeedChanges || this.application.status.code === un.chiefPoliceNeedChanges
                },
                canBeEdited: function() {
                    return this.isDraft || this.hasIrregularities
                },
                needsPayment: function() {
                    return this.application.status.code === un.waitingForPayment || this.application.needsFerPayment || this.application.status.code === un.chiefPolicewaitingForPayment
                },
                canDownloadGeneratedVisa: function() {
                    return this.application.status.code === un.printedGenerated
                },
                hasActionsOtherThanViewOrEdit: function() {
                    return this.needsPayment || this.canDownloadGeneratedVisa
                },
                canAppeal: function() {
                    return this.application.status.code === un.rejected && "VAB" !== this.application.visaType.category && this.application.appealIsNotBlocked
                },
                canCancel: function() {
                    return this.application.status.code === un.open || this.application.status.code === un.consularInProgress
                }
            },
            methods: {
                cancelApplication: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.$swal({
                                        text: e.$t("".concat(e.$options.tPfx, ".cancelApplicationQuestion")),
                                        icon: "warning",
                                        showCancelButton: !0,
                                        confirmButtonText: e.$t("".concat(e.$options.tPfx, ".yes")),
                                        cancelButtonText: e.$t("".concat(e.$options.tPfx, ".no")),
                                        reverseButtons: !0
                                    });
                                case 3:
                                    if (a = t.sent,
                                    !a.isConfirmed) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 7,
                                    hu.cancel(e.application.id);
                                case 7:
                                    return t.next = 9,
                                    e.$swal(e.$t("".concat(e.$options.tPfx, ".applicationCanceledWithSuccess")));
                                case 9:
                                    e.$router.go(0);
                                case 10:
                                    t.next = 16;
                                    break;
                                case 12:
                                    t.prev = 12,
                                    t.t0 = t["catch"](0),
                                    console.log(t.t0),
                                    e.$swal("Error", e.$t("".concat(e.$options.tPfx, ".errorMessage")), "error");
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 12]])
                    }
                    )))()
                },
                downloadGeneratedVisa: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.canDownloadGeneratedVisa) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4,
                                    vu.getTemporarySignedUrl(e.application.visa.uuid);
                                case 4:
                                    return a = t.sent,
                                    i = a.data,
                                    n = i.data.temporarySignedUrl,
                                    n = n.replace("cms.", ""),
                                    n = n.replace("http:", "https:"),
                                    t.next = 11,
                                    p.get(n, {
                                        responseType: "blob"
                                    });
                                case 11:
                                    r = t.sent,
                                    jo(r.data, $o(r.headers));
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        }
          , Io = So
          , No = Object(Q["a"])(Io, Co, Po, !1, null, null, null)
          , Ro = No.exports
          , Do = function(e, t) {
            var a = t.length > 16
              , i = a ? "badge-compressed " : "badge-base ";
            switch (e) {
            case un.draft:
                return i + "badge-yellow";
            case un.open:
                return i + "badge-blue";
            case un.consularInProgress:
                return i + "badge-blue";
            case un.chiefPoliceInProgress:
                return i + "badge-blue";
            case un.consularNeedChanges:
                return i + "badge-secondary";
            case un.chiefPoliceNeedChanges:
                return i + "badge-secondary";
            case un.waitingForPayment:
                return i + "badge-secondary";
            case un.chiefPolicewaitingForPayment:
                return i + "badge-secondary";
            case un.waitingFerPayment:
                return i + "badge-secondary";
            case un.verifyPayment:
                return i + "badge-yellow";
            case un.unpaid:
                return i + "badge-secondary";
            case un.paid:
                return i + "badge-indigo";
            case un.chiefPolicePaid:
                return i + "badge-indigo";
            case un.ferPaid:
                return i + "badge-indigo";
            case un.rejected:
                return i + "badge-secondary";
            case un.rejectedAKPA:
                return i + "badge-secondary";
            case un.dckInProgress:
                return i + "badge-blue";
            case un.verificationInProgress:
                return i + "badge-blue";
            case un.shishInProgress:
                return i + "badge-blue";
            case un.pkInInProgress:
                return i + "badge-blue";
            case un.shishApproved:
                return i + "badge-blue";
            case un.pkApproved:
                return i + "badge-blue";
            case un.shishRejected:
                return i + "badge-blue";
            case un.pkRejected:
                return i + "badge-blue";
            case un.verifiedByShishPk:
                return i + "badge-blue";
            case un.verifiedByMinistry:
                return i + "badge-blue";
            case un.approved:
                return i + "badge-green";
            case un.printedGenerated:
                return i + "badge-green";
            case un.notShowedUp:
                return i + "badge-secondary";
            case un.appealed:
                return i + "badge-yellow";
            case un.appeal_rejected:
                return i + "badge-secondary";
            case un.reapplication:
                return i + "badge-blue";
            case un.canceled:
                return i + "badge-secondary";
            case un.canceledByApplicant:
                return i + "badge-secondary"
            }
        }
          , To = Do
          , Eo = "view.applications"
          , qo = {
            pfx: Eo,
            t: {
                en: {
                    trackingNumber: "Tracking Number",
                    visaType: "Visa Type",
                    status: "Status",
                    actions: "Actions",
                    noApplications: "There are no applications yet"
                },
                al: {
                    trackingNumber: "Numri i gjurmimit",
                    visaType: "Lloji i Vizës",
                    status: "Statusi",
                    actions: "Veprime",
                    noApplications: "Ju nuk keni bere asnje aplikim"
                }
            }
        }
          , zo = {
            tPfx: Eo,
            mixins: [Pt],
            components: {
                ApplicationActions: Ro
            },
            props: {
                scrollToTrackingNumber: [Number, String]
            },
            data: function() {
                return {
                    isLoadingApplications: !1,
                    applications: []
                }
            },
            methods: {
                loadApplications: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.isLoadingApplications = !0,
                                    t.prev = 1,
                                    t.next = 4,
                                    hu.all();
                                case 4:
                                    a = t.sent,
                                    i = a.data,
                                    e.applications = i.data.applications,
                                    e.scrollToTrackingNumber && e.$nextTick((function() {
                                        e.$scrollTo("#application-".concat(e.scrollToTrackingNumber)),
                                        e.$wiggle("#application-".concat(e.scrollToTrackingNumber), 600)
                                    }
                                    )),
                                    t.next = 14;
                                    break;
                                case 10:
                                    return t.prev = 10,
                                    t.t0 = t["catch"](1),
                                    t.next = 14,
                                    e.$router.replace({
                                        name: "SomethingWentWrong"
                                    });
                                case 14:
                                    return t.prev = 14,
                                    e.isLoadingApplications = !1,
                                    t.finish(14);
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 10, 14, 17]])
                    }
                    )))()
                },
                changeApplicationStatus: function(e, t) {
                    var a = this.applications.find((function(t) {
                        return t.id == e
                    }
                    ));
                    a && (a.status = t)
                },
                listenToProcessedPaymentEvents: function() {
                    var e = this
                      , t = this.channels[this.user.email];
                    t && t.bind("paymentProcessed", (function(t) {
                        var a = t.applicationId
                          , i = t.status;
                        e.changeApplicationStatus(a, i)
                    }
                    ))
                },
                statusToTailwindClasses: function(e, t) {
                    return To(e, t)
                }
            },
            mounted: function() {
                this.loadApplications(),
                this.listenToProcessedPaymentEvents()
            }
        }
          , Bo = zo
          , Vo = Object(Q["a"])(Bo, wo, ko, !1, null, null, null)
          , Fo = Vo.exports
          , Mo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4 py-32"
            }, [a("article", {
                staticClass: "border border-gray-400 rounded-md p-2 sm:p-4 md:p-8 bg-white"
            }, [a("form", {
                staticClass: "mt-8 space-y-6",
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                        e.submit(t)
                    }
                }
            }, [a("section", [a("header", {
                staticClass: "mb-4"
            }, [a("h3", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".personalInformation")) + " ")])]), a("div", {
                staticClass: "flex flex-wrap"
            }, [a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/3 lg:pr-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".firstName"),
                    placeholder: e.$t(e.$options.tPfx + ".firstName"),
                    error: e.errors.firstName && e.errors.firstName.length ? e.errors.firstName[0] : null,
                    id: "first-name",
                    name: "first-name",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("firstName")
                    }
                },
                model: {
                    value: e.form.firstName,
                    callback: function(t) {
                        e.$set(e.form, "firstName", t)
                    },
                    expression: "form.firstName"
                }
            }), a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/3 lg:px-1",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".middleName"),
                    placeholder: e.$t(e.$options.tPfx + ".middleName"),
                    error: e.errors.middleName && e.errors.middleName.length ? e.errors.middleName[0] : null,
                    id: "middle-name",
                    name: "middle-name"
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("middleName")
                    }
                },
                model: {
                    value: e.form.middleName,
                    callback: function(t) {
                        e.$set(e.form, "middleName", t)
                    },
                    expression: "form.middleName"
                }
            }), a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/3 lg:pl-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".lastName"),
                    placeholder: e.$t(e.$options.tPfx + ".lastName"),
                    error: e.errors.lastName && e.errors.lastName.length ? e.errors.lastName[0] : null,
                    id: "last-name",
                    name: "last-name",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("lastName")
                    }
                },
                model: {
                    value: e.form.lastName,
                    callback: function(t) {
                        e.$set(e.form, "lastName", t)
                    },
                    expression: "form.lastName"
                }
            })], 1), a("div", [a("select-input", {
                attrs: {
                    id: "nationality",
                    name: "nationality",
                    type: "text",
                    loading: e.isLoadingNationalityOptions,
                    options: e.nationalityOptions,
                    "get-option-label": function(t) {
                        return t.name[e.$i18n.locale]
                    },
                    error: e.errors.nationalityId && e.errors.nationalityId.length ? e.errors.nationalityId[0] : null,
                    label: e.$t(e.$options.tPfx + ".nationality"),
                    placeholder: e.$t(e.$options.tPfx + ".nationality"),
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("nationalityId")
                    },
                    search: e.loadNationalities
                },
                scopedSlots: e._u([{
                    key: "no-options",
                    fn: function(t) {
                        var i = t.search;
                        return [a("i18n", {
                            attrs: {
                                path: e.$options.tPfx + ".noMatchingNationalities"
                            },
                            scopedSlots: e._u([{
                                key: "search",
                                fn: function() {
                                    return [a("em", [e._v('"' + e._s(i) + '"')])]
                                },
                                proxy: !0
                            }], null, !0)
                        })]
                    }
                }]),
                model: {
                    value: e.form.nationality,
                    callback: function(t) {
                        e.$set(e.form, "nationality", t)
                    },
                    expression: "form.nationality"
                }
            })], 1)]), a("section", [a("header", {
                staticClass: "mb-4"
            }, [a("h3", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".loginInformation")) + " ")])]), a("text-input", {
                staticClass: "mb-4 w-full",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".email"),
                    placeholder: e.$t(e.$options.tPfx + ".email"),
                    error: e.errors.email && e.errors.email.length ? e.errors.email[0] : null,
                    id: "email",
                    name: "email",
                    type: "email",
                    required: ""
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("email")
                    }
                },
                model: {
                    value: e.form.email,
                    callback: function(t) {
                        e.$set(e.form, "email", t)
                    },
                    expression: "form.email"
                }
            }), a("div", {
                staticClass: "flex flex-wrap"
            }, [a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/2 lg:pr-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".password"),
                    placeholder: e.$t(e.$options.tPfx + ".password"),
                    error: e.errors.password && e.errors.password.length ? e.errors.password[0] : null,
                    id: "password",
                    name: "password",
                    type: "password"
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("password")
                    }
                },
                model: {
                    value: e.form.password,
                    callback: function(t) {
                        e.$set(e.form, "password", t)
                    },
                    expression: "form.password"
                }
            }), a("text-input", {
                staticClass: "mb-4 w-full lg:w-1/2 lg:pl-2",
                attrs: {
                    label: e.$t(e.$options.tPfx + ".passwordConfirmation"),
                    placeholder: e.$t(e.$options.tPfx + ".passwordConfirmation"),
                    error: e.errors.passwordConfirmation && e.errors.passwordConfirmation.length ? e.errors.passwordConfirmation[0] : null,
                    id: "password-confirmation",
                    name: "password-confirmation",
                    type: "password"
                },
                on: {
                    input: function(t) {
                        return e.clearErrors("passwordConfirmation")
                    }
                },
                model: {
                    value: e.form.passwordConfirmation,
                    callback: function(t) {
                        e.$set(e.form, "passwordConfirmation", t)
                    },
                    expression: "form.passwordConfirmation"
                }
            })], 1)], 1), a("section", [a("div", {
                staticClass: "mt-6"
            }, [a("button", {
                staticClass: "w-full button button-secondary"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".save")) + " ")])])])])])])], 1)
        }
          , Lo = []
          , Uo = "view.profile"
          , Ho = {
            pfx: Uo,
            t: {
                en: {
                    personalInformation: "Personal Information",
                    firstName: "First name",
                    middleName: "Middle name",
                    lastName: "Last name",
                    nationality: "Nationality",
                    noMatchingNationalities: "No matches for {search}",
                    loginInformation: "Login Information",
                    email: "Email",
                    password: "Password",
                    passwordConfirmation: "Repeat password",
                    allowSubmit: "I allow the website to collect and store the data I submit through this form.",
                    save: "Save",
                    updateSuccessLine1: "Profile was updated successfully."
                },
                al: {
                    personalInformation: "Informacioni Personal",
                    firstName: "Emri",
                    middleName: "Emri i mesit",
                    lastName: "Mbiemri",
                    nationality: "Nacionaliteti",
                    noMatchingNationalities: "Asnjë rezultat për {search}",
                    loginInformation: "Informacion i kyçjes",
                    email: "Email",
                    password: "Fjalëkalimi",
                    passwordConfirmation: "Përsërit fjalëkalimin",
                    allowSubmit: "Unë lejoj që faqja web të mbledhë dhe të ruajë informacionin që unë dërgoj në këtë formular.",
                    save: "Ruaj",
                    updateSuccessLine1: "Profili u përditësua."
                }
            }
        }
          , Wo = {
            tPfx: Uo,
            mixins: [Pt],
            data: function() {
                return {
                    form: {
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        email: "",
                        nationality: null,
                        password: "",
                        passwordConfirmation: ""
                    },
                    isLoadingNationalityOptions: !1,
                    nationalityOptions: [],
                    errors: {}
                }
            },
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchShowFlash: P.show
            })), {}, {
                loadNationalities: function(e) {
                    this.isLoadingNationalityOptions = !0,
                    this.debouncedLoadNationalities(e)
                },
                debouncedLoadNationalities: Object(aa["debounce"])(function() {
                    var e = Object(h["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    mu.list(t);
                                case 2:
                                    a = e.sent,
                                    i = a.data,
                                    this.isLoadingNationalityOptions = !1,
                                    this.nationalityOptions = i.data.countries;
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), 300),
                clearErrors: function(e) {
                    this.errors[e] = void 0
                },
                getData: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    du.auth();
                                case 2:
                                    a = t.sent,
                                    i = a.data,
                                    n = i.data.user,
                                    e.form = {
                                        firstName: n.firstName,
                                        middleName: n.middleName,
                                        lastName: n.lastName,
                                        email: n.email,
                                        nationality: n.nationality,
                                        password: "",
                                        passwordConfirmation: ""
                                    };
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                submit: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return a = e.form,
                                    i = a.nationality,
                                    n = Object(ta["a"])(a, ["nationality"]),
                                    n.nationalityId = i ? i.id : null,
                                    t.prev = 2,
                                    t.next = 5,
                                    du.editProfile(n);
                                case 5:
                                    return t.next = 7,
                                    e.getData();
                                case 7:
                                    return t.next = 9,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-green-500 bg-green-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-green-500",
                                        text: ["".concat(e.$options.tPfx, ".updateSuccessLine1")],
                                        textClass: ["avoid-warp", "avoid-wrap"]
                                    });
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11,
                                    t.t0 = t["catch"](2),
                                    422 === t.t0.response.status && (e.errors = t.t0.response.data.errors);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 11]])
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.getData();
                            case 2:
                                e.loadNationalities();
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , Go = Wo
          , Qo = Object(Q["a"])(Go, Mo, Lo, !1, null, null, null)
          , Ko = Qo.exports
          , Xo = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("loader", {
                attrs: {
                    loading: !0,
                    size: "1.5rem",
                    margin: "4px"
                }
            })], 1)
        }
          , Yo = []
          , Jo = "view.createApplicationRedirecter"
          , Zo = {
            pfx: Jo,
            t: {
                en: {
                    applicationsInDraft: 'You have an unfinalized "{visaType}" application. Do you wish to continue?'
                },
                al: {
                    applicationsInDraft: 'Ju keni një aplikacion për "{visaType}" të pafinalizuar. Dëshironi ta vazhdoni?'
                }
            }
        }
          , el = {
            tPfx: Jo,
            props: {
                visaTypeId: {
                    type: [String, Number]
                }
            },
            computed: Object(o["a"])({}, Object(f["c"])(g, ["isLoggedIn"])),
            methods: {
                checkForDraftsApplications: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r, s, o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    hu.all(un.draft);
                                case 2:
                                    if (a = t.sent,
                                    i = a.data,
                                    n = i.data.applications,
                                    !n.length) {
                                        t.next = 13;
                                        break
                                    }
                                    return r = n[0],
                                    t.next = 9,
                                    e.$swal({
                                        title: e.$t("".concat(e.$options.tPfx, ".applicationsInDraft"), {
                                            visaType: r.visaType.title[e.$i18n.locale]
                                        }),
                                        showCancelButton: !0
                                    });
                                case 9:
                                    return s = t.sent,
                                    o = s.isConfirmed,
                                    o && e.$router.push({
                                        name: "Questionary",
                                        params: {
                                            applicationId: r.id
                                        }
                                    }),
                                    t.abrupt("return", o);
                                case 13:
                                    return t.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                resolveVisaTypeId: function(e) {
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a = 1 === Number(e),
                                    a) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", e);
                                case 3:
                                    return t.next = 5,
                                    fu.list();
                                case 5:
                                    return i = t.sent,
                                    n = i.data,
                                    r = n.data.visaTypes.find((function(e) {
                                        return e.isVisa24h
                                    }
                                    )),
                                    t.abrupt("return", r ? r.id : e);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                createDraftApplication: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.resolveVisaTypeId(e.visaTypeId);
                                case 3:
                                    return a = t.sent,
                                    t.next = 6,
                                    hu.create({
                                        visaTypeId: a
                                    });
                                case 6:
                                    return i = t.sent,
                                    n = i.data,
                                    r = n.data.application.id,
                                    t.next = 11,
                                    e.$router.replace({
                                        name: "Questionary",
                                        params: {
                                            applicationId: r
                                        }
                                    });
                                case 11:
                                    t.next = 19;
                                    break;
                                case 13:
                                    return t.prev = 13,
                                    t.t0 = t["catch"](0),
                                    t.next = 17,
                                    e.$router.replace({
                                        name: "SomethingWentWrong"
                                    });
                                case 17:
                                    return t.next = 19,
                                    e.$scrollTo("#navbar", 300);
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 13]])
                    }
                    )))()
                }
            },
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (e.visaTypeId) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3,
                                e.$router.replace({
                                    name: "Apply",
                                    hash: "#visa-types"
                                });
                            case 3:
                                return t.abrupt("return", t.sent);
                            case 4:
                                if (!e.isLoggedIn) {
                                    t.next = 11;
                                    break
                                }
                                return t.next = 7,
                                e.checkForDraftsApplications();
                            case 7:
                                if (a = t.sent,
                                a) {
                                    t.next = 11;
                                    break
                                }
                                return t.next = 11,
                                e.createDraftApplication();
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , tl = el
          , al = Object(Q["a"])(tl, Xo, Yo, !1, null, null, null)
          , il = al.exports
          , nl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4 pb-4",
                class: {
                    "pt-8": !e.isShowingMessage,
                    "pt-32": e.isShowingMessage
                }
            }, [a("method-select", {
                attrs: {
                    "selected-method": e.selectedMethod
                },
                on: {
                    "method-selected": e.conditionalSelectMethod
                }
            })], 1), a("tapered-section", {
                staticClass: "px-4 pt-4 pb-8"
            }, [a("upload-proof-of-payment", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isProofOfPayment,
                    expression: "isProofOfPayment"
                }],
                attrs: {
                    "application-id": e.applicationId,
                    "payment-is-sucessful": e.disableUpload
                }
            }), a("pay-online", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isPayOnline,
                    expression: "isPayOnline"
                }],
                attrs: {
                    "application-id": e.applicationId
                },
                on: {
                    "payment-success": function(t) {
                        e.disableUpload = !0
                    }
                }
            })], 1)], 1)
        }
          , rl = []
          , sl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "flex flex-row flex-wrap justify-center"
            }, [a("button", {
                staticClass: "outline-none focus:outline-none my-2 md:my-0 md:mx-4 w-full border-4 hover:border-secondary-500 rounded-md p-4 md:w-auto md:flex-1 md:max-w-sm bg-white text-center cursor-pointer",
                class: {
                    "border-solid border-secondary-500": e.isProofOfPayment,
                    "border-dashed": !e.isProofOfPayment
                },
                on: {
                    click: function(t) {
                        return e.$emit("method-selected", "proofOfPayment")
                    }
                }
            }, [a("font-awesome-icon", {
                attrs: {
                    icon: "file-upload"
                }
            }), e._v(" " + e._s(e.$t(this.$options.tPfx + ".proofOfPayment")) + " ")], 1), a("button", {
                staticClass: "outline-none focus:outline-none my-2 md:my-0 md:mx-4 w-full border-4 hover:border-secondary-500 rounded-md p-4 md:w-auto md:flex-1 md:max-w-sm bg-white text-center cursor-pointer",
                class: {
                    "border-solid border-secondary-500": e.isPayOnline,
                    "border-dashed": !e.isPayOnline
                },
                on: {
                    click: function(t) {
                        return e.$emit("method-selected", "payOnline")
                    }
                }
            }, [a("font-awesome-icon", {
                attrs: {
                    icon: ["far", "credit-card"]
                }
            }), e._v(" " + e._s(e.$t(this.$options.tPfx + ".payOnline")) + " "), a("span", {
                staticClass: "text-secondary-500 font-bold"
            }, [e._v(" " + e._s(e.$t(this.$options.tPfx + ".temporaryNotWorking")) + " ")])], 1)])
        }
          , ol = []
          , ll = "view.payment.methodSelect"
          , cl = {
            pfx: ll,
            t: {
                en: {
                    proofOfPayment: "Wire transfer",
                    payOnline: "Pay online",
                    temporaryNotWorking: "(TEMPORARILY NOT WORKING)."
                },
                al: {
                    proofOfPayment: "Paguaj me bankë",
                    payOnline: "Paguaj online",
                    temporaryNotWorking: "(NUK ËSHTË FUNKSIONALE PËRKOHËSISHT)."
                }
            }
        }
          , ul = {
            tPfx: ll,
            model: {
                prop: "selectedMethod",
                event: "method-selected"
            },
            props: {
                selectedMethod: {
                    type: String,
                    requested: !0
                }
            },
            computed: {
                isProofOfPayment: function() {
                    return "proofOfPayment" === this.selectedMethod
                },
                isPayOnline: function() {
                    return "payOnline" === this.selectedMethod
                }
            }
        }
          , pl = ul
          , dl = Object(Q["a"])(pl, sl, ol, !1, null, null, null)
          , ml = dl.exports
          , fl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.user ? a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 items-start bg-white"
            }, [a("application-links", {
                attrs: {
                    "application-id": e.applicationId
                }
            }), a("header", [a("h2", [e._v(e._s(e.$t(e.$options.tPfx + ".instructions")))])]), a("ol", {
                staticClass: "list-inside list-decimal mb-4"
            }, [a("li", [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".redirected"
                },
                scopedSlots: e._u([{
                    key: "proceed",
                    fn: function() {
                        return [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".proceed")))])]
                    },
                    proxy: !0
                }], null, !1, 1084707465)
            })], 1), a("li", [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".onThePaymentSite"
                },
                scopedSlots: e._u([{
                    key: "pay",
                    fn: function() {
                        return [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".pay")))])]
                    },
                    proxy: !0
                }], null, !1, 3554802121)
            })], 1), a("li", [a("i18n", {
                attrs: {
                    path: e.$options.tPfx + ".comeBack"
                },
                scopedSlots: e._u([{
                    key: "return",
                    fn: function() {
                        return [a("strong", [e._v(e._s(e.$t(e.$options.tPfx + ".return")))])]
                    },
                    proxy: !0
                }], null, !1, 2289128137)
            })], 1)]), a("button", {
                staticClass: "button button-secondary w-full md:w-auto capitalize",
                attrs: {
                    disabled: e.buttonIsDisabled
                },
                on: {
                    click: e.handlePayment
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + "." + e.buttonKey)) + " ")])], 1) : e._e()
        }
          , hl = []
          , gl = function(e) {
            var t = document.createElement("a");
            t.href = e,
            t.setAttribute("target", "_blank"),
            t.click(),
            t.remove()
        }
          , vl = gl
          , yl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "mb-4"
            }, [a("router-link", {
                staticClass: "block text-right md:text-left text-secondary-500 hover:underline cursor-pointer",
                attrs: {
                    to: {
                        name: "Applications"
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".backToApplicationsList")) + " ")]), a("router-link", {
                staticClass: "block text-right md:text-left text-secondary-500 hover:underline cursor-pointer",
                attrs: {
                    to: {
                        name: "Questionary",
                        params: {
                            applicationId: e.applicationId
                        }
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".reviewApplication")) + " ")])], 1)
        }
          , bl = []
          , xl = "view.payment.applicationLinks.uploadProofOfPayment"
          , wl = {
            pfx: xl,
            t: {
                en: {
                    backToApplicationsList: "Back to the list of applications",
                    reviewApplication: "Review your application"
                },
                al: {
                    backToApplicationsList: "Kthehuni tek lista e aplikimeve",
                    reviewApplication: "Rishikoni aplikimin tuaj"
                }
            }
        }
          , kl = {
            tPfx: xl,
            props: {
                applicationId: {
                    type: [Number, String],
                    required: !0
                }
            }
        }
          , Cl = kl
          , Pl = Object(Q["a"])(Cl, yl, bl, !1, null, null, null)
          , $l = Pl.exports
          , _l = "view.payment.payOnline"
          , jl = {
            pfx: _l,
            t: {
                en: {
                    instructions: "Instructions",
                    proceed: "proceed",
                    inProcess: "In process...",
                    redirected: "Once you click the {proceed} button, a new site will be opened to the payment system",
                    pay: "perform the payment",
                    onThePaymentSite: "Follow the payment site instructions and {pay}",
                    return: "Return",
                    comeBack: "{return} to e-Visa to check on the status of your application and payment.",
                    success: "Success!",
                    tryAgain: "Try again"
                },
                al: {
                    instructions: "Instruksione",
                    proceed: "vazhdo",
                    inProcess: "Në progress...",
                    redirected: "Pasi të shtypni butonin {proceed}, nje faqe e re do hapet tek sistemi i pagesave",
                    pay: "kryeni pagesën",
                    onThePaymentSite: "Ndiqni udhëzimet e faqes së pagesave dhe {pay}",
                    return: "Kthehuni",
                    comeBack: "{return} tek e-Visa për të shqyrtuar statusin e pagesës dhe të aplikimit tuaj.",
                    success: "Sukses!",
                    tryAgain: "Try again"
                }
            }
        }
          , Al = {
            components: {
                ApplicationLinks: $l
            },
            tPfx: _l,
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            },
            mixins: [Pt],
            props: {
                applicationId: {
                    type: [String, Number],
                    required: !0
                }
            },
            data: function() {
                return {
                    buttonIsDisabled: !1,
                    buttonKey: "proceed"
                }
            },
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss,
                dispatchShowFlash: P.show
            })), {}, {
                handlePayment: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.buttonIsDisabled = !0,
                                    e.buttonKey = "inProcess",
                                    t.next = 4,
                                    hu.getPaymentURL(e.applicationId);
                                case 4:
                                    a = t.sent,
                                    i = a.data,
                                    n = i.data.url,
                                    vl(n);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                listenToProcessedPaymentEvents: function() {
                    var e = this
                      , t = this.channels[this.user.email];
                    t && t.bind("paymentProcessed", function() {
                        var t = Object(h["a"])(regeneratorRuntime.mark((function t(a) {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (e.applicationId != a.applicationId) {
                                            t.next = 10;
                                            break
                                        }
                                        if (!a.isSuccesful) {
                                            t.next = 8;
                                            break
                                        }
                                        return e.buttonKey = "success",
                                        e.$emit("payment-success"),
                                        t.next = 6,
                                        e.dispatchShowFlash({
                                            class: "sm:block md:inline-block border-green-500 bg-green-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                            iconClass: "hover:text-green-500",
                                            text: a.notification[e.$i18n.locale],
                                            textClass: "avoid-warp"
                                        });
                                    case 6:
                                        t.next = 10;
                                        break;
                                    case 8:
                                        e.buttonIsDisabled = !1,
                                        e.buttonKey = "tryAgain";
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }),
            watch: {
                user: function(e) {
                    e && this.listenToProcessedPaymentEvents()
                }
            },
            mounted: function() {
                this.user && this.listenToProcessedPaymentEvents()
            }
        }
          , Ol = Al
          , Sl = Object(Q["a"])(Ol, fl, hl, !1, null, null, null)
          , Il = Sl.exports
          , Nl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.isLoadingPaymentDetail ? a("loader", {
                attrs: {
                    loading: e.isLoadingPaymentDetail,
                    size: "1.5rem",
                    margin: "4px"
                }
            }) : a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 flex flex-wrap items-start bg-white"
            }, [a("div", {
                staticClass: "w-full md:w-1/2 p-4 lg:p-8"
            }, [a("header", {
                staticClass: "mb-4"
            }, [a("h3", {
                staticClass: "text-center"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".waitingForPayment")) + " ")])]), a("table", {
                staticClass: "w-full"
            }, [a("tbody", {
                staticClass: "divide-y-2"
            }, [a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".amount")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.amount))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".accountHolder")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.accountHolder))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".bank")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.bank))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" IBAN ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.accountIBAN))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".accountNumber")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.accountNumber))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".swiftCode")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.swiftCode))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".institutionCode")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.institutionCode))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".economicAccountCode")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.economicAccountCode))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".institutionCode")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.institutionCode))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".economicAccountCode")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.economicAccountCode))])]), a("tr", [a("th", {
                staticClass: "text-left text-sm font-semibold text-gray-600 uppercase"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".referenceNumber")) + " ")]), a("td", {
                staticClass: "text-right"
            }, [e._v(e._s(e.paymentDetails.referenceNumber))])]), a("tr", [a("td", {
                staticClass: "pt-4 text-sm text-secondary-500 italic",
                attrs: {
                    colspan: "2"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".attention")) + " ")])])])])]), a("div", {
                staticClass: "w-full md:w-1/2 pt-16 px-4 pb-4 lg:px-8 lg:pb-8"
            }, [a("application-links", {
                attrs: {
                    "application-id": e.applicationId
                }
            }), a("div", [a("file-input", {
                staticClass: "mb-2",
                attrs: {
                    deletable: "",
                    accept: "application/pdf, image/jpeg, image/png",
                    "file-name": "proofOfPayment",
                    "max-size": 31457280,
                    disabled: e.disabled,
                    label: e.$t(e.$options.tPfx + ".proofOfPayment"),
                    "upload-hint": e.$t(e.$options.tPfx + ".uploadHint"),
                    "upload-url": e.uploadUrl,
                    "delete-url": e.deleteUrl,
                    origin: e.documentOrigin,
                    headers: e.authorizationHeader,
                    "reduce-response": function(e) {
                        return e.data.data.proofOfPayment
                    },
                    error: e.localizedError,
                    value: e.proofOfPayment
                },
                on: {
                    input: e.onDocumentAdded,
                    "upload-error": e.toDo,
                    deleted: e.onDocumentRemoved,
                    "delete-error": e.toDo,
                    "file-size-error": function(t) {
                        e.fileError = "maxSizeError"
                    },
                    "file-type-error": function(t) {
                        e.fileError = "onlyValidFormat"
                    }
                }
            })], 1), a("button", {
                staticClass: "button button-secondary w-full md:w-auto",
                attrs: {
                    disabled: e.disabled
                },
                on: {
                    click: e.finalizePayment
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".finalizePayment")) + " ")])], 1)])], 1)
        }
          , Rl = []
          , Dl = "view.payment.uploadProofOfPayment"
          , Tl = {
            pfx: Dl,
            t: {
                en: {
                    waitingForPayment: "We are waiting for your transfer",
                    amount: "Amount",
                    accountHolder: "Account holder",
                    bank: "Bank",
                    accountNumber: "Account number",
                    swiftCode: "Swift code",
                    referenceNumber: "Reference number",
                    proofOfPayment: "Payment receipt",
                    uploadHint: "Select or drop payment receipt",
                    onlyValidFormat: "Only pdf, jpeg or png format is accepted",
                    maxSizeError: "Max size is 30MB",
                    isRequired: "Payment receipt is required",
                    localizedFileName: "Proof of Payment",
                    finalizePayment: "Finalize payment",
                    institutionCode: "Institution code",
                    economicAccountCode: "Economic account code",
                    attention: "Please include your ID/Passport number and Reference number in the transaction"
                },
                al: {
                    waitingForPayment: "Ne po presim pagesën tuaj",
                    amount: "Shuma",
                    accountHolder: "Mbajtësi i llogarisë",
                    bank: "Banka",
                    accountNumber: "Numri i llogarisë",
                    swiftCode: "Kodi Swift",
                    referenceNumber: "Numri i referencës",
                    proofOfPayment: "Mandati i pagesës",
                    uploadHint: "Zgjidh ose tërhiq mandatin e pagesës",
                    onlyValidFormat: "Pranohet vetëm formati pdf, jpeg ose png",
                    maxSizeError: "Madhësia maksimale është 30MB",
                    isRequired: "Mandati i pagesës është i detyruar",
                    localizedFileName: "Mandati i pagesës",
                    finalizePayment: "Finalizo pagesën",
                    institutionCode: "Kodi i institucionit",
                    economicAccountCode: "Kodi i llogarisë ekonomike",
                    attention: "Ju lutem përfshini numrin tuaj të ID ose Pashaportës dhe numrin e refrenës në transaction"
                }
            }
        }
          , El = {
            components: {
                ApplicationLinks: $l
            },
            tPfx: Dl,
            props: {
                applicationId: {
                    type: [String, Number],
                    required: !0
                },
                paymentIsSucessful: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    isLoadingPaymentDetail: !1,
                    paymentDetails: {},
                    fileError: null
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["d"])(g, ["token"])), {}, {
                authorizationHeader: function() {
                    return {
                        Authorization: "Bearer ".concat(this.token)
                    }
                },
                disabled: function() {
                    return this.paymentIsSucessful
                },
                documentOrigin: function() {
                    return "https://e-visa.al/api"
                },
                uploadUrl: function() {
                    return "".concat(this.documentOrigin, "/me/applications/").concat(this.applicationId, "/payment")
                },
                deleteUrl: function() {
                    return "".concat(this.documentOrigin, "/me/applications/").concat(this.applicationId, "/payment")
                },
                localizedError: function() {
                    return this.fileError ? this.$t("".concat(this.$options.tPfx, ".").concat(this.fileError)) : null
                },
                proofOfPayment: function() {
                    if (!this.paymentDetails.proofOfPayment)
                        return null;
                    var e = this.paymentDetails.proofOfPayment
                      , t = e.name
                      , a = Object(ta["a"])(e, ["name"]);
                    return a.name = t[this.$i18n.locale],
                    a
                }
            }),
            methods: {
                handleLoadPaymentDetailErrors: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    a.t0 = e.response.status,
                                    a.next = 404 === a.t0 ? 3 : 500 === a.t0 ? 4 : 409 === a.t0 || 403 === a.t0 ? 5 : 6;
                                    break;
                                case 3:
                                    return a.abrupt("return", t.$router.replace({
                                        name: "NotFound"
                                    }));
                                case 4:
                                    return a.abrupt("return", t.$router.replace({
                                        name: "SomethingWentWrong"
                                    }));
                                case 5:
                                    return a.abrupt("return", t.$router.push({
                                        name: "Applications"
                                    }));
                                case 6:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadPaymentDetails: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.isLoadingPaymentDetail = !0,
                                    t.prev = 1,
                                    t.next = 4,
                                    hu.getPaymentDetails(e.applicationId);
                                case 4:
                                    a = t.sent,
                                    i = a.data,
                                    e.paymentDetails = i.data.paymentDetails,
                                    t.next = 13;
                                    break;
                                case 9:
                                    return t.prev = 9,
                                    t.t0 = t["catch"](1),
                                    t.next = 13,
                                    e.handleLoadPaymentDetailErrors(t.t0);
                                case 13:
                                    return t.prev = 13,
                                    e.isLoadingPaymentDetail = !1,
                                    t.finish(13);
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 9, 13, 16]])
                    }
                    )))()
                },
                toDo: function() {
                    console.log("upload or delete failed")
                },
                onDocumentAdded: function(e) {
                    this.fileError = null,
                    this.paymentDetails.proofOfPayment = e
                },
                onDocumentRemoved: function() {
                    this.paymentDetails.proofOfPayment = null
                },
                finalizePayment: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.proofOfPayment) {
                                        t.next = 3;
                                        break
                                    }
                                    return e.fileError = "isRequired",
                                    t.abrupt("return");
                                case 3:
                                    return t.next = 5,
                                    hu.finalizePayment(e.applicationId);
                                case 5:
                                    return t.next = 7,
                                    e.$router.replace({
                                        name: "Applications"
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            },
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.loadPaymentDetails();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , ql = El
          , zl = Object(Q["a"])(ql, Nl, Rl, !1, null, null, null)
          , Bl = zl.exports
          , Vl = "view.payment"
          , Fl = {
            pfx: Vl,
            t: {
                en: {},
                al: {}
            }
        }
          , Ml = {
            components: {
                UploadProofOfPayment: Bl,
                PayOnline: Il,
                MethodSelect: ml
            },
            props: {
                applicationId: {
                    type: [String, Number],
                    required: !0
                }
            },
            //! Alway load proofOfPayment first.
            //!  If application is paid server returns 403 and client is redirected
            data: function() {
                return {
                    selectedMethod: "proofOfPayment",
                    disableUpload: !1
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"])), {}, {
                isProofOfPayment: function() {
                    return "proofOfPayment" === this.selectedMethod
                },
                isPayOnline: function() {
                    return "payOnline" === this.selectedMethod
                }
            }),
            methods: {
                conditionalSelectMethod: function(e) {
                    "proofOfPayment" === e && this.disableUpload || (this.selectedMethod = e)
                }
            }
        }
          , Ll = Ml
          , Ul = Object(Q["a"])(Ll, nl, rl, !1, null, null, null)
          , Hl = Ul.exports
          , Wl = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4",
                class: {
                    "py-32": e.isShowingMessage,
                    "py-12": !e.isShowingMessage
                }
            }, [a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 flex flex-wrap items-start bg-white"
            }, [a("form", {
                staticClass: "mx-auto w-full md:w-1/3",
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                        e.checkStatusByTrackingNumber(t)
                    }
                }
            }, [a("text-input", {
                attrs: {
                    label: e.$t(e.$options.tPfx + ".trackingNumber"),
                    placeholder: e.$t(e.$options.tPfx + ".trackingNumber"),
                    id: "tracking-number",
                    name: "tracking-number",
                    required: ""
                },
                model: {
                    value: e.trackingNumber,
                    callback: function(t) {
                        e.trackingNumber = t
                    },
                    expression: "trackingNumber"
                }
            }), a("button", {
                staticClass: "w-full button button-secondary",
                attrs: {
                    type: "submit"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".track")) + " ")])], 1)])])], 1)
        }
          , Gl = []
          , Ql = "view.track"
          , Kl = {
            pfx: Ql,
            t: {
                en: {
                    noApplication: "No application was found with this tracking number!",
                    applicationFound: 'Application #{trackingNumber} is in status "{status}"!',
                    trackingNumber: "Tracking number",
                    track: "Track"
                },
                al: {
                    noApplication: "Nuk u gjet asnjë aplikimin me këtë numër gjurmimi!",
                    applicationFound: 'Aplikimi #{trackingNumber} është në statusin "{status}"!',
                    trackingNumber: "Numri i gjurmimit",
                    track: "Gjurmo"
                }
            }
        }
          , Xl = {
            tPfx: Ql,
            props: {
                preFilledTrackingNumber: {
                    type: [Number, String]
                }
            },
            data: function() {
                return {
                    trackingNumber: this.preFilledTrackingNumber
                }
            },
            computed: Object(o["a"])(Object(o["a"])(Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"])), Object(f["c"])(g, ["isLoggedIn"])), Object(f["d"])(g, ["user"])),
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss,
                dispatchShowFlash: P.show
            })), {}, {
                checkStatusByTrackingNumber: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    hu.track(e.trackingNumber);
                                case 3:
                                    if (a = t.sent,
                                    i = a.data,
                                    n = i.data.application,
                                    !e.isLoggedIn || n.userId !== e.user.id) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 9,
                                    e.$router.push({
                                        name: "Applications",
                                        query: {
                                            trackingNumber: e.trackingNumber
                                        }
                                    });
                                case 9:
                                    return t.abrupt("return");
                                case 10:
                                    e.dispatchDismissFlash(),
                                    e.$swal(e.$t("".concat(e.$options.tPfx, ".applicationFound"), {
                                        trackingNumber: e.trackingNumber,
                                        status: i.data.application.status.name[e.$i18n.locale]
                                    })),
                                    t.next = 18;
                                    break;
                                case 14:
                                    return t.prev = 14,
                                    t.t0 = t["catch"](0),
                                    t.next = 18,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-secondary-500 bg-secondary-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-secondary-500",
                                        text: "".concat(e.$options.tPfx, ".noApplication"),
                                        textClass: "avoid-warp"
                                    });
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 14]])
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (!e.trackingNumber) {
                                    t.next = 3;
                                    break
                                }
                                return t.next = 3,
                                e.checkStatusByTrackingNumber();
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            }
        }
          , Yl = Xl
          , Jl = Object(Q["a"])(Yl, Wl, Gl, !1, null, null, null)
          , Zl = Jl.exports
          , ec = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4",
                class: {
                    "py-32": e.isShowingMessage,
                    "py-12": !e.isShowingMessage
                }
            }, [a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 flex flex-wrap items-start bg-white"
            }, [a("form", {
                staticClass: "mx-auto w-full md:w-1/3",
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                        e.checkIfVisaIsValid(t)
                    }
                }
            }, [a("text-input", {
                attrs: {
                    label: e.$t(e.$options.tPfx + ".serialNumber"),
                    placeholder: e.$t(e.$options.tPfx + ".serialNumber"),
                    id: "serial-number",
                    name: "serial-number",
                    required: ""
                },
                model: {
                    value: e.serialNumber,
                    callback: function(t) {
                        e.serialNumber = t
                    },
                    expression: "serialNumber"
                }
            }), a("text-input", {
                attrs: {
                    label: e.$t(e.$options.tPfx + ".passportNumber"),
                    placeholder: e.$t(e.$options.tPfx + ".passportNumber"),
                    id: "passport-number",
                    name: "passport-number",
                    required: ""
                },
                model: {
                    value: e.passportNumber,
                    callback: function(t) {
                        e.passportNumber = t
                    },
                    expression: "passportNumber"
                }
            }), a("button", {
                staticClass: "w-full button button-secondary",
                attrs: {
                    type: "submit"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".verify")) + " ")])], 1)])])], 1)
        }
          , tc = []
          , ac = "view.verify"
          , ic = {
            pfx: ac,
            t: {
                en: {
                    noVisa: "No visa was found with these details!",
                    visaFound: "Visa status: {status}",
                    serialNumber: "Visa Number",
                    passportNumber: "Passport Number",
                    verify: "Verify"
                },
                al: {
                    noVisa: "Nuk u gjet asnjë vizë me këto të dhëna!",
                    visaFound: "Statusi vizës: {status}",
                    serialNumber: "Numri Vizës",
                    passportNumber: "Numri Pasaportës",
                    verify: "Verifiko"
                }
            }
        }
          , nc = {
            tPfx: ac,
            data: function() {
                return {
                    serialNumber: "",
                    passportNumber: ""
                }
            },
            computed: Object(o["a"])(Object(o["a"])(Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"])), Object(f["c"])(g, ["isLoggedIn"])), Object(f["d"])(g, ["user"])),
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss,
                dispatchShowFlash: P.show
            })), {}, {
                checkIfVisaIsValid: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    vu.verifyStatus(e.serialNumber, e.passportNumber);
                                case 3:
                                    a = t.sent,
                                    i = a.data,
                                    e.dispatchDismissFlash(),
                                    e.$swal(e.$t("".concat(e.$options.tPfx, ".visaFound"), {
                                        trackingNumber: e.trackingNumber,
                                        status: i.data.application.status.name[e.$i18n.locale]
                                    })),
                                    t.next = 13;
                                    break;
                                case 9:
                                    return t.prev = 9,
                                    t.t0 = t["catch"](0),
                                    t.next = 13,
                                    e.dispatchShowFlash({
                                        class: "sm:block md:inline-block border-secondary-500 bg-secondary-200 max-w-lg mx-auto sm:max-w-auto sm:min-w-lg",
                                        iconClass: "hover:text-secondary-500",
                                        text: "".concat(e.$options.tPfx, ".noVisa"),
                                        textClass: "avoid-warp"
                                    });
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 9]])
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (!e.trackingNumber) {
                                    t.next = 3;
                                    break
                                }
                                return t.next = 3,
                                e.checkIfVisaIsValid();
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            }
        }
          , rc = nc
          , sc = Object(Q["a"])(rc, ec, tc, !1, null, null, null)
          , oc = sc.exports
          , lc = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4",
                class: {
                    "py-32": e.isShowingMessage,
                    "py-12": !e.isShowingMessage
                }
            }, [a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 flex flex-wrap items-start bg-white flex justify-center items-center"
            }, [a("button", {
                staticClass: "w-32 button button-secondary",
                attrs: {
                    disabled: e.disabled
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.downloadGeneratedVisa(t)
                    }
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".download")) + " ")])])])], 1)
        }
          , cc = []
          , uc = "view.downloadVisa"
          , pc = {
            pfx: uc,
            t: {
                en: {
                    download: "Download"
                },
                al: {
                    download: "Shkarko"
                }
            }
        }
          , dc = {
            tPfx: uc,
            props: {
                visaUuid: {
                    type: [String]
                }
            },
            data: function() {
                return {
                    disabled: !1
                }
            },
            computed: Object(o["a"])(Object(o["a"])(Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"])), Object(f["c"])(g, ["isLoggedIn"])), Object(f["d"])(g, ["user"])),
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss,
                dispatchShowFlash: P.show
            })), {}, {
                downloadGeneratedVisa: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    e.disabled = !0,
                                    t.next = 4,
                                    vu.getTemporarySignedUrl(e.visaUuid);
                                case 4:
                                    return a = t.sent,
                                    i = a.data,
                                    n = i.data.temporarySignedUrl,
                                    n = n.replace("cms.", ""),
                                    n = n.replace("http:", "https:"),
                                    t.next = 11,
                                    p.get(n, {
                                        responseType: "blob"
                                    });
                                case 11:
                                    r = t.sent,
                                    jo(r.data, $o(r.headers)),
                                    t.next = 18;
                                    break;
                                case 15:
                                    t.prev = 15,
                                    t.t0 = t["catch"](0),
                                    e.$router.push({
                                        name: "SomethingWentWrong"
                                    });
                                case 18:
                                    return t.prev = 18,
                                    e.disabled = !1,
                                    t.finish(18);
                                case 21:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 15, 18, 21]])
                    }
                    )))()
                }
            })
        }
          , mc = dc
          , fc = Object(Q["a"])(mc, lc, cc, !1, null, null, null)
          , hc = fc.exports
          , gc = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.label ? a("label", {
                staticClass: "block mb-1 whitespace-nowrap",
                class: e.dynamicLabelClass,
                attrs: {
                    for: e.id
                }
            }, [e._v(" " + e._s(e.label) + " ")]) : e._e(), e.showDescription && e.description ? a("div", {
                staticClass: "mb-2 text-xs italic",
                class: {
                    "text-yellow-500": !!e.error
                }
            }, [a("div", {
                domProps: {
                    innerHTML: e._s(e.description)
                }
            })]) : e._e(), e.hasInvitationDocument ? a("strong", {
                staticClass: "download-information-font"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".invitationFormatLabel")) + " "), a("a", {
                attrs: {
                    href: "/documents/format-ftese.docx"
                }
            }, [a("u", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".here")) + " ")])])]) : e._e(), a("div", {
                staticClass: "relative flex border rounded-md w-full h-20 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 focus:z-10 sm:text-sm",
                class: e.dynamicInputClass
            }, [e.showUploadHint ? a("file-upload-hint", {
                attrs: {
                    hint: e.uploadHint,
                    "is-dragging-files": e.isDraggingFiles,
                    "has-error": !!e.error
                }
            }) : e._e(), a("div", {
                staticClass: "flex-1 md:flex-none md:w-11/12"
            }, [a("file-preview", {
                staticClass: "h-full",
                attrs: {
                    file: e.fileToRender,
                    origin: e.origin,
                    "upload-progress": e.progress,
                    "file-name": e.fileName,
                    headers: {
                        headers: e.headers
                    }
                }
            })], 1), a("div", {
                staticClass: "flex justify-center items-center w-8 md:w-1/12"
            }, [e.fileToRender && !e.fileToRender.inProgress ? a("button", {
                attrs: {
                    disabled: e.disabled
                },
                on: {
                    click: e.deleteFile
                }
            }, [a("font-awesome-icon", {
                staticClass: "text-gray-400 cursor-pointer",
                class: e.disabled ? "hover:text-gray-500 cursor-not-allowed" : "hover:text-secondary-500",
                attrs: {
                    icon: "trash",
                    size: "lg"
                }
            })], 1) : e._e()]), a("input", e._b({
                ref: "input",
                staticClass: "absolute top-0 right-0 bottom-0 left-0 block w-full opacity-0 appearance-none cursor-pointer",
                class: {
                    "z-10": !e.inputIsDisabled,
                    "-z-1": e.inputIsDisabled
                },
                attrs: {
                    id: e.id,
                    accept: e.accept,
                    disabled: e.inputIsDisabled,
                    type: "file"
                },
                domProps: {
                    value: null
                },
                on: {
                    change: e.onFileInput,
                    dragenter: function(t) {
                        t.preventDefault(),
                        e.isDraggingFiles = !0
                    },
                    dragleave: function(t) {
                        e.isDraggingFiles = !1
                    },
                    dragover: function(e) {
                        e.preventDefault()
                    },
                    drop: function(t) {
                        return t.preventDefault(),
                        e.onFileDrop(t)
                    }
                }
            }, "input", e.$attrs, !1))], 1), e.error ? a("div", {
                staticClass: "leading-none text-yellow-500"
            }, [e._v(e._s(e.error))]) : e._e(), e.showModal ? a("div", {
                staticClass: "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
            }, [a("div", {
                staticClass: "relative w-auto my-6 mx-auto max-w-3xl"
            }, [a("div", {
                staticClass: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            }, [a("div", {
                staticClass: "relative p-6 flex-auto"
            }, [a("cropper", {
                ref: "cropper",
                staticClass: "cropper",
                attrs: {
                    src: e.src,
                    transitions: "",
                    "stencil-props": {
                        aspectRatio: .8
                    }
                },
                on: {
                    change: e.handleCrop
                }
            }), a("div", {
                staticClass: "text-right mt-1"
            }, [a("button", {
                staticClass: "mx-2 text-xl",
                on: {
                    click: function(t) {
                        return e.zoom(2)
                    }
                }
            }, [a("font-awesome-icon", {
                staticClass: "group-hover:text-secondary-500",
                attrs: {
                    icon: "search-plus"
                }
            })], 1), a("button", {
                staticClass: "mx-2 text-xl",
                on: {
                    click: function(t) {
                        return e.zoom(.5)
                    }
                }
            }, [a("font-awesome-icon", {
                staticClass: "group-hover:text-secondary-500",
                attrs: {
                    icon: "search-minus"
                }
            })], 1)])], 1), a("div", {
                staticClass: "flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b"
            }, [a("button", {
                staticClass: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",
                staticStyle: {
                    transition: "all 0.15s ease"
                },
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.resetCropperData
                }
            }, [e._v(" " + e._s(e.close) + " ")]), a("button", {
                staticClass: "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",
                staticStyle: {
                    transition: "all 0.15s ease"
                },
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.confirmCrop
                }
            }, [e._v(" " + e._s(e.confirm) + " ")])])])])]) : e._e(), e.showModal ? a("div", {
                staticClass: "opacity-25 fixed inset-0 z-40 bg-black"
            }) : e._e()])
        }
          , vc = []
          , yc = a("ec26")
          , bc = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.hasFileToDisplay ? a("div", {
                staticClass: "flex items-center w-full"
            }, [a("div", {
                staticClass: "inline-block"
            }, [e.isDisplayable ? a("div", {
                staticClass: "h-20 w-20 px-2 py-2"
            }, [a("img", {
                staticClass: "h-full",
                attrs: {
                    src: e.src
                }
            })]) : e.isPdf ? a("div", {
                staticClass: "h-20 w-20 px-2 py-2"
            }, [a("img", {
                staticClass: "h-full pdf",
                attrs: {
                    src: "/img/svg/pdf.svg"
                }
            })]) : e._e()]), a("div", {
                staticClass: "flex-1 flex flex-wrap p-2"
            }, [a("header", {
                staticClass: "mb-2 h-6 overflow-ellipsis overflow-hidden cursor-pointer hover:underline",
                on: {
                    click: e.download
                }
            }, [a("strong", {
                staticClass: "text-sm"
            }, [e._v(e._s(e.file.name))])]), e.isInProgress ? a("div", {
                staticClass: "border rounded-md w-full border-gray-400"
            }, [a("div", {
                staticClass: "h-4 rounded-md bg-secondary-500",
                style: {
                    width: e.uploadProgress + "%"
                }
            })]) : a("div", {
                staticClass: "w-full"
            }, [e._v(" " + e._s(e.humanReadableSize) + " ")])])]) : e._e()
        }
          , xc = []
          , wc = 1073741824
          , kc = 1048576
          , Cc = 1024
          , Pc = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return e > wc ? "".concat((e / wc).toFixed(t), "GB") : e > kc ? "".concat((e / kc).toFixed(t), "MB") : e > Cc ? "".concat((e / Cc).toFixed(t), "KB") : "".concat(e, "B")
        }
          , $c = Pc
          , _c = {
            props: {
                size: {
                    type: String
                },
                file: {
                    type: [File, Object]
                },
                fileName: {
                    type: String,
                    required: !0
                },
                fileSrcProperty: {
                    type: String,
                    default: "path"
                },
                fileDownloadPathProperty: {
                    type: String,
                    default: "downloadPath"
                },
                fileMimeProperty: {
                    type: String,
                    default: "type"
                },
                fileInProgressProperty: {
                    type: String,
                    default: "inProgress"
                },
                fileSizeProperty: {
                    type: String,
                    default: "size"
                },
                uploadProgress: {
                    type: Number
                },
                origin: {
                    type: String,
                    default: ""
                },
                headers: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    src: ""
                }
            },
            computed: {
                hasFileToDisplay: function() {
                    return !!this.file
                },
                isDisplayable: function() {
                    return "image/jpeg" === this.file[this.fileMimeProperty] || "image/png" === this.file[this.fileMimeProperty]
                },
                isPdf: function() {
                    return !!this.hasFileToDisplay && "application/pdf" === this.file[this.fileMimeProperty]
                },
                isInProgress: function() {
                    return !!this.hasFileToDisplay && this.file[this.fileInProgressProperty]
                },
                humanReadableSize: function() {
                    return this.hasFileToDisplay ? $c(this.file[this.fileSizeProperty]) : "0MB"
                },
                fileGetPath: function() {
                    return "".concat(this.origin).concat(this.file[this.fileSrcProperty])
                },
                fileDownloadPath: function() {
                    return "".concat(this.origin).concat(this.file[this.fileDownloadPathProperty])
                }
            },
            methods: {
                fetchProtectedImage: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    c.a.get(e.fileGetPath, e.headers);
                                case 2:
                                    a = t.sent,
                                    i = a.data,
                                    e.src = "data:".concat(e.file[e.fileMimeProperty], ";base64,").concat(i.data[e.fileName]);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                download: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    c.a.get(e.fileDownloadPath, Object(o["a"])(Object(o["a"])({}, e.headers), {}, {
                                        responseType: "blob"
                                    }));
                                case 2:
                                    a = t.sent,
                                    jo(a.data, $o(a.headers));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            },
            mounted: function() {
                this.isPdf || this.isInProgress || !this.hasFileToDisplay || this.fetchProtectedImage()
            },
            updated: function() {
                this.isPdf || this.isInProgress || !this.hasFileToDisplay || this.fetchProtectedImage()
            }
        }
          , jc = _c
          , Ac = (a("ef0b"),
        Object(Q["a"])(jc, bc, xc, !1, null, null, null))
          , Oc = Ac.exports
          , Sc = function(e, t) {
            var a = t._c;
            return a("div", {
                staticClass: "absolute top-0 right-0 bottom-0 left-0 z-5 flex justify-center items-center"
            }, [a("font-awesome-icon", {
                staticClass: "mr-2",
                class: {
                    "text-gray-400": !t.props.isDraggingFiles && !t.props.hasError,
                    "text-yellow-500": !t.props.isDraggingFiles && t.props.hasError,
                    "text-secondary-500": t.props.isDraggingFiles
                },
                attrs: {
                    icon: "file-upload",
                    size: "3x"
                }
            }), a("span", {
                staticClass: "ml-2",
                class: {
                    "text-gray-400": !t.props.isDraggingFiles && !t.props.hasError,
                    "text-yellow-500": !t.props.isDraggingFiles && t.props.hasError,
                    "text-secondary-500": t.props.isDraggingFiles
                }
            }, [t._v(" " + t._s(t.props.hint) + " ")])], 1)
        }
          , Ic = []
          , Nc = {
            props: {
                isDraggingFiles: [Boolean],
                hint: [String],
                hasError: [Boolean]
            }
        }
          , Rc = Nc
          , Dc = Object(Q["a"])(Rc, Sc, Ic, !0, null, null, null)
          , Tc = Dc.exports
          , Ec = "components.fileInput"
          , qc = {
            pfx: Ec,
            t: {
                en: {
                    invitationFormatLabel: "THE REQUIRED INVITATION LETTER FORMAT CAN BE DOWNLOADED",
                    here: "HERE"
                },
                al: {
                    invitationFormatLabel: "FORMATI I KERKUAR I FTESES MUND TE SHKARKOHET",
                    here: "KETU"
                }
            }
        }
          , zc = {
            tPfx: Ec,
            components: {
                FilePreview: Oc,
                FileUploadHint: Tc
            },
            inheritAttrs: !1,
            props: {
                id: {
                    type: String,
                    default: function() {
                        return "file-input-".concat(Object(yc["a"])())
                    }
                },
                hasInvitationDocument: [Boolean],
                uploadUrl: String,
                deleteUrl: String,
                deletable: [Boolean],
                headers: Object,
                additionalPostData: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                origin: {
                    type: String,
                    required: !0
                },
                fileName: {
                    type: String,
                    default: "file"
                },
                reduceResponse: {
                    type: Function,
                    default: function(e) {
                        return e.data
                    }
                },
                accept: {
                    type: String,
                    default: "*"
                },
                maxSize: {
                    type: Number,
                    default: 4194304
                },
                uploadHint: {
                    type: String,
                    default: "Select or Drag file to upload"
                },
                close: {
                    type: String,
                    default: "Close"
                },
                confirm: {
                    type: String,
                    default: "Confirm"
                },
                cropImage: {
                    type: Boolean,
                    default: !1
                },
                showDescription: Boolean,
                description: String,
                disabled: Boolean,
                value: [Object],
                label: [String, void 0],
                labelClass: [String, Object, void 0],
                inputClass: [String, Object, void 0],
                error: [String, void 0],
                mb: {
                    type: Number,
                    default: 4
                }
            },
            data: function() {
                return {
                    isDraggingFiles: !1,
                    isDeleting: !1,
                    progress: 100,
                    fileInProgress: null,
                    showModal: !1,
                    src: "",
                    fileToUpload: {}
                }
            },
            computed: {
                dynamicInputClass: function() {
                    if ("object" === Object(T["a"])(this.inputClass))
                        return Object(o["a"])(Object(d["a"])({
                            "has-error": this.error,
                            "border-gray-400": !this.isDraggingFiles,
                            "border-secondary-500": this.isDraggingFiles
                        }, "mb-".concat(this.mb), !this.error), this.inputClass);
                    var e = this.error ? "has-error" : "mb-".concat(this.mb)
                      , t = this.isDraggingFiles ? "border-secondary-500" : "border-gray-400";
                    return "".concat(t, " ").concat(e, " ").concat(this.inputClass)
                },
                dynamicLabelClass: function() {
                    return "object" === Object(T["a"])(this.labelClass) ? Object(o["a"])({
                        "has-error": this.error
                    }, this.labelClass) : "".concat(this.error ? "has-error" : "", " ").concat(this.labelClass)
                },
                axiosConfig: function() {
                    var e = this;
                    return {
                        headers: this.headers,
                        onUploadProgress: function(t) {
                            var a = Math.round(100 * t.loaded / t.total);
                            e.progress = a
                        }
                    }
                },
                fileToRender: function() {
                    return this.fileInProgress || this.value
                },
                inputIsDisabled: function() {
                    return this.disabled || this.fileToRender
                },
                showUploadHint: function() {
                    return !this.fileToRender
                }
            },
            methods: {
                validateFileSize: function(e) {
                    return !(e.size > this.maxSize) || (this.$emit("file-size-error", {
                        size: e.size,
                        maxSize: this.maxSize,
                        maxSizeReadable: $c(this.maxSize)
                    }),
                    !1)
                },
                validateDimensions: function(e) {
                    var t = this;
                    return new Promise((function(a, i) {
                        var n = new Image;
                        n.onload = function() {
                            var e = Math.round(36 / 25.4 * 300)
                              , r = Math.round(47 / 25.4 * 300);
                            n.width !== e || n.height !== r ? (t.$emit("file-dimension-error", {
                                width: n.width,
                                height: n.height,
                                requiredWidth: e,
                                requiredHeight: r
                            }),
                            i(!1)) : a(!0)
                        }
                        ,
                        n.onerror = function() {
                            return i(!1)
                        }
                        ,
                        n.src = URL.createObjectURL(e)
                    }
                    ))
                },
                validateType: function(e) {
                    var t = e.type;
                    if ("*" === this.accept || this.accept.includes(t))
                        return !0;
                    var a = this.accept.replace(/ /g, "").split(",")
                      , i = a.map((function(e) {
                        return ks.a.extensions[e]
                    }
                    ))
                      , n = new Set(i)
                      , r = Object(D["a"])(n).join(",");
                    return this.$emit("file-type-error", {
                        type: e.type,
                        accept: this.accept,
                        acceptReadable: r
                    }),
                    !1
                },
                validate: function(e) {
                    return !!this.validateFileSize(e) && (!!this.validateDimensions(e) && !!this.validateType(e))
                },
                uploadFile: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        var i, n, r, s, o, l, u, p, d;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    for (i = new FormData,
                                    n = URL.createObjectURL(e),
                                    e.path = n,
                                    e.inProgress = !0,
                                    i.append(t.fileName, e),
                                    r = 0,
                                    s = Object.entries(t.additionalPostData); r < s.length; r++)
                                        o = Object(bt["a"])(s[r], 2),
                                        l = o[0],
                                        u = o[1],
                                        i.append(l, u);
                                    return a.prev = 6,
                                    t.$set(t, "fileInProgress", e),
                                    a.next = 10,
                                    c.a.post(t.uploadUrl, i, t.axiosConfig);
                                case 10:
                                    p = a.sent,
                                    d = t.reduceResponse(p),
                                    t.$emit("input", d),
                                    a.next = 18;
                                    break;
                                case 15:
                                    a.prev = 15,
                                    a.t0 = a["catch"](6),
                                    t.$emit("upload-error");
                                case 18:
                                    return a.prev = 18,
                                    t.fileInProgress = null,
                                    a.finish(18);
                                case 21:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, null, [[6, 15, 18, 21]])
                    }
                    )))()
                },
                deleteFile: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.deletable && !e.isDeleting) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return e.isDeleting = !0,
                                    t.prev = 3,
                                    t.next = 6,
                                    c.a.delete(e.deleteUrl, e.axiosConfig);
                                case 6:
                                    e.$emit("deleted"),
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t["catch"](3),
                                    e.$emit("delete-error");
                                case 12:
                                    return t.prev = 12,
                                    e.isDeleting = !1,
                                    t.finish(12);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[3, 9, 12, 15]])
                    }
                    )))()
                },
                onFileInput: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a = e.$refs.input.files[0],
                                    e.validate(a)) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    e.cropImage ? e.cropFileModal(a) : e.uploadFile(a);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onFileDrop: function(e) {
                    this.isDraggingFiles = !1;
                    var t = e.dataTransfer
                      , a = t.files[0];
                    this.validate(a) && (this.cropImage ? this.cropFileModal(a) : this.uploadFile(a))
                },
                cropFileModal: function(e) {
                    this.src = URL.createObjectURL(e),
                    this.showModal = !0
                },
                handleCrop: function(e) {
                    var t = this
                      , a = e.canvas;
                    fetch(a.toDataURL("image/png")).then((function(e) {
                        return e.blob()
                    }
                    )).then((function(e) {
                        t.fileToUpload = new File([e],"File name",{
                            type: "image/png"
                        })
                    }
                    ))
                },
                zoom: function(e) {
                    this.$refs.cropper.zoom(e)
                },
                confirmCrop: function() {
                    this.uploadFile(this.fileToUpload),
                    this.resetCropperData()
                },
                resetCropperData: function() {
                    this.showModal = !1,
                    this.src = "",
                    this.fileToUpload = {}
                }
            }
        }
          , Bc = zc
          , Vc = (a("755e"),
        Object(Q["a"])(Bc, gc, vc, !1, null, null, null))
          , Fc = Vc.exports
          , Mc = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.isLoadingAppealDocumentDetail ? a("loader", {
                attrs: {
                    loading: e.isLoadingAppealDocumentDetail,
                    size: "1.5rem",
                    margin: "4px"
                }
            }) : a("article", {
                staticClass: "border border-gray-400 rounded-md p-4 md:p-8 flex flex-wrap items-start bg-white"
            }, [a("div", {
                staticClass: "w-full md:w-1/2 pt-16 pb-4 lg:px-8 lg:pb-8"
            }, [e.hasEAlbaniaTrackingNumber ? e._e() : a("header", {
                staticClass: "mb-4"
            }, [a("h3", [e._v(" " + e._s(e.$t(e.$options.tPfx + ".appealRejection")) + " ")])]), a("div", [e.hasEAlbaniaTrackingNumber ? a("div", {
                staticClass: "bg-gray-50 border border-gray-300 rounded-md p-4 mb-6"
            }, [a("p", {
                staticClass: "mb-4 text-gray-700"
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".eAlbaniaAppealMessage")) + " ")]), a("a", {
                staticClass: "button button-secondary inline-flex items-center",
                attrs: {
                    href: "mailto:visa@mfa.gov.al"
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".contactVisaEmail")) + " ")])]) : a("file-input", {
                staticClass: "mb-2",
                attrs: {
                    deletable: "",
                    accept: "application/pdf, image/jpeg, image/png",
                    "file-name": "appealDocument",
                    "max-size": 31457280,
                    disabled: e.disabled,
                    label: e.$t(e.$options.tPfx + ".appealDocument"),
                    "upload-hint": e.$t(e.$options.tPfx + ".uploadHint"),
                    "upload-url": e.uploadUrl,
                    "delete-url": e.deleteUrl,
                    origin: e.documentOrigin,
                    headers: e.authorizationHeader,
                    "reduce-response": function(e) {
                        return e.data.data.appealDocument
                    },
                    error: e.localizedError,
                    value: e.documentOfAppeal
                },
                on: {
                    input: e.onDocumentAdded,
                    "upload-error": e.toDo,
                    deleted: e.onDocumentRemoved,
                    "delete-error": e.toDo,
                    "file-size-error": function(t) {
                        e.fileError = "maxSizeError"
                    },
                    "file-type-error": function(t) {
                        e.fileError = "onlyValidFormat"
                    }
                }
            })], 1), a("button", {
                staticClass: "button button-secondary w-full md:w-auto",
                attrs: {
                    disabled: e.disabled || e.hasEAlbaniaTrackingNumber
                },
                on: {
                    click: e.finalizeAppeal
                }
            }, [e._v(" " + e._s(e.$t(e.$options.tPfx + ".finalizeAppeal")) + " ")]), a("application-links", {
                staticClass: "mt-10",
                attrs: {
                    "application-id": e.applicationId
                }
            })], 1)])], 1)
        }
          , Lc = []
          , Uc = "view.appeal.uploadAppealDocument"
          , Hc = {
            pfx: Uc,
            t: {
                en: {
                    appealDocument: "Appeal document",
                    uploadHint: "Select or drop appeal document",
                    onlyValidFormat: "Only pdf, jpeg or png format is accepted",
                    maxSizeError: "Max size is 30MB",
                    isRequired: "Appeal document is required",
                    localizedFileName: "Document of Appeal",
                    finalizeAppeal: "Finalize appeal",
                    appealRejection: "Here you can appeal the rejection of the application",
                    eAlbaniaAppealMessage: "Please contact visa@mfa.gov.al to continue the appeal process.",
                    contactVisaEmail: "Contact: visa@mfa.gov.al"
                },
                al: {
                    appealDocument: "Dokumenti i apelimit",
                    uploadHint: "Zgjidh ose tërhiq dokumentin e apelimit",
                    onlyValidFormat: "Pranohet vetëm formati pdf, jpeg ose png",
                    maxSizeError: "Madhësia maksimale është 30MB",
                    isRequired: "Dokumenti i apelimit është i detyruar",
                    localizedFileName: "Dokumenti i apelimit",
                    finalizeAppeal: "Finalizo apelimin",
                    appealRejection: "Këtu mund të apeloni vendimin e refuzimit të aplikimit",
                    eAlbaniaAppealMessage: "Ju lutem kontaktoni visa@mfa.gov.al për vazhdimin e apelimit.",
                    contactVisaEmail: "Kontakto: visa@mfa.gov.al"
                }
            }
        }
          , Wc = {
            components: {
                ApplicationLinks: $l
            },
            tPfx: Uc,
            props: {
                applicationId: {
                    type: [String, Number],
                    required: !0
                },
                uploadIsSuccessful: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    isLoadingAppealDocumentDetail: !1,
                    data: {},
                    fileError: null,
                    hasEAlbaniaTrackingNumber: !1
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(f["d"])(g, ["token"])), {}, {
                authorizationHeader: function() {
                    return {
                        Authorization: "Bearer ".concat(this.token)
                    }
                },
                disabled: function() {
                    return this.uploadIsSuccessful
                },
                documentOrigin: function() {
                    return "https://e-visa.al/api"
                },
                uploadUrl: function() {
                    return "".concat(this.documentOrigin, "/me/applications/").concat(this.applicationId, "/appeal")
                },
                deleteUrl: function() {
                    return "".concat(this.documentOrigin, "/me/applications/").concat(this.applicationId, "/appeal")
                },
                localizedError: function() {
                    return this.fileError ? this.$t("".concat(this.$options.tPfx, ".").concat(this.fileError)) : null
                },
                documentOfAppeal: function() {
                    if (!this.data.appealDocument)
                        return null;
                    var e = this.data.appealDocument
                      , t = e.name
                      , a = Object(ta["a"])(e, ["name"]);
                    return a.name = t[this.$i18n.locale],
                    a
                }
            }),
            methods: {
                handleLoadAppealDocumentDetailErrors: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    a.t0 = e.response.status,
                                    a.next = 404 === a.t0 ? 3 : 500 === a.t0 ? 4 : 409 === a.t0 || 403 === a.t0 ? 5 : 6;
                                    break;
                                case 3:
                                    return a.abrupt("return", t.$router.replace({
                                        name: "NotFound"
                                    }));
                                case 4:
                                    return a.abrupt("return", t.$router.replace({
                                        name: "SomethingWentWrong"
                                    }));
                                case 5:
                                    return a.abrupt("return", t.$router.push({
                                        name: "Applications"
                                    }));
                                case 6:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadAppealDetails: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.isLoadingAppealDocumentDetail = !0,
                                    t.prev = 1,
                                    t.next = 4,
                                    hu.getAppealDetails(e.applicationId).then((function(t) {
                                        e.data = t.data.data,
                                        e.data.isEalbanianApplication && (e.hasEAlbaniaTrackingNumber = !0)
                                    }
                                    ));
                                case 4:
                                    t.next = 10;
                                    break;
                                case 6:
                                    return t.prev = 6,
                                    t.t0 = t["catch"](1),
                                    t.next = 10,
                                    e.handleLoadAppealDocumentDetailErrors(t.t0);
                                case 10:
                                    return t.prev = 10,
                                    e.isLoadingAppealDocumentDetail = !1,
                                    t.finish(10);
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 6, 10, 13]])
                    }
                    )))()
                },
                toDo: function() {
                    console.log("upload or delete failed")
                },
                onDocumentAdded: function(e) {
                    this.fileError = null,
                    this.data.appealDocument = e
                },
                onDocumentRemoved: function() {
                    this.data.appealDocument = null
                },
                finalizeAppeal: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.documentOfAppeal) {
                                        t.next = 3;
                                        break
                                    }
                                    return e.fileError = "isRequired",
                                    t.abrupt("return");
                                case 3:
                                    return t.next = 5,
                                    hu.finalizeAppeal(e.applicationId);
                                case 5:
                                    return t.next = 7,
                                    e.$router.replace({
                                        name: "Applications"
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            },
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.loadAppealDetails();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , Gc = Wc
          , Qc = Object(Q["a"])(Gc, Mc, Lc, !1, null, null, null)
          , Kc = Qc.exports
          , Xc = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200"
            }, [a("tapered-section", {
                staticClass: "px-4 pb-4",
                class: {
                    "pt-8": !e.isShowingMessage,
                    "pt-32": e.isShowingMessage
                }
            }), a("tapered-section", {
                staticClass: "px-4 pt-4 pb-8"
            }, [a("upload-appeal-document", {
                attrs: {
                    "application-id": e.applicationId,
                    "upload-is-successful": e.disableUpload
                }
            })], 1)], 1)
        }
          , Yc = []
          , Jc = "view.appeal"
          , Zc = {
            pfx: Jc,
            t: {
                en: {},
                al: {}
            }
        }
          , eu = {
            components: {
                UploadAppealDocument: Kc
            },
            props: {
                applicationId: {
                    type: [String, Number],
                    required: !0
                }
            },
            data: function() {
                return {
                    disableUpload: !1
                }
            },
            computed: Object(o["a"])({}, Object(f["c"])(k, ["isShowingMessage"]))
        }
          , tu = eu
          , au = Object(Q["a"])(tu, Xc, Yc, !1, null, null, null)
          , iu = au.exports
          , nu = V("en", [U, se, xe, Ae, Ee, Ue, Je, dt, _t, Vt, Qt, ra, xa, dn, Sa, nn, _i, Gi, gi, Qa, ui, ai, za, xn, An, Ks, Qr, ls, Ls, Ts, Os, ro, go, qo, Ho, Oo, Zo, Fl, cl, wl, Tl, jl, Kl, ic, pc, Bi, qc, Zc, Hc])
          , ru = V("al", [U, se, xe, Ae, Ee, Ue, Je, dt, _t, Vt, Qt, ra, xa, dn, Sa, nn, _i, Gi, gi, Qa, ui, ai, za, xn, An, Ks, Qr, ls, Ls, Ts, Os, ro, go, qo, Ho, Oo, Zo, Fl, cl, wl, Tl, jl, Kl, ic, pc, Bi, qc, Zc, Hc]);
        m["default"].use(I["a"]);
        var su = localStorage.getItem("locale");
        su || (su = "en",
        localStorage.setItem("locale", su));
        var ou = {
            al: ru,
            en: nu
        }
          , lu = new I["a"]({
            locale: su,
            messages: ou
        })
          , cu = lu
          , uu = {
            onFulfilled: function(e) {
                var t = e.url.split("?")[1] || ""
                  , a = S.a.parse(t);
                return a.locale || (e.params = e.params || {},
                e.params["locale"] = cu.locale),
                e
            },
            onRejected: function(e) {
                return Promise.reject(e)
            }
        };
        function pu() {
            p.interceptors.request.use(A.onFulfilled, A.onRejected),
            p.interceptors.request.use(uu.onFulfilled, uu.onRejected)
        }
        var du = {
            editProfile: function(e) {
                return p.post("/me/edit", e)
            },
            register: function(e) {
                return p.post("/register", e)
            },
            login: function(e) {
                return p.post("/login", e)
            },
            logout: function() {
                return p.post("/logout")
            },
            auth: function() {
                return p.get("/me")
            },
            forgotPassword: function(e) {
                return p.post("/forgot-password", e)
            }
        }
          , mu = {
            list: function(e) {
                var t = "";
                return e && (t = "?" + S.a.stringify({
                    qs: e
                })),
                p.get("/countries".concat(t))
            }
        }
          , fu = {
            list: function() {
                return p.get("/visa-types")
            },
            questions: function(e) {
                return p.get("/visa-types/".concat(e, "/questions"))
            }
        }
          , hu = {
            track: function(e) {
                return p.get("/applications/check-status/".concat(e))
            },
            all: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = "";
                return e && (t = "?".concat(S.a.stringify({
                    status: e
                }))),
                p.get("/me/applications".concat(t))
            },
            create: function(e) {
                return p.post("/me/applications", e)
            },
            get: function(e) {
                return p.get("/me/applications/".concat(e))
            },
            cancel: function(e) {
                return p.post("/me/applications/".concat(e, "/cancel"), {
                    applicationId: e
                })
            },
            finalize: function(e) {
                return p.post("/me/applications/".concat(e, "/finalize"))
            },
            getPaymentDetails: function(e) {
                return p.get("/me/applications/".concat(e, "/payment"))
            },
            finalizePayment: function(e) {
                return p.post("/me/applications/".concat(e, "/payment/finalize"))
            },
            getPaymentURL: function(e) {
                return p.get("/me/applications/".concat(e, "/payment-url"))
            },
            getAppealDetails: function(e) {
                return p.get("/me/applications/".concat(e, "/appeal"))
            },
            finalizeAppeal: function(e) {
                return p.post("/me/applications/".concat(e, "/appeal/finalize"))
            }
        }
          , gu = {
            createOrUpdate: function(e, t) {
                return p.post("/me/applications/".concat(e, "/answers"), t)
            },
            delete: function(e, t) {
                return p.delete("/me/applications/".concat(e, "/answers/").concat(t))
            }
        }
          , vu = {
            getTemporarySignedUrl: function(e) {
                return p.get("/visas/".concat(e, "/temporary-signed-url"))
            },
            verify: function(e) {
                return p.get("/visas/".concat(e, "/verify"))
            },
            verifyStatus: function(e, t) {
                return p.get("/visas/status?serialNumber=".concat(e, "&passportNumber=").concat(t))
            },
            checkApplicationLimit: function(e) {
                return p.get("/check-visa-type-limit?visaTypeId=".concat(e))
            }
        };
        pu();
        var yu = a("c28b")
          , bu = a.n(yu)
          , xu = a("2b88")
          , wu = a.n(xu)
          , ku = a("f13c")
          , Cu = a.n(ku)
          , Pu = a("5886")
          , $u = a("2a13")
          , _u = a.n($u)
          , ju = a("b094")
          , Au = a.n(ju)
          , Ou = a("0e0b")
          , Su = a.n(Ou)
          , Iu = a("d1ad")
          , Nu = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a(e.layout, {
                tag: "component"
            }, [a("router-view")], 1)
        }
          , Ru = []
          , Du = "default"
          , Tu = {
            computed: {
                layout: function() {
                    return "".concat(this.$route.meta.layout || Du, "-layout")
                }
            },
            methods: {
                notificationsRequestPermission: function() {
                    return Object(h["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!("Notification"in window) || "default" !== Notification.permission) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3,
                                    Notification.requestPermission();
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            },
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.notificationsRequestPermission();
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , Eu = Tu
          , qu = Object(Q["a"])(Eu, Nu, Ru, !1, null, null, null)
          , zu = qu.exports
          , Bu = (a("45fc"),
        function() {
            var e = Object(h["a"])(regeneratorRuntime.mark((function e(t, a, i) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = j.getters["".concat(g, "/isLoggedIn")],
                            !n) {
                                e.next = 4;
                                break
                            }
                            return e.next = 4,
                            j.dispatch("".concat(g, "/").concat(y.fetchAuthenticatedUser));
                        case 4:
                            t.matched.some((function(e) {
                                return e.meta.authOnly
                            }
                            )) ? n ? i() : i({
                                name: "Login",
                                query: {
                                    redirect: t.fullPath
                                }
                            }) : t.matched.some((function(e) {
                                return e.meta.guestOnly
                            }
                            )) && n ? i({
                                name: "Home"
                            }) : i();
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, a, i) {
                return e.apply(this, arguments)
            }
        }())
          , Vu = function(e, t, a) {
            return e.hash ? new Promise((function(t) {
                setTimeout((function() {
                    return t({
                        selector: e.hash,
                        offset: {
                            x: 0,
                            y: 74
                        },
                        behavior: "smooth"
                    })
                }
                ), e.query.scrollDelay)
            }
            )) : new Promise(a ? function(t) {
                setTimeout((function() {
                    return t(Object(o["a"])(Object(o["a"])({}, a), {}, {
                        behavior: "smooth"
                    }))
                }
                ), e.query.scrollDelay)
            }
            : function(t) {
                setTimeout((function() {
                    return t({
                        x: 0,
                        y: 0,
                        behavior: "smooth"
                    })
                }
                ), e.query.scrollDelay)
            }
            )
        }
          , Fu = function(e, t, a) {
            return e.hash ? {
                selector: e.hash,
                behavior: "smooth"
            } : a ? Object(o["a"])(Object(o["a"])({}, a), {}, {
                behavior: "smooth"
            }) : {
                x: 0,
                y: 0,
                behavior: "smooth"
            }
        }
          , Mu = function(e, t, a) {
            return e.query.scrollDelay ? Vu(e, t, a) : Fu(e, t, a)
        }
          , Lu = Mu
          , Uu = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , Hu = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("main", [a("div", {
                staticClass: "px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
            }, [a("div", {
                staticClass: "sm:text-center lg:text-left"
            }, [a("h2", {
                staticClass: "text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            }, [e._v(" This demo is using "), a("br", {
                staticClass: "xl:hidden"
            }), a("a", {
                staticClass: "text-indigo-600 underline hover:text-indigo-500",
                attrs: {
                    target: "_blank",
                    href: "https://tailwindcss.com"
                }
            }, [e._v(" Tailwind CSS ")])]), a("p", {
                staticClass: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            }, [e._v(" All the code present here is part of a free sample from "), a("a", {
                staticClass: "text-indigo-600 underline hover:text-indigo-500",
                attrs: {
                    href: "https://tailwindui.com"
                }
            }, [e._v(" Tailwind UI ")]), e._v(" but, you don't need it. If you want to add "), a("b", [e._v("Tailwind UI ")]), e._v(" check the instructions on "), a("a", {
                staticClass: "text-indigo-600 underline hover:text-indigo-500",
                attrs: {
                    href: "https://github.com/posva/vite-tailwind-starter/tree/master#vite--tailwind-css-starter"
                }
            }, [a("code", [e._v("README")])]), e._v(". It only takes two steps to add it 🙂. ")]), a("div", {
                staticClass: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            }, [a("div", {
                staticClass: "rounded-md shadow"
            }, [a("a", {
                staticClass: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary-500 hover:bg-primary-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10",
                attrs: {
                    href: "#"
                }
            }, [e._v(" Get started ")])])])])])])
        }
        ]
          , Wu = {}
          , Gu = Wu
          , Qu = Object(Q["a"])(Gu, Uu, Hu, !1, null, null, null)
          , Ku = Qu.exports
          , Xu = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("default-fill-height", {
                staticClass: "bg-gray-200 pt-32 pb-8",
                attrs: {
                    id: "verify-visas"
                }
            }, [e.isLoadingVisa ? a("loader", {
                attrs: {
                    loading: e.isLoadingVisa,
                    size: "1.5rem",
                    margin: "4px"
                }
            }) : e.visa ? a("tapered-section", {
                staticClass: "px-4"
            }, [a("article", {
                staticClass: "border rounded-md border-gray-400 p-4 md:p-8 bg-white"
            }, [a("section", {
                staticClass: "flex flex-wrap"
            }, [a("header", {
                staticClass: "w-full mb-4"
            }, [a("h2", {
                staticClass: "text-center"
            }, [e._v("TË DHËNAT E VISËS | VISA DATA")])]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "E VLEFSHME PËR | VALID FOR | VALABLE POUR",
                value: e.visa.valid_for
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "NGA | FROM | DU",
                value: e.visa.start_date
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "DERI | UNTIL | AU",
                value: e.visa.end_date
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "TIPI VIZËS | TYPE OF VISA | TYPE DE VISA",
                value: e.visa.visa_type
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "NUMRI I HYRJEVE | NUMBER OF ENTRIES | NOMBRE D'ENTREES",
                value: e.visa.number_of_entries + ""
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "AFATI I QËNDRIMIT | DURATION OF STAY | DUREE DE SEJOUR",
                value: e.visa.duration_of_stay + " " + e.visa.duration_of_stay_unit
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "LËSHUAR NË | ISSUED IN | DELIVERE A",
                value: e.visa.issued_in
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "MË | ON | LE",
                value: e.visa.issued_on
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "NUMRI I PASAPORTËS | NUMBER OF PASSPORT | NUMERO DE PASSEPORT",
                value: e.visa.applicant_passport_number
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "MBIEMËR, EMËR | SURNAME, NAME | NOM, PRENOM",
                value: e.visa.applicant_last_name + ", " + e.visa.applicant_first_name
            }, !1))], 1)]), a("div", {
                staticClass: "p-2 w-full md:w-1/2"
            }, [a("div", {
                staticClass: "h-full flex flex-col flex-wrap p-2 pb-0 justify-end"
            }, [a("text-input", e._b({
                tag: "component",
                staticClass: "w-full"
            }, "component", {
                disabled: !0,
                type: "input",
                label: "SHËNIME | REMARKS | REMARQUES",
                value: e.visa.remarks
            }, !1))], 1)]), a("div", {
                staticClass: "w-full"
            }, [a("img", {
                attrs: {
                    src: e.visa.base64Img
                }
            })])])])]) : e.noVisa ? a("tapered-section", {
                staticClass: "px-4"
            }, [a("article", {
                staticClass: "border rounded-md border-gray-400 p-4 md:p-8 bg-white"
            }, [a("section", {
                staticClass: "flex flex-wrap"
            }, [a("header", {
                staticClass: "w-full mb-4"
            }, [a("h2", {
                staticClass: "text-center text-red-700"
            }, [e._v("NUK KA TË DHËNA | NO DATA")])])])])]) : e._e()], 1)
        }
          , Yu = []
          , Ju = {
            beforeRouteLeave: function(e, t, a) {
                this.dispatchDismissFlash(),
                a()
            },
            data: function() {
                return {
                    uuid: null,
                    visa: null,
                    isLoadingVisa: !1,
                    noVisa: !1
                }
            },
            methods: Object(o["a"])(Object(o["a"])({
                scrollToResponsive: Tn
            }, Object(f["b"])(k, {
                dispatchShowFlash: P.show,
                dispatchDismissFlash: P.dismiss
            })), {}, {
                handleErrorResponse: function(e) {
                    var t = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    a.t0 = e.response.status,
                                    a.next = 404 === a.t0 ? 3 : 403 === a.t0 ? 6 : 9;
                                    break;
                                case 3:
                                    return a.next = 5,
                                    t.$router.push({
                                        name: "Home"
                                    });
                                case 5:
                                    return a.abrupt("return", a.sent);
                                case 6:
                                    return a.next = 8,
                                    t.$router.replace({
                                        name: "Home"
                                    });
                                case 8:
                                    return a.abrupt("return", a.sent);
                                case 9:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadVisa: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    e.isLoadingVisa = !0,
                                    t.next = 4,
                                    vu.verify(e.uuid);
                                case 4:
                                    a = t.sent,
                                    i = a.data,
                                    e.visa = i.data.visa,
                                    e.isLoadingVisa = !1,
                                    t.next = 16;
                                    break;
                                case 10:
                                    return t.prev = 10,
                                    t.t0 = t["catch"](0),
                                    t.next = 14,
                                    e.handleErrorResponse(t.t0);
                                case 14:
                                    e.isLoadingVisa = !1,
                                    e.noVisa = !0;
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 10]])
                    }
                    )))()
                }
            }),
            mounted: function() {
                var e = this;
                return Object(h["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return e.uuid = e.$route.params.uuid,
                                t.next = 3,
                                e.loadVisa();
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , Zu = Ju
          , ep = Object(Q["a"])(Zu, Xu, Yu, !1, null, null, null)
          , tp = ep.exports;
        m["default"].use(Ti["a"]);
        var ap = [{
            path: "/",
            name: "Home",
            component: Pa,
            meta: {
                layout: "default"
            }
        }, {
            path: "/sign-in",
            name: "Login",
            component: gt,
            props: function(e) {
                return {
                    redirectToOnLogin: e.query.redirect
                }
            },
            meta: {
                layout: "default",
                title: "login",
                guestOnly: !0
            }
        }, {
            path: "/register",
            name: "Register",
            component: ca,
            meta: {
                layout: "default",
                title: "register",
                guestOnly: !0
            }
        }, {
            path: "/apply",
            name: "Apply",
            component: gn,
            meta: {
                layout: "default",
                title: "apply"
            }
        }, {
            path: "/create-application",
            name: "CreateApplicationRedirecter",
            component: il,
            props: function(e) {
                return {
                    visaTypeId: e.query.visaTypeId
                }
            },
            meta: {
                layout: "default",
                authOnly: !0
            }
        }, {
            path: "/profile",
            name: "Profile",
            component: Ko,
            meta: {
                layout: "default",
                title: "profile",
                authOnly: !0
            }
        }, {
            path: "/applications",
            name: "Applications",
            component: Fo,
            props: function(e) {
                return {
                    scrollToTrackingNumber: e.query.trackingNumber
                }
            },
            meta: {
                layout: "default",
                title: "applications",
                authOnly: !0
            }
        }, {
            path: "/applications/:applicationId",
            name: "Questionary",
            component: Zs,
            props: function(e) {
                return {
                    applicationId: e.params.applicationId
                }
            },
            meta: {
                layout: "default",
                title: "questionary",
                authOnly: !0
            }
        }, {
            path: "/applications/:applicationId/payment",
            name: "Payment",
            component: Hl,
            props: function(e) {
                return {
                    applicationId: e.params.applicationId
                }
            },
            meta: {
                layout: "default",
                title: "payment",
                authOnly: !0
            }
        }, {
            path: "/applications/:applicationId/appeal",
            name: "Appeal",
            component: iu,
            props: function(e) {
                return {
                    applicationId: e.params.applicationId
                }
            },
            meta: {
                layout: "default",
                title: "appeal",
                authOnly: !0
            }
        }, {
            path: "/track",
            name: "Track",
            component: Zl,
            props: function(e) {
                return {
                    preFilledTrackingNumber: e.query.trackingNumber
                }
            },
            meta: {
                layout: "default",
                title: "track"
            }
        }, {
            path: "/verify",
            name: "Verify",
            component: oc,
            meta: {
                layout: "default",
                title: "verify"
            }
        }, {
            path: "/download-visa",
            name: "DownloadVisa",
            component: hc,
            props: function(e) {
                return {
                    visaUuid: e.query.uuid
                }
            },
            meta: {
                layout: "default",
                title: "download-visa"
            }
        }, {
            path: "/visas/:uuid/verify",
            name: "ScannedQrVisa",
            component: tp,
            props: function(e) {
                return {
                    visaUuid: e.query.uuid
                }
            },
            meta: {
                layout: "default"
            }
        }, {
            path: "/about",
            component: Ku,
            meta: {
                layout: "default",
                title: "about"
            }
        }, {
            path: "/woops",
            name: "SomethingWentWrong",
            component: co,
            meta: {
                layout: "default"
            }
        }, {
            name: "NotFoud",
            path: "/:path(.*)",
            component: xo,
            meta: {
                layout: "default"
            }
        }]
          , ip = new Ti["a"]({
            mode: "history",
            base: "/",
            scrollBehavior: Lu,
            routes: ap
        });
        ip.beforeEach(Bu);
        var np = ip
          , rp = {
            classes: {
                table: "w-full divide-y-4 md:divide-y divide-gray-300 shadow-sm border-gray-200 border",
                thead: "",
                theadTr: "",
                theadTh: "px-3 py-2 font-semibold text-left bg-gray-100 border-b",
                tbody: "bg-white divide-y divide-gray-100",
                tr: "",
                td: "px-3 py-2",
                tfoot: "",
                tfootTr: "",
                tfootTd: ""
            }
        }
          , sp = {
            fixedClasses: {
                navigator: "flex",
                navigatorViewButton: "flex items-center",
                navigatorViewButtonIcon: "flex-shrink-0 h-5 w-5",
                navigatorViewButtonBackIcon: "flex-shrink-0 h-5 w-5",
                navigatorLabel: "flex items-center py-1",
                navigatorPrevButtonIcon: "h-6 w-6 inline-flex",
                navigatorNextButtonIcon: "h-6 w-6 inline-flex",
                inputWrapper: "relative",
                viewGroup: "inline-flex flex-wrap",
                view: "w-64",
                calendarDaysWrapper: "grid grid-cols-7",
                calendarHeaderWrapper: "grid grid-cols-7",
                monthWrapper: "grid grid-cols-4",
                yearWrapper: "grid grid-cols-4",
                clearButton: "flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6",
                clearButtonIcon: "fill-current h-3 w-3"
            },
            classes: {
                wrapper: "flex flex-col",
                dropdownWrapper: "relative z-10",
                dropdown: "origin-top md:origin-top-left absolute rounded-md shadow bg-white overflow-hidden mt-1",
                enterClass: "",
                enterActiveClass: "transition ease-out duration-100 transform opacity-0 scale-95",
                enterToClass: "transform opacity-100 scale-100",
                leaveClass: "transition ease-in transform opacity-100 scale-100",
                leaveActiveClass: "",
                leaveToClass: "transform opacity-0 scale-95 duration-75",
                inlineWrapper: "",
                inlineViews: "rounded-md bg-white border mt-1 inline-flex",
                inputWrapper: "",
                input: "block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 border-gray-400 rounded-md focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:ring-opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed",
                clearButton: "group hover:bg-secondary-100 rounded-md transition duration-100 ease-in-out text-gray-600",
                clearButtonIcon: "group-hover:text-secondary-500",
                viewGroup: "",
                view: "",
                navigator: "pt-2 px-3",
                navigatorViewButton: "transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-secondary-100",
                navigatorViewButtonIcon: "fill-current text-gray-400",
                navigatorViewButtonBackIcon: "fill-current text-gray-400",
                navigatorViewButtonMonth: "text-gray-700 font-semibold",
                navigatorViewButtonYear: "text-gray-500 ml-1",
                navigatorViewButtonYearRange: "text-gray-500 ml-1",
                navigatorLabel: "py-1",
                navigatorLabelMonth: "text-gray-700 font-semibold",
                navigatorLabelYear: "text-gray-500 ml-1",
                navigatorPrevButton: "group transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-secondary-100 rounded-full p-1 ml-2 ml-auto disabled:bg-gray-100 disabled:cursor-not-allowed",
                navigatorNextButton: "group transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-secondary-100 rounded-full p-1 -mr-1 disabled:bg-gray-100 disabled:cursor-not-allowed",
                navigatorPrevButtonIcon: "text-gray-400 disabled:text-gray-400 group-hover:text-secondary-500",
                navigatorNextButtonIcon: "text-gray-400 disabled:text-gray-400 group-hover:text-secondary-500",
                calendarWrapper: "px-3 pt-2",
                calendarHeaderWrapper: "",
                calendarHeaderWeekDay: "uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center",
                calendarDaysWrapper: "",
                calendarDaysDayWrapper: "w-full h-8 flex flex-shrink-0 items-center",
                otherMonthDay: "text-sm rounded-full w-8 h-8 mx-auto hover:bg-secondary-100 text-secondary-300 disabled:text-gray-400 disabled:cursor-not-allowed",
                emptyDay: "",
                inRangeFirstDay: "text-sm bg-secondary-500 text-white w-full h-8 rounded-l-full",
                inRangeLastDay: "text-sm bg-secondary-500 text-white w-full h-8 rounded-r-full",
                inRangeDay: "text-sm bg-secondary-200 w-full h-8 disabled:text-gray-400 disabled:cursor-not-allowed",
                selectedDay: "text-sm rounded-full w-8 h-8 mx-auto bg-secondary-500 text-white disabled:text-gray-400 disabled:cursor-not-allowed",
                activeDay: "text-sm rounded-full bg-secondary-100 w-8 h-8 mx-auto disabled:text-gray-400 disabled:cursor-not-allowed",
                highlightedDay: "text-sm rounded-full bg-secondary-200 w-8 h-8 mx-auto disabled:text-gray-400 disabled:cursor-not-allowed",
                day: "text-sm rounded-full w-8 h-8 mx-auto hover:bg-secondary-100 disabled:text-gray-400 disabled:cursor-not-allowed",
                today: "text-sm rounded-full w-8 h-8 mx-auto hover:bg-secondary-100 disabled:text-gray-400 disabled:cursor-not-allowed border border-secondary-500",
                monthWrapper: "px-3 pt-2",
                selectedMonth: "text-sm rounded w-full h-12 mx-auto bg-secondary-500 text-white",
                activeMonth: "text-sm rounded w-full h-12 mx-auto bg-secondary-100",
                month: "text-sm rounded w-full h-12 mx-auto hover:bg-secondary-100",
                yearWrapper: "px-3 pt-2",
                year: "text-sm rounded w-full h-12 mx-auto hover:bg-secondary-100",
                selectedYear: "text-sm rounded w-full h-12 mx-auto bg-secondary-500 text-white",
                activeYear: "text-sm rounded w-full h-12 mx-auto bg-secondary-100"
            },
            variants: {
                error: {
                    input: "block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-yellow-500 rounded-md focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:ring-opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed",
                    clearButton: "group hover:bg-yellow-200 rounded-md transition duration-100 ease-in-out text-gray-600",
                    clearButtonIcon: "group-hover:text-yellow-500"
                }
            }
        }
          , op = {};
        function lp(e) {
            var t = document.querySelector(e);
            t.classList.add("animate-wiggle-once")
        }
        op.install = function(e, t) {
            e.prototype.$wiggle = function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (e)
                    if (t && t.delay && !a && (a = t.delay),
                    a)
                        var i = setTimeout((function() {
                            lp(e),
                            clearTimeout(i)
                        }
                        ), a);
                    else
                        lp(e)
            }
        }
        ;
        var cp = op
          , up = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("navbar"), a("e-title"), a("vuex-flash"), e._t("default"), a("e-footer")], 2)
        }
          , pp = []
          , dp = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("nav", {
                staticClass: "bg-primary-900 sticky top-0 z-30",
                attrs: {
                    id: "navbar"
                }
            }, [a("tapered-section", {
                staticClass: "flex flex-wrap items-center"
            }, [a("div", {
                staticClass: "flex w-full md:w-auto p-2 sm:px-0 md:items-center"
            }, [a("div", {
                staticClass: "mr-auto md:mr-0 flex items-center"
            }, [a("div", {
                staticClass: "flex-shrink-0"
            }, [a("router-link", {
                attrs: {
                    to: {
                        name: "Home"
                    }
                },
                nativeOn: {
                    click: function(t) {
                        return e.$emit("navigate")
                    }
                }
            }, [a("img", {
                staticClass: "h-8 w-56",
                attrs: {
                    src: "/img/logos/main.png",
                    alt: "Workflow logo"
                }
            })])], 1)]), a("div", {
                staticClass: "ml-auto flex md:hidden"
            }, [a("navbar-button", {
                attrs: {
                    "show-collapse": e.showMenus
                },
                on: {
                    click: function(t) {
                        e.showMenus = !e.showMenus
                    }
                }
            })], 1)]), a("div", {
                staticClass: "w-full md:flex md:flex-row md:items-center md:w-auto md:ml-auto",
                class: e.showMenus ? "flex flex-col" : "hidden"
            }, [e.isLoggedIn ? a("user-profile") : a("login-or-register", {
                on: {
                    navigate: function(t) {
                        e.showMenus = !1
                    }
                }
            }), a("locale-select", {
                staticClass: "m-4 md:my-2 md:mr-0 md:ml-4"
            })], 1)])], 1)
        }
          , mp = []
          , fp = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "inline-flex w-full"
            }, [a("inline-user-profile", {
                staticClass: "md:hidden",
                attrs: {
                    user: e.user
                },
                on: {
                    "sign-out": e.logout
                }
            }), a("notifications", {
                staticClass: "hidden md:block"
            }), a("dropdown-user-profile", {
                staticClass: "hidden md:block",
                attrs: {
                    user: e.user
                },
                on: {
                    "sign-out": e.logout
                }
            })], 1)
        }
          , hp = []
          , gp = {
            components: {
                InlineUserProfile: Jt,
                DropdownUserProfile: Ut,
                Notifications: St
            },
            computed: Object(o["a"])({}, Object(f["d"])(g, ["user"])),
            methods: Object(o["a"])(Object(o["a"])({}, Object(f["b"])(g, {
                dispatchSignOut: y.signOut,
                dispatchForceSignOut: y.forceSignOut
            })), {}, {
                logout: function() {
                    var e = this;
                    return Object(h["a"])(regeneratorRuntime.mark((function t() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.dispatchSignOut();
                                case 3:
                                    t.next = 9;
                                    break;
                                case 5:
                                    return t.prev = 5,
                                    t.t0 = t["catch"](0),
                                    t.next = 9,
                                    e.dispatchForceSignOut();
                                case 9:
                                    a = e.$route.matched.some((function(e) {
                                        var t = e.name;
                                        return "Home" === t
                                    }
                                    )),
                                    i = e.$route.meta.authOnly,
                                    !a && i && e.$router.push({
                                        name: "Home"
                                    });
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 5]])
                    }
                    )))()
                }
            })
        }
          , vp = gp
          , yp = Object(Q["a"])(vp, fp, hp, !1, null, null, null)
          , bp = yp.exports
          , xp = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                staticClass: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white",
                on: {
                    click: function(t) {
                        return e.$emit("click")
                    }
                }
            }, [a("expand", {
                class: e.showCollapse ? "hidden" : ""
            }), a("collapse", {
                class: e.showCollapse ? "" : "hidden"
            })], 1)
        }
          , wp = []
          , kp = function(e, t) {
            var a = t._c;
            return a("svg", {
                staticClass: "block h-6 w-6",
                class: [t.data.class, t.data.staticClass],
                attrs: {
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                }
            })])
        }
          , Cp = []
          , Pp = {}
          , $p = Pp
          , _p = Object(Q["a"])($p, kp, Cp, !0, null, null, null)
          , jp = _p.exports
          , Ap = function(e, t) {
            var a = t._c;
            return a("svg", {
                staticClass: "h-6 w-6",
                class: [t.data.class, t.data.staticClass],
                attrs: {
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                }
            })])
        }
          , Op = []
          , Sp = {}
          , Ip = Sp
          , Np = Object(Q["a"])(Ip, Ap, Op, !0, null, null, null)
          , Rp = Np.exports
          , Dp = {
            components: {
                Expand: jp,
                Collapse: Rp
            },
            props: {
                showCollapse: {
                    type: Boolean,
                    required: !0
                }
            }
        }
          , Tp = Dp
          , Ep = Object(Q["a"])(Tp, xp, wp, !1, null, null, null)
          , qp = Ep.exports
          , zp = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "flex border rounded-md border-secondary-500"
            }, [a("button", {
                staticClass: "rounded-l-md flex-1 font-bold md:px-2 md:font-normal",
                class: e.isEn ? "text-white bg-secondary-500" : " text-secondary-500 hover:text-white hover:bg-secondary-900",
                on: {
                    click: e.changeToEn
                }
            }, [e._v(" EN ")]), a("button", {
                staticClass: "rounded-r-md flex-1 font-bold md:px-2 md:font-normal",
                class: e.isAl ? "text-white bg-secondary-500" : " text-secondary-500 hover:text-white hover:bg-secondary-900",
                on: {
                    click: e.changeToAl
                }
            }, [e._v(" AL ")])])
        }
          , Bp = []
          , Vp = {
            methods: {
                changeToEn: function() {
                    this.$i18n.locale = "en",
                    localStorage.setItem("locale", "en")
                },
                changeToAl: function() {
                    this.$i18n.locale = "al",
                    localStorage.setItem("locale", "al")
                }
            },
            computed: {
                isEn: function() {
                    return "en" === this.$i18n.locale
                },
                isAl: function() {
                    return "al" === this.$i18n.locale
                }
            }
        }
          , Fp = Vp
          , Mp = Object(Q["a"])(Fp, zp, Bp, !1, null, null, null)
          , Lp = Mp.exports
          , Up = {
            components: {
                UserProfile: bp,
                NavbarButton: qp,
                TaperedSection: ne,
                LocaleSelect: Lp,
                LoginOrRegister: at
            },
            data: function() {
                return {
                    showMenus: !1
                }
            },
            computed: Object(o["a"])({}, Object(f["c"])(g, ["isLoggedIn"]))
        }
          , Hp = Up
          , Wp = Object(Q["a"])(Hp, dp, mp, !1, null, null, null)
          , Gp = Wp.exports
          , Qp = {
            components: {
                Navbar: Gp,
                EFooter: X,
                ETitle: Pn
            }
        }
          , Kp = Qp
          , Xp = Object(Q["a"])(Kp, up, pp, !1, null, null, null)
          , Yp = Xp.exports
          , Jp = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.label ? a("label", {
                staticClass: "block mb-1 whitespace-nowrap",
                class: e.dynamicLabelClass,
                attrs: {
                    for: e.id
                }
            }, [e._v(" " + e._s(e.label) + " ")]) : e._e(), a("input", e._b({
                ref: "input",
                staticClass: "appearance-none relative block border rounded-md border-gray-400 px-3 py-2 w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 focus:z-10",
                class: e.dynamicInputClass,
                attrs: {
                    id: e.id,
                    type: e.type
                },
                domProps: {
                    value: e.value
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t.target.value)
                    },
                    blur: function(t) {
                        return e.$emit("blur")
                    }
                }
            }, "input", e.$attrs, !1)), e.error ? a("div", {
                staticClass: "leading-none text-yellow-500"
            }, [e._v(e._s(e.error))]) : e._e()])
        }
          , Zp = []
          , ed = {
            inheritAttrs: !1,
            props: {
                id: {
                    type: String,
                    default: function() {
                        return "text-input-".concat(Object(yc["a"])())
                    }
                },
                type: {
                    type: String,
                    default: "text"
                },
                value: String,
                label: [String, void 0],
                labelClass: [String, Object, void 0],
                inputClass: [String, Object, void 0],
                error: [String, void 0],
                mb: {
                    type: Number,
                    default: 4
                }
            },
            computed: {
                dynamicInputClass: function() {
                    return "object" === Object(T["a"])(this.inputClass) ? Object(o["a"])(Object(d["a"])({
                        "has-error": this.error
                    }, "mb-".concat(this.mb), !this.error), this.inputClass) : "".concat(this.error ? "has-error" : "mb-".concat(this.mb), " ").concat(this.inputClass)
                },
                dynamicLabelClass: function() {
                    return "object" === Object(T["a"])(this.labelClass) ? Object(o["a"])({
                        "has-error": this.error
                    }, this.labelClass) : "".concat(this.error ? "has-error" : "", " ").concat(this.labelClass)
                }
            },
            methods: {
                focus: function() {
                    this.$refs.input.focus()
                },
                select: function() {
                    this.$refs.input.select()
                },
                setSelectionRange: function(e, t) {
                    this.$refs.input.setSelectionRange(e, t)
                }
            }
        }
          , td = ed
          , ad = Object(Q["a"])(td, Jp, Zp, !1, null, null, null)
          , id = ad.exports
          , nd = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.label ? a("label", {
                staticClass: "block mb-1 whitespace-nowrap",
                class: e.dynamicLabelClass,
                attrs: {
                    for: e.id
                }
            }, [e._v(" " + e._s(e.label) + " ")]) : e._e(), a("v-select", e._b({
                ref: "input",
                class: {
                    "has-error": e.error,
                    "mb-4": !e.error
                },
                attrs: {
                    value: e.value,
                    id: e.id,
                    loading: e.loading,
                    options: e.options,
                    label: e.labelTarget,
                    "get-option-label": e.getOptionLabel,
                    "get-option-key": e.getOptionKey,
                    reduce: e.reduce
                },
                on: {
                    input: e.onInput,
                    search: function(t) {
                        return e.$emit("search", arguments[0], arguments[1])
                    },
                    close: function(t) {
                        return e.$emit("close")
                    }
                },
                scopedSlots: e._u([{
                    key: "no-options",
                    fn: function(t) {
                        var a = t.search
                          , i = t.searching
                          , n = t.loading;
                        return [e._t("no-options", null, {
                            search: a,
                            searching: i,
                            loading: n
                        })]
                    }
                }], null, !0)
            }, "v-select", e.$attrs, !1)), e.error ? a("div", {
                staticClass: "leading-none text-yellow-500"
            }, [e._v(e._s(e.error))]) : e._e()], 1)
        }
          , rd = []
          , sd = a("4a7a")
          , od = a.n(sd)
          , ld = (a("6dfc"),
        {
            components: {
                VSelect: od.a
            },
            inheritAttrs: !1,
            props: {
                id: {
                    type: String,
                    default: function() {
                        return "select-input-".concat(Object(yc["a"])())
                    }
                },
                value: [String, Number, Boolean, Object],
                reduce: {
                    type: Function,
                    default: function(e) {
                        return e
                    }
                },
                loading: Boolean,
                options: [Array],
                label: String,
                labelClass: [String, Object, void 0],
                labelTarget: {
                    type: String,
                    default: "label"
                },
                getOptionLabel: {
                    type: Function,
                    default: function(e) {
                        return e
                    }
                },
                getOptionKey: {
                    type: Function,
                    default: function(e) {
                        if ("object" === Object(T["a"])(e) && e.id)
                            return e.id;
                        try {
                            return JSON.stringify(e)
                        } catch (t) {
                            return console.warn(t.getMessage()),
                            null
                        }
                    }
                },
                error: String
            },
            computed: {
                dynamicLabelClass: function() {
                    return "object" === Object(T["a"])(this.labelClass) ? Object(o["a"])({
                        "has-error": this.error
                    }, this.labelClass) : "".concat(this.error ? "has-error" : "", " ").concat(this.labelClass)
                }
            },
            methods: {
                focus: function() {
                    this.$refs.input.focus()
                },
                select: function() {
                    this.$refs.input.select()
                },
                onInput: function(e) {
                    this.$emit("input", e),
                    e || this.$emit("clear")
                }
            }
        })
          , cd = ld
          , ud = (a("ae66"),
        Object(Q["a"])(cd, nd, rd, !1, null, null, null))
          , pd = ud.exports
          , dd = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.label ? a("label", {
                staticClass: "block mb-1 whitespace-nowrap",
                class: e.dynamicLabelClass,
                attrs: {
                    for: e.id
                }
            }, [e._v(" " + e._s(e.label) + " ")]) : e._e(), a("t-datepicker", {
                ref: "datepicker",
                class: e.dynamicInputClass,
                attrs: {
                    variant: e.error ? "error" : void 0,
                    "week-start": 1,
                    lang: e.$i18n.locale,
                    "date-format": e.dateFormat,
                    "user-format": e.userFormat,
                    "initial-view": e.initialView,
                    clearable: !e.disabled,
                    disabled: e.disabled,
                    "min-date": e.minDate,
                    "max-date": e.maxDate,
                    "disabled-dates": e.disabledDates
                },
                on: {
                    shown: function(t) {
                        e.calendarIsShown = !0
                    },
                    hidden: function(t) {
                        e.calendarIsShown = !1
                    },
                    blur: function(t) {
                        return e.$emit("blur")
                    }
                },
                model: {
                    value: e.date,
                    callback: function(t) {
                        e.date = t
                    },
                    expression: "date"
                }
            }), e.error ? a("div", {
                staticClass: "leading-none text-yellow-500"
            }, [e._v(e._s(e.error))]) : e._e()], 1)
        }
          , md = []
          , fd = {
            props: {
                id: {
                    type: String,
                    default: function() {
                        return "date-input-".concat(Object(yc["a"])())
                    }
                },
                dateFormat: {
                    type: String,
                    default: "Y-m-d"
                },
                userFormat: {
                    type: String,
                    default: "j F Y"
                },
                disabled: [Boolean],
                value: String,
                minDate: [Date, String],
                maxDate: [Date, String],
                disabledDates: [Date, Array, Function, String],
                initialView: [String],
                label: [String, void 0],
                labelClass: [String, Object, void 0],
                inputClass: [String, Object, void 0],
                error: [String, void 0],
                mb: {
                    type: Number,
                    default: 4
                }
            },
            data: function() {
                return {
                    calendarIsShown: !1
                }
            },
            computed: {
                dynamicInputClass: function() {
                    return "object" === Object(T["a"])(this.inputClass) ? Object(o["a"])(Object(d["a"])({
                        "has-error": this.error
                    }, "mb-".concat(this.mb), !this.error), this.inputClass) : "".concat(this.error ? "has-error" : "mb-".concat(this.mb), " ").concat(this.inputClass)
                },
                dynamicLabelClass: function() {
                    return "object" === Object(T["a"])(this.labelClass) ? Object(o["a"])({
                        "has-error": this.error
                    }, this.labelClass) : "".concat(this.error ? "has-error" : "", " ").concat(this.labelClass)
                },
                date: {
                    get: function() {
                        return this.value
                    },
                    set: function(e) {
                        e !== this.value && this.$emit("input", e)
                    }
                }
            },
            mounted: function() {
                var e = this;
                this.$refs.datepicker.$refs.trigger.$on("clear", (function() {
                    e.calendarIsShown && e.$refs.datepicker.doHide(),
                    e.$nextTick((function() {
                        return e.$emit("clear")
                    }
                    ))
                }
                ))
            }
        }
          , hd = fd
          , gd = Object(Q["a"])(hd, dd, md, !1, null, null, null)
          , vd = gd.exports
          , yd = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", {
                staticClass: "relative flex justify-center px-4"
            }, [a("div", {
                staticClass: "w-full absolute top-8 px-4 text-center"
            }, [e.message ? a("div", {
                staticClass: "relative px-10 py-4 rounded-md border-2 text-center",
                class: e.message.class
            }, [Array.isArray(e.message.text) ? e._l(e.message.text, (function(t, i) {
                return a("span", {
                    key: t,
                    class: e.message.textClass ? e.message.textClass[i] : ""
                }, [e._v(" " + e._s(e.$t(t, e.message.textParam ? e.message.textParam[i] : void 0)) + " ")])
            }
            )) : [a("span", {
                class: e.message.textClass
            }, [e._v(" " + e._s(e.$t(e.message.text, e.message.textParam)) + " ")])], a("span", {
                staticClass: "dismiss-icon-position px-2 text-gray-500 font-bold cursor-pointer",
                class: e.message.iconClass,
                on: {
                    click: e.dispatchDismissFlash
                }
            }, [e._v(" x ")])], 2) : e._e()])])
        }
          , bd = []
          , xd = {
            computed: Object(o["a"])({}, Object(f["d"])(k, ["message"])),
            methods: Object(o["a"])({}, Object(f["b"])(k, {
                dispatchDismissFlash: P.dismiss
            }))
        }
          , wd = xd
          , kd = (a("f274"),
        Object(Q["a"])(wd, yd, bd, !1, null, "1a6207a5", null))
          , Cd = kd.exports
          , Pd = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", e._g({
                staticClass: "flex justify-center items-center",
                attrs: {
                    disabled: e.isLoading
                }
            }, e.$listeners), [e.isLoading ? a("span", {
                staticClass: "inline-block"
            }, [a("font-awesome-icon", {
                staticClass: "fa-pulse mr-2",
                attrs: {
                    icon: "spinner"
                }
            })], 1) : e._e(), e._t("default")], 2)
        }
          , $d = []
          , _d = {
            props: {
                isLoading: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , jd = _d
          , Ad = Object(Q["a"])(jd, Pd, $d, !1, null, null, null)
          , Od = Ad.exports
          , Sd = a("9b1a")
          , Id = function(e, t) {
            var a = t._c;
            return a("div", {
                staticClass: "flex justify-center items-center w-full",
                class: [t.data.class, t.data.staticClass],
                style: {
                    height: t.props.height
                }
            }, [a("div", {
                staticClass: "inline-block"
            }, [a("sync-loader", {
                attrs: {
                    loading: t.props.loading,
                    color: t.props.color,
                    size: t.props.size,
                    margin: t.props.margin
                }
            })], 1)])
        }
          , Nd = []
          , Rd = {
            props: {
                loading: {
                    type: Boolean,
                    default: !1
                },
                color: {
                    type: String,
                    default: "#EE0000"
                },
                size: {
                    type: String,
                    default: "1rem"
                },
                margin: {
                    type: String,
                    default: "2px"
                },
                height: {
                    type: String,
                    default: "16rem"
                }
            }
        }
          , Dd = Rd
          , Td = Object(Q["a"])(Dd, Id, Nd, !0, null, null, null)
          , Ed = Td.exports
          , qd = a("a2c1")
          , zd = (a("845f"),
        a("4413"),
        a("ad3d"))
          , Bd = a("ecee")
          , Vd = a("c074")
          , Fd = a("b702");
        m["default"].component("font-awesome-icon", zd["a"]),
        Bd["c"].add(Vd["c"]),
        Bd["c"].add(Vd["j"]),
        Bd["c"].add(Vd["b"]),
        Bd["c"].add(Vd["a"]),
        Bd["c"].add(Vd["h"]),
        Bd["c"].add(Vd["o"]),
        Bd["c"].add(Vd["f"]),
        Bd["c"].add(Vd["d"]),
        Bd["c"].add(Vd["e"]),
        Bd["c"].add(Vd["g"]),
        Bd["c"].add(Vd["n"]),
        Bd["c"].add(Vd["m"]),
        Bd["c"].add(Fd["a"]),
        Bd["c"].add(Vd["l"]),
        Bd["c"].add(Vd["k"]),
        Bd["c"].add(Vd["i"]);
        a("f7aa");
        m["default"].use(bu.a),
        m["default"].use(wu.a),
        m["default"].use(cp),
        m["default"].use(Cu.a, {
            offset: -74
        });
        var Md = {
            "t-table": {
                component: Au.a,
                props: Object(o["a"])({}, rp)
            },
            "t-datepicker": {
                component: Su.a,
                props: Object(o["a"])(Object(o["a"])({}, sp), {}, {
                    locales: {
                        al: Iu["a"]
                    },
                    lang: cu.locale
                })
            }
        }
          , Ld = {
            confirmButtonColor: "#EE0000",
            cancelButtonColor: "#ECC94B"
        };
        m["default"].use(_u.a, Md),
        m["default"].use(Pu["default"], Ld),
        m["default"].component("default-layout", Yp),
        m["default"].component("tapered-section", ne),
        m["default"].component("default-fill-height", ut),
        m["default"].component("text-input", id),
        m["default"].component("select-input", pd),
        m["default"].component("file-input", Fc),
        m["default"].component("date-input", vd),
        m["default"].component("vuex-flash", Cd),
        m["default"].component("loading-button", Od),
        m["default"].component("sync-loader", Sd["a"]),
        m["default"].component("loader", Ed),
        m["default"].component("cropper", qd["a"]),
        m["default"].config.productionTip = !1,
        new m["default"]({
            i18n: cu,
            router: np,
            store: j,
            render: function(e) {
                return e(zu)
            }
        }).$mount("#app")
    },
    5821: function(e, t, a) {},
    "5cf1": function(e, t, a) {},
    6159: function(e, t) {
        e.exports = {
            functional: !0,
            render(e, t) {
                const {_c: a, _v: i, data: n, children: r=[]} = t
                  , {class: s, staticClass: o, style: l, staticStyle: c, attrs: u={}, ...p} = n;
                return a("svg", {
                    class: [s, o],
                    style: [l, c],
                    attrs: Object.assign({
                        "data-name": "Layer 1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1119.609 699"
                    }, u),
                    ...p
                }, r.concat([a("circle", {
                    attrs: {
                        cx: "292.609",
                        cy: "213",
                        r: "213",
                        fill: "#f2f2f2"
                    }
                }), a("path", {
                    attrs: {
                        d: "M0 51.142c0 77.498 48.618 140.209 108.7 140.209",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        d: "M108.7 191.35c0-78.368 54.256-141.783 121.304-141.783M39.384 58.168c0 73.614 31.003 133.183 69.317 133.183",
                        fill: "#e00"
                    }
                }), a("path", {
                    attrs: {
                        d: "M108.7 191.35c0-100.137 62.711-181.167 140.209-181.167",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        d: "M85.833 192.339s15.415-.475 20.061-3.783 23.713-7.258 24.866-1.953 23.167 26.388 5.762 26.529-40.439-2.711-45.076-5.536-5.613-15.257-5.613-15.257z",
                        fill: "#a8a8a8"
                    }
                }), a("path", {
                    attrs: {
                        d: "M136.833 211.285c-17.404.14-40.44-2.711-45.076-5.536-3.531-2.15-4.939-9.869-5.41-13.43-.325.014-.514.02-.514.02s.976 12.433 5.613 15.257 27.672 5.676 45.077 5.536c5.023-.04 6.759-1.828 6.663-4.476-.698 1.6-2.614 2.599-6.353 2.629z",
                        opacity: ".2"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "198.609",
                        cy: "424.5",
                        rx: "187",
                        ry: "25.44",
                        fill: "#3f3d56"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "198.609",
                        cy: "424.5",
                        rx: "157",
                        ry: "21.359",
                        opacity: ".1"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "836.609",
                        cy: "660.5",
                        rx: "283",
                        ry: "38.5",
                        fill: "#3f3d56"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "310.609",
                        cy: "645.5",
                        rx: "170",
                        ry: "23.127",
                        fill: "#3f3d56"
                    }
                }), a("path", {
                    attrs: {
                        d: "M462.61 626c90 23 263-30 282-90M309.61 259s130-36 138 80-107 149-17 172M184.011 537.283s39.073-10.82 41.477 24.045-32.16 44.783-5.11 51.695",
                        fill: "none",
                        stroke: "#2f2e41",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2"
                    }
                }), a("path", {
                    attrs: {
                        d: "M778.705 563.24l-7.878 50.295s-38.782 20.603-11.513 21.209 155.733 0 155.733 0 24.845 0-14.543-21.815l-7.878-52.719z",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        d: "M753.828 634.198c6.193-5.51 17-11.252 17-11.252l7.877-50.295 113.921.107 7.878 49.582c9.185 5.087 14.875 8.987 18.203 11.978 5.06-1.154 10.588-5.443-18.203-21.389l-7.878-52.719-113.921 3.03-7.878 50.295s-32.588 17.315-16.999 20.663z",
                        opacity: ".1"
                    }
                }), a("rect", {
                    attrs: {
                        x: "578.433",
                        y: "212.689",
                        width: "513.253",
                        height: "357.52",
                        rx: "18.046",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#3f3d56",
                        d: "M595.703 231.777h478.713v267.837H595.703z"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "835.059",
                        cy: "223.293",
                        r: "3.03",
                        fill: "#f2f2f2"
                    }
                }), a("path", {
                    attrs: {
                        d: "M1091.686 520.822v31.34a18.043 18.043 0 01-18.046 18.046H596.48a18.043 18.043 0 01-18.046-18.045v-31.34zM968.978 667.466v6.06h-326.01v-4.848l.449-1.212 8.035-21.815h310.86l6.666 21.815zM1094.437 661.534c-.594 2.539-2.836 5.217-7.902 7.75-18.179 9.09-55.143-2.424-55.143-2.424s-28.48-4.848-28.48-17.573a22.725 22.725 0 012.497-1.485c7.643-4.043 32.984-14.02 77.917.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        d: "M1094.437 661.534c-22.25 8.526-42.084 9.162-62.439-4.975-10.265-7.127-19.59-8.89-26.59-8.757 7.644-4.043 32.985-14.02 77.918.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z",
                        opacity: ".1"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "1066.538",
                        cy: "654.135",
                        rx: "7.878",
                        ry: "2.424",
                        fill: "#f2f2f2"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "835.059",
                        cy: "545.667",
                        r: "11.513",
                        fill: "#f2f2f2"
                    }
                }), a("path", {
                    attrs: {
                        opacity: ".1",
                        d: "M968.978 667.466v6.06h-326.01v-4.848l.449-1.212h325.561z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#2f2e41",
                        d: "M108.609 159h208v242h-208z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#3f3d56",
                        d: "M87.609 135h250v86h-250zM87.609 237h250v86h-250zM87.609 339h250v86h-250z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        opacity: ".4",
                        d: "M271.609 150h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        opacity: ".8",
                        d: "M294.609 150h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        d: "M317.609 150h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        opacity: ".4",
                        d: "M271.609 251h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        opacity: ".8",
                        d: "M294.609 251h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        d: "M317.609 251h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        opacity: ".4",
                        d: "M271.609 352h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        opacity: ".8",
                        d: "M294.609 352h16v16h-16z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e00",
                        d: "M317.609 352h16v16h-16z"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "316.609",
                        cy: "538",
                        r: "79",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#2f2e41",
                        d: "M280.609 600h24v43h-24zM328.609 600h24v43h-24z"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "300.609",
                        cy: "643.5",
                        rx: "20",
                        ry: "7.5",
                        fill: "#2f2e41"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "348.609",
                        cy: "642.5",
                        rx: "20",
                        ry: "7.5",
                        fill: "#2f2e41"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "318.609",
                        cy: "518",
                        r: "27",
                        fill: "#fff"
                    }
                }), a("circle", {
                    attrs: {
                        cx: "318.609",
                        cy: "518",
                        r: "9",
                        fill: "#3f3d56"
                    }
                }), a("path", {
                    attrs: {
                        d: "M239.976 464.532c-6.378-28.567 14.012-57.434 45.544-64.474s62.266 10.41 68.644 38.977-14.518 39.104-46.05 46.145-61.759 7.92-68.138-20.648z",
                        fill: "#e00"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "417.215",
                        cy: "611.344",
                        rx: "39.5",
                        ry: "12.4",
                        transform: "rotate(-23.171 156.408 637.654)",
                        fill: "#2f2e41"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "269.215",
                        cy: "664.344",
                        rx: "39.5",
                        ry: "12.4",
                        transform: "rotate(-23.171 8.408 690.654)",
                        fill: "#2f2e41"
                    }
                }), a("path", {
                    attrs: {
                        d: "M362.61 561c0 7.732-19.91 23-42 23s-43-14.268-43-22 20.908-6 43-6 42-2.732 42 5z",
                        fill: "#fff"
                    }
                })]))
            }
        }
    },
    "697e": function(e, t, a) {},
    "6c1f": function(e, t, a) {
        "use strict";
        a("09e9")
    },
    "73d0": function(e, t, a) {
        "use strict";
        a("5821")
    },
    "755e": function(e, t, a) {
        "use strict";
        a("0dea")
    },
    "7c94": function(e, t, a) {},
    "845f": function(e, t, a) {},
    "879e": function(e, t, a) {
        "use strict";
        a("5cf1")
    },
    "8a4f": function(e, t, a) {},
    9314: function(e, t, a) {},
    ac3e: function(e, t, a) {
        "use strict";
        a("f09e")
    },
    ae66: function(e, t, a) {
        "use strict";
        a("697e")
    },
    d2cb: function(e, t, a) {
        "use strict";
        a("9314")
    },
    d481: function(e, t, a) {},
    e58b: function(e, t, a) {
        "use strict";
        a("f983")
    },
    ef0b: function(e, t, a) {
        "use strict";
        a("8a4f")
    },
    f09e: function(e, t, a) {},
    f274: function(e, t, a) {
        "use strict";
        a("1e1f")
    },
    f822: function(e, t, a) {
        "use strict";
        a("7c94")
    },
    f983: function(e, t, a) {}
});
//# sourceMappingURL=app.ca28d86f.js.map
