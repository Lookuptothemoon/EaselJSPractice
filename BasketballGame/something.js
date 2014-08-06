/*! Lux Ahoy v1.0.0beta2 luxahoy.com | Luxurious Animals luxanimals.com */
function createMethod(e) {
    return function () {
        throw Error('The "' + e + "\" method is not available on the playback technology's API")
    }
}
(function (e) {
    function l() {
        var e = !1;
        if ("localStorage"in window)try {
            window.localStorage.setItem("_tmptest", "tmpval"), e = !0, window.localStorage.removeItem("_tmptest")
        } catch (t) {
        }
        if (e)try {
            window.localStorage && (n = window.localStorage, u = "localStorage")
        } catch (i) {
        } else if ("globalStorage"in window)try {
            window.globalStorage && (n = window.globalStorage[window.location.hostname], u = "globalStorage")
        } catch (s) {
        } else {
            r = document.createElement("link");
            if (!r.addBehavior) {
                r = null;
                return
            }
            r.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(r), r.load("jStorage");
            var o = "{}";
            try {
                o = r.getAttribute("jStorage")
            } catch (a) {
            }
            n.jStorage = o, u = "userDataBehavior"
        }
        c(), d()
    }

    function c() {
        if (n.jStorage)try {
            t = o(n.jStorage + "")
        } catch (e) {
            n.jStorage = "{}"
        } else n.jStorage = "{}";
        i = n.jStorage ? (n.jStorage + "").length : 0
    }

    function h() {
        try {
            n.jStorage = s(t), r && (r.setAttribute("jStorage", n.jStorage), r.save("jStorage")), i = n.jStorage ? (n.jStorage + "").length : 0
        } catch (e) {
        }
    }

    function p(e) {
        if (!e || typeof e != "string" && typeof e != "number")throw new TypeError("Key name must be string or numeric");
        if (e == "__jstorage_meta")throw new TypeError("Reserved key name");
        return!0
    }

    function d() {
        var e, n, r, i = Infinity, s = !1;
        clearTimeout(a);
        if (!t.__jstorage_meta || typeof t.__jstorage_meta.TTL != "object")return;
        e = +(new Date), r = t.__jstorage_meta.TTL;
        for (n in r)r.hasOwnProperty(n) && (r[n] > e ? r[n] < i && (i = r[n]) : (delete r[n], delete t[n], s = !0));
        i != Infinity && (a = setTimeout(d, i - e)), s && h()
    }

    if (!e || !(e.toJSON || Object.toJSON || window.JSON))throw Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");
    var t = {}, n = {jStorage: "{}"}, r = null, i = 0, s = e.toJSON || Object.toJSON || window.JSON && (JSON.encode || JSON.stringify), o = e.evalJSON || window.JSON && (JSON.decode || JSON.parse) || function (e) {
        return(e + "").evalJSON()
    }, u = !1, a, f = {isXML: function (e) {
        var t = (e ? e.ownerDocument || e : 0).documentElement;
        return t ? t.nodeName !== "HTML" : !1
    }, encode: function (e) {
        if (!this.isXML(e))return!1;
        try {
            return(new XMLSerializer).serializeToString(e)
        } catch (t) {
            try {
                return e.xml
            } catch (n) {
            }
        }
        return!1
    }, decode: function (e) {
        var t = "DOMParser"in window && (new DOMParser).parseFromString || window.ActiveXObject && function (e) {
            var t = new ActiveXObject("Microsoft.XMLDOM");
            return t.async = "false", t.loadXML(e), t
        }, n;
        return t ? (n = t.call("DOMParser"in window && new DOMParser || window, e, "text/xml"), this.isXML(n) ? n : !1) : !1
    }};
    e.jStorage = {version: "0.1.6.1", set: function (e, n) {
        return p(e), f.isXML(n) ? n = {_is_xml: !0, xml: f.encode(n)} : typeof n == "function" ? n = null : n && typeof n == "object" && (n = o(s(n))), t[e] = n, h(), n
    }, get: function (e, n) {
        return p(e), e in t ? t[e] && typeof t[e] == "object" && t[e]._is_xml && t[e]._is_xml ? f.decode(t[e].xml) : t[e] : typeof n == "undefined" ? null : n
    }, deleteKey: function (e) {
        return p(e), e in t ? (delete t[e], t.__jstorage_meta && typeof t.__jstorage_meta.TTL == "object" && e in t.__jstorage_meta.TTL && delete t.__jstorage_meta.TTL[e], h(), !0) : !1
    }, setTTL: function (e, n) {
        var r = +(new Date);
        return p(e), n = Number(n) || 0, e in t ? (t.__jstorage_meta || (t.__jstorage_meta = {}), t.__jstorage_meta.TTL || (t.__jstorage_meta.TTL = {}), n > 0 ? t.__jstorage_meta.TTL[e] = r + n : delete t.__jstorage_meta.TTL[e], h(), d(), !0) : !1
    }, flush: function () {
        return t = {}, h(), !0
    }, storageObj: function () {
        function e() {
        }

        return e.prototype = t, new e
    }, index: function () {
        var e = [], n;
        for (n in t)t.hasOwnProperty(n) && n != "__jstorage_meta" && e.push(n);
        return e
    }, storageSize: function () {
        return i
    }, currentBackend: function () {
        return u
    }, storageAvailable: function () {
        return!!u
    }, reInit: function () {
        var e, t;
        if (r && r.addBehavior) {
            e = document.createElement("link"), r.parentNode.replaceChild(e, r), r = e, r.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(r), r.load("jStorage"), t = "{}";
            try {
                t = r.getAttribute("jStorage")
            } catch (i) {
            }
            n.jStorage = t, u = "userDataBehavior"
        }
        c()
    }}, l()
})(window.jQuery || window.$), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function (e, t, n, r, i) {
    return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
}, easeInQuad: function (e, t, n, r, i) {
    return r * (t /= i) * t + n
}, easeOutQuad: function (e, t, n, r, i) {
    return-r * (t /= i) * (t - 2) + n
}, easeInOutQuad: function (e, t, n, r, i) {
    return(t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
}, easeInCubic: function (e, t, n, r, i) {
    return r * (t /= i) * t * t + n
}, easeOutCubic: function (e, t, n, r, i) {
    return r * ((t = t / i - 1) * t * t + 1) + n
}, easeInOutCubic: function (e, t, n, r, i) {
    return(t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
}, easeInQuart: function (e, t, n, r, i) {
    return r * (t /= i) * t * t * t + n
}, easeOutQuart: function (e, t, n, r, i) {
    return-r * ((t = t / i - 1) * t * t * t - 1) + n
}, easeInOutQuart: function (e, t, n, r, i) {
    return(t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
}, easeInQuint: function (e, t, n, r, i) {
    return r * (t /= i) * t * t * t * t + n
}, easeOutQuint: function (e, t, n, r, i) {
    return r * ((t = t / i - 1) * t * t * t * t + 1) + n
}, easeInOutQuint: function (e, t, n, r, i) {
    return(t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
}, easeInSine: function (e, t, n, r, i) {
    return-r * Math.cos(t / i * (Math.PI / 2)) + r + n
}, easeOutSine: function (e, t, n, r, i) {
    return r * Math.sin(t / i * (Math.PI / 2)) + n
}, easeInOutSine: function (e, t, n, r, i) {
    return-r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
}, easeInExpo: function (e, t, n, r, i) {
    return t === 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
}, easeOutExpo: function (e, t, n, r, i) {
    return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
}, easeInOutExpo: function (e, t, n, r, i) {
    return t === 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
}, easeInCirc: function (e, t, n, r, i) {
    return-r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
}, easeOutCirc: function (e, t, n, r, i) {
    return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
}, easeInOutCirc: function (e, t, n, r, i) {
    return(t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
}, easeInElastic: function (e, t, n, r, i) {
    var s = 1.70158, o = 0, u = r;
    return t === 0 ? n : (t /= i) === 1 ? n + r : (o || (o = i * .3), u < Math.abs(r) ? (u = r, s = o / 4) : s = o / (2 * Math.PI) * Math.asin(r / u), -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n)
}, easeOutElastic: function (e, t, n, r, i) {
    var s = 1.70158, o = 0, u = r;
    return t === 0 ? n : (t /= i) == 1 ? n + r : (o || (o = i * .3), u < Math.abs(r) ? (u = r, s = o / 4) : s = o / (2 * Math.PI) * Math.asin(r / u), u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n)
}, easeInOutElastic: function (e, t, n, r, i) {
    var s = 1.70158, o = 0, u = r;
    return t === 0 ? n : (t /= i / 2) == 2 ? n + r : (o || (o = i * .3 * 1.5), u < Math.abs(r) ? (u = r, s = o / 4) : s = o / (2 * Math.PI) * Math.asin(r / u), t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n)
}, easeInBack: function (e, t, n, r, i, s) {
    return s === undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
}, easeOutBack: function (e, t, n, r, i, s) {
    return s === undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
}, easeInOutBack: function (e, t, n, r, i, s) {
    return s === undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
}, easeInBounce: function (e, t, n, r, i) {
    return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
}, easeOutBounce: function (e, t, n, r, i) {
    return(t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
}, easeInOutBounce: function (e, t, n, r, i) {
    return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
}}), function (e) {
    function r(e) {
        if (e in t.style)return e;
        var n = ["Moz", "Webkit", "O", "ms"], r = e.charAt(0).toUpperCase() + e.substr(1);
        if (e in t.style)return e;
        for (var i = 0; i < n.length; ++i) {
            var s = n[i] + r;
            if (s in t.style)return s
        }
    }

    function i() {
        return t.style[n.transform] = "", t.style[n.transform] = "rotateY(90deg)", t.style[n.transform] !== ""
    }

    function f(e) {
        return typeof e == "string" && this.parse(e), this
    }

    function l(e, t, n) {
        t === !0 ? e.queue(n) : t ? e.queue(t, n) : n()
    }

    function c(t) {
        var n = [];
        return e.each(t, function (t) {
            t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = d(t), e.inArray(t, n) === -1 && n.push(t)
        }), n
    }

    function h(t, n, r, i) {
        var s = c(t);
        e.cssEase[r] && (r = e.cssEase[r]);
        var o = "" + m(n) + " " + r;
        parseInt(i, 10) > 0 && (o += " " + m(i));
        var u = [];
        return e.each(s, function (e, t) {
            u.push(t + " " + o)
        }), u.join(", ")
    }

    function p(t, r) {
        r || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = n.transform, e.cssHooks[t] = {get: function (n) {
            var r = e(n).css("transit:transform");
            return r.get(t)
        }, set: function (n, r) {
            var i = e(n).css("transit:transform");
            i.setFromString(t, r), e(n).css({"transit:transform": i})
        }}
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return"-" + e.toLowerCase()
        })
    }

    function v(e, t) {
        return typeof e == "string" && !e.match(/^[\-0-9\.]+$/) ? e : "" + e + t
    }

    function m(t) {
        var n = t;
        return e.fx.speeds[n] && (n = e.fx.speeds[n]), v(n, "ms")
    }

    e.transit = {version: "0.9.9", propertyMap: {marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding"}, enabled: !0, useTransitionEnd: !1};
    var t = document.createElement("div"), n = {}, s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = r("transition"), n.transitionDelay = r("transitionDelay"), n.transform = r("transform"), n.transformOrigin = r("transformOrigin"), n.transform3d = i();
    var o = {transition: "transitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd"}, u = n.transitionEnd = o[n.transition] || null;
    for (var a in n)n.hasOwnProperty(a) && typeof e.support[a] == "undefined" && (e.support[a] = n[a]);
    t = null, e.cssEase = {_default: "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"}, e.cssHooks["transit:transform"] = {get: function (t) {
        return e(t).data("transform") || new f
    }, set: function (t, r) {
        var i = r;
        i instanceof f || (i = new f(i)), n.transform === "WebkitTransform" && !s ? t.style[n.transform] = i.toString(!0) : t.style[n.transform] = i + "", e(t).data("transform", i)
    }}, e.cssHooks.transform = {set: e.cssHooks["transit:transform"].set}, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {get: function (e) {
        return e.style[n.transformOrigin]
    }, set: function (e, t) {
        e.style[n.transformOrigin] = t
    }}, e.cssHooks.transition = {get: function (e) {
        return e.style[n.transition]
    }, set: function (e, t) {
        e.style[n.transition] = t
    }}), p("scale"), p("translate"), p("rotate"), p("rotateX"), p("rotateY"), p("rotate3d"), p("perspective"), p("skewX"), p("skewY"), p("x", !0), p("y", !0), f.prototype = {setFromString: function (e, t) {
        var n = typeof t == "string" ? t.split(",") : t.constructor === Array ? t : [t];
        n.unshift(e), f.prototype.set.apply(this, n)
    }, set: function (e) {
        var t = Array.prototype.slice.apply(arguments, [1]);
        this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
    }, get: function (e) {
        return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
    }, setter: {rotate: function (e) {
        this.rotate = v(e, "deg")
    }, rotateX: function (e) {
        this.rotateX = v(e, "deg")
    }, rotateY: function (e) {
        this.rotateY = v(e, "deg")
    }, scale: function (e, t) {
        t === undefined && (t = e), this.scale = e + "," + t
    }, skewX: function (e) {
        this.skewX = v(e, "deg")
    }, skewY: function (e) {
        this.skewY = v(e, "deg")
    }, perspective: function (e) {
        this.perspective = v(e, "px")
    }, x: function (e) {
        this.set("translate", e, null)
    }, y: function (e) {
        this.set("translate", null, e)
    }, translate: function (e, t) {
        this._translateX === undefined && (this._translateX = 0), this._translateY === undefined && (this._translateY = 0), e !== null && e !== undefined && (this._translateX = v(e, "px")), t !== null && t !== undefined && (this._translateY = v(t, "px")), this.translate = this._translateX + "," + this._translateY
    }}, getter: {x: function () {
        return this._translateX || 0
    }, y: function () {
        return this._translateY || 0
    }, scale: function () {
        var e = (this.scale || "1,1").split(",");
        return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
    }, rotate3d: function () {
        var e = (this.rotate3d || "0,0,0,0deg").split(",");
        for (var t = 0; t <= 3; ++t)e[t] && (e[t] = parseFloat(e[t]));
        return e[3] && (e[3] = v(e[3], "deg")), e
    }}, parse: function (e) {
        var t = this;
        e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (e, n, r) {
            t.setFromString(n, r)
        })
    }, toString: function (e) {
        var t = [];
        for (var r in this)if (this.hasOwnProperty(r)) {
            if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin"))continue;
            r[0] !== "_" && (e && r === "scale" ? t.push(r + "3d(" + this[r] + ",1)") : e && r === "translate" ? t.push(r + "3d(" + this[r] + ",0)") : t.push(r + "(" + this[r] + ")"))
        }
        return t.join(" ")
    }}, e.fn.transition = e.fn.transit = function (t, r, i, s) {
        var o = this, a = 0, f = !0;
        typeof r == "function" && (s = r, r = undefined), typeof i == "function" && (s = i, i = undefined), typeof t.easing != "undefined" && (i = t.easing, delete t.easing), typeof t.duration != "undefined" && (r = t.duration, delete t.duration), typeof t.complete != "undefined" && (s = t.complete, delete t.complete), typeof t.queue != "undefined" && (f = t.queue, delete t.queue), typeof t.delay != "undefined" && (a = t.delay, delete t.delay), typeof r == "undefined" && (r = e.fx.speeds._default), typeof i == "undefined" && (i = e.cssEase._default), r = m(r);
        var c = h(t, r, i, a), p = e.transit.enabled && n.transition, d = p ? parseInt(r, 10) + parseInt(a, 10) : 0;
        if (d === 0) {
            var v = function (e) {
                o.css(t), s && s.apply(o), e && e()
            };
            return l(o, f, v), o
        }
        var g = {}, y = function (r) {
            var i = !1, a = function () {
                i && o.unbind(u, a), d > 0 && o.each(function () {
                    this.style[n.transition] = g[this] || null
                }), typeof s == "function" && s.apply(o), typeof r == "function" && r()
            };
            d > 0 && u && e.transit.useTransitionEnd ? (i = !0, o.bind(u, a)) : window.setTimeout(a, d), o.each(function () {
                d > 0 && (this.style[n.transition] = c), e(this).css(t)
            })
        }, b = function (e) {
            this.offsetWidth, y(e)
        };
        return l(o, f, b), this
    }, e.transit.getTransitionValue = h
}(jQuery), function (e) {
    var t, n, r, i, s, o, u = {}, a = {init: function (f, l) {
        var c = e(this), h = {seconds: 10, colour: "rgba(255, 255, 255, 0.8)", height: c.height(), width: c.width()};
        f && e.extend(h, f), t = 360, o = !1, u.settings = h, u.instance = c, u.callback = l, u.paused = !0, u.complete = !1, u.promted = !1;
        if (!r || h.width !== i || h.height !== s)i = h.width, s = h.height, n = e('<canvas id="pie_timer" width="' + i + '" height="' + s + ' data="' + Math.random() + '"></canvas>')[0], n.getContext && (r = n.getContext("2d")), c.empty().append(n);
        a.draw(t)
    }, start: function () {
        u.paused = !1, a.draw(t)
    }, pause: function () {
        u.paused = !0
    }, clear: function () {
        t = 360, u.complete = !1, u.paused = !0
    }, setColor: function (e) {
        u.settings.colour = e
    }, timer: function () {
        if (u.complete || u.paused)return;
        t < 131 && !u.promted && (u.promted = !0, luxanimals.uiManager.message.prompt("Hurry Up!"));
        if (t <= 0 && !u.complete) {
            u.complete = !0, a.draw(0);
            var e = u.callback;
            typeof e == "function" && e.call()
        } else r && a.draw(t);
        t -= 360 / u.settings.seconds
    }, draw: function () {
        n.width = i;
        if (t > 0) {
            r.beginPath(), r.moveTo(i / 2, s / 2);
            var e = Math.min(i, s) / 2, o = 3 * Math.PI / 2;
            r.arc(i / 2, s / 2, e, o - t * (Math.PI / 180), o, !1), r.closePath(), r.fillStyle = u.settings.colour, r.fill()
        }
    }, data: u};
    jQuery.fn.pietimer = function (t) {
        return this.setColor || e.extend(this, a), this[t] ? this[t](Array.prototype.slice.call(arguments, 1)) : typeof t == "object" && this.init(arguments), this
    }
}(jQuery), function (e) {
    function r(e) {
        e = e.replace(/left|top/g, "0px"), e = e.replace(/right|bottom/g, "100%"), e = e.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
        var t = e.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
        return[parseFloat(t[1], 10), t[2], parseFloat(t[3], 10), t[4]]
    }

    if (!document.defaultView || !document.defaultView.getComputedStyle) {
        var t = e.css;
        e.css = function (e, n, r) {
            n === "background-position" && (n = "backgroundPosition");
            if (n !== "backgroundPosition" || !e.currentStyle || e.currentStyle[n])return t.apply(this, arguments);
            var i = e.style;
            return!r && i && i[n] ? i[n] : t(e, "backgroundPositionX", r) + " " + t(e, "backgroundPositionY", r)
        }
    }
    var n = e.fn.animate;
    e.fn.animate = function (e) {
        return"background-position"in e && (e.backgroundPosition = e["background-position"], delete e["background-position"]), "backgroundPosition"in e && (e.backgroundPosition = "(" + e.backgroundPosition), n.apply(this, arguments)
    }, e.fx.step.backgroundPosition = function (t) {
        if (!t.bgPosReady) {
            var n = e.css(t.elem, "backgroundPosition");
            n || (n = "0px 0px"), n = r(n), t.start = [n[0], n[2]];
            var i = r(t.end);
            t.end = [i[0], i[2]], t.unit = [i[1], i[3]], t.bgPosReady = !0
        }
        var s = [];
        s[0] = (t.end[0] - t.start[0]) * t.pos + t.start[0] + t.unit[0], s[1] = (t.end[1] - t.start[1]) * t.pos + t.start[1] + t.unit[1], t.elem.style.backgroundPosition = s[0] + " " + s[1]
    }
}(jQuery), this.createjs = this.createjs || {}, function () {
    var e = function () {
        throw"UID cannot be instantiated"
    };
    e._nextID = 0, e.get = function () {
        return e._nextID++
    }, createjs.UID = e
}(), function (e) {
    var t = function () {
        this.init()
    };
    t.prototype = {};
    var n = t.prototype;
    n.loaded = !1, n.progress = 0, n._item = null, n.onProgress = null, n.onLoadStart = null, n.onFileLoad = null, n.onFileProgress = null, n.onComplete = null, n.onError = null, n.getItem = function () {
        return this._item
    }, n.init = function () {
    }, n.load = function () {
    }, n.cancel = function () {
    }, n._sendLoadStart = function (e) {
        this.onLoadStart && this.onLoadStart({target: this})
    }, n._sendProgress = function (e) {
        var t;
        if (e instanceof Number)this.progress = e, t = {loaded: this.progress, total: 1}; else {
            t = e, this.progress = e.loaded / e.total;
            if (isNaN(this.progress) || this.progress == Infinity)this.progress = 0
        }
        t.target = this, this.onProgress && this.onProgress(t)
    }, n._sendFileProgress = function (e) {
        this.onFileProgress && (e.target = this, this.onFileProgress(e))
    }, n._sendComplete = function () {
        this.onComplete && this.onComplete({target: this})
    }, n._sendFileComplete = function (e) {
        this.onFileLoad && (e.target = this, this.onFileLoad(e))
    }, n._sendError = function (e) {
        this.onError && (e == null && (e = {}), e.target = this, this.onError(e))
    }, n.toString = function () {
        return"[PreloadJS AbstractLoader]"
    }, e.AbstractLoader = t
}(window), function (e) {
    function i() {
    }

    var t = function (e) {
        this.initialize(e)
    }, n = t.prototype = new AbstractLoader, r = t;
    r.IMAGE = "image", r.SOUND = "sound", r.JSON = "json", r.JAVASCRIPT = "javascript", r.CSS = "css", r.XML = "xml", r.TEXT = "text", r.TIMEOUT_TIME = 8e3, n.useXHR = !0, n.stopOnError = !1, n.maintainScriptOrder = !0, n.next = null, n.typeHandlers = null, n.extensionHandlers = null, n._maxConnections = 1, n._currentLoads = null, n._loadQueue = null, n._loadedItemsById = null, n._loadedItemsBySrc = null, n._targetProgress = 0, n._numItems = 0, n._numItemsLoaded = null, n._scriptOrder = null, n._loadedScripts = null, n.TAG_LOAD_OGGS = !0, n.initialize = function (t) {
        this._numItems = 0, this._numItemsLoaded = 0, this._targetProgress = 0, this._paused = !1, this._currentLoads = [], this._loadQueue = [], this._scriptOrder = [], this._loadedScripts = [], this._loadedItemsById = {}, this._loadedItemsBySrc = {}, this.typeHandlers = {}, this.extensionHandlers = {}, this.useXHR = t != 0 && e.XMLHttpRequest != null, this.determineCapabilities()
    }, n.determineCapabilities = function () {
        var e = t.lib.BrowserDetect;
        if (e == null)return;
        t.TAG_LOAD_OGGS = e.isFirefox || e.isOpera
    }, r.isBinary = function (e) {
        switch (e) {
            case t.IMAGE:
            case t.SOUND:
                return!0;
            default:
                return!1
        }
    }, n.installPlugin = function (e) {
        if (e == null || e.getPreloadHandlers == null)return;
        var t = e.getPreloadHandlers();
        if (t.types != null)for (var n = 0, r = t.types.length; n < r; n++)this.typeHandlers[t.types[n]] = t.callback;
        if (t.extensions != null)for (n = 0, r = t.extensions.length; n < r; n++)this.extensionHandlers[t.extensions[n]] = t.callback
    }, n.setMaxConnections = function (e) {
        this._maxConnections = e, this._paused || this._loadNext()
    }, n.loadFile = function (e, t) {
        this._addItem(e), t !== !1 && this.setPaused(!1)
    }, n.loadManifest = function (e, t) {
        var n;
        e instanceof Array ? n = e : e instanceof Object && (n = [e]);
        for (var r = 0, i = n.length; r < i; r++)this._addItem(n[r], !1);
        t !== !1 && this._loadNext()
    }, n.load = function () {
        this.setPaused(!1)
    }, n.getResult = function (e) {
        return this._loadedItemsById[e] || this._loadedItemsBySrc[e]
    }, n.setPaused = function (e) {
        this._paused = e, this._paused || this._loadNext()
    }, n.close = function () {
        while (this._currentLoads.length)this._currentLoads.pop().cancel();
        this._currentLoads = [], this._scriptOrder = [], this._loadedScripts = []
    }, n._addItem = function (e) {
        var n = this._createLoadItem(e);
        n != null && (this._loadQueue.push(n), this._numItems++, this._updateProgress(), n.getItem().type == t.JAVASCRIPT && (this._scriptOrder.push(n.getItem()), this._loadedScripts.push(null)))
    }, n._loadNext = function () {
        if (this._paused)return;
        this._numItems == this._numItemsLoaded && (this._sendComplete(), this.next && this.next.load && this.next.load.apply(this.next));
        while (this._loadQueue.length && this._currentLoads.length < this._maxConnections) {
            var e = this._loadQueue.shift();
            e.onProgress = t.proxy(this._handleProgress, this), e.onComplete = t.proxy(this._handleFileComplete, this), e.onError = t.proxy(this._handleFileError, this), this._currentLoads.push(e), e.load()
        }
    }, n._handleFileError = function (e) {
        var t = e.target, n = this._createResultData(t.getItem());
        this._numItemsLoaded++, this._updateProgress(), this._sendError(n), this.stopOnError || (this._removeLoadItem(t), this._loadNext())
    }, n._createResultData = function (e) {
        return{id: e.id, result: null, data: e.data, type: e.type, src: e.src}
    }, n._handleFileComplete = function (e) {
        var n = this, r = e.target, i = r.getItem(), s = this._createResultData(i);
        this._removeLoadItem(r), r instanceof t.lib.XHRLoader ? s.result = this._createResult(i, s) : s.result = i.tag;
        switch (i.type) {
            case t.IMAGE:
                if (r instanceof t.lib.XHRLoader) {
                    s.result.onload = function (e) {
                        n._handleFileTagComplete(i, s)
                    };
                    return
                }
                break;
            case t.JAVASCRIPT:
                if (this.maintainScriptOrder) {
                    this._loadedScripts[this._scriptOrder.indexOf(i)] = i, this._checkScriptLoadOrder();
                    return
                }
        }
        this._handleFileTagComplete(i, s)
    }, n._checkScriptLoadOrder = function () {
        var e = this._loadedScripts.length;
        for (var t = 0; t < e; t++) {
            var n = this._loadedScripts[t];
            if (n === null)break;
            if (n === !0)continue;
            var r = this.getResult(n.src), i = this._createResultData(r);
            i.result = r.result, this._handleFileTagComplete(r, i), this._loadedScripts[t] = !0, t--, e--
        }
    }, n._handleFileTagComplete = function (e, t) {
        this._numItemsLoaded++;
        var t = this._createResultData(e);
        this._loadedItemsById[e.id] = t, this._loadedItemsBySrc[e.src] = t, e.completeHandler && e.completeHandler(t), this._updateProgress(), this._sendFileComplete(t), this._loadNext()
    }, n._removeLoadItem = function (e) {
        var t = this._currentLoads.length;
        for (var n = 0; n < t; n++)if (this._currentLoads[n] == e) {
            this._currentLoads.splice(n, 1);
            break
        }
    }, n._createResult = function (n, r) {
        var i = null, s;
        switch (n.type) {
            case t.IMAGE:
                i = this._createImage();
                break;
            case t.SOUND:
                i = n.tag || this._createAudio();
                break;
            case t.CSS:
                i = this._createLink();
                break;
            case t.JAVASCRIPT:
                i = this._createScript();
                break;
            case t.XML:
                if (e.DOMParser) {
                    var o = new DOMParser;
                    r = o.parseFromString(r, "text/xml")
                } else {
                    var o = new ActiveXObject("Microsoft.XMLDOM");
                    o.async = !1, o.loadXML(r), s = o
                }
                break;
            case t.JSON:
            case t.TEXT:
                s = r
        }
        return i ? (n.type == t.CSS ? i.href = n.src : i.src = n.src, i) : s
    }, n._handleProgress = function (e) {
        var t = e.target, n = this._createResultData(t.getItem());
        n.progress = t.progress, this._sendFileProgress(n), this._updateProgress()
    }, n._updateProgress = function () {
        var e = this._numItemsLoaded / this._numItems, t = this._numItems - this._numItemsLoaded;
        if (t > 0) {
            var n = 0;
            for (var r = 0, i = this._currentLoads.length; r < i; r++)n += this._currentLoads[r].progress;
            e += n / t * (t / this._numItems)
        }
        this._sendProgress({loaded: e, total: 1})
    }, n._createLoadItem = function (e) {
        var n = {};
        switch (typeof e) {
            case"string":
                n.src = e;
                break;
            case"object":
                e instanceof HTMLAudioElement ? (n.tag = e, n.src = n.tag.src, n.type = t.SOUND) : n = e;
                break;
            default:
        }
        n.ext = this._getNameAfter(n.src, "."), n.type || (n.type = this.getType(n.ext));
        if (n.id == null || n.id == "")n.id = n.src;
        var r = this.typeHandlers[n.type] || this.extensionHandlers[n.ext];
        if (r) {
            var i = r(n.src, n.type, n.id, n.data);
            if (i === !1)return null;
            i !== !0 && (i.src != null && (n.src = i.src), i.id != null && (n.id = i.id), i.tag != null && i.tag.load instanceof Function && (n.tag = i.tag)), n.ext = this._getNameAfter(n.src, ".")
        }
        var s = this.useXHR;
        switch (n.type) {
            case t.JSON:
            case t.XML:
            case t.TEXT:
                s = !0;
                break;
            case t.SOUND:
                n.ext == "ogg" && t.TAG_LOAD_OGGS && (s = !1)
        }
        if (s)return new t.lib.XHRLoader(n);
        if (!n.tag) {
            var o, u = "src", a = !1;
            switch (n.type) {
                case t.IMAGE:
                    o = this._createImage();
                    break;
                case t.SOUND:
                    o = this._createAudio();
                    break;
                case t.CSS:
                    u = "href", a = !0, o = this._createLink();
                    break;
                case t.JAVASCRIPT:
                    a = !0, o = this._createScript();
                    break;
                default:
            }
            return n.tag = o, new t.lib.TagLoader(n, u, a)
        }
        return new t.lib.TagLoader(n)
    }, n.getType = function (e) {
        switch (e) {
            case"jpeg":
            case"jpg":
            case"gif":
            case"png":
                return t.IMAGE;
            case"ogg":
            case"mp3":
            case"wav":
                return t.SOUND;
            case"json":
                return t.JSON;
            case"xml":
                return t.XML;
            case"css":
                return t.CSS;
            case"js":
                return t.JAVASCRIPT;
            default:
                return t.TEXT
        }
    }, n._getNameAfter = function (e, t) {
        var n = e.lastIndexOf(t), r = e.substr(n + 1), i = r.lastIndexOf(/[\b|\?|\#|\s]/);
        return i == -1 ? r : r.substr(0, i)
    }, n._createImage = function () {
        return document.createElement("img")
    }, n._createAudio = function () {
        var e = document.createElement("audio");
        return e.autoplay = !1, e.type = "audio/ogg", e
    }, n._createScript = function () {
        var e = document.createElement("script");
        return e.type = "text/javascript", e
    }, n._createLink = function () {
        var e = document.createElement("link");
        return e.type = "text/css", e.rel = "stylesheet", e
    }, n.toString = function () {
        return"[PreloadJS]"
    }, r.proxy = function (e, t) {
        return function (n) {
            return e.apply(t, arguments)
        }
    }, t.lib = {}, e.PreloadJS = t, i.init = function () {
        var t = navigator.userAgent;
        i.isFirefox = t.indexOf("Firefox") > -1, i.isOpera = e.opera != null, i.isIOS = t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1
    }, i.init(), t.lib.BrowserDetect = i
}(window), function (e) {
    var t = function (e, t, n) {
        this.init(e, t, n)
    }, n = t.prototype = new AbstractLoader;
    n._srcAttr = null, n._loadTimeOutTimeout = null, n.tagCompleteProxy = null, n.init = function (e, t, n) {
        this._item = e, this._srcAttr = t || "src", this._useXHR = n == 1, this.isAudio = e.tag instanceof HTMLAudioElement, this.tagCompleteProxy = PreloadJS.proxy(this._handleTagLoad, this)
    }, n.cancel = function () {
        this._clean();
        var e = this.getItem();
        e != null && (e.src = null)
    }, n.load = function () {
        this._useXHR ? this.loadXHR() : this.loadTag()
    }, n.loadXHR = function () {
        var e = this.getItem(), t = new PreloadJS.lib.XHRLoader(e);
        t.onProgress = PreloadJS.proxy(this._handleProgress, this), t.onFileLoad = PreloadJS.proxy(this._handleXHRComplete, this), t.onFileError = PreloadJS.proxy(this._handleLoadError, this), t.load()
    }, n._handleXHRComplete = function (e) {
        this._clean();
        var t = e.getItem(), n = e.getResult();
        t.type == PreloadJS.IMAGE ? (t.tag.onload = PreloadJS.proxy(this._sendComplete, this), t.tag.src = t.src) : (t.tag[this._srcAttr] = t.src, this._sendComplete())
    }, n._handleLoadError = function (e) {
        this._clean(), this._sendError(e)
    }, n.loadTag = function () {
        var e = this.getItem(), t = e.tag;
        clearTimeout(this._loadTimeOutTimeout), this._loadTimeOutTimeout = setTimeout(PreloadJS.proxy(this._handleLoadTimeOut, this), PreloadJS.TIMEOUT_TIME), this.isAudio && (t.src = null, t.preload = "auto", t.setAttribute("data-temp", "true")), t.onerror = PreloadJS.proxy(this._handleLoadError, this), t.onprogress = PreloadJS.proxy(this._handleProgress, this), this.isAudio ? (t.onstalled = PreloadJS.proxy(this._handleStalled, this), t.addEventListener("canplaythrough", this.tagCompleteProxy, !0)) : t.onload = PreloadJS.proxy(this._handleTagLoad, this), t[this._srcAttr] = e.src;
        var n = e.type == PreloadJS.SOUND && e.ext == "ogg" && PreloadJS.lib.BrowserDetect.isFirefox;
        t.load != null && !n && t.load()
    }, n._handleLoadTimeOut = function () {
        this._clean(), this._sendError()
    }, n._handleStalled = function () {
    }, n._handleLoadError = function (e) {
        this._clean(), this._sendError()
    }, n._handleTagLoad = function (e) {
        var t = this.getItem().tag;
        clearTimeout(this._loadTimeOutTimeout);
        if (this.isAudio && t.readyState !== 4)return;
        if (this.loaded)return;
        this.loaded = !0, this._clean(), this._sendComplete()
    }, n._clean = function () {
        clearTimeout(this._loadTimeOutTimeout);
        var e = this.getItem().tag;
        e.onload = null, e.removeEventListener("canplaythrough", this.tagCompleteProxy, !0), e.onstalled = null, e.onprogress = null, e.onerror = null
    }, n._handleProgress = function (e) {
        clearTimeout(this._loadTimeOutTimeout);
        var t = e;
        if (this.isAudio) {
            var n = this.getItem();
            if (n.buffered == null)return;
            t = {loaded: n.buffered.length > 0 ? n.buffered.end(0) : 0, total: n.duration}
        }
        this._sendProgress(t)
    }, n.toString = function () {
        return"[PreloadJS TagLoader]"
    }, PreloadJS.lib.TagLoader = t
}(window), function (e) {
    var t = function (e) {
        this.init(e)
    }, n = t.prototype = new AbstractLoader;
    n._wasLoaded = !1, n._request = null, n._loadTimeOutTimeout = null, n._xhrLevel = null, n.init = function (e) {
        this._item = e, !this._createXHR(e)
    }, n.getResult = function () {
        try {
            return this._request.responseText
        } catch (e) {
        }
        return this._request.response
    }, n.cancel = function () {
        this._clean(), this._request.abort()
    }, n.load = function () {
        if (this._request == null) {
            this.handleError();
            return
        }
        this._xhrLevel == 1 && (this._loadTimeOutTimeout = setTimeout(PreloadJS.proxy(this.handleTimeout, this), PreloadJS.TIMEOUT_TIME)), this._request.onloadstart = PreloadJS.proxy(this.handleLoadStart, this), this._request.onprogress = PreloadJS.proxy(this.handleProgress, this), this._request.onabort = PreloadJS.proxy(this.handleAbort, this), this._request.onerror = PreloadJS.proxy(this.handleError, this), this._request.ontimeout = PreloadJS.proxy(this.handleTimeout, this), this._request.onload = PreloadJS.proxy(this.handleLoad, this), this._request.onreadystatechange = PreloadJS.proxy(this.handleReadyStateChange, this);
        try {
            this._request.send()
        } catch (e) {
        }
    }, n.handleProgress = function (e) {
        if (e.loaded > 0 && e.total == 0)return;
        this._sendProgress({loaded: e.loaded, total: e.total})
    }, n.handleLoadStart = function () {
        clearTimeout(this._loadTimeOutTimeout), this._sendLoadStart()
    }, n.handleAbort = function () {
        this._clean(), this._sendError()
    }, n.handleError = function () {
        this._clean(), this._sendError()
    }, n.handleReadyStateChange = function () {
        this._request.readyState == 4 && this.handleLoad()
    }, n._checkError = function () {
        var e = parseInt(this._request.status);
        switch (e) {
            case 404:
            case 0:
                return!1
        }
        if (this._request.response == null) {
            try {
                if (this._request.responseXML != null)return!0
            } catch (t) {
            }
            return!1
        }
        return!0
    }, n.handleLoad = function (e) {
        if (this.loaded)return;
        this.loaded = !0;
        if (!this._checkError()) {
            this.handleError();
            return
        }
        this._clean(), this._sendComplete()
    }, n.handleTimeout = function () {
        this._clean(), this._sendError()
    }, n.handleLoadEnd = function () {
        this._clean()
    }, n._createXHR = function (t) {
        this._xhrLevel = 1, e.ArrayBuffer && (this._xhrLevel = 2);
        if (e.XMLHttpRequest)this._request = new XMLHttpRequest; else try {
            this._request = new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (n) {
            return null
        }
        return t.type == PreloadJS.TEXT && this._request.overrideMimeType && this._request.overrideMimeType("text/plain; charset=x-user-defined"), this._request.open("GET", t.src, !0), PreloadJS.isBinary(t.type) && (this._request.responseType = "arraybuffer"), !0
    }, n._clean = function () {
        clearTimeout(this._loadTimeOutTimeout);
        var e = this._request;
        e.onloadstart = null, e.onprogress = null, e.onabort = null, e.onerror = null, e.onload = null, e.ontimeout = null, e.onloadend = null, e.onreadystatechange = null, clearInterval(this._checkLoadInterval)
    }, n.toString = function () {
        return"[PreloadJS XHRLoader]"
    }, PreloadJS.lib.XHRLoader = t
}(window), function (e) {
    function t() {
        throw"SoundJS cannot be instantiated"
    }

    function n(e, t) {
        this.init(e, t)
    }

    function i() {
    }

    t.DELIMITER = "|", t.AUDIO_TIMEOUT = 8e3, t.INTERRUPT_ANY = "any", t.INTERRUPT_EARLY = "early", t.INTERRUPT_LATE = "late", t.INTERRUPT_NONE = "none", t.PLAY_INITED = "playInited", t.PLAY_SUCCEEDED = "playSucceeded", t.PLAY_INTERRUPTED = "playInterrupted", t.PLAY_FINISHED = "playFinished", t.PLAY_FAILED = "playFailed", t.activePlugin = null, t.pluginsRegistered = !1, t.masterVolume = 1, t.muted = !1, t.instances = [], t.instanceHash = {}, t.idHash = null, t.getPreloadHandlers = function () {
        return{callback: t.proxy(t.initLoad, t), types: ["sound"], extensions: ["mp3", "ogg", "wav"]}
    }, t.registerPlugins = function (e) {
        t.pluginsRegistered = !0;
        for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            if (i == null)continue;
            if (i.isSupported())return t.activePlugin = new i, !0
        }
        return!1
    }, t.registerPlugin = function (e) {
        return t.pluginsRegistered = !0, e.isSupported() ? (t.activePlugin = new e, !0) : !1
    }, t.isReady = function () {
        return t.activePlugin != null
    }, t.getCapabilities = function () {
        return t.activePlugin ? t.activePlugin.capabilities : null
    }, t.getCapability = function (e) {
        return t.activePlugin == null ? null : t.activePlugin.capabilities[e]
    }, t.initLoad = function (e, r, i, s) {
        if (!t.checkPlugin(!0))return!1;
        var o = t.parsePath(e, r, i, s);
        if (o == null)return!1;
        i != null && (t.idHash == null && (t.idHash = {}), t.idHash[i] = o.src);
        var u = n.create(o.src, s), a = t.activePlugin.register(o.src, s);
        return a != null && (a.tag != null ? o.tag = a.tag : a.src && (o.src = a.src), a.completeHandler != null && (o.handler = a.completeHandler)), o
    }, t.parsePath = function (e, n, r, i) {
        var s = e.split(t.DELIMITER), o = {type: n || "sound", id: r, data: i, handler: t.handleSoundReady}, u = !1, a = t.getCapabilities();
        for (var f = 0, l = s.length; f < l; f++) {
            var c = s[f], h = c.lastIndexOf("."), p = c.substr(h + 1).toLowerCase(), d = c.substr(0, h).split("/").pop();
            switch (p) {
                case"mp3":
                    a.mp3 && (u = !0);
                    break;
                case"ogg":
                    a.ogg && (u = !0);
                    break;
                case"wav":
                    a.wav && (u = !0)
            }
            if (u)return o.name = d, o.src = c, o.extension = p, o
        }
        return null
    }, t.play = function (e, n, r, i, s, o, u) {
        if (!t.checkPlugin(!0))return null;
        e = t.getSrcFromId(e);
        var a = t.activePlugin.create(e);
        return t.playInstance(a, n, r, i, s, o, u)
    }, t.playInstance = function (e, n, r, i, s, o, u) {
        n = n || t.INTERRUPT_NONE, r == null && (r = 0), i == null && (i = 0), s == null && (s = 0), o == null && (o = 1), u == null && (u = 0);
        if (r == 0) {
            var a = t.beginPlaying(e, n, i, s, o, u);
            if (!a)return null
        } else setTimeout(function () {
            t.beginPlaying(e, n, i, s, o, u)
        }, r);
        return this.instances.push(e), this.instanceHash[e.uniqueId] = e, e
    }, t.beginPlaying = function (e, t, r, i, s, o) {
        if (!n.add(e, t))return!1;
        var u = e.beginPlaying(r, i, s, o);
        return u == -1 ? (this.instances.splice(this.instances.indexOf(e), 1), delete this.instanceHash[e.uniqueId], !1) : !0
    }, t.checkPlugin = function (e) {
        if (t.activePlugin == null) {
            e && !t.pluginsRegistered && t.registerPlugin(t.HTMLAudioPlugin);
            if (t.activePlugin == null)return!1
        }
        return!0
    }, t.getSrcFromId = function (e) {
        return t.idHash == null || t.idHash[e] == null ? e : t.idHash[e]
    }, t.setVolume = function (e, n) {
        return Number(e) == null ? !1 : (e = Math.max(0, Math.min(1, e)), t.tellAllInstances("setVolume", n, e))
    }, t.getMasterVolume = function () {
        return t.masterVolume
    }, t.setMasterVolume = function (e) {
        return t.masterVolume = e, t.tellAllInstances("setMasterVolume", null, e)
    }, t.setMute = function (e, n) {
        return t.tellAllInstances("mute", n, e)
    }, t.pause = function (e) {
        return t.tellAllInstances("pause", e)
    }, t.resume = function (e) {
        return t.tellAllInstances("resume", e)
    }, t.stop = function (e) {
        return t.tellAllInstances("stop", e)
    }, t.getInstanceById = function (e) {
        return this.instanceHash[e]
    }, t.playFinished = function (e) {
        n.remove(e), this.instances.splice(this.instances.indexOf(e), 1)
    }, t.tellAllInstances = function (e, t, n) {
        if (this.activePlugin == null)return!1;
        var r = this.getSrcFromId(t);
        for (var i = this.instances.length - 1; i >= 0; i--) {
            var s = this.instances[i];
            if (r != null && s.src != r)continue;
            switch (e) {
                case"pause":
                    s.pause();
                    break;
                case"resume":
                    s.resume();
                    break;
                case"setVolume":
                    s.setVolume(n);
                    break;
                case"setMasterVolume":
                    s.setMasterVolume(n);
                    break;
                case"mute":
                    s.mute(n);
                    break;
                case"stop":
                    s.stop();
                    break;
                case"setPan":
                    s.setPan(n)
            }
        }
        return!0
    }, t.proxy = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, e.SoundJS = t, n.channels = {}, n.create = function (e, t) {
        var r = n.get(e);
        r == null ? n.channels[e] = new n(e, t) : r.max += t
    }, n.add = function (e, t) {
        var r = n.get(e.src);
        return r == null ? !1 : r.add(e, t)
    }, n.remove = function (e) {
        var t = n.get(e.src);
        return t == null ? !1 : (t.remove(e), !0)
    }, n.get = function (e) {
        return n.channels[e]
    };
    var r = n.prototype = {src: null, max: null, length: 0, init: function (e, t) {
        this.src = e, this.max = t || 1, this.instances = []
    }, get: function (e) {
        return this.instances[e]
    }, add: function (e, t) {
        return this.getSlot(t, e) ? (this.instances.push(e), this.length++, !0) : !1
    }, remove: function (e) {
        var t = this.instances.indexOf(e);
        return t == -1 ? !1 : (this.instances.splice(t, 1), this.length--, !0)
    }, getSlot: function (e, n) {
        var r, i, s = t.activePlugin.FT || 0;
        for (var o = 0, u = this.max || 100; o < u; o++) {
            r = this.get(o);
            if (r == null)return!0;
            if (e == t.INTERRUPT_NONE)continue;
            if (o == 0) {
                i = r;
                continue
            }
            if (r.playState == t.PLAY_FINISHED || r == t.PLAY_INTERRUPTED || r == t.PLAY_FAILED)i = r; else if (e == t.INTERRUPT_EARLY && r.getPosition() < i.getPosition() || e == t.INTERRUPT_LATE && r.getPosition() > i.getPosition())i = r
        }
        return i != null ? (i.interrupt(), this.remove(i), !0) : !1
    }, toString: function () {
        return"[SoundJS SoundChannel]"
    }};
    i.init = function () {
        var t = navigator.userAgent;
        i.isFirefox = t.indexOf("Firefox") > -1, i.isOpera = e.opera != null, i.isIOS = t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1
    }, i.init(), t.BrowserDetect = i
}(window), function (e) {
    function t() {
        this.init()
    }

    function r(e) {
        this.init(e)
    }

    function i(e) {
        this.init(e)
    }

    t.MAX_INSTANCES = 30, t.capabilities = null, t.lastId = 0, t.AUDIO_READY = "canplaythrough", t.AUDIO_ENDED = "ended", t.AUDIO_ERROR = "error", t.AUDIO_STALLED = "stalled", t.fillChannels = !1, t.isSupported = function () {
        t.generateCapabilities();
        var e = t.tag;
        return e == null || e.canPlayType == null ? !1 : !0
    }, t.generateCapabilities = function () {
        if (t.capabilities != null)return;
        var e = t.tag = document.createElement("audio"), n = t.capabilities = {panning: !1, volume: !0, mp3: e.canPlayType("audio/mp3") != "no" && e.canPlayType("audio/mp3") != "", ogg: e.canPlayType("audio/ogg") != "no" && e.canPlayType("audio/ogg") != "", mpeg: e.canPlayType("audio/mpeg") != "no" && e.canPlayType("audio/mpeg") != "", channels: t.MAX_INSTANCES}
    };
    var n = t.prototype = {capabilities: null, FT: .001, channels: null, init: function () {
        this.capabilities = t.capabilities, this.channels = {}
    }, register: function (e, t) {
        var n = i.get(e), r;
        for (var s = 0, o = t || 1; s < o; s++)r = this.createTag(e), n.add(r);
        return{tag: r}
    }, createTag: function (e) {
        var t = document.createElement("audio");
        return t.preload = !1, t.src = e, t
    }, create: function (e) {
        var t = new r(e);
        return t.owner = this, t
    }, toString: function () {
        return"[HTMLAudioPlugin]"
    }};
    e.SoundJS.HTMLAudioPlugin = t;
    var n = r.prototype = {src: null, uniqueId: -1, playState: null, owner: null, loaded: !1, paused: !1, lastInterrupt: SoundJS.INTERRUPT_NONE, offset: 0, delay: 0, volume: 1, pan: 0, muted: !1, remainingLoops: 0, delayTimeout: -1, tag: null, onComplete: null, onLoop: null, onReady: null, onPlayFailed: null, onPlayInterrupted: null, endedHandler: null, readyHandler: null, stalledHandler: null, init: function (e) {
        this.uniqueId = t.lastId++, this.src = e, this.endedHandler = SoundJS.proxy(this.handleSoundComplete, this), this.readyHandler = SoundJS.proxy(this.handleSoundReady, this), this.stalledHandler = SoundJS.proxy(this.handleSoundStalled, this)
    }, cleanUp: function () {
        var e = this.tag;
        if (e != null) {
            e.pause();
            try {
                e.currentTime = 0
            } catch (n) {
            }
            e.removeEventListener(t.AUDIO_ENDED, this.endedHandler, !1), e.removeEventListener(t.AUDIO_READY, this.readyHandler, !1), i.setInstance(this.src, e), this.tag = null
        }
        SoundJS.playFinished(this)
    }, interrupt: function () {
        if (this.tag == null)return;
        this.playState = SoundJS.PLAY_INTERRUPTED, this.onPlayInterrupted && this.onPlayInterrupted(this), this.cleanUp(), this.paused = !1
    }, play: function (e, t, n, r, i, s) {
        this.cleanUp(), SoundJS.playInstance(this, e, t, n, r, i, s)
    }, beginPlaying: function (e, n, r, s) {
        var o = this.tag = i.getInstance(this.src);
        return o == null ? (this.playFailed(), -1) : (this.offset = e, this.volume = r, this.updateVolume(), this.duration = o.duration, n == -1 ? o.loop = !0 : (this.remainingLoops = n, o.addEventListener(t.AUDIO_ENDED, this.endedHandler, !1)), o.readyState !== 4 ? (o.addEventListener(t.AUDIO_READY, this.readyHandler, !1), o.addEventListener(t.AUDIO_STALLED, this.stalledHandler, !1), o.load()) : this.handleSoundReady(null), 1)
    }, monitorLoop: function () {
        !Modernizr.mobile && this.tag.loop && this.monitorLoopInterval == null && (this.monitorLoopInterval = setInterval(this.handleMonitorLoopInterval.bind(this), 1))
    }, handleMonitorLoopInterval: function () {
        this.duration - this.tag.currentTime < .05 && (this.tag.currentTime = 0)
    }, handleSoundStalled: function (e) {
        this.onPlayFailed != null && this.onPlayFailed(this)
    }, handleSoundReady: function (e) {
        this.playState = SoundJS.PLAY_SUCCEEDED, this.paused = !1, this.tag.removeEventListener(t.AUDIO_READY, this.readyHandler, !1), this.duration = this.tag.duration;
        if (this.offset >= this.getDuration()) {
            this.playFailed();
            return
        }
        this.tag.currentTime = this.offset * .001, this.tag.play(), this.monitorLoop()
    }, pause: function () {
        return this.paused = !0, this.tag != null ? (this.tag.pause(), clearInterval(this.monitorLoopInterval), this.monitorLoopInterval = null, !1) : !0
    }, resume: function () {
        return this.paused = !1, this.tag != null ? (this.tag.play(), this.monitorLoop(), !1) : !0
    }, stop: function () {
        return this.pause(), this.playState = SoundJS.PLAY_FINISHED, this.cleanUp(), !0
    }, setMasterVolume: function (e) {
        return this.updateVolume(), !0
    }, setVolume: function (e) {
        return this.volume = e, this.updateVolume(), !0
    }, updateVolume: function () {
        return this.tag != null ? (this.tag.volume = this.muted ? 0 : this.volume * SoundJS.masterVolume, !0) : !1
    }, getVolume: function (e) {
        return this.volume
    }, mute: function (e) {
        return this.muted = e, this.updateVolume(), !0
    }, setPan: function (e) {
        return!1
    }, getPan: function () {
        return 0
    }, getPosition: function () {
        return this.tag == null ? 0 : this.tag.currentTime * 1e3
    }, setPosition: function (e) {
        if (this.tag == null)return!1;
        try {
            this.tag.currentTime = e * .001
        } catch (t) {
            return!1
        }
        return!0
    }, getDuration: function () {
        return this.tag == null ? 0 : this.tag.duration * 1e3
    }, handleSoundComplete: function (e) {
        if (this.remainingLoops != 0) {
            this.remainingLoops--;
            try {
                this.tag.currentTime = 0
            } catch (t) {
            }
            this.tag.play(), this.onLoop != null && this.onLoop(this);
            return
        }
        this.playState = SoundJS.PLAY_FINISHED, this.onComplete != null && this.onComplete(this), this.cleanUp()
    }, playFailed: function () {
        this.playState = SoundJS.PLAY_FAILED, this.onPlayFailed != null && this.onPlayFailed(this), this.cleanUp()
    }, toString: function () {
        return"[HTMLAudio SoundInstance]"
    }};
    i.channels = {}, i.get = function (e) {
        var t = i.channels[e];
        return t == null && (t = i.channels[e] = new i(e)), t
    }, i.getInstance = function (e) {
        var t = i.channels[e];
        return t == null ? null : t.get()
    }, i.setInstance = function (e, t) {
        var n = i.channels[e];
        return n == null ? null : n.set(t)
    }, i.prototype = {src: null, length: 0, available: 0, tags: null, init: function (e) {
        this.src = e, this.tags = []
    }, add: function (e) {
        this.tags.push(e), this.length++, this.available = this.tags.length
    }, get: function () {
        if (this.tags.length == 0)return null;
        this.available = this.tags.length;
        var e = this.tags.pop();
        return document.body.appendChild(e), e
    }, set: function (e) {
        var t = this.tags.indexOf(e);
        t == -1 && this.tags.push(e);
        try {
            document.body.removeChild(e)
        } catch (n) {
            console.error && console.error("tag not in DOM", e)
        }
        this.available = this.tags.length
    }, toString: function () {
        return"[HTMLAudioPlugin TagChannel]"
    }}
}(window), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype;
    e.initialize = function (e) {
        e.addEventListener = t.addEventListener, e.removeEventListener = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent
    }, t._listeners = null, t.initialize = function () {
    }, t.addEventListener = function (e, t) {
        var n = this._listeners;
        n ? this.removeEventListener(e, t) : n = this._listeners = {};
        var r = n[e];
        return r || (r = n[e] = []), r.push(t), t
    }, t.removeEventListener = function (e, t) {
        var n = this._listeners;
        if (!n)return;
        var r = n[e];
        if (!r)return;
        for (var i = 0, s = r.length; i < s; i++)if (r[i] == t) {
            s == 1 ? delete n[e] : r.splice(i, 1);
            break
        }
    }, t.removeAllEventListeners = function (e) {
        e ? this._listeners && delete this._listeners[e] : this._listeners = null
    }, t.dispatchEvent = function (e, t) {
        var n = !1, r = this._listeners;
        if (e && r) {
            typeof e == "string" && (e = {type: e});
            var i = r[e.type];
            if (!i)return n;
            e.target = t || this, i = i.slice();
            for (var s = 0, o = i.length; s < o; s++) {
                var u = i[s];
                u.handleEvent ? n = n || u.handleEvent(e) : n = n || u(e)
            }
        }
        return!!n
    }, t.hasEventListener = function (e) {
        var t = this._listeners;
        return!!t && !!t[e]
    }, t.toString = function () {
        return"[EventDispatcher]"
    }, createjs.EventDispatcher = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        throw"Ticker cannot be instantiated."
    };
    e.useRAF = !1, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e._listeners = null, e._pauseable = null, e._paused = !1, e._inited = !1, e._startTime = 0, e._pausedTime = 0, e._ticks = 0, e._pausedTicks = 0, e._interval = 50, e._lastTime = 0, e._times = null, e._tickTimes = null, e._rafActive = !1, e._timeoutID = null, e.addListener = function (t, n) {
        if (t == null)return;
        e.removeListener(t), e._pauseable[e._listeners.length] = n == null ? !0 : n, e._listeners.push(t)
    }, e.init = function () {
        e._inited = !0, e._times = [], e._tickTimes = [], e._pauseable = [], e._listeners = [], e._times.push(e._lastTime = e._startTime = e._getTime()), e.setInterval(e._interval)
    }, e.removeListener = function (t) {
        var n = e._listeners;
        if (!n)return;
        var r = n.indexOf(t);
        r != -1 && (n.splice(r, 1), e._pauseable.splice(r, 1))
    }, e.removeAllListeners = function () {
        e._listeners = [], e._pauseable = []
    }, e.setInterval = function (t) {
        e._interval = t;
        if (!e._inited)return;
        e._setupTick()
    }, e.getInterval = function () {
        return e._interval
    }, e.setFPS = function (t) {
        e.setInterval(1e3 / t)
    }, e.getFPS = function () {
        return 1e3 / e._interval
    }, e.getMeasuredFPS = function (t) {
        return e._times.length < 2 ? -1 : (t == null && (t = e.getFPS() | 0), t = Math.min(e._times.length - 1, t), 1e3 / ((e._times[0] - e._times[t]) / t))
    }, e.setPaused = function (t) {
        e._paused = t
    }, e.getPaused = function () {
        return e._paused
    }, e.getTime = function (t) {
        return e._getTime() - e._startTime - (t ? e._pausedTime : 0)
    }, e.getTicks = function (t) {
        return e._ticks - (t ? e._pausedTicks : 0)
    }, e._handleAF = function () {
        e._rafActive = !1, e._setupTick(), e._getTime() - e._lastTime >= (e._interval - 1) * .97 && e._tick()
    }, e._handleTimeout = function () {
        e.timeoutID = null, e._setupTick(), e._tick()
    }, e._setupTick = function () {
        if (e._rafActive || e.timeoutID != null)return;
        if (e.useRAF) {
            var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            if (t) {
                t(e._handleAF), e._rafActive = !0;
                return
            }
        }
        e.timeoutID = setTimeout(e._handleTimeout, e._interval)
    }, e._tick = function () {
        var t = e._getTime();
        e._ticks++;
        var n = t - e._lastTime, r = e._paused;
        r && (e._pausedTicks++, e._pausedTime += n), e._lastTime = t;
        var i = e._pauseable, s = e._listeners.slice(), o = s ? s.length : 0;
        for (var u = 0; u < o; u++) {
            var a = s[u];
            if (a == null || r && i[u])continue;
            a.tick ? a.tick(n, r) : a instanceof Function && a(n, r)
        }
        e.dispatchEvent({type: "tick", paused: r, delta: n, time: t, runTime: t - e._pausedTime}), e._tickTimes.unshift(e._getTime() - t);
        while (e._tickTimes.length > 100)e._tickTimes.pop();
        e._times.unshift(t);
        while (e._times.length > 100)e._times.pop()
    };
    var t = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    e._getTime = function () {
        return t && t.call(performance) || (new Date).getTime()
    }, e.init(), createjs.Ticker = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n, r, i, s, o, u, a) {
        this.initialize(e, t, n, r, i, s, o, u, a)
    }, t = e.prototype;
    t.stageX = 0, t.stageY = 0, t.rawX = 0, t.rawY = 0, t.type = null, t.nativeEvent = null, t.onMouseMove = null, t.onMouseUp = null, t.target = null, t.pointerID = 0, t.primary = !1, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t.initialize = function (e, t, n, r, i, s, o, u, a) {
        this.type = e, this.stageX = t, this.stageY = n, this.target = r, this.nativeEvent = i, this.pointerID = s, this.primary = o, this.rawX = u == null ? t : u, this.rawY = a == null ? n : a
    }, t.clone = function () {
        return new e(this.type, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
    }, t.toString = function () {
        return"[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
    }, createjs.MouseEvent = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n, r, i, s) {
        this.initialize(e, t, n, r, i, s)
    }, t = e.prototype;
    e.identity = null, e.DEG_TO_RAD = Math.PI / 180, t.a = 1, t.b = 0, t.c = 0, t.d = 1, t.tx = 0, t.ty = 0, t.alpha = 1, t.shadow = null, t.compositeOperation = null, t.initialize = function (e, t, n, r, i, s) {
        return e != null && (this.a = e), this.b = t || 0, this.c = n || 0, r != null && (this.d = r), this.tx = i || 0, this.ty = s || 0, this
    }, t.prepend = function (e, t, n, r, i, s) {
        var o = this.tx;
        if (e != 1 || t != 0 || n != 0 || r != 1) {
            var u = this.a, a = this.c;
            this.a = u * e + this.b * n, this.b = u * t + this.b * r, this.c = a * e + this.d * n, this.d = a * t + this.d * r
        }
        return this.tx = o * e + this.ty * n + i, this.ty = o * t + this.ty * r + s, this
    }, t.append = function (e, t, n, r, i, s) {
        var o = this.a, u = this.b, a = this.c, f = this.d;
        return this.a = e * o + t * a, this.b = e * u + t * f, this.c = n * o + r * a, this.d = n * u + r * f, this.tx = i * o + s * a + this.tx, this.ty = i * u + s * f + this.ty, this
    }, t.prependMatrix = function (e) {
        return this.prepend(e.a, e.b, e.c, e.d, e.tx, e.ty), this.prependProperties(e.alpha, e.shadow, e.compositeOperation), this
    }, t.appendMatrix = function (e) {
        return this.append(e.a, e.b, e.c, e.d, e.tx, e.ty), this.appendProperties(e.alpha, e.shadow, e.compositeOperation), this
    }, t.prependTransform = function (t, n, r, i, s, o, u, a, f) {
        if (s % 360)var l = s * e.DEG_TO_RAD, c = Math.cos(l), h = Math.sin(l); else c = 1, h = 0;
        if (a || f)this.tx -= a, this.ty -= f;
        return o || u ? (o *= e.DEG_TO_RAD, u *= e.DEG_TO_RAD, this.prepend(c * r, h * r, -h * i, c * i, 0, 0), this.prepend(Math.cos(u), Math.sin(u), -Math.sin(o), Math.cos(o), t, n)) : this.prepend(c * r, h * r, -h * i, c * i, t, n), this
    }, t.appendTransform = function (t, n, r, i, s, o, u, a, f) {
        if (s % 360)var l = s * e.DEG_TO_RAD, c = Math.cos(l), h = Math.sin(l); else c = 1, h = 0;
        o || u ? (o *= e.DEG_TO_RAD, u *= e.DEG_TO_RAD, this.append(Math.cos(u), Math.sin(u), -Math.sin(o), Math.cos(o), t, n), this.append(c * r, h * r, -h * i, c * i, 0, 0)) : this.append(c * r, h * r, -h * i, c * i, t, n);
        if (a || f)this.tx -= a * this.a + f * this.c, this.ty -= a * this.b + f * this.d;
        return this
    }, t.rotate = function (e) {
        var t = Math.cos(e), n = Math.sin(e), r = this.a, i = this.c, s = this.tx;
        return this.a = r * t - this.b * n, this.b = r * n + this.b * t, this.c = i * t - this.d * n, this.d = i * n + this.d * t, this.tx = s * t - this.ty * n, this.ty = s * n + this.ty * t, this
    }, t.skew = function (t, n) {
        return t *= e.DEG_TO_RAD, n *= e.DEG_TO_RAD, this.append(Math.cos(n), Math.sin(n), -Math.sin(t), Math.cos(t), 0, 0), this
    }, t.scale = function (e, t) {
        return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this
    }, t.translate = function (e, t) {
        return this.tx += e, this.ty += t, this
    }, t.identity = function () {
        return this.alpha = this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.shadow = this.compositeOperation = null, this
    }, t.invert = function () {
        var e = this.a, t = this.b, n = this.c, r = this.d, i = this.tx, s = e * r - t * n;
        return this.a = r / s, this.b = -t / s, this.c = -n / s, this.d = e / s, this.tx = (n * this.ty - r * i) / s, this.ty = -(e * this.ty - t * i) / s, this
    }, t.isIdentity = function () {
        return this.tx == 0 && this.ty == 0 && this.a == 1 && this.b == 0 && this.c == 0 && this.d == 1
    }, t.decompose = function (t) {
        t == null && (t = {}), t.x = this.tx, t.y = this.ty, t.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), t.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var n = Math.atan2(-this.c, this.d), r = Math.atan2(this.b, this.a);
        return n == r ? (t.rotation = r / e.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (t.rotation += t.rotation > 0 ? -180 : 180), t.skewX = t.skewY = 0) : (t.skewX = n / e.DEG_TO_RAD, t.skewY = r / e.DEG_TO_RAD), t
    }, t.reinitialize = function (e, t, n, r, i, s, o, u, a) {
        return this.initialize(e, t, n, r, i, s), this.alpha = o || 1, this.shadow = u, this.compositeOperation = a, this
    }, t.appendProperties = function (e, t, n) {
        return this.alpha *= e, this.shadow = t || this.shadow, this.compositeOperation = n || this.compositeOperation, this
    }, t.prependProperties = function (e, t, n) {
        return this.alpha *= e, this.shadow = this.shadow || t, this.compositeOperation = this.compositeOperation || n, this
    }, t.clone = function () {
        var t = new e(this.a, this.b, this.c, this.d, this.tx, this.ty);
        return t.shadow = this.shadow, t.alpha = this.alpha, t.compositeOperation = this.compositeOperation, t
    }, t.toString = function () {
        return"[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
    }, e.identity = new e(1, 0, 0, 1, 0, 0), createjs.Matrix2D = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t) {
        this.initialize(e, t)
    }, t = e.prototype;
    t.x = 0, t.y = 0, t.initialize = function (e, t) {
        this.x = e == null ? 0 : e, this.y = t == null ? 0 : t
    }, t.clone = function () {
        return new e(this.x, this.y)
    }, t.toString = function () {
        return"[Point (x=" + this.x + " y=" + this.y + ")]"
    }, createjs.Point = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n, r) {
        this.initialize(e, t, n, r)
    }, t = e.prototype;
    t.x = 0, t.y = 0, t.width = 0, t.height = 0, t.initialize = function (e, t, n, r) {
        this.x = e == null ? 0 : e, this.y = t == null ? 0 : t, this.width = n == null ? 0 : n, this.height = r == null ? 0 : r
    }, t.clone = function () {
        return new e(this.x, this.y, this.width, this.height)
    }, t.toString = function () {
        return"[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
    }, createjs.Rectangle = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n, r, i, s, o) {
        this.initialize(e, t, n, r, i, s, o)
    }, t = e.prototype;
    t.target = null, t.overLabel = null, t.outLabel = null, t.downLabel = null, t.play = !1, t._isPressed = !1, t._isOver = !1, t.initialize = function (e, t, n, r, i, s, o) {
        if (!e.addEventListener)return;
        this.target = e, e.cursor = "pointer", this.overLabel = n == null ? "over" : n, this.outLabel = t == null ? "out" : t, this.downLabel = r == null ? "down" : r, this.play = i, this.setEnabled(!0), this.handleEvent({}), s && (o && (s.actionsEnabled = !1, s.gotoAndStop && s.gotoAndStop(o)), e.hitArea = s)
    }, t.setEnabled = function (e) {
        var t = this.target;
        e ? (t.addEventListener("mouseover", this), t.addEventListener("mouseout", this), t.addEventListener("mousedown", this)) : (t.removeEventListener("mouseover", this), t.removeEventListener("mouseout", this), t.removeEventListener("mousedown", this))
    }, t.toString = function () {
        return"[ButtonHelper]"
    }, t.handleEvent = function (e) {
        var t, n = this.target, r = e.type;
        r == "mousedown" ? (e.addEventListener("mouseup", this), this._isPressed = !0, t = this.downLabel) : r == "mouseup" ? (this._isPressed = !1, t = this._isOver ? this.overLabel : this.outLabel) : r == "mouseover" ? (this._isOver = !0, t = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, t = this._isPressed ? this.overLabel : this.outLabel), this.play ? n.gotoAndPlay && n.gotoAndPlay(t) : n.gotoAndStop && n.gotoAndStop(t)
    }, createjs.ButtonHelper = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype;
    t.initialize = function () {
    }, t.getBounds = function () {
        return new createjs.Rectangle(0, 0, 0, 0)
    }, t.applyFilter = function (e, t, n, r, i, s, o, u) {
    }, t.toString = function () {
        return"[Filter]"
    }, t.clone = function () {
        return new e
    }, createjs.Filter = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n) {
        this.initialize(e, t, n)
    }, t = e.prototype = new createjs.Filter;
    t.initialize = function (e, t, n) {
        if (isNaN(e) || e < 0)e = 0;
        this.blurX = e | 0;
        if (isNaN(t) || t < 0)t = 0;
        this.blurY = t | 0;
        if (isNaN(n) || n < 1)n = 1;
        this.quality = n | 0
    }, t.blurX = 0, t.blurY = 0, t.quality = 1, t.getBounds = function () {
        return new createjs.Rectangle(-this.blurX, -this.blurY, 2 * this.blurX, 2 * this.blurY)
    }, t.applyFilter = function (e, t, n, r, i, s, o, u) {
        s = s || e, o == null && (o = t), u == null && (u = n);
        try {
            var a = e.getImageData(t, n, r, i)
        } catch (f) {
            return!1
        }
        var l = this.blurX;
        if (isNaN(l) || l < 0)return!1;
        l |= 0;
        var c = this.blurY;
        if (isNaN(c) || c < 0)return!1;
        c |= 0;
        if (l == 0 && c == 0)return!1;
        var h = this.quality;
        if (isNaN(h) || h < 1)h = 1;
        h |= 0, h > 3 && (h = 3), h < 1 && (h = 1);
        var p = a.data, d, v, m, g, t, n, y, b, w, E, S, x, T, N = r - 1, C = i - 1, k = l + 1, L = l + k, A = c + 1, O = c + A, M = 1 / (L * O), _ = [], D = [], P = [], H = [], B = [], j = [];
        while (h-- > 0) {
            T = x = 0;
            for (n = 0; n < i; n++) {
                d = p[T] * k, v = p[T + 1] * k, m = p[T + 2] * k, g = p[T + 3] * k;
                for (y = 1; y <= l; y++)b = T + ((y > N ? N : y) << 2), d += p[b++], v += p[b++], m += p[b++], g += p[b];
                for (t = 0; t < r; t++)_[x] = d, D[x] = v, P[x] = m, H[x] = g, n == 0 && (B[t] = Math.min(t + k, N) << 2, j[t] = Math.max(t - l, 0) << 2), w = T + B[t], E = T + j[t], d += p[w++] - p[E++], v += p[w++] - p[E++], m += p[w++] - p[E++], g += p[w] - p[E], x++;
                T += r << 2
            }
            for (t = 0; t < r; t++) {
                S = t, d = _[S] * A, v = D[S] * A, m = P[S] * A, g = H[S] * A;
                for (y = 1; y <= c; y++)S += y > C ? 0 : r, d += _[S], v += D[S], m += P[S], g += H[S];
                x = t << 2;
                for (n = 0; n < i; n++)p[x] = d * M + .5 | 0, p[x + 1] = v * M + .5 | 0, p[x + 2] = m * M + .5 | 0, p[x + 3] = g * M + .5 | 0, t == 0 && (B[n] = Math.min(n + A, C) * r, j[n] = Math.max(n - c, 0) * r), w = t + B[n], E = t + j[n], d += _[w] - _[E], v += D[w] - D[E], m += P[w] - P[E], g += H[w] - H[E], x += r << 2
            }
        }
        return s.putImageData(a, o, u), !0
    }, t.clone = function () {
        return new e(this.blurX, this.blurY, this.quality)
    }, t.toString = function () {
        return"[BoxBlurFilter]"
    }, createjs.BoxBlurFilter = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype = new createjs.Filter;
    t.matrix = null, t.initialize = function (e) {
        this.matrix = e
    }, t.applyFilter = function (e, t, n, r, i, s, o, u) {
        s = s || e, o == null && (o = t), u == null && (u = n);
        try {
            var a = e.getImageData(t, n, r, i)
        } catch (f) {
            return!1
        }
        var l = a.data, c = l.length, h, p, d, v, m = this.matrix, g = m[0], y = m[1], b = m[2], w = m[3], E = m[4], S = m[5], x = m[6], T = m[7], N = m[8], C = m[9], k = m[10], L = m[11], A = m[12], O = m[13], M = m[14], _ = m[15], D = m[16], P = m[17], H = m[18], B = m[19];
        for (var j = 0; j < c; j += 4)h = l[j], p = l[j + 1], d = l[j + 2], v = l[j + 3], l[j] = h * g + p * y + d * b + v * w + E, l[j + 1] = h * S + p * x + d * T + v * N + C, l[j + 2] = h * k + p * L + d * A + v * O + M, l[j + 3] = h * _ + p * D + d * P + v * H + B;
        return a.data = l, s.putImageData(a, o, u), !0
    }, t.toString = function () {
        return"[ColorMatrixFilter]"
    }, t.clone = function () {
        return new e(this.matrix)
    }, createjs.ColorMatrixFilter = e
}(), this.createjs = this.createjs || {}, function () {
    ColorMatrix = function (e, t, n, r) {
        this.initialize(e, t, n, r)
    };
    var e = ColorMatrix.prototype = [];
    ColorMatrix.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], ColorMatrix.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length, e.initialize = function (e, t, n, r) {
        return this.reset(), this.adjustColor(e, t, n, r), this
    }, e.reset = function () {
        return this.copyMatrix(ColorMatrix.IDENTITY_MATRIX)
    }, e.adjustColor = function (e, t, n, r) {
        return this.adjustHue(r), this.adjustContrast(t), this.adjustBrightness(e), this.adjustSaturation(n)
    }, e.adjustBrightness = function (e) {
        return e == 0 || isNaN(e) ? this : (e = this._cleanValue(e, 255), this._multiplyMatrix([1, 0, 0, 0, e, 0, 1, 0, 0, e, 0, 0, 1, 0, e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
    }, e.adjustContrast = function (e) {
        if (e == 0 || isNaN(e))return this;
        e = this._cleanValue(e, 100);
        var t;
        return e < 0 ? t = 127 + e / 100 * 127 : (t = e % 1, t == 0 ? t = ColorMatrix.DELTA_INDEX[e] : t = ColorMatrix.DELTA_INDEX[e << 0] * (1 - t) + ColorMatrix.DELTA_INDEX[(e << 0) + 1] * t, t = t * 127 + 127), this._multiplyMatrix([t / 127, 0, 0, 0, .5 * (127 - t), 0, t / 127, 0, 0, .5 * (127 - t), 0, 0, t / 127, 0, .5 * (127 - t), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    }, e.adjustSaturation = function (e) {
        if (e == 0 || isNaN(e))return this;
        e = this._cleanValue(e, 100);
        var t = 1 + (e > 0 ? 3 * e / 100 : e / 100), n = .3086, r = .6094, i = .082;
        return this._multiplyMatrix([n * (1 - t) + t, r * (1 - t), i * (1 - t), 0, 0, n * (1 - t), r * (1 - t) + t, i * (1 - t), 0, 0, n * (1 - t), r * (1 - t), i * (1 - t) + t, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    }, e.adjustHue = function (e) {
        if (e == 0 || isNaN(e))return this;
        e = this._cleanValue(e, 180) / 180 * Math.PI;
        var t = Math.cos(e), n = Math.sin(e), r = .213, i = .715, s = .072;
        return this._multiplyMatrix([r + t * (1 - r) + n * -r, i + t * -i + n * -i, s + t * -s + n * (1 - s), 0, 0, r + t * -r + n * .143, i + t * (1 - i) + n * .14, s + t * -s + n * -0.283, 0, 0, r + t * -r + n * -(1 - r), i + t * -i + n * i, s + t * (1 - s) + n * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    }, e.concat = function (e) {
        return e = this._fixMatrix(e), e.length != ColorMatrix.LENGTH ? this : (this._multiplyMatrix(e), this)
    }, e.clone = function () {
        return new ColorMatrix(this)
    }, e.toArray = function () {
        return this.slice(0, ColorMatrix.LENGTH)
    }, e.copyMatrix = function (e) {
        var t = ColorMatrix.LENGTH;
        for (var n = 0; n < t; n++)this[n] = e[n];
        return this
    }, e._multiplyMatrix = function (e) {
        var t = [];
        for (var n = 0; n < 5; n++) {
            for (var r = 0; r < 5; r++)t[r] = this[r + n * 5];
            for (var r = 0; r < 5; r++) {
                var i = 0;
                for (var s = 0; s < 5; s++)i += e[r + s * 5] * t[s];
                this[r + n * 5] = i
            }
        }
    }, e._cleanValue = function (e, t) {
        return Math.min(t, Math.max(-t, e))
    }, e._fixMatrix = function (e) {
        return e instanceof ColorMatrix && (e = e.slice(0)), e.length < ColorMatrix.LENGTH ? e = e.slice(0, e.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(e.length, ColorMatrix.LENGTH)) : e.length > ColorMatrix.LENGTH && (e = e.slice(0, ColorMatrix.LENGTH)), e
    }, createjs.ColorMatrix = ColorMatrix
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n, r, i, s, o, u) {
        this.initialize(e, t, n, r, i, s, o, u)
    }, t = e.prototype = new createjs.Filter;
    t.redMultiplier = 1, t.greenMultiplier = 1, t.blueMultiplier = 1, t.alphaMultiplier = 1, t.redOffset = 0, t.greenOffset = 0, t.blueOffset = 0, t.alphaOffset = 0, t.initialize = function (e, t, n, r, i, s, o, u) {
        this.redMultiplier = e != null ? e : 1, this.greenMultiplier = t != null ? t : 1, this.blueMultiplier = n != null ? n : 1, this.alphaMultiplier = r != null ? r : 1, this.redOffset = i || 0, this.greenOffset = s || 0, this.blueOffset = o || 0, this.alphaOffset = u || 0
    }, t.applyFilter = function (e, t, n, r, i, s, o, u) {
        s = s || e, o == null && (o = t), u == null && (u = n);
        try {
            var a = e.getImageData(t, n, r, i)
        } catch (f) {
            return!1
        }
        var l = a.data, c = l.length;
        for (var h = 0; h < c; h += 4)l[h] = l[h] * this.redMultiplier + this.redOffset, l[h + 1] = l[h + 1] * this.greenMultiplier + this.greenOffset, l[h + 2] = l[h + 2] * this.blueMultiplier + this.blueOffset, l[h + 3] = l[h + 3] * this.alphaMultiplier + this.alphaOffset;
        return a.data = l, s.putImageData(a, o, u), !0
    }, t.toString = function () {
        return"[ColorFilter]"
    }, t.clone = function () {
        return new e(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
    }, createjs.ColorFilter = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n, r) {
        this.initialize(e, t, n, r)
    }, t = e.prototype;
    e.identity = null, t.color = null, t.offsetX = 0, t.offsetY = 0, t.blur = 0, t.initialize = function (e, t, n, r) {
        this.color = e, this.offsetX = t, this.offsetY = n, this.blur = r
    }, t.toString = function () {
        return"[Shadow]"
    }, t.clone = function () {
        return new e(this.color, this.offsetX, this.offsetY, this.blur)
    }, e.identity = new e("transparent", 0, 0, 0), createjs.Shadow = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype;
    t.complete = !0, t.onComplete = null, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._animations = null, t._frames = null, t._images = null, t._data = null, t._loadCount = 0, t._frameHeight = 0, t._frameWidth = 0, t._numFrames = 0, t._regX = 0, t._regY = 0, t.initialize = function (e) {
        var t, n, r, i;
        if (e == null)return;
        if (e.images && (n = e.images.length) > 0) {
            i = this._images = [];
            for (t = 0; t < n; t++) {
                var s = e.images[t];
                if (typeof s == "string") {
                    var o = s;
                    s = new Image, s.src = o
                }
                i.push(s), !s.getContext && !s.complete && (this._loadCount++, this.complete = !1, function (e) {
                    s.onload = function () {
                        e._handleImageLoad()
                    }
                }(this))
            }
        }
        if (e.frames != null)if (e.frames instanceof Array) {
            this._frames = [], i = e.frames;
            for (t = 0, n = i.length; t < n; t++) {
                var u = i[t];
                this._frames.push({image: this._images[u[4] ? u[4] : 0], rect: new createjs.Rectangle(u[0], u[1], u[2], u[3]), regX: u[5] || 0, regY: u[6] || 0})
            }
        } else r = e.frames, this._frameWidth = r.width, this._frameHeight = r.height, this._regX = r.regX || 0, this._regY = r.regY || 0, this._numFrames = r.count, this._loadCount == 0 && this._calculateFrames();
        if ((r = e.animations) != null) {
            this._animations = [], this._data = {};
            var a;
            for (a in r) {
                var f = {name: a}, l = r[a];
                if (typeof l == "number")i = f.frames = [l]; else if (l instanceof Array)if (l.length == 1)f.frames = [l[0]]; else {
                    f.frequency = l[3], f.next = l[2], i = f.frames = [];
                    for (t = l[0]; t <= l[1]; t++)i.push(t)
                } else {
                    f.frequency = l.frequency, f.next = l.next;
                    var c = l.frames;
                    i = f.frames = typeof c == "number" ? [c] : c.slice(0)
                }
                f.next = i.length < 2 || f.next == 0 ? null : f.next == null || f.next == 1 ? a : f.next, f.frequency || (f.frequency = 1), this._animations.push(a), this._data[a] = f
            }
        }
    }, t.getNumFrames = function (e) {
        if (e == null)return this._frames ? this._frames.length : this._numFrames;
        var t = this._data[e];
        return t == null ? 0 : t.frames.length
    }, t.getAnimations = function () {
        return this._animations.slice(0)
    }, t.getAnimation = function (e) {
        return this._data[e]
    }, t.getFrame = function (e) {
        var t;
        return this.complete && this._frames && (t = this._frames[e]) ? t : null
    }, t.getFrameBounds = function (e) {
        var t = this.getFrame(e);
        return t ? new createjs.Rectangle(-t.regX, -t.regY, t.rect.width, t.rect.height) : null
    }, t.toString = function () {
        return"[SpriteSheet]"
    }, t.clone = function () {
        var t = new e;
        return t.complete = this.complete, t._animations = this._animations, t._frames = this._frames, t._images = this._images, t._data = this._data, t._frameHeight = this._frameHeight, t._frameWidth = this._frameWidth, t._numFrames = this._numFrames, t._loadCount = this._loadCount, t
    }, t._handleImageLoad = function () {
        --this._loadCount == 0 && (this._calculateFrames(), this.complete = !0, this.onComplete && this.onComplete(), this.dispatchEvent("complete"))
    }, t._calculateFrames = function () {
        if (this._frames || this._frameWidth == 0)return;
        this._frames = [];
        var e = 0, t = this._frameWidth, n = this._frameHeight;
        for (var r = 0, i = this._images; r < i.length; r++) {
            var s = i[r], o = (s.width + 1
                ) / t | 0, u = (s.height + 1) / n | 0, a = this._numFrames > 0 ? Math.min(this._numFrames - e, o * u) : o * u;
            for (var f = 0; f < a; f++)this._frames.push({image: s, rect: new createjs.Rectangle(f % o * t, (f / o | 0) * n, t, n), regX: this._regX, regY: this._regY});
            e += a
        }
        this._numFrames = e
    }, createjs.SpriteSheet = e
}(), this.createjs = this.createjs || {}, function () {
    function e(e, t, n) {
        this.f = e, this.params = t, this.path = n == null ? !0 : n
    }

    e.prototype.exec = function (e) {
        this.f.apply(e, this.params)
    };
    var t = function () {
        this.initialize()
    }, n = t.prototype;
    t.getRGB = function (e, t, n, r) {
        return e != null && n == null && (r = t, n = e & 255, t = e >> 8 & 255, e = e >> 16 & 255), r == null ? "rgb(" + e + "," + t + "," + n + ")" : "rgba(" + e + "," + t + "," + n + "," + r + ")"
    }, t.getHSL = function (e, t, n, r) {
        return r == null ? "hsl(" + e % 360 + "," + t + "%," + n + "%)" : "hsla(" + e % 360 + "," + t + "%," + n + "%," + r + ")"
    }, t.BASE_64 = {A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32, h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40, p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48, x: 49, y: 50, z: 51, 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, "+": 62, "/": 63}, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"], t._ctx = (createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).getContext("2d"), t.beginCmd = new e(t._ctx.beginPath, [], !1), t.fillCmd = new e(t._ctx.fill, [], !1), t.strokeCmd = new e(t._ctx.stroke, [], !1), n._strokeInstructions = null, n._strokeStyleInstructions = null, n._ignoreScaleStroke = !1, n._fillInstructions = null, n._instructions = null, n._oldInstructions = null, n._activeInstructions = null, n._active = !1, n._dirty = !1, n.initialize = function () {
        this.clear(), this._ctx = t._ctx
    }, n.isEmpty = function () {
        return!(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length)
    }, n.draw = function (e) {
        this._dirty && this._updateInstructions();
        var t = this._instructions;
        for (var n = 0, r = t.length; n < r; n++)t[n].exec(e)
    }, n.drawAsPath = function (e) {
        this._dirty && this._updateInstructions();
        var t, n = this._instructions;
        for (var r = 0, i = n.length; r < i; r++)((t = n[r]).path || r == 0) && t.exec(e)
    }, n.moveTo = function (t, n) {
        return this._activeInstructions.push(new e(this._ctx.moveTo, [t, n])), this
    }, n.lineTo = function (t, n) {
        return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.lineTo, [t, n])), this
    }, n.arcTo = function (t, n, r, i, s) {
        return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.arcTo, [t, n, r, i, s])), this
    }, n.arc = function (t, n, r, i, s, o) {
        return this._dirty = this._active = !0, o == null && (o = !1), this._activeInstructions.push(new e(this._ctx.arc, [t, n, r, i, s, o])), this
    }, n.quadraticCurveTo = function (t, n, r, i) {
        return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.quadraticCurveTo, [t, n, r, i])), this
    }, n.bezierCurveTo = function (t, n, r, i, s, o) {
        return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.bezierCurveTo, [t, n, r, i, s, o])), this
    }, n.rect = function (t, n, r, i) {
        return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.rect, [t, n, r, i])), this
    }, n.closePath = function () {
        return this._active && (this._dirty = !0, this._activeInstructions.push(new e(this._ctx.closePath, []))), this
    }, n.clear = function () {
        return this._instructions = [], this._oldInstructions = [], this._activeInstructions = [], this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = null, this._active = this._dirty = !1, this
    }, n.beginFill = function (n) {
        return this._active && this._newPath(), this._fillInstructions = n ? [new e(this._setProp, ["fillStyle", n], !1), t.fillCmd] : null, this
    }, n.beginLinearGradientFill = function (n, r, i, s, o, u) {
        this._active && this._newPath();
        var a = this._ctx.createLinearGradient(i, s, o, u);
        for (var f = 0, l = n.length; f < l; f++)a.addColorStop(r[f], n[f]);
        return this._fillInstructions = [new e(this._setProp, ["fillStyle", a], !1), t.fillCmd], this
    }, n.beginRadialGradientFill = function (n, r, i, s, o, u, a, f) {
        this._active && this._newPath();
        var l = this._ctx.createRadialGradient(i, s, o, u, a, f);
        for (var c = 0, h = n.length; c < h; c++)l.addColorStop(r[c], n[c]);
        return this._fillInstructions = [new e(this._setProp, ["fillStyle", l], !1), t.fillCmd], this
    }, n.beginBitmapFill = function (n, r, i) {
        this._active && this._newPath(), r = r || "";
        var s = this._ctx.createPattern(n, r), o = new e(this._setProp, ["fillStyle", s], !1), u;
        return i ? u = [o, new e(this._ctx.save, [], !1), new e(this._ctx.transform, [i.a, i.b, i.c, i.d, i.tx, i.ty], !1), t.fillCmd, new e(this._ctx.restore, [], !1)] : u = [o, t.fillCmd], this._fillInstructions = u, this
    }, n.endFill = function () {
        return this.beginFill()
    }, n.setStrokeStyle = function (n, r, i, s, o) {
        return this._active && this._newPath(), this._strokeStyleInstructions = [new e(this._setProp, ["lineWidth", n == null ? "1" : n], !1), new e(this._setProp, ["lineCap", r == null ? "butt" : isNaN(r) ? r : t.STROKE_CAPS_MAP[r]], !1), new e(this._setProp, ["lineJoin", i == null ? "miter" : isNaN(i) ? i : t.STROKE_JOINTS_MAP[i]], !1), new e(this._setProp, ["miterLimit", s == null ? "10" : s], !1)], this._ignoreScaleStroke = o, this
    }, n.beginStroke = function (t) {
        return this._active && this._newPath(), this._strokeInstructions = t ? [new e(this._setProp, ["strokeStyle", t], !1)] : null, this
    }, n.beginLinearGradientStroke = function (t, n, r, i, s, o) {
        this._active && this._newPath();
        var u = this._ctx.createLinearGradient(r, i, s, o);
        for (var a = 0, f = t.length; a < f; a++)u.addColorStop(n[a], t[a]);
        return this._strokeInstructions = [new e(this._setProp, ["strokeStyle", u], !1)], this
    }, n.beginRadialGradientStroke = function (t, n, r, i, s, o, u, a) {
        this._active && this._newPath();
        var f = this._ctx.createRadialGradient(r, i, s, o, u, a);
        for (var l = 0, c = t.length; l < c; l++)f.addColorStop(n[l], t[l]);
        return this._strokeInstructions = [new e(this._setProp, ["strokeStyle", f], !1)], this
    }, n.beginBitmapStroke = function (t, n) {
        this._active && this._newPath(), n = n || "";
        var r = this._ctx.createPattern(t, n);
        return this._strokeInstructions = [new e(this._setProp, ["strokeStyle", r], !1)], this
    }, n.endStroke = function () {
        return this.beginStroke(), this
    }, n.curveTo = n.quadraticCurveTo, n.drawRect = n.rect, n.drawRoundRect = function (e, t, n, r, i) {
        return this.drawRoundRectComplex(e, t, n, r, i, i, i, i), this
    }, n.drawRoundRectComplex = function (t, n, r, i, s, o, u, a) {
        var f = (r < i ? r : i) / 2, l = 0, c = 0, h = 0, p = 0;
        s < 0 && (s *= l = -1), s > f && (s = f), o < 0 && (o *= c = -1), o > f && (o = f), u < 0 && (u *= h = -1), u > f && (u = f), a < 0 && (a *= p = -1), a > f && (a = f), this._dirty = this._active = !0;
        var d = this._ctx.arcTo, v = this._ctx.lineTo;
        return this._activeInstructions.push(new e(this._ctx.moveTo, [t + r - o, n]), new e(d, [t + r + o * c, n - o * c, t + r, n + o, o]), new e(v, [t + r, n + i - u]), new e(d, [t + r + u * h, n + i + u * h, t + r - u, n + i, u]), new e(v, [t + a, n + i]), new e(d, [t - a * p, n + i + a * p, t, n + i - a, a]), new e(v, [t, n + s]), new e(d, [t - s * l, n - s * l, t + s, n, s]), new e(this._ctx.closePath)), this
    }, n.drawCircle = function (e, t, n) {
        return this.arc(e, t, n, 0, Math.PI * 2), this
    }, n.drawEllipse = function (t, n, r, i) {
        this._dirty = this._active = !0;
        var s = .5522848, o = r / 2 * s, u = i / 2 * s, a = t + r, f = n + i, l = t + r / 2, c = n + i / 2;
        return this._activeInstructions.push(new e(this._ctx.moveTo, [t, c]), new e(this._ctx.bezierCurveTo, [t, c - u, l - o, n, l, n]), new e(this._ctx.bezierCurveTo, [l + o, n, a, c - u, a, c]), new e(this._ctx.bezierCurveTo, [a, c + u, l + o, f, l, f]), new e(this._ctx.bezierCurveTo, [l - o, f, t, c + u, t, c])), this
    }, n.drawPolyStar = function (t, n, r, i, s, o) {
        this._dirty = this._active = !0, s == null && (s = 0), s = 1 - s, o == null ? o = 0 : o /= 180 / Math.PI;
        var u = Math.PI / i;
        this._activeInstructions.push(new e(this._ctx.moveTo, [t + Math.cos(o) * r, n + Math.sin(o) * r]));
        for (var a = 0; a < i; a++)o += u, s != 1 && this._activeInstructions.push(new e(this._ctx.lineTo, [t + Math.cos(o) * r * s, n + Math.sin(o) * r * s])), o += u, this._activeInstructions.push(new e(this._ctx.lineTo, [t + Math.cos(o) * r, n + Math.sin(o) * r]));
        return this
    }, n.decodePath = function (e) {
        var n = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], r = [2, 2, 4, 6, 0], i = 0, s = e.length, o = [], u = 0, a = 0, f = t.BASE_64;
        while (i < s) {
            var l = e.charAt(i), c = f[l], h = c >> 3, p = n[h];
            if (!p || c & 3)throw"bad path data (@" + i + "): " + l;
            var d = r[h];
            h || (u = a = 0), o.length = 0, i++;
            var v = (c >> 2 & 1) + 2;
            for (var m = 0; m < d; m++) {
                var g = f[e.charAt(i)], y = g >> 5 ? -1 : 1;
                g = (g & 31) << 6 | f[e.charAt(i + 1)], v == 3 && (g = g << 6 | f[e.charAt(i + 2)]), g = y * g / 10, m % 2 ? u = g += u : a = g += a, o[m] = g, i += v
            }
            p.apply(this, o)
        }
        return this
    }, n.clone = function () {
        var e = new t;
        return e._instructions = this._instructions.slice(), e._activeInstructions = this._activeInstructions.slice(), e._oldInstructions = this._oldInstructions.slice(), this._fillInstructions && (e._fillInstructions = this._fillInstructions.slice()), this._strokeInstructions && (e._strokeInstructions = this._strokeInstructions.slice()), this._strokeStyleInstructions && (e._strokeStyleInstructions = this._strokeStyleInstructions.slice()), e._active = this._active, e._dirty = this._dirty, e
    }, n.toString = function () {
        return"[Graphics]"
    }, n.mt = n.moveTo, n.lt = n.lineTo, n.at = n.arcTo, n.bt = n.bezierCurveTo, n.qt = n.quadraticCurveTo, n.a = n.arc, n.r = n.rect, n.cp = n.closePath, n.c = n.clear, n.f = n.beginFill, n.lf = n.beginLinearGradientFill, n.rf = n.beginRadialGradientFill, n.bf = n.beginBitmapFill, n.ef = n.endFill, n.ss = n.setStrokeStyle, n.s = n.beginStroke, n.ls = n.beginLinearGradientStroke, n.rs = n.beginRadialGradientStroke, n.bs = n.beginBitmapStroke, n.es = n.endStroke, n.dr = n.drawRect, n.rr = n.drawRoundRect, n.rc = n.drawRoundRectComplex, n.dc = n.drawCircle, n.de = n.drawEllipse, n.dp = n.drawPolyStar, n.p = n.decodePath, n._updateInstructions = function () {
        this._instructions = this._oldInstructions.slice(), this._instructions.push(t.beginCmd), this._instructions.push.apply(this._instructions, this._activeInstructions), this._fillInstructions && this._instructions.push.apply(this._instructions, this._fillInstructions), this._strokeInstructions && (this._strokeStyleInstructions && this._instructions.push.apply(this._instructions, this._strokeStyleInstructions), this._instructions.push.apply(this._instructions, this._strokeInstructions), this._ignoreScaleStroke ? this._instructions.push(new e(this._ctx.save, [], !1), new e(this._ctx.setTransform, [1, 0, 0, 1, 0, 0], !1), t.strokeCmd, new e(this._ctx.restore, [], !1)) : this._instructions.push(t.strokeCmd))
    }, n._newPath = function () {
        this._dirty && this._updateInstructions(), this._oldInstructions = this._instructions, this._activeInstructions = [], this._active = this._dirty = !1
    }, n._setProp = function (e, t) {
        this[e] = t
    }, createjs.Graphics = t
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype;
    e.suppressCrossDomainErrors = !1, e._hitTestCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), e._hitTestCanvas.width = e._hitTestCanvas.height = 1, e._hitTestContext = e._hitTestCanvas.getContext("2d"), e._nextCacheID = 1, t.alpha = 1, t.cacheCanvas = null, t.id = -1, t.mouseEnabled = !0, t.name = null, t.parent = null, t.regX = 0, t.regY = 0, t.rotation = 0, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.shadow = null, t.visible = !0, t.x = 0, t.y = 0, t.compositeOperation = null, t.snapToPixel = !1, t.onPress = null, t.onClick = null, t.onDoubleClick = null, t.onMouseOver = null, t.onMouseOut = null, t.onTick = null, t.filters = null, t.cacheID = 0, t.mask = null, t.hitArea = null, t.cursor = null, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._cacheOffsetX = 0, t._cacheOffsetY = 0, t._cacheScale = 1, t._cacheDataURLID = 0, t._cacheDataURL = null, t._matrix = null, t.initialize = function () {
        this.id = createjs.UID.get(), this._matrix = new createjs.Matrix2D
    }, t.isVisible = function () {
        return!!this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0
    }, t.draw = function (e, t) {
        var n = this.cacheCanvas;
        if (t || !n)return!1;
        var r = this._cacheScale;
        return e.drawImage(n, this._cacheOffsetX, this._cacheOffsetY, n.width / r, n.height / r), !0
    }, t.updateContext = function (e) {
        var t, n = this.mask, r = this;
        n && n.graphics && !n.graphics.isEmpty() && (t = n.getMatrix(n._matrix), e.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), n.graphics.drawAsPath(e), e.clip(), t.invert(), e.transform(t.a, t.b, t.c, t.d, t.tx, t.ty)), t = r._matrix.identity().appendTransform(r.x, r.y, r.scaleX, r.scaleY, r.rotation, r.skewX, r.skewY, r.regX, r.regY), e.transform(t.a, t.b, t.c, t.d, t.tx + .5 | 0, t.ty + .5 | 0), e.globalAlpha *= r.alpha, r.compositeOperation && (e.globalCompositeOperation = r.compositeOperation), r.shadow && this._applyShadow(e, r.shadow)
    }, t.cache = function (e, t, n, r, i) {
        i = i || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this.cacheCanvas.width = Math.ceil(n * i), this.cacheCanvas.height = Math.ceil(r * i), this._cacheOffsetX = e, this._cacheOffsetY = t, this._cacheScale = i || 1, this.updateCache()
    }, t.updateCache = function (t) {
        var n = this.cacheCanvas, r = this._cacheScale, i = this._cacheOffsetX * r, s = this._cacheOffsetY * r;
        if (!n)throw"cache() must be called before updateCache()";
        var o = n.getContext("2d");
        o.save(), t || o.clearRect(0, 0, n.width + 1, n.height + 1), o.globalCompositeOperation = t, o.setTransform(r, 0, 0, r, -i, -s), this.draw(o, !0), this._applyFilters(), o.restore(), this.cacheID = e._nextCacheID++
    }, t.uncache = function () {
        this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0, this._cacheScale = 1
    }, t.getCacheDataURL = function () {
        return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
    }, t.getStage = function () {
        var e = this;
        while (e.parent)e = e.parent;
        return e instanceof createjs.Stage ? e : null
    }, t.localToGlobal = function (e, t) {
        var n = this.getConcatenatedMatrix(this._matrix);
        return n == null ? null : (n.append(1, 0, 0, 1, e, t), new createjs.Point(n.tx, n.ty))
    }, t.globalToLocal = function (e, t) {
        var n = this.getConcatenatedMatrix(this._matrix);
        return n == null ? null : (n.invert(), n.append(1, 0, 0, 1, e, t), new createjs.Point(n.tx, n.ty))
    }, t.localToLocal = function (e, t, n) {
        var r = this.localToGlobal(e, t);
        return n.globalToLocal(r.x, r.y)
    }, t.setTransform = function (e, t, n, r, i, s, o, u, a) {
        return this.x = e || 0, this.y = t || 0, this.scaleX = n == null ? 1 : n, this.scaleY = r == null ? 1 : r, this.rotation = i || 0, this.skewX = s || 0, this.skewY = o || 0, this.regX = u || 0, this.regY = a || 0, this
    }, t.getMatrix = function (e) {
        var t = this;
        return(e ? e.identity() : new createjs.Matrix2D).appendTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, t.regX, t.regY).appendProperties(t.alpha, t.shadow, t.compositeOperation)
    }, t.getConcatenatedMatrix = function (e) {
        e ? e.identity() : e = new createjs.Matrix2D;
        var t = this;
        while (t != null)e.prependTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, t.regX, t.regY).prependProperties(t.alpha, t.shadow, t.compositeOperation), t = t.parent;
        return e
    }, t.hitTest = function (t, n) {
        var r = e._hitTestContext;
        r.setTransform(1, 0, 0, 1, -t, -n), this.draw(r);
        var i = this._testHit(r);
        return r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, 2, 2), i
    }, t.set = function (e) {
        for (var t in e)this[t] = e[t];
        return this
    }, t.clone = function () {
        var t = new e;
        return this.cloneProps(t), t
    }, t.toString = function () {
        return"[DisplayObject (name=" + this.name + ")]"
    }, t.cloneProps = function (e) {
        e.alpha = this.alpha, e.name = this.name, e.regX = this.regX, e.regY = this.regY, e.rotation = this.rotation, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.shadow = this.shadow, e.skewX = this.skewX, e.skewY = this.skewY, e.visible = this.visible, e.x = this.x, e.y = this.y, e.mouseEnabled = this.mouseEnabled, e.compositeOperation = this.compositeOperation, this.cacheCanvas && (e.cacheCanvas = this.cacheCanvas.cloneNode(!0), e.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0, 0, this.cacheCanvas.width, this.cacheCanvas.height), 0, 0))
    }, t._applyShadow = function (e, t) {
        t = t || Shadow.identity, e.shadowColor = t.color, e.shadowOffsetX = t.offsetX, e.shadowOffsetY = t.offsetY, e.shadowBlur = t.blur
    }, t._tick = function (e) {
        this.onTick && this.onTick.apply(this, e);
        var t = this._listeners;
        t && t.tick && this.dispatchEvent({type: "tick", params: e})
    }, t._testHit = function (t) {
        try {
            var n = t.getImageData(0, 0, 1, 1).data[3] > 1
        } catch (r) {
            if (!e.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
        }
        return n
    }, t._applyFilters = function () {
        if (!this.filters || this.filters.length == 0 || !this.cacheCanvas)return;
        var e = this.filters.length, t = this.cacheCanvas.getContext("2d"), n = this.cacheCanvas.width, r = this.cacheCanvas.height;
        for (var i = 0; i < e; i++)this.filters[i].applyFilter(t, 0, 0, n, r)
    }, t._hasMouseHandler = function (e) {
        var t = this._listeners;
        return!!(e & 1 && (this.onPress || this.onClick || this.onDoubleClick || t && (this.hasEventListener("mousedown") || this.hasEventListener("click") || this.hasEventListener("dblclick"))) || e & 2 && (this.onMouseOver || this.onMouseOut || this.cursor || t && (this.hasEventListener("mouseover") || this.hasEventListener("mouseout"))))
    }, createjs.DisplayObject = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype = new createjs.DisplayObject;
    t.children = null, t.DisplayObject_initialize = t.initialize, t.initialize = function () {
        this.DisplayObject_initialize(), this.children = []
    }, t.isVisible = function () {
        var e = this.cacheCanvas || this.children.length;
        return!!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e)
    }, t.DisplayObject_draw = t.draw, t.draw = function (e, t) {
        if (this.DisplayObject_draw(e, t))return!0;
        var n = this.children.slice(0);
        for (var r = 0, i = n.length; r < i; r++) {
            var s = n[r];
            if (!s.isVisible())continue;
            e.save(), s.updateContext(e), s.draw(e), e.restore()
        }
        return!0
    }, t.addChild = function (e) {
        if (e == null)return e;
        var t = arguments.length;
        if (t > 1) {
            for (var n = 0; n < t; n++)this.addChild(arguments[n]);
            return arguments[t - 1]
        }
        return e.parent && e.parent.removeChild(e), e.parent = this, this.children.push(e), e
    }, t.addChildAt = function (e, t) {
        var n = arguments.length, r = arguments[n - 1];
        if (r < 0 || r > this.children.length)return arguments[n - 2];
        if (n > 2) {
            for (var i = 0; i < n - 1; i++)this.addChildAt(arguments[i], r + i);
            return arguments[n - 2]
        }
        return e.parent && e.parent.removeChild(e), e.parent = this, this.children.splice(t, 0, e), e
    }, t.removeChild = function (e) {
        var t = arguments.length;
        if (t > 1) {
            var n = !0;
            for (var r = 0; r < t; r++)n = n && this.removeChild(arguments[r]);
            return n
        }
        return this.removeChildAt(this.children.indexOf(e))
    }, t.removeChildAt = function (e) {
        var t = arguments.length;
        if (t > 1) {
            var n = [];
            for (var r = 0; r < t; r++)n[r] = arguments[r];
            n.sort(function (e, t) {
                return t - e
            });
            var i = !0;
            for (var r = 0; r < t; r++)i = i && this.removeChildAt(n[r]);
            return i
        }
        if (e < 0 || e > this.children.length - 1)return!1;
        var s = this.children[e];
        return s && (s.parent = null), this.children.splice(e, 1), !0
    }, t.removeAllChildren = function () {
        var e = this.children;
        while (e.length)e.pop().parent = null
    }, t.getChildAt = function (e) {
        return this.children[e]
    }, t.getChildByName = function (e) {
        var t = this.children;
        for (var n = 0, r = t.length; n < r; n++)if (t[n].name == e)return t[n];
        return null
    }, t.sortChildren = function (e) {
        this.children.sort(e)
    }, t.getChildIndex = function (e) {
        return this.children.indexOf(e)
    }, t.getNumChildren = function () {
        return this.children.length
    }, t.swapChildrenAt = function (e, t) {
        var n = this.children, r = n[e], i = n[t];
        if (!r || !i)return;
        n[e] = i, n[t] = r
    }, t.swapChildren = function (e, t) {
        var n = this.children, r, i;
        for (var s = 0, o = n.length; s < o; s++) {
            n[s] == e && (r = s), n[s] == t && (i = s);
            if (r != null && i != null)break
        }
        if (s == o)return;
        n[r] = t, n[i] = e
    }, t.setChildIndex = function (e, t) {
        var n = this.children, r = n.length;
        if (e.parent != this || t < 0 || t >= r)return;
        for (var i = 0; i < r; i++)if (n[i] == e)break;
        if (i == r || i == t)return;
        n.splice(i, 1), t < i && t--, n.splice(t, 0, e)
    }, t.contains = function (e) {
        while (e) {
            if (e == this)return!0;
            e = e.parent
        }
        return!1
    }, t.hitTest = function (e, t) {
        return this.getObjectUnderPoint(e, t) != null
    }, t.getObjectsUnderPoint = function (e, t) {
        var n = [], r = this.localToGlobal(e, t);
        return this._getObjectsUnderPoint(r.x, r.y, n), n
    }, t.getObjectUnderPoint = function (e, t) {
        var n = this.localToGlobal(e, t);
        return this._getObjectsUnderPoint(n.x, n.y)
    }, t.clone = function (t) {
        var n = new e;
        this.cloneProps(n);
        if (t) {
            var r = n.children = [];
            for (var i = 0, s = this.children.length; i < s; i++) {
                var o = this.children[i].clone(t);
                o.parent = n, r.push(o)
            }
        }
        return n
    }, t.toString = function () {
        return"[Container (name=" + this.name + ")]"
    }, t.DisplayObject__tick = t._tick, t._tick = function (e) {
        for (var t = this.children.length - 1; t >= 0; t--) {
            var n = this.children[t];
            n._tick && n._tick(e)
        }
        this.DisplayObject__tick(e)
    }, t._getObjectsUnderPoint = function (t, n, r, i) {
        var s = createjs.DisplayObject._hitTestContext, o = this._matrix, u = this._hasMouseHandler(i);
        if (!this.hitArea && this.cacheCanvas && u) {
            this.getConcatenatedMatrix(o), s.setTransform(o.a, o.b, o.c, o.d, o.tx - t, o.ty - n), s.globalAlpha = o.alpha, this.draw(s);
            if (this._testHit(s))return s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, 2, 2), this
        }
        var a = this.children.length;
        for (var f = a - 1; f >= 0; f--) {
            var l = this.children[f], c = l.hitArea;
            if (!l.visible || !c && !l.isVisible() || i && !l.mouseEnabled)continue;
            var h = i && l._hasMouseHandler(i);
            if (l instanceof e && (!c || !h)) {
                var p;
                if (u) {
                    p = l._getObjectsUnderPoint(t, n);
                    if (p)return this
                } else {
                    p = l._getObjectsUnderPoint(t, n, r, i);
                    if (!r && p)return p
                }
            } else if (!i || u || h) {
                l.getConcatenatedMatrix(o), c && (o.appendTransform(c.x, c.y, c.scaleX, c.scaleY, c.rotation, c.skewX, c.skewY, c.regX, c.regY), o.alpha = c.alpha), s.globalAlpha = o.alpha, s.setTransform(o.a, o.b, o.c, o.d, o.tx - t, o.ty - n), (c || l).draw(s);
                if (!this._testHit(s))continue;
                s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, 2, 2);
                if (u)return this;
                if (!r)return l;
                r.push(l)
            }
        }
        return null
    }, createjs.Container = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype = new createjs.Container;
    e._snapToPixelEnabled = !1, t.autoClear = !0, t.canvas = null, t.ctx = null, t.mouseX = 0, t.mouseY = 0, t.onMouseMove = null, t.onMouseUp = null, t.onMouseDown = null, t.snapToPixelEnabled = !1, t.mouseInBounds = !1, t.tickOnUpdate = !0, t.mouseMoveOutside = !1, t._pointerData = null, t._pointerCount = 0, t._primaryPointerID = null, t._mouseOverIntervalID = null, t.Container_initialize = t.initialize, t.initialize = function (e) {
        this.Container_initialize(), this.canvas = typeof e == "string" ? document.getElementById(e) : e, this.ctx = this.canvas.getContext("2d"), this._pointerData = {}, this.enableDOMEvents(!0)
    }, t.update = function () {
        if (!this.canvas)return;
        this.autoClear && this.clear(), e._snapToPixelEnabled = this.snapToPixelEnabled, this.tickOnUpdate && this._tick(arguments.length ? arguments : null);
        var t = this.ctx;
        t.save(), this.updateContext(t), this.draw(t, !1), t.restore()
    }, t.tick = t.update, t.handleEvent = function (e) {
        e.type == "tick" && this.update(e)
    }, t.clear = function () {
        if (!this.canvas)return;
        var e = this.ctx;
        e.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
    }, t.toDataURL = function (e, t) {
        t || (t = "image/png");
        var n = this.canvas.getContext("2d"), r = this.canvas.width, i = this.canvas.height, s;
        if (e) {
            s = n.getImageData(0, 0, r, i);
            var o = n.globalCompositeOperation;
            n.globalCompositeOperation = "destination-over", n.fillStyle = e, n.fillRect(0, 0, r, i)
        }
        var u = this.canvas.toDataURL(t);
        return e && (n.clearRect(0, 0, r + 1, i + 1), n.putImageData(s, 0, 0), n.globalCompositeOperation = o), u
    }, t.enableMouseOver = function (e) {
        this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null);
        if (e == null)e = 20; else if (e <= 0)return;
        var t = this;
        this._mouseOverIntervalID = setInterval(function () {
            t._testMouseOver()
        }, 1e3 / Math.min(50, e))
    }, t.enableDOMEvents = function (e) {
        e == null && (e = !0);
        var t, n, r = this._eventListeners;
        if (!e && r) {
            for (t in r)n = r[t], n.t.removeEventListener(t, n.f);
            this._eventListeners = null
        } else if (e && !r && this.canvas) {
            var i = window.addEventListener ? window : document, s = this;
            r = this._eventListeners = {}, r.mouseup = {t: i, f: function (e) {
                s._handleMouseUp(e)
            }}, r.mousemove = {t: i, f: function (e) {
                s._handleMouseMove(e)
            }}, r.dblclick = {t: i, f: function (e) {
                s._handleDoubleClick(e)
            }}, r.mousedown = {t: this.canvas, f: function (e) {
                s._handleMouseDown(e)
            }};
            for (t in r)n = r[t], n.t.addEventListener(t, n.f)
        }
    }, t.clone = function () {
        var t = new e(null);
        return this.cloneProps(t), t
    }, t.toString = function () {
        return"[Stage (name=" + this.name + ")]"
    }, t._getPointerData = function (e) {
        var t = this._pointerData[e];
        if (!t) {
            t = this._pointerData[e] = {x: 0, y: 0};
            if (this._primaryPointerID == null || this._primaryPointerID == -1)this._primaryPointerID = e
        }
        return t
    }, t._handleMouseMove = function (e) {
        e || (e = window.event), this._handlePointerMove(-1, e, e.pageX, e.pageY)
    }, t._handlePointerMove = function (e, t, n, r) {
        if (!this.canvas)return;
        var i, s = this._getPointerData(e), o = s.inBounds;
        this._updatePointerPosition(e, n, r);
        if (!o && !s.inBounds && !this.mouseMoveOutside)return;
        if (this.onMouseMove || this.hasEventListener("stagemousemove"))i = new createjs.MouseEvent("stagemousemove", s.x, s.y, this, t, e, e == this._primaryPointerID, s.rawX, s.rawY), this.onMouseMove && this.onMouseMove(i), this.dispatchEvent(i);
        var u = s.event;
        u && (u.onMouseMove || u.hasEventListener("mousemove")) && (i = new createjs.MouseEvent("mousemove", s.x, s.y, u.target, t, e, e == this._primaryPointerID, s.rawX, s.rawY), u.onMouseMove && u.onMouseMove(i), u.dispatchEvent(i, u.target))
    }, t._updatePointerPosition = function (e, t, n) {
        var r = this._getElementRect(this.canvas);
        t -= r.left, n -= r.top;
        var i = this.canvas.width, s = this.canvas.height;
        t /= (r.right - r.left) / i, n /= (r.bottom - r.top) / s;
        var o = this._getPointerData(e);
        (o.inBounds = t >= 0 && n >= 0 && t <= i - 1 && n <= s - 1) ? (o.x = t, o.y = n) : this.mouseMoveOutside && (o.x = t < 0 ? 0 : t > i - 1 ? i - 1 : t, o.y = n < 0 ? 0 : n > s - 1 ? s - 1 : n), o.rawX = t, o.rawY = n, e == this._primaryPointerID && (this.mouseX = o.x, this.mouseY = o.y, this.mouseInBounds = o.inBounds)
    }, t._getElementRect = function (e) {
        var t;
        try {
            t = e.getBoundingClientRect()
        } catch (n) {
            t = {top: e.offsetTop, left: e.offsetLeft, width: e.offsetWidth, height: e.offsetHeight}
        }
        var r = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0), i = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0), s = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle, o = parseInt(s.paddingLeft) + parseInt(s.borderLeftWidth), u = parseInt(s.paddingTop) + parseInt(s.borderTopWidth), a = parseInt(s.paddingRight) + parseInt(s.borderRightWidth), f = parseInt(s.paddingBottom) + parseInt(s.borderBottomWidth);
        return{left: t.left + r + o, right: t.right + r - a, top: t.top + i + u, bottom: t.bottom + i - f}
    }, t._handleMouseUp = function (e) {
        this._handlePointerUp(-1, e, !1)
    }, t._handlePointerUp = function (e, t, n) {
        var r = this._getPointerData(e), i;
        if (this.onMouseMove || this.hasEventListener("stagemouseup"))i = new createjs.MouseEvent("stagemouseup", r.x, r.y, this, t, e, e == this._primaryPointerID, r.rawX, r.rawY), this.onMouseUp && this.onMouseUp(i), this.dispatchEvent(i);
        var s = r.event;
        s && (s.onMouseUp || s.hasEventListener("mouseup")) && (i = new createjs.MouseEvent("mouseup", r.x, r.y, s.target, t, e, e == this._primaryPointerID, r.rawX, r.rawY), s.onMouseUp && s.onMouseUp(i), s.dispatchEvent(i, s.target));
        var o = r.target;
        o && (o.onClick || o.hasEventListener("click")) && this._getObjectsUnderPoint(r.x, r.y, null, true, this._mouseOverIntervalID ? 3 : 1) == o && (i = new createjs.MouseEvent("click", r.x, r.y, o, t, e, e == this._primaryPointerID, r.rawX, r.rawY), o.onClick && o.onClick(i), o.dispatchEvent(i)), n ? (e == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[e]) : r.event = r.target = null
    }, t._handleMouseDown = function (e) {
        this._handlePointerDown(-1, e, !1)
    }, t._handlePointerDown = function (e, t, n, r) {
        var i = this._getPointerData(e);
        r != null && this._updatePointerPosition(e, n, r);
        if (this.onMouseDown || this.hasEventListener("stagemousedown")) {
            var s = new createjs.MouseEvent("stagemousedown", i.x, i.y, this, t, e, e == this._primaryPointerID, i.rawX, i.rawY);
            this.onMouseDown && this.onMouseDown(s), this.dispatchEvent(s)
        }
        var o = this._getObjectsUnderPoint(i.x, i.y, null, this._mouseOverIntervalID ? 3 : 1);
        if (o) {
            i.target = o;
            if (o.onPress || o.hasEventListener("mousedown")) {
                s = new createjs.MouseEvent("mousedown", i.x, i.y, o, t, e, e == this._primaryPointerID, i.rawX, i.rawY), o.onPress && o.onPress(s), o.dispatchEvent(s);
                if (s.onMouseMove || s.onMouseUp || s.hasEventListener("mousemove") || s.hasEventListener("mouseup"))i.event = s
            }
        }
    }, t._testMouseOver = function () {
        if (this._primaryPointerID != -1)return;
        if (this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds)return;
        var e = null;
        this.mouseInBounds && (e = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, 3), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
        var t = this._mouseOverTarget;
        if (t != e) {
            var n = this._getPointerData(-1);
            if (t && (t.onMouseOut || t.hasEventListener("mouseout"))) {
                var r = new createjs.MouseEvent("mouseout", n.x, n.y, t, null, -1, n.rawX, n.rawY);
                t.onMouseOut && t.onMouseOut(r), t.dispatchEvent(r)
            }
            t && (this.canvas.style.cursor = ""), e && (e.onMouseOver || e.hasEventListener("mouseover")) && (r = new createjs.MouseEvent("mouseover", n.x, n.y, e, null, -1, n.rawX, n.rawY), e.onMouseOver && e.onMouseOver(r), e.dispatchEvent(r)), e && (this.canvas.style.cursor = e.cursor || ""), this._mouseOverTarget = e
        }
    }, t._handleDoubleClick = function (e) {
        var t = this._getPointerData(-1), n = this._getObjectsUnderPoint(t.x, t.y, null, this._mouseOverIntervalID ? 3 : 1);
        n && (n.onDoubleClick || n.hasEventListener("dblclick")) && (evt = new createjs.MouseEvent("dblclick", t.x, t.y, n, e, -1, !0, t.rawX, t.rawY), n.onDoubleClick && n.onDoubleClick(evt), n.dispatchEvent(evt))
    }, createjs.Stage = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype = new createjs.DisplayObject;
    t.image = null, t.snapToPixel = !0, t.sourceRect = null, t.DisplayObject_initialize = t.initialize, t.initialize = function (e) {
        this.DisplayObject_initialize(), typeof e == "string" ? (this.image = new Image, this.image.src = e) : this.image = e
    }, t.isVisible = function () {
        var e = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
        return!!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e)
    }, t.DisplayObject_draw = t.draw, t.draw = function (e, t) {
        if (this.DisplayObject_draw(e, t))return!0;
        var n = this.sourceRect;
        return n ? e.drawImage(this.image, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height) : e.drawImage(this.image, 0, 0), !0
    }, t.clone = function () {
        var t = new e(this.image);
        return this.sourceRect && (t.sourceRect = this.sourceRect.clone()), this.cloneProps(t), t
    }, t.toString = function () {
        return"[Bitmap (name=" + this.name + ")]"
    }, createjs.Bitmap = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype = new createjs.DisplayObject;
    t.onAnimationEnd = null, t.currentFrame = -1, t.currentAnimation = null, t.paused = !0, t.spriteSheet = null, t.snapToPixel = !0, t.offset = 0, t.currentAnimationFrame = 0, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._advanceCount = 0, t._animation = null, t.DisplayObject_initialize = t.initialize, t.initialize = function (e) {
        this.DisplayObject_initialize(), this.spriteSheet = e
    }, t.isVisible = function () {
        var e = this.cacheCanvas || this.spriteSheet.complete && this.currentFrame >= 0;
        return!!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e)
    }, t.DisplayObject_draw = t.draw, t.draw = function (e, t) {
        if (this.DisplayObject_draw(e, t))return!0;
        this._normalizeFrame();
        var n = this.spriteSheet.getFrame(this.currentFrame);
        if (!n)return;
        var r = n.rect;
        return e.drawImage(n.image, r.x, r.y, r.width, r.height, -n.regX, -n.regY, r.width, r.height), !0
    }, t.play = function () {
        this.paused = !1
    }, t.stop = function () {
        this.paused = !0
    }, t.gotoAndPlay = function (e) {
        this.paused = !1, this._goto(e)
    }, t.gotoAndStop = function (e) {
        this.paused = !0, this._goto(e)
    }, t.advance = function () {
        this._animation ? this.currentAnimationFrame++ : this.currentFrame++, this._normalizeFrame()
    }, t.getBounds = function () {
        return this.spriteSheet.getFrameBounds(this.currentFrame)
    }, t.clone = function () {
        var t = new e(this.spriteSheet);
        return this.cloneProps(t), t
    }, t.toString = function () {
        return"[BitmapAnimation (name=" + this.name + ")]"
    }, t.DisplayObject__tick = t._tick, t._tick = function (e) {
        var t = this._animation ? this._animation.frequency : 1;
        !this.paused && (++this._advanceCount + this.offset) % t == 0 && this.advance(), this.DisplayObject__tick(e)
    }, t._normalizeFrame = function () {
        var e = this._animation, t = this.currentFrame, n = this.paused, r;
        if (e) {
            r = e.frames.length;
            if (this.currentAnimationFrame < r)this.currentFrame = e.frames[this.currentAnimationFrame]; else {
                var i = e.next;
                this._dispatchAnimationEnd(e, t, n, i, r - 1) || (i ? this._goto(i) : (this.paused = !0, this.currentAnimationFrame = e.frames.length - 1, this.currentFrame = e.frames[this.currentAnimationFrame]))
            }
        } else r = this.spriteSheet.getNumFrames(), t >= r && (this._dispatchAnimationEnd(e, t, n, r - 1) || (this.currentFrame = 0))
    }, t._dispatchAnimationEnd = function (e, t, n, r, i) {
        var s = e ? e.name : null;
        return this.onAnimationEnd && this.onAnimationEnd(this, s, r), this.dispatchEvent({type: "animationend", name: s, next: r}), !n && this.paused && (this.currentAnimationFrame = i), this.paused != n || this._animation != e || this.currentFrame != t
    }, t.DisplayObject_cloneProps = t.cloneProps, t.cloneProps = function (e) {
        this.DisplayObject_cloneProps(e), e.onAnimationEnd = this.onAnimationEnd, e.currentFrame = this.currentFrame, e.currentAnimation = this.currentAnimation, e.paused = this.paused, e.offset = this.offset, e._animation = this._animation, e.currentAnimationFrame = this.currentAnimationFrame
    }, t._goto = function (e) {
        if (isNaN(e)) {
            var t = this.spriteSheet.getAnimation(e);
            t && (this.currentAnimationFrame = 0, this._animation = t, this.currentAnimation = e, this._normalizeFrame())
        } else this.currentAnimation = this._animation = null, this.currentFrame = e
    }, createjs.BitmapAnimation = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype = new createjs.DisplayObject;
    t.graphics = null, t.DisplayObject_initialize = t.initialize, t.initialize = function (e) {
        this.DisplayObject_initialize(), this.graphics = e ? e : new createjs.Graphics
    }, t.isVisible = function () {
        var e = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
        return!!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e)
    }, t.DisplayObject_draw = t.draw, t.draw = function (e, t) {
        return this.DisplayObject_draw(e, t) ? !0 : (this.graphics.draw(e), !0)
    }, t.clone = function (t) {
        var n = new e(t && this.graphics ? this.graphics.clone() : this.graphics);
        return this.cloneProps
        (n), n
    }, t.toString = function () {
        return"[Shape (name=" + this.name + ")]"
    }, createjs.Shape = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n) {
        this.initialize(e, t, n)
    }, t = e.prototype = new createjs.DisplayObject;
    e._workingContext = (createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).getContext("2d"), t.text = "", t.font = null, t.color = "#000", t.textAlign = "left", t.textBaseline = "top", t.maxWidth = null, t.outline = !1, t.lineHeight = 0, t.lineWidth = null, t.DisplayObject_initialize = t.initialize, t.initialize = function (e, t, n) {
        this.DisplayObject_initialize(), this.text = e, this.font = t, this.color = n ? n : "#000"
    }, t.isVisible = function () {
        var e = this.cacheCanvas || this.text != null && this.text !== "";
        return!!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e)
    }, t.DisplayObject_draw = t.draw, t.draw = function (e, t) {
        return this.DisplayObject_draw(e, t) ? !0 : (this.outline ? e.strokeStyle = this.color : e.fillStyle = this.color, e.font = this.font, e.textAlign = this.textAlign || "start", e.textBaseline = this.textBaseline || "alphabetic", this._drawText(e), !0)
    }, t.getMeasuredWidth = function () {
        return this._getWorkingContext().measureText(this.text).width
    }, t.getMeasuredLineHeight = function () {
        return this._getWorkingContext().measureText("M").width * 1.2
    }, t.getMeasuredHeight = function () {
        return this._drawText() * (this.lineHeight || this.getMeasuredLineHeight())
    }, t.clone = function () {
        var t = new e(this.text, this.font, this.color);
        return this.cloneProps(t), t
    }, t.toString = function () {
        return"[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
    }, t.DisplayObject_cloneProps = t.cloneProps, t.cloneProps = function (e) {
        this.DisplayObject_cloneProps(e), e.textAlign = this.textAlign, e.textBaseline = this.textBaseline, e.maxWidth = this.maxWidth, e.outline = this.outline, e.lineHeight = this.lineHeight, e.lineWidth = this.lineWidth
    }, t._getWorkingContext = function () {
        var t = e._workingContext;
        return t.font = this.font, t.textAlign = this.textAlign || "start", t.textBaseline = this.textBaseline || "alphabetic", t
    }, t._drawText = function (e) {
        var t = !!e;
        t || (e = this._getWorkingContext());
        var n = (this.text + "").split(/(?:\r\n|\r|\n)/), r = this.lineHeight || this.getMeasuredLineHeight(), i = 0;
        for (var s = 0, o = n.length; s < o; s++) {
            var u = e.measureText(n[s]).width;
            if (this.lineWidth == null || u < this.lineWidth) {
                t && this._drawTextLine(e, n[s], i * r), i++;
                continue
            }
            var a = n[s].split(/(\s)/), f = a[0];
            for (var l = 1, c = a.length; l < c; l += 2)e.measureText(f + a[l] + a[l + 1]).width > this.lineWidth ? (t && this._drawTextLine(e, f, i * r), i++, f = a[l + 1]) : f += a[l] + a[l + 1];
            t && this._drawTextLine(e, f, i * r), i++
        }
        return i
    }, t._drawTextLine = function (e, t, n) {
        this.outline ? e.strokeText(t, 0, n, this.maxWidth || 65535) : e.fillText(t, 0, n, this.maxWidth || 65535)
    }, createjs.Text = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        throw"SpriteSheetUtils cannot be instantiated"
    };
    e._workingCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), e._workingContext = e._workingCanvas.getContext("2d"), e.addFlippedFrames = function (t, n, r, i) {
        if (!n && !r && !i)return;
        var s = 0;
        n && e._flip(t, ++s, !0, !1), r && e._flip(t, ++s, !1, !0), i && e._flip(t, ++s, !0, !0)
    }, e.extractFrame = function (t, n) {
        isNaN(n) && (n = t.getAnimation(n).frames[0]);
        var r = t.getFrame(n);
        if (!r)return null;
        var i = r.rect, s = e._workingCanvas;
        s.width = i.width, s.height = i.height, e._workingContext.drawImage(r.image, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height);
        var o = new Image;
        return o.src = s.toDataURL("image/png"), o
    }, e.mergeAlpha = function (e, t, n) {
        n || (n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), n.width = Math.max(t.width, e.width), n.height = Math.max(t.height, e.height);
        var r = n.getContext("2d");
        return r.save(), r.drawImage(e, 0, 0), r.globalCompositeOperation = "destination-in", r.drawImage(t, 0, 0), r.restore(), n
    }, e._flip = function (t, n, r, i) {
        var s = t._images, o = e._workingCanvas, u = e._workingContext, a = s.length / n;
        for (var f = 0; f < a; f++) {
            var l = s[f];
            l.__tmp = f, u.setTransform(1, 0, 0, 1, 0, 0), u.clearRect(0, 0, o.width + 1, o.height + 1), o.width = l.width, o.height = l.height, u.setTransform(r ? -1 : 1, 0, 0, i ? -1 : 1, r ? l.width : 0, i ? l.height : 0), u.drawImage(l, 0, 0);
            var c = new Image;
            c.src = o.toDataURL("image/png"), c.width = l.width, c.height = l.height, s.push(c)
        }
        var h = t._frames, p = h.length / n;
        for (f = 0; f < p; f++) {
            l = h[f];
            var d = l.rect.clone();
            c = s[l.image.__tmp + a * n];
            var v = {image: c, rect: d, regX: l.regX, regY: l.regY};
            r && (d.x = c.width - d.x - d.width, v.regX = d.width - l.regX), i && (d.y = c.height - d.y - d.height, v.regY = d.height - l.regY), h.push(v)
        }
        var m = "_" + (r ? "h" : "") + (i ? "v" : ""), g = t._animations, y = t._data, b = g.length / n;
        for (f = 0; f < b; f++) {
            var w = g[f];
            l = y[w];
            var E = {name: w + m, frequency: l.frequency, next: l.next, frames: []};
            l.next && (E.next += m), h = l.frames;
            for (var S = 0, x = h.length; S < x; S++)E.frames.push(h[S] + p * n);
            y[E.name] = E, g.push(E.name)
        }
    }, createjs.SpriteSheetUtils = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype;
    e.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", e.ERR_RUNNING = "a build is already running", t.maxWidth = 2048, t.maxHeight = 2048, t.spriteSheet = null, t.scale = 1, t.padding = 1, t.timeSlice = .3, t.progress = -1, t.onComplete = null, t.onProgress = null, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._frames = null, t._animations = null, t._data = null, t._nextFrameIndex = 0, t._index = 0, t._timerID = null, t._scale = 1, t.initialize = function () {
        this._frames = [], this._animations = {}
    }, t.addFrame = function (t, n, r, i, s, o) {
        if (this._data)throw e.ERR_RUNNING;
        var u = n || t.bounds || t.nominalBounds;
        return!u && t.getBounds && (u = t.getBounds()), u ? (r = r || 1, this._frames.push({source: t, sourceRect: u, scale: r, funct: i, params: s, scope: o, index: this._frames.length, height: u.height * r}) - 1) : null
    }, t.addAnimation = function (t, n, r, i) {
        if (this._data)throw e.ERR_RUNNING;
        this._animations[t] = {frames: n, next: r, frequency: i}
    }, t.addMovieClip = function (t, n, r) {
        if (this._data)throw e.ERR_RUNNING;
        var i = t.frameBounds, s = n || t.bounds || t.nominalBounds;
        !s && t.getBounds && (s = t.getBounds());
        if (!s && !i)return null;
        var o = this._frames.length, u = t.timeline.duration;
        for (var a = 0; a < u; a++) {
            var f = i && i[a] ? i[a] : s;
            this.addFrame(t, f, r, function (e) {
                var t = this.actionsEnabled;
                this.actionsEnabled = !1, this.gotoAndStop(e), this.actionsEnabled = t
            }, [a], t)
        }
        var l = t.timeline._labels, c = [];
        for (var h in l)c.push({index: l[h], label: h});
        if (c.length) {
            c.sort(function (e, t) {
                return e.index - t.index
            });
            for (var a = 0, p = c.length; a < p; a++) {
                var d = c[a].label, v = o + c[a].index, m = o + (a == p - 1 ? u : c[a + 1].index), g = [];
                for (var y = v; y < m; y++)g.push(y);
                this.addAnimation(d, g, !0)
            }
        }
    }, t.build = function () {
        if (this._data)throw e.ERR_RUNNING;
        this._startBuild();
        while (this._drawNext());
        return this._endBuild(), this.spriteSheet
    }, t.buildAsync = function (t) {
        if (this._data)throw e.ERR_RUNNING;
        this.timeSlice = t, this._startBuild();
        var n = this;
        this._timerID = setTimeout(function () {
            n._run()
        }, 50 - Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50)
    }, t.stopAsync = function () {
        clearTimeout(this._timerID), this._data = null
    }, t.clone = function () {
        throw"SpriteSheetBuilder cannot be cloned."
    }, t.toString = function () {
        return"[SpriteSheetBuilder]"
    }, t._startBuild = function () {
        var t = this.padding || 0;
        this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
        var n = [];
        this._data = {images: [], frames: n, animations: this._animations};
        var r = this._frames.slice();
        r.sort(function (e, t) {
            return e.height > t.height ? 1 : -1
        });
        if (r[r.length - 1].height + t * 2 > this.maxHeight)throw e.ERR_DIMENSIONS;
        var i = 0, s = 0, o = 0;
        while (r.length) {
            var u = this._fillRow(r, i, o, n, t);
            u.w > s && (s = u.w), i += u.h;
            if (!u.h || !r.length) {
                var a = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                a.width = this._getSize(s, this.maxWidth), a.height = this._getSize(i, this.maxHeight), this._data.images[o] = a, u.h || (s = i = 0, o++)
            }
        }
    }, t._getSize = function (e, t) {
        var n = 4;
        while (Math.pow(2, ++n) < e);
        return Math.min(t, Math.pow(2, n))
    }, t._fillRow = function (t, n, r, i, s) {
        var o = this.maxWidth, u = this.maxHeight;
        n += s;
        var a = u - n, f = s, l = 0;
        for (var c = t.length - 1; c >= 0; c--) {
            var h = t[c], p = this._scale * h.scale, d = h.sourceRect, v = h.source, m = Math.floor(p * d.x - s), g = Math.floor(p * d.y - s), y = Math.ceil(p * d.height + s * 2), b = Math.ceil(p * d.width + s * 2);
            if (b > o)throw e.ERR_DIMENSIONS;
            if (y > a || f + b > o)continue;
            h.img = r, h.rect = new createjs.Rectangle(f, n, b, y), l = l || y, t.splice(c, 1), i[h.index] = [f, n, b, y, r, Math.round(-m + p * v.regX - s), Math.round(-g + p * v.regY - s)], f += b
        }
        return{w: f, h: l}
    }, t._endBuild = function () {
        this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.onComplete && this.onComplete(this), this.dispatchEvent("complete")
    }, t._run = function () {
        var e = Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50, t = (new Date).getTime() + e, n = !1;
        while (t > (new Date).getTime())if (!this._drawNext()) {
            n = !0;
            break
        }
        if (n)this._endBuild(); else {
            var r = this;
            this._timerID = setTimeout(function () {
                r._run()
            }, 50 - e)
        }
        var i = this.progress = this._index / this._frames.length;
        this.onProgress && this.onProgress(this, i), this.dispatchEvent({type: "progress", progress: i})
    }, t._drawNext = function () {
        var e = this._frames[this._index], t = e.scale * this._scale, n = e.rect, r = e.sourceRect, i = this._data.images[e.img], s = i.getContext("2d");
        return e.funct && e.funct.apply(e.scope, e.params), s.save(), s.beginPath(), s.rect(n.x, n.y, n.width, n.height), s.clip(), s.translate(Math.ceil(n.x - r.x * t), Math.ceil(n.y - r.y * t)), s.scale(t, t), e.source.draw(s), s.restore(), ++this._index < this._frames.length
    }, createjs.SpriteSheetBuilder = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e) {
        this.initialize(e)
    }, t = e.prototype = new createjs.DisplayObject;
    t.htmlElement = null, t._oldMtx = null, t.DisplayObject_initialize = t.initialize, t.initialize = function (e) {
        typeof e == "string" && (e = document.getElementById(e)), this.DisplayObject_initialize(), this.mouseEnabled = !1, this.htmlElement = e;
        var t = e.style;
        t.position = "absolute", t.transformOrigin = t.WebkitTransformOrigin = t.msTransformOrigin = t.MozTransformOrigin = t.OTransformOrigin = "0% 0%"
    }, t.isVisible = function () {
        return this.htmlElement != null
    }, t.draw = function (e, t) {
        if (this.htmlElement == null)return;
        var n = this.getConcatenatedMatrix(this._matrix), r = this.htmlElement, i = r.style;
        if (!this.visible)return!0;
        i.visibility = "visible";
        var s = this._oldMtx || {};
        s.alpha != n.alpha && (i.opacity = "" + n.alpha, s.alpha = n.alpha);
        if (s.tx != n.tx || s.ty != n.ty || s.a != n.a || s.b != n.b || s.c != n.c || s.d != n.d)i.transform = i.WebkitTransform = i.OTransform = i.msTransform = ["matrix(" + n.a, n.b, n.c, n.d, n.tx + .5 | 0, (n.ty + .5 | 0) + ")"].join(","), i.MozTransform = ["matrix(" + n.a, n.b, n.c, n.d, (n.tx + .5 | 0) + "px", (n.ty + .5 | 0) + "px)"].join(","), this._oldMtx = n.clone();
        return!0
    }, t.cache = function () {
    }, t.uncache = function () {
    }, t.updateCache = function () {
    }, t.hitTest = function () {
    }, t.localToGlobal = function () {
    }, t.globalToLocal = function () {
    }, t.localToLocal = function () {
    }, t.clone = function () {
        throw"DOMElement cannot be cloned."
    }, t.toString = function () {
        return"[DOMElement (name=" + this.name + ")]"
    }, t.DisplayObject__tick = t._tick, t._tick = function (e) {
        this.htmlElement.style.visibility = "hidden", this.DisplayObject__tick(e)
    }, createjs.DOMElement = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype;
    t.initialize = function () {
    }, t.getBounds = function () {
        return new createjs.Rectangle(0, 0, 0, 0)
    }, t.applyFilter = function (e, t, n, r, i, s, o, u) {
    }, t.toString = function () {
        return"[Filter]"
    }, t.clone = function () {
        return new e
    }, createjs.Filter = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        throw"Touch cannot be instantiated"
    };
    e.isSupported = function () {
        return"ontouchstart"in window || window.navigator.msPointerEnabled
    }, e.enable = function (t, n, r) {
        return!t || !t.canvas || !e.isSupported() ? !1 : (t.__touch = {pointers: {}, multitouch: !n, preventDefault: !r, count: 0}, "ontouchstart"in window ? e._IOS_enable(t) : window.navigator.msPointerEnabled && e._IE_enable(t), !0)
    }, e.disable = function (t) {
        if (!t)return;
        "ontouchstart"in window ? e._IOS_disable(t) : window.navigator.msPointerEnabled && e._IE_disable(t)
    }, e._IOS_enable = function (t) {
        var n = t.canvas, r = t.__touch.f = function (n) {
            e._IOS_handleEvent(t, n)
        };
        n.addEventListener("touchstart", r, !1), n.addEventListener("touchmove", r, !1), n.addEventListener("touchend", r, !1), n.addEventListener("touchcancel", r, !1)
    }, e._IOS_disable = function (e) {
        var t = e.canvas;
        if (!t)return;
        var n = e.__touch.f;
        t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", n, !1), t.removeEventListener("touchend", n, !1), t.removeEventListener("touchcancel", n, !1)
    }, e._IOS_handleEvent = function (e, t) {
        if (!e)return;
        e.__touch.preventDefault && t.preventDefault && t.preventDefault();
        var n = t.changedTouches, r = t.type;
        for (var i = 0, s = n.length; i < s; i++) {
            var o = n[i], u = o.identifier;
            if (o.target != e.canvas)continue;
            r == "touchstart" ? this._handleStart(e, u, t, o.pageX, o.pageY) : r == "touchmove" ? this._handleMove(e, u, t, o.pageX, o.pageY) : (r == "touchend" || r == "touchcancel") && this._handleEnd(e, u, t)
        }
    }, e._IE_enable = function (t) {
        var n = t.canvas, r = t.__touch.f = function (n) {
            e._IE_handleEvent(t, n)
        };
        n.addEventListener("MSPointerDown", r, !1), window.addEventListener("MSPointerMove", r, !1), window.addEventListener("MSPointerUp", r, !1), window.addEventListener("MSPointerCancel", r, !1), t.__touch.preventDefault && (n.style.msTouchAction = "none"), t.__touch.activeIDs = {}
    }, e._IE_disable = function (e) {
        var t = e.__touch.f;
        window.removeEventListener("MSPointerMove", t, !1), window.removeEventListener("MSPointerUp", t, !1), window.removeEventListener("MSPointerCancel", t, !1), e.canvas && e.canvas.removeEventListener("MSPointerDown", t, !1)
    }, e._IE_handleEvent = function (e, t) {
        if (!e)return;
        e.__touch.preventDefault && t.preventDefault && t.preventDefault();
        var n = t.type, r = t.pointerId, i = e.__touch.activeIDs;
        if (n == "MSPointerDown") {
            if (t.srcElement != e.canvas)return;
            i[r] = !0, this._handleStart(e, r, t, t.pageX, t.pageY)
        } else if (i[r])if (n == "MSPointerMove")this._handleMove(e, r, t, t.pageX, t.pageY); else if (n == "MSPointerUp" || n == "MSPointerCancel")delete i[r], this._handleEnd(e, r, t)
    }, e._handleStart = function (e, t, n, r, i) {
        var s = e.__touch;
        if (!s.multitouch && s.count)return;
        var o = s.pointers;
        if (o[t])return;
        o[t] = !0, s.count++, e._handlePointerDown(t, n, r, i)
    }, e._handleMove = function (e, t, n, r, i) {
        if (!e.__touch.pointers[t])return;
        e._handlePointerMove(t, n, r, i)
    }, e._handleEnd = function (e, t, n) {
        var r = e.__touch, i = r.pointers;
        if (!i[t])return;
        r.count--, e._handlePointerUp(t, n, !0), delete i[t]
    }, createjs.Touch = e
}(), function () {
    var e = this.createjs = this.createjs || {};
    e = e.EaselJS = e.EaselJS || {}, e.version = "0.6.1", e.buildDate = "Thu, 16 May 2013 16:05:45 GMT"
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        this.initialize()
    }, t = e.prototype;
    e.initialize = function (e) {
        e.addEventListener = t.addEventListener, e.removeEventListener = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent
    }, t._listeners = null, t.initialize = function () {
    }, t.addEventListener = function (e, t) {
        var n = this._listeners;
        n ? this.removeEventListener(e, t) : n = this._listeners = {};
        var r = n[e];
        return r || (r = n[e] = []), r.push(t), t
    }, t.removeEventListener = function (e, t) {
        var n = this._listeners;
        if (n) {
            var r = n[e];
            if (r)for (var i = 0, s = r.length; i < s; i++)if (r[i] == t) {
                1 == s ? delete n[e] : r.splice(i, 1);
                break
            }
        }
    }, t.removeAllEventListeners = function (e) {
        e ? this._listeners && delete this._listeners[e] : this._listeners = null
    }, t.dispatchEvent = function (e, t) {
        var n = !1, r = this._listeners;
        if (e && r) {
            "string" == typeof e && (e = {type: e}), r = r[e.type];
            if (!r)return n;
            e.target = t || this;
            for (var r = r.slice(), i = 0, s = r.length; i < s; i++)var o = r[i], n = o.handleEvent ? n || o.handleEvent(e) : n || o(e)
        }
        return!!n
    }, t.hasEventListener = function (e) {
        var t = this._listeners;
        return!!t && !!t[e]
    }, t.toString = function () {
        return"[EventDispatcher]"
    }, createjs.EventDispatcher = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n) {
        this.initialize(e, t, n)
    }, t = e.prototype;
    e.NONE = 0, e.LOOP = 1, e.REVERSE = 2, e.IGNORE = {}, e._tweens = [], e._plugins = {}, e.get = function (t, n, r, i) {
        return i && e.removeTweens(t), new e(t, n, r)
    }, e.tick = function (t, n) {
        for (var r = e._tweens.slice(), i = r.length - 1; 0 <= i; i--) {
            var s = r[i];
            n && !s.ignoreGlobalPause || s._paused || s.tick(s._useTicks ? 1 : t)
        }
    }, createjs.Ticker && createjs.Ticker.addListener(e, !1), e.removeTweens = function (t) {
        if (t.tweenjs_count) {
            for (var n = e._tweens, r = n.length - 1; 0 <= r; r--)n[r]._target == t && (n[r]._paused = !0, n.splice(r, 1));
            t.tweenjs_count = 0
        }
    }, e.removeAllTweens = function () {
        for (var t = e._tweens, n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            i.paused = !0, i.target.tweenjs_count = 0
        }
        t.length = 0
    }, e.hasActiveTweens = function (t) {
        return t ? t.tweenjs_count : e._tweens && e._tweens.length
    }, e.installPlugin = function (t, n) {
        var r = t.priority;
        null == r && (t.priority = r = 0);
        for (var i = 0, s = n.length, o = e._plugins; i < s; i++) {
            var u = n[i];
            if (o[u]) {
                for (var a = o[u], f = 0, l = a.length; f < l && r >= a[f].priority; f++);
                o[u].splice(f, 0, t)
            } else o[u] = [t]
        }
    }, e._register = function (t, n) {
        var r = t._target;
        n ? (r && (r.tweenjs_count = r.tweenjs_count ? r.tweenjs_count + 1 : 1), e._tweens.push(t)) : (r && r.tweenjs_count--, r = e._tweens.indexOf(t), -1 != r && e._tweens.splice(r, 1))
    }, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t.ignoreGlobalPause = !1, t.loop = !1, t.duration = 0, t.pluginData = null, t.onChange = null, t.change = null, t.target = null, t.position = null, t._paused = !1, t._curQueueProps = null, t._initQueueProps = null, t._steps = null, t._actions = null, t._prevPosition = 0, t._stepPosition = 0, t._prevPos = -1, t._target = null, t._useTicks = !1, t.initialize = function (t, n, r) {
        this.target = this._target = t, n && (this._useTicks = n.useTicks, this.ignoreGlobalPause = n.ignoreGlobalPause, this.loop = n.loop, this.onChange = n.onChange, n.override && e.removeTweens(t)), this.pluginData = r || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], n && n.paused ? this._paused = !0 : e._register(this, !0), n && null != n.position && this.setPosition(n.position, e.NONE)
    }, t.wait = function (e) {
        if (null != e && 0 < e) {
            var t = this._cloneProps(this._curQueueProps);
            return this._addStep({d: e, p0: t, e: this._linearEase, p1: t})
        }
        return this
    }, t.to = function (e, t, n) {
        if (isNaN(t) || 0 > t)t = 0;
        return this._addStep({d: t || 0, p0: this._cloneProps(this._curQueueProps), e: n, p1: this._cloneProps(this._appendQueueProps(e))})
    }, t.call = function (e, t, n) {
        return this._addAction({f: e, p: t ? t : [this], o: n ? n : this._target})
    }, t.set = function (e, t) {
        return this._addAction({f: this._set, o: this, p: [e, t ? t : this._target]})
    }, t.play = function (e) {
        return this.call(e.setPaused, [!1], e)
    }, t.pause = function (e) {
        return e || (e = this), this.call(e.setPaused, [!0], e)
    }, t.setPosition = function (e, t) {
        0 > e && (e = 0), null == t && (t = 1);
        var n = e, r = !1;
        n >= this.duration && (this.loop ? n %= this.duration : (n = this.duration, r = !0));
        if (n == this._prevPos)return r;
        var i = this._prevPos;
        this.position = this._prevPos = n, this._prevPosition = e;
        if (this._target)if (r)this._updateTargetProps(null, 1); else if (0 < this._steps.length) {
            for (var s = 0, o = this._steps.length; s < o && this._steps[s].t <= n; s++);
            s = this._steps[s - 1], this._updateTargetProps(s, (this._stepPosition = n - s.t) / s.d)
        }
        return 0 != t && 0 < this._actions.length && (this._useTicks ? this._runActions(n, n) : 1 == t && n < i ? (i != this.duration && this._runActions(i, this.duration), this._runActions(0, n, !0)) : this._runActions(i, n)), r && this.setPaused(!0), this.onChange && this.onChange(this), this.dispatchEvent("change"), r
    }, t.tick = function (e) {
        this._paused || this.setPosition(this._prevPosition + e)
    }, t.setPaused = function (t) {
        return this._paused = !!t, e._register(this, !t), this
    }, t.w = t.wait, t.t = t.to, t.c = t.call, t.s = t.set, t.toString = function () {
        return"[Tween]"
    }, t.clone = function () {
        throw"Tween can not be cloned."
    }, t._updateTargetProps = function (t, r) {
        var i, s, o, u;
        !t && 1 == r ? i = s = this._curQueueProps : (t.e && (r = t.e(r, 0, 1, 1)), i = t.p0, s = t.p1);
        for (n in this._initQueueProps) {
            null == (o = i[n]) && (i[n] = o = this._initQueueProps[n]), null == (u = s[n]) && (s[n] = u = o), o = o == u || 0 == r || 1 == r || "number" != typeof o ? 1 == r ? u : o : o + (u - o) * r;
            var a = !1;
            if (u = e._plugins[n])for (var f = 0, l = u.length; f < l; f++) {
                var c = u[f].tween(this, n, o, i, s, r, !!t && i == s, !t);
                c == e.IGNORE ? a = !0 : o = c
            }
            a || (this._target[n] = o)
        }
    }, t._runActions = function (e, t, n) {
        var r = e, i = t, s = -1, o = this._actions.length, u = 1;
        e > t && (r = t, i = e, s = o, o = u = -1);
        for (; (s += u) != o;) {
            t = this._actions[s];
            var a = t.t;
            (a == i || a > r && a < i || n && a == e) && t.f.apply(t.o, t.p)
        }
    }, t._appendQueueProps = function (t) {
        var n, r, i, s, o, u;
        for (u in t) {
            if (void 0 === this._initQueueProps[u]) {
                r = this._target[u];
                if (n = e._plugins[u]) {
                    i = 0;
                    for (s = n.length; i < s; i++)r = n[i].init(this, u, r)
                }
                this._initQueueProps[u] = void 0 === r ? null : r
            } else r = this._curQueueProps[u];
            if (n = e._plugins[u]) {
                o = o || {}, i = 0;
                for (s = n.length; i < s; i++)n[i].step && n[i].step(this, u, r, t[u], o)
            }
            this._curQueueProps[u] = t[u]
        }
        return o && this._appendQueueProps(o), this._curQueueProps
    }, t._cloneProps = function (e) {
        var t = {}, n;
        for (n in e)t[n] = e[n];
        return t
    }, t._addStep = function (e) {
        return 0 < e.d && (this._steps.push(e), e.t = this.duration, this.duration += e.d), this
    }, t._addAction = function (e) {
        return e.t = this.duration, this._actions.push(e), this
    }, t._set = function (e, t) {
        for (var n in e)t[n] = e[n]
    }, createjs.Tween = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function (e, t, n) {
        this.initialize(e, t, n)
    }, t = e.prototype;
    t.ignoreGlobalPause = !1, t.duration = 0, t.loop = !1, t.onChange = null, t.position = null, t._paused = !1, t._tweens = null, t._labels = null, t._prevPosition = 0, t._prevPos = -1, t._useTicks = !1, t.initialize = function (e, t, n) {
        this._tweens = [], n && (this._useTicks = n.useTicks, this.loop = n.loop, this.ignoreGlobalPause = n.ignoreGlobalPause, this.onChange = n.onChange), e && this.addTween.apply(this, e), this.setLabels(t), n && n.paused ? this._paused = !0 : createjs.Tween._register(this, !0), n && null != n.position && this.setPosition(n.position, createjs.Tween.NONE)
    }, t.addTween = function (e) {
        var t = arguments.length;
        if (1 < t) {
            for (var n = 0; n < t; n++)this.addTween(arguments[n]);
            return arguments[0]
        }
        return 0 == t ? null : (this.removeTween(e), this._tweens.push(e), e.setPaused(!0), e._paused = !1, e._useTicks = this._useTicks, e.duration > this.duration && (this.duration = e.duration), 0 <= this._prevPos && e.setPosition(this._prevPos, createjs.Tween.NONE), e)
    }, t.removeTween = function (e) {
        var t = arguments.length;
        if (1 < t) {
            for (var n = !0, r = 0; r < t; r++)n = n && this.removeTween(arguments[r]);
            return n
        }
        return 0 == t ? !1 : (t = this._tweens.indexOf(e), -1 != t ? (this._tweens.splice(t, 1), e.duration >= this.duration && this.updateDuration(), !0) : !1)
    }, t.addLabel = function (e, t) {
        this._labels[e] = t
    }, t.setLabels = function (e) {
        this._labels = e ? e : {}
    }, t.gotoAndPlay = function (e) {
        this.setPaused(!1), this._goto(e)
    }, t.gotoAndStop = function (e) {
        this.setPaused(!0), this._goto(e)
    }, t.setPosition = function (e, t) {
        0 > e && (e = 0);
        var n = this.loop ? e % this.duration : e, r = !this.loop && e >= this.duration;
        if (n == this._prevPos)return r;
        this._prevPosition = e, this.position = this._prevPos = n;
        for (var i = 0, s = this._tweens.length; i < s; i++)if (this._tweens[i].setPosition(n, t), n != this._prevPos)return!1;
        return r && this.setPaused(!0), this.onChange && this.onChange(this), r
    }, t.setPaused = function (e) {
        this._paused = !!e, createjs.Tween._register(this, !e)
    }, t.updateDuration = function () {
        for (var e = this.duration = 0, t = this._tweens.length; e < t; e++) {
            var n = this._tweens[e];
            n.duration > this.duration && (this.duration = n.duration)
        }
    }, t.tick = function (e) {
        this.setPosition(this._prevPosition + e)
    }, t.resolve = function (e) {
        var t = parseFloat(e);
        return isNaN(t) && (t = this._labels[e]), t
    }, t.toString = function () {
        return"[Timeline]"
    }, t.clone = function () {
        throw"Timeline can not be cloned."
    }, t._goto = function (e) {
        e = this.resolve(e), null != e && this.setPosition(e)
    }, createjs.Timeline = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        throw"Ease cannot be instantiated."
    };
    e.linear = function (e) {
        return e
    }, e.none = e.linear, e.get = function (e) {
        return-1 > e && (e = -1), 1 < e && (e = 1), function (t) {
            return 0 == e ? t : 0 > e ? t * (t * -e + 1 + e) : t * ((2 - t) * e + (1 - e))
        }
    }, e.getPowIn = function (e) {
        return function (t) {
            return Math.pow(t, e)
        }
    }, e.getPowOut = function (e) {
        return function (t) {
            return 1 - Math.pow(1 - t, e)
        }
    }, e.getPowInOut = function (e) {
        return function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(t, e) : 1 - .5 * Math.abs(Math.pow(2 - t, e))
        }
    }, e.quadIn = e.getPowIn(2), e.quadOut = e.getPowOut(2), e.quadInOut = e.getPowInOut(2), e.cubicIn = e.getPowIn(3), e.cubicOut = e.getPowOut(3), e.cubicInOut = e.getPowInOut(3), e.quartIn = e.getPowIn(4), e.quartOut = e.getPowOut(4), e.quartInOut = e.getPowInOut(4), e.quintIn = e.getPowIn(5), e.quintOut = e.getPowOut(5), e.quintInOut = e.getPowInOut(5), e.sineIn = function (e) {
        return 1 - Math.cos(e * Math.PI / 2)
    }, e.sineOut = function (e) {
        return Math.sin(e * Math.PI / 2)
    }, e.sineInOut = function (e) {
        return-0.5 * (Math.cos(Math.PI * e) - 1)
    }, e.getBackIn = function (e) {
        return function (t) {
            return t * t * ((e + 1) * t - e)
        }
    }, e.backIn = e.getBackIn(1.7), e.getBackOut = function (e) {
        return function (t) {
            return--t * t * ((e + 1) * t + e) + 1
        }
    }, e.backOut = e.getBackOut(1.7), e.getBackInOut = function (e) {
        return e *= 1.525, function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }
    }, e.backInOut = e.getBackInOut(1.7), e.circIn = function (e) {
        return-(Math.sqrt(1 - e * e) - 1)
    }, e.circOut = function (e) {
        return Math.sqrt(1 - --e * e)
    }, e.circInOut = function (e) {
        return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }, e.bounceIn = function (t) {
        return 1 - e.bounceOut(1 - t)
    }, e.bounceOut = function (e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }, e.bounceInOut = function (t) {
        return.5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
    }, e.getElasticIn = function (e, t) {
        var n = 2 * Math.PI;
        return function (r) {
            if (0 == r || 1 == r)return r;
            var i = t / n * Math.asin(1 / e);
            return-(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - i) * n / t))
        }
    }, e.elasticIn = e.getElasticIn(1, .3), e.getElasticOut = function (e, t) {
        var n = 2 * Math.PI;
        return function (r) {
            if (0 == r || 1 == r)return r;
            var i = t / n * Math.asin(1 / e);
            return e * Math.pow(2, -10 * r) * Math.sin((r - i) * n / t) + 1
        }
    }, e.elasticOut = e.getElasticOut(1, .3), e.getElasticInOut = function (e, t) {
        var n = 2 * Math.PI;
        return function (r) {
            var i = t / n * Math.asin(1 / e);
            return 1 > (r *= 2) ? -0.5 * e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - i) * n / t) : .5 * e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - i) * n / t) + 1
        }
    }, e.elasticInOut = e.getElasticInOut(1, .3 * 1.5), createjs.Ease = e
}(), this.createjs = this.createjs || {}, function () {
    var e = function () {
        throw"MotionGuidePlugin cannot be instantiated."
    };
    e.priority = 0, e.install = function () {
        return createjs.Tween.installPlugin(e, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
    }, e.init = function (e, t, n) {
        return e = e.target, e.hasOwnProperty("x") || (e.x = 0), e.hasOwnProperty("y") || (e.y = 0), e.hasOwnProperty("rotation") || (e.rotation = 0), "guide" == t ? null : n
    }, e.step = function (t, n, r, i, s) {
        if ("guide" != n)return i;
        var o;
        i.hasOwnProperty("path") || (i.path = []), t = i.path, i.hasOwnProperty("end") || (i.end = 1), i.hasOwnProperty("start") || (i.start = r && r.hasOwnProperty("end") && r.path === t ? r.end : 0);
        if (i.hasOwnProperty("_segments") && i._length)return i;
        r = t.length;
        if (6 > r || 0 != (r - 2) % 4)throw"invalid 'path' data, please see documentation for valid paths";
        i._segments = [], i._length = 0;
        for (n = 2; n < r; n += 4) {
            for (var u = t[n - 2], a = t[n - 1], f = t[n + 0], l = t[n + 1], c = t[n + 2], h = t[n + 3], p = u, d = a, v, m, g = 0, y = [], w = 1; 10 >= w; w++) {
                m = w / 10;
                var E = 1 - m;
                v = E * E * u + 2 * E * m * f + m * m * c, m = E * E * a + 2 * E * m * l + m * m * h, g += y[y.push(Math.sqrt((o = v - p) * o + (o = m - d) * o)) - 1], p = v, d = m
            }
            i._segments.push(g), i._segments.push(y), i._length += g
        }
        return o = i.orient, i.orient = !1, e.calc(i, i.end, s), i.orient = o, i
    }, e.tween = function (t, n, r, i, s, o, u) {
        return s = s.guide, void 0 == s || s === i.guide ? r : (s.lastRatio != o && (e.calc(s, (s.end - s.start) * (u ? s.end : o) + s.start, t.target), s.orient && (t.target.rotation += i.rotation || 0), s.lastRatio = o), !s.orient && "rotation" == n ? r : t.target[n])
    }, e.calc = function (t, n, r) {
        void 0 == t._segments && e.validate(t), void 0 == r && (r = {x: 0, y: 0, rotation: 0});
        var i = t._segments, s = t.path, o = t._length * n, u = i.length - 2;
        for (n = 0; o > i[n] && n < u;)o -= i[n], n += 2;
        for (var i = i[n + 1], a = 0, u = i.length - 1; o > i[a] && a < u;)o -= i[a], a++;
        return o = a / ++u + o / (u * i[a]), n = 2 * n + 2, u = 1 - o, r.x = u * u * s[n - 2] + 2 * u * o * s[n + 0] + o * o * s[n + 2], r.y = u * u * s[n - 1] + 2 * u * o * s[n + 1] + o * o * s[n + 3], t.orient && (r.rotation = 57.2957795 * Math.atan2((s[n + 1] - s[n - 1]) * u + (s[n + 3] - s[n + 1]) * o, (s[n + 0] - s[n - 2]) * u + (s[n + 2] - s[n + 0]) * o)), r
    }, createjs.MotionGuidePlugin = e
}(), function () {
    var e = this.createjs = this.createjs || {}, e = e.TweenJS = e.TweenJS || {};
    e.version = "0.4.0", e.buildDate = "Tue, 12 Feb 2013 21:08:16 GMT"
}();
var Box2D = {};
(function (e, t) {
    function n() {
    }

    !(Object.prototype.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function (e, t, n) {
        n.get instanceof Function && e.__defineGetter__(t, n.get), n.set instanceof Function && e.__defineSetter__(t, n.set)
    }), e.inherit = function (e, t) {
        var r = e;
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = r
    }, e.generateCallback = function (t, n) {
        return function () {
            n.apply(t, arguments)
        }
    }, e.NVector = function (t) {
        switch (t) {
            case 3:
                return[0, 0, 0];
            case 0:
                return[];
            case 2:
                return[0, 0];
            case 1:
                return[0]
        }
    }, e.is = function (n, r) {
        return n === null ? !1 : r instanceof Function && n instanceof r ? !0 : n.constructor.__implements != t && n.constructor.__implements[r] ? !0 : !1
    }, e.parseUInt = function (e) {
        var t = e >> 31;
        return(e ^ t) - t
    }, e.MIN_VALUE = Number.MIN_VALUE;
    var r = 2;
    while (e.MIN_VALUE === 0)e.MIN_VALUE = 1 / (Number.MAX_VALUE / r), r *= 2
})(Box2D);
var Vector = Array, Vector_a2j_Number = Box2D.NVector;
typeof Box2D == "undefined" && (Box2D = {}), typeof Box2D.Collision == "undefined" && (Box2D.Collision = {}), typeof Box2D.Collision.Shapes == "undefined" && (Box2D.Collision.Shapes = {}), typeof Box2D.Common == "undefined" && (Box2D.Common = {}), typeof Box2D.Common.Math == "undefined" && (Box2D.Common.Math = {}), typeof Box2D.Dynamics == "undefined" && (Box2D.Dynamics = {}), typeof Box2D.Dynamics.Contacts == "undefined" && (Box2D.Dynamics.Contacts = {}), typeof Box2D.Dynamics.Controllers == "undefined" && (Box2D.Dynamics.Controllers = {}), typeof Box2D.Dynamics.Joints == "undefined" && (Box2D.Dynamics.Joints = {}), function () {
    function e() {
        e.b2AABB.apply(this, arguments)
    }

    function t() {
        t.b2Bound.apply(this, arguments)
    }

    function n() {
        n.b2BoundValues.apply(this, arguments), this.constructor === n && this.b2BoundValues.apply(this, arguments)
    }

    function r() {
        r.b2Collision.apply(this, arguments)
    }

    function i() {
        i.b2ContactID.apply(this, arguments), this.constructor === i && this.b2ContactID.apply(this, arguments)
    }

    function s() {
        s.b2ContactPoint.apply(this, arguments)
    }

    function o() {
        o.b2Distance.apply(this, arguments)
    }

    function u() {
        u.b2DistanceInput.apply(this, arguments)
    }

    function a() {
        a.b2DistanceOutput.apply(this, arguments)
    }

    function f() {
        f.b2DistanceProxy.apply(this, arguments)
    }

    function l() {
        l.b2DynamicTree.apply(this, arguments), this.constructor === l && this.b2DynamicTree.apply(this, arguments)
    }

    function c() {
        c.b2DynamicTreeBroadPhase.apply(this, arguments)
    }

    function h() {
        h.b2DynamicTreeNode.apply(this, arguments)
    }

    function p() {
        p.b2DynamicTreePair.apply(this, arguments)
    }

    function d() {
        d.b2Manifold.apply(this, arguments), this.constructor === d && this.b2Manifold.apply(this, arguments)
    }

    function v() {
        v.b2ManifoldPoint.apply(this, arguments), this.constructor === v && this.b2ManifoldPoint.apply(this, arguments)
    }

    function m() {
        m.b2Point.apply(this, arguments)
    }

    function g() {
        g.b2RayCastInput.apply(this, arguments), this.constructor === g && this.b2RayCastInput.apply(this, arguments)
    }

    function y() {
        y.b2RayCastOutput.apply(this, arguments)
    }

    function b() {
        b.b2Segment.apply(this, arguments)
    }

    function w() {
        w.b2SeparationFunction.apply(this, arguments)
    }

    function E() {
        E.b2Simplex.apply(this, arguments), this.constructor === E && this.b2Simplex.apply(this, arguments)
    }

    function S() {
        S.b2SimplexCache.apply(this, arguments)
    }

    function x() {
        x.b2SimplexVertex.apply(this, arguments)
    }

    function T() {
        T.b2TimeOfImpact.apply(this, arguments)
    }

    function N() {
        N.b2TOIInput.apply(this, arguments)
    }

    function C() {
        C.b2WorldManifold.apply(this, arguments), this.constructor === C && this.b2WorldManifold.apply(this, arguments)
    }

    function k() {
        k.ClipVertex.apply(this, arguments)
    }

    function L() {
        L.Features.apply(this, arguments)
    }

    function A() {
        A.b2CircleShape.apply(this, arguments), this.constructor === A && this.b2CircleShape.apply(this, arguments)
    }

    function O() {
        O.b2EdgeChainDef.apply(this, arguments), this.constructor === O && this.b2EdgeChainDef.apply(this, arguments)
    }

    function M() {
        M.b2EdgeShape.apply(this, arguments), this.constructor === M && this.b2EdgeShape.apply(this, arguments)
    }

    function _() {
        _.b2MassData.apply(this, arguments)
    }

    function D() {
        D.b2PolygonShape.apply(this, arguments), this.constructor === D && this.b2PolygonShape.apply(this, arguments)
    }

    function P() {
        P.b2Shape.apply(this, arguments), this.constructor === P && this.b2Shape.apply(this, arguments)
    }

    function H() {
        H.b2Color.apply(this, arguments), this.constructor === H && this.b2Color.apply(this, arguments)
    }

    function B() {
        B.b2Settings.apply(this, arguments)
    }

    function j() {
        j.b2Mat22.apply(this, arguments), this.constructor === j && this.b2Mat22.apply(this, arguments)
    }

    function F() {
        F.b2Mat33.apply(this, arguments), this.constructor === F && this.b2Mat33.apply(this, arguments)
    }

    function I() {
        I.b2Math.apply(this, arguments)
    }

    function q() {
        q.b2Sweep.apply(this, arguments)
    }

    function R() {
        R.b2Transform.apply(this, arguments), this.constructor === R && this.b2Transform.apply(this, arguments)
    }

    function U() {
        U.b2Vec2.apply(this, arguments), this.constructor === U && this.b2Vec2.apply(this, arguments)
    }

    function z() {
        z.b2Vec3.apply(this, arguments), this.constructor === z && this.b2Vec3.apply(this, arguments)
    }

    function W() {
        W.b2Body.apply(this, arguments), this.constructor === W && this.b2Body.apply(this, arguments)
    }

    function X() {
        X.b2BodyDef.apply(this, arguments), this.constructor === X && this.b2BodyDef.apply(this, arguments)
    }

    function V() {
        V.b2ContactFilter.apply(this, arguments)
    }

    function $() {
        $.b2ContactImpulse.apply(this, arguments)
    }

    function J() {
        J.b2ContactListener.apply(this, arguments)
    }

    function K() {
        K.b2ContactManager.apply(this, arguments), this.constructor === K && this.b2ContactManager.apply(this, arguments)
    }

    function Q() {
        Q.b2DebugDraw.apply(this, arguments), this.constructor ===
            Q && this.b2DebugDraw.apply(this, arguments)
    }

    function G() {
        G.b2DestructionListener.apply(this, arguments)
    }

    function Y() {
        Y.b2FilterData.apply(this, arguments)
    }

    function Z() {
        Z.b2Fixture.apply(this, arguments), this.constructor === Z && this.b2Fixture.apply(this, arguments)
    }

    function et() {
        et.b2FixtureDef.apply(this, arguments), this.constructor === et && this.b2FixtureDef.apply(this, arguments)
    }

    function tt() {
        tt.b2Island.apply(this, arguments), this.constructor === tt && this.b2Island.apply(this, arguments)
    }

    function nt() {
        nt.b2TimeStep.apply(this, arguments)
    }

    function rt() {
        rt.b2World.apply(this, arguments), this.constructor === rt && this.b2World.apply(this, arguments)
    }

    function it() {
        it.b2CircleContact.apply(this, arguments)
    }

    function st() {
        st.b2Contact.apply(this, arguments), this.constructor === st && this.b2Contact.apply(this, arguments)
    }

    function ot() {
        ot.b2ContactConstraint.apply(this, arguments), this.constructor === ot && this.b2ContactConstraint.apply(this, arguments)
    }

    function ut() {
        ut.b2ContactConstraintPoint.apply(this, arguments)
    }

    function at() {
        at.b2ContactEdge.apply(this, arguments)
    }

    function ft() {
        ft.b2ContactFactory.apply(this, arguments), this.constructor === ft && this.b2ContactFactory.apply(this, arguments)
    }

    function lt() {
        lt.b2ContactRegister.apply(this, arguments)
    }

    function ct() {
        ct.b2ContactResult.apply(this, arguments)
    }

    function ht() {
        ht.b2ContactSolver.apply(this, arguments), this.constructor === ht && this.b2ContactSolver.apply(this, arguments)
    }

    function pt() {
        pt.b2EdgeAndCircleContact.apply(this, arguments)
    }

    function dt() {
        dt.b2NullContact.apply(this, arguments), this.constructor === dt && this.b2NullContact.apply(this, arguments)
    }

    function vt() {
        vt.b2PolyAndCircleContact.apply(this, arguments)
    }

    function mt() {
        mt.b2PolyAndEdgeContact.apply(this, arguments)
    }

    function gt() {
        gt.b2PolygonContact.apply(this, arguments)
    }

    function yt() {
        yt.b2PositionSolverManifold.apply(this, arguments), this.constructor === yt && this.b2PositionSolverManifold.apply(this, arguments)
    }

    function bt() {
        bt.b2BuoyancyController.apply(this, arguments)
    }

    function wt() {
        wt.b2ConstantAccelController.apply(this, arguments)
    }

    function Et() {
        Et.b2ConstantForceController.apply(this, arguments)
    }

    function St() {
        St.b2Controller.apply(this, arguments)
    }

    function xt() {
        xt.b2ControllerEdge.apply(this, arguments)
    }

    function Tt() {
        Tt.b2GravityController.apply(this, arguments)
    }

    function Nt() {
        Nt.b2TensorDampingController.apply(this, arguments)
    }

    function Ct() {
        Ct.b2DistanceJoint.apply(this, arguments), this.constructor === Ct && this.b2DistanceJoint.apply(this, arguments)
    }

    function kt() {
        kt.b2DistanceJointDef.apply(this, arguments), this.constructor === kt && this.b2DistanceJointDef.apply(this, arguments)
    }

    function Lt() {
        Lt.b2FrictionJoint.apply(this, arguments), this.constructor === Lt && this.b2FrictionJoint.apply(this, arguments)
    }

    function At() {
        At.b2FrictionJointDef.apply(this, arguments), this.constructor === At && this.b2FrictionJointDef.apply(this, arguments)
    }

    function Ot() {
        Ot.b2GearJoint.apply(this, arguments), this.constructor === Ot && this.b2GearJoint.apply(this, arguments)
    }

    function Mt() {
        Mt.b2GearJointDef.apply(this, arguments), this.constructor === Mt && this.b2GearJointDef.apply(this, arguments)
    }

    function _t() {
        _t.b2Jacobian.apply(this, arguments)
    }

    function Dt() {
        Dt.b2Joint.apply(this, arguments), this.constructor === Dt && this.b2Joint.apply(this, arguments)
    }

    function Pt() {
        Pt.b2JointDef.apply(this, arguments), this.constructor === Pt && this.b2JointDef.apply(this, arguments)
    }

    function Ht() {
        Ht.b2JointEdge.apply(this, arguments)
    }

    function Bt() {
        Bt.b2LineJoint.apply(this, arguments), this.constructor === Bt && this.b2LineJoint.apply(this, arguments)
    }

    function jt() {
        jt.b2LineJointDef.apply(this, arguments), this.constructor === jt && this.b2LineJointDef.apply(this, arguments)
    }

    function Ft() {
        Ft.b2MouseJoint.apply(this, arguments), this.constructor === Ft && this.b2MouseJoint.apply(this, arguments)
    }

    function It() {
        It.b2MouseJointDef.apply(this, arguments), this.constructor === It && this.b2MouseJointDef.apply(this, arguments)
    }

    function qt() {
        qt.b2PrismaticJoint.apply(this, arguments), this.constructor === qt && this.b2PrismaticJoint.apply(this, arguments)
    }

    function Rt() {
        Rt.b2PrismaticJointDef.apply(this, arguments), this.constructor === Rt && this.b2PrismaticJointDef.apply(this, arguments)
    }

    function Ut() {
        Ut.b2PulleyJoint.apply(this, arguments), this.constructor === Ut && this.b2PulleyJoint.apply(this, arguments)
    }

    function zt() {
        zt.b2PulleyJointDef.apply(this, arguments), this.constructor === zt && this.b2PulleyJointDef.apply(this, arguments)
    }

    function Wt() {
        Wt.b2RevoluteJoint.apply(this, arguments), this.constructor === Wt && this.b2RevoluteJoint.apply(this, arguments)
    }

    function Xt() {
        Xt.b2RevoluteJointDef.apply(this, arguments), this.constructor === Xt && this.b2RevoluteJointDef.apply(this, arguments)
    }

    function Vt() {
        Vt.b2WeldJoint.apply(this, arguments), this.constructor === Vt && this.b2WeldJoint.apply(this, arguments)
    }

    function $t() {
        $t.b2WeldJointDef.apply(this, arguments), this.constructor === $t && this.b2WeldJointDef.apply(this, arguments)
    }

    Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase", Box2D.Collision.b2AABB = e, Box2D.Collision.b2Bound = t, Box2D.Collision.b2BoundValues = n, Box2D.Collision.b2Collision = r, Box2D.Collision.b2ContactID = i, Box2D.Collision.b2ContactPoint = s, Box2D.Collision.b2Distance = o, Box2D.Collision.b2DistanceInput = u, Box2D.Collision.b2DistanceOutput = a, Box2D.Collision.b2DistanceProxy = f, Box2D.Collision.b2DynamicTree = l, Box2D.Collision.b2DynamicTreeBroadPhase = c, Box2D.Collision.b2DynamicTreeNode = h, Box2D.Collision.b2DynamicTreePair = p, Box2D.Collision.b2Manifold = d, Box2D.Collision.b2ManifoldPoint = v, Box2D.Collision.b2Point = m, Box2D.Collision.b2RayCastInput = g, Box2D.Collision.b2RayCastOutput = y, Box2D.Collision.b2Segment = b, Box2D.Collision.b2SeparationFunction = w, Box2D.Collision.b2Simplex = E, Box2D.Collision.b2SimplexCache = S, Box2D.Collision.b2SimplexVertex = x, Box2D.Collision.b2TimeOfImpact = T, Box2D.Collision.b2TOIInput = N, Box2D.Collision.b2WorldManifold = C, Box2D.Collision.ClipVertex = k, Box2D.Collision.Features = L, Box2D.Collision.Shapes.b2CircleShape = A, Box2D.Collision.Shapes.b2EdgeChainDef = O, Box2D.Collision.Shapes.b2EdgeShape = M, Box2D.Collision.Shapes.b2MassData = _, Box2D.Collision.Shapes.b2PolygonShape = D, Box2D.Collision.Shapes.b2Shape = P, Box2D.Common.b2internal = "Box2D.Common.b2internal", Box2D.Common.b2Color = H, Box2D.Common.b2Settings = B, Box2D.Common.Math.b2Mat22 = j, Box2D.Common.Math.b2Mat33 = F, Box2D.Common.Math.b2Math = I, Box2D.Common.Math.b2Sweep = q, Box2D.Common.Math.b2Transform = R, Box2D.Common.Math.b2Vec2 = U, Box2D.Common.Math.b2Vec3 = z, Box2D.Dynamics.b2Body = W, Box2D.Dynamics.b2BodyDef = X, Box2D.Dynamics.b2ContactFilter = V, Box2D.Dynamics.b2ContactImpulse = $, Box2D.Dynamics.b2ContactListener = J, Box2D.Dynamics.b2ContactManager = K, Box2D.Dynamics.b2DebugDraw = Q, Box2D.Dynamics.b2DestructionListener = G, Box2D.Dynamics.b2FilterData = Y, Box2D.Dynamics.b2Fixture = Z, Box2D.Dynamics.b2FixtureDef = et, Box2D.Dynamics.b2Island = tt, Box2D.Dynamics.b2TimeStep = nt, Box2D.Dynamics.b2World = rt, Box2D.Dynamics.Contacts.b2CircleContact = it, Box2D.Dynamics.Contacts.b2Contact = st, Box2D.Dynamics.Contacts.b2ContactConstraint = ot, Box2D.Dynamics.Contacts.b2ContactConstraintPoint = ut, Box2D.Dynamics.Contacts.b2ContactEdge = at, Box2D.Dynamics.Contacts.b2ContactFactory = ft, Box2D.Dynamics.Contacts.b2ContactRegister = lt, Box2D.Dynamics.Contacts.b2ContactResult = ct, Box2D.Dynamics.Contacts.b2ContactSolver = ht, Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = pt, Box2D.Dynamics.Contacts.b2NullContact = dt, Box2D.Dynamics.Contacts.b2PolyAndCircleContact = vt, Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = mt, Box2D.Dynamics.Contacts.b2PolygonContact = gt, Box2D.Dynamics.Contacts.b2PositionSolverManifold = yt, Box2D.Dynamics.Controllers.b2BuoyancyController = bt, Box2D.Dynamics.Controllers.b2ConstantAccelController = wt, Box2D.Dynamics.Controllers.b2ConstantForceController = Et, Box2D.Dynamics.Controllers.b2Controller = St, Box2D.Dynamics.Controllers.b2ControllerEdge = xt, Box2D.Dynamics.Controllers.b2GravityController = Tt, Box2D.Dynamics.Controllers.b2TensorDampingController = Nt, Box2D.Dynamics.Joints.b2DistanceJoint = Ct, Box2D.Dynamics.Joints.b2DistanceJointDef = kt, Box2D.Dynamics.Joints.b2FrictionJoint = Lt, Box2D.Dynamics.Joints.b2FrictionJointDef = At, Box2D.Dynamics.Joints.b2GearJoint = Ot, Box2D.Dynamics.Joints.b2GearJointDef = Mt, Box2D.Dynamics.Joints.b2Jacobian = _t, Box2D.Dynamics.Joints.b2Joint = Dt, Box2D.Dynamics.Joints.b2JointDef = Pt, Box2D.Dynamics.Joints.b2JointEdge = Ht, Box2D.Dynamics.Joints.b2LineJoint = Bt, Box2D.Dynamics.Joints.b2LineJointDef = jt, Box2D.Dynamics.Joints.b2MouseJoint = Ft, Box2D.Dynamics.Joints.b2MouseJointDef = It, Box2D.Dynamics.Joints.b2PrismaticJoint = qt, Box2D.Dynamics.Joints.b2PrismaticJointDef = Rt, Box2D.Dynamics.Joints.b2PulleyJoint = Ut, Box2D.Dynamics.Joints.b2PulleyJointDef = zt, Box2D.Dynamics.Joints.b2RevoluteJoint = Wt,Box2D.Dynamics.Joints.b2RevoluteJointDef = Xt,Box2D.Dynamics.Joints.b2WeldJoint = Vt,Box2D.Dynamics.Joints.b2WeldJointDef = $t
}(), Box2D.postDefs = [], function () {
    var e = Box2D.Collision.Shapes.b2CircleShape, t = Box2D.Collision.Shapes.b2EdgeChainDef, n = Box2D.Collision.Shapes.b2EdgeShape, r = Box2D.Collision.Shapes.b2MassData, i = Box2D.Collision.Shapes.b2PolygonShape, s = Box2D.Collision.Shapes.b2Shape, o = Box2D.Common.b2Color, u = Box2D.Common.b2internal, a = Box2D.Common.b2Settings, f = Box2D.Common.Math.b2Mat22, l = Box2D.Common.Math.b2Mat33, c = Box2D.Common.Math.b2Math, h = Box2D.Common.Math.b2Sweep, p = Box2D.Common.Math.b2Transform, d = Box2D.Common.Math.b2Vec2, v = Box2D.Common.Math.b2Vec3, m = Box2D.Collision.b2AABB, g = Box2D.Collision.b2Bound, y = Box2D.Collision.b2BoundValues, b = Box2D.Collision.b2Collision, w = Box2D.Collision.b2ContactID, E = Box2D.Collision.b2ContactPoint, S = Box2D.Collision.b2Distance, x = Box2D.Collision.b2DistanceInput, T = Box2D.Collision.b2DistanceOutput, N = Box2D.Collision.b2DistanceProxy, C = Box2D.Collision.b2DynamicTree, k = Box2D.Collision.b2DynamicTreeBroadPhase, L = Box2D.Collision.b2DynamicTreeNode, A = Box2D.Collision.b2DynamicTreePair, O = Box2D.Collision.b2Manifold, M = Box2D.Collision.b2ManifoldPoint, _ = Box2D.Collision.b2Point, D = Box2D.Collision.b2RayCastInput, P = Box2D.Collision.b2RayCastOutput, H = Box2D.Collision.b2Segment, B = Box2D.Collision.b2SeparationFunction, j = Box2D.Collision.b2Simplex, F = Box2D.Collision.b2SimplexCache, I = Box2D.Collision.b2SimplexVertex, q = Box2D.Collision.b2TimeOfImpact, R = Box2D.Collision.b2TOIInput, U = Box2D.Collision.b2WorldManifold, z = Box2D.Collision.ClipVertex, W = Box2D.Collision.Features, X = Box2D.Collision.IBroadPhase;
    m.b2AABB = function () {
        this.lowerBound = new d, this.upperBound = new d
    }, m.prototype.IsValid = function () {
        var e = this.upperBound.x - this.lowerBound.x, t = this.upperBound.y - this.lowerBound.y, n = e >= 0 && t >= 0;
        return n = n && this.lowerBound.IsValid() && this.upperBound.IsValid(), n
    }, m.prototype.GetCenter = function () {
        return new d((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
    }, m.prototype.GetExtents = function () {
        return new d((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
    }, m.prototype.Contains = function (e) {
        var t = !0;
        return t = t && this.lowerBound.x <= e.lowerBound.x, t = t && this.lowerBound.y <= e.lowerBound.y, t = t && e.upperBound.x <= this.upperBound.x, t = t && e.upperBound.y <= this.upperBound.y, t
    }, m.prototype.RayCast = function (e, t) {
        var n = -Number.MAX_VALUE, r = Number.MAX_VALUE, i = t.p1.x, s = t.p1.y, o = t.p2.x - t.p1.x, u = t.p2.y - t.p1.y, a = Math.abs(o), f = Math.abs(u), l = e.normal, c = 0, h = 0, p = 0, d = 0, v = 0;
        if (a < Box2D.MIN_VALUE) {
            if (i < this.lowerBound.x || this.upperBound.x < i)return!1
        } else {
            c = 1 / o, h = (this.lowerBound.x - i) * c, p = (this.upperBound.x - i) * c, v = -1, h > p && (d = h, h = p, p = d, v = 1), h > n && (l.x = v, l.y = 0, n = h), r = Math.min(r, p);
            if (n > r)return!1
        }
        if (f < Box2D.MIN_VALUE) {
            if (s < this.lowerBound.y || this.upperBound.y < s)return!1
        } else {
            c = 1 / u, h = (this.lowerBound.y - s) * c, p = (this.upperBound.y - s) * c, v = -1, h > p && (d = h, h = p, p = d, v = 1), h > n && (l.y = v, l.x = 0, n = h), r = Math.min(r, p);
            if (n > r)return!1
        }
        return e.fraction = n, !0
    }, m.prototype.TestOverlap = function (e) {
        var t = e.lowerBound.x - this.upperBound.x, n = e.lowerBound.y - this.upperBound.y, r = this.lowerBound.x - e.upperBound.x, i = this.lowerBound.y - e.upperBound.y;
        return t > 0 || n > 0 ? !1 : r > 0 || i > 0 ? !1 : !0
    }, m.Combine = function (e, t) {
        var n = new m;
        return n.Combine(e, t), n
    }, m.prototype.Combine = function (e, t) {
        this.lowerBound.x = Math.min(e.lowerBound.x, t.lowerBound.x), this.lowerBound.y = Math.min(e.lowerBound.y, t.lowerBound.y), this.upperBound.x = Math.max(e.upperBound.x, t.upperBound.x), this.upperBound.y = Math.max(e.upperBound.y, t.upperBound.y)
    }, g.b2Bound = function () {
    }, g.prototype.IsLower = function () {
        return(this.value & 1) == 0
    }, g.prototype.IsUpper = function () {
        return(this.value & 1) == 1
    }, g.prototype.Swap = function (e) {
        var t = this.value, n = this.proxy, r = this.stabbingCount;
        this.value = e.value, this.proxy = e.proxy, this.stabbingCount = e.stabbingCount, e.value = t, e.proxy = n, e.stabbingCount = r
    }, y.b2BoundValues = function () {
    }, y.prototype.b2BoundValues = function () {
        this.lowerValues = new Vector_a2j_Number(0), this.lowerValues[0] = 0, this.lowerValues[1] = 0, this.upperValues = new Vector_a2j_Number(0), this.upperValues[0] = 0, this.upperValues[1] = 0
    }, b.b2Collision = function () {
    }, b.ClipSegmentToLine = function (e, t, n, r) {
        r === undefined && (r = 0);
        var i, s = 0;
        i = t[0];
        var o = i.v;
        i = t[1];
        var u = i.v, a = n.x * o.x + n.y * o.y - r, f = n.x * u.x + n.y * u.y - r;
        a <= 0 && e[s++].Set(t[0]), f <= 0 && e[s++].Set(t[1]);
        if (a * f < 0) {
            var l = a / (a - f);
            i = e[s];
            var c = i.v;
            c.x = o.x + l * (u.x - o.x), c.y = o.y + l * (u.y - o.y), i = e[s];
            var h;
            a > 0 ? (h = t[0], i.id = h.id) : (h = t[1], i.id = h.id), ++s
        }
        return s
    }, b.EdgeSeparation = function (e, t, n, r, i) {
        n === undefined && (n = 0);
        var s = parseInt(e.m_vertexCount), o = e.m_vertices, u = e.m_normals, a = parseInt(r.m_vertexCount), f = r.m_vertices, l, c;
        l = t.R, c = u[n];
        var h = l.col1.x * c.x + l.col2.x * c.y, p = l.col1.y * c.x + l.col2.y * c.y;
        l = i.R;
        var d = l.col1.x * h + l.col1.y * p, v = l.col2.x * h + l.col2.y * p, m = 0, g = Number.MAX_VALUE;
        for (var y = 0; y < a; ++y) {
            c = f[y];
            var b = c.x * d + c.y * v;
            b < g && (g = b, m = y)
        }
        c = o[n], l = t.R;
        var w = t.position.x + (l.col1.x * c.x + l.col2.x * c.y), E = t.position.y + (l.col1.y * c.x + l.col2.y * c.y);
        c = f[m], l = i.R;
        var S = i.position.x + (l.col1.x * c.x + l.col2.x * c.y), x = i.position.y + (l.col1.y * c.x + l.col2.y * c.y);
        S -= w, x -= E;
        var T = S * h + x * p;
        return T
    }, b.FindMaxSeparation = function (e, t, n, r, i) {
        var s = parseInt(t.m_vertexCount), o = t.m_normals, u, a;
        a = i.R, u = r.m_centroid;
        var f = i.position.x + (a.col1.x * u.x + a.col2.x * u.y), l = i.position.y + (a.col1.y * u.x + a.col2.y * u.y);
        a = n.R, u = t.m_centroid, f -= n.position.x + (a.col1.x * u.x + a.col2.x * u.y), l -= n.position.y + (a.col1.y * u.x + a.col2.y * u.y);
        var c = f * n.R.col1.x + l * n.R.col1.y, h = f * n.R.col2.x + l * n.R.col2.y, p = 0, d = -Number.MAX_VALUE;
        for (var v = 0; v < s; ++v) {
            u = o[v];
            var m = u.x * c + u.y * h;
            m > d && (d = m, p = v)
        }
        var g = b.EdgeSeparation(t, n, p, r, i), y = parseInt(p - 1 < 0 ? s - 1 : p - 1), w = b.EdgeSeparation(t, n, y, r, i), E = parseInt(p + 1 < s ? p + 1 : 0), S = b.EdgeSeparation(t, n, E, r, i), x = 0, T = 0, N = 0;
        if (w > g && w > S)N = -1, x = y, T = w; else {
            if (S <= g)return e[0] = p, g;
            N = 1, x = E, T = S
        }
        for (; ;) {
            N == -1 ? p = x - 1 < 0 ? s - 1 : x - 1 : p = x + 1 < s ? x + 1 : 0, g = b.EdgeSeparation(t, n, p, r, i);
            if (g <= T)break;
            x = p, T = g
        }
        return e[0] = x, T
    }, b.FindIncidentEdge = function (e, t, n, r, i, s) {
        r === undefined && (r = 0);
        var o = parseInt(t.m_vertexCount), u = t.m_normals, a = parseInt(i.m_vertexCount), f = i.m_vertices, l = i.m_normals, c, h;
        c = n.R, h = u[r];
        var p = c.col1.x * h.x + c.col2.x * h.y, d = c.col1.y * h.x + c.col2.y * h.y;
        c = s.R;
        var v = c.col1.x * p + c.col1.y * d;
        d = c.col2.x * p + c.col2.y * d, p = v;
        var m = 0, g = Number.MAX_VALUE;
        for (var y = 0; y < a; ++y) {
            h = l[y];
            var b = p * h.x + d * h.y;
            b < g && (g = b, m = y)
        }
        var w, E = parseInt(m), S = parseInt(E + 1 < a ? E + 1 : 0);
        w = e[0], h = f[E], c = s.R, w.v.x = s.position.x + (c.col1.x * h.x + c.col2.x * h.y), w.v.y = s.position.y + (c.col1.y * h.x + c.col2.y * h.y), w.id.features.referenceEdge = r, w.id.features.incidentEdge = E, w.id.features.incidentVertex = 0, w = e[1], h = f[S], c = s.R, w.v.x = s.position.x + (c.col1.x * h.x + c.col2.x * h.y), w.v.y = s.position.y + (c.col1.y * h.x + c.col2.y * h.y), w.id.features.referenceEdge = r, w.id.features.incidentEdge = S, w.id.features.incidentVertex = 1
    }, b.MakeClipPointVector = function () {
        var e = new Vector(2);
        return e[0] = new z, e[1] = new z, e
    }, b.CollidePolygons = function (e, t, n, r, i) {
        var s;
        e.m_pointCount = 0;
        var o = t.m_radius + r.m_radius, u = 0;
        b.s_edgeAO[0] = u;
        var f = b.FindMaxSeparation(b.s_edgeAO, t, n, r, i);
        u = b.s_edgeAO[0];
        if (f > o)return;
        var l = 0;
        b.s_edgeBO[0] = l;
        var c = b.FindMaxSeparation(b.s_edgeBO, r, i, t, n);
        l = b.s_edgeBO[0];
        if (c > o)return;
        var h, p, d, v, m = 0, g = 0, y = .98, w = .001, E;
        c > y * f + w ? (h = r, p = t, d = i, v = n, m = l, e.m_type = O.e_faceB, g = 1) : (h = t, p = r, d = n, v = i, m = u, e.m_type = O.e_faceA, g = 0);
        var S = b.s_incidentEdge;
        b.FindIncidentEdge(S, h, d, m, p, v);
        var x = parseInt(h.m_vertexCount), T = h.m_vertices, N = T[m], C;
        m + 1 < x ? C = T[parseInt(m + 1)] : C = T[0];
        var k = b.s_localTangent;
        k.Set(C.x - N.x, C.y - N.y), k.Normalize();
        var L = b.s_localNormal;
        L.x = k.y, L.y = -k.x;
        var A = b.s_planePoint;
        A.Set(.5 * (N.x + C.x), .5 * (N.y + C.y));
        var M = b.s_tangent;
        E = d.R, M.x = E.col1.x * k.x + E.col2.x * k.y, M.y = E.col1.y * k.x + E.col2.y * k.y;
        var _ = b.s_tangent2;
        _.x = -M.x, _.y = -M.y;
        var D = b.s_normal;
        D.x = M.y, D.y = -M.x;
        var P = b.s_v11, H = b.s_v12;
        P.x = d.position.x + (E.col1.x * N.x + E.col2.x * N.y), P.y = d.position.y + (E.col1.y * N.x + E.col2.y * N.y), H.x = d.position.x + (E.col1.x * C.x + E.col2.x * C.y), H.y = d.position.y + (E.col1.y * C.x + E.col2.y * C.y);
        var B = D.x * P.x + D.y * P.y, j = -M.x * P.x - M.y * P.y + o, F = M.x * H.x + M.y * H.y + o, I = b.s_clipPoints1, q = b.s_clipPoints2, R = 0;
        R = b.ClipSegmentToLine(I, S, _, j);
        if (R < 2)return;
        R = b.ClipSegmentToLine(q, I, M, F);
        if (R < 2)return;
        e.m_localPlaneNormal.SetV(L), e.m_localPoint.SetV(A);
        var U = 0;
        for (var z = 0; z < a.b2_maxManifoldPoints; ++z) {
            s = q[z];
            var W = D.x * s.v.x + D.y * s.v.y - B;
            if (W <= o) {
                var X = e.m_points[U];
                E = v.R;
                var V = s.v.x - v.position.x, $ = s.v.y - v.position.y;
                X.m_localPoint.x = V * E.col1.x + $ * E.col1.y, X.m_localPoint.y = V * E.col2.x + $ * E.col2.y, X.m_id.Set(s.id), X.m_id.features.flip = g, ++U
            }
        }
        e.m_pointCount = U
    }, b.CollideCircles = function (e, t, n, r, i) {
        e.m_pointCount = 0;
        var s, o;
        s = n.R, o = t.m_p;
        var u = n.position.x + (s.col1.x * o.x + s.col2.x * o.y), a = n.position.y + (s.col1.y * o.x + s.col2.y * o.y);
        s = i.R, o = r.m_p;
        var f = i.position.x + (s.col1.x * o.x + s.col2.x * o.y), l = i.position.y + (s.col1.y * o.x + s.col2.y * o.y), c = f - u, h = l - a, p = c * c + h * h, d = t.m_radius + r.m_radius;
        if (p > d * d)return;
        e.m_type = O.e_circles, e.m_localPoint.SetV(t.m_p), e.m_localPlaneNormal.SetZero(), e.m_pointCount = 1, e.m_points[0].m_localPoint.SetV(r.m_p), e.m_points[0].m_id.key = 0
    }, b.CollidePolygonAndCircle = function (e, t, n, r, i) {
        e.m_pointCount = 0;
        var s, o = 0, u = 0, a = 0, f = 0, l, c;
        c = i.R, l = r.m_p;
        var h = i.position.x + (c.col1.x * l.x + c.col2.x * l.y), p = i.position.y + (c.col1.y * l.x + c.col2.y * l.y);
        o = h - n.position.x, u = p - n.position.y, c = n.R;
        var d = o * c.col1.x + u * c.col1.y, v = o * c.col2.x + u * c.col2.y, m = 0, g = 0, y = -Number.MAX_VALUE, b = t.m_radius + r.m_radius, w = parseInt(t.m_vertexCount), E = t.m_vertices, S = t.m_normals;
        for (var x = 0; x < w; ++x) {
            l = E[x], o = d - l.x, u = v - l.y, l = S[x];
            var T = l.x * o + l.y * u;
            if (T > b)return;
            T > y && (y = T, g = x)
        }
        var N = parseInt(g), C = parseInt(N + 1 < w ? N + 1 : 0), k = E[N], L = E[C];
        if (y < Box2D.MIN_VALUE) {
            e.m_pointCount = 1, e.m_type = O.e_faceA, e.m_localPlaneNormal.SetV(S[g]), e.m_localPoint.x = .5 * (k.x + L.x), e.m_localPoint.y = .5 * (k.y + L.y), e.m_points[0].m_localPoint.SetV(r.m_p), e.m_points[0].m_id.key = 0;
            return
        }
        var A = (d - k.x) * (L.x - k.x) + (v - k.y) * (L.y - k.y), M = (d - L.x) * (k.x - L.x) + (v - L.y) * (k.y - L.y);
        if (A > 0)if (M > 0) {
            var _ = .5 * (k.x + L.x), D = .5 * (k.y + L.y);
            y = (d - _) * S[N].x + (v - D) * S[N].y;
            if (y > b)return;
            e.m_pointCount = 1, e.m_type = O.e_faceA, e.m_localPlaneNormal.x = S[N].x, e.m_localPlaneNormal.y = S[N].y, e.m_localPlaneNormal.Normalize(), e.m_localPoint.Set(_, D), e.m_points[0].m_localPoint.SetV(r.m_p), e.m_points[0].m_id.key = 0
        } else {
            if ((d - L.x) * (d - L.x) + (v - L.y) * (v - L.y) > b * b)return;
            e.m_pointCount = 1, e.m_type = O.e_faceA, e.m_localPlaneNormal.x = d - L.x, e.m_localPlaneNormal.y = v - L.y, e.m_localPlaneNormal.Normalize(), e.m_localPoint.SetV(L), e.m_points[0].m_localPoint.SetV(r.m_p), e.m_points[0].m_id.key = 0
        } else {
            if ((d - k.x) * (d - k.x) + (v - k.y) * (v - k.y) > b * b)return;
            e.m_pointCount = 1, e.m_type = O.e_faceA, e.m_localPlaneNormal.x = d - k.x, e.m_localPlaneNormal.y = v - k.y, e.m_localPlaneNormal.Normalize(), e.m_localPoint.SetV(k), e.m_points[0].m_localPoint.SetV(r.m_p), e.m_points[0].m_id.key = 0
        }
    }, b.TestOverlap = function (e, t) {
        var n = t.lowerBound, r = e.upperBound, i = n.x - r.x, s = n.y - r.y;
        n = e.lowerBound, r = t.upperBound;
        var o = n.x - r.x, u = n.y - r.y;
        return i > 0 || s > 0 ? !1 : o > 0 || u > 0 ? !1 : !0
    }, Box2D.postDefs.push(function () {
        Box2D.Collision.b2Collision.s_incidentEdge = b.MakeClipPointVector(), Box2D.Collision.b2Collision.s_clipPoints1 = b.MakeClipPointVector(), Box2D.Collision.b2Collision.s_clipPoints2 = b.MakeClipPointVector(), Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1), Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1), Box2D.Collision.b2Collision.s_localTangent = new d, Box2D.Collision.b2Collision.s_localNormal = new d, Box2D.Collision.b2Collision.s_planePoint = new d, Box2D.Collision.b2Collision.s_normal = new d, Box2D.Collision.b2Collision.s_tangent = new d, Box2D.Collision.b2Collision.s_tangent2 = new d, Box2D.Collision.b2Collision.s_v11 = new d, Box2D.Collision.b2Collision.s_v12 = new d, Box2D.Collision.b2Collision.b2CollidePolyTempVec = new d, Box2D.Collision.b2Collision.b2_nullFeature = 255
    }), w.b2ContactID = function () {
        this.features = new W
    }, w.prototype.b2ContactID = function () {
        this.features._m_id = this
    }, w.prototype.Set = function (e) {
        this.key = e._key
    }, w.prototype.Copy = function () {
        var e = new w;
        return e.key = this.key, e
    }, Object.defineProperty(w.prototype, "key", {enumerable: !1, configurable: !0, get: function () {
        return this._key
    }}), Object.defineProperty(w.prototype, "key", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._key = e, this.features._referenceEdge = this._key & 255, this.features._incidentEdge = (this._key & 65280) >> 8 & 255, this.features._incidentVertex = (this._key & 16711680) >> 16 & 255, this.features._flip = (this._key & 4278190080) >> 24 & 255
    }}), E.b2ContactPoint = function () {
        this.position = new d, this.velocity = new d, this.normal = new d, this.id = new w
    }, S.b2Distance = function () {
    }, S.Distance = function (e, t, n) {
        ++S.b2_gjkCalls;
        var r = n.proxyA, i = n.proxyB, s = n.transformA, o = n.transformB, u = S.s_simplex;
        u.ReadCache(t, r, s, i, o);
        var f = u.m_vertices, l = 20, h = S.s_saveA, p = S.s_saveB, v = 0, m = u.GetClosestPoint(), g = m.LengthSquared(), y = g, b = 0, w, E = 0;
        while (E < l) {
            v = u.m_count;
            for (b = 0; b < v; b++)h[b] = f[b].indexA, p[b] = f[b].indexB;
            switch (u.m_count) {
                case 1:
                    break;
                case 2:
                    u.Solve2();
                    break;
                case 3:
                    u.Solve3();
                    break;
                default:
                    a.b2Assert(!1)
            }
            if (u.m_count == 3)break;
            w = u.GetClosestPoint(), y = w.LengthSquared(), y > g, g = y;
            var x = u.GetSearchDirection();
            if (x.LengthSquared() < Box2D.MIN_VALUE * Box2D.MIN_VALUE)break;
            var T = f[u.m_count];
            T.indexA = r.GetSupport(c.MulTMV(s.R, x.GetNegative())), T.wA = c.MulX(s, r.GetVertex(T.indexA)), T.indexB = i.GetSupport(c.MulTMV(o.R, x)), T.wB = c.MulX(o, i.GetVertex(T.indexB)), T.w = c.SubtractVV(T.wB, T.wA), ++E, ++S.b2_gjkIters;
            var N = !1;
            for (b = 0; b < v; b++)if (T.indexA == h[b] && T.indexB == p[b]) {
                N = !0;
                break
            }
            if (N)break;
            ++u.m_count
        }
        S.b2_gjkMaxIters = c.Max(S.b2_gjkMaxIters, E), u.GetWitnessPoints(e.pointA, e.pointB), e.distance = c.SubtractVV(e.pointA, e.pointB).Length(), e.iterations = E, u.WriteCache(t);
        if (n.useRadii) {
            var C = r.m_radius, k = i.m_radius;
            if (e.distance > C + k && e.distance > Box2D.MIN_VALUE) {
                e.distance -= C + k;
                var L = c.SubtractVV(e.pointB, e.pointA);
                L.Normalize(), e.pointA.x += C * L.x, e.pointA.y += C * L.y, e.pointB.x -= k * L.x, e.pointB.y -= k * L.y
            } else w = new d, w.x = .5 * (e.pointA.x + e.pointB.x), w.y = .5 * (e.pointA.y + e.pointB.y), e.pointA.x = e.pointB.x = w.x, e.pointA.y = e.pointB.y = w.y, e.distance = 0
        }
    }, Box2D.postDefs.push(function () {
        Box2D.Collision.b2Distance.s_simplex = new j, Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3), Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
    }), x.b2DistanceInput = function () {
    }, T.b2DistanceOutput = function () {
        this.pointA = new d, this.pointB = new d
    }, N.b2DistanceProxy = function () {
    }, N.prototype.Set = function (t) {
        switch (t.GetType()) {
            case s.e_circleShape:
                var n = t instanceof e ? t : null;
                this.m_vertices = new Vector(1, !0), this.m_vertices[0] = n.m_p, this.m_count = 1, this.m_radius = n.m_radius;
                break;
            case s.e_polygonShape:
                var r = t instanceof i ? t : null;
                this.m_vertices = r.m_vertices, this.m_count = r.m_vertexCount, this.m_radius = r.m_radius;
                break;
            default:
                a.b2Assert(!1)
        }
    }, N.prototype.GetSupport = function (e) {
        var t = 0, n = this.m_vertices[0].x * e.x + this.m_vertices[0].y * e.y;
        for (var r = 1; r < this.m_count; ++r) {
            var i = this.m_vertices[r].x * e.x + this.m_vertices[r].y * e.y;
            i > n && (t = r, n = i)
        }
        return t
    }, N.prototype.GetSupportVertex = function (e) {
        var t = 0, n = this.m_vertices[0].x * e.x + this.m_vertices[0].y * e.y;
        for (var r = 1; r < this.m_count; ++r) {
            var i = this.m_vertices[r].x * e.x + this.m_vertices[r].y * e.y;
            i > n && (t = r, n = i)
        }
        return this.m_vertices[t]
    }, N.prototype.GetVertexCount = function () {
        return this.m_count
    }, N.prototype.GetVertex = function (e) {
        return e === undefined && (e = 0), a.b2Assert(0 <= e && e < this.m_count), this.m_vertices[e]
    }, C.b2DynamicTree = function () {
    }, C.prototype.b2DynamicTree = function () {
        this.m_root = null, this.m_freeList = null, this.m_path = 0, this.m_insertionCount = 0
    }, C.prototype.CreateProxy = function (e, t) {
        var n = this.AllocateNode(), r = a.b2_aabbExtension, i = a.b2_aabbExtension;
        return n.aabb.lowerBound.x = e.lowerBound.x - r, n.aabb.lowerBound.y = e.lowerBound.y - i, n.aabb.upperBound.x = e.upperBound.x + r, n.aabb.upperBound.y = e.upperBound.y + i, n.userData = t, this.InsertLeaf(n), n
    }, C.prototype.DestroyProxy = function (e) {
        this.RemoveLeaf(e), this.FreeNode(e)
    }, C.prototype.MoveProxy = function (e, t, n) {
        a.b2Assert(e.IsLeaf());
        if (e.aabb.Contains(t))return!1;
        this.RemoveLeaf(e);
        var r = a.b2_aabbExtension + a.b2_aabbMultiplier * (n.x > 0 ? n.x : -n.x), i = a.b2_aabbExtension + a.b2_aabbMultiplier * (n.y > 0 ? n.y : -n.y);
        return e.aabb.lowerBound.x = t.lowerBound.x - r, e.aabb.lowerBound.y = t.lowerBound.y - i, e.aabb.upperBound.x = t.upperBound.x + r, e.aabb.upperBound.y = t.upperBound.y + i, this.InsertLeaf(e), !0
    }, C.prototype.Rebalance = function (e) {
        e === undefined && (e = 0);
        if (this.m_root == null)return;
        for (var t = 0; t < e; t++) {
            var n = this.m_root, r = 0;
            while (n.IsLeaf() == 0)n = this.m_path >> r & 1 ? n.child2 : n.child1, r = r + 1 & 31;
            ++this.m_path, this.RemoveLeaf(n), this.InsertLeaf(n)
        }
    }, C.prototype.GetFatAABB = function (e) {
        return e.aabb
    }, C.prototype.GetUserData = function (e) {
        return e.userData
    }, C.prototype.Query = function (e, t) {
        if (this.m_root == null)return;
        var n = new Vector, r = 0;
        n[r++] = this.m_root;
        while (r > 0) {
            var i = n[--r];
            if (i.aabb.TestOverlap(t))if (i.IsLeaf()) {
                var s = e(i);
                if (!s)return
            } else n[r++] = i.child1, n[r++] = i.child2
        }
    }, C.prototype.RayCast = function (e, t) {
        if (this.m_root == null)return;
        var n = t.p1, r = t.p2, i = c.SubtractVV(n, r);
        i.Normalize();
        var s = c.CrossFV(1, i), o = c.AbsV(s), u = t.maxFraction, a = new m, f = 0, l = 0;
        f = n.x + u * (r.x - n.x), l = n.y + u * (r.y - n.y), a.lowerBound.x = Math.min(n.x, f), a.lowerBound.y = Math.min(n.y, l), a.upperBound.x = Math.max(n.x, f), a.upperBound.y = Math.max(n.y, l);
        var h = new Vector, p = 0;
        h[p++] = this.m_root;
        while (p > 0) {
            var d = h[--p];
            if (d.aabb.TestOverlap(a) == 0)continue;
            var v = d.aabb.GetCenter(), g = d.aabb.GetExtents(), y = Math.abs(s.x * (n.x - v.x) + s.y * (n.y - v.y)) - o.x * g.x - o.y * g.y;
            if (y > 0)continue;
            if (d.IsLeaf()) {
                var b = new D;
                b.p1 = t.p1, b.p2 = t.p2, b.maxFraction = t.maxFraction, u = e(b, d);
                if (u == 0)return;
                u > 0 && (f = n.x + u * (r.x - n.x), l = n.y + u * (r.y - n.y), a.lowerBound.x = Math.min(n.x, f), a.lowerBound.y = Math.min(n.y, l), a.upperBound.x = Math.max(n.x, f), a.upperBound.y = Math.max(n.y, l))
            } else h[p++] = d.child1, h[p++] = d.child2
        }
    }, C.prototype.AllocateNode = function () {
        if (this.m_freeList) {
            var e = this.m_freeList;
            return this.m_freeList = e.parent, e.parent = null, e.child1 = null, e.child2 = null, e
        }
        return new L
    }, C.prototype.FreeNode = function (e) {
        e.parent = this.m_freeList, this.m_freeList = e
    }, C.prototype.InsertLeaf = function (e) {
        ++this.m_insertionCount;
        if (this.m_root == null) {
            this.m_root = e, this.m_root.parent = null;
            return
        }
        var t = e.aabb.GetCenter(), n = this.m_root;
        if (n.IsLeaf() == 0)do {
            var r = n.child1, i = n.child2, s = Math.abs((r.aabb.lowerBound.x + r.aabb.upperBound.x) / 2 - t.x) + Math.abs((r.aabb.lowerBound.y + r.aabb.upperBound.y) / 2 - t.y), o = Math.abs((i.aabb.lowerBound.x + i.aabb.upperBound.x) / 2 - t.x) + Math.abs((i.aabb.lowerBound.y + i.aabb.upperBound.y) / 2 - t.y);
            s < o ? n = r : n = i
        } while (n.IsLeaf() == 0);
        var u = n.parent, a = this.AllocateNode();
        a.parent = u, a.userData = null, a.aabb.Combine(e.aabb, n.aabb);
        if (u) {
            n.parent.child1 == n ? u.child1 = a : u.child2 = a, a.child1 = n, a.child2 = e, n.parent = a, e.parent = a;
            do {
                if (u.aabb.Contains(a.aabb))break;
                u.aabb.Combine(u.child1.aabb, u.child2.aabb), a = u, u = u.parent
            } while (u)
        } else a.child1 = n, a.child2 = e, n.parent = a, e.parent = a, this.m_root = a
    }, C.prototype.RemoveLeaf = function (e) {
        if (e == this.m_root) {
            this.m_root = null;
            return
        }
        var t = e.parent, n = t.parent, r;
        t.child1 == e ? r = t.child2 : r = t.child1;
        if (n) {
            n.child1 == t ? n.child1 = r : n.child2 = r, r.parent = n, this.FreeNode(t);
            while (n) {
                var i = n.aabb;
                n.aabb = m.Combine(n.child1.aabb, n.child2.aabb);
                if (i.Contains(n.aabb))break;
                n = n.parent
            }
        } else this.m_root = r, r.parent = null, this.FreeNode(t)
    }, k.b2DynamicTreeBroadPhase = function () {
        this.m_tree = new C, this.m_moveBuffer = new Vector, this.m_pairBuffer = new Vector, this.m_pairCount = 0
    }, k.prototype.CreateProxy = function (e, t) {
        var n = this.m_tree.CreateProxy(e, t);
        return++this.m_proxyCount, this.BufferMove(n), n
    }, k.prototype.DestroyProxy = function (e) {
        this.UnBufferMove(e), --this.m_proxyCount, this.m_tree.DestroyProxy(e)
    }, k.prototype.MoveProxy = function (e, t, n) {
        var r = this.m_tree.MoveProxy(e, t, n);
        r && this.BufferMove(e)
    }, k.prototype.TestOverlap = function (e, t) {
        var n = this.m_tree.GetFatAABB(e), r = this.m_tree.GetFatAABB(t);
        return n.TestOverlap(r)
    }, k.prototype.GetUserData = function (e) {
        return this.m_tree.GetUserData(e)
    }, k.prototype.GetFatAABB = function (e) {
        return this.m_tree.GetFatAABB(e)
    }, k.prototype.GetProxyCount = function () {
        return this.m_proxyCount
    }, k.prototype.UpdatePairs = function (e) {
        var t = this;
        t.m_pairCount = 0;
        var n = 0, r, i;
        for (n = 0; n < t.m_moveBuffer.length; ++n) {
            r = t.m_moveBuffer[n], i = function (e) {
                if (e == r)return!0;
                t.m_pairCount == t.m_pairBuffer.length && (t.m_pairBuffer[t.m_pairCount] = new A);
                var n = t.m_pairBuffer[t.m_pairCount];
                return n.proxyA = e < r ? e : r, n.proxyB = e < r ? r : e, ++t.m_pairCount, !0
            };
            var s = t.m_tree.GetFatAABB(r);
            t.m_tree.Query(i, s)
        }
        t.m_moveBuffer.length = 0;
        for (n = 0; n < t.m_pairCount;) {
            var o = t.m_pairBuffer[n], u = t.m_tree.GetUserData(o.proxyA), a = t.m_tree.GetUserData(o.proxyB);
            e(u, a), ++n;
            while (n < t.m_pairCount) {
                var f = t.m_pairBuffer[n];
                if (f.proxyA != o.proxyA || f.proxyB != o.proxyB)break;
                ++n
            }
        }
    }, k.prototype.Query = function (e, t) {
        this.m_tree.Query(e, t)
    }, k.prototype.RayCast = function (e, t) {
        this.m_tree.RayCast(e, t)
    }, k.prototype.Validate = function () {
    }, k.prototype.Rebalance = function (e) {
        e === undefined && (e = 0), this.m_tree.Rebalance(e)
    }, k.prototype.BufferMove = function (e) {
        this.m_moveBuffer[this.m_moveBuffer.length] = e
    }, k.prototype.UnBufferMove = function (e) {
        var t = parseInt(this.m_moveBuffer.indexOf(e));
        this.m_moveBuffer.splice(t, 1)
    }, k.prototype.ComparePairs = function (e, t) {
        return 0
    }, k.__implements = {}, k.__implements[X] = !0, L.b2DynamicTreeNode = function () {
        this.aabb = new m
    }, L.prototype.IsLeaf = function () {
        return this.child1 == null
    }, A.b2DynamicTreePair = function () {
    }, O.b2Manifold = function () {
        this.m_pointCount = 0
    }, O.prototype.b2Manifold = function () {
        this.m_points = new Vector(a.b2_maxManifoldPoints);
        for (var e = 0; e < a.b2_maxManifoldPoints; e++)this.m_points[e] = new M;
        this.m_localPlaneNormal = new d, this.m_localPoint = new d
    }, O.prototype.Reset = function () {
        for (var e = 0; e < a.b2_maxManifoldPoints; e++)(this.m_points[e]instanceof M ? this.m_points[e] : null).Reset();
        this.m_localPlaneNormal.SetZero(), this.m_localPoint.SetZero(), this.m_type = 0, this.m_pointCount = 0
    }, O.prototype.Set = function (e) {
        this.m_pointCount = e.m_pointCount;
        for (var t = 0; t < a.b2_maxManifoldPoints; t++)(this.m_points[t]instanceof M ? this.m_points[t] : null).Set(e.m_points[t]);
        this.m_localPlaneNormal.SetV(e.m_localPlaneNormal), this.m_localPoint.SetV(e.m_localPoint), this.m_type = e.m_type
    }, O.prototype.Copy = function () {
        var e = new O;
        return e.Set(this), e
    }, Box2D.postDefs.push(function () {
        Box2D.Collision.b2Manifold.e_circles = 1, Box2D.Collision.b2Manifold.e_faceA = 2, Box2D.Collision.b2Manifold.e_faceB = 4
    }), M.b2ManifoldPoint = function () {
        this.m_localPoint = new d, this.m_id = new w
    }, M.prototype.b2ManifoldPoint = function () {
        this.Reset()
    }, M.prototype.Reset = function () {
        this.m_localPoint.SetZero(), this.m_normalImpulse = 0, this.m_tangentImpulse = 0, this.m_id.key = 0
    }, M.prototype.Set = function (e) {
        this.m_localPoint.SetV(e.m_localPoint), this.m_normalImpulse = e.m_normalImpulse, this.m_tangentImpulse = e.m_tangentImpulse, this.m_id.Set(e.m_id)
    }, _.b2Point = function () {
        this.p = new d
    }, _.prototype.Support = function (e, t, n) {
        return t === undefined && (t = 0), n === undefined && (n = 0), this.p
    }, _.prototype.GetFirstVertex = function (e) {
        return this.p
    }, D.b2RayCastInput = function () {
        this.p1 = new d, this.p2 = new d
    }, D.prototype.b2RayCastInput = function (e, t, n) {
        e === undefined && (e = null), t === undefined && (t = null), n === undefined && (n = 1), e && this.p1.SetV(e), t && this.p2.SetV(t), this.maxFraction = n
    }, P.b2RayCastOutput = function () {
        this.normal = new d
    }, H.b2Segment = function () {
        this.p1 = new d, this.p2 = new d
    }, H.prototype.TestSegment = function (e, t, n, r) {
        r === undefined && (r = 0);
        var i = n.p1, s = n.p2.x - i.x, o = n.p2.y - i.y, u = this.p2.x - this.p1.x, a = this.p2.y - this.p1.y, f = a, l = -u, c = 100 * Box2D.MIN_VALUE, h = -(s * f + o * l);
        if (h > c) {
            var p = i.x - this.p1.x, d = i.y - this.p1.y, v = p * f + d * l;
            if (0 <= v && v <= r * h) {
                var m = -s * d + o * p;
                if (-c * h <= m && m <= h * (1 + c)) {
                    v /= h;
                    var g = Math.sqrt(f * f + l * l);
                    return f /= g, l /= g, e[0] = v, t.Set(f, l), !0
                }
            }
        }
        return!1
    }, H.prototype.Extend = function (e) {
        this.ExtendForward(e), this.ExtendBackward(e)
    }, H.prototype.ExtendForward = function (e) {
        var t = this.p2.x - this.p1.x, n = this.p2.y - this.p1.y, r = Math.min(t > 0 ? (e.upperBound.x - this.p1.x) / t : t < 0 ? (e.lowerBound.x - this.p1.x) / t : Number.POSITIVE_INFINITY, n > 0 ? (e.upperBound.y - this.p1.y) / n : n < 0 ? (e.lowerBound.y - this.p1.y) / n : Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + t * r, this.p2.y = this.p1.y + n * r
    }, H.prototype.ExtendBackward = function (e) {
        var t = -this.p2.x + this.p1.x, n = -this.p2.y + this.p1.y, r = Math.min(t > 0 ? (e.upperBound.x - this.p2.x) / t : t < 0 ? (e.lowerBound.x - this.p2.x) / t : Number.POSITIVE_INFINITY, n > 0 ? (e.upperBound.y - this.p2.y) / n : n < 0 ? (e.lowerBound.y - this.p2.y) / n : Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + t * r, this.p1.y = this.p2.y + n * r
    }, B.b2SeparationFunction = function () {
        this.m_localPoint = new d, this.m_axis = new d
    },B.prototype.Initialize = function (e, t, n, r, i) {
        this.m_proxyA = t, this.m_proxyB = r;
        var s = parseInt(e.count);
        a.b2Assert(0 < s && s < 3);
        var o, u, f, l, h, p, v = 0, m = 0, g = 0, y = 0, b = 0, w = 0, E, S
            , x = 0, T = 0;
        if (s == 1)this.m_type = B.e_points, o = this.m_proxyA.GetVertex(e.indexA[0]), l = this.m_proxyB.GetVertex(e.indexB[0]), S = o, E = n.R, v = n.position.x + (E.col1.x * S.x + E.col2.x * S.y), m = n.position.y + (E.col1.y * S.x + E.col2.y * S.y), S = l, E = i.R, g = i.position.x + (E.col1.x * S.x + E.col2.x * S.y), y = i.position.y + (E.col1.y * S.x + E.col2.y * S.y), this.m_axis.x = g - v, this.m_axis.y = y - m, this.m_axis.Normalize(); else if (e.indexB[0] == e.indexB[1])this.m_type = B.e_faceA, u = this.m_proxyA.GetVertex(e.indexA[0]), f = this.m_proxyA.GetVertex(e.indexA[1]), l = this.m_proxyB.GetVertex(e.indexB[0]), this.m_localPoint.x = .5 * (u.x + f.x), this.m_localPoint.y = .5 * (u.y + f.y), this.m_axis = c.CrossVF(c.SubtractVV(f, u), 1), this.m_axis.Normalize(), S = this.m_axis, E = n.R, b = E.col1.x * S.x + E.col2.x * S.y, w = E.col1.y * S.x + E.col2.y * S.y, S = this.m_localPoint, E = n.R, v = n.position.x + (E.col1.x * S.x + E.col2.x * S.y), m = n.position.y + (E.col1.y * S.x + E.col2.y * S.y), S = l, E = i.R, g = i.position.x + (E.col1.x * S.x + E.col2.x * S.y), y = i.position.y + (E.col1.y * S.x + E.col2.y * S.y), x = (g - v) * b + (y - m) * w, x < 0 && this.m_axis.NegativeSelf(); else if (e.indexA[0] == e.indexA[0])this.m_type = B.e_faceB, h = this.m_proxyB.GetVertex(e.indexB[0]), p = this.m_proxyB.GetVertex(e.indexB[1]), o = this.m_proxyA.GetVertex(e.indexA[0]), this.m_localPoint.x = .5 * (h.x + p.x), this.m_localPoint.y = .5 * (h.y + p.y), this.m_axis = c.CrossVF(c.SubtractVV(p, h), 1), this.m_axis.Normalize(), S = this.m_axis, E = i.R, b = E.col1.x * S.x + E.col2.x * S.y, w = E.col1.y * S.x + E.col2.y * S.y, S = this.m_localPoint, E = i.R, g = i.position.x + (E.col1.x * S.x + E.col2.x * S.y), y = i.position.y + (E.col1.y * S.x + E.col2.y * S.y), S = o, E = n.R, v = n.position.x + (E.col1.x * S.x + E.col2.x * S.y), m = n.position.y + (E.col1.y * S.x + E.col2.y * S.y), x = (v - g) * b + (m - y) * w, x < 0 && this.m_axis.NegativeSelf(); else {
            u = this.m_proxyA.GetVertex(e.indexA[0]), f = this.m_proxyA.GetVertex(e.indexA[1]), h = this.m_proxyB.GetVertex(e.indexB[0]), p = this.m_proxyB.GetVertex(e.indexB[1]);
            var N = c.MulX(n, o), C = c.MulMV(n.R, c.SubtractVV(f, u)), k = c.MulX(i, l), L = c.MulMV(i.R, c.SubtractVV(p, h)), A = C.x * C.x + C.y * C.y, O = L.x * L.x + L.y * L.y, M = c.SubtractVV(L, C), _ = C.x * M.x + C.y * M.y, D = L.x * M.x + L.y * M.y, P = C.x * L.x + C.y * L.y, H = A * O - P * P;
            x = 0, H != 0 && (x = c.Clamp((P * D - _ * O) / H, 0, 1));
            var j = (P * x + D) / O;
            j < 0 && (j = 0, x = c.Clamp((P - _) / A, 0, 1)), o = new d, o.x = u.x + x * (f.x - u.x), o.y = u.y + x * (f.y - u.y), l = new d, l.x = h.x + x * (p.x - h.x), l.y = h.y + x * (p.y - h.y), x == 0 || x == 1 ? (this.m_type = B.e_faceB, this.m_axis = c.CrossVF(c.SubtractVV(p, h), 1), this.m_axis.Normalize(), this.m_localPoint = l, S = this.m_axis, E = i.R, b = E.col1.x * S.x + E.col2.x * S.y, w = E.col1.y * S.x + E.col2.y * S.y, S = this.m_localPoint, E = i.R, g = i.position.x + (E.col1.x * S.x + E.col2.x * S.y), y = i.position.y + (E.col1.y * S.x + E.col2.y * S.y), S = o, E = n.R, v = n.position.x + (E.col1.x * S.x + E.col2.x * S.y), m = n.position.y + (E.col1.y * S.x + E.col2.y * S.y), T = (v - g) * b + (m - y) * w, x < 0 && this.m_axis.NegativeSelf()) : (this.m_type = B.e_faceA, this.m_axis = c.CrossVF(c.SubtractVV(f, u), 1), this.m_localPoint = o, S = this.m_axis, E = n.R, b = E.col1.x * S.x + E.col2.x * S.y, w = E.col1.y * S.x + E.col2.y * S.y, S = this.m_localPoint, E = n.R, v = n.position.x + (E.col1.x * S.x + E.col2.x * S.y), m = n.position.y + (E.col1.y * S.x + E.col2.y * S.y), S = l, E = i.R, g = i.position.x + (E.col1.x * S.x + E.col2.x * S.y), y = i.position.y + (E.col1.y * S.x + E.col2.y * S.y), T = (g - v) * b + (y - m) * w, x < 0 && this.m_axis.NegativeSelf())
        }
    },B.prototype.Evaluate = function (e, t) {
        var n, r, i, s, o, u, f = 0, l;
        switch (this.m_type) {
            case B.e_points:
                return n = c.MulTMV(e.R, this.m_axis), r = c.MulTMV(t.R, this.m_axis.GetNegative()), i = this.m_proxyA.GetSupportVertex(n), s = this.m_proxyB.GetSupportVertex(r), o = c.MulX(e, i), u = c.MulX(t, s), f = (u.x - o.x) * this.m_axis.x + (u.y - o.y) * this.m_axis.y, f;
            case B.e_faceA:
                return l = c.MulMV(e.R, this.m_axis), o = c.MulX(e, this.m_localPoint), r = c.MulTMV(t.R, l.GetNegative()), s = this.m_proxyB.GetSupportVertex(r), u = c.MulX(t, s), f = (u.x - o.x) * l.x + (u.y - o.y) * l.y, f;
            case B.e_faceB:
                return l = c.MulMV(t.R, this.m_axis), u = c.MulX(t, this.m_localPoint), n = c.MulTMV(e.R, l.GetNegative()), i = this.m_proxyA.GetSupportVertex(n), o = c.MulX(e, i), f = (o.x - u.x) * l.x + (o.y - u.y) * l.y, f;
            default:
                return a.b2Assert(!1), 0
        }
    },Box2D.postDefs.push(function () {
        Box2D.Collision.b2SeparationFunction.e_points = 1, Box2D.Collision.b2SeparationFunction.e_faceA = 2, Box2D.Collision.b2SeparationFunction.e_faceB = 4
    }),j.b2Simplex = function () {
        this.m_v1 = new I, this.m_v2 = new I, this.m_v3 = new I, this.m_vertices = new Vector(3)
    },j.prototype.b2Simplex = function () {
        this.m_vertices[0] = this.m_v1, this.m_vertices[1] = this.m_v2, this.m_vertices[2] = this.m_v3
    },j.prototype.ReadCache = function (e, t, n, r, i) {
        a.b2Assert(0 <= e.count && e.count <= 3);
        var s, o;
        this.m_count = e.count;
        var u = this.m_vertices;
        for (var f = 0; f < this.m_count; f++) {
            var l = u[f];
            l.indexA = e.indexA[f], l.indexB = e.indexB[f], s = t.GetVertex(l.indexA), o = r.GetVertex(l.indexB), l.wA = c.MulX(n, s), l.wB = c.MulX(i, o), l.w = c.SubtractVV(l.wB, l.wA), l.a = 0
        }
        if (this.m_count > 1) {
            var h = e.metric, p = this.GetMetric();
            if (p < .5 * h || 2 * h < p || p < Box2D.MIN_VALUE)this.m_count = 0
        }
        this.m_count == 0 && (l = u[0], l.indexA = 0, l.indexB = 0, s = t.GetVertex(0), o = r.GetVertex(0), l.wA = c.MulX(n, s), l.wB = c.MulX(i, o), l.w = c.SubtractVV(l.wB, l.wA), this.m_count = 1)
    },j.prototype.WriteCache = function (e) {
        e.metric = this.GetMetric(), e.count = Box2D.parseUInt(this.m_count);
        var t = this.m_vertices;
        for (var n = 0; n < this.m_count; n++)e.indexA[n] = Box2D.parseUInt(t[n].indexA), e.indexB[n] = Box2D.parseUInt(t[n].indexB)
    },j.prototype.GetSearchDirection = function () {
        switch (this.m_count) {
            case 1:
                return this.m_v1.w.GetNegative();
            case 2:
                var e = c.SubtractVV(this.m_v2.w, this.m_v1.w), t = c.CrossVV(e, this.m_v1.w.GetNegative());
                if (t > 0)return c.CrossFV(1, e);
                return c.CrossVF(e, 1);
            default:
                return a.b2Assert(!1), new d
        }
    },j.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
            case 0:
                return a.b2Assert(!1), new d;
            case 1:
                return this.m_v1.w;
            case 2:
                return new d(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                return a.b2Assert(!1), new d
        }
    },j.prototype.GetWitnessPoints = function (e, t) {
        switch (this.m_count) {
            case 0:
                a.b2Assert(!1);
                break;
            case 1:
                e.SetV(this.m_v1.wA), t.SetV(this.m_v1.wB);
                break;
            case 2:
                e.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x, e.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y, t.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x, t.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;
            case 3:
                t.x = e.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x, t.y = e.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;
            default:
                a.b2Assert(!1)
        }
    },j.prototype.GetMetric = function () {
        switch (this.m_count) {
            case 0:
                return a.b2Assert(!1), 0;
            case 1:
                return 0;
            case 2:
                return c.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
            case 3:
                return c.CrossVV(c.SubtractVV(this.m_v2.w, this.m_v1.w), c.SubtractVV(this.m_v3.w, this.m_v1.w));
            default:
                return a.b2Assert(!1), 0
        }
    },j.prototype.Solve2 = function () {
        var e = this.m_v1.w, t = this.m_v2.w, n = c.SubtractVV(t, e), r = -(e.x * n.x + e.y * n.y);
        if (r <= 0) {
            this.m_v1.a = 1, this.m_count = 1;
            return
        }
        var i = t.x * n.x + t.y * n.y;
        if (i <= 0) {
            this.m_v2.a = 1, this.m_count = 1, this.m_v1.Set(this.m_v2);
            return
        }
        var s = 1 / (i + r);
        this.m_v1.a = i * s, this.m_v2.a = r * s, this.m_count = 2
    },j.prototype.Solve3 = function () {
        var e = this.m_v1.w, t = this.m_v2.w, n = this.m_v3.w, r = c.SubtractVV(t, e), i = c.Dot(e, r), s = c.Dot(t, r), o = s, u = -i, a = c.SubtractVV(n, e), f = c.Dot(e, a), l = c.Dot(n, a), h = l, p = -f, d = c.SubtractVV(n, t), v = c.Dot(t, d), m = c.Dot(n, d), g = m, y = -v, b = c.CrossVV(r, a), w = b * c.CrossVV(t, n), E = b * c.CrossVV(n, e), S = b * c.CrossVV(e, t);
        if (u <= 0 && p <= 0) {
            this.m_v1.a = 1, this.m_count = 1;
            return
        }
        if (o > 0 && u > 0 && S <= 0) {
            var x = 1 / (o + u);
            this.m_v1.a = o * x, this.m_v2.a = u * x, this.m_count = 2;
            return
        }
        if (h > 0 && p > 0 && E <= 0) {
            var T = 1 / (h + p);
            this.m_v1.a = h * T, this.m_v3.a = p * T, this.m_count = 2, this.m_v2.Set(this.m_v3);
            return
        }
        if (o <= 0 && y <= 0) {
            this.m_v2.a = 1, this.m_count = 1, this.m_v1.Set(this.m_v2);
            return
        }
        if (h <= 0 && g <= 0) {
            this.m_v3.a = 1, this.m_count = 1, this.m_v1.Set(this.m_v3);
            return
        }
        if (g > 0 && y > 0 && w <= 0) {
            var N = 1 / (g + y);
            this.m_v2.a = g * N, this.m_v3.a = y * N, this.m_count = 2, this.m_v1.Set(this.m_v3);
            return
        }
        var C = 1 / (w + E + S);
        this.m_v1.a = w * C, this.m_v2.a = E * C, this.m_v3.a = S * C, this.m_count = 3
    },F.b2SimplexCache = function () {
        this.indexA = new Vector_a2j_Number(3), this.indexB = new Vector_a2j_Number(3)
    },I.b2SimplexVertex = function () {
    },I.prototype.Set = function (e) {
        this.wA.SetV(e.wA), this.wB.SetV(e.wB), this.w.SetV(e.w), this.a = e.a, this.indexA = e.indexA, this.indexB = e.indexB
    },q.b2TimeOfImpact = function () {
    },q.TimeOfImpact = function (e) {
        ++q.b2_toiCalls;
        var t = e.proxyA, n = e.proxyB, r = e.sweepA, i = e.sweepB;
        a.b2Assert(r.t0 == i.t0), a.b2Assert(1 - r.t0 > Box2D.MIN_VALUE);
        var s = t.m_radius + n.m_radius, o = e.tolerance, u = 0, f = 1e3, l = 0, h = 0;
        q.s_cache.count = 0, q.s_distanceInput.useRadii = !1;
        for (; ;) {
            r.GetTransform(q.s_xfA, u), i.GetTransform(q.s_xfB, u), q.s_distanceInput.proxyA = t, q.s_distanceInput.proxyB = n, q.s_distanceInput.transformA = q.s_xfA, q.s_distanceInput.transformB = q.s_xfB, S.Distance(q.s_distanceOutput, q.s_cache, q.s_distanceInput);
            if (q.s_distanceOutput.distance <= 0) {
                u = 1;
                break
            }
            q.s_fcn.Initialize(q.s_cache, t, q.s_xfA, n, q.s_xfB);
            var p = q.s_fcn.Evaluate(q.s_xfA, q.s_xfB);
            if (p <= 0) {
                u = 1;
                break
            }
            l == 0 && (p > s ? h = c.Max(s - o, .75 * s) : h = c.Max(p - o, .02 * s));
            if (p - h < .5 * o) {
                if (l == 0) {
                    u = 1;
                    break
                }
                break
            }
            var d = u, v = u, m = 1, g = p;
            r.GetTransform(q.s_xfA, m), i.GetTransform(q.s_xfB, m);
            var y = q.s_fcn.Evaluate(q.s_xfA, q.s_xfB);
            if (y >= h) {
                u = 1;
                break
            }
            var b = 0;
            for (; ;) {
                var w = 0;
                b & 1 ? w = v + (h - g) * (m - v) / (y - g) : w = .5 * (v + m), r.GetTransform(q.s_xfA, w), i.GetTransform(q.s_xfB, w);
                var E = q.s_fcn.Evaluate(q.s_xfA, q.s_xfB);
                if (c.Abs(E - h) < .025 * o) {
                    d = w;
                    break
                }
                E > h ? (v = w, g = E) : (m = w, y = E), ++b, ++q.b2_toiRootIters;
                if (b == 50)break
            }
            q.b2_toiMaxRootIters = c.Max(q.b2_toiMaxRootIters, b);
            if (d < (1 + 100 * Box2D.MIN_VALUE) * u)break;
            u = d, l++, ++q.b2_toiIters;
            if (l == f)break
        }
        return q.b2_toiMaxIters = c.Max(q.b2_toiMaxIters, l), u
    },Box2D.postDefs.push(function () {
        Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0, Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0, Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0, Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0, Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0, Box2D.Collision.b2TimeOfImpact.s_cache = new F, Box2D.Collision.b2TimeOfImpact.s_distanceInput = new x, Box2D.Collision.b2TimeOfImpact.s_xfA = new p, Box2D.Collision.b2TimeOfImpact.s_xfB = new p, Box2D.Collision.b2TimeOfImpact.s_fcn = new B, Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new T
    }),R.b2TOIInput = function () {
        this.proxyA = new N, this.proxyB = new N, this.sweepA = new h, this.sweepB = new h
    },U.b2WorldManifold = function () {
        this.m_normal = new d
    },U.prototype.b2WorldManifold = function () {
        this.m_points = new Vector(a.b2_maxManifoldPoints);
        for (var e = 0; e < a.b2_maxManifoldPoints; e++)this.m_points[e] = new d
    },U.prototype.Initialize = function (e, t, n, r, i) {
        n === undefined && (n = 0), i === undefined && (i = 0);
        if (e.m_pointCount == 0)return;
        var s = 0, o, u, a = 0, f = 0, l = 0, c = 0, h = 0, p = 0;
        switch (e.m_type) {
            case O.e_circles:
                u = t.R, o = e.m_localPoint;
                var d = t.position.x + u.col1.x * o.x + u.col2.x * o.y, v = t.position.y + u.col1.y * o.x + u.col2.y * o.y;
                u = r.R, o = e.m_points[0].m_localPoint;
                var m = r.position.x + u.col1.x * o.x + u.col2.x * o.y, g = r.position.y + u.col1.y * o.x + u.col2.y * o.y, y = m - d, b = g - v, w = y * y + b * b;
                if (w > Box2D.MIN_VALUE * Box2D.MIN_VALUE) {
                    var E = Math.sqrt(w);
                    this.m_normal.x = y / E, this.m_normal.y = b / E
                } else this.m_normal.x = 1, this.m_normal.y = 0;
                var S = d + n * this.m_normal.x, x = v + n * this.m_normal.y, T = m - i * this.m_normal.x, N = g - i * this.m_normal.y;
                this.m_points[0].x = .5 * (S + T), this.m_points[0].y = .5 * (x + N);
                break;
            case O.e_faceA:
                u = t.R, o = e.m_localPlaneNormal, a = u.col1.x * o.x + u.col2.x * o.y, f = u.col1.y * o.x + u.col2.y * o.y, u = t.R, o = e.m_localPoint, l = t.position.x + u.col1.x * o.x + u.col2.x * o.y, c = t.position.y + u.col1.y * o.x + u.col2.y * o.y, this.m_normal.x = a, this.m_normal.y = f;
                for (s = 0; s < e.m_pointCount; s++)u = r.R, o = e.m_points[s].m_localPoint, h = r.position.x + u.col1.x * o.x + u.col2.x * o.y, p = r.position.y + u.col1.y * o.x + u.col2.y * o.y, this.m_points[s].x = h + .5 * (n - (h - l) * a - (p - c) * f - i) * a, this.m_points[s].y = p + .5 * (n - (h - l) * a - (p - c) * f - i) * f;
                break;
            case O.e_faceB:
                u = r.R, o = e.m_localPlaneNormal, a = u.col1.x * o.x + u.col2.x * o.y, f = u.col1.y * o.x + u.col2.y * o.y, u = r.R, o = e.m_localPoint, l = r.position.x + u.col1.x * o.x + u.col2.x * o.y, c = r.position.y + u.col1.y * o.x + u.col2.y * o.y, this.m_normal.x = -a, this.m_normal.y = -f;
                for (s = 0; s < e.m_pointCount; s++)u = t.R, o = e.m_points[s].m_localPoint, h = t.position.x + u.col1.x * o.x + u.col2.x * o.y, p = t.position.y + u.col1.y * o.x + u.col2.y * o.y, this.m_points[s].x = h + .5 * (i - (h - l) * a - (p - c) * f - n) * a, this.m_points[s].y = p + .5 * (i - (h - l) * a - (p - c) * f - n) * f
        }
    },z.ClipVertex = function () {
        this.v = new d, this.id = new w
    },z.prototype.Set = function (e) {
        this.v.SetV(e.v), this.id.Set(e.id)
    },W.Features = function () {
    },Object.defineProperty(W.prototype, "referenceEdge", {enumerable: !1, configurable: !0, get: function () {
        return this._referenceEdge
    }}),Object.defineProperty(W.prototype, "referenceEdge", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._referenceEdge = e, this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
    }}),Object.defineProperty(W.prototype, "incidentEdge", {enumerable: !1, configurable: !0, get: function () {
        return this._incidentEdge
    }}),Object.defineProperty(W.prototype, "incidentEdge", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._incidentEdge = e, this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
    }}),Object.defineProperty(W.prototype, "incidentVertex", {enumerable: !1, configurable: !0, get: function () {
        return this._incidentVertex
    }}),Object.defineProperty(W.prototype, "incidentVertex", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._incidentVertex = e, this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680
    }}),Object.defineProperty(W.prototype, "flip", {enumerable: !1, configurable: !0, get: function () {
        return this._flip
    }}),Object.defineProperty(W.prototype, "flip", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._flip = e, this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
    }})
}(), function () {
    var e = Box2D.Common.b2Color, t = Box2D.Common.b2internal, n = Box2D.Common.b2Settings, r = Box2D.Collision.Shapes.b2CircleShape, i = Box2D.Collision.Shapes.b2EdgeChainDef, s = Box2D.Collision.Shapes.b2EdgeShape, o = Box2D.Collision.Shapes.b2MassData, u = Box2D.Collision.Shapes.b2PolygonShape, a = Box2D.Collision.Shapes.b2Shape, f = Box2D.Common.Math.b2Mat22, l = Box2D.Common.Math.b2Mat33, c = Box2D.Common.Math.b2Math, h = Box2D.Common.Math.b2Sweep, p = Box2D.Common.Math.b2Transform, d = Box2D.Common.Math.b2Vec2, v = Box2D.Common.Math.b2Vec3, m = Box2D.Dynamics.b2Body, g = Box2D.Dynamics.b2BodyDef, y = Box2D.Dynamics.b2ContactFilter, b = Box2D.Dynamics.b2ContactImpulse, w = Box2D.Dynamics.b2ContactListener, E = Box2D.Dynamics.b2ContactManager, S = Box2D.Dynamics.b2DebugDraw, x = Box2D.Dynamics.b2DestructionListener, T = Box2D.Dynamics.b2FilterData, N = Box2D.Dynamics.b2Fixture, C = Box2D.Dynamics.b2FixtureDef, k = Box2D.Dynamics.b2Island, L = Box2D.Dynamics.b2TimeStep, A = Box2D.Dynamics.b2World, O = Box2D.Collision.b2AABB, M = Box2D.Collision.b2Bound, _ = Box2D.Collision.b2BoundValues, D = Box2D.Collision.b2Collision, P = Box2D.Collision.b2ContactID, H = Box2D.Collision.b2ContactPoint, B = Box2D.Collision.b2Distance, j = Box2D.Collision.b2DistanceInput, F = Box2D.Collision.b2DistanceOutput, I = Box2D.Collision.b2DistanceProxy, q = Box2D.Collision.b2DynamicTree, R = Box2D.Collision.b2DynamicTreeBroadPhase, U = Box2D.Collision.b2DynamicTreeNode, z = Box2D.Collision.b2DynamicTreePair, W = Box2D.Collision.b2Manifold, X = Box2D.Collision.b2ManifoldPoint, V = Box2D.Collision.b2Point, $ = Box2D.Collision.b2RayCastInput, J = Box2D.Collision.b2RayCastOutput, K = Box2D.Collision.b2Segment, Q = Box2D.Collision.b2SeparationFunction, G = Box2D.Collision.b2Simplex, Y = Box2D.Collision.b2SimplexCache, Z = Box2D.Collision.b2SimplexVertex, et = Box2D.Collision.b2TimeOfImpact, tt = Box2D.Collision.b2TOIInput, nt = Box2D.Collision.b2WorldManifold, rt = Box2D.Collision.ClipVertex, it = Box2D.Collision.Features, st = Box2D.Collision.IBroadPhase;
    Box2D.inherit(r, Box2D.Collision.Shapes.b2Shape), r.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype, r.b2CircleShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments), this.m_p = new d
    }, r.prototype.Copy = function () {
        var e = new r;
        return e.Set(this), e
    }, r.prototype.Set = function (e) {
        this.__super.Set.call(this, e);
        if (Box2D.is(e, r)) {
            var t = e instanceof r ? e : null;
            this.m_p.SetV(t.m_p)
        }
    }, r.prototype.TestPoint = function (e, t) {
        var n = e.R, r = e.position.x + (n.col1.x * this.m_p.x + n.col2.x * this.m_p.y), i = e.position.y + (n.col1.y * this.m_p.x + n.col2.y * this.m_p.y);
        return r = t.x - r, i = t.y - i, r * r + i * i <= this.m_radius * this.m_radius
    }, r.prototype.RayCast = function (e, t, n) {
        var r = n.R, i = n.position.x + (r.col1.x * this.m_p.x + r.col2.x * this.m_p.y), s = n.position.y + (r.col1.y * this.m_p.x + r.col2.y * this.m_p.y), o = t.p1.x - i, u = t.p1.y - s, a = o * o + u * u - this.m_radius * this.m_radius, f = t.p2.x - t.p1.x, l = t.p2.y - t.p1.y, c = o * f + u * l, h = f * f + l * l, p = c * c - h * a;
        if (p < 0 || h < Box2D.MIN_VALUE)return!1;
        var d = -(c + Math.sqrt(p));
        return 0 > d || d > t.maxFraction * h ? !1 : (d /= h, e.fraction = d, e.normal.x = o + d * f, e.normal.y = u + d * l, e.normal.Normalize(), !0)
    }, r.prototype.ComputeAABB = function (e, t) {
        var n = t.R, r = t.position.x + (n.col1.x * this.m_p.x + n.col2.x * this.m_p.y), i = t.position.y + (n.col1.y * this.m_p.x + n.col2.y * this.m_p.y);
        e.lowerBound.Set(r - this.m_radius, i - this.m_radius), e.upperBound.Set(r + this.m_radius, i + this.m_radius)
    }, r.prototype.ComputeMass = function (e, t) {
        t === undefined && (t = 0), e.mass = t * n.b2_pi * this.m_radius * this.m_radius, e.center.SetV(this.m_p), e.I = e.mass * (.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
    }, r.prototype.ComputeSubmergedArea = function (e, t, n, r) {
        t === undefined && (t = 0);
        var i = c.MulX(n, this.m_p), s = -(c.Dot(e, i) - t);
        if (s < -this.m_radius + Box2D.MIN_VALUE)return 0;
        if (s > this.m_radius)return r.SetV(i), Math.PI * this.m_radius * this.m_radius;
        var o = this.m_radius * this.m_radius, u = s * s, a = o * (Math.asin(s / this.m_radius) + Math.PI / 2) + s * Math.sqrt(o - u), f = -2 / 3 * Math.pow(o - u, 1.5) / a;
        return r.x = i.x + e.x * f, r.y = i.y + e.y * f, a
    }, r.prototype.GetLocalPosition = function () {
        return this.m_p
    }, r.prototype.SetLocalPosition = function (e) {
        this.m_p.SetV(e)
    }, r.prototype.GetRadius = function () {
        return this.m_radius
    }, r.prototype.SetRadius = function (e) {
        e === undefined && (e = 0), this.m_radius = e
    }, r.prototype.b2CircleShape = function (e) {
        e === undefined && (e = 0), this.__super.b2Shape.call(this), this.m_type = a.e_circleShape, this.m_radius = e
    }, i.b2EdgeChainDef = function () {
    }, i.prototype.b2EdgeChainDef = function () {
        this.vertexCount = 0, this.isALoop = !0, this.vertices = []
    }, Box2D.inherit(s, Box2D.Collision.Shapes.b2Shape), s.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype, s.b2EdgeShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments), this.s_supportVec = new d, this.m_v1 = new d, this.m_v2 = new d, this.m_coreV1 = new d, this.m_coreV2 = new d, this.m_normal = new d, this.m_direction = new d, this.m_cornerDir1 = new d, this.m_cornerDir2 = new d
    }, s.prototype.TestPoint = function (e, t) {
        return!1
    }, s.prototype.RayCast = function (e, t, n) {
        var r, i = t.p2.x - t.p1.x, s = t.p2.y - t.p1.y;
        r = n.R;
        var o = n.position.x + (r.col1.x * this.m_v1.x + r.col2.x * this.m_v1.y), u = n.position.y + (r.col1.y * this.m_v1.x + r.col2.y * this.m_v1.y), a = n.position.y + (r.col1.y * this.m_v2.x + r.col2.y * this.m_v2.y) - u, f = -(n.position.x + (r.col1.x * this.m_v2.x + r.col2.x * this.m_v2.y) - o), l = 100 * Box2D.MIN_VALUE, c = -(i * a + s * f);
        if (c > l) {
            var h = t.p1.x - o, p = t.p1.y - u, d = h * a + p * f;
            if (0 <= d && d <= t.maxFraction * c) {
                var v = -i * p + s * h;
                if (-l * c <= v && v <= c * (1 + l)) {
                    d /= c, e.fraction = d;
                    var m = Math.sqrt(a * a + f * f);
                    return e.normal.x = a / m, e.normal.y = f / m, !0
                }
            }
        }
        return!1
    }, s.prototype.ComputeAABB = function (e, t) {
        var n = t.R, r = t.position.x + (n.col1.x * this.m_v1.x + n.col2.x * this.m_v1.y), i = t.position.y + (n.col1.y * this.m_v1.x + n.col2.y * this.m_v1.y), s = t.position.x + (n.col1.x * this.m_v2.x + n.col2.x * this.m_v2.y), o = t.position.y + (n.col1.y * this.m_v2.x + n.col2.y * this.m_v2.y);
        r < s ? (e.lowerBound.x = r, e.upperBound.x = s) : (e.lowerBound.x = s, e.upperBound.x = r), i < o ? (e.lowerBound.y = i, e.upperBound.y = o) : (e.lowerBound.y = o, e.upperBound.y = i)
    }, s.prototype.ComputeMass = function (e, t) {
        t === undefined && (t = 0), e.mass = 0, e.center.SetV(this.m_v1), e.I = 0
    }, s.prototype.ComputeSubmergedArea = function (e, t, n, r) {
        t === undefined && (t = 0);
        var i = new d(e.x * t, e.y * t), s = c.MulX(n, this.m_v1), o = c.MulX(n, this.m_v2), u = c.Dot(e, s) - t, a = c.Dot(e, o) - t;
        if (u > 0) {
            if (a > 0)return 0;
            s.x = -a / (u - a) * s.x + u / (u - a) * o.x, s.y = -a / (u - a) * s.y + u / (u - a) * o.y
        } else a > 0 && (o.x = -a / (u - a) * s.x + u / (u - a) * o.x, o.y = -a / (u - a) * s.y + u / (u - a) * o.y);
        return r.x = (i.x + s.x + o.x) / 3, r.y = (i.y + s.y + o.y) / 3, .5 * ((s.x - i.x) * (o.y - i.y) - (s.y - i.y) * (o.x - i.x))
    }, s.prototype.GetLength = function () {
        return this.m_length
    }, s.prototype.GetVertex1 = function () {
        return this.m_v1
    }, s.prototype.GetVertex2 = function () {
        return this.m_v2
    }, s.prototype.GetCoreVertex1 = function () {
        return this.m_coreV1
    }, s.prototype.GetCoreVertex2 = function () {
        return this.m_coreV2
    }, s.prototype.GetNormalVector = function () {
        return this.m_normal
    }, s.prototype.GetDirectionVector = function () {
        return this.m_direction
    }, s.prototype.GetCorner1Vector = function () {
        return this.m_cornerDir1
    }, s.prototype.GetCorner2Vector = function () {
        return this.m_cornerDir2
    }, s.prototype.Corner1IsConvex = function () {
        return this.m_cornerConvex1
    }, s.prototype.Corner2IsConvex = function () {
        return this.m_cornerConvex2
    }, s.prototype.GetFirstVertex = function (e) {
        var t = e.R;
        return new d(e.position.x + (t.col1.x * this.m_coreV1.x + t.col2.x * this.m_coreV1.y), e.position.y + (t.col1.y * this.m_coreV1.x + t.col2.y * this.m_coreV1.y))
    }, s.prototype.GetNextEdge = function () {
        return this.m_nextEdge
    }, s.prototype.GetPrevEdge = function () {
        return this.m_prevEdge
    }, s.prototype.Support = function (e, t, n) {
        t === undefined && (t = 0), n === undefined && (n = 0);
        var r = e.R, i = e.position.x + (r.col1.x * this.m_coreV1.x + r.col2.x * this.m_coreV1.y), s = e.position.y + (r.col1.y * this.m_coreV1.x + r.col2.y * this.m_coreV1.y), o = e.position.x + (r.col1.x * this.m_coreV2.x + r.col2.x * this.m_coreV2.y), u = e.position.y + (r.col1.y * this.m_coreV2.x + r.col2.y * this.m_coreV2.y);
        return i * t + s * n > o * t + u * n ? (this.s_supportVec.x = i, this.s_supportVec.y = s) : (this.s_supportVec.x = o, this.s_supportVec.y = u), this.s_supportVec
    }, s.prototype.b2EdgeShape = function (e, t) {
        this.__super.b2Shape.call(this), this.m_type = a.e_edgeShape, this.m_prevEdge = null, this.m_nextEdge = null, this.m_v1 = e, this.m_v2 = t, this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y), this.m_length = this.m_direction.Normalize(), this.m_normal.Set(this.m_direction.y, -this.m_direction.x), this.m_coreV1.Set(-n.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -n.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y), this.m_coreV2.Set(-n.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -n.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y), this.m_cornerDir1 = this.m_normal, this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y)
    }, s.prototype.SetPrevEdge = function (e, t, n, r) {
        this.m_prevEdge = e, this.m_coreV1 = t, this.m_cornerDir1 = n, this.m_cornerConvex1 = r
    }, s.prototype.SetNextEdge = function (e, t, n, r) {
        this.m_nextEdge = e, this.m_coreV2 = t, this.m_cornerDir2 = n, this.m_cornerConvex2 = r
    }, o.b2MassData = function () {
        this.mass = 0, this.center = new d(0, 0), this.I = 0
    }, Box2D.inherit(u, Box2D.Collision.Shapes.b2Shape), u.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype, u.b2PolygonShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
    }, u.prototype.Copy = function () {
        var e = new u;
        return e.Set(this), e
    }, u.prototype.Set = function (e) {
        this.__super.Set.call(this, e);
        if (Box2D.is(e, u)) {
            var t = e instanceof u ? e : null;
            this.m_centroid.SetV(t.m_centroid), this.m_vertexCount = t.m_vertexCount, this.Reserve(this.m_vertexCount);
            for (var n = 0; n < this.m_vertexCount; n++)this.m_vertices[n].SetV(t.m_vertices[n]), this.m_normals[n].SetV(t.m_normals[n])
        }
    }, u.prototype.SetAsArray = function (e, t) {
        t === undefined && (t = 0);
        var n = new Vector, r = 0, i;
        for (r = 0; r < e.length; ++r)i = e[r], n.push(i);
        this.SetAsVector(n, t)
    }, u.AsArray = function (e, t) {
        t === undefined && (t = 0);
        var n = new u;
        return n.SetAsArray(e, t), n
    }, u.prototype.SetAsVector = function (e, t) {
        t === undefined && (t = 0), t == 0 && (t = e.length), n.b2Assert(2 <= t), this.m_vertexCount = t, this.Reserve(t);
        var r = 0;
        for (r = 0; r < this.m_vertexCount; r++)this.m_vertices[r].SetV(e[r]);
        for (r = 0; r < this.m_vertexCount; ++r) {
            var i = parseInt(r), s = parseInt(r + 1 < this.m_vertexCount ? r + 1 : 0), o = c.SubtractVV(this.m_vertices[s], this.m_vertices[i]);
            n.b2Assert(o.LengthSquared() > Box2D.MIN_VALUE), this.m_normals[r].SetV(c.CrossVF(o, 1)), this.m_normals[r].Normalize()
        }
        this.m_centroid = u.ComputeCentroid(this.m_vertices, this.m_vertexCount)
    }, u.AsVector = function (e, t) {
        t === undefined && (t = 0);
        var n = new u;
        return n.SetAsVector(e, t), n
    }, u.prototype.SetAsBox = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.m_vertexCount = 4, this.Reserve(4), this.m_vertices[0].Set(-e, -t), this.m_vertices[1].Set(e, -t), this.m_vertices[2].Set(e, t), this.m_vertices[3].Set(-e, t), this.m_normals[0].Set(0, -1), this.m_normals[1].Set(1, 0), this.m_normals[2].Set(0, 1), this.m_normals[3].Set(-1, 0), this.m_centroid.SetZero()
    }, u.AsBox = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0);
        var n = new u;
        return n.SetAsBox(e, t), n
    }, u.prototype.SetAsOrientedBox = function (e, t, n, r) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = null), r === undefined && (r = 0), this.m_vertexCount = 4, this.Reserve(4), this.m_vertices[0].Set(-e, -t), this.m_vertices[1].Set(e, -t), this.m_vertices[2].Set(e, t), this.m_vertices[3].Set(-e, t), this.m_normals[0].Set(0, -1), this.m_normals[1].Set(1, 0), this.m_normals[2].Set(0, 1), this.m_normals[3].Set(-1, 0), this.m_centroid = n;
        var i = new p;
        i.position = n, i.R.Set(r);
        for (var s = 0; s < this.m_vertexCount; ++s)this.m_vertices[s] = c.MulX(i, this.m_vertices[s]), this.m_normals[s] = c.MulMV(i.R, this.m_normals[s])
    }, u.AsOrientedBox = function (e, t, n, r) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = null), r === undefined && (r = 0);
        var i = new u;
        return i.SetAsOrientedBox(e, t, n, r), i
    }, u.prototype.SetAsEdge = function (e, t) {
        this.m_vertexCount = 2, this.Reserve(2), this.m_vertices[0].SetV(e), this.m_vertices[1].SetV(t), this.m_centroid.x = .5 * (e.x + t.x), this.m_centroid.y = .5 * (e.y + t.y), this.m_normals[0] = c.CrossVF(c.SubtractVV(t, e), 1), this.m_normals[0].Normalize(), this.m_normals[1].x = -this.m_normals[0].x, this.m_normals[1].y = -this.m_normals[0].y
    }, u.AsEdge = function (e, t) {
        var n = new u;
        return n.SetAsEdge(e, t), n
    }, u.prototype.TestPoint = function (e, t) {
        var n, r = e.R, i = t.x - e.position.x, s = t.y - e.position.y, o = i * r.col1.x + s * r.col1.y, u = i * r.col2.x + s * r.col2.y;
        for (var a = 0; a < this.m_vertexCount; ++a) {
            n = this.m_vertices[a], i = o - n.x, s = u - n.y, n = this.m_normals[a];
            var f = n.x * i + n.y * s;
            if (f > 0)return!1
        }
        return!0
    }, u.prototype.RayCast = function (e, t, n) {
        var r = 0, i = t.maxFraction, s = 0, o = 0, u, a;
        s = t.p1.x - n.position.x, o = t.p1.y - n.position.y, u = n.R;
        var f = s * u.col1.x + o * u.col1.y, l = s * u.col2.x + o * u.col2.y;
        s = t.p2.x - n.position.x, o = t.p2.y - n.position.y, u = n.R;
        var c = s * u.col1.x + o * u.col1.y, h = s * u.col2.x + o * u.col2.y, p = c - f, d = h - l, v = parseInt(-1);
        for (var m = 0; m < this.m_vertexCount; ++m) {
            a = this.m_vertices[m], s = a.x - f, o = a.y - l, a = this.m_normals[m];
            var g = a.x * s + a.y * o, y = a.x * p + a.y * d;
            if (y == 0) {
                if (g < 0)return!1
            } else y < 0 && g < r * y ? (r = g / y, v = m) : y > 0 && g < i * y && (i = g / y);
            if (i < r - Box2D.MIN_VALUE)return!1
        }
        return v < 0 ? !1 : (e.fraction = r, u = n.R, a = this.m_normals[v], e.normal.x = u.col1.x * a.x + u.col2.x * a.y, e.normal.y = u.col1.y * a.x + u.col2.y * a.y, !0)
    }, u.prototype.ComputeAABB = function (e, t) {
        var n = t.R, r = this.m_vertices[0], i = t.position.x + (n.col1.x * r.x + n.col2.x * r.y), s = t.position.y + (n.col1.y * r.x + n.col2.y * r.y), o = i, u = s;
        for (var a = 1; a < this.m_vertexCount; ++a) {
            r = this.m_vertices[a];
            var f = t.position.x + (n.col1.x * r.x + n.col2.x * r.y), l = t.position.y + (n.col1.y * r.x + n.col2.y * r.y);
            i = i < f ? i : f, s = s < l ? s : l, o = o > f ? o : f, u = u > l ? u : l
        }
        e.lowerBound.x = i - this.m_radius, e.lowerBound.y = s - this.m_radius, e.upperBound.x = o + this.m_radius, e.upperBound.y = u + this.m_radius
    }, u.prototype.ComputeMass = function (e, t) {
        t === undefined && (t = 0);
        if (this.m_vertexCount == 2) {
            e.center.x = .5 * (this.m_vertices[0].x + this.m_vertices[1].x), e.center.y = .5 * (this.m_vertices[0].y + this.m_vertices[1].y), e.mass = 0, e.I = 0;
            return
        }
        var n = 0, r = 0, i = 0, s = 0, o = 0, u = 0, a = 1 / 3;
        for (var f = 0; f < this.m_vertexCount; ++f) {
            var l = this.m_vertices[f], c = f + 1 < this.m_vertexCount ? this.m_vertices[parseInt(f + 1)] : this.m_vertices[0], h = l.x - o, p = l.y - u, d = c.x - o, v = c.y - u, m = h * v - p * d, g = .5 * m;
            i += g, n += g * a * (o + l.x + c.x), r += g * a * (u + l.y + c.y);
            var y = o, b = u, w = h, E = p, S = d, x = v, T = a * (.25 * (w * w + S * w + S * S) + (y * w + y * S)) + .5 * y * y, N = a * (.25 * (E * E + x * E + x * x) + (b * E + b * x)) + .5 * b * b;
            s += m * (T + N)
        }
        e.mass = t * i, n *= 1 / i, r *= 1 / i, e.center.Set(n, r), e.I = t * s
    }, u.prototype.ComputeSubmergedArea = function (e, t, n, r) {
        t === undefined && (t = 0);
        var i = c.MulTMV(n.R, e), s = t - c.Dot(e, n.position), u = new Vector_a2j_Number(0), a = 0, f = parseInt(-1), l = parseInt(-1), h = !1, p = 0;
        for (p = 0; p < this.m_vertexCount; ++p) {
            u[p] = c.Dot(i, this.m_vertices[p]) - s;
            var v = u[p] < -Box2D.MIN_VALUE;
            p > 0 && (v ? h || (f = p - 1, a++) : h && (l = p - 1, a++)), h = v
        }
        switch (a) {
            case 0:
                if (h) {
                    var m = new o;
                    return this.ComputeMass(m, 1), r.SetV(c.MulX(n, m.center)), m.mass
                }
                return 0;
            case 1:
                f == -1 ? f = this.m_vertexCount - 1 : l = this.m_vertexCount - 1
        }
        var g = parseInt((f + 1) % this.m_vertexCount), y = parseInt((l + 1) % this.m_vertexCount), b = (0 - u[f]) / (u[g] - u[f]), w = (0 - u[l]) / (u[y] - u[l]), E = new d(this.m_vertices[f].x * (1 - b) + this.m_vertices[g].x * b, this.m_vertices[f].y * (1 - b) + this.m_vertices[g].y * b), S = new d(this.m_vertices[l].x * (1 - w) + this.m_vertices[y].x * w, this.m_vertices[l].y * (1 - w) + this.m_vertices[y].y * w), x = 0, T = new d, N = this.m_vertices[g], C;
        p = g;
        while (p != y) {
            p = (p + 1) % this.m_vertexCount, p == y ? C = S : C = this.m_vertices[p];
            var k = .5 * ((N.x - E.x) * (C.y - E.y) - (N.y - E.y) * (C.x - E.x));
            x += k, T.x += k * (E.x + N.x + C.x) / 3, T.y += k * (E.y + N.y + C.y) / 3, N = C
        }
        return T.Multiply(1 / x), r.SetV(c.MulX(n, T)), x
    }, u.prototype.GetVertexCount = function () {
        return this.m_vertexCount
    }, u.prototype.GetVertices = function () {
        return this.m_vertices
    }, u.prototype.GetNormals = function () {
        return this.m_normals
    }, u.prototype.GetSupport = function (e) {
        var t = 0, n = this.m_vertices[0].x * e.x + this.m_vertices[0].y * e.y;
        for (var r = 1; r < this.m_vertexCount; ++r) {
            var i = this.m_vertices[r].x * e.x + this.m_vertices[r].y * e.y;
            i > n && (t = r, n = i)
        }
        return t
    }, u.prototype.GetSupportVertex = function (e) {
        var t = 0, n = this.m_vertices[0].x * e.x + this.m_vertices[0].y * e.y;
        for (var r = 1; r < this.m_vertexCount; ++r) {
            var i = this.m_vertices[r].x * e.x + this.m_vertices[r].y * e.y;
            i > n && (t = r, n = i)
        }
        return this.m_vertices[t]
    }, u.prototype.Validate = function () {
        return!1
    }, u.prototype.b2PolygonShape = function () {
        this.__super.b2Shape.call(this), this.m_type = a.e_polygonShape, this.m_centroid = new d, this.m_vertices = new Vector, this.m_normals = new Vector
    }, u.prototype.Reserve = function (e) {
        e === undefined && (e = 0);
        for (var t = parseInt(this.m_vertices.length); t < e; t++)this.m_vertices[t] = new d, this.m_normals[t] = new d
    }, u.ComputeCentroid = function (e, t) {
        t === undefined && (t = 0);
        var n = new d, r = 0, i = 0, s = 0, o = 1 / 3;
        for (var u = 0; u < t; ++u) {
            var a = e[u], f = u + 1 < t ? e[parseInt(u + 1)] : e[0], l = a.x - i, c = a.y - s, h = f.x - i, p = f.y - s, v = l * p - c * h, m = .5 * v;
            r += m, n.x += m * o * (i + a.x + f.x), n.y += m * o * (s + a.y + f.y)
        }
        return n.x *= 1 / r, n.y *= 1 / r, n
    }, u.ComputeOBB = function (e, t, n) {
        n === undefined && (n = 0);
        var r = 0, i = new Vector(n + 1);
        for (r = 0; r < n; ++r)i[r] = t[r];
        i[n] = i[0];
        var s = Number.MAX_VALUE;
        for (r = 1; r <= n; ++r) {
            var o = i[parseInt(r - 1)], u = i[r].x - o.x, a = i[r].y - o.y, f = Math.sqrt(u * u + a * a);
            u /= f, a /= f;
            var l = -a, c = u, h = Number.MAX_VALUE, p = Number.MAX_VALUE, d = -Number.MAX_VALUE, v = -Number.MAX_VALUE;
            for (var m = 0; m < n; ++m) {
                var g = i[m].x - o.x, y = i[m].y - o.y, b = u * g + a * y, w = l * g + c * y;
                b < h && (h = b), w < p && (p = w), b > d && (d = b), w > v && (v = w)
            }
            var E = (d - h) * (v - p);
            if (E < .95 * s) {
                s = E, e.R.col1.x = u, e.R.col1.y = a, e.R.col2.x = l, e.R.col2.y = c;
                var S = .5 * (h + d), x = .5 * (p + v), T = e.R;
                e.center.x = o.x + (T.col1.x * S + T.col2.x * x), e.center.y = o.y + (T.col1.y * S + T.col2.y * x), e.extents.x = .5 * (d - h), e.extents.y = .5 * (v - p)
            }
        }
    }, Box2D.postDefs.push(function () {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new f
    }), a.b2Shape = function () {
    }, a.prototype.Copy = function () {
        return null
    }, a.prototype.Set = function (e) {
        this.m_radius = e.m_radius
    }, a.prototype.GetType = function () {
        return this.m_type
    }, a.prototype.TestPoint = function (e, t) {
        return!1
    }, a.prototype.RayCast = function (e, t, n) {
        return!1
    }, a.prototype.ComputeAABB = function (e, t) {
    }, a.prototype.ComputeMass = function (e, t) {
        t === undefined && (t = 0)
    }, a.prototype.ComputeSubmergedArea = function (e, t, n, r) {
        return t === undefined && (t = 0), 0
    }, a.TestOverlap = function (e, t, n, r) {
        var i = new j;
        i.proxyA = new I, i.proxyA.Set(e), i.proxyB = new I, i.proxyB.Set(n), i.transformA = t, i.transformB = r, i.useRadii = !0;
        var s = new Y;
        s.count = 0;
        var o = new F;
        return B.Distance(o, s, i), o.distance < 10 * Box2D.MIN_VALUE
    }, a.prototype.b2Shape = function () {
        this.m_type = a.e_unknownShape, this.m_radius = n.b2_linearSlop
    }, Box2D.postDefs.push(function () {
        Box2D.Collision.Shapes.b2Shape.e_unknownShape = parseInt(-1), Box2D.Collision.Shapes.b2Shape.e_circleShape = 0, Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1, Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2, Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3, Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1, Box2D.Collision.Shapes.b2Shape.e_missCollide = 0, Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = parseInt(-1)
    })
}(), function () {
    var e = Box2D.Common.b2Color, t = Box2D.Common.b2internal, n = Box2D.Common.b2Settings, r = Box2D.Common.Math.b2Mat22, i = Box2D.Common.Math.b2Mat33, s = Box2D.Common.Math.b2Math, o = Box2D.Common.Math.b2Sweep, u = Box2D.Common.Math.b2Transform, a = Box2D.Common.Math.b2Vec2, f = Box2D.Common.Math.b2Vec3;
    e.b2Color = function () {
        this._r = 0, this._g = 0, this._b = 0
    }, e.prototype.b2Color = function (e, t, n) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0), this._r = Box2D.parseUInt(255 * s.Clamp(e, 0, 1)), this._g = Box2D.parseUInt(255 * s.Clamp(t, 0, 1)), this._b = Box2D.parseUInt(255 * s.Clamp(n, 0, 1))
    }, e.prototype.Set = function (e, t, n) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0), this._r = Box2D.parseUInt(255 * s.Clamp(e, 0, 1)), this._g = Box2D.parseUInt(255 * s.Clamp(t, 0, 1)), this._b = Box2D.parseUInt(255 * s.Clamp(n, 0, 1))
    }, Object.defineProperty(e.prototype, "r", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._r = Box2D.parseUInt(255 * s.Clamp(e, 0, 1))
    }}), Object.defineProperty(e.prototype, "g", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._g = Box2D.parseUInt(255 * s.Clamp(e, 0
            , 1))
    }}), Object.defineProperty(e.prototype, "b", {enumerable: !1, configurable: !0, set: function (e) {
        e === undefined && (e = 0), this._b = Box2D.parseUInt(255 * s.Clamp(e, 0, 1))
    }}), Object.defineProperty(e.prototype, "color", {enumerable: !1, configurable: !0, get: function () {
        return this._r << 16 | this._g << 8 | this._b
    }}), n.b2Settings = function () {
    }, n.b2MixFriction = function (e, t) {
        return e === undefined && (e = 0), t === undefined && (t = 0), Math.sqrt(e * t)
    }, n.b2MixRestitution = function (e, t) {
        return e === undefined && (e = 0), t === undefined && (t = 0), e > t ? e : t
    }, n.b2Assert = function (e) {
        if (!e)throw"Assertion Failed"
    }, Box2D.postDefs.push(function () {
        Box2D.Common.b2Settings.VERSION = "2.1alpha", Box2D.Common.b2Settings.USHRT_MAX = 65535, Box2D.Common.b2Settings.b2_pi = Math.PI, Box2D.Common.b2Settings.b2_maxManifoldPoints = 2, Box2D.Common.b2Settings.b2_aabbExtension = .1, Box2D.Common.b2Settings.b2_aabbMultiplier = 2, Box2D.Common.b2Settings.b2_polygonRadius = 2 * n.b2_linearSlop, Box2D.Common.b2Settings.b2_linearSlop = .005, Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * n.b2_pi, Box2D.Common.b2Settings.b2_toiSlop = 8 * n.b2_linearSlop, Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32, Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32, Box2D.Common.b2Settings.b2_velocityThreshold = 1, Box2D.Common.b2Settings.b2_maxLinearCorrection = .2, Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * n.b2_pi, Box2D.Common.b2Settings.b2_maxTranslation = 2, Box2D.Common.b2Settings.b2_maxTranslationSquared = n.b2_maxTranslation * n.b2_maxTranslation, Box2D.Common.b2Settings.b2_maxRotation = .5 * n.b2_pi, Box2D.Common.b2Settings.b2_maxRotationSquared = n.b2_maxRotation * n.b2_maxRotation, Box2D.Common.b2Settings.b2_contactBaumgarte = .2, Box2D.Common.b2Settings.b2_timeToSleep = .5, Box2D.Common.b2Settings.b2_linearSleepTolerance = .01, Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * n.b2_pi
    })
}(), function () {
    var e = Box2D.Collision.b2AABB, t = Box2D.Common.b2Color, n = Box2D.Common.b2internal, r = Box2D.Common.b2Settings, i = Box2D.Common.Math.b2Mat22, s = Box2D.Common.Math.b2Mat33, o = Box2D.Common.Math.b2Math, u = Box2D.Common.Math.b2Sweep, a = Box2D.Common.Math.b2Transform, f = Box2D.Common.Math.b2Vec2, l = Box2D.Common.Math.b2Vec3;
    i.b2Mat22 = function () {
        this.col1 = new f, this.col2 = new f
    }, i.prototype.b2Mat22 = function () {
        this.SetIdentity()
    }, i.FromAngle = function (e) {
        e === undefined && (e = 0);
        var t = new i;
        return t.Set(e), t
    }, i.FromVV = function (e, t) {
        var n = new i;
        return n.SetVV(e, t), n
    }, i.prototype.Set = function (e) {
        e === undefined && (e = 0);
        var t = Math.cos(e), n = Math.sin(e);
        this.col1.x = t, this.col2.x = -n, this.col1.y = n, this.col2.y = t
    }, i.prototype.SetVV = function (e, t) {
        this.col1.SetV(e), this.col2.SetV(t)
    }, i.prototype.Copy = function () {
        var e = new i;
        return e.SetM(this), e
    }, i.prototype.SetM = function (e) {
        this.col1.SetV(e.col1), this.col2.SetV(e.col2)
    }, i.prototype.AddM = function (e) {
        this.col1.x += e.col1.x, this.col1.y += e.col1.y, this.col2.x += e.col2.x, this.col2.y += e.col2.y
    }, i.prototype.SetIdentity = function () {
        this.col1.x = 1, this.col2.x = 0, this.col1.y = 0, this.col2.y = 1
    }, i.prototype.SetZero = function () {
        this.col1.x = 0, this.col2.x = 0, this.col1.y = 0, this.col2.y = 0
    }, i.prototype.GetAngle = function () {
        return Math.atan2(this.col1.y, this.col1.x)
    }, i.prototype.GetInverse = function (e) {
        var t = this.col1.x, n = this.col2.x, r = this.col1.y, i = this.col2.y, s = t * i - n * r;
        return s != 0 && (s = 1 / s), e.col1.x = s * i, e.col2.x = -s * n, e.col1.y = -s * r, e.col2.y = s * t, e
    }, i.prototype.Solve = function (e, t, n) {
        t === undefined && (t = 0), n === undefined && (n = 0);
        var r = this.col1.x, i = this.col2.x, s = this.col1.y, o = this.col2.y, u = r * o - i * s;
        return u != 0 && (u = 1 / u), e.x = u * (o * t - i * n), e.y = u * (r * n - s * t), e
    }, i.prototype.Abs = function () {
        this.col1.Abs(), this.col2.Abs()
    }, s.b2Mat33 = function () {
        this.col1 = new l, this.col2 = new l, this.col3 = new l
    }, s.prototype.b2Mat33 = function (e, t, n) {
        e === undefined && (e = null), t === undefined && (t = null), n === undefined && (n = null), !e && !t && !n ? (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero()) : (this.col1.SetV(e), this.col2.SetV(t), this.col3.SetV(n))
    }, s.prototype.SetVVV = function (e, t, n) {
        this.col1.SetV(e), this.col2.SetV(t), this.col3.SetV(n)
    }, s.prototype.Copy = function () {
        return new s(this.col1, this.col2, this.col3)
    }, s.prototype.SetM = function (e) {
        this.col1.SetV(e.col1), this.col2.SetV(e.col2), this.col3.SetV(e.col3)
    }, s.prototype.AddM = function (e) {
        this.col1.x += e.col1.x, this.col1.y += e.col1.y, this.col1.z += e.col1.z, this.col2.x += e.col2.x, this.col2.y += e.col2.y, this.col2.z += e.col2.z, this.col3.x += e.col3.x, this.col3.y += e.col3.y, this.col3.z += e.col3.z
    }, s.prototype.SetIdentity = function () {
        this.col1.x = 1, this.col2.x = 0, this.col3.x = 0, this.col1.y = 0, this.col2.y = 1, this.col3.y = 0, this.col1.z = 0, this.col2.z = 0, this.col3.z = 1
    }, s.prototype.SetZero = function () {
        this.col1.x = 0, this.col2.x = 0, this.col3.x = 0, this.col1.y = 0, this.col2.y = 0, this.col3.y = 0, this.col1.z = 0, this.col2.z = 0, this.col3.z = 0
    }, s.prototype.Solve22 = function (e, t, n) {
        t === undefined && (t = 0), n === undefined && (n = 0);
        var r = this.col1.x, i = this.col2.x, s = this.col1.y, o = this.col2.y, u = r * o - i * s;
        return u != 0 && (u = 1 / u), e.x = u * (o * t - i * n), e.y = u * (r * n - s * t), e
    }, s.prototype.Solve33 = function (e, t, n, r) {
        t === undefined && (t = 0), n === undefined && (n = 0), r === undefined && (r = 0);
        var i = this.col1.x, s = this.col1.y, o = this.col1.z, u = this.col2.x, a = this.col2.y, f = this.col2.z, l = this.col3.x, c = this.col3.y, h = this.col3.z, p = i * (a * h - f * c) + s * (f * l - u * h) + o * (u * c - a * l);
        return p != 0 && (p = 1 / p), e.x = p * (t * (a * h - f * c) + n * (f * l - u * h) + r * (u * c - a * l)), e.y = p * (i * (n * h - r * c) + s * (r * l - t * h) + o * (t * c - n * l)), e.z = p * (i * (a * r - f * n) + s * (f * t - u * r) + o * (u * n - a * t)), e
    }, o.b2Math = function () {
    }, o.IsValid = function (e) {
        return e === undefined && (e = 0), isFinite(e)
    }, o.Dot = function (e, t) {
        return e.x * t.x + e.y * t.y
    }, o.CrossVV = function (e, t) {
        return e.x * t.y - e.y * t.x
    }, o.CrossVF = function (e, t) {
        t === undefined && (t = 0);
        var n = new f(t * e.y, -t * e.x);
        return n
    }, o.CrossFV = function (e, t) {
        e === undefined && (e = 0);
        var n = new f(-e * t.y, e * t.x);
        return n
    }, o.MulMV = function (e, t) {
        var n = new f(e.col1.x * t.x + e.col2.x * t.y, e.col1.y * t.x + e.col2.y * t.y);
        return n
    }, o.MulTMV = function (e, t) {
        var n = new f(o.Dot(t, e.col1), o.Dot(t, e.col2));
        return n
    }, o.MulX = function (e, t) {
        var n = o.MulMV(e.R, t);
        return n.x += e.position.x, n.y += e.position.y, n
    }, o.MulXT = function (e, t) {
        var n = o.SubtractVV(t, e.position), r = n.x * e.R.col1.x + n.y * e.R.col1.y;
        return n.y = n.x * e.R.col2.x + n.y * e.R.col2.y, n.x = r, n
    }, o.AddVV = function (e, t) {
        var n = new f(e.x + t.x, e.y + t.y);
        return n
    }, o.SubtractVV = function (e, t) {
        var n = new f(e.x - t.x, e.y - t.y);
        return n
    }, o.Distance = function (e, t) {
        var n = e.x - t.x, r = e.y - t.y;
        return Math.sqrt(n * n + r * r)
    }, o.DistanceSquared = function (e, t) {
        var n = e.x - t.x, r = e.y - t.y;
        return n * n + r * r
    }, o.MulFV = function (e, t) {
        e === undefined && (e = 0);
        var n = new f(e * t.x, e * t.y);
        return n
    }, o.AddMM = function (e, t) {
        var n = i.FromVV(o.AddVV(e.col1, t.col1), o.AddVV(e.col2, t.col2));
        return n
    }, o.MulMM = function (e, t) {
        var n = i.FromVV(o.MulMV(e, t.col1), o.MulMV(e, t.col2));
        return n
    }, o.MulTMM = function (e, t) {
        var n = new f(o.Dot(e.col1, t.col1), o.Dot(e.col2, t.col1)), r = new f(o.Dot(e.col1, t.col2), o.Dot(e.col2, t.col2)), s = i.FromVV(n, r);
        return s
    }, o.Abs = function (e) {
        return e === undefined ? 0 : e > 0 ? e : -e
    }, o.AbsV = function (e) {
        var t = new f(o.Abs(e.x), o.Abs(e.y));
        return t
    }, o.AbsM = function (e) {
        var t = i.FromVV(o.AbsV(e.col1), o.AbsV(e.col2));
        return t
    }, o.Min = function (e, t) {
        return e === undefined && (e = 0), t === undefined && (t = 0), e < t ? e : t
    }, o.MinV = function (e, t) {
        var n = new f(o.Min(e.x, t.x), o.Min(e.y, t.y));
        return n
    }, o.Max = function (e, t) {
        return e === undefined && (e = 0), t === undefined && (t = 0), e > t ? e : t
    }, o.MaxV = function (e, t) {
        var n = new f(o.Max(e.x, t.x), o.Max(e.y, t.y));
        return n
    }, o.Clamp = function (e, t, n) {
        return e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0), e < t ? t : e > n ? n : e
    }, o.ClampV = function (e, t, n) {
        return o.MaxV(t, o.MinV(e, n))
    }, o.Swap = function (e, t) {
        var n = e[0];
        e[0] = t[0], t[0] = n
    }, o.Random = function () {
        return Math.random() * 2 - 1
    }, o.RandomRange = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0);
        var n = Math.random();
        return n = (t - e) * n + e, n
    }, o.NextPowerOfTwo = function (e) {
        return e === undefined && (e = 0), e |= e >> 1 & 2147483647, e |= e >> 2 & 1073741823, e |= e >> 4 & 268435455, e |= e >> 8 & 16777215, e |= e >> 16 & 65535, e + 1
    }, o.IsPowerOfTwo = function (e) {
        e === undefined && (e = 0);
        var t = e > 0 && (e & e - 1) == 0;
        return t
    }, Box2D.postDefs.push(function () {
        Box2D.Common.Math.b2Math.b2Vec2_zero = new f(0, 0), Box2D.Common.Math.b2Math.b2Mat22_identity = i.FromVV(new f(1, 0), new f(0, 1)), Box2D.Common.Math.b2Math.b2Transform_identity = new a(o.b2Vec2_zero, o.b2Mat22_identity)
    }), u.b2Sweep = function () {
        this.localCenter = new f, this.c0 = new f, this.c = new f
    }, u.prototype.Set = function (e) {
        this.localCenter.SetV(e.localCenter), this.c0.SetV(e.c0), this.c.SetV(e.c), this.a0 = e.a0, this.a = e.a, this.t0 = e.t0
    }, u.prototype.Copy = function () {
        var e = new u;
        return e.localCenter.SetV(this.localCenter), e.c0.SetV(this.c0), e.c.SetV(this.c), e.a0 = this.a0, e.a = this.a, e.t0 = this.t0, e
    }, u.prototype.GetTransform = function (e, t) {
        t === undefined && (t = 0), e.position.x = (1 - t) * this.c0.x + t * this.c.x, e.position.y = (1 - t) * this.c0.y + t * this.c.y;
        var n = (1 - t) * this.a0 + t * this.a;
        e.R.Set(n);
        var r = e.R;
        e.position.x -= r.col1.x * this.localCenter.x + r.col2.x * this.localCenter.y, e.position.y -= r.col1.y * this.localCenter.x + r.col2.y * this.localCenter.y
    }, u.prototype.Advance = function (e) {
        e === undefined && (e = 0);
        if (this.t0 < e && 1 - this.t0 > Box2D.MIN_VALUE) {
            var t = (e - this.t0) / (1 - this.t0);
            this.c0.x = (1 - t) * this.c0.x + t * this.c.x, this.c0.y = (1 - t) * this.c0.y + t * this.c.y, this.a0 = (1 - t) * this.a0 + t * this.a, this.t0 = e
        }
    }, a.b2Transform = function () {
        this.position = new f, this.R = new i
    }, a.prototype.b2Transform = function (e, t) {
        e === undefined && (e = null), t === undefined && (t = null), e && (this.position.SetV(e), this.R.SetM(t))
    }, a.prototype.Initialize = function (e, t) {
        this.position.SetV(e), this.R.SetM(t)
    }, a.prototype.SetIdentity = function () {
        this.position.SetZero(), this.R.SetIdentity()
    }, a.prototype.Set = function (e) {
        this.position.SetV(e.position), this.R.SetM(e.R)
    }, a.prototype.GetAngle = function () {
        return Math.atan2(this.R.col1.y, this.R.col1.x)
    }, f.b2Vec2 = function () {
    }, f.prototype.b2Vec2 = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.x = e, this.y = t
    }, f.prototype.SetZero = function () {
        this.x = 0, this.y = 0
    }, f.prototype.Set = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.x = e, this.y = t
    }, f.prototype.SetV = function (e) {
        this.x = e.x, this.y = e.y
    }, f.prototype.GetNegative = function () {
        return new f(-this.x, -this.y)
    }, f.prototype.NegativeSelf = function () {
        this.x = -this.x, this.y = -this.y
    }, f.Make = function (e, t) {
        return e === undefined && (e = 0), t === undefined && (t = 0), new f(e, t)
    }, f.prototype.Copy = function () {
        return new f(this.x, this.y)
    }, f.prototype.Add = function (e) {
        this.x += e.x, this.y += e.y
    }, f.prototype.Subtract = function (e) {
        this.x -= e.x, this.y -= e.y
    }, f.prototype.Multiply = function (e) {
        e === undefined && (e = 0), this.x *= e, this.y *= e
    }, f.prototype.MulM = function (e) {
        var t = this.x;
        this.x = e.col1.x * t + e.col2.x * this.y, this.y = e.col1.y * t + e.col2.y * this.y
    }, f.prototype.MulTM = function (e) {
        var t = o.Dot(this, e.col1);
        this.y = o.Dot(this, e.col2), this.x = t
    }, f.prototype.CrossVF = function (e) {
        e === undefined && (e = 0);
        var t = this.x;
        this.x = e * this.y, this.y = -e * t
    }, f.prototype.CrossFV = function (e) {
        e === undefined && (e = 0);
        var t = this.x;
        this.x = -e * this.y, this.y = e * t
    }, f.prototype.MinV = function (e) {
        this.x = this.x < e.x ? this.x : e.x, this.y = this.y < e.y ? this.y : e.y
    }, f.prototype.MaxV = function (e) {
        this.x = this.x > e.x ? this.x : e.x, this.y = this.y > e.y ? this.y : e.y
    }, f.prototype.Abs = function () {
        this.x < 0 && (this.x = -this.x), this.y < 0 && (this.y = -this.y)
    }, f.prototype.Length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, f.prototype.LengthSquared = function () {
        return this.x * this.x + this.y * this.y
    }, f.prototype.Normalize = function () {
        var e = Math.sqrt(this.x * this.x + this.y * this.y);
        if (e < Box2D.MIN_VALUE)return 0;
        var t = 1 / e;
        return this.x *= t, this.y *= t, e
    }, f.prototype.IsValid = function () {
        return o.IsValid(this.x) && o.IsValid(this.y)
    }, l.b2Vec3 = function () {
    }, l.prototype.b2Vec3 = function (e, t, n) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0), this.x = e, this.y = t, this.z = n
    }, l.prototype.SetZero = function () {
        this.x = this.y = this.z = 0
    }, l.prototype.Set = function (e, t, n) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0), this.x = e, this.y = t, this.z = n
    }, l.prototype.SetV = function (e) {
        this.x = e.x, this.y = e.y, this.z = e.z
    }, l.prototype.GetNegative = function () {
        return new l(-this.x, -this.y, -this.z)
    }, l.prototype.NegativeSelf = function () {
        this.x = -this.x, this.y = -this.y, this.z = -this.z
    }, l.prototype.Copy = function () {
        return new l(this.x, this.y, this.z)
    }, l.prototype.Add = function (e) {
        this.x += e.x, this.y += e.y, this.z += e.z
    },l.prototype.Subtract = function (e) {
        this.x -= e.x, this.y -= e.y, this.z -= e.z
    },l.prototype.Multiply = function (e) {
        e === undefined && (e = 0), this.x *= e, this.y *= e, this.z *= e
    }
}(), function () {
    var e = Box2D.Dynamics.Controllers.b2ControllerEdge, t = Box2D.Common.Math.b2Mat22, n = Box2D.Common.Math.b2Mat33, r = Box2D.Common.Math.b2Math, i = Box2D.Common.Math.b2Sweep, s = Box2D.Common.Math.b2Transform, o = Box2D.Common.Math.b2Vec2, u = Box2D.Common.Math.b2Vec3, a = Box2D.Common.b2Color, f = Box2D.Common.b2internal, l = Box2D.Common.b2Settings, c = Box2D.Collision.b2AABB, h = Box2D.Collision.b2Bound, p = Box2D.Collision.b2BoundValues, d = Box2D.Collision.b2Collision, v = Box2D.Collision.b2ContactID, m = Box2D.Collision.b2ContactPoint, g = Box2D.Collision.b2Distance, y = Box2D.Collision.b2DistanceInput, b = Box2D.Collision.b2DistanceOutput, w = Box2D.Collision.b2DistanceProxy, E = Box2D.Collision.b2DynamicTree, S = Box2D.Collision.b2DynamicTreeBroadPhase, x = Box2D.Collision.b2DynamicTreeNode, T = Box2D.Collision.b2DynamicTreePair, N = Box2D.Collision.b2Manifold, C = Box2D.Collision.b2ManifoldPoint, k = Box2D.Collision.b2Point, L = Box2D.Collision.b2RayCastInput, A = Box2D.Collision.b2RayCastOutput, O = Box2D.Collision.b2Segment, M = Box2D.Collision.b2SeparationFunction, _ = Box2D.Collision.b2Simplex, D = Box2D.Collision.b2SimplexCache, P = Box2D.Collision.b2SimplexVertex, H = Box2D.Collision.b2TimeOfImpact, B = Box2D.Collision.b2TOIInput, j = Box2D.Collision.b2WorldManifold, F = Box2D.Collision.ClipVertex, I = Box2D.Collision.Features, q = Box2D.Collision.IBroadPhase, R = Box2D.Collision.Shapes.b2CircleShape, U = Box2D.Collision.Shapes.b2EdgeChainDef, z = Box2D.Collision.Shapes.b2EdgeShape, W = Box2D.Collision.Shapes.b2MassData, X = Box2D.Collision.Shapes.b2PolygonShape, V = Box2D.Collision.Shapes.b2Shape, $ = Box2D.Dynamics.b2Body, J = Box2D.Dynamics.b2BodyDef, K = Box2D.Dynamics.b2ContactFilter, Q = Box2D.Dynamics.b2ContactImpulse, G = Box2D.Dynamics.b2ContactListener, Y = Box2D.Dynamics.b2ContactManager, Z = Box2D.Dynamics.b2DebugDraw, et = Box2D.Dynamics.b2DestructionListener, tt = Box2D.Dynamics.b2FilterData, nt = Box2D.Dynamics.b2Fixture, rt = Box2D.Dynamics.b2FixtureDef, it = Box2D.Dynamics.b2Island, st = Box2D.Dynamics.b2TimeStep, ot = Box2D.Dynamics.b2World, ut = Box2D.Dynamics.Contacts.b2CircleContact, at = Box2D.Dynamics.Contacts.b2Contact, ft = Box2D.Dynamics.Contacts.b2ContactConstraint, lt = Box2D.Dynamics.Contacts.b2ContactConstraintPoint, ct = Box2D.Dynamics.Contacts.b2ContactEdge, ht = Box2D.Dynamics.Contacts.b2ContactFactory, pt = Box2D.Dynamics.Contacts.b2ContactRegister, dt = Box2D.Dynamics.Contacts.b2ContactResult, vt = Box2D.Dynamics.Contacts.b2ContactSolver, mt = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact, gt = Box2D.Dynamics.Contacts.b2NullContact, yt = Box2D.Dynamics.Contacts.b2PolyAndCircleContact, bt = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact, wt = Box2D.Dynamics.Contacts.b2PolygonContact, Et = Box2D.Dynamics.Contacts.b2PositionSolverManifold, St = Box2D.Dynamics.Controllers.b2Controller, xt = Box2D.Dynamics.Joints.b2DistanceJoint, Tt = Box2D.Dynamics.Joints.b2DistanceJointDef, Nt = Box2D.Dynamics.Joints.b2FrictionJoint, Ct = Box2D.Dynamics.Joints.b2FrictionJointDef, kt = Box2D.Dynamics.Joints.b2GearJoint, Lt = Box2D.Dynamics.Joints.b2GearJointDef, At = Box2D.Dynamics.Joints.b2Jacobian, Ot = Box2D.Dynamics.Joints.b2Joint, Mt = Box2D.Dynamics.Joints.b2JointDef, _t = Box2D.Dynamics.Joints.b2JointEdge, Dt = Box2D.Dynamics.Joints.b2LineJoint, Pt = Box2D.Dynamics.Joints.b2LineJointDef, Ht = Box2D.Dynamics.Joints.b2MouseJoint, Bt = Box2D.Dynamics.Joints.b2MouseJointDef, jt = Box2D.Dynamics.Joints.b2PrismaticJoint, Ft = Box2D.Dynamics.Joints.b2PrismaticJointDef, It = Box2D.Dynamics.Joints.b2PulleyJoint, qt = Box2D.Dynamics.Joints.b2PulleyJointDef, Rt = Box2D.Dynamics.Joints.b2RevoluteJoint, Ut = Box2D.Dynamics.Joints.b2RevoluteJointDef, zt = Box2D.Dynamics.Joints.b2WeldJoint, Wt = Box2D.Dynamics.Joints.b2WeldJointDef;
    $.b2Body = function () {
        this.m_xf = new s, this.m_sweep = new i, this.m_linearVelocity = new o, this.m_force = new o
    }, $.prototype.connectEdges = function (e, t, n) {
        n === undefined && (n = 0);
        var i = Math.atan2(t.GetDirectionVector().y, t.GetDirectionVector().x), s = Math.tan((i - n) * .5), o = r.MulFV(s, t.GetDirectionVector());
        o = r.SubtractVV(o, t.GetNormalVector()), o = r.MulFV(l.b2_toiSlop, o), o = r.AddVV(o, t.GetVertex1());
        var u = r.AddVV(e.GetDirectionVector(), t.GetDirectionVector());
        u.Normalize();
        var a = r.Dot(e.GetDirectionVector(), t.GetNormalVector()) > 0;
        return e.SetNextEdge(t, o, u, a), t.SetPrevEdge(e, o, u, a), i
    }, $.prototype.CreateFixture = function (e) {
        if (this.m_world.IsLocked() == 1)return null;
        var t = new nt;
        t.Create(this, this.m_xf, e);
        if (this.m_flags & $.e_activeFlag) {
            var n = this.m_world.m_contactManager.m_broadPhase;
            t.CreateProxy(n, this.m_xf)
        }
        return t.m_next = this.m_fixtureList, this.m_fixtureList = t, ++this.m_fixtureCount, t.m_body = this, t.m_density > 0 && this.ResetMassData(), this.m_world.m_flags |= ot.e_newFixture, t
    }, $.prototype.CreateFixture2 = function (e, t) {
        t === undefined && (t = 0);
        var n = new rt;
        return n.shape = e, n.density = t, this.CreateFixture(n)
    }, $.prototype.DestroyFixture = function (e) {
        if (this.m_world.IsLocked() == 1)return;
        var t = this.m_fixtureList, n = null, r = !1;
        while (t != null) {
            if (t == e) {
                n ? n.m_next = e.m_next : this.m_fixtureList = e.m_next, r = !0;
                break
            }
            n = t, t = t.m_next
        }
        var i = this.m_contactList;
        while (i) {
            var s = i.contact;
            i = i.next;
            var o = s.GetFixtureA(), u = s.GetFixtureB();
            (e == o || e == u) && this.m_world.m_contactManager.Destroy(s)
        }
        if (this.m_flags & $.e_activeFlag) {
            var a = this.m_world.m_contactManager.m_broadPhase;
            e.DestroyProxy(a)
        }
        e.Destroy(), e.m_body = null, e.m_next = null, --this.m_fixtureCount, this.ResetMassData()
    }, $.prototype.SetPositionAndAngle = function (e, t) {
        t === undefined && (t = 0);
        var n;
        if (this.m_world.IsLocked() == 1)return;
        this.m_xf.R.Set(t), this.m_xf.position.SetV(e);
        var r = this.m_xf.R, i = this.m_sweep.localCenter;
        this.m_sweep.c.x = r.col1.x * i.x + r.col2.x * i.y, this.m_sweep.c.y = r.col1.y * i.x + r.col2.y * i.y, this.m_sweep.c.x += this.m_xf.position.x, this.m_sweep.c.y += this.m_xf.position.y, this.m_sweep.c0.SetV(this.m_sweep.c), this.m_sweep.a0 = this.m_sweep.a = t;
        var s = this.m_world.m_contactManager.m_broadPhase;
        for (n = this.m_fixtureList; n; n = n.m_next)n.Synchronize(s, this.m_xf, this.m_xf);
        this.m_world.m_contactManager.FindNewContacts()
    }, $.prototype.SetTransform = function (e) {
        this.SetPositionAndAngle(e.position, e.GetAngle())
    }, $.prototype.GetTransform = function () {
        return this.m_xf
    }, $.prototype.GetPosition = function () {
        return this.m_xf.position
    }, $.prototype.SetPosition = function (e) {
        this.SetPositionAndAngle(e, this.GetAngle())
    }, $.prototype.GetAngle = function () {
        return this.m_sweep.a
    }, $.prototype.SetAngle = function (e) {
        e === undefined && (e = 0), this.SetPositionAndAngle(this.GetPosition(), e)
    }, $.prototype.GetWorldCenter = function () {
        return this.m_sweep.c
    }, $.prototype.GetLocalCenter = function () {
        return this.m_sweep.localCenter
    }, $.prototype.SetLinearVelocity = function (e) {
        if (this.m_type == $.b2_staticBody)return;
        this.m_linearVelocity.SetV(e)
    }, $.prototype.GetLinearVelocity = function () {
        return this.m_linearVelocity
    }, $.prototype.SetAngularVelocity = function (e) {
        e === undefined && (e = 0);
        if (this.m_type == $.b2_staticBody)return;
        this.m_angularVelocity = e
    }, $.prototype.GetAngularVelocity = function () {
        return this.m_angularVelocity
    }, $.prototype.GetDefinition = function () {
        var e = new J;
        return e.type = this.GetType(), e.allowSleep = (this.m_flags & $.e_allowSleepFlag) == $.e_allowSleepFlag, e.angle = this.GetAngle(), e.angularDamping = this.m_angularDamping, e.angularVelocity = this.m_angularVelocity, e.fixedRotation = (this.m_flags & $.e_fixedRotationFlag) == $.e_fixedRotationFlag, e.bullet = (this.m_flags & $.e_bulletFlag) == $.e_bulletFlag, e.awake = (this.m_flags & $.e_awakeFlag) == $.e_awakeFlag, e.linearDamping = this.m_linearDamping, e.linearVelocity.SetV(this.GetLinearVelocity()), e.position = this.GetPosition(), e.userData = this.GetUserData(), e
    }, $.prototype.ApplyForce = function (e, t) {
        if (this.m_type != $.b2_dynamicBody)return;
        this.IsAwake() == 0 && this.SetAwake(!0), this.m_force.x += e.x, this.m_force.y += e.y, this.m_torque += (t.x - this.m_sweep.c.x) * e.y - (t.y - this.m_sweep.c.y) * e.x
    }, $.prototype.ApplyTorque = function (e) {
        e === undefined && (e = 0);
        if (this.m_type != $.b2_dynamicBody)return;
        this.IsAwake() == 0 && this.SetAwake(!0), this.m_torque += e
    }, $.prototype.ApplyImpulse = function (e, t) {
        if (this.m_type != $.b2_dynamicBody)return;
        this.IsAwake() == 0 && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * e.x, this.m_linearVelocity.y += this.m_invMass * e.y, this.m_angularVelocity += this.m_invI * ((t.x - this.m_sweep.c.x) * e.y - (t.y - this.m_sweep.c.y) * e.x)
    }, $.prototype.Split = function (e) {
        var t = this.GetLinearVelocity().Copy(), n = this.GetAngularVelocity(), i = this.GetWorldCenter(), s = this, o = this.m_world.CreateBody(this.GetDefinition()), u;
        for (var a = s.m_fixtureList; a;)if (e(a)) {
            var f = a.m_next;
            u ? u.m_next = f : s.m_fixtureList = f, s.m_fixtureCount--, a.m_next = o.m_fixtureList, o.m_fixtureList = a, o.m_fixtureCount++, a.m_body = o, a = f
        } else u = a, a = a.m_next;
        s.ResetMassData(), o.ResetMassData();
        var l = s.GetWorldCenter(), c = o.GetWorldCenter(), h = r.AddVV(t, r.CrossFV(n, r.SubtractVV(l, i))), p = r.AddVV(t, r.CrossFV(n, r.SubtractVV(c, i)));
        return s.SetLinearVelocity(h), o.SetLinearVelocity(p), s.SetAngularVelocity(n), o.SetAngularVelocity(n), s.SynchronizeFixtures(), o.SynchronizeFixtures(), o
    }, $.prototype.Merge = function (e) {
        var t;
        for (t = e.m_fixtureList; t;) {
            var n = t.m_next;
            e.m_fixtureCount--, t.m_next = this.m_fixtureList, this.m_fixtureList = t, this.m_fixtureCount++, t.m_body = i, t = n
        }
        r.m_fixtureCount = 0;
        var r = this, i = e, s = r.GetWorldCenter(), o = i.GetWorldCenter(), u = r.GetLinearVelocity().Copy(), a = i.GetLinearVelocity().Copy(), f = r.GetAngularVelocity(), l = i.GetAngularVelocity();
        r.ResetMassData(), this.SynchronizeFixtures()
    }, $.prototype.GetMass = function () {
        return this.m_mass
    }, $.prototype.GetInertia = function () {
        return this.m_I
    }, $.prototype.GetMassData = function (e) {
        e.mass = this.m_mass, e.I = this.m_I, e.center.SetV(this.m_sweep.localCenter)
    }, $.prototype.SetMassData = function (e) {
        l.b2Assert(this.m_world.IsLocked() == 0);
        if (this.m_world.IsLocked() == 1)return;
        if (this.m_type != $.b2_dynamicBody)return;
        this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, this.m_mass = e.mass, this.m_mass <= 0 && (this.m_mass = 1), this.m_invMass = 1 / this.m_mass, e.I > 0 && (this.m_flags & $.e_fixedRotationFlag) == 0 && (this.m_I = e.I - this.m_mass * (e.center.x * e.center.x + e.center.y * e.center.y), this.m_invI = 1 / this.m_I);
        var t = this.m_sweep.c.Copy();
        this.m_sweep.localCenter.SetV(e.center), this.m_sweep.c0.SetV(r.MulX(this.m_xf, this.m_sweep.localCenter)), this.m_sweep.c.SetV(this.m_sweep.c0), this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - t.y), this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - t.x)
    }, $.prototype.ResetMassData = function () {
        this.m_mass = 0, this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, this.m_sweep.localCenter.SetZero();
        if (this.m_type == $.b2_staticBody || this.m_type == $.b2_kinematicBody)return;
        var e = o.Make(0, 0);
        for (var t = this.m_fixtureList; t; t = t.m_next) {
            if (t.m_density == 0)continue;
            var n = t.GetMassData();
            this.m_mass += n.mass, e.x += n.center.x * n.mass, e.y += n.center.y * n.mass, this.m_I += n.I
        }
        this.m_mass > 0 ? (this.m_invMass = 1 / this.m_mass, e.x *= this.m_invMass, e.y *= this.m_invMass) : (this.m_mass = 1, this.m_invMass = 1), this.m_I > 0 && (this.m_flags & $.e_fixedRotationFlag) == 0 ? (this.m_I -= this.m_mass * (e.x * e.x + e.y * e.y), this.m_I *= this.m_inertiaScale, l.b2Assert(this.m_I > 0), this.m_invI = 1 / this.m_I) : (this.m_I = 0, this.m_invI = 0);
        var i = this.m_sweep.c.Copy();
        this.m_sweep.localCenter.SetV(e), this.m_sweep.c0.SetV(r.MulX(this.m_xf, this.m_sweep.localCenter)), this.m_sweep.c.SetV(this.m_sweep.c0), this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - i.y), this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - i.x)
    }, $.prototype.GetWorldPoint = function (e) {
        var t = this.m_xf.R, n = new o(t.col1.x * e.x + t.col2.x * e.y, t.col1.y * e.x + t.col2.y * e.y);
        return n.x += this.m_xf.position.x, n.y += this.m_xf.position.y, n
    }, $.prototype.GetWorldVector = function (e) {
        return r.MulMV(this.m_xf.R, e)
    }, $.prototype.GetLocalPoint = function (e) {
        return r.MulXT(this.m_xf, e)
    }, $.prototype.GetLocalVector = function (e) {
        return r.MulTMV(this.m_xf.R, e)
    }, $.prototype.GetLinearVelocityFromWorldPoint = function (e) {
        return new o(this.m_linearVelocity.x - this.m_angularVelocity * (e.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (e.x - this.m_sweep.c.x))
    }, $.prototype.GetLinearVelocityFromLocalPoint = function (e) {
        var t = this.m_xf.R, n = new o(t.col1.x * e.x + t.col2.x * e.y, t.col1.y * e.x + t.col2.y * e.y);
        return n.x += this.m_xf.position.x, n.y += this.m_xf.position.y, new o(this.m_linearVelocity.x - this.m_angularVelocity * (n.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (n.x - this.m_sweep.c.x))
    }, $.prototype.GetLinearDamping = function () {
        return this.m_linearDamping
    }, $.prototype.SetLinearDamping = function (e) {
        e === undefined && (e = 0), this.m_linearDamping = e
    }, $.prototype.GetAngularDamping = function () {
        return this.m_angularDamping
    }, $.prototype.SetAngularDamping = function (e) {
        e === undefined && (e = 0), this.m_angularDamping = e
    }, $.prototype.SetType = function (e) {
        e === undefined && (e = 0);
        if (this.m_type == e)return;
        this.m_type = e, this.ResetMassData(), this.m_type == $.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0;
        for (var t = this.m_contactList; t; t = t.next)t.contact.FlagForFiltering()
    }, $.prototype.GetType = function () {
        return this.m_type
    }, $.prototype.SetBullet = function (e) {
        e ? this.m_flags |= $.e_bulletFlag : this.m_flags &= ~$.e_bulletFlag
    }, $.prototype.IsBullet = function () {
        return(this.m_flags & $.e_bulletFlag) == $.e_bulletFlag
    }, $.prototype.SetSleepingAllowed = function (e) {
        e ? this.m_flags |= $.e_allowSleepFlag : (this.m_flags &= ~$.e_allowSleepFlag, this.SetAwake(!0))
    }, $.prototype.SetAwake = function (e) {
        e ? (this.m_flags |= $.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~$.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
    }, $.prototype.IsAwake = function () {
        return(this.m_flags & $.e_awakeFlag) == $.e_awakeFlag
    }, $.prototype.SetFixedRotation = function (e) {
        e ? this.m_flags |= $.e_fixedRotationFlag : this.m_flags &= ~$.e_fixedRotationFlag, this.ResetMassData()
    }, $.prototype.IsFixedRotation = function () {
        return(this.m_flags & $.e_fixedRotationFlag) == $.e_fixedRotationFlag
    }, $.prototype.SetActive = function (e) {
        if (e == this.IsActive())return;
        var t, n;
        if (e) {
            this.m_flags |= $.e_activeFlag, t = this.m_world.m_contactManager.m_broadPhase;
            for (n = this.m_fixtureList; n; n = n.m_next)n.CreateProxy(t, this.m_xf)
        } else {
            this.m_flags &= ~$.e_activeFlag, t = this.m_world.m_contactManager.m_broadPhase;
            for (n = this.m_fixtureList; n; n = n.m_next)n.DestroyProxy(t);
            var r = this.m_contactList;
            while (r) {
                var i = r;
                r = r.next, this.m_world.m_contactManager.Destroy(i.contact)
            }
            this.m_contactList = null
        }
    }, $.prototype.IsActive = function () {
        return(this.m_flags & $.e_activeFlag) == $.e_activeFlag
    }, $.prototype.IsSleepingAllowed = function () {
        return(this.m_flags & $.e_allowSleepFlag) == $.e_allowSleepFlag
    }, $.prototype.GetFixtureList = function () {
        return this.m_fixtureList
    }, $.prototype.GetJointList = function () {
        return this.m_jointList
    }, $.prototype.GetControllerList = function () {
        return this.m_controllerList
    }, $.prototype.GetContactList = function () {
        return this.m_contactList
    }, $.prototype.GetNext = function () {
        return this.m_next
    }, $.prototype.GetUserData = function () {
        return this.m_userData
    }, $.prototype.SetUserData = function (e) {
        this.m_userData = e
    }, $.prototype.GetWorld = function () {
        return this.m_world
    }, $.prototype.b2Body = function (e, t) {
        this.m_flags = 0, e.bullet && (this.m_flags |= $.e_bulletFlag), e.fixedRotation && (this.m_flags |= $.e_fixedRotationFlag), e.allowSleep && (this.m_flags |= $.e_allowSleepFlag), e.awake && (this.m_flags |= $.e_awakeFlag), e.active && (this.m_flags |= $.e_activeFlag), this.m_world = t, this.m_xf.position.SetV(e.position), this.m_xf.R.Set(e.angle), this.m_sweep.localCenter.SetZero(), this.m_sweep.t0 = 1, this.m_sweep.a0 = this.m_sweep.a = e.angle;
        var n = this.m_xf.R, r = this.m_sweep.localCenter;
        this.m_sweep.c.x = n.col1.x * r.x + n.col2.x * r.y, this.m_sweep.c.y = n.col1.y * r.x + n.col2.y * r.y, this.m_sweep.c.x += this.m_xf.position.x, this.m_sweep.c.y += this.m_xf.position.y, this.m_sweep.c0.SetV(this.m_sweep.c), this.m_jointList = null, this.m_controllerList = null, this.m_contactList = null, this.m_controllerCount = 0, this.m_prev = null, this.m_next = null, this.m_linearVelocity.SetV(e.linearVelocity), this.m_angularVelocity = e.angularVelocity, this.m_linearDamping = e.linearDamping, this.m_angularDamping = e.angularDamping, this.m_force.Set(0, 0), this.m_torque = 0, this.m_sleepTime = 0, this.m_type = e.type, this.m_type == $.b2_dynamicBody ? (this.m_mass = 1, this.m_invMass = 1) : (this.m_mass = 0, this.m_invMass = 0), this.m_I = 0, this.m_invI = 0, this.m_inertiaScale = e.inertiaScale, this.m_userData = e.userData, this.m_fixtureList = null, this.m_fixtureCount = 0
    }, $.prototype.SynchronizeFixtures = function () {
        var e = $.s_xf1;
        e.R.Set(this.m_sweep.a0);
        var t = e.R, n = this.m_sweep.localCenter;
        e.position.x = this.m_sweep.c0.x - (t.col1.x * n.x + t.col2.x * n.y), e.position.y = this.m_sweep.c0.y - (t.col1.y * n.x + t.col2.y * n.y);
        var r, i = this.m_world.m_contactManager.m_broadPhase;
        for (r = this.m_fixtureList; r; r = r.m_next)r.Synchronize(i, e, this.m_xf)
    }, $.prototype.SynchronizeTransform = function () {
        this.m_xf.R.Set(this.m_sweep.a);
        var e = this.m_xf.R, t = this.m_sweep.localCenter;
        this.m_xf.position.x = this.m_sweep.c.x - (e.col1.x * t.x + e.col2.x * t.y), this.m_xf.position.y = this.m_sweep.c.y - (e.col1.y * t.x + e.col2.y * t.y)
    }, $.prototype.ShouldCollide = function (e) {
        if (this.m_type != $.b2_dynamicBody && e.m_type != $.b2_dynamicBody)return!1;
        for (var t = this.m_jointList; t; t = t.next)if (t.other == e && t.joint.m_collideConnected == 0)return!1;
        return!0
    }, $.prototype.Advance = function (e) {
        e === undefined && (e = 0), this.m_sweep.Advance(e), this.m_sweep.c.SetV(this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0, this.SynchronizeTransform()
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2Body.s_xf1 = new s, Box2D.Dynamics.b2Body.e_islandFlag = 1, Box2D.Dynamics.b2Body.e_awakeFlag = 2, Box2D.Dynamics.b2Body.e_allowSleepFlag = 4, Box2D.Dynamics.b2Body.e_bulletFlag = 8, Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16, Box2D.Dynamics.b2Body.e_activeFlag = 32, Box2D.Dynamics.b2Body.b2_staticBody = 0, Box2D.Dynamics.b2Body.b2_kinematicBody = 1, Box2D.Dynamics.b2Body.b2_dynamicBody = 2
    }), J.b2BodyDef = function () {
        this.position = new o, this.linearVelocity = new o
    }, J.prototype.b2BodyDef = function () {
        this.userData = null, this.position.Set(0, 0), this.angle = 0, this.linearVelocity.Set(0, 0), this.angularVelocity = 0, this.linearDamping = 0, this.angularDamping = 0, this.allowSleep = !0, this.awake = !0, this.fixedRotation = !1, this.bullet = !1, this.type = $.b2_staticBody, this.active = !0, this.inertiaScale = 1
    }, K.b2ContactFilter = function () {
    }, K.prototype.ShouldCollide = function (e, t) {
        var n = e.GetFilterData(), r = t.GetFilterData();
        if (n.groupIndex == r.groupIndex && n.groupIndex != 0)return n.groupIndex > 0;
        var i = (n.maskBits & r.categoryBits) != 0 && (n.categoryBits & r.maskBits) != 0;
        return i
    }, K.prototype.RayCollide = function (e, t) {
        return e ? this.ShouldCollide(e instanceof nt ? e : null, t) : !0
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new K
    }), Q.b2ContactImpulse = function () {
        this.normalImpulses = new Vector_a2j_Number(l.b2_maxManifoldPoints), this.tangentImpulses = new Vector_a2j_Number(l.b2_maxManifoldPoints)
    }, G.b2ContactListener = function () {
    }, G.prototype.BeginContact = function (e) {
    }, G.prototype.EndContact = function (e) {
    }, G.prototype.PreSolve = function (e, t) {
    }, G.prototype.PostSolve = function (e, t) {
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new G
    }), Y.b2ContactManager = function () {
    }, Y.prototype.b2ContactManager = function () {
        this.m_world = null, this.m_contactCount = 0, this.m_contactFilter = K.b2_defaultFilter, this.m_contactListener = G.b2_defaultListener, this.m_contactFactory = new ht(this.m_allocator), this.m_broadPhase = new S
    }, Y.prototype.AddPair = function (e, t) {
        var n = e instanceof nt ? e : null, r = t instanceof nt ? t : null, i = n.GetBody(), s = r.GetBody();
        if (i == s)return;
        var o = s.GetContactList();
        while (o) {
            if (o.other == i) {
                var u = o.contact.GetFixtureA(), a = o.contact.GetFixtureB();
                if (u == n && a == r)return;
                if (u == r && a == n)return
            }
            o = o.next
        }
        if (s.ShouldCollide(i) == 0)return;
        if (this.m_contactFilter.ShouldCollide(n, r) == 0)return;
        var f = this.m_contactFactory.Create(n, r);
        n = f.GetFixtureA(), r = f.GetFixtureB(), i = n.m_body, s = r.m_body, f.m_prev = null, f.m_next = this.m_world.m_contactList, this.m_world.m_contactList != null && (this.m_world.m_contactList.m_prev = f), this.m_world.m_contactList = f, f.m_nodeA.contact = f, f.m_nodeA.other = s, f.m_nodeA.prev = null, f.m_nodeA.next = i.m_contactList, i.m_contactList != null && (i.m_contactList.prev = f.m_nodeA), i.m_contactList = f.m_nodeA, f.m_nodeB.contact = f, f.m_nodeB.other = i, f.m_nodeB.prev = null, f.m_nodeB.next = s.m_contactList, s.m_contactList != null && (s.m_contactList.prev = f.m_nodeB), s.m_contactList = f.m_nodeB, ++this.m_world.m_contactCount;
        return
    }, Y.prototype.FindNewContacts = function () {
        this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
    }, Y.prototype.Destroy = function (e) {
        var t = e.GetFixtureA(), n = e.GetFixtureB(), r = t.GetBody(), i = n.GetBody();
        e.IsTouching() && this.m_contactListener.EndContact(e), e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), e == this.m_world.m_contactList && (this.m_world.m_contactList = e.m_next), e.m_nodeA.prev && (e.m_nodeA.prev.next = e.m_nodeA.next), e.m_nodeA.next && (e.m_nodeA.next.prev = e.m_nodeA.prev), e.m_nodeA == r.m_contactList && (r.m_contactList = e.m_nodeA.next), e.m_nodeB.prev && (e.m_nodeB.prev.next = e.m_nodeB.next), e.m_nodeB.next && (e.m_nodeB.next.prev = e.m_nodeB.prev), e.m_nodeB == i.m_contactList && (i.m_contactList =
            e.m_nodeB.next), this.m_contactFactory.Destroy(e), --this.m_contactCount
    }, Y.prototype.Collide = function () {
        var e = this.m_world.m_contactList;
        while (e) {
            var t = e.GetFixtureA(), n = e.GetFixtureB(), r = t.GetBody(), i = n.GetBody();
            if (r.IsAwake() == 0 && i.IsAwake() == 0) {
                e = e.GetNext();
                continue
            }
            if (e.m_flags & at.e_filterFlag) {
                if (i.ShouldCollide(r) == 0) {
                    var s = e;
                    e = s.GetNext(), this.Destroy(s);
                    continue
                }
                if (this.m_contactFilter.ShouldCollide(t, n) == 0) {
                    s = e, e = s.GetNext(), this.Destroy(s);
                    continue
                }
                e.m_flags &= ~at.e_filterFlag
            }
            var o = t.m_proxy, u = n.m_proxy, a = this.m_broadPhase.TestOverlap(o, u);
            if (a == 0) {
                s = e, e = s.GetNext(), this.Destroy(s);
                continue
            }
            e.Update(this.m_contactListener), e = e.GetNext()
        }
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new m
    }), Z.b2DebugDraw = function () {
    }, Z.prototype.b2DebugDraw = function () {
    }, Z.prototype.SetFlags = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.GetFlags = function () {
    }, Z.prototype.AppendFlags = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.ClearFlags = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.SetSprite = function (e) {
    }, Z.prototype.GetSprite = function () {
    }, Z.prototype.SetDrawScale = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.GetDrawScale = function () {
    }, Z.prototype.SetLineThickness = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.GetLineThickness = function () {
    }, Z.prototype.SetAlpha = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.GetAlpha = function () {
    }, Z.prototype.SetFillAlpha = function (e) {
        e === undefined && (e = 0)
    }, Z.prototype.GetFillAlpha = function () {
    },Z.prototype.SetXFormScale = function (e) {
        e === undefined && (e = 0)
    },Z.prototype.GetXFormScale = function () {
    },Z.prototype.DrawPolygon = function (e, t, n) {
        t === undefined && (t = 0)
    },Z.prototype.DrawSolidPolygon = function (e, t, n) {
        t === undefined && (t = 0)
    },Z.prototype.DrawCircle = function (e, t, n) {
        t === undefined && (t = 0)
    },Z.prototype.DrawSolidCircle = function (e, t, n, r) {
        t === undefined && (t = 0)
    },Z.prototype.DrawSegment = function (e, t, n) {
    },Z.prototype.DrawTransform = function (e) {
    },Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1, Box2D.Dynamics.b2DebugDraw.e_jointBit = 2, Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4, Box2D.Dynamics.b2DebugDraw.e_pairBit = 8, Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16, Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
    }),et.b2DestructionListener = function () {
    },et.prototype.SayGoodbyeJoint = function (e) {
    },et.prototype.SayGoodbyeFixture = function (e) {
    },tt.b2FilterData = function () {
        this.categoryBits = 1, this.maskBits = 65535, this.groupIndex = 0
    },tt.prototype.Copy = function () {
        var e = new tt;
        return e.categoryBits = this.categoryBits, e.maskBits = this.maskBits, e.groupIndex = this.groupIndex, e
    },nt.b2Fixture = function () {
        this.m_filter = new tt
    },nt.prototype.GetType = function () {
        return this.m_shape.GetType()
    },nt.prototype.GetShape = function () {
        return this.m_shape
    },nt.prototype.SetSensor = function (e) {
        if (this.m_isSensor == e)return;
        this.m_isSensor = e;
        if (this.m_body == null)return;
        var t = this.m_body.GetContactList();
        while (t) {
            var n = t.contact, r = n.GetFixtureA(), i = n.GetFixtureB();
            (r == this || i == this) && n.SetSensor(r.IsSensor() || i.IsSensor()), t = t.next
        }
    },nt.prototype.IsSensor = function () {
        return this.m_isSensor
    },nt.prototype.SetFilterData = function (e) {
        this.m_filter = e.Copy();
        if (this.m_body)return;
        var t = this.m_body.GetContactList();
        while (t) {
            var n = t.contact, r = n.GetFixtureA(), i = n.GetFixtureB();
            (r == this || i == this) && n.FlagForFiltering(), t = t.next
        }
    },nt.prototype.GetFilterData = function () {
        return this.m_filter.Copy()
    },nt.prototype.GetBody = function () {
        return this.m_body
    },nt.prototype.GetNext = function () {
        return this.m_next
    },nt.prototype.GetUserData = function () {
        return this.m_userData
    },nt.prototype.SetUserData = function (e) {
        this.m_userData = e
    },nt.prototype.TestPoint = function (e) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), e)
    },nt.prototype.RayCast = function (e, t) {
        return this.m_shape.RayCast(e, t, this.m_body.GetTransform())
    },nt.prototype.GetMassData = function (e) {
        return e === undefined && (e = null), e == null && (e = new W), this.m_shape.ComputeMass(e, this.m_density), e
    },nt.prototype.SetDensity = function (e) {
        e === undefined && (e = 0), this.m_density = e
    },nt.prototype.GetDensity = function () {
        return this.m_density
    },nt.prototype.GetFriction = function () {
        return this.m_friction
    },nt.prototype.SetFriction = function (e) {
        e === undefined && (e = 0), this.m_friction = e
    },nt.prototype.GetRestitution = function () {
        return this.m_restitution
    },nt.prototype.SetRestitution = function (e) {
        e === undefined && (e = 0), this.m_restitution = e
    },nt.prototype.GetAABB = function () {
        return this.m_aabb
    },nt.prototype.b2Fixture = function () {
        this.m_aabb = new c, this.m_userData = null, this.m_body = null, this.m_next = null, this.m_shape = null, this.m_density = 0, this.m_friction = 0, this.m_restitution = 0
    },nt.prototype.Create = function (e, t, n) {
        this.m_userData = n.userData, this.m_friction = n.friction, this.m_restitution = n.restitution, this.m_body = e, this.m_next = null, this.m_filter = n.filter.Copy(), this.m_isSensor = n.isSensor, this.m_shape = n.shape.Copy(), this.m_density = n.density
    },nt.prototype.Destroy = function () {
        this.m_shape = null
    },nt.prototype.CreateProxy = function (e, t) {
        this.m_shape.ComputeAABB(this.m_aabb, t), this.m_proxy = e.CreateProxy(this.m_aabb, this)
    },nt.prototype.DestroyProxy = function (e) {
        if (this.m_proxy == null)return;
        e.DestroyProxy(this.m_proxy), this.m_proxy = null
    },nt.prototype.Synchronize = function (e, t, n) {
        if (!this.m_proxy)return;
        var i = new c, s = new c;
        this.m_shape.ComputeAABB(i, t), this.m_shape.ComputeAABB(s, n), this.m_aabb.Combine(i, s);
        var o = r.SubtractVV(n.position, t.position);
        e.MoveProxy(this.m_proxy, this.m_aabb, o)
    },rt.b2FixtureDef = function () {
        this.filter = new tt
    },rt.prototype.b2FixtureDef = function () {
        this.shape = null, this.userData = null, this.friction = .2, this.restitution = 0, this.density = 0, this.filter.categoryBits = 1, this.filter.maskBits = 65535, this.filter.groupIndex = 0, this.isSensor = !1
    },it.b2Island = function () {
    },it.prototype.b2Island = function () {
        this.m_bodies = new Vector, this.m_contacts = new Vector, this.m_joints = new Vector
    },it.prototype.Initialize = function (e, t, n, r, i, s) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0);
        var o = 0;
        this.m_bodyCapacity = e, this.m_contactCapacity = t, this.m_jointCapacity = n, this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0, this.m_allocator = r, this.m_listener = i, this.m_contactSolver = s;
        for (o = this.m_bodies.length; o < e; o++)this.m_bodies[o] = null;
        for (o = this.m_contacts.length; o < t; o++)this.m_contacts[o] = null;
        for (o = this.m_joints.length; o < n; o++)this.m_joints[o] = null
    },it.prototype.Clear = function () {
        this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0
    },it.prototype.Solve = function (e, t, n) {
        var i = 0, s = 0, o, u;
        for (i = 0; i < this.m_bodyCount; ++i) {
            o = this.m_bodies[i];
            if (o.GetType() != $.b2_dynamicBody)continue;
            o.m_linearVelocity.x += e.dt * (t.x + o.m_invMass * o.m_force.x), o.m_linearVelocity.y += e.dt * (t.y + o.m_invMass * o.m_force.y), o.m_angularVelocity += e.dt * o.m_invI * o.m_torque, o.m_linearVelocity.Multiply(r.Clamp(1 - e.dt * o.m_linearDamping, 0, 1)), o.m_angularVelocity *= r.Clamp(1 - e.dt * o.m_angularDamping, 0, 1)
        }
        this.m_contactSolver.Initialize(e, this.m_contacts, this.m_contactCount, this.m_allocator);
        var a = this.m_contactSolver;
        a.InitVelocityConstraints(e);
        for (i = 0; i < this.m_jointCount; ++i)u = this.m_joints[i], u.InitVelocityConstraints(e);
        for (i = 0; i < e.velocityIterations; ++i) {
            for (s = 0; s < this.m_jointCount; ++s)u = this.m_joints[s], u.SolveVelocityConstraints(e);
            a.SolveVelocityConstraints()
        }
        for (i = 0; i < this.m_jointCount; ++i)u = this.m_joints[i], u.FinalizeVelocityConstraints();
        a.FinalizeVelocityConstraints();
        for (i = 0; i < this.m_bodyCount; ++i) {
            o = this.m_bodies[i];
            if (o.GetType() == $.b2_staticBody)continue;
            var f = e.dt * o.m_linearVelocity.x, c = e.dt * o.m_linearVelocity.y;
            f * f + c * c > l.b2_maxTranslationSquared && (o.m_linearVelocity.Normalize(), o.m_linearVelocity.x *= l.b2_maxTranslation * e.inv_dt, o.m_linearVelocity.y *= l.b2_maxTranslation * e.inv_dt);
            var h = e.dt * o.m_angularVelocity;
            h * h > l.b2_maxRotationSquared && (o.m_angularVelocity < 0 ? o.m_angularVelocity = -l.b2_maxRotation * e.inv_dt : o.m_angularVelocity = l.b2_maxRotation * e.inv_dt), o.m_sweep.c0.SetV(o.m_sweep.c), o.m_sweep.a0 = o.m_sweep.a, o.m_sweep.c.x += e.dt * o.m_linearVelocity.x, o.m_sweep.c.y += e.dt * o.m_linearVelocity.y, o.m_sweep.a += e.dt * o.m_angularVelocity, o.SynchronizeTransform()
        }
        for (i = 0; i < e.positionIterations; ++i) {
            var p = a.SolvePositionConstraints(l.b2_contactBaumgarte), d = !0;
            for (s = 0; s < this.m_jointCount; ++s) {
                u = this.m_joints[s];
                var v = u.SolvePositionConstraints(l.b2_contactBaumgarte);
                d = d && v
            }
            if (p && d)break
        }
        this.Report(a.m_constraints);
        if (n) {
            var m = Number.MAX_VALUE, g = l.b2_linearSleepTolerance * l.b2_linearSleepTolerance, y = l.b2_angularSleepTolerance * l.b2_angularSleepTolerance;
            for (i = 0; i < this.m_bodyCount; ++i) {
                o = this.m_bodies[i];
                if (o.GetType() == $.b2_staticBody)continue;
                (o.m_flags & $.e_allowSleepFlag) == 0 && (o.m_sleepTime = 0, m = 0), (o.m_flags & $.e_allowSleepFlag) == 0 || o.m_angularVelocity * o.m_angularVelocity > y || r.Dot(o.m_linearVelocity, o.m_linearVelocity) > g ? (o.m_sleepTime = 0, m = 0) : (o.m_sleepTime += e.dt, m = r.Min(m, o.m_sleepTime))
            }
            if (m >= l.b2_timeToSleep)for (i = 0; i < this.m_bodyCount; ++i)o = this.m_bodies[i], o.SetAwake(!1)
        }
    },it.prototype.SolveTOI = function (e) {
        var t = 0, n = 0;
        this.m_contactSolver.Initialize(e, this.m_contacts, this.m_contactCount, this.m_allocator);
        var r = this.m_contactSolver;
        for (t = 0; t < this.m_jointCount; ++t)this.m_joints[t].InitVelocityConstraints(e);
        for (t = 0; t < e.velocityIterations; ++t) {
            r.SolveVelocityConstraints();
            for (n = 0; n < this.m_jointCount; ++n)this.m_joints[n].SolveVelocityConstraints(e)
        }
        for (t = 0; t < this.m_bodyCount; ++t) {
            var i = this.m_bodies[t];
            if (i.GetType() == $.b2_staticBody)continue;
            var s = e.dt * i.m_linearVelocity.x, o = e.dt * i.m_linearVelocity.y;
            s * s + o * o > l.b2_maxTranslationSquared && (i.m_linearVelocity.Normalize(), i.m_linearVelocity.x *= l.b2_maxTranslation * e.inv_dt, i.m_linearVelocity.y *= l.b2_maxTranslation * e.inv_dt);
            var u = e.dt * i.m_angularVelocity;
            u * u > l.b2_maxRotationSquared && (i.m_angularVelocity < 0 ? i.m_angularVelocity = -l.b2_maxRotation * e.inv_dt : i.m_angularVelocity = l.b2_maxRotation * e.inv_dt), i.m_sweep.c0.SetV(i.m_sweep.c), i.m_sweep.a0 = i.m_sweep.a, i.m_sweep.c.x += e.dt * i.m_linearVelocity.x, i.m_sweep.c.y += e.dt * i.m_linearVelocity.y, i.m_sweep.a += e.dt * i.m_angularVelocity, i.SynchronizeTransform()
        }
        var a = .75;
        for (t = 0; t < e.positionIterations; ++t) {
            var f = r.SolvePositionConstraints(a), c = !0;
            for (n = 0; n < this.m_jointCount; ++n) {
                var h = this.m_joints[n].SolvePositionConstraints(l.b2_contactBaumgarte);
                c = c && h
            }
            if (f && c)break
        }
        this.Report(r.m_constraints)
    },it.prototype.Report = function (e) {
        if (this.m_listener == null)return;
        for (var t = 0; t < this.m_contactCount; ++t) {
            var n = this.m_contacts[t], r = e[t];
            for (var i = 0; i < r.pointCount; ++i)it.s_impulse.normalImpulses[i] = r.points[i].normalImpulse, it.s_impulse.tangentImpulses[i] = r.points[i].tangentImpulse;
            this.m_listener.PostSolve(n, it.s_impulse)
        }
    },it.prototype.AddBody = function (e) {
        e.m_islandIndex = this.m_bodyCount, this.m_bodies[this.m_bodyCount++] = e
    },it.prototype.AddContact = function (e) {
        this.m_contacts[this.m_contactCount++] = e
    },it.prototype.AddJoint = function (e) {
        this.m_joints[this.m_jointCount++] = e
    },Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2Island.s_impulse = new Q
    }),st.b2TimeStep = function () {
    },st.prototype.Set = function (e) {
        this.dt = e.dt, this.inv_dt = e.inv_dt, this.positionIterations = e.positionIterations, this.velocityIterations = e.velocityIterations, this.warmStarting = e.warmStarting
    },ot.b2World = function () {
        this.s_stack = new Vector, this.m_contactManager = new Y, this.m_contactSolver = new vt, this.m_island = new it
    },ot.prototype.b2World = function (e, t) {
        this.m_destructionListener = null, this.m_debugDraw = null, this.m_bodyList = null, this.m_contactList = null, this.m_jointList = null, this.m_controllerList = null, this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0, this.m_controllerCount = 0, ot.m_warmStarting = !0, ot.m_continuousPhysics = !0, this.m_allowSleep = t, this.m_gravity = e, this.m_inv_dt0 = 0, this.m_contactManager.m_world = this;
        var n = new J;
        this.m_groundBody = this.CreateBody(n)
    },ot.prototype.SetDestructionListener = function (e) {
        this.m_destructionListener = e
    },ot.prototype.SetContactFilter = function (e) {
        this.m_contactManager.m_contactFilter = e
    },ot.prototype.SetContactListener = function (e) {
        this.m_contactManager.m_contactListener = e
    },ot.prototype.SetDebugDraw = function (e) {
        this.m_debugDraw = e
    },ot.prototype.SetBroadPhase = function (e) {
        var t = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = e;
        for (var n = this.m_bodyList; n; n = n.m_next)for (var r = n.m_fixtureList; r; r = r.m_next)r.m_proxy = e.CreateProxy(t.GetFatAABB(r.m_proxy), r)
    },ot.prototype.Validate = function () {
        this.m_contactManager.m_broadPhase.Validate()
    },ot.prototype.GetProxyCount = function () {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
    },ot.prototype.CreateBody = function (e) {
        if (this.IsLocked() == 1)return null;
        var t = new $(e, this);
        return t.m_prev = null, t.m_next = this.m_bodyList, this.m_bodyList && (this.m_bodyList.m_prev = t), this.m_bodyList = t, ++this.m_bodyCount, t
    },ot.prototype.DestroyBody = function (e) {
        if (this.IsLocked() == 1)return;
        var t = e.m_jointList;
        while (t) {
            var n = t;
            t = t.next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(n.joint), this.DestroyJoint(n.joint)
        }
        var r = e.m_controllerList;
        while (r) {
            var i = r;
            r = r.nextController, i.controller.RemoveBody(e)
        }
        var s = e.m_contactList;
        while (s) {
            var o = s;
            s = s.next, this.m_contactManager.Destroy(o.contact)
        }
        e.m_contactList = null;
        var u = e.m_fixtureList;
        while (u) {
            var a = u;
            u = u.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(a), a.DestroyProxy(this.m_contactManager.m_broadPhase), a.Destroy()
        }
        e.m_fixtureList = null, e.m_fixtureCount = 0, e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), e == this.m_bodyList && (this.m_bodyList = e.m_next), --this.m_bodyCount
    },ot.prototype.CreateJoint = function (e) {
        var t = Ot.Create(e, null);
        t.m_prev = null, t.m_next = this.m_jointList, this.m_jointList && (this.m_jointList.m_prev = t), this.m_jointList = t, ++this.m_jointCount, t.m_edgeA.joint = t, t.m_edgeA.other = t.m_bodyB, t.m_edgeA.prev = null, t.m_edgeA.next = t.m_bodyA.m_jointList, t.m_bodyA.m_jointList && (t.m_bodyA.m_jointList.prev = t.m_edgeA), t.m_bodyA.m_jointList = t.m_edgeA, t.m_edgeB.joint = t, t.m_edgeB.other = t.m_bodyA, t.m_edgeB.prev = null, t.m_edgeB.next = t.m_bodyB.m_jointList, t.m_bodyB.m_jointList && (t.m_bodyB.m_jointList.prev = t.m_edgeB), t.m_bodyB.m_jointList = t.m_edgeB;
        var n = e.bodyA, r = e.bodyB;
        if (e.collideConnected == 0) {
            var i = r.GetContactList();
            while (i)i.other == n && i.contact.FlagForFiltering(), i = i.next
        }
        return t
    },ot.prototype.DestroyJoint = function (e) {
        var t = e.m_collideConnected;
        e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), e == this.m_jointList && (this.m_jointList = e.m_next);
        var n = e.m_bodyA, r = e.m_bodyB;
        n.SetAwake(!0), r.SetAwake(!0), e.m_edgeA.prev && (e.m_edgeA.prev.next = e.m_edgeA.next), e.m_edgeA.next && (e.m_edgeA.next.prev = e.m_edgeA.prev), e.m_edgeA == n.m_jointList && (n.m_jointList = e.m_edgeA.next), e.m_edgeA.prev = null, e.m_edgeA.next = null, e.m_edgeB.prev && (e.m_edgeB.prev.next = e.m_edgeB.next), e.m_edgeB.next && (e.m_edgeB.next.prev = e.m_edgeB.prev), e.m_edgeB == r.m_jointList && (r.m_jointList = e.m_edgeB.next), e.m_edgeB.prev = null, e.m_edgeB.next = null, Ot.Destroy(e, null), --this.m_jointCount;
        if (t == 0) {
            var i = r.GetContactList();
            while (i)i.other == n && i.contact.FlagForFiltering(), i = i.next
        }
    },ot.prototype.AddController = function (e) {
        return e.m_next = this.m_controllerList, e.m_prev = null, this.m_controllerList = e, e.m_world = this, this.m_controllerCount++, e
    },ot.prototype.RemoveController = function (e) {
        e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), this.m_controllerList == e && (this.m_controllerList = e.m_next), this.m_controllerCount--
    },ot.prototype.CreateController = function (e) {
        if (e.m_world != this)throw Error("Controller can only be a member of one world");
        return e.m_next = this.m_controllerList, e.m_prev = null, this.m_controllerList && (this.m_controllerList.m_prev = e), this.m_controllerList = e, ++this.m_controllerCount, e.m_world = this, e
    },ot.prototype.DestroyController = function (e) {
        e.Clear(), e.m_next && (e.m_next.m_prev = e.m_prev), e.m_prev && (e.m_prev.m_next = e.m_next), e == this.m_controllerList && (this.m_controllerList = e.m_next), --this.m_controllerCount
    },ot.prototype.SetWarmStarting = function (e) {
        ot.m_warmStarting = e
    },ot.prototype.SetContinuousPhysics = function (e) {
        ot.m_continuousPhysics = e
    },ot.prototype.GetBodyCount = function () {
        return this.m_bodyCount
    },ot.prototype.GetJointCount = function () {
        return this.m_jointCount
    },ot.prototype.GetContactCount = function () {
        return this.m_contactCount
    },ot.prototype.SetGravity = function (e) {
        this.m_gravity = e
    },ot.prototype.GetGravity = function () {
        return this.m_gravity
    },ot.prototype.GetGroundBody = function () {
        return this.m_groundBody
    },ot.prototype.Step = function (e, t, n) {
        e === undefined && (e = 0), t === undefined && (t = 0), n === undefined && (n = 0), this.m_flags & ot.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~ot.e_newFixture), this.m_flags |= ot.e_locked;
        var r = ot.s_timestep2;
        r.dt = e, r.velocityIterations = t, r.positionIterations = n, e > 0 ? r.inv_dt = 1 / e : r.inv_dt = 0, r.dtRatio = this.m_inv_dt0 * e, r.warmStarting = ot.m_warmStarting, this.m_contactManager.Collide(), r.dt > 0 && this.Solve(r), ot.m_continuousPhysics && r.dt > 0 && this.SolveTOI(r), r.dt > 0 && (this.m_inv_dt0 = r.inv_dt), this.m_flags &= ~ot.e_locked
    },ot.prototype.ClearForces = function () {
        for (var e = this.m_bodyList; e; e = e.m_next)e.m_force.SetZero(), e.m_torque = 0
    },ot.prototype.DrawDebugData = function () {
        if (this.m_debugDraw == null)return;
        this.m_debugDraw.m_sprite.graphics.clear();
        var e = this.m_debugDraw.GetFlags(), t = 0, n, r, i, s, u, f = new o, l = new o, h = new o, p, d = new c, v = new c, m = [new o, new o, new o, new o], g = new a(0, 0, 0);
        if (e & Z.e_shapeBit)for (n = this.m_bodyList; n; n = n.m_next) {
            p = n.m_xf;
            for (r = n.GetFixtureList(); r; r = r.m_next)i = r.GetShape(), n.IsActive() == 0 ? (g.Set(.5, .5, .3), this.DrawShape(i, p, g)) : n.GetType() == $.b2_staticBody ? (g.Set(.5, .9, .5), this.DrawShape(i, p, g)) : n.GetType() == $.b2_kinematicBody ? (g.Set(.5, .5, .9), this.DrawShape(i, p, g)) : n.IsAwake() == 0 ? (g.Set(.6, .6, .6), this.DrawShape(i, p, g)) : (g.Set(.9, .7, .7), this.DrawShape(i, p, g))
        }
        if (e & Z.e_jointBit)for (s = this.m_jointList; s; s = s.m_next)this.DrawJoint(s);
        if (e & Z.e_controllerBit)for (var y = this.m_controllerList; y; y = y.m_next)y.Draw(this.m_debugDraw);
        if (e & Z.e_pairBit) {
            g.Set(.3, .9, .9);
            for (var b = this.m_contactManager.m_contactList; b; b = b.GetNext()) {
                var w = b.GetFixtureA(), E = b.GetFixtureB(), S = w.GetAABB().GetCenter(), x = E.GetAABB().GetCenter();
                this.m_debugDraw.DrawSegment(S, x, g)
            }
        }
        if (e & Z.e_aabbBit) {
            u = this.m_contactManager.m_broadPhase, m = [new o, new o, new o, new o];
            for (n = this.m_bodyList; n; n = n.GetNext()) {
                if (n.IsActive() == 0)continue;
                for (r = n.GetFixtureList(); r; r = r.GetNext()) {
                    var T = u.GetFatAABB(r.m_proxy);
                    m[0].Set(T.lowerBound.x, T.lowerBound.y), m[1].Set(T.upperBound.x, T.lowerBound.y), m[2].Set(T.upperBound.x, T.upperBound.y), m[3].Set(T.lowerBound.x, T.upperBound.y), this.m_debugDraw.DrawPolygon(m, 4, g)
                }
            }
        }
        if (e & Z.e_centerOfMassBit)for (n = this.m_bodyList; n; n = n.m_next)p = ot.s_xf, p.R = n.m_xf.R, p.position = n.GetWorldCenter(), this.m_debugDraw.DrawTransform(p)
    },ot.prototype.QueryAABB = function (e, t) {
        function i(t) {
            return e(r.GetUserData(t))
        }

        var n = this, r = n.m_contactManager.m_broadPhase;
        r.Query(i, t)
    },ot.prototype.QueryShape = function (e, t, n) {
        function o(r) {
            var s = i.GetUserData(r)instanceof nt ? i.GetUserData(r) : null;
            return V.TestOverlap(t, n, s.GetShape(), s.GetBody().GetTransform()) ? e(s) : !0
        }

        var r = this;
        n === undefined && (n = null), n == null && (n = new s, n.SetIdentity());
        var i = r.m_contactManager.m_broadPhase, u = new c;
        t.ComputeAABB(u, n), i.Query(o, u)
    },ot.prototype.QueryPoint = function (e, t) {
        function i(n) {
            var i = r.GetUserData(n)instanceof nt ? r.GetUserData(n) : null;
            return i.TestPoint(t) ? e(i) : !0
        }

        var n = this, r = n.m_contactManager.m_broadPhase, s = new c;
        s.lowerBound.Set(t.x - l.b2_linearSlop, t.y - l.b2_linearSlop), s.upperBound.Set(t.x + l.b2_linearSlop, t.y + l.b2_linearSlop), r.Query(i, s)
    },ot.prototype.RayCast = function (e, t, n) {
        function u(r, u) {
            var a = i.GetUserData(u), f = a instanceof nt ? a : null, l = f.RayCast(s, r);
            if (l) {
                var c = s.fraction, h = new o((1 - c) * t.x + c * n.x, (1 - c) * t.y + c * n.y);
                return e(f, h, s.normal, c)
            }
            return r.maxFraction
        }

        var r = this, i = r.m_contactManager.m_broadPhase, s = new A, a = new L(t, n);
        i.RayCast(u, a)
    },ot.prototype.RayCastOne = function (e, t) {
        function i(e, t, n, i) {
            return i === undefined && (i = 0), r = e, i
        }

        var n = this, r;
        return n.RayCast(i, e, t), r
    },ot.prototype.RayCastAll = function (e, t) {
        function i(e, t, n, i) {
            return i === undefined && (i = 0), r[r.length] = e, 1
        }

        var n = this, r = new Vector;
        return n.RayCast(i, e, t), r
    },ot.prototype.GetBodyList = function () {
        return this.m_bodyList
    },ot.prototype.GetJointList = function () {
        return this.m_jointList
    },ot.prototype.GetContactList = function () {
        return this.m_contactList
    },ot.prototype.IsLocked = function () {
        return(this.m_flags & ot.e_locked) > 0
    },ot.prototype.Solve = function (e) {
        var t;
        for (var n = this.m_controllerList; n; n = n.m_next)n.Step(e);
        var r = this.m_island;
        r.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        for (t = this.m_bodyList; t; t = t.m_next)t.m_flags &= ~$.e_islandFlag;
        for (var i = this.m_contactList; i; i = i.m_next)i.m_flags &= ~at.e_islandFlag;
        for (var s = this.m_jointList; s; s = s.m_next)s.m_islandFlag = !1;
        var o = parseInt(this.m_bodyCount), u = this.s_stack;
        for (var a = this.m_bodyList; a; a = a.m_next) {
            if (a.m_flags & $.e_islandFlag)continue;
            if (a.IsAwake() == 0 || a.IsActive() == 0)continue;
            if (a.GetType() == $.b2_staticBody)continue;
            r.Clear();
            var f = 0;
            u[f++] = a, a.m_flags |= $.e_islandFlag;
            while (f > 0) {
                t = u[--f], r.AddBody(t), t.IsAwake() == 0 && t.SetAwake(!0);
                if (t.GetType() == $.b2_staticBody)continue;
                var l;
                for (var c = t.m_contactList; c; c = c.next) {
                    if (c.contact.m_flags & at.e_islandFlag)continue;
                    if (c.contact.IsSensor() == 1 || c.contact.IsEnabled() == 0 || c.contact.IsTouching() == 0)continue;
                    r.AddContact(c.contact), c.contact.m_flags |= at.e_islandFlag, l = c.other;
                    if (l.m_flags & $.e_islandFlag)continue;
                    u[f++] = l, l.m_flags |= $.e_islandFlag
                }
                for (var h = t.m_jointList; h; h = h.next) {
                    if (h.joint.m_islandFlag == 1)continue;
                    l = h.other;
                    if (l.IsActive() == 0)continue;
                    r.AddJoint(h.joint), h.joint.m_islandFlag = !0;
                    if (l.m_flags & $.e_islandFlag)continue;
                    u[f++] = l, l.m_flags |= $.e_islandFlag
                }
            }
            r.Solve(e, this.m_gravity, this.m_allowSleep);
            for (var p = 0; p < r.m_bodyCount; ++p)t = r.m_bodies[p], t.GetType() == $.b2_staticBody && (t.m_flags &= ~$.e_islandFlag)
        }
        for (p = 0; p < u.length; ++p) {
            if (!u[p])break;
            u[p] = null
        }
        for (t = this.m_bodyList; t; t = t.m_next) {
            if (t.IsAwake() == 0 || t.IsActive() == 0)continue;
            if (t.GetType() == $.b2_staticBody)continue;
            t.SynchronizeFixtures()
        }
        this.m_contactManager.FindNewContacts()
    },ot.prototype.SolveTOI = function (e) {
        var t, n, r, i, s, o, u, a = this.m_island;
        a.Initialize(this.m_bodyCount, l.b2_maxTOIContactsPerIsland, l.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        var f = ot.s_queue;
        for (t = this.m_bodyList; t; t = t.m_next)t.m_flags &= ~$.e_islandFlag, t.m_sweep.t0 = 0;
        var c;
        for (c = this.m_contactList; c; c = c.m_next)c.m_flags &= ~(at.e_toiFlag | at.e_islandFlag);
        for (u = this.m_jointList; u; u = u.m_next)u.m_islandFlag = !1;
        for (; ;) {
            var h = null, p = 1;
            for (c = this.m_contactList; c; c = c.m_next) {
                if (c.IsSensor() == 1 || c.IsEnabled() == 0 || c.IsContinuous() == 0)continue;
                var d = 1;
                if (c.m_flags & at.e_toiFlag)d = c.m_toi; else {
                    n = c.m_fixtureA, r = c.m_fixtureB, i = n.m_body, s = r.m_body;
                    if (!(i.GetType() == $.b2_dynamicBody && i.IsAwake() != 0 || s.GetType() == $.b2_dynamicBody && s.IsAwake() != 0))continue;
                    var v = i.m_sweep.t0;
                    i.m_sweep.t0 < s.m_sweep.t0 ? (v = s.m_sweep.t0, i.m_sweep.Advance(v)) : s.m_sweep.t0 < i.m_sweep.t0 && (v = i.m_sweep.t0, s.m_sweep.Advance(v)), d = c.ComputeTOI(i.m_sweep, s.m_sweep), l.b2Assert(0 <= d && d <= 1), d > 0 && d < 1 && (d = (1 - d) * v + d, d > 1 && (d = 1)), c.m_toi = d, c.m_flags |= at.e_toiFlag
                }
                Box2D.MIN_VALUE < d && d < p && (h = c, p = d)
            }
            if (h == null || 1 - 100 * Box2D.MIN_VALUE < p)break;
            n = h.m_fixtureA, r = h.m_fixtureB, i = n.m_body, s = r.m_body, ot.s_backupA.Set(i.m_sweep), ot.s_backupB.Set(s.m_sweep), i.Advance(p), s.Advance(p), h.Update(this.m_contactManager.m_contactListener), h.m_flags &= ~at.e_toiFlag;
            if (h.IsSensor() == 1 || h.IsEnabled() == 0) {
                i.m_sweep.Set(ot.s_backupA), s.m_sweep.Set(ot.s_backupB), i.SynchronizeTransform(), s.SynchronizeTransform();
                continue
            }
            if (h.IsTouching() == 0)continue;
            var m = i;
            m.GetType() != $.b2_dynamicBody && (m = s), a.Clear();
            var g = 0, y = 0;
            f[g + y++] = m, m.m_flags |= $.e_islandFlag;
            while (y > 0) {
                t = f[g++], --y, a.AddBody(t), t.IsAwake() == 0 && t.SetAwake(!0);
                if (t.GetType() != $.b2_dynamicBody)continue;
                for (o = t.m_contactList; o; o = o.next) {
                    if (a.m_contactCount == a.m_contactCapacity)break;
                    if (o.contact.m_flags & at.e_islandFlag)continue;
                    if (o.contact.IsSensor() == 1 || o.contact.IsEnabled() == 0 || o.contact.IsTouching() == 0)continue;
                    a.AddContact(o.contact), o.contact.m_flags |= at.e_islandFlag;
                    var b = o.other;
                    if (b.m_flags & $.e_islandFlag)continue;
                    b.GetType() != $.b2_staticBody && (b.Advance(p), b.SetAwake(!0)), f[g + y] = b, ++y, b.m_flags |= $.e_islandFlag
                }
                for (var w = t.m_jointList; w; w = w.next) {
                    if (a.m_jointCount == a.m_jointCapacity)continue;
                    if (w.joint.m_islandFlag == 1)continue;
                    b = w.other;
                    if (b.IsActive() == 0)continue;
                    a.AddJoint(w.joint), w.joint.m_islandFlag = !0;
                    if (b.m_flags & $.e_islandFlag)continue;
                    b.GetType() != $.b2_staticBody && (b.Advance(p), b.SetAwake(!0)), f[g + y] = b, ++y, b.m_flags |= $.e_islandFlag
                }
            }
            var E = ot.s_timestep;
            E.warmStarting = !1, E.dt = (1 - p) * e.dt, E.inv_dt = 1 / E.dt, E.dtRatio = 0, E.velocityIterations = e.velocityIterations, E.positionIterations = e.positionIterations, a.SolveTOI(E);
            var S = 0;
            for (S = 0; S < a.m_bodyCount; ++S) {
                t = a.m_bodies[S], t.m_flags &= ~$.e_islandFlag;
                if (t.IsAwake() == 0)continue;
                if (t.GetType() != $.b2_dynamicBody)continue;
                t.SynchronizeFixtures();
                for (o = t.m_contactList; o; o = o.next)o.contact.m_flags &= ~at.e_toiFlag
            }
            for (S = 0; S < a.m_contactCount; ++S)c = a.m_contacts[S], c.m_flags &= ~(at.e_toiFlag | at.e_islandFlag);
            for (S = 0; S < a.m_jointCount; ++S)u = a.m_joints[S], u.m_islandFlag = !1;
            this.m_contactManager.FindNewContacts()
        }
    },ot.prototype.DrawJoint = function (e) {
        var t = e.GetBodyA(), n = e.GetBodyB(), r = t.m_xf, i = n.m_xf, s = r.position, o = i.position, u = e.GetAnchorA(), a = e.GetAnchorB(), f = ot.s_jointColor;
        switch (e.m_type) {
            case Ot.e_distanceJoint:
                this.m_debugDraw.DrawSegment(u, a, f);
                break;
            case Ot.e_pulleyJoint:
                var l = e instanceof It ? e : null, c = l.GetGroundAnchorA(), h = l.GetGroundAnchorB();
                this.m_debugDraw.DrawSegment(c, u, f), this.m_debugDraw.DrawSegment(h, a, f), this.m_debugDraw.DrawSegment(c, h, f);
                break;
            case Ot.e_mouseJoint:
                this.m_debugDraw.DrawSegment(u, a, f);
                break;
            default:
                t != this.m_groundBody && this.m_debugDraw.DrawSegment(s, u, f), this.m_debugDraw.DrawSegment(u, a, f), n != this.m_groundBody && this.m_debugDraw.DrawSegment(o, a, f)
        }
    },ot.prototype.DrawShape = function (e, t, n) {
        switch (e.m_type) {
            case V.e_circleShape:
                var i = e instanceof R ? e : null, s = r.MulX(t, i.m_p), o = i.m_radius, u = t.R.col1;
                this.m_debugDraw.DrawSolidCircle(s, o, u, n);
                break;
            case V.e_polygonShape:
                var a = 0, f = e instanceof X ? e : null, l = parseInt(f.GetVertexCount()), c = f.GetVertices(), h = new Vector(l);
                for (a = 0; a < l; ++a)h[a] = r.MulX(t, c[a]);
                this.m_debugDraw.DrawSolidPolygon(h, l, n);
                break;
            case V.e_edgeShape:
                var p = e instanceof z ? e : null;
                this.m_debugDraw.DrawSegment(r.MulX(t, p.GetVertex1()), r.MulX(t, p.GetVertex2()), n)
        }
    },Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2World.s_timestep2 = new st, Box2D.Dynamics.b2World.s_xf = new s, Box2D.Dynamics.b2World.s_backupA = new i, Box2D.Dynamics.b2World.s_backupB = new i, Box2D.Dynamics.b2World.s_timestep = new st, Box2D.Dynamics.b2World.s_queue = new Vector, Box2D.Dynamics.b2World.s_jointColor = new a(.5, .8, .8), Box2D.Dynamics.b2World.e_newFixture = 1, Box2D.Dynamics.b2World.e_locked = 2
    })
}(), function () {
    var e = Box2D.Collision.Shapes.b2CircleShape, t = Box2D.Collision.Shapes.b2EdgeChainDef, n = Box2D.Collision.Shapes.b2EdgeShape, r = Box2D.Collision.Shapes.b2MassData, i = Box2D.Collision.Shapes.b2PolygonShape, s = Box2D.Collision.Shapes.b2Shape, o = Box2D.Dynamics.Contacts.b2CircleContact, u = Box2D.Dynamics.Contacts.b2Contact, a = Box2D.Dynamics.Contacts.b2ContactConstraint, f = Box2D.Dynamics.Contacts.b2ContactConstraintPoint, l = Box2D.Dynamics.Contacts.b2ContactEdge, c = Box2D.Dynamics.Contacts.b2ContactFactory, h = Box2D.Dynamics.Contacts.b2ContactRegister, p = Box2D.Dynamics.Contacts.b2ContactResult, d = Box2D.Dynamics.Contacts.b2ContactSolver, v = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact, m = Box2D.Dynamics.Contacts.b2NullContact, g = Box2D.Dynamics.Contacts.b2PolyAndCircleContact, y = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact, b = Box2D.Dynamics.Contacts.b2PolygonContact, w = Box2D.Dynamics.Contacts.b2PositionSolverManifold, E = Box2D.Dynamics.b2Body, S = Box2D.Dynamics.b2BodyDef, x = Box2D.Dynamics.b2ContactFilter, T = Box2D.Dynamics.b2ContactImpulse, N = Box2D.Dynamics.b2ContactListener, C = Box2D.Dynamics.b2ContactManager, k = Box2D.Dynamics.b2DebugDraw, L = Box2D.Dynamics.b2DestructionListener, A = Box2D.Dynamics.b2FilterData, O = Box2D.Dynamics.b2Fixture, M = Box2D.Dynamics.b2FixtureDef, _ = Box2D.Dynamics.b2Island, D = Box2D.Dynamics.b2TimeStep, P = Box2D.Dynamics.b2World, H = Box2D.Common.b2Color, B = Box2D.Common.b2internal, j = Box2D.Common.b2Settings, F = Box2D.Common.Math.b2Mat22, I = Box2D.Common.Math.b2Mat33, q = Box2D.Common.Math.b2Math, R = Box2D.Common.Math.b2Sweep, U = Box2D.Common.Math.b2Transform, z = Box2D.Common.Math.b2Vec2, W = Box2D.Common.Math.b2Vec3, X = Box2D.Collision.b2AABB, V = Box2D.Collision.b2Bound, $ = Box2D.Collision.b2BoundValues, J = Box2D.Collision.b2Collision, K = Box2D.Collision.b2ContactID, Q = Box2D.Collision.b2ContactPoint, G = Box2D.Collision.b2Distance, Y = Box2D.Collision.b2DistanceInput, Z = Box2D.Collision.b2DistanceOutput, et = Box2D.Collision.b2DistanceProxy, tt = Box2D.Collision.b2DynamicTree, nt = Box2D.Collision.b2DynamicTreeBroadPhase, rt = Box2D.Collision.b2DynamicTreeNode, it = Box2D.Collision.b2DynamicTreePair, st = Box2D.Collision.b2Manifold, ot = Box2D.Collision.b2ManifoldPoint, ut = Box2D.Collision.b2Point, at = Box2D.Collision.b2RayCastInput, ft = Box2D.Collision.b2RayCastOutput, lt = Box2D.Collision.b2Segment, ct = Box2D.Collision.b2SeparationFunction, ht = Box2D.Collision.b2Simplex, pt = Box2D.Collision.b2SimplexCache, dt = Box2D.Collision.b2SimplexVertex, vt = Box2D.Collision.b2TimeOfImpact, mt = Box2D.Collision.b2TOIInput, gt = Box2D.Collision.b2WorldManifold, yt = Box2D.Collision.ClipVertex, bt = Box2D.Collision.Features, wt = Box2D.Collision.IBroadPhase;
    Box2D.inherit(o, Box2D.Dynamics.Contacts.b2Contact), o.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, o.b2CircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }, o.Create = function (e) {
        return new o
    }, o.Destroy = function (e, t) {
    }, o.prototype.Reset = function (e, t) {
        this.__super.Reset.call(this, e, t)
    }, o.prototype.Evaluate = function () {
        var t = this.m_fixtureA.GetBody(), n = this.m_fixtureB.GetBody();
        J.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape()instanceof e ? this.m_fixtureA.GetShape() : null, t.m_xf, this.m_fixtureB.GetShape()instanceof e ? this.m_fixtureB.GetShape() : null, n.m_xf)
    }, u.b2Contact = function () {
        this.m_nodeA = new l, this.m_nodeB = new l, this.m_manifold = new st, this.m_oldManifold = new st
    }, u.prototype.GetManifold = function () {
        return this.m_manifold
    }, u.prototype.GetWorldManifold = function (e) {
        var t = this.m_fixtureA.GetBody(), n = this.m_fixtureB.GetBody(), r = this.m_fixtureA.GetShape(), i = this.m_fixtureB.GetShape();
        e.Initialize(this.m_manifold, t.GetTransform(), r.m_radius, n.GetTransform(), i.m_radius)
    }, u.prototype.IsTouching = function () {
        return(this.m_flags & u.e_touchingFlag) == u.e_touchingFlag
    }, u.prototype.IsContinuous = function () {
        return(this.m_flags & u.e_continuousFlag) == u.e_continuousFlag
    }, u.prototype.SetSensor = function (e) {
        e ? this.m_flags |= u.e_sensorFlag : this.m_flags &= ~u.e_sensorFlag
    }, u.prototype.IsSensor = function () {
        return(this.m_flags & u.e_sensorFlag) == u.e_sensorFlag
    }, u.prototype.SetEnabled = function (e) {
        e ? this.m_flags |= u.e_enabledFlag : this.m_flags &= ~u.e_enabledFlag
    }, u.prototype.IsEnabled = function () {
        return(this.m_flags & u.e_enabledFlag) == u.e_enabledFlag
    }, u.prototype.GetNext = function () {
        return this.m_next
    }, u.prototype.GetFixtureA = function () {
        return this.m_fixtureA
    }, u.prototype.GetFixtureB = function () {
        return this.m_fixtureB
    }, u.prototype.FlagForFiltering = function () {
        this.m_flags |= u.e_filterFlag
    }, u.prototype.b2Contact = function () {
    }, u.prototype.Reset = function (e, t) {
        e === undefined && (e = null), t === undefined && (t = null), this.m_flags = u.e_enabledFlag;
        if (!e || !t) {
            this.m_fixtureA = null, this.m_fixtureB = null;
            return
        }
        if (e.IsSensor() || t.IsSensor())this.m_flags |= u.e_sensorFlag;
        var n = e.GetBody(), r = t.GetBody();
        if (n.GetType() != E.b2_dynamicBody || n.IsBullet() || r.GetType() != E.b2_dynamicBody || r.IsBullet())this.m_flags |= u.e_continuousFlag;
        this.m_fixtureA = e, this.m_fixtureB = t, this.m_manifold.m_pointCount = 0, this.m_prev = null, this.m_next = null, this.m_nodeA.contact = null, this.m_nodeA.prev = null, this.m_nodeA.next = null, this.m_nodeA.other = null, this.m_nodeB.contact = null, this.m_nodeB.prev = null, this.m_nodeB.next = null, this.m_nodeB.other = null
    }, u.prototype.Update = function (e) {
        var t = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold, this.m_manifold = t, this.m_flags |= u.e_enabledFlag;
        var n = !1, r = (this.m_flags & u.e_touchingFlag) == u.e_touchingFlag, i = this.m_fixtureA.m_body, o = this.m_fixtureB.m_body, a = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & u.e_sensorFlag) {
            if (a) {
                var f = this.m_fixtureA.GetShape(), l = this.m_fixtureB.GetShape(), c = i.GetTransform(), h = o.GetTransform();
                n = s.TestOverlap(f, c, l, h)
            }
            this.m_manifold.m_pointCount = 0
        } else {
            i.GetType() != E.b2_dynamicBody || i.IsBullet() || o.GetType() != E.b2_dynamicBody || o.IsBullet() ? this.m_flags |= u.e_continuousFlag : this.m_flags &= ~u.e_continuousFlag;
            if (a) {
                this.Evaluate(), n = this.m_manifold.m_pointCount > 0;
                for (var p = 0; p < this.m_manifold.m_pointCount; ++p) {
                    var d = this.m_manifold.m_points[p];
                    d.m_normalImpulse = 0, d.m_tangentImpulse = 0;
                    var v = d.m_id;
                    for (var m = 0; m < this.m_oldManifold.m_pointCount; ++m) {
                        var g = this.m_oldManifold.m_points[m];
                        if (g.m_id.key == v.key) {
                            d.m_normalImpulse = g.m_normalImpulse, d.m_tangentImpulse = g.m_tangentImpulse;
                            break
                        }
                    }
                }
            } else this.m_manifold.m_pointCount = 0;
            n != r && (i.SetAwake
            (!0), o.SetAwake(!0))
        }
        n ? this.m_flags |= u.e_touchingFlag : this.m_flags &= ~u.e_touchingFlag, r == 0 && n == 1 && e.BeginContact(this), r == 1 && n == 0 && e.EndContact(this), (this.m_flags & u.e_sensorFlag) == 0 && e.PreSolve(this, this.m_oldManifold)
    }, u.prototype.Evaluate = function () {
    }, u.prototype.ComputeTOI = function (e, t) {
        return u.s_input.proxyA.Set(this.m_fixtureA.GetShape()), u.s_input.proxyB.Set(this.m_fixtureB.GetShape()), u.s_input.sweepA = e, u.s_input.sweepB = t, u.s_input.tolerance = j.b2_linearSlop, vt.TimeOfImpact(u.s_input)
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1, Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2, Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4, Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8, Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16, Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32, Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64, Box2D.Dynamics.Contacts.b2Contact.s_input = new mt
    }), a.b2ContactConstraint = function () {
        this.localPlaneNormal = new z, this.localPoint = new z, this.normal = new z, this.normalMass = new F, this.K = new F
    }, a.prototype.b2ContactConstraint = function () {
        this.points = new Vector(j.b2_maxManifoldPoints);
        for (var e = 0; e < j.b2_maxManifoldPoints; e++)this.points[e] = new f
    }, f.b2ContactConstraintPoint = function () {
        this.localPoint = new z, this.rA = new z, this.rB = new z
    }, l.b2ContactEdge = function () {
    }, c.b2ContactFactory = function () {
    }, c.prototype.b2ContactFactory = function (e) {
        this.m_allocator = e, this.InitializeRegisters()
    }, c.prototype.AddType = function (e, t, n, r) {
        n === undefined && (n = 0), r === undefined && (r = 0), this.m_registers[n][r].createFcn = e, this.m_registers[n][r].destroyFcn = t, this.m_registers[n][r].primary = !0, n != r && (this.m_registers[r][n].createFcn = e, this.m_registers[r][n].destroyFcn = t, this.m_registers[r][n].primary = !1)
    }, c.prototype.InitializeRegisters = function () {
        this.m_registers = new Vector(s.e_shapeTypeCount);
        for (var e = 0; e < s.e_shapeTypeCount; e++) {
            this.m_registers[e] = new Vector(s.e_shapeTypeCount);
            for (var t = 0; t < s.e_shapeTypeCount; t++)this.m_registers[e][t] = new h
        }
        this.AddType(o.Create, o.Destroy, s.e_circleShape, s.e_circleShape), this.AddType(g.Create, g.Destroy, s.e_polygonShape, s.e_circleShape), this.AddType(b.Create, b.Destroy, s.e_polygonShape, s.e_polygonShape), this.AddType(v.Create, v.Destroy, s.e_edgeShape, s.e_circleShape), this.AddType(y.Create, y.Destroy, s.e_polygonShape, s.e_edgeShape)
    }, c.prototype.Create = function (e, t) {
        var n = parseInt(e.GetType()), r = parseInt(t.GetType()), i = this.m_registers[n][r], s;
        if (i.pool)return s = i.pool, i.pool = s.m_next, i.poolCount--, s.Reset(e, t), s;
        var o = i.createFcn;
        return o != null ? i.primary ? (s = o(this.m_allocator), s.Reset(e, t), s) : (s = o(this.m_allocator), s.Reset(t, e), s) : null
    }, c.prototype.Destroy = function (e) {
        e.m_manifold.m_pointCount > 0 && (e.m_fixtureA.m_body.SetAwake(!0), e.m_fixtureB.m_body.SetAwake(!0));
        var t = parseInt(e.m_fixtureA.GetType()), n = parseInt(e.m_fixtureB.GetType()), r = this.m_registers[t][n];
        r.poolCount++, e.m_next = r.pool, r.pool = e;
        var i = r.destroyFcn;
        i(e, this.m_allocator)
    }, h.b2ContactRegister = function () {
    }, p.b2ContactResult = function () {
        this.position = new z, this.normal = new z, this.id = new K
    }, d.b2ContactSolver = function () {
        this.m_step = new D, this.m_constraints = new Vector
    }, d.prototype.b2ContactSolver = function () {
    }, d.prototype.Initialize = function (e, t, n, r) {
        n === undefined && (n = 0);
        var i;
        this.m_step.Set(e), this.m_allocator = r;
        var s = 0, o, u;
        this.m_constraintCount = n;
        while (this.m_constraints.length < this.m_constraintCount)this.m_constraints[this.m_constraints.length] = new a;
        for (s = 0; s < n; ++s) {
            i = t[s];
            var f = i.m_fixtureA, l = i.m_fixtureB, c = f.m_shape, h = l.m_shape, p = c.m_radius, v = h.m_radius, m = f.m_body, g = l.m_body, y = i.GetManifold(), b = j.b2MixFriction(f.GetFriction(), l.GetFriction()), w = j.b2MixRestitution(f.GetRestitution(), l.GetRestitution()), E = m.m_linearVelocity.x, S = m.m_linearVelocity.y, x = g.m_linearVelocity.x, T = g.m_linearVelocity.y, N = m.m_angularVelocity, C = g.m_angularVelocity;
            j.b2Assert(y.m_pointCount > 0), d.s_worldManifold.Initialize(y, m.m_xf, p, g.m_xf, v);
            var k = d.s_worldManifold.m_normal.x, L = d.s_worldManifold.m_normal.y, A = this.m_constraints[s];
            A.bodyA = m, A.bodyB = g, A.manifold = y, A.normal.x = k, A.normal.y = L, A.pointCount = y.m_pointCount, A.friction = b, A.restitution = w, A.localPlaneNormal.x = y.m_localPlaneNormal.x, A.localPlaneNormal.y = y.m_localPlaneNormal.y, A.localPoint.x = y.m_localPoint.x, A.localPoint.y = y.m_localPoint.y, A.radius = p + v, A.type = y.m_type;
            for (var O = 0; O < A.pointCount; ++O) {
                var M = y.m_points[O], _ = A.points[O];
                _.normalImpulse = M.m_normalImpulse, _.tangentImpulse = M.m_tangentImpulse, _.localPoint.SetV(M.m_localPoint);
                var D = _.rA.x = d.s_worldManifold.m_points[O].x - m.m_sweep.c.x, P = _.rA.y = d.s_worldManifold.m_points[O].y - m.m_sweep.c.y, H = _.rB.x = d.s_worldManifold.m_points[O].x - g.m_sweep.c.x, B = _.rB.y = d.s_worldManifold.m_points[O].y - g.m_sweep.c.y, F = D * L - P * k, I = H * L - B * k;
                F *= F, I *= I;
                var q = m.m_invMass + g.m_invMass + m.m_invI * F + g.m_invI * I;
                _.normalMass = 1 / q;
                var R = m.m_mass * m.m_invMass + g.m_mass * g.m_invMass;
                R += m.m_mass * m.m_invI * F + g.m_mass * g.m_invI * I, _.equalizedMass = 1 / R;
                var U = L, z = -k, W = D * z - P * U, X = H * z - B * U;
                W *= W, X *= X;
                var V = m.m_invMass + g.m_invMass + m.m_invI * W + g.m_invI * X;
                _.tangentMass = 1 / V, _.velocityBias = 0;
                var $ = x + -C * B - E - -N * P, J = T + C * H - S - N * D, K = A.normal.x * $ + A.normal.y * J;
                K < -j.b2_velocityThreshold && (_.velocityBias += -A.restitution * K)
            }
            if (A.pointCount == 2) {
                var Q = A.points[0], G = A.points[1], Y = m.m_invMass, Z = m.m_invI, et = g.m_invMass, tt = g.m_invI, nt = Q.rA.x * L - Q.rA.y * k, rt = Q.rB.x * L - Q.rB.y * k, it = G.rA.x * L - G.rA.y * k, st = G.rB.x * L - G.rB.y * k, ot = Y + et + Z * nt * nt + tt * rt * rt, ut = Y + et + Z * it * it + tt * st * st, at = Y + et + Z * nt * it + tt * rt * st, ft = 100;
                ot * ot < ft * (ot * ut - at * at) ? (A.K.col1.Set(ot, at), A.K.col2.Set(at, ut), A.K.GetInverse(A.normalMass)) : A.pointCount = 1
            }
        }
    }, d.prototype.InitVelocityConstraints = function (e) {
        var t, n, r;
        for (var i = 0; i < this.m_constraintCount; ++i) {
            var s = this.m_constraints[i], o = s.bodyA, u = s.bodyB, a = o.m_invMass, f = o.m_invI, l = u.m_invMass, c = u.m_invI, h = s.normal.x, p = s.normal.y, d = p, v = -h, m = 0, g = 0, y = 0;
            if (e.warmStarting) {
                y = s.pointCount;
                for (g = 0; g < y; ++g) {
                    var b = s.points[g];
                    b.normalImpulse *= e.dtRatio, b.tangentImpulse *= e.dtRatio;
                    var w = b.normalImpulse * h + b.tangentImpulse * d, E = b.normalImpulse * p + b.tangentImpulse * v;
                    o.m_angularVelocity -= f * (b.rA.x * E - b.rA.y * w), o.m_linearVelocity.x -= a * w, o.m_linearVelocity.y -= a * E, u.m_angularVelocity += c * (b.rB.x * E - b.rB.y * w), u.m_linearVelocity.x += l * w, u.m_linearVelocity.y += l * E
                }
            } else {
                y = s.pointCount;
                for (g = 0; g < y; ++g) {
                    var S = s.points[g];
                    S.normalImpulse = 0, S.tangentImpulse = 0
                }
            }
        }
    }, d.prototype.SolveVelocityConstraints = function () {
        var e = 0, t, n = 0, r = 0, i = 0, s = 0, o = 0, u = 0, a = 0, f = 0, l = 0, c = 0, h = 0, p = 0, d = 0, v = 0, m = 0, g = 0, y = 0, b = 0, w = 0, E, S;
        for (var x = 0; x < this.m_constraintCount; ++x) {
            var T = this.m_constraints[x], N = T.bodyA, C = T.bodyB, k = N.m_angularVelocity, L = C.m_angularVelocity, A = N.m_linearVelocity, O = C.m_linearVelocity, M = N.m_invMass, _ = N.m_invI, D = C.m_invMass, P = C.m_invI, H = T.normal.x, B = T.normal.y, j = B, F = -H, I = T.friction, R = 0;
            for (e = 0; e < T.pointCount; e++)t = T.points[e], o = O.x - L * t.rB.y - A.x + k * t.rA.y, u = O.y + L * t.rB.x - A.y - k * t.rA.x, f = o * j + u * F, l = t.tangentMass * -f, c = I * t.normalImpulse, h = q.Clamp(t.tangentImpulse + l, -c, c), l = h - t.tangentImpulse, p = l * j, d = l * F, A.x -= M * p, A.y -= M * d, k -= _ * (t.rA.x * d - t.rA.y * p), O.x += D * p, O.y += D * d, L += P * (t.rB.x * d - t.rB.y * p), t.tangentImpulse = h;
            var U = parseInt(T.pointCount);
            if (T.pointCount == 1)t = T.points[0], o = O.x + -L * t.rB.y - A.x - -k * t.rA.y, u = O.y + L * t.rB.x - A.y - k * t.rA.x, a = o * H + u * B, l = -t.normalMass * (a - t.velocityBias), h = t.normalImpulse + l, h = h > 0 ? h : 0, l = h - t.normalImpulse, p = l * H, d = l * B, A.x -= M * p, A.y -= M * d, k -= _ * (t.rA.x * d - t.rA.y * p), O.x += D * p, O.y += D * d, L += P * (t.rB.x * d - t.rB.y * p), t.normalImpulse = h; else {
                var z = T.points[0], W = T.points[1], X = z.normalImpulse, V = W.normalImpulse, $ = O.x - L * z.rB.y - A.x + k * z.rA.y, J = O.y + L * z.rB.x - A.y - k * z.rA.x, K = O.x - L * W.rB.y - A.x + k * W.rA.y, Q = O.y + L * W.rB.x - A.y - k * W.rA.x, G = $ * H + J * B, Y = K * H + Q * B, Z = G - z.velocityBias, et = Y - W.velocityBias;
                E = T.K, Z -= E.col1.x * X + E.col2.x * V, et -= E.col1.y * X + E.col2.y * V;
                var tt = .001;
                for (; ;) {
                    E = T.normalMass;
                    var nt = -(E.col1.x * Z + E.col2.x * et), rt = -(E.col1.y * Z + E.col2.y * et);
                    if (nt < 0 || rt < 0) {
                        nt = -z.normalMass * Z, rt = 0, G = 0, Y = T.K.col1.y * nt + et;
                        if (nt < 0 || Y < 0) {
                            nt = 0, rt = -W.normalMass * et, G = T.K.col2.x * rt + Z, Y = 0;
                            if (rt < 0 || G < 0) {
                                nt = 0, rt = 0, G = Z, Y = et;
                                if (G < 0 || Y < 0)break;
                                v = nt - X, m = rt - V, g = v * H, y = v * B, b = m * H, w = m * B, A.x -= M * (g + b), A.y -= M * (y + w), k -= _ * (z.rA.x * y - z.rA.y * g + W.rA.x * w - W.rA.y * b), O.x += D * (g + b), O.y += D * (y + w), L += P * (z.rB.x * y - z.rB.y * g + W.rB.x * w - W.rB.y * b), z.normalImpulse = nt, W.normalImpulse = rt;
                                break
                            }
                            v = nt - X, m = rt - V, g = v * H, y = v * B, b = m * H, w = m * B, A.x -= M * (g + b), A.y -= M * (y + w), k -= _ * (z.rA.x * y - z.rA.y * g + W.rA.x * w - W.rA.y * b), O.x += D * (g + b), O.y += D * (y + w), L += P * (z.rB.x * y - z.rB.y * g + W.rB.x * w - W.rB.y * b), z.normalImpulse = nt, W.normalImpulse = rt;
                            break
                        }
                        v = nt - X, m = rt - V, g = v * H, y = v * B, b = m * H, w = m * B, A.x -= M * (g + b), A.y -= M * (y + w), k -= _ * (z.rA.x * y - z.rA.y * g + W.rA.x * w - W.rA.y * b), O.x += D * (g + b), O.y += D * (y + w), L += P * (z.rB.x * y - z.rB.y * g + W.rB.x * w - W.rB.y * b), z.normalImpulse = nt, W.normalImpulse = rt;
                        break
                    }
                    v = nt - X, m = rt - V, g = v * H, y = v * B, b = m * H, w = m * B, A.x -= M * (g + b), A.y -= M * (y + w), k -= _ * (z.rA.x * y - z.rA.y * g + W.rA.x * w - W.rA.y * b), O.x += D * (g + b), O.y += D * (y + w), L += P * (z.rB.x * y - z.rB.y * g + W.rB.x * w - W.rB.y * b), z.normalImpulse = nt, W.normalImpulse = rt;
                    break
                }
            }
            N.m_angularVelocity = k, C.m_angularVelocity = L
        }
    }, d.prototype.FinalizeVelocityConstraints = function () {
        for (var e = 0; e < this.m_constraintCount; ++e) {
            var t = this.m_constraints[e], n = t.manifold;
            for (var r = 0; r < t.pointCount; ++r) {
                var i = n.m_points[r], s = t.points[r];
                i.m_normalImpulse = s.normalImpulse, i.m_tangentImpulse = s.tangentImpulse
            }
        }
    }, d.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t = 0;
        for (var n = 0; n < this.m_constraintCount; n++) {
            var r = this.m_constraints[n], i = r.bodyA, s = r.bodyB, o = i.m_mass * i.m_invMass, u = i.m_mass * i.m_invI, a = s.m_mass * s.m_invMass, f = s.m_mass * s.m_invI;
            d.s_psm.Initialize(r);
            var l = d.s_psm.m_normal;
            for (var c = 0; c < r.pointCount; c++) {
                var h = r.points[c], p = d.s_psm.m_points[c], v = d.s_psm.m_separations[c], m = p.x - i.m_sweep.c.x, g = p.y - i.m_sweep.c.y, y = p.x - s.m_sweep.c.x, b = p.y - s.m_sweep.c.y;
                t = t < v ? t : v;
                var w = q.Clamp(e * (v + j.b2_linearSlop), -j.b2_maxLinearCorrection, 0), E = -h.equalizedMass * w, S = E * l.x, x = E * l.y;
                i.m_sweep.c.x -= o * S, i.m_sweep.c.y -= o * x, i.m_sweep.a -= u * (m * x - g * S), i.SynchronizeTransform(), s.m_sweep.c.x += a * S, s.m_sweep.c.y += a * x, s.m_sweep.a += f * (y * x - b * S), s.SynchronizeTransform()
            }
        }
        return t > -1.5 * j.b2_linearSlop
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new gt, Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new w
    }), Box2D.inherit(v, Box2D.Dynamics.Contacts.b2Contact), v.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, v.b2EdgeAndCircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }, v.Create = function (e) {
        return new v
    }, v.Destroy = function (e, t) {
    }, v.prototype.Reset = function (e, t) {
        this.__super.Reset.call(this, e, t)
    }, v.prototype.Evaluate = function () {
        var t = this.m_fixtureA.GetBody(), r = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape()instanceof n ? this.m_fixtureA.GetShape() : null, t.m_xf, this.m_fixtureB.GetShape()instanceof e ? this.m_fixtureB.GetShape() : null, r.m_xf)
    }, v.prototype.b2CollideEdgeAndCircle = function (e, t, n, r, i) {
    }, Box2D.inherit(m, Box2D.Dynamics.Contacts.b2Contact), m.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, m.b2NullContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }, m.prototype.b2NullContact = function () {
        this.__super.b2Contact.call(this)
    }, m.prototype.Evaluate = function () {
    }, Box2D.inherit(g, Box2D.Dynamics.Contacts.b2Contact), g.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, g.b2PolyAndCircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }, g.Create = function (e) {
        return new g
    }, g.Destroy = function (e, t) {
    }, g.prototype.Reset = function (e, t) {
        this.__super.Reset.call(this, e, t), j.b2Assert(e.GetType() == s.e_polygonShape), j.b2Assert(t.GetType() == s.e_circleShape)
    }, g.prototype.Evaluate = function () {
        var t = this.m_fixtureA.m_body, n = this.m_fixtureB.m_body;
        J.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape()instanceof i ? this.m_fixtureA.GetShape() : null, t.m_xf, this.m_fixtureB.GetShape()instanceof e ? this.m_fixtureB.GetShape() : null, n.m_xf)
    }, Box2D.inherit(y, Box2D.Dynamics.Contacts.b2Contact), y.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, y.b2PolyAndEdgeContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }, y.Create = function (e) {
        return new y
    }, y.Destroy = function (e, t) {
    }, y.prototype.Reset = function (e, t) {
        this.__super.Reset.call(this, e, t), j.b2Assert(e.GetType() == s.e_polygonShape), j.b2Assert(t.GetType() == s.e_edgeShape)
    }, y.prototype.Evaluate = function () {
        var e = this.m_fixtureA.GetBody(), t = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape()instanceof i ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape()instanceof n ? this.m_fixtureB.GetShape() : null, t.m_xf)
    }, y.prototype.b2CollidePolyAndEdge = function (e, t, n, r, i) {
    }, Box2D.inherit(b, Box2D.Dynamics.Contacts.b2Contact), b.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype, b.b2PolygonContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }, b.Create = function (e) {
        return new b
    }, b.Destroy = function (e, t) {
    }, b.prototype.Reset = function (e, t) {
        this.__super.Reset.call(this, e, t)
    }, b.prototype.Evaluate = function () {
        var e = this.m_fixtureA.GetBody(), t = this.m_fixtureB.GetBody();
        J.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape()instanceof i ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape()instanceof i ? this.m_fixtureB.GetShape() : null, t.m_xf)
    }, w.b2PositionSolverManifold = function () {
    }, w.prototype.b2PositionSolverManifold = function () {
        this.m_normal = new z, this.m_separations = new Vector_a2j_Number(j.b2_maxManifoldPoints), this.m_points = new Vector(j.b2_maxManifoldPoints);
        for (var e = 0; e < j.b2_maxManifoldPoints; e++)this.m_points[e] = new z
    }, w.prototype.Initialize = function (e) {
        j.b2Assert(e.pointCount > 0);
        var t = 0, n = 0, r = 0, i, s, o = 0, u = 0;
        switch (e.type) {
            case st.e_circles:
                i = e.bodyA.m_xf.R, s = e.localPoint;
                var a = e.bodyA.m_xf.position.x + (i.col1.x * s.x + i.col2.x * s.y), f = e.bodyA.m_xf.position.y + (i.col1.y * s.x + i.col2.y * s.y);
                i = e.bodyB.m_xf.R, s = e.points[0].localPoint;
                var l = e.bodyB.m_xf.position.x + (i.col1.x * s.x + i.col2.x * s.y), c = e.bodyB.m_xf.position.y + (i.col1.y * s.x + i.col2.y * s.y), h = l - a, p = c - f, d = h * h + p * p;
                if (d > Box2D.MIN_VALUE * Box2D.MIN_VALUE) {
                    var v = Math.sqrt(d);
                    this.m_normal.x = h / v, this.m_normal.y = p / v
                } else this.m_normal.x = 1, this.m_normal.y = 0;
                this.m_points[0].x = .5 * (a + l), this.m_points[0].y = .5 * (f + c), this.m_separations[0] = h * this.m_normal.x + p * this.m_normal.y - e.radius;
                break;
            case st.e_faceA:
                i = e.bodyA.m_xf.R, s = e.localPlaneNormal, this.m_normal.x = i.col1.x * s.x + i.col2.x * s.y, this.m_normal.y = i.col1.y * s.x + i.col2.y * s.y, i = e.bodyA.m_xf.R, s = e.localPoint, o = e.bodyA.m_xf.position.x + (i.col1.x * s.x + i.col2.x * s.y), u = e.bodyA.m_xf.position.y + (i.col1.y * s.x + i.col2.y * s.y), i = e.bodyB.m_xf.R;
                for (t = 0; t < e.pointCount; ++t)s = e.points[t].localPoint, n = e.bodyB.m_xf.position.x + (i.col1.x * s.x + i.col2.x * s.y), r = e.bodyB.m_xf.position.y + (i.col1.y * s.x + i.col2.y * s.y), this.m_separations[t] = (n - o) * this.m_normal.x + (r - u) * this.m_normal.y - e.radius, this.m_points[t].x = n, this.m_points[t].y = r;
                break;
            case st.e_faceB:
                i = e.bodyB.m_xf.R, s = e.localPlaneNormal, this.m_normal.x = i.col1.x * s.x + i.col2.x * s.y, this.m_normal.y = i.col1.y * s.x + i.col2.y * s.y, i = e.bodyB.m_xf.R, s = e.localPoint, o = e.bodyB.m_xf.position.x + (i.col1.x * s.x + i.col2.x * s.y), u = e.bodyB.m_xf.position.y + (i.col1.y * s.x + i.col2.y * s.y), i = e.bodyA.m_xf.R;
                for (t = 0; t < e.pointCount; ++t)s = e.points[t].localPoint, n = e.bodyA.m_xf.position.x + (i.col1.x * s.x + i.col2.x * s.y), r = e.bodyA.m_xf.position.y + (i.col1.y * s.x + i.col2.y * s.y), this.m_separations[t] = (n - o) * this.m_normal.x + (r - u) * this.m_normal.y - e.radius, this.m_points[t].Set(n, r);
                this.m_normal.x *= -1, this.m_normal.y *= -1
        }
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new z, Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new z
    })
}(), function () {
    var e = Box2D.Dynamics.b2Body, t = Box2D.Dynamics.b2BodyDef, n = Box2D.Dynamics.b2ContactFilter, r = Box2D.Dynamics.b2ContactImpulse, i = Box2D.Dynamics.b2ContactListener, s = Box2D.Dynamics.b2ContactManager, o = Box2D.Dynamics.b2DebugDraw, u = Box2D.Dynamics.b2DestructionListener, a = Box2D.Dynamics.b2FilterData, f = Box2D.Dynamics.b2Fixture, l = Box2D.Dynamics.b2FixtureDef, c = Box2D.Dynamics.b2Island, h = Box2D.Dynamics.b2TimeStep, p = Box2D.Dynamics.b2World, d = Box2D.Common.Math.b2Mat22, v = Box2D.Common.Math.b2Mat33, m = Box2D.Common.Math.b2Math, g = Box2D.Common.Math.b2Sweep, y = Box2D.Common.Math.b2Transform, b = Box2D.Common.Math.b2Vec2, w = Box2D.Common.Math.b2Vec3, E = Box2D.Common.b2Color, S = Box2D.Common.b2internal, x = Box2D.Common.b2Settings, T = Box2D.Collision.Shapes.b2CircleShape, N = Box2D.Collision.Shapes.b2EdgeChainDef, C = Box2D.Collision.Shapes.b2EdgeShape, k = Box2D.Collision.Shapes.b2MassData, L = Box2D.Collision.Shapes.b2PolygonShape, A = Box2D.Collision.Shapes.b2Shape, O = Box2D.Dynamics.Controllers.b2BuoyancyController, M = Box2D.Dynamics.Controllers.b2ConstantAccelController, _ = Box2D.Dynamics.Controllers.b2ConstantForceController, D = Box2D.Dynamics.Controllers.b2Controller, P = Box2D.Dynamics.Controllers.b2ControllerEdge, H = Box2D.Dynamics.Controllers.b2GravityController, B = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(O, Box2D.Dynamics.Controllers.b2Controller), O.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, O.b2BuoyancyController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.normal = new b(0, -1), this.offset = 0, this.density = 0, this.velocity = new b(0, 0), this.linearDrag = 2, this.angularDrag = 1, this.useDensity = !1, this.useWorldGravity = !0, this.gravity = null
    }, O.prototype.Step = function (e) {
        if (!this.m_bodyList)return;
        this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy());
        for (var t = this.m_bodyList; t; t = t.nextBody) {
            var n = t.body;
            if (n.IsAwake() == 0)continue;
            var r = new b, i = new b, s = 0, o = 0;
            for (var u = n.GetFixtureList(); u; u = u.GetNext()) {
                var a = new b, f = u.GetShape().ComputeSubmergedArea(this.normal, this.offset, n.GetTransform(), a);
                s += f, r.x += f * a.x, r.y += f * a.y;
                var l = 0;
                this.useDensity ? l = 1 : l = 1, o += f * l, i.x += f * a.x * l, i.y += f * a.y * l
            }
            r.x /= s, r.y /= s, i.x /= o, i.y /= o;
            if (s < Box2D.MIN_VALUE)continue;
            var c = this.gravity.GetNegative();
            c.Multiply(this.density * s), n.ApplyForce(c, i);
            var h = n.GetLinearVelocityFromWorldPoint(r);
            h.Subtract(this.velocity), h.Multiply(-this.linearDrag * s), n.ApplyForce(h, r), n.ApplyTorque(-n.GetInertia() / n.GetMass() * s * n.GetAngularVelocity() * this.angularDrag)
        }
    }, O.prototype.Draw = function (e) {
        var t = 1e3, n = new b, r = new b;
        n.x = this.normal.x * this.offset + this.normal.y * t, n.y = this.normal.y * this.offset - this.normal.x * t, r.x = this.normal.x * this.offset - this.normal.y * t, r.y = this.normal.y * this.offset + this.normal.x * t;
        var i = new E(0, 0, 1);
        e.DrawSegment(n, r, i)
    }, Box2D.inherit(M, Box2D.Dynamics.Controllers.b2Controller), M.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, M.b2ConstantAccelController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.A = new b(0, 0)
    }, M.prototype.Step = function (e) {
        var t = new b(this.A.x * e.dt, this.A.y * e.dt);
        for (var n = this.m_bodyList; n; n = n.nextBody) {
            var r = n.body;
            if (!r.IsAwake())continue;
            r.SetLinearVelocity(new b(r.GetLinearVelocity().x + t.x, r.GetLinearVelocity().y + t.y))
        }
    }, Box2D.inherit(_, Box2D.Dynamics.Controllers.b2Controller), _.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, _.b2ConstantForceController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.F = new b(0, 0)
    }, _.prototype.Step = function (e) {
        for (var t = this.m_bodyList; t; t = t.nextBody) {
            var n = t.body;
            if (!n.IsAwake())continue;
            n.ApplyForce(this.F, n.GetWorldCenter())
        }
    }, D.b2Controller = function () {
    }, D.prototype.Step = function (e) {
    }, D.prototype.Draw = function (e) {
    }, D.prototype.AddBody = function (e) {
        var t = new P;
        t.controller = this, t.body = e, t.nextBody = this.m_bodyList, t.prevBody = null, this.m_bodyList = t, t.nextBody && (t.nextBody.prevBody = t), this.m_bodyCount++, t.nextController = e.m_controllerList, t.prevController = null, e.m_controllerList = t, t.nextController && (t.nextController.prevController = t), e.m_controllerCount++
    }, D.prototype.RemoveBody = function (e) {
        var t = e.m_controllerList;
        while (t && t.controller != this)t = t.nextController;
        t.prevBody && (t.prevBody.nextBody = t.nextBody), t.nextBody && (t.nextBody.prevBody = t.prevBody), t.nextController && (t.nextController.prevController = t.prevController), t.prevController && (t.prevController.nextController = t.nextController), this.m_bodyList == t && (this.m_bodyList = t.nextBody), e.m_controllerList == t && (e.m_controllerList = t.nextController), e.m_controllerCount--, this.m_bodyCount--
    }, D.prototype.Clear = function () {
        while (this.m_bodyList)this.RemoveBody(this.m_bodyList.body)
    }, D.prototype.GetNext = function () {
        return this.m_next
    }, D.prototype.GetWorld = function () {
        return this.m_world
    }, D.prototype.GetBodyList = function () {
        return this.m_bodyList
    }, P.b2ControllerEdge = function () {
    }, Box2D.inherit(H, Box2D.Dynamics.Controllers.b2Controller), H.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, H.b2GravityController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.G = 1, this.invSqr = !0
    }, H.prototype.Step = function (e) {
        var t = null, n = null, r = null, i = 0, s = null, o = null, u = null, a = 0, f = 0, l = 0, c = null;
        if (this.invSqr)for (t = this.m_bodyList; t; t = t.nextBody) {
            n = t.body, r = n.GetWorldCenter(), i = n.GetMass();
            for (s = this.m_bodyList; s != t; s = s.nextBody) {
                o = s.body, u = o.GetWorldCenter(), a = u.x - r.x, f = u.y - r.y, l = a * a + f * f;
                if (l < Box2D.MIN_VALUE)continue;
                c = new b(a, f), c.Multiply(this.G / l / Math.sqrt(l) * i * o.GetMass()), n.IsAwake() && n.ApplyForce(c, r), c.Multiply(-1), o.IsAwake() && o.ApplyForce(c, u)
            }
        } else for (t = this.m_bodyList; t; t = t.nextBody) {
            n = t.body, r = n.GetWorldCenter(), i = n.GetMass();
            for (s = this.m_bodyList; s != t; s = s.nextBody) {
                o = s.body, u = o.GetWorldCenter(), a = u.x - r.x, f = u.y - r.y, l = a * a + f * f;
                if (l < Box2D.MIN_VALUE)continue;
                c = new b(a, f), c.Multiply(this.G / l * i * o.GetMass()), n.IsAwake() && n.ApplyForce(c, r), c.Multiply(-1), o.IsAwake() && o.ApplyForce(c, u)
            }
        }
    }, Box2D.inherit(B, Box2D.Dynamics.Controllers.b2Controller), B.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype, B.b2TensorDampingController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments), this.T = new d, this.maxTimestep = 0
    }, B.prototype.SetAxisAligned = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.T.col1.x = -e, this.T.col1.y = 0, this.T.col2.x = 0, this.T.col2.y = -t, e > 0 || t > 0 ? this.maxTimestep = 1 / Math.max(e, t) : this.maxTimestep = 0
    }, B.prototype.Step = function (e) {
        var t = e.dt;
        if (t <= Box2D.MIN_VALUE)return;
        t > this.maxTimestep && this.maxTimestep > 0 && (t = this.maxTimestep);
        for (var n = this.m_bodyList; n; n = n.nextBody) {
            var r = n.body;
            if (!r.IsAwake())continue;
            var i = r.GetWorldVector(m.MulMV(this.T, r.GetLocalVector(r.GetLinearVelocity())));
            r.SetLinearVelocity(new b(r.GetLinearVelocity().x + i.x * t, r.GetLinearVelocity().y + i.y * t))
        }
    }
}(), function () {
    var e = Box2D.Common.b2Color, t = Box2D.Common.b2internal, n = Box2D.Common.b2Settings, r = Box2D.Common.Math.b2Mat22, i = Box2D.Common.Math.b2Mat33, s = Box2D.Common.Math.b2Math, o = Box2D.Common.Math.b2Sweep, u = Box2D.Common.Math.b2Transform, a = Box2D.Common.Math.b2Vec2, f = Box2D.Common.Math.b2Vec3, l = Box2D.Dynamics.Joints.b2DistanceJoint, c = Box2D.Dynamics.Joints.b2DistanceJointDef, h = Box2D.Dynamics.Joints.b2FrictionJoint, p = Box2D.Dynamics.Joints.b2FrictionJointDef, d = Box2D.Dynamics.Joints.b2GearJoint, v = Box2D.Dynamics.Joints.b2GearJointDef, m = Box2D.Dynamics.Joints.b2Jacobian, g = Box2D.Dynamics.Joints.b2Joint, y = Box2D.Dynamics.Joints.b2JointDef, b = Box2D.Dynamics.Joints.b2JointEdge, w = Box2D.Dynamics.Joints.b2LineJoint, E = Box2D.Dynamics.Joints.b2LineJointDef, S = Box2D.Dynamics.Joints.b2MouseJoint, x = Box2D.Dynamics.Joints.b2MouseJointDef, T = Box2D.Dynamics.Joints.b2PrismaticJoint, N = Box2D.Dynamics.Joints.b2PrismaticJointDef, C = Box2D.Dynamics.Joints.b2PulleyJoint, k = Box2D.Dynamics.Joints.b2PulleyJointDef, L = Box2D.Dynamics.Joints.b2RevoluteJoint, A = Box2D.Dynamics.Joints.b2RevoluteJointDef, O = Box2D.Dynamics.Joints.b2WeldJoint, M = Box2D.Dynamics.Joints.b2WeldJointDef, _ = Box2D.Dynamics.b2Body, D = Box2D.Dynamics.b2BodyDef, P = Box2D.Dynamics.b2ContactFilter, H = Box2D.Dynamics.b2ContactImpulse, B = Box2D.Dynamics.b2ContactListener, j = Box2D.Dynamics.b2ContactManager, F = Box2D.Dynamics.b2DebugDraw, I = Box2D.Dynamics.b2DestructionListener, q = Box2D.Dynamics.b2FilterData, R = Box2D.Dynamics.b2Fixture, U = Box2D.Dynamics.b2FixtureDef, z = Box2D.Dynamics.b2Island, W = Box2D.Dynamics.b2TimeStep, X = Box2D.Dynamics.b2World;
    Box2D.inherit(l, Box2D.Dynamics.Joints.b2Joint), l.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, l.b2DistanceJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchor1 = new a, this.m_localAnchor2 = new a, this.m_u = new a
    }, l.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }, l.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }, l.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_impulse * this.m_u.x, e * this.m_impulse * this.m_u.y)
    }, l.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), 0
    }, l.prototype.GetLength = function () {
        return this.m_length
    }, l.prototype.SetLength = function (e) {
        e === undefined && (e = 0), this.m_length = e
    }, l.prototype.GetFrequency = function () {
        return this.m_frequencyHz
    }, l.prototype.SetFrequency = function (e) {
        e === undefined && (e = 0), this.m_frequencyHz = e
    }, l.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio
    }, l.prototype.SetDampingRatio = function (e) {
        e === undefined && (e = 0), this.m_dampingRatio = e
    }, l.prototype.b2DistanceJoint = function (e) {
        this.__super.b2Joint.call(this, e);
        var t, n = 0, r = 0;
        this.m_localAnchor1.SetV(e.localAnchorA), this.m_localAnchor2.SetV(e.localAnchorB), this.m_length = e.length, this.m_frequencyHz = e.frequencyHz, this.m_dampingRatio = e.dampingRatio, this.m_impulse = 0, this.m_gamma = 0, this.m_bias = 0
    }, l.prototype.InitVelocityConstraints = function (e) {
        var t, r = 0, i = this.m_bodyA, s = this.m_bodyB;
        t = i.m_xf.R;
        var o = this.m_localAnchor1.x - i.m_sweep.localCenter.x, u = this.m_localAnchor1.y - i.m_sweep.localCenter.y;
        r = t.col1.x * o + t.col2.x * u, u = t.col1.y * o + t.col2.y * u, o = r, t = s.m_xf.R;
        var a = this.m_localAnchor2.x - s.m_sweep.localCenter.x, f = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
        r = t.col1.x * a + t.col2.x * f, f = t.col1.y * a + t.col2.y * f, a = r, this.m_u.x = s.m_sweep.c.x + a - i.m_sweep.c.x - o, this.m_u.y = s.m_sweep.c.y + f - i.m_sweep.c.y - u;
        var l = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        l > n.b2_linearSlop ? this.m_u.Multiply(1 / l) : this.m_u.SetZero();
        var c = o * this.m_u.y - u * this.m_u.x, h = a * this.m_u.y - f * this.m_u.x, p = i.m_invMass + i.m_invI * c * c + s.m_invMass + s.m_invI * h * h;
        this.m_mass = p != 0 ? 1 / p : 0;
        if (this.m_frequencyHz > 0) {
            var d = l - this.m_length, v = 2 * Math.PI * this.m_frequencyHz, m = 2 * this.m_mass * this.m_dampingRatio * v, g = this.m_mass * v * v;
            this.m_gamma = e.dt * (m + e.dt * g), this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0, this.m_bias = d * e.dt * g * this.m_gamma, this.m_mass = p + this.m_gamma, this.m_mass = this.m_mass != 0 ? 1 / this.m_mass : 0
        }
        if (e.warmStarting) {
            this.m_impulse *= e.dtRatio;
            var y = this.m_impulse * this.m_u.x, b = this.m_impulse * this.m_u.y;
            i.m_linearVelocity.x -= i.m_invMass * y, i.m_linearVelocity.y -= i.m_invMass * b, i.m_angularVelocity -= i.m_invI * (o * b - u * y), s.m_linearVelocity.x += s.m_invMass * y, s.m_linearVelocity.y += s.m_invMass * b, s.m_angularVelocity += s.m_invI * (a * b - f * y)
        } else this.m_impulse = 0
    }, l.prototype.SolveVelocityConstraints = function (e) {
        var t, n = this.m_bodyA, r = this.m_bodyB;
        t = n.m_xf.R;
        var i = this.m_localAnchor1.x - n.m_sweep.localCenter.x, s = this.m_localAnchor1.y - n.m_sweep.localCenter.y, o = t.col1.x * i + t.col2.x * s;
        s = t.col1.y * i + t.col2.y * s, i = o, t = r.m_xf.R;
        var u = this.m_localAnchor2.x - r.m_sweep.localCenter.x, a = this.m_localAnchor2.y - r.m_sweep.localCenter.y;
        o = t.col1.x * u + t.col2.x * a, a = t.col1.y * u + t.col2.y * a, u = o;
        var f = n.m_linearVelocity.x + -n.m_angularVelocity * s, l = n.m_linearVelocity.y + n.m_angularVelocity * i, c = r.m_linearVelocity.x + -r.m_angularVelocity * a, h = r.m_linearVelocity.y + r.m_angularVelocity * u, p = this.m_u.x * (c - f) + this.m_u.y * (h - l), d = -this.m_mass * (p + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += d;
        var v = d * this.m_u.x, m = d * this.m_u.y;
        n.m_linearVelocity.x -= n.m_invMass * v, n.m_linearVelocity.y -= n.m_invMass * m, n.m_angularVelocity -= n.m_invI * (i * m - s * v), r.m_linearVelocity.x += r.m_invMass * v, r.m_linearVelocity.y += r.m_invMass * m, r.m_angularVelocity += r.m_invI * (u * m - a * v)
    }, l.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t;
        if (this.m_frequencyHz > 0)return!0;
        var r = this.m_bodyA, i = this.m_bodyB;
        t = r.m_xf.R;
        var o = this.m_localAnchor1.x - r.m_sweep.localCenter.x, u = this.m_localAnchor1.y - r.m_sweep.localCenter.y, a = t.col1.x * o + t.col2.x * u;
        u = t.col1.y * o + t.col2.y * u, o = a, t = i.m_xf.R;
        var f = this.m_localAnchor2.x - i.m_sweep.localCenter.x, l = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
        a = t.col1.x * f + t.col2.x * l, l = t.col1.y * f + t.col2.y * l, f = a;
        var c = i.m_sweep.c.x + f - r.m_sweep.c.x - o, h = i.m_sweep.c.y + l - r.m_sweep.c.y - u, p = Math.sqrt(c * c + h * h);
        c /= p, h /= p;
        var d = p - this.m_length;
        d = s.Clamp(d, -n.b2_maxLinearCorrection, n.b2_maxLinearCorrection);
        var v = -this.m_mass * d;
        this.m_u.Set(c, h);
        var m = v * this.m_u.x, g = v * this.m_u.y;
        return r.m_sweep.c.x -= r.m_invMass * m, r.m_sweep.c.y -= r.m_invMass * g, r.m_sweep.a -= r.m_invI * (o * g - u * m), i.m_sweep.c.x += i.m_invMass * m, i.m_sweep.c.y += i.m_invMass * g, i.m_sweep.a += i.m_invI * (f * g - l * m), r.SynchronizeTransform(), i.SynchronizeTransform(), s.Abs(d) < n.b2_linearSlop
    }, Box2D.inherit(c, Box2D.Dynamics.Joints.b2JointDef), c.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, c.b2DistanceJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new a, this.localAnchorB = new a
    }, c.prototype.b2DistanceJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_distanceJoint, this.length = 1, this.frequencyHz = 0, this.dampingRatio = 0
    }, c.prototype.Initialize = function (e, t, n, r) {
        this.bodyA = e, this.bodyB = t, this.localAnchorA.SetV(this.bodyA.GetLocalPoint(n)), this.localAnchorB.SetV(this.bodyB.GetLocalPoint(r));
        var i = r.x - n.x, s = r.y - n.y;
        this.length = Math.sqrt(i * i + s * s), this.frequencyHz = 0, this.dampingRatio = 0
    }, Box2D.inherit(h, Box2D.Dynamics.Joints.b2Joint), h.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, h.b2FrictionJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchorA = new a, this.m_localAnchorB = new a, this.m_linearMass = new r, this.m_linearImpulse = new a
    }, h.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    }, h.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    }, h.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_linearImpulse.x, e * this.m_linearImpulse.y)
    }, h.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), e * this.m_angularImpulse
    }, h.prototype.SetMaxForce = function (e) {
        e === undefined && (e = 0), this.m_maxForce = e
    }, h.prototype.GetMaxForce = function () {
        return this.m_maxForce
    }, h.prototype.SetMaxTorque = function (e) {
        e === undefined && (e = 0), this.m_maxTorque = e
    }, h.prototype.GetMaxTorque = function () {
        return this.m_maxTorque
    }, h.prototype.b2FrictionJoint = function (e) {
        this.__super.b2Joint.call(this, e), this.m_localAnchorA.SetV(e.localAnchorA), this.m_localAnchorB.SetV(e.localAnchorB), this.m_linearMass.SetZero(), this.m_angularMass = 0, this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0, this.m_maxForce = e.maxForce, this.m_maxTorque = e.maxTorque
    }, h.prototype.InitVelocityConstraints = function (e) {
        var t, n = 0, i = this.m_bodyA, s = this.m_bodyB;
        t = i.m_xf.R;
        var o = this.m_localAnchorA.x - i.m_sweep.localCenter.x, u = this.m_localAnchorA.y - i.m_sweep.localCenter.y;
        n = t.col1.x * o + t.col2.x * u, u = t.col1.y * o + t.col2.y * u, o = n, t = s.m_xf.R;
        var a = this.m_localAnchorB.x - s.m_sweep.localCenter.x, f = this.m_localAnchorB.y - s.m_sweep.localCenter.y;
        n = t.col1.x * a + t.col2.x * f, f = t.col1.y * a + t.col2.y * f, a = n;
        var l = i.m_invMass, c = s.m_invMass, h = i.m_invI, p = s.m_invI, d = new r;
        d.col1.x = l + c, d.col2.x = 0, d.col1.y = 0, d.col2.y = l + c, d.col1.x += h * u * u, d.col2.x += -h * o * u, d.col1.y += -h * o * u, d.col2.y += h * o * o, d.col1.x += p * f * f, d.col2.x += -p * a * f, d.col1.y += -p * a * f, d.col2.y += p * a * a, d.GetInverse(this.m_linearMass), this.m_angularMass = h + p, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass);
        if (e.warmStarting) {
            this.m_linearImpulse.x *= e.dtRatio, this.m_linearImpulse.y *= e.dtRatio, this.m_angularImpulse *= e.dtRatio;
            var v = this.m_linearImpulse;
            i.m_linearVelocity.x -= l * v.x, i.m_linearVelocity.y -= l * v.y, i.m_angularVelocity -= h * (o * v.y - u * v.x + this.m_angularImpulse), s.m_linearVelocity.x += c * v.x, s.m_linearVelocity.y += c * v.y, s.m_angularVelocity += p * (a * v.y - f * v.x + this.m_angularImpulse)
        } else this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0
    }, h.prototype.SolveVelocityConstraints = function (e) {
        var t, n = 0, r = this.m_bodyA, i = this.m_bodyB, o = r.m_linearVelocity, u = r.m_angularVelocity, f = i.m_linearVelocity, l = i.m_angularVelocity, c = r.m_invMass, h = i.m_invMass, p = r.m_invI, d = i.m_invI;
        t = r.m_xf.R;
        var v = this.m_localAnchorA.x - r.m_sweep.localCenter.x, m = this.m_localAnchorA.y - r.m_sweep.localCenter.y;
        n = t.col1.x * v + t.col2.x * m, m = t.col1.y * v + t.col2.y * m, v = n, t = i.m_xf.R;
        var g = this.m_localAnchorB.x - i.m_sweep.localCenter.x, y = this.m_localAnchorB.y - i.m_sweep.localCenter.y;
        n = t.col1.x * g + t.col2.x * y, y = t.col1.y * g + t.col2.y * y, g = n;
        var b = 0, w = l - u, E = -this.m_angularMass * w, S = this.m_angularImpulse;
        b = e.dt * this.m_maxTorque, this.m_angularImpulse = s.Clamp(this.m_angularImpulse + E, -b, b), E = this.m_angularImpulse - S, u -= p * E, l += d * E;
        var x = f.x - l * y - o.x + u * m, T = f.y + l * g - o.y - u * v, N = s.MulMV(this.m_linearMass, new a(-x, -T)), C = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(N), b = e.dt * this
            .m_maxForce, this.m_linearImpulse.LengthSquared() > b * b && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(b)), N = s.SubtractVV(this.m_linearImpulse, C), o.x -= c * N.x, o.y -= c * N.y, u -= p * (v * N.y - m * N.x), f.x += h * N.x, f.y += h * N.y, l += d * (g * N.y - y * N.x), r.m_angularVelocity = u, i.m_angularVelocity = l
    }, h.prototype.SolvePositionConstraints = function (e) {
        return e === undefined && (e = 0), !0
    }, Box2D.inherit(p, Box2D.Dynamics.Joints.b2JointDef), p.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, p.b2FrictionJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new a, this.localAnchorB = new a
    }, p.prototype.b2FrictionJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_frictionJoint, this.maxForce = 0, this.maxTorque = 0
    }, p.prototype.Initialize = function (e, t, n) {
        this.bodyA = e, this.bodyB = t, this.localAnchorA.SetV(this.bodyA.GetLocalPoint(n)), this.localAnchorB.SetV(this.bodyB.GetLocalPoint(n))
    }, Box2D.inherit(d, Box2D.Dynamics.Joints.b2Joint), d.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, d.b2GearJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_groundAnchor1 = new a, this.m_groundAnchor2 = new a, this.m_localAnchor1 = new a, this.m_localAnchor2 = new a, this.m_J = new m
    }, d.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }, d.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }, d.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_impulse * this.m_J.linearB.x, e * this.m_impulse * this.m_J.linearB.y)
    }, d.prototype.GetReactionTorque = function (e) {
        e === undefined && (e = 0);
        var t = this.m_bodyB.m_xf.R, n = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x, r = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y, i = t.col1.x * n + t.col2.x * r;
        r = t.col1.y * n + t.col2.y * r, n = i;
        var s = this.m_impulse * this.m_J.linearB.x, o = this.m_impulse * this.m_J.linearB.y;
        return e * (this.m_impulse * this.m_J.angularB - n * o + r * s)
    }, d.prototype.GetRatio = function () {
        return this.m_ratio
    }, d.prototype.SetRatio = function (e) {
        e === undefined && (e = 0), this.m_ratio = e
    }, d.prototype.b2GearJoint = function (e) {
        this.__super.b2Joint.call(this, e);
        var t = parseInt(e.joint1.m_type), n = parseInt(e.joint2.m_type);
        this.m_revolute1 = null, this.m_prismatic1 = null, this.m_revolute2 = null, this.m_prismatic2 = null;
        var r = 0, i = 0;
        this.m_ground1 = e.joint1.GetBodyA(), this.m_bodyA = e.joint1.GetBodyB(), t == g.e_revoluteJoint ? (this.m_revolute1 = e.joint1 instanceof L ? e.joint1 : null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), r = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = e.joint1 instanceof T ? e.joint1 : null, this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), r = this.m_prismatic1.GetJointTranslation()), this.m_ground2 = e.joint2.GetBodyA(), this.m_bodyB = e.joint2.GetBodyB(), n == g.e_revoluteJoint ? (this.m_revolute2 = e.joint2 instanceof L ? e.joint2 : null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), i = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = e.joint2 instanceof T ? e.joint2 : null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), i = this.m_prismatic2.GetJointTranslation()), this.m_ratio = e.ratio, this.m_constant = r + this.m_ratio * i, this.m_impulse = 0
    }, d.prototype.InitVelocityConstraints = function (e) {
        var t = this.m_ground1, n = this.m_ground2, r = this.m_bodyA, i = this.m_bodyB, s = 0, o = 0, u = 0, a = 0, f, l, c = 0, h = 0, p = 0;
        this.m_J.SetZero(), this.m_revolute1 ? (this.m_J.angularA = -1, p += r.m_invI) : (f = t.m_xf.R, l = this.m_prismatic1.m_localXAxis1, s = f.col1.x * l.x + f.col2.x * l.y, o = f.col1.y * l.x + f.col2.y * l.y, f = r.m_xf.R, u = this.m_localAnchor1.x - r.m_sweep.localCenter.x, a = this.m_localAnchor1.y - r.m_sweep.localCenter.y, h = f.col1.x * u + f.col2.x * a, a = f.col1.y * u + f.col2.y * a, u = h, c = u * o - a * s, this.m_J.linearA.Set(-s, -o), this.m_J.angularA = -c, p += r.m_invMass + r.m_invI * c * c), this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, p += this.m_ratio * this.m_ratio * i.m_invI) : (f = n.m_xf.R, l = this.m_prismatic2.m_localXAxis1, s = f.col1.x * l.x + f.col2.x * l.y, o = f.col1.y * l.x + f.col2.y * l.y, f = i.m_xf.R, u = this.m_localAnchor2.x - i.m_sweep.localCenter.x, a = this.m_localAnchor2.y - i.m_sweep.localCenter.y, h = f.col1.x * u + f.col2.x * a, a = f.col1.y * u + f.col2.y * a, u = h, c = u * o - a * s, this.m_J.linearB.Set(-this.m_ratio * s, -this.m_ratio * o), this.m_J.angularB = -this.m_ratio * c, p += this.m_ratio * this.m_ratio * (i.m_invMass + i.m_invI * c * c)), this.m_mass = p > 0 ? 1 / p : 0, e.warmStarting ? (r.m_linearVelocity.x += r.m_invMass * this.m_impulse * this.m_J.linearA.x, r.m_linearVelocity.y += r.m_invMass * this.m_impulse * this.m_J.linearA.y, r.m_angularVelocity += r.m_invI * this.m_impulse * this.m_J.angularA, i.m_linearVelocity.x += i.m_invMass * this.m_impulse * this.m_J.linearB.x, i.m_linearVelocity.y += i.m_invMass * this.m_impulse * this.m_J.linearB.y, i.m_angularVelocity += i.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
    }, d.prototype.SolveVelocityConstraints = function (e) {
        var t = this.m_bodyA, n = this.m_bodyB, r = this.m_J.Compute(t.m_linearVelocity, t.m_angularVelocity, n.m_linearVelocity, n.m_angularVelocity), i = -this.m_mass * r;
        this.m_impulse += i, t.m_linearVelocity.x += t.m_invMass * i * this.m_J.linearA.x, t.m_linearVelocity.y += t.m_invMass * i * this.m_J.linearA.y, t.m_angularVelocity += t.m_invI * i * this.m_J.angularA, n.m_linearVelocity.x += n.m_invMass * i * this.m_J.linearB.x, n.m_linearVelocity.y += n.m_invMass * i * this.m_J.linearB.y, n.m_angularVelocity += n.m_invI * i * this.m_J.angularB
    }, d.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t = 0, r = this.m_bodyA, i = this.m_bodyB, s = 0, o = 0;
        this.m_revolute1 ? s = this.m_revolute1.GetJointAngle() : s = this.m_prismatic1.GetJointTranslation(), this.m_revolute2 ? o = this.m_revolute2.GetJointAngle() : o = this.m_prismatic2.GetJointTranslation();
        var u = this.m_constant - (s + this.m_ratio * o), a = -this.m_mass * u;
        return r.m_sweep.c.x += r.m_invMass * a * this.m_J.linearA.x, r.m_sweep.c.y += r.m_invMass * a * this.m_J.linearA.y, r.m_sweep.a += r.m_invI * a * this.m_J.angularA, i.m_sweep.c.x += i.m_invMass * a * this.m_J.linearB.x, i.m_sweep.c.y += i.m_invMass * a * this.m_J.linearB.y, i.m_sweep.a += i.m_invI * a * this.m_J.angularB, r.SynchronizeTransform(), i.SynchronizeTransform(), t < n.b2_linearSlop
    }, Box2D.inherit(v, Box2D.Dynamics.Joints.b2JointDef), v.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype, v.b2GearJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
    }, v.prototype.b2GearJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_gearJoint, this.joint1 = null, this.joint2 = null, this.ratio = 1
    }, m.b2Jacobian = function () {
        this.linearA = new a, this.linearB = new a
    }, m.prototype.SetZero = function () {
        this.linearA.SetZero(), this.angularA = 0, this.linearB.SetZero(), this.angularB = 0
    }, m.prototype.Set = function (e, t, n, r) {
        t === undefined && (t = 0), r === undefined && (r = 0), this.linearA.SetV(e), this.angularA = t, this.linearB.SetV(n), this.angularB = r
    }, m.prototype.Compute = function (e, t, n, r) {
        return t === undefined && (t = 0), r === undefined && (r = 0), this.linearA.x * e.x + this.linearA.y * e.y + this.angularA * t + (this.linearB.x * n.x + this.linearB.y * n.y) + this.angularB * r
    }, g.b2Joint = function () {
        this.m_edgeA = new b, this.m_edgeB = new b, this.m_localCenterA = new a, this.m_localCenterB = new a
    }, g.prototype.GetType = function () {
        return this.m_type
    }, g.prototype.GetAnchorA = function () {
        return null
    }, g.prototype.GetAnchorB = function () {
        return null
    }, g.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), null
    }, g.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), 0
    }, g.prototype.GetBodyA = function () {
        return this.m_bodyA
    }, g.prototype.GetBodyB = function () {
        return this.m_bodyB
    }, g.prototype.GetNext = function () {
        return this.m_next
    }, g.prototype.GetUserData = function () {
        return this.m_userData
    }, g.prototype.SetUserData = function (e) {
        this.m_userData = e
    }, g.prototype.IsActive = function () {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
    }, g.Create = function (e, t) {
        var n = null;
        switch (e.type) {
            case g.e_distanceJoint:
                n = new l(e instanceof c ? e : null);
                break;
            case g.e_mouseJoint:
                n = new S(e instanceof x ? e : null);
                break;
            case g.e_prismaticJoint:
                n = new T(e instanceof N ? e : null);
                break;
            case g.e_revoluteJoint:
                n = new L(e instanceof A ? e : null);
                break;
            case g.e_pulleyJoint:
                n = new C(e instanceof k ? e : null);
                break;
            case g.e_gearJoint:
                n = new d(e instanceof v ? e : null);
                break;
            case g.e_lineJoint:
                n = new w(e instanceof E ? e : null);
                break;
            case g.e_weldJoint:
                n = new O(e instanceof M ? e : null);
                break;
            case g.e_frictionJoint:
                n = new h(e instanceof p ? e : null);
                break;
            default:
        }
        return n
    }, g.Destroy = function (e, t) {
    }, g.prototype.b2Joint = function (e) {
        n.b2Assert(e.bodyA != e.bodyB), this.m_type = e.type, this.m_prev = null, this.m_next = null, this.m_bodyA = e.bodyA, this.m_bodyB = e.bodyB, this.m_collideConnected = e.collideConnected, this.m_islandFlag = !1, this.m_userData = e.userData
    }, g.prototype.InitVelocityConstraints = function (e) {
    }, g.prototype.SolveVelocityConstraints = function (e) {
    }, g.prototype.FinalizeVelocityConstraints = function () {
    }, g.prototype.SolvePositionConstraints = function (e) {
        return e === undefined && (e = 0), !1
    }, Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0, Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1, Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2, Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3, Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4, Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5, Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6, Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7, Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8, Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9, Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0, Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1, Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2, Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
    }), y.b2JointDef = function () {
    }, y.prototype.b2JointDef = function () {
        this.type = g.e_unknownJoint, this.userData = null, this.bodyA = null, this.bodyB = null, this.collideConnected = !1
    }, b.b2JointEdge = function () {
    }, Box2D.inherit(w, Box2D.Dynamics.Joints.b2Joint), w.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype, w.b2LineJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchor1 = new a, this.m_localAnchor2 = new a, this.m_localXAxis1 = new a, this.m_localYAxis1 = new a, this.m_axis = new a, this.m_perp = new a, this.m_K = new r, this.m_impulse = new a
    }, w.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }, w.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }, w.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), e * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
    }, w.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), e * this.m_impulse.y
    }, w.prototype.GetJointTranslation = function () {
        var e = this.m_bodyA, t = this.m_bodyB, n, r = e.GetWorldPoint(this.m_localAnchor1), i = t.GetWorldPoint(this.m_localAnchor2), s = i.x - r.x, o = i.y - r.y, u = e.GetWorldVector(this.m_localXAxis1), a = u.x * s + u.y * o;
        return a
    }, w.prototype.GetJointSpeed = function () {
        var e = this.m_bodyA, t = this.m_bodyB, n;
        n = e.m_xf.R;
        var r = this.m_localAnchor1.x - e.m_sweep.localCenter.x, i = this.m_localAnchor1.y - e.m_sweep.localCenter.y, s = n.col1.x * r + n.col2.x * i;
        i = n.col1.y * r + n.col2.y * i, r = s, n = t.m_xf.R;
        var o = this.m_localAnchor2.x - t.m_sweep.localCenter.x, u = this.m_localAnchor2.y - t.m_sweep.localCenter.y;
        s = n.col1.x * o + n.col2.x * u, u = n.col1.y * o + n.col2.y * u, o = s;
        var a = e.m_sweep.c.x + r, f = e.m_sweep.c.y + i, l = t.m_sweep.c.x + o, c = t.m_sweep.c.y + u, h = l - a, p = c - f, d = e.GetWorldVector(this.m_localXAxis1), v = e.m_linearVelocity, m = t.m_linearVelocity, g = e.m_angularVelocity, y = t.m_angularVelocity, b = h * -g * d.y + p * g * d.x + (d.x * (m.x + -y * u - v.x - -g * i) + d.y * (m.y + y * o - v.y - g * r));
        return b
    }, w.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit
    }, w.prototype.EnableLimit = function (e) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableLimit = e
    }, w.prototype.GetLowerLimit = function () {
        return this.m_lowerTranslation
    }, w.prototype.GetUpperLimit = function () {
        return this.m_upperTranslation
    }, w.prototype.SetLimits = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = e, this.m_upperTranslation = t
    }, w.prototype.IsMotorEnabled = function () {
        return this.m_enableMotor
    },w.prototype.EnableMotor = function (e) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = e
    },w.prototype.SetMotorSpeed = function (e) {
        e === undefined && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = e
    },w.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed
    },w.prototype.SetMaxMotorForce = function (e) {
        e === undefined && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorForce = e
    },w.prototype.GetMaxMotorForce = function () {
        return this.m_maxMotorForce
    },w.prototype.GetMotorForce = function () {
        return this.m_motorImpulse
    },w.prototype.b2LineJoint = function (e) {
        this.__super.b2Joint.call(this, e);
        var t, n = 0, r = 0;
        this.m_localAnchor1.SetV(e.localAnchorA), this.m_localAnchor2.SetV(e.localAnchorB), this.m_localXAxis1.SetV(e.localAxisA), this.m_localYAxis1.x = -this.m_localXAxis1.y, this.m_localYAxis1.y = this.m_localXAxis1.x, this.m_impulse.SetZero(), this.m_motorMass = 0, this.m_motorImpulse = 0, this.m_lowerTranslation = e.lowerTranslation, this.m_upperTranslation = e.upperTranslation, this.m_maxMotorForce = e.maxMotorForce, this.m_motorSpeed = e.motorSpeed, this.m_enableLimit = e.enableLimit, this.m_enableMotor = e.enableMotor, this.m_limitState = g.e_inactiveLimit, this.m_axis.SetZero(), this.m_perp.SetZero()
    },w.prototype.InitVelocityConstraints = function (e) {
        var t = this.m_bodyA, r = this.m_bodyB, i, o = 0;
        this.m_localCenterA.SetV(t.GetLocalCenter()), this.m_localCenterB.SetV(r.GetLocalCenter());
        var u = t.GetTransform(), a = r.GetTransform();
        i = t.m_xf.R;
        var f = this.m_localAnchor1.x - this.m_localCenterA.x, l = this.m_localAnchor1.y - this.m_localCenterA.y;
        o = i.col1.x * f + i.col2.x * l, l = i.col1.y * f + i.col2.y * l, f = o, i = r.m_xf.R;
        var c = this.m_localAnchor2.x - this.m_localCenterB.x, h = this.m_localAnchor2.y - this.m_localCenterB.y;
        o = i.col1.x * c + i.col2.x * h, h = i.col1.y * c + i.col2.y * h, c = o;
        var p = r.m_sweep.c.x + c - t.m_sweep.c.x - f, d = r.m_sweep.c.y + h - t.m_sweep.c.y - l;
        this.m_invMassA = t.m_invMass, this.m_invMassB = r.m_invMass, this.m_invIA = t.m_invI, this.m_invIB = r.m_invI, this.m_axis.SetV(s.MulMV(u.R, this.m_localXAxis1)), this.m_a1 = (p + f) * this.m_axis.y - (d + l) * this.m_axis.x, this.m_a2 = c * this.m_axis.y - h * this.m_axis.x, this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2, this.m_motorMass = this.m_motorMass > Box2D.MIN_VALUE ? 1 / this.m_motorMass : 0, this.m_perp.SetV(s.MulMV(u.R, this.m_localYAxis1)), this.m_s1 = (p + f) * this.m_perp.y - (d + l) * this.m_perp.x, this.m_s2 = c * this.m_perp.y - h * this.m_perp.x;
        var v = this.m_invMassA, m = this.m_invMassB, y = this.m_invIA, b = this.m_invIB;
        this.m_K.col1.x = v + m + y * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2, this.m_K.col1.y = y * this.m_s1 * this.m_a1 + b * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = v + m + y * this.m_a1 * this.m_a1 + b * this.m_a2 * this.m_a2;
        if (this.m_enableLimit) {
            var w = this.m_axis.x * p + this.m_axis.y * d;
            s.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * n.b2_linearSlop ? this.m_limitState = g.e_equalLimits : w > this.m_lowerTranslation ? w < this.m_upperTranslation ? (this.m_limitState = g.e_inactiveLimit, this.m_impulse.y = 0) : this.m_limitState != g.e_atUpperLimit && (this.m_limitState = g.e_atUpperLimit, this.m_impulse.y = 0) : this.m_limitState != g.e_atLowerLimit && (this.m_limitState = g.e_atLowerLimit, this.m_impulse.y = 0)
        } else this.m_limitState = g.e_inactiveLimit;
        this.m_enableMotor == 0 && (this.m_motorImpulse = 0);
        if (e.warmStarting) {
            this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio;
            var E = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, S = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, x = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, T = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2;
            t.m_linearVelocity.x -= this.m_invMassA * E, t.m_linearVelocity.y -= this.m_invMassA * S, t.m_angularVelocity -= this.m_invIA * x, r.m_linearVelocity.x += this.m_invMassB * E, r.m_linearVelocity.y += this.m_invMassB * S, r.m_angularVelocity += this.m_invIB * T
        } else this.m_impulse.SetZero(), this.m_motorImpulse = 0
    },w.prototype.SolveVelocityConstraints = function (e) {
        var t = this.m_bodyA, n = this.m_bodyB, r = t.m_linearVelocity, i = t.m_angularVelocity, o = n.m_linearVelocity, u = n.m_angularVelocity, f = 0, l = 0, c = 0, h = 0;
        if (this.m_enableMotor && this.m_limitState != g.e_equalLimits) {
            var p = this.m_axis.x * (o.x - r.x) + this.m_axis.y * (o.y - r.y) + this.m_a2 * u - this.m_a1 * i, d = this.m_motorMass * (this.m_motorSpeed - p), v = this.m_motorImpulse, m = e.dt * this.m_maxMotorForce;
            this.m_motorImpulse = s.Clamp(this.m_motorImpulse + d, -m, m), d = this.m_motorImpulse - v, f = d * this.m_axis.x, l = d * this.m_axis.y, c = d * this.m_a1, h = d * this.m_a2, r.x -= this.m_invMassA * f, r.y -= this.m_invMassA * l, i -= this.m_invIA * c, o.x += this.m_invMassB * f, o.y += this.m_invMassB * l, u += this.m_invIB * h
        }
        var y = this.m_perp.x * (o.x - r.x) + this.m_perp.y * (o.y - r.y) + this.m_s2 * u - this.m_s1 * i;
        if (this.m_enableLimit && this.m_limitState != g.e_inactiveLimit) {
            var b = this.m_axis.x * (o.x - r.x) + this.m_axis.y * (o.y - r.y) + this.m_a2 * u - this.m_a1 * i, w = this.m_impulse.Copy(), E = this.m_K.Solve(new a, -y, -b);
            this.m_impulse.Add(E), this.m_limitState == g.e_atLowerLimit ? this.m_impulse.y = s.Max(this.m_impulse.y, 0) : this.m_limitState == g.e_atUpperLimit && (this.m_impulse.y = s.Min(this.m_impulse.y, 0));
            var S = -y - (this.m_impulse.y - w.y) * this.m_K.col2.x, x = 0;
            this.m_K.col1.x != 0 ? x = S / this.m_K.col1.x + w.x : x = w.x, this.m_impulse.x = x, E.x = this.m_impulse.x - w.x, E.y = this.m_impulse.y - w.y, f = E.x * this.m_perp.x + E.y * this.m_axis.x, l = E.x * this.m_perp.y + E.y * this.m_axis.y, c = E.x * this.m_s1 + E.y * this.m_a1, h = E.x * this.m_s2 + E.y * this.m_a2, r.x -= this.m_invMassA * f, r.y -= this.m_invMassA * l, i -= this.m_invIA * c, o.x += this.m_invMassB * f, o.y += this.m_invMassB * l, u += this.m_invIB * h
        } else {
            var T = 0;
            this.m_K.col1.x != 0 ? T = -y / this.m_K.col1.x : T = 0, this.m_impulse.x += T, f = T * this.m_perp.x, l = T * this.m_perp.y, c = T * this.m_s1, h = T * this.m_s2, r.x -= this.m_invMassA * f, r.y -= this.m_invMassA * l, i -= this.m_invIA * c, o.x += this.m_invMassB * f, o.y += this.m_invMassB * l, u += this.m_invIB * h
        }
        t.m_linearVelocity.SetV(r), t.m_angularVelocity = i, n.m_linearVelocity.SetV(o), n.m_angularVelocity = u
    },w.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t = 0, i = 0, o = this.m_bodyA, u = this.m_bodyB, f = o.m_sweep.c, l = o.m_sweep.a, c = u.m_sweep.c, h = u.m_sweep.a, p, d = 0, v = 0, m = 0, g = 0, y = 0, b = 0, w = 0, E = !1, S = 0, x = r.FromAngle(l), T = r.FromAngle(h);
        p = x;
        var N = this.m_localAnchor1.x - this.m_localCenterA.x, C = this.m_localAnchor1.y - this.m_localCenterA.y;
        d = p.col1.x * N + p.col2.x * C, C = p.col1.y * N + p.col2.y * C, N = d, p = T;
        var k = this.m_localAnchor2.x - this.m_localCenterB.x, L = this.m_localAnchor2.y - this.m_localCenterB.y;
        d = p.col1.x * k + p.col2.x * L, L = p.col1.y * k + p.col2.y * L, k = d;
        var A = c.x + k - f.x - N, O = c.y + L - f.y - C;
        if (this.m_enableLimit) {
            this.m_axis = s.MulMV(x, this.m_localXAxis1), this.m_a1 = (A + N) * this.m_axis.y - (O + C) * this.m_axis.x, this.m_a2 = k * this.m_axis.y - L * this.m_axis.x;
            var M = this.m_axis.x * A + this.m_axis.y * O;
            s.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * n.b2_linearSlop ? (S = s.Clamp(M, -n.b2_maxLinearCorrection, n.b2_maxLinearCorrection), b = s.Abs(M), E = !0) : M > this.m_lowerTranslation ? M >= this.m_upperTranslation && (S = s.Clamp(M - this.m_upperTranslation + n.b2_linearSlop, 0, n.b2_maxLinearCorrection), b = M - this.m_upperTranslation, E = !0) : (S = s.Clamp(M - this.m_lowerTranslation + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0), b = this.m_lowerTranslation - M, E = !0)
        }
        this.m_perp = s.MulMV(x, this.m_localYAxis1), this.m_s1 = (A + N) * this.m_perp.y - (O + C) * this.m_perp.x, this.m_s2 = k * this.m_perp.y - L * this.m_perp.x;
        var _ = new a, D = this.m_perp.x * A + this.m_perp.y * O;
        b = s.Max(b, s.Abs(D)), w = 0;
        if (E)v = this.m_invMassA, m = this.m_invMassB, g = this.m_invIA, y = this.m_invIB, this.m_K.col1.x = v + m + g * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, this.m_K.col1.y = g * this.m_s1 * this.m_a1 + y * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = v + m + g * this.m_a1 * this.m_a1 + y * this.m_a2 * this.m_a2, this.m_K.Solve(_, -D, -S); else {
            v = this.m_invMassA, m = this.m_invMassB, g = this.m_invIA, y = this.m_invIB;
            var P = v + m + g * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, H = 0;
            P != 0 ? H = -D / P : H = 0, _.x = H, _.y = 0
        }
        var B = _.x * this.m_perp.x + _.y * this.m_axis.x, j = _.x * this.m_perp.y + _.y * this.m_axis.y, F = _.x * this.m_s1 + _.y * this.m_a1, I = _.x * this.m_s2 + _.y * this.m_a2;
        return f.x -= this.m_invMassA * B, f.y -= this.m_invMassA * j, l -= this.m_invIA * F, c.x += this.m_invMassB * B, c.y += this.m_invMassB * j, h += this.m_invIB * I, o.m_sweep.a = l, u.m_sweep.a = h, o.SynchronizeTransform(), u.SynchronizeTransform(), b <= n.b2_linearSlop && w <= n.b2_angularSlop
    },Box2D.inherit(E, Box2D.Dynamics.Joints.b2JointDef),E.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype,E.b2LineJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new a, this.localAnchorB = new a, this.localAxisA = new a
    },E.prototype.b2LineJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_lineJoint, this.localAxisA.Set(1, 0), this.enableLimit = !1, this.lowerTranslation = 0, this.upperTranslation = 0, this.enableMotor = !1, this.maxMotorForce = 0, this.motorSpeed = 0
    },E.prototype.Initialize = function (e, t, n, r) {
        this.bodyA = e, this.bodyB = t, this.localAnchorA = this.bodyA.GetLocalPoint(n), this.localAnchorB = this.bodyB.GetLocalPoint(n), this.localAxisA = this.bodyA.GetLocalVector(r)
    },Box2D.inherit(S, Box2D.Dynamics.Joints.b2Joint),S.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype,S.b2MouseJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.K = new r, this.K1 = new r, this.K2 = new r, this.m_localAnchor = new a, this.m_target = new a, this.m_impulse = new a, this.m_mass = new r, this.m_C = new a
    },S.prototype.GetAnchorA = function () {
        return this.m_target
    },S.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
    },S.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_impulse.x, e * this.m_impulse.y)
    },S.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), 0
    },S.prototype.GetTarget = function () {
        return this.m_target
    },S.prototype.SetTarget = function (e) {
        this.m_bodyB.IsAwake() == 0 && this.m_bodyB.SetAwake(!0), this.m_target = e
    },S.prototype.GetMaxForce = function () {
        return this.m_maxForce
    },S.prototype.SetMaxForce = function (e) {
        e === undefined && (e = 0), this.m_maxForce = e
    },S.prototype.GetFrequency = function () {
        return this.m_frequencyHz
    },S.prototype.SetFrequency = function (e) {
        e === undefined && (e = 0), this.m_frequencyHz = e
    },S.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio
    },S.prototype.SetDampingRatio = function (e) {
        e === undefined && (e = 0), this.m_dampingRatio = e
    },S.prototype.b2MouseJoint = function (e) {
        this.__super.b2Joint.call(this, e), this.m_target.SetV(e.target);
        var t = this.m_target.x - this.m_bodyB.m_xf.position.x, n = this.m_target.y - this.m_bodyB.m_xf.position.y, r = this.m_bodyB.m_xf.R;
        this.m_localAnchor.x = t * r.col1.x + n * r.col1.y, this.m_localAnchor.y = t * r.col2.x + n * r.col2.y, this.m_maxForce = e.maxForce, this.m_impulse.SetZero(), this.m_frequencyHz = e.frequencyHz, this.m_dampingRatio = e.dampingRatio, this.m_beta = 0, this.m_gamma = 0
    },S.prototype.InitVelocityConstraints = function (e) {
        var t = this.m_bodyB, n = t.GetMass(), r = 2 * Math.PI * this.m_frequencyHz, i = 2 * n * this.m_dampingRatio * r, s = n * r * r;
        this.m_gamma = e.dt * (i + e.dt * s), this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0, this.m_beta = e.dt * s * this.m_gamma;
        var o;
        o = t.m_xf.R;
        var u = this.m_localAnchor.x - t.m_sweep.localCenter.x, a = this.m_localAnchor.y - t.m_sweep.localCenter.y, f = o.col1.x * u + o.col2.x * a;
        a = o.col1.y * u + o.col2.y * a, u = f;
        var l = t.m_invMass, c = t.m_invI;
        this.K1.col1.x = l, this.K1.col2.x = 0, this.K1.col1.y = 0, this.K1.col2.y = l, this.K2.col1.x = c * a * a, this.K2.col2.x = -c * u * a, this.K2.col1.y = -c * u * a, this.K2.col2.y = c * u * u, this.K.SetM(this.K1), this.K.AddM(this.K2), this.K.col1.x += this.m_gamma, this.K.col2.y += this.m_gamma, this.K.GetInverse(this.m_mass), this.m_C.x = t.m_sweep.c.x + u - this.m_target.x, this.m_C.y = t.m_sweep.c.y + a - this.m_target.y, t.m_angularVelocity *= .98, this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, t.m_linearVelocity.x += l * this.m_impulse.x, t.m_linearVelocity.y += l * this.m_impulse.y, t.m_angularVelocity += c * (u * this.m_impulse.y - a * this.m_impulse.x)
    },S.prototype.SolveVelocityConstraints = function (e) {
        var t = this.m_bodyB, n, r = 0, i = 0;
        n = t.m_xf.R;
        var s = this.m_localAnchor.x - t.m_sweep.localCenter.x, o = this.m_localAnchor.y - t.m_sweep.localCenter.y;
        r = n.col1.x * s + n.col2.x * o, o = n.col1.y * s + n.col2.y * o, s = r;
        var u = t.m_linearVelocity.x + -t.m_angularVelocity * o, a = t.m_linearVelocity.y + t.m_angularVelocity * s;
        n = this.m_mass, r = u + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x, i = a + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
        var f = -(n.col1.x * r + n.col2.x * i), l = -(n.col1.y * r + n.col2.y * i), c = this.m_impulse.x, h = this.m_impulse.y;
        this.m_impulse.x += f, this.m_impulse.y += l;
        var p = e.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > p * p && this.m_impulse.Multiply(p / this.m_impulse.Length()), f = this.m_impulse.x - c, l = this.m_impulse.y - h, t.m_linearVelocity.x += t.m_invMass * f, t.m_linearVelocity.y += t.m_invMass * l, t.m_angularVelocity += t.m_invI * (s * l - o * f)
    },S.prototype.SolvePositionConstraints = function (e) {
        return e === undefined && (e = 0), !0
    },Box2D.inherit(x, Box2D.Dynamics.Joints.b2JointDef),x.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype,x.b2MouseJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.target = new a
    },x.prototype.b2MouseJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_mouseJoint, this.maxForce = 0, this.frequencyHz = 5, this.dampingRatio = .7
    },Box2D.inherit(T, Box2D.Dynamics.Joints.b2Joint),T.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype,T.b2PrismaticJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchor1 = new a, this.m_localAnchor2 = new a, this.m_localXAxis1 = new a, this.m_localYAxis1 = new a, this.m_axis = new a, this.m_perp = new a, this.m_K = new i, this.m_impulse = new f
    },T.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    },T.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    },T.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), e * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
    },T.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), e * this.m_impulse.y
    },T.prototype.GetJointTranslation = function () {
        var e = this.m_bodyA, t = this.m_bodyB, n, r = e.GetWorldPoint(this.m_localAnchor1), i = t.GetWorldPoint(this.m_localAnchor2), s = i.x - r.x, o = i.y - r.y, u = e.GetWorldVector(this.m_localXAxis1), a = u.x * s + u.y * o;
        return a
    },T.prototype.GetJointSpeed = function () {
        var e = this.m_bodyA, t = this.m_bodyB, n;
        n = e.m_xf.R;
        var r = this.m_localAnchor1.x - e.m_sweep.localCenter.x, i = this.m_localAnchor1.y - e.m_sweep.localCenter.y, s = n.col1.x * r + n.col2.x * i;
        i = n.col1.y * r + n.col2.y * i, r = s, n = t.m_xf.R;
        var o = this.m_localAnchor2.x - t.m_sweep.localCenter.x, u = this.m_localAnchor2.y - t.m_sweep.localCenter.y;
        s = n.col1.x * o + n.col2.x * u, u = n.col1.y * o + n.col2.y * u, o = s;
        var a = e.m_sweep.c.x + r, f = e.m_sweep.c.y + i, l = t.m_sweep.c.x + o, c = t.m_sweep.c.y + u, h = l - a, p = c - f, d = e.GetWorldVector(this.m_localXAxis1), v = e.m_linearVelocity, m = t.m_linearVelocity, g = e.m_angularVelocity, y = t.m_angularVelocity, b = h * -g * d.y + p * g * d.x + (d.x * (m.x + -y * u - v.x - -g * i) + d.y * (m.y + y * o - v.y - g * r));
        return b
    },T.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit
    },T.prototype.EnableLimit = function (e) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableLimit = e
    },T.prototype.GetLowerLimit = function () {
        return this.m_lowerTranslation
    },T.prototype.GetUpperLimit = function () {
        return this.m_upperTranslation
    },T.prototype.SetLimits = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = e, this.m_upperTranslation = t
    },T.prototype.IsMotorEnabled = function () {
        return this.m_enableMotor
    },T.prototype.EnableMotor = function (e) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = e
    },T.prototype.SetMotorSpeed = function (e) {
        e === undefined && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = e
    },T.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed
    },T.prototype.SetMaxMotorForce = function (e) {
        e === undefined && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorForce = e
    },T.prototype.GetMotorForce = function () {
        return this.m_motorImpulse
    },T.prototype.b2PrismaticJoint = function (e) {
        this.__super.b2Joint.call(this, e);
        var t, n = 0, r = 0;
        this.m_localAnchor1.SetV(e.localAnchorA), this.m_localAnchor2.SetV(e.localAnchorB), this.m_localXAxis1.SetV(e.localAxisA), this.m_localYAxis1.x = -this.m_localXAxis1.y, this.m_localYAxis1.y = this.m_localXAxis1.x, this.m_refAngle = e.referenceAngle, this.m_impulse.SetZero(), this.m_motorMass = 0, this.m_motorImpulse = 0, this.m_lowerTranslation = e.lowerTranslation, this.m_upperTranslation = e.upperTranslation, this.m_maxMotorForce = e.maxMotorForce, this.m_motorSpeed = e.motorSpeed, this.m_enableLimit = e.enableLimit, this.m_enableMotor = e.enableMotor, this.m_limitState = g.e_inactiveLimit, this.m_axis.SetZero(), this.m_perp.SetZero()
    },T.prototype.InitVelocityConstraints = function (e) {
        var t = this.m_bodyA, r = this.m_bodyB, i, o = 0;
        this.m_localCenterA.SetV(t.GetLocalCenter()), this.m_localCenterB.SetV(r.GetLocalCenter());
        var u = t.GetTransform(), a = r.GetTransform();
        i = t.m_xf.R;
        var f = this.m_localAnchor1.x - this.m_localCenterA.x, l = this.m_localAnchor1.y - this.m_localCenterA.y;
        o = i.col1.x * f + i.col2.x * l, l = i.col1.y * f + i.col2.y * l, f = o, i = r.m_xf.R;
        var c = this.m_localAnchor2.x - this.m_localCenterB.x, h = this.m_localAnchor2.y - this.m_localCenterB.y;
        o = i.col1.x * c + i.col2.x * h, h = i.col1.y * c + i.col2.y * h, c = o;
        var p = r.m_sweep.c.x + c - t.m_sweep.c.x - f, d = r.m_sweep.c.y + h - t.m_sweep.c.y - l;
        this.m_invMassA = t.m_invMass, this.m_invMassB = r.m_invMass, this.m_invIA = t.m_invI, this.m_invIB = r.m_invI, this.m_axis.SetV(s.MulMV(u.R, this.m_localXAxis1)), this.m_a1 = (p + f) * this.m_axis.y - (d + l) * this.m_axis.x, this.m_a2 = c * this.m_axis.y - h * this.m_axis.x, this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2, this.m_motorMass > Box2D.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass), this.m_perp.SetV(s.MulMV(u.R, this.m_localYAxis1)), this.m_s1 = (p + f) * this.m_perp.y - (d + l) * this.m_perp.x, this.m_s2 = c * this.m_perp.y - h * this.m_perp.x;
        var v = this.m_invMassA, m = this.m_invMassB, y = this.m_invIA, b = this.m_invIB;
        this.m_K.col1.x = v + m + y * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2, this.m_K.col1.y = y * this.m_s1 + b * this.m_s2, this.m_K.col1.z = y * this.m_s1 * this.m_a1 + b * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = y + b, this.m_K.col2.z = y * this.m_a1 + b * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = v + m + y * this.m_a1 * this.m_a1 + b * this.m_a2 * this.m_a2;
        if (this.m_enableLimit) {
            var w = this.m_axis.x * p + this.m_axis.y * d;
            s.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * n.b2_linearSlop ? this.m_limitState = g.e_equalLimits : w > this.m_lowerTranslation ? w < this.m_upperTranslation ? (this.m_limitState = g.e_inactiveLimit, this.m_impulse.z = 0) : this.m_limitState != g.e_atUpperLimit && (this.m_limitState = g.e_atUpperLimit, this.m_impulse.z = 0) : this.m_limitState != g.e_atLowerLimit && (this.m_limitState = g.e_atLowerLimit, this.m_impulse.z = 0)
        } else this.m_limitState = g.e_inactiveLimit;
        this.m_enableMotor == 0 && (this.m_motorImpulse = 0);
        if (e.warmStarting) {
            this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio;
            var E = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, S = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, x = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, T = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
            t.m_linearVelocity.x -= this.m_invMassA * E, t.m_linearVelocity.y -= this.m_invMassA * S, t.m_angularVelocity -= this.m_invIA * x, r.m_linearVelocity.x += this.m_invMassB * E, r.m_linearVelocity.y += this.m_invMassB * S, r.m_angularVelocity += this.m_invIB * T
        } else this.m_impulse.SetZero(), this.m_motorImpulse = 0
    },T.prototype.SolveVelocityConstraints = function (e) {
        var t = this.m_bodyA, n = this.m_bodyB, r = t.m_linearVelocity, i = t.m_angularVelocity, o = n.m_linearVelocity, u = n.m_angularVelocity, l = 0, c = 0, h = 0, p = 0;
        if (this.m_enableMotor && this.m_limitState != g.e_equalLimits) {
            var d = this.m_axis.x * (o.x - r.x) + this.m_axis.y * (o.y - r.y) + this.m_a2 * u - this.m_a1 * i, v = this.m_motorMass * (this.m_motorSpeed - d), m = this.m_motorImpulse, y = e.dt * this.m_maxMotorForce;
            this.m_motorImpulse = s.Clamp(this.m_motorImpulse + v, -y, y), v = this.m_motorImpulse - m, l = v * this.m_axis.x, c = v * this.m_axis.y, h = v * this.m_a1, p = v * this.m_a2, r.x -= this.m_invMassA * l, r.y -= this.m_invMassA * c, i -= this.m_invIA * h, o.x += this.m_invMassB * l, o.y += this.m_invMassB * c, u += this.m_invIB * p
        }
        var b = this.m_perp.x * (o.x - r.x) + this.m_perp.y * (o.y - r.y) + this.m_s2 * u - this.m_s1 * i, w = u - i;
        if (this.m_enableLimit && this.m_limitState != g.e_inactiveLimit) {
            var E = this.m_axis.x * (o.x - r.x) + this.m_axis.y * (o.y - r.y) + this.m_a2 * u - this.m_a1 * i, S = this.m_impulse.Copy(), x = this.m_K.Solve33(new f, -b, -w, -E);
            this.m_impulse.Add(x), this.m_limitState == g.e_atLowerLimit ?
                this.m_impulse.z = s.Max(this.m_impulse.z, 0) : this.m_limitState == g.e_atUpperLimit && (this.m_impulse.z = s.Min(this.m_impulse.z, 0));
            var T = -b - (this.m_impulse.z - S.z) * this.m_K.col3.x, N = -w - (this.m_impulse.z - S.z) * this.m_K.col3.y, C = this.m_K.Solve22(new a, T, N);
            C.x += S.x, C.y += S.y, this.m_impulse.x = C.x, this.m_impulse.y = C.y, x.x = this.m_impulse.x - S.x, x.y = this.m_impulse.y - S.y, x.z = this.m_impulse.z - S.z, l = x.x * this.m_perp.x + x.z * this.m_axis.x, c = x.x * this.m_perp.y + x.z * this.m_axis.y, h = x.x * this.m_s1 + x.y + x.z * this.m_a1, p = x.x * this.m_s2 + x.y + x.z * this.m_a2, r.x -= this.m_invMassA * l, r.y -= this.m_invMassA * c, i -= this.m_invIA * h, o.x += this.m_invMassB * l, o.y += this.m_invMassB * c, u += this.m_invIB * p
        } else {
            var k = this.m_K.Solve22(new a, -b, -w);
            this.m_impulse.x += k.x, this.m_impulse.y += k.y, l = k.x * this.m_perp.x, c = k.x * this.m_perp.y, h = k.x * this.m_s1 + k.y, p = k.x * this.m_s2 + k.y, r.x -= this.m_invMassA * l, r.y -= this.m_invMassA * c, i -= this.m_invIA * h, o.x += this.m_invMassB * l, o.y += this.m_invMassB * c, u += this.m_invIB * p
        }
        t.m_linearVelocity.SetV(r), t.m_angularVelocity = i, n.m_linearVelocity.SetV(o), n.m_angularVelocity = u
    },T.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t = 0, i = 0, o = this.m_bodyA, u = this.m_bodyB, l = o.m_sweep.c, c = o.m_sweep.a, h = u.m_sweep.c, p = u.m_sweep.a, d, v = 0, m = 0, g = 0, y = 0, b = 0, w = 0, E = 0, S = !1, x = 0, T = r.FromAngle(c), N = r.FromAngle(p);
        d = T;
        var C = this.m_localAnchor1.x - this.m_localCenterA.x, k = this.m_localAnchor1.y - this.m_localCenterA.y;
        v = d.col1.x * C + d.col2.x * k, k = d.col1.y * C + d.col2.y * k, C = v, d = N;
        var L = this.m_localAnchor2.x - this.m_localCenterB.x, A = this.m_localAnchor2.y - this.m_localCenterB.y;
        v = d.col1.x * L + d.col2.x * A, A = d.col1.y * L + d.col2.y * A, L = v;
        var O = h.x + L - l.x - C, M = h.y + A - l.y - k;
        if (this.m_enableLimit) {
            this.m_axis = s.MulMV(T, this.m_localXAxis1), this.m_a1 = (O + C) * this.m_axis.y - (M + k) * this.m_axis.x, this.m_a2 = L * this.m_axis.y - A * this.m_axis.x;
            var _ = this.m_axis.x * O + this.m_axis.y * M;
            s.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * n.b2_linearSlop ? (x = s.Clamp(_, -n.b2_maxLinearCorrection, n.b2_maxLinearCorrection), w = s.Abs(_), S = !0) : _ > this.m_lowerTranslation ? _ >= this.m_upperTranslation && (x = s.Clamp(_ - this.m_upperTranslation + n.b2_linearSlop, 0, n.b2_maxLinearCorrection), w = _ - this.m_upperTranslation, S = !0) : (x = s.Clamp(_ - this.m_lowerTranslation + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0), w = this.m_lowerTranslation - _, S = !0)
        }
        this.m_perp = s.MulMV(T, this.m_localYAxis1), this.m_s1 = (O + C) * this.m_perp.y - (M + k) * this.m_perp.x, this.m_s2 = L * this.m_perp.y - A * this.m_perp.x;
        var D = new f, P = this.m_perp.x * O + this.m_perp.y * M, H = p - c - this.m_refAngle;
        w = s.Max(w, s.Abs(P)), E = s.Abs(H);
        if (S)m = this.m_invMassA, g = this.m_invMassB, y = this.m_invIA, b = this.m_invIB, this.m_K.col1.x = m + g + y * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2, this.m_K.col1.y = y * this.m_s1 + b * this.m_s2, this.m_K.col1.z = y * this.m_s1 * this.m_a1 + b * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = y + b, this.m_K.col2.z = y * this.m_a1 + b * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = m + g + y * this.m_a1 * this.m_a1 + b * this.m_a2 * this.m_a2, this.m_K.Solve33(D, -P, -H, -x); else {
            m = this.m_invMassA, g = this.m_invMassB, y = this.m_invIA, b = this.m_invIB;
            var B = m + g + y * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2, j = y * this.m_s1 + b * this.m_s2, F = y + b;
            this.m_K.col1.Set(B, j, 0), this.m_K.col2.Set(j, F, 0);
            var I = this.m_K.Solve22(new a, -P, -H);
            D.x = I.x, D.y = I.y, D.z = 0
        }
        var q = D.x * this.m_perp.x + D.z * this.m_axis.x, R = D.x * this.m_perp.y + D.z * this.m_axis.y, U = D.x * this.m_s1 + D.y + D.z * this.m_a1, z = D.x * this.m_s2 + D.y + D.z * this.m_a2;
        return l.x -= this.m_invMassA * q, l.y -= this.m_invMassA * R, c -= this.m_invIA * U, h.x += this.m_invMassB * q, h.y += this.m_invMassB * R, p += this.m_invIB * z, o.m_sweep.a = c, u.m_sweep.a = p, o.SynchronizeTransform(), u.SynchronizeTransform(), w <= n.b2_linearSlop && E <= n.b2_angularSlop
    },Box2D.inherit(N, Box2D.Dynamics.Joints.b2JointDef),N.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype,N.b2PrismaticJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new a, this.localAnchorB = new a, this.localAxisA = new a
    },N.prototype.b2PrismaticJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_prismaticJoint, this.localAxisA.Set(1, 0), this.referenceAngle = 0, this.enableLimit = !1, this.lowerTranslation = 0, this.upperTranslation = 0, this.enableMotor = !1, this.maxMotorForce = 0, this.motorSpeed = 0
    },N.prototype.Initialize = function (e, t, n, r) {
        this.bodyA = e, this.bodyB = t, this.localAnchorA = this.bodyA.GetLocalPoint(n), this.localAnchorB = this.bodyB.GetLocalPoint(n), this.localAxisA = this.bodyA.GetLocalVector(r), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    },Box2D.inherit(C, Box2D.Dynamics.Joints.b2Joint),C.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype,C.b2PulleyJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_groundAnchor1 = new a, this.m_groundAnchor2 = new a, this.m_localAnchor1 = new a, this.m_localAnchor2 = new a, this.m_u1 = new a, this.m_u2 = new a
    },C.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    },C.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    },C.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_impulse * this.m_u2.x, e * this.m_impulse * this.m_u2.y)
    },C.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), 0
    },C.prototype.GetGroundAnchorA = function () {
        var e = this.m_ground.m_xf.position.Copy();
        return e.Add(this.m_groundAnchor1), e
    },C.prototype.GetGroundAnchorB = function () {
        var e = this.m_ground.m_xf.position.Copy();
        return e.Add(this.m_groundAnchor2), e
    },C.prototype.GetLength1 = function () {
        var e = this.m_bodyA.GetWorldPoint(this.m_localAnchor1), t = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x, n = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y, r = e.x - t, i = e.y - n;
        return Math.sqrt(r * r + i * i)
    },C.prototype.GetLength2 = function () {
        var e = this.m_bodyB.GetWorldPoint(this.m_localAnchor2), t = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x, n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y, r = e.x - t, i = e.y - n;
        return Math.sqrt(r * r + i * i)
    },C.prototype.GetRatio = function () {
        return this.m_ratio
    },C.prototype.b2PulleyJoint = function (e) {
        this.__super.b2Joint.call(this, e);
        var t, n = 0, r = 0;
        this.m_ground = this.m_bodyA.m_world.m_groundBody, this.m_groundAnchor1.x = e.groundAnchorA.x - this.m_ground.m_xf.position.x, this.m_groundAnchor1.y = e.groundAnchorA.y - this.m_ground.m_xf.position.y, this.m_groundAnchor2.x = e.groundAnchorB.x - this.m_ground.m_xf.position.x, this.m_groundAnchor2.y = e.groundAnchorB.y - this.m_ground.m_xf.position.y, this.m_localAnchor1.SetV(e.localAnchorA), this.m_localAnchor2.SetV(e.localAnchorB), this.m_ratio = e.ratio, this.m_constant = e.lengthA + this.m_ratio * e.lengthB, this.m_maxLength1 = s.Min(e.maxLengthA, this.m_constant - this.m_ratio * C.b2_minPulleyLength), this.m_maxLength2 = s.Min(e.maxLengthB, (this.m_constant - C.b2_minPulleyLength) / this.m_ratio), this.m_impulse = 0, this.m_limitImpulse1 = 0, this.m_limitImpulse2 = 0
    },C.prototype.InitVelocityConstraints = function (e) {
        var t = this.m_bodyA, r = this.m_bodyB, i;
        i = t.m_xf.R;
        var s = this.m_localAnchor1.x - t.m_sweep.localCenter.x, o = this.m_localAnchor1.y - t.m_sweep.localCenter.y, u = i.col1.x * s + i.col2.x * o;
        o = i.col1.y * s + i.col2.y * o, s = u, i = r.m_xf.R;
        var a = this.m_localAnchor2.x - r.m_sweep.localCenter.x, f = this.m_localAnchor2.y - r.m_sweep.localCenter.y;
        u = i.col1.x * a + i.col2.x * f, f = i.col1.y * a + i.col2.y * f, a = u;
        var l = t.m_sweep.c.x + s, c = t.m_sweep.c.y + o, h = r.m_sweep.c.x + a, p = r.m_sweep.c.y + f, d = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x, v = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y, m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x, y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(l - d, c - v), this.m_u2.Set(h - m, p - y);
        var b = this.m_u1.Length(), w = this.m_u2.Length();
        b > n.b2_linearSlop ? this.m_u1.Multiply(1 / b) : this.m_u1.SetZero(), w > n.b2_linearSlop ? this.m_u2.Multiply(1 / w) : this.m_u2.SetZero();
        var E = this.m_constant - b - this.m_ratio * w;
        E > 0 ? (this.m_state = g.e_inactiveLimit, this.m_impulse = 0) : this.m_state = g.e_atUpperLimit, b < this.m_maxLength1 ? (this.m_limitState1 = g.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = g.e_atUpperLimit, w < this.m_maxLength2 ? (this.m_limitState2 = g.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = g.e_atUpperLimit;
        var S = s * this.m_u1.y - o * this.m_u1.x, x = a * this.m_u2.y - f * this.m_u2.x;
        this.m_limitMass1 = t.m_invMass + t.m_invI * S * S, this.m_limitMass2 = r.m_invMass + r.m_invI * x * x, this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2, this.m_limitMass1 = 1 / this.m_limitMass1, this.m_limitMass2 = 1 / this.m_limitMass2, this.m_pulleyMass = 1 / this.m_pulleyMass;
        if (e.warmStarting) {
            this.m_impulse *= e.dtRatio, this.m_limitImpulse1 *= e.dtRatio, this.m_limitImpulse2 *= e.dtRatio;
            var T = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, N = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, C = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, k = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y;
            t.m_linearVelocity.x += t.m_invMass * T, t.m_linearVelocity.y += t.m_invMass * N, t.m_angularVelocity += t.m_invI * (s * N - o * T), r.m_linearVelocity.x += r.m_invMass * C, r.m_linearVelocity.y += r.m_invMass * k, r.m_angularVelocity += r.m_invI * (a * k - f * C)
        } else this.m_impulse = 0, this.m_limitImpulse1 = 0, this.m_limitImpulse2 = 0
    },C.prototype.SolveVelocityConstraints = function (e) {
        var t = this.m_bodyA, n = this.m_bodyB, r;
        r = t.m_xf.R;
        var i = this.m_localAnchor1.x - t.m_sweep.localCenter.x, o = this.m_localAnchor1.y - t.m_sweep.localCenter.y, u = r.col1.x * i + r.col2.x * o;
        o = r.col1.y * i + r.col2.y * o, i = u, r = n.m_xf.R;
        var a = this.m_localAnchor2.x - n.m_sweep.localCenter.x, f = this.m_localAnchor2.y - n.m_sweep.localCenter.y;
        u = r.col1.x * a + r.col2.x * f, f = r.col1.y * a + r.col2.y * f, a = u;
        var l = 0, c = 0, h = 0, p = 0, d = 0, v = 0, m = 0, y = 0, b = 0, w = 0, E = 0;
        this.m_state == g.e_atUpperLimit && (l = t.m_linearVelocity.x + -t.m_angularVelocity * o, c = t.m_linearVelocity.y + t.m_angularVelocity * i, h = n.m_linearVelocity.x + -n.m_angularVelocity * f, p = n.m_linearVelocity.y + n.m_angularVelocity * a, b = -(this.m_u1.x * l + this.m_u1.y * c) - this.m_ratio * (this.m_u2.x * h + this.m_u2.y * p), w = this.m_pulleyMass * -b, E = this.m_impulse, this.m_impulse = s.Max(0, this.m_impulse + w), w = this.m_impulse - E, d = -w * this.m_u1.x, v = -w * this.m_u1.y, m = -this.m_ratio * w * this.m_u2.x, y = -this.m_ratio * w * this.m_u2.y, t.m_linearVelocity.x += t.m_invMass * d, t.m_linearVelocity.y += t.m_invMass * v, t.m_angularVelocity += t.m_invI * (i * v - o * d), n.m_linearVelocity.x += n.m_invMass * m, n.m_linearVelocity.y += n.m_invMass * y, n.m_angularVelocity += n.m_invI * (a * y - f * m)), this.m_limitState1 == g.e_atUpperLimit && (l = t.m_linearVelocity.x + -t.m_angularVelocity * o, c = t.m_linearVelocity.y + t.m_angularVelocity * i, b = -(this.m_u1.x * l + this.m_u1.y * c), w = -this.m_limitMass1 * b, E = this.m_limitImpulse1, this.m_limitImpulse1 = s.Max(0, this.m_limitImpulse1 + w), w = this.m_limitImpulse1 - E, d = -w * this.m_u1.x, v = -w * this.m_u1.y, t.m_linearVelocity.x += t.m_invMass * d, t.m_linearVelocity.y += t.m_invMass * v, t.m_angularVelocity += t.m_invI * (i * v - o * d)), this.m_limitState2 == g.e_atUpperLimit && (h = n.m_linearVelocity.x + -n.m_angularVelocity * f, p = n.m_linearVelocity.y + n.m_angularVelocity * a, b = -(this.m_u2.x * h + this.m_u2.y * p), w = -this.m_limitMass2 * b, E = this.m_limitImpulse2, this.m_limitImpulse2 = s.Max(0, this.m_limitImpulse2 + w), w = this.m_limitImpulse2 - E, m = -w * this.m_u2.x, y = -w * this.m_u2.y, n.m_linearVelocity.x += n.m_invMass * m, n.m_linearVelocity.y += n.m_invMass * y, n.m_angularVelocity += n.m_invI * (a * y - f * m))
    },C.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t = this.m_bodyA, r = this.m_bodyB, i, o = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x, u = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y, a = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x, f = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y, l = 0, c = 0, h = 0, p = 0, d = 0, v = 0, m = 0, y = 0, b = 0, w = 0, E = 0, S = 0, x = 0, T = 0, N = 0, C = 0;
        return this.m_state == g.e_atUpperLimit && (i = t.m_xf.R, l = this.m_localAnchor1.x - t.m_sweep.localCenter.x, c = this.m_localAnchor1.y - t.m_sweep.localCenter.y, N = i.col1.x * l + i.col2.x * c, c = i.col1.y * l + i.col2.y * c, l = N, i = r.m_xf.R, h = this.m_localAnchor2.x - r.m_sweep.localCenter.x, p = this.m_localAnchor2.y - r.m_sweep.localCenter.y, N = i.col1.x * h + i.col2.x * p, p = i.col1.y * h + i.col2.y * p, h = N, d = t.m_sweep.c.x + l, v = t.m_sweep.c.y + c, m = r.m_sweep.c.x + h, y = r.m_sweep.c.y + p, this.m_u1.Set(d - o, v - u), this.m_u2.Set(m - a, y - f), b = this.m_u1.Length(), w = this.m_u2.Length(), b > n.b2_linearSlop ? this.m_u1.Multiply(1 / b) : this.m_u1.SetZero(), w > n.b2_linearSlop ? this.m_u2.Multiply(1 / w) : this.m_u2.SetZero(), E = this.m_constant - b - this.m_ratio * w, C = s.Max(C, -E), E = s.Clamp(E + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0), S = -this.m_pulleyMass * E, d = -S * this.m_u1.x, v = -S * this.m_u1.y, m = -this.m_ratio * S * this.m_u2.x, y = -this.m_ratio * S * this.m_u2.y, t.m_sweep.c.x += t.m_invMass * d, t.m_sweep.c.y += t.m_invMass * v, t.m_sweep.a += t.m_invI * (l * v - c * d), r.m_sweep.c.x += r.m_invMass * m, r.m_sweep.c.y += r.m_invMass * y, r.m_sweep.a += r.m_invI * (h * y - p * m), t.SynchronizeTransform(), r.SynchronizeTransform()), this.m_limitState1 == g.e_atUpperLimit && (i = t.m_xf.R, l = this.m_localAnchor1.x - t.m_sweep.localCenter.x, c = this.m_localAnchor1.y - t.m_sweep.localCenter.y, N = i.col1.x * l + i.col2.x * c, c = i.col1.y * l + i.col2.y * c, l = N, d = t.m_sweep.c.x + l, v = t.m_sweep.c.y + c, this.m_u1.Set(d - o, v - u), b = this.m_u1.Length(), b > n.b2_linearSlop ? (this.m_u1.x *= 1 / b, this.m_u1.y *= 1 / b) : this.m_u1.SetZero(), E = this.m_maxLength1 - b, C = s.Max(C, -E), E = s.Clamp(E + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0), S = -this.m_limitMass1 * E, d = -S * this.m_u1.x, v = -S * this.m_u1.y, t.m_sweep.c.x += t.m_invMass * d, t.m_sweep.c.y += t.m_invMass * v, t.m_sweep.a += t.m_invI * (l * v - c * d), t.SynchronizeTransform()), this.m_limitState2 == g.e_atUpperLimit && (i = r.m_xf.R, h = this.m_localAnchor2.x - r.m_sweep.localCenter.x, p = this.m_localAnchor2.y - r.m_sweep.localCenter.y, N = i.col1.x * h + i.col2.x * p, p = i.col1.y * h + i.col2.y * p, h = N, m = r.m_sweep.c.x + h, y = r.m_sweep.c.y + p, this.m_u2.Set(m - a, y - f), w = this.m_u2.Length(), w > n.b2_linearSlop ? (this.m_u2.x *= 1 / w, this.m_u2.y *= 1 / w) : this.m_u2.SetZero(), E = this.m_maxLength2 - w, C = s.Max(C, -E), E = s.Clamp(E + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0), S = -this.m_limitMass2 * E, m = -S * this.m_u2.x, y = -S * this.m_u2.y, r.m_sweep.c.x += r.m_invMass * m, r.m_sweep.c.y += r.m_invMass * y, r.m_sweep.a += r.m_invI * (h * y - p * m), r.SynchronizeTransform()), C < n.b2_linearSlop
    },Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2
    }),Box2D.inherit(k, Box2D.Dynamics.Joints.b2JointDef),k.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype,k.b2PulleyJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.groundAnchorA = new a, this.groundAnchorB = new a, this.localAnchorA = new a, this.localAnchorB = new a
    },k.prototype.b2PulleyJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_pulleyJoint, this.groundAnchorA.Set(-1, 1), this.groundAnchorB.Set(1, 1), this.localAnchorA.Set(-1, 0), this.localAnchorB.Set(1, 0), this.lengthA = 0, this.maxLengthA = 0, this.lengthB = 0, this.maxLengthB = 0, this.ratio = 1, this.collideConnected = !0
    },k.prototype.Initialize = function (e, t, n, r, i, s, o) {
        o === undefined && (o = 0), this.bodyA = e, this.bodyB = t, this.groundAnchorA.SetV(n), this.groundAnchorB.SetV(r), this.localAnchorA = this.bodyA.GetLocalPoint(i), this.localAnchorB = this.bodyB.GetLocalPoint(s);
        var u = i.x - n.x, a = i.y - n.y;
        this.lengthA = Math.sqrt(u * u + a * a);
        var f = s.x - r.x, l = s.y - r.y;
        this.lengthB = Math.sqrt(f * f + l * l), this.ratio = o;
        var c = this.lengthA + this.ratio * this.lengthB;
        this.maxLengthA = c - this.ratio * C.b2_minPulleyLength, this.maxLengthB = (c - C.b2_minPulleyLength) / this.ratio
    },Box2D.inherit(L, Box2D.Dynamics.Joints.b2Joint),L.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype,L.b2RevoluteJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.K = new r, this.K1 = new r, this.K2 = new r, this.K3 = new r, this.impulse3 = new f, this.impulse2 = new a, this.reduced = new a, this.m_localAnchor1 = new a, this.m_localAnchor2 = new a, this.m_impulse = new f, this.m_mass = new i
    },L.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    },L.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    },L.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_impulse.x, e * this.m_impulse.y)
    },L.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), e * this.m_impulse.z
    },L.prototype.GetJointAngle = function () {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    },L.prototype.GetJointSpeed = function () {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
    },L.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit
    },L.prototype.EnableLimit = function (e) {
        this.m_enableLimit = e
    },L.prototype.GetLowerLimit = function () {
        return this.m_lowerAngle
    },L.prototype.GetUpperLimit = function () {
        return this.m_upperAngle
    },L.prototype.SetLimits = function (e, t) {
        e === undefined && (e = 0), t === undefined && (t = 0), this.m_lowerAngle = e, this.m_upperAngle = t
    },L.prototype.IsMotorEnabled = function () {
        return this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor
    },L.prototype.EnableMotor = function (e) {
        this.m_enableMotor = e
    },L.prototype.SetMotorSpeed = function (e) {
        e === undefined && (e = 0), this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = e
    },L.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed
    },L.prototype.SetMaxMotorTorque = function (e) {
        e === undefined && (e = 0), this.m_maxMotorTorque = e
    },L.prototype.GetMotorTorque = function () {
        return this.m_maxMotorTorque
    },L.prototype.b2RevoluteJoint = function (e) {
        this.__super.b2Joint.call(this, e), this.m_localAnchor1.SetV(e.localAnchorA), this.m_localAnchor2.SetV(e.localAnchorB), this.m_referenceAngle = e.referenceAngle, this.m_impulse.SetZero(), this.m_motorImpulse = 0, this.m_lowerAngle = e.lowerAngle, this.m_upperAngle = e.upperAngle, this.m_maxMotorTorque = e.maxMotorTorque, this.m_motorSpeed = e.motorSpeed, this.m_enableLimit = e.enableLimit, this.m_enableMotor = e.enableMotor, this.m_limitState = g.e_inactiveLimit
    },L.prototype.InitVelocityConstraints = function (e) {
        var t = this.m_bodyA, r = this.m_bodyB, i, o = 0;
        this.m_enableMotor || this.m_enableLimit, i = t.m_xf.R;
        var u = this.m_localAnchor1.x - t.m_sweep.localCenter.x, a = this.m_localAnchor1.y - t.m_sweep.localCenter.y;
        o = i.col1.x * u + i.col2.x * a, a = i.col1.y * u + i.col2.y * a, u = o, i = r.m_xf.R;
        var f = this.m_localAnchor2.x - r.m_sweep.localCenter.x, l = this.m_localAnchor2.y - r.m_sweep.localCenter.y;
        o = i.col1.x * f + i.col2.x * l, l = i.col1.y * f + i.col2.y * l, f = o;
        var c = t.m_invMass, h = r.m_invMass, p = t.m_invI, d = r.m_invI;
        this.m_mass.col1.x = c + h + a * a * p + l * l * d, this.m_mass.col2.x = -a * u * p - l * f * d, this.m_mass.col3.x = -a * p - l * d, this.m_mass.col1.y = this.m_mass.col2.x, this.m_mass.col2.y = c + h + u * u * p + f * f * d, this.m_mass.col3.y = u * p + f * d, this.m_mass.col1.z = this.m_mass.col3.x, this.m_mass.col2.z = this.m_mass.col3.y, this.m_mass.col3.z = p + d, this.m_motorMass = 1 / (p + d), this.m_enableMotor == 0 && (this.m_motorImpulse = 0);
        if (this.m_enableLimit) {
            var v = r.m_sweep.a - t.m_sweep.a - this.m_referenceAngle;
            s.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * n.b2_angularSlop ? this.m_limitState = g.e_equalLimits : v > this.m_lowerAngle ? v < this.m_upperAngle ? (this.m_limitState = g.e_inactiveLimit, this.m_impulse.z = 0) : (this.m_limitState != g.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = g.e_atUpperLimit) : (this.m_limitState != g.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = g.e_atLowerLimit)
        } else this.m_limitState = g.e_inactiveLimit;
        if (e.warmStarting) {
            this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio;
            var m = this.m_impulse.x, y = this.m_impulse.y;
            t.m_linearVelocity.x -= c * m, t.m_linearVelocity.y -= c * y, t.m_angularVelocity -= p * (u * y - a * m + this.m_motorImpulse + this.m_impulse.z), r.m_linearVelocity.x += h * m, r.m_linearVelocity.y += h * y, r.m_angularVelocity += d * (f * y - l * m + this.m_motorImpulse + this.m_impulse.z)
        } else this.m_impulse.SetZero(), this.m_motorImpulse = 0
    },L.prototype.SolveVelocityConstraints = function (e) {
        var t = this.m_bodyA, n = this.m_bodyB, r, i = 0, o = 0, u = 0, a = 0, f = 0, l = 0, c = t.m_linearVelocity, h = t.m_angularVelocity, p = n.m_linearVelocity, d = n.m_angularVelocity, v = t.m_invMass, m = n.m_invMass, y = t.m_invI, b = n.m_invI;
        if (this.m_enableMotor && this.m_limitState != g.e_equalLimits) {
            var w = d - h - this.m_motorSpeed, E = this.m_motorMass * -w, S = this.m_motorImpulse, x = e.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = s.Clamp(this.m_motorImpulse + E, -x, x), E = this.m_motorImpulse - S, h -= y * E, d += b * E
        }
        if (this.m_enableLimit && this.m_limitState != g.e_inactiveLimit) {
            r = t.m_xf.R, u = this.m_localAnchor1.x - t.m_sweep.localCenter.x, a = this.m_localAnchor1.y - t.m_sweep.localCenter.y, i = r.col1.x * u + r.col2.x * a, a = r.col1.y * u + r.col2.y * a, u = i, r = n.m_xf.R, f = this.m_localAnchor2.x - n.m_sweep.localCenter.x, l = this.m_localAnchor2.y - n.m_sweep.localCenter.y, i = r.col1.x * f + r.col2.x * l, l = r.col1.y * f + r.col2.y * l, f = i;
            var T = p.x + -d * l - c.x - -h * a, N = p.y + d * f - c.y - h * u, C = d - h;
            this.m_mass.Solve33(this.impulse3, -T, -N, -C), this.m_limitState == g.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == g.e_atLowerLimit ? (o = this.m_impulse.z + this.impulse3.z, o < 0 && (this.m_mass.Solve22(this.reduced, -T, -N), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == g.e_atUpperLimit && (o = this.m_impulse.z + this.impulse3.z, o > 0 && (this.m_mass.Solve22(this.reduced, -T, -N), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)), c.x -= v * this.impulse3.x, c.y -= v * this.impulse3.y, h -= y * (u * this.impulse3.y - a * this.impulse3.x + this.impulse3.z), p.x += m * this.impulse3.x, p.y += m * this.impulse3.y, d += b * (f * this.impulse3.y - l * this.impulse3.x + this.impulse3.z)
        } else {
            r = t.m_xf.R, u = this.m_localAnchor1.x - t.m_sweep.localCenter.x, a = this.m_localAnchor1.y - t.m_sweep.localCenter.y, i = r.col1.x * u + r.col2.x * a, a = r.col1.y * u + r.col2.y * a, u = i, r = n.m_xf.R, f = this.m_localAnchor2.x - n.m_sweep.localCenter.x, l = this.m_localAnchor2.y - n.m_sweep.localCenter.y, i = r.col1.x * f + r.col2.x * l, l = r.col1.y * f + r.col2.y * l, f = i;
            var k = p.x + -d * l - c.x - -h * a, L = p.y + d * f - c.y - h * u;
            this.m_mass.Solve22(this.impulse2, -k, -L), this.m_impulse.x += this.impulse2.x, this.m_impulse.y += this.impulse2.y, c.x -= v * this.impulse2.x, c.y -= v * this.impulse2.y, h -= y * (u * this.impulse2.y - a * this.impulse2.x), p.x += m * this.impulse2.x, p.y += m * this.impulse2.y, d += b * (f * this.impulse2.y - l * this.impulse2.x)
        }
        t.m_linearVelocity.SetV(c), t.m_angularVelocity = h, n.m_linearVelocity.SetV(p), n.m_angularVelocity = d
    },L.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t = 0, r = 0, i, o = this.m_bodyA, u = this.m_bodyB, a = 0, f = 0, l = 0, c = 0, h = 0;
        if (this.m_enableLimit && this.m_limitState != g.e_inactiveLimit) {
            var p = u.m_sweep.a - o.m_sweep.a - this.m_referenceAngle, d = 0;
            this.m_limitState == g.e_equalLimits ? (r = s.Clamp(p - this.m_lowerAngle, -n.b2_maxAngularCorrection, n.b2_maxAngularCorrection), d = -this.m_motorMass * r, a = s.Abs(r)) : this.m_limitState == g.e_atLowerLimit ? (r = p - this.m_lowerAngle, a = -r, r = s.Clamp(r + n.b2_angularSlop, -n.b2_maxAngularCorrection, 0), d = -this.m_motorMass * r) : this.m_limitState == g.e_atUpperLimit && (r = p - this.m_upperAngle, a = r, r = s.Clamp(r - n.b2_angularSlop, 0, n.b2_maxAngularCorrection), d = -this.m_motorMass * r), o.m_sweep.a -= o.m_invI * d, u.m_sweep.a += u.m_invI * d, o.SynchronizeTransform(), u.SynchronizeTransform()
        }
        i = o.m_xf.R;
        var v = this.m_localAnchor1.x - o.m_sweep.localCenter.x, m = this.m_localAnchor1.y - o.m_sweep.localCenter.y;
        l = i.col1.x * v + i.col2.x * m, m = i.col1.y * v + i.col2.y * m, v = l, i = u.m_xf.R;
        var y = this.m_localAnchor2.x - u.m_sweep.localCenter.x, b = this.m_localAnchor2.y - u.m_sweep.localCenter.y;
        l = i.col1.x * y + i.col2.x * b, b = i.col1.y * y + i.col2.y * b, y = l;
        var w = u.m_sweep.c.x + y - o.m_sweep.c.x - v, E = u.m_sweep.c.y + b - o.m_sweep.c.y - m, S = w * w + E * E, x = Math.sqrt(S);
        f = x;
        var T = o.m_invMass, N = u.m_invMass, C = o.m_invI, k = u.m_invI, A = 10 * n.b2_linearSlop;
        if (S > A * A) {
            var O = w / x, M = E / x, _ = T + N, D = 1 / _;
            c = D * -w, h = D * -E;
            var P = .5;
            o.m_sweep.c.x -= P * T * c, o.m_sweep.c.y -= P * T * h, u.m_sweep.c.x += P * N * c, u.m_sweep.c.y += P * N * h, w = u.m_sweep.c.x + y - o.m_sweep.c.x - v, E = u.m_sweep.c.y + b - o.m_sweep.c.y - m
        }
        return this.K1.col1.x = T + N, this.K1.col2.x = 0, this.K1.col1.y = 0, this.K1.col2.y = T + N, this.K2.col1.x = C * m * m, this.K2.col2.x = -C * v * m, this.K2.col1.y = -C * v * m, this.K2.col2.y = C * v * v, this.K3.col1.x = k * b * b, this.K3.col2.x = -k * y * b, this.K3.col1.y = -k * y * b, this.K3.col2.y = k * y * y, this.K.SetM(this.K1), this.K.AddM(this.K2), this.K.AddM(this.K3), this.K.Solve(L.tImpulse, -w, -E), c = L.tImpulse.x, h = L.tImpulse.y, o.m_sweep.c.x -= o.m_invMass * c, o.m_sweep.c.y -= o.m_invMass * h, o.m_sweep.a -= o.m_invI * (v * h - m * c), u.m_sweep.c.x += u.m_invMass * c, u.m_sweep.c.y += u.m_invMass * h, u.m_sweep.a += u.m_invI * (y * h - b * c), o.SynchronizeTransform(), u.SynchronizeTransform(), f <= n.b2_linearSlop && a <= n.b2_angularSlop
    },Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new a
    }),Box2D.inherit(A, Box2D.Dynamics.Joints.b2JointDef),A.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype,A.b2RevoluteJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new a, this.localAnchorB = new a
    },A.prototype.b2RevoluteJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_revoluteJoint, this.localAnchorA.Set(0, 0), this.localAnchorB.Set(0, 0), this.referenceAngle = 0, this.lowerAngle = 0, this.upperAngle = 0, this.maxMotorTorque = 0, this.motorSpeed = 0, this.enableLimit = !1, this.enableMotor = !1
    },A.prototype.Initialize = function (e, t, n) {
        this.bodyA = e, this.bodyB = t, this.localAnchorA = this.bodyA.GetLocalPoint(n), this.localAnchorB = this.bodyB.GetLocalPoint(n), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    },Box2D.inherit(O, Box2D.Dynamics.Joints.b2Joint),O.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype,O.b2WeldJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments), this.m_localAnchorA = new a, this.m_localAnchorB = new a, this.m_impulse = new f, this.m_mass = new i
    },O.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    },O.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    },O.prototype.GetReactionForce = function (e) {
        return e === undefined && (e = 0), new a(e * this.m_impulse.x, e * this.m_impulse.y)
    },O.prototype.GetReactionTorque = function (e) {
        return e === undefined && (e = 0), e * this.m_impulse.z
    },O.prototype.b2WeldJoint = function (e) {
        this.__super.b2Joint.call(this, e), this.m_localAnchorA.SetV(e.localAnchorA), this.m_localAnchorB.SetV(e.localAnchorB), this.m_referenceAngle = e.referenceAngle, this.m_impulse.SetZero(), this.m_mass = new i
    },O.prototype.InitVelocityConstraints = function (e) {
        var t, n = 0, r = this.m_bodyA, i = this.m_bodyB;
        t = r.m_xf.R;
        var s = this.m_localAnchorA.x - r.m_sweep.localCenter.x, o = this.m_localAnchorA.y - r.m_sweep.localCenter.y;
        n = t.col1.x * s + t.col2.x * o, o = t.col1.y * s + t.col2.y * o, s = n, t = i.m_xf.R;
        var u = this.m_localAnchorB.x - i.m_sweep.localCenter.x, a = this.m_localAnchorB.y - i.m_sweep.localCenter.y;
        n = t.col1.x * u + t.col2.x * a, a = t.col1.y * u + t.col2.y * a, u = n;
        var f = r.m_invMass, l = i.m_invMass, c = r.m_invI, h = i.m_invI;
        this.m_mass.col1.x = f + l + o * o * c + a * a * h, this.m_mass.col2.x = -o * s * c - a * u * h, this.m_mass.col3.x = -o * c - a * h, this.m_mass.col1.y = this.m_mass.col2.x, this.m_mass.col2.y = f + l + s * s * c + u * u * h, this.m_mass.col3.y = s * c + u * h, this.m_mass.col1.z = this.m_mass.col3.x, this.m_mass.col2.z = this.m_mass.col3.y, this.m_mass.col3.z = c + h, e.warmStarting ? (this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_impulse.z *= e.dtRatio, r.m_linearVelocity.x -= f * this.m_impulse.x, r.m_linearVelocity.y -= f * this.m_impulse.y, r.m_angularVelocity -= c * (s * this.m_impulse.y - o * this.m_impulse.x + this.m_impulse.z), i.m_linearVelocity.x += l * this.m_impulse.x, i.m_linearVelocity.y += l * this.m_impulse.y, i.m_angularVelocity += h * (u * this.m_impulse.y - a * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
    },O.prototype.SolveVelocityConstraints = function (e) {
        var t, n = 0, r = this.m_bodyA, i = this.m_bodyB, s = r.m_linearVelocity, o = r.m_angularVelocity, u = i.m_linearVelocity, a = i.m_angularVelocity, l = r.m_invMass, c = i.m_invMass, h = r.m_invI, p = i.m_invI;
        t = r.m_xf.R;
        var d = this.m_localAnchorA.x - r.m_sweep.localCenter.x, v = this.m_localAnchorA.y - r.m_sweep.localCenter.y;
        n = t.col1.x * d + t.col2.x * v, v = t.col1.y * d + t.col2.y * v, d = n, t = i.m_xf.R;
        var m = this.m_localAnchorB.x - i.m_sweep.localCenter.x, g = this.m_localAnchorB.y - i.m_sweep.localCenter.y;
        n = t.col1.x * m + t.col2.x * g, g = t.col1.y * m + t.col2.y * g, m = n;
        var y = u.x - a * g - s.x + o * v, b = u.y + a * m - s.y - o * d, w = a - o, E = new f;
        this.m_mass.Solve33(E, -y, -b, -w), this.m_impulse.Add(E), s.x -= l * E.x, s.y -= l * E.y, o -= h * (d * E.y - v * E.x + E.z), u.x += c * E.x, u.y += c * E.y, a += p * (m * E.y - g * E.x + E.z), r.m_angularVelocity = o, i.m_angularVelocity = a
    },O.prototype.SolvePositionConstraints = function (e) {
        e === undefined && (e = 0);
        var t, r = 0, i = this.m_bodyA, o = this.m_bodyB;
        t = i.m_xf.R;
        var u = this.m_localAnchorA.x - i.m_sweep.localCenter.x, a = this.m_localAnchorA.y - i.m_sweep.localCenter.y;
        r = t.col1.x * u + t.col2.x * a, a = t.col1.y * u + t.col2.y * a, u = r, t = o.m_xf.R;
        var l = this.m_localAnchorB.x - o.m_sweep.localCenter.x, c = this.m_localAnchorB.y - o.m_sweep.localCenter.y;
        r = t.col1.x * l + t.col2.x * c, c = t.col1.y * l + t.col2.y * c, l = r;
        var h = i.m_invMass, p = o.m_invMass, d = i.m_invI, v = o.m_invI, m = o.m_sweep.c.x + l - i.m_sweep.c.x - u, g = o.m_sweep.c.y + c - i.m_sweep.c.y - a, y = o.m_sweep.a - i.m_sweep.a - this.m_referenceAngle, b = 10 * n.b2_linearSlop, w = Math.sqrt(m * m + g * g), E = s.Abs(y);
        w > b && (d *= 1, v *= 1), this.m_mass.col1.x = h + p + a * a * d + c * c * v, this.m_mass.col2.x = -a * u * d - c * l * v, this.m_mass.col3.x = -a * d - c * v, this.m_mass.col1.y = this.m_mass.col2.x, this.m_mass.col2.y = h + p + u * u * d + l * l * v, this.m_mass.col3.y = u * d + l * v, this.m_mass.col1.z = this.m_mass.col3.x, this.m_mass.col2.z = this.m_mass.col3.y, this.m_mass.col3.z = d + v;
        var S = new f;
        return this.m_mass.Solve33(S, -m, -g, -y), i.m_sweep.c.x -= h * S.x, i.m_sweep.c.y -= h * S.y, i.m_sweep.a -= d * (u * S.y - a * S.x + S.z), o.m_sweep.c.x += p * S.x, o.m_sweep.c.y += p * S.y, o.m_sweep.a += v * (l * S.y - c * S.x + S.z), i.SynchronizeTransform(), o.SynchronizeTransform(), w <= n.b2_linearSlop && E <= n.b2_angularSlop
    },Box2D.inherit(M, Box2D.Dynamics.Joints.b2JointDef),M.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype,M.b2WeldJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments), this.localAnchorA = new a, this.localAnchorB = new a
    },M.prototype.b2WeldJointDef = function () {
        this.__super.b2JointDef.call(this), this.type = g.e_weldJoint, this.referenceAngle = 0
    },M.prototype.Initialize = function (e, t, n) {
        this.bodyA = e, this.bodyB = t, this.localAnchorA.SetV(this.bodyA.GetLocalPoint(n)), this.localAnchorB.SetV(this.bodyB.GetLocalPoint(n)), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
}(), function () {
    var e = Box2D.Dynamics.b2DebugDraw;
    e.b2DebugDraw = function () {
        this.m_drawScale = 1, this.m_lineThickness = 1, this.m_alpha = 1, this.m_fillAlpha = 1, this.m_xformScale = 1;
        var e = this;
        this.m_sprite = {graphics: {clear: function () {
            e.m_ctx.clearRect(0, 0, e.m_ctx.canvas.width, e.m_ctx.canvas.height)
        }}}
    }, e.prototype._color = function (e, t) {
        return"rgba(" + ((e & 16711680) >> 16) + "," + ((e & 65280) >> 8) + "," + (e & 255) + "," + t + ")"
    }, e.prototype.b2DebugDraw = function () {
        this.m_drawFlags = 0
    }, e.prototype.SetFlags = function (e) {
        e === undefined && (e = 0), this.m_drawFlags = e
    }, e.prototype.GetFlags = function () {
        return this.m_drawFlags
    }, e.prototype.AppendFlags = function (e) {
        e === undefined && (e = 0), this.m_drawFlags |= e
    }, e.prototype.ClearFlags = function (e) {
        e === undefined && (e = 0), this.m_drawFlags &= ~e
    }, e.prototype.SetSprite = function (e) {
        this.m_ctx = e
    }, e.prototype.GetSprite = function () {
        return this.m_ctx
    }, e.prototype.SetDrawScale = function (e) {
        e === undefined && (e = 0), this.m_drawScale = e
    }, e.prototype.GetDrawScale = function () {
        return this.m_drawScale
    }, e.prototype.SetLineThickness = function (e) {
        e === undefined && (e = 0), this.m_lineThickness = e, this.m_ctx.strokeWidth = e
    }, e.prototype.GetLineThickness = function () {
        return this.m_lineThickness
    }, e.prototype.SetAlpha = function (e) {
        e === undefined && (e = 0), this.m_alpha = e
    }, e.prototype.GetAlpha = function () {
        return this.m_alpha
    }, e.prototype.SetFillAlpha = function (e) {
        e === undefined && (e = 0), this.m_fillAlpha = e
    }, e.prototype.GetFillAlpha = function () {
        return this.m_fillAlpha
    }, e.prototype.SetXFormScale = function (e) {
        e === undefined && (e = 0), this.m_xformScale = e
    }, e.prototype.GetXFormScale = function () {
        return this.m_xformScale
    }, e.prototype.DrawPolygon = function (e, t, n) {
        if (!t)return;
        var r = this.m_ctx, i = this.m_drawScale;
        r.beginPath(), r.strokeStyle = this._color(n.color, this.m_alpha), r.moveTo(e[0].x * i, e[0].y * i);
        for (var s = 1; s < t; s++)r.lineTo(e[s].x * i, e[s].y * i);
        r.lineTo(e[0].x * i, e[0].y * i), r.closePath(), r.stroke()
    }, e.prototype.DrawSolidPolygon = function (e, t, n) {
        if (!t)return;
        var r = this.m_ctx, i = this.m_drawScale;
        r.beginPath(), r.strokeStyle = this._color(n.color, this.m_alpha), r.fillStyle = this._color(n.color, this.m_fillAlpha), r.moveTo(e[0].x * i, e[0].y * i);
        for (var s = 1; s < t; s++)r.lineTo(e[s].x * i, e[s].y * i);
        r.lineTo(e[0].x * i, e[0].y * i), r.closePath(), r.fill(), r.stroke()
    }, e.prototype.DrawCircle = function (e, t, n) {
        if (!t)return;
        var r = this.m_ctx, i = this.m_drawScale;
        r.beginPath(), r.strokeStyle = this._color(n.color, this.m_alpha), r.arc(e.x * i, e.y * i, t * i, 0, Math.PI * 2, !0), r.closePath(), r.stroke()
    }, e.prototype.DrawSolidCircle = function (e, t, n, r) {
        if (!t)return;
        var i = this.m_ctx, s = this.m_drawScale, o = e.x * s, u = e.y * s;
        i.moveTo(0, 0), i.beginPath(), i.strokeStyle = this._color(r.color, this.m_alpha), i.fillStyle = this._color(r.color, this.m_fillAlpha), i.arc(o, u, t * s, 0, Math.PI * 2, !0), i.moveTo(o, u), i.lineTo((e.x + n.x * t) * s, (e.y + n.y * t) * s), i.closePath(), i.fill(), i.stroke()
    }, e.prototype.DrawSegment = function (e, t, n) {
        var r = this.m_ctx, i = this.m_drawScale;
        r.strokeStyle = this._color(n.color, this.m_alpha), r.beginPath(), r.moveTo(e.x * i, e.y * i), r.lineTo(t.x * i, t.y * i), r.closePath(), r.stroke()
    }, e.prototype.DrawTransform = function (e) {
        var t = this.m_ctx, n = this.m_drawScale;
        t.beginPath(), t.strokeStyle = this._color(16711680, this.m_alpha
        ), t.moveTo(e.position.x * n, e.position.y * n), t.lineTo((e.position.x + this.m_xformScale * e.R.col1.x) * n, (e.position.y + this.m_xformScale * e.R.col1.y) * n), t.strokeStyle = this._color(65280, this.m_alpha), t.moveTo(e.position.x * n, e.position.y * n), t.lineTo((e.position.x + this.m_xformScale * e.R.col2.x) * n, (e.position.y + this.m_xformScale * e.R.col2.y) * n), t.closePath(), t.stroke()
    }
}();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i)Box2D.postDefs[i]();
delete Box2D.postDefs, document.createElement("video"), document.createElement("audio"), document.createElement("track");
var vjs = function (e, t, n) {
    var r;
    if (typeof e == "string") {
        e.indexOf("#") === 0 && (e = e.slice(1));
        if (vjs.players[e])return vjs.players[e];
        r = vjs.el(e)
    } else r = e;
    if (!r || !r.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");
    return r.player || new vjs.Player(r, t, n)
}, videojs = vjs;
window.videojs = window.vjs = vjs, vjs.CDN_VERSION = "4.1", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.options = {techOrder: ["html5", "flash"], html5: {}, flash: {}, width: 300, height: 150, defaultVolume: 0, children: {mediaLoader: {}, posterImage: {}, textTrackDisplay: {}, loadingSpinner: {}, bigPlayButton: {}, controlBar: {}}}, vjs.CDN_VERSION !== "GENERATED_CDN_VSN" && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.players = {}, vjs.CoreObject = vjs.CoreObject = function () {
}, vjs.CoreObject.extend = function (e) {
    var t, n;
    e = e || {}, t = e.init || e.init || this.prototype.init || this.prototype.init || function () {
    }, n = function () {
        t.apply(this, arguments)
    }, n.prototype = vjs.obj.create(this.prototype), n.prototype.constructor = n, n.extend = vjs.CoreObject.extend, n.create = vjs.CoreObject.create;
    for (var r in e)e.hasOwnProperty(r) && (n.prototype[r] = e[r]);
    return n
}, vjs.CoreObject.create = function () {
    var e = vjs.obj.create(this.prototype);
    return this.apply(e, arguments), e
}, vjs.on = function (e, t, n) {
    var r = vjs.getData(e);
    r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = vjs.guid++), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function (t) {
        if (r.disabled)return;
        t = vjs.fixEvent(t);
        var n = r.handlers[t.type];
        if (n) {
            var i = n.slice(0);
            for (var s = 0, o = i.length; s < o; s++) {
                if (t.isImmediatePropagationStopped())break;
                i[s].call(e, t)
            }
        }
    }), r.handlers[t].length == 1 && (document.addEventListener ? e.addEventListener(t, r.dispatcher, !1) : document.attachEvent && e.attachEvent("on" + t, r.dispatcher))
}, vjs.off = function (e, t, n) {
    if (!vjs.hasData(e))return;
    var r = vjs.getData(e);
    if (!r.handlers)return;
    var i = function (t) {
        r.handlers[t] = [], vjs.cleanUpEvents(e, t)
    };
    if (!t) {
        for (var s in r.handlers)i(s);
        return
    }
    var o = r.handlers[t];
    if (!o)return;
    if (!n) {
        i(t);
        return
    }
    if (n.guid)for (var u = 0; u < o.length; u++)o[u].guid === n.guid && o.splice(u--, 1);
    vjs.cleanUpEvents(e, t)
}, vjs.cleanUpEvents = function (e, t) {
    var n = vjs.getData(e);
    n.handlers[t].length === 0 && (delete n.handlers[t], document.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : document.detachEvent && e.detachEvent("on" + t, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(e)
}, vjs.fixEvent = function (e) {
    function t() {
        return!0
    }

    function n() {
        return!1
    }

    if (!e || !e.isPropagationStopped) {
        var r = e || window.event;
        e = {};
        for (var i in r)i !== "layerX" && i !== "layerY" && (e[i] = r[i]);
        e.target || (e.target = e.srcElement || document), e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement, e.preventDefault = function () {
            r.preventDefault && r.preventDefault(), e.returnValue = !1, e.isDefaultPrevented = t
        }, e.isDefaultPrevented = n, e.stopPropagation = function () {
            r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, e.isPropagationStopped = t
        }, e.isPropagationStopped = n, e.stopImmediatePropagation = function () {
            r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
        }, e.isImmediatePropagationStopped = n;
        if (e.clientX != null) {
            var s = document.documentElement, o = document.body;
            e.pageX = e.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)
        }
        e.which = e.charCode || e.keyCode, e.button != null && (e.button = e.button & 1 ? 0 : e.button & 4 ? 1 : e.button & 2 ? 2 : 0)
    }
    return e
}, vjs.trigger = function (e, t) {
    var n = vjs.hasData(e) ? vjs.getData(e) : {}, r = e.parentNode || e.ownerDocument;
    typeof t == "string" && (t = {type: t, target: e}), t = vjs.fixEvent(t), n.dispatcher && n.dispatcher.call(e, t);
    if (r && !t.isPropagationStopped())vjs.trigger(r, t); else if (!r && !t.isDefaultPrevented()) {
        var i = vjs.getData(t.target);
        t.target[t.type] && (i.disabled = !0, typeof t.target[t.type] == "function" && t.target[t.type](), i.disabled = !1)
    }
    return!t.isDefaultPrevented()
}, vjs.one = function (e, t, n) {
    vjs.on(e, t, function () {
        vjs.off(e, t, arguments.callee), n.apply(this, arguments)
    })
};
var hasOwnProp = Object.prototype.hasOwnProperty;
vjs.createEl = function (e, t) {
    var n = document.createElement(e || "div");
    for (var r in t)hasOwnProp.call(t, r) && (r.indexOf("aria-") !== -1 || r == "role" ? n.setAttribute(r, t[r]) : n[r] = t[r]);
    return n
}, vjs.capitalize = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}, vjs.obj = {}, vjs.obj.create = Object.create || function (e) {
    function t() {
    }

    return t.prototype = e, new t
}, vjs.obj.each = function (e, t, n) {
    for (var r in e)hasOwnProp.call(e, r) && t.call(n || this, r, e[r])
}, vjs.obj.merge = function (e, t) {
    if (!t)return e;
    for (var n in t)hasOwnProp.call(t, n) && (e[n] = t[n]);
    return e
}, vjs.obj.deepMerge = function (e, t) {
    var n, r, i, s;
    s = "[object Object]", e = vjs.obj.copy(e);
    for (n in t)hasOwnProp.call(t, n) && (r = e[n], i = t[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? e[n] = vjs.obj.deepMerge(r, i) : e[n] = t[n]);
    return e
}, vjs.obj.copy = function (e) {
    return vjs.obj.merge({}, e)
}, vjs.obj.isPlain = function (e) {
    return!!e && typeof e == "object" && e + "" === "[object Object]" && e.constructor === Object
}, vjs.bind = function (e, t, n) {
    t.guid || (t.guid = vjs.guid++);
    var r = function () {
        return t.apply(e, arguments)
    };
    return r.guid = n ? n + "_" + t.guid : t.guid, r
}, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function (e) {
    var t = e[vjs.expando];
    return t || (t = e[vjs.expando] = vjs.guid++, vjs.cache[t] = {}), vjs.cache[t]
}, vjs.hasData = function (e) {
    var t = e[vjs.expando];
    return!!t && !vjs.isEmpty(vjs.cache[t])
}, vjs.removeData = function (e) {
    var t = e[vjs.expando];
    if (!t)return;
    delete vjs.cache[t];
    try {
        delete e[vjs.expando]
    } catch (n) {
        e.removeAttribute ? e.removeAttribute(vjs.expando) : e[vjs.expando] = null
    }
}, vjs.isEmpty = function (e) {
    for (var t in e)if (e[t] !== null)return!1;
    return!0
}, vjs.addClass = function (e, t) {
    (" " + e.className + " ").indexOf(" " + t + " ") == -1 && (e.className = e.className === "" ? t : e.className + " " + t)
}, vjs.removeClass = function (e, t) {
    if (e.className.indexOf(t) == -1)return;
    var n = e.className.split(" ");
    for (var r = n.length - 1; r >= 0; r--)n[r] === t && n.splice(r, 1);
    e.className = n.join(" ")
}, vjs.TEST_VID = vjs.createEl("video"), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function () {
    var e = vjs.USER_AGENT.match(/OS (\d+)_/i);
    if (e && e[1])return e[1]
}(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function () {
    var e = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), t, n;
    return e ? (t = e[1] && parseFloat(e[1]), n = e[2] && parseFloat(e[2]), t && n ? parseFloat(e[1] + "." + e[2]) : t ? t : null) : null
}(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.getAttributeValues = function (e) {
    var t = {}, n = ",autoplay,controls,loop,muted,default,";
    if (e && e.attributes && e.attributes.length > 0) {
        var r = e.attributes, i, s;
        for (var o = r.length - 1; o >= 0; o--) {
            i = r[o].name, s = r[o].value;
            if (typeof e[i] == "boolean" || n.indexOf("," + i + ",") !== -1)s = s !== null ? !0 : !1;
            t[i] = s
        }
    }
    return t
}, vjs.getComputedDimension = function (e, t) {
    var n = "";
    return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (n = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"), n
}, vjs.insertFirst = function (e, t) {
    t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
}, vjs.support = {}, vjs.el = function (e) {
    return e.indexOf("#") === 0 && (e = e.slice(1)), document.getElementById(e)
}, vjs.formatTime = function (e, t) {
    t = t || e;
    var n = Math.floor(e % 60), r = Math.floor(e / 60 % 60), i = Math.floor(e / 3600), s = Math.floor(t / 60 % 60), o = Math.floor(t / 3600);
    return i = i > 0 || o > 0 ? i + ":" : "", r = (!i && s < 10 || r >= 10 ? r : "0" + r) + ":", n = n < 10 ? "0" + n : n, i + r + n
}, vjs.blockTextSelection = function () {
    document.body.focus(), document.onselectstart = function () {
        return!1
    }
}, vjs.unblockTextSelection = function () {
    document.onselectstart = function () {
        return!0
    }
}, vjs.trim = function (e) {
    return(e + "").replace(/^\s+/, "").replace(/\s+$/, "")
}, vjs.round = function (e, t) {
    return t || (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
}, vjs.createTimeRange = function (e, t) {
    return{length: 1, start: function () {
        return e
    }, end: function () {
        return t
    }}
}, vjs.get = function (e, t, n) {
    var r = e.indexOf("file:") === 0 || window.location.href.indexOf("file:") === 0 && e.indexOf("http") === -1;
    typeof XMLHttpRequest == "undefined" && (window.XMLHttpRequest = function () {
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {
        }
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (t) {
        }
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP")
        } catch (n) {
        }
        throw Error("This browser does not support XMLHttpRequest.")
    });
    var i = new XMLHttpRequest;
    try {
        i.open("GET", e)
    } catch (s) {
        n(s)
    }
    i.onreadystatechange = function () {
        i.readyState === 4 && (i.status === 200 || r && i.status === 0 ? t(i.responseText) : n && n())
    };
    try {
        i.send()
    } catch (s) {
        n && n(s)
    }
}, vjs.setLocalStorage = function (e, t) {
    try {
        var n = window.localStorage || !1;
        if (!n)return;
        n[e] = t
    } catch (r) {
        r.code == 22 || r.code == 1014 ? vjs.log("LocalStorage Full (VideoJS)", r) : r.code == 18 ? vjs.log("LocalStorage not allowed (VideoJS)", r) : vjs.log("LocalStorage Error (VideoJS)", r)
    }
}, vjs.getAbsoluteURL = function (e) {
    return e.match(/^https?:\/\//) || (e = vjs.createEl("div", {innerHTML: '<a href="' + e + '">x</a>'}).firstChild.href), e
}, vjs.log = function () {
    vjs.log.history = vjs.log.history || [], vjs.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments))
}, vjs.findPosition = function (e) {
    var t, n, r, i, s, o, u, a, f;
    return e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), t ? (n = document.documentElement, r = document.body, i = n.clientLeft || r.clientLeft || 0, s = window.pageXOffset || r.scrollLeft, o = t.left + s - i, u = n.clientTop || r.clientTop || 0, a = window.pageYOffset || r.scrollTop, f = t.top + a - u, {left: o, top: f}) : {left: 0, top: 0}
}, vjs.Component = vjs.CoreObject.extend({init: function (e, t, n) {
    this.player_ = e, this.options_ = vjs.obj.copy(this.options_), t = this.options(t), this.id_ = t.id || (t.el && t.el.id ? t.el.id : e.id() + "_component_" + vjs.guid++), this.name_ = t.name || null, this.el_ = t.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n)
}}), vjs.Component.prototype.dispose = function () {
    if (this.children_)for (var e = this.children_.length - 1; e >= 0; e--)this.children_[e].dispose && this.children_[e].dispose();
    this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null
}, vjs.Component.prototype.player_, vjs.Component.prototype.player = function () {
    return this.player_
}, vjs.Component.prototype.options_, vjs.Component.prototype.options = function (e) {
    return e === undefined ? this.options_ : this.options_ = vjs.obj.deepMerge(this.options_, e)
}, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function (e, t) {
    return vjs.createEl(e, t)
}, vjs.Component.prototype.el = function () {
    return this.el_
}, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function () {
    return this.contentEl_ || this.el_
}, vjs.Component.prototype.id_, vjs.Component.prototype.id = function () {
    return this.id_
}, vjs.Component.prototype.name_, vjs.Component.prototype.name = function () {
    return this.name_
}, vjs.Component.prototype.children_, vjs.Component.prototype.children = function () {
    return this.children_
}, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function (e) {
    return this.childIndex_[e]
}, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function (e) {
    return this.childNameIndex_[e]
}, vjs.Component.prototype.addChild = function (e, t) {
    var n, r, i, s;
    return typeof e == "string" ? (i = e, t = t || {}, r = t.componentClass || vjs.capitalize(i), t.name = i, n = new window.videojs[r](this.player_ || this, t)) : n = e, this.children_.push(n), typeof n.id == "function" && (this.childIndex_[n.id()] = n), i = i || n.name && n.name(), i && (this.childNameIndex_[i] = n), typeof n.el == "function" && n.el() && this.contentEl().appendChild(n.el()), n
}, vjs.Component.prototype.removeChild = function (e) {
    typeof e == "string" && (e = this.getChild(e));
    if (!e || !this.children_)return;
    var t = !1;
    for (var n = this.children_.length - 1; n >= 0; n--)if (this.children_[n] === e) {
        t = !0, this.children_.splice(n, 1);
        break
    }
    if (!t)return;
    this.childIndex_[e.id] = null, this.childNameIndex_[e.name] = null;
    var r = e.el();
    r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
}, vjs.Component.prototype.initChildren = function () {
    var e = this.options_;
    if (e && e.children) {
        var t = this;
        vjs.obj.each(e.children, function (e, n) {
            if (n === !1)return;
            var r = function () {
                t[e] = t.addChild(e, n)
            };
            n.loadEvent || r()
        })
    }
}, vjs.Component.prototype.buildCSSClass = function () {
    return""
}, vjs.Component.prototype.on = function (e, t) {
    return vjs.on(this.el_, e, vjs.bind(this, t)), this
}, vjs.Component.prototype.off = function (e, t) {
    return vjs.off(this.el_, e, t), this
}, vjs.Component.prototype.one = function (e, t) {
    return vjs.one(this.el_, e, vjs.bind(this, t)), this
}, vjs.Component.prototype.trigger = function (e, t) {
    return vjs.trigger(this.el_, e, t), this
}, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function (e) {
    return e && (this.isReady_ ? e.call(this) : (this.readyQueue_ === undefined && (this.readyQueue_ = []), this.readyQueue_.push(e))), this
}, vjs.Component.prototype.triggerReady = function () {
    this.isReady_ = !0;
    var e = this.readyQueue_;
    if (e && e.length > 0) {
        for (var t = 0, n = e.length; t < n; t++)e[t].call(this);
        this.readyQueue_ = [], this.trigger("ready")
    }
}, vjs.Component.prototype.addClass = function (e) {
    return vjs.addClass(this.el_, e), this
}, vjs.Component.prototype.removeClass = function (e) {
    return vjs.removeClass(this.el_, e), this
}, vjs.Component.prototype.show = function () {
    return this.el_.style.display = "block", this
}, vjs.Component.prototype.hide = function () {
    return this.el_.style.display = "none", this
}, vjs.Component.prototype.fadeIn = function () {
    return this.removeClass("vjs-fade-out"), this.addClass("vjs-fade-in"), this
}, vjs.Component.prototype.fadeOut = function () {
    return this.removeClass("vjs-fade-in"), this.addClass("vjs-fade-out"), this
}, vjs.Component.prototype.lockShowing = function () {
    return this.addClass("vjs-lock-showing"), this
}, vjs.Component.prototype.unlockShowing = function () {
    return this.removeClass("vjs-lock-showing"), this
}, vjs.Component.prototype.disable = function () {
    this.hide(), this.show = function () {
    }, this.fadeIn = function () {
    }
}, vjs.Component.prototype.width = function (e, t) {
    return this.dimension("width", e, t)
}, vjs.Component.prototype.height = function (e, t) {
    return this.dimension("height", e, t)
}, vjs.Component.prototype.dimensions = function (e, t) {
    return this.width(e, !0).height(t)
}, vjs.Component.prototype.dimension = function (e, t, n) {
    if (t !== undefined)return("" + t).indexOf("%") !== -1 || ("" + t).indexOf("px") !== -1 ? this.el_.style[e] = t : t === "auto" ? this.el_.style[e] = "" : this.el_.style[e] = t + "px", n || this.trigger("resize"), this;
    if (!this.el_)return 0;
    var r = this.el_.style[e], i = r.indexOf("px");
    return i !== -1 ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + vjs.capitalize(e)], 10)
}, vjs.Button = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t);
    var n = !1;
    this.on("touchstart", function () {
        n = !0
    }), this.on("touchmove", function () {
        n = !1
    });
    var r = this;
    this.on("touchend", function (e) {
        n && r.onClick(e), e.preventDefault(), e.stopPropagation()
    }), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur)
}}), vjs.Button.prototype.createEl = function (e, t) {
    return t = vjs.obj.merge({className: this.buildCSSClass(), innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>", role: "button", "aria-live": "polite", tabIndex: 0}, t), vjs.Component.prototype.createEl.call(this, e, t)
}, vjs.Button.prototype.buildCSSClass = function () {
    return"vjs-control " + vjs.Component.prototype.buildCSSClass.call(this)
}, vjs.Button.prototype.onClick = function () {
}, vjs.Button.prototype.onFocus = function () {
    vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Button.prototype.onKeyPress = function (e) {
    if (e.which == 32 || e.which == 13)e.preventDefault(), this.onClick()
}, vjs.Button.prototype.onBlur = function () {
    vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
},vjs.Slider = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), e.on(this.playerEvent, vjs.bind(this, this.update)), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.player_.on("controlsvisible", vjs.bind(this, this.update)), e.ready(vjs.bind(this, this.update)), this.boundEvents = {}
}}),vjs.Slider.prototype.createEl = function (e, t) {
    return t = t || {}, t.className = t.className + " vjs-slider", t = vjs.obj.merge({role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0}, t), vjs.Component.prototype.createEl.call(this, e, t)
},vjs.Slider.prototype.onMouseDown = function (e) {
    e.preventDefault(), vjs.blockTextSelection(), this.boundEvents.move = vjs.bind(this, this.onMouseMove), this.boundEvents.end = vjs.bind(this, this.onMouseUp), vjs.on(document, "mousemove", this.boundEvents.move), vjs.on(document, "mouseup", this.boundEvents.end), vjs.on(document, "touchmove", this.boundEvents.move), vjs.on(document, "touchend", this.boundEvents.end), this.onMouseMove(e)
},vjs.Slider.prototype.onMouseUp = function () {
    vjs.unblockTextSelection(), vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), this.update()
},vjs.Slider.prototype.update = function () {
    if (!this.el_)return;
    var e, t = this.getPercent(), n = this.handle, r = this.bar;
    isNaN(t) && (t = 0), e = t;
    if (n) {
        var i = this.el_, s = i.offsetWidth, o = n.el().offsetWidth, u = o ? o / s : 0, a = 1 - u, f = t * a;
        e = f + u / 2, n.el().style.left = vjs.round(f * 100, 2) + "%"
    }
    r.el().style.width = vjs.round(e * 100, 2) + "%"
},vjs.Slider.prototype.calculateDistance = function (e) {
    var t, n, r, i, s, o, u, a, f;
    t = this.el_, n = vjs.findPosition(t), s = o = t.offsetWidth, u = this.handle;
    if (this.options_.vertical) {
        i = n.top, e.changedTouches ? f = e.changedTouches[0].pageY : f = e.pageY;
        if (u) {
            var l = u.el().offsetHeight;
            i += l / 2, o -= l
        }
        return Math.max(0, Math.min(1, (i - f + o) / o))
    }
    r = n.left, e.changedTouches ? a = e.changedTouches[0].pageX : a = e.pageX;
    if (u) {
        var c = u.el().offsetWidth;
        r += c / 2, s -= c
    }
    return Math.max(0, Math.min(1, (a - r) / s))
},vjs.Slider.prototype.onFocus = function () {
    vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
},vjs.Slider.prototype.onKeyPress = function (e) {
    e.which == 37 ? (e.preventDefault(), this.stepBack()) : e.which == 39 && (e.preventDefault(), this.stepForward())
},vjs.Slider.prototype.onBlur = function () {
    vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
},vjs.Slider.prototype.onClick = function (e) {
    e.stopImmediatePropagation(), e.preventDefault()
},vjs.SliderHandle = vjs.Component.extend(),vjs.SliderHandle.prototype.defaultValue = 0,vjs.SliderHandle.prototype.createEl = function (e, t) {
    return t = t || {}, t.className = t.className + " vjs-slider-handle", t = vjs.obj.merge({innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"}, t), vjs.Component.prototype.createEl.call(this, "div", t)
},vjs.Menu = vjs.Component.extend(),vjs.Menu.prototype.addItem = function (e) {
    this.addChild(e), e.on("click", vjs.bind(this, function () {
        this.unlockShowing()
    }))
},vjs.Menu.prototype.createEl = function () {
    var e = this.options().contentElType || "ul";
    this.contentEl_ = vjs.createEl(e, {className: "vjs-menu-content"});
    var t = vjs.Component.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
    return t.appendChild(this.contentEl_), vjs.on(t, "click", function (e) {
        e.preventDefault(), e.stopImmediatePropagation()
    }), t
},vjs.MenuItem = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t), this.selected(t.selected)
}}),vjs.MenuItem.prototype.createEl = function (e, t) {
    return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({className: "vjs-menu-item", innerHTML: this.options_.label}, t))
},vjs.MenuItem.prototype.onClick = function () {
    this.selected(!0)
},vjs.MenuItem.prototype.selected = function (e) {
    e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
},vjs.MenuButton = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t), this.menu = this.createMenu(), this.addChild(this.menu), this.items && this.items.length === 0 && this.hide(), this.on("keyup", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
}}),vjs.MenuButton.prototype.buttonPressed_ = !1,vjs.MenuButton.prototype.createMenu = function () {
    var e = new vjs.Menu(this.player_);
    this.options().title && e.el().appendChild(vjs.createEl("li", {className: "vjs-menu-title", innerHTML: vjs.capitalize(this.kind_), tabindex: -1})), this.items = this.createItems();
    if (this.items)for (var t = 0; t < this.items.length; t++)e.addItem(this.items[t]);
    return e
},vjs.MenuButton.prototype.createItems = function () {
},vjs.MenuButton.prototype.buildCSSClass = function () {
    return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this)
},vjs.MenuButton.prototype.onFocus = function () {
},vjs.MenuButton.prototype.onBlur = function () {
},vjs.MenuButton.prototype.onClick = function () {
    this.one("mouseout", vjs.bind(this, function () {
        this.menu.unlockShowing(), this.el_.blur()
    })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
},vjs.MenuButton.prototype.onKeyPress = function (e) {
    e.preventDefault(), e.which == 32 || e.which == 13 ? this.buttonPressed_ ? this.unpressButton() : this.pressButton() : e.which == 27 && this.buttonPressed_ && this.unpressButton()
},vjs.MenuButton.prototype.pressButton = function () {
    this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus()
},vjs.MenuButton.prototype.unpressButton = function () {
    this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
},vjs.Player = vjs.Component.extend({init: function (e, t, n) {
    this.tag = e, t = vjs.obj.merge(this.getTagSettings(e), t), this.cache_ = {}, this.poster_ = t.poster, this.controls_ = t.controls, t.customControlsOnMobile !== !0 && (vjs.IS_IOS || vjs.IS_ANDROID) ? (e.controls = t.controls, this.controls_ = !1) : e.controls = !1, vjs.Component.call(this, this, t, n), this.one("play", function (e) {
        var t = {type: "firstplay", target: this.el_}, n = vjs.trigger(this.el_, t);
        n || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation())
    }), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("error", this.onError), this.on("fullscreenchange", this.onFullscreenChange), vjs.players[this.id_] = this, t.plugins && vjs.obj.each(t.plugins, function (e, t) {
        this[e](t)
    }, this)
}}),vjs.Player.prototype.options_ = vjs.options,vjs.Player.prototype.dispose = function () {
    vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.stopTrackingProgress(), this.stopTrackingCurrentTime(), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this)
},vjs.Player.prototype.getTagSettings = function (e) {
    var t = {sources: [], tracks: []};
    vjs.obj.merge(t, vjs.getAttributeValues(e));
    if (e.hasChildNodes()) {
        var n, r, i, s, o;
        n = e.childNodes;
        for (s = 0, o = n.length; s < o; s++)r = n[s], i = r.nodeName.toLowerCase(), i === "source" ? t.sources.push(vjs.getAttributeValues(r)) : i === "track" && t.tracks.push(vjs.getAttributeValues(r))
    }
    return t
},vjs.Player.prototype.createEl = function () {
    var e = this.el_ = vjs.Component.prototype.createEl.call(this, "div"), t = this.tag;
    t.removeAttribute("width"), t.removeAttribute("height");
    if (t.hasChildNodes()) {
        var n, r, i, s, o, u;
        n = t.childNodes, r = n.length, u = [];
        while (r--)s = n[r], o = s.nodeName.toLowerCase(), (o === "source" || o === "track") && u.push(s);
        for (i = 0; i < u.length; i++)t.removeChild(u[i])
    }
    return t.id = t.id || "vjs_video_" + vjs.guid++, e.id = t.id, e.className = t.className, t.id += "_html5_api", t.className = "vjs-tech", t.player = e.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), t.parentNode && t.parentNode.insertBefore(e, t), vjs.insertFirst(t, e), e
},vjs.Player.prototype.loadTech = function (e, t) {
    this.tech ? this.unloadTech() : e !== "Html5" && this.tag && (this.el_.removeChild(this.tag), this.tag.player = null, this.tag = null), this.techName = e, this.isReady_ = !1;
    var n = function () {
        this.player_.triggerReady(), this.features.progressEvents || this.player_.manualProgressOn(), this.features.timeupdateEvents || this.player_.manualTimeUpdatesOn()
    }, r = vjs.obj.merge({source: t, parentEl: this.el_}, this.options_[e.toLowerCase()]);
    t && (t.src == this.cache_.src && this.cache_.currentTime > 0 && (r.startTime = this.cache_.currentTime), this.cache_.src = t.src), this.tech = new window.videojs[e](this, r), this.tech.ready(n)
},vjs.Player.prototype.unloadTech = function () {
    this.isReady_ = !1, this.tech.dispose(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1
},vjs.Player.prototype.manualProgressOn = function () {
    this.manualProgress = !0, this.trackProgress(), this.tech.one("progress", function () {
        this.features.progressEvents = !0, this.player_.manualProgressOff()
    })
},vjs.Player.prototype.manualProgressOff = function () {
    this.manualProgress = !1, this.stopTrackingProgress()
},vjs.Player.prototype.trackProgress = function () {
    this.progressInterval = setInterval(vjs.bind(this, function () {
        this.cache_.bufferEnd < this.buffered().end(0) ? this.trigger("progress") : this.bufferedPercent() == 1 && (this.stopTrackingProgress(), this.trigger("progress"))
    }), 500)
},vjs.Player.prototype.stopTrackingProgress = function () {
    clearInterval(this.progressInterval)
},vjs.Player.prototype.manualTimeUpdatesOn = function () {
    this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime), this.tech.one("timeupdate", function () {
        this.features.timeupdateEvents = !0, this.player_.manualTimeUpdatesOff()
    })
},vjs.Player.prototype.manualTimeUpdatesOff = function () {
    this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
},vjs.Player.prototype.trackCurrentTime = function () {
    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(vjs.bind(this, function () {
        this.trigger("timeupdate")
    }), 250)
},vjs.Player.prototype.stopTrackingCurrentTime = function () {
    clearInterval(this.currentTimeInterval)
},vjs.Player.prototype.onEnded = function () {
    this.options_.loop && (this.currentTime(0), this.play())
},vjs.Player.prototype.onPlay = function () {
    vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing")
},vjs.Player.prototype.onFirstPlay = function () {
    this.options_.starttime && this.currentTime(this.options_.starttime)
},vjs.Player.prototype.onPause = function () {
    vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused")
},vjs.Player.prototype.onProgress = function () {
    this.bufferedPercent() == 1 && this.trigger("loadedalldata")
},vjs.Player.prototype.onDurationChange = function () {
    this.duration(this.techGet("duration"))
},vjs.Player.prototype.onError = function (e) {
    vjs.log("Video Error", e)
},vjs.Player.prototype.onFullscreenChange = function () {
    this.isFullScreen ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
},vjs.Player.prototype.cache_,vjs.Player.prototype.getCache = function () {
    return this.cache_
},vjs.Player.prototype.techCall = function (e, t) {
    if (this.tech && !this.tech.isReady_)this.tech.ready(function () {
        this[e](t)
    }); else try {
        this.tech[e](t)
    } catch (n) {
        throw vjs.log(n), n
    }
},vjs.Player.prototype.techGet = function (e) {
    if (this.tech.isReady_)try {
        return this.tech[e]()
    } catch (t) {
        throw this.tech[e] === undefined ? vjs.log("Video.js: " + e + " method not defined for " + this.techName + " playback technology.", t) : t.name == "TypeError" ? (vjs.log("Video.js: " + e + " unavailable on " + this.techName + " playback technology element.", t), this.tech.isReady_ = !1) : vjs.log(t), t
    }
    return
},vjs.Player.prototype.play = function () {
    return this.techCall("play"), this
},vjs.Player.prototype.pause = function () {
    return this.techCall("pause"), this
},vjs.Player.prototype.paused = function () {
    return this.techGet("paused") === !1 ? !1 : !0
},vjs.Player.prototype.currentTime = function (e) {
    return e !== undefined ? (this.cache_.lastSetCurrentTime = e, this.techCall("setCurrentTime", e), this.manualTimeUpdates && this.trigger("timeupdate"), this) : this.cache_.currentTime = this.techGet("currentTime") || 0
},vjs.Player.prototype.duration = function (e) {
    return e !== undefined ? (this.cache_.duration = parseFloat(e), this) : this.cache_.duration
},vjs.Player.prototype.remainingTime = function () {
    return this.duration() - this.currentTime()
},vjs.Player.prototype.buffered = function () {
    var e = this.techGet("buffered"), t = 0, n = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;
    return e && e.length > 0 && e.end(0) !== n && (n = e.end(0), this.cache_.bufferEnd = n), vjs.createTimeRange(t, n)
},vjs.Player.prototype.bufferedPercent = function () {
    return this.duration() ? this.buffered().end(0) / this.duration() : 0
},vjs.Player.prototype.volume = function (e) {
    var t;
    return e !== undefined ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall("setVolume", t), vjs.setLocalStorage("volume", t), this) : (t = parseFloat(this.techGet("volume")), isNaN(t) ? 1 : t)
},vjs.Player.prototype.muted = function (e) {
    return e !== undefined ? (this.techCall("setMuted", e), this) : this.techGet("muted") || !1
},vjs.Player.prototype.supportsFullScreen = function () {
    return this.techGet("supportsFullScreen") || !1
},vjs.Player.prototype.requestFullScreen = function () {
    var e = vjs.support.requestFullScreen;
    return this.isFullScreen = !0, e ? (vjs.on(document, e.eventName, vjs.bind(this, function (t) {
        this.isFullScreen = document[e.isFullScreen], this.isFullScreen === !1 && vjs.off(document, e.eventName, arguments.callee), this.trigger("fullscreenchange")
    })), this.el_[e.requestFn]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
},vjs.Player.prototype.cancelFullScreen = function () {
    var e = vjs.support.requestFullScreen;
    return this.isFullScreen = !1, e ? document[e.cancelFn]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
},vjs.Player.prototype.enterFullWindow = function () {
    this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
},vjs.Player.prototype.fullWindowOnEscKey = function (e) {
    e.keyCode === 27 && (this.isFullScreen === !0 ? this.cancelFullScreen() : this.exitFullWindow())
},vjs.Player.prototype.exitFullWindow = function () {
    this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
},vjs.Player.prototype.selectSource = function (e) {
    for (var t = 0, n = this.options_.techOrder; t < n.length; t++) {
        var r = vjs.capitalize(n[t]), i = window.videojs[r];
        if (i.isSupported())for (var s = 0, o = e; s < o.length; s++) {
            var u = o[s];
            if (i.canPlaySource(u))return{source: u, tech: r}
        }
    }
    return!1
},vjs.Player.prototype.src = function (e) {
    if (e instanceof Array) {
        var t = this.selectSource(e), n;
        t ? (e = t.source, n = t.tech, n == this.techName ? this.src(e) : this.loadTech(n, e)) : this.el_.appendChild(vjs.createEl("p", {innerHTML: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'}))
    } else e instanceof Object ? window.videojs[this.techName].canPlaySource(e) ? this.src(e.src) : this.src([e]) : (this.cache_.src = e, this.isReady_ ? (this.techCall("src", e), this.options_["preload"] == "auto" && this.load(), this.options_.autoplay && this.play()) : this.ready(function () {
        this.src(e)
    }));
    return this
},vjs.Player.prototype.load = function () {
    return this.techCall("load"), this
},vjs.Player.prototype.currentSrc = function () {
    return this.techGet("currentSrc") || this.cache_.src || ""
},vjs.Player.prototype.preload = function (e) {
    return e !== undefined ? (this.techCall("setPreload", e), this.options_.preload = e, this) : this.techGet("preload")
},vjs.Player.prototype.autoplay = function (e) {
    return e !== undefined ? (this
        .techCall("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet("autoplay", e)
},vjs.Player.prototype.loop = function (e) {
    return e !== undefined ? (this.techCall("setLoop", e), this.options_.loop = e, this) : this.techGet("loop")
},vjs.Player.prototype.poster_,vjs.Player.prototype.poster = function (e) {
    return e !== undefined && (this.poster_ = e), this.poster_
},vjs.Player.prototype.controls_,vjs.Player.prototype.controls = function (e) {
    return e !== undefined && this.controls_ !== e && (this.controls_ = !!e, this.trigger("controlschange")), this.controls_
},vjs.Player.prototype.error = function () {
    return this.techGet("error")
},vjs.Player.prototype.ended = function () {
    return this.techGet("ended")
},function () {
    var e, t, n;
    n = document.createElement("div"), t = {}, n.cancelFullscreen !== undefined ? (t.requestFn = "requestFullscreen", t.cancelFn = "exitFullscreen", t.eventName = "fullscreenchange", t.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (e = "moz", t.isFullScreen = e + "FullScreen") : (e = "webkit", t.isFullScreen = e + "IsFullScreen"), n[e + "RequestFullScreen"] && (t.requestFn = e + "RequestFullScreen", t.cancelFn = e + "CancelFullScreen"), t.eventName = e + "fullscreenchange"), document[t.cancelFn] && (vjs.support.requestFullScreen = t)
}(),vjs.ControlBar = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.controls() || this.disable(), e.one("play", vjs.bind(this, function () {
        var e, t = vjs.bind(this, this.fadeIn), n = vjs.bind(this, this.fadeOut);
        this.fadeIn(), "ontouchstart"in window || (this.player_.on("mouseover", t), this.player_.on("mouseout", n), this.player_.on("pause", vjs.bind(this, this.lockShowing)), this.player_.on("play", vjs.bind(this, this.unlockShowing))), e = !1, this.player_.on("touchstart", function () {
            e = !0
        }), this.player_.on("touchmove", function () {
            e = !1
        }), this.player_.on("touchend", vjs.bind(this, function (t) {
            var n;
            e && (n = this.el().className.search("fade-in"), n !== -1 ? this.fadeOut() : this.fadeIn()), e = !1, this.player_.paused() || t.preventDefault()
        }))
    }))
}}),vjs.ControlBar.prototype.options_ = {loadEvent: "play", children: {playToggle: {}, currentTimeDisplay: {}, timeDivider: {}, durationDisplay: {}, remainingTimeDisplay: {}, progressControl: {}, fullscreenToggle: {}, volumeControl: {}, muteToggle: {}}},vjs.ControlBar.prototype.createEl = function () {
    return vjs.createEl("div", {className: "vjs-control-bar"})
},vjs.ControlBar.prototype.fadeIn = function () {
    vjs.Component.prototype.fadeIn.call(this), this.player_.trigger("controlsvisible")
},vjs.ControlBar.prototype.fadeOut = function () {
    vjs.Component.prototype.fadeOut.call(this), this.player_.trigger("controlshidden")
},vjs.PlayToggle = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t), e.on("play", vjs.bind(this, this.onPlay)), e.on("pause", vjs.bind(this, this.onPause))
}}),vjs.PlayToggle.prototype.buttonText = "Play",vjs.PlayToggle.prototype.buildCSSClass = function () {
    return"vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
},vjs.PlayToggle.prototype.onClick = function () {
    this.player_.paused() ? this.player_.play() : this.player_.pause()
},vjs.PlayToggle.prototype.onPlay = function () {
    vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), this.el_.children[0].children[0].innerHTML = "Pause"
},vjs.PlayToggle.prototype.onPause = function () {
    vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = "Play"
},vjs.CurrentTimeDisplay = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent))
}}),vjs.CurrentTimeDisplay.prototype.createEl = function () {
    var e = vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-current-time vjs-time-controls vjs-control"});
    return this.content = vjs.createEl("div", {className: "vjs-current-time-display", innerHTML: '<span class="vjs-control-text">Current Time </span>0:00', "aria-live": "off"}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e
},vjs.CurrentTimeDisplay.prototype.updateContent = function () {
    var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + vjs.formatTime(e, this.player_.duration())
},vjs.DurationDisplay = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent))
}}),vjs.DurationDisplay.prototype.createEl = function () {
    var e = vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-duration vjs-time-controls vjs-control"});
    return this.content = vjs.createEl("div", {className: "vjs-duration-display", innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00', "aria-live": "off"}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e
},vjs.DurationDisplay.prototype.updateContent = function () {
    this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + vjs.formatTime(this.player_.duration()))
},vjs.TimeDivider = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t)
}}),vjs.TimeDivider.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-time-divider", innerHTML: "<div><span>/</span></div>"})
},vjs.RemainingTimeDisplay = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent))
}}),vjs.RemainingTimeDisplay.prototype.createEl = function () {
    var e = vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-remaining-time vjs-time-controls vjs-control"});
    return this.content = vjs.createEl("div", {className: "vjs-remaining-time-display", innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00', "aria-live": "off"}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e
},vjs.RemainingTimeDisplay.prototype.updateContent = function () {
    this.player_.duration() && this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + vjs.formatTime(this.player_.remainingTime()))
},vjs.FullscreenToggle = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t)
}}),vjs.FullscreenToggle.prototype.buttonText = "Fullscreen",vjs.FullscreenToggle.prototype.buildCSSClass = function () {
    return"vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
},vjs.FullscreenToggle.prototype.onClick = function () {
    this.player_.isFullScreen ? (this.player_.cancelFullScreen(), this.el_.children[0].children[0].innerHTML = "Fullscreen") : (this.player_.requestFullScreen(), this.el_.children[0].children[0].innerHTML = "Non-Fullscreen")
},vjs.ProgressControl = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t)
}}),vjs.ProgressControl.prototype.options_ = {children: {seekBar: {}}},vjs.ProgressControl.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
},vjs.SeekBar = vjs.Slider.extend({init: function (e, t) {
    vjs.Slider.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)), e.ready(vjs.bind(this, this.updateARIAAttributes))
}}),vjs.SeekBar.prototype.options_ = {children: {loadProgressBar: {}, playProgressBar: {}, seekHandle: {}}, barName: "playProgressBar", handleName: "seekHandle"},vjs.SeekBar.prototype.playerEvent = "timeupdate",vjs.SeekBar.prototype.createEl = function () {
    return vjs.Slider.prototype.createEl.call(this, "div", {className: "vjs-progress-holder", "aria-label": "video progress bar"})
},vjs.SeekBar.prototype.updateARIAAttributes = function () {
    var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.setAttribute("aria-valuenow", vjs.round(this.getPercent() * 100, 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(e, this.player_.duration()))
},vjs.SeekBar.prototype.getPercent = function () {
    return this.player_.currentTime() / this.player_.duration()
},vjs.SeekBar.prototype.onMouseDown = function (e) {
    vjs.Slider.prototype.onMouseDown.call(this, e), this.player_.scrubbing = !0, this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
},vjs.SeekBar.prototype.onMouseMove = function (e) {
    var t = this.calculateDistance(e) * this.player_.duration();
    t == this.player_.duration() && (t -= .1), this.player_.currentTime(t)
},vjs.SeekBar.prototype.onMouseUp = function (e) {
    vjs.Slider.prototype.onMouseUp.call(this, e), this.player_.scrubbing = !1, this.videoWasPlaying && this.player_.play()
},vjs.SeekBar.prototype.stepForward = function () {
    this.player_.currentTime(this.player_.currentTime() + 5)
},vjs.SeekBar.prototype.stepBack = function () {
    this.player_.currentTime(this.player_.currentTime() - 5)
},vjs.LoadProgressBar = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.on("progress", vjs.bind(this, this.update))
}}),vjs.LoadProgressBar.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-load-progress", innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'})
},vjs.LoadProgressBar.prototype.update = function () {
    this.el_.style && (this.el_.style.width = vjs.round(this.player_.bufferedPercent() * 100, 2) + "%")
},vjs.PlayProgressBar = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t)
}}),vjs.PlayProgressBar.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-play-progress", innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'})
},vjs.SeekHandle = vjs.SliderHandle.extend(),vjs.SeekHandle.prototype.defaultValue = "00:00",vjs.SeekHandle.prototype.createEl = function () {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {className: "vjs-seek-handle"})
},vjs.VolumeControl = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function () {
        e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
    }))
}}),vjs.VolumeControl.prototype.options_ = {children: {volumeBar: {}}},vjs.VolumeControl.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control"})
},vjs.VolumeBar = vjs.Slider.extend({init: function (e, t) {
    vjs.Slider.call(this, e, t), e.on("volumechange", vjs.bind(this, this.updateARIAAttributes)), e.ready(vjs.bind(this, this.updateARIAAttributes)), setTimeout(vjs.bind(this, this.update), 0)
}}),vjs.VolumeBar.prototype.updateARIAAttributes = function () {
    this.el_.setAttribute("aria-valuenow", vjs.round(this.player_.volume() * 100, 2)), this.el_.setAttribute("aria-valuetext", vjs.round(this.player_.volume() * 100, 2) + "%")
},vjs.VolumeBar.prototype.options_ = {children: {volumeLevel: {}, volumeHandle: {}}, barName: "volumeLevel", handleName: "volumeHandle"},vjs.VolumeBar.prototype.playerEvent = "volumechange",vjs.VolumeBar.prototype.createEl = function () {
    return vjs.Slider.prototype.createEl.call(this, "div", {className: "vjs-volume-bar", "aria-label": "volume level"})
},vjs.VolumeBar.prototype.onMouseMove = function (e) {
    this.player_.volume(this.calculateDistance(e))
},vjs.VolumeBar.prototype.getPercent = function () {
    return this.player_.muted() ? 0 : this.player_.volume()
},vjs.VolumeBar.prototype.stepForward = function () {
    this.player_.volume(this.player_.volume() + .1)
},vjs.VolumeBar.prototype.stepBack = function () {
    this.player_.volume(this.player_.volume() - .1)
},vjs.VolumeLevel = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t)
}}),vjs.VolumeLevel.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-volume-level", innerHTML: '<span class="vjs-control-text"></span>'})
},vjs.VolumeHandle = vjs.SliderHandle.extend(),vjs.VolumeHandle.prototype.defaultValue = "00:00",vjs.VolumeHandle.prototype.createEl = function () {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {className: "vjs-volume-handle"})
},vjs.MuteToggle = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t), e.on("volumechange", vjs.bind(this, this.update)), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function () {
        e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
    }))
}}),vjs.MuteToggle.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {className: "vjs-mute-control vjs-control", innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'})
},vjs.MuteToggle.prototype.onClick = function () {
    this.player_.muted(this.player_.muted() ? !1 : !0)
},vjs.MuteToggle.prototype.update = function () {
    var e = this.player_.volume(), t = 3;
    e === 0 || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2), this.player_.muted() ? this.el_.children[0].children[0].innerHTML != "Unmute" && (this.el_.children[0].children[0].innerHTML = "Unmute") : this.el_.children[0].children[0].innerHTML != "Mute" && (this.el_.children[0].children[0].innerHTML = "Mute");
    for (var n = 0; n < 4; n++)vjs.removeClass(this.el_, "vjs-vol-" + n);
    vjs.addClass(this.el_, "vjs-vol-" + t)
},vjs.VolumeMenuButton = vjs.MenuButton.extend({init: function (e, t) {
    vjs.MenuButton.call(this, e, t), e.on("volumechange", vjs.bind(this, this.update)), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function () {
        e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
    })), this.addClass("vjs-menu-button")
}}),vjs.VolumeMenuButton.prototype.createMenu = function () {
    var e = new vjs.Menu(this.player_, {contentElType: "div"}), t = new vjs.VolumeBar(this.player_, vjs.obj.merge({vertical: !0}, this.options_.volumeBar));
    return e.addChild(t), e
},vjs.VolumeMenuButton.prototype.onClick = function () {
    vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this)
},vjs.VolumeMenuButton.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {className: "vjs-volume-menu-button vjs-menu-button vjs-control", innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'})
},vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update,vjs.PosterImage = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t), (!e.poster() || !e.controls()) && this.hide(), e.on("play", vjs.bind(this, this.hide))
}}),vjs.PosterImage.prototype.createEl = function () {
    var e = vjs.createEl("div", {className: "vjs-poster", tabIndex: -1}), t = this.player_.poster();
    return t && ("backgroundSize"in e.style ? e.style.backgroundImage = 'url("' + t + '")' : e.appendChild(vjs.createEl("img", {src: t}))), e
},vjs.PosterImage.prototype.onClick = function () {
    this.player_.play()
},vjs.LoadingSpinner = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), e.on("canplay", vjs.bind(this, this.hide)), e.on("canplaythrough", vjs.bind(this, this.hide)), e.on("playing", vjs.bind(this, this.hide)), e.on("seeked", vjs.bind(this, this.hide)), e.on("seeking", vjs.bind(this, this.show)), e.on("seeked", vjs.bind(this, this.hide)), e.on("error", vjs.bind(this, this.show)), e.on("waiting", vjs.bind(this, this.show))
}}),vjs.LoadingSpinner.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner"})
},vjs.BigPlayButton = vjs.Button.extend({init: function (e, t) {
    vjs.Button.call(this, e, t), e.controls() || this.hide(), e.on("play", vjs.bind(this, this.hide))
}}),vjs.BigPlayButton.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {className: "vjs-big-play-button", innerHTML: "<span></span>", "aria-label": "play video"})
},vjs.BigPlayButton.prototype.onClick = function () {
    this.player_.play()
},vjs.MediaTechController = vjs.Component.extend({init: function (e, t, n) {
    vjs.Component.call(this, e, t, n)
}}),vjs.MediaTechController.prototype.onClick = function () {
    return vjs.IS_ANDROID ? function () {
    } : function () {
        this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
    }
}(),vjs.MediaTechController.prototype.features = {volumeControl: !0, fullscreenResize: !1, progressEvents: !1, timeupdateEvents: !1},vjs.media = {},vjs.media.ApiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
for (var i = vjs.media.ApiMethods.length - 1; i >= 0; i--) {
    var methodName = vjs.media.ApiMethods[i];
    vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]] = createMethod(methodName)
}
vjs.Html5 = vjs.MediaTechController.extend({init: function (e, t, n) {
    this.features.volumeControl = vjs.Html5.canControlVolume(), this.features.movingMediaElementInDOM = !vjs.IS_IOS, this.features.fullscreenResize = !0, vjs.MediaTechController.call(this, e, t, n);
    var r = t.source;
    r && this.el_.currentSrc == r.src ? e.trigger("loadstart") : r && (this.el_.src = r.src), e.ready(function () {
        this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
    }), this.on("click", this.onClick), this.setupTriggers(), this.triggerReady()
}}), vjs.Html5.prototype.dispose = function () {
    vjs.MediaTechController.prototype.dispose.call(this)
}, vjs.Html5.prototype.createEl = function () {
    var e = this.player_, t = e.tag, n;
    if (!t || this.features.movingMediaElementInDOM === !1)t ? (t.player = null, e.tag = null, e.el().removeChild(t), t = t.cloneNode(!1)) : t = vjs.createEl("video", {id: e.id() + "_html5_api", className: "vjs-tech"}), t.player = e, vjs.insertFirst(t, e.el());
    var r = ["autoplay", "preload", "loop", "muted"];
    for (var i = r.length - 1; i >= 0; i--) {
        var s = r[i];
        e.options_[s] !== null && (t[s] = e.options_[s])
    }
    return t
}, vjs.Html5.prototype.setupTriggers = function () {
    for (var e = vjs.Html5.Events.length - 1; e >= 0; e--)vjs.on(this.el_, vjs.Html5.Events[e], vjs.bind(this.player_, this.eventHandler))
}, vjs.Html5.prototype.eventHandler = function (e) {
    this.trigger(e), e.stopPropagation()
}, vjs.Html5.prototype.play = function () {
    this.el_.play()
}, vjs.Html5.prototype.pause = function () {
    this.el_.pause()
}, vjs.Html5.prototype.paused = function () {
    return this.el_.paused
}, vjs.Html5.prototype.currentTime = function () {
    return this.el_.currentTime
}, vjs.Html5.prototype.setCurrentTime = function (e) {
    try {
        this.el_.currentTime = e
    } catch (t) {
        vjs.log(t, "Video is not ready. (Video.js)")
    }
}, vjs.Html5.prototype.duration = function () {
    return this.el_.duration || 0
}, vjs.Html5.prototype.buffered = function () {
    return this.el_.buffered
}, vjs.Html5.prototype.volume = function () {
    return this.el_.volume
}, vjs.Html5.prototype.setVolume = function (e) {
    this.el_.volume = e
}, vjs.Html5.prototype.muted = function () {
    return this.el_.muted
}, vjs.Html5.prototype.setMuted = function (e) {
    this.el_.muted = e
}, vjs.Html5.prototype.width = function () {
    return this.el_.offsetWidth
}, vjs.Html5.prototype.height = function () {
    return this.el_.offsetHeight
}, vjs.Html5.prototype.supportsFullScreen = function () {
    if (typeof this.el_.webkitEnterFullScreen == "function")if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))return!0;
    return!1
}, vjs.Html5.prototype.enterFullScreen = function () {
    var e = this.el_;
    e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), setTimeout(function () {
        e.pause(), e.webkitEnterFullScreen()
    }, 0)) : e.webkitEnterFullScreen()
}, vjs.Html5.prototype.exitFullScreen = function () {
    this.el_.webkitExitFullScreen()
}, vjs.Html5.prototype.src = function (e) {
    this.el_.src = e
}, vjs.Html5.prototype.load = function () {
    this.el_.load()
}, vjs.Html5.prototype.currentSrc = function () {
    return this.el_.currentSrc
}, vjs.Html5.prototype.preload = function () {
    return this.el_.preload
}, vjs.Html5.prototype.setPreload = function (e) {
    this.el_.preload = e
}, vjs.Html5.prototype.autoplay = function () {
    return this.el_.autoplay
}, vjs.Html5.prototype.setAutoplay = function (e) {
    this.el_.autoplay = e
}, vjs.Html5.prototype.loop = function () {
    return this.el_.loop
}, vjs.Html5.prototype.setLoop = function (e) {
    this.el_.loop = e
}, vjs.Html5.prototype.error = function () {
    return this.el_.error
}, vjs.Html5.prototype.seeking = function () {
    return this.el_.seeking
}, vjs.Html5.prototype.ended = function () {
    return this.el_.ended
}, vjs.Html5.prototype.defaultMuted = function () {
    return this.el_.defaultMuted
}, vjs.Html5.isSupported = function () {
    return!!vjs.TEST_VID.canPlayType
}, vjs.Html5.canPlaySource = function (e) {
    try {
        return!!vjs.TEST_VID.canPlayType(e.type)
    } catch (t) {
        return""
    }
}, vjs.Html5.canControlVolume = function () {
    var e = vjs.TEST_VID.volume;
    return vjs.TEST_VID.volume = e / 2 + .1, e !== vjs.TEST_VID.volume
}, vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function (e) {
    return e && e.toLowerCase().indexOf("video/mp4") != -1 ? "maybe" : ""
}), vjs.Flash = vjs.MediaTechController.extend({init: function (e, t, n) {
    vjs.MediaTechController.call(this, e, t, n);
    var r = t.source, i = t.parentEl, s = this.el_ = vjs.createEl("div", {id: e.id() + "_temp_flash"}), o = e.id() + "_flash_api", u = e.options_, a = vjs.obj.merge({readyFunction: "videojs.Flash.onReady", eventProxyFunction: "videojs.Flash.onEvent", errorEventProxyFunction: "videojs.Flash.onError", autoplay: u.autoplay, preload: u.preload, loop: u.loop, muted: u.muted}, t.flashVars), f = vjs.obj.merge({wmode: "opaque", bgcolor: "#000000"}, t.params), l = vjs.obj.merge({id: o, name: o, "class": "vjs-tech"}, t.attributes);
    r && (a.src = encodeURIComponent(vjs.getAbsoluteURL(r.src))), vjs.insertFirst(s, i), t.startTime && this.ready(function () {
        this.load(), this.play(), this.currentTime(t.startTime)
    });
    if (t.iFrameMode === !0 && !vjs.IS_FIREFOX) {
        var c = vjs.createEl("iframe", {id: o + "_iframe", name: o + "_iframe", className: "vjs-tech", scrolling: "no", marginWidth: 0, marginHeight: 0, frameBorder: 0});
        a.readyFunction = "ready", a.eventProxyFunction = "events", a.errorEventProxyFunction = "errors", vjs.on(c, "load", vjs.bind(this, function () {
            var e, n = c.contentWindow;
            e = c.contentDocument ? c.contentDocument : c.contentWindow.document, e.write(vjs.Flash.getEmbedCode(t.swf, a, f, l)), n.player = this.player_, n.ready = vjs.bind(this.player_, function (t) {
                var n = e.getElementById(t), r = this, i = r.tech;
                i.el_ = n, vjs.on(n, "click", i.bind(i.onClick)), vjs.Flash.checkReady(i)
            }), n.events = vjs.bind(this.player_, function (e, t) {
                var n = this;
                n && n.techName === "flash" && n.trigger(t)
            }), n.errors = vjs.bind(this.player_, function (e, t) {
                vjs.log("Flash Error", t)
            })
        })), s.parentNode.replaceChild(c, s)
    } else vjs.Flash.embed(t.swf, s, a, f, l)
}}), vjs.Flash.prototype.dispose = function () {
    vjs.MediaTechController.prototype.dispose.call(this)
}, vjs.Flash.prototype.play = function () {
    this.el_.vjs_play()
}, vjs.Flash.prototype.pause = function () {
    this.el_.vjs_pause()
}, vjs.Flash.prototype.src = function (e) {
    e = vjs.getAbsoluteURL(e), this.el_.vjs_src(e);
    if (this.player_.autoplay()) {
        var t = this;
        setTimeout(function () {
            t.play()
        }, 0)
    }
}, vjs.Flash.prototype.load = function () {
    this.el_.vjs_load()
}, vjs.Flash.prototype.poster = function () {
    this.el_.vjs_getProperty("poster")
}, vjs.Flash.prototype.buffered = function () {
    return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"))
}, vjs.Flash.prototype.supportsFullScreen = function () {
    return!1
}, vjs.Flash.prototype.enterFullScreen = function () {
    return!1
};
var api = vjs.Flash.prototype, readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","), createSetter = function (e) {
    var t = e.charAt(0).toUpperCase() + e.slice(1);
    api["set" + t] = function (t) {
        return this.el_.vjs_setProperty(e, t)
    }
}, createGetter = function (e) {
    api[e] = function () {
        return this.el_.vjs_getProperty(e)
    }
};
(function () {
    var e;
    for (e = 0; e < readWrite.length; e++)createGetter(readWrite[e]), createSetter(readWrite[e]);
    for (e = 0; e < readOnly.length; e++)createGetter(readOnly[e])
})(), vjs.Flash.isSupported = function () {
    return vjs.Flash.version()[0] >= 10
}, vjs.Flash.canPlaySource = function (e) {
    if (e.type in vjs.Flash.formats)return"maybe"
}, vjs.Flash.formats = {"video/flv": "FLV", "video/x-flv": "FLV", "video/mp4": "MP4", "video/m4v": "MP4"}, vjs.Flash.onReady = function (e) {
    var t = vjs.el(e), n = t.player || t.parentNode.player, r = n.tech;
    t.player = n, r.el_ = t, r.on("click", r.onClick), vjs.Flash.checkReady(r)
}, vjs.Flash.checkReady = function (e) {
    e.el().vjs_getProperty ? e.triggerReady() : setTimeout(function () {
        vjs.Flash.checkReady(e)
    }, 50)
}, vjs.Flash.onEvent = function (e, t) {
    var n = vjs.el(e).player;
    n.trigger(t)
}, vjs.Flash.onError = function (e, t) {
    var n = vjs.el(e).player;
    n.trigger("error"), vjs.log("Flash Error", t, e)
}, vjs.Flash.version = function () {
    var e = "0,0,0";
    try {
        e = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
    } catch (t) {
        try {
            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
        } catch (n) {
        }
    }
    return e.split(",")
}, vjs.Flash.embed = function (e, t, n, r, i) {
    var s = vjs.Flash.getEmbedCode(e, n, r, i), o = vjs.createEl("div", {innerHTML: s}).childNodes[0], u = t.parentNode;
    t.parentNode.replaceChild(o, t);
    var a = u.childNodes[0];
    return setTimeout(function () {
        a.style.display = "block"
    }, 1e3), o
}, vjs.Flash.getEmbedCode = function (e, t, n, r) {
    var i = '<object type="application/x-shockwave-flash"', s = "", o = "", u = "";
    return t && vjs.obj.each(t, function (e, t) {
        s += e + "=" + t + "&amp;"
    }), n = vjs.obj.merge({movie: e, flashvars: s, allowScriptAccess: "always", allowNetworking: "all"}, n), vjs.obj.each(n, function (e, t) {
        o += '<param name="' + e + '" value="' + t + '" />'
    }), r = vjs.obj.merge({data: e, width: "100%", height: "100%"}, r), vjs.obj.each(r, function (e, t) {
        u += e + '="' + t + '" '
    }), i + u + ">" + o + "</object>"
}, vjs.MediaLoader = vjs.Component.extend({init: function (e, t, n) {
    vjs.Component.call(this, e, t, n);
    if (!e.options_.sources || e.options_.sources.length === 0)for (var r = 0, i = e.options_.techOrder; r < i.length; r++) {
        var s = vjs.capitalize(i[r]), o = window.videojs[s];
        if (o && o.isSupported()) {
            e.loadTech(s);
            break
        }
    } else e.src(e.options_.sources)
}}), vjs.Player.prototype.textTracks_, vjs.Player.prototype.textTracks = function () {
    return this.textTracks_ = this.textTracks_ || [], this.textTracks_
}, vjs.Player.prototype.addTextTrack = function (e, t, n, r) {
    var i = this.textTracks_ = this.textTracks_ || [];
    r = r || {}, r.kind = e, r.label = t, r.language = n;
    var s = vjs.capitalize(e || "subtitles"), o = new window.videojs[s + "Track"](this, r);
    return i.push(o), o
}, vjs.Player.prototype.addTextTracks = function (e) {
    var t;
    for (var n = 0; n < e.length; n++)t = e[n], this.addTextTrack(t.kind, t.label, t.language, t);
    return this
}, vjs.Player.prototype.showTextTrack = function (e, t) {
    var n = this.textTracks_, r = 0, i = n.length, s, o, u;
    for (; r < i; r++)s = n[r], s.id() === e ? (s.show(), o = s) : t && s.kind() == t && s.mode() > 0 && s.disable();
    return u = o ? o.kind() : t ? t : !1, u && this.trigger(u + "trackchange"), this
}, vjs.TextTrack = vjs.Component.extend({init: function (e, t) {
    vjs.Component.call(this, e, t), this.id_ = t.id || "vjs_" + t.kind + "_" + t.language + "_" + vjs.guid++, this.src_ = t.src, this.dflt_ = t["default"] || t.dflt, this.title_ = t.title, this.language_ = t.srclang, this.label_ = t.label, this.cues_ = [], this.activeCues_ = [], this.readyState_ = 0, this.mode_ = 0, this.player_.on("fullscreenchange", vjs.bind(this, this.adjustFontSize))
}}), vjs.TextTrack.prototype.kind_, vjs.TextTrack.prototype.kind = function () {
    return this.kind_
}, vjs.TextTrack.prototype.src_, vjs.TextTrack.prototype.src = function () {
    return this.src_
}, vjs.TextTrack.prototype.dflt_, vjs.TextTrack.prototype.dflt = function () {
    return this.dflt_
}, vjs.TextTrack.prototype.title_, vjs.TextTrack.prototype.title = function () {
    return this.title_
}, vjs.TextTrack.prototype.language_, vjs.TextTrack.prototype.language = function () {
    return this.language_
}, vjs.TextTrack.prototype.label_, vjs.TextTrack.prototype.label = function () {
    return this.label_
}, vjs.TextTrack.prototype.cues_, vjs.TextTrack.prototype.cues = function () {
    return this.cues_
}, vjs.TextTrack.prototype.activeCues_, vjs.TextTrack.prototype.activeCues = function () {
    return this.activeCues_
}, vjs.TextTrack.prototype.readyState_, vjs.TextTrack.prototype.readyState = function () {
    return this.readyState_
}, vjs.TextTrack.prototype.mode_, vjs.TextTrack.prototype.mode = function () {
    return this.mode_
}, vjs.TextTrack.prototype.adjustFontSize = function () {
    this.player_.isFullScreen ? this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + "%" : this.el_.style.fontSize = ""
}, vjs.TextTrack.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-" + this.kind_ + " vjs-text-track"})
}, vjs.TextTrack.prototype.show = function () {
    this.activate(), this.mode_ = 2, vjs.Component.prototype.show.call(this)
}, vjs.TextTrack.prototype.hide = function () {
    this.activate(), this.mode_ = 1, vjs.Component.prototype.hide.call(this)
}, vjs.TextTrack.prototype.disable = function () {
    this.mode_ == 2 && this.hide(), this.deactivate(), this.mode_ = 0
}, vjs.TextTrack.prototype.activate = function () {
    this.readyState_ === 0 && this.load(), this.mode_ === 0 && (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.on("ended", vjs.bind(this, this.reset, this.id_)), (this.kind_ === "captions" || this.kind_ === "subtitles") && this.player_.getChild("textTrackDisplay").addChild(this))
}, vjs.TextTrack.prototype.deactivate = function () {
    this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.off("ended", vjs.bind(this, this.reset, this.id_)), this.reset(), this.player_.getChild("textTrackDisplay").removeChild(this)
}, vjs.TextTrack.prototype.load = function () {
    this.readyState_ === 0 && (this.readyState_ = 1, vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError)))
}, vjs.TextTrack.prototype.onError = function (e) {
    this.error = e, this.readyState_ = 3, this.trigger("error")
}, vjs.TextTrack.prototype.parseCues = function (e) {
    var t, n, r, i = e.split("\n"), s = "", o;
    for (var u = 1, a = i.length; u < a; u++) {
        s = vjs.trim(i[u]);
        if (s) {
            s.indexOf("-->") == -1 ? (o = s, s = vjs.trim(i[++u])) : o = this.cues_.length, t = {id: o, index: this.cues_.length}, n = s.split(" --> "), t.startTime = this.parseCueTime(n[0]), t.endTime = this.parseCueTime(n[1]), r = [];
            while (i[++u] && (s = vjs.trim(i[u])))r.push(s);
            t.text = r.join("<br/>"), this.cues_.push(t)
        }
    }
    this.readyState_ = 2, this.trigger("loaded")
}, vjs.TextTrack.prototype.parseCueTime = function (e) {
    var t = e.split(":"), n = 0, r, i, s, o, u;
    return t.length == 3 ? (r = t[0], i = t[1], s = t[2]) : (r = 0, i = t[0], s = t[1]), s = s.split(/\s+/), o = s.splice(0, 1)[0], o = o.split(/\.|,/), u = parseFloat(o[1]), o = o[0], n += parseFloat(r) * 3600, n += parseFloat(i) * 60, n += parseFloat(o), u && (n += u / 1e3), n
}, vjs.TextTrack.prototype.update = function () {
    if (this.cues_.length > 0) {
        var e = this.player_.currentTime();
        if (this.prevChange === undefined || e < this.prevChange || this.nextChange <= e) {
            var t = this.cues_, n = this.player_.duration(), r = 0, i = !1, s = [], o, u, a, f;
            e < this.nextChange && this.nextChange !== undefined ? (i = !0, f = this.lastActiveIndex !== undefined ? this.lastActiveIndex : t.length - 1) : f = this.firstActiveIndex !== undefined ? this.firstActiveIndex : 0;
            for (; ;) {
                a = t[f];
                if (a.endTime > e)if (e < a.startTime) {
                    n = Math.min(n, a.startTime), a.active && (a.active = !1);
                    if (!i)break
                } else i ? (s.splice(0, 0, a), u === undefined && (u = f), o = f) : (s.push(a), o === undefined && (o = f), u = f), n = Math.min(n, a.endTime), r = Math.max(r, a.startTime), a.active = !0; else r = Math.max(r, a.endTime), a.active && (a.active = !1);
                if (i) {
                    if (f === 0)break;
                    f--
                } else {
                    if (f === t.length - 1)break;
                    f++
                }
            }
            this.activeCues_ = s, this.nextChange = n, this.prevChange = r, this.firstActiveIndex = o, this.lastActiveIndex = u, this.updateDisplay(), this.trigger("cuechange")
        }
    }
}, vjs.TextTrack.prototype.updateDisplay = function () {
    var e = this.activeCues_, t = "", n = 0, r = e.length;
    for (; n < r; n++)t += '<span class="vjs-tt-cue">' + e[n].text + "</span>";
    this.el_.innerHTML = t
}, vjs.TextTrack.prototype.reset = function () {
    this.nextChange = 0, this.prevChange = this.player_.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0
}, vjs.CaptionsTrack = vjs.TextTrack.extend(), vjs.CaptionsTrack.prototype.kind_ = "captions", vjs.SubtitlesTrack = vjs.TextTrack.extend(), vjs.SubtitlesTrack.prototype.kind_ = "subtitles", vjs.ChaptersTrack = vjs.TextTrack.extend(), vjs.ChaptersTrack.prototype.kind_ = "chapters", vjs.TextTrackDisplay = vjs.Component.extend({init: function (e, t, n) {
    vjs.Component.call(this, e, t, n), e.options_.tracks && e.options_.tracks.length > 0 && this.player_.addTextTracks(e.options_.tracks)
}}), vjs.TextTrackDisplay.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"})
}, vjs.TextTrackMenuItem = vjs.MenuItem.extend({init: function (e, t) {
    var n = this.track = t.track;
    t.label = n.label(), t.selected = n.dflt(), vjs.MenuItem.call(this, e, t), this.player_.on(n.kind() + "trackchange", vjs.bind(this, this.update))
}}), vjs.TextTrackMenuItem.prototype.onClick = function () {
    vjs.MenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
}, vjs.TextTrackMenuItem.prototype.update = function () {
    this.selected(this.track.mode() == 2)
}, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({init: function (e, t) {
    t.track = {kind: function () {
        return t.kind
    }, player: e, label: function () {
        return t.kind + " off"
    }, dflt: function () {
        return!1
    }, mode: function () {
        return!1
    }}, vjs.TextTrackMenuItem.call(this, e, t), this.selected(!0)
}}), vjs.OffTextTrackMenuItem.prototype.onClick = function () {
    vjs.TextTrackMenuItem.prototype
        .onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
}, vjs.OffTextTrackMenuItem.prototype.update = function () {
    var e = this.player_.textTracks(), t = 0, n = e.length, r, i = !0;
    for (; t < n; t++)r = e[t], r.kind() == this.track.kind() && r.mode() == 2 && (i = !1);
    this.selected(i)
}, vjs.TextTrackButton = vjs.MenuButton.extend({init: function (e, t) {
    vjs.MenuButton.call(this, e, t), this.items.length <= 1 && this.hide()
}}), vjs.TextTrackButton.prototype.createItems = function () {
    var e = [], t;
    e.push(new vjs.OffTextTrackMenuItem(this.player_, {kind: this.kind_}));
    for (var n = 0; n < this.player_.textTracks().length; n++)t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {track: t}));
    return e
}, vjs.CaptionsButton = vjs.TextTrackButton.extend({init: function (e, t, n) {
    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Captions Menu")
}}), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.SubtitlesButton = vjs.TextTrackButton.extend({init: function (e, t, n) {
    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Subtitles Menu")
}}), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({init: function (e, t, n) {
    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Chapters Menu")
}}), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function () {
    var e = [], t;
    for (var n = 0; n < this.player_.textTracks().length; n++)t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {track: t}));
    return e
}, vjs.ChaptersButton.prototype.createMenu = function () {
    var e = this.player_.textTracks(), t = 0, n = e.length, r, i, s = this.items = [];
    for (; t < n; t++) {
        r = e[t];
        if (r.kind() == this.kind_ && r.dflt()) {
            if (r.readyState() < 2) {
                this.chaptersTrack = r, r.on("loaded", vjs.bind(this, this.createMenu));
                return
            }
            i = r;
            break
        }
    }
    var o = this.menu = new vjs.Menu(this.player_);
    o.el_.appendChild(vjs.createEl("li", {className: "vjs-menu-title", innerHTML: vjs.capitalize(this.kind_), tabindex: -1}));
    if (i) {
        var u = i.cues_, a, f;
        t = 0, n = u.length;
        for (; t < n; t++)a = u[t], f = new vjs.ChaptersTrackMenuItem(this.player_, {track: i, cue: a}), s.push(f), o.addChild(f)
    }
    return this.items.length > 0 && this.show(), o
}, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({init: function (e, t) {
    var n = this.track = t.track, r = this.cue = t.cue, i = e.currentTime();
    t.label = r.text, t.selected = r.startTime <= i && i < r.endTime, vjs.MenuItem.call(this, e, t), n.on("cuechange", vjs.bind(this, this.update))
}}), vjs.ChaptersTrackMenuItem.prototype.onClick = function () {
    vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
}, vjs.ChaptersTrackMenuItem.prototype.update = function () {
    var e = this.cue, t = this.player_.currentTime();
    this.selected(e.startTime <= t && t < e.endTime)
}, vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {subtitlesButton: {}, captionsButton: {}, chaptersButton: {}}), vjs.JSON;
if (typeof window.JSON != "undefined" && window.JSON.parse === "function")vjs.JSON = window.JSON; else {
    vjs.JSON = {};
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    vjs.JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }

        var j;
        text = text + "", cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
    }
}
vjs.autoSetup = function () {
    var e, t, n, r = document.getElementsByTagName("video");
    if (r && r.length > 0)for (var i = 0, s = r.length; i < s; i++) {
        t = r[i];
        if (!t || !t.getAttribute) {
            vjs.autoSetupTimeout(1);
            break
        }
        t.player === undefined && (e = t.getAttribute("data-setup"), e !== null && (e = vjs.JSON.parse(e || "{}"), n = videojs(t, e)))
    } else vjs.windowLoaded || vjs.autoSetupTimeout(1)
}, vjs.autoSetupTimeout = function (e) {
    setTimeout(vjs.autoSetup, e)
}, vjs.one(window, "load", function () {
    vjs.windowLoaded = !0
}), vjs.autoSetupTimeout(1), vjs.plugin = function (e, t) {
    vjs.Player.prototype[e] = t
};
var luxanimals = window.luxanimals || {}, STAGE_W = 960, STAGE_H = 640, FRAME_DELTA = 40, DEG_TO_RAD = Math.PI / 180, RAD_TO_DEG = 180 / Math.PI, log = !1, stage;
(function () {
    var e = [];
    luxanimals.buttons = {left: !1, right: !1, space: !1, mouseDown: !1, down: !1, up: !1, p: !1}, luxanimals.debug = luxanimals.debug || {physics: !1, fps: !1}, luxanimals.loadedAssets = {}, luxanimals.addObject = function (t, n) {
        n === 0 ? e.unshift(t) : n ? e.splice(n, 0, t) : e.push(t)
    }, luxanimals.removeObject = function (t) {
        var n = e.length;
        while (n-- > 0)if (e[n] === t)return e.splice(n, 1), !0;
        return!1
    }, luxanimals.removeAllObjects = function () {
        e.length = 0
    };
    var t = document.getElementById("canvas");
    stage = new createjs.Stage(t), stage.snapToPixelEnabled = !0, createjs.Ticker.useRAF = !0, createjs.Ticker.setInterval(0), PreloadJS.useXHR = !1;
    var n = 1e3 / 15, r = FRAME_DELTA;
    luxanimals.tick = function (t, i) {
        t > n && (t = n), r += t;
        var s = e.slice(0);
        for (var o = 0, u = s.length; o < u; o++)s[o].update(t, i);
        r > FRAME_DELTA ? (r -= FRAME_DELTA, stage.tickOnUpdate = !0) : stage.tickOnUpdate = !1, stage.update()
    }
})();
var _gaq = _gaq || [];
(function () {
    var t = function (e, t) {
        t = Array.prototype.slice.call(t), t.unshift(e), _gaq.push(t)
    };
    luxanimals.trackEvent = function () {
        t("_trackEvent", arguments)
    }, luxanimals.trackScreen = function () {
        t("_trackPageview", arguments)
    }, luxanimals.trackSocial = function () {
        t("_trackSocial", arguments)
    }
})();
var b2Vec2 = Box2D.Common.Math.b2Vec2, b2BodyDef = Box2D.Dynamics.b2BodyDef, b2Body = Box2D.Dynamics.b2Body, b2FixtureDef = Box2D.Dynamics.b2FixtureDef, b2Fixture = Box2D.Dynamics.b2Fixture, b2World = Box2D.Dynamics.b2World, b2MassData = Box2D.Collision.Shapes.b2MassData, b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape, b2CircleShape = Box2D.Collision.Shapes.b2CircleShape, b2DebugDraw = Box2D.Dynamics.b2DebugDraw, b2BuoyancyController = Box2D.Dynamics.Controllers.b2BuoyancyController, b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef, b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef, b2DistanceJoint = Box2D.Dynamics.Joints.b2DistanceJoint, b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef, b2ContactListener = Box2D.Dynamics.b2ContactListener, b2FilterData = Box2D.Dynamics.b2FilterData, trace = window.trace || function () {
    log && window.console && console.log && console.log.apply(console, arguments)
};
luxanimals.preloader = function (e) {
    var t, n = e.baseurl ? e.baseurl : "", r = e.onComplete;
    e = null;
    var i = function (e, i) {
        trace("[preloader] - init"), i = i || [];
        var s = 0;
        t = new PreloadJS, t.setMaxConnections(8), t.onProgress = function (e) {
            luxanimals.uiManager.preloader.progress(e)
        }, t.onComplete = function () {
            if (s++ > 0)return;
            trace("[preloader] - load complete"), r && (r(), r = null), e = null, t = null, luxanimals.uiManager.preloader.complete(), luxanimals.uiManager.preloader.hide()
        }, luxanimals.uiManager.preloader.show();
        for (var o in e)if (e.hasOwnProperty(o)) {
            trace("[preloader] - load key:" + o + " asset:" + e[o]);
            if (!Modernizr.ie9) {
                var u = new Image;
                u.src = n + e[o], luxanimals.loadedAssets[o] = {img: u}
            }
            i.push({id: o, src: n + e[o]})
        }
        t.loadManifest(i), Modernizr.ie9 && setTimeout(function () {
            for (var t in e) {
                var r = new Image;
                r.src = n + e[t], luxanimals.loadedAssets[t] = {img: r}
            }
        }, 0)
    };
    return{init: i, getLoader: function () {
        return t
    }}
}, function (e) {
    var t = function () {
        throw"Box2dHelper cannot be instantiated"
    }, n = [], r = {density: 0};
    t.world = null, t.scale = 30, t.boundsFilter = 8, t.actors = n, t.bodiesToAdd = [], t.bodiesToRemove = [], t.jointsToRemove = [], t.densityChanges = [], t.filtersToChange = [], t.createBounds = function () {
        var e = function () {
        }, n = function (e, n, r) {
            var i = t.createFixture({isSensor: !0, filter: {categoryBits: t.boundsFilter}}).rectangle(r, 20), s = t.createBody(e, n, [i], {type: "static"});
            s.SetUserData("bounds")
        }, r = function (e, n, r) {
            var i = t.createFixture({isSensor: !0, filter: {categoryBits: t.boundsFilter}}).rectangle(20, r), s = t.createBody(e, n, [i], {type: "static"});
            s.SetUserData("bounds")
        };
        return{lower: n, side: r}
    }, t.disableCollision = function (e) {
        trace("[box2dHelper] - disable collision");
        var n = e.GetFixtureList(), r = n.GetFilterData();
        r.maskBits = t.boundsFilter, n.SetFilterData(r)
    }, t.tweenDensity = function (e, t, n, i) {
        r.density = t, $(r).delay(i.delay).animate({density: 5}, {step: function () {
            e.m_fixtureList.SetDensity(5), e.ResetMassData(), i.actor.settings.xOffset = i.actorOffsetX
        }, duration: i.speed, complete: function () {
        }})
    }, t.tweenKinematic = function (e, n, r, i, s) {
        var o = e.GetPosition().Copy();
        createjs.Tween.get(o).wait(i).to({x: n.x / t.scale, y: n.y / t.scale}, r, createjs.Ease.sineInOut).call(s).addEventListener("change", function (t) {
            e.SetPosition(t.target.target)
        })
    }, t.createFixture = function (e) {
        return new t.createdFixture(e)
    }, t.createdFixture = function (e) {
        var t = new b2FixtureDef;
        e && (t.density = e.density || 0, t.friction = e.friction || 0, t.restitution = e.restitution || 0, t.isSensor = e.isSensor === !0, e.filter && (t.filter.groupIndex = e.filter.groupIndex || 0, e.filter.categoryBits && (t.filter.categoryBits = e.filter.categoryBits), e.filter.maskBits && (t.filter.maskBits = e.filter.maskBits))), this.fixDef = t
    }, t.createdFixture.prototype = {fixDef: null, rectangle: function (e, n, r) {
        var i = this.fixDef;
        return this.fixDef = null, i.shape = new b2PolygonShape, i.shape.SetAsBox(e * .5 / t.scale, n * .5 / t.scale), r && (i.shape.m_centroid = new b2Vec2(r.x / t.scale, r.y / t.scale)), i
    }, orientedRectangle: function (e, n, r, i, s) {
        var o = this.fixDef;
        return this.fixDef = null, o.shape = new b2PolygonShape, o.shape.SetAsOrientedBox(e * .5 / t.scale, n * .5 / t.scale, new b2Vec2(r.x / t.scale, r.y / t.scale), i * DEG_TO_RAD), s && (o.shape.m_centroid = new b2Vec2(s.x / t.scale, s.y / t.scale)), o
    }, circle: function (e) {
        var n = this.fixDef;
        return this.fixDef = null, n.shape = new b2CircleShape(e / t.scale), n
    }, polygon: function (e, n) {
        var r = this.fixDef;
        this.fixDef = null;
        var i = 0, s = 0, o = !1;
        r.shape = new b2PolygonShape, n && (i = n.xOffset ? n.xOffset : 0, s = n.yOffset ? n.yOffset : 0, o = n.xInv ? n.xInv : !1);
        var u = t.convertPolygonPoints(e, i, s, o);
        return r.shape.SetAsArray(u, u.length), r
    }}, t.convertPolygonPoints = function (e, t, n, r) {
        var i = [];
        for (var s = 0; s < e.length; s++) {
            var o = new b2Vec2;
            r && (e[s].x *= -1), o.Set(e[s].x + t, e[s].y + n), i[s] = o
        }
        return i
    }, t.createBody = function (e, n, r, i) {
        trace("[Box2dHelper] - createBody");
        var s = new b2BodyDef;
        if (i) {
            if (i.type)switch (i.type) {
                case"dynamic":
                    s.type = b2Body.b2_dynamicBody;
                    break;
                case"static":
                    s.type = b2Body.b2_staticBody;
                    break;
                case"kinematic":
                    s.type = b2Body.b2_kinematicBody
            } else s.type = b2Body.b2_dynamicBody;
            s.linearDamping = i.linearDamping || 0, s.angularDamping = i.angularDamping || 0, s.fixedRotation = i.fixedRotation || !1, s.bullet = i.inertiaScale || 1, s.inertiaScale = i.inertiaScale || 1, s.userData = i.userData || null, s.angle = i.angle ? i.angle * DEG_TO_RAD : 0, i.allowSleep === !1 && (s.allowSleep = !1), i.awake === !1 && (s.awake = !1), i.active === !1 && (s.active = !1)
        } else s.type = b2Body.b2_dynamicBody;
        s.position.x = e / t.scale, s.position.y = n / t.scale;
        var o = t.world.CreateBody(s);
        for (var u = 0; u < r.length; u++)o.CreateFixture(r[u]);
        return o
    }, t.createJoint = function () {
        return this.createJointMethods
    }, t.createJointMethods = {distance: function (e, n, r, i, s) {
        var o = new b2DistanceJointDef;
        o.Initialize(e, n, r, i), s && (o.frequencyHz = s.frequencyHz || 0, o.dampingRatio = s.dampingRatio || 0, o.collideConnected = s.collideConnected || !1, s.length && (o.length = s.length), s.anchorA && (o.localAnchorA = new b2Vec2(s.anchorA[0], s.anchorA[1])), s.anchorB && (o.localAnchorB = new b2Vec2(s.anchorB[0], s.anchorB[1])));
        var u = t.world.CreateJoint(o);
        return u
    }, revolute: function (e, n, r, i) {
        var s = new b2RevoluteJointDef;
        s.Initialize(e, n, r), i && (s.enableMotor = i.enableMotor || !1, s.maxMotorTorque = i.maxTorque || 0, s.referenceAngle = i.referenceAngle ? i.referenceAngle * DEG_TO_RAD : 0, i.anchorA && (s.localAnchorA = new b2Vec2(i.anchorA[0], i.anchorA[1])), i.anchorB && (s.localAnchorB = new b2Vec2(i.anchorB[0], i.anchorB[1])), i.collideConnected === !1 && (s.collideConnected = !1), i.angleLimits && (s.enableLimit = !0, s.lowerAngle = i.angleLimits[0] * DEG_TO_RAD, s.upperAngle = i.angleLimits[1] * DEG_TO_RAD));
        var o = t.world.CreateJoint(s);
        return o
    }, weld: function (e, n, r, i) {
        var s = new b2WeldJointDef;
        s.Initialize(e, n, r);
        var o = t.world.CreateJoint(s);
        return o
    }, prismatic: function () {
    }, pulley: function () {
    }, gear: function () {
    }, line: function () {
    }, mouse: function () {
    }}, t.actor = function (e, n, r, i) {
        this.body = e, this.skin = n, this.id = r, this.settings = $.extend({}, this.defaultSettings, i), this.skin && (this.parent = n.parent, t.addActor(this))
    }, t.actor.prototype = {body: null, skin: null, id: null, hits: 0, settings: null, defaultSettings: {xOffset: 0, yOffset: 0, rotOffset: 0, noAngle: !1, noX: !1, noY: !1}, onHit: null, onEnd: null, onRemove: null, onUpdate: null, hitActive: !0, boundsFilter: !1, onOutOfBounds: function () {
        this.boundsFilter || (this.skin && this.skin.parent ? this.skin.parent.removeChild(this.skin) : trace("-----------------> SKIN " + this.id + " HAS NO PARENT <----------------"), t.removeActor(this), t.bodiesToRemove.push(this.body), this.onRemove && this.onRemove(), this.boundsFilter = !0)
    }, update: function (e, n) {
        var r = this.settings, i = this.body.GetWorldCenter();
        r.noAngle || (this.skin.rotation = this.body.GetAngle() * RAD_TO_DEG + r.rotOffset), r.noX || (this.skin.x = i.x * t.scale + r.xOffset), r.noY || (this.skin.y = i.y * t.scale + r.yOffset), this.onUpdate && this.onUpdate(e, n)
    }}, t.addActor = function (e) {
        trace("[Box2dHelper] - addActor"), n.push(e)
    }, t.removeActor = function (e) {
        trace("[Box2dHelper] - removeActor"), n.splice(n.indexOf(e), 1)
    }, t.updateActors = function (e, t) {
        for (var r = 0; r < n.length; r++)n[r].update(e, t)
    }, t.tick = function () {
        var e = t.world, n = t.bodiesToRemove, r = t.jointsToRemove, i = t.densityChanges, s;
        while (n.length)s = n.pop(), s.SetUserData(null), e.DestroyBody(s);
        while (r.length)s = r.pop(), e.DestroyJoint(s);
        while (i.length)s = i.pop(), s.body.m_fixtureList.SetDensity(s.density), s.body.ResetMassData()
    }, t.clearAll = function () {
        trace("[Box2dHelper] - clearAll"), t.world = null, n.length = 0, t.bodiesToAdd.length = 0, t.bodiesToRemove.length = 0, t.jointsToRemove.length = 0, t.densityChanges.length = 0, t.filtersToChange.length = 0
    }, e.Box2dHelper = t
}(window), luxanimals.Physics = function () {
    trace("[physics] - init");
    var e = 30, t = 24, n = 1 / t, r = {ships: -2, projectiles: -3, scenery: -4, level: -5}, i = {ships: 2, projectiles: 3, scenery: 4}, s = !1, o, u, a = [], f = [], l = [], c = [], h = [], p = 0, d = !1, v = 0, m = Math.round(Math.random() * 500), g = [], y, b = null, w = 0, E = -1.5, S = 1.5, x, T, N = new b2Vec2(0, 10), C = function () {
        trace("[physics] - init"), o = new b2World(N, !0), Box2dHelper.scale = e, Box2dHelper.world = o, y = new b2ContactListener, Box2dHelper.createBounds().side(-100, STAGE_H * .5, STAGE_H + 200), Box2dHelper.createBounds().side(STAGE_W + 100, STAGE_H * .5, STAGE_H + 200), Box2dHelper.createBounds().lower(STAGE_W * .5, STAGE_H + 100, STAGE_W + 200), o.SetContactListener(y), y.BeginContact = Z, y.EndContact = et, k(), luxanimals.debug.physics && J(), luxanimals.addObject(Y), luxanimals.debug, luxanimals.addObject(luxanimals.physics)
    }, k = function () {
        u = new b2BuoyancyController, u.gravity = new b2Vec2(0, 10), u.useWorldGravity = !1, u.normal.Set(0, -1), u.offset = -550 / e, u.density = 2.5, u.linearDrag = 5, u.angularDrag = 3
    }, L = function (t) {
        u.offset = -t / e;
        for (var n = 0, r = f.length; n < r; n++)f[n].anchorJoint.SetLength((STAGE_H - t - 35) / e)
    }, A = function () {
        clearInterval(b), b = null;
        for (var e = 0, t = h.length; e < t; e++)h[e].hitActive = !0;
        h = [];
        for (e = 0; e < f.length; e++)f[e].body.GetUserData().alreadyHit = !1
    }, O = function (e) {
        clearInterval(b), b = null, f[e].body.SetAngularDamping(4.5), f[e].body.SetLinearDamping(1), Box2dHelper.jointsToRemove.push(f[e].anchorJoint);
        var t;
        f[e].left ? t = 50 : t = -50, Box2dHelper.tweenDensity(f[e].body, .6, 8, {delay: 400, speed: 2e3, actor: f[e].body.GetUserData(), actorOffsetX: t, actorOffsetY: 20})
    }, M = function (e, t, n) {
        var r = Box2dHelper.createFixture({isSensor: !0}).circle(11), i = Box2dHelper.createBody(e, t, [r], {type: "static"}), s = new Box2dHelper.actor(i, null, "coin", {});
        s.num = n, s.onHit = _, i.SetUserData(s)
    }, _ = function (e) {
        e && e.id === "cannonball" && (luxanimals.coins.collected(this.num), Box2dHelper.bodiesToRemove.push(this.body))
    }, D = function (t, n, s, o, u, a, f) {
        var l = "cloud";
        f && (l = "sun");
        var c = Box2dHelper.createFixture({density: .1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).circle(s * .8), h = Box2dHelper.createBody(t, n, [c], {linearDamping: .2, fixedRotation: !0, allowSleep: !1}), p = Box2dHelper.createFixture({isSensor: !0}).rectangle(5, 5), d = Box2dHelper.createBody(t, 0, [p], {type: "static"}), v = Box2dHelper.createJoint().distance(h, d, h.GetWorldCenter(), d.GetWorldCenter(), {length: n / e}), m = new Box2dHelper.actor(h, u, l, {noAngle: !0});
        return m.boundsFilter = !0, m.joint = v, m.rope = a, h.SetUserData(m), h
    }, P = function (e, t, n, r, s, o, u) {
        trace("[physics] createCannonball");
        var a = Box2dHelper.createFixture({density: 2.8, friction: .5, restitution: .2, filter: {categoryBits: i.projectiles}}).circle(11.5), f = Box2dHelper.createBody(e, t, [a], {}), l = new Box2dHelper.actor(f, n, "cannonball", {});
        return o ? (l.onHit = z, l.onUpdate = o, l.onRemove = u, f.ApplyImpulse(new b2Vec2(Math.cos(r * DEG_TO_RAD) * -s, Math.sin(r * DEG_TO_RAD) * -s), new b2Vec2(e / 30, t / 30)), clearInterval(b), b = setInterval(q, 6e3), x = f) : T = f, f.SetUserData(l), l
    }, H = function (e) {
        var t = 0, n = 0, s = -200, o = !1, l = "shipL";
        e.left || (t = 7.5, o = !0, l = "shipR", s = STAGE_W + 200);
        var c = [
            {x: .4, y: 5.2},
            {x: 6.5, y: 5.4},
            {x: 5.3, y: 6.3},
            {x: 1, y: 6.3}
        ], h = [
            {x: .1, y: 4.5},
            {x: 2.33, y: 4.5},
            {x: 3, y: 5.3},
            {x: .4, y: 5.3}
        ];
        e.left || (c.reverse(), h.reverse());
        var p = Box2dHelper.createFixture({density: 1.25, friction: .4, restitution: .6, filter: {groupIndex: r.ships, categoryBits: i.ships}}).polygon(c, {offsetX: t, offsetY: n, xInv: o}), d = Box2dHelper.createFixture({density: .09, friction: .4, restitution: .6, filter: {groupIndex: r.ships, categoryBits: i.ships}}).polygon(h, {offsetX: t, offsetY: n, xInv: o}), v = Box2dHelper.createBody(s, e.y + 50, [p, d], {allowSleep: !1});
        v.CreateFixture(p), v.CreateFixture(d), v.SetAngularDamping(2);
        var m = Box2dHelper.createFixture({isSensor: !0}).rectangle(5, 5), g, y;
        E = -0.5, S = .5, e.left ? (g = Box2dHelper.createBody(s, STAGE_H - 10, [m], {type: "kinematic"}), b = new Box2dHelper.actor(v, e.skin, l, {xOffset: 20}), Box2dHelper.tweenKinematic(g, {x: e.x + 100, y: STAGE_H - 10}, 2700, 4e3, B), y = Box2dHelper.createJoint().distance(v, g, v.GetWorldCenter(), g.GetWorldCenter(), {anchorA: [2.4, 5.7], length: .5, frequencyHz: .3, dampingRatio: .1})) : (g = Box2dHelper.createBody(s, STAGE_H - 10, [m], {type: "kinematic"}), b = new Box2dHelper.actor(v, e.skin, l, {xOffset: -20}), Box2dHelper.tweenKinematic(g, {x: e.x + 120, y: STAGE_H - 10}, 2700, 4e3, B), y = Box2dHelper.createJoint().distance(v, g, v.GetWorldCenter(), g.GetWorldCenter(), {anchorA: [-2.4, 5.7], length: .5, frequencyHz: .3, dampingRatio: .1})), u.AddBody(v), a.push(v);
        var b;
        return b.onHit = R, b.boundsFilter = !0, b.alreadyHit = !1, v.SetUserData(b), f.push({body: v, anchorJoint: y, anchor: g, left: e.left}), v
    }, B = function () {
        for (var e = 0; e < f.length; e++)E = -1.1, S = 1.1, $(u).animate({density: 1.5}, 1e3), f[e].body.SetAngularDamping(0)
    }, j = function () {
        for (var e = 0; e < f.length; e++) {
            var t = f[e].body.GetAngle();
            t < E ? f[e].body.SetAngle(E) : t > S && f[e].body.SetAngle(S)
        }
    }, F = function (e, t, n) {
        d = !1;
        var r = f[e], i = n * 5 / -86 * (t / 20), s = t * 80 / 25 - (-n + 1) / 2;
        e === 0 && (i *= -1, s *= -1), r.body.ApplyImpulse(new b2Vec2(s, 0), f[0].body.GetWorldCenter()), r.body.SetAngularVelocity(i)
    }, I = function (e, t, n, r) {
        var i = Box2dHelper.createFixture({density: .1, friction: .2}).rectangle(65, 35), s = Box2dHelper.createBody(e.x, e.y, [i]), o = Box2dHelper.createFixture({density: .1, friction: .2}).rectangle(87, 16), u = Box2dHelper.createBody(t.x, t.y, [o]), f = Box2dHelper.createFixture({density: .1, friction: .2}).rectangle(51, 17), l = Box2dHelper.createBody(n.x, n.y, [f]), c = new Box2dHelper.actor(s, e, "shipGold"), h = new Box2dHelper.actor(u, t, "shipGold"), p = new Box2dHelper.actor(l, n, "shipGold");
        s.SetUserData(c), u.SetUserData(h), l.SetUserData(p);
        var d = Math.random() * 3, v = Math.random() * 2, m = Math.random() * 1;
        r || (d *= -1, v *= -1, m *= -1), a.push(s), a.push(u), a.push(l), s.ApplyImpulse(new b2Vec2(d, Math.random() * 3 - 5), s.GetWorldCenter()), u.ApplyImpulse(new b2Vec2(v, Math.random() * 3 - 4), u.GetWorldCenter()), l.ApplyImpulse(new b2Vec2(m, Math.random() * 3 - 3), l.GetWorldCenter())
    }, q = function () {
        if (x) {
            var e = x.GetUserData();
            e && e.onOutOfBounds(), clearInterval(b), b = null
        }
    }, R = function (t, n) {
        trace("[physics] ship hit");
        if (t)if (t.id === "cannonball" && !this.alreadyHit) {
            this.alreadyHit = !0;
            var r = t.body.GetWorldCenter();
            luxanimals.scene.smoke(r.x * e, r.y * e), luxanimals.gameManager.hitShip(this.id), this.id === "shipR" ? luxanimals.uiManager.message.score(15e3, this.skin.x, this.skin.y, "green") : luxanimals.uiManager.message.score(15e3, this.skin.x, this.skin.y, "pink"), Box2dHelper.disableCollision(t.body), n.FlagForFiltering()
        } else t.id === "cannonball" && n.FlagForFiltering()
    }, U = function (e) {
        e.hits++, e.hits === 1 && luxanimals.clouds.crack(e), e.hits >= 2 && (e.boundsFilter = !1, e.rope.parent.removeChild(e.rope), Box2dHelper.disableCollision(e.body), Box2dHelper.jointsToRemove.push(e.joint), e.body.SetFixedRotation(!1))
    }, z = function (e, t) {
        trace("[cannonball] - hit: " + e), t.IsTouching() && (this.hits++, this.hits >= 30 && this.onOutOfBounds());
        if (e && e.hitActive) {
            e.id !== "volcano" && e.id !== "coin" && (e.id !== "spout" && (e.hitActive = !1, h.push(e)), luxanimals.scene.cannonballHit(this.skin.x, this.skin.y));
            var n = 0;
            switch (e.id) {
                case"whale":
                case"coconut":
                case"tail":
                case"spout":
                case"tree":
                case"lightning":
                    n = 1e3;
                    break;
                case"cloud":
                    n = 1e3, U(e);
                    break;
                case"volcanoClouds":
                    n = 1e3, luxanimals.soundManager.playSound("thunder");
                    break;
                case"volcanoCenter":
                    n = 2400;
                    break;
                case"goat":
                    n = 2400, luxanimals.soundManager.playSound("goat");
                    break;
                case"goat":
                    n = 2400, luxanimals.soundManager.playSound("goat");
                    break;
                case"door":
                    luxanimals.soundManager.playSound("doorclose");
                    break;
                case"sun":
                    n = 2400, U(e);
                    break;
                case"chest":
                    n = 5e3
            }
            n !== 0 && (luxanimals.gameManager.score(n), luxanimals.uiManager.message.score(n, this.skin.x, this.skin.y))
        }
    }, W = function (e, t) {
        var n, r, i;
        e === "Health Crate" && (n = Box2dHelper.createFixture({density: 1.2, friction: 1}).rectangle(35, 35), r = Box2dHelper.createBody(Math.round(Math.random() * 860 + 50), 0, [n]), i = new Box2dHelper.actor(r, t, "powerup"), r.SetUserData(i), u.AddBody(r))
    };
    c[0] = function () {
        var e, t = [], n = function () {
            trace("[physics] level 1 init"), g = [];
            var t = Box2dHelper.createFixture({density: 1, friction: .5, filter: {categoryBits: i.scenery}}).circle(100);
            e = Box2dHelper.createBody(480, 525, [t], {type: "static"}), l.push(f)
        }, s = function (n, s, o, u) {
            var f, l, c, h, p, d, v = 5, m = Modernizr.android || Modernizr.phone, g = m ? 4 : 2, y = m ? 32 : 2;
            switch (n) {
                case 1:
                    f = Box2dHelper.createFixture({density: .02, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(20, 50), l = Box2dHelper.createFixture({density: .02, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(20, 50, {x: 15, y: -45}, 40), c = Box2dHelper.createBody(s.x, s.y, [f, l], {type: "dynamic", asleep: !0, angle: 0}), h = Box2dHelper.createJoint().revolute(e, c, e.GetWorldCenter(), {anchorA: [-2.4, -1.8], anchorB: [0, 1.3], referenceAngle: -35, collideConnected: !1, angleLimits: [-90, 60]}), p = Box2dHelper.createJoint().distance(e, c, e.GetWorldCenter(), c.GetWorldCenter(), {anchorA: [-7, 0], anchorB: [1, -2], dampingRatio: y, frequencyHz: v, length: 6}), d = new Box2dHelper.actor(c, s, "tree", {rotOffset: 45});
                    break;
                case 0:
                    f = Box2dHelper.createFixture({density: .02, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(20, 130), c = Box2dHelper.createBody(s.x, s.y, [f], {type: "dynamic", asleep: !0, angle: 0}), h = Box2dHelper.createJoint().revolute(e, c, e.GetWorldCenter(), {anchorA: [1, -3.1], anchorB: [0, 2.2], collideConnected: !1, angleLimits: [-90, 50]}), p = Box2dHelper.createJoint().distance(e, c, e.GetWorldCenter(), c.GetWorldCenter(), {anchorA: [4.5, -5], anchorB: [0, -2], dampingRatio: g, frequencyHz: v, length: 4.8}), d = new Box2dHelper.actor(c, s, "tree", {});
                    break;
                case 2:
                    f = Box2dHelper.createFixture({density: .02, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(20, 130), c = Box2dHelper.createBody(s.x, s.y, [f], {type: "dynamic", asleep: !0, angle: 0}), h = Box2dHelper.createJoint().revolute(e, c, e.GetWorldCenter(), {anchorA: [3, -1.5], anchorB: [0, 2.2], collideConnected: !1, angleLimits: [-30, 80]}), p = Box2dHelper.createJoint().distance(e, c, e.GetWorldCenter(), c.GetWorldCenter(), {anchorA: [7, 0], anchorB: [0, -2], dampingRatio: g, frequencyHz: v, length: 7}), d = new Box2dHelper.actor(c, s, "tree", {})
            }
            var b = [];
            for (var w = 0, E = u.length; w < E; w++) {
                var S = Box2dHelper.createFixture({density: .4, friction: 1, restitution: .3}).circle(13), x = Box2dHelper.createBody(u[w].x, u[w].y, [S], {angularDamping: .1, type: "dynamic", asleep: !0}), T = new Box2dHelper.actor(x, u[w], "coconut", {});
                x.SetUserData(T);
                var N = Box2dHelper.createJoint().weld(x, c, x.GetWorldCenter());
                b.push(N)
            }
            d.onHit = a, d.joints = [h, p], d.coconutJoints = b, d.leafs = o, c.SetUserData(d), t.push(d)
        }, o = function (e) {
            var t = Box2dHelper.createFixture({friction: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(60, 50), n = Box2dHelper.createBody(e.x - 70, e.y + 85, [t], {type: "static"}), s = new Box2dHelper.actor(n, null, "chest", {});
            s.onHit = u, n.SetUserData(s)
        }, u = function (e) {
            e && e.id === "cannonball" && (this.hitActive = !1, luxanimals.levels.getCurrentLevel().chestHit())
        }, a = function (e) {
            e && e.id === "cannonball" && (this.hits++, luxanimals.levels.getCurrentLevel().detachLeafs(this.leafs, this.hits), this.coconutJoints.length >= 1 && (Box2dHelper.jointsToRemove = Box2dHelper.jointsToRemove.concat(this.coconutJoints[0]), this.coconutJoints.splice(0, 1)), this.hits >= 2 && (Box2dHelper.jointsToRemove = Box2dHelper.jointsToRemove.concat(this.joints), this.body.m_fixtureList.SetDensity(1), this.body.ResetMassData()))
        }, f = function () {
            for (var e = 0; e < t.length; e++)t[e].body.GetUserData() ? t[e].body.GetUserData().hitActive = !0 : t.splice(e, 1)
        };
        return{init: n, createTree: s, createChest: o, endTurn: f}
    }(), c[1] = function () {
        var t, n = function (e) {
            var t = {density: 1, friction: .4, restitution: .5, filter: {categoryBits: i.scenery}}, n = [
                {x: -5.3, y: 2.4},
                {x: -4.4, y: -0.6},
                {x: -1.1, y: -2.3},
                {x: 2.5, y: 0},
                {x: 3, y: 3},
                {x: 1, y: 5},
                {x: -4, y: 5}
            ], o = Box2dHelper.createFixture(t).circle(78), u = Box2dHelper.createFixture(t).polygon(n, {}), a = Box2dHelper.createBody(570, 420, [u, o], {type: "static"}), f = {density: .08, friction: .4, restitution: .5, filter: {categoryBits: i.scenery}}, l = Box2dHelper.createFixture(f).rectangle(125, 22), c = Box2dHelper.createFixture(f).orientedRectangle(70, 20, {x: -100, y: -10}, 10), h = Box2dHelper.createFixture(f).orientedRectangle(75, 20, {x: -30, y: -35}, -50), p = Box2dHelper.createBody(355, 500, [l, c, h], {type: "dynamic"}), d = Box2dHelper.createJoint().revolute(a, p, a.GetWorldCenter(), {anchorA: [-5, 2.6], anchorB: [2, 0], collideConnected: !1, angleLimits: [-20, 80]}), v = Box2dHelper.createJoint().distance(a, p, a.GetWorldCenter(), p.GetWorldCenter(), {anchorA: [-9, -4], anchorB: [-2, 0], dampingRatio: 0, frequencyHz: 2, length: 6});
            r(v);
            var m = new Box2dHelper.actor(p, e, "tail", {noX: !0, noY: !0, rotOffset: -10}), g = new Box2dHelper.actor(a, null, "whale");
            g.onHit = m.onHit = s, a.SetUserData(g), p.SetUserData(m)
        }, r = function (e) {
            $(e).animate({m_length: 5.8}, 700, function () {
                $(e).animate({m_length: 6.8}, 700, function () {
                    r(e)
                })
            })
        }, s = function (e) {
            e && e.id === "cannonball" && luxanimals.levels.getCurrentLevel().whaleHit()
        }, o = function () {
            trace("[physics] - createSpout"), t && a();
            var e = Box2dHelper.createFixture({isSensor: !0}).rectangle(25, 222);
            t = Box2dHelper.createBody(575, 454, [e], {type: "static"});
            var n = new Box2dHelper.actor(t, null, "spout", {});
            n.onHit = f, t.SetUserData(n)
        }, u = function (n) {
            t && t.SetPosition(new b2Vec2(t.GetPosition().x, (n + 111) / e))
        }, a = function () {
            t && Box2dHelper.bodiesToRemove.push(t)
        }, f = function (e) {
            if (e && e.id === "cannonball") {
                var t = e.body.GetLinearVelocity();
                e.body.ApplyImpulse(new b2Vec2(-t.x, -15), e.body.GetWorldCenter())
            }
        };
        return{createSpout: o, moveSpout: u, removeSpout: a, createWhale: n}
    }(), c[2] = function () {
        var e = function () {
            var e = Box2dHelper.createFixture({density: .2, friction: .5, filter: {categoryBits: i.scenery}}).rectangle(250, 20), n = Box2dHelper.createBody(480, 590, [e]), r = Box2dHelper.createFixture({isSensor: !0}).rectangle(5, 5), s = Box2dHelper.createBody(480, 640, [r], {type: "static"}), o = Box2dHelper.createJoint().distance(n, s, n.GetWorldCenter(), s.GetWorldCenter(), {length: 3, frequencyHz: 1, dampingRatio: 1});
            u.AddBody(n), a.push(n), t()
        }, t = function () {
            var e = [
                [405, 550],
                [455, 550],
                [505, 550],
                [555, 550],
                [430, 469],
                [480, 469],
                [530, 469],
                [455, 388],
                [505, 388],
                [480, 307]
            ];
            for (var t = 0, n = e.length; t < n; t++) {
                var r = Box2dHelper.createFixture({density: .1, friction: .3, filter: {categoryBits: i.scenery}}).rectangle(50, 80), s = Box2dHelper.createBody(e[t][0], e[t][1], [r], {awake: !1});
                u.AddBody(s)
            }
        };
        return{init: e}
    }(), c[3] = function () {
        var t, n, s, o = function () {
            var e = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(10, 140, {x: -10, y: 20}, 20), o = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(10, 45, {x: 84, y: -30}, -20), u = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(10, 10, {x: -30, y: 50}, 0), a = Box2dHelper.createFixture({restitution: .3, friction: .5, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(80, 10, {x: 43, y: -15}, 0), f = Box2dHelper.createBody(335, 415, [e, o, u], {type: "static"}), m = Box2dHelper.createBody(335, 415, [a], {type: "static"}), g = new Box2dHelper.actor(m, null, "volcano", {});
            g.onHit = v, m.SetUserData(g);
            var y = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(10, 190, {x: 124, y: 32}, -25), b = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(10, 80, {x: 0, y: -15}, 19), w = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(10, 10, {x: 150, y: 65}, 0), E = Box2dHelper.createFixture({restitution: .3, friction: .5, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(90, 10, {x: 50, y: -10}, 0), S = Box2dHelper.createBody(480, 380, [y, b, w], {type: "static"}), x = Box2dHelper.createBody(480, 380, [E], {type: "static"}), T = new Box2dHelper.actor(m, null, "volcano", {});
            T.onHit = v, x.SetUserData(T);
            var N = Box2dHelper.createFixture({isSensor: !0}).rectangle(50, 50), C = Box2dHelper.createBody(450, 390, [N], {type: "static"}), k = new Box2dHelper.actor(C, null, "volcanoCenter", {});
            k.onHit = c, k.onEnd = h, C.SetUserData(k);
            var L = [
                {x: 0, y: 4},
                {x: 1.5, y: 0},
                {x: 3, y: 4}
            ], A = Box2dHelper.createFixture({density: 1, friction: 10, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).polygon(L, {});
            t = Box2dHelper.createBody(383, 384, [A], {type: "static"});
            var O = Box2dHelper.createFixture({filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(960, 100), M = Box2dHelper.createBody(480, 90, [O], {type: "static"}), _ = new Box2dHelper.actor(M, null, "volcanoClouds");
            _.onHit = l, M.SetUserData(_);
            var D = [];
            for (var P = 0; P < 3; P++)switch (P) {
                case 0:
                    D[P] = Box2dHelper.createFixture({density: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(90, 30, {x: 55, y: 5}, 6);
                    break;
                case 1:
                    D[P] = Box2dHelper.createFixture({density: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(90, 10, {x: 120, y: -20}, -25)
            }
            n = Box2dHelper.createBody(277, 550, D, {type: "static"}), D = [];
            for (P = 0; P < 3; P++)switch (P) {
                case 0:
                    D[P] = Box2dHelper.createFixture({density: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(120, 10, {x: 50, y: 5}, 28);
                    break;
                case 1:
                    D[P] = Box2dHelper.createFixture({density: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(100, 30, {x: 140, y: 40}, -5)
            }
            s = Box2dHelper.createBody(470, 520, D, {type: "static"});
            var H = Box2dHelper.createFixture({isSensor: !0}).rectangle(100, 40), B = Box2dHelper.createBody(590, 530, [H], {type: "static"}), j = new Box2dHelper.actor(B, null, "boostRight", {});
            j.onHit = p, j.onEnd = d, B.SetUserData(j);
            var F = Box2dHelper.createBody(350, 530, [H], {type: "static"}), I = new Box2dHelper.actor(F, null, "boostLeft", {});
            I.onHit = p, I.onEnd = d, F.SetUserData(I)
        }, u = function (e, t) {
            var o = Box2dHelper.createFixture({density: .1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(12, 51), u = Box2dHelper.createBody(292, 520, [o], {angularDamping: 3}), a = new Box2dHelper.actor(u, e, "door");
            u.SetUserData(a);
            var f = Box2dHelper.createJoint().revolute(n, u, n.GetWorldCenter(), {anchorA: [-0.1, -0.2], anchorB: [0, .8], referenceAngle: 10, collideConnected: !1, angleLimits: [-90, 10]}), l = Box2dHelper.createJoint().distance(u, n, u.GetWorldCenter(), n.GetWorldCenter(), {anchorA: [0, -0.5], anchorB: [4, -2], dampingRatio: .5, frequencyHz: .5, length: 3.2}), c = Box2dHelper.createBody(665, 520, [o], {angularDamping: 3}), h = new Box2dHelper.actor(c, t, "door");
            c.SetUserData(h);
            var p = Box2dHelper.createJoint().revolute(s, c, s.GetWorldCenter(), {anchorA: [6.8, 1], anchorB: [0, 1], referenceAngle: -10, collideConnected: !1, angleLimits: [-10, 90]}), d = Box2dHelper.createJoint().distance(c, s, c.GetWorldCenter(), s.GetWorldCenter(), {anchorA: [.2, -0.5], anchorB: [.2, -1], dampingRatio: .5, frequencyHz: .5, length: 5.5})
        }, f = function (e) {
            var t = Box2dHelper.createFixture({density: .4, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(83, 100), n = Box2dHelper.createBody(e.x, e.y, [t], {awake: !1}), s = new Box2dHelper.actor(n, e, "bolt", {});
            n.SetUserData(s)
        }, l = function (e) {
            e && e.id === "cannonball" && luxanimals.levels.getCurrentLevel().cloudHit(e.skin.x)
        }, c = function (e) {
            e && (e.id === "cannonball" ? (luxanimals.levels.getCurrentLevel().showTunnels(), e.body.SetLinearDamping(4.3), e.body.SetAngularDamping(4.3)) : e.id === "shipGold" && e.onOutOfBounds())
        }, h = function (e) {
            e && e.id === "cannonball" && (e.body.SetLinearDamping
            (0), e.body.SetAngularDamping(0))
        }, p = function (e) {
            e && (e.id === "cannonball" ? this.id === "boostRight" ? e.body.ApplyImpulse(new b2Vec2(10, 0), e.body.GetWorldCenter()) : e.body.ApplyImpulse(new b2Vec2(-8, 0), e.body.GetWorldCenter()) : e.id === "shipGold" && e.onOutOfBounds())
        }, d = function (e) {
            e && e.id === "cannonball" && luxanimals.levels.getCurrentLevel().hideTunnels()
        }, v = function (e) {
            e && (e.id === "cannonball" ? q() : e.id === "shipGold" && e.onOutOfBounds())
        }, m = function (e) {
            var t = Box2dHelper.createFixture({density: .5, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(47, 66), n = Box2dHelper.createBody(303, 427, [t], {awake: !1}), s = new Box2dHelper.actor(n, e, "goat");
            n.SetUserData(s)
        }, g = function (e) {
            var t = Box2dHelper.createFixture({density: .5, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).rectangle(47, 66), n = Box2dHelper.createBody(630, 406, [t], {awake: !1}), s = new Box2dHelper.actor(n, e, "goat");
            n.SetUserData(s)
        }, y = function (e, t, n) {
            var s = Box2dHelper.createFixture({density: 4, friction: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).circle(25), o = Box2dHelper.createFixture({density: 4, friction: 1, filter: {groupIndex: r.scenery, categoryBits: i.scenery}}).orientedRectangle(20, 95, {x: 0, y: -70}, 0), u, f;
            switch (e) {
                case"left":
                    u = Box2dHelper.createBody(385, 310, [s]), f = Box2dHelper.createBody(385, 310, [o], {fixedRotation: !0}), u.ApplyImpulse(new b2Vec2(0, -100), u.GetWorldCenter());
                    break;
                case"right":
                    u = Box2dHelper.createBody(525, 310, [s]), f = Box2dHelper.createBody(525, 310, [o], {fixedRotation: !0}), u.ApplyImpulse(new b2Vec2(0, -100), u.GetWorldCenter())
            }
            a.push(u), a.push(f);
            var l = new Box2dHelper.actor(u, t, "fireball", {}), c = new Box2dHelper.actor(f, n, "fireball");
            l.onUpdate = b, l.tailActor = c, u.SetUserData(l), f.SetUserData(c)
        }, b = function (e, t) {
            var n = this.body.GetWorldCenter(), r = this.body.GetLinearVelocity().y, i = 2.5 - 5 * r / 25;
            r > 0 && (this.tailActor.skin.scaleY = -1, i -= .2), this.tailActor.body.SetPosition(new b2Vec2(n.x, n.y + i)), n.y > 14 && this.hitActive && (this.skin.parent.removeChild(this.skin), this.tailActor.skin.parent.removeChild(this.tailActor.skin), Box2dHelper.bodiesToRemove.push(this.body), Box2dHelper.bodiesToRemove.push(this.tailActor.body), Box2dHelper.removeActor(this), Box2dHelper.removeActor(this.tailActor))
        }, w = function (n) {
            n === 0 ? t.SetPosition(new b2Vec2(383 / e, 384 / e)) : t.SetPosition(new b2Vec2(430 / e, 384 / e))
        };
        return{init: o, erupt: y, doors: u, goatLeft: m, goatRight: g, setTurn: w, lightning: f}
    }();
    var X = function (e) {
        e ? (n = 0, b !== null && clearInterval(b)) : (n = 1 / t, b !== null && (clearInterval(b), b = setInterval(q, 7e3)))
    }, V = function (e) {
        Box2dHelper.bodiesToRemove.push(e)
    }, J = function (t) {
        if (!s && t !== !1) {
            trace("[physics] - debug");
            var n = $("#debugCanvas").show().get(0).getContext("2d"), r = new b2DebugDraw;
            r.SetSprite(n), r.SetDrawScale(e), r.SetFillAlpha(.7), r.SetLineThickness(1), r.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit), o.SetDebugDraw(r), s = !0
        } else t === !1 && ($("#debugCanvas").hide(), o.m_debugDraw.m_sprite.graphics.clear(), s = !1)
    }, K = {update: function () {
        if (luxanimals.buttons.space) {
            w++;
            if (w % 50 === 0) {
                if (T) {
                    var e = T.GetUserData();
                    try {
                        e.onOutOfBounds()
                    } catch (t) {
                    }
                    T = null
                }
                var n = new createjs.Bitmap(luxanimals.loadedAssets.cannonball.img);
                n.mouseEnabled = !1, n.regX = 11, n.regY = 11, luxanimals.scene.getCannonballHolder().addChild(n), P(stage.mouseX, stage.mouseY, n, 0, 0, null, null)
            }
        } else w = 49
    }}, Q = {x: 0, y: 0}, G = function (e, r) {
        var i = createjs.Ticker.getMeasuredFPS(10);
        t = Math.min(Math.max(10, Math.round(i)), 24), n !== 0 && (n = 1 / t, n === 0 && (n = .041666667)), p += e;
        while (p > 0) {
            if (N.x !== 0) {
                var s = a.length;
                while (s-- > 0)Q.x = -a[s].GetMass() * N.x, a[s].ApplyForce(Q, a[s].GetWorldCenter())
            }
            u.Step(n), o.Step(n, 6, 3), o.ClearForces(), Box2dHelper.tick(), p -= FRAME_DELTA * 10 / t
        }
        j(), Box2dHelper.updateActors(e, r), luxanimals.debug.physics && o.DrawDebugData()
    }, Y = function () {
        var e = {min: -2, max: 2}, t = 0, n = 0, r = .05, i = 0, s, o = !1, u = function () {
            trace("[physics] - change wind"), n = e.min + Math.random() * (e.max - e.min), luxanimals.uiManager.setWindMeter(n), s = Math.round(Math.random() * 200) + 200, i = 0, o = !1
        }, a = function (e, u) {
            if (!o)n > t ? (t += r, t >= n && (o = !0, t = n)) : (t -= r, t <= n && (o = !0, t = n)), N.Set(t, 10), luxanimals.scene.setWind(t); else {
                i += e / FRAME_DELTA;
                if (~~i % s === 0) {
                    trace("[physics] wind apply turbulence");
                    var a = t - 1 + Math.random() * (t + 1 - (t - 1));
                    N.Set(a, 10), luxanimals.scene.setWind(t)
                }
            }
        };
        return{change: u, update: a, getWind: function () {
            return t
        }}
    }(), Z = function (e, t) {
        var n = e.GetFixtureA().GetBody(), r = e.GetFixtureB().GetBody(), i = n.GetUserData(), s = r.GetUserData();
        i && (i === "bounds" ? s ? s.onOutOfBounds() : Box2dHelper.bodiesToRemove.push(r) : i.onHit && i.hitActive && i.onHit(s, e)), s && (s === "bounds" ? i ? i.onOutOfBounds() : Box2dHelper.bodiesToRemove.push(n) : s.onHit && s.hitActive && s.onHit(i, e))
    }, et = function (e, t) {
        var n = e.GetFixtureA().GetBody(), r = e.GetFixtureB().GetBody(), i = n.GetUserData(), s = r.GetUserData();
        i && i.onEnd && i.onEnd(s, e), s && s.onEnd && s.onEnd(i, e)
    }, tt = function (e) {
        trace("[physics] change filter");
        var t = e.GetFilterData();
        t.maskBits = i.ships, e.SetFilterData(t), console.log(e)
    }, nt = function () {
        trace("[physics] - clearAll"), clearInterval(b), b = null, luxanimals.removeObject(luxanimals.physics), luxanimals.removeObject(Y), luxanimals.removeObject(K), o.ClearForces(), s && J(!1), Box2dHelper.clearAll()
    };
    return{init: C, createCoin: M, createPowerup: W, windManager: Y, createShip: H, createCannonball: P, createCloud: D, shipFire: F, shipGoldDamage: I, removeBody: V, waves: L, levels: c, update: G, pauseResume: X, debugScene: J, endTurn: A, clearAll: nt, gameOver: O}
}, luxanimals.Particles = function () {
    function f() {
    }

    var e = [], t = 6, n = 4, r = 0, i = [], s = ["#FC9E08", "#97571D", "#272426", "#561d05", "#59320F"], o = 11, u = .97, a = new createjs.Container;
    a.name = "wind", stage.addChild(a), f.prototype.x = 0, f.prototype.y = 0, f.prototype.bmp = null, f.prototype.velocityY = 0, f.prototype.velocityX = 0, f.prototype.angularVelocity = 0, f.prototype.lifeSpan = 1, f.prototype.shapeArray = null, f.prototype.color = null;
    var l = function () {
        for (var n = 0; n < t; n++) {
            var r = new createjs.Bitmap(luxanimals.loadedAssets.wind.img);
            r.snapToPixel = !0, r.mouseEnabled = !1, r.x = Math.random() * STAGE_W, r.y = Math.random() * 500, a.addChild(r), e.push({bmp: r, velocity: [0, Math.round(Math.random() * 2)]})
        }
    }, c = function (e) {
        trace("[particles] - shipDamage");
        for (var t = 0; t < o; t++) {
            var n = Math.round(Math.random() * 6), r, s = t;
            s > 6 && (s -= 7);
            switch (s) {
                case 0:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris1.img);
                    break;
                case 1:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris2.img);
                    break;
                case 2:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris3.img);
                    break;
                case 3:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris4.img);
                    break;
                case 4:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris5.img);
                    break;
                case 5:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris6.img);
                    break;
                case 6:
                    r = new createjs.Bitmap(luxanimals.loadedAssets.debris7.img)
            }
            r.x = e.x, r.y = e.y, r.mouseEnabled = !1;
            var u = new f;
            u.bmp = r, u.velocityX = Math.random() * 50 - 25, u.velocityY = Math.random() * 40 + 20, u.angularVelocity = Math.random() * 50 - 25, i.push(u), stage.addChild(r)
        }
    }, h = function (s, o) {
        var a = s / FRAME_DELTA;
        for (var f = 0, l; f < t; f++)l = e[f], l.bmp.y += l.velocity[1] * a, l.bmp.x += r * 7 * a, l.bmp.y >= 500 && (l.bmp.y = 0), l.bmp.x < STAGE_W ? l.bmp.x <= 0 && (l.bmp.x = STAGE_W) : l.bmp.x = 0, l.scaleX = l.scaleY = r;
        for (var c = 0, h = i.length, p; c < h; c++)p = i[c], p && (p.bmp.x -= p.velocityX * a, p.bmp.y -= p.velocityY * a, p.bmp.rotation += p.angularVelocity * a, p.velocityX += (p.velocityX * u - p.velocityX) * a, p.velocityY += (p.velocityY * u - p.velocityY) * a, p.velocityY -= n * a, p.lifeSpan -= .03 * a, p.lifeSpan < 0 && (stage.removeChild(p.bmp), i.splice(c, 1)))
    }, p = function () {
        for (var e = 0; e < i.length; e++)stage.removeChild(i[e].bmp);
        i.length = 0
    };
    return{update: h, clear: p, initWeatherParticles: l, shipDamage: c, setWind: function (e) {
        r = e
    }}
}, luxanimals.Scene = function (e) {
    var t = [
        {bmp: $("#wavesForeground"), top: 0, x: -10, y: 550, angle: 0, speed: .07, radius: 10},
        {bmp: $("#wavesMiddleground"), top: 0, x: -40, y: 525, angle: 20, speed: .06, radius: 7},
        {bmp: $("#wavesBackground"), top: 0, x: -10, y: 515, angle: 10, speed: .05, radius: 5}
    ];
    t[0].style = t[0].bmp.get(0).style, t[1].style = t[1].bmp.get(0).style, t[2].style = t[2].bmp.get(0).style;
    var n = [], r = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.splash.img], animations: {all: {frames: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], next: !1}}, frames: [
        [0, 0, 186, 88, 0, 186, 0],
        [186, 0, 186, 88, 0, 186, 0],
        [372, 0, 186, 88, 0, 186, 0],
        [558, 0, 186, 88, 0, 186, 0],
        [744, 0, 186, 88, 0, 186, 0],
        [930, 0, 186, 88, 0, 186, 0],
        [1116, 0, 186, 88, 0, 186, 0],
        [1302, 0, 186, 88, 0, 186, 0],
        [1488, 0, 186, 88, 0, 186, 0],
        [1674, 0, 186, 88, 0, 186, 0],
        [1860, 0, 186, 88, 0, 186, 0],
        [0, 88, 186, 88, 0, 186, 0]
    ]}), i = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.cannonball_hit.img], animations: {all: {frames: [0, 0, 1, 1, 2, 2, 3, 3], next: !1}}, frames: [
        [0, 0, 53, 36, 0, 53, 0],
        [53, 0, 53, 36, 0, 53, 0],
        [106, 0, 53, 36, 0, 53, 0],
        [159, 0, 53, 36, 0, 53, 0]
    ]}), s = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.smoke.img], animations: {all: {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8], next: !1}}, frames: [
        [0, 0, 148, 150, 0, 148, 0],
        [148, 0, 148, 150, 0, 148, 0],
        [296, 0, 148, 150, 0, 148, 0],
        [444, 0, 148, 150, 0, 148, 0],
        [592, 0, 148, 150, 0, 148, 0],
        [740, 0, 148, 150, 0, 148, 0],
        [888, 0, 148, 150, 0, 148, 0],
        [1036, 0, 148, 150, 0, 148, 0],
        [1184, 0, 148, 150, 0, 148, 0],
        [1332, 0, 148, 150, 0, 148, 0]
    ]}), o = new createjs.Container, u = new createjs.Container, a = new createjs.Container, f = new createjs.Container, l = new createjs.Container, c = new createjs.Container, h = new createjs.Container, p = new createjs.Container;
    o.name = "cloudsbg", u.name = "level", a.name = "coins", f.name = "cloudsfg", c.name = "cannonball", h.name = "level", p.name = "ship";
    var d = function (e) {
        trace("[scene] - init"), luxanimals.physics.init(), n[0] = new luxanimals.ship({x: 0, y: 520, holder: p, cannonballHolder: c, ai: e[0].ai}), n[1] = new luxanimals.ship({x: 740, y: 520, holder: p, cannonballHolder: c, ai: e[1].ai}), luxanimals.clouds.setBackgroundHolder(o), luxanimals.clouds.setForegroundHolder(f), luxanimals.addObject(n[0]), luxanimals.addObject(n[1]), luxanimals.particles.initWeatherParticles(), luxanimals.addObject(luxanimals.particles), luxanimals.levels.setBackgroundHolder(u), luxanimals.levels.setForegroundHolder(h), luxanimals.levels.init(), luxanimals.coins.setHolder(a), luxanimals.coins.init(), luxanimals.powerups.setHolder(l), luxanimals.powerups.init(), stage.addChild(o), stage.addChild(u), stage.addChild(a), stage.addChild(f), stage.addChild(l), stage.addChild(c), stage.addChild(h), stage.addChild(p)
    }, v = function () {
    }, m = function () {
        trace("[scene] restart"), g(), n = []
    }, g = function () {
        trace("[scene] clear"), n[0].deactivate(), n[1].deactivate(), u.removeAllChildren(), stage.removeChild(u), luxanimals.removeObject(n[0]), luxanimals.removeObject(n[1]), luxanimals.particles.clear(), luxanimals.removeObject(luxanimals.particles), t = null
    }, y = {update: function (e, t) {
        luxanimals.removeObject(this);
        var r = luxanimals.gameManager.getTurn();
        trace("[scene] - startTurn", r), n[r].activate(), luxanimals.levels.getCurrentLevel().startTurn && luxanimals.levels.getCurrentLevel().startTurn(r)
    }}, b = function (e, t) {
        n[e].animate(t)
    }, w = function (e) {
        n[e].deactivate()
    }, E = function (e, t) {
        n[e].damage(t), luxanimals.particles.shipDamage(n[e].getPosition())
    }, S = function (e) {
        var n = new createjs.BitmapAnimation(r);
        n.snapToPixel = !0, n.mouseEnabled = !1, n.x = e + 100, n.y = t[0].top - 45, u.addChild(n), n.onAnimationEnd = N, n.gotoAndPlay("all"), luxanimals.soundManager.playRandomSound(["splash", "splash2"])
    }, x = function (e, t) {
        var n = new createjs.BitmapAnimation(i);
        n.snapToPixel = !0, n.mouseEnabled = !1, n.x = e + 20, n.y = t, stage.addChild(n), n.onAnimationEnd = N, n.gotoAndPlay("all")
    }, T = function (e, t) {
        trace("[scene] - smoke " + e + " " + t);
        var n = new createjs.BitmapAnimation(s);
        n.snapToPixel = !0, n.mouseEnabled = !1, n.x = e + 45, n.y = t - 90, stage.addChild(n), n.onAnimationEnd = N, n.gotoAndPlay("all")
    }, N = function (e, t) {
        e.stop(), e.parent.removeChild(e), e = null
    }, C = Modernizr.prefixed("transform"), k = Modernizr.csstransforms3d ? "translate3d(" : "translate(", L = Modernizr.csstransforms3d ? "px, 0)" : "px)", A = function (e, t) {
        e.top = e.y + Math.sin(e.angle) * e.radius, e.style[C] = k + (e.x + Math.cos(e.angle) * e.radius) + "px," + e.top + L, e.angle += e.speed * t
    }, O = function (e, n) {
        var r = t.length, i = e / FRAME_DELTA;
        while (r--)A(t[r], i);
        luxanimals.physics.waves(t[0].top)
    };
    return{init: d, restart: m, gameOver: v, update: O, animateCharacter: b, endTurn: w, splash: S, smoke: T, cannonballHit: x, shipDamage: E, setWind: function (e) {
        luxanimals.particles.setWind(e), n[0].setWind(e), n[1].setWind(e)
    }, setStartNextTurn: function () {
        luxanimals.addObject(y)
    }, getCannonballHolder: function () {
        return c
    }}
}, luxanimals.ship = function (e) {
    trace("[ship] - init");
    var t = !0, n = !1, r = e.x, i = new createjs.Container, s = null, o = !1, u = !1, a = 20, f = 2, l = 0;
    e.x > STAGE_W / 2 && (t = !1);
    var c = new createjs.Bitmap(luxanimals.loadedAssets.ship_hull.img), h = new createjs.Bitmap(luxanimals.loadedAssets.ship_goldtrim.img), p, d, v, m = new createjs.Bitmap(luxanimals.loadedAssets.ship_sails.img), g = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.ship_flag.img], animations: {all: {frames: [0, 0, 1, 1, 2, 2, 3], next: "all"}}, frames: [
        [0, 0, 56, 17, 0, 56, 0],
        [56, 0, 56, 17, 0, 56, 0],
        [112, 0, 56, 17, 0, 56, 0],
        [168, 0, 56, 17, 0, 56, 0]
    ]}), y = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.fire.img], animations: {all: {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], next: "all"}}, frames: [
        [0, 0, 48, 67, 0, 48, 0],
        [48, 0, 48, 67, 0, 48, 0],
        [96, 0, 48, 67, 0, 48, 0],
        [144, 0, 48, 67, 0, 48, 0],
        [192, 0, 48, 67, 0, 48, 0],
        [240, 0, 48, 67, 0, 48, 0],
        [288, 0, 48, 67, 0, 48, 0],
        [336, 0, 48, 67, 0, 48, 0],
        [384, 0, 48, 67, 0, 48, 0],
        [432, 0, 48, 67, 0, 48, 0],
        [480, 0, 48, 67, 0, 48, 0],
        [528, 0, 48, 67, 0, 48, 0],
        [576, 0, 48, 67, 0, 48, 0],
        [624, 0, 48, 67, 0, 48, 0],
        [672, 0, 48, 67, 0, 48, 0],
        [720, 0, 48, 67, 0, 48, 0],
        [768, 0, 48, 67, 0, 48, 0]
    ]}), b = new createjs.BitmapAnimation(g), w = {scaleX: 1, scaleY: 1, holder: i};
    t ? (w.c = "lux", w.x = 230, w.y = 32, b.scaleX = 1, b.x = 166) : (i.scaleX = b.scaleX = -1, w.c = "trunk", w.x = 60, w.y = 28, b.scaleX = -1, b.x = 55), c.y = 100, h.y = 100, m.x = 38, m.y = b.y = -3, i.regX = 115, i.regY = 142, i.x = e.x, i.y = e.y, e.holder.addChild(i), i.addChild(m), i.addChild(b), b.gotoAndPlay("all"), i.mouseEnabled = b.mouseEnabled = c.mouseEnabled = m.mouseEnabled = !1;
    var E = new luxanimals.cannon({x: 12, y: 70, holder: i, actionHolder: e.cannonballHolder, left: t, ai: e.ai}), S = new luxanimals.character(w);
    i.addChild(c), i.addChild(h);
    var x = luxanimals.physics.createShip({skin: i, x: e.x, y: e.y, left: t}), T = function (e) {
        S.animate(e)
    }, N = function (e) {
        l = e, l > 0 || s == "left" ? l > 0 && s != "right" && (s = "right", t ? (b.scaleX = 1, b.x = 166) : (b.scaleX = -1, b.x = 55)) : (s = "left", t ? (b.scaleX = -1, b.x = 55) : (b.scaleX = 1, b.x = 166))
    }, C = function (n) {
        switch (n) {
            case 1:
                i.removeChild(m), i.removeChild(b), m.regX = 76, m.regY = 73, m.x = i.x - 24, m.y = i.y - 77, e.holder.addChild(m), u = !0;
                break;
            case 2:
                i.removeChild(h), p = new createjs.Bitmap(luxanimals.loadedAssets.gold_damage_back.img), d = new createjs.Bitmap(luxanimals.loadedAssets.gold_damage_mid.img), v = new createjs.Bitmap(luxanimals.loadedAssets.gold_damage_front.img), e.cannonballHolder.addChild(p), e.cannonballHolder.addChild(d), e.cannonballHolder.addChild(v), t || (p.scaleX = -1, d.scaleX = -1, v.scaleX = -1), p.regX = 37, p.regY = 22, d.regX = 48, d.regY = 13, v.regX = 30, v.regY = 13, p.x = i.x - 85, p.y = i.y - 38, d.x = i.x, d.y = i.y - 29, v.x = i.x + 80, v.y = i.y - 38, o = !0;
                var r = new createjs.BitmapAnimation(y);
                r.mouseEnabled = !1, r.x = 82, r.y = 67, i.addChild(r), r.gotoAndPlay("all")
        }
    }, k = function (n, r) {
        o && (o = !1, luxanimals.physics.shipGoldDamage(p, d, v, t));
        if (u) {
            var i = n / FRAME_DELTA;
            m.y -= a * i, m.x += l * 6 * i, m.rotation += l * 2 * i, a -= f * i, m.y >= 550 && (u = !1, luxanimals.scene.splash(m.x), e.holder.removeChild(m))
        }
    }, L = function () {
        luxanimals.addObject(E, 0);
        if (e.ai) {
            var t = luxanimals.levels.getAIRanges(), n = t.stupid, r = luxanimals.gameManager.getPlayers(), i, s;
            r[1].ai ? (i = r[1], s = r[0]) : (i = r[0], s = r[1]), i.hits > s.hits ? n = t.hard : i.hits < s.hits ? n = t.stupid : n = t.normal, E.autoPilot({min: n[0], max: n[1]}, {min: n[2], max: n[3]})
        }
    }, A = function () {
        E.reset(), luxanimals.removeObject(E)
    };
    return{update: k, activate: L, deactivate: A, animate: T, damage: C, setWind: N, getPosition: function () {
        return{x: i.x, y: i.y}
    }}
}, luxanimals.cannon = function (e) {
    trace("[cannon] - init ai: " + e.ai);
    var t = -86, n = 0, r = 25, i = 5, s = r - i, o = 0, u = i, a = 0, f = !1, l = !1, c, h, p, d, v, m, g = new createjs.Container({name: "cannon"}), y = $(g), b = e.ai, w = !1, E = !0, S = !1;
    p = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.cannonFlash.img], animations: {all: {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0], next: !1}}, frames: [
        [0, 0, 174, 155, 0, 174, 0],
        [174, 0, 174, 155, 0, 174, 0],
        [348, 0, 174, 155, 0, 174, 0],
        [522, 0, 174, 155, 0, 174, 0],
        [696, 0, 174, 155, 0, 174, 0],
        [870, 0, 174, 155, 0, 174, 0],
        [1044, 0, 174, 155, 0, 174, 0],
        [1218, 0, 174, 155, 0, 174, 0],
        [1392, 0, 174, 155, 0, 174, 0],
        [1566, 0, 174, 155, 0, 174, 0],
        [1740, 0, 174, 155, 0, 174, 0],
        [0, 155, 174, 155, 0, 174, 0],
        [174, 155, 174, 155, 0, 174, 0],
        [348, 155, 174, 155, 0, 174, 0]
    ]}), d = new createjs.BitmapAnimation(p), h = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.cannon.img], frames: [
        [0, 0, 93, 59, 0, 93, 0],
        [93, 0, 93, 59, 0, 93, 0],
        [186, 0, 93, 59, 0, 93, 0],
        [279, 0, 93, 59, 0, 93, 0],
        [372, 0, 93, 59, 0, 93, 0],
        [465, 0, 93, 59, 0, 93, 0],
        [558, 0, 93, 59, 0, 93, 0],
        [651, 0, 93, 59, 0, 93, 0],
        [744, 0, 93, 59, 0, 93, 0],
        [837, 0, 93, 59, 0, 93, 0],
        [930, 0, 93, 59, 0, 93, 0],
        [1023, 0, 93, 59, 0, 93, 0],
        [1116, 0, 93, 59, 0, 93, 0],
        [1209, 0, 93, 59, 0, 93, 0],
        [1302, 0, 93, 59, 0, 93, 0],
        [1395, 0, 93, 59, 0, 93, 0],
        [1488, 0, 93, 59, 0, 93, 0],
        [1581, 0, 93, 59, 0, 93, 0],
        [1674, 0, 93, 59, 0, 93, 0],
        [1767, 0, 93, 59, 0, 93, 0],
        [1860, 0, 93, 59, 0, 93, 0],
        [1953, 0, 93, 59, 0, 93, 0],
        [0, 59, 93, 59, 0, 93, 0],
        [93, 59, 93, 59, 0, 93, 0],
        [186, 59, 93, 59, 0, 93, 0],
        [279, 59, 93, 59, 0, 93, 0],
        [372, 59, 93, 59, 0, 93, 0],
        [465, 59, 93, 59, 0, 93, 0],
        [558, 59, 93, 59, 0, 93, 0],
        [651, 59, 93, 59, 0, 93, 0]
    ]}), v = new createjs.BitmapAnimation(h), m = new createjs.Bitmap(luxanimals.loadedAssets.cannonMount.img), n = -86, t = 0, g.regX = -70, g.regY = 29, g.x = m.x = e.x, g.y = m.y = e.y, g.rotation = 0, m.mouseEnabled = g.mouseEnabled = v.mouseEnabled = !1, e.holder.addChild(g), g.addChild(v), e.holder.addChild(m), v.gotoAndStop(1);
    var x = 1, T = .001, N = 3 / 21, C = function (c, h) {
        if (o < 1) {
            f && (!l && (luxanimals.buttons.mouseUp && !b || E && b) && (l = !0, S || (T = 24 - ~~(T * N), S = !0)), l && (x === 29 ? (T = .001, x = 1, f = !1, l = !1, o++) : (T += c / FRAME_DELTA, x = Math.ceil(T), x >= 29 && (k(), x = 29), v.gotoAndStop(x))));
            if (luxanimals.buttons.mouseDown && !b && !l || w && b)f = !0, u += c / FRAME_DELTA, b && u >= a ? (trace("[cannon] AI Force"), w = !1, E = !0) : u = Math.min(u, r), T = (u - i) * 18 / s, x = Math.ceil(T), v.gotoAndStop(x), g.x = Math.random() * u / 5 + e.x, g.y = Math.random() * u / 5 + e.y;
            if (!b && !l) {
                var p, d, m = g.localToGlobal(-70, 29);
                e.left ? (d = stage.mouseY - m.y, p = stage.mouseX - m.x) : (d = stage.mouseY - m.y, p = (stage.mouseX - m.x) * -1), g.rotation = Math.min(Math.max(Math.atan2(d, p) * 57.2957795, n), t)
            }
        }
    }, k = function () {
        var t = -60;
        luxanimals.gameManager.fire();
        var n = e.holder.x + g.x - e.holder.regX - Math.cos(g.rotation * DEG_TO_RAD) * t, r = e.holder.y + g.y - e.holder.regY - Math.sin(g.rotation * DEG_TO_RAD) * t;
        e.left || (n = e.holder.x - g.x + e.holder.regX - Math.cos(g.rotation * DEG_TO_RAD) * 60);
        var s = new luxanimals.cannonball({x: n, y: r, holder: e.actionHolder, left: e.left, angle: g.rotation, force: u});
        s.init(), d.x = 135, d.rotation = 31, g.addChild(d), d.gotoAndPlay("all"), d.onAnimationEnd = A, luxanimals.physics.shipFire(luxanimals.gameManager.getTurn(), u, g.rotation), u = i, luxanimals.soundManager.playSound("fire", {interrupt: SoundJS.INTERRUPT_ANY})
    }, L = function (e, t) {
        var n = e.min + Math.random() * (e.max - e.min);
        a = t.min + Math.random() * (t.max - t.min), createjs.Tween.get(g).wait(200).to({rotation: n}, ~~(Math.random() * 500) + 500, createjs.Ease.quadOut).call(function () {
            E = !1, w = !0
        })
    }, A = function () {
        g.removeChild(d)
    }, O = function () {
        l || (v.gotoAndStop(1), u = i), l = !1, o = 0, f = !1, S = !1
    };
    return{update: C, reset: O, autoPilot: L}
}, function () {
    var e, t, n = function () {
        e = new createjs.Bitmap(luxanimals.loadedAssets.cannonball.img), t = [new createjs.Bitmap(luxanimals.loadedAssets.cTrail1.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail2.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail3.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail4.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail5.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail6.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail7.img), new createjs.Bitmap(luxanimals.loadedAssets.cTrail8.img)], e.set({mouseEnabled: !1, regX: 11, regY: 11}), t.forEach(function (e) {
            e.set({regX: 13, regY: 13})
        })
    };
    luxanimals.cannonball = function (r) {
        e || n(), trace("[cannonball]");
        var i;
        r.left ? r.force = -r.force : r.angle = -r.angle;
        var s = [], o = function () {
            i = luxanimals.physics.createCannonball(r.x, r.y, e, r.angle, r.force, f, l), t.forEach(function (e) {
                e.visible = !1
            }), r.holder.addChild.apply(r.holder, t), r.holder.addChild(e)
        }, u = 0, a = .75, f = function (e, n) {
            var r = e / FRAME_DELTA, i = r * 5;
            u += r;
            if (u > a) {
                u -= a;
                var o = this.body.GetLinearVelocity(), f = o.x + o.y;
                f < 0 && (f = -f), s.unshift({x: this.skin.x, y: this.skin.y}), s.length > t.length && (s.length -= 1);
                for (var l = 0, c = s.length; l < c; l++)t[l].set({visible: !0, alpha: Math.min(f / 3, 1), x: ~~s[l].x, y: ~~s[l].y, rotation: t[l].rotation + i})
            }
        }, l = function () {
            trace("CANNONBALL KILL"), e.y > 580 && luxanimals.scene.splash(e.x), r.holder.removeChild.apply(r.holder, t), luxanimals.gameManager.turnComplete()
        };
        return{init: o, update: f, kill: l}
    }
}(), luxanimals.character = function (e) {
    trace("[character] - init");
    var t, n, r = 0, i = 8, s = "idle", o = Math.round(Math.random() * 200) + 60;
    e.c === "trunk" ? t = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.trunkford.img], animations: {win: {frames: [40, 41, 42, 43, 44, 45, 46], next: "WinLoop"}, lose: {frames: [40, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63], next: "LoseLoop"}, LoseLoop: {frames: [59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67], next: "LoseLoop"}, fire: {frames: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 21, 22, 23, 24, 25, 26, 27], next: !1}, idle: {frames: [0, 0, 1, 1, 0, 0], next: !1}, WinLoop: {frames: [48, 49, 50, 51, 52, 53, 50, 51], next: "WinLoop"}, intro: {frames: [40, 72, 73, 74, 75, 76, 77, 78, 79, 80, 80, 80, 80, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 81, 82, 83, 84, 85, 86, 86, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40], next: !1}, hit: {frames: [0, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], next: !1}}, frames: [
        [0, 0, 188, 110, 0, 188, 0],
        [188, 0, 188, 110, 0, 188, 0],
        [376, 0, 188, 110, 0, 188, 0],
        [564, 0, 188, 110, 0, 188, 0],
        [752, 0, 188, 110, 0, 188, 0],
        [940, 0, 188, 110, 0, 188, 0],
        [1128, 0, 188, 110, 0, 188, 0],
        [1316, 0, 188, 110, 0, 188, 0],
        [1504, 0, 188, 110, 0, 188, 0],
        [1692, 0, 188, 110, 0, 188, 0],
        [0, 110, 188, 110, 0, 188, 0],
        [188, 110, 188, 110, 0, 188, 0],
        [376, 110, 188, 110, 0, 188, 0],
        [564, 110, 188, 110, 0, 188, 0],
        [752, 110, 188, 110, 0, 188, 0],
        [940, 110, 188, 110, 0, 188, 0],
        [1128, 110, 188, 110, 0, 188, 0],
        [1316, 110, 188, 110, 0, 188, 0],
        [1504, 110, 188, 110, 0, 188, 0],
        [1692, 110, 188, 110, 0, 188, 0],
        [0, 220, 188, 110, 0, 188, 0],
        [188, 220, 188, 110, 0, 188, 0],
        [376, 220, 188, 110, 0, 188, 0],
        [564, 220, 188, 110, 0, 188, 0],
        [752, 220, 188, 110, 0, 188, 0],
        [940, 220, 188, 110, 0, 188, 0],
        [1128, 220, 188, 110, 0, 188, 0],
        [1316, 220, 188, 110, 0, 188, 0],
        [1504, 220, 188, 110, 0, 188, 0],
        [1692, 220, 188, 110, 0, 188, 0],
        [0, 330, 188, 110, 0, 188, 0],
        [188, 330, 188, 110, 0, 188, 0],
        [376, 330, 188, 110, 0, 188, 0],
        [564, 330, 188, 110, 0, 188, 0],
        [752, 330, 188, 110, 0, 188, 0],
        [940, 330, 188, 110, 0, 188, 0],
        [1128, 330, 188, 110, 0, 188, 0],
        [1316, 330, 188, 110, 0, 188, 0],
        [1504, 330, 188, 110, 0, 188, 0],
        [1692, 330, 188, 110, 0, 188, 0],
        [0, 440, 188, 110, 0, 188, 0],
        [188, 440, 188, 110, 0, 188, 0],
        [376, 440, 188, 110, 0, 188, 0],
        [564, 440, 188, 110, 0, 188, 0],
        [752, 440, 188, 110, 0, 188, 0],
        [940, 440, 188, 110, 0, 188, 0],
        [1128, 440, 188, 110, 0, 188, 0],
        [1316, 440, 188, 110, 0, 188, 0],
        [1504, 440, 188, 110, 0, 188, 0],
        [1692, 440, 188, 110, 0, 188, 0],
        [0, 550, 188, 110, 0, 188, 0],
        [188, 550, 188, 110, 0, 188, 0],
        [376, 550, 188, 110, 0, 188, 0],
        [564, 550, 188, 110, 0, 188, 0],
        [752, 550, 188, 110, 0, 188, 0],
        [940, 550, 188, 110, 0, 188, 0],
        [1128, 550, 188, 110, 0, 188, 0],
        [1316, 550, 188, 110, 0, 188, 0],
        [1504, 550, 188, 110, 0, 188, 0],
        [1692, 550, 188, 110, 0, 188, 0],
        [0, 660, 188, 110, 0, 188, 0],
        [188, 660, 188, 110, 0, 188, 0],
        [376, 660, 188, 110, 0, 188, 0],
        [564, 660, 188, 110, 0, 188, 0],
        [752, 660, 188, 110, 0, 188, 0],
        [940, 660, 188, 110, 0, 188, 0],
        [1128, 660, 188, 110, 0, 188, 0],
        [1316, 660, 188, 110, 0, 188, 0],
        [1504, 660, 188, 110, 0, 188, 0],
        [1692, 660, 188, 110, 0, 188, 0],
        [0, 770, 188, 110, 0, 188, 0],
        [188, 770, 188, 110, 0, 188, 0],
        [376, 770, 188, 110, 0, 188, 0],
        [564, 770, 188, 110, 0, 188, 0],
        [752, 770, 188, 110, 0, 188, 0],
        [940, 770, 188, 110, 0, 188, 0],
        [1128, 770, 188, 110, 0, 188, 0],
        [1316, 770, 188, 110, 0, 188, 0],
        [1504, 770, 188, 110, 0, 188, 0],
        [1692, 770, 188, 110, 0, 188, 0],
        [0, 880, 188, 110, 0, 188, 0],
        [188, 880, 188, 110, 0, 188, 0],
        [376, 880, 188, 110, 0, 188, 0],
        [564, 880, 188, 110, 0, 188, 0],
        [752, 880, 188, 110, 0, 188, 0],
        [940, 880, 188, 110, 0, 188, 0],
        [1128, 880, 188, 110, 0, 188, 0]
    ]}) : t = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.lux.img], animations: {win: {frames: [65, 66, 67, 68, 69, 70, 71], next: "WinLoop"}, lose: {frames: [0, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], next: "loseLoop"}, loseLoop: {frames: [109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113], next: "loseLoop"}, fire: {frames: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], next: !1}, idle: {frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], next: !1}, WinLoop: {frames: [73, 74, 75, 76, 76, 77, 78], next: "WinLoop"}, intro: {frames: [0, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 139, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 141, 142, 143, 144, 0], next: !1}, hit: {frames: [0, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 47, 48, 49, 50, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64], next: !1}}, frames: [
        [0, 0, 141, 104, 0, 141, 0],
        [141, 0, 141, 104, 0, 141, 0],
        [282, 0, 141, 104, 0, 141, 0],
        [423, 0, 141, 104, 0, 141, 0],
        [564, 0, 141, 104, 0, 141, 0],
        [705, 0, 141, 104, 0, 141, 0],
        [846, 0, 141, 104, 0, 141, 0],
        [987, 0, 141, 104, 0, 141, 0],
        [1128, 0, 141, 104, 0, 141, 0],
        [1269, 0, 141, 104, 0, 141, 0],
        [1410, 0, 141, 104, 0, 141, 0],
        [1551, 0, 141, 104, 0, 141, 0],
        [1692, 0, 141, 104, 0, 141, 0],
        [1833, 0, 141, 104, 0, 141, 0],
        [0, 104, 141, 104, 0, 141, 0],
        [141, 104, 141, 104, 0, 141, 0],
        [282, 104, 141, 104, 0, 141, 0],
        [423, 104, 141, 104, 0, 141, 0],
        [564, 104, 141, 104, 0, 141, 0],
        [705, 104, 141, 104, 0, 141, 0],
        [846, 104, 141, 104, 0, 141, 0],
        [987, 104, 141, 104, 0, 141, 0],
        [1128, 104, 141, 104, 0, 141, 0],
        [1269, 104, 141, 104, 0, 141, 0],
        [1410, 104, 141, 104, 0, 141, 0],
        [1551, 104, 141, 104, 0, 141, 0],
        [1692, 104, 141, 104, 0, 141, 0],
        [1833, 104, 141, 104, 0, 141, 0],
        [0, 208, 141, 104, 0, 141, 0],
        [141, 208, 141, 104, 0, 141, 0],
        [282, 208, 141, 104, 0, 141, 0],
        [423, 208, 141, 104, 0, 141, 0],
        [564, 208, 141, 104, 0, 141, 0],
        [705, 208, 141, 104, 0, 141, 0],
        [846, 208, 141, 104, 0, 141, 0],
        [987, 208, 141, 104, 0, 141, 0],
        [1128, 208, 141, 104, 0, 141, 0],
        [1269, 208, 141, 104, 0, 141, 0],
        [1410, 208, 141, 104, 0, 141, 0],
        [1551, 208, 141, 104, 0, 141, 0],
        [1692, 208, 141, 104, 0, 141, 0],
        [1833, 208, 141, 104, 0, 141, 0],
        [0, 312, 141, 104, 0, 141, 0],
        [141, 312, 141, 104, 0, 141, 0],
        [282, 312, 141, 104, 0, 141, 0],
        [423, 312, 141, 104, 0, 141, 0],
        [564, 312, 141, 104, 0, 141, 0],
        [705, 312, 141, 104, 0, 141, 0],
        [846, 312, 141, 104, 0, 141, 0],
        [987, 312, 141, 104, 0, 141, 0],
        [1128, 312, 141, 104, 0, 141, 0],
        [1269, 312, 141, 104, 0, 141, 0],
        [1410, 312, 141, 104, 0, 141, 0],
        [1551, 312, 141, 104, 0, 141, 0],
        [1692, 312, 141, 104, 0, 141, 0],
        [1833, 312, 141, 104, 0, 141, 0],
        [0, 416, 141, 104, 0, 141, 0],
        [141, 416, 141, 104, 0, 141, 0],
        [282, 416, 141, 104, 0, 141, 0],
        [423, 416, 141, 104, 0, 141, 0],
        [564, 416, 141, 104, 0, 141, 0],
        [705, 416, 141, 104, 0, 141, 0],
        [846, 416, 141, 104, 0, 141, 0],
        [987, 416, 141, 104, 0, 141, 0],
        [1128, 416, 141, 104, 0, 141, 0],
        [1269, 416, 141, 104, 0, 141, 0],
        [1410, 416, 141, 104, 0, 141, 0],
        [1551, 416, 141, 104, 0, 141, 0],
        [1692, 416, 141, 104, 0, 141, 0],
        [1833, 416, 141, 104, 0, 141, 0],
        [0, 520, 141, 104, 0, 141, 0],
        [141, 520, 141, 104, 0, 141, 0],
        [282, 520, 141, 104, 0, 141, 0],
        [423, 520, 141, 104, 0, 141, 0],
        [564, 520, 141, 104, 0, 141, 0],
        [705, 520, 141, 104, 0, 141, 0],
        [846, 520, 141, 104, 0, 141, 0],
        [987, 520, 141, 104, 0, 141, 0],
        [1128, 520, 141, 104, 0, 141, 0],
        [1269, 520, 141, 104, 0, 141, 0],
        [1410, 520, 141, 104, 0, 141, 0],
        [1551, 520, 141, 104, 0, 141, 0],
        [1692, 520, 141, 104, 0, 141, 0],
        [1833, 520, 141, 104, 0, 141, 0],
        [0, 624, 141, 104, 0, 141, 0],
        [141, 624, 141, 104, 0, 141, 0],
        [282, 624, 141, 104, 0, 141, 0],
        [423, 624, 141, 104, 0, 141, 0],
        [564, 624, 141, 104, 0, 141, 0],
        [705, 624, 141, 104, 0, 141, 0],
        [846, 624, 141, 104, 0, 141, 0],
        [987, 624, 141, 104, 0, 141, 0],
        [1128, 624, 141, 104, 0, 141, 0],
        [1269, 624, 141, 104, 0, 141, 0],
        [1410, 624, 141, 104, 0, 141, 0],
        [1551, 624, 141, 104, 0, 141, 0],
        [1692, 624, 141, 104, 0, 141, 0],
        [1833, 624, 141, 104, 0, 141, 0],
        [0, 728, 141, 104, 0, 141, 0],
        [141, 728, 141, 104, 0, 141, 0],
        [282, 728, 141, 104, 0, 141, 0],
        [423, 728, 141, 104, 0, 141, 0],
        [564, 728, 141, 104, 0, 141, 0],
        [705, 728, 141, 104, 0, 141, 0],
        [846, 728, 141, 104, 0, 141, 0],
        [987, 728, 141, 104, 0, 141, 0],
        [1128, 728, 141, 104, 0, 141, 0],
        [1269, 728, 141, 104, 0, 141, 0],
        [1410, 728, 141, 104, 0, 141, 0],
        [1551, 728, 141, 104, 0, 141, 0],
        [1692, 728, 141, 104, 0, 141, 0],
        [1833, 728, 141, 104, 0, 141, 0],
        [0, 832, 141, 104, 0, 141, 0],
        [141, 832, 141, 104, 0, 141, 0],
        [282, 832, 141, 104, 0, 141, 0],
        [423, 832, 141, 104, 0, 141, 0],
        [564, 832, 141, 104, 0, 141, 0],
        [705, 832, 141, 104, 0, 141, 0],
        [846, 832, 141, 104, 0, 141, 0],
        [987, 832, 141, 104, 0, 141, 0],
        [1128, 832, 141, 104, 0, 141, 0],
        [1269, 832, 141, 104, 0, 141, 0],
        [1410, 832, 141, 104, 0, 141, 0],
        [1551, 832, 141, 104, 0, 141, 0],
        [1692, 832, 141, 104, 0, 141, 0],
        [1833, 832, 141, 104, 0, 141, 0],
        [0, 936, 141, 104, 0, 141, 0],
        [141, 936, 141, 104, 0, 141, 0],
        [282, 936, 141, 104, 0, 141, 0],
        [423, 936, 141, 104, 0, 141, 0],
        [564, 936, 141, 104, 0, 141, 0],
        [705, 936, 141, 104, 0, 141, 0],
        [846, 936, 141, 104, 0, 141, 0],
        [987, 936, 141, 104, 0, 141, 0],
        [1128, 936, 141, 104, 0, 141, 0],
        [1269, 936, 141, 104, 0, 141, 0],
        [1410, 936, 141, 104, 0, 141, 0],
        [1551, 936, 141, 104, 0, 141, 0],
        [1692, 936, 141, 104, 0, 141, 0],
        [1833, 936, 141, 104, 0, 141, 0],
        [0, 1040, 141, 104, 0, 141, 0],
        [141, 1040, 141, 104, 0, 141, 0],
        [282, 1040, 141, 104, 0, 141, 0],
        [423, 1040, 141, 104, 0, 141, 0],
        [564, 1040, 141, 104, 0, 141, 0]
    ]}), n = new createjs.BitmapAnimation(t), e.c === "trunk" && (n.scaleX = -1), n.x = e.x, n.y = e.y, e.holder.addChild(n), n.gotoAndStop(0);
    var u = function (e) {
        trace("[character] - animate: " + e), n.gotoAndPlay(e), s = "animating", e != "lose" && e != "win" ? n.onAnimationEnd = a : delete n.onAnimationEnd
    }, a = function () {
        trace("[character] resetCurrentState"), s = "idle", o = ~~(Math.random() * 160) + 30, n.gotoAndStop(0)
    }, f = function (e, t) {
        s === "idle" && (i > 0 && (i -= e / FRAME_DELTA), i <= 0 && (r += e / FRAME_DELTA, n.currentFrame !== 0 && n.gotoAndStop(0)), ~~r % o === 0 && (r = 1, i = 5, n.gotoAndStop(1), o = ~~(Math.random() * 160) + 30))
    };
    return{update: f, animate: u}
}, luxanimals.soundManager = function () {
    var e = "assets/sound/", t = Modernizr.ios, n = Modernizr.mobile, r = !1, i = null, s = null, o = null, u = new PreloadJS;
    u.installPlugin(SoundJS), u.onError = function (e) {
        console.error("SOUND LOAD ERROR", e)
    };
    var a = function (t, n, r) {
        r = r || u;
        var i = [];
        n ? r.onFileLoad = n : delete r.onFileLoad, t = t.split(" ");
        while (t.length) {
            var s = t.shift();
            i.push({id: s, src: e + s + ".ogg|" + e + s + ".mp3"})
        }
        r.loadManifest(i)
    }, f = function (e, t) {
        return t = t || {}, t.loop && (i = e), r ? -1 : SoundJS.play(e, t.interrupt, t.delay, t.offset, t.loop, t.vol, t.pan)
    }, l = function (e) {
        return e === i && (i = null), SoundJS.stop(e)
    }, c = function (e) {
        return e === i && (i = null), SoundJS.pause(e)
    }, h = function (e, t) {
        return t && i !== e ? (i && (l(i), $("audio").remove()), s = window.loop = f(e, {loop: -1, interrupt: SoundJS.INTERRUPT_ANY})) : (t && (i = e), r ? -1 : SoundJS.resume(e))
    }, p = function () {
    }, d = function () {
    }, v = function (e) {
        return i ? e ? h(i) : SoundJS.pause(i) : -1
    }, m = function (e, t) {
        if (r)return-1;
        var n = Math.round(Math.random() * (e.length - 1));
        return f(e[n], t)
    }, g = function (e) {
        return e === !0 || e === !1 ? r = e === !0 : r = !r, SoundJS.setMute(r), r
    };
    return{load: a, playSound: f, stopSound: l, pauseSound: c, resumeSound: h, toggleLoop: v, playRandomSound: m, muteUnmute: g}
}, luxanimals.uiManager = function () {
    function b(e) {
        var t;
        return e.match(/^https?:\/\//) ? e : (t = location.host, location.port.length > 0 && (t += ":" + location.port), e.match(/^\/[^\/]/) ? [location.protocol, "//", t, e].join("") : [location.protocol, "//", t, location.pathname.replace(/\/([^\/]+)$/, "/"), e].join(""))
    }

    var e = "assets/images/", t, n, r, i = !1, s = !1, o = Modernizr.ios, u = Modernizr.android, a = $("#mute-button"), f = $("body"), l = createjs.Tween, c = createjs.Ease, h = Class.extend({toLoad: [], holder: null, load: function () {
        trace('[uiManager] screen "' + this.id + '" loading');
        var t = [], n = new PreloadJS;
        n.setMaxConnections(5), n.onComplete = function () {
            trace("[preloader] - screen loading complete"), w(), V.complete()
        }, n.onProgress = function (e) {
            V.progress(e)
        };
        for (var r = 0; r < this.toLoad.length; r++)t.push({id: this.toLoad[r], src: e + this.toLoad[r]});
        n.loadManifest(t)
    }, initScreen: function () {
        this.animateIn()
    }, animateIn: function () {
        this.holder.css({"pointer-events": "auto"})
    }, animateOut: function () {
        this.holder.css({"pointer-events": "none"})
    }, name: function () {
        return this.id
    }}), p = !1, d = function (e, t) {
        t || luxanimals.soundManager.resumeSound(e, !0), o && !t && m(!1, !t)
    }, v = function (e) {
        o || luxanimals.soundManager.playSound(e, {interrupt: SoundJS.INTERRUPT_ANY})
    }, m = function (e, t) {
        if (!i || !t)if (e || !s || t)e = luxanimals.soundManager.muteUnmute(e), t && (s = e), luxanimals.soundManager.toggleLoop(!e), a.toggleClass("on", e);
        return e
    };
    o && (window.addEventListener("pagehide", function (e) {
        m(!0), r === "startGame" && luxanimals.gameManager.pause(), luxanimals.trackEvent("Mobile", "Blur", e.type)
    }, !1), window.addEventListener("pagehide", function (e) {
        luxanimals.trackEvent("Mobile", "Focus", e.type)
    }, !1)), u && f.on("click", ".simple-button, .select-portrait, .back-button", function () {
        window.setupScroll()
    }), f.on("mouseover", ".simple-button, .back-button, .select-portrait", function () {
        v("hover")
    }).on("click", ".simple-button, .back-button, .select-portrait", function () {
        v("click")
    }), a.on("click", function () {
        var e = $(this).hasClass("on");
        e = m(!e, !0), luxanimals.trackEvent("Button", "Click", "Mute", i ? 2 : e ? 1 : 0)
    }).toggleClass("on", o);
    var g = function (e, t) {
        var n = document, r = n.location, i = encodeURIComponent, s = ["//www.facebook.com/dialog/feed", "?app_id=326307477419185&link=", i(r.href), "&picture=", i(b(e.picture)), "&name=", i(e.name), "&caption=luxahoy.com", "&description=", i(e.description), "&redirect_uri=", i(b("closewin.html"))], o = function () {
            window.open(s.join(""), "sharer", "toolbar=0,status=0,resizable=1,width=1024,height=436") || (s[s.length - 1] = i(b("")), r.href = s.join(""))
        };
        /Firefox/.test(navigator.userAgent) ? setTimeout(o, 0) : o(), luxanimals.trackSocial("facebook", "feed dialog", r.href, t)
    }, y = function (e, t) {
        window.twttr = window.twttr || {};
        var n = 550, r = 450, i = screen.height, s = screen.width, o = Math.round(s / 2 - n / 2), u = 0, a = document, f;
        i > r && (u = Math.round(i / 2 - r / 2)), document.title = e, window.twttr.shareWin = window.open("http://twitter.com/share", "", "left=" + o + ",top=" + u + ",width=" + n + ",height=" + r + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1"), f = a.createElement("script"), f.src = "http://platform.twitter.com/bookmarklets/share.js?v=1", a.getElementsByTagName("head")[0].appendChild
        (f), luxanimals.trackSocial("twitter", "share dialog", a.location.href, t)
    }, w = function () {
        trace("[uiManager] nextScreenLoaded - " + screen.id), V.hide(), t ? t.animateOut() : S(), !o && !globalNoLoop && d(r !== "startGame" ? "menuLoop" : "battleLoop")
    }, E = function (e, t) {
        trace("[uiManager] loadNextScreen - " + e), V.show(), r = e;
        switch (e) {
            case"home":
                n = C;
                break;
            case"characterSelection":
                n = L;
                break;
            case"levelSelection":
                n = O;
                break;
            case"instructionsObject":
                n = M;
                break;
            case"videoObject":
                n = _;
                break;
            case"leaderboardObject":
                n = D
        }
        e !== "startGame" ? (n.load(), !p && !globalNoLoop ? (p = !0, luxanimals.soundManager.load(o ? "menuLoop battleLoop" : "menuLoop hover click", function (e) {
            e.id === "menuLoop" && !o && r !== "startGame" && !globalNoLoop && d(e.id)
        })) : o && !globalNoLoop && d("menuLoop", t)) : (trace("IE seems happier with this trace statement present."), luxanimals.main.game.preloadStart(), o && !globalNoLoop && d("battleLoop", t)), luxanimals.user.screen = e
    }, S = function () {
        trace("[uiManager] - switchScreen: " + r), t = n, a.show(), r !== "startGame" ? ($("#canvasHolder").hide(), $("#main").show(), t.initScreen()) : B.animateIn()
    }, x = function () {
        $.jStorage.set("user.screen", luxanimals.user.screen), $.jStorage.set("user.level", luxanimals.user.level), $.jStorage.set("user.character", luxanimals.user.character)
    }, T = function () {
        $.jStorage.set("user.characters", luxanimals.user.characters), $.jStorage.set("user.scores", luxanimals.user.scores)
    }, N = h.extend({holder: $("#main-screen"), arm: $("#main-menu-lux-arm"), footer: $("#footer"), abTestLetter: null, load: function () {
        trace("[uiManager] - home: load"), this.id = "home", this.toLoad = ["main-screen-background.jpg", "simple-button.png", "back-button.png", "mute-button.png", "main-menu-lux.png", "main-menu-lux-arm.png", "fwa_badge.png"], this._super()
    }, initScreen: function () {
        var e = this;
        trace("[uiManager] - home: init"), Modernizr.cutscenes || $("#video-button").hide(), this._super(), this.getAbTestLetter(), this.footer.find(".footer-message-" + this.abTestLetter).css("display", "inline-block"), this.arm.css({transformOrigin: "0 50%", rotate: -24}), this.holder.on("click", "#fight-button", function () {
            e.holder.off(), luxanimals.trackEvent("Button", "Click", "Fight"), E("characterSelection")
        }).on("click", "#instructions-button", function () {
            e.holder.off(), luxanimals.trackEvent("Button", "Click", "Instructions"), E("instructionsObject")
        }).on("click", "#video-button", function () {
            e.holder.off(), luxanimals.trackEvent("Button", "Click", "Video"), E("videoObject")
        }).on("click", "#leaderboard-button", function () {
            e.holder.off(), luxanimals.trackEvent("Button", "Click", "Leaderboard"), E("leaderboardObject")
        }).on("mouseover", "#fight-button", function () {
            e.arm.stop().transition({x: 0, rotate: -24}, 300)
        }).on("mouseover", "#instructions-button", function () {
            e.arm.stop().transition({x: 0, rotate: 0}, 300)
        }).on("mouseover", "#leaderboard-button", function () {
            e.arm.stop().transition({x: 0, rotate: 18}, 300)
        }).on("mouseover", "#video-button", function () {
            e.arm.stop().transition({x: 0, rotate: 24}, 300)
        }), this.footer.on("click", ".footer-download-amazon", function () {
            luxanimals.trackEvent("Button", "Click", "Download Amazon " + e.abTestLetter), console.log("Button", "Click", "Download Amazon " + e.abTestLetter)
        }).on("click", ".footer-download-googleplay", function () {
            luxanimals.trackEvent("Button", "Click", "Download Google Play " + e.abTestLetter), console.log("Button", "Click", "Download Google Play " + e.abTestLetter)
        })
    }, animateIn: function () {
        trace("[uiManager] - home: animateIn"), this._super(), this.holder.stop().css({opacity: 0, display: "block"}).transition({opacity: 1}, 500, x), luxanimals.trackScreen("/home")
    }, animateOut: function () {
        var e = this;
        trace("[uiManager] - home: animateOut"), this._super(), this.holder.stop().transition({opacity: 0}, 500, function (t) {
            e.holder.hide(), S()
        })
    }, name: function () {
        this._super()
    }, getAbTestLetter: function () {
        var e = Math.floor(Math.random() * 2);
        this.abTestLetter = e === 0 ? "a" : "b"
    }}), C = new N, k = h.extend({holder: $("#select-screen"), load: function () {
        trace("[uiManager] - characterSelection: load"), this.toLoad = ["select-screen-background.jpg", "select-screen-title.png", "screen-underline.png", "select-frame.png", "select-luxamillion.jpg", "select-trunkford.jpg", "simple-button.png", "back-button.png", "mute-button.png", "fwa_badge.png"], this._super()
    }, initScreen: function () {
        var e = this;
        trace("[uiManager] - characterSelection: init");
        var t = this.holder.find(".select-portrait");
        this._super(), this.holder.on("click", "#select-luxamillion, #select-trunkford", function (t) {
            var n = /luxamillion/i.test(t.currentTarget.id) ? "luxamillion" : "trunkford";
            e.holder.off(), luxanimals.gameManager.selectCharacter(n), luxanimals.user.character = n, luxanimals.trackEvent("Button", "Click", "Select " + n), E("levelSelection"), v("click")
        }).on("click", "#select-screen-back-button", function () {
            e.holder.off(), luxanimals.trackEvent("Button", "Click", "Back /select-character"), E("home")
        }).on("mouseover", ".portrait", function (e) {
            $(this).transition({x: "-471px"}, 250)
        }).on("mouseout", ".portrait", function () {
            $(this).transition({x: 0}, 250)
        }).find(".portrait").css({x: 0})
    }, animateIn: function () {
        trace("[uiManager] - characterSelection: animateIn"), this._super(), this.holder.stop().css({opacity: 0, display: "block"}).transition({opacity: 1}, 500, x), luxanimals.trackScreen("/select-character")
    }, animateOut: function (e) {
        var t = this;
        trace("[uiManager] - characterSelection: animateOut"), this._super(), this.holder.stop().transition({opacity: 0}, 500, function (e) {
            t.holder.hide(), S()
        })
    }}), L = new k, A = function (e) {
        var t = luxanimals.user || {};
        if (t.character && t.characters) {
            var n = t.characters[t.character];
            if (n && n.levels) {
                var r = n.levels[e];
                if (r && r.wins)return!0
            }
        }
        return!1
    }, O = h.extend({holder: $("#level-screen"), load: function () {
        trace("[uiManager] - levelSelection: load"), this.toLoad = ["select-screen-background.jpg", "title_selectyerbattle.png", "screen-underline.png", "level-frame.png", "isle-of-coconuts.jpg", "simple-button.png", "back-button.png", "mute-button.png", "fwa_badge.png"], A("isle-of-coconuts") ? this.toLoad.push("spout-belly-bay.jpg") : this.toLoad.push("spout-belly-bay-locked.jpg"), A("spout-belly-bay") ? this.toLoad.push("fire-n-goats.jpg") : this.toLoad.push("fire-n-goats-locked.jpg"), this._super()
    }, initScreen: function () {
        var e = this, t = !0;
        trace("[uiManager] - levelSelection: init"), this._super(), this.holder.on("click", "#level-screen-back-button", function () {
            e.holder.off(), luxanimals.trackEvent("Button", "Click", "Back /select-level"), E("characterSelection")
        }).on("click", ".level-unlocked", function () {
            var t = this.id.replace(/^select-/, "");
            e.holder.off(), luxanimals.levels.selectLevel(t), luxanimals.user.level = t, luxanimals.trackEvent("Button", "Click", "Level " + t), E("startGame"), v("click")
        }).on("mouseover", ".level-unlocked", function () {
            $(this).css({backgroundPosition: "0 0"}).transition({backgroundPosition: "-165px 0"}, 250), v("hover")
        }).on("mouseout", ".level-unlocked", function () {
            $(this).transition({backgroundPosition: "0 0"}, 250)
        }).find(".level-portrait").css({backgroundPosition: "0 0"}).each(function (e, n) {
            var r = this.id.replace(/^select-/, "");
            $(this).toggleClass("level-unlocked", t).toggleClass("level-locked", !t), t = A(r)
        })
    }, animateIn: function () {
        trace("[uiManager] - levelSelection: animateIn"), this._super(), this.holder.stop().css({opacity: 0, display: "block"}).transition({opacity: 1}, 500, x), luxanimals.trackScreen("/select-level")
    }, animateOut: function (e) {
        var t = this;
        trace("[uiManager] - levelSelection: animateOut"), this._super(), this.holder.stop().transition({opacity: 0}, 500, function (e) {
            t.holder.hide(), S()
        })
    }});
    O = new O;
    var M = h.extend({holder: $("#instructions-screen"), load: function () {
        trace("[uiManager] - instructions: load"), this.toLoad = ["instructions-screen-background.jpg", "back-button.png", "mute-button.png", "fwa_badge.png"], this._super()
    }, initScreen: function () {
        var e = this;
        trace("[uiManager] - instructions: init"), this._super(), $("#instructions-screen-back-button").on("click", function () {
            $(this).off(), luxanimals.trackEvent("Button", "Click", "Back /instructions"), E("home")
        })
    }, animateIn: function () {
        trace("[uiManager] - instructions: animateIn"), this._super(), this.holder.stop().css({opacity: 0}).show().transition({opacity: 1}, 500), luxanimals.trackScreen("/instructions")
    }, animateOut: function (e) {
        trace("[uiManager] - instructions: animateOut"), this._super(), this.holder.stop().transition({opacity: 0}, 500, function () {
            $(this).hide(), S()
        })
    }});
    M = new M;
    var _ = h.extend({holder: $("#video-screen"), videoTag: $("#lux-ahoy-video").clone(), videoPlayer: null, load: function () {
        if (this.loadCount > 0)return;
        this.loadCount += 1, trace("[uiManager] - instructions: load"), this.toLoad = ["back-button.png", "mute-button.png", "fwa_badge.png"], this.videoPlayer ? this.videoPlayer.currentTime(0).play() : (this.videoPlayer = videojs("lux-ahoy-video", {controls: !1, autoplay: !1, preload: "auto", width: 1200, height: 640}), this.videoPlayer.src({type: "video/mp4", src: "assets/video/intro.mp4"}).ready(function () {
            this.currentTime(0), this.play()
        })), this._super()
    }, initScreen: function () {
        var e = this;
        trace("[uiManager] - video: init"), this._super(), luxanimals.soundManager.pauseSound(), $("#video-screen-back-button").on("click", function () {
            $(this).off(), luxanimals.trackEvent("Button", "Click", "Back /videos"), E("home")
        })
    }, animateIn: function () {
        trace("[uiManager] - video: animateIn"), this._super(), this.holder.stop().css({opacity: 0}).show().transition({opacity: 1}, 500), luxanimals.trackScreen("/video"), this.loadCount = 0
    }, animateOut: function (e) {
        trace("[uiManager] - video: animateOut");
        var t = this;
        this.videoPlayer.pause(), this._super(), this.holder.stop().transition({opacity: 0}, 500, function () {
            $(this).hide(), S()
        });
        if (Modernizr.ios || Modernizr.android)this.videoPlayer.dispose(), this.videoPlayer = null, setTimeout(function () {
            t.holder.append(t.videoTag.clone())
        }, 10)
    }});
    _ = new _;
    var D = h.extend({load: function () {
        trace("[uiManager] - leaderboard: load"), this.toLoad = ["leaderboard-screen-background.jpg"], this._super()
    }, initScreen: function () {
        trace("[uiManager] - leaderboard: init"), this.holder = $("#leaderboard-screen"), this._super();
        var e = this, t = [
            {pirate: "James", wins: 112, losses: 56, loot: 302930},
            {pirate: "Sam", wins: 100, losses: 65, loot: 301165},
            {pirate: "Phil", wins: 93, losses: 43, loot: 296012},
            {pirate: "Dave", wins: 90, losses: 22, loot: 29e4},
            {pirate: "Davis", wins: 89, losses: 75, loot: 269821},
            {pirate: "Charlie", wins: 86, losses: 56, loot: 255e3},
            {pirate: "Nick", wins: 84, losses: 70, loot: 24e4},
            {pirate: "Siri", wins: 82, losses: 14, loot: 200100},
            {pirate: "Alex", wins: 80, losses: 50, loot: 198200},
            {pirate: "Ashley", wins: 78, losses: 56, loot: 19e4},
            {pirate: "Catherine", wins: 72, losses: 25, loot: 185e3},
            {pirate: "Bill", wins: 70, losses: 23, loot: 178e3},
            {pirate: "Kyle", wins: 68, losses: 32, loot: 165e3},
            {pirate: "Jessica", wins: 56, losses: 56, loot: 15e4},
            {pirate: "Frank", wins: 50, losses: 56, loot: 14e4},
            {pirate: "Rachael", wins: 43, losses: 32, loot: 13e4},
            {pirate: "James", wins: 40, losses: 24, loot: 122e3},
            {pirate: "Juan", wins: 37, losses: 31, loot: 101e3},
            {pirate: "Heather", wins: 35, losses: 20, loot: 98e3},
            {pirate: "Ted", wins: 32, losses: 12, loot: 95e3}
        ];
        $("#leaderboard-data").empty();
        for (var n = 0, r = 20; n < r; n++)$("#leaderboard-data").append('<tr id="pirate-' + n + '" class="pirate-row"><td class="rank-col">' + (n + 1) + '</td><td class="pirate-col">' + t[n].pirate + '</td><td class="wins-col">' + t[n].wins + '</td><td class="losses-col">' + t[n].losses + '</td><td class="loot-col">' + t[n].loot + "</td></tr>");
        $("#leaderboard-screen-back-button").on("click", function () {
            $(this).off(), luxanimals.trackEvent("Button", "Click", "Back /leaderboard"), E("home")
        }), $.getJSON("assets/php/get-scores.php", function (e) {
            var t = 1;
            $.each(e.results, function (e, n) {
                $("#leaderboard-data").append('<tr id="pirate-' + n.id + '" class="pirate-row"><td class="rank-col">' + t + '</td><td class="pirate-col">' + e + '</td><td class="wins-col">' + n.wins + '</td><td class="losses-col">' + n.losses + '</td><td class="loot-col">' + n.loot + "</td></tr>"), t++
            })
        }), $("#leaderboard-screen-my-score-button").on("click", function () {
            $(".pirate-row td").css({color: "#FFFFFF"});
            var e = Math.floor(Math.random() * 19) + 1;
            $("#pirate-" + e + " td").css({color: "yellow"}), luxanimals.trackEvent("Button", "Click", "My Score")
        })
    }, animateIn: function () {
        trace("[uiManager] - leaderboard: animateIn"), this._super(), this.holder.stop().css({opacity: 0}).show().animate({opacity: 1}, 500), luxanimals.trackScreen("/leaderboard")
    }, animateOut: function (e) {
        trace("[uiManager] - leaderboard: animateOut"), this._super(), $("#leaderboard-screen-back-button, #leaderboard-screen-my-score-button").off(), this.holder.stop().animate({opacity: 0}, 500, function () {
            $(this).hide(), S()
        })
    }}), P = function () {
        var e = function (e) {
            var t;
            switch (e) {
                case 0:
                    t = new createjs.Bitmap(luxanimals.loadedAssets.instructionsLeft.img), t.x = 20, t.y = 340;
                    break;
                case 1:
                    t = new createjs.Bitmap(luxanimals.loadedAssets.instructionsRight.img), t.x = 770, t.y = 340
            }
            t.set({snapToPixel: !0, mouseEnabled: !1, alpha: 0}), stage.addChild(t), l.get(t).wait(2e3).to({alpha: 1}, 1e3).wait(2500).to({alpha: 0}, 1e3).call(function () {
                stage.removeChild(t)
            })
        }, t = function () {
            var e = $("#start-screen"), t = $("#start-screen-title"), n = $("#start-screen-sub-title").find("span"), r = $("#start-screen-sub-title-holder"), i = $("#start-screen-underline"), s = $("#fwa-badge"), o = function () {
                s.animate({opacity: 0}, 1e3), t.css({x: 960}), i.css({opacity: 0}), r.css({x: -960}), n.html(luxanimals.levels.getLevelSubTitle()), e.css({x: 0, opacity: 0}).show().animate({opacity: 1}, 1e3, function () {
                    i.transition({opacity: 1}, 1e3), t.transition({x: 0}, 250), r.transition({x: 0}, 250)
                }), luxanimals.trackScreen("/game-start")
            }, u = function () {
                s.transition({opacity: 1}, 1e3), e.transition({opacity: 0}, 1e3, function () {
                    e.hide()
                })
            };
            return{animateIn: o, animateOut: u}
        }(), n = function () {
            var e = "/game-results", t = "", n = {name: "Lux Ahoy HTML5 Game", picture: "assets/images/main-screen-background-lores.png", description: ""}, r = !1, i = $("#results-screen"), s = $("#results-screen-title"), o = $("#results-screen-title-line"), u = $("#results-screen-sub-title").find("span"), a = $("#results-screen-sub-title-holder"), f = $("#loot-line");
            i.on("click", "#results-screen-replay-button", function () {
                if (!r)return;
                N(), luxanimals.trackEvent("Button", "Click", "Replay " + e), luxanimals.gameManager.restart()
            }).on("click", "#results-screen-levels-button", function () {
                if (!r)return;
                N(), B.animateOut(), luxanimals.gameManager.clearAll(), luxanimals.main.game.clearAll(), luxanimals.trackEvent("Button", "Click", "Levels " + e), E("levelSelection")
            }).on("click", "#results-screen-quit-button", function () {
                if (!r)return;
                N(), B.animateOut(), luxanimals.gameManager.clearAll(), luxanimals.main.game.clearAll(), luxanimals.main.game.quit(), luxanimals.trackEvent("Button", "Click", "Quit " + e), E("home")
            }).on("click", "#twitter-share", function (n) {
                n.preventDefault(), y(t, e), luxanimals.trackEvent("Button", "Click", "Twitter Share " + e)
            }).on("click", "#facebook-share", function (t) {
                t.preventDefault(), g(n, e), luxanimals.trackEvent("Button", "Click", "Facebook Share " + e)
            }).on("click", "#results-screen-characters-button", function () {
                N(), B.animateOut(), luxanimals.gameManager.clearAll(), luxanimals.main.game.clearAll(), E("characterSelection")
            }).on("click", "#results-screen-next-button", function () {
                luxanimals.levels.selectNextLevel(), luxanimals.user.level = luxanimals.levels.getLevelID(), N(), B.animateOut(), luxanimals.gameManager.clearAll(), luxanimals.main.game.clearAll(), E("startGame")
            });
            var l = function (e) {
                var t = luxanimals.user.characters || {}, n = t[luxanimals.user.character] || {}, r = n.levels || {}, i = r[luxanimals.user.level] || {};
                e ? (i.wins = i.wins || 0, i.wins++) : (i.loses = i.loses || 0, i.loses++), r[luxanimals.user.level] = i, n.levels = r, t[luxanimals.user.character] = n, luxanimals.user.characters = t
            }, c = function (e) {
                var t = luxanimals.user.scores || {};
                t.highest = Math.max(t.highest, e), t.career = t.career || 0, t.career += e, luxanimals.user.scores = t
            }, h = $("#results-screen-next-button"), p = $("#results-screen-characters-button"), d = $("#results-victory-message"), v = $(".share-button"), m = $("#points"), b = $("#results-screen-levels-button"), w = $("#results-screen-replay-button"), S = $("#results-screen-quit-button"), x = function (g) {
                var y = X(g.playerScore);
                g.victory && luxanimals.user.level != "fire" ? (p.hide(), h.show().css({opacity: 0}).delay(5e3).transition({opacity: 1}, 1e3)) : luxanimals.user.level === "fire" && g.victory ? (luxanimals.user.character === "luxamillion" ? $("#results-victory-message").html("Congratulations! You conquered all 3 maritime battles.<br/>Now try your cannon skills as the Evil Trunkford.") : $("#results-victory-message").html("Congratulations! You conquered all 3 maritime battles.<br/>Now try your cannon skills as the Dashing Luxamillion."), d.show(), p.show(), h.hide()) : (h.hide(), p.hide(), d.hide()), r = !0, trace("[uiManager] - Overlays - gameOver - animateIn " + g.victory), t = g.victory ? "Me fine ship defeated the " + g.aiCharacter + " in the Lux Ahoy HTML5 Beta." : "Arrgh, I wound up at the bottom o’ the sea playin’ the Lux Ahoy HTML5 Beta.", n.description = t + " Are you pirate enough? Get ye cannons ready at luxahoy.com.", a.css({left: "250px"}), v.css({opacity: 0}), o.css({opacity: 0}), s.toggleClass("lose", !g.victory).css({opacity: 0}), u.html(g.subtitle), m.html(y), b.delay(4e3).transition({top: 100}, 600, "easeOutBack"), w.delay(4500).transition({top: 100}, 600, "easeOutBack"), S.delay(5e3).transition({top: 100}, 600, "easeOutBack"), i.css({opacity: 0}).show().delay(3e3).transition({opacity: 1}, 1e3, function () {
                    o.transition({opacity: 1}, 300), s.transition({opacity: 1}, 300, function () {
                        v.transition({opacity: 1}, 550), a.transition({height: "180px"}, 600), f.transition({y: "180px"}, 1200, "easeOutElastic")
                    })
                }), l(g.victory), c(g.playerScore), T(), luxanimals.trackScreen(e)
            }, N = function () {
                r = !1, h.hide(), d.hide(), w.stop().css({top: "190px"}), b.stop().css({top: "190px"}), S.stop().css({top: "190px"}), i.transition({opacity: 0}, 500, function () {
                    i.hide(), a.css({height: 0}), f.css({y: 0})
                })
            };
            return{animateIn: x, animateOut: N}
        }();
        return{gameStart: t, gameOver: n, instructions: e}
    }(), H = function () {
        var e = [], t = !1, n = function (e, t, n, r) {
            var i;
            switch (e) {
                case 1e3:
                    i = new createjs.Bitmap(luxanimals.loadedAssets.points1000.img), i.regX = 47, i.regY = 11;
                    break;
                case 2400:
                    i = new createjs.Bitmap(luxanimals.loadedAssets.points2400.img), i.regX = 48, i.regY = 14;
                    break;
                case 5e3:
                    i = new createjs.Bitmap(luxanimals.loadedAssets.points5000.img), i.regX = 49, i.regY = 14;
                    break;
                case 15e3:
                    r === "green" ? i = new createjs.Bitmap(luxanimals.loadedAssets.points15000green.img) : i = new createjs.Bitmap(luxanimals.loadedAssets.points15000pink.img), i.regX = 74, i.regY = 18
            }
            i.x = t, i.y = n, i.scaleX = i.scaleY = .01, stage.addChild(i), l.get(i).to({scaleX: .8, scaleY: .8, y: n - 75}, 600).call(function () {
                stage.removeChild(i)
            })
        }, r = function (t) {
            e.push(t), o()
        }, i = $('<div id="prompt-message"><div id="prompt-message-background"></div></div>').css({x: "-50%"}), s = i.find("#prompt-message-background");
        $("#game-messages").append(i);
        var o = function () {
            t || (t = !0, s.html(e.shift()), i.transition({y: -80, opacity: 1}, 500).delay(1100).transition({y: -20, opacity: 0}, 500, function () {
                t = !1, e.length >= 1 && o()
            }))
        };
        return{score: n, prompt: r}
    }(), B = function () {
        var e = $("#pause-button"), t = $("#trunk-ui, #lux-ui, #center-ui-holder"), n = $("#lux-ui"), r = $("#trunk-ui"), i = $("#center-ui-holder"), s = $("#main"), o = $("#canvasCover"), u = $("#canvasHolder");
        e.on("click", function () {
            luxanimals.trackEvent("Button", "Click", "Pause"), luxanimals.gameManager.pauseResume()
        });
        var a = function () {
            e.show(), t.css({y: -100}), o.css({opacity: 1}).show().delay(1e3).transition({opacity: 0}, 1e3, l), u.show(), x(), luxanimals.trackScreen("/game")
        }, f = function () {
            e.hide()
        }, l = function () {
            o.hide(), s.hide(), n.transition({y: 0}, 500, "easeOutQuad"), r.delay(300).transition({y: 0}, 500, "easeOutQuad"), i.delay(600).transition({y: 0}, 500, "easeOutQuad")
        };
        return{animateIn: a, animateOut: f}
    }(), j = $("#wind-meter-left"), F = $("#wind-meter-right"), I = function (e) {
        var t = e / 2;
        e > 0 ? (j.transition({scale: [0, 1]}, 1e3), F.transition({scale: [t, 1]}, 1e3)) : (F.transition({scale: [0, 1]}, 1e3), j.transition({scale: [-t, 1]}, 1e3))
    }, q = function () {
        var e = "/game/paused", t = "5deg,-3deg,4deg,-2deg".split(","), n = $("#pause-screen"), r = $("#pause-screen-actions-holder"), s = $("#pause-screen-actions"), o = $("#pause-screen-actions .simple-button");
        return s.on("click", "#pause-screen-resume-button", function () {
            if (!i)return;
            luxanimals.trackEvent("Button", "Click", "Resume " + e), luxanimals.gameManager.resume()
        }).on("click", "#pause-screen-restart-button", function () {
            if (!i)return;
            P.gameOver.animateOut(), luxanimals.trackEvent("Button", "Click", "Restart " + e), luxanimals.gameManager.restart()
        }).on("click", "#pause-screen-quit-button", function () {
            if (!i)return;
            B.animateOut(), luxanimals.trackEvent("Button", "Click", "Quit " + e), luxanimals.gameManager.resume(), luxanimals.gameManager.clearAll(), luxanimals.main.game.clearAll(), luxanimals.main.game.quit(), E("home")
        }).on("click", "#pause-screen-levels-button", function () {
            if (!i)return;
            B.animateOut(), luxanimals.trackEvent("Button", "Click", "Levels " + e), luxanimals.gameManager.resume(), luxanimals.gameManager.clearAll(), luxanimals.main.game.clearAll(), E("levelSelection")
        }), function (u) {
            luxanimals.uiManager.soundMute(u), i = u, i ? (n.show(), r.stop().css({y: -640}).transition({y: 0}, 1e3), s.stop().css({skewX: 0, x: 0}).transition({skewX: -5, x: 50}, 500).transition({skewX: 3, x: 30}, 1e3).transition({skewX: 0, x: 0}, 1e3), o.each(function (n) {
                $(this).stop().css({rotate: 0}).transition({rotate: t[n]}, 500).transition({rotate: "-" + t[n]}, 1e3).transition({rotate: 0}, 1e3)
            }), luxanimals.trackScreen(e)) : (n.hide(), luxanimals.trackScreen("/game"))
        }
    }(), R = document.getElementById("lux-ui-title"), U = document.getElementById("trunk-ui-title"), z = R.innerText ? "innerText" : "textContent", W = function (e, t) {
        t = X(t), e === 0 ? R[z] = t : U[z] = t
    }, X = function (e) {
        return e += "", (e + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }, V = function () {
        var e = $("#preloader"), t = e.find("#bar").get(0), n = 0, r = Modernizr.prefixed("transform"), i = function (e) {
            var i = e.loaded / e.total;
            Modernizr.csstransforms && n != i ? (t.style[r] = "scaleX(" + i + ")", n = i) : $(t).css({width: Math.round(172 * i)})
        }, s = function () {
            Modernizr.csstransforms && n != 1 ? (t.style[r] = "scaleX(1)", n = 1) : $(t).css({width: 172})
        }, o = function () {
            Modernizr.csstransforms && n !== 0 ? (t.style[r] = "scaleX(0)", n = 0) : $(t).css({width: 1})
        }, u = function () {
            e.css({x: 0}).transition({opacity: 0}, 1e3, function () {
                $(this).css({x: -1e3})
            })
        }, a = function () {
            o(), e.stop().css({x: 0, opacity: 0}).transition({opacity: 1}, 300)
        };
        return{progress: i, complete: s, hide: u, show: a}
    }();
    return{preloader: V, switchScreen: S, nextScreenLoaded: w, loadNextScreen: E, pauseMenu: q, overlays: P, message: H, score: W, setWindMeter: I, soundMute: m}
}, function () {
    var e = !1, t = /xyz/.test(function () {
        xyz
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    }, Class.extend = function (n) {
        function o() {
            !e && this.init && this.init.apply(this, arguments)
        }

        var r = this.prototype;
        e = !0;
        var i = new this;
        e = !1;
        for (var s in n)i[s] = typeof n[s] == "function" && typeof r[s] == "function" && t.test(n[s]) ? function (e, t) {
            return function () {
                var n = this._super;
                this._super = r[e];
                var i = t.apply(this, arguments);
                return this._super = n, i
            }
        }(s, n[s]) : n[s];
        return o.prototype = i, o.prototype.constructor = o, o.extend = arguments.callee, o
    }
}(), luxanimals.GameManager = function () {
    var e = [
        {ai: !1, score: 0, hits: 0},
        {ai: !1, score: 0, hits: 0}
    ], t = 0, n = !1, r, i = 0, s = 1, o = !1, u, a = $("#canvasHolder"), f = function (e) {
        return e === "trunkford" ? l({ai: !0}, {ai: !1}) : l({ai: !1}, {ai: !0})
    }, l = function (n, r) {
        e[0].ai = n.ai, e[1].ai = r.ai, n.ai && !r.ai && (t = i = 1, s = 0)
    }, c = function () {
        trace("[gameManager] - init"), L(), luxanimals.scene.init(e), luxanimals.physics.windManager.change(), luxanimals.uiManager.overlays.gameStart.animateIn(), b.init(), u = 0, luxanimals.addObject(h)
    }, h = {update: function (e, n) {
        u += e, u > 5500 && (trace("start turn with delay"), luxanimals.removeObject(h), o = !0, luxanimals.uiManager.message.prompt("Your Turn"), luxanimals.uiManager.overlays.gameStart.animateOut(), luxanimals.uiManager.overlays.instructions(t), luxanimals.scene.setStartNextTurn(), b.start(), p())
    }}, p = function () {
        e[t].ai ? a.removeClass("reticule-pink reticule-green") : t === 0 ? a.addClass("reticule-pink") : a.addClass("reticule-green")
    }, d = function () {
        trace("[gameManager] - fire"), b.stop(), t === 0 ? luxanimals.scene.animateCharacter(t, "fire") : luxanimals.scene.animateCharacter(t, "fire"), luxanimals.soundManager.playRandomSound(["cannon1", "cannon2"], {interrupt: SoundJS.INTERRUPT_ANY})
    }, v = function (n) {
        trace("[gameManager] - hitShip " + n);
        var r = 0;
        n === "shipR" && (r = 1), r != t && (y(15e3), e[r].ai ? luxanimals.uiManager.message.prompt("Nice Shot!") : luxanimals.uiManager.message.prompt("Ouch!")), e[r].hits++, luxanimals.scene.shipDamage(r, e[r].hits), luxanimals.scene.animateCharacter(r, "hit"), r === 0 ? $("#lux-hit-" + e[r].hits).show() : $("#trunk-hit-" + e[r].hits).show(), e[r].hits != 3 ? luxanimals.soundManager.playRandomSound(["hit1", "hit2"]) : (luxanimals.soundManager.playSound("hit3"), N())
    }, m = function () {
        trace("[gameManager] - turnComplete " + t), e[0].hits !== 3 && e[1].hits !== 3 && g()
    }, g = function () {
        trace("[gameManager] - nextTurn"), luxanimals.scene.endTurn(t), luxanimals.physics.endTurn(), t = t === 0 ? 1 : 0, p(), luxanimals.scene.setStartNextTurn(), luxanimals.physics.windManager.change(), b.clear(), b.start(), e[t].ai ? luxanimals.uiManager.message.prompt("Opponent's Turn") : luxanimals.uiManager.message.prompt("Your Turn")
    }, y = function (n, r) {
        r ? e[r].score += n : e[t].score += n, luxanimals.uiManager.score(t, e[t].score)
    }, b = function () {
        var e = $("#timer-canvas-holder").pietimer(), n = 0, r = function () {
            return t === 0 ? "#CF208B" : "#39bc36"
        }, i = function () {
            e.init({seconds: 25, colour: r(), height: 60, width: 60}, u), n = 0, luxanimals.addObject(b)
        }, s = function () {
            e.setColor(r()), e.start()
        }, o = function (t, r) {
            n += t, n > 1e3 && (n -= 1e3, e.timer())
        }, u = function () {
            luxanimals.uiManager.message.prompt("You Snooze You Lose!"), m()
        };
        return{init: i, start: s, update: o, stop: e.pause, clear: e.clear}
    }(), w = function () {
        return n ? S() : E()
    }, E = function () {
        return n || (trace("[gameManager] - pause"), o && (n = !0, createjs.Ticker.setPaused(n), b.stop(), luxanimals.uiManager.pauseMenu(n), luxanimals.physics.pauseResume(n)), luxanimals.levels.getCurrentLevel().pauseResume && luxanimals.levels.getCurrentLevel().pauseResume(n)), n
    }, S = function () {
        return n && (trace("[gameManager] - resume"), n = !1, createjs.Ticker.setPaused(n), b.start(), luxanimals.uiManager.pauseMenu(n), luxanimals.physics.pauseResume(n), luxanimals.levels.getCurrentLevel().pauseResume && luxanimals.levels.getCurrentLevel().pauseResume(n)), n
    }, x = function (e) {
        return e === 0 ? "Dashing Luxamillion" : "Evil Trunkford"
    }, T = function (e) {
        return e ? "YOU CONQUERED " + luxanimals.levels.getLevelName().toUpperCase() : "YOU WERE SUNK BY A SCURVY BUGGER"
    }, N = function () {
        trace("[gameManager] - gameOver"), o = !1, luxanimals.levels.getCurrentLevel().gameOver && luxanimals.levels.getCurrentLevel().gameOver(), b.clear(), e[0].hits === 3 ? (r = e[1], luxanimals.physics.gameOver(0), luxanimals.scene.animateCharacter(0, "lose"), luxanimals.scene.animateCharacter(1, "win")) : (r = e[0], luxanimals.physics.gameOver(1), luxanimals.scene.animateCharacter(0, "win"), luxanimals.scene.animateCharacter(1, "lose")), r.ai ? (trace("[gameManager] - gameOver: looser"), luxanimals.uiManager.message.prompt("Defeat!"), y(5e4, s)) : (trace("[gameManager] - gameOver: winner"), luxanimals.uiManager.message.prompt("Victory!"), y(5e4, i));
        var t = {victory: !r.ai, playerScore: e[i].score, aiScore: e[s].score, playerCharacter: x(i), aiCharacter: x(s), levelName: luxanimals.levels.getLevelName(), subtitle: T(!r.ai)};
        luxanimals.uiManager.overlays.gameOver.animateIn(t), luxanimals.trackEvent("Game", "Player " + (r.ai ? "Lost" : "Won"), "Game Over", e[i].score), luxanimals.trackEvent("Game", "AI " + (r.ai ? "Won" : "Lost"), "Game Over", e[s].score), luxanimals.scene.gameOver()
    }, C = function () {
        trace("[gameManager] - restart"), k(), luxanimals.main.game.restart(), n && S()
    }, k = function () {
        o = !1, luxanimals.removeAllObjects(), luxanimals.levels.getCurrentLevel().clearAll && luxanimals.levels.getCurrentLevel().clearAll(), luxanimals.scene.restart(), _(), r = null, e[0].score = e[0].hits = 0, e[1].score = e[1].hits = 0, t = 0, e[0].ai && !e[1].ai && (t = 1);
        for (var n = 1; n <= 3; n++)$("#lux-hit-" + n).hide(), $("#trunk-hit-" + n).hide();
        luxanimals.uiManager.score(0, 0), luxanimals.uiManager.score(1, 0), luxanimals.physics.clearAll(), b.clear(), stage.removeAllChildren()
    }, L = function () {
        document.onkeydown = W, document.onkeyup = X, M(), D(), window.onfocus = H, window.onblur = P
    }, A = function () {
        luxanimals.buttons.mouseDown = !0, luxanimals.buttons.mouseUp = !1
    }, O = function () {
        luxanimals.buttons.mouseDown = !1, luxanimals.buttons.mouseUp = !0
    }, M = function () {
        stage.addEventListener("stagemousedown", A), stage.addEventListener("stagemouseup", O), window.navigator.msPointerEnabled && ($("html").css("-ms-content-zooming", "none"), stage.canvas.addEventListener("MSPointerDown", function (e) {
            e.preventDefault(), stage._handleMouseDown(e), stage._handleMouseMove(e)
        }), window.addEventListener("MSPointerUp", function (e) {
            stage._handleMouseUp(e)
        }), window.addEventListener("MSPointerMove", function (e) {
            stage._handleMouseMove(e)
        }))
    }, _ = function () {
        luxanimals.buttons.mouseUp = !0, luxanimals.buttons.mouseDown = !1, document.onkeydown = null, document.onkeyup = null, stage.removeEventListener("stagemousedown", A), stage.removeEventListener("stagemouseup", O), window.onfocus = null, window.onblur = null
    }, D = function () {
        createjs.Touch.enable(stage)
    }, P = function (e) {
        luxanimals.trackEvent("Window", "Blur", e.type), n || E()
    }, H = function (e) {
        luxanimals.trackEvent("Window", "Focus", e.type), n
    }, B = 32, j = 38, F = 40, I = 37, q = 39, R = 80, U = 77, z = 67, W = function (e) {
        trace(e.keyCode);
        switch (e.keyCode) {
            case I:
                luxanimals.buttons.left = !0;
                break;
            case q:
                luxanimals.buttons.right = !0;
                break;
            case B:
                luxanimals.buttons.space = !0;
                break;
            case j:
                luxanimals.buttons.up = !0;
                break;
            case F:
                luxanimals.buttons.down = !0
        }
    }, X = function (e) {
        switch (e.keyCode) {
            case I:
                luxanimals.buttons.left = !1;
                break;
            case q:
                luxanimals.buttons.right = !1;
                break;
            case B:
                luxanimals.buttons.space = !1;
                break;
            case j:
                luxanimals.buttons.up = !1;
                break;
            case F:
                luxanimals.buttons.down = !1;
                break;
            case R:
                w();
                break;
            case U:
                luxanimals.uiManager.soundMute(null, !0);
                break;
            case z:
                luxanimals.debug && luxanimals.coins.placeCoin()
        }
    };
    return{init: c, pauseResume: w, pause: E, resume: S, fire: d, hitShip: v, turnComplete: m, score: y, restart: C, disableMouseEvents: _, enableMouseEvents: M, selectCharacter: f, setPlayers: l, clearAll: k, getTurn: function () {
        return t
    }, getPlayers: function () {
        return e
    }}
}, luxanimals.Clouds = function () {
    trace("[clouds] - init");
    var e = [], t = this, n, r, i = function (t) {
        e = [];
        for (var r = 0, i = t.length; r < i; r++) {
            var s, o = !1;
            t[r].type !== "sun" ? (s = new createjs.Bitmap(luxanimals.loadedAssets.cloud.img), s.regX = 144, s.regY = 68) : (s = new createjs.Bitmap(luxanimals.loadedAssets.sun_cloud.img), s.regX = 110, s.regY = 110, o = !0);
            var u = t[r].scale;
            s.scaleX = s.scaleY = u, s.y = t[r].y, s.x = t[r].x;
            var a = new createjs.Bitmap(luxanimals.loadedAssets.rope.img);
            s.snapToPixel = !0, s.mouseEnabled = !1, n.addChild(a), n.addChild(s);
            var f;
            r !== 1 ? f = luxanimals.physics.createCloud(s.x, s.y, 288 * t[r].scale / 3, 137 * t[r].scale / 3, s, a) : f = luxanimals.physics.createCloud(s.x, s.y, 100, 100, s, a, o), e.push({bmp: s, rope: a, body: f, anchor: s.x, type: t[r].type});
            var l = e[r].anchor - e[r].bmp.x, c = 0 - e[r].bmp.y, h = Math.sqrt(l * l + c * c);
            e[r].rope.scaleY = h / 171
        }
    }, s = function (e) {
        var t = new createjs.Bitmap(luxanimals.loadedAssets.stormCloudFront.img), n = new createjs.Bitmap(luxanimals.loadedAssets.stormCloudMid.img), i = new createjs.Bitmap(luxanimals.loadedAssets.stormCloudBack.img);
        t.snapToPixel = !0, n.snapToPixel = !0, i.snapToPixel = !0, t.mouseEnabled = !1, n.mouseEnabled = !1, i.mouseEnabled = !1, n.y = 40, i.y = 90, r.addChild(i), r.addChild(n), r.addChild(t), r.cache(0, 0, 960, 205)
    }, o = function (e) {
        r.uncache(), r.addChildAt(e, 2)
    }, u = function (t) {
        for (var r = 0, i = e.length; r < i; r++)if (e[r].bmp === t.skin) {
            var s;
            e[r].type != "sun" ? (s = new createjs.Bitmap(luxanimals.loadedAssets.cloudCracked.img), s.regX = 144, s.regY = 68) : (s = new createjs.Bitmap(luxanimals.loadedAssets.sun_cloudCracked.img), s.regX = 110, s.regY = 110), s.x = t.skin.x, s.y = t.skin.y, s.scaleX = s.scaleY = t.skin.scaleX, s.rotation = t.skin.rotation;
            var o = n.getChildIndex(t.skin);
            n.removeChild(t.skin), n.addChildAt(s, o), t.skin = s, n.removeChild(e[r].bmp), e[r].bmp = s
        }
    }, a = Math.PI, f = function (t, n) {
        var r, i, s, o, u = e.length;
        while (u-- > 0)o = e[u], r = o.bmp.x - o.anchor, i = o.bmp.y, i < 0 && (i = 0), s = Math.atan2(i, r) * RAD_TO_DEG - 90, o.rope.x = o.anchor, o.rope.rotation = s
    };
    return{populate: i, storm: s, update: f, crack: u, addLightning: o, setForegroundHolder: function (e) {
        n = e
    }, setBackgroundHolder: function (e) {
        r = e
    }}
}, luxanimals.Coins = function () {
    var e = [], t, n = [], r = [];
    e[0] = [
        {x: 453, y: 150},
        {x: 426, y: 129},
        {x: 477, y: 127},
        {x: 477, y: 175},
        {x: 427, y: 174},
        {x: 637, y: 144},
        {x: 542, y: 199},
        {x: 400, y: 200},
        {x: 301, y: 139},
        {x: 367, y: 378},
        {x: 487, y: 321},
        {x: 580, y: 375},
        {x: 360, y: 295},
        {x: 416, y: 277},
        {x: 475, y: 270},
        {x: 543, y: 280},
        {x: 595, y: 299},
        {x: 306, y: 320},
        {x: 639, y: 327},
        {x: 409, y: 433},
        {x: 542, y: 418}
    ], e[1] = [
        {x: 254, y: 148},
        {x: 273, y: 127},
        {x: 235, y: 127},
        {x: 235, y: 167},
        {x: 273, y: 170},
        {x: 383, y: 458},
        {x: 282, y: 445},
        {x: 574, y: 320},
        {x: 574, y: 290},
        {x: 574, y: 260},
        {x: 574, y: 230},
        {x: 574, y: 200},
        {x: 574, y: 170},
        {x: 777, y: 198},
        {x: 692, y: 150},
        {x: 190, y: 202},
        {x: 86, y: 169}
    ], e[2] = [
        {x: 433, y: 433},
        {x: 413, y: 470},
        {x: 383, y: 500},
        {x: 345, y: 515},
        {x: 310, y: 517},
        {x: 470, y: 433},
        {x: 497, y: 470},
        {x: 533, y: 500},
        {x: 580, y: 515},
        {x: 625, y: 515},
        {x: 450, y: 290},
        {x: 450, y: 260},
        {x: 450, y: 230},
        {x: 450, y: 200},
        {x: 450, y: 170},
        {x: 474, y: 272},
        {x: 492, y: 251},
        {x: 426, y: 272},
        {x: 408, y: 251},
        {x: 449, y: 375}
    ];
    var i = function () {
        trace("[coins] init " + luxanimals.levels.getLevel()), n = [];
        var t = e[luxanimals.levels.getLevel()];
        for (var r = 0, i = t.length; r < i; r++)s(t[r].x, t[r].y, r)
    }, s = function (e, r, i) {
        var s = new createjs.Bitmap(luxanimals.loadedAssets.coin.img);
        s.x = e, s.y = r, s.regX = 11, s.regY = 11, s.mouseEnabled = !1, s.snapToPixel = !0, t.addChild(s), n.push(s), luxanimals.physics.createCoin(s.x, s.y, i)
    }, o = function () {
        if (luxanimals.debug) {
            s(stage.mouseX, stage.mouseY, r.length), r.push({x: stage.mouseX, y: stage.mouseY});
            var e = "";
            for (var t = 0
                     , n = r.length; t < n; t++)e += "{x:" + r[t].x + ", y:" + r[t].y + "},";
            trace(e)
        }
    }, u = function (e) {
        var r = luxanimals.gameManager.getTurn() === 0 ? 30 : 930, i = n[e];
        luxanimals.soundManager.playSound("coin"), createjs.Tween.get(i).to({x: r, y: 80}, 400, createjs.Ease.quadOut).call(function () {
            t.removeChild(i)
        }), luxanimals.gameManager.score(2e3);
        var s = luxanimals.user.scores || {};
        s.coins = s.coins || 0, s.coins++, luxanimals.user.scores = s
    };
    return{init: i, collected: u, placeCoin: o, setHolder: function (e) {
        t = e
    }}
}, luxanimals.Powerups = function () {
    var e, t, n = function () {
        trace("[powerups] init"), e = [i]
    }, r = function (t) {
        if (!t) {
            var n = Math.floor(Math.random() * e.length), r = new e[n];
            r.init()
        }
    }, i = function () {
        var e = "Health Crate", n = function () {
            console.log("[powerups] healthCrate init");
            var n = new createjs.Bitmap(luxanimals.loadedAssets.crate.img);
            n.regX = 17, n.regY = 17, t.addChild(n), luxanimals.physics.createPowerup(e, n)
        }, r = function (e) {
        }, i = function () {
        };
        return{init: n, onCollision: r, remove: i, id: function () {
            return e
        }}
    };
    return{init: n, spawn: r, setHolder: function (e) {
        t = e
    }}
}, luxanimals.Levels = function () {
    var e = 0, t = [], n, r, i, s, o = $("#canvasHolder"), u = createjs.Tween, a = createjs.Ease, f = {overlay: "overlay.png", reticule_pink: "reticule_pink.png", reticule_green: "reticule_green.png", pause_screen_actions: "pause-screen-actions.png", simple_button: "simple-button.png", debugDot: "dot.png", coin: "coin.png", background: "background.jpg", lux: "lux_anims_zoe.png", cannon: "cannon.png", cannonMount: "cannonMountL.png", cannonFlash: "cannon_flash.png", trunkford: "trunkford_anims_zoe.png", cannonball: "cannonball.png", cannonball_hit: "cannonball_hit.png", sea: "sea.png", sea_mid: "sea_mid.png", sea_back: "sea_back.png", ship_hull: "ship_hull.png", ship_goldtrim: "ship_goldtrim.png", ship_flag: "ship_flag.png", ship_sails: "ship_sails.png", cloud: "cloud.png", cloudCracked: "cloud_cracked.png", sun_cloud: "sun.png", sun_cloudCracked: "sun_cracked.png", smoke: "smoke.png", rope: "rope.png", splash: "splash.png", cTrail1: "cannonball_trail_1.png", cTrail2: "cannonball_trail_2.png", cTrail3: "cannonball_trail_3.png", cTrail4: "cannonball_trail_4.png", cTrail5: "cannonball_trail_5.png", cTrail6: "cannonball_trail_6.png", cTrail7: "cannonball_trail_7.png", cTrail8: "cannonball_trail_8.png", debris1: "debris01.png", debris2: "debris02.png", debris3: "debris03.png", debris4: "debris04.png", debris5: "debris05.png", debris6: "debris06.png", debris7: "debris07.png", gold_damage_back: "gold_damage_back.png", gold_damage_mid: "gold_damage_mid.png", gold_damage_front: "gold_damage_front.png", fire: "fire.png", points1000: "points_1000.png", points2400: "points_2400.png", points5000: "points_5000.png", points15000green: "points_15000_green.png", points15000pink: "points_15000_pink.png", instructionsLeft: "instructions_in_game_left.png", instructionsRight: "instructions_in_game_right.png", wind: "wind.png", crate: "crate.png"}, l = [], c = ["isle-of-coconuts", "spout-belly-bay", "fire"], h = function (t) {
        e = c.indexOf(t), trace("SELECT LEVEL " + e), e < 0 && (e = 0)
    }, p = function () {
        e += 1
    }, d = function () {
        i = new t[e], i.init(), luxanimals.addObject(i)
    };
    return l[0] = {island: "island_sand.png", leaf1: "island_leaf_1.png", leaf2: "island_leaf_2.png", trunk1: "island_trunk_1.png", trunk2: "island_trunk_2.png", trunk3: "island_trunk_3.png", coconut: "island_coconut.png", chest: "island_chest.png", crab: "island_crab.png"}, t[0] = function () {
        var e = [], t, n, i, f = [], l, c, h = [], p = function () {
            o.attr("class", "default_background"), s = {stupid: [-20, -80, 10, 25], normal: [-28, -65, 16, 25], hard: [-35, -48, 17, 23]}, luxanimals.clouds.populate([
                {x: 300, y: 140, scale: .6},
                {x: 650, y: 145, scale: .7},
                {x: 400, y: 200, scale: .8},
                {type: "sun", x: 450, y: 150, scale: 1},
                {x: 550, y: 200, scale: 1}
            ]), luxanimals.addObject(luxanimals.clouds), t = new createjs.Bitmap(luxanimals.loadedAssets.island.img), t.x = 331, t.y = 424, luxanimals.physics.levels[0].init();
            var e = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.chest.img], animations: {all: {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], next: !1}}, frames: [
                [0, 0, 151, 117, 0, 151, 0],
                [151, 0, 151, 117, 0, 151, 0],
                [302, 0, 151, 117, 0, 151, 0],
                [453, 0, 151, 117, 0, 151, 0],
                [604, 0, 151, 117, 0, 151, 0],
                [755, 0, 151, 117, 0, 151, 0],
                [906, 0, 151, 117, 0, 151, 0],
                [1057, 0, 151, 117, 0, 151, 0],
                [1208, 0, 151, 117, 0, 151, 0],
                [1359, 0, 151, 117, 0, 151, 0],
                [1510, 0, 151, 117, 0, 151, 0],
                [1661, 0, 151, 117, 0, 151, 0],
                [1812, 0, 151, 117, 0, 151, 0],
                [0, 117, 151, 117, 0, 151, 0],
                [151, 117, 151, 117, 0, 151, 0],
                [302, 117, 151, 117, 0, 151, 0],
                [453, 117, 151, 117, 0, 151, 0],
                [604, 117, 151, 117, 0, 151, 0],
                [755, 117, 151, 117, 0, 151, 0],
                [906, 117, 151, 117, 0, 151, 0],
                [1057, 117, 151, 117, 0, 151, 0],
                [1208, 117, 151, 117, 0, 151, 0],
                [1359, 117, 151, 117, 0, 151, 0]
            ]});
            n = new createjs.BitmapAnimation(e), n.x = 525, n.y = 340, n.gotoAndStop(0), d(), v(), luxanimals.physics.levels[0].createChest(n)
        }, d = function () {
            var e = 4;
            for (var i = 0; i < 3; i++) {
                i === 1 && (r.addChild(t), r.addChild(n));
                var s = new createjs.Container, o, u = [], a = 0, f = {x: 0, y: 0}, l = [-20, 20], c = [0, 0];
                switch (i) {
                    case 0:
                        o = new createjs.Bitmap(luxanimals.loadedAssets.trunk2.img), s.regX = 20, s.regY = 65, s.x = 510, s.y = 440, f.y = -40;
                        break;
                    case 1:
                        o = new createjs.Bitmap(luxanimals.loadedAssets.trunk1.img), s.regX = 20, s.regY = 65, s.x = 400, s.y = 492, f.y = -45, l[0] = 8, l[1] = 40, c[0] = -25;
                        break;
                    case 2:
                        o = new createjs.Bitmap(luxanimals.loadedAssets.trunk3.img), s.regX = 20, s.regY = 65, s.x = 580, s.y = 440, a = 20, f.y = -35
                }
                s.addChild(o);
                var p = Modernizr.androidbrowser ? 0 : 2, d = [];
                for (var v = 0; v < p; v++) {
                    var m = new createjs.Bitmap(luxanimals.loadedAssets.coconut.img);
                    m.x = l[v] + s.x + f.x, m.y = c[v] + s.y + f.y, m.regX = 15, m.regY = 15, r.addChild(m), d.push(m)
                }
                r.addChild(s);
                for (v = 0; v <= e; v++) {
                    var g, y = {x: Math.random() * .3 + .8, y: Math.random() * .3 + .8};
                    v === 3 || v === 2 ? (g = new createjs.Bitmap(luxanimals.loadedAssets.leaf1.img), g.regX = 125, g.regY = 37, s.addChild(g)) : (g = new createjs.Bitmap(luxanimals.loadedAssets.leaf2.img), g.regX = 87, g.regY = 37, Math.random() < .33 ? s.addChild(g) : s.addChildAt(g, 0)), g.mouseEnabled = !1, g.rotation = v * (180 / (e + 1)) - 90, v > 2 ? (g.scaleX = -y.x, g.scaleY = y.y, g.x = 20 + a) : (g.scaleX = y.x, g.scaleY = y.y, g.x = 10 + a), u.push(g), h.push({leaf: g, rot: g.rotation, angle: Math.random() * 180, radius: null, speed: null, rand: Math.random()})
                }
                u = b(u), luxanimals.physics.levels[0].createTree(i, s, u, d)
            }
        }, v = function () {
            i = (new createjs.Bitmap(luxanimals.loadedAssets.crab.img)).set({x: 400, y: 500}), r.addChild(i), m()
        }, m = function () {
            u.get(i).to({x: Math.random() * 170 + 370, y: Math.random() * 170 + 420}, ~~(Math.random() * 4e3) + 3e3, a.sineInOut).call(m)
        }, g = function (e, t) {
            var n, i = e / FRAME_DELTA, s = luxanimals.physics.windManager.getWind();
            if (!Modernizr.androidbrowser)for (n = 0; n < h.length; n++)h[n].radius = s * h[n].rand * 2, h[n].speed = s * (.08 + h[n].rand * .1), h[n].leaf.rotation = h[n].rot + s * -6 + Math.cos(h[n].angle) * h[n].radius, h[n].angle += h[n].speed * i;
            for (n = 0; n < f.length; n++)f[n].leaf.y += f[n].ySpeed * i, f[n].leaf.rotation = Math.cos(f[n].angle) * f[n].radius * -0.3, f[n].leaf.x = f[n].xOrigin + Math.cos(f[n].angle) * f[n].radius, f[n].angle += f[n].speed * i, f[n].leaf.y > 600 && (r.removeChild(f[n].leaf), f.splice(n, 1))
        }, y = function (e, t) {
            trace("[levels] level 1 - detachLeafs");
            var n = 2;
            for (var i = 0; i < n; i++)if (e[i]) {
                e[i].x += e[i].parent.x + 50, e[i].y += e[i].parent.y - 50, e[i].rotation += e[i].parent.rotation, e[i].parent.removeChild(e[i]), r.addChild(e[i]), f.push({leaf: e[i], xOrigin: e[i].x, ySpeed: Math.random() * 4 + 4, angle: Math.random() * 180, radius: 50, speed: Math.random() * .3});
                for (var s = 0; s < h.length; s++)if (h[s].leaf === e[i]) {
                    h.splice(s, 1);
                    break
                }
                e.splice(i, 1)
            }
        }, b = function (e, t) {
            var n = e.length, r, i;
            t || (t = Math);
            while (--n)r = t.random() * (n + 1) | 0, i = e[n], e[n] = e[r], e[r] = i;
            return e
        }, w = function () {
            n.gotoAndPlay("all")
        }, E = function () {
            u.removeTweens(i), e.length = f.length = h.length = 0, t = n = i = e = f = h = null
        };
        return{name: "The Isle of Coconuts", subtitle: "DAY ONE: BATTLE FOR THE ISLE OF COCONUTS", init: p, update: g, detachLeafs: y, chestHit: w, clearAll: E}
    }, l[1] = {whale: "spout_belly_whale_and_rock.png", whaleTail: "spout_belly_whale_tail.png", stream: "spout_belly_stream.png", foam: "spout_belly_foam.png", whaleEyes: "whale_eyes.png"}, t[1] = function () {
        o.attr("class", "default_background"), s = {stupid: [-30, -60, 10, 25], normal: [-35, -55, 16, 25], hard: [-40, -50, 18, 22]};
        var e = null, t = 0, i = [], u = null, a = null, f = null, l = null, c = null, h = null, p = "idle", d = 0, v = ~~(Math.random() * 40) + 60, m = !1, g = {regX: 209, regY: 104, x: 435, y: 508}, y = {x: 410, y: 340}, b = {x: 653, y: 465}, w = {x: 580, y: 345, regX: -40, regY: 10, scaleX: 0, scaleY: 0}, E = {x: 580, y: 360, regY: 222, scaleY: 0}, S = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.stream.img], animations: {all: {frames: [0, 1, 1, 2, 2], next: "all"}}, frames: [
            [0, 0, 12, 222, 0, 12, 0],
            [12, 0, 12, 222, 0, 12, 0],
            [24, 0, 12, 222, 0, 12, 0]
        ]}), x = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.foam.img], animations: {all: {frames: [0, 1, 1, 2, 2], next: "all"}}, frames: [
            [0, 0, 91, 45, 0, 91, 0],
            [91, 0, 91, 45, 0, 91, 0],
            [182, 0, 91, 45, 0, 91, 0]
        ]}), T = new createjs.SpriteSheet({images: [luxanimals.loadedAssets.whaleEyes.img], animations: {spout: {frames: [3, 4, 5, 6, 6, 7, 7, 8, 8, 7, 7, 8, 8, 7, 7, 8, 8, 7, 7, 8, 8, 7, 7, 8, 8, 7, 7, 6, 9, 10], next: !1}, blink: {frames: [0, 1, 2, 2, 2, 2, 1, 0], next: !1}, hit: {frames: [0, 0, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 0], next: !1}}, frames: [
            [0, 0, 125, 34, 0, 125, 0],
            [125, 0, 125, 34, 0, 125, 0],
            [250, 0, 125, 34, 0, 125, 0],
            [375, 0, 125, 34, 0, 125, 0],
            [500, 0, 125, 34, 0, 125, 0],
            [625, 0, 125, 34, 0, 125, 0],
            [750, 0, 125, 34, 0, 125, 0],
            [875, 0, 125, 34, 0, 125, 0],
            [1e3, 0, 125, 34, 0, 125, 0],
            [1125, 0, 125, 34, 0, 125, 0],
            [1250, 0, 125, 34, 0, 125, 0],
            [1375, 0, 125, 34, 0, 125, 0],
            [1500, 0, 125, 34, 0, 125, 0],
            [1625, 0, 125, 34, 0, 125, 0],
            [1750, 0, 125, 34, 0, 125, 0],
            [1875, 0, 125, 34, 0, 125, 0],
            [0, 34, 125, 34, 0, 125, 0]
        ]}), N = function () {
            var t, n;
            luxanimals.clouds.populate([
                {x: 100, y: 170, scale: .6},
                {type: "sun", x: 250, y: 150, scale: 1},
                {x: 200, y: 200, scale: 1},
                {x: 700, y: 150, scale: .7},
                {x: 780, y: 200, scale: 1}
            ]), luxanimals.addObject(luxanimals.clouds), t = (new createjs.Bitmap(luxanimals.loadedAssets.whaleTail.img)).set(g), n = (new createjs.Bitmap(luxanimals.loadedAssets.whale.img)).set(y), h = (new createjs.BitmapAnimation(T)).set(b), h.gotoAndStop(0), r.addChild(t, n, h), M(), clearInterval(e), e = window.setInterval(C, 4200), m = !1, luxanimals.physics.levels[1].createWhale(t)
        }, C = function () {
            window.clearInterval(e), e = null, f === null && t === 0 && (t = 0, luxanimals.physics && luxanimals.physics.levels[1].removeSpout(), a = (new createjs.BitmapAnimation(S)).set(E), f = (new createjs.BitmapAnimation(x)).set(w), l = $(a), c = $(f), a.gotoAndPlay("all"), f.gotoAndPlay("all"), h.gotoAndPlay("spout"), r.addChild(a, f), p = "spout", L())
        }, k = function () {
            luxanimals.physics && luxanimals.physics.levels[1].moveSpout(this.y)
        }, L = function () {
            c.animate({scaleX: 1, scaleY: 1}, 250, function () {
                luxanimals.physics.levels[1].createSpout(), l.animate({scaleY: 1}, 700), c.animate({y: 123}, {duration: 700, step: k, complete: function () {
                    for (var e = 0, t = Math.round(Math.random() * 4) + 1; e < t; e++)i.push(Math.random());
                    u = window.setTimeout(A, 2e3)
                }})
            })
        }, A = function () {
            u && (clearTimeout(u), u = null);
            if (!f)return O();
            if (!a)return O();
            t = 1;
            var e = ~~(Math.random() * 1e3) + 1e3;
            l.animate({scaleY: i[0]}, e, "easeInOutBack"), c.animate({y: 222 * (1 - i[0]) + 123}, {duration: e, easing: "easeInOutBack", step: k, complete: function () {
                i.splice(0, 1), i.length < 1 ? (i = [], O()) : A()
            }})
        }, O = function () {
            t = 2;
            if (!f) {
                luxanimals.physics && luxanimals.physics.levels[1].removeSpout();
                return
            }
            c.animate({y: 345}, {duration: 1e3, step: k, complete: function () {
                luxanimals.physics && luxanimals.physics.levels[1].removeSpout(), c.animate({scaleX: 0, scaleY: 0}, 200, function () {
                    t = 0, e === null && !m && (e = window.setInterval(C, ~~(Math.random() * 4e3) + 3e3)), n.removeChild(this), n.removeChild(a), a = l = null, f = c = null, h.gotoAndPlay("blink"), p = "idle"
                })
            }});
            if (!a)return;
            l.animate({scaleY: 0}, 1e3)
        }, M = function () {
            l && l.stop(!0, !0).clearQueue(), c && c.stop(!0, !0).clearQueue()
        }, _ = function (n) {
            if (n)f ? M() : e && (window.clearInterval(e), e = null), u !== null && window.clearTimeout(u); else {
                if (f)switch (t) {
                    case 0:
                        L();
                        break;
                    case 1:
                        A();
                        break;
                    case 2:
                        O()
                } else e === null && (e = window.setInterval(C, ~~(Math.random() * 5e3) + 5e3));
                u !== null && (u = window.setTimeout(A, 2e3))
            }
        }, D = function (e, t) {
            p === "idle" && (d += e / FRAME_DELTA, ~~d % v === 0 && (h.gotoAndPlay("blink"), v = ~~(Math.random() * 100) + 460))
        }, P = function () {
            M(), window.clearInterval(e), luxanimals.physics && luxanimals.physics.levels[1].removeSpout(), f !== null && (n.removeChild(f), n.removeChild(a)), u !== null && window.clearTimeout(u), i.length = 0, whaleTailBMP = whaleBMP = h = e = u = a = l = f = c = null
        }, H = function () {
            h.gotoAndPlay("hit"), h.onAnimationEnd = B
        }, B = function () {
            h.gotoAndPlay("blink"), p = "idle", h.onAnimationEnd = null
        }, j = function () {
            O(), m = !0
        };
        return{name: "The Battle of Spout Belly Bay", subtitle: "DAY TWO: BATTLE OF SPOUT BELLY BAY", init: N, update: D, pauseResume: _, clearAll: P, whaleHit: H, gameOver: j}
    }, l[2] = {volcano: "volcano.png", volcanoLeft: "volcano_left.png", volcanoRight: "volcano_right.png", volcanoTunnels: "volcano_tunnels.png", fireball: "volcano_fireball.png", goatL: "volcano_goat_left.png", goatR: "volcano_goat_right.png", tail: "volcano_tail.png", stormCloudFront: "storm_cloud_front.png", stormCloudMid: "storm_cloud_middle.png", stormCloudBack: "storm_cloud_back.png", wood: "volcano_wood_door.png", lightning: "lightningbolt.png"}, t[2] = function () {
        var e = 0, t = "left", i, a, f, l = function () {
            o.attr("class", "volcano_background"), s = {stupid: [-35, -60, 12, 25], normal: [-42, -55, 15, 22], hard: [-46, -50, 19, 23]}, luxanimals.clouds.storm(), f = new createjs.Bitmap(luxanimals.loadedAssets.volcanoTunnels.img), a = new createjs.Bitmap(luxanimals.loadedAssets.volcanoLeft.img), i = new createjs.Bitmap(luxanimals.loadedAssets.volcanoRight.img);
            var e = new createjs.Bitmap(luxanimals.loadedAssets.goatL.img), t = new createjs.Bitmap(luxanimals.loadedAssets.goatR.img), u = new createjs.Bitmap(luxanimals.loadedAssets.wood.img), l = new createjs.Bitmap(luxanimals.loadedAssets.wood.img);
            a.x = 270, a.y = 364, i.x = 452, i.y = 320, l.regX = l.regX = 6, l.regY = u.regY = 25, f.x = 270, f.y = 320, f.visible = !1, e.regX = t.regX = 23, e.regY = t.regY = 33, n.addChild(f), n.addChild(u), n.addChild(l), r.addChild(a), r.addChild(i), r.addChild(t), r.addChild(e), luxanimals.physics.levels[3].init(), luxanimals.physics.levels[3].goatRight(t), luxanimals.physics.levels[3].goatLeft(e), luxanimals.physics.levels[3].doors(u, l)
        }, c = function (r, i) {
            e += r / FRAME_DELTA;
            if (Math.floor(e) >= 35) {
                e = 0;
                var s = new createjs.Bitmap(luxanimals.loadedAssets.fireball.img), o = new createjs.Bitmap(luxanimals.loadedAssets.tail.img);
                s.regX = 27, s.regY = 22, o.regX = 17, o.regY = 46, s.x = s.y = o.x = o.y = -100, n.addChildAt(o, 0), n.addChildAt(s, 1), t === "left" ? t = "right" : t = "left", luxanimals.physics.levels[3].erupt(t, s, o)
            }
        }, h = function (e) {
            var t = new createjs.Bitmap(luxanimals.loadedAssets.lightning.img);
            t.mouseEnabled = !1, t.snapToPixel = !0, t.regX = 59, t.regY = 67, t.x = ~~e, t.y = 0, luxanimals.clouds.addLightning(t), $(t).animate({y: Math.random() * 20 + 130}, 500, "easeOutBack", function () {
                luxanimals.physics.levels[3].lightning(t)
            })
        }, p = function () {
            var e = luxanimals.gameManager.getTurn();
            f.visible = !0, e === 0 ? u.get(i).to({alpha: 0}, 300).set({visible: !1}) : u.get(a).to({alpha: 0}, 300).set({visible: !1})
        }, d = function () {
            var e = luxanimals.gameManager.getTurn();
            e === 0 ? u.get(i).set({visible: !0}).to({alpha: 1}, 300).set({visible: !1}, f) : u.get(a).set({visible: !0}).to({alpha: 1}, 300).set({visible: !1}, f)
        }, v = function (e) {
            trace("levels startTurn() " + e), luxanimals.physics.levels[3].setTurn(e)
        };
        return{name: "The Battle Of Fire N' Goats", subtitle: "DAY THREE: BATTLE OF FIRE N' GOATS", init: l, showTunnels: p, hideTunnels: d, update: c, startTurn: v, cloudHit: h}
    }, {init: d, selectLevel: h, selectNextLevel: p, setBackgroundHolder: function (e) {
        n = e
    }, setForegroundHolder: function (e) {
        r = e
    }, getLevel: function () {
        return e
    }, getLevelAssets: function () {
        return $.extend({}, f, l[e])
    }, getCurrentLevel: function () {
        return i
    }, getLevelName: function () {
        return i.name
    }, getLevelSubTitle: function () {
        return i.subtitle
    }, getLevelID: function () {
        return c[e]
    }, getTotalLevels: function () {
        return c.length
    }, getAIRanges: function () {
        return s
    }}
}, luxanimals.main = function () {
    var e;
    globalNoLoop = window.globalNoLoop || !1, $.support.transition || ($.fn.transition = $.fn.animate);
    var t, n = {};
    $.jStorage.deleteKey("user"), n.screen = $.jStorage.get("user.screen", "home"), n.visits = $.jStorage.get("user.visits", 0), n.level = $.jStorage.get("user.level"), n.character = $.jStorage.get("user.character"), n.characters = $.jStorage.get("user.characters", {}), n.scores = $.jStorage.get("user.scores"), n.visits++, $.jStorage.set("user.visits", n.visits), luxanimals.user = n, $(document).ready(function () {
        Modernizr.canvas && (luxanimals.soundManager = new luxanimals.soundManager, luxanimals.gameManager = new luxanimals.GameManager, luxanimals.clouds = new luxanimals.Clouds, luxanimals.levels = new luxanimals.Levels, luxanimals.uiManager = new luxanimals.uiManager, n.character && luxanimals.gameManager.selectCharacter(n.character), n.level && luxanimals.levels.selectLevel(n.level), luxanimals.uiManager.loadNextScreen(n.screen, !0))
    });
    var r = function () {
        var t = function () {
            trace("[main] - preload game"), e = new luxanimals.preloader({onComplete: n, baseurl: "assets/images/"}), e.init(luxanimals.levels.getLevelAssets());
            var t = e.getLoader();
            t.installPlugin(SoundJS), Modernizr.ios || luxanimals.soundManager.load("battleLoop cannon1 cannon2 hit1 hit2 hit3 splash splash2 doorclose goat thunder coin", !1, t)
        }, n = function () {
            trace("[main] - assets loaded"), e = null, luxanimals.uiManager.nextScreenLoaded(), r()
        }, r = function () {
            trace("[main] - start"), luxanimals.physics = new luxanimals.Physics, luxanimals.particles = new luxanimals.Particles, luxanimals.coins = new luxanimals.Coins, luxanimals.powerups = new luxanimals.Powerups, luxanimals.scene = new luxanimals.Scene, luxanimals.gameManager.init(), luxanimals.addObject(luxanimals.scene), createjs.Ticker.addListener(luxanimals)
        }, i = function () {
            trace("[main] - restart"), s(), r()
        }, s = function () {
            createjs.Ticker.removeListener(luxanimals), luxanimals.physics = luxanimals.particles = luxanimals.scene = luxanimals.coins = null
        }, o = function () {
            luxanimals.gameManager = null, luxanimals.gameManager = new luxanimals.GameManager
        };
        return{start: r, restart: i, clearAll: s, quit: o, preloadStart: t}
    }();
    return{game: r, init: t}
}();
;