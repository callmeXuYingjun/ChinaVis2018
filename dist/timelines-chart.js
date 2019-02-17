!
function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.TimelinesChart = n()
} (this,
function() {
    "use strict";
    function t(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    }
    function n(t) {
        return function(n, e) {
            return Em(t(n), e)
        }
    }
    function e(t, n) {
        return [t, n]
    }
    function r(t, n, e) {
        var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
        return i >= 0 ? (a >= Bm ? 10 : a >= Wm ? 5 : a >= Vm ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= Bm ? 10 : a >= Wm ? 5 : a >= Vm ? 2 : 1)
    }
    function i(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
        return a >= Bm ? i *= 10 : a >= Wm ? i *= 5 : a >= Vm && (i *= 2),
        n < t ? -i: i
    }
    function a(t) {
        return t.length
    }
    function o(t) {
        return "translate(" + (t + .5) + ",0)"
    }
    function u(t) {
        return "translate(0," + (t + .5) + ")"
    }
    function c(t) {
        return function(n) {
            return + t(n)
        }
    }
    function f(t) {
        var n = Math.max(0, t.bandwidth() - 1) / 2;
        return t.round() && (n = Math.round(n)),
        function(e) {
            return + t(e) + n
        }
    }
    function s() {
        return ! this.__axis
    }
    function l(t, n) {
        function e(e) {
            var o = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
            u = null == a ? n.tickFormat ? n.tickFormat.apply(n, r) : e_: a,
            y = Math.max(l, 0) + d,
            b = n.range(),
            m = +b[0] + .5,
            _ = +b[b.length - 1] + .5,
            x = (n.bandwidth ? f: c)(n.copy()),
            w = e.selection ? e.selection() : e,
            M = w.selectAll(".domain").data([null]),
            S = w.selectAll(".tick").data(o, n).order(),
            A = S.exit(),
            T = S.enter().append("g").attr("class", "tick"),
            k = S.select("line"),
            C = S.select("text");
            M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")),
            S = S.merge(T),
            k = k.merge(T.append("line").attr("stroke", "#000").attr(g + "2", p * l)),
            C = C.merge(T.append("text").attr("fill", "#eeeeee").attr(g, p * y).attr("dy", t === r_ ? "0em": t === a_ ? "0.71em": "0.32em")),
            e !== w && (M = M.transition(e), S = S.transition(e), k = k.transition(e), C = C.transition(e), A = A.transition(e).attr("opacity", u_).attr("transform",
            function(t) {
                return isFinite(t = x(t)) ? v(t) : this.getAttribute("transform")
            }), T.attr("opacity", u_).attr("transform",
            function(t) {
                var n = this.parentNode.__axis;
                return v(n && isFinite(n = n(t)) ? n: x(t))
            })),
            A.remove(),
            M.attr("d", t === o_ || t == i_ ? "M" + p * h + "," + m + "H0.5V" + _ + "H" + p * h: "M" + m + "," + p * h + "V0.5H" + _ + "V" + p * h),
            S.attr("opacity", 1).attr("transform",
            function(t) {
                return v(x(t))
            }),
            k.attr(g + "2", p * l),
            C.attr(g, p * y).text(u),
            w.filter(s).attr("fill", "rgba(128, 128, 128, 0.1)").attr("font-size", 10).style("font-color", "#B2DFEE").attr("font-family", "sans-serif").attr("text-anchor", t === i_ ? "start": t === o_ ? "end": "middle"),
            w.each(function() {
                this.__axis = x
            })
        }
        var r = [],
        i = null,
        a = null,
        l = 6,
        h = 6,
        d = 3,
        p = t === r_ || t === o_ ? -1 : 1,
        g = t === o_ || t === i_ ? "x": "y",
        v = t === r_ || t === a_ ? o: u;
        return e.scale = function(t) {
            return arguments.length ? (n = t, e) : n
        },
        e.ticks = function() {
            return r = n_.call(arguments),
            e
        },
        e.tickArguments = function(t) {
            return arguments.length ? (r = null == t ? [] : n_.call(t), e) : r.slice()
        },
        e.tickValues = function(t) {
            return arguments.length ? (i = null == t ? null: n_.call(t), e) : i && i.slice()
        },
        e.tickFormat = function(t) {
            return arguments.length ? (a = t, e) : a
        },
        e.tickSize = function(t) {
            return arguments.length ? (l = h = +t, e) : l
        },
        e.tickSizeInner = function(t) {
            return arguments.length ? (l = +t, e) : l
        },
        e.tickSizeOuter = function(t) {
            return arguments.length ? (h = +t, e) : h
        },
        e.tickPadding = function(t) {
            return arguments.length ? (d = +t, e) : d
        },
        e
    }
    function h(t) {
        return l(r_, t)
    }
    function d(t) {
        return l(i_, t)
    }
    function p(t) {
        return l(a_, t)
    }
    function g(t) {
        return l(o_, t)
    }
    function v() {
        for (var t, n = 0,
        e = arguments.length,
        r = {}; n < e; ++n) {
            if (! (t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new y(r)
    }
    function y(t) {
        this._ = t
    }
    function b(t, n) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var e = "",
            r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        })
    }
    function m(t, n) {
        for (var e, r = 0,
        i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
    }
    function _(t, n, e) {
        for (var r = 0,
        i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = c_,
            t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({
            name: n,
            value: e
        }),
        t
    }
    function x(t) {
        return function() {
            var n = this.ownerDocument,
            e = this.namespaceURI;
            return e === f_ && n.documentElement.namespaceURI === f_ ? n.createElement(t) : n.createElementNS(e, t)
        }
    }
    function w(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    function M() {
        return new S
    }
    function S() {
        this._ = "@" + (++d_).toString(36)
    }
    function A(t, n, e) {
        return t = T(t, n, e),
        function(n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }
    function T(t, n, e) {
        return function(r) {
            var i = m_;
            m_ = r;
            try {
                t.call(this, this.__data__, n, e)
            } finally {
                m_ = i
            }
        }
    }
    function k(t) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var n = "",
            e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)),
            {
                type: t,
                name: n
            }
        })
    }
    function C(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0,
                i = -1,
                a = n.length; r < a; ++r) e = n[r],
                t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e: this.removeEventListener(e.type, e.listener, e.capture); ++i ? n.length = i: delete this.__on
            }
        }
    }
    function N(t, n, e) {
        var r = b_.hasOwnProperty(t.type) ? A: T;
        return function(i, a, o) {
            var u, c = this.__on,
            f = r(n, a, o);
            if (c) for (var s = 0,
            l = c.length; s < l; ++s) if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture),
            this.addEventListener(u.type, u.listener = f, u.capture = e),
            void(u.value = n);
            this.addEventListener(t.type, f, e),
            u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: f,
                capture: e
            },
            c ? c.push(u) : this.__on = [u]
        }
    }
    function E(t, n, e, r) {
        var i = m_;
        t.sourceEvent = m_,
        m_ = t;
        try {
            return n.apply(e, r)
        } finally {
            m_ = i
        }
    }
    function D() {}
    function z() {
        return []
    }
    function U(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    function P(t, n, e, r, i, a) {
        for (var o, u = 0,
        c = n.length,
        f = a.length; u < f; ++u)(o = n[u]) ? (o.__data__ = a[u], r[u] = o) : e[u] = new U(t, a[u]);
        for (; u < c; ++u)(o = n[u]) && (i[u] = o)
    }
    function L(t, n, e, r, i, a, o) {
        var u, c, f, s = {},
        l = n.length,
        h = a.length,
        d = new Array(l);
        for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = k_ + o.call(c, c.__data__, u, n), f in s ? i[u] = c: s[f] = c);
        for (u = 0; u < h; ++u)(c = s[f = k_ + o.call(t, a[u], u, a)]) ? (r[u] = c, c.__data__ = a[u], s[f] = null) : e[u] = new U(t, a[u]);
        for (u = 0; u < l; ++u)(c = n[u]) && s[d[u]] === c && (i[u] = c)
    }
    function F(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function R(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function H(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function O(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }
    function Y(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }
    function j(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }
    function q(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }
    function I(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function X(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }
    function B(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }
    function W(t, n) {
        return t.style.getPropertyValue(n) || C_(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function V(t) {
        return function() {
            delete this[t]
        }
    }
    function $(t, n) {
        return function() {
            this[t] = n
        }
    }
    function Z(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }
    function G(t) {
        return t.trim().split(/^|\s+/)
    }
    function J(t) {
        return t.classList || new Q(t)
    }
    function Q(t) {
        this._node = t,
        this._names = G(t.getAttribute("class") || "")
    }
    function K(t, n) {
        for (var e = J(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }
    function tt(t, n) {
        for (var e = J(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }
    function nt(t) {
        return function() {
            K(this, t)
        }
    }
    function et(t) {
        return function() {
            tt(this, t)
        }
    }
    function rt(t, n) {
        return function() { (n.apply(this, arguments) ? K: tt)(this, t)
        }
    }
    function it() {
        this.textContent = ""
    }
    function at(t) {
        return function() {
            this.textContent = t
        }
    }
    function ot(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "": n
        }
    }
    function ut() {
        this.innerHTML = ""
    }
    function ct(t) {
        return function() {
            this.innerHTML = t
        }
    }
    function ft(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "": n
        }
    }
    function st() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function lt() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function ht() {
        return null
    }
    function dt() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function pt(t, n, e) {
        var r = C_(t),
        i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    function gt(t, n) {
        return function() {
            return pt(this, t, n)
        }
    }
    function vt(t, n) {
        return function() {
            return pt(this, t, n.apply(this, arguments))
        }
    }
    function yt(t, n) {
        this._groups = t,
        this._parents = n
    }
    function bt() {
        return new yt([[document.documentElement]], N_)
    }
    function mt() {
        m_.stopImmediatePropagation()
    }
    function _t(t, n) {
        var e = t.document.documentElement,
        r = E_(t).on("dragstart.drag", null);
        n && (r.on("click.drag", z_, !0), setTimeout(function() {
            r.on("click.drag", null)
        },
        0)),
        "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }
    function xt(t, n, e, r, i, a, o, u, c, f) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = o,
        this.dx = u,
        this.dy = c,
        this._ = f
    }
    function wt() {
        return ! m_.button
    }
    function Mt() {
        return this.parentNode
    }
    function St(t) {
        return null == t ? {
            x: m_.x,
            y: m_.y
        }: t
    }
    function At() {
        return "ontouchstart" in this
    }
    function Tt(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }
    function kt() {}
    function Ct(t) {
        var n;
        return t = (t + "").trim().toLowerCase(),
        (n = O_.exec(t)) ? (n = parseInt(n[1], 16), new Ut(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Y_.exec(t)) ? Nt(parseInt(n[1], 16)) : (n = j_.exec(t)) ? new Ut(n[1], n[2], n[3], 1) : (n = q_.exec(t)) ? new Ut(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = I_.exec(t)) ? Et(n[1], n[2], n[3], n[4]) : (n = X_.exec(t)) ? Et(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = B_.exec(t)) ? Pt(n[1], n[2] / 100, n[3] / 100, 1) : (n = W_.exec(t)) ? Pt(n[1], n[2] / 100, n[3] / 100, n[4]) : V_.hasOwnProperty(t) ? Nt(V_[t]) : "transparent" === t ? new Ut(NaN, NaN, NaN, 0) : null
    }
    function Nt(t) {
        return new Ut(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    function Et(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN),
        new Ut(t, n, e, r)
    }
    function Dt(t) {
        return t instanceof kt || (t = Ct(t)),
        t ? (t = t.rgb(), new Ut(t.r, t.g, t.b, t.opacity)) : new Ut
    }
    function zt(t, n, e, r) {
        return 1 === arguments.length ? Dt(t) : new Ut(t, n, e, null == r ? 1 : r)
    }
    function Ut(t, n, e, r) {
        this.r = +t,
        this.g = +n,
        this.b = +e,
        this.opacity = +r
    }
    function Pt(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN: e <= 0 || e >= 1 ? t = n = NaN: n <= 0 && (t = NaN),
        new Rt(t, n, e, r)
    }
    function Lt(t) {
        if (t instanceof Rt) return new Rt(t.h, t.s, t.l, t.opacity);
        if (t instanceof kt || (t = Ct(t)), !t) return new Rt;
        if (t instanceof Rt) return t;
        var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        a = Math.max(n, e, r),
        o = NaN,
        u = a - i,
        c = (a + i) / 2;
        return u ? (o = n === a ? (e - r) / u + 6 * (e < r) : e === a ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? a + i: 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o,
        new Rt(o, u, c, t.opacity)
    }
    function Ft(t, n, e, r) {
        return 1 === arguments.length ? Lt(t) : new Rt(t, n, e, null == r ? 1 : r)
    }
    function Rt(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Ht(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e: t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    function Ot(t) {
        if (t instanceof jt) return new jt(t.l, t.a, t.b, t.opacity);
        if (t instanceof $t) {
            var n = t.h * $_;
            return new jt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Ut || (t = Dt(t));
        var e = Bt(t.r),
        r = Bt(t.g),
        i = Bt(t.b),
        a = qt((.4124564 * e + .3575761 * r + .1804375 * i) / G_),
        o = qt((.2126729 * e + .7151522 * r + .072175 * i) / J_);
        return new jt(116 * o - 16, 500 * (a - o), 200 * (o - qt((.0193339 * e + .119192 * r + .9503041 * i) / Q_)), t.opacity)
    }
    function Yt(t, n, e, r) {
        return 1 === arguments.length ? Ot(t) : new jt(t, n, e, null == r ? 1 : r)
    }
    function jt(t, n, e, r) {
        this.l = +t,
        this.a = +n,
        this.b = +e,
        this.opacity = +r
    }
    function qt(t) {
        return t > ex ? Math.pow(t, 1 / 3) : t / nx + K_
    }
    function It(t) {
        return t > tx ? t * t * t: nx * (t - K_)
    }
    function Xt(t) {
        return 255 * (t <= .0031308 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function Bt(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function Wt(t) {
        if (t instanceof $t) return new $t(t.h, t.c, t.l, t.opacity);
        t instanceof jt || (t = Ot(t));
        var n = Math.atan2(t.b, t.a) * Z_;
        return new $t(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }
    function Vt(t, n, e, r) {
        return 1 === arguments.length ? Wt(t) : new $t(t, n, e, null == r ? 1 : r)
    }
    function $t(t, n, e, r) {
        this.h = +t,
        this.c = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Zt(t) {
        if (t instanceof Jt) return new Jt(t.h, t.s, t.l, t.opacity);
        t instanceof Ut || (t = Dt(t));
        var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (sx * r + cx * n - fx * e) / (sx + cx - fx),
        a = r - i,
        o = (ux * (e - i) - ax * a) / ox,
        u = Math.sqrt(o * o + a * a) / (ux * i * (1 - i)),
        c = u ? Math.atan2(o, a) * Z_ - 120 : NaN;
        return new Jt(c < 0 ? c + 360 : c, u, i, t.opacity)
    }
    function Gt(t, n, e, r) {
        return 1 === arguments.length ? Zt(t) : new Jt(t, n, e, null == r ? 1 : r)
    }
    function Jt(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Qt(t, n, e, r, i) {
        var a = t * t,
        o = a * t;
        return ((1 - 3 * t + 3 * a - o) * n + (4 - 6 * a + 3 * o) * e + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
    }
    function Kt(t, n) {
        return function(e) {
            return t + e * n
        }
    }
    function tn(t, n, e) {
        return t = Math.pow(t, e),
        n = Math.pow(n, e) - t,
        e = 1 / e,
        function(r) {
            return Math.pow(t + r * n, e)
        }
    }
    function nn(t, n) {
        var e = n - t;
        return e ? Kt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : mx(isNaN(t) ? n: t)
    }
    function en(t) {
        return 1 == (t = +t) ? rn: function(n, e) {
            return e - n ? tn(n, e, t) : mx(isNaN(n) ? e: n)
        }
    }
    function rn(t, n) {
        var e = n - t;
        return e ? Kt(t, e) : mx(isNaN(t) ? n: t)
    }
    function an(t) {
        return function(n) {
            var e, r, i = n.length,
            a = new Array(i),
            o = new Array(i),
            u = new Array(i);
            for (e = 0; e < i; ++e) r = zt(n[e]),
            a[e] = r.r || 0,
            o[e] = r.g || 0,
            u[e] = r.b || 0;
            return a = t(a),
            o = t(o),
            u = t(u),
            r.opacity = 1,
            function(t) {
                return r.r = a(t),
                r.g = o(t),
                r.b = u(t),
                r + ""
            }
        }
    }
    function on(t) {
        return function() {
            return t
        }
    }
    function un(t) {
        return function(n) {
            return t(n) + ""
        }
    }
    function cn(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " ": ""
        }
        function a(t, r, i, a, o, u) {
            if (t !== i || r !== a) {
                var c = o.push("translate(", null, n, null, e);
                u.push({
                    i: c - 4,
                    x: Ax(t, i)
                },
                {
                    i: c - 2,
                    x: Ax(r, a)
                })
            } else(i || a) && o.push("translate(" + i + n + a + e)
        }
        function o(t, n, e, a) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                i: e.push(i(e) + "rotate(", null, r) - 2,
                x: Ax(t, n)
            })) : n && e.push(i(e) + "rotate(" + n + r)
        }
        function u(t, n, e, a) {
            t !== n ? a.push({
                i: e.push(i(e) + "skewX(", null, r) - 2,
                x: Ax(t, n)
            }) : n && e.push(i(e) + "skewX(" + n + r)
        }
        function c(t, n, e, r, a, o) {
            if (t !== e || n !== r) {
                var u = a.push(i(a) + "scale(", null, ",", null, ")");
                o.push({
                    i: u - 4,
                    x: Ax(t, e)
                },
                {
                    i: u - 2,
                    x: Ax(n, r)
                })
            } else 1 === e && 1 === r || a.push(i(a) + "scale(" + e + "," + r + ")")
        }
        return function(n, e) {
            var r = [],
            i = [];
            return n = t(n),
            e = t(e),
            a(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
            o(n.rotate, e.rotate, r, i),
            u(n.skewX, e.skewX, r, i),
            c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
            n = e = null,
            function(t) {
                for (var n, e = -1,
                a = i.length; ++e < a;) r[(n = i[e]).i] = n.x(t);
                return r.join("")
            }
        }
    }
    function fn(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }
    function sn(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2
    }
    function ln(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }
    function hn(t) {
        return function(n, e) {
            var r = t((n = Ft(n)).h, (e = Ft(e)).h),
            i = rn(n.s, e.s),
            a = rn(n.l, e.l),
            o = rn(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.s = i(t),
                n.l = a(t),
                n.opacity = o(t),
                n + ""
            }
        }
    }
    function dn(t) {
        return function(n, e) {
            var r = t((n = Vt(n)).h, (e = Vt(e)).h),
            i = rn(n.c, e.c),
            a = rn(n.l, e.l),
            o = rn(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.c = i(t),
                n.l = a(t),
                n.opacity = o(t),
                n + ""
            }
        }
    }
    function pn(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Gt(n)).h, (r = Gt(r)).h),
                a = rn(n.s, r.s),
                o = rn(n.l, r.l),
                u = rn(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t),
                    n.s = a(t),
                    n.l = o(Math.pow(t, e)),
                    n.opacity = u(t),
                    n + ""
                }
            }
            return e = +e,
            r.gamma = n,
            r
        } (1)
    }
    function gn() {
        return Gx || (Kx(vn), Gx = Qx.now() + Jx)
    }
    function vn() {
        Gx = 0
    }
    function yn() {
        this._call = this._time = this._next = null
    }
    function bn(t, n, e) {
        var r = new yn;
        return r.restart(t, n, e),
        r
    }
    function mn() {
        gn(),
        ++Bx;
        for (var t, n = gx; n;)(t = Gx - n._time) >= 0 && n._call.call(null, t),
        n = n._next; --Bx
    }
    function _n() {
        Gx = (Zx = Qx.now()) + Jx,
        Bx = Wx = 0;
        try {
            mn()
        } finally {
            Bx = 0,
            wn(),
            Gx = 0
        }
    }
    function xn() {
        var t = Qx.now(),
        n = t - Zx;
        n > $x && (Jx -= n, Zx = t)
    }
    function wn() {
        for (var t, n, e = gx,
        r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n: gx = n);
        vx = t,
        Mn(r)
    }
    function Mn(t) {
        Bx || (Wx && (Wx = clearTimeout(Wx)), t - Gx > 24 ? (t < 1 / 0 && (Wx = setTimeout(_n, t - Qx.now() - Jx)), Vx && (Vx = clearInterval(Vx))) : (Vx || (Zx = Qx.now(), Vx = setInterval(xn, $x)), Bx = 1, Kx(_n)))
    }
    function Sn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > rw) throw new Error("too late");
        return e
    }
    function An(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > aw) throw new Error("too late");
        return e
    }
    function Tn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("too late");
        return e
    }
    function kn(t, n, e) {
        function r(c) {
            var f, s, l, h;
            if (e.state !== iw) return a();
            for (f in u) if ((h = u[f]).name === e.name) {
                if (h.state === ow) return tw(r);
                h.state === uw ? (h.state = fw, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete u[f]) : +f < n && (h.state = fw, h.timer.stop(), delete u[f])
            }
            if (tw(function() {
                e.state === ow && (e.state = uw, e.timer.restart(i, e.delay, e.time), i(c))
            }), e.state = aw, e.on.call("start", t, t.__data__, e.index, e.group), e.state === aw) {
                for (e.state = ow, o = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (o[++s] = h);
                o.length = s + 1
            }
        }
        function i(n) {
            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = cw, 1), i = -1, u = o.length; ++i < u;) o[i].call(null, r);
            e.state === cw && (e.on.call("end", t, t.__data__, e.index, e.group), a())
        }
        function a() {
            e.state = fw,
            e.timer.stop(),
            delete u[n];
            for (var r in u) return;
            delete t.__transition
        }
        var o, u = t.__transition;
        u[n] = e,
        e.timer = bn(function(t) {
            e.state = iw,
            e.timer.restart(r, e.delay, e.time),
            e.delay <= t && r(t - e.delay)
        },
        0, e.time)
    }
    function Cn(t, n) {
        var e, r;
        return function() {
            var i = An(this, t),
            a = i.tween;
            if (a !== e) for (var o = 0,
            u = (r = e = a).length; o < u; ++o) if (r[o].name === n) { (r = r.slice()).splice(o, 1);
                break
            }
            i.tween = r
        }
    }
    function Nn(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error;
        return function() {
            var a = An(this, t),
            o = a.tween;
            if (o !== r) {
                i = (r = o).slice();
                for (var u = {
                    name: n,
                    value: e
                },
                c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
                    i[c] = u;
                    break
                }
                c === f && i.push(u)
            }
            a.tween = i
        }
    }
    function En(t, n, e) {
        var r = t._id;
        return t.each(function() {
            var t = An(this, r); (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }),
        function(t) {
            return Tn(t, r).value[n]
        }
    }
    function Dn(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function zn(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Un(t, n, e) {
        var r, i;
        return function() {
            var a = this.getAttribute(t);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Pn(t, n, e) {
        var r, i;
        return function() {
            var a = this.getAttributeNS(t.space, t.local);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Ln(t, n, e) {
        var r, i, a;
        return function() {
            var o, u = e(this); {
                if (null != u) return (o = this.getAttribute(t)) === u ? null: o === r && u === i ? a: a = n(r = o, i = u);
                this.removeAttribute(t)
            }
        }
    }
    function Fn(t, n, e) {
        var r, i, a;
        return function() {
            var o, u = e(this); {
                if (null != u) return (o = this.getAttributeNS(t.space, t.local)) === u ? null: o === r && u === i ? a: a = n(r = o, i = u);
                this.removeAttributeNS(t.space, t.local)
            }
        }
    }
    function Rn(t, n) {
        function e() {
            var e = this,
            r = n.apply(e, arguments);
            return r &&
            function(n) {
                e.setAttributeNS(t.space, t.local, r(n))
            }
        }
        return e._value = n,
        e
    }
    function Hn(t, n) {
        function e() {
            var e = this,
            r = n.apply(e, arguments);
            return r &&
            function(n) {
                e.setAttribute(t, r(n))
            }
        }
        return e._value = n,
        e
    }
    function On(t, n) {
        return function() {
            Sn(this, t).delay = +n.apply(this, arguments)
        }
    }
    function Yn(t, n) {
        return n = +n,
        function() {
            Sn(this, t).delay = n
        }
    }
    function jn(t, n) {
        return function() {
            An(this, t).duration = +n.apply(this, arguments)
        }
    }
    function qn(t, n) {
        return n = +n,
        function() {
            An(this, t).duration = n
        }
    }
    function In(t, n) {
        if ("function" != typeof n) throw new Error;
        return function() {
            An(this, t).ease = n
        }
    }
    function Xn(t) {
        return (t + "").trim().split(/^|\s+/).every(function(t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)),
            !t || "start" === t
        })
    }
    function Bn(t, n, e) {
        var r, i, a = Xn(n) ? Sn: An;
        return function() {
            var o = a(this, t),
            u = o.on;
            u !== r && (i = (r = u).copy()).on(n, e),
            o.on = i
        }
    }
    function Wn(t) {
        return function() {
            var n = this.parentNode;
            for (var e in this.__transition) if ( + e !== t) return;
            n && n.removeChild(this)
        }
    }
    function Vn(t, n) {
        var e, r, i;
        return function() {
            var a = W(this, t),
            o = (this.style.removeProperty(t), W(this, t));
            return a === o ? null: a === e && o === r ? i: i = n(e = a, r = o)
        }
    }
    function $n(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Zn(t, n, e) {
        var r, i;
        return function() {
            var a = W(this, t);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Gn(t, n, e) {
        var r, i, a;
        return function() {
            var o = W(this, t),
            u = e(this);
            return null == u && (this.style.removeProperty(t), u = W(this, t)),
            o === u ? null: o === r && u === i ? a: a = n(r = o, i = u)
        }
    }
    function Jn(t, n, e) {
        function r() {
            var r = this,
            i = n.apply(r, arguments);
            return i &&
            function(n) {
                r.style.setProperty(t, i(n), e)
            }
        }
        return r._value = n,
        r
    }
    function Qn(t) {
        return function() {
            this.textContent = t
        }
    }
    function Kn(t) {
        return function() {
            var n = t(this);
            this.textContent = null == n ? "": n
        }
    }
    function te(t, n, e, r) {
        this._groups = t,
        this._parents = n,
        this._name = e,
        this._id = r
    }
    function ne(t) {
        return bt().transition(t)
    }
    function ee() {
        return++pw
    }
    function re(t) {
        return ((t *= 2) <= 1 ? t * t: --t * (2 - t) + 1) / 2
    }
    function ie(t) {
        return ((t *= 2) <= 1 ? t * t * t: (t -= 2) * t * t + 2) / 2
    }
    function ae(t) {
        return (1 - Math.cos(mw * t)) / 2
    }
    function oe(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }
    function ue(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }
    function ce(t) {
        return (t = +t) < xw ? Ew * t * t: t < Mw ? Ew * (t -= ww) * t + Sw: t < Tw ? Ew * (t -= Aw) * t + kw: Ew * (t -= Cw) * t + Nw
    }
    function fe(t, n) {
        for (var e; ! (e = t.__transition) || !(e = e[n]);) if (! (t = t.parentNode)) return Hw.time = gn(),
        Hw;
        return e
    }
    function se() {
        m_.stopImmediatePropagation()
    }
    function le(t) {
        return {
            type: t
        }
    }
    function he() {
        return ! m_.button
    }
    function de() {
        var t = this.ownerSVGElement || this;
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
    }
    function pe(t) {
        for (; ! t.__brush;) if (! (t = t.parentNode)) return;
        return t.__brush
    }
    function ge(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1]
    }
    function ve() {
        return ye(Vw)
    }
    function ye(t) {
        function n(n) {
            var r = n.property("__brush", o).selectAll(".overlay").data([le("overlay")]);
            r.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Gw.overlay).merge(r).each(function() {
                var t = pe(this).extent;
                E_(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }),
            n.selectAll(".selection").data([le("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Gw.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var i = n.selectAll(".handle").data(t.handles,
            function(t) {
                return t.type
            });
            i.exit().remove(),
            i.enter().append("rect").attr("class",
            function(t) {
                return "handle handle--" + t.type
            }).attr("cursor",
            function(t) {
                return Gw[t.type]
            }),
            n.each(e).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", a)
        }
        function e() {
            var t = E_(this),
            n = pe(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x",
            function(t) {
                return "e" === t.type[t.type.length - 1] ? n[1][0] - l / 2 : n[0][0] - l / 2
            }).attr("y",
            function(t) {
                return "s" === t.type[0] ? n[1][1] - l / 2 : n[0][1] - l / 2
            }).attr("width",
            function(t) {
                return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + l: l
            }).attr("height",
            function(t) {
                return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + l: l
            })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }
        function r(t, n) {
            return t.__brush.emitter || new i(t, n)
        }
        function i(t, n) {
            this.that = t,
            this.args = n,
            this.state = t.__brush,
            this.active = 0
        }
        function a() {
            function n() {
                var t = w_(x); ! U || m || _ || (Math.abs(t[0] - L[0]) > Math.abs(t[1] - L[1]) ? _ = !0 : m = !0),
                L = t,
                b = !0,
                qw(),
                i()
            }
            function i() {
                var t;
                switch (v = L[0] - P[0], y = L[1] - P[1], M) {
                case Xw:
                case Iw:
                    S && (v = Math.max(N - o, Math.min(D - h, v)), c = o + v, d = h + v),
                    A && (y = Math.max(E - s, Math.min(z - p, y)), l = s + y, g = p + y);
                    break;
                case Bw:
                    S < 0 ? (v = Math.max(N - o, Math.min(D - o, v)), c = o + v, d = h) : S > 0 && (v = Math.max(N - h, Math.min(D - h, v)), c = o, d = h + v),
                    A < 0 ? (y = Math.max(E - s, Math.min(z - s, y)), l = s + y, g = p) : A > 0 && (y = Math.max(E - p, Math.min(z - p, y)), l = s, g = p + y);
                    break;
                case Ww:
                    S && (c = Math.max(N, Math.min(D, o - v * S)), d = Math.max(N, Math.min(D, h + v * S))),
                    A && (l = Math.max(E, Math.min(z, s - y * A)), g = Math.max(E, Math.min(z, p + y * A)))
                }
                d < c && (S *= -1, t = o, o = h, h = t, t = c, c = d, d = t, w in Jw && H.attr("cursor", Gw[w = Jw[w]])),
                g < l && (A *= -1, t = s, s = p, p = t, t = l, l = g, g = t, w in Qw && H.attr("cursor", Gw[w = Qw[w]])),
                T.selection && (C = T.selection),
                m && (c = C[0][0], d = C[1][0]),
                _ && (l = C[0][1], g = C[1][1]),
                C[0][0] === c && C[0][1] === l && C[1][0] === d && C[1][1] === g || (T.selection = [[c, l], [d, g]], e.call(x), F.brush())
            }
            function a() {
                if (se(), m_.touches) {
                    if (m_.touches.length) return;
                    u && clearTimeout(u),
                    u = setTimeout(function() {
                        u = null
                    },
                    500),
                    R.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else _t(m_.view, b),
                O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                R.attr("pointer-events", "all"),
                H.attr("cursor", Gw.overlay),
                T.selection && (C = T.selection),
                ge(C) && (T.selection = null, e.call(x)),
                F.end()
            }
            if (m_.touches) {
                if (m_.changedTouches.length < m_.touches.length) return qw()
            } else if (u) return;
            if (f.apply(this, arguments)) {
                var o, c, s, l, h, d, p, g, v, y, b, m, _, x = this,
                w = m_.target.__data__.type,
                M = "selection" === (m_.metaKey ? w = "overlay": w) ? Iw: m_.altKey ? Ww: Bw,
                S = t === $w ? null: Kw[w],
                A = t === Vw ? null: tM[w],
                T = pe(x),
                k = T.extent,
                C = T.selection,
                N = k[0][0],
                E = k[0][1],
                D = k[1][0],
                z = k[1][1],
                U = S && A && m_.shiftKey,
                P = w_(x),
                L = P,
                F = r(x, arguments).beforestart();
                "overlay" === w ? T.selection = C = [[o = t === $w ? N: P[0], s = t === Vw ? E: P[1]], [h = t === $w ? D: o, p = t === Vw ? z: s]] : (o = C[0][0], s = C[0][1], h = C[1][0], p = C[1][1]),
                c = o,
                l = s,
                d = h,
                g = p;
                var R = E_(x).attr("pointer-events", "none"),
                H = R.selectAll(".overlay").attr("cursor", Gw[w]);
                if (m_.touches) R.on("touchmove.brush", n, !0).on("touchend.brush touchcancel.brush", a, !0);
                else {
                    var O = E_(m_.view).on("keydown.brush",
                    function() {
                        switch (m_.keyCode) {
                        case 16:
                            U = S && A;
                            break;
                        case 18:
                            M === Bw && (S && (h = d - v * S, o = c + v * S), A && (p = g - y * A, s = l + y * A), M = Ww, i());
                            break;
                        case 32:
                            M !== Bw && M !== Ww || (S < 0 ? h = d - v: S > 0 && (o = c - v), A < 0 ? p = g - y: A > 0 && (s = l - y), M = Xw, H.attr("cursor", Gw.selection), i());
                            break;
                        default:
                            return
                        }
                        qw()
                    },
                    !0).on("keyup.brush",
                    function() {
                        switch (m_.keyCode) {
                        case 16:
                            U && (m = _ = U = !1, i());
                            break;
                        case 18:
                            M === Ww && (S < 0 ? h = d: S > 0 && (o = c), A < 0 ? p = g: A > 0 && (s = l), M = Bw, i());
                            break;
                        case 32:
                            M === Xw && (m_.altKey ? (S && (h = d - v * S, o = c + v * S), A && (p = g - y * A, s = l + y * A), M = Ww) : (S < 0 ? h = d: S > 0 && (o = c), A < 0 ? p = g: A > 0 && (s = l), M = Bw), H.attr("cursor", Gw[w]), i());
                            break;
                        default:
                            return
                        }
                        qw()
                    },
                    !0).on("mousemove.brush", n, !0).on("mouseup.brush", a, !0);
                    U_(m_.view)
                }
                se(),
                lw(x),
                e.call(x),
                F.start()
            }
        }
        function o() {
            var n = this.__brush || {
                selection: null
            };
            return n.extent = c.apply(this, arguments),
            n.dim = t,
            n
        }
        var u, c = de,
        f = he,
        s = v(n, "start", "brush", "end"),
        l = 6;
        return n.move = function(n, i) {
            n.selection ? n.on("start.brush",
            function() {
                r(this, arguments).beforestart().start()
            }).on("interrupt.brush end.brush",
            function() {
                r(this, arguments).end()
            }).tween("brush",
            function() {
                function n(t) {
                    o.selection = 1 === t && ge(f) ? null: s(t),
                    e.call(a),
                    u.brush()
                }
                var a = this,
                o = a.__brush,
                u = r(a, arguments),
                c = o.selection,
                f = t.input("function" == typeof i ? i.apply(this, arguments) : i, o.extent),
                s = Ex(c, f);
                return c && f ? n: n(1)
            }) : n.each(function() {
                var n = this,
                a = arguments,
                o = n.__brush,
                u = t.input("function" == typeof i ? i.apply(n, a) : i, o.extent),
                c = r(n, a).beforestart();
                lw(n),
                o.selection = null == u || ge(u) ? null: u,
                e.call(n),
                c.start().brush().end()
            })
        },
        i.prototype = {
            beforestart: function() {
                return 1 == ++this.active && (this.state.emitter = this, this.starting = !0),
                this
            },
            start: function() {
                return this.starting && (this.starting = !1, this.emit("start")),
                this
            },
            brush: function() {
                return this.emit("brush"),
                this
            },
            end: function() {
                return 0 == --this.active && (delete this.state.emitter, this.emit("end")),
                this
            },
            emit: function(e) {
                E(new jw(n, e, t.output(this.state.selection)), s.apply, s, [e, this.that, this.args])
            }
        },
        n.extent = function(t) {
            return arguments.length ? (c = "function" == typeof t ? t: Yw([[ + t[0][0], +t[0][1]], [ + t[1][0], +t[1][1]]]), n) : c
        },
        n.filter = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t: Yw( !! t), n) : f
        },
        n.handleSize = function(t) {
            return arguments.length ? (l = +t, n) : l
        },
        n.on = function() {
            var t = s.on.apply(s, arguments);
            return t === s ? n: t
        },
        n
    }
    function be(t) {
        return function(n, e) {
            return t(n.source.value + n.target.value, e.source.value + e.target.value)
        }
    }
    function me() {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = ""
    }
    function _e() {
        return new me
    }
    function xe(t) {
        return t.source
    }
    function we(t) {
        return t.target
    }
    function Me(t) {
        return t.radius
    }
    function Se(t) {
        return t.startAngle
    }
    function Ae(t) {
        return t.endAngle
    }
    function Te() {}
    function ke(t, n) {
        var e = new Te;
        if (t instanceof Te) t.each(function(t, n) {
            e.set(n, t)
        });
        else if (Array.isArray(t)) {
            var r, i = -1,
            a = t.length;
            if (null == n) for (; ++i < a;) e.set(i, t[i]);
            else for (; ++i < a;) e.set(n(r = t[i], i, t), r)
        } else if (t) for (var o in t) e.set(o, t[o]);
        return e
    }
    function Ce() {
        return {}
    }
    function Ne(t, n, e) {
        t[n] = e
    }
    function Ee() {
        return ke()
    }
    function De(t, n, e) {
        t.set(n, e)
    }
    function ze() {}
    function Ue(t, n) {
        var e = new ze;
        if (t instanceof ze) t.each(function(t) {
            e.add(t)
        });
        else if (t) {
            var r = -1,
            i = t.length;
            if (null == n) for (; ++r < i;) e.add(t[r]);
            else for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }
    function Pe(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }
    function Le(t, n) {
        var e = Pe(t);
        return function(r, i) {
            return n(e(r), i, t)
        }
    }
    function Fe(t) {
        var n = Object.create(null),
        e = [];
        return t.forEach(function(t) {
            for (var r in t) r in n || e.push(n[r] = r)
        }),
        e
    }
    function Re(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, a, o, u, c, f, s, l, h, d = t._root,
        p = {
            data: r
        },
        g = t._x0,
        v = t._y0,
        y = t._x1,
        b = t._y1;
        if (!d) return t._root = p,
        t;
        for (; d.length;) if ((f = n >= (a = (g + y) / 2)) ? g = a: y = a, (s = e >= (o = (v + b) / 2)) ? v = o: b = o, i = d, !(d = d[l = s << 1 | f])) return i[l] = p,
        t;
        if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d,
        i ? i[l] = p: t._root = p,
        t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (a = (g + y) / 2)) ? g = a: y = a, (s = e >= (o = (v + b) / 2)) ? v = o: b = o
        } while (( l = s << 1 | f ) == (h = (c >= o) << 1 | u >= a));
        return i[h] = d,
        i[l] = p,
        t
    }
    function He(t) {
        return t[0]
    }
    function Oe(t) {
        return t[1]
    }
    function Ye(t, n, e) {
        var r = new je(null == n ? He: n, null == e ? Oe: e, NaN, NaN, NaN, NaN);
        return null == t ? r: r.addAll(t)
    }
    function je(t, n, e, r, i, a) {
        this._x = t,
        this._y = n,
        this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this._root = void 0
    }
    function qe(t) {
        for (var n = {
            data: t.data
        },
        e = n; t = t.next;) e = e.next = {
            data: t.data
        };
        return n
    }
    function Ie(t) {
        return t.x + t.vx
    }
    function Xe(t) {
        return t.y + t.vy
    }
    function Be(t) {
        return t.index
    }
    function We(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e
    }
    function Ve(t) {
        return t.x
    }
    function $e(t) {
        return t.y
    }
    function Ze(t) {
        return new Ge(t)
    }
    function Ge(t) {
        if (! (n = qM.exec(t))) throw new Error("invalid format: " + t);
        var n, e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        a = n[4] || "",
        o = !!n[5],
        u = n[6] && +n[6],
        c = !!n[7],
        f = n[8] && +n[8].slice(1),
        s = n[9] || "";
        "n" === s ? (c = !0, s = "g") : jM[s] || (s = ""),
        (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="),
        this.fill = e,
        this.align = r,
        this.sign = i,
        this.symbol = a,
        this.zero = o,
        this.width = u,
        this.comma = c,
        this.precision = f,
        this.type = s
    }
    function Je(t) {
        return IM = $M(t),
        XM = IM.format,
        BM = IM.formatPrefix,
        IM
    }
    function Qe() {
        this.reset()
    }
    function Ke(t, n, e) {
        var r = t.s = n + e,
        i = r - n,
        a = r - i;
        t.t = n - a + (e - i)
    }
    function tr(t) {
        return t > 1 ? 0 : t < -1 ? zS: Math.acos(t)
    }
    function nr(t) {
        return t > 1 ? US: t < -1 ? -US: Math.asin(t)
    }
    function er(t) {
        return (t = WS(t / 2)) * t
    }
    function rr() {}
    function ir(t, n) {
        t && JS.hasOwnProperty(t.type) && JS[t.type](t, n)
    }
    function ar(t, n, e) {
        var r, i = -1,
        a = t.length - e;
        for (n.lineStart(); ++i < a;) r = t[i],
        n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }
    function or(t, n) {
        var e = -1,
        r = t.length;
        for (n.polygonStart(); ++e < r;) ar(t[e], n, 1);
        n.polygonEnd()
    }
    function ur() {
        nA.point = fr
    }
    function cr() {
        sr(KM, tS)
    }
    function fr(t, n) {
        nA.point = sr,
        KM = t,
        tS = n,
        nS = t *= RS,
        eS = jS(n = (n *= RS) / 2 + PS),
        rS = WS(n)
    }
    function sr(t, n) {
        n = (n *= RS) / 2 + PS;
        var e = (t *= RS) - nS,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        a = jS(n),
        o = WS(n),
        u = rS * o,
        c = eS * a + u * jS(i),
        f = u * r * WS(i);
        KS.add(YS(f, c)),
        nS = t,
        eS = a,
        rS = o
    }
    function lr(t) {
        return [YS(t[1], t[0]), nr(t[2])]
    }
    function hr(t) {
        var n = t[0],
        e = t[1],
        r = jS(e);
        return [r * jS(n), r * WS(n), WS(e)]
    }
    function dr(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }
    function pr(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }
    function gr(t, n) {
        t[0] += n[0],
        t[1] += n[1],
        t[2] += n[2]
    }
    function vr(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }
    function yr(t) {
        var n = $S(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n,
        t[1] /= n,
        t[2] /= n
    }
    function br(t, n) {
        hS.push(dS = [iS = t, oS = t]),
        n < aS && (aS = n),
        n > uS && (uS = n)
    }
    function mr(t, n) {
        var e = hr([t * RS, n * RS]);
        if (lS) {
            var r = pr(lS, e),
            i = pr([r[1], -r[0], 0], r);
            yr(i),
            i = lr(i);
            var a, o = t - cS,
            u = o > 0 ? 1 : -1,
            c = i[0] * FS * u,
            f = HS(o) > 180;
            f ^ (u * cS < c && c < u * t) ? (a = i[1] * FS) > uS && (uS = a) : (c = (c + 360) % 360 - 180, f ^ (u * cS < c && c < u * t) ? (a = -i[1] * FS) < aS && (aS = a) : (n < aS && (aS = n), n > uS && (uS = n))),
            f ? t < cS ? Ar(iS, t) > Ar(iS, oS) && (oS = t) : Ar(t, oS) > Ar(iS, oS) && (iS = t) : oS >= iS ? (t < iS && (iS = t), t > oS && (oS = t)) : t > cS ? Ar(iS, t) > Ar(iS, oS) && (oS = t) : Ar(t, oS) > Ar(iS, oS) && (iS = t)
        } else hS.push(dS = [iS = t, oS = t]);
        n < aS && (aS = n),
        n > uS && (uS = n),
        lS = e,
        cS = t
    }
    function _r() {
        rA.point = mr
    }
    function xr() {
        dS[0] = iS,
        dS[1] = oS,
        rA.point = br,
        lS = null
    }
    function wr(t, n) {
        if (lS) {
            var e = t - cS;
            eA.add(HS(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else fS = t,
        sS = n;
        nA.point(t, n),
        mr(t, n)
    }
    function Mr() {
        nA.lineStart()
    }
    function Sr() {
        wr(fS, sS),
        nA.lineEnd(),
        HS(eA) > DS && (iS = -(oS = 180)),
        dS[0] = iS,
        dS[1] = oS,
        lS = null
    }
    function Ar(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }
    function Tr(t, n) {
        return t[0] - n[0]
    }
    function kr(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }
    function Cr(t, n) {
        t *= RS;
        var e = jS(n *= RS);
        Nr(e * jS(t), e * WS(t), WS(n))
    }
    function Nr(t, n, e) {
        vS += (t - vS) / ++pS,
        yS += (n - yS) / pS,
        bS += (e - bS) / pS
    }
    function Er() {
        iA.point = Dr
    }
    function Dr(t, n) {
        t *= RS;
        var e = jS(n *= RS);
        kS = e * jS(t),
        CS = e * WS(t),
        NS = WS(n),
        iA.point = zr,
        Nr(kS, CS, NS)
    }
    function zr(t, n) {
        t *= RS;
        var e = jS(n *= RS),
        r = e * jS(t),
        i = e * WS(t),
        a = WS(n),
        o = YS($S((o = CS * a - NS * i) * o + (o = NS * r - kS * a) * o + (o = kS * i - CS * r) * o), kS * r + CS * i + NS * a);
        gS += o,
        mS += o * (kS + (kS = r)),
        _S += o * (CS + (CS = i)),
        xS += o * (NS + (NS = a)),
        Nr(kS, CS, NS)
    }
    function Ur() {
        iA.point = Cr
    }
    function Pr() {
        iA.point = Fr
    }
    function Lr() {
        Rr(AS, TS),
        iA.point = Cr
    }
    function Fr(t, n) {
        AS = t,
        TS = n,
        t *= RS,
        n *= RS,
        iA.point = Rr;
        var e = jS(n);
        kS = e * jS(t),
        CS = e * WS(t),
        NS = WS(n),
        Nr(kS, CS, NS)
    }
    function Rr(t, n) {
        t *= RS;
        var e = jS(n *= RS),
        r = e * jS(t),
        i = e * WS(t),
        a = WS(n),
        o = CS * a - NS * i,
        u = NS * r - kS * a,
        c = kS * i - CS * r,
        f = $S(o * o + u * u + c * c),
        s = nr(f),
        l = f && -s / f;
        wS += l * o,
        MS += l * u,
        SS += l * c,
        gS += s,
        mS += s * (kS + (kS = r)),
        _S += s * (CS + (CS = i)),
        xS += s * (NS + (NS = a)),
        Nr(kS, CS, NS)
    }
    function Hr(t, n) {
        return [t > zS ? t - LS: t < -zS ? t + LS: t, n]
    }
    function Or(t, n, e) {
        return (t %= LS) ? n || e ? oA(jr(t), qr(n, e)) : jr(t) : n || e ? qr(n, e) : Hr
    }
    function Yr(t) {
        return function(n, e) {
            return n += t,
            [n > zS ? n - LS: n < -zS ? n + LS: n, e]
        }
    }
    function jr(t) {
        var n = Yr(t);
        return n.invert = Yr( - t),
        n
    }
    function qr(t, n) {
        function e(t, n) {
            var e = jS(n),
            u = jS(t) * e,
            c = WS(t) * e,
            f = WS(n),
            s = f * r + u * i;
            return [YS(c * a - s * o, u * r - f * i), nr(s * a + c * o)]
        }
        var r = jS(t),
        i = WS(t),
        a = jS(n),
        o = WS(n);
        return e.invert = function(t, n) {
            var e = jS(n),
            u = jS(t) * e,
            c = WS(t) * e,
            f = WS(n),
            s = f * a - c * o;
            return [YS(c * a + f * o, u * r + s * i), nr(s * r - u * i)]
        },
        e
    }
    function Ir(t, n, e, r, i, a) {
        if (e) {
            var o = jS(n),
            u = WS(n),
            c = r * e;
            null == i ? (i = n + r * LS, a = n - c / 2) : (i = Xr(o, i), a = Xr(o, a), (r > 0 ? i < a: i > a) && (i += r * LS));
            for (var f, s = i; r > 0 ? s > a: s < a; s -= c) f = lr([o, -u * jS(s), -u * WS(s)]),
            t.point(f[0], f[1])
        }
    }
    function Xr(t, n) { (n = hr(n))[0] -= t,
        yr(n);
        var e = tr( - n[1]);
        return (( - n[2] < 0 ? -e: e) + LS - DS) % LS
    }
    function Br(t, n, e, r) {
        this.x = t,
        this.z = n,
        this.o = e,
        this.e = r,
        this.v = !1,
        this.n = this.p = null
    }
    function Wr(t) {
        if (n = t.length) {
            for (var n, e, r = 0,
            i = t[0]; ++r < n;) i.n = e = t[r],
            e.p = i,
            i = e;
            i.n = e = t[0],
            e.p = i
        }
    }
    function Vr(t) {
        return t.length > 1
    }
    function $r(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - US - DS: US - t[1]) - ((n = n.x)[0] < 0 ? n[1] - US - DS: US - n[1])
    }
    function Zr(t, n, e, r) {
        var i, a, o = WS(t - e);
        return HS(o) > DS ? OS((WS(n) * (a = jS(r)) * WS(e) - WS(r) * (i = jS(n)) * WS(t)) / (i * a * o)) : (n + r) / 2
    }
    function Gr(t, n, e, r) {
        function i(i, a) {
            return t <= i && i <= e && n <= a && a <= r
        }
        function a(i, a, u, f) {
            var s = 0,
            l = 0;
            if (null == i || (s = o(i, u)) !== (l = o(a, u)) || c(i, a) < 0 ^ u > 0) do {
                f.point(0 === s || 3 === s ? t: e, s > 1 ? r: n)
            } while (( s = ( s + u + 4 ) % 4) !== l);
            else f.point(a[0], a[1])
        }
        function o(r, i) {
            return HS(r[0] - t) < DS ? i > 0 ? 0 : 3 : HS(r[0] - e) < DS ? i > 0 ? 2 : 1 : HS(r[1] - n) < DS ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }
        function u(t, n) {
            return c(t.x, n.x)
        }
        function c(t, n) {
            var e = o(t, 1),
            r = o(n, 1);
            return e !== r ? e - r: 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function(o) {
            function c(t, n) {
                i(t, n) && w.point(t, n)
            }
            function f() {
                for (var n = 0,
                e = 0,
                i = h.length; e < i; ++e) for (var a, o, u = h[e], c = 1, f = u.length, s = u[0], l = s[0], d = s[1]; c < f; ++c) a = l,
                o = d,
                l = (s = u[c])[0],
                d = s[1],
                o <= r ? d > r && (l - a) * (r - o) > (d - o) * (t - a) && ++n: d <= r && (l - a) * (r - o) < (d - o) * (t - a) && --n;
                return n
            }
            function s(a, o) {
                var u = i(a, o);
                if (h && d.push([a, o]), _) p = a,
                g = o,
                v = u,
                _ = !1,
                u && (w.lineStart(), w.point(a, o));
                else if (u && m) w.point(a, o);
                else {
                    var c = [y = Math.max(NA, Math.min(CA, y)), b = Math.max(NA, Math.min(CA, b))],
                    f = [a = Math.max(NA, Math.min(CA, a)), o = Math.max(NA, Math.min(CA, o))];
                    kA(c, f, t, n, e, r) ? (m || (w.lineStart(), w.point(c[0], c[1])), w.point(f[0], f[1]), u || w.lineEnd(), x = !1) : u && (w.lineStart(), w.point(a, o), x = !1)
                }
                y = a,
                b = o,
                m = u
            }
            var l, h, d, p, g, v, y, b, m, _, x, w = o,
            M = mA(),
            S = {
                point: c,
                lineStart: function() {
                    S.point = s,
                    h && h.push(d = []),
                    _ = !0,
                    m = !1,
                    y = b = NaN
                },
                lineEnd: function() {
                    l && (s(p, g), v && m && M.rejoin(), l.push(M.result())),
                    S.point = c,
                    m && w.lineEnd()
                },
                polygonStart: function() {
                    w = M,
                    l = [],
                    h = [],
                    x = !0
                },
                polygonEnd: function() {
                    var t = f(),
                    n = x && t,
                    e = (l = Qm(l)).length; (n || e) && (o.polygonStart(), n && (o.lineStart(), a(null, null, 1, o), o.lineEnd()), e && xA(l, u, t, a, o), o.polygonEnd()),
                    w = o,
                    l = h = d = null
                }
            };
            return S
        }
    }
    function Jr() {
        DA.point = DA.lineEnd = rr
    }
    function Qr(t, n) {
        uA = t *= RS,
        cA = WS(n *= RS),
        fA = jS(n),
        DA.point = Kr
    }
    function Kr(t, n) {
        t *= RS;
        var e = WS(n *= RS),
        r = jS(n),
        i = HS(t - uA),
        a = jS(i),
        o = r * WS(i),
        u = fA * e - cA * r * a,
        c = cA * e + fA * r * a;
        EA.add(YS($S(o * o + u * u), c)),
        uA = t,
        cA = e,
        fA = r
    }
    function ti(t, n) {
        return ! (!t || !RA.hasOwnProperty(t.type)) && RA[t.type](t, n)
    }
    function ni(t, n) {
        return 0 === LA(t, n)
    }
    function ei(t, n) {
        var e = LA(t[0], t[1]);
        return LA(t[0], n) + LA(n, t[1]) <= e + DS
    }
    function ri(t, n) {
        return !! MA(t.map(ii), ai(n))
    }
    function ii(t) {
        return (t = t.map(ai)).pop(),
        t
    }
    function ai(t) {
        return [t[0] * RS, t[1] * RS]
    }
    function oi(t, n, e) {
        var r = Xm(t, n - DS, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [t, n]
            })
        }
    }
    function ui(t, n, e) {
        var r = Xm(t, n - DS, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [n, t]
            })
        }
    }
    function ci() {
        function t() {
            return {
                type: "MultiLineString",
                coordinates: n()
            }
        }
        function n() {
            return Xm(qS(a / v) * v, i, v).map(h).concat(Xm(qS(f / y) * y, c, y).map(d)).concat(Xm(qS(r / p) * p, e, p).filter(function(t) {
                return HS(t % v) > DS
            }).map(s)).concat(Xm(qS(u / g) * g, o, g).filter(function(t) {
                return HS(t % y) > DS
            }).map(l))
        }
        var e, r, i, a, o, u, c, f, s, l, h, d, p = 10,
        g = p,
        v = 90,
        y = 360,
        b = 2.5;
        return t.lines = function() {
            return n().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        },
        t.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(a).concat(d(c).slice(1), h(i).reverse().slice(1), d(f).reverse().slice(1))]
            }
        },
        t.extent = function(n) {
            return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
        },
        t.extentMajor = function(n) {
            return arguments.length ? (a = +n[0][0], i = +n[1][0], f = +n[0][1], c = +n[1][1], a > i && (n = a, a = i, i = n), f > c && (n = f, f = c, c = n), t.precision(b)) : [[a, f], [i, c]]
        },
        t.extentMinor = function(n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], o = +n[1][1], r > e && (n = r, r = e, e = n), u > o && (n = u, u = o, o = n), t.precision(b)) : [[r, u], [e, o]]
        },
        t.step = function(n) {
            return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
        },
        t.stepMajor = function(n) {
            return arguments.length ? (v = +n[0], y = +n[1], t) : [v, y]
        },
        t.stepMinor = function(n) {
            return arguments.length ? (p = +n[0], g = +n[1], t) : [p, g]
        },
        t.precision = function(n) {
            return arguments.length ? (b = +n, s = oi(u, o, 90), l = ui(r, e, b), h = oi(f, c, 90), d = ui(a, i, b), t) : b
        },
        t.extentMajor([[ - 180, -90 + DS], [180, 90 - DS]]).extentMinor([[ - 180, -80 - DS], [180, 80 + DS]])
    }
    function fi() {
        jA.point = si
    }
    function si(t, n) {
        jA.point = li,
        sA = hA = t,
        lA = dA = n
    }
    function li(t, n) {
        YA.add(dA * t - hA * n),
        hA = t,
        dA = n
    }
    function hi() {
        li(sA, lA)
    }
    function di(t, n) {
        VA += t,
        $A += n,
        ++ZA
    }
    function pi() {
        eT.point = gi
    }
    function gi(t, n) {
        eT.point = vi,
        di(vA = t, yA = n)
    }
    function vi(t, n) {
        var e = t - vA,
        r = n - yA,
        i = $S(e * e + r * r);
        GA += i * (vA + t) / 2,
        JA += i * (yA + n) / 2,
        QA += i,
        di(vA = t, yA = n)
    }
    function yi() {
        eT.point = di
    }
    function bi() {
        eT.point = _i
    }
    function mi() {
        xi(pA, gA)
    }
    function _i(t, n) {
        eT.point = xi,
        di(pA = vA = t, gA = yA = n)
    }
    function xi(t, n) {
        var e = t - vA,
        r = n - yA,
        i = $S(e * e + r * r);
        GA += i * (vA + t) / 2,
        JA += i * (yA + n) / 2,
        QA += i,
        KA += (i = yA * t - vA * n) * (vA + t),
        tT += i * (yA + n),
        nT += 3 * i,
        di(vA = t, yA = n)
    }
    function wi(t) {
        this._context = t
    }
    function Mi(t, n) {
        fT.point = Si,
        iT = oT = t,
        aT = uT = n
    }
    function Si(t, n) {
        oT -= t,
        uT -= n,
        cT.add($S(oT * oT + uT * uT)),
        oT = t,
        uT = n
    }
    function Ai() {
        this._string = []
    }
    function Ti(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    function ki(t) {
        return function(n) {
            var e = new Ci;
            for (var r in t) e[r] = t[r];
            return e.stream = n,
            e
        }
    }
    function Ci() {}
    function Ni(t, n, e) {
        var r = n[1][0] - n[0][0],
        i = n[1][1] - n[0][1],
        a = t.clipExtent && t.clipExtent();
        t.scale(150).translate([0, 0]),
        null != a && t.clipExtent(null),
        QS(e, t.stream(WA));
        var o = WA.result(),
        u = Math.min(r / (o[1][0] - o[0][0]), i / (o[1][1] - o[0][1])),
        c = +n[0][0] + (r - u * (o[1][0] + o[0][0])) / 2,
        f = +n[0][1] + (i - u * (o[1][1] + o[0][1])) / 2;
        return null != a && t.clipExtent(a),
        t.scale(150 * u).translate([c, f])
    }
    function Ei(t, n, e) {
        return Ni(t, [[0, 0], n], e)
    }
    function Di(t) {
        return ki({
            point: function(n, e) {
                n = t(n, e),
                this.stream.point(n[0], n[1])
            }
        })
    }
    function zi(t, n) {
        function e(r, i, a, o, u, c, f, s, l, h, d, p, g, v) {
            var y = f - r,
            b = s - i,
            m = y * y + b * b;
            if (m > 4 * n && g--) {
                var _ = o + h,
                x = u + d,
                w = c + p,
                M = $S(_ * _ + x * x + w * w),
                S = nr(w /= M),
                A = HS(HS(w) - 1) < DS || HS(a - l) < DS ? (a + l) / 2 : YS(x, _),
                T = t(A, S),
                k = T[0],
                C = T[1],
                N = k - r,
                E = C - i,
                D = b * N - y * E; (D * D / m > n || HS((y * N + b * E) / m - .5) > .3 || o * h + u * d + c * p < lT) && (e(r, i, a, o, u, c, k, C, A, _ /= M, x /= M, w, g, v), v.point(k, C), e(k, C, A, _, x, w, f, s, l, h, d, p, g, v))
            }
        }
        return function(n) {
            function r(e, r) {
                e = t(e, r),
                n.point(e[0], e[1])
            }
            function i() {
                y = NaN,
                w.point = a,
                n.lineStart()
            }
            function a(r, i) {
                var a = hr([r, i]),
                o = t(r, i);
                e(y, b, v, m, _, x, y = o[0], b = o[1], v = r, m = a[0], _ = a[1], x = a[2], sT, n),
                n.point(y, b)
            }
            function o() {
                w.point = r,
                n.lineEnd()
            }
            function u() {
                i(),
                w.point = c,
                w.lineEnd = f
            }
            function c(t, n) {
                a(s = t, n),
                l = y,
                h = b,
                d = m,
                p = _,
                g = x,
                w.point = a
            }
            function f() {
                e(y, b, v, m, _, x, l, h, s, d, p, g, sT, n),
                w.lineEnd = o,
                o()
            }
            var s, l, h, d, p, g, v, y, b, m, _, x, w = {
                point: r,
                lineStart: i,
                lineEnd: o,
                polygonStart: function() {
                    n.polygonStart(),
                    w.lineStart = u
                },
                polygonEnd: function() {
                    n.polygonEnd(),
                    w.lineStart = i
                }
            };
            return w
        }
    }
    function Ui(t) {
        return ki({
            point: function(n, e) {
                var r = t(n, e);
                return this.stream.point(r[0], r[1])
            }
        })
    }
    function Pi(t) {
        return Li(function() {
            return t
        })()
    }
    function Li(t) {
        function n(t) {
            return t = s(t[0] * RS, t[1] * RS),
            [t[0] * v + u, c - t[1] * v]
        }
        function e(t) {
            return (t = s.invert((t[0] - u) / v, (c - t[1]) / v)) && [t[0] * FS, t[1] * FS]
        }
        function r(t, n) {
            return t = o(t, n),
            [t[0] * v + u, c - t[1] * v]
        }
        function i() {
            s = oA(f = Or(x, w, M), o);
            var t = o(m, _);
            return u = y - t[0] * v,
            c = b + t[1] * v,
            a()
        }
        function a() {
            return p = g = null,
            n
        }
        var o, u, c, f, s, l, h, d, p, g, v = 150,
        y = 480,
        b = 250,
        m = 0,
        _ = 0,
        x = 0,
        w = 0,
        M = 0,
        S = null,
        A = AA,
        T = null,
        k = HA,
        C = .5,
        N = hT(r, C);
        return n.stream = function(t) {
            return p && g === t ? p: p = dT(Ui(f)(A(N(k(g = t)))))
        },
        n.preclip = function(t) {
            return arguments.length ? (A = t, S = void 0, a()) : A
        },
        n.postclip = function(t) {
            return arguments.length ? (k = t, T = l = h = d = null, a()) : k
        },
        n.clipAngle = function(t) {
            return arguments.length ? (A = +t ? TA(S = t * RS) : (S = null, AA), a()) : S * FS
        },
        n.clipExtent = function(t) {
            return arguments.length ? (k = null == t ? (T = l = h = d = null, HA) : Gr(T = +t[0][0], l = +t[0][1], h = +t[1][0], d = +t[1][1]), a()) : null == T ? null: [[T, l], [h, d]]
        },
        n.scale = function(t) {
            return arguments.length ? (v = +t, i()) : v
        },
        n.translate = function(t) {
            return arguments.length ? (y = +t[0], b = +t[1], i()) : [y, b]
        },
        n.center = function(t) {
            return arguments.length ? (m = t[0] % 360 * RS, _ = t[1] % 360 * RS, i()) : [m * FS, _ * FS]
        },
        n.rotate = function(t) {
            return arguments.length ? (x = t[0] % 360 * RS, w = t[1] % 360 * RS, M = t.length > 2 ? t[2] % 360 * RS: 0, i()) : [x * FS, w * FS, M * FS]
        },
        n.precision = function(t) {
            return arguments.length ? (N = hT(r, C = t * t), a()) : $S(C)
        },
        n.fitExtent = function(t, e) {
            return Ni(n, t, e)
        },
        n.fitSize = function(t, e) {
            return Ei(n, t, e)
        },
        function() {
            return o = t.apply(this, arguments),
            n.invert = o.invert && e,
            i()
        }
    }
    function Fi(t) {
        var n = 0,
        e = zS / 3,
        r = Li(t),
        i = r(n, e);
        return i.parallels = function(t) {
            return arguments.length ? r(n = t[0] * RS, e = t[1] * RS) : [n * FS, e * FS]
        },
        i
    }
    function Ri(t) {
        function n(t, n) {
            return [t * e, WS(n) / e]
        }
        var e = jS(t);
        return n.invert = function(t, n) {
            return [t / e, nr(n * e)]
        },
        n
    }
    function Hi(t, n) {
        function e(t, n) {
            var e = $S(a - 2 * i * WS(n)) / i;
            return [e * WS(t *= i), o - e * jS(t)]
        }
        var r = WS(t),
        i = (r + WS(n)) / 2;
        if (HS(i) < DS) return Ri(t);
        var a = 1 + r * (2 * i - r),
        o = $S(a) / i;
        return e.invert = function(t, n) {
            var e = o - n;
            return [YS(t, HS(e)) / i * VS(e), nr((a - (t * t + e * e) * i * i) / (2 * i))]
        },
        e
    }
    function Oi(t) {
        var n = t.length;
        return {
            point: function(e, r) {
                for (var i = -1; ++i < n;) t[i].point(e, r)
            },
            sphere: function() {
                for (var e = -1; ++e < n;) t[e].sphere()
            },
            lineStart: function() {
                for (var e = -1; ++e < n;) t[e].lineStart()
            },
            lineEnd: function() {
                for (var e = -1; ++e < n;) t[e].lineEnd()
            },
            polygonStart: function() {
                for (var e = -1; ++e < n;) t[e].polygonStart()
            },
            polygonEnd: function() {
                for (var e = -1; ++e < n;) t[e].polygonEnd()
            }
        }
    }
    function Yi(t) {
        return function(n, e) {
            var r = jS(n),
            i = jS(e),
            a = t(r * i);
            return [a * i * WS(n), a * WS(e)]
        }
    }
    function ji(t) {
        return function(n, e) {
            var r = $S(n * n + e * e),
            i = t(r),
            a = WS(i),
            o = jS(i);
            return [YS(n * a, r * o), nr(r && e * a / r)]
        }
    }
    function qi(t, n) {
        return [t, XS(ZS((US + n) / 2))]
    }
    function Ii(t) {
        function n() {
            var n = zS * u(),
            o = a(bA(a.rotate()).invert([0, 0]));
            return f(null == s ? [[o[0] - n, o[1] - n], [o[0] + n, o[1] + n]] : t === qi ? [[Math.max(o[0] - n, s), e], [Math.min(o[0] + n, r), i]] : [[s, Math.max(o[1] - n, e)], [r, Math.min(o[1] + n, i)]])
        }
        var e, r, i, a = Pi(t),
        o = a.center,
        u = a.scale,
        c = a.translate,
        f = a.clipExtent,
        s = null;
        return a.scale = function(t) {
            return arguments.length ? (u(t), n()) : u()
        },
        a.translate = function(t) {
            return arguments.length ? (c(t), n()) : c()
        },
        a.center = function(t) {
            return arguments.length ? (o(t), n()) : o()
        },
        a.clipExtent = function(t) {
            return arguments.length ? (null == t ? s = e = r = i = null: (s = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == s ? null: [[s, e], [r, i]]
        },
        n()
    }
    function Xi(t) {
        return ZS((US + t) / 2)
    }
    function Bi(t, n) {
        function e(t, n) {
            a > 0 ? n < -US + DS && (n = -US + DS) : n > US - DS && (n = US - DS);
            var e = a / BS(Xi(n), i);
            return [e * WS(i * t), a - e * jS(i * t)]
        }
        var r = jS(t),
        i = t === n ? WS(t) : XS(r / jS(n)) / XS(Xi(n) / Xi(t)),
        a = r * BS(Xi(t), i) / i;
        return i ? (e.invert = function(t, n) {
            var e = a - n,
            r = VS(i) * $S(t * t + e * e);
            return [YS(t, HS(e)) / i * VS(e), 2 * OS(BS(a / r, 1 / i)) - US]
        },
        e) : qi
    }
    function Wi(t, n) {
        return [t, n]
    }
    function Vi(t, n) {
        function e(t, n) {
            var e = a - n,
            r = i * t;
            return [e * WS(r), a - e * jS(r)]
        }
        var r = jS(t),
        i = t === n ? WS(t) : (r - jS(n)) / (n - t),
        a = r / i + t;
        return HS(i) < DS ? Wi: (e.invert = function(t, n) {
            var e = a - n;
            return [YS(t, HS(e)) / i * VS(e), a - VS(i) * $S(t * t + e * e)]
        },
        e)
    }
    function $i(t, n) {
        var e = jS(n),
        r = jS(t) * e;
        return [e * WS(t) / r, WS(n) / r]
    }
    function Zi(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r ? HA: ki({
            point: function(i, a) {
                this.stream.point(i * t + e, a * n + r)
            }
        })
    }
    function Gi(t, n) {
        var e = n * n,
        r = e * e;
        return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }
    function Ji(t, n) {
        return [jS(n) * WS(t), WS(n)]
    }
    function Qi(t, n) {
        var e = jS(n),
        r = 1 + jS(t) * e;
        return [e * WS(t) / r, WS(n) / r]
    }
    function Ki(t, n) {
        return [XS(ZS((US + n) / 2)), -t]
    }
    function ta(t, n) {
        return t.parent === n.parent ? 1 : 2
    }
    function na(t) {
        return t.reduce(ea, 0) / t.length
    }
    function ea(t, n) {
        return t + n.x
    }
    function ra(t) {
        return 1 + t.reduce(ia, 0)
    }
    function ia(t, n) {
        return Math.max(t, n.y)
    }
    function aa(t) {
        for (var n; n = t.children;) t = n[0];
        return t
    }
    function oa(t) {
        for (var n; n = t.children;) t = n[n.length - 1];
        return t
    }
    function ua(t) {
        var n = 0,
        e = t.children,
        r = e && e.length;
        if (r) for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n
    }
    function ca(t, n) {
        if (t === n) return t;
        var e = t.ancestors(),
        r = n.ancestors(),
        i = null;
        for (t = e.pop(), n = r.pop(); t === n;) i = t,
        t = e.pop(),
        n = r.pop();
        return i
    }
    function fa(t, n) {
        var e, r, i, a, o, u = new da(t),
        c = +t.value && (u.value = t.value),
        f = [u];
        for (null == n && (n = sa); e = f.pop();) if (c && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length)) for (e.children = new Array(o), a = o - 1; a >= 0; --a) f.push(r = e.children[a] = new da(i[a])),
        r.parent = e,
        r.depth = e.depth + 1;
        return u.eachBefore(ha)
    }
    function sa(t) {
        return t.children
    }
    function la(t) {
        t.data = t.data.data
    }
    function ha(t) {
        var n = 0;
        do {
            t.height = n
        } while (( t = t . parent ) && t.height < ++n)
    }
    function da(t) {
        this.data = t,
        this.depth = this.height = 0,
        this.parent = null
    }
    function pa(t) {
        for (var n, e, r = t.length; r;) e = Math.random() * r--|0,
        n = t[r],
        t[r] = t[e],
        t[e] = n;
        return t
    }
    function ga(t, n) {
        var e, r;
        if (ba(n, t)) return [n];
        for (e = 0; e < t.length; ++e) if (va(n, t[e]) && ba(xa(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e) for (r = e + 1; r < t.length; ++r) if (va(xa(t[e], t[r]), n) && va(xa(t[e], n), t[r]) && va(xa(t[r], n), t[e]) && ba(wa(t[e], t[r], n), t)) return [t[e], t[r], n];
        throw new Error
    }
    function va(t, n) {
        var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i
    }
    function ya(t, n) {
        var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }
    function ba(t, n) {
        for (var e = 0; e < n.length; ++e) if (!ya(t, n[e])) return ! 1;
        return ! 0
    }
    function ma(t) {
        switch (t.length) {
        case 1:
            return _a(t[0]);
        case 2:
            return xa(t[0], t[1]);
        case 3:
            return wa(t[0], t[1], t[2])
        }
    }
    function _a(t) {
        return {
            x: t.x,
            y: t.y,
            r: t.r
        }
    }
    function xa(t, n) {
        var e = t.x,
        r = t.y,
        i = t.r,
        a = n.x,
        o = n.y,
        u = n.r,
        c = a - e,
        f = o - r,
        s = u - i,
        l = Math.sqrt(c * c + f * f);
        return {
            x: (e + a + c / l * s) / 2,
            y: (r + o + f / l * s) / 2,
            r: (l + i + u) / 2
        }
    }
    function wa(t, n, e) {
        var r = t.x,
        i = t.y,
        a = t.r,
        o = n.x,
        u = n.y,
        c = n.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - o,
        d = r - f,
        p = i - u,
        g = i - s,
        v = c - a,
        y = l - a,
        b = r * r + i * i - a * a,
        m = b - o * o - u * u + c * c,
        _ = b - f * f - s * s + l * l,
        x = d * p - h * g,
        w = (p * _ - g * m) / (2 * x) - r,
        M = (g * v - p * y) / x,
        S = (d * m - h * _) / (2 * x) - i,
        A = (h * y - d * v) / x,
        T = M * M + A * A - 1,
        k = 2 * (a + w * M + S * A),
        C = w * w + S * S - a * a,
        N = -(T ? (k + Math.sqrt(k * k - 4 * T * C)) / (2 * T) : C / k);
        return {
            x: r + w + M * N,
            y: i + S + A * N,
            r: N
        }
    }
    function Ma(t, n, e) {
        var r = t.x,
        i = t.y,
        a = n.r + e.r,
        o = t.r + e.r,
        u = n.x - r,
        c = n.y - i,
        f = u * u + c * c;
        if (f) {
            var s = .5 + ((o *= o) - (a *= a)) / (2 * f),
            l = Math.sqrt(Math.max(0, 2 * a * (o + f) - (o -= f) * o - a * a)) / (2 * f);
            e.x = r + s * u + l * c,
            e.y = i + s * c - l * u
        } else e.x = r + o,
        e.y = i
    }
    function Sa(t, n) {
        var e = n.x - t.x,
        r = n.y - t.y,
        i = t.r + n.r;
        return i * i - 1e-6 > e * e + r * r
    }
    function Aa(t) {
        var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        a = (n.y * e.r + e.y * n.r) / r;
        return i * i + a * a
    }
    function Ta(t) {
        this._ = t,
        this.next = null,
        this.previous = null
    }
    function ka(t) {
        if (! (i = t.length)) return 0;
        var n, e, r, i, a, o, u, c, f, s, l;
        if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;
        if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        Ma(e, n, r = t[2]),
        n = new Ta(n),
        e = new Ta(e),
        r = new Ta(r),
        n.next = r.previous = e,
        e.next = n.previous = r,
        r.next = e.previous = n;
        t: for (u = 3; u < i; ++u) {
            Ma(n._, e._, r = t[u]),
            r = new Ta(r),
            c = e.next,
            f = n.previous,
            s = e._.r,
            l = n._.r;
            do {
                if (s <= l) {
                    if (Sa(c._, r._)) {
                        e = c,
                        n.next = e,
                        e.previous = n,
                        --u;
                        continue t
                    }
                    s += c._.r,
                    c = c.next
                } else {
                    if (Sa(f._, r._)) { (n = f).next = e,
                        e.previous = n,
                        --u;
                        continue t
                    }
                    l += f._.r,
                    f = f.previous
                }
            } while ( c !== f . next );
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, a = Aa(n); (r = r.next) !== e;)(o = Aa(r)) < a && (n = r, a = o);
            e = n.next
        }
        for (n = [e._], r = e; (r = r.next) !== e;) n.push(r._);
        for (r = mT(n), u = 0; u < i; ++u)(n = t[u]).x -= r.x,
        n.y -= r.y;
        return r.r
    }
    function Ca(t) {
        return null == t ? null: Na(t)
    }
    function Na(t) {
        if ("function" != typeof t) throw new Error;
        return t
    }
    function Ea() {
        return 0
    }
    function Da(t) {
        return Math.sqrt(t.value)
    }
    function za(t) {
        return function(n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
        }
    }
    function Ua(t, n) {
        return function(e) {
            if (r = e.children) {
                var r, i, a, o = r.length,
                u = t(e) * n || 0;
                if (u) for (i = 0; i < o; ++i) r[i].r += u;
                if (a = ka(r), u) for (i = 0; i < o; ++i) r[i].r -= u;
                e.r = a + u
            }
        }
    }
    function Pa(t) {
        return function(n) {
            var e = n.parent;
            n.r *= t,
            e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
        }
    }
    function La(t) {
        return t.id
    }
    function Fa(t) {
        return t.parentId
    }
    function Ra(t, n) {
        return t.parent === n.parent ? 1 : 2
    }
    function Ha(t) {
        var n = t.children;
        return n ? n[0] : t.t
    }
    function Oa(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t
    }
    function Ya(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r,
        n.s += e,
        t.c += r,
        n.z += e,
        n.m += e
    }
    function ja(t) {
        for (var n, e = 0,
        r = 0,
        i = t.children,
        a = i.length; --a >= 0;)(n = i[a]).z += e,
        n.m += e,
        e += n.s + (r += n.c)
    }
    function qa(t, n, e) {
        return t.a.parent === n.parent ? t.a: e
    }
    function Ia(t, n) {
        this._ = t,
        this.parent = null,
        this.children = null,
        this.A = null,
        this.a = this,
        this.z = 0,
        this.m = 0,
        this.c = 0,
        this.s = 0,
        this.t = null,
        this.i = n
    }
    function Xa(t) {
        for (var n, e, r, i, a, o = new Ia(t, 0), u = [o]; n = u.pop();) if (r = n._.children) for (n.children = new Array(a = r.length), i = a - 1; i >= 0; --i) u.push(e = n.children[i] = new Ia(r[i], i)),
        e.parent = n;
        return (o.parent = new Ia(null, 0)).children = [o],
        o
    }
    function Ba(t, n, e, r, i, a) {
        for (var o, u, c, f, s, l, h, d, p, g, v, y = [], b = n.children, m = 0, _ = 0, x = b.length, w = n.value; m < x;) {
            c = i - e,
            f = a - r;
            do {
                s = b[_++].value
            } while (! s && _ < x );
            for (l = h = s, v = s * s * (g = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / v, v / l); _ < x; ++_) {
                if (s += u = b[_].value, u < l && (l = u), u > h && (h = u), v = s * s * g, (d = Math.max(h / v, v / l)) > p) {
                    s -= u;
                    break
                }
                p = d
            }
            y.push(o = {
                value: s,
                dice: c < f,
                children: b.slice(m, _)
            }),
            o.dice ? wT(o, e, r, i, w ? r += f * s / w: a) : TT(o, e, r, w ? e += c * s / w: i, a),
            w -= s,
            m = _
        }
        return y
    }
    function Wa(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }
    function Va(t) {
        for (var n = t.length,
        e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && ET(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;)--r;
            e[r++] = i
        }
        return e.slice(0, r)
    }
    function $a(t) {
        this._size = t,
        this._call = this._error = null,
        this._tasks = [],
        this._data = [],
        this._waiting = this._active = this._ended = this._start = 0
    }
    function Za(t) {
        if (!t._start) try {
            Ga(t)
        } catch(n) {
            if (t._tasks[t._ended + t._active - 1]) Qa(t, n);
            else if (!t._data) throw n
        }
    }
    function Ga(t) {
        for (; t._start = t._waiting && t._active < t._size;) {
            var n = t._ended + t._active,
            e = t._tasks[n],
            r = e.length - 1,
            i = e[r];
            e[r] = Ja(t, n),
            --t._waiting,
            ++t._active,
            e = i.apply(null, e),
            t._tasks[n] && (t._tasks[n] = e || zT)
        }
    }
    function Ja(t, n) {
        return function(e, r) {
            t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? Qa(t, e) : (t._data[n] = r, t._waiting ? Za(t) : Ka(t))))
        }
    }
    function Qa(t, n) {
        var e, r = t._tasks.length;
        for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;) if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
            e.abort()
        } catch(n) {}
        t._active = NaN,
        Ka(t)
    }
    function Ka(t) {
        if (!t._active && t._call) {
            var n = t._data;
            t._data = void 0,
            t._call(t._error, n)
        }
    }
    function to(t) {
        if (null == t) t = 1 / 0;
        else if (! ((t = +t) >= 1)) throw new Error("invalid concurrency");
        return new $a(t)
    }
    function no(t) {
        return function(n, e) {
            t(null == n ? e: null)
        }
    }
    function eo(t) {
        var n = t.responseType;
        return n && "text" !== n ? t.response: t.responseText
    }
    function ro(t, n) {
        return function(e) {
            return t(e.responseText, n)
        }
    }
    function io(t) {
        function n(n) {
            var a = n + "",
            o = e.get(a);
            if (!o) {
                if (i !== QT) return i;
                e.set(a, o = r.push(n))
            }
            return t[(o - 1) % t.length]
        }
        var e = ke(),
        r = [],
        i = QT;
        return t = null == t ? [] : JT.call(t),
        n.domain = function(t) {
            if (!arguments.length) return r.slice();
            r = [],
            e = ke();
            for (var i, a, o = -1,
            u = t.length; ++o < u;) e.has(a = (i = t[o]) + "") || e.set(a, r.push(i));
            return n
        },
        n.range = function(e) {
            return arguments.length ? (t = JT.call(e), n) : t.slice()
        },
        n.unknown = function(t) {
            return arguments.length ? (i = t, n) : i
        },
        n.copy = function() {
            return io().domain(r).range(t).unknown(i)
        },
        n
    }
    function ao() {
        function t() {
            var t = i().length,
            r = o[1] < o[0],
            l = o[r - 0],
            h = o[1 - r];
            n = (h - l) / Math.max(1, t - c + 2 * f),
            u && (n = Math.floor(n)),
            l += (h - l - n * (t - c)) * s,
            e = n * (1 - c),
            u && (l = Math.round(l), e = Math.round(e));
            var d = Xm(t).map(function(t) {
                return l + n * t
            });
            return a(r ? d.reverse() : d)
        }
        var n, e, r = io().unknown(void 0),
        i = r.domain,
        a = r.range,
        o = [0, 1],
        u = !1,
        c = 0,
        f = 0,
        s = .5;
        return delete r.unknown,
        r.domain = function(n) {
            return arguments.length ? (i(n), t()) : i()
        },
        r.range = function(n) {
            return arguments.length ? (o = [ + n[0], +n[1]], t()) : o.slice()
        },
        r.rangeRound = function(n) {
            return o = [ + n[0], +n[1]],
            u = !0,
            t()
        },
        r.bandwidth = function() {
            return e
        },
        r.step = function() {
            return n
        },
        r.round = function(n) {
            return arguments.length ? (u = !!n, t()) : u
        },
        r.padding = function(n) {
            return arguments.length ? (c = f = Math.max(0, Math.min(1, n)), t()) : c
        },
        r.paddingInner = function(n) {
            return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
        },
        r.paddingOuter = function(n) {
            return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
        },
        r.align = function(n) {
            return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
        },
        r.copy = function() {
            return ao().domain(i()).range(o).round(u).paddingInner(c).paddingOuter(f).align(s)
        },
        t()
    }
    function oo(t) {
        var n = t.copy;
        return t.padding = t.paddingOuter,
        delete t.paddingInner,
        delete t.paddingOuter,
        t.copy = function() {
            return oo(n())
        },
        t
    }
    function uo() {
        return oo(ao().paddingInner(1))
    }
    function co(t, n) {
        return (n -= t = +t) ?
        function(e) {
            return (e - t) / n
        }: KT(n)
    }
    function fo(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= n ? 0 : t >= e ? 1 : r(t)
            }
        }
    }
    function so(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= 0 ? n: t >= 1 ? e: r(t)
            }
        }
    }
    function lo(t, n, e, r) {
        var i = t[0],
        a = t[1],
        o = n[0],
        u = n[1];
        return a < i ? (i = e(a, i), o = r(u, o)) : (i = e(i, a), o = r(o, u)),
        function(t) {
            return o(i(t))
        }
    }
    function ho(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
        a = new Array(i),
        o = new Array(i),
        u = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;) a[u] = e(t[u], t[u + 1]),
        o[u] = r(n[u], n[u + 1]);
        return function(n) {
            var e = Um(t, n, 1, i) - 1;
            return o[e](a[e](n))
        }
    }
    function po(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }
    function go(t, n) {
        function e() {
            return i = Math.min(u.length, c.length) > 2 ? ho: lo,
            a = o = null,
            r
        }
        function r(n) {
            return (a || (a = i(u, c, s ? fo(t) : t, f)))( + n)
        }
        var i, a, o, u = nk,
        c = nk,
        f = Ex,
        s = !1;
        return r.invert = function(t) {
            return (o || (o = i(c, u, co, s ? so(n) : n)))( + t)
        },
        r.domain = function(t) {
            return arguments.length ? (u = GT.call(t, tk), e()) : u.slice()
        },
        r.range = function(t) {
            return arguments.length ? (c = JT.call(t), e()) : c.slice()
        },
        r.rangeRound = function(t) {
            return c = JT.call(t),
            f = Dx,
            e()
        },
        r.clamp = function(t) {
            return arguments.length ? (s = !!t, e()) : s
        },
        r.interpolate = function(t) {
            return arguments.length ? (f = t, e()) : f
        },
        e()
    }
    function vo(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return $m(e[0], e[e.length - 1], null == t ? 10 : t)
        },
        t.tickFormat = function(t, e) {
            return ek(n(), t, e)
        },
        t.nice = function(e) {
            null == e && (e = 10);
            var i, a = n(),
            o = 0,
            u = a.length - 1,
            c = a[o],
            f = a[u];
            return f < c && (i = c, c = f, f = i, i = o, o = u, u = i),
            (i = r(c, f, e)) > 0 ? i = r(c = Math.floor(c / i) * i, f = Math.ceil(f / i) * i, e) : i < 0 && (i = r(c = Math.ceil(c * i) / i, f = Math.floor(f * i) / i, e)),
            i > 0 ? (a[o] = Math.floor(c / i) * i, a[u] = Math.ceil(f / i) * i, n(a)) : i < 0 && (a[o] = Math.ceil(c * i) / i, a[u] = Math.floor(f * i) / i, n(a)),
            t
        },
        t
    }
    function yo() {
        var t = go(co, Ax);
        return t.copy = function() {
            return po(t, yo())
        },
        vo(t)
    }
    function bo() {
        function t(t) {
            return + t
        }
        var n = [0, 1];
        return t.invert = t,
        t.domain = t.range = function(e) {
            return arguments.length ? (n = GT.call(e, tk), t) : n.slice()
        },
        t.copy = function() {
            return bo().domain(n)
        },
        vo(t)
    }
    function mo(t, n) {
        return (n = Math.log(n / t)) ?
        function(e) {
            return Math.log(e / t) / n
        }: KT(n)
    }
    function _o(t, n) {
        return t < 0 ?
        function(e) {
            return - Math.pow( - n, e) * Math.pow( - t, 1 - e)
        }: function(e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e)
        }
    }
    function xo(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }
    function wo(t) {
        return 10 === t ? xo: t === Math.E ? Math.exp: function(n) {
            return Math.pow(t, n)
        }
    }
    function Mo(t) {
        return t === Math.E ? Math.log: 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t),
        function(n) {
            return Math.log(n) / t
        })
    }
    function So(t) {
        return function(n) {
            return - t( - n)
        }
    }
    function Ao() {
        function t() {
            return i = Mo(r),
            a = wo(r),
            e()[0] < 0 && (i = So(i), a = So(a)),
            n
        }
        var n = go(mo, _o).domain([1, 10]),
        e = n.domain,
        r = 10,
        i = Mo(10),
        a = wo(10);
        return n.base = function(n) {
            return arguments.length ? (r = +n, t()) : r
        },
        n.domain = function(n) {
            return arguments.length ? (e(n), t()) : e()
        },
        n.ticks = function(t) {
            var n, o = e(),
            u = o[0],
            c = o[o.length - 1]; (n = c < u) && (h = u, u = c, c = h);
            var f, s, l, h = i(u),
            d = i(c),
            p = null == t ? 10 : +t,
            g = [];
            if (! (r % 1) && d - h < p) {
                if (h = Math.round(h) - 1, d = Math.round(d) + 1, u > 0) {
                    for (; h < d; ++h) for (s = 1, f = a(h); s < r; ++s) if (! ((l = f * s) < u)) {
                        if (l > c) break;
                        g.push(l)
                    }
                } else for (; h < d; ++h) for (s = r - 1, f = a(h); s >= 1; --s) if (! ((l = f * s) < u)) {
                    if (l > c) break;
                    g.push(l)
                }
            } else g = $m(h, d, Math.min(d - h, p)).map(a);
            return n ? g.reverse() : g
        },
        n.tickFormat = function(t, e) {
            if (null == e && (e = 10 === r ? ".0e": ","), "function" != typeof e && (e = XM(e)), t === 1 / 0) return e;
            null == t && (t = 10);
            var o = Math.max(1, r * t / n.ticks().length);
            return function(t) {
                var n = t / a(Math.round(i(t)));
                return n * r < r - .5 && (n *= r),
                n <= o ? e(t) : ""
            }
        },
        n.nice = function() {
            return e(rk(e(), {
                floor: function(t) {
                    return a(Math.floor(i(t)))
                },
                ceil: function(t) {
                    return a(Math.ceil(i(t)))
                }
            }))
        },
        n.copy = function() {
            return po(n, Ao().base(r))
        },
        n
    }
    function To(t, n) {
        return t < 0 ? -Math.pow( - t, n) : Math.pow(t, n)
    }
    function ko() {
        var t = 1,
        n = go(function(n, e) {
            return (e = To(e, t) - (n = To(n, t))) ?
            function(r) {
                return (To(r, t) - n) / e
            }: KT(e)
        },
        function(n, e) {
            return e = To(e, t) - (n = To(n, t)),
            function(r) {
                return To(n + e * r, 1 / t)
            }
        }),
        e = n.domain;
        return n.exponent = function(n) {
            return arguments.length ? (t = +n, e(e())) : t
        },
        n.copy = function() {
            return po(n, ko().exponent(t))
        },
        vo(n)
    }
    function Co() {
        function t() {
            var t = 0,
            a = Math.max(1, r.length);
            for (i = new Array(a - 1); ++t < a;) i[t - 1] = Gm(e, t / a);
            return n
        }
        function n(t) {
            if (!isNaN(t = +t)) return r[Um(i, t)]
        }
        var e = [],
        r = [],
        i = [];
        return n.invertExtent = function(t) {
            var n = r.indexOf(t);
            return n < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]]
        },
        n.domain = function(n) {
            if (!arguments.length) return e.slice();
            e = [];
            for (var r, i = 0,
            a = n.length; i < a; ++i) null == (r = n[i]) || isNaN(r = +r) || e.push(r);
            return e.sort(Em),
            t()
        },
        n.range = function(n) {
            return arguments.length ? (r = JT.call(n), t()) : r.slice()
        },
        n.quantiles = function() {
            return i.slice()
        },
        n.copy = function() {
            return Co().domain(e).range(r)
        },
        n
    }
    function No() {
        function t(t) {
            if (t <= t) return o[Um(a, t, 0, i)]
        }
        function n() {
            var n = -1;
            for (a = new Array(i); ++n < i;) a[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
            return t
        }
        var e = 0,
        r = 1,
        i = 1,
        a = [.5],
        o = [0, 1];
        return t.domain = function(t) {
            return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
        },
        t.range = function(t) {
            return arguments.length ? (i = (o = JT.call(t)).length - 1, n()) : o.slice()
        },
        t.invertExtent = function(t) {
            var n = o.indexOf(t);
            return n < 0 ? [NaN, NaN] : n < 1 ? [e, a[0]] : n >= i ? [a[i - 1], r] : [a[n - 1], a[n]]
        },
        t.copy = function() {
            return No().domain([e, r]).range(o)
        },
        vo(t)
    }
    function Eo() {
        function t(t) {
            if (t <= t) return e[Um(n, t, 0, r)]
        }
        var n = [.5],
        e = [0, 1],
        r = 1;
        return t.domain = function(i) {
            return arguments.length ? (n = JT.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
        },
        t.range = function(i) {
            return arguments.length ? (e = JT.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
        },
        t.invertExtent = function(t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]]
        },
        t.copy = function() {
            return Eo().domain(n).range(e)
        },
        t
    }
    function Do(t, n, e, r) {
        function i(n) {
            return t(n = new Date( + n)),
            n
        }
        return i.floor = i,
        i.ceil = function(e) {
            return t(e = new Date(e - 1)),
            n(e, 1),
            t(e),
            e
        },
        i.round = function(t) {
            var n = i(t),
            e = i.ceil(t);
            return t - n < e - t ? n: e
        },
        i.offset = function(t, e) {
            return n(t = new Date( + t), null == e ? 1 : Math.floor(e)),
            t
        },
        i.range = function(e, r, a) {
            var o = [];
            if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < r && a > 0)) return o;
            do {
                o.push(new Date( + e))
            } while ( n ( e , a ), t(e), e < r);
            return o
        },
        i.filter = function(e) {
            return Do(function(n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            },
            function(t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t););
                else for (; --r >= 0;) for (; n(t, 1), !e(t););
            })
        },
        e && (i.count = function(n, r) {
            return ik.setTime( + n),
            ak.setTime( + r),
            t(ik),
            t(ak),
            Math.floor(e(ik, ak))
        },
        i.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? i.filter(r ?
            function(n) {
                return r(n) % t == 0
            }: function(n) {
                return i.count(0, n) % t == 0
            }) : i: null
        }),
        i
    }
    function zo(t) {
        return Do(function(n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
            n.setHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setDate(t.getDate() + 7 * n)
        },
        function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ck) / fk
        })
    }
    function Uo(t) {
        return Do(function(n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        },
        function(t, n) {
            return (n - t) / fk
        })
    }
    function Po(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date( - 1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    function Lo(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC( - 1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function Fo(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    function Ro(t) {
        function n(t, n) {
            return function(e) {
                var r, i, a, o = [],
                u = -1,
                c = 0,
                f = t.length;
                for (e instanceof Date || (e = new Date( + e)); ++u < f;) 37 === t.charCodeAt(u) && (o.push(t.slice(c, u)), null != (i = sC[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " ": "0", (a = n[r]) && (r = a(e, i)), o.push(r), c = u + 1);
                return o.push(t.slice(c, u)),
                o.join("")
            }
        }
        function e(t, n) {
            return function(e) {
                var i, a, o = Fo(1900);
                if (r(o, t, e += "", 0) != e.length) return null;
                if ("Q" in o) return new Date(o.Q);
                if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "V" in o) {
                    if (o.V < 1 || o.V > 53) return null;
                    "w" in o || (o.w = 1),
                    "Z" in o ? (i = (a = (i = Lo(Fo(o.y))).getUTCDay()) > 4 || 0 === a ? Ik.ceil(i) : Ik(i), i = Yk.offset(i, 7 * (o.V - 1)), o.y = i.getUTCFullYear(), o.m = i.getUTCMonth(), o.d = i.getUTCDate() + (o.w + 6) % 7) : (i = (a = (i = n(Fo(o.y))).getDay()) > 4 || 0 === a ? mk.ceil(i) : mk(i), i = vk.offset(i, 7 * (o.V - 1)), o.y = i.getFullYear(), o.m = i.getMonth(), o.d = i.getDate() + (o.w + 6) % 7)
                } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), a = "Z" in o ? Lo(Fo(o.y)).getUTCDay() : n(Fo(o.y)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (a + 5) % 7 : o.w + 7 * o.U - (a + 6) % 7);
                return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Lo(o)) : n(o)
            }
        }
        function r(t, n, e, r) {
            for (var i, a, o = 0,
            u = n.length,
            c = e.length; o < u;) {
                if (r >= c) return - 1;
                if (37 === (i = n.charCodeAt(o++))) {
                    if (i = n.charAt(o++), !(a = S[i in sC ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0) return - 1
                } else if (i != e.charCodeAt(r++)) return - 1
            }
            return r
        }
        var i = t.dateTime,
        a = t.date,
        o = t.time,
        u = t.periods,
        c = t.days,
        f = t.shortDays,
        s = t.months,
        l = t.shortMonths,
        h = Yo(u),
        d = jo(u),
        p = Yo(c),
        g = jo(c),
        v = Yo(f),
        y = jo(f),
        b = Yo(s),
        m = jo(s),
        _ = Yo(l),
        x = jo(l),
        w = {
            a: function(t) {
                return f[t.getDay()]
            },
            A: function(t) {
                return c[t.getDay()]
            },
            b: function(t) {
                return l[t.getMonth()]
            },
            B: function(t) {
                return s[t.getMonth()]
            },
            c: null,
            d: uu,
            e: uu,
            f: hu,
            H: cu,
            I: fu,
            j: su,
            L: lu,
            m: du,
            M: pu,
            p: function(t) {
                return u[ + (t.getHours() >= 12)]
            },
            Q: qu,
            s: Iu,
            S: gu,
            u: vu,
            U: yu,
            V: bu,
            w: mu,
            W: _u,
            x: null,
            X: null,
            y: xu,
            Y: wu,
            Z: Mu,
            "%": ju
        },
        M = {
            a: function(t) {
                return f[t.getUTCDay()]
            },
            A: function(t) {
                return c[t.getUTCDay()]
            },
            b: function(t) {
                return l[t.getUTCMonth()]
            },
            B: function(t) {
                return s[t.getUTCMonth()]
            },
            c: null,
            d: Su,
            e: Su,
            f: Nu,
            H: Au,
            I: Tu,
            j: ku,
            L: Cu,
            m: Eu,
            M: Du,
            p: function(t) {
                return u[ + (t.getUTCHours() >= 12)]
            },
            Q: qu,
            s: Iu,
            S: zu,
            u: Uu,
            U: Pu,
            V: Lu,
            w: Fu,
            W: Ru,
            x: null,
            X: null,
            y: Hu,
            Y: Ou,
            Z: Yu,
            "%": ju
        },
        S = {
            a: function(t, n, e) {
                var r = v.exec(n.slice(e));
                return r ? (t.w = y[r[0].toLowerCase()], e + r[0].length) : -1
            },
            A: function(t, n, e) {
                var r = p.exec(n.slice(e));
                return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1
            },
            b: function(t, n, e) {
                var r = _.exec(n.slice(e));
                return r ? (t.m = x[r[0].toLowerCase()], e + r[0].length) : -1
            },
            B: function(t, n, e) {
                var r = b.exec(n.slice(e));
                return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1
            },
            c: function(t, n, e) {
                return r(t, i, n, e)
            },
            d: Jo,
            e: Jo,
            f: ru,
            H: Ko,
            I: Ko,
            j: Qo,
            L: eu,
            m: Go,
            M: tu,
            p: function(t, n, e) {
                var r = h.exec(n.slice(e));
                return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1
            },
            Q: au,
            s: ou,
            S: nu,
            u: Io,
            U: Xo,
            V: Bo,
            w: qo,
            W: Wo,
            x: function(t, n, e) {
                return r(t, a, n, e)
            },
            X: function(t, n, e) {
                return r(t, o, n, e)
            },
            y: $o,
            Y: Vo,
            Z: Zo,
            "%": iu
        };
        return w.x = n(a, w),
        w.X = n(o, w),
        w.c = n(i, w),
        M.x = n(a, M),
        M.X = n(o, M),
        M.c = n(i, M),
        {
            format: function(t) {
                var e = n(t += "", w);
                return e.toString = function() {
                    return t
                },
                e
            },
            parse: function(t) {
                var n = e(t += "", Po);
                return n.toString = function() {
                    return t
                },
                n
            },
            utcFormat: function(t) {
                var e = n(t += "", M);
                return e.toString = function() {
                    return t
                },
                e
            },
            utcParse: function(t) {
                var n = e(t, Lo);
                return n.toString = function() {
                    return t
                },
                n
            }
        }
    }
    function Ho(t, n, e) {
        var r = t < 0 ? "-": "",
        i = (r ? -t: t) + "",
        a = i.length;
        return r + (a < e ? new Array(e - a + 1).join(n) + i: i)
    }
    function Oo(t) {
        return t.replace(dC, "\\$&")
    }
    function Yo(t) {
        return new RegExp("^(?:" + t.map(Oo).join("|") + ")", "i")
    }
    function jo(t) {
        for (var n = {},
        e = -1,
        r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }
    function qo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }
    function Io(t, n, e) {
        var r = lC.exec(n.slice(e, e + 1));
        return r ? (t.u = +r[0], e + r[0].length) : -1
    }
    function Xo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }
    function Bo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.V = +r[0], e + r[0].length) : -1
    }
    function Wo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }
    function Vo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }
    function $o(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + ( + r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }
    function Zo(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }
    function Go(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }
    function Jo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }
    function Qo(t, n, e) {
        var r = lC.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }
    function Ko(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }
    function tu(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }
    function nu(t, n, e) {
        var r = lC.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }
    function eu(t, n, e) {
        var r = lC.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }
    function ru(t, n, e) {
        var r = lC.exec(n.slice(e, e + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
    }
    function iu(t, n, e) {
        var r = hC.exec(n.slice(e, e + 1));
        return r ? e + r[0].length: -1
    }
    function au(t, n, e) {
        var r = lC.exec(n.slice(e));
        return r ? (t.Q = +r[0], e + r[0].length) : -1
    }
    function ou(t, n, e) {
        var r = lC.exec(n.slice(e));
        return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
    }
    function uu(t, n) {
        return Ho(t.getDate(), n, 2)
    }
    function cu(t, n) {
        return Ho(t.getHours(), n, 2)
    }
    function fu(t, n) {
        return Ho(t.getHours() % 12 || 12, n, 2)
    }
    function su(t, n) {
        return Ho(1 + vk.count(Pk(t), t), n, 3)
    }
    function lu(t, n) {
        return Ho(t.getMilliseconds(), n, 3)
    }
    function hu(t, n) {
        return lu(t, n) + "000"
    }
    function du(t, n) {
        return Ho(t.getMonth() + 1, n, 2)
    }
    function pu(t, n) {
        return Ho(t.getMinutes(), n, 2)
    }
    function gu(t, n) {
        return Ho(t.getSeconds(), n, 2)
    }
    function vu(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n
    }
    function yu(t, n) {
        return Ho(bk.count(Pk(t), t), n, 2)
    }
    function bu(t, n) {
        var e = t.getDay();
        return t = e >= 4 || 0 === e ? wk(t) : wk.ceil(t),
        Ho(wk.count(Pk(t), t) + (4 === Pk(t).getDay()), n, 2)
    }
    function mu(t) {
        return t.getDay()
    }
    function _u(t, n) {
        return Ho(mk.count(Pk(t), t), n, 2)
    }
    function xu(t, n) {
        return Ho(t.getFullYear() % 100, n, 2)
    }
    function wu(t, n) {
        return Ho(t.getFullYear() % 1e4, n, 4)
    }
    function Mu(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-": (n *= -1, "+")) + Ho(n / 60 | 0, "0", 2) + Ho(n % 60, "0", 2)
    }
    function Su(t, n) {
        return Ho(t.getUTCDate(), n, 2)
    }
    function Au(t, n) {
        return Ho(t.getUTCHours(), n, 2)
    }
    function Tu(t, n) {
        return Ho(t.getUTCHours() % 12 || 12, n, 2)
    }
    function ku(t, n) {
        return Ho(1 + Yk.count(iC(t), t), n, 3)
    }
    function Cu(t, n) {
        return Ho(t.getUTCMilliseconds(), n, 3)
    }
    function Nu(t, n) {
        return Cu(t, n) + "000"
    }
    function Eu(t, n) {
        return Ho(t.getUTCMonth() + 1, n, 2)
    }
    function Du(t, n) {
        return Ho(t.getUTCMinutes(), n, 2)
    }
    function zu(t, n) {
        return Ho(t.getUTCSeconds(), n, 2)
    }
    function Uu(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n
    }
    function Pu(t, n) {
        return Ho(qk.count(iC(t), t), n, 2)
    }
    function Lu(t, n) {
        var e = t.getUTCDay();
        return t = e >= 4 || 0 === e ? Wk(t) : Wk.ceil(t),
        Ho(Wk.count(iC(t), t) + (4 === iC(t).getUTCDay()), n, 2)
    }
    function Fu(t) {
        return t.getUTCDay()
    }
    function Ru(t, n) {
        return Ho(Ik.count(iC(t), t), n, 2)
    }
    function Hu(t, n) {
        return Ho(t.getUTCFullYear() % 100, n, 2)
    }
    function Ou(t, n) {
        return Ho(t.getUTCFullYear() % 1e4, n, 4)
    }
    function Yu() {
        return "+0000"
    }
    function ju() {
        return "%"
    }
    function qu(t) {
        return + t
    }
    function Iu(t) {
        return Math.floor( + t / 1e3)
    }
    function Xu(t) {
        return new Date(t)
    }
    function Bu(t) {
        return t instanceof Date ? +t: +new Date( + t)
    }
    function Wu(t, n, e, r, a, o, u, c, f) {
        function s(i) {
            return (u(i) < i ? g: o(i) < i ? v: a(i) < i ? y: r(i) < i ? b: n(i) < i ? e(i) < i ? m: _: t(i) < i ? x: w)(i)
        }
        function l(n, e, r, a) {
            if (null == n && (n = 10), "number" == typeof n) {
                var o = Math.abs(r - e) / n,
                u = Dm(function(t) {
                    return t[2]
                }).right(M, o);
                u === M.length ? (a = i(e / _C, r / _C, n), n = t) : u ? (a = (u = M[o / M[u - 1][2] < M[u][2] / o ? u - 1 : u])[1], n = u[0]) : (a = i(e, r, n), n = c)
            }
            return null == a ? n: n.every(a)
        }
        var h = go(co, Ax),
        d = h.invert,
        p = h.domain,
        g = f(".%L"),
        v = f(":%S"),
        y = f("%I:%M"),
        b = f("%I %p"),
        m = f("%a %d"),
        _ = f("%b %d"),
        x = f("%B"),
        w = f("%Y"),
        M = [[u, 1, pC], [u, 5, 5 * pC], [u, 15, 15 * pC], [u, 30, 30 * pC], [o, 1, gC], [o, 5, 5 * gC], [o, 15, 15 * gC], [o, 30, 30 * gC], [a, 1, vC], [a, 3, 3 * vC], [a, 6, 6 * vC], [a, 12, 12 * vC], [r, 1, yC], [r, 2, 2 * yC], [e, 1, bC], [n, 1, mC], [n, 3, 3 * mC], [t, 1, _C]];
        return h.invert = function(t) {
            return new Date(d(t))
        },
        h.domain = function(t) {
            return arguments.length ? p(GT.call(t, Bu)) : p().map(Xu)
        },
        h.ticks = function(t, n) {
            var e, r = p(),
            i = r[0],
            a = r[r.length - 1],
            o = a < i;
            return o && (e = i, i = a, a = e),
            e = l(t, i, a, n),
            e = e ? e.range(i, a + 1) : [],
            o ? e.reverse() : e
        },
        h.tickFormat = function(t, n) {
            return null == n ? s: f(n)
        },
        h.nice = function(t, n) {
            var e = p();
            return (t = l(t, e[0], e[e.length - 1], n)) ? p(rk(e, t)) : h
        },
        h.copy = function() {
            return po(h, Wu(t, n, e, r, a, o, u, c, f))
        },
        h
    }
    function Vu(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    function $u(t) {
        function n(n) {
            var a = (n - e) / (r - e);
            return t(i ? Math.max(0, Math.min(1, a)) : a)
        }
        var e = 0,
        r = 1,
        i = !1;
        return n.domain = function(t) {
            return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
        },
        n.clamp = function(t) {
            return arguments.length ? (i = !!t, n) : i
        },
        n.interpolator = function(e) {
            return arguments.length ? (t = e, n) : t
        },
        n.copy = function() {
            return $u(t).domain([e, r]).clamp(i)
        },
        vo(n)
    }
    function Zu(t) {
        return t > 1 ? 0 : t < -1 ? BC: Math.acos(t)
    }
    function Gu(t) {
        return t >= 1 ? WC: t <= -1 ? -WC: Math.asin(t)
    }
    function Ju(t) {
        return t.innerRadius
    }
    function Qu(t) {
        return t.outerRadius
    }
    function Ku(t) {
        return t.startAngle
    }
    function tc(t) {
        return t.endAngle
    }
    function nc(t) {
        return t && t.padAngle
    }
    function ec(t, n, e, r, i, a, o, u) {
        var c = e - t,
        f = r - n,
        s = o - i,
        l = u - a,
        h = (s * (n - a) - l * (t - i)) / (l * c - s * f);
        return [t + h * c, n + h * f]
    }
    function rc(t, n, e, r, i, a, o) {
        var u = t - e,
        c = n - r,
        f = (o ? a: -a) / IC(u * u + c * c),
        s = f * c,
        l = -f * u,
        h = t + s,
        d = n + l,
        p = e + s,
        g = r + l,
        v = (h + p) / 2,
        y = (d + g) / 2,
        b = p - h,
        m = g - d,
        _ = b * b + m * m,
        x = i - a,
        w = h * g - p * d,
        M = (m < 0 ? -1 : 1) * IC(YC(0, x * x * _ - w * w)),
        S = (w * m - b * M) / _,
        A = ( - w * b - m * M) / _,
        T = (w * m + b * M) / _,
        k = ( - w * b + m * M) / _,
        C = S - v,
        N = A - y,
        E = T - v,
        D = k - y;
        return C * C + N * N > E * E + D * D && (S = T, A = k),
        {
            cx: S,
            cy: A,
            x01: -s,
            y01: -l,
            x11: S * (i / x - 1),
            y11: A * (i / x - 1)
        }
    }
    function ic(t) {
        this._context = t
    }
    function ac(t) {
        return t[0]
    }
    function oc(t) {
        return t[1]
    }
    function uc(t) {
        this._curve = t
    }
    function cc(t) {
        function n(n) {
            return new uc(t(n))
        }
        return n._curve = t,
        n
    }
    function fc(t) {
        var n = t.curve;
        return t.angle = t.x,
        delete t.x,
        t.radius = t.y,
        delete t.y,
        t.curve = function(t) {
            return arguments.length ? n(cc(t)) : n()._curve
        },
        t
    }
    function sc(t) {
        return t.source
    }
    function lc(t) {
        return t.target
    }
    function hc(t) {
        function n() {
            var n, u = rN.call(arguments),
            c = e.apply(this, u),
            f = r.apply(this, u);
            if (o || (o = n = _e()), t(o, +i.apply(this, (u[0] = c, u)), +a.apply(this, u), +i.apply(this, (u[0] = f, u)), +a.apply(this, u)), n) return o = null,
            n + "" || null
        }
        var e = sc,
        r = lc,
        i = ac,
        a = oc,
        o = null;
        return n.source = function(t) {
            return arguments.length ? (e = t, n) : e
        },
        n.target = function(t) {
            return arguments.length ? (r = t, n) : r
        },
        n.x = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: FC( + t), n) : i
        },
        n.y = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t: FC( + t), n) : a
        },
        n.context = function(t) {
            return arguments.length ? (o = null == t ? null: t, n) : o
        },
        n
    }
    function dc(t, n, e, r, i) {
        t.moveTo(n, e),
        t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
    }
    function pc(t, n, e, r, i) {
        t.moveTo(n, e),
        t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
    }
    function gc(t, n, e, r, i) {
        var a = eN(n, e),
        o = eN(n, e = (e + i) / 2),
        u = eN(r, e),
        c = eN(r, i);
        t.moveTo(a[0], a[1]),
        t.bezierCurveTo(o[0], o[1], u[0], u[1], c[0], c[1])
    }
    function vc(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }
    function yc(t) {
        this._context = t
    }
    function bc(t) {
        this._context = t
    }
    function mc(t) {
        this._context = t
    }
    function _c(t, n) {
        this._basis = new yc(t),
        this._beta = n
    }
    function xc(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }
    function wc(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    function Mc(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    function Sc(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    function Ac(t, n, e) {
        var r = t._x1,
        i = t._y1,
        a = t._x2,
        o = t._y2;
        if (t._l01_a > XC) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c,
            i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > XC) {
            var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            a = (a * f + t._x1 * t._l23_2a - n * t._l12_2a) / s,
            o = (o * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
        }
        t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2)
    }
    function Tc(t, n) {
        this._context = t,
        this._alpha = n
    }
    function kc(t, n) {
        this._context = t,
        this._alpha = n
    }
    function Cc(t, n) {
        this._context = t,
        this._alpha = n
    }
    function Nc(t) {
        this._context = t
    }
    function Ec(t) {
        return t < 0 ? -1 : 1
    }
    function Dc(t, n, e) {
        var r = t._x1 - t._x0,
        i = n - t._x1,
        a = (t._y1 - t._y0) / (r || i < 0 && -0),
        o = (e - t._y1) / (i || r < 0 && -0),
        u = (a * i + o * r) / (r + i);
        return (Ec(a) + Ec(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
    }
    function zc(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    function Uc(t, n, e) {
        var r = t._x0,
        i = t._y0,
        a = t._x1,
        o = t._y1,
        u = (a - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, a - u, o - u * e, a, o)
    }
    function Pc(t) {
        this._context = t
    }
    function Lc(t) {
        this._context = new Fc(t)
    }
    function Fc(t) {
        this._context = t
    }
    function Rc(t) {
        this._context = t
    }
    function Hc(t) {
        var n, e, r = t.length - 1,
        i = new Array(r),
        a = new Array(r),
        o = new Array(r);
        for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1,
        a[n] = 4,
        o[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / a[n - 1],
        a[n] -= e,
        o[n] -= e * o[n - 1];
        for (i[r - 1] = o[r - 1] / a[r - 1], n = r - 2; n >= 0; --n) i[n] = (o[n] - i[n + 1]) / a[n];
        for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) a[n] = 2 * t[n + 1] - i[n + 1];
        return [i, a]
    }
    function Oc(t, n) {
        this._context = t,
        this._t = n
    }
    function Yc(t, n) {
        return t[n]
    }
    function jc(t) {
        for (var n, e = 0,
        r = -1,
        i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
        return e
    }
    function qc(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date( - 1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    function Ic(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC( - 1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function Xc(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    function Bc(t) {
        function n(t, n) {
            return function(e) {
                var r, i, a, o = [],
                u = -1,
                c = 0,
                f = t.length;
                for (e instanceof Date || (e = new Date( + e)); ++u < f;) 37 === t.charCodeAt(u) && (o.push(t.slice(c, u)), null != (i = HN[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " ": "0", (a = n[r]) && (r = a(e, i)), o.push(r), c = u + 1);
                return o.push(t.slice(c, u)),
                o.join("")
            }
        }
        function e(t, n) {
            return function(e) {
                var i = Xc(1900);
                if (r(i, t, e += "", 0) != e.length) return null;
                if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                    "w" in i || (i.w = "W" in i ? 1 : 0);
                    var a = "Z" in i ? Ic(Xc(i.y)).getUTCDay() : n(Xc(i.y)).getDay();
                    i.m = 0,
                    i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7
                }
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Ic(i)) : n(i)
            }
        }
        function r(t, n, e, r) {
            for (var i, a, o = 0,
            u = n.length,
            c = e.length; o < u;) {
                if (r >= c) return - 1;
                if (37 === (i = n.charCodeAt(o++))) {
                    if (i = n.charAt(o++), !(a = S[i in HN ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0) return - 1
                } else if (i != e.charCodeAt(r++)) return - 1
            }
            return r
        }
        var i = t.dateTime,
        a = t.date,
        o = t.time,
        u = t.periods,
        c = t.days,
        f = t.shortDays,
        s = t.months,
        l = t.shortMonths,
        h = $c(u),
        d = Zc(u),
        p = $c(c),
        g = Zc(c),
        v = $c(f),
        y = Zc(f),
        b = $c(s),
        m = Zc(s),
        _ = $c(l),
        x = Zc(l),
        w = {
            a: function(t) {
                return f[t.getDay()]
            },
            A: function(t) {
                return c[t.getDay()]
            },
            b: function(t) {
                return l[t.getMonth()]
            },
            B: function(t) {
                return s[t.getMonth()]
            },
            c: null,
            d: lf,
            e: lf,
            H: hf,
            I: df,
            j: pf,
            L: gf,
            m: vf,
            M: yf,
            p: function(t) {
                return u[ + (t.getHours() >= 12)]
            },
            S: bf,
            U: mf,
            w: _f,
            W: xf,
            x: null,
            X: null,
            y: wf,
            Y: Mf,
            Z: Sf,
            "%": Of
        },
        M = {
            a: function(t) {
                return f[t.getUTCDay()]
            },
            A: function(t) {
                return c[t.getUTCDay()]
            },
            b: function(t) {
                return l[t.getUTCMonth()]
            },
            B: function(t) {
                return s[t.getUTCMonth()]
            },
            c: null,
            d: Af,
            e: Af,
            H: Tf,
            I: kf,
            j: Cf,
            L: Nf,
            m: Ef,
            M: Df,
            p: function(t) {
                return u[ + (t.getUTCHours() >= 12)]
            },
            S: zf,
            U: Uf,
            w: Pf,
            W: Lf,
            x: null,
            X: null,
            y: Ff,
            Y: Rf,
            Z: Hf,
            "%": Of
        },
        S = {
            a: function(t, n, e) {
                var r = v.exec(n.slice(e));
                return r ? (t.w = y[r[0].toLowerCase()], e + r[0].length) : -1
            },
            A: function(t, n, e) {
                var r = p.exec(n.slice(e));
                return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1
            },
            b: function(t, n, e) {
                var r = _.exec(n.slice(e));
                return r ? (t.m = x[r[0].toLowerCase()], e + r[0].length) : -1
            },
            B: function(t, n, e) {
                var r = b.exec(n.slice(e));
                return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1
            },
            c: function(t, n, e) {
                return r(t, i, n, e)
            },
            d: rf,
            e: rf,
            H: of,
            I: of,
            j: af,
            L: ff,
            m: ef,
            M: uf,
            p: function(t, n, e) {
                var r = h.exec(n.slice(e));
                return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1
            },
            S: cf,
            U: Jc,
            w: Gc,
            W: Qc,
            x: function(t, n, e) {
                return r(t, a, n, e)
            },
            X: function(t, n, e) {
                return r(t, o, n, e)
            },
            y: tf,
            Y: Kc,
            Z: nf,
            "%": sf
        };
        return w.x = n(a, w),
        w.X = n(o, w),
        w.c = n(i, w),
        M.x = n(a, M),
        M.X = n(o, M),
        M.c = n(i, M),
        {
            format: function(t) {
                var e = n(t += "", w);
                return e.toString = function() {
                    return t
                },
                e
            },
            parse: function(t) {
                var n = e(t += "", qc);
                return n.toString = function() {
                    return t
                },
                n
            },
            utcFormat: function(t) {
                var e = n(t += "", M);
                return e.toString = function() {
                    return t
                },
                e
            },
            utcParse: function(t) {
                var n = e(t, Ic);
                return n.toString = function() {
                    return t
                },
                n
            }
        }
    }
    function Wc(t, n, e) {
        var r = t < 0 ? "-": "",
        i = (r ? -t: t) + "",
        a = i.length;
        return r + (a < e ? new Array(e - a + 1).join(n) + i: i)
    }
    function Vc(t) {
        return t.replace(jN, "\\$&")
    }
    function $c(t) {
        return new RegExp("^(?:" + t.map(Vc).join("|") + ")", "i")
    }
    function Zc(t) {
        for (var n = {},
        e = -1,
        r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }
    function Gc(t, n, e) {
        var r = ON.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }
    function Jc(t, n, e) {
        var r = ON.exec(n.slice(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }
    function Qc(t, n, e) {
        var r = ON.exec(n.slice(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }
    function Kc(t, n, e) {
        var r = ON.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }
    function tf(t, n, e) {
        var r = ON.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + ( + r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }
    function nf(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }
    function ef(t, n, e) {
        var r = ON.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }
    function rf(t, n, e) {
        var r = ON.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }
    function af(t, n, e) {
        var r = ON.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }
    function of(t, n, e) {
        var r = ON.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }
    function uf(t, n, e) {
        var r = ON.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }
    function cf(t, n, e) {
        var r = ON.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }
    function ff(t, n, e) {
        var r = ON.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }
    function sf(t, n, e) {
        var r = YN.exec(n.slice(e, e + 1));
        return r ? e + r[0].length: -1
    }
    function lf(t, n) {
        return Wc(t.getDate(), n, 2)
    }
    function hf(t, n) {
        return Wc(t.getHours(), n, 2)
    }
    function df(t, n) {
        return Wc(t.getHours() % 12 || 12, n, 2)
    }
    function pf(t, n) {
        return Wc(1 + vk.count(Pk(t), t), n, 3)
    }
    function gf(t, n) {
        return Wc(t.getMilliseconds(), n, 3)
    }
    function vf(t, n) {
        return Wc(t.getMonth() + 1, n, 2)
    }
    function yf(t, n) {
        return Wc(t.getMinutes(), n, 2)
    }
    function bf(t, n) {
        return Wc(t.getSeconds(), n, 2)
    }
    function mf(t, n) {
        return Wc(bk.count(Pk(t), t), n, 2)
    }
    function _f(t) {
        return t.getDay()
    }
    function xf(t, n) {
        return Wc(mk.count(Pk(t), t), n, 2)
    }
    function wf(t, n) {
        return Wc(t.getFullYear() % 100, n, 2)
    }
    function Mf(t, n) {
        return Wc(t.getFullYear() % 1e4, n, 4)
    }
    function Sf(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-": (n *= -1, "+")) + Wc(n / 60 | 0, "0", 2) + Wc(n % 60, "0", 2)
    }
    function Af(t, n) {
        return Wc(t.getUTCDate(), n, 2)
    }
    function Tf(t, n) {
        return Wc(t.getUTCHours(), n, 2)
    }
    function kf(t, n) {
        return Wc(t.getUTCHours() % 12 || 12, n, 2)
    }
    function Cf(t, n) {
        return Wc(1 + Yk.count(iC(t), t), n, 3)
    }
    function Nf(t, n) {
        return Wc(t.getUTCMilliseconds(), n, 3)
    }
    function Ef(t, n) {
        return Wc(t.getUTCMonth() + 1, n, 2)
    }
    function Df(t, n) {
        return Wc(t.getUTCMinutes(), n, 2)
    }
    function zf(t, n) {
        return Wc(t.getUTCSeconds(), n, 2)
    }
    function Uf(t, n) {
        return Wc(qk.count(iC(t), t), n, 2)
    }
    function Pf(t) {
        return t.getUTCDay()
    }
    function Lf(t, n) {
        return Wc(Ik.count(iC(t), t), n, 2)
    }
    function Ff(t, n) {
        return Wc(t.getUTCFullYear() % 100, n, 2)
    }
    function Rf(t, n) {
        return Wc(t.getUTCFullYear() % 1e4, n, 4)
    }
    function Hf() {
        return "+0000"
    }
    function Of() {
        return "%"
    }
    function Yf(t) {
        return EN = Bc(t),
        DN = EN.format,
        zN = EN.parse,
        UN = EN.utcFormat,
        PN = EN.utcParse,
        EN
    }
    function jf(t) {
        return t[0]
    }
    function qf(t) {
        return t[1]
    }
    function If() {
        this._ = null
    }
    function Xf(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }
    function Bf(t, n) {
        var e = n,
        r = n.R,
        i = e.U;
        i ? i.L === e ? i.L = r: i.R = r: t._ = r,
        r.U = i,
        e.U = r,
        e.R = r.L,
        e.R && (e.R.U = e),
        r.L = e
    }
    function Wf(t, n) {
        var e = n,
        r = n.L,
        i = e.U;
        i ? i.L === e ? i.L = r: i.R = r: t._ = r,
        r.U = i,
        e.U = r,
        e.L = r.R,
        e.L && (e.L.U = e),
        r.R = e
    }
    function Vf(t) {
        for (; t.L;) t = t.L;
        return t
    }
    function $f(t, n, e, r) {
        var i = [null, null],
        a = ZN.push(i) - 1;
        return i.left = t,
        i.right = n,
        e && Gf(i, t, n, e),
        r && Gf(i, n, t, r),
        VN[t.index].halfedges.push(a),
        VN[n.index].halfedges.push(a),
        i
    }
    function Zf(t, n, e) {
        var r = [n, e];
        return r.left = t,
        r
    }
    function Gf(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r: t[0] = r: (t[0] = r, t.left = n, t.right = e)
    }
    function Jf(t, n, e, r, i) {
        var a, o = t[0],
        u = t[1],
        c = o[0],
        f = o[1],
        s = 0,
        l = 1,
        h = u[0] - c,
        d = u[1] - f;
        if (a = n - c, h || !(a > 0)) {
            if (a /= h, h < 0) {
                if (a < s) return;
                a < l && (l = a)
            } else if (h > 0) {
                if (a > l) return;
                a > s && (s = a)
            }
            if (a = r - c, h || !(a < 0)) {
                if (a /= h, h < 0) {
                    if (a > l) return;
                    a > s && (s = a)
                } else if (h > 0) {
                    if (a < s) return;
                    a < l && (l = a)
                }
                if (a = e - f, d || !(a > 0)) {
                    if (a /= d, d < 0) {
                        if (a < s) return;
                        a < l && (l = a)
                    } else if (d > 0) {
                        if (a > l) return;
                        a > s && (s = a)
                    }
                    if (a = i - f, d || !(a < 0)) {
                        if (a /= d, d < 0) {
                            if (a > l) return;
                            a > s && (s = a)
                        } else if (d > 0) {
                            if (a < s) return;
                            a < l && (l = a)
                        }
                        return ! (s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0)
                    }
                }
            }
        }
    }
    function Qf(t, n, e, r, i) {
        var a = t[1];
        if (a) return ! 0;
        var o, u, c = t[0],
        f = t.left,
        s = t.right,
        l = f[0],
        h = f[1],
        d = s[0],
        p = s[1],
        g = (l + d) / 2,
        v = (h + p) / 2;
        if (p === h) {
            if (g < n || g >= r) return;
            if (l > d) {
                if (c) {
                    if (c[1] >= i) return
                } else c = [g, e];
                a = [g, i]
            } else {
                if (c) {
                    if (c[1] < e) return
                } else c = [g, i];
                a = [g, e]
            }
        } else if (o = (l - d) / (p - h), u = v - o * g, o < -1 || o > 1) if (l > d) {
            if (c) {
                if (c[1] >= i) return
            } else c = [(e - u) / o, e];
            a = [(i - u) / o, i]
        } else {
            if (c) {
                if (c[1] < e) return
            } else c = [(i - u) / o, i];
            a = [(e - u) / o, e]
        } else if (h < p) {
            if (c) {
                if (c[0] >= r) return
            } else c = [n, o * n + u];
            a = [r, o * r + u]
        } else {
            if (c) {
                if (c[0] < n) return
            } else c = [r, o * r + u];
            a = [n, o * n + u]
        }
        return t[0] = c,
        t[1] = a,
        !0
    }
    function Kf(t, n, e, r) {
        for (var i, a = ZN.length; a--;) Qf(i = ZN[a], t, n, e, r) && Jf(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > QN || Math.abs(i[0][1] - i[1][1]) > QN) || delete ZN[a]
    }
    function ts(t) {
        return VN[t.index] = {
            site: t,
            halfedges: []
        }
    }
    function ns(t, n) {
        var e = t.site,
        r = n.left,
        i = n.right;
        return e === i && (i = r, r = e),
        i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }
    function es(t, n) {
        return n[ + (n.left !== t.site)]
    }
    function rs(t, n) {
        return n[ + (n.left === t.site)]
    }
    function is() {
        for (var t, n, e, r, i = 0,
        a = VN.length; i < a; ++i) if ((t = VN[i]) && (r = (n = t.halfedges).length)) {
            var o = new Array(r),
            u = new Array(r);
            for (e = 0; e < r; ++e) o[e] = e,
            u[e] = ns(t, ZN[n[e]]);
            for (o.sort(function(t, n) {
                return u[n] - u[t]
            }), e = 0; e < r; ++e) u[e] = n[o[e]];
            for (e = 0; e < r; ++e) n[e] = u[e]
        }
    }
    function as(t, n, e, r) {
        var i, a, o, u, c, f, s, l, h, d, p, g, v = VN.length,
        y = !0;
        for (i = 0; i < v; ++i) if (a = VN[i]) {
            for (o = a.site, u = (c = a.halfedges).length; u--;) ZN[c[u]] || c.splice(u, 1);
            for (u = 0, f = c.length; u < f;) p = (d = rs(a, ZN[c[u]]))[0],
            g = d[1],
            l = (s = es(a, ZN[c[++u % f]]))[0],
            h = s[1],
            (Math.abs(p - l) > QN || Math.abs(g - h) > QN) && (c.splice(u, 0, ZN.push(Zf(o, d, Math.abs(p - t) < QN && r - g > QN ? [t, Math.abs(l - t) < QN ? h: r] : Math.abs(g - r) < QN && e - p > QN ? [Math.abs(h - r) < QN ? l: e, r] : Math.abs(p - e) < QN && g - n > QN ? [e, Math.abs(l - e) < QN ? h: n] : Math.abs(g - n) < QN && p - t > QN ? [Math.abs(h - n) < QN ? l: t, n] : null)) - 1), ++f);
            f && (y = !1)
        }
        if (y) {
            var b, m, _, x = 1 / 0;
            for (i = 0, y = null; i < v; ++i)(a = VN[i]) && (_ = (b = (o = a.site)[0] - t) * b + (m = o[1] - n) * m) < x && (x = _, y = a);
            if (y) {
                var w = [t, n],
                M = [t, r],
                S = [e, r],
                A = [e, n];
                y.halfedges.push(ZN.push(Zf(o = y.site, w, M)) - 1, ZN.push(Zf(o, M, S)) - 1, ZN.push(Zf(o, S, A)) - 1, ZN.push(Zf(o, A, w)) - 1)
            }
        }
        for (i = 0; i < v; ++i)(a = VN[i]) && (a.halfedges.length || delete VN[i])
    }
    function os() {
        Xf(this),
        this.x = this.y = this.arc = this.site = this.cy = null
    }
    function us(t) {
        var n = t.P,
        e = t.N;
        if (n && e) {
            var r = n.site,
            i = t.site,
            a = e.site;
            if (r !== a) {
                var o = i[0],
                u = i[1],
                c = r[0] - o,
                f = r[1] - u,
                s = a[0] - o,
                l = a[1] - u,
                h = 2 * (c * l - f * s);
                if (! (h >= -KN)) {
                    var d = c * c + f * f,
                    p = s * s + l * l,
                    g = (l * d - f * p) / h,
                    v = (c * p - s * d) / h,
                    y = GN.pop() || new os;
                    y.arc = t,
                    y.site = i,
                    y.x = g + o,
                    y.y = (y.cy = v + u) + Math.sqrt(g * g + v * v),
                    t.circle = y;
                    for (var b = null,
                    m = $N._; m;) if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                        if (!m.L) {
                            b = m.P;
                            break
                        }
                        m = m.L
                    } else {
                        if (!m.R) {
                            b = m;
                            break
                        }
                        m = m.R
                    }
                    $N.insert(b, y),
                    b || (BN = y)
                }
            }
        }
    }
    function cs(t) {
        var n = t.circle;
        n && (n.P || (BN = n.N), $N.remove(n), GN.push(n), Xf(n), t.circle = null)
    }
    function fs() {
        Xf(this),
        this.edge = this.site = this.circle = null
    }
    function ss(t) {
        var n = JN.pop() || new fs;
        return n.site = t,
        n
    }
    function ls(t) {
        cs(t),
        WN.remove(t),
        JN.push(t),
        Xf(t)
    }
    function hs(t) {
        var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        a = t.P,
        o = t.N,
        u = [t];
        ls(t);
        for (var c = a; c.circle && Math.abs(e - c.circle.x) < QN && Math.abs(r - c.circle.cy) < QN;) a = c.P,
        u.unshift(c),
        ls(c),
        c = a;
        u.unshift(c),
        cs(c);
        for (var f = o; f.circle && Math.abs(e - f.circle.x) < QN && Math.abs(r - f.circle.cy) < QN;) o = f.N,
        u.push(f),
        ls(f),
        f = o;
        u.push(f),
        cs(f);
        var s, l = u.length;
        for (s = 1; s < l; ++s) f = u[s],
        c = u[s - 1],
        Gf(f.edge, c.site, f.site, i);
        c = u[0],
        (f = u[l - 1]).edge = $f(c.site, f.site, null, i),
        us(c),
        us(f)
    }
    function ds(t) {
        for (var n, e, r, i, a = t[0], o = t[1], u = WN._; u;) if ((r = ps(u, o) - a) > QN) u = u.L;
        else {
            if (! ((i = a - gs(u, o)) > QN)) {
                r > -QN ? (n = u.P, e = u) : i > -QN ? (n = u, e = u.N) : n = e = u;
                break
            }
            if (!u.R) {
                n = u;
                break
            }
            u = u.R
        }
        ts(t);
        var c = ss(t);
        if (WN.insert(n, c), n || e) {
            if (n === e) return cs(n),
            e = ss(n.site),
            WN.insert(c, e),
            c.edge = e.edge = $f(n.site, c.site),
            us(n),
            void us(e);
            if (e) {
                cs(n),
                cs(e);
                var f = n.site,
                s = f[0],
                l = f[1],
                h = t[0] - s,
                d = t[1] - l,
                p = e.site,
                g = p[0] - s,
                v = p[1] - l,
                y = 2 * (h * v - d * g),
                b = h * h + d * d,
                m = g * g + v * v,
                _ = [(v * b - d * m) / y + s, (h * m - g * b) / y + l];
                Gf(e.edge, f, p, _),
                c.edge = $f(f, t, null, _),
                e.edge = $f(t, p, null, _),
                us(n),
                us(e)
            } else c.edge = $f(n.site, c.site)
        }
    }
    function ps(t, n) {
        var e = t.site,
        r = e[0],
        i = e[1],
        a = i - n;
        if (!a) return r;
        var o = t.P;
        if (!o) return - 1 / 0;
        var u = (e = o.site)[0],
        c = e[1],
        f = c - n;
        if (!f) return u;
        var s = u - r,
        l = 1 / a - 1 / f,
        h = s / f;
        return l ? ( - h + Math.sqrt(h * h - 2 * l * (s * s / ( - 2 * f) - c + f / 2 + i - a / 2))) / l + r: (r + u) / 2
    }
    function gs(t, n) {
        var e = t.N;
        if (e) return ps(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0
    }
    function vs(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }
    function ys(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }
    function bs(t, n) {
        var e, r, i, a = t.sort(ys).pop();
        for (ZN = [], VN = new Array(t.length), WN = new If, $N = new If;;) if (i = BN, a && (!i || a[1] < i.y || a[1] === i.y && a[0] < i.x)) a[0] === e && a[1] === r || (ds(a), e = a[0], r = a[1]),
        a = t.pop();
        else {
            if (!i) break;
            hs(i.arc)
        }
        if (is(), n) {
            var o = +n[0][0],
            u = +n[0][1],
            c = +n[1][0],
            f = +n[1][1];
            Kf(o, u, c, f),
            as(o, u, c, f)
        }
        this.edges = ZN,
        this.cells = VN,
        WN = $N = ZN = VN = null
    }
    function ms(t, n, e) {
        this.target = t,
        this.type = n,
        this.transform = e
    }
    function _s(t, n, e) {
        this.k = t,
        this.x = n,
        this.y = e
    }
    function xs(t) {
        return t.__zoom || nE
    }
    function ws() {
        m_.stopImmediatePropagation()
    }
    function Ms() {
        return ! m_.button
    }
    function Ss() {
        var t, n, e = this;
        return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight),
        [[0, 0], [t, n]]
    }
    function As() {
        return this.__zoom || nE
    }
    function Ts() {
        return - m_.deltaY * (m_.deltaMode ? 120 : 1) / 500
    }
    function ks() {
        return "ontouchstart" in this
    }
    function Cs() {
        for (var t, n = 0,
        e = arguments.length,
        r = {}; n < e; ++n) {
            if (! (t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new Ns(r)
    }
    function Ns(t) {
        this._ = t
    }
    function Es(t, n) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var e = "",
            r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        })
    }
    function Ds(t, n) {
        for (var e, r = 0,
        i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
    }
    function zs(t, n, e) {
        for (var r = 0,
        i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = hE,
            t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({
            name: n,
            value: e
        }),
        t
    }
    function Us(t) {
        return function() {
            var n = this.ownerDocument,
            e = this.namespaceURI;
            return e === dE && n.documentElement.namespaceURI === dE ? n.createElement(t) : n.createElementNS(e, t)
        }
    }
    function Ps(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    function Ls(t, n, e) {
        return t = Fs(t, n, e),
        function(n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }
    function Fs(t, n, e) {
        return function(r) {
            try {
                t.call(this, this.__data__, n, e)
            } finally {}
        }
    }
    function Rs(t) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var n = "",
            e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)),
            {
                type: t,
                name: n
            }
        })
    }
    function Hs(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0,
                i = -1,
                a = n.length; r < a; ++r) e = n[r],
                t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e: this.removeEventListener(e.type, e.listener, e.capture); ++i ? n.length = i: delete this.__on
            }
        }
    }
    function Os(t, n, e) {
        var r = xE.hasOwnProperty(t.type) ? Ls: Fs;
        return function(i, a, o) {
            var u, c = this.__on,
            f = r(n, a, o);
            if (c) for (var s = 0,
            l = c.length; s < l; ++s) if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture),
            this.addEventListener(u.type, u.listener = f, u.capture = e),
            void(u.value = n);
            this.addEventListener(t.type, f, e),
            u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: f,
                capture: e
            },
            c ? c.push(u) : this.__on = [u]
        }
    }
    function Ys() {}
    function js() {
        return []
    }
    function qs(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    function Is(t, n, e, r, i, a) {
        for (var o, u = 0,
        c = n.length,
        f = a.length; u < f; ++u)(o = n[u]) ? (o.__data__ = a[u], r[u] = o) : e[u] = new qs(t, a[u]);
        for (; u < c; ++u)(o = n[u]) && (i[u] = o)
    }
    function Xs(t, n, e, r, i, a, o) {
        var u, c, f, s = {},
        l = n.length,
        h = a.length,
        d = new Array(l);
        for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = TE + o.call(c, c.__data__, u, n), f in s ? i[u] = c: s[f] = c);
        for (u = 0; u < h; ++u)(c = s[f = TE + o.call(t, a[u], u, a)]) ? (r[u] = c, c.__data__ = a[u], s[f] = null) : e[u] = new qs(t, a[u]);
        for (u = 0; u < l; ++u)(c = n[u]) && s[d[u]] === c && (i[u] = c)
    }
    function Bs(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function Ws(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function Vs(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function $s(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }
    function Zs(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }
    function Gs(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }
    function Js(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }
    function Qs(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Ks(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }
    function tl(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }
    function nl(t, n) {
        return t.style.getPropertyValue(n) || kE(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function el(t) {
        return function() {
            delete this[t]
        }
    }
    function rl(t, n) {
        return function() {
            this[t] = n
        }
    }
    function il(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }
    function al(t) {
        return t.trim().split(/^|\s+/)
    }
    function ol(t) {
        return t.classList || new ul(t)
    }
    function ul(t) {
        this._node = t,
        this._names = al(t.getAttribute("class") || "")
    }
    function cl(t, n) {
        for (var e = ol(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }
    function fl(t, n) {
        for (var e = ol(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }
    function sl(t) {
        return function() {
            cl(this, t)
        }
    }
    function ll(t) {
        return function() {
            fl(this, t)
        }
    }
    function hl(t, n) {
        return function() { (n.apply(this, arguments) ? cl: fl)(this, t)
        }
    }
    function dl() {
        this.textContent = ""
    }
    function pl(t) {
        return function() {
            this.textContent = t
        }
    }
    function gl(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "": n
        }
    }
    function vl() {
        this.innerHTML = ""
    }
    function yl(t) {
        return function() {
            this.innerHTML = t
        }
    }
    function bl(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "": n
        }
    }
    function ml() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function _l() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function xl() {
        return null
    }
    function wl() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function Ml(t, n, e) {
        var r = kE(t),
        i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    function Sl(t, n) {
        return function() {
            return Ml(this, t, n)
        }
    }
    function Al(t, n) {
        return function() {
            return Ml(this, t, n.apply(this, arguments))
        }
    }
    function Tl(t, n) {
        this._groups = t,
        this._parents = n
    }
    function kl() {
        return new Tl([[document.documentElement]], CE)
    }
    function Cl(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }
    function Nl() {}
    function El(t) {
        var n;
        return t = (t + "").trim().toLowerCase(),
        (n = PE.exec(t)) ? (n = parseInt(n[1], 16), new Ll(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = LE.exec(t)) ? Dl(parseInt(n[1], 16)) : (n = FE.exec(t)) ? new Ll(n[1], n[2], n[3], 1) : (n = RE.exec(t)) ? new Ll(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = HE.exec(t)) ? zl(n[1], n[2], n[3], n[4]) : (n = OE.exec(t)) ? zl(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = YE.exec(t)) ? Fl(n[1], n[2] / 100, n[3] / 100, 1) : (n = jE.exec(t)) ? Fl(n[1], n[2] / 100, n[3] / 100, n[4]) : qE.hasOwnProperty(t) ? Dl(qE[t]) : "transparent" === t ? new Ll(NaN, NaN, NaN, 0) : null
    }
    function Dl(t) {
        return new Ll(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    function zl(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN),
        new Ll(t, n, e, r)
    }
    function Ul(t) {
        return t instanceof Nl || (t = El(t)),
        t ? (t = t.rgb(), new Ll(t.r, t.g, t.b, t.opacity)) : new Ll
    }
    function Pl(t, n, e, r) {
        return 1 === arguments.length ? Ul(t) : new Ll(t, n, e, null == r ? 1 : r)
    }
    function Ll(t, n, e, r) {
        this.r = +t,
        this.g = +n,
        this.b = +e,
        this.opacity = +r
    }
    function Fl(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN: e <= 0 || e >= 1 ? t = n = NaN: n <= 0 && (t = NaN),
        new Hl(t, n, e, r)
    }
    function Rl(t) {
        if (t instanceof Hl) return new Hl(t.h, t.s, t.l, t.opacity);
        if (t instanceof Nl || (t = El(t)), !t) return new Hl;
        if (t instanceof Hl) return t;
        var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        a = Math.max(n, e, r),
        o = NaN,
        u = a - i,
        c = (a + i) / 2;
        return u ? (o = n === a ? (e - r) / u + 6 * (e < r) : e === a ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? a + i: 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o,
        new Hl(o, u, c, t.opacity)
    }
    function Hl(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Ol(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e: t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    function Yl(t) {
        if (t instanceof jl) return new jl(t.l, t.a, t.b, t.opacity);
        if (t instanceof Vl) {
            var n = t.h * IE;
            return new jl(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Ll || (t = Ul(t));
        var e = Bl(t.r),
        r = Bl(t.g),
        i = Bl(t.b),
        a = ql((.4124564 * e + .3575761 * r + .1804375 * i) / BE),
        o = ql((.2126729 * e + .7151522 * r + .072175 * i) / WE);
        return new jl(116 * o - 16, 500 * (a - o), 200 * (o - ql((.0193339 * e + .119192 * r + .9503041 * i) / VE)), t.opacity)
    }
    function jl(t, n, e, r) {
        this.l = +t,
        this.a = +n,
        this.b = +e,
        this.opacity = +r
    }
    function ql(t) {
        return t > JE ? Math.pow(t, 1 / 3) : t / GE + $E
    }
    function Il(t) {
        return t > ZE ? t * t * t: GE * (t - $E)
    }
    function Xl(t) {
        return 255 * (t <= .0031308 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function Bl(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function Wl(t) {
        if (t instanceof Vl) return new Vl(t.h, t.c, t.l, t.opacity);
        t instanceof jl || (t = Yl(t));
        var n = Math.atan2(t.b, t.a) * XE;
        return new Vl(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }
    function Vl(t, n, e, r) {
        this.h = +t,
        this.c = +n,
        this.l = +e,
        this.opacity = +r
    }
    function $l(t) {
        if (t instanceof Gl) return new Gl(t.h, t.s, t.l, t.opacity);
        t instanceof Ll || (t = Ul(t));
        var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (rD * r + nD * n - eD * e) / (rD + nD - eD),
        a = r - i,
        o = (tD * (e - i) - QE * a) / KE,
        u = Math.sqrt(o * o + a * a) / (tD * i * (1 - i)),
        c = u ? Math.atan2(o, a) * XE - 120 : NaN;
        return new Gl(c < 0 ? c + 360 : c, u, i, t.opacity)
    }
    function Zl(t, n, e, r) {
        return 1 === arguments.length ? $l(t) : new Gl(t, n, e, null == r ? 1 : r)
    }
    function Gl(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Jl(t, n) {
        return function(e) {
            return t + e * n
        }
    }
    function Ql(t, n, e) {
        return t = Math.pow(t, e),
        n = Math.pow(n, e) - t,
        e = 1 / e,
        function(r) {
            return Math.pow(t + r * n, e)
        }
    }
    function Kl(t) {
        return 1 == (t = +t) ? th: function(n, e) {
            return e - n ? Ql(n, e, t) : cD(isNaN(n) ? e: n)
        }
    }
    function th(t, n) {
        var e = n - t;
        return e ? Jl(t, e) : cD(isNaN(t) ? n: t)
    }
    function nh(t) {
        return function() {
            return t
        }
    }
    function eh(t) {
        return function(n) {
            return t(n) + ""
        }
    }
    function rh(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " ": ""
        }
        function a(t, r, i, a, o, u) {
            if (t !== i || r !== a) {
                var c = o.push("translate(", null, n, null, e);
                u.push({
                    i: c - 4,
                    x: hD(t, i)
                },
                {
                    i: c - 2,
                    x: hD(r, a)
                })
            } else(i || a) && o.push("translate(" + i + n + a + e)
        }
        function o(t, n, e, a) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                i: e.push(i(e) + "rotate(", null, r) - 2,
                x: hD(t, n)
            })) : n && e.push(i(e) + "rotate(" + n + r)
        }
        function u(t, n, e, a) {
            t !== n ? a.push({
                i: e.push(i(e) + "skewX(", null, r) - 2,
                x: hD(t, n)
            }) : n && e.push(i(e) + "skewX(" + n + r)
        }
        function c(t, n, e, r, a, o) {
            if (t !== e || n !== r) {
                var u = a.push(i(a) + "scale(", null, ",", null, ")");
                o.push({
                    i: u - 4,
                    x: hD(t, e)
                },
                {
                    i: u - 2,
                    x: hD(n, r)
                })
            } else 1 === e && 1 === r || a.push(i(a) + "scale(" + e + "," + r + ")")
        }
        return function(n, e) {
            var r = [],
            i = [];
            return n = t(n),
            e = t(e),
            a(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
            o(n.rotate, e.rotate, r, i),
            u(n.skewX, e.skewX, r, i),
            c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
            n = e = null,
            function(t) {
                for (var n, e = -1,
                a = i.length; ++e < a;) r[(n = i[e]).i] = n.x(t);
                return r.join("")
            }
        }
    }
    function ih(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Zl(n)).h, (r = Zl(r)).h),
                a = th(n.s, r.s),
                o = th(n.l, r.l),
                u = th(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t),
                    n.s = a(t),
                    n.l = o(Math.pow(t, e)),
                    n.opacity = u(t),
                    n + ""
                }
            }
            return e = +e,
            r.gamma = n,
            r
        } (1)
    }
    function ah() {
        return UD || (FD(oh), UD = LD.now() + PD)
    }
    function oh() {
        UD = 0
    }
    function uh() {
        this._call = this._time = this._next = null
    }
    function ch(t, n, e) {
        var r = new uh;
        return r.restart(t, n, e),
        r
    }
    function fh() {
        ah(),
        ++CD;
        for (var t, n = AD; n;)(t = UD - n._time) >= 0 && n._call.call(null, t),
        n = n._next; --CD
    }
    function sh() {
        UD = (zD = LD.now()) + PD,
        CD = ND = 0;
        try {
            fh()
        } finally {
            CD = 0,
            hh(),
            UD = 0
        }
    }
    function lh() {
        var t = LD.now(),
        n = t - zD;
        n > DD && (PD -= n, zD = t)
    }
    function hh() {
        for (var t, n, e = AD,
        r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n: AD = n);
        TD = t,
        dh(r)
    }
    function dh(t) {
        CD || (ND && (ND = clearTimeout(ND)), t - UD > 24 ? (t < 1 / 0 && (ND = setTimeout(sh, t - LD.now() - PD)), ED && (ED = clearInterval(ED))) : (ED || (zD = LD.now(), ED = setInterval(lh, DD)), CD = 1, FD(sh)))
    }
    function ph(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > YD) throw new Error("too late");
        return e
    }
    function gh(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > qD) throw new Error("too late");
        return e
    }
    function vh(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("too late");
        return e
    }
    function yh(t, n, e) {
        function r(c) {
            var f, s, l, h;
            if (e.state !== jD) return a();
            for (f in u) if ((h = u[f]).name === e.name) {
                if (h.state === ID) return RD(r);
                h.state === XD ? (h.state = WD, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete u[f]) : +f < n && (h.state = WD, h.timer.stop(), delete u[f])
            }
            if (RD(function() {
                e.state === ID && (e.state = XD, e.timer.restart(i, e.delay, e.time), i(c))
            }), e.state = qD, e.on.call("start", t, t.__data__, e.index, e.group), e.state === qD) {
                for (e.state = ID, o = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (o[++s] = h);
                o.length = s + 1
            }
        }
        function i(n) {
            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = BD, 1), i = -1, u = o.length; ++i < u;) o[i].call(null, r);
            e.state === BD && (e.on.call("end", t, t.__data__, e.index, e.group), a())
        }
        function a() {
            e.state = WD,
            e.timer.stop(),
            delete u[n];
            for (var r in u) return;
            delete t.__transition
        }
        var o, u = t.__transition;
        u[n] = e,
        e.timer = ch(function(t) {
            e.state = jD,
            e.timer.restart(r, e.delay, e.time),
            e.delay <= t && r(t - e.delay)
        },
        0, e.time)
    }
    function bh(t, n) {
        var e, r;
        return function() {
            var i = gh(this, t),
            a = i.tween;
            if (a !== e) for (var o = 0,
            u = (r = e = a).length; o < u; ++o) if (r[o].name === n) { (r = r.slice()).splice(o, 1);
                break
            }
            i.tween = r
        }
    }
    function mh(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error;
        return function() {
            var a = gh(this, t),
            o = a.tween;
            if (o !== r) {
                i = (r = o).slice();
                for (var u = {
                    name: n,
                    value: e
                },
                c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
                    i[c] = u;
                    break
                }
                c === f && i.push(u)
            }
            a.tween = i
        }
    }
    function _h(t, n, e) {
        var r = t._id;
        return t.each(function() {
            var t = gh(this, r); (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }),
        function(t) {
            return vh(t, r).value[n]
        }
    }
    function xh(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function wh(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Mh(t, n, e) {
        var r, i;
        return function() {
            var a = this.getAttribute(t);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Sh(t, n, e) {
        var r, i;
        return function() {
            var a = this.getAttributeNS(t.space, t.local);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Ah(t, n, e) {
        var r, i, a;
        return function() {
            var o, u = e(this); {
                if (null != u) return (o = this.getAttribute(t)) === u ? null: o === r && u === i ? a: a = n(r = o, i = u);
                this.removeAttribute(t)
            }
        }
    }
    function Th(t, n, e) {
        var r, i, a;
        return function() {
            var o, u = e(this); {
                if (null != u) return (o = this.getAttributeNS(t.space, t.local)) === u ? null: o === r && u === i ? a: a = n(r = o, i = u);
                this.removeAttributeNS(t.space, t.local)
            }
        }
    }
    function kh(t, n) {
        function e() {
            var e = this,
            r = n.apply(e, arguments);
            return r &&
            function(n) {
                e.setAttributeNS(t.space, t.local, r(n))
            }
        }
        return e._value = n,
        e
    }
    function Ch(t, n) {
        function e() {
            var e = this,
            r = n.apply(e, arguments);
            return r &&
            function(n) {
                e.setAttribute(t, r(n))
            }
        }
        return e._value = n,
        e
    }
    function Nh(t, n) {
        return function() {
            ph(this, t).delay = +n.apply(this, arguments)
        }
    }
    function Eh(t, n) {
        return n = +n,
        function() {
            ph(this, t).delay = n
        }
    }
    function Dh(t, n) {
        return function() {
            gh(this, t).duration = +n.apply(this, arguments)
        }
    }
    function zh(t, n) {
        return n = +n,
        function() {
            gh(this, t).duration = n
        }
    }
    function Uh(t, n) {
        if ("function" != typeof n) throw new Error;
        return function() {
            gh(this, t).ease = n
        }
    }
    function Ph(t) {
        return (t + "").trim().split(/^|\s+/).every(function(t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)),
            !t || "start" === t
        })
    }
    function Lh(t, n, e) {
        var r, i, a = Ph(n) ? ph: gh;
        return function() {
            var o = a(this, t),
            u = o.on;
            u !== r && (i = (r = u).copy()).on(n, e),
            o.on = i
        }
    }
    function Fh(t) {
        return function() {
            var n = this.parentNode;
            for (var e in this.__transition) if ( + e !== t) return;
            n && n.removeChild(this)
        }
    }
    function Rh(t, n) {
        var e, r, i;
        return function() {
            var a = nl(this, t),
            o = (this.style.removeProperty(t), nl(this, t));
            return a === o ? null: a === e && o === r ? i: i = n(e = a, r = o)
        }
    }
    function Hh(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Oh(t, n, e) {
        var r, i;
        return function() {
            var a = nl(this, t);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Yh(t, n, e) {
        var r, i, a;
        return function() {
            var o = nl(this, t),
            u = e(this);
            return null == u && (this.style.removeProperty(t), u = nl(this, t)),
            o === u ? null: o === r && u === i ? a: a = n(r = o, i = u)
        }
    }
    function jh(t, n, e) {
        function r() {
            var r = this,
            i = n.apply(r, arguments);
            return i &&
            function(n) {
                r.style.setProperty(t, i(n), e)
            }
        }
        return r._value = n,
        r
    }
    function qh(t) {
        return function() {
            this.textContent = t
        }
    }
    function Ih(t) {
        return function() {
            var n = t(this);
            this.textContent = null == n ? "": n
        }
    }
    function Xh(t, n, e, r) {
        this._groups = t,
        this._parents = n,
        this._name = e,
        this._id = r
    }
    function Bh() {
        return++JD
    }
    function Wh(t, n) {
        for (var e; ! (e = t.__transition) || !(e = e[n]);) if (! (t = t.parentNode)) return KD.time = ah(),
        KD;
        return e
    }
    function Vh(t) {
        return {
            type: t
        }
    }
    function $h(t) {
        return function(n, e) {
            return tz(t(n), e)
        }
    }
    function Zh(t, n, e) {
        var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
        return i >= 0 ? (a >= ez ? 10 : a >= rz ? 5 : a >= iz ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= ez ? 10 : a >= rz ? 5 : a >= iz ? 2 : 1)
    }
    function Gh(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
        return a >= ez ? i *= 10 : a >= rz ? i *= 5 : a >= iz && (i *= 2),
        n < t ? -i: i
    }
    function Jh(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }
    function Qh(t, n) {
        var e = Jh(t);
        return function(r, i) {
            return n(e(r), i, t)
        }
    }
    function Kh(t) {
        var n = Object.create(null),
        e = [];
        return t.forEach(function(t) {
            for (var r in t) r in n || e.push(n[r] = r)
        }),
        e
    }
    function td(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, a, o, u, c, f, s, l, h, d = t._root,
        p = {
            data: r
        },
        g = t._x0,
        v = t._y0,
        y = t._x1,
        b = t._y1;
        if (!d) return t._root = p,
        t;
        for (; d.length;) if ((f = n >= (a = (g + y) / 2)) ? g = a: y = a, (s = e >= (o = (v + b) / 2)) ? v = o: b = o, i = d, !(d = d[l = s << 1 | f])) return i[l] = p,
        t;
        if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d,
        i ? i[l] = p: t._root = p,
        t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (a = (g + y) / 2)) ? g = a: y = a, (s = e >= (o = (v + b) / 2)) ? v = o: b = o
        } while (( l = s << 1 | f ) == (h = (c >= o) << 1 | u >= a));
        return i[h] = d,
        i[l] = p,
        t
    }
    function nd(t) {
        return t[0]
    }
    function ed(t) {
        return t[1]
    }
    function rd(t, n, e, r, i, a) {
        this._x = t,
        this._y = n,
        this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this._root = void 0
    }
    function id(t) {
        for (var n = {
            data: t.data
        },
        e = n; t = t.next;) e = e.next = {
            data: t.data
        };
        return n
    }
    function ad(t) {
        return new od(t)
    }
    function od(t) {
        if (! (n = xz.exec(t))) throw new Error("invalid format: " + t);
        var n, e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        a = n[4] || "",
        o = !!n[5],
        u = n[6] && +n[6],
        c = !!n[7],
        f = n[8] && +n[8].slice(1),
        s = n[9] || "";
        "n" === s ? (c = !0, s = "g") : _z[s] || (s = ""),
        (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="),
        this.fill = e,
        this.align = r,
        this.sign = i,
        this.symbol = a,
        this.zero = o,
        this.width = u,
        this.comma = c,
        this.precision = f,
        this.type = s
    }
    function ud() {
        this.reset()
    }
    function cd(t, n, e) {
        var r = t.s = n + e,
        i = r - n,
        a = r - i;
        t.t = n - a + (e - i)
    }
    function fd(t) {
        return t > 1 ? 0 : t < -1 ? Uz: Math.acos(t)
    }
    function sd(t) {
        return t > 1 ? Pz: t < -1 ? -Pz: Math.asin(t)
    }
    function ld(t) {
        return function(n, e) {
            var r = Rz(n),
            i = Rz(e),
            a = t(r * i);
            return [a * i * Hz(n), a * Hz(e)]
        }
    }
    function hd(t) {
        return function(n, e) {
            var r = Oz(n * n + e * e),
            i = t(r),
            a = Hz(i),
            o = Rz(i);
            return [Fz(n * a, r * o), sd(r && e * a / r)]
        }
    }
    function dd(t, n) {
        return (n -= t = +t) ?
        function(e) {
            return (e - t) / n
        }: Iz(n)
    }
    function pd(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= n ? 0 : t >= e ? 1 : r(t)
            }
        }
    }
    function gd(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= 0 ? n: t >= 1 ? e: r(t)
            }
        }
    }
    function vd(t, n, e, r) {
        var i = t[0],
        a = t[1],
        o = n[0],
        u = n[1];
        return a < i ? (i = e(a, i), o = r(u, o)) : (i = e(i, a), o = r(o, u)),
        function(t) {
            return o(i(t))
        }
    }
    function yd(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
        a = new Array(i),
        o = new Array(i),
        u = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;) a[u] = e(t[u], t[u + 1]),
        o[u] = r(n[u], n[u + 1]);
        return function(n) {
            var e = nz(t, n, 1, i) - 1;
            return o[e](a[e](n))
        }
    }
    function bd(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }
    function md(t, n) {
        function e() {
            return i = Math.min(u.length, c.length) > 2 ? yd: vd,
            a = o = null,
            r
        }
        function r(n) {
            return (a || (a = i(u, c, s ? pd(t) : t, f)))( + n)
        }
        var i, a, o, u = Bz,
        c = Bz,
        f = bD,
        s = !1;
        return r.invert = function(t) {
            return (o || (o = i(c, u, dd, s ? gd(n) : n)))( + t)
        },
        r.domain = function(t) {
            return arguments.length ? (u = jz.call(t, Xz), e()) : u.slice()
        },
        r.range = function(t) {
            return arguments.length ? (c = qz.call(t), e()) : c.slice()
        },
        r.rangeRound = function(t) {
            return c = qz.call(t),
            f = mD,
            e()
        },
        r.clamp = function(t) {
            return arguments.length ? (s = !!t, e()) : s
        },
        r.interpolate = function(t) {
            return arguments.length ? (f = t, e()) : f
        },
        e()
    }
    function _d(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return az(e[0], e[e.length - 1], null == t ? 10 : t)
        },
        t.tickFormat = function(t, e) {
            return Wz(n(), t, e)
        },
        t.nice = function(e) {
            null == e && (e = 10);
            var r, i = n(),
            a = 0,
            o = i.length - 1,
            u = i[a],
            c = i[o];
            return c < u && (r = u, u = c, c = r, r = a, a = o, o = r),
            (r = Zh(u, c, e)) > 0 ? r = Zh(u = Math.floor(u / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = Zh(u = Math.ceil(u * r) / r, c = Math.floor(c * r) / r, e)),
            r > 0 ? (i[a] = Math.floor(u / r) * r, i[o] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[a] = Math.ceil(u * r) / r, i[o] = Math.floor(c * r) / r, n(i)),
            t
        },
        t
    }
    function xd() {
        var t = md(dd, hD);
        return t.copy = function() {
            return bd(t, xd())
        },
        _d(t)
    }
    function wd(t, n, e, r) {
        function i(n) {
            return t(n = new Date( + n)),
            n
        }
        return i.floor = i,
        i.ceil = function(e) {
            return t(e = new Date(e - 1)),
            n(e, 1),
            t(e),
            e
        },
        i.round = function(t) {
            var n = i(t),
            e = i.ceil(t);
            return t - n < e - t ? n: e
        },
        i.offset = function(t, e) {
            return n(t = new Date( + t), null == e ? 1 : Math.floor(e)),
            t
        },
        i.range = function(e, r, a) {
            var o = [];
            if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < r && a > 0)) return o;
            do {
                o.push(new Date( + e))
            } while ( n ( e , a ), t(e), e < r);
            return o
        },
        i.filter = function(e) {
            return wd(function(n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            },
            function(t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t););
                else for (; --r >= 0;) for (; n(t, 1), !e(t););
            })
        },
        e && (i.count = function(n, r) {
            return Vz.setTime( + n),
            $z.setTime( + r),
            t(Vz),
            t($z),
            Math.floor(e(Vz, $z))
        },
        i.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? i.filter(r ?
            function(n) {
                return r(n) % t == 0
            }: function(n) {
                return i.count(0, n) % t == 0
            }) : i: null
        }),
        i
    }
    function Md(t) {
        return wd(function(n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
            n.setHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setDate(t.getDate() + 7 * n)
        },
        function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Gz) / Jz
        })
    }
    function Sd(t) {
        return wd(function(n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        },
        function(t, n) {
            return (n - t) / Jz
        })
    }
    function Ad(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date( - 1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    function Td(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC( - 1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function kd(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    function Cd(t) {
        function n(t, n) {
            return function(e) {
                var r, i, a, o = [],
                u = -1,
                c = 0,
                f = t.length;
                for (e instanceof Date || (e = new Date( + e)); ++u < f;) 37 === t.charCodeAt(u) && (o.push(t.slice(c, u)), null != (i = fU[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " ": "0", (a = n[r]) && (r = a(e, i)), o.push(r), c = u + 1);
                return o.push(t.slice(c, u)),
                o.join("")
            }
        }
        function e(t, n) {
            return function(e) {
                var i = kd(1900);
                if (r(i, t, e += "", 0) != e.length) return null;
                if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                    "w" in i || (i.w = "W" in i ? 1 : 0);
                    var a = "Z" in i ? Td(kd(i.y)).getUTCDay() : n(kd(i.y)).getDay();
                    i.m = 0,
                    i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7
                }
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Td(i)) : n(i)
            }
        }
        function r(t, n, e, r) {
            for (var i, a, o = 0,
            u = n.length,
            c = e.length; o < u;) {
                if (r >= c) return - 1;
                if (37 === (i = n.charCodeAt(o++))) {
                    if (i = n.charAt(o++), !(a = S[i in fU ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0) return - 1
                } else if (i != e.charCodeAt(r++)) return - 1
            }
            return r
        }
        var i = t.dateTime,
        a = t.date,
        o = t.time,
        u = t.periods,
        c = t.days,
        f = t.shortDays,
        s = t.months,
        l = t.shortMonths,
        h = Dd(u),
        d = zd(u),
        p = Dd(c),
        g = zd(c),
        v = Dd(f),
        y = zd(f),
        b = Dd(s),
        m = zd(s),
        _ = Dd(l),
        x = zd(l),
        w = {
            a: function(t) {
                return f[t.getDay()]
            },
            A: function(t) {
                return c[t.getDay()]
            },
            b: function(t) {
                return l[t.getMonth()]
            },
            B: function(t) {
                return s[t.getMonth()]
            },
            c: null,
            d: Vd,
            e: Vd,
            H: $d,
            I: Zd,
            j: Gd,
            L: Jd,
            m: Qd,
            M: Kd,
            p: function(t) {
                return u[ + (t.getHours() >= 12)]
            },
            S: tp,
            U: np,
            w: ep,
            W: rp,
            x: null,
            X: null,
            y: ip,
            Y: ap,
            Z: op,
            "%": xp
        },
        M = {
            a: function(t) {
                return f[t.getUTCDay()]
            },
            A: function(t) {
                return c[t.getUTCDay()]
            },
            b: function(t) {
                return l[t.getUTCMonth()]
            },
            B: function(t) {
                return s[t.getUTCMonth()]
            },
            c: null,
            d: up,
            e: up,
            H: cp,
            I: fp,
            j: sp,
            L: lp,
            m: hp,
            M: dp,
            p: function(t) {
                return u[ + (t.getUTCHours() >= 12)]
            },
            S: pp,
            U: gp,
            w: vp,
            W: yp,
            x: null,
            X: null,
            y: bp,
            Y: mp,
            Z: _p,
            "%": xp
        },
        S = {
            a: function(t, n, e) {
                var r = v.exec(n.slice(e));
                return r ? (t.w = y[r[0].toLowerCase()], e + r[0].length) : -1
            },
            A: function(t, n, e) {
                var r = p.exec(n.slice(e));
                return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1
            },
            b: function(t, n, e) {
                var r = _.exec(n.slice(e));
                return r ? (t.m = x[r[0].toLowerCase()], e + r[0].length) : -1
            },
            B: function(t, n, e) {
                var r = b.exec(n.slice(e));
                return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1
            },
            c: function(t, n, e) {
                return r(t, i, n, e)
            },
            d: Yd,
            e: Yd,
            H: qd,
            I: qd,
            j: jd,
            L: Bd,
            m: Od,
            M: Id,
            p: function(t, n, e) {
                var r = h.exec(n.slice(e));
                return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1
            },
            S: Xd,
            U: Pd,
            w: Ud,
            W: Ld,
            x: function(t, n, e) {
                return r(t, a, n, e)
            },
            X: function(t, n, e) {
                return r(t, o, n, e)
            },
            y: Rd,
            Y: Fd,
            Z: Hd,
            "%": Wd
        };
        return w.x = n(a, w),
        w.X = n(o, w),
        w.c = n(i, w),
        M.x = n(a, M),
        M.X = n(o, M),
        M.c = n(i, M),
        {
            format: function(t) {
                var e = n(t += "", w);
                return e.toString = function() {
                    return t
                },
                e
            },
            parse: function(t) {
                var n = e(t += "", Ad);
                return n.toString = function() {
                    return t
                },
                n
            },
            utcFormat: function(t) {
                var e = n(t += "", M);
                return e.toString = function() {
                    return t
                },
                e
            },
            utcParse: function(t) {
                var n = e(t, Td);
                return n.toString = function() {
                    return t
                },
                n
            }
        }
    }
    function Nd(t, n, e) {
        var r = t < 0 ? "-": "",
        i = (r ? -t: t) + "",
        a = i.length;
        return r + (a < e ? new Array(e - a + 1).join(n) + i: i)
    }
    function Ed(t) {
        return t.replace(hU, "\\$&")
    }
    function Dd(t) {
        return new RegExp("^(?:" + t.map(Ed).join("|") + ")", "i")
    }
    function zd(t) {
        for (var n = {},
        e = -1,
        r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }
    function Ud(t, n, e) {
        var r = sU.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }
    function Pd(t, n, e) {
        var r = sU.exec(n.slice(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }
    function Ld(t, n, e) {
        var r = sU.exec(n.slice(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }
    function Fd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }
    function Rd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + ( + r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }
    function Hd(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }
    function Od(t, n, e) {
        var r = sU.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }
    function Yd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }
    function jd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }
    function qd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }
    function Id(t, n, e) {
        var r = sU.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }
    function Xd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }
    function Bd(t, n, e) {
        var r = sU.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }
    function Wd(t, n, e) {
        var r = lU.exec(n.slice(e, e + 1));
        return r ? e + r[0].length: -1
    }
    function Vd(t, n) {
        return Nd(t.getDate(), n, 2)
    }
    function $d(t, n) {
        return Nd(t.getHours(), n, 2)
    }
    function Zd(t, n) {
        return Nd(t.getHours() % 12 || 12, n, 2)
    }
    function Gd(t, n) {
        return Nd(1 + Qz.count(nU(t), t), n, 3)
    }
    function Jd(t, n) {
        return Nd(t.getMilliseconds(), n, 3)
    }
    function Qd(t, n) {
        return Nd(t.getMonth() + 1, n, 2)
    }
    function Kd(t, n) {
        return Nd(t.getMinutes(), n, 2)
    }
    function tp(t, n) {
        return Nd(t.getSeconds(), n, 2)
    }
    function np(t, n) {
        return Nd(Kz.count(nU(t), t), n, 2)
    }
    function ep(t) {
        return t.getDay()
    }
    function rp(t, n) {
        return Nd(tU.count(nU(t), t), n, 2)
    }
    function ip(t, n) {
        return Nd(t.getFullYear() % 100, n, 2)
    }
    function ap(t, n) {
        return Nd(t.getFullYear() % 1e4, n, 4)
    }
    function op(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-": (n *= -1, "+")) + Nd(n / 60 | 0, "0", 2) + Nd(n % 60, "0", 2)
    }
    function up(t, n) {
        return Nd(t.getUTCDate(), n, 2)
    }
    function cp(t, n) {
        return Nd(t.getUTCHours(), n, 2)
    }
    function fp(t, n) {
        return Nd(t.getUTCHours() % 12 || 12, n, 2)
    }
    function sp(t, n) {
        return Nd(1 + eU.count(aU(t), t), n, 3)
    }
    function lp(t, n) {
        return Nd(t.getUTCMilliseconds(), n, 3)
    }
    function hp(t, n) {
        return Nd(t.getUTCMonth() + 1, n, 2)
    }
    function dp(t, n) {
        return Nd(t.getUTCMinutes(), n, 2)
    }
    function pp(t, n) {
        return Nd(t.getUTCSeconds(), n, 2)
    }
    function gp(t, n) {
        return Nd(rU.count(aU(t), t), n, 2)
    }
    function vp(t) {
        return t.getUTCDay()
    }
    function yp(t, n) {
        return Nd(iU.count(aU(t), t), n, 2)
    }
    function bp(t, n) {
        return Nd(t.getUTCFullYear() % 100, n, 2)
    }
    function mp(t, n) {
        return Nd(t.getUTCFullYear() % 1e4, n, 4)
    }
    function _p() {
        return "+0000"
    }
    function xp() {
        return "%"
    }
    function wp(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    function Mp(t) {
        return t < 0 ? -1 : 1
    }
    function Sp(t, n, e) {
        var r = t._x1 - t._x0,
        i = n - t._x1,
        a = (t._y1 - t._y0) / (r || i < 0 && -0),
        o = (e - t._y1) / (i || r < 0 && -0),
        u = (a * i + o * r) / (r + i);
        return (Mp(a) + Mp(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
    }
    function Ap(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    function Tp(t, n, e) {
        var r = t._x0,
        i = t._y0,
        a = t._x1,
        o = t._y1,
        u = (a - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, a - u, o - u * e, a, o)
    }
    function kp(t) {
        this._context = t
    }
    function Cp(t) {
        this._context = t
    }
    function Np(t) {
        return function() {
            var n = this.ownerDocument,
            e = this.namespaceURI;
            return e === bU && n.documentElement.namespaceURI === bU ? n.createElement(t) : n.createElementNS(e, t)
        }
    }
    function Ep(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    function Dp(t, n, e) {
        return t = zp(t, n, e),
        function(n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }
    function zp(t, n, e) {
        return function(r) {
            try {
                t.call(this, this.__data__, n, e)
            } finally {}
        }
    }
    function Up(t) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var n = "",
            e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)),
            {
                type: t,
                name: n
            }
        })
    }
    function Pp(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0,
                i = -1,
                a = n.length; r < a; ++r) e = n[r],
                t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e: this.removeEventListener(e.type, e.listener, e.capture); ++i ? n.length = i: delete this.__on
            }
        }
    }
    function Lp(t, n, e) {
        var r = TU.hasOwnProperty(t.type) ? Dp: zp;
        return function(i, a, o) {
            var u, c = this.__on,
            f = r(n, a, o);
            if (c) for (var s = 0,
            l = c.length; s < l; ++s) if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture),
            this.addEventListener(u.type, u.listener = f, u.capture = e),
            void(u.value = n);
            this.addEventListener(t.type, f, e),
            u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: f,
                capture: e
            },
            c ? c.push(u) : this.__on = [u]
        }
    }
    function Fp() {}
    function Rp() {
        return []
    }
    function Hp(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    function Op(t, n, e, r, i, a) {
        for (var o, u = 0,
        c = n.length,
        f = a.length; u < f; ++u)(o = n[u]) ? (o.__data__ = a[u], r[u] = o) : e[u] = new Hp(t, a[u]);
        for (; u < c; ++u)(o = n[u]) && (i[u] = o)
    }
    function Yp(t, n, e, r, i, a, o) {
        var u, c, f, s = {},
        l = n.length,
        h = a.length,
        d = new Array(l);
        for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = DU + o.call(c, c.__data__, u, n), f in s ? i[u] = c: s[f] = c);
        for (u = 0; u < h; ++u)(c = s[f = DU + o.call(t, a[u], u, a)]) ? (r[u] = c, c.__data__ = a[u], s[f] = null) : e[u] = new Hp(t, a[u]);
        for (u = 0; u < l; ++u)(c = n[u]) && s[d[u]] === c && (i[u] = c)
    }
    function jp(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function qp(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function Ip(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Xp(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }
    function Bp(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }
    function Wp(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }
    function Vp(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }
    function $p(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Zp(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }
    function Gp(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }
    function Jp(t, n) {
        return t.style.getPropertyValue(n) || zU(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function Qp(t) {
        return function() {
            delete this[t]
        }
    }
    function Kp(t, n) {
        return function() {
            this[t] = n
        }
    }
    function tg(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }
    function ng(t) {
        return t.trim().split(/^|\s+/)
    }
    function eg(t) {
        return t.classList || new rg(t)
    }
    function rg(t) {
        this._node = t,
        this._names = ng(t.getAttribute("class") || "")
    }
    function ig(t, n) {
        for (var e = eg(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }
    function ag(t, n) {
        for (var e = eg(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }
    function og(t) {
        return function() {
            ig(this, t)
        }
    }
    function ug(t) {
        return function() {
            ag(this, t)
        }
    }
    function cg(t, n) {
        return function() { (n.apply(this, arguments) ? ig: ag)(this, t)
        }
    }
    function fg() {
        this.textContent = ""
    }
    function sg(t) {
        return function() {
            this.textContent = t
        }
    }
    function lg(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "": n
        }
    }
    function hg() {
        this.innerHTML = ""
    }
    function dg(t) {
        return function() {
            this.innerHTML = t
        }
    }
    function pg(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "": n
        }
    }
    function gg() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function vg() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function yg() {
        return null
    }
    function bg() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function mg(t, n, e) {
        var r = zU(t),
        i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    function _g(t, n) {
        return function() {
            return mg(this, t, n)
        }
    }
    function xg(t, n) {
        return function() {
            return mg(this, t, n.apply(this, arguments))
        }
    }
    function wg(t, n) {
        this._groups = t,
        this._parents = n
    }
    function Mg(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    }
    function Sg() {
        for (var t, n = 0,
        e = arguments.length,
        r = {}; n < e; ++n) {
            if (! (t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new Ag(r)
    }
    function Ag(t) {
        this._ = t
    }
    function Tg(t, n) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var e = "",
            r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        })
    }
    function kg(t, n) {
        for (var e, r = 0,
        i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
    }
    function Cg(t, n, e) {
        for (var r = 0,
        i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = IU,
            t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({
            name: n,
            value: e
        }),
        t
    }
    function Ng(t) {
        return function() {
            var n = this.ownerDocument,
            e = this.namespaceURI;
            return e === XU && n.documentElement.namespaceURI === XU ? n.createElement(t) : n.createElementNS(e, t)
        }
    }
    function Eg(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    function Dg(t, n, e) {
        return t = zg(t, n, e),
        function(n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }
    function zg(t, n, e) {
        return function(r) {
            try {
                t.call(this, this.__data__, n, e)
            } finally {}
        }
    }
    function Ug(t) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var n = "",
            e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)),
            {
                type: t,
                name: n
            }
        })
    }
    function Pg(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0,
                i = -1,
                a = n.length; r < a; ++r) e = n[r],
                t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e: this.removeEventListener(e.type, e.listener, e.capture); ++i ? n.length = i: delete this.__on
            }
        }
    }
    function Lg(t, n, e) {
        var r = QU.hasOwnProperty(t.type) ? Dg: zg;
        return function(i, a, o) {
            var u, c = this.__on,
            f = r(n, a, o);
            if (c) for (var s = 0,
            l = c.length; s < l; ++s) if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture),
            this.addEventListener(u.type, u.listener = f, u.capture = e),
            void(u.value = n);
            this.addEventListener(t.type, f, e),
            u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: f,
                capture: e
            },
            c ? c.push(u) : this.__on = [u]
        }
    }
    function Fg() {}
    function Rg() {
        return []
    }
    function Hg(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    function Og(t, n, e, r, i, a) {
        for (var o, u = 0,
        c = n.length,
        f = a.length; u < f; ++u)(o = n[u]) ? (o.__data__ = a[u], r[u] = o) : e[u] = new Hg(t, a[u]);
        for (; u < c; ++u)(o = n[u]) && (i[u] = o)
    }
    function Yg(t, n, e, r, i, a, o) {
        var u, c, f, s = {},
        l = n.length,
        h = a.length,
        d = new Array(l);
        for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = rP + o.call(c, c.__data__, u, n), f in s ? i[u] = c: s[f] = c);
        for (u = 0; u < h; ++u)(c = s[f = rP + o.call(t, a[u], u, a)]) ? (r[u] = c, c.__data__ = a[u], s[f] = null) : e[u] = new Hg(t, a[u]);
        for (u = 0; u < l; ++u)(c = n[u]) && s[d[u]] === c && (i[u] = c)
    }
    function jg(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function qg(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function Ig(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Xg(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }
    function Bg(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }
    function Wg(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }
    function Vg(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }
    function $g(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Zg(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }
    function Gg(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }
    function Jg(t, n) {
        return t.style.getPropertyValue(n) || iP(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function Qg(t) {
        return function() {
            delete this[t]
        }
    }
    function Kg(t, n) {
        return function() {
            this[t] = n
        }
    }
    function tv(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }
    function nv(t) {
        return t.trim().split(/^|\s+/)
    }
    function ev(t) {
        return t.classList || new rv(t)
    }
    function rv(t) {
        this._node = t,
        this._names = nv(t.getAttribute("class") || "")
    }
    function iv(t, n) {
        for (var e = ev(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }
    function av(t, n) {
        for (var e = ev(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }
    function ov(t) {
        return function() {
            iv(this, t)
        }
    }
    function uv(t) {
        return function() {
            av(this, t)
        }
    }
    function cv(t, n) {
        return function() { (n.apply(this, arguments) ? iv: av)(this, t)
        }
    }
    function fv() {
        this.textContent = ""
    }
    function sv(t) {
        return function() {
            this.textContent = t
        }
    }
    function lv(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "": n
        }
    }
    function hv() {
        this.innerHTML = ""
    }
    function dv(t) {
        return function() {
            this.innerHTML = t
        }
    }
    function pv(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "": n
        }
    }
    function gv() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function vv() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function yv() {
        return null
    }
    function bv() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function mv(t, n, e) {
        var r = iP(t),
        i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    function _v(t, n) {
        return function() {
            return mv(this, t, n)
        }
    }
    function xv(t, n) {
        return function() {
            return mv(this, t, n.apply(this, arguments))
        }
    }
    function wv(t, n) {
        this._groups = t,
        this._parents = n
    }
    function Mv() {
        return new wv([[document.documentElement]], aP)
    }
    function Sv(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }
    function Av() {}
    function Tv(t) {
        var n;
        return t = (t + "").trim().toLowerCase(),
        (n = lP.exec(t)) ? (n = parseInt(n[1], 16), new Dv(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = hP.exec(t)) ? kv(parseInt(n[1], 16)) : (n = dP.exec(t)) ? new Dv(n[1], n[2], n[3], 1) : (n = pP.exec(t)) ? new Dv(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = gP.exec(t)) ? Cv(n[1], n[2], n[3], n[4]) : (n = vP.exec(t)) ? Cv(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = yP.exec(t)) ? zv(n[1], n[2] / 100, n[3] / 100, 1) : (n = bP.exec(t)) ? zv(n[1], n[2] / 100, n[3] / 100, n[4]) : mP.hasOwnProperty(t) ? kv(mP[t]) : "transparent" === t ? new Dv(NaN, NaN, NaN, 0) : null
    }
    function kv(t) {
        return new Dv(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    function Cv(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN),
        new Dv(t, n, e, r)
    }
    function Nv(t) {
        return t instanceof Av || (t = Tv(t)),
        t ? (t = t.rgb(), new Dv(t.r, t.g, t.b, t.opacity)) : new Dv
    }
    function Ev(t, n, e, r) {
        return 1 === arguments.length ? Nv(t) : new Dv(t, n, e, null == r ? 1 : r)
    }
    function Dv(t, n, e, r) {
        this.r = +t,
        this.g = +n,
        this.b = +e,
        this.opacity = +r
    }
    function zv(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN: e <= 0 || e >= 1 ? t = n = NaN: n <= 0 && (t = NaN),
        new Pv(t, n, e, r)
    }
    function Uv(t) {
        if (t instanceof Pv) return new Pv(t.h, t.s, t.l, t.opacity);
        if (t instanceof Av || (t = Tv(t)), !t) return new Pv;
        if (t instanceof Pv) return t;
        var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        a = Math.max(n, e, r),
        o = NaN,
        u = a - i,
        c = (a + i) / 2;
        return u ? (o = n === a ? (e - r) / u + 6 * (e < r) : e === a ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? a + i: 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o,
        new Pv(o, u, c, t.opacity)
    }
    function Pv(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Lv(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e: t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    function Fv(t) {
        if (t instanceof Rv) return new Rv(t.l, t.a, t.b, t.opacity);
        if (t instanceof Iv) {
            var n = t.h * _P;
            return new Rv(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Dv || (t = Nv(t));
        var e = jv(t.r),
        r = jv(t.g),
        i = jv(t.b),
        a = Hv((.4124564 * e + .3575761 * r + .1804375 * i) / wP),
        o = Hv((.2126729 * e + .7151522 * r + .072175 * i) / MP);
        return new Rv(116 * o - 16, 500 * (a - o), 200 * (o - Hv((.0193339 * e + .119192 * r + .9503041 * i) / SP)), t.opacity)
    }
    function Rv(t, n, e, r) {
        this.l = +t,
        this.a = +n,
        this.b = +e,
        this.opacity = +r
    }
    function Hv(t) {
        return t > CP ? Math.pow(t, 1 / 3) : t / kP + AP
    }
    function Ov(t) {
        return t > TP ? t * t * t: kP * (t - AP)
    }
    function Yv(t) {
        return 255 * (t <= .0031308 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function jv(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function qv(t) {
        if (t instanceof Iv) return new Iv(t.h, t.c, t.l, t.opacity);
        t instanceof Rv || (t = Fv(t));
        var n = Math.atan2(t.b, t.a) * xP;
        return new Iv(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }
    function Iv(t, n, e, r) {
        this.h = +t,
        this.c = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Xv(t) {
        if (t instanceof Wv) return new Wv(t.h, t.s, t.l, t.opacity);
        t instanceof Dv || (t = Nv(t));
        var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (PP * r + zP * n - UP * e) / (PP + zP - UP),
        a = r - i,
        o = (DP * (e - i) - NP * a) / EP,
        u = Math.sqrt(o * o + a * a) / (DP * i * (1 - i)),
        c = u ? Math.atan2(o, a) * xP - 120 : NaN;
        return new Wv(c < 0 ? c + 360 : c, u, i, t.opacity)
    }
    function Bv(t, n, e, r) {
        return 1 === arguments.length ? Xv(t) : new Wv(t, n, e, null == r ? 1 : r)
    }
    function Wv(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Vv(t, n) {
        return function(e) {
            return t + e * n
        }
    }
    function $v(t, n, e) {
        return t = Math.pow(t, e),
        n = Math.pow(n, e) - t,
        e = 1 / e,
        function(r) {
            return Math.pow(t + r * n, e)
        }
    }
    function Zv(t) {
        return 1 == (t = +t) ? Gv: function(n, e) {
            return e - n ? $v(n, e, t) : OP(isNaN(n) ? e: n)
        }
    }
    function Gv(t, n) {
        var e = n - t;
        return e ? Vv(t, e) : OP(isNaN(t) ? n: t)
    }
    function Jv(t) {
        return function() {
            return t
        }
    }
    function Qv(t) {
        return function(n) {
            return t(n) + ""
        }
    }
    function Kv(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " ": ""
        }
        function a(t, r, i, a, o, u) {
            if (t !== i || r !== a) {
                var c = o.push("translate(", null, n, null, e);
                u.push({
                    i: c - 4,
                    x: IP(t, i)
                },
                {
                    i: c - 2,
                    x: IP(r, a)
                })
            } else(i || a) && o.push("translate(" + i + n + a + e)
        }
        function o(t, n, e, a) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                i: e.push(i(e) + "rotate(", null, r) - 2,
                x: IP(t, n)
            })) : n && e.push(i(e) + "rotate(" + n + r)
        }
        function u(t, n, e, a) {
            t !== n ? a.push({
                i: e.push(i(e) + "skewX(", null, r) - 2,
                x: IP(t, n)
            }) : n && e.push(i(e) + "skewX(" + n + r)
        }
        function c(t, n, e, r, a, o) {
            if (t !== e || n !== r) {
                var u = a.push(i(a) + "scale(", null, ",", null, ")");
                o.push({
                    i: u - 4,
                    x: IP(t, e)
                },
                {
                    i: u - 2,
                    x: IP(n, r)
                })
            } else 1 === e && 1 === r || a.push(i(a) + "scale(" + e + "," + r + ")")
        }
        return function(n, e) {
            var r = [],
            i = [];
            return n = t(n),
            e = t(e),
            a(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
            o(n.rotate, e.rotate, r, i),
            u(n.skewX, e.skewX, r, i),
            c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
            n = e = null,
            function(t) {
                for (var n, e = -1,
                a = i.length; ++e < a;) r[(n = i[e]).i] = n.x(t);
                return r.join("")
            }
        }
    }
    function ty(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Bv(n)).h, (r = Bv(r)).h),
                a = Gv(n.s, r.s),
                o = Gv(n.l, r.l),
                u = Gv(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t),
                    n.s = a(t),
                    n.l = o(Math.pow(t, e)),
                    n.opacity = u(t),
                    n + ""
                }
            }
            return e = +e,
            r.gamma = n,
            r
        } (1)
    }
    function ny() {
        return sL || (dL(ey), sL = hL.now() + lL)
    }
    function ey() {
        sL = 0
    }
    function ry() {
        this._call = this._time = this._next = null
    }
    function iy(t, n, e) {
        var r = new ry;
        return r.restart(t, n, e),
        r
    }
    function ay() {
        ny(),
        ++aL;
        for (var t, n = eL; n;)(t = sL - n._time) >= 0 && n._call.call(null, t),
        n = n._next; --aL
    }
    function oy() {
        sL = (fL = hL.now()) + lL,
        aL = oL = 0;
        try {
            ay()
        } finally {
            aL = 0,
            cy(),
            sL = 0
        }
    }
    function uy() {
        var t = hL.now(),
        n = t - fL;
        n > cL && (lL -= n, fL = t)
    }
    function cy() {
        for (var t, n, e = eL,
        r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n: eL = n);
        rL = t,
        fy(r)
    }
    function fy(t) {
        aL || (oL && (oL = clearTimeout(oL)), t - sL > 24 ? (t < 1 / 0 && (oL = setTimeout(oy, t - hL.now() - lL)), uL && (uL = clearInterval(uL))) : (uL || (fL = hL.now(), uL = setInterval(uy, cL)), aL = 1, dL(oy)))
    }
    function sy(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > yL) throw new Error("too late");
        return e
    }
    function ly(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > mL) throw new Error("too late");
        return e
    }
    function hy(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("too late");
        return e
    }
    function dy(t, n, e) {
        function r(c) {
            var f, s, l, h;
            if (e.state !== bL) return a();
            for (f in u) if ((h = u[f]).name === e.name) {
                if (h.state === _L) return pL(r);
                h.state === xL ? (h.state = ML, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete u[f]) : +f < n && (h.state = ML, h.timer.stop(), delete u[f])
            }
            if (pL(function() {
                e.state === _L && (e.state = xL, e.timer.restart(i, e.delay, e.time), i(c))
            }), e.state = mL, e.on.call("start", t, t.__data__, e.index, e.group), e.state === mL) {
                for (e.state = _L, o = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (o[++s] = h);
                o.length = s + 1
            }
        }
        function i(n) {
            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = wL, 1), i = -1, u = o.length; ++i < u;) o[i].call(null, r);
            e.state === wL && (e.on.call("end", t, t.__data__, e.index, e.group), a())
        }
        function a() {
            e.state = ML,
            e.timer.stop(),
            delete u[n];
            for (var r in u) return;
            delete t.__transition
        }
        var o, u = t.__transition;
        u[n] = e,
        e.timer = iy(function(t) {
            e.state = bL,
            e.timer.restart(r, e.delay, e.time),
            e.delay <= t && r(t - e.delay)
        },
        0, e.time)
    }
    function py(t, n) {
        var e, r;
        return function() {
            var i = ly(this, t),
            a = i.tween;
            if (a !== e) for (var o = 0,
            u = (r = e = a).length; o < u; ++o) if (r[o].name === n) { (r = r.slice()).splice(o, 1);
                break
            }
            i.tween = r
        }
    }
    function gy(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error;
        return function() {
            var a = ly(this, t),
            o = a.tween;
            if (o !== r) {
                i = (r = o).slice();
                for (var u = {
                    name: n,
                    value: e
                },
                c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
                    i[c] = u;
                    break
                }
                c === f && i.push(u)
            }
            a.tween = i
        }
    }
    function vy(t, n, e) {
        var r = t._id;
        return t.each(function() {
            var t = ly(this, r); (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }),
        function(t) {
            return hy(t, r).value[n]
        }
    }
    function yy(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function by(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function my(t, n, e) {
        var r, i;
        return function() {
            var a = this.getAttribute(t);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function _y(t, n, e) {
        var r, i;
        return function() {
            var a = this.getAttributeNS(t.space, t.local);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function xy(t, n, e) {
        var r, i, a;
        return function() {
            var o, u = e(this); {
                if (null != u) return (o = this.getAttribute(t)) === u ? null: o === r && u === i ? a: a = n(r = o, i = u);
                this.removeAttribute(t)
            }
        }
    }
    function wy(t, n, e) {
        var r, i, a;
        return function() {
            var o, u = e(this); {
                if (null != u) return (o = this.getAttributeNS(t.space, t.local)) === u ? null: o === r && u === i ? a: a = n(r = o, i = u);
                this.removeAttributeNS(t.space, t.local)
            }
        }
    }
    function My(t, n) {
        function e() {
            var e = this,
            r = n.apply(e, arguments);
            return r &&
            function(n) {
                e.setAttributeNS(t.space, t.local, r(n))
            }
        }
        return e._value = n,
        e
    }
    function Sy(t, n) {
        function e() {
            var e = this,
            r = n.apply(e, arguments);
            return r &&
            function(n) {
                e.setAttribute(t, r(n))
            }
        }
        return e._value = n,
        e
    }
    function Ay(t, n) {
        return function() {
            sy(this, t).delay = +n.apply(this, arguments)
        }
    }
    function Ty(t, n) {
        return n = +n,
        function() {
            sy(this, t).delay = n
        }
    }
    function ky(t, n) {
        return function() {
            ly(this, t).duration = +n.apply(this, arguments)
        }
    }
    function Cy(t, n) {
        return n = +n,
        function() {
            ly(this, t).duration = n
        }
    }
    function Ny(t, n) {
        if ("function" != typeof n) throw new Error;
        return function() {
            ly(this, t).ease = n
        }
    }
    function Ey(t) {
        return (t + "").trim().split(/^|\s+/).every(function(t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)),
            !t || "start" === t
        })
    }
    function Dy(t, n, e) {
        var r, i, a = Ey(n) ? sy: ly;
        return function() {
            var o = a(this, t),
            u = o.on;
            u !== r && (i = (r = u).copy()).on(n, e),
            o.on = i
        }
    }
    function zy(t) {
        return function() {
            var n = this.parentNode;
            for (var e in this.__transition) if ( + e !== t) return;
            n && n.removeChild(this)
        }
    }
    function Uy(t, n) {
        var e, r, i;
        return function() {
            var a = Jg(this, t),
            o = (this.style.removeProperty(t), Jg(this, t));
            return a === o ? null: a === e && o === r ? i: i = n(e = a, r = o)
        }
    }
    function Py(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function Ly(t, n, e) {
        var r, i;
        return function() {
            var a = Jg(this, t);
            return a === e ? null: a === r ? i: i = n(r = a, e)
        }
    }
    function Fy(t, n, e) {
        var r, i, a;
        return function() {
            var o = Jg(this, t),
            u = e(this);
            return null == u && (this.style.removeProperty(t), u = Jg(this, t)),
            o === u ? null: o === r && u === i ? a: a = n(r = o, i = u)
        }
    }
    function Ry(t, n, e) {
        function r() {
            var r = this,
            i = n.apply(r, arguments);
            return i &&
            function(n) {
                r.style.setProperty(t, i(n), e)
            }
        }
        return r._value = n,
        r
    }
    function Hy(t) {
        return function() {
            this.textContent = t
        }
    }
    function Oy(t) {
        return function() {
            var n = t(this);
            this.textContent = null == n ? "": n
        }
    }
    function Yy(t, n, e, r) {
        this._groups = t,
        this._parents = n,
        this._name = e,
        this._id = r
    }
    function jy() {
        return++CL
    }
    function qy(t, n) {
        for (var e; ! (e = t.__transition) || !(e = e[n]);) if (! (t = t.parentNode)) return EL.time = ny(),
        EL;
        return e
    }
    function Iy(t) {
        return {
            type: t
        }
    }
    function Xy(t) {
        return function(n, e) {
            return DL(t(n), e)
        }
    }
    function By(t, n, e) {
        var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
        return i >= 0 ? (a >= UL ? 10 : a >= PL ? 5 : a >= LL ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= UL ? 10 : a >= PL ? 5 : a >= LL ? 2 : 1)
    }
    function Wy(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
        return a >= UL ? i *= 10 : a >= PL ? i *= 5 : a >= LL && (i *= 2),
        n < t ? -i: i
    }
    function Vy(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }
    function $y(t, n) {
        var e = Vy(t);
        return function(r, i) {
            return n(e(r), i, t)
        }
    }
    function Zy(t) {
        var n = Object.create(null),
        e = [];
        return t.forEach(function(t) {
            for (var r in t) r in n || e.push(n[r] = r)
        }),
        e
    }
    function Gy(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, a, o, u, c, f, s, l, h, d = t._root,
        p = {
            data: r
        },
        g = t._x0,
        v = t._y0,
        y = t._x1,
        b = t._y1;
        if (!d) return t._root = p,
        t;
        for (; d.length;) if ((f = n >= (a = (g + y) / 2)) ? g = a: y = a, (s = e >= (o = (v + b) / 2)) ? v = o: b = o, i = d, !(d = d[l = s << 1 | f])) return i[l] = p,
        t;
        if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d,
        i ? i[l] = p: t._root = p,
        t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (a = (g + y) / 2)) ? g = a: y = a, (s = e >= (o = (v + b) / 2)) ? v = o: b = o
        } while (( l = s << 1 | f ) == (h = (c >= o) << 1 | u >= a));
        return i[h] = d,
        i[l] = p,
        t
    }
    function Jy(t) {
        return t[0]
    }
    function Qy(t) {
        return t[1]
    }
    function Ky(t, n, e, r, i, a) {
        this._x = t,
        this._y = n,
        this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this._root = void 0
    }
    function tb(t) {
        for (var n = {
            data: t.data
        },
        e = n; t = t.next;) e = e.next = {
            data: t.data
        };
        return n
    }
    function nb(t) {
        return new eb(t)
    }
    function eb(t) {
        if (! (n = QL.exec(t))) throw new Error("invalid format: " + t);
        var n, e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        a = n[4] || "",
        o = !!n[5],
        u = n[6] && +n[6],
        c = !!n[7],
        f = n[8] && +n[8].slice(1),
        s = n[9] || "";
        "n" === s ? (c = !0, s = "g") : JL[s] || (s = ""),
        (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="),
        this.fill = e,
        this.align = r,
        this.sign = i,
        this.symbol = a,
        this.zero = o,
        this.width = u,
        this.comma = c,
        this.precision = f,
        this.type = s
    }
    function rb() {
        this.reset()
    }
    function ib(t, n, e) {
        var r = t.s = n + e,
        i = r - n,
        a = r - i;
        t.t = n - a + (e - i)
    }
    function ab(t) {
        return t > 1 ? 0 : t < -1 ? sF: Math.acos(t)
    }
    function ob(t) {
        return t > 1 ? lF: t < -1 ? -lF: Math.asin(t)
    }
    function ub(t) {
        return function(n, e) {
            var r = pF(n),
            i = pF(e),
            a = t(r * i);
            return [a * i * gF(n), a * gF(e)]
        }
    }
    function cb(t) {
        return function(n, e) {
            var r = vF(n * n + e * e),
            i = t(r),
            a = gF(i),
            o = pF(i);
            return [dF(n * a, r * o), ob(r && e * a / r)]
        }
    }
    function fb(t, n) {
        return (n -= t = +t) ?
        function(e) {
            return (e - t) / n
        }: _F(n)
    }
    function sb(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= n ? 0 : t >= e ? 1 : r(t)
            }
        }
    }
    function lb(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= 0 ? n: t >= 1 ? e: r(t)
            }
        }
    }
    function hb(t, n, e, r) {
        var i = t[0],
        a = t[1],
        o = n[0],
        u = n[1];
        return a < i ? (i = e(a, i), o = r(u, o)) : (i = e(i, a), o = r(o, u)),
        function(t) {
            return o(i(t))
        }
    }
    function db(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
        a = new Array(i),
        o = new Array(i),
        u = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;) a[u] = e(t[u], t[u + 1]),
        o[u] = r(n[u], n[u + 1]);
        return function(n) {
            var e = zL(t, n, 1, i) - 1;
            return o[e](a[e](n))
        }
    }
    function pb(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }
    function gb(t, n) {
        function e() {
            return i = Math.min(u.length, c.length) > 2 ? db: hb,
            a = o = null,
            r
        }
        function r(n) {
            return (a || (a = i(u, c, s ? sb(t) : t, f)))( + n)
        }
        var i, a, o, u = wF,
        c = wF,
        f = ZP,
        s = !1;
        return r.invert = function(t) {
            return (o || (o = i(c, u, fb, s ? lb(n) : n)))( + t)
        },
        r.domain = function(t) {
            return arguments.length ? (u = bF.call(t, xF), e()) : u.slice()
        },
        r.range = function(t) {
            return arguments.length ? (c = mF.call(t), e()) : c.slice()
        },
        r.rangeRound = function(t) {
            return c = mF.call(t),
            f = GP,
            e()
        },
        r.clamp = function(t) {
            return arguments.length ? (s = !!t, e()) : s
        },
        r.interpolate = function(t) {
            return arguments.length ? (f = t, e()) : f
        },
        e()
    }
    function vb(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return FL(e[0], e[e.length - 1], null == t ? 10 : t)
        },
        t.tickFormat = function(t, e) {
            return MF(n(), t, e)
        },
        t.nice = function(e) {
            null == e && (e = 10);
            var r, i = n(),
            a = 0,
            o = i.length - 1,
            u = i[a],
            c = i[o];
            return c < u && (r = u, u = c, c = r, r = a, a = o, o = r),
            (r = By(u, c, e)) > 0 ? r = By(u = Math.floor(u / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = By(u = Math.ceil(u * r) / r, c = Math.floor(c * r) / r, e)),
            r > 0 ? (i[a] = Math.floor(u / r) * r, i[o] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[a] = Math.ceil(u * r) / r, i[o] = Math.floor(c * r) / r, n(i)),
            t
        },
        t
    }
    function yb() {
        var t = gb(fb, IP);
        return t.copy = function() {
            return pb(t, yb())
        },
        vb(t)
    }
    function bb(t, n, e, r) {
        function i(n) {
            return t(n = new Date( + n)),
            n
        }
        return i.floor = i,
        i.ceil = function(e) {
            return t(e = new Date(e - 1)),
            n(e, 1),
            t(e),
            e
        },
        i.round = function(t) {
            var n = i(t),
            e = i.ceil(t);
            return t - n < e - t ? n: e
        },
        i.offset = function(t, e) {
            return n(t = new Date( + t), null == e ? 1 : Math.floor(e)),
            t
        },
        i.range = function(e, r, a) {
            var o = [];
            if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < r && a > 0)) return o;
            do {
                o.push(new Date( + e))
            } while ( n ( e , a ), t(e), e < r);
            return o
        },
        i.filter = function(e) {
            return bb(function(n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            },
            function(t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t););
                else for (; --r >= 0;) for (; n(t, 1), !e(t););
            })
        },
        e && (i.count = function(n, r) {
            return SF.setTime( + n),
            AF.setTime( + r),
            t(SF),
            t(AF),
            Math.floor(e(SF, AF))
        },
        i.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? i.filter(r ?
            function(n) {
                return r(n) % t == 0
            }: function(n) {
                return i.count(0, n) % t == 0
            }) : i: null
        }),
        i
    }
    function mb(t) {
        return bb(function(n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
            n.setHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setDate(t.getDate() + 7 * n)
        },
        function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * kF) / CF
        })
    }
    function _b(t) {
        return bb(function(n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        },
        function(t, n) {
            return (n - t) / CF
        })
    }
    function xb(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date( - 1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    function wb(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC( - 1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function Mb(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    function Sb(t) {
        function n(t, n) {
            return function(e) {
                var r, i, a, o = [],
                u = -1,
                c = 0,
                f = t.length;
                for (e instanceof Date || (e = new Date( + e)); ++u < f;) 37 === t.charCodeAt(u) && (o.push(t.slice(c, u)), null != (i = YF[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " ": "0", (a = n[r]) && (r = a(e, i)), o.push(r), c = u + 1);
                return o.push(t.slice(c, u)),
                o.join("")
            }
        }
        function e(t, n) {
            return function(e) {
                var i = Mb(1900);
                if (r(i, t, e += "", 0) != e.length) return null;
                if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                    "w" in i || (i.w = "W" in i ? 1 : 0);
                    var a = "Z" in i ? wb(Mb(i.y)).getUTCDay() : n(Mb(i.y)).getDay();
                    i.m = 0,
                    i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7
                }
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, wb(i)) : n(i)
            }
        }
        function r(t, n, e, r) {
            for (var i, a, o = 0,
            u = n.length,
            c = e.length; o < u;) {
                if (r >= c) return - 1;
                if (37 === (i = n.charCodeAt(o++))) {
                    if (i = n.charAt(o++), !(a = S[i in YF ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0) return - 1
                } else if (i != e.charCodeAt(r++)) return - 1
            }
            return r
        }
        var i = t.dateTime,
        a = t.date,
        o = t.time,
        u = t.periods,
        c = t.days,
        f = t.shortDays,
        s = t.months,
        l = t.shortMonths,
        h = kb(u),
        d = Cb(u),
        p = kb(c),
        g = Cb(c),
        v = kb(f),
        y = Cb(f),
        b = kb(s),
        m = Cb(s),
        _ = kb(l),
        x = Cb(l),
        w = {
            a: function(t) {
                return f[t.getDay()]
            },
            A: function(t) {
                return c[t.getDay()]
            },
            b: function(t) {
                return l[t.getMonth()]
            },
            B: function(t) {
                return s[t.getMonth()]
            },
            c: null,
            d: Ib,
            e: Ib,
            H: Xb,
            I: Bb,
            j: Wb,
            L: Vb,
            m: $b,
            M: Zb,
            p: function(t) {
                return u[ + (t.getHours() >= 12)]
            },
            S: Gb,
            U: Jb,
            w: Qb,
            W: Kb,
            x: null,
            X: null,
            y: tm,
            Y: nm,
            Z: em,
            "%": ym
        },
        M = {
            a: function(t) {
                return f[t.getUTCDay()]
            },
            A: function(t) {
                return c[t.getUTCDay()]
            },
            b: function(t) {
                return l[t.getUTCMonth()]
            },
            B: function(t) {
                return s[t.getUTCMonth()]
            },
            c: null,
            d: rm,
            e: rm,
            H: im,
            I: am,
            j: om,
            L: um,
            m: cm,
            M: fm,
            p: function(t) {
                return u[ + (t.getUTCHours() >= 12)]
            },
            S: sm,
            U: lm,
            w: hm,
            W: dm,
            x: null,
            X: null,
            y: pm,
            Y: gm,
            Z: vm,
            "%": ym
        },
        S = {
            a: function(t, n, e) {
                var r = v.exec(n.slice(e));
                return r ? (t.w = y[r[0].toLowerCase()], e + r[0].length) : -1
            },
            A: function(t, n, e) {
                var r = p.exec(n.slice(e));
                return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1
            },
            b: function(t, n, e) {
                var r = _.exec(n.slice(e));
                return r ? (t.m = x[r[0].toLowerCase()], e + r[0].length) : -1
            },
            B: function(t, n, e) {
                var r = b.exec(n.slice(e));
                return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1
            },
            c: function(t, n, e) {
                return r(t, i, n, e)
            },
            d: Fb,
            e: Fb,
            H: Hb,
            I: Hb,
            j: Rb,
            L: jb,
            m: Lb,
            M: Ob,
            p: function(t, n, e) {
                var r = h.exec(n.slice(e));
                return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1
            },
            S: Yb,
            U: Eb,
            w: Nb,
            W: Db,
            x: function(t, n, e) {
                return r(t, a, n, e)
            },
            X: function(t, n, e) {
                return r(t, o, n, e)
            },
            y: Ub,
            Y: zb,
            Z: Pb,
            "%": qb
        };
        return w.x = n(a, w),
        w.X = n(o, w),
        w.c = n(i, w),
        M.x = n(a, M),
        M.X = n(o, M),
        M.c = n(i, M),
        {
            format: function(t) {
                var e = n(t += "", w);
                return e.toString = function() {
                    return t
                },
                e
            },
            parse: function(t) {
                var n = e(t += "", xb);
                return n.toString = function() {
                    return t
                },
                n
            },
            utcFormat: function(t) {
                var e = n(t += "", M);
                return e.toString = function() {
                    return t
                },
                e
            },
            utcParse: function(t) {
                var n = e(t, wb);
                return n.toString = function() {
                    return t
                },
                n
            }
        }
    }
    function Ab(t, n, e) {
        var r = t < 0 ? "-": "",
        i = (r ? -t: t) + "",
        a = i.length;
        return r + (a < e ? new Array(e - a + 1).join(n) + i: i)
    }
    function Tb(t) {
        return t.replace(IF, "\\$&")
    }
    function kb(t) {
        return new RegExp("^(?:" + t.map(Tb).join("|") + ")", "i")
    }
    function Cb(t) {
        for (var n = {},
        e = -1,
        r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }
    function Nb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }
    function Eb(t, n, e) {
        var r = jF.exec(n.slice(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }
    function Db(t, n, e) {
        var r = jF.exec(n.slice(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }
    function zb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }
    function Ub(t, n, e) {
        var r = jF.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + ( + r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }
    function Pb(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }
    function Lb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }
    function Fb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }
    function Rb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }
    function Hb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }
    function Ob(t, n, e) {
        var r = jF.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }
    function Yb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }
    function jb(t, n, e) {
        var r = jF.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }
    function qb(t, n, e) {
        var r = qF.exec(n.slice(e, e + 1));
        return r ? e + r[0].length: -1
    }
    function Ib(t, n) {
        return Ab(t.getDate(), n, 2)
    }
    function Xb(t, n) {
        return Ab(t.getHours(), n, 2)
    }
    function Bb(t, n) {
        return Ab(t.getHours() % 12 || 12, n, 2)
    }
    function Wb(t, n) {
        return Ab(1 + NF.count(zF(t), t), n, 3)
    }
    function Vb(t, n) {
        return Ab(t.getMilliseconds(), n, 3)
    }
    function $b(t, n) {
        return Ab(t.getMonth() + 1, n, 2)
    }
    function Zb(t, n) {
        return Ab(t.getMinutes(), n, 2)
    }
    function Gb(t, n) {
        return Ab(t.getSeconds(), n, 2)
    }
    function Jb(t, n) {
        return Ab(EF.count(zF(t), t), n, 2)
    }
    function Qb(t) {
        return t.getDay()
    }
    function Kb(t, n) {
        return Ab(DF.count(zF(t), t), n, 2)
    }
    function tm(t, n) {
        return Ab(t.getFullYear() % 100, n, 2)
    }
    function nm(t, n) {
        return Ab(t.getFullYear() % 1e4, n, 4)
    }
    function em(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-": (n *= -1, "+")) + Ab(n / 60 | 0, "0", 2) + Ab(n % 60, "0", 2)
    }
    function rm(t, n) {
        return Ab(t.getUTCDate(), n, 2)
    }
    function im(t, n) {
        return Ab(t.getUTCHours(), n, 2)
    }
    function am(t, n) {
        return Ab(t.getUTCHours() % 12 || 12, n, 2)
    }
    function om(t, n) {
        return Ab(1 + UF.count(FF(t), t), n, 3)
    }
    function um(t, n) {
        return Ab(t.getUTCMilliseconds(), n, 3)
    }
    function cm(t, n) {
        return Ab(t.getUTCMonth() + 1, n, 2)
    }
    function fm(t, n) {
        return Ab(t.getUTCMinutes(), n, 2)
    }
    function sm(t, n) {
        return Ab(t.getUTCSeconds(), n, 2)
    }
    function lm(t, n) {
        return Ab(PF.count(FF(t), t), n, 2)
    }
    function hm(t) {
        return t.getUTCDay()
    }
    function dm(t, n) {
        return Ab(LF.count(FF(t), t), n, 2)
    }
    function pm(t, n) {
        return Ab(t.getUTCFullYear() % 100, n, 2)
    }
    function gm(t, n) {
        return Ab(t.getUTCFullYear() % 1e4, n, 4)
    }
    function vm() {
        return "+0000"
    }
    function ym() {
        return "%"
    }
    function bm(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    function mm(t) {
        return t < 0 ? -1 : 1
    }
    function _m(t, n, e) {
        var r = t._x1 - t._x0,
        i = n - t._x1,
        a = (t._y1 - t._y0) / (r || i < 0 && -0),
        o = (e - t._y1) / (i || r < 0 && -0),
        u = (a * i + o * r) / (r + i);
        return (mm(a) + mm(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
    }
    function xm(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    function wm(t, n, e) {
        var r = t._x0,
        i = t._y0,
        a = t._x1,
        o = t._y1,
        u = (a - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, a - u, o - u * e, a, o)
    }
    function Mm(t) {
        this._context = t
    }
    function Sm(t) {
        this._context = t
    }
    function Am(t, n) {
        var e = t.split(/(\d+)/),
        r = n.split(/(\d+)/);
        e.length && "" == e[e.length - 1] && e.pop(),
        r.length && "" == r[r.length - 1] && r.pop();
        for (var i = 0,
        a = Math.max(e.length, r.length); i < a; i++) {
            if (e.length == i || r.length == i) return e.length - r.length;
            if (e[i] != r[i]) return e[i].match(/\d/) ? +e[i] - +r[i] : e[i].toLowerCase() > r[i].toLowerCase() ? 1 : -1
        }
        return 0
    } !
    function(t, n) {
        if ("undefined" == typeof document) return n;
        t = t || "";
        var e = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
        r.type = "text/css",
        e.appendChild(r),
        r.styleSheet ? r.styleSheet.cssText = t: r.appendChild(document.createTextNode(t))
   // } (".timelines-chart {\n\n    text-align: center;\n\n    /* Cancel selection interaction */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.timelines-chart .axises line, .timelines-chart .axises path {\n\n    stroke: #808080;\n}\n\n.timelines-chart .axises .x-axis {\n\n    font: 12px sans-serif;\n}\n\n.timelines-chart .axises .x-grid line {\n\n    stroke: #000;display:none;\n}\n\n.timelines-chart .axises .y-axis line, .timelines-chart .axises .y-axis path, .timelines-chart .axises .grp-axis line, .timelines-chart .axises .grp-axis path {\n\n    stroke: none;\n}\n\n.timelines-chart .axises .y-axis text, .timelines-chart .axises .grp-axis text {\n\n    fill: #eeeeee;\n}\n\n.timelines-chart .series-group {\n\n    fill-opacity: 0;\n\n    stroke: #808080;\n\n    stroke-opacity: 0.2;\n}\n\n.timelines-chart .series-segment {\n\n    stroke: none;\n}\n\n.timelines-chart .series-group, .timelines-chart .series-segment {\n\n    cursor: crosshair;\n}\n\n.timelines-chart .legend {\n\n    font-family: Sans-Serif;\n}\n\n.timelines-chart .legend .legendText {\n\n    fill: #666;\n}\n\n.timelines-chart .reset-zoom-btn {\n\n    font-family: sans-serif;\n\n    fill: #eeeeee;\n\n    opacity: .6;\n\n    cursor: pointer;\n}\n\n.brusher .grid-background {\n\n    fill: lightgrey;\n}\n\n.brusher .axis path {\n\n    display: none;\n}\n\n.brusher .tick text {\n\n    text-anchor: middle;\n}\n\n.brusher .grid line, .brusher .grid path {\n\n    stroke: #fff;\n}\n\n.brusher .grid .minor.tick line {\n\n    stroke-opacity: .5;\n}\n\n.chart-zoom-selection, .brusher .brush .selection {\n    stroke: blue;\n    stroke-opacity: 0.6;\n    fill: blue;\n    fill-opacity: 0.3;\n    shape-rendering: crispEdges;\n}\n\n.chart-tooltip {\n    color: #eee;\n    background: rgba(0,0,140,0.85);\n    padding: 5px;\n    border-radius: 3px;\n    font: 11px sans-serif;\n    z-index: 4000;\n}\n\n.chart-tooltip.group-tooltip {\n\n    font-size: 14px;\n}\n\n.chart-tooltip.line-tooltip {\n\n    font-size: 13px;\n}\n\n.chart-tooltip.group-tooltip, .chart-tooltip.line-tooltip {\n\n    font-weight: bold;\n}\n\n.chart-tooltip.segment-tooltip {\n\n    text-align: center;\n}", void 0);
} (".timelines-chart {\n\n    text-align: center;\n\n    /* Cancel selection interaction */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.timelines-chart .axises line, .timelines-chart .axises path {\n\n    stroke: #808080;\n}\n\n.timelines-chart .axises .x-axis {\n\n    font: #B2DFEE 12px sans-serif;\n}\n\n.timelines-chart .axises .x-grid line {\n\n    stroke: #000;display:none;\n}\n\n.timelines-chart .axises .y-axis line, .timelines-chart .axises .y-axis path, .timelines-chart .axises .grp-axis line, .timelines-chart .axises .grp-axis path {\n\n    stroke: none;\n}\n\n.timelines-chart .axises .y-axis text, .timelines-chart .axises .grp-axis text {\n\n    fill: #eeeeee;\n}\n\n.timelines-chart .series-group {\n\n    fill-opacity: 0;\n\n    stroke: #808080;\n\n    stroke-opacity: 0.2;\n}\n\n.timelines-chart .series-segment {\n\n    stroke: none;\n}\n\n.timelines-chart .series-group, .timelines-chart .series-segment {\n\n    cursor: crosshair;\n}\n\n.timelines-chart .legend {\n\n    font-family: Sans-Serif;\n}\n\n.timelines-chart .legend .legendText {\n\n    fill: #666;\n}\n\n.timelines-chart .reset-zoom-btn {\n\n    font-family: sans-serif;\n\n    fill: #eeeeee;\n\n    opacity: .0;\n\n    cursor: pointer;\n}\n\n.brusher .grid-background {\n\n    fill: lightgrey;fill-opacity: 0\n}\n\n.brusher .axis path {\n\n    display: none;\n}\n\n.brusher .tick text {\n\n    text-anchor: middle;\n}\n\n.brusher .grid line, .brusher .grid path {\n\n    stroke: #fff;\n}\n\n.brusher .grid .minor.tick line {\n\n    stroke-opacity: .5;\n}\n\n.chart-zoom-selection, .brusher .brush .selection {\n    stroke: #eeeeee;\n    stroke-opacity: 0.6;\n    fill: #eeeeee;\n    fill-opacity: 0.01;\n    shape-rendering: crispEdges;\n}\n\n.chart-tooltip {\n    color: #eee;\n    background: rgba(0,0,140,0.85);\n    padding: 5px;\n    border-radius: 3px;\n    font: 11px sans-serif;\n    z-index: 4000;\n}\n\n.chart-tooltip.group-tooltip {\n\n    font-size: 14px;\n}\n\n.chart-tooltip.line-tooltip {\n\n    font-size: 13px;\n}\n\n.chart-tooltip.group-tooltip, .chart-tooltip.line-tooltip {\n\n    font-weight: bold;\n}\n\n.chart-tooltip.segment-tooltip {\n\n    text-align: center;\n}", void 0);
          
    var Tm = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {},
    km = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
    },
    Cm = (function() {
        function t(t) {
            this.value = t
        }
        function n(n) {
            function e(i, a) {
                try {
                    var o = n[i](a),
                    u = o.value;
                    u instanceof t ? Promise.resolve(u.value).then(function(t) {
                        e("next", t)
                    },
                    function(t) {
                        e("throw", t)
                    }) : r(o.done ? "return": "normal", o.value)
                } catch(t) {
                    r("throw", t)
                }
            }
            function r(t, n) {
                switch (t) {
                case "return":
                    i.resolve({
                        value:
                        n,
                        done: !0
                    });
                    break;
                case "throw":
                    i.reject(n);
                    break;
                default:
                    i.resolve({
                        value:
                        n,
                        done: !1
                    })
                } (i = i.next) ? e(i.key, i.arg) : a = null
            }
            var i, a;
            this._invoke = function(t, n) {
                return new Promise(function(r, o) {
                    var u = {
                        key: t,
                        arg: n,
                        resolve: r,
                        reject: o,
                        next: null
                    };
                    a ? a = a.next = u: (i = a = u, e(t, n))
                })
            },
            "function" != typeof n.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        n.prototype.next = function(t) {
            return this._invoke("next", t)
        },
        n.prototype.
        throw = function(t) {
            return this._invoke("throw", t)
        },
        n.prototype.
        return = function(t) {
            return this._invoke("return", t)
        }
    } (),
    function(t) {
        if (Array.isArray(t)) {
            for (var n = 0,
            e = Array(t.length); n < t.length; n++) e[n] = t[n];
            return e
        }
        return Array.from(t)
    }),
    Nm = function(t) {
        return t && t.__esModule ? t.
    default:
        t
    } (t(function(t, n) { !
        function(e, r) {
            "object" == (void 0 === n ? "undefined": km(n)) && "object" == (void 0 === t ? "undefined": km(t)) ? t.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == (void 0 === n ? "undefined": km(n)) ? n.Kapsule = r() : e.Kapsule = r()
        } (Tm,
        function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                var e = {};
                return n.m = t,
                n.c = e,
                n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                },
                n.n = function(t) {
                    var e = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return n.d(e, "a", e),
                    e
                },
                n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(t, n, e) {
                var r, i, a; !
                function(o, u) {
                    i = [t, n, e(1)],
                    void 0 !== (a = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = a)
                } (0,
                function(t, n, e) {
                    function r(t, n) {
                        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.
                default = function(t) {
                        var n = t.stateInit,
                        e = void 0 === n ? {}: n,
                        r = t.props,
                        o = void 0 === r ? {}: r,
                        u = t.methods,
                        c = void 0 === u ? {}: u,
                        f = t.init,
                        s = void 0 === f ?
                        function() {}: f,
                        l = t.update,
                        h = void 0 === l ?
                        function() {}: l,
                        d = Object.keys(o).map(function(t) {
                            return new a(t, o[t])
                        });
                        return function() {
                            function t(e) {
                                return a(e, n),
                                o(),
                                t
                            }
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = Object.assign({},
                            e, {
                                initialised: !1
                            }),
                            a = function(n, e) {
                                s.call(t, n, r, e),
                                r.initialised = !0
                            },
                            o = (0, i.
                        default)(function() {
                                r.initialised && h.call(t, r)
                            },
                            1);
                            return d.forEach(function(n) {
                                t[n.name] = function(n) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t, n) {};
                                    return function(a) {
                                        return arguments.length ? (r[n] = a, i.call(t, a, r), e && o(), t) : r[n]
                                    }
                                } (n.name, n.triggerUpdate, n.onChange)
                            }),
                            Object.keys(c).forEach(function(n) {
                                t[n] = function() {
                                    for (var e, i = arguments.length,
                                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                    return (e = c[n]).call.apply(e, [t, r].concat(a))
                                }
                            }),
                            t.resetProps = function() {
                                return d.forEach(function(n) {
                                    t[n.name](n.defaultVal)
                                }),
                                t
                            },
                            t.resetProps(),
                            r._rerender = o,
                            t
                        }
                    };
                    var i = function(t) {
                        return t && t.__esModule ? t: {
                        default:
                            t
                        }
                    } (e),
                    a = function t(n, e) {
                        var i = e.
                    default,
                        a = void 0 === i ? null: i,
                        o = e.triggerUpdate,
                        u = void 0 === o || o,
                        c = e.onChange,
                        f = void 0 === c ?
                        function(t, n) {}: c;
                        r(this, t),
                        this.name = n,
                        this.defaultVal = a,
                        this.triggerUpdate = u,
                        this.onChange = f
                    };
                    t.exports = n.
                default
                })
            },
            function(t, n) {
                t.exports = function(t, n, e) {
                    function r() {
                        var f = Date.now() - u;
                        f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                    }
                    var i, a, o, u, c;
                    null == n && (n = 100);
                    var f = function() {
                        o = this,
                        a = arguments,
                        u = Date.now();
                        var f = e && !i;
                        return i || (i = setTimeout(r, n)),
                        f && (c = t.apply(o, a), o = a = null),
                        c
                    };
                    return f.clear = function() {
                        i && (clearTimeout(i), i = null)
                    },
                    f
                }
            }])
        })
    })),
    Em = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    },
    Dm = function(t) {
        return 1 === t.length && (t = n(t)),
        {
            left: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) < 0 ? r = a + 1 : i = a
                }
                return r
            },
            right: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) > 0 ? i = a: r = a + 1
                }
                return r
            }
        }
    },
    zm = Dm(Em),
    Um = zm.right,
    Pm = zm.left,
    Lm = function(t) {
        return null === t ? NaN: +t
    },
    Fm = function(t, n) {
        var e, r, i = t.length,
        a = 0,
        o = -1,
        u = 0,
        c = 0;
        if (null == n) for (; ++o < i;) isNaN(e = Lm(t[o])) || (c += (r = e - u) * (e - (u += r / ++a)));
        else for (; ++o < i;) isNaN(e = Lm(n(t[o], o, t))) || (c += (r = e - u) * (e - (u += r / ++a)));
        if (a > 1) return c / (a - 1)
    },
    Rm = function(t, n) {
        var e = Fm(t, n);
        return e ? Math.sqrt(e) : e
    },
    Hm = function(t, n) {
        var e, r, i, a = t.length,
        o = -1;
        if (null == n) {
            for (; ++o < a;) if (null != (e = t[o]) && e >= e) for (r = i = e; ++o < a;) null != (e = t[o]) && (r > e && (r = e), i < e && (i = e))
        } else for (; ++o < a;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = i = e; ++o < a;) null != (e = n(t[o], o, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i]
    },
    Om = Array.prototype,
    Ym = Om.slice,
    jm = Om.map,
    qm = function(t) {
        return function() {
            return t
        }
    },
    Im = function(t) {
        return t
    },
    Xm = function(t, n, e) {
        t = +t,
        n = +n,
        e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1,
        i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;) a[r] = t + r * e;
        return a
    },
    Bm = Math.sqrt(50),
    Wm = Math.sqrt(10),
    Vm = Math.sqrt(2),
    $m = function(t, n, e) {
        var i, a, o, u, c = -1;
        if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];
        if ((i = n < t) && (a = t, t = n, n = a), 0 === (u = r(t, n, e)) || !isFinite(u)) return [];
        if (u > 0) for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(a = Math.ceil(n - t + 1)); ++c < a;) o[c] = (t + c) * u;
        else for (t = Math.floor(t * u), n = Math.ceil(n * u), o = new Array(a = Math.ceil(t - n + 1)); ++c < a;) o[c] = (t - c) / u;
        return i && o.reverse(),
        o
    },
    Zm = function(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1
    },
    Gm = function(t, n, e) {
        if (null == e && (e = Lm), r = t.length) {
            if ((n = +n) <= 0 || r < 2) return + e(t[0], 0, t);
            if (n >= 1) return + e(t[r - 1], r - 1, t);
            var r, i = (r - 1) * n,
            a = Math.floor(i),
            o = +e(t[a], a, t);
            return o + ( + e(t[a + 1], a + 1, t) - o) * (i - a)
        }
    },
    Jm = function(t, n) {
        var e, r, i = t.length,
        a = -1;
        if (null == n) {
            for (; ++a < i;) if (null != (e = t[a]) && e >= e) for (r = e; ++a < i;) null != (e = t[a]) && e > r && (r = e)
        } else for (; ++a < i;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = e; ++a < i;) null != (e = n(t[a], a, t)) && e > r && (r = e);
        return r
    },
    Qm = function(t) {
        for (var n, e, r, i = t.length,
        a = -1,
        o = 0; ++a < i;) o += t[a].length;
        for (e = new Array(o); --i >= 0;) for (n = (r = t[i]).length; --n >= 0;) e[--o] = r[n];
        return e
    },
    Km = function(t, n) {
        var e, r, i = t.length,
        a = -1;
        if (null == n) {
            for (; ++a < i;) if (null != (e = t[a]) && e >= e) for (r = e; ++a < i;) null != (e = t[a]) && r > e && (r = e)
        } else for (; ++a < i;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = e; ++a < i;) null != (e = n(t[a], a, t)) && r > e && (r = e);
        return r
    },
    t_ = function(t) {
        if (! (i = t.length)) return [];
        for (var n = -1,
        e = Km(t, a), r = new Array(e); ++n < e;) for (var i, o = -1,
        u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
        return r
    },
    n_ = Array.prototype.slice,
    e_ = function(t) {
        return t
    },
    r_ = 1,
    i_ = 2,
    a_ = 3,
    o_ = 4,
    u_ = 1e-6,
    c_ = {
        value: function() {}
    };
    y.prototype = v.prototype = {
        constructor: y,
        on: function(t, n) {
            var e, r = this._,
            i = b(t + "", r),
            a = -1,
            o = i.length; {
                if (! (arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++a < o;) if (e = (t = i[a]).type) r[e] = _(r[e], t.name, n);
                    else if (null == n) for (e in r) r[e] = _(r[e], t.name, null);
                    return this
                }
                for (; ++a < o;) if ((e = (t = i[a]).type) && (e = m(r[e], t.name))) return e
            }
        },
        copy: function() {
            var t = {},
            n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new y(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
        }
    };
    var f_ = "http://www.w3.org/1999/xhtml",
    s_ = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: f_,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    },
    l_ = function(t) {
        var n = t += "",
        e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        s_.hasOwnProperty(n) ? {
            space: s_[n],
            local: t
        }: t
    },
    h_ = function(t) {
        var n = l_(t);
        return (n.local ? w: x)(n)
    },
    d_ = 0;
    S.prototype = M.prototype = {
        constructor: S,
        get: function(t) {
            for (var n = this._; ! (n in t);) if (! (t = t.parentNode)) return;
            return t[n]
        },
        set: function(t, n) {
            return t[this._] = n
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    var p_ = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var g_ = document.documentElement;
        if (!g_.matches) {
            var v_ = g_.webkitMatchesSelector || g_.msMatchesSelector || g_.mozMatchesSelector || g_.oMatchesSelector;
            p_ = function(t) {
                return function() {
                    return v_.call(this, t)
                }
            }
        }
    }
    var y_ = p_,
    b_ = {},
    m_ = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (b_ = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    var __ = function() {
        for (var t, n = m_; t = n.sourceEvent;) n = t;
        return n
    },
    x_ = function(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return r.x = n.clientX,
            r.y = n.clientY,
            r = r.matrixTransform(t.getScreenCTM().inverse()),
            [r.x, r.y]
        }
        var i = t.getBoundingClientRect();
        return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
    },
    w_ = function(t) {
        var n = __();
        return n.changedTouches && (n = n.changedTouches[0]),
        x_(t, n)
    },
    M_ = function(t) {
        return null == t ? D: function() {
            return this.querySelector(t)
        }
    },
    S_ = function(t) {
        return null == t ? z: function() {
            return this.querySelectorAll(t)
        }
    },
    A_ = function(t) {
        return new Array(t.length)
    };
    U.prototype = {
        constructor: U,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var T_ = function(t) {
        return function() {
            return t
        }
    },
    k_ = "$",
    C_ = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    Q.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var N_ = [null];
    yt.prototype = bt.prototype = {
        constructor: yt,
        select: function(t) {
            "function" != typeof t && (t = M_(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (o = t.call(a, a.__data__, s, u)) && ("__data__" in a && (o.__data__ = a.__data__), f[s] = o);
            return new yt(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = S_(t));
            for (var n = this._groups,
            e = n.length,
            r = [], i = [], a = 0; a < e; ++a) for (var o, u = n[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && (r.push(t.call(o, o.__data__, f, u)), i.push(o));
            return new yt(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = y_(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new yt(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return d = new Array(this.size()),
            f = -1,
            this.each(function(t) {
                d[++f] = t
            }),
            d;
            var e = n ? L: P,
            r = this._parents,
            i = this._groups;
            "function" != typeof t && (t = T_(t));
            for (var a = i.length,
            o = new Array(a), u = new Array(a), c = new Array(a), f = 0; f < a; ++f) {
                var s = r[f],
                l = i[f],
                h = l.length,
                d = t.call(s, s && s.__data__, f, r),
                p = d.length,
                g = u[f] = new Array(p),
                v = o[f] = new Array(p);
                e(s, l, g, v, c[f] = new Array(h), d, n);
                for (var y, b, m = 0,
                _ = 0; m < p; ++m) if (y = g[m]) {
                    for (m >= _ && (_ = m + 1); ! (b = v[_]) && ++_ < p;);
                    y._next = b || null
                }
            }
            return o = new yt(o, r),
            o._enter = u,
            o._exit = c,
            o
        },
        enter: function() {
            return new yt(this._enter || this._groups.map(A_), this._parents)
        },
        exit: function() {
            return new yt(this._exit || this._groups.map(A_), this._parents)
        },
        merge: function(t) {
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new yt(o, this._parents)
        },
        order: function() {
            for (var t = this._groups,
            n = -1,
            e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            return this
        },
        sort: function(t) {
            t || (t = F);
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) {
                for (var a, o = n[i], u = o.length, c = r[i] = new Array(u), f = 0; f < u; ++f)(a = o[f]) && (c[f] = a);
                c.sort(function(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                })
            }
            return new yt(r, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size()),
            n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups,
            n = 0,
            e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o
            }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {++t
            }),
            t
        },
        empty: function() {
            return ! this.node()
        },
        each: function(t) {
            for (var n = this._groups,
            e = 0,
            r = n.length; e < r; ++e) for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
            return this
        },
        attr: function(t, n) {
            var e = l_(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? H: R: "function" == typeof n ? e.local ? q: j: e.local ? Y: O)(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? I: "function" == typeof n ? B: X)(t, n, null == e ? "": e)) : W(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? V: "function" == typeof n ? Z: $)(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = G(t + "");
            if (arguments.length < 2) {
                for (var r = J(this.node()), i = -1, a = e.length; ++i < a;) if (!r.contains(e[i])) return ! 1;
                return ! 0
            }
            return this.each(("function" == typeof n ? rt: n ? nt: et)(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? it: ("function" == typeof t ? ot: at)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? ut: ("function" == typeof t ? ft: ct)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(st)
        },
        lower: function() {
            return this.each(lt)
        },
        append: function(t) {
            var n = "function" == typeof t ? t: h_(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t: h_(t),
            r = null == n ? ht: "function" == typeof n ? n: M_(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(dt)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, a = k(t + ""),
            o = a.length; {
                if (! (arguments.length < 2)) {
                    for (u = n ? N: C, null == e && (e = !1), r = 0; r < o; ++r) this.each(u(a[r], n, e));
                    return this
                }
                var u = this.node().__on;
                if (u) for (var c, f = 0,
                s = u.length; f < s; ++f) for (r = 0, c = u[f]; r < o; ++r) if ((i = a[r]).type === c.type && i.name === c.name) return c.value
            }
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ? vt: gt)(t, n))
        }
    };
    var E_ = function(t) {
        return "string" == typeof t ? new yt([[document.querySelector(t)]], [document.documentElement]) : new yt([[t]], N_)
    },
    D_ = function(t, n, e) {
        arguments.length < 3 && (e = n, n = __().changedTouches);
        for (var r, i = 0,
        a = n ? n.length: 0; i < a; ++i) if ((r = n[i]).identifier === e) return x_(t, r);
        return null
    },
    z_ = function() {
        m_.preventDefault(),
        m_.stopImmediatePropagation()
    },
    U_ = function(t) {
        var n = t.document.documentElement,
        e = E_(t).on("dragstart.drag", z_, !0);
        "onselectstart" in n ? e.on("selectstart.drag", z_, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
    },
    P_ = function(t) {
        return function() {
            return t
        }
    };
    xt.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var L_ = function(t, n, e) {
        t.prototype = n.prototype = e,
        e.constructor = t
    },
    F_ = "\\s*([+-]?\\d+)\\s*",
    R_ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    H_ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    O_ = /^#([0-9a-f]{3})$/,
    Y_ = /^#([0-9a-f]{6})$/,
    j_ = new RegExp("^rgb\\(" + [F_, F_, F_] + "\\)$"),
    q_ = new RegExp("^rgb\\(" + [H_, H_, H_] + "\\)$"),
    I_ = new RegExp("^rgba\\(" + [F_, F_, F_, R_] + "\\)$"),
    X_ = new RegExp("^rgba\\(" + [H_, H_, H_, R_] + "\\)$"),
    B_ = new RegExp("^hsl\\(" + [R_, H_, H_] + "\\)$"),
    W_ = new RegExp("^hsla\\(" + [R_, H_, H_, R_] + "\\)$"),
    V_ = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    L_(kt, Ct, {
        displayable: function() {
            return this.rgb().displayable()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }),
    L_(Ut, zt, Tt(kt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Ut(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Ut(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        toString: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(": "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")": ", " + t + ")")
        }
    })),
    L_(Rt, Ft, Tt(kt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Rt(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Rt(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < .5 ? e: 1 - e) * n,
            i = 2 * e - r;
            return new Ut(Ht(t >= 240 ? t - 240 : t + 120, i, r), Ht(t, i, r), Ht(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var $_ = Math.PI / 180,
    Z_ = 180 / Math.PI,
    G_ = .95047,
    J_ = 1,
    Q_ = 1.08883,
    K_ = 4 / 29,
    tx = 6 / 29,
    nx = 3 * tx * tx,
    ex = tx * tx * tx;
    L_(jt, Yt, Tt(kt, {
        brighter: function(t) {
            return new jt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new jt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t: t + this.a / 500,
            e = isNaN(this.b) ? t: t - this.b / 200;
            return t = J_ * It(t),
            n = G_ * It(n),
            e = Q_ * It(e),
            new Ut(Xt(3.2404542 * n - 1.5371385 * t - .4985314 * e), Xt( - .969266 * n + 1.8760108 * t + .041556 * e), Xt(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })),
    L_($t, Vt, Tt(kt, {
        brighter: function(t) {
            return new $t(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new $t(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return Ot(this).rgb()
        }
    }));
    var rx = -.14861,
    ix = 1.78277,
    ax = -.29227,
    ox = -.90649,
    ux = 1.97294,
    cx = ux * ox,
    fx = ux * ix,
    sx = ix * ax - ox * rx;
    L_(Jt, Gt, Tt(kt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Jt(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Jt(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * $_,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
            return new Ut(255 * (n + e * (rx * r + ix * i)), 255 * (n + e * (ax * r + ox * i)), 255 * (n + e * (ux * r)), this.opacity)
        }
    }));
    var lx, hx, dx, px, gx, vx, yx = function(t) {
        var n = t.length - 1;
        return function(e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
            i = t[r],
            a = t[r + 1],
            o = r > 0 ? t[r - 1] : 2 * i - a,
            u = r < n - 1 ? t[r + 2] : 2 * a - i;
            return Qt((e - r / n) * n, o, i, a, u)
        }
    },
    bx = function(t) {
        var n = t.length;
        return function(e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e: e) * n),
            i = t[(r + n - 1) % n],
            a = t[r % n],
            o = t[(r + 1) % n],
            u = t[(r + 2) % n];
            return Qt((e - r / n) * n, i, a, o, u)
        }
    },
    mx = function(t) {
        return function() {
            return t
        }
    },
    _x = function t(n) {
        function e(t, n) {
            var e = r((t = zt(t)).r, (n = zt(n)).r),
            i = r(t.g, n.g),
            a = r(t.b, n.b),
            o = rn(t.opacity, n.opacity);
            return function(n) {
                return t.r = e(n),
                t.g = i(n),
                t.b = a(n),
                t.opacity = o(n),
                t + ""
            }
        }
        var r = en(n);
        return e.gamma = t,
        e
    } (1),
    xx = an(yx),
    wx = an(bx),
    Mx = function(t, n) {
        var e, r = n ? n.length: 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(r),
        o = new Array(r);
        for (e = 0; e < i; ++e) a[e] = Ex(t[e], n[e]);
        for (; e < r; ++e) o[e] = n[e];
        return function(t) {
            for (e = 0; e < i; ++e) o[e] = a[e](t);
            return o
        }
    },
    Sx = function(t, n) {
        var e = new Date;
        return t = +t,
        n -= t,
        function(r) {
            return e.setTime(t + n * r),
            e
        }
    },
    Ax = function(t, n) {
        return t = +t,
        n -= t,
        function(e) {
            return t + n * e
        }
    },
    Tx = function(t, n) {
        var e, r = {},
        i = {};
        null !== t && "object" === (void 0 === t ? "undefined": km(t)) || (t = {}),
        null !== n && "object" === (void 0 === n ? "undefined": km(n)) || (n = {});
        for (e in n) e in t ? r[e] = Ex(t[e], n[e]) : i[e] = n[e];
        return function(t) {
            for (e in r) i[e] = r[e](t);
            return i
        }
    },
    kx = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Cx = new RegExp(kx.source, "g"),
    Nx = function(t, n) {
        var e, r, i, a = kx.lastIndex = Cx.lastIndex = 0,
        o = -1,
        u = [],
        c = [];
        for (t += "", n += ""; (e = kx.exec(t)) && (r = Cx.exec(n));)(i = r.index) > a && (i = n.slice(a, i), u[o] ? u[o] += i: u[++o] = i),
        (e = e[0]) === (r = r[0]) ? u[o] ? u[o] += r: u[++o] = r: (u[++o] = null, c.push({
            i: o,
            x: Ax(e, r)
        })),
        a = Cx.lastIndex;
        return a < n.length && (i = n.slice(a), u[o] ? u[o] += i: u[++o] = i),
        u.length < 2 ? c[0] ? un(c[0].x) : on(n) : (n = c.length,
        function(t) {
            for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
            return u.join("")
        })
    },
    Ex = function(t, n) {
        var e, r = void 0 === n ? "undefined": km(n);
        return null == n || "boolean" === r ? mx(n) : ("number" === r ? Ax: "string" === r ? (e = Ct(n)) ? (n = e, _x) : Nx: n instanceof Ct ? _x: n instanceof Date ? Sx: Array.isArray(n) ? Mx: "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? Tx: Ax)(t, n)
    },
    Dx = function(t, n) {
        return t = +t,
        n -= t,
        function(e) {
            return Math.round(t + n * e)
        }
    },
    zx = 180 / Math.PI,
    Ux = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    },
    Px = function(t, n, e, r, i, a) {
        var o, u, c;
        return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o),
        (c = t * e + n * r) && (e -= t * c, r -= n * c),
        (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u),
        t * r < n * e && (t = -t, n = -n, c = -c, o = -o),
        {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(n, t) * zx,
            skewX: Math.atan(c) * zx,
            scaleX: o,
            scaleY: u
        }
    },
    Lx = cn(function(t) {
        return "none" === t ? Ux: (lx || (lx = document.createElement("DIV"), hx = document.documentElement, dx = document.defaultView), lx.style.transform = t, t = dx.getComputedStyle(hx.appendChild(lx), null).getPropertyValue("transform"), hx.removeChild(lx), t = t.slice(7, -1).split(","), Px( + t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    },
    "px, ", "px)", "deg)"),
    Fx = cn(function(t) {
        return null == t ? Ux: (px || (px = document.createElementNS("http://www.w3.org/2000/svg", "g")), px.setAttribute("transform", t), (t = px.transform.baseVal.consolidate()) ? (t = t.matrix, Px(t.a, t.b, t.c, t.d, t.e, t.f)) : Ux)
    },
    ", ", ")", ")"),
    Rx = Math.SQRT2,
    Hx = function(t, n) {
        var e, r, i = t[0],
        a = t[1],
        o = t[2],
        u = n[0],
        c = n[1],
        f = n[2],
        s = u - i,
        l = c - a,
        h = s * s + l * l;
        if (h < 1e-12) r = Math.log(f / o) / Rx,
        e = function(t) {
            return [i + t * s, a + t * l, o * Math.exp(Rx * t * r)]
        };
        else {
            var d = Math.sqrt(h),
            p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
            g = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
            v = Math.log(Math.sqrt(p * p + 1) - p),
            y = Math.log(Math.sqrt(g * g + 1) - g);
            r = (y - v) / Rx,
            e = function(t) {
                var n = t * r,
                e = fn(v),
                u = o / (2 * d) * (e * ln(Rx * n + v) - sn(v));
                return [i + u * s, a + u * l, o * e / fn(Rx * n + v)]
            }
        }
        return e.duration = 1e3 * r,
        e
    },
    Ox = hn(nn),
    Yx = hn(rn),
    jx = dn(nn),
    qx = dn(rn),
    Ix = pn(nn),
    Xx = pn(rn),
    Bx = 0,
    Wx = 0,
    Vx = 0,
    $x = 1e3,
    Zx = 0,
    Gx = 0,
    Jx = 0,
    Qx = "object" === ("undefined" == typeof performance ? "undefined": km(performance)) && performance.now ? performance: Date,
    Kx = "object" === ("undefined" == typeof window ? "undefined": km(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };
    yn.prototype = bn.prototype = {
        constructor: yn,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? gn() : +e) + (null == n ? 0 : +n),
            this._next || vx === this || (vx ? vx._next = this: gx = this, vx = this),
            this._call = t,
            this._time = e,
            Mn()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, Mn())
        }
    };
    var tw = function(t, n, e) {
        var r = new yn;
        return n = null == n ? 0 : +n,
        r.restart(function(e) {
            r.stop(),
            t(e + n)
        },
        n, e),
        r
    },
    nw = v("start", "end", "interrupt"),
    ew = [],
    rw = 0,
    iw = 1,
    aw = 2,
    ow = 3,
    uw = 4,
    cw = 5,
    fw = 6,
    sw = function(t, n, e, r, i, a) {
        var o = t.__transition;
        if (o) {
            if (e in o) return
        } else t.__transition = {};
        kn(t, e, {
            name: n,
            index: r,
            group: i,
            on: nw,
            tween: ew,
            time: a.time,
            delay: a.delay,
            duration: a.duration,
            ease: a.ease,
            timer: null,
            state: rw
        })
    },
    lw = function(t, n) {
        var e, r, i, a = t.__transition,
        o = !0;
        if (a) {
            n = null == n ? null: n + "";
            for (i in a)(e = a[i]).name === n ? (r = e.state > aw && e.state < cw, e.state = fw, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[i]) : o = !1;
            o && delete t.__transition
        }
    },
    hw = function(t, n) {
        var e;
        return ("number" == typeof n ? Ax: n instanceof Ct ? _x: (e = Ct(n)) ? (n = e, _x) : Nx)(t, n)
    },
    dw = bt.prototype.constructor,
    pw = 0,
    gw = bt.prototype;
    te.prototype = ne.prototype = {
        constructor: te,
        select: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = M_(t));
            for (var r = this._groups,
            i = r.length,
            a = new Array(i), o = 0; o < i; ++o) for (var u, c, f = r[o], s = f.length, l = a[o] = new Array(s), h = 0; h < s; ++h)(u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, sw(l[h], n, e, h, l, Tn(u, e)));
            return new te(a, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = S_(t));
            for (var r = this._groups,
            i = r.length,
            a = [], o = [], u = 0; u < i; ++u) for (var c, f = r[u], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
                for (var h, d = t.call(c, c.__data__, l, f), p = Tn(c, e), g = 0, v = d.length; g < v; ++g)(h = d[g]) && sw(h, n, e, g, d, p);
                a.push(d),
                o.push(c)
            }
            return new te(a, o, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = y_(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new te(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new te(o, this._parents, this._name, this._id)
        },
        selection: function() {
            return new dw(this._groups, this._parents)
        },
        transition: function() {
            for (var t = this._name,
            n = this._id,
            e = ee(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f) if (o = u[f]) {
                var s = Tn(o, n);
                sw(o, t, e, f, u, {
                    time: s.time + s.delay + s.duration,
                    delay: 0,
                    duration: s.duration,
                    ease: s.ease
                })
            }
            return new te(r, this._parents, t, e)
        },
        call: gw.call,
        nodes: gw.nodes,
        node: gw.node,
        size: gw.size,
        empty: gw.empty,
        each: gw.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? Tn(this.node(), e).on.on(t) : this.each(Bn(e, t, n))
        },
        attr: function(t, n) {
            var e = l_(t),
            r = "transform" === e ? Fx: hw;
            return this.attrTween(t, "function" == typeof n ? (e.local ? Fn: Ln)(e, r, En(this, "attr." + t, n)) : null == n ? (e.local ? zn: Dn)(e) : (e.local ? Pn: Un)(e, r, n + ""))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = l_(t);
            return this.tween(e, (r.local ? Rn: Hn)(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? Lx: hw;
            return null == n ? this.styleTween(t, Vn(t, r)).on("end.style." + t, $n(t)) : this.styleTween(t, "function" == typeof n ? Gn(t, r, En(this, "style." + t, n)) : Zn(t, r, n + ""), e)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, Jn(t, n, null == e ? "": e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? Kn(En(this, "text", t)) : Qn(null == t ? "": t + ""))
        },
        remove: function() {
            return this.on("end.remove", Wn(this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = Tn(this.node(), e).tween, a = 0, o = i.length; a < o; ++a) if ((r = i[a]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? Cn: Nn)(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? On: Yn)(n, t)) : Tn(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? jn: qn)(n, t)) : Tn(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(In(n, t)) : Tn(this.node(), n).ease
        }
    };
    var vw = function t(n) {
        function e(t) {
            return Math.pow(t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    yw = function t(n) {
        function e(t) {
            return 1 - Math.pow(1 - t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    bw = function t(n) {
        function e(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    mw = Math.PI,
    _w = mw / 2,
    xw = 4 / 11,
    ww = 6 / 11,
    Mw = 8 / 11,
    Sw = .75,
    Aw = 9 / 11,
    Tw = 10 / 11,
    kw = .9375,
    Cw = 21 / 22,
    Nw = 63 / 64,
    Ew = 1 / xw / xw,
    Dw = function t(n) {
        function e(t) {
            return t * t * ((n + 1) * t - n)
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    zw = function t(n) {
        function e(t) {
            return--t * t * ((n + 1) * t + n) + 1
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    Uw = function t(n) {
        function e(t) {
            return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    Pw = 2 * Math.PI,
    Lw = function t(n, e) {
        function r(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
        }
        var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Pw);
        return r.amplitude = function(n) {
            return t(n, e * Pw)
        },
        r.period = function(e) {
            return t(n, e)
        },
        r
    } (1, .3),
    Fw = function t(n, e) {
        function r(t) {
            return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
        }
        var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Pw);
        return r.amplitude = function(n) {
            return t(n, e * Pw)
        },
        r.period = function(e) {
            return t(n, e)
        },
        r
    } (1, .3),
    Rw = function t(n, e) {
        function r(t) {
            return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
        }
        var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Pw);
        return r.amplitude = function(n) {
            return t(n, e * Pw)
        },
        r.period = function(e) {
            return t(n, e)
        },
        r
    } (1, .3),
    Hw = {
        time: null,
        delay: 0,
        duration: 250,
        ease: ie
    };
    bt.prototype.interrupt = function(t) {
        return this.each(function() {
            lw(this, t)
        })
    },
    bt.prototype.transition = function(t) {
        var n, e;
        t instanceof te ? (n = t._id, t = t._name) : (n = ee(), (e = Hw).time = gn(), t = null == t ? null: t + "");
        for (var r = this._groups,
        i = r.length,
        a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && sw(o, t, n, f, u, e || fe(o, n));
        return new te(r, this._parents, t, n)
    };
    var Ow = [null],
    Yw = function(t) {
        return function() {
            return t
        }
    },
    jw = function(t, n, e) {
        this.target = t,
        this.type = n,
        this.selection = e
    },
    qw = function() {
        m_.preventDefault(),
        m_.stopImmediatePropagation()
    },
    Iw = {
        name: "drag"
    },
    Xw = {
        name: "space"
    },
    Bw = {
        name: "handle"
    },
    Ww = {
        name: "center"
    },
    Vw = {
        name: "x",
        handles: ["e", "w"].map(le),
        input: function(t, n) {
            return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
        },
        output: function(t) {
            return t && [t[0][0], t[1][0]]
        }
    },
    $w = {
        name: "y",
        handles: ["n", "s"].map(le),
        input: function(t, n) {
            return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
        },
        output: function(t) {
            return t && [t[0][1], t[1][1]]
        }
    },
    Zw = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(le),
        input: function(t) {
            return t
        },
        output: function(t) {
            return t
        }
    },
    Gw = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    },
    Jw = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
    },
    Qw = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
    },
    Kw = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1
    },
    tM = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1
    },
    nM = Math.cos,
    eM = Math.sin,
    rM = Math.PI,
    iM = rM / 2,
    aM = 2 * rM,
    oM = Math.max,
    uM = Array.prototype.slice,
    cM = function(t) {
        return function() {
            return t
        }
    },
    fM = Math.PI,
    sM = 2 * fM,
    lM = sM - 1e-6;
    me.prototype = _e.prototype = {
        constructor: me,
        moveTo: function(t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function(t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        },
        quadraticCurveTo: function(t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function(t, n, e, r, i, a) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
        },
        arcTo: function(t, n, e, r, i) {
            t = +t,
            n = +n,
            e = +e,
            r = +r,
            i = +i;
            var a = this._x1,
            o = this._y1,
            u = e - t,
            c = r - n,
            f = a - t,
            s = o - n,
            l = f * f + s * s;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > 1e-6) if (Math.abs(s * u - c * f) > 1e-6 && i) {
                var h = e - a,
                d = r - o,
                p = u * u + c * c,
                g = h * h + d * d,
                v = Math.sqrt(p),
                y = Math.sqrt(l),
                b = i * Math.tan((fM - Math.acos((p + l - g) / (2 * v * y))) / 2),
                m = b / y,
                _ = b / v;
                Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * f) + "," + (n + m * s)),
                this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + _ * u) + "," + (this._y1 = n + _ * c)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else;
        },
        arc: function(t, n, e, r, i, a) {
            t = +t,
            n = +n;
            var o = (e = +e) * Math.cos(r),
            u = e * Math.sin(r),
            c = t + o,
            f = n + u,
            s = 1 ^ a,
            l = a ? r - i: i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + f: (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f),
            e && (l < 0 && (l = l % sM + sM), l > lM ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - o) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= fM) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        },
        rect: function(t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        },
        toString: function() {
            return this._
        }
    };
    Te.prototype = ke.prototype = {
        constructor: Te,
        has: function(t) {
            return "$" + t in this
        },
        get: function(t) {
            return this["$" + t]
        },
        set: function(t, n) {
            return this["$" + t] = n,
            this
        },
        remove: function(t) {
            var n = "$" + t;
            return n in this && delete this[n]
        },
        clear: function() {
            for (var t in this)"$" === t[0] && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(n.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(this[n]);
            return t
        },
        entries: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function() {
            var t = 0;
            for (var n in this)"$" === n[0] && ++t;
            return t
        },
        empty: function() {
            for (var t in this) if ("$" === t[0]) return ! 1;
            return ! 0
        },
        each: function(t) {
            for (var n in this)"$" === n[0] && t(this[n], n.slice(1), this)
        }
    };
    var hM = ke.prototype;
    ze.prototype = Ue.prototype = {
        constructor: ze,
        has: hM.has,
        add: function(t) {
            return t += "",
            this["$" + t] = t,
            this
        },
        remove: hM.remove,
        clear: hM.clear,
        values: hM.keys,
        size: hM.size,
        empty: hM.empty,
        each: hM.each
    };
    var dM = {},
    pM = {},
    gM = 34,
    vM = 10,
    yM = 13,
    bM = function(t) {
        function n(t, n) {
            function e() {
                if (f) return pM;
                if (s) return s = !1,
                dM;
                var n, e, r = u;
                if (t.charCodeAt(r) === gM) {
                    for (; u++<o && t.charCodeAt(u) !== gM || t.charCodeAt(++u) === gM;);
                    return (n = u) >= o ? f = !0 : (e = t.charCodeAt(u++)) === vM ? s = !0 : e === yM && (s = !0, t.charCodeAt(u) === vM && ++u),
                    t.slice(r + 1, n - 1).replace(/""/g, '"')
                }
                for (; u < o;) {
                    if ((e = t.charCodeAt(n = u++)) === vM) s = !0;
                    else if (e === yM) s = !0,
                    t.charCodeAt(u) === vM && ++u;
                    else if (e !== a) continue;
                    return t.slice(r, n)
                }
                return f = !0,
                t.slice(r, o)
            }
            var r, i = [],
            o = t.length,
            u = 0,
            c = 0,
            f = o <= 0,
            s = !1;
            for (t.charCodeAt(o - 1) === vM && --o, t.charCodeAt(o - 1) === yM && --o; (r = e()) !== pM;) {
                for (var l = []; r !== dM && r !== pM;) l.push(r),
                r = e();
                n && null == (l = n(l, c++)) || i.push(l)
            }
            return i
        }
        function e(n) {
            return n.map(r).join(t)
        }
        function r(t) {
            return null == t ? "": i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"': t
        }
        var i = new RegExp('["' + t + "\n\r]"),
        a = t.charCodeAt(0);
        return {
            parse: function(t, e) {
                var r, i, a = n(t,
                function(t, n) {
                    if (r) return r(t, n - 1);
                    i = t,
                    r = e ? Le(t, e) : Pe(t)
                });
                return a.columns = i,
                a
            },
            parseRows: n,
            format: function(n, e) {
                return null == e && (e = Fe(n)),
                [e.map(r).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return r(n[t])
                    }).join(t)
                })).join("\n")
            },
            formatRows: function(t) {
                return t.map(e).join("\n")
            }
        }
    },
    mM = bM(","),
    _M = mM.parse,
    xM = mM.parseRows,
    wM = mM.format,
    MM = mM.formatRows,
    SM = bM("\t"),
    AM = SM.parse,
    TM = SM.parseRows,
    kM = SM.format,
    CM = SM.formatRows,
    NM = function(t) {
        return function() {
            return t
        }
    },
    EM = function() {
        return 1e-6 * (Math.random() - .5)
    },
    DM = function(t, n, e, r, i) {
        this.node = t,
        this.x0 = n,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    },
    zM = Ye.prototype = je.prototype;
    zM.copy = function() {
        var t, n, e = new je(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = qe(r),
        e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = qe(n));
        return e
    },
    zM.add = function(t) {
        var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
        return Re(this.cover(n, e), n, e, t)
    },
    zM.addAll = function(t) {
        var n, e, r, i, a = t.length,
        o = new Array(a),
        u = new Array(a),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;
        for (e = 0; e < a; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (o[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
        for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < a; ++e) Re(this, o[e], u[e], t[e]);
        return this
    },
    zM.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0,
        r = this._y0,
        i = this._x1,
        a = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1,
        a = (r = Math.floor(n)) + 1;
        else {
            if (! (e > t || t > i || r > n || n > a)) return this;
            var o, u, c = i - e,
            f = this._root;
            switch (u = (n < (r + a) / 2) << 1 | t < (e + i) / 2) {
            case 0:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , i = e + c , a = r + c , t > i || n > a );
                break;
            case 1:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , e = i - c , a = r + c , e > t || n > a );
                break;
            case 2:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , i = e + c , r = a - c , t > i || r > n );
                break;
            case 3:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , e = i - c , r = a - c , e > t || r > n )
            }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this
    },
    zM.data = function() {
        var t = [];
        return this.visit(function(n) {
            if (!n.length) do {
                t.push(n.data)
            } while ( n = n . next )
        }),
        t
    },
    zM.extent = function(t) {
        return arguments.length ? this.cover( + t[0][0], +t[0][1]).cover( + t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    },
    zM.find = function(t, n, e) {
        var r, i, a, o, u, c, f, s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        g = this._root;
        for (g && p.push(new DM(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) if (! (! (g = c.node) || (i = c.x0) > h || (a = c.y0) > d || (o = c.x1) < s || (u = c.y1) < l)) if (g.length) {
            var v = (i + o) / 2,
            y = (a + u) / 2;
            p.push(new DM(g[3], v, y, o, u), new DM(g[2], i, y, v, u), new DM(g[1], v, a, o, y), new DM(g[0], i, a, v, y)),
            (f = (n >= y) << 1 | t >= v) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
        } else {
            var b = t - +this._x.call(null, g.data),
            m = n - +this._y.call(null, g.data),
            _ = b * b + m * m;
            if (_ < e) {
                var x = Math.sqrt(e = _);
                s = t - x,
                l = n - x,
                h = t + x,
                d = n + x,
                r = g.data
            }
        }
        return r
    },
    zM.remove = function(t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
        var n, e, r, i, a, o, u, c, f, s, l, h, d = this._root,
        p = this._x0,
        g = this._y0,
        v = this._x1,
        y = this._y1;
        if (!d) return this;
        if (d.length) for (;;) {
            if ((f = a >= (u = (p + v) / 2)) ? p = u: v = u, (s = o >= (c = (g + y) / 2)) ? g = c: y = c, n = d, !(d = d[l = s << 1 | f])) return this;
            if (!d.length) break; (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next,
        r ? (i ? r.next = i: delete r.next, this) : n ? (i ? n[l] = i: delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d: this._root = d), this) : (this._root = i, this)
    },
    zM.removeAll = function(t) {
        for (var n = 0,
        e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    },
    zM.root = function() {
        return this._root
    },
    zM.size = function() {
        var t = 0;
        return this.visit(function(n) {
            if (!n.length) do {++t
            } while ( n = n . next )
        }),
        t
    },
    zM.visit = function(t) {
        var n, e, r, i, a, o, u = [],
        c = this._root;
        for (c && u.push(new DM(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, a = n.x1, o = n.y1) && c.length) {
            var f = (r + a) / 2,
            s = (i + o) / 2; (e = c[3]) && u.push(new DM(e, f, s, a, o)),
            (e = c[2]) && u.push(new DM(e, r, s, f, o)),
            (e = c[1]) && u.push(new DM(e, f, i, a, s)),
            (e = c[0]) && u.push(new DM(e, r, i, f, s))
        }
        return this
    },
    zM.visitAfter = function(t) {
        var n, e = [],
        r = [];
        for (this._root && e.push(new DM(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var a, o = n.x0,
                u = n.y0,
                c = n.x1,
                f = n.y1,
                s = (o + c) / 2,
                l = (u + f) / 2; (a = i[0]) && e.push(new DM(a, o, u, s, l)),
                (a = i[1]) && e.push(new DM(a, s, u, c, l)),
                (a = i[2]) && e.push(new DM(a, o, l, s, f)),
                (a = i[3]) && e.push(new DM(a, s, l, c, f))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    },
    zM.x = function(t) {
        return arguments.length ? (this._x = t, this) : this._x
    },
    zM.y = function(t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    var UM, PM = 10,
    LM = Math.PI * (3 - Math.sqrt(5)),
    FM = function(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    },
    RM = function(t) {
        return (t = FM(Math.abs(t))) ? t[1] : NaN
    },
    HM = function(t, n) {
        return function(e, r) {
            for (var i = e.length,
            a = [], o = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), a.push(e.substring(i -= u, i + u)), !((c += u + 1) > r));) u = t[o = (o + 1) % t.length];
            return a.reverse().join(n)
        }
    },
    OM = function(t) {
        return function(n) {
            return n.replace(/[0-9]/g,
            function(n) {
                return t[ + n]
            })
        }
    },
    YM = function(t, n) {
        var e = FM(t, n);
        if (!e) return t + "";
        var r = e[0],
        i = e[1];
        return i < 0 ? "0." + new Array( - i).join("0") + r: r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    },
    jM = {
        "": function(t, n) {
            t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, a = -1; i < r; ++i) switch (t[i]) {
            case ".":
                a = e = i;
                break;
            case "0":
                0 === a && (a = i),
                e = i;
                break;
            case "e":
                break t;
            default:
                a > 0 && (a = 0)
            }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
        },
        "%": function(t, n) {
            return (100 * t).toFixed(n)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.round(t).toString(10)
        },
        e: function(t, n) {
            return t.toExponential(n)
        },
        f: function(t, n) {
            return t.toFixed(n)
        },
        g: function(t, n) {
            return t.toPrecision(n)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, n) {
            return YM(100 * t, n)
        },
        r: YM,
        s: function(t, n) {
            var e = FM(t, n);
            if (!e) return t + "";
            var r = e[0],
            i = e[1],
            a = i - (UM = 3 * Math.max( - 8, Math.min(8, Math.floor(i / 3)))) + 1,
            o = r.length;
            return a === o ? r: a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + FM(t, Math.max(0, n + a - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    },
    qM = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    Ze.prototype = Ge.prototype,
    Ge.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0": "") + (null == this.width ? "": Math.max(1, 0 | this.width)) + (this.comma ? ",": "") + (null == this.precision ? "": "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var IM, XM, BM, WM = function(t) {
        return t
    },
    VM = ["y", "z", "a", "f", "p", "n", "碌", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
    $M = function(t) {
        function n(t) {
            function n(t) {
                var n, r, o, s = v,
                _ = y;
                if ("c" === g) _ = b(t) + _,
                t = "";
                else {
                    var x = (t = +t) < 0;
                    if (t = b(Math.abs(t), p), x && 0 == +t && (x = !1), s = (x ? "(" === f ? f: "-": "-" === f || "(" === f ? "": f) + s, _ = _ + ("s" === g ? VM[8 + UM / 3] : "") + (x && "(" === f ? ")": ""), m) for (n = -1, r = t.length; ++n < r;) if (48 > (o = t.charCodeAt(n)) || o > 57) {
                        _ = (46 === o ? i + t.slice(n + 1) : t.slice(n)) + _,
                        t = t.slice(0, n);
                        break
                    }
                }
                d && !l && (t = e(t, 1 / 0));
                var w = s.length + t.length + _.length,
                M = w < h ? new Array(h - w + 1).join(u) : "";
                switch (d && l && (t = e(M + t, M.length ? h - _.length: 1 / 0), M = ""), c) {
                case "<":
                    t = s + t + _ + M;
                    break;
                case "=":
                    t = s + M + t + _;
                    break;
                case "^":
                    t = M.slice(0, w = M.length >> 1) + s + t + _ + M.slice(w);
                    break;
                default:
                    t = M + s + t + _
                }
                return a(t)
            }
            var u = (t = Ze(t)).fill,
            c = t.align,
            f = t.sign,
            s = t.symbol,
            l = t.zero,
            h = t.width,
            d = t.comma,
            p = t.precision,
            g = t.type,
            v = "$" === s ? r[0] : "#" === s && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
            y = "$" === s ? r[1] : /[%p]/.test(g) ? o: "",
            b = jM[g],
            m = !g || /[defgprs%]/.test(g);
            return p = null == p ? g ? 6 : 12 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)),
            n.toString = function() {
                return t + ""
            },
            n
        }
        var e = t.grouping && t.thousands ? HM(t.grouping, t.thousands) : WM,
        r = t.currency,
        i = t.decimal,
        a = t.numerals ? OM(t.numerals) : WM,
        o = t.percent || "%";
        return {
            format: n,
            formatPrefix: function(t, e) {
                var r = n((t = Ze(t), t.type = "f", t)),
                i = 3 * Math.max( - 8, Math.min(8, Math.floor(RM(e) / 3))),
                a = Math.pow(10, -i),
                o = VM[8 + i / 3];
                return function(t) {
                    return r(a * t) + o
                }
            }
        }
    };
    Je({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var ZM = function(t) {
        return Math.max(0, -RM(Math.abs(t)))
    },
    GM = function(t, n) {
        return Math.max(0, 3 * Math.max( - 8, Math.min(8, Math.floor(RM(n) / 3))) - RM(Math.abs(t)))
    },
    JM = function(t, n) {
        return t = Math.abs(t),
        n = Math.abs(n) - t,
        Math.max(0, RM(n) - RM(t)) + 1
    },
    QM = function() {
        return new Qe
    };
    Qe.prototype = {
        constructor: Qe,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            Ke(ES, t, this.t),
            Ke(this, ES.s, this.s),
            this.s ? this.t += ES.t: this.s = ES.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var KM, tS, nS, eS, rS, iS, aS, oS, uS, cS, fS, sS, lS, hS, dS, pS, gS, vS, yS, bS, mS, _S, xS, wS, MS, SS, AS, TS, kS, CS, NS, ES = new Qe,
    DS = 1e-6,
    zS = Math.PI,
    US = zS / 2,
    PS = zS / 4,
    LS = 2 * zS,
    FS = 180 / zS,
    RS = zS / 180,
    HS = Math.abs,
    OS = Math.atan,
    YS = Math.atan2,
    jS = Math.cos,
    qS = Math.ceil,
    IS = Math.exp,
    XS = Math.log,
    BS = Math.pow,
    WS = Math.sin,
    VS = Math.sign ||
    function(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    },
    $S = Math.sqrt,
    ZS = Math.tan,
    GS = {
        Feature: function(t, n) {
            ir(t.geometry, n)
        },
        FeatureCollection: function(t, n) {
            for (var e = t.features,
            r = -1,
            i = e.length; ++r < i;) ir(e[r].geometry, n)
        }
    },
    JS = {
        Sphere: function(t, n) {
            n.sphere()
        },
        Point: function(t, n) {
            t = t.coordinates,
            n.point(t[0], t[1], t[2])
        },
        MultiPoint: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) t = e[r],
            n.point(t[0], t[1], t[2])
        },
        LineString: function(t, n) {
            ar(t.coordinates, n, 0)
        },
        MultiLineString: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) ar(e[r], n, 0)
        },
        Polygon: function(t, n) {
            or(t.coordinates, n)
        },
        MultiPolygon: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) or(e[r], n)
        },
        GeometryCollection: function(t, n) {
            for (var e = t.geometries,
            r = -1,
            i = e.length; ++r < i;) ir(e[r], n)
        }
    },
    QS = function(t, n) {
        t && GS.hasOwnProperty(t.type) ? GS[t.type](t, n) : ir(t, n)
    },
    KS = QM(),
    tA = QM(),
    nA = {
        point: rr,
        lineStart: rr,
        lineEnd: rr,
        polygonStart: function() {
            KS.reset(),
            nA.lineStart = ur,
            nA.lineEnd = cr
        },
        polygonEnd: function() {
            var t = +KS;
            tA.add(t < 0 ? LS + t: t),
            this.lineStart = this.lineEnd = this.point = rr
        },
        sphere: function() {
            tA.add(LS)
        }
    },
    eA = QM(),
    rA = {
        point: br,
        lineStart: _r,
        lineEnd: xr,
        polygonStart: function() {
            rA.point = wr,
            rA.lineStart = Mr,
            rA.lineEnd = Sr,
            eA.reset(),
            nA.polygonStart()
        },
        polygonEnd: function() {
            nA.polygonEnd(),
            rA.point = br,
            rA.lineStart = _r,
            rA.lineEnd = xr,
            KS < 0 ? (iS = -(oS = 180), aS = -(uS = 90)) : eA > DS ? uS = 90 : eA < -DS && (aS = -90),
            dS[0] = iS,
            dS[1] = oS
        }
    },
    iA = {
        sphere: rr,
        point: Cr,
        lineStart: Er,
        lineEnd: Ur,
        polygonStart: function() {
            iA.lineStart = Pr,
            iA.lineEnd = Lr
        },
        polygonEnd: function() {
            iA.lineStart = Er,
            iA.lineEnd = Ur
        }
    },
    aA = function(t) {
        return function() {
            return t
        }
    },
    oA = function(t, n) {
        function e(e, r) {
            return e = t(e, r),
            n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function(e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }),
        e
    };
    Hr.invert = Hr;
    var uA, cA, fA, sA, lA, hA, dA, pA, gA, vA, yA, bA = function(t) {
        function n(n) {
            return n = t(n[0] * RS, n[1] * RS),
            n[0] *= FS,
            n[1] *= FS,
            n
        }
        return t = Or(t[0] * RS, t[1] * RS, t.length > 2 ? t[2] * RS: 0),
        n.invert = function(n) {
            return n = t.invert(n[0] * RS, n[1] * RS),
            n[0] *= FS,
            n[1] *= FS,
            n
        },
        n
    },
    mA = function() {
        var t, n = [];
        return {
            point: function(n, e) {
                t.push([n, e])
            },
            lineStart: function() {
                n.push(t = [])
            },
            lineEnd: rr,
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            },
            result: function() {
                var e = n;
                return n = [],
                t = null,
                e
            }
        }
    },
    _A = function(t, n) {
        return HS(t[0] - n[0]) < DS && HS(t[1] - n[1]) < DS
    },
    xA = function(t, n, e, r, i) {
        var a, o, u = [],
        c = [];
        if (t.forEach(function(t) {
            if (! ((n = t.length - 1) <= 0)) {
                var n, e, r = t[0],
                o = t[n];
                if (_A(r, o)) {
                    for (i.lineStart(), a = 0; a < n; ++a) i.point((r = t[a])[0], r[1]);
                    i.lineEnd()
                } else u.push(e = new Br(r, t, null, !0)),
                c.push(e.o = new Br(r, null, e, !1)),
                u.push(e = new Br(o, t, null, !1)),
                c.push(e.o = new Br(o, null, e, !0))
            }
        }), u.length) {
            for (c.sort(n), Wr(u), Wr(c), a = 0, o = c.length; a < o; ++a) c[a].e = e = !e;
            for (var f, s, l = u[0];;) {
                for (var h = l,
                d = !0; h.v;) if ((h = h.n) === l) return;
                f = h.z,
                i.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (d) for (a = 0, o = f.length; a < o; ++a) i.point((s = f[a])[0], s[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n
                    } else {
                        if (d) for (f = h.p.z, a = f.length - 1; a >= 0; --a) i.point((s = f[a])[0], s[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p
                    }
                    f = (h = h.o).z, d = !d
                } while (! h . v );
                i.lineEnd()
            }
        }
    },
    wA = QM(),
    MA = function(t, n) {
        var e = n[0],
        r = n[1],
        i = [WS(e), -jS(e), 0],
        a = 0,
        o = 0;
        wA.reset();
        for (var u = 0,
        c = t.length; u < c; ++u) if (s = (f = t[u]).length) for (var f, s, l = f[s - 1], h = l[0], d = l[1] / 2 + PS, p = WS(d), g = jS(d), v = 0; v < s; ++v, h = b, p = _, g = x, l = y) {
            var y = f[v],
            b = y[0],
            m = y[1] / 2 + PS,
            _ = WS(m),
            x = jS(m),
            w = b - h,
            M = w >= 0 ? 1 : -1,
            S = M * w,
            A = S > zS,
            T = p * _;
            if (wA.add(YS(T * M * WS(S), g * x + T * jS(S))), a += A ? w + M * LS: w, A ^ h >= e ^ b >= e) {
                var k = pr(hr(l), hr(y));
                yr(k);
                var C = pr(i, k);
                yr(C);
                var N = (A ^ w >= 0 ? -1 : 1) * nr(C[2]); (r > N || r === N && (k[0] || k[1])) && (o += A ^ w >= 0 ? 1 : -1)
            }
        }
        return (a < -DS || a < DS && wA < -DS) ^ 1 & o
    },
    SA = function(t, n, e, r) {
        return function(i) {
            function a(n, e) {
                t(n, e) && i.point(n, e)
            }
            function o(t, n) {
                g.point(t, n)
            }
            function u() {
                m.point = o,
                g.lineStart()
            }
            function c() {
                m.point = a,
                g.lineEnd()
            }
            function f(t, n) {
                p.push([t, n]),
                y.point(t, n)
            }
            function s() {
                y.lineStart(),
                p = []
            }
            function l() {
                f(p[0][0], p[0][1]),
                y.lineEnd();
                var t, n, e, r, a = y.clean(),
                o = v.result(),
                u = o.length;
                if (p.pop(), h.push(p), p = null, u) if (1 & a) {
                    if (e = o[0], (n = e.length - 1) > 0) {
                        for (b || (i.polygonStart(), b = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                        i.lineEnd()
                    }
                } else u > 1 && 2 & a && o.push(o.pop().concat(o.shift())),
                d.push(o.filter(Vr))
            }
            var h, d, p, g = n(i),
            v = mA(),
            y = n(v),
            b = !1,
            m = {
                point: a,
                lineStart: u,
                lineEnd: c,
                polygonStart: function() {
                    m.point = f,
                    m.lineStart = s,
                    m.lineEnd = l,
                    d = [],
                    h = []
                },
                polygonEnd: function() {
                    m.point = a,
                    m.lineStart = u,
                    m.lineEnd = c,
                    d = Qm(d);
                    var t = MA(h, r);
                    d.length ? (b || (i.polygonStart(), b = !0), xA(d, $r, t, e, i)) : t && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()),
                    b && (i.polygonEnd(), b = !1),
                    d = h = null
                },
                sphere: function() {
                    i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd()
                }
            };
            return m
        }
    },
    AA = SA(function() {
        return ! 0
    },
    function(t) {
        var n, e = NaN,
        r = NaN,
        i = NaN;
        return {
            lineStart: function() {
                t.lineStart(),
                n = 1
            },
            point: function(a, o) {
                var u = a > 0 ? zS: -zS,
                c = HS(a - e);
                HS(c - zS) < DS ? (t.point(e, r = (r + o) / 2 > 0 ? US: -US), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(a, r), n = 0) : i !== u && c >= zS && (HS(e - i) < DS && (e -= i * DS), HS(a - u) < DS && (a -= u * DS), r = Zr(e, r, a, o), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0),
                t.point(e = a, r = o),
                i = u
            },
            lineEnd: function() {
                t.lineEnd(),
                e = r = NaN
            },
            clean: function() {
                return 2 - n
            }
        }
    },
    function(t, n, e, r) {
        var i;
        if (null == t) i = e * US,
        r.point( - zS, i),
        r.point(0, i),
        r.point(zS, i),
        r.point(zS, 0),
        r.point(zS, -i),
        r.point(0, -i),
        r.point( - zS, -i),
        r.point( - zS, 0),
        r.point( - zS, i);
        else if (HS(t[0] - n[0]) > DS) {
            var a = t[0] < n[0] ? zS: -zS;
            i = e * a / 2,
            r.point( - a, i),
            r.point(0, i),
            r.point(a, i)
        } else r.point(n[0], n[1])
    },
    [ - zS, -US]),
    TA = function(t) {
        function n(t, n) {
            return jS(t) * jS(n) > i
        }
        function e(t, n, e) {
            var r = [1, 0, 0],
            a = pr(hr(t), hr(n)),
            o = dr(a, a),
            u = a[0],
            c = o - u * u;
            if (!c) return ! e && t;
            var f = i * o / c,
            s = -i * u / c,
            l = pr(r, a),
            h = vr(r, f);
            gr(h, vr(a, s));
            var d = l,
            p = dr(h, d),
            g = dr(d, d),
            v = p * p - g * (dr(h, h) - 1);
            if (! (v < 0)) {
                var y = $S(v),
                b = vr(d, ( - p - y) / g);
                if (gr(b, h), b = lr(b), !e) return b;
                var m, _ = t[0],
                x = n[0],
                w = t[1],
                M = n[1];
                x < _ && (m = _, _ = x, x = m);
                var S = x - _,
                A = HS(S - zS) < DS,
                T = A || S < DS;
                if (!A && M < w && (m = w, w = M, M = m), T ? A ? w + M > 0 ^ b[1] < (HS(b[0] - _) < DS ? w: M) : w <= b[1] && b[1] <= M: S > zS ^ (_ <= b[0] && b[0] <= x)) {
                    var k = vr(d, ( - p + y) / g);
                    return gr(k, h),
                    [b, lr(k)]
                }
            }
        }
        function r(n, e) {
            var r = o ? t: zS - t,
            i = 0;
            return n < -r ? i |= 1 : n > r && (i |= 2),
            e < -r ? i |= 4 : e > r && (i |= 8),
            i
        }
        var i = jS(t),
        a = 6 * RS,
        o = i > 0,
        u = HS(i) > DS;
        return SA(n,
        function(t) {
            var i, a, c, f, s;
            return {
                lineStart: function() {
                    f = c = !1,
                    s = 1
                },
                point: function(l, h) {
                    var d, p = [l, h],
                    g = n(l, h),
                    v = o ? g ? 0 : r(l, h) : g ? r(l + (l < 0 ? zS: -zS), h) : 0;
                    if (!i && (f = c = g) && t.lineStart(), g !== c && (!(d = e(i, p)) || _A(i, d) || _A(p, d)) && (p[0] += DS, p[1] += DS, g = n(p[0], p[1])), g !== c) s = 0,
                    g ? (t.lineStart(), d = e(p, i), t.point(d[0], d[1])) : (d = e(i, p), t.point(d[0], d[1]), t.lineEnd()),
                    i = d;
                    else if (u && i && o ^ g) {
                        var y;
                        v & a || !(y = e(p, i, !0)) || (s = 0, o ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                    } ! g || i && _A(i, p) || t.point(p[0], p[1]),
                    i = p,
                    c = g,
                    a = v
                },
                lineEnd: function() {
                    c && t.lineEnd(),
                    i = null
                },
                clean: function() {
                    return s | (f && c) << 1
                }
            }
        },
        function(n, e, r, i) {
            Ir(i, t, a, r, n, e)
        },
        o ? [0, -t] : [ - zS, t - zS])
    },
    kA = function(t, n, e, r, i, a) {
        var o, u = t[0],
        c = t[1],
        f = 0,
        s = 1,
        l = n[0] - u,
        h = n[1] - c;
        if (o = e - u, l || !(o > 0)) {
            if (o /= l, l < 0) {
                if (o < f) return;
                o < s && (s = o)
            } else if (l > 0) {
                if (o > s) return;
                o > f && (f = o)
            }
            if (o = i - u, l || !(o < 0)) {
                if (o /= l, l < 0) {
                    if (o > s) return;
                    o > f && (f = o)
                } else if (l > 0) {
                    if (o < f) return;
                    o < s && (s = o)
                }
                if (o = r - c, h || !(o > 0)) {
                    if (o /= h, h < 0) {
                        if (o < f) return;
                        o < s && (s = o)
                    } else if (h > 0) {
                        if (o > s) return;
                        o > f && (f = o)
                    }
                    if (o = a - c, h || !(o < 0)) {
                        if (o /= h, h < 0) {
                            if (o > s) return;
                            o > f && (f = o)
                        } else if (h > 0) {
                            if (o < f) return;
                            o < s && (s = o)
                        }
                        return f > 0 && (t[0] = u + f * l, t[1] = c + f * h),
                        s < 1 && (n[0] = u + s * l, n[1] = c + s * h),
                        !0
                    }
                }
            }
        }
    },
    CA = 1e9,
    NA = -CA,
    EA = QM(),
    DA = {
        sphere: rr,
        point: rr,
        lineStart: function() {
            DA.point = Qr,
            DA.lineEnd = Jr
        },
        lineEnd: rr,
        polygonStart: rr,
        polygonEnd: rr
    },
    zA = function(t) {
        return EA.reset(),
        QS(t, DA),
        +EA
    },
    UA = [null, null],
    PA = {
        type: "LineString",
        coordinates: UA
    },
    LA = function(t, n) {
        return UA[0] = t,
        UA[1] = n,
        zA(PA)
    },
    FA = {
        Feature: function(t, n) {
            return ti(t.geometry, n)
        },
        FeatureCollection: function(t, n) {
            for (var e = t.features,
            r = -1,
            i = e.length; ++r < i;) if (ti(e[r].geometry, n)) return ! 0;
            return ! 1
        }
    },
    RA = {
        Sphere: function() {
            return ! 0
        },
        Point: function(t, n) {
            return ni(t.coordinates, n)
        },
        MultiPoint: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) if (ni(e[r], n)) return ! 0;
            return ! 1
        },
        LineString: function(t, n) {
            return ei(t.coordinates, n)
        },
        MultiLineString: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) if (ei(e[r], n)) return ! 0;
            return ! 1
        },
        Polygon: function(t, n) {
            return ri(t.coordinates, n)
        },
        MultiPolygon: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) if (ri(e[r], n)) return ! 0;
            return ! 1
        },
        GeometryCollection: function(t, n) {
            for (var e = t.geometries,
            r = -1,
            i = e.length; ++r < i;) if (ti(e[r], n)) return ! 0;
            return ! 1
        }
    },
    HA = function(t) {
        return t
    },
    OA = QM(),
    YA = QM(),
    jA = {
        point: rr,
        lineStart: rr,
        lineEnd: rr,
        polygonStart: function() {
            jA.lineStart = fi,
            jA.lineEnd = hi
        },
        polygonEnd: function() {
            jA.lineStart = jA.lineEnd = jA.point = rr,
            OA.add(HS(YA)),
            YA.reset()
        },
        result: function() {
            var t = OA / 2;
            return OA.reset(),
            t
        }
    },
    qA = 1 / 0,
    IA = qA,
    XA = -qA,
    BA = XA,
    WA = {
        point: function(t, n) {
            t < qA && (qA = t),
            t > XA && (XA = t),
            n < IA && (IA = n),
            n > BA && (BA = n)
        },
        lineStart: rr,
        lineEnd: rr,
        polygonStart: rr,
        polygonEnd: rr,
        result: function() {
            var t = [[qA, IA], [XA, BA]];
            return XA = BA = -(IA = qA = 1 / 0),
            t
        }
    },
    VA = 0,
    $A = 0,
    ZA = 0,
    GA = 0,
    JA = 0,
    QA = 0,
    KA = 0,
    tT = 0,
    nT = 0,
    eT = {
        point: di,
        lineStart: pi,
        lineEnd: yi,
        polygonStart: function() {
            eT.lineStart = bi,
            eT.lineEnd = mi
        },
        polygonEnd: function() {
            eT.point = di,
            eT.lineStart = pi,
            eT.lineEnd = yi
        },
        result: function() {
            var t = nT ? [KA / nT, tT / nT] : QA ? [GA / QA, JA / QA] : ZA ? [VA / ZA, $A / ZA] : [NaN, NaN];
            return VA = $A = ZA = GA = JA = QA = KA = tT = nT = 0,
            t
        }
    };
    wi.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t,
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._context.moveTo(t, n),
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(t, n);
                break;
            default:
                this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, LS)
            }
        },
        result: rr
    };
    var rT, iT, aT, oT, uT, cT = QM(),
    fT = {
        point: rr,
        lineStart: function() {
            fT.point = Mi
        },
        lineEnd: function() {
            rT && Si(iT, aT),
            fT.point = rr
        },
        polygonStart: function() {
            rT = !0
        },
        polygonEnd: function() {
            rT = null
        },
        result: function() {
            var t = +cT;
            return cT.reset(),
            t
        }
    };
    Ai.prototype = {
        _radius: 4.5,
        _circle: Ti(4.5),
        pointRadius: function(t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null),
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._string.push("M", t, ",", n),
                this._point = 1;
                break;
            case 1:
                this._string.push("L", t, ",", n);
                break;
            default:
                null == this._circle && (this._circle = Ti(this._radius)),
                this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [],
                t
            }
            return null
        }
    };
    Ci.prototype = {
        constructor: Ci,
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    var sT = 16,
    lT = jS(30 * RS),
    hT = function(t, n) {
        return + n ? zi(t, n) : Di(t)
    },
    dT = ki({
        point: function(t, n) {
            this.stream.point(t * RS, n * RS)
        }
    }),
    pT = function() {
        return Fi(Hi).scale(155.424).center([0, 33.6442])
    },
    gT = function() {
        return pT().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([ - .6, 38.7])
    },
    vT = Yi(function(t) {
        return $S(2 / (1 + t))
    });
    vT.invert = ji(function(t) {
        return 2 * nr(t / 2)
    });
    var yT = Yi(function(t) {
        return (t = tr(t)) && t / WS(t)
    });
    yT.invert = ji(function(t) {
        return t
    });
    qi.invert = function(t, n) {
        return [t, 2 * OS(IS(n)) - US]
    };
    Wi.invert = Wi;
    $i.invert = ji(OS);
    Gi.invert = function(t, n) {
        var e, r = n,
        i = 25;
        do {
            var a = r * r,
            o = a * a;
            r -= e = (r * (1.007226 + a * (.015085 + o * (.028874 * a - .044475 - .005916 * o))) - n) / (1.007226 + a * (.045255 + o * (.259866 * a - .311325 - .005916 * 11 * o)))
        } while ( HS ( e ) > DS && --i > 0);
        return [t / (.8707 + (a = r * r) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), r]
    };
    Ji.invert = ji(nr);
    Qi.invert = ji(function(t) {
        return 2 * OS(t)
    });
    Ki.invert = function(t, n) {
        return [ - n, 2 * OS(IS(t)) - US]
    };
    da.prototype = fa.prototype = {
        constructor: da,
        count: function() {
            return this.eachAfter(ua)
        },
        each: function(t) {
            var n, e, r, i, a = this,
            o = [a];
            do {
                for (n = o.reverse(), o = []; a = n.pop();) if (t(a), e = a.children) for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
            } while ( o . length );
            return this
        },
        eachAfter: function(t) {
            for (var n, e, r, i = this,
            a = [i], o = []; i = a.pop();) if (o.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) a.push(n[e]);
            for (; i = o.pop();) t(i);
            return this
        },
        eachBefore: function(t) {
            for (var n, e, r = this,
            i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        },
        sum: function(t) {
            return this.eachAfter(function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        },
        sort: function(t) {
            return this.eachBefore(function(n) {
                n.children && n.children.sort(t)
            })
        },
        path: function(t) {
            for (var n = this,
            e = ca(n, t), r = [n]; n !== e;) n = n.parent,
            r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t),
            t = t.parent;
            return r
        },
        ancestors: function() {
            for (var t = this,
            n = [t]; t = t.parent;) n.push(t);
            return n
        },
        descendants: function() {
            var t = [];
            return this.each(function(n) {
                t.push(n)
            }),
            t
        },
        leaves: function() {
            var t = [];
            return this.eachBefore(function(n) {
                n.children || t.push(n)
            }),
            t
        },
        links: function() {
            var t = this,
            n = [];
            return t.each(function(e) {
                e !== t && n.push({
                    source: e.parent,
                    target: e
                })
            }),
            n
        },
        copy: function() {
            return fa(this).eachBefore(la)
        }
    };
    var bT = Array.prototype.slice,
    mT = function(t) {
        for (var n, e, r = 0,
        i = (t = pa(bT.call(t))).length, a = []; r < i;) n = t[r],
        e && ya(e, n) ? ++r: (e = ma(a = ga(a, n)), r = 0);
        return e
    },
    _T = function(t) {
        return function() {
            return t
        }
    },
    xT = function(t) {
        t.x0 = Math.round(t.x0),
        t.y0 = Math.round(t.y0),
        t.x1 = Math.round(t.x1),
        t.y1 = Math.round(t.y1)
    },
    wT = function(t, n, e, r, i) {
        for (var a, o = t.children,
        u = -1,
        c = o.length,
        f = t.value && (r - n) / t.value; ++u < c;)(a = o[u]).y0 = e,
        a.y1 = i,
        a.x0 = n,
        a.x1 = n += a.value * f
    },
    MT = "$",
    ST = {
        depth: -1
    },
    AT = {};
    Ia.prototype = Object.create(da.prototype);
    var TT = function(t, n, e, r, i) {
        for (var a, o = t.children,
        u = -1,
        c = o.length,
        f = t.value && (i - e) / t.value; ++u < c;)(a = o[u]).x0 = n,
        a.x1 = r,
        a.y0 = e,
        a.y1 = e += a.value * f
    },
    kT = (1 + Math.sqrt(5)) / 2,
    CT = function t(n) {
        function e(t, e, r, i, a) {
            Ba(n, t, e, r, i, a)
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n: 1)
        },
        e
    } (kT),
    NT = function t(n) {
        function e(t, e, r, i, a) {
            if ((o = t._squarify) && o.ratio === n) for (var o, u, c, f, s, l = -1,
            h = o.length,
            d = t.value; ++l < h;) {
                for (c = (u = o[l]).children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;
                u.dice ? wT(u, e, r, i, r += (a - r) * u.value / d) : TT(u, e, r, e += (i - e) * u.value / d, a),
                d -= u.value
            } else t._squarify = o = Ba(n, t, e, r, i, a),
            o.ratio = n
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n: 1)
        },
        e
    } (kT),
    ET = function(t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    },
    DT = [].slice,
    zT = {};
    $a.prototype = to.prototype = {
        constructor: $a,
        defer: function(t) {
            if ("function" != typeof t) throw new Error("invalid callback");
            if (this._call) throw new Error("defer after await");
            if (null != this._error) return this;
            var n = DT.call(arguments, 1);
            return n.push(t),
            ++this._waiting,
            this._tasks.push(n),
            Za(this),
            this
        },
        abort: function() {
            return null == this._error && Qa(this, new Error("abort")),
            this
        },
        await: function(t) {
            if ("function" != typeof t) throw new Error("invalid callback");
            if (this._call) throw new Error("multiple await");
            return this._call = function(n, e) {
                t.apply(null, [n].concat(e))
            },
            Ka(this),
            this
        },
        awaitAll: function(t) {
            if ("function" != typeof t) throw new Error("invalid callback");
            if (this._call) throw new Error("multiple await");
            return this._call = t,
            Ka(this),
            this
        }
    };
    var UT = function() {
        return Math.random()
    },
    PT = function t(n) {
        function e(t, e) {
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            1 === arguments.length ? (e = t, t = 0) : e -= t,
            function() {
                return n() * e + t
            }
        }
        return e.source = t,
        e
    } (UT),
    LT = function t(n) {
        function e(t, e) {
            var r, i;
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            function() {
                var a;
                if (null != r) a = r,
                r = null;
                else do {
                    r = 2 * n() - 1, a = 2 * n() - 1, i = r * r + a * a
                } while (! i || i > 1 );
                return t + e * a * Math.sqrt( - 2 * Math.log(i) / i)
            }
        }
        return e.source = t,
        e
    } (UT),
    FT = function t(n) {
        function e() {
            var t = LT.source(n).apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        }
        return e.source = t,
        e
    } (UT),
    RT = function t(n) {
        function e(t) {
            return function() {
                for (var e = 0,
                r = 0; r < t; ++r) e += n();
                return e
            }
        }
        return e.source = t,
        e
    } (UT),
    HT = function t(n) {
        function e(t) {
            var e = RT.source(n)(t);
            return function() {
                return e() / t
            }
        }
        return e.source = t,
        e
    } (UT),
    OT = function t(n) {
        function e(t) {
            return function() {
                return - Math.log(1 - n()) / t
            }
        }
        return e.source = t,
        e
    } (UT),
    YT = function(t, n) {
        function e(t) {
            var n, e = f.status;
            if (!e && eo(f) || e >= 200 && e < 300 || 304 === e) {
                if (a) try {
                    n = a.call(r, f)
                } catch(t) {
                    return void u.call("error", r, t)
                } else n = f;
                u.call("load", r, n)
            } else u.call("error", r, t)
        }
        var r, i, a, o, u = v("beforesend", "progress", "load", "error"),
        c = ke(),
        f = new XMLHttpRequest,
        s = null,
        l = null,
        h = 0;
        if ("undefined" == typeof XDomainRequest || "withCredentials" in f || !/^(http(s)?:)?\/\//.test(t) || (f = new XDomainRequest), "onload" in f ? f.onload = f.onerror = f.ontimeout = e: f.onreadystatechange = function(t) {
            f.readyState > 3 && e(t)
        },
        f.onprogress = function(t) {
            u.call("progress", r, t)
        },
        r = {
            header: function(t, n) {
                return t = (t + "").toLowerCase(),
                arguments.length < 2 ? c.get(t) : (null == n ? c.remove(t) : c.set(t, n + ""), r)
            },
            mimeType: function(t) {
                return arguments.length ? (i = null == t ? null: t + "", r) : i
            },
            responseType: function(t) {
                return arguments.length ? (o = t, r) : o
            },
            timeout: function(t) {
                return arguments.length ? (h = +t, r) : h
            },
            user: function(t) {
                return arguments.length < 1 ? s: (s = null == t ? null: t + "", r)
            },
            password: function(t) {
                return arguments.length < 1 ? l: (l = null == t ? null: t + "", r)
            },
            response: function(t) {
                return a = t,
                r
            },
            get: function(t, n) {
                return r.send("GET", t, n)
            },
            post: function(t, n) {
                return r.send("POST", t, n)
            },
            send: function(n, e, a) {
                return f.open(n, t, !0, s, l),
                null == i || c.has("accept") || c.set("accept", i + ",*/*"),
                f.setRequestHeader && c.each(function(t, n) {
                    f.setRequestHeader(n, t)
                }),
                null != i && f.overrideMimeType && f.overrideMimeType(i),
                null != o && (f.responseType = o),
                h > 0 && (f.timeout = h),
                null == a && "function" == typeof e && (a = e, e = null),
                null != a && 1 === a.length && (a = no(a)),
                null != a && r.on("error", a).on("load",
                function(t) {
                    a(null, t)
                }),
                u.call("beforesend", r, f),
                f.send(null == e ? null: e),
                r
            },
            abort: function() {
                return f.abort(),
                r
            },
            on: function() {
                var t = u.on.apply(u, arguments);
                return t === u ? r: t
            }
        },
        null != n) {
            if ("function" != typeof n) throw new Error("invalid callback: " + n);
            return r.get(n)
        }
        return r
    },
    jT = function(t, n) {
        return function(e, r) {
            var i = YT(e).mimeType(t).response(n);
            if (null != r) {
                if ("function" != typeof r) throw new Error("invalid callback: " + r);
                return i.get(r)
            }
            return i
        }
    },
    qT = jT("text/html",
    function(t) {
        return document.createRange().createContextualFragment(t.responseText)
    }),
    IT = jT("application/json",
    function(t) {
        return JSON.parse(t.responseText)
    }),
    XT = jT("text/plain",
    function(t) {
        return t.responseText
    }),
    BT = jT("application/xml",
    function(t) {
        var n = t.responseXML;
        if (!n) throw new Error("parse error");
        return n
    }),
    WT = function(t, n) {
        return function(e, r, i) {
            arguments.length < 3 && (i = r, r = null);
            var a = YT(e).mimeType(t);
            return a.row = function(t) {
                return arguments.length ? a.response(ro(n, r = t)) : r
            },
            a.row(r),
            i ? a.get(i) : a
        }
    },
    VT = WT("text/csv", _M),
    $T = WT("text/tab-separated-values", AM),
    ZT = Array.prototype,
    GT = ZT.map,
    JT = ZT.slice,
    QT = {
        name: "implicit"
    },
    KT = function(t) {
        return function() {
            return t
        }
    },
    tk = function(t) {
        return + t
    },
    nk = [0, 1],
    ek = function(t, n, e) {
        var r, a = t[0],
        o = t[t.length - 1],
        u = i(a, o, null == n ? 10 : n);
        switch ((e = Ze(null == e ? ",f": e)).type) {
        case "s":
            var c = Math.max(Math.abs(a), Math.abs(o));
            return null != e.precision || isNaN(r = GM(u, c)) || (e.precision = r),
            BM(e, c);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != e.precision || isNaN(r = JM(u, Math.max(Math.abs(a), Math.abs(o)))) || (e.precision = r - ("e" === e.type));
            break;
        case "f":
        case "%":
            null != e.precision || isNaN(r = ZM(u)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return XM(e)
    },
    rk = function(t, n) {
        var e, r = 0,
        i = (t = t.slice()).length - 1,
        a = t[r],
        o = t[i];
        return o < a && (e = r, r = i, i = e, e = a, a = o, o = e),
        t[r] = n.floor(a),
        t[i] = n.ceil(o),
        t
    },
    ik = new Date,
    ak = new Date,
    ok = Do(function() {},
    function(t, n) {
        t.setTime( + t + n)
    },
    function(t, n) {
        return n - t
    });
    ok.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? Do(function(n) {
            n.setTime(Math.floor(n / t) * t)
        },
        function(n, e) {
            n.setTime( + n + e * t)
        },
        function(n, e) {
            return (e - n) / t
        }) : ok: null
    };
    var uk = ok.range,
    ck = 6e4,
    fk = 6048e5,
    sk = Do(function(t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    },
    function(t, n) {
        t.setTime( + t + 1e3 * n)
    },
    function(t, n) {
        return (n - t) / 1e3
    },
    function(t) {
        return t.getUTCSeconds()
    }),
    lk = sk.range,
    hk = Do(function(t) {
        t.setTime(Math.floor(t / ck) * ck)
    },
    function(t, n) {
        t.setTime( + t + n * ck)
    },
    function(t, n) {
        return (n - t) / ck
    },
    function(t) {
        return t.getMinutes()
    }),
    dk = hk.range,
    pk = Do(function(t) {
        var n = t.getTimezoneOffset() * ck % 36e5;
        n < 0 && (n += 36e5),
        t.setTime(36e5 * Math.floor(( + t - n) / 36e5) + n)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getHours()
    }),
    gk = pk.range,
    vk = Do(function(t) {
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setDate(t.getDate() + n)
    },
    function(t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ck) / 864e5
    },
    function(t) {
        return t.getDate() - 1
    }),
    yk = vk.range,
    bk = zo(0),
    mk = zo(1),
    _k = zo(2),
    xk = zo(3),
    wk = zo(4),
    Mk = zo(5),
    Sk = zo(6),
    Ak = bk.range,
    Tk = mk.range,
    kk = _k.range,
    Ck = xk.range,
    Nk = wk.range,
    Ek = Mk.range,
    Dk = Sk.range,
    zk = Do(function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setMonth(t.getMonth() + n)
    },
    function(t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    },
    function(t) {
        return t.getMonth()
    }),
    Uk = zk.range,
    Pk = Do(function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setFullYear(t.getFullYear() + n)
    },
    function(t, n) {
        return n.getFullYear() - t.getFullYear()
    },
    function(t) {
        return t.getFullYear()
    });
    Pk.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Do(function(n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
            n.setMonth(0, 1),
            n.setHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    var Lk = Pk.range,
    Fk = Do(function(t) {
        t.setUTCSeconds(0, 0)
    },
    function(t, n) {
        t.setTime( + t + n * ck)
    },
    function(t, n) {
        return (n - t) / ck
    },
    function(t) {
        return t.getUTCMinutes()
    }),
    Rk = Fk.range,
    Hk = Do(function(t) {
        t.setUTCMinutes(0, 0, 0)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getUTCHours()
    }),
    Ok = Hk.range,
    Yk = Do(function(t) {
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    },
    function(t, n) {
        return (n - t) / 864e5
    },
    function(t) {
        return t.getUTCDate() - 1
    }),
    jk = Yk.range,
    qk = Uo(0),
    Ik = Uo(1),
    Xk = Uo(2),
    Bk = Uo(3),
    Wk = Uo(4),
    Vk = Uo(5),
    $k = Uo(6),
    Zk = qk.range,
    Gk = Ik.range,
    Jk = Xk.range,
    Qk = Bk.range,
    Kk = Wk.range,
    tC = Vk.range,
    nC = $k.range,
    eC = Do(function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    },
    function(t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    },
    function(t) {
        return t.getUTCMonth()
    }),
    rC = eC.range,
    iC = Do(function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    },
    function(t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    },
    function(t) {
        return t.getUTCFullYear()
    });
    iC.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Do(function(n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
            n.setUTCMonth(0, 1),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var aC, oC, uC, cC, fC = iC.range,
    sC = {
        "-": "",
        _: " ",
        0 : "0"
    },
    lC = /^\s*\d+/,
    hC = /^%/,
    dC = /[\\^$*+?|[\]().{}]/g; !
    function(t) {
        aC = Ro(t),
        oC = aC.format,
        uC = aC.utcFormat,
        cC = aC.utcParse
    } ({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || uC("%Y-%m-%dT%H:%M:%S.%LZ"),
    +new Date("2000-01-01T00:00:00.000Z") || cC("%Y-%m-%dT%H:%M:%S.%LZ");
    var pC = 1e3,
    gC = 60 * pC,
    vC = 60 * gC,
    yC = 24 * vC,
    bC = 7 * yC,
    mC = 30 * yC,
    _C = 365 * yC,
    xC = function() {
        return Wu(Pk, zk, bk, vk, pk, hk, sk, ok, oC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
    },
    wC = function() {
        return Wu(iC, eC, qk, Yk, Hk, Fk, sk, ok, uC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
    },
    MC = function(t) {
        return t.match(/.{6}/g).map(function(t) {
            return "#" + t
        })
    },
    SC = MC("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    AC = MC("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
    TC = MC("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
    kC = MC("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
    CC = Xx(Gt(300, .5, 0), Gt( - 240, .5, 1)),
    NC = Xx(Gt( - 100, .75, .35), Gt(80, 1.5, .8)),
    EC = Xx(Gt(260, .75, .35), Gt(80, 1.5, .8)),
    DC = Gt(),
    zC = Vu(MC("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
    UC = Vu(MC("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    PC = Vu(MC("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    LC = Vu(MC("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
    FC = function(t) {
        return function() {
            return t
        }
    },
    RC = Math.abs,
    HC = Math.atan2,
    OC = Math.cos,
    YC = Math.max,
    jC = Math.min,
    qC = Math.sin,
    IC = Math.sqrt,
    XC = 1e-12,
    BC = Math.PI,
    WC = BC / 2,
    VC = 2 * BC;
    ic.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, n)
            }
        }
    };
    var $C = function(t) {
        return new ic(t)
    },
    ZC = function() {
        function t(t) {
            var u, c, f, s = t.length,
            l = !1;
            for (null == i && (o = a(f = _e())), u = 0; u <= s; ++u) ! (u < s && r(c = t[u], u, t)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()),
            l && o.point( + n(c, u, t), +e(c, u, t));
            if (f) return o = null,
            f + "" || null
        }
        var n = ac,
        e = oc,
        r = FC(!0),
        i = null,
        a = $C,
        o = null;
        return t.x = function(e) {
            return arguments.length ? (n = "function" == typeof e ? e: FC( + e), t) : n
        },
        t.y = function(n) {
            return arguments.length ? (e = "function" == typeof n ? n: FC( + n), t) : e
        },
        t.defined = function(n) {
            return arguments.length ? (r = "function" == typeof n ? n: FC( !! n), t) : r
        },
        t.curve = function(n) {
            return arguments.length ? (a = n, null != i && (o = a(i)), t) : a
        },
        t.context = function(n) {
            return arguments.length ? (null == n ? i = o = null: o = a(i = n), t) : i
        },
        t
    },
    GC = function() {
        function t(t) {
            var n, s, l, h, d, p = t.length,
            g = !1,
            v = new Array(p),
            y = new Array(p);
            for (null == u && (f = c(d = _e())), n = 0; n <= p; ++n) {
                if (! (n < p && o(h = t[n], n, t)) === g) if (g = !g) s = n,
                f.areaStart(),
                f.lineStart();
                else {
                    for (f.lineEnd(), f.lineStart(), l = n - 1; l >= s; --l) f.point(v[l], y[l]);
                    f.lineEnd(),
                    f.areaEnd()
                }
                g && (v[n] = +e(h, n, t), y[n] = +i(h, n, t), f.point(r ? +r(h, n, t) : v[n], a ? +a(h, n, t) : y[n]))
            }
            if (d) return f = null,
            d + "" || null
        }
        function n() {
            return ZC().defined(o).curve(c).context(u)
        }
        var e = ac,
        r = null,
        i = FC(0),
        a = oc,
        o = FC(!0),
        u = null,
        c = $C,
        f = null;
        return t.x = function(n) {
            return arguments.length ? (e = "function" == typeof n ? n: FC( + n), r = null, t) : e
        },
        t.x0 = function(n) {
            return arguments.length ? (e = "function" == typeof n ? n: FC( + n), t) : e
        },
        t.x1 = function(n) {
            return arguments.length ? (r = null == n ? null: "function" == typeof n ? n: FC( + n), t) : r
        },
        t.y = function(n) {
            return arguments.length ? (i = "function" == typeof n ? n: FC( + n), a = null, t) : i
        },
        t.y0 = function(n) {
            return arguments.length ? (i = "function" == typeof n ? n: FC( + n), t) : i
        },
        t.y1 = function(n) {
            return arguments.length ? (a = null == n ? null: "function" == typeof n ? n: FC( + n), t) : a
        },
        t.lineX0 = t.lineY0 = function() {
            return n().x(e).y(i)
        },
        t.lineY1 = function() {
            return n().x(e).y(a)
        },
        t.lineX1 = function() {
            return n().x(r).y(i)
        },
        t.defined = function(n) {
            return arguments.length ? (o = "function" == typeof n ? n: FC( !! n), t) : o
        },
        t.curve = function(n) {
            return arguments.length ? (c = n, null != u && (f = c(u)), t) : c
        },
        t.context = function(n) {
            return arguments.length ? (null == n ? u = f = null: f = c(u = n), t) : u
        },
        t
    },
    JC = function(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    },
    QC = function(t) {
        return t
    },
    KC = cc($C);
    uc.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    var tN = function() {
        return fc(ZC().curve(KC))
    },
    nN = function() {
        var t = GC().curve(KC),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        a = t.lineY1;
        return t.angle = t.x,
        delete t.x,
        t.startAngle = t.x0,
        delete t.x0,
        t.endAngle = t.x1,
        delete t.x1,
        t.radius = t.y,
        delete t.y,
        t.innerRadius = t.y0,
        delete t.y0,
        t.outerRadius = t.y1,
        delete t.y1,
        t.lineStartAngle = function() {
            return fc(e())
        },
        delete t.lineX0,
        t.lineEndAngle = function() {
            return fc(r())
        },
        delete t.lineX1,
        t.lineInnerRadius = function() {
            return fc(i())
        },
        delete t.lineY0,
        t.lineOuterRadius = function() {
            return fc(a())
        },
        delete t.lineY1,
        t.curve = function(t) {
            return arguments.length ? n(cc(t)) : n()._curve
        },
        t
    },
    eN = function(t, n) {
        return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
    },
    rN = Array.prototype.slice,
    iN = {
        draw: function(t, n) {
            var e = Math.sqrt(n / BC);
            t.moveTo(e, 0),
            t.arc(0, 0, e, 0, VC)
        }
    },
    aN = {
        draw: function(t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo( - 3 * e, -e),
            t.lineTo( - e, -e),
            t.lineTo( - e, -3 * e),
            t.lineTo(e, -3 * e),
            t.lineTo(e, -e),
            t.lineTo(3 * e, -e),
            t.lineTo(3 * e, e),
            t.lineTo(e, e),
            t.lineTo(e, 3 * e),
            t.lineTo( - e, 3 * e),
            t.lineTo( - e, e),
            t.lineTo( - 3 * e, e),
            t.closePath()
        }
    },
    oN = Math.sqrt(1 / 3),
    uN = 2 * oN,
    cN = {
        draw: function(t, n) {
            var e = Math.sqrt(n / uN),
            r = e * oN;
            t.moveTo(0, -e),
            t.lineTo(r, 0),
            t.lineTo(0, e),
            t.lineTo( - r, 0),
            t.closePath()
        }
    },
    fN = Math.sin(BC / 10) / Math.sin(7 * BC / 10),
    sN = Math.sin(VC / 10) * fN,
    lN = -Math.cos(VC / 10) * fN,
    hN = {
        draw: function(t, n) {
            var e = Math.sqrt(.8908130915292852 * n),
            r = sN * e,
            i = lN * e;
            t.moveTo(0, -e),
            t.lineTo(r, i);
            for (var a = 1; a < 5; ++a) {
                var o = VC * a / 5,
                u = Math.cos(o),
                c = Math.sin(o);
                t.lineTo(c * e, -u * e),
                t.lineTo(u * r - c * i, c * r + u * i)
            }
            t.closePath()
        }
    },
    dN = {
        draw: function(t, n) {
            var e = Math.sqrt(n),
            r = -e / 2;
            t.rect(r, r, e, e)
        }
    },
    pN = Math.sqrt(3),
    gN = {
        draw: function(t, n) {
            var e = -Math.sqrt(n / (3 * pN));
            t.moveTo(0, 2 * e),
            t.lineTo( - pN * e, -e),
            t.lineTo(pN * e, -e),
            t.closePath()
        }
    },
    vN = -.5,
    yN = Math.sqrt(3) / 2,
    bN = 1 / Math.sqrt(12),
    mN = 3 * (bN / 2 + 1),
    _N = {
        draw: function(t, n) {
            var e = Math.sqrt(n / mN),
            r = e / 2,
            i = e * bN,
            a = r,
            o = e * bN + e,
            u = -a,
            c = o;
            t.moveTo(r, i),
            t.lineTo(a, o),
            t.lineTo(u, c),
            t.lineTo(vN * r - yN * i, yN * r + vN * i),
            t.lineTo(vN * a - yN * o, yN * a + vN * o),
            t.lineTo(vN * u - yN * c, yN * u + vN * c),
            t.lineTo(vN * r + yN * i, vN * i - yN * r),
            t.lineTo(vN * a + yN * o, vN * o - yN * a),
            t.lineTo(vN * u + yN * c, vN * c - yN * u),
            t.closePath()
        }
    },
    xN = [iN, aN, cN, dN, hN, gN, _N],
    wN = function() {};
    yc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 3:
                vc(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                vc(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    bc.prototype = {
        areaStart: wN,
        areaEnd: wN,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._x2 = t,
                this._y2 = n;
                break;
            case 1:
                this._point = 2,
                this._x3 = t,
                this._y3 = n;
                break;
            case 2:
                this._point = 3,
                this._x4 = t,
                this._y4 = n,
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                break;
            default:
                vc(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    mc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
                this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                break;
            case 3:
                this._point = 4;
            default:
                vc(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    _c.prototype = {
        lineStart: function() {
            this._x = [],
            this._y = [],
            this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x,
            n = this._y,
            e = t.length - 1;
            if (e > 0) for (var r, i = t[0], a = n[0], o = t[e] - i, u = n[e] - a, c = -1; ++c <= e;) r = c / e,
            this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * o), this._beta * n[c] + (1 - this._beta) * (a + r * u));
            this._x = this._y = null,
            this._basis.lineEnd()
        },
        point: function(t, n) {
            this._x.push( + t),
            this._y.push( + n)
        }
    };
    var MN = function t(n) {
        function e(t) {
            return 1 === n ? new yc(t) : new _c(t, n)
        }
        return e.beta = function(n) {
            return t( + n)
        },
        e
    } (.85);
    wc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                xc(this, this._x1, this._y1)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2,
                this._x1 = t,
                this._y1 = n;
                break;
            case 2:
                this._point = 3;
            default:
                xc(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var SN = function t(n) {
        function e(t) {
            return new wc(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    } (0);
    Mc.prototype = {
        areaStart: wN,
        areaEnd: wN,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                xc(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var AN = function t(n) {
        function e(t) {
            return new Mc(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    } (0);
    Sc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                xc(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var TN = function t(n) {
        function e(t) {
            return new Sc(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    } (0);
    Tc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                Ac(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var kN = function t(n) {
        function e(t) {
            return n ? new Tc(t, n) : new wc(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    } (.5);
    kc.prototype = {
        areaStart: wN,
        areaEnd: wN,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Ac(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var CN = function t(n) {
        function e(t) {
            return n ? new kc(t, n) : new Mc(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    } (.5);
    Cc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Ac(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var NN = function t(n) {
        function e(t) {
            return n ? new Cc(t, n) : new Sc(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    } (.5);
    Nc.prototype = {
        areaStart: wN,
        areaEnd: wN,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, n) {
            t = +t,
            n = +n,
            this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    };
    Pc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Uc(this, this._t0, zc(this, this._t0))
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    Uc(this, zc(this, e = Dc(this, t, n)), e);
                    break;
                default:
                    Uc(this, this._t0, e = Dc(this, t, n))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n,
                this._t0 = e
            }
        }
    },
    (Lc.prototype = Object.create(Pc.prototype)).point = function(t, n) {
        Pc.prototype.point.call(this, n, t)
    },
    Fc.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, a) {
            this._context.bezierCurveTo(n, t, r, e, a, i)
        }
    },
    Rc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [],
            this._y = []
        },
        lineEnd: function() {
            var t = this._x,
            n = this._y,
            e = t.length;
            if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
            else for (var r = Hc(t), i = Hc(n), a = 0, o = 1; o < e; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[o], n[o]); (this._line || 0 !== this._line && 1 === e) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function(t, n) {
            this._x.push( + t),
            this._y.push( + n)
        }
    };
    Oc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0) this._context.lineTo(this._x, n),
                this._context.lineTo(t, n);
                else {
                    var e = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(e, this._y),
                    this._context.lineTo(e, n)
                }
            }
            this._x = t,
            this._y = n
        }
    };
    var EN, DN, zN, UN, PN, LN = function(t, n) {
        if ((i = t.length) > 1) for (var e, r, i, a = 1,
        o = t[n[0]], u = o.length; a < i; ++a) for (r = o, o = t[n[a]], e = 0; e < u; ++e) o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
    },
    FN = function(t) {
        for (var n = t.length,
        e = new Array(n); --n >= 0;) e[n] = n;
        return e
    },
    RN = function(t) {
        var n = t.map(jc);
        return FN(t).sort(function(t, e) {
            return n[t] - n[e]
        })
    },
    HN = {
        "-": "",
        _: " ",
        0 : "0"
    },
    ON = /^\s*\d+/,
    YN = /^%/,
    jN = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    Yf({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var qN = Date.prototype.toISOString ?
    function(t) {
        return t.toISOString()
    }: UN("%Y-%m-%dT%H:%M:%S.%LZ"),
    IN = +new Date("2000-01-01T00:00:00.000Z") ?
    function(t) {
        var n = new Date(t);
        return isNaN(n) ? null: n
    }: PN("%Y-%m-%dT%H:%M:%S.%LZ"),
    XN = function(t) {
        return function() {
            return t
        }
    };
    If.prototype = {
        constructor: If,
        insert: function(t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = Vf(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Bf(this, e), e = (t = e).U), e.C = !1, r.C = !0, Wf(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Wf(this, e), e = (t = e).U), e.C = !1, r.C = !0, Bf(this, r)),
            e = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P),
            t.P && (t.P.N = t.N),
            t.N = t.P = null;
            var n, e, r, i = t.U,
            a = t.L,
            o = t.R;
            if (e = a ? o ? Vf(o) : a: o, i ? i.L === t ? i.L = e: i.R = e: this._ = e, a && o ? (r = e.C, e.C = t.C, e.L = a, a.U = e, e !== o ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = o, o.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1;
            else {
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if ((n = i.R).C && (n.C = !1, i.C = !0, Bf(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, Wf(this, n), n = i.R),
                            n.C = i.C,
                            i.C = n.R.C = !1,
                            Bf(this, i),
                            t = this._;
                            break
                        }
                    } else if ((n = i.L).C && (n.C = !1, i.C = !0, Wf(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, Bf(this, n), n = i.L),
                        n.C = i.C,
                        i.C = n.L.C = !1,
                        Wf(this, i),
                        t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (! t . C );
                t && (t.C = !1)
            }
        }
    };
    var BN, WN, VN, $N, ZN, GN = [],
    JN = [],
    QN = 1e-6,
    KN = 1e-12;
    bs.prototype = {
        constructor: bs,
        polygons: function() {
            var t = this.edges;
            return this.cells.map(function(n) {
                var e = n.halfedges.map(function(e) {
                    return es(n, t[e])
                });
                return e.data = n.site.data,
                e
            })
        },
        triangles: function() {
            var t = [],
            n = this.edges;
            return this.cells.forEach(function(e, r) {
                if (a = (i = e.halfedges).length) for (var i, a, o, u = e.site,
                c = -1,
                f = n[i[a - 1]], s = f.left === u ? f.right: f.left; ++c < a;) o = s,
                s = (f = n[i[c]]).left === u ? f.right: f.left,
                o && s && r < o.index && r < s.index && vs(u, o, s) < 0 && t.push([u.data, o.data, s.data])
            }),
            t
        },
        links: function() {
            return this.edges.filter(function(t) {
                return t.right
            }).map(function(t) {
                return {
                    source: t.left.data,
                    target: t.right.data
                }
            })
        },
        find: function(t, n, e) {
            for (var r, i, a = this,
            o = a._found || 0,
            u = a.cells.length; ! (i = a.cells[o]);) if (++o >= u) return null;
            var c = t - i.site[0],
            f = n - i.site[1],
            s = c * c + f * f;
            do {
                i = a.cells[r = o], o = null, i.halfedges.forEach(function(e) {
                    var r = a.edges[e],
                    u = r.left;
                    if (u !== i.site && u || (u = r.right)) {
                        var c = t - u[0],
                        f = n - u[1],
                        l = c * c + f * f;
                        l < s && (s = l, o = u.index)
                    }
                })
            } while ( null !== o );
            return a._found = r,
            null == e || s <= e * e ? i.site: null
        }
    };
    var tE = function(t) {
        return function() {
            return t
        }
    };
    _s.prototype = {
        constructor: _s,
        scale: function(t) {
            return 1 === t ? this: new _s(this.k * t, this.x, this.y)
        },
        translate: function(t, n) {
            return 0 === t & 0 === n ? this: new _s(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var nE = new _s(1, 0, 0);
    xs.prototype = _s.prototype;
    var eE = function() {
        m_.preventDefault(),
        m_.stopImmediatePropagation()
    },
    rE = Object.freeze({
        version: "4.11.0",
        bisect: Um,
        bisectRight: Um,
        bisectLeft: Pm,
        ascending: Em,
        bisector: Dm,
        cross: function(t, n, r) {
            var i, a, o, u, c = t.length,
            f = n.length,
            s = new Array(c * f);
            for (null == r && (r = e), i = o = 0; i < c; ++i) for (u = t[i], a = 0; a < f; ++a, ++o) s[o] = r(u, n[a]);
            return s
        },
        descending: function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        },
        deviation: Rm,
        extent: Hm,
        histogram: function() {
            function t(t) {
                var a, o, u = t.length,
                c = new Array(u);
                for (a = 0; a < u; ++a) c[a] = n(t[a], a, t);
                var f = e(c),
                s = f[0],
                l = f[1],
                h = r(c, s, l);
                Array.isArray(h) || (h = i(s, l, h), h = Xm(Math.ceil(s / h) * h, Math.floor(l / h) * h, h));
                for (var d = h.length; h[0] <= s;) h.shift(),
                --d;
                for (; h[d - 1] > l;) h.pop(),
                --d;
                var p, g = new Array(d + 1);
                for (a = 0; a <= d; ++a)(p = g[a] = []).x0 = a > 0 ? h[a - 1] : s,
                p.x1 = a < d ? h[a] : l;
                for (a = 0; a < u; ++a) s <= (o = c[a]) && o <= l && g[Um(h, o, 0, d)].push(t[a]);
                return g
            }
            var n = Im,
            e = Hm,
            r = Zm;
            return t.value = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e: qm(e), t) : n
            },
            t.domain = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n: qm([n[0], n[1]]), t) : e
            },
            t.thresholds = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n: qm(Array.isArray(n) ? Ym.call(n) : n), t) : r
            },
            t
        },
        thresholdFreedmanDiaconis: function(t, n, e) {
            return t = jm.call(t, Lm).sort(Em),
            Math.ceil((e - n) / (2 * (Gm(t, .75) - Gm(t, .25)) * Math.pow(t.length, -1 / 3)))
        },
        thresholdScott: function(t, n, e) {
            return Math.ceil((e - n) / (3.5 * Rm(t) * Math.pow(t.length, -1 / 3)))
        },
        thresholdSturges: Zm,
        max: Jm,
        mean: function(t, n) {
            var e, r = t.length,
            i = r,
            a = -1,
            o = 0;
            if (null == n) for (; ++a < r;) isNaN(e = Lm(t[a])) ? --i: o += e;
            else for (; ++a < r;) isNaN(e = Lm(n(t[a], a, t))) ? --i: o += e;
            if (i) return o / i
        },
        median: function(t, n) {
            var e, r = t.length,
            i = -1,
            a = [];
            if (null == n) for (; ++i < r;) isNaN(e = Lm(t[i])) || a.push(e);
            else for (; ++i < r;) isNaN(e = Lm(n(t[i], i, t))) || a.push(e);
            return Gm(a.sort(Em), .5)
        },
        merge: Qm,
        min: Km,
        pairs: function(t, n) {
            null == n && (n = e);
            for (var r = 0,
            i = t.length - 1,
            a = t[0], o = new Array(i < 0 ? 0 : i); r < i;) o[r] = n(a, a = t[++r]);
            return o
        },
        permute: function(t, n) {
            for (var e = n.length,
            r = new Array(e); e--;) r[e] = t[n[e]];
            return r
        },
        quantile: Gm,
        range: Xm,
        scan: function(t, n) {
            if (e = t.length) {
                var e, r, i = 0,
                a = 0,
                o = t[a];
                for (null == n && (n = Em); ++i < e;)(n(r = t[i], o) < 0 || 0 !== n(o, o)) && (o = r, a = i);
                return 0 === n(o, o) ? a: void 0
            }
        },
        shuffle: function(t, n, e) {
            for (var r, i, a = (null == e ? t.length: e) - (n = null == n ? 0 : +n); a;) i = Math.random() * a--|0,
            r = t[a + n],
            t[a + n] = t[i + n],
            t[i + n] = r;
            return t
        },
        sum: function(t, n) {
            var e, r = t.length,
            i = -1,
            a = 0;
            if (null == n) for (; ++i < r;)(e = +t[i]) && (a += e);
            else for (; ++i < r;)(e = +n(t[i], i, t)) && (a += e);
            return a
        },
        ticks: $m,
        tickIncrement: r,
        tickStep: i,
        transpose: t_,
        variance: Fm,
        zip: function() {
            return t_(arguments)
        },
        axisTop: h,
        axisRight: d,
        axisBottom: p,
        axisLeft: g,
        brush: function() {
            return ye(Zw)
        },
        brushX: ve,
        brushY: function() {
            return ye($w)
        },
        brushSelection: function(t) {
            var n = t.__brush;
            return n ? n.dim.output(n.selection) : null
        },
        chord: function() {
            function t(t) {
                var a, o, u, c, f, s, l = t.length,
                h = [],
                d = Xm(l),
                p = [],
                g = [],
                v = g.groups = new Array(l),
                y = new Array(l * l);
                for (a = 0, f = -1; ++f < l;) {
                    for (o = 0, s = -1; ++s < l;) o += t[f][s];
                    h.push(o),
                    p.push(Xm(l)),
                    a += o
                }
                for (e && d.sort(function(t, n) {
                    return e(h[t], h[n])
                }), r && p.forEach(function(n, e) {
                    n.sort(function(n, i) {
                        return r(t[e][n], t[e][i])
                    })
                }), c = (a = oM(0, aM - n * l) / a) ? n: aM / l, o = 0, f = -1; ++f < l;) {
                    for (u = o, s = -1; ++s < l;) {
                        var b = d[f],
                        m = p[b][s],
                        _ = t[b][m],
                        x = o,
                        w = o += _ * a;
                        y[m * l + b] = {
                            index: b,
                            subindex: m,
                            startAngle: x,
                            endAngle: w,
                            value: _
                        }
                    }
                    v[b] = {
                        index: b,
                        startAngle: u,
                        endAngle: o,
                        value: h[b]
                    },
                    o += c
                }
                for (f = -1; ++f < l;) for (s = f - 1; ++s < l;) {
                    var M = y[s * l + f],
                    S = y[f * l + s]; (M.value || S.value) && g.push(M.value < S.value ? {
                        source: S,
                        target: M
                    }: {
                        source: M,
                        target: S
                    })
                }
                return i ? g.sort(i) : g
            }
            var n = 0,
            e = null,
            r = null,
            i = null;
            return t.padAngle = function(e) {
                return arguments.length ? (n = oM(0, e), t) : n
            },
            t.sortGroups = function(n) {
                return arguments.length ? (e = n, t) : e
            },
            t.sortSubgroups = function(n) {
                return arguments.length ? (r = n, t) : r
            },
            t.sortChords = function(n) {
                return arguments.length ? (null == n ? i = null: (i = be(n))._ = n, t) : i && i._
            },
            t
        },
        ribbon: function() {
            function t() {
                var t, u = uM.call(arguments),
                c = n.apply(this, u),
                f = e.apply(this, u),
                s = +r.apply(this, (u[0] = c, u)),
                l = i.apply(this, u) - iM,
                h = a.apply(this, u) - iM,
                d = s * nM(l),
                p = s * eM(l),
                g = +r.apply(this, (u[0] = f, u)),
                v = i.apply(this, u) - iM,
                y = a.apply(this, u) - iM;
                if (o || (o = t = _e()), o.moveTo(d, p), o.arc(0, 0, s, l, h), l === v && h === y || (o.quadraticCurveTo(0, 0, g * nM(v), g * eM(v)), o.arc(0, 0, g, v, y)), o.quadraticCurveTo(0, 0, d, p), o.closePath(), t) return o = null,
                t + "" || null
            }
            var n = xe,
            e = we,
            r = Me,
            i = Se,
            a = Ae,
            o = null;
            return t.radius = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n: cM( + n), t) : r
            },
            t.startAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n: cM( + n), t) : i
            },
            t.endAngle = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n: cM( + n), t) : a
            },
            t.source = function(e) {
                return arguments.length ? (n = e, t) : n
            },
            t.target = function(n) {
                return arguments.length ? (e = n, t) : e
            },
            t.context = function(n) {
                return arguments.length ? (o = null == n ? null: n, t) : o
            },
            t
        },
        nest: function() {
            function t(n, i, o, u) {
                if (i >= a.length) return null != e && n.sort(e),
                null != r ? r(n) : n;
                for (var c, f, s, l = -1,
                h = n.length,
                d = a[i++], p = ke(), g = o(); ++l < h;)(s = p.get(c = d(f = n[l]) + "")) ? s.push(f) : p.set(c, [f]);
                return p.each(function(n, e) {
                    u(g, e, t(n, i, o, u))
                }),
                g
            }
            function n(t, e) {
                if (++e > a.length) return t;
                var i, u = o[e - 1];
                return null != r && e >= a.length ? i = t.entries() : (i = [], t.each(function(t, r) {
                    i.push({
                        key: r,
                        values: n(t, e)
                    })
                })),
                null != u ? i.sort(function(t, n) {
                    return u(t.key, n.key)
                }) : i
            }
            var e, r, i, a = [],
            o = [];
            return i = {
                object: function(n) {
                    return t(n, 0, Ce, Ne)
                },
                map: function(n) {
                    return t(n, 0, Ee, De)
                },
                entries: function(e) {
                    return n(t(e, 0, Ee, De), 0)
                },
                key: function(t) {
                    return a.push(t),
                    i
                },
                sortKeys: function(t) {
                    return o[a.length - 1] = t,
                    i
                },
                sortValues: function(t) {
                    return e = t,
                    i
                },
                rollup: function(t) {
                    return r = t,
                    i
                }
            }
        },
        set: Ue,
        map: ke,
        keys: function(t) {
            var n = [];
            for (var e in t) n.push(e);
            return n
        },
        values: function(t) {
            var n = [];
            for (var e in t) n.push(t[e]);
            return n
        },
        entries: function(t) {
            var n = [];
            for (var e in t) n.push({
                key: e,
                value: t[e]
            });
            return n
        },
        color: Ct,
        rgb: zt,
        hsl: Ft,
        lab: Yt,
        hcl: Vt,
        cubehelix: Gt,
        dispatch: v,
        drag: function() {
            function t(t) {
                t.on("mousedown.drag", n).filter(g).on("touchstart.drag", i).on("touchmove.drag", a).on("touchend.drag touchcancel.drag", o).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }
            function n() {
                if (!l && h.apply(this, arguments)) {
                    var t = u("mouse", d.apply(this, arguments), w_, this, arguments);
                    t && (E_(m_.view).on("mousemove.drag", e, !0).on("mouseup.drag", r, !0), U_(m_.view), mt(), s = !1, c = m_.clientX, f = m_.clientY, t("start"))
                }
            }
            function e() {
                if (z_(), !s) {
                    var t = m_.clientX - c,
                    n = m_.clientY - f;
                    s = t * t + n * n > _
                }
                y.mouse("drag")
            }
            function r() {
                E_(m_.view).on("mousemove.drag mouseup.drag", null),
                _t(m_.view, s),
                z_(),
                y.mouse("end")
            }
            function i() {
                if (h.apply(this, arguments)) {
                    var t, n, e = m_.changedTouches,
                    r = d.apply(this, arguments),
                    i = e.length;
                    for (t = 0; t < i; ++t)(n = u(e[t].identifier, r, D_, this, arguments)) && (mt(), n("start"))
                }
            }
            function a() {
                var t, n, e = m_.changedTouches,
                r = e.length;
                for (t = 0; t < r; ++t)(n = y[e[t].identifier]) && (z_(), n("drag"))
            }
            function o() {
                var t, n, e = m_.changedTouches,
                r = e.length;
                for (l && clearTimeout(l), l = setTimeout(function() {
                    l = null
                },
                500), t = 0; t < r; ++t)(n = y[e[t].identifier]) && (mt(), n("end"))
            }
            function u(n, e, r, i, a) {
                var o, u, c, f = r(e, n),
                s = b.copy();
                if (E(new xt(t, "beforestart", o, n, m, f[0], f[1], 0, 0, s),
                function() {
                    return null != (m_.subject = o = p.apply(i, a)) && (u = o.x - f[0] || 0, c = o.y - f[1] || 0, !0)
                })) return function l(h) {
                    var d, p = f;
                    switch (h) {
                    case "start":
                        y[n] = l,
                        d = m++;
                        break;
                    case "end":
                        delete y[n],
                        --m;
                    case "drag":
                        f = r(e, n),
                        d = m
                    }
                    E(new xt(t, h, o, n, d, f[0] + u, f[1] + c, f[0] - p[0], f[1] - p[1], s), s.apply, s, [h, i, a])
                }
            }
            var c, f, s, l, h = wt,
            d = Mt,
            p = St,
            g = At,
            y = {},
            b = v("start", "drag", "end"),
            m = 0,
            _ = 0;
            return t.filter = function(n) {
                return arguments.length ? (h = "function" == typeof n ? n: P_( !! n), t) : h
            },
            t.container = function(n) {
                return arguments.length ? (d = "function" == typeof n ? n: P_(n), t) : d
            },
            t.subject = function(n) {
                return arguments.length ? (p = "function" == typeof n ? n: P_(n), t) : p
            },
            t.touchable = function(n) {
                return arguments.length ? (g = "function" == typeof n ? n: P_( !! n), t) : g
            },
            t.on = function() {
                var n = b.on.apply(b, arguments);
                return n === b ? t: n
            },
            t.clickDistance = function(n) {
                return arguments.length ? (_ = (n = +n) * n, t) : Math.sqrt(_)
            },
            t
        },
        dragDisable: U_,
        dragEnable: _t,
        dsvFormat: bM,
        csvParse: _M,
        csvParseRows: xM,
        csvFormat: wM,
        csvFormatRows: MM,
        tsvParse: AM,
        tsvParseRows: TM,
        tsvFormat: kM,
        tsvFormatRows: CM,
        easeLinear: function(t) {
            return + t
        },
        easeQuad: re,
        easeQuadIn: function(t) {
            return t * t
        },
        easeQuadOut: function(t) {
            return t * (2 - t)
        },
        easeQuadInOut: re,
        easeCubic: ie,
        easeCubicIn: function(t) {
            return t * t * t
        },
        easeCubicOut: function(t) {
            return--t * t * t + 1
        },
        easeCubicInOut: ie,
        easePoly: bw,
        easePolyIn: vw,
        easePolyOut: yw,
        easePolyInOut: bw,
        easeSin: ae,
        easeSinIn: function(t) {
            return 1 - Math.cos(t * _w)
        },
        easeSinOut: function(t) {
            return Math.sin(t * _w)
        },
        easeSinInOut: ae,
        easeExp: oe,
        easeExpIn: function(t) {
            return Math.pow(2, 10 * t - 10)
        },
        easeExpOut: function(t) {
            return 1 - Math.pow(2, -10 * t)
        },
        easeExpInOut: oe,
        easeCircle: ue,
        easeCircleIn: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        easeCircleOut: function(t) {
            return Math.sqrt(1 - --t * t)
        },
        easeCircleInOut: ue,
        easeBounce: ce,
        easeBounceIn: function(t) {
            return 1 - ce(1 - t)
        },
        easeBounceOut: ce,
        easeBounceInOut: function(t) {
            return ((t *= 2) <= 1 ? 1 - ce(1 - t) : ce(t - 1) + 1) / 2
        },
        easeBack: Uw,
        easeBackIn: Dw,
        easeBackOut: zw,
        easeBackInOut: Uw,
        easeElastic: Fw,
        easeElasticIn: Lw,
        easeElasticOut: Fw,
        easeElasticInOut: Rw,
        forceCenter: function(t, n) {
            function e() {
                var e, i, a = r.length,
                o = 0,
                u = 0;
                for (e = 0; e < a; ++e) o += (i = r[e]).x,
                u += i.y;
                for (o = o / a - t, u = u / a - n, e = 0; e < a; ++e)(i = r[e]).x -= o,
                i.y -= u
            }
            var r;
            return null == t && (t = 0),
            null == n && (n = 0),
            e.initialize = function(t) {
                r = t
            },
            e.x = function(n) {
                return arguments.length ? (t = +n, e) : t
            },
            e.y = function(t) {
                return arguments.length ? (n = +t, e) : n
            },
            e
        },
        forceCollide: function(t) {
            function n() {
                for (var t, n, r, c, f, s, l, h = i.length,
                d = 0; d < u; ++d) for (n = Ye(i, Ie, Xe).visitAfter(e), t = 0; t < h; ++t) r = i[t],
                s = a[r.index],
                l = s * s,
                c = r.x + r.vx,
                f = r.y + r.vy,
                n.visit(function(t, n, e, i, a) {
                    var u = t.data,
                    h = t.r,
                    d = s + h;
                    if (!u) return n > c + d || i < c - d || e > f + d || a < f - d;
                    if (u.index > r.index) {
                        var p = c - u.x - u.vx,
                        g = f - u.y - u.vy,
                        v = p * p + g * g;
                        v < d * d && (0 === p && (p = EM(), v += p * p), 0 === g && (g = EM(), v += g * g), v = (d - (v = Math.sqrt(v))) / v * o, r.vx += (p *= v) * (d = (h *= h) / (l + h)), r.vy += (g *= v) * d, u.vx -= p * (d = 1 - d), u.vy -= g * d)
                    }
                })
            }
            function e(t) {
                if (t.data) return t.r = a[t.data.index];
                for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
            }
            function r() {
                if (i) {
                    var n, e, r = i.length;
                    for (a = new Array(r), n = 0; n < r; ++n) e = i[n],
                    a[e.index] = +t(e, n, i)
                }
            }
            var i, a, o = 1,
            u = 1;
            return "function" != typeof t && (t = NM(null == t ? 1 : +t)),
            n.initialize = function(t) {
                i = t,
                r()
            },
            n.iterations = function(t) {
                return arguments.length ? (u = +t, n) : u
            },
            n.strength = function(t) {
                return arguments.length ? (o = +t, n) : o
            },
            n.radius = function(e) {
                return arguments.length ? (t = "function" == typeof e ? e: NM( + e), r(), n) : t
            },
            n
        },
        forceLink: function(t) {
            function n(n) {
                for (var e = 0,
                r = t.length; e < d; ++e) for (var i, u, c, s, l, h, p, g = 0; g < r; ++g) u = (i = t[g]).source,
                s = (c = i.target).x + c.vx - u.x - u.vx || EM(),
                l = c.y + c.vy - u.y - u.vy || EM(),
                s *= h = ((h = Math.sqrt(s * s + l * l)) - o[g]) / h * n * a[g],
                l *= h,
                c.vx -= s * (p = f[g]),
                c.vy -= l * p,
                u.vx += s * (p = 1 - p),
                u.vy += l * p
            }
            function e() {
                if (u) {
                    var n, e, l = u.length,
                    h = t.length,
                    d = ke(u, s);
                    for (n = 0, c = new Array(l); n < h; ++n)(e = t[n]).index = n,
                    "object" !== km(e.source) && (e.source = We(d, e.source)),
                    "object" !== km(e.target) && (e.target = We(d, e.target)),
                    c[e.source.index] = (c[e.source.index] || 0) + 1,
                    c[e.target.index] = (c[e.target.index] || 0) + 1;
                    for (n = 0, f = new Array(h); n < h; ++n) e = t[n],
                    f[n] = c[e.source.index] / (c[e.source.index] + c[e.target.index]);
                    a = new Array(h),
                    r(),
                    o = new Array(h),
                    i()
                }
            }
            function r() {
                if (u) for (var n = 0,
                e = t.length; n < e; ++n) a[n] = +l(t[n], n, t)
            }
            function i() {
                if (u) for (var n = 0,
                e = t.length; n < e; ++n) o[n] = +h(t[n], n, t)
            }
            var a, o, u, c, f, s = Be,
            l = function(t) {
                return 1 / Math.min(c[t.source.index], c[t.target.index])
            },
            h = NM(30),
            d = 1;
            return null == t && (t = []),
            n.initialize = function(t) {
                u = t,
                e()
            },
            n.links = function(r) {
                return arguments.length ? (t = r, e(), n) : t
            },
            n.id = function(t) {
                return arguments.length ? (s = t, n) : s
            },
            n.iterations = function(t) {
                return arguments.length ? (d = +t, n) : d
            },
            n.strength = function(t) {
                return arguments.length ? (l = "function" == typeof t ? t: NM( + t), r(), n) : l
            },
            n.distance = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t: NM( + t), i(), n) : h
            },
            n
        },
        forceManyBody: function() {
            function t(t) {
                var n, u = i.length,
                c = Ye(i, Ve, $e).visitAfter(e);
                for (o = t, n = 0; n < u; ++n) a = i[n],
                c.visit(r)
            }
            function n() {
                if (i) {
                    var t, n, e = i.length;
                    for (u = new Array(e), t = 0; t < e; ++t) n = i[t],
                    u[n.index] = +c(n, t, i)
                }
            }
            function e(t) {
                var n, e, r, i, a, o = 0,
                c = 0;
                if (t.length) {
                    for (r = i = a = 0; a < 4; ++a)(n = t[a]) && (e = Math.abs(n.value)) && (o += n.value, c += e, r += e * n.x, i += e * n.y);
                    t.x = r / c,
                    t.y = i / c
                } else { (n = t).x = n.data.x,
                    n.y = n.data.y;
                    do {
                        o += u[n.data.index]
                    } while ( n = n . next )
                }
                t.value = o
            }
            function r(t, n, e, r) {
                if (!t.value) return ! 0;
                var i = t.x - a.x,
                c = t.y - a.y,
                h = r - n,
                d = i * i + c * c;
                if (h * h / l < d) return d < s && (0 === i && (i = EM(), d += i * i), 0 === c && (c = EM(), d += c * c), d < f && (d = Math.sqrt(f * d)), a.vx += i * t.value * o / d, a.vy += c * t.value * o / d),
                !0;
                if (! (t.length || d >= s)) { (t.data !== a || t.next) && (0 === i && (i = EM(), d += i * i), 0 === c && (c = EM(), d += c * c), d < f && (d = Math.sqrt(f * d)));
                    do {
                        t.data !== a && (h = u[t.data.index] * o / d, a.vx += i * h, a.vy += c * h)
                    } while ( t = t . next )
                }
            }
            var i, a, o, u, c = NM( - 30),
            f = 1,
            s = 1 / 0,
            l = .81;
            return t.initialize = function(t) {
                i = t,
                n()
            },
            t.strength = function(e) {
                return arguments.length ? (c = "function" == typeof e ? e: NM( + e), n(), t) : c
            },
            t.distanceMin = function(n) {
                return arguments.length ? (f = n * n, t) : Math.sqrt(f)
            },
            t.distanceMax = function(n) {
                return arguments.length ? (s = n * n, t) : Math.sqrt(s)
            },
            t.theta = function(n) {
                return arguments.length ? (l = n * n, t) : Math.sqrt(l)
            },
            t
        },
        forceRadial: function(t, n, e) {
            function r(t) {
                for (var r = 0,
                i = a.length; r < i; ++r) {
                    var c = a[r],
                    f = c.x - n || 1e-6,
                    s = c.y - e || 1e-6,
                    l = Math.sqrt(f * f + s * s),
                    h = (u[r] - l) * o[r] * t / l;
                    c.vx += f * h,
                    c.vy += s * h
                }
            }
            function i() {
                if (a) {
                    var n, e = a.length;
                    for (o = new Array(e), u = new Array(e), n = 0; n < e; ++n) u[n] = +t(a[n], n, a),
                    o[n] = isNaN(u[n]) ? 0 : +c(a[n], n, a)
                }
            }
            var a, o, u, c = NM(.1);
            return "function" != typeof t && (t = NM( + t)),
            null == n && (n = 0),
            null == e && (e = 0),
            r.initialize = function(t) {
                a = t,
                i()
            },
            r.strength = function(t) {
                return arguments.length ? (c = "function" == typeof t ? t: NM( + t), i(), r) : c
            },
            r.radius = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n: NM( + n), i(), r) : t
            },
            r.x = function(t) {
                return arguments.length ? (n = +t, r) : n
            },
            r.y = function(t) {
                return arguments.length ? (e = +t, r) : e
            },
            r
        },
        forceSimulation: function(t) {
            function n() {
                e(),
                d.call("tick", a),
                o < u && (h.stop(), d.call("end", a))
            }
            function e() {
                var n, e, r = t.length;
                for (o += (f - o) * c, l.each(function(t) {
                    t(o)
                }), n = 0; n < r; ++n) null == (e = t[n]).fx ? e.x += e.vx *= s: (e.x = e.fx, e.vx = 0),
                null == e.fy ? e.y += e.vy *= s: (e.y = e.fy, e.vy = 0)
            }
            function r() {
                for (var n, e = 0,
                r = t.length; e < r; ++e) {
                    if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                        var i = PM * Math.sqrt(e),
                        a = e * LM;
                        n.x = i * Math.cos(a),
                        n.y = i * Math.sin(a)
                    } (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                }
            }
            function i(n) {
                return n.initialize && n.initialize(t),
                n
            }
            var a, o = 1,
            u = .001,
            c = 1 - Math.pow(u, 1 / 300),
            f = 0,
            s = .6,
            l = ke(),
            h = bn(n),
            d = v("tick", "end");
            return null == t && (t = []),
            r(),
            a = {
                tick: e,
                restart: function() {
                    return h.restart(n),
                    a
                },
                stop: function() {
                    return h.stop(),
                    a
                },
                nodes: function(n) {
                    return arguments.length ? (t = n, r(), l.each(i), a) : t
                },
                alpha: function(t) {
                    return arguments.length ? (o = +t, a) : o
                },
                alphaMin: function(t) {
                    return arguments.length ? (u = +t, a) : u
                },
                alphaDecay: function(t) {
                    return arguments.length ? (c = +t, a) : +c
                },
                alphaTarget: function(t) {
                    return arguments.length ? (f = +t, a) : f
                },
                velocityDecay: function(t) {
                    return arguments.length ? (s = 1 - t, a) : 1 - s
                },
                force: function(t, n) {
                    return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), a) : l.get(t)
                },
                find: function(n, e, r) {
                    var i, a, o, u, c, f = 0,
                    s = t.length;
                    for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(o = (i = n - (u = t[f]).x) * i + (a = e - u.y) * a) < r && (c = u, r = o);
                    return c
                },
                on: function(t, n) {
                    return arguments.length > 1 ? (d.on(t, n), a) : d.on(t)
                }
            }
        },
        forceX: function(t) {
            function n(t) {
                for (var n, e = 0,
                o = r.length; e < o; ++e)(n = r[e]).vx += (a[e] - n.x) * i[e] * t
            }
            function e() {
                if (r) {
                    var n, e = r.length;
                    for (i = new Array(e), a = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(a[n] = +t(r[n], n, r)) ? 0 : +o(r[n], n, r)
                }
            }
            var r, i, a, o = NM(.1);
            return "function" != typeof t && (t = NM(null == t ? 0 : +t)),
            n.initialize = function(t) {
                r = t,
                e()
            },
            n.strength = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t: NM( + t), e(), n) : o
            },
            n.x = function(r) {
                return arguments.length ? (t = "function" == typeof r ? r: NM( + r), e(), n) : t
            },
            n
        },
        forceY: function(t) {
            function n(t) {
                for (var n, e = 0,
                o = r.length; e < o; ++e)(n = r[e]).vy += (a[e] - n.y) * i[e] * t
            }
            function e() {
                if (r) {
                    var n, e = r.length;
                    for (i = new Array(e), a = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(a[n] = +t(r[n], n, r)) ? 0 : +o(r[n], n, r)
                }
            }
            var r, i, a, o = NM(.1);
            return "function" != typeof t && (t = NM(null == t ? 0 : +t)),
            n.initialize = function(t) {
                r = t,
                e()
            },
            n.strength = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t: NM( + t), e(), n) : o
            },
            n.y = function(r) {
                return arguments.length ? (t = "function" == typeof r ? r: NM( + r), e(), n) : t
            },
            n
        },
        formatDefaultLocale: Je,
        get format() {
            return XM
        },
        get formatPrefix() {
            return BM
        },
        formatLocale: $M,
        formatSpecifier: Ze,
        precisionFixed: ZM,
        precisionPrefix: GM,
        precisionRound: JM,
        geoArea: function(t) {
            return tA.reset(),
            QS(t, nA),
            2 * tA
        },
        geoBounds: function(t) {
            var n, e, r, i, a, o, u;
            if (uS = oS = -(iS = aS = 1 / 0), hS = [], QS(t, rA), e = hS.length) {
                for (hS.sort(Tr), n = 1, a = [r = hS[0]]; n < e; ++n) kr(r, (i = hS[n])[0]) || kr(r, i[1]) ? (Ar(r[0], i[1]) > Ar(r[0], r[1]) && (r[1] = i[1]), Ar(i[0], r[1]) > Ar(r[0], r[1]) && (r[0] = i[0])) : a.push(r = i);
                for (o = -1 / 0, n = 0, r = a[e = a.length - 1]; n <= e; r = i, ++n) i = a[n],
                (u = Ar(r[1], i[0])) > o && (o = u, iS = i[0], oS = r[1])
            }
            return hS = dS = null,
            iS === 1 / 0 || aS === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[iS, aS], [oS, uS]]
        },
        geoCentroid: function(t) {
            pS = gS = vS = yS = bS = mS = _S = xS = wS = MS = SS = 0,
            QS(t, iA);
            var n = wS,
            e = MS,
            r = SS,
            i = n * n + e * e + r * r;
            return i < 1e-12 && (n = mS, e = _S, r = xS, gS < DS && (n = vS, e = yS, r = bS), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [YS(e, n) * FS, nr(r / $S(i)) * FS]
        },
        geoCircle: function() {
            function t() {
                var t = r.apply(this, arguments),
                u = i.apply(this, arguments) * RS,
                c = a.apply(this, arguments) * RS;
                return n = [],
                e = Or( - t[0] * RS, -t[1] * RS, 0).invert,
                Ir(o, u, c, 1),
                t = {
                    type: "Polygon",
                    coordinates: [n]
                },
                n = e = null,
                t
            }
            var n, e, r = aA([0, 0]),
            i = aA(90),
            a = aA(6),
            o = {
                point: function(t, r) {
                    n.push(t = e(t, r)),
                    t[0] *= FS,
                    t[1] *= FS
                }
            };
            return t.center = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n: aA([ + n[0], +n[1]]), t) : r
            },
            t.radius = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n: aA( + n), t) : i
            },
            t.precision = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n: aA( + n), t) : a
            },
            t
        },
        geoClipAntimeridian: AA,
        geoClipCircle: TA,
        geoClipExtent: function() {
            var t, n, e, r = 0,
            i = 0,
            a = 960,
            o = 500;
            return e = {
                stream: function(e) {
                    return t && n === e ? t: t = Gr(r, i, a, o)(n = e)
                },
                extent: function(u) {
                    return arguments.length ? (r = +u[0][0], i = +u[0][1], a = +u[1][0], o = +u[1][1], t = n = null, e) : [[r, i], [a, o]]
                }
            }
        },
        geoClipRectangle: Gr,
        geoContains: function(t, n) {
            return (t && FA.hasOwnProperty(t.type) ? FA[t.type] : ti)(t, n)
        },
        geoDistance: LA,
        geoGraticule: ci,
        geoGraticule10: function() {
            return ci()()
        },
        geoInterpolate: function(t, n) {
            var e = t[0] * RS,
            r = t[1] * RS,
            i = n[0] * RS,
            a = n[1] * RS,
            o = jS(r),
            u = WS(r),
            c = jS(a),
            f = WS(a),
            s = o * jS(e),
            l = o * WS(e),
            h = c * jS(i),
            d = c * WS(i),
            p = 2 * nr($S(er(a - r) + o * c * er(i - e))),
            g = WS(p),
            v = p ?
            function(t) {
                var n = WS(t *= p) / g,
                e = WS(p - t) / g,
                r = e * s + n * h,
                i = e * l + n * d,
                a = e * u + n * f;
                return [YS(i, r) * FS, YS(a, $S(r * r + i * i)) * FS]
            }: function() {
                return [e * FS, r * FS]
            };
            return v.distance = p,
            v
        },
        geoLength: zA,
        geoPath: function(t, n) {
            function e(t) {
                return t && ("function" == typeof a && i.pointRadius( + a.apply(this, arguments)), QS(t, r(i))),
                i.result()
            }
            var r, i, a = 4.5;
            return e.area = function(t) {
                return QS(t, r(jA)),
                jA.result()
            },
            e.measure = function(t) {
                return QS(t, r(fT)),
                fT.result()
            },
            e.bounds = function(t) {
                return QS(t, r(WA)),
                WA.result()
            },
            e.centroid = function(t) {
                return QS(t, r(eT)),
                eT.result()
            },
            e.projection = function(n) {
                return arguments.length ? (r = null == n ? (t = null, HA) : (t = n).stream, e) : t
            },
            e.context = function(t) {
                return arguments.length ? (i = null == t ? (n = null, new Ai) : new wi(n = t), "function" != typeof a && i.pointRadius(a), e) : n
            },
            e.pointRadius = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t: (i.pointRadius( + t), +t), e) : a
            },
            e.projection(t).context(n)
        },
        geoAlbers: gT,
        geoAlbersUsa: function() {
            function t(t) {
                var n = t[0],
                e = t[1];
                return u = null,
                i.point(n, e),
                u || (a.point(n, e), u) || (o.point(n, e), u)
            }
            function n() {
                return e = r = null,
                t
            }
            var e, r, i, a, o, u, c = gT(),
            f = pT().rotate([154, 0]).center([ - 2, 58.5]).parallels([55, 65]),
            s = pT().rotate([157, 0]).center([ - 3, 19.9]).parallels([8, 18]),
            l = {
                point: function(t, n) {
                    u = [t, n]
                }
            };
            return t.invert = function(t) {
                var n = c.scale(),
                e = c.translate(),
                r = (t[0] - e[0]) / n,
                i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? f: i >= .166 && i < .234 && r >= -.214 && r < -.115 ? s: c).invert(t)
            },
            t.stream = function(t) {
                return e && r === t ? e: e = Oi([c.stream(r = t), f.stream(t), s.stream(t)])
            },
            t.precision = function(t) {
                return arguments.length ? (c.precision(t), f.precision(t), s.precision(t), n()) : c.precision()
            },
            t.scale = function(n) {
                return arguments.length ? (c.scale(n), f.scale(.35 * n), s.scale(n), t.translate(c.translate())) : c.scale()
            },
            t.translate = function(t) {
                if (!arguments.length) return c.translate();
                var e = c.scale(),
                r = +t[0],
                u = +t[1];
                return i = c.translate(t).clipExtent([[r - .455 * e, u - .238 * e], [r + .455 * e, u + .238 * e]]).stream(l),
                a = f.translate([r - .307 * e, u + .201 * e]).clipExtent([[r - .425 * e + DS, u + .12 * e + DS], [r - .214 * e - DS, u + .234 * e - DS]]).stream(l),
                o = s.translate([r - .205 * e, u + .212 * e]).clipExtent([[r - .214 * e + DS, u + .166 * e + DS], [r - .115 * e - DS, u + .234 * e - DS]]).stream(l),
                n()
            },
            t.fitExtent = function(n, e) {
                return Ni(t, n, e)
            },
            t.fitSize = function(n, e) {
                return Ei(t, n, e)
            },
            t.scale(1070)
        },
        geoAzimuthalEqualArea: function() {
            return Pi(vT).scale(124.75).clipAngle(179.999)
        },
        geoAzimuthalEqualAreaRaw: vT,
        geoAzimuthalEquidistant: function() {
            return Pi(yT).scale(79.4188).clipAngle(179.999)
        },
        geoAzimuthalEquidistantRaw: yT,
        geoConicConformal: function() {
            return Fi(Bi).scale(109.5).parallels([30, 30])
        },
        geoConicConformalRaw: Bi,
        geoConicEqualArea: pT,
        geoConicEqualAreaRaw: Hi,
        geoConicEquidistant: function() {
            return Fi(Vi).scale(131.154).center([0, 13.9389])
        },
        geoConicEquidistantRaw: Vi,
        geoEquirectangular: function() {
            return Pi(Wi).scale(152.63)
        },
        geoEquirectangularRaw: Wi,
        geoGnomonic: function() {
            return Pi($i).scale(144.049).clipAngle(60)
        },
        geoGnomonicRaw: $i,
        geoIdentity: function() {
            function t() {
                return i = a = null,
                o
            }
            var n, e, r, i, a, o, u = 1,
            c = 0,
            f = 0,
            s = 1,
            l = 1,
            h = HA,
            d = null,
            p = HA;
            return o = {
                stream: function(t) {
                    return i && a === t ? i: i = h(p(a = t))
                },
                postclip: function(i) {
                    return arguments.length ? (p = i, d = n = e = r = null, t()) : p
                },
                clipExtent: function(i) {
                    return arguments.length ? (p = null == i ? (d = n = e = r = null, HA) : Gr(d = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == d ? null: [[d, n], [e, r]]
                },
                scale: function(n) {
                    return arguments.length ? (h = Zi((u = +n) * s, u * l, c, f), t()) : u
                },
                translate: function(n) {
                    return arguments.length ? (h = Zi(u * s, u * l, c = +n[0], f = +n[1]), t()) : [c, f]
                },
                reflectX: function(n) {
                    return arguments.length ? (h = Zi(u * (s = n ? -1 : 1), u * l, c, f), t()) : s < 0
                },
                reflectY: function(n) {
                    return arguments.length ? (h = Zi(u * s, u * (l = n ? -1 : 1), c, f), t()) : l < 0
                },
                fitExtent: function(t, n) {
                    return Ni(o, t, n)
                },
                fitSize: function(t, n) {
                    return Ei(o, t, n)
                }
            }
        },
        geoProjection: Pi,
        geoProjectionMutator: Li,
        geoMercator: function() {
            return Ii(qi).scale(961 / LS)
        },
        geoMercatorRaw: qi,
        geoNaturalEarth1: function() {
            return Pi(Gi).scale(175.295)
        },
        geoNaturalEarth1Raw: Gi,
        geoOrthographic: function() {
            return Pi(Ji).scale(249.5).clipAngle(90 + DS)
        },
        geoOrthographicRaw: Ji,
        geoStereographic: function() {
            return Pi(Qi).scale(250).clipAngle(142)
        },
        geoStereographicRaw: Qi,
        geoTransverseMercator: function() {
            var t = Ii(Ki),
            n = t.center,
            e = t.rotate;
            return t.center = function(t) {
                return arguments.length ? n([ - t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            },
            t.rotate = function(t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            },
            e([0, 0, 90]).scale(159.155)
        },
        geoTransverseMercatorRaw: Ki,
        geoRotation: bA,
        geoStream: QS,
        geoTransform: function(t) {
            return {
                stream: ki(t)
            }
        },
        cluster: function() {
            function t(t) {
                var a, o = 0;
                t.eachAfter(function(t) {
                    var e = t.children;
                    e ? (t.x = na(e), t.y = ra(e)) : (t.x = a ? o += n(t, a) : 0, t.y = 0, a = t)
                });
                var u = aa(t),
                c = oa(t),
                f = u.x - n(u, c) / 2,
                s = c.x + n(c, u) / 2;
                return t.eachAfter(i ?
                function(n) {
                    n.x = (n.x - t.x) * e,
                    n.y = (t.y - n.y) * r
                }: function(n) {
                    n.x = (n.x - f) / (s - f) * e,
                    n.y = (1 - (t.y ? n.y / t.y: 1)) * r
                })
            }
            var n = ta,
            e = 1,
            r = 1,
            i = !1;
            return t.separation = function(e) {
                return arguments.length ? (n = e, t) : n
            },
            t.size = function(n) {
                return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null: [e, r]
            },
            t.nodeSize = function(n) {
                return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null
            },
            t
        },
        hierarchy: fa,
        pack: function() {
            function t(t) {
                return t.x = e / 2,
                t.y = r / 2,
                n ? t.eachBefore(za(n)).eachAfter(Ua(i, .5)).eachBefore(Pa(1)) : t.eachBefore(za(Da)).eachAfter(Ua(Ea, 1)).eachAfter(Ua(i, t.r / Math.min(e, r))).eachBefore(Pa(Math.min(e, r) / (2 * t.r))),
                t
            }
            var n = null,
            e = 1,
            r = 1,
            i = Ea;
            return t.radius = function(e) {
                return arguments.length ? (n = Ca(e), t) : n
            },
            t.size = function(n) {
                return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
            },
            t.padding = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n: _T( + n), t) : i
            },
            t
        },
        packSiblings: function(t) {
            return ka(t),
            t
        },
        packEnclose: mT,
        partition: function() {
            function t(t) {
                var o = t.height + 1;
                return t.x0 = t.y0 = i,
                t.x1 = e,
                t.y1 = r / o,
                t.eachBefore(n(r, o)),
                a && t.eachBefore(xT),
                t
            }
            function n(t, n) {
                return function(e) {
                    e.children && wT(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                    var r = e.x0,
                    a = e.y0,
                    o = e.x1 - i,
                    u = e.y1 - i;
                    o < r && (r = o = (r + o) / 2),
                    u < a && (a = u = (a + u) / 2),
                    e.x0 = r,
                    e.y0 = a,
                    e.x1 = o,
                    e.y1 = u
                }
            }
            var e = 1,
            r = 1,
            i = 0,
            a = !1;
            return t.round = function(n) {
                return arguments.length ? (a = !!n, t) : a
            },
            t.size = function(n) {
                return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
            },
            t.padding = function(n) {
                return arguments.length ? (i = +n, t) : i
            },
            t
        },
        stratify: function() {
            function t(t) {
                var r, i, a, o, u, c, f, s = t.length,
                l = new Array(s),
                h = {};
                for (i = 0; i < s; ++i) r = t[i],
                u = l[i] = new da(r),
                null != (c = n(r, i, t)) && (c += "") && (h[f = MT + (u.id = c)] = f in h ? AT: u);
                for (i = 0; i < s; ++i) if (u = l[i], null != (c = e(t[i], i, t)) && (c += "")) {
                    if (! (o = h[MT + c])) throw new Error("missing: " + c);
                    if (o === AT) throw new Error("ambiguous: " + c);
                    o.children ? o.children.push(u) : o.children = [u],
                    u.parent = o
                } else {
                    if (a) throw new Error("multiple roots");
                    a = u
                }
                if (!a) throw new Error("no root");
                if (a.parent = ST, a.eachBefore(function(t) {
                    t.depth = t.parent.depth + 1,
                    --s
                }).eachBefore(ha), a.parent = null, s > 0) throw new Error("cycle");
                return a
            }
            var n = La,
            e = Fa;
            return t.id = function(e) {
                return arguments.length ? (n = Na(e), t) : n
            },
            t.parentId = function(n) {
                return arguments.length ? (e = Na(n), t) : e
            },
            t
        },
        tree: function() {
            function t(t) {
                var r = Xa(t);
                if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), c) t.eachBefore(i);
                else {
                    var f = t,
                    s = t,
                    l = t;
                    t.eachBefore(function(t) {
                        t.x < f.x && (f = t),
                        t.x > s.x && (s = t),
                        t.depth > l.depth && (l = t)
                    });
                    var h = f === s ? 1 : a(f, s) / 2,
                    d = h - f.x,
                    p = o / (s.x + h + d),
                    g = u / (l.depth || 1);
                    t.eachBefore(function(t) {
                        t.x = (t.x + d) * p,
                        t.y = t.depth * g
                    })
                }
                return t
            }
            function n(t) {
                var n = t.children,
                e = t.parent.children,
                i = t.i ? e[t.i - 1] : null;
                if (n) {
                    ja(t);
                    var o = (n[0].z + n[n.length - 1].z) / 2;
                    i ? (t.z = i.z + a(t._, i._), t.m = t.z - o) : t.z = o
                } else i && (t.z = i.z + a(t._, i._));
                t.parent.A = r(t, i, t.parent.A || e[0])
            }
            function e(t) {
                t._.x = t.z + t.parent.m,
                t.m += t.parent.m
            }
            function r(t, n, e) {
                if (n) {
                    for (var r, i = t,
                    o = t,
                    u = n,
                    c = i.parent.children[0], f = i.m, s = o.m, l = u.m, h = c.m; u = Oa(u), i = Ha(i), u && i;) c = Ha(c),
                    (o = Oa(o)).a = t,
                    (r = u.z + l - i.z - f + a(u._, i._)) > 0 && (Ya(qa(u, t, e), t, r), f += r, s += r),
                    l += u.m,
                    f += i.m,
                    h += c.m,
                    s += o.m;
                    u && !Oa(o) && (o.t = u, o.m += l - s),
                    i && !Ha(c) && (c.t = i, c.m += f - h, e = t)
                }
                return e
            }
            function i(t) {
                t.x *= o,
                t.y = t.depth * u
            }
            var a = Ra,
            o = 1,
            u = 1,
            c = null;
            return t.separation = function(n) {
                return arguments.length ? (a = n, t) : a
            },
            t.size = function(n) {
                return arguments.length ? (c = !1, o = +n[0], u = +n[1], t) : c ? null: [o, u]
            },
            t.nodeSize = function(n) {
                return arguments.length ? (c = !0, o = +n[0], u = +n[1], t) : c ? [o, u] : null
            },
            t
        },
        treemap: function() {
            function t(t) {
                return t.x0 = t.y0 = 0,
                t.x1 = i,
                t.y1 = a,
                t.eachBefore(n),
                o = [0],
                r && t.eachBefore(xT),
                t
            }
            function n(t) {
                var n = o[t.depth],
                r = t.x0 + n,
                i = t.y0 + n,
                a = t.x1 - n,
                h = t.y1 - n;
                a < r && (r = a = (r + a) / 2),
                h < i && (i = h = (i + h) / 2),
                t.x0 = r,
                t.y0 = i,
                t.x1 = a,
                t.y1 = h,
                t.children && (n = o[t.depth + 1] = u(t) / 2, r += l(t) - n, i += c(t) - n, a -= f(t) - n, h -= s(t) - n, a < r && (r = a = (r + a) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, a, h))
            }
            var e = CT,
            r = !1,
            i = 1,
            a = 1,
            o = [0],
            u = Ea,
            c = Ea,
            f = Ea,
            s = Ea,
            l = Ea;
            return t.round = function(n) {
                return arguments.length ? (r = !!n, t) : r
            },
            t.size = function(n) {
                return arguments.length ? (i = +n[0], a = +n[1], t) : [i, a]
            },
            t.tile = function(n) {
                return arguments.length ? (e = Na(n), t) : e
            },
            t.padding = function(n) {
                return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
            },
            t.paddingInner = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n: _T( + n), t) : u
            },
            t.paddingOuter = function(n) {
                return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
            },
            t.paddingTop = function(n) {
                return arguments.length ? (c = "function" == typeof n ? n: _T( + n), t) : c
            },
            t.paddingRight = function(n) {
                return arguments.length ? (f = "function" == typeof n ? n: _T( + n), t) : f
            },
            t.paddingBottom = function(n) {
                return arguments.length ? (s = "function" == typeof n ? n: _T( + n), t) : s
            },
            t.paddingLeft = function(n) {
                return arguments.length ? (l = "function" == typeof n ? n: _T( + n), t) : l
            },
            t
        },
        treemapBinary: function(t, n, e, r, i) {
            function a(t, n, e, r, i, o, u) {
                if (t >= n - 1) {
                    var f = c[t];
                    return f.x0 = r,
                    f.y0 = i,
                    f.x1 = o,
                    void(f.y1 = u)
                }
                for (var l = s[t], h = e / 2 + l, d = t + 1, p = n - 1; d < p;) {
                    var g = d + p >>> 1;
                    s[g] < h ? d = g + 1 : p = g
                }
                h - s[d - 1] < s[d] - h && t + 1 < d && --d;
                var v = s[d] - l,
                y = e - v;
                if (o - r > u - i) {
                    var b = (r * y + o * v) / e;
                    a(t, d, v, r, i, b, u),
                    a(d, n, y, b, i, o, u)
                } else {
                    var m = (i * y + u * v) / e;
                    a(t, d, v, r, i, o, m),
                    a(d, n, y, r, m, o, u)
                }
            }
            var o, u, c = t.children,
            f = c.length,
            s = new Array(f + 1);
            for (s[0] = u = o = 0; o < f; ++o) s[o + 1] = u += c[o].value;
            a(0, f, t.value, n, e, r, i)
        },
        treemapDice: wT,
        treemapSlice: TT,
        treemapSliceDice: function(t, n, e, r, i) { (1 & t.depth ? TT: wT)(t, n, e, r, i)
        },
        treemapSquarify: CT,
        treemapResquarify: NT,
        interpolate: Ex,
        interpolateArray: Mx,
        interpolateBasis: yx,
        interpolateBasisClosed: bx,
        interpolateDate: Sx,
        interpolateNumber: Ax,
        interpolateObject: Tx,
        interpolateRound: Dx,
        interpolateString: Nx,
        interpolateTransformCss: Lx,
        interpolateTransformSvg: Fx,
        interpolateZoom: Hx,
        interpolateRgb: _x,
        interpolateRgbBasis: xx,
        interpolateRgbBasisClosed: wx,
        interpolateHsl: Ox,
        interpolateHslLong: Yx,
        interpolateLab: function(t, n) {
            var e = rn((t = Yt(t)).l, (n = Yt(n)).l),
            r = rn(t.a, n.a),
            i = rn(t.b, n.b),
            a = rn(t.opacity, n.opacity);
            return function(n) {
                return t.l = e(n),
                t.a = r(n),
                t.b = i(n),
                t.opacity = a(n),
                t + ""
            }
        },
        interpolateHcl: jx,
        interpolateHclLong: qx,
        interpolateCubehelix: Ix,
        interpolateCubehelixLong: Xx,
        quantize: function(t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
            return e
        },
        path: _e,
        polygonArea: function(t) {
            for (var n, e = -1,
            r = t.length,
            i = t[r - 1], a = 0; ++e < r;) n = i,
            i = t[e],
            a += n[1] * i[0] - n[0] * i[1];
            return a / 2
        },
        polygonCentroid: function(t) {
            for (var n, e, r = -1,
            i = t.length,
            a = 0,
            o = 0,
            u = t[i - 1], c = 0; ++r < i;) n = u,
            u = t[r],
            c += e = n[0] * u[1] - u[0] * n[1],
            a += (n[0] + u[0]) * e,
            o += (n[1] + u[1]) * e;
            return c *= 3,
            [a / c, o / c]
        },
        polygonHull: function(t) {
            if ((e = t.length) < 3) return null;
            var n, e, r = new Array(e),
            i = new Array(e);
            for (n = 0; n < e; ++n) r[n] = [ + t[n][0], +t[n][1], n];
            for (r.sort(Wa), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
            var a = Va(r),
            o = Va(i),
            u = o[0] === a[0],
            c = o[o.length - 1] === a[a.length - 1],
            f = [];
            for (n = a.length - 1; n >= 0; --n) f.push(t[r[a[n]][2]]);
            for (n = +u; n < o.length - c; ++n) f.push(t[r[o[n]][2]]);
            return f
        },
        polygonContains: function(t, n) {
            for (var e, r, i = t.length,
            a = t[i - 1], o = n[0], u = n[1], c = a[0], f = a[1], s = !1, l = 0; l < i; ++l) e = (a = t[l])[0],
            (r = a[1]) > u != f > u && o < (c - e) * (u - r) / (f - r) + e && (s = !s),
            c = e,
            f = r;
            return s
        },
        polygonLength: function(t) {
            for (var n, e, r = -1,
            i = t.length,
            a = t[i - 1], o = a[0], u = a[1], c = 0; ++r < i;) n = o,
            e = u,
            n -= o = (a = t[r])[0],
            e -= u = a[1],
            c += Math.sqrt(n * n + e * e);
            return c
        },
        quadtree: Ye,
        queue: to,
        randomUniform: PT,
        randomNormal: LT,
        randomLogNormal: FT,
        randomBates: HT,
        randomIrwinHall: RT,
        randomExponential: OT,
        request: YT,
        html: qT,
        json: IT,
        text: XT,
        xml: BT,
        csv: VT,
        tsv: $T,
        scaleBand: ao,
        scalePoint: uo,
        scaleIdentity: bo,
        scaleLinear: yo,
        scaleLog: Ao,
        scaleOrdinal: io,
        scaleImplicit: QT,
        scalePow: ko,
        scaleSqrt: function() {
            return ko().exponent(.5)
        },
        scaleQuantile: Co,
        scaleQuantize: No,
        scaleThreshold: Eo,
        scaleTime: xC,
        scaleUtc: wC,
        schemeCategory10: SC,
        schemeCategory20b: AC,
        schemeCategory20c: TC,
        schemeCategory20: kC,
        interpolateCubehelixDefault: CC,
        interpolateRainbow: function(t) { (t < 0 || t > 1) && (t -= Math.floor(t));
            var n = Math.abs(t - .5);
            return DC.h = 360 * t - 100,
            DC.s = 1.5 - 1.5 * n,
            DC.l = .8 - .9 * n,
            DC + ""
        },
        interpolateWarm: NC,
        interpolateCool: EC,
        interpolateViridis: zC,
        interpolateMagma: UC,
        interpolateInferno: PC,
        interpolatePlasma: LC,
        scaleSequential: $u,
        creator: h_,
        local: M,
        matcher: y_,
        mouse: w_,
        namespace: l_,
        namespaces: s_,
        select: E_,
        selectAll: function(t) {
            return "string" == typeof t ? new yt([document.querySelectorAll(t)], [document.documentElement]) : new yt([null == t ? [] : t], N_)
        },
        selection: bt,
        selector: M_,
        selectorAll: S_,
        style: W,
        touch: D_,
        touches: function(t, n) {
            null == n && (n = __().touches);
            for (var e = 0,
            r = n ? n.length: 0, i = new Array(r); e < r; ++e) i[e] = x_(t, n[e]);
            return i
        },
        window: C_,
        get event() {
            return m_
        },
        customEvent: E,
        arc: function() {
            function t() {
                var t, f, s = +n.apply(this, arguments),
                l = +e.apply(this, arguments),
                h = a.apply(this, arguments) - WC,
                d = o.apply(this, arguments) - WC,
                p = RC(d - h),
                g = d > h;
                if (c || (c = t = _e()), l < s && (f = l, l = s, s = f), l > XC) if (p > VC - XC) c.moveTo(l * OC(h), l * qC(h)),
                c.arc(0, 0, l, h, d, !g),
                s > XC && (c.moveTo(s * OC(d), s * qC(d)), c.arc(0, 0, s, d, h, g));
                else {
                    var v, y, b = h,
                    m = d,
                    _ = h,
                    x = d,
                    w = p,
                    M = p,
                    S = u.apply(this, arguments) / 2,
                    A = S > XC && (i ? +i.apply(this, arguments) : IC(s * s + l * l)),
                    T = jC(RC(l - s) / 2, +r.apply(this, arguments)),
                    k = T,
                    C = T;
                    if (A > XC) {
                        var N = Gu(A / s * qC(S)),
                        E = Gu(A / l * qC(S)); (w -= 2 * N) > XC ? (N *= g ? 1 : -1, _ += N, x -= N) : (w = 0, _ = x = (h + d) / 2),
                        (M -= 2 * E) > XC ? (E *= g ? 1 : -1, b += E, m -= E) : (M = 0, b = m = (h + d) / 2)
                    }
                    var D = l * OC(b),
                    z = l * qC(b),
                    U = s * OC(x),
                    P = s * qC(x);
                    if (T > XC) {
                        var L = l * OC(m),
                        F = l * qC(m),
                        R = s * OC(_),
                        H = s * qC(_);
                        if (p < BC) {
                            var O = w > XC ? ec(D, z, R, H, L, F, U, P) : [U, P],
                            Y = D - O[0],
                            j = z - O[1],
                            q = L - O[0],
                            I = F - O[1],
                            X = 1 / qC(Zu((Y * q + j * I) / (IC(Y * Y + j * j) * IC(q * q + I * I))) / 2),
                            B = IC(O[0] * O[0] + O[1] * O[1]);
                            k = jC(T, (s - B) / (X - 1)),
                            C = jC(T, (l - B) / (X + 1))
                        }
                    }
                    M > XC ? C > XC ? (v = rc(R, H, D, z, l, C, g), y = rc(L, F, U, P, l, C, g), c.moveTo(v.cx + v.x01, v.cy + v.y01), C < T ? c.arc(v.cx, v.cy, C, HC(v.y01, v.x01), HC(y.y01, y.x01), !g) : (c.arc(v.cx, v.cy, C, HC(v.y01, v.x01), HC(v.y11, v.x11), !g), c.arc(0, 0, l, HC(v.cy + v.y11, v.cx + v.x11), HC(y.cy + y.y11, y.cx + y.x11), !g), c.arc(y.cx, y.cy, C, HC(y.y11, y.x11), HC(y.y01, y.x01), !g))) : (c.moveTo(D, z), c.arc(0, 0, l, b, m, !g)) : c.moveTo(D, z),
                    s > XC && w > XC ? k > XC ? (v = rc(U, P, L, F, s, -k, g), y = rc(D, z, R, H, s, -k, g), c.lineTo(v.cx + v.x01, v.cy + v.y01), k < T ? c.arc(v.cx, v.cy, k, HC(v.y01, v.x01), HC(y.y01, y.x01), !g) : (c.arc(v.cx, v.cy, k, HC(v.y01, v.x01), HC(v.y11, v.x11), !g), c.arc(0, 0, s, HC(v.cy + v.y11, v.cx + v.x11), HC(y.cy + y.y11, y.cx + y.x11), g), c.arc(y.cx, y.cy, k, HC(y.y11, y.x11), HC(y.y01, y.x01), !g))) : c.arc(0, 0, s, x, _, g) : c.lineTo(U, P)
                } else c.moveTo(0, 0);
                if (c.closePath(), t) return c = null,
                t + "" || null
            }
            var n = Ju,
            e = Qu,
            r = FC(0),
            i = null,
            a = Ku,
            o = tc,
            u = nc,
            c = null;
            return t.centroid = function() {
                var t = ( + n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                r = ( + a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - BC / 2;
                return [OC(r) * t, qC(r) * t]
            },
            t.innerRadius = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e: FC( + e), t) : n
            },
            t.outerRadius = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n: FC( + n), t) : e
            },
            t.cornerRadius = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n: FC( + n), t) : r
            },
            t.padRadius = function(n) {
                return arguments.length ? (i = null == n ? null: "function" == typeof n ? n: FC( + n), t) : i
            },
            t.startAngle = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n: FC( + n), t) : a
            },
            t.endAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n: FC( + n), t) : o
            },
            t.padAngle = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n: FC( + n), t) : u
            },
            t.context = function(n) {
                return arguments.length ? (c = null == n ? null: n, t) : c
            },
            t
        },
        area: GC,
        line: ZC,
        pie: function() {
            function t(t) {
                var u, c, f, s, l, h = t.length,
                d = 0,
                p = new Array(h),
                g = new Array(h),
                v = +i.apply(this, arguments),
                y = Math.min(VC, Math.max( - VC, a.apply(this, arguments) - v)),
                b = Math.min(Math.abs(y) / h, o.apply(this, arguments)),
                m = b * (y < 0 ? -1 : 1);
                for (u = 0; u < h; ++u)(l = g[p[u] = u] = +n(t[u], u, t)) > 0 && (d += l);
                for (null != e ? p.sort(function(t, n) {
                    return e(g[t], g[n])
                }) : null != r && p.sort(function(n, e) {
                    return r(t[n], t[e])
                }), u = 0, f = d ? (y - h * m) / d: 0; u < h; ++u, v = s) c = p[u],
                s = v + ((l = g[c]) > 0 ? l * f: 0) + m,
                g[c] = {
                    data: t[c],
                    index: u,
                    value: l,
                    startAngle: v,
                    endAngle: s,
                    padAngle: b
                };
                return g
            }
            var n = QC,
            e = JC,
            r = null,
            i = FC(0),
            a = FC(VC),
            o = FC(0);
            return t.value = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e: FC( + e), t) : n
            },
            t.sortValues = function(n) {
                return arguments.length ? (e = n, r = null, t) : e
            },
            t.sort = function(n) {
                return arguments.length ? (r = n, e = null, t) : r
            },
            t.startAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n: FC( + n), t) : i
            },
            t.endAngle = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n: FC( + n), t) : a
            },
            t.padAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n: FC( + n), t) : o
            },
            t
        },
        areaRadial: nN,
        radialArea: nN,
        lineRadial: tN,
        radialLine: tN,
        pointRadial: eN,
        linkHorizontal: function() {
            return hc(dc)
        },
        linkVertical: function() {
            return hc(pc)
        },
        linkRadial: function() {
            var t = hc(gc);
            return t.angle = t.x,
            delete t.x,
            t.radius = t.y,
            delete t.y,
            t
        },
        symbol: function() {
            function t() {
                var t;
                if (r || (r = t = _e()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null,
                t + "" || null
            }
            var n = FC(iN),
            e = FC(64),
            r = null;
            return t.type = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e: FC(e), t) : n
            },
            t.size = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n: FC( + n), t) : e
            },
            t.context = function(n) {
                return arguments.length ? (r = null == n ? null: n, t) : r
            },
            t
        },
        symbols: xN,
        symbolCircle: iN,
        symbolCross: aN,
        symbolDiamond: cN,
        symbolSquare: dN,
        symbolStar: hN,
        symbolTriangle: gN,
        symbolWye: _N,
        curveBasisClosed: function(t) {
            return new bc(t)
        },
        curveBasisOpen: function(t) {
            return new mc(t)
        },
        curveBasis: function(t) {
            return new yc(t)
        },
        curveBundle: MN,
        curveCardinalClosed: AN,
        curveCardinalOpen: TN,
        curveCardinal: SN,
        curveCatmullRomClosed: CN,
        curveCatmullRomOpen: NN,
        curveCatmullRom: kN,
        curveLinearClosed: function(t) {
            return new Nc(t)
        },
        curveLinear: $C,
        curveMonotoneX: function(t) {
            return new Pc(t)
        },
        curveMonotoneY: function(t) {
            return new Lc(t)
        },
        curveNatural: function(t) {
            return new Rc(t)
        },
        curveStep: function(t) {
            return new Oc(t, .5)
        },
        curveStepAfter: function(t) {
            return new Oc(t, 1)
        },
        curveStepBefore: function(t) {
            return new Oc(t, 0)
        },
        stack: function() {
            function t(t) {
                var a, o, u = n.apply(this, arguments),
                c = t.length,
                f = u.length,
                s = new Array(f);
                for (a = 0; a < f; ++a) {
                    for (var l, h = u[a], d = s[a] = new Array(c), p = 0; p < c; ++p) d[p] = l = [0, +i(t[p], h, p, t)],
                    l.data = t[p];
                    d.key = h
                }
                for (a = 0, o = e(s); a < f; ++a) s[o[a]].index = a;
                return r(s, o),
                s
            }
            var n = FC([]),
            e = FN,
            r = LN,
            i = Yc;
            return t.keys = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e: FC(rN.call(e)), t) : n
            },
            t.value = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n: FC( + n), t) : i
            },
            t.order = function(n) {
                return arguments.length ? (e = null == n ? FN: "function" == typeof n ? n: FC(rN.call(n)), t) : e
            },
            t.offset = function(n) {
                return arguments.length ? (r = null == n ? LN: n, t) : r
            },
            t
        },
        stackOffsetExpand: function(t, n) {
            if ((r = t.length) > 0) {
                for (var e, r, i, a = 0,
                o = t[0].length; a < o; ++a) {
                    for (i = e = 0; e < r; ++e) i += t[e][a][1] || 0;
                    if (i) for (e = 0; e < r; ++e) t[e][a][1] /= i
                }
                LN(t, n)
            }
        },
        stackOffsetDiverging: function(t, n) {
            if ((u = t.length) > 1) for (var e, r, i, a, o, u, c = 0,
            f = t[n[0]].length; c < f; ++c) for (a = o = 0, e = 0; e < u; ++e)(i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = a, r[1] = a += i) : i < 0 ? (r[1] = o, r[0] = o += i) : r[0] = a
        },
        stackOffsetNone: LN,
        stackOffsetSilhouette: function(t, n) {
            if ((e = t.length) > 0) {
                for (var e, r = 0,
                i = t[n[0]], a = i.length; r < a; ++r) {
                    for (var o = 0,
                    u = 0; o < e; ++o) u += t[o][r][1] || 0;
                    i[r][1] += i[r][0] = -u / 2
                }
                LN(t, n)
            }
        },
        stackOffsetWiggle: function(t, n) {
            if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                for (var e, r, i, a = 0,
                o = 1; o < r; ++o) {
                    for (var u = 0,
                    c = 0,
                    f = 0; u < i; ++u) {
                        for (var s = t[n[u]], l = s[o][1] || 0, h = (l - (s[o - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
                            var p = t[n[d]];
                            h += (p[o][1] || 0) - (p[o - 1][1] || 0)
                        }
                        c += l,
                        f += h * l
                    }
                    e[o - 1][1] += e[o - 1][0] = a,
                    c && (a -= f / c)
                }
                e[o - 1][1] += e[o - 1][0] = a,
                LN(t, n)
            }
        },
        stackOrderAscending: RN,
        stackOrderDescending: function(t) {
            return RN(t).reverse()
        },
        stackOrderInsideOut: function(t) {
            var n, e, r = t.length,
            i = t.map(jc),
            a = FN(t).sort(function(t, n) {
                return i[n] - i[t]
            }),
            o = 0,
            u = 0,
            c = [],
            f = [];
            for (n = 0; n < r; ++n) e = a[n],
            o < u ? (o += i[e], c.push(e)) : (u += i[e], f.push(e));
            return f.reverse().concat(c)
        },
        stackOrderNone: FN,
        stackOrderReverse: function(t) {
            return FN(t).reverse()
        },
        timeInterval: Do,
        timeMillisecond: ok,
        timeMilliseconds: uk,
        utcMillisecond: ok,
        utcMilliseconds: uk,
        timeSecond: sk,
        timeSeconds: lk,
        utcSecond: sk,
        utcSeconds: lk,
        timeMinute: hk,
        timeMinutes: dk,
        timeHour: pk,
        timeHours: gk,
        timeDay: vk,
        timeDays: yk,
        timeWeek: bk,
        timeWeeks: Ak,
        timeSunday: bk,
        timeSundays: Ak,
        timeMonday: mk,
        timeMondays: Tk,
        timeTuesday: _k,
        timeTuesdays: kk,
        timeWednesday: xk,
        timeWednesdays: Ck,
        timeThursday: wk,
        timeThursdays: Nk,
        timeFriday: Mk,
        timeFridays: Ek,
        timeSaturday: Sk,
        timeSaturdays: Dk,
        timeMonth: zk,
        timeMonths: Uk,
        timeYear: Pk,
        timeYears: Lk,
        utcMinute: Fk,
        utcMinutes: Rk,
        utcHour: Hk,
        utcHours: Ok,
        utcDay: Yk,
        utcDays: jk,
        utcWeek: qk,
        utcWeeks: Zk,
        utcSunday: qk,
        utcSundays: Zk,
        utcMonday: Ik,
        utcMondays: Gk,
        utcTuesday: Xk,
        utcTuesdays: Jk,
        utcWednesday: Bk,
        utcWednesdays: Qk,
        utcThursday: Wk,
        utcThursdays: Kk,
        utcFriday: Vk,
        utcFridays: tC,
        utcSaturday: $k,
        utcSaturdays: nC,
        utcMonth: eC,
        utcMonths: rC,
        utcYear: iC,
        utcYears: fC,
        timeFormatDefaultLocale: Yf,
        get timeFormat() {
            return DN
        },
        get timeParse() {
            return zN
        },
        get utcFormat() {
            return UN
        },
        get utcParse() {
            return PN
        },
        timeFormatLocale: Bc,
        isoFormat: qN,
        isoParse: IN,
        now: gn,
        timer: bn,
        timerFlush: mn,
        timeout: tw,
        interval: function(t, n, e) {
            var r = new yn,
            i = n;
            return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? gn() : +e, r.restart(function a(o) {
                o += i,
                r.restart(a, i += n, e),
                t(o)
            },
            n, e), r)
        },
        transition: ne,
        active: function(t, n) {
            var e, r, i = t.__transition;
            if (i) {
                n = null == n ? null: n + "";
                for (r in i) if ((e = i[r]).state > iw && e.name === n) return new te([[t]], Ow, n, +r)
            }
            return null
        },
        interrupt: lw,
        voronoi: function() {
            function t(t) {
                return new bs(t.map(function(r, i) {
                    var a = [Math.round(n(r, i, t) / QN) * QN, Math.round(e(r, i, t) / QN) * QN];
                    return a.index = i,
                    a.data = r,
                    a
                }), r)
            }
            var n = jf,
            e = qf,
            r = null;
            return t.polygons = function(n) {
                return t(n).polygons()
            },
            t.links = function(n) {
                return t(n).links()
            },
            t.triangles = function(n) {
                return t(n).triangles()
            },
            t.x = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e: XN( + e), t) : n
            },
            t.y = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n: XN( + n), t) : e
            },
            t.extent = function(n) {
                return arguments.length ? (r = null == n ? null: [[ + n[0][0], +n[0][1]], [ + n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
            },
            t.size = function(n) {
                return arguments.length ? (r = null == n ? null: [[0, 0], [ + n[0], +n[1]]], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
            },
            t
        },
        zoom: function() {
            function t(t) {
                t.property("__zoom", As).on("wheel.zoom", c).on("mousedown.zoom", f).on("dblclick.zoom", s).filter(_).on("touchstart.zoom", l).on("touchmove.zoom", h).on("touchend.zoom touchcancel.zoom", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }
            function n(t, n) {
                return (n = Math.max(x, Math.min(w, n))) === t.k ? t: new _s(n, t.x, t.y)
            }
            function e(t, n, e) {
                var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t: new _s(t.k, r, i)
            }
            function r(t, n) {
                var e = t.invertX(n[0][0]) - M,
                r = t.invertX(n[1][0]) - S,
                i = t.invertY(n[0][1]) - A,
                a = t.invertY(n[1][1]) - T;
                return t.translate(r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r), a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a))
            }
            function i(t) {
                return [( + t[0][0] + +t[1][0]) / 2, ( + t[0][1] + +t[1][1]) / 2]
            }
            function a(t, n, e) {
                t.on("start.zoom",
                function() {
                    o(this, arguments).start()
                }).on("interrupt.zoom end.zoom",
                function() {
                    o(this, arguments).end()
                }).tween("zoom",
                function() {
                    var t = this,
                    r = arguments,
                    a = o(t, r),
                    u = b.apply(t, r),
                    c = e || i(u),
                    f = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                    s = t.__zoom,
                    l = "function" == typeof n ? n.apply(t, r) : n,
                    h = C(s.invert(c).concat(f / s.k), l.invert(c).concat(f / l.k));
                    return function(t) {
                        if (1 === t) t = l;
                        else {
                            var n = h(t),
                            e = f / n[2];
                            t = new _s(e, c[0] - n[0] * e, c[1] - n[1] * e)
                        }
                        a.zoom(null, t)
                    }
                })
            }
            function o(t, n) {
                for (var e, r = 0,
                i = N.length; r < i; ++r) if ((e = N[r]).that === t) return e;
                return new u(t, n)
            }
            function u(t, n) {
                this.that = t,
                this.args = n,
                this.index = -1,
                this.active = 0,
                this.extent = b.apply(t, n)
            }
            function c() {
                if (y.apply(this, arguments)) {
                    var t = o(this, arguments),
                    i = this.__zoom,
                    a = Math.max(x, Math.min(w, i.k * Math.pow(2, m.apply(this, arguments)))),
                    u = w_(this);
                    if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = i.invert(t.mouse[0] = u)),
                    clearTimeout(t.wheel);
                    else {
                        if (i.k === a) return;
                        t.mouse = [u, i.invert(u)],
                        lw(this),
                        t.start()
                    }
                    eE(),
                    t.wheel = setTimeout(function() {
                        t.wheel = null,
                        t.end()
                    },
                    U),
                    t.zoom("mouse", r(e(n(i, a), t.mouse[0], t.mouse[1]), t.extent))
                }
            }
            function f() {
                if (!g && y.apply(this, arguments)) {
                    var t = o(this, arguments),
                    n = E_(m_.view).on("mousemove.zoom",
                    function() {
                        if (eE(), !t.moved) {
                            var n = m_.clientX - a,
                            i = m_.clientY - u;
                            t.moved = n * n + i * i > P
                        }
                        t.zoom("mouse", r(e(t.that.__zoom, t.mouse[0] = w_(t.that), t.mouse[1]), t.extent))
                    },
                    !0).on("mouseup.zoom",
                    function() {
                        n.on("mousemove.zoom mouseup.zoom", null),
                        _t(m_.view, t.moved),
                        eE(),
                        t.end()
                    },
                    !0),
                    i = w_(this),
                    a = m_.clientX,
                    u = m_.clientY;
                    U_(m_.view),
                    ws(),
                    t.mouse = [i, this.__zoom.invert(i)],
                    lw(this),
                    t.start()
                }
            }
            function s() {
                if (y.apply(this, arguments)) {
                    var i = this.__zoom,
                    o = w_(this),
                    u = i.invert(o),
                    c = r(e(n(i, i.k * (m_.shiftKey ? .5 : 2)), o, u), b.apply(this, arguments));
                    eE(),
                    k > 0 ? E_(this).transition().duration(k).call(a, c, o) : E_(this).call(t.transform, c)
                }
            }
            function l() {
                if (y.apply(this, arguments)) {
                    var t, n, e, r, i = o(this, arguments),
                    a = m_.changedTouches,
                    u = a.length;
                    for (ws(), n = 0; n < u; ++n) e = a[n],
                    r = [r = D_(this, a, e.identifier), this.__zoom.invert(r), e.identifier],
                    i.touch0 ? i.touch1 || (i.touch1 = r) : (i.touch0 = r, t = !0);
                    if (p && (p = clearTimeout(p), !i.touch1)) return i.end(),
                    void((r = E_(this).on("dblclick.zoom")) && r.apply(this, arguments));
                    t && (p = setTimeout(function() {
                        p = null
                    },
                    z), lw(this), i.start())
                }
            }
            function h() {
                var t, i, a, u, c = o(this, arguments),
                f = m_.changedTouches,
                s = f.length;
                for (eE(), p && (p = clearTimeout(p)), t = 0; t < s; ++t) i = f[t],
                a = D_(this, f, i.identifier),
                c.touch0 && c.touch0[2] === i.identifier ? c.touch0[0] = a: c.touch1 && c.touch1[2] === i.identifier && (c.touch1[0] = a);
                if (i = c.that.__zoom, c.touch1) {
                    var l = c.touch0[0],
                    h = c.touch0[1],
                    d = c.touch1[0],
                    g = c.touch1[1],
                    v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v,
                    y = (y = g[0] - h[0]) * y + (y = g[1] - h[1]) * y;
                    i = n(i, Math.sqrt(v / y)),
                    a = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2],
                    u = [(h[0] + g[0]) / 2, (h[1] + g[1]) / 2]
                } else {
                    if (!c.touch0) return;
                    a = c.touch0[0],
                    u = c.touch0[1]
                }
                c.zoom("touch", r(e(i, a, u), c.extent))
            }
            function d() {
                var t, n, e = o(this, arguments),
                r = m_.changedTouches,
                i = r.length;
                for (ws(), g && clearTimeout(g), g = setTimeout(function() {
                    g = null
                },
                z), t = 0; t < i; ++t) n = r[t],
                e.touch0 && e.touch0[2] === n.identifier ? delete e.touch0: e.touch1 && e.touch1[2] === n.identifier && delete e.touch1;
                e.touch1 && !e.touch0 && (e.touch0 = e.touch1, delete e.touch1),
                e.touch0 ? e.touch0[1] = this.__zoom.invert(e.touch0[0]) : e.end()
            }
            var p, g, y = Ms,
            b = Ss,
            m = Ts,
            _ = ks,
            x = 0,
            w = 1 / 0,
            M = -w,
            S = w,
            A = M,
            T = S,
            k = 250,
            C = Hx,
            N = [],
            D = v("start", "zoom", "end"),
            z = 500,
            U = 150,
            P = 0;
            return t.transform = function(t, n) {
                var e = t.selection ? t.selection() : t;
                e.property("__zoom", As),
                t !== e ? a(t, n) : e.interrupt().each(function() {
                    o(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                })
            },
            t.scaleBy = function(n, e) {
                t.scaleTo(n,
                function() {
                    return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
                })
            },
            t.scaleTo = function(a, o) {
                t.transform(a,
                function() {
                    var t = b.apply(this, arguments),
                    a = this.__zoom,
                    u = i(t),
                    c = a.invert(u);
                    return r(e(n(a, "function" == typeof o ? o.apply(this, arguments) : o), u, c), t)
                })
            },
            t.translateBy = function(n, e, i) {
                t.transform(n,
                function() {
                    return r(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof i ? i.apply(this, arguments) : i), b.apply(this, arguments))
                })
            },
            t.translateTo = function(n, e, a) {
                t.transform(n,
                function() {
                    var t = b.apply(this, arguments),
                    n = this.__zoom,
                    o = i(t);
                    return r(nE.translate(o[0], o[1]).scale(n.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof a ? -a.apply(this, arguments) : -a), t)
                })
            },
            u.prototype = {
                start: function() {
                    return 1 == ++this.active && (this.index = N.push(this) - 1, this.emit("start")),
                    this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                    this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                    this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                    this.that.__zoom = n,
                    this.emit("zoom"),
                    this
                },
                end: function() {
                    return 0 == --this.active && (N.splice(this.index, 1), this.index = -1, this.emit("end")),
                    this
                },
                emit: function(n) {
                    E(new ms(t, n, this.that.__zoom), D.apply, D, [n, this.that, this.args])
                }
            },
            t.wheelDelta = function(n) {
                return arguments.length ? (m = "function" == typeof n ? n: tE( + n), t) : m
            },
            t.filter = function(n) {
                return arguments.length ? (y = "function" == typeof n ? n: tE( !! n), t) : y
            },
            t.touchable = function(n) {
                return arguments.length ? (_ = "function" == typeof n ? n: tE( !! n), t) : _
            },
            t.extent = function(n) {
                return arguments.length ? (b = "function" == typeof n ? n: tE([[ + n[0][0], +n[0][1]], [ + n[1][0], +n[1][1]]]), t) : b
            },
            t.scaleExtent = function(n) {
                return arguments.length ? (x = +n[0], w = +n[1], t) : [x, w]
            },
            t.translateExtent = function(n) {
                return arguments.length ? (M = +n[0][0], S = +n[1][0], A = +n[0][1], T = +n[1][1], t) : [[M, A], [S, T]]
            },
            t.duration = function(n) {
                return arguments.length ? (k = +n, t) : k
            },
            t.interpolate = function(n) {
                return arguments.length ? (C = n, t) : C
            },
            t.on = function() {
                var n = D.on.apply(D, arguments);
                return n === D ? t: n
            },
            t.clickDistance = function(n) {
                return arguments.length ? (P = (n = +n) * n, t) : Math.sqrt(P)
            },
            t
        },
        zoomTransform: xs,
        zoomIdentity: nE
    }),
    iE = rE && void 0 || rE,
    aE = t(function(t) { !
        function(n, e) {
            if ("function" == typeof define && define.amd) define(["d3"], e);
            else if ("object" === (void 0 === t ? "undefined": km(t)) && t.exports) {
                var r = iE;
                t.exports = e(r)
            } else n.d3.tip = e(n.d3)
        } (Tm,
        function(t) {
            return function() {
                function n(t) {
                    l = r(t),
                    h = l.createSVGPoint(),
                    document.body.appendChild(s)
                }
                function e() {
                    var n = t.select(document.createElement("div"));
                    return n.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"),
                    n.node()
                }
                function r(t) {
                    return "svg" === (t = t.node()).tagName.toLowerCase() ? t: t.ownerSVGElement
                }
                function i() {
                    return null === s && (s = e(), document.body.appendChild(s)),
                    t.select(s)
                }
                function a() {
                    for (var n = d || t.event.target; void 0 === n.getScreenCTM && "undefined" === n.parentNode;) n = n.parentNode;
                    var e = {},
                    r = n.getScreenCTM(),
                    i = n.getBBox(),
                    a = i.width,
                    o = i.height,
                    u = i.x,
                    c = i.y;
                    return h.x = u,
                    h.y = c,
                    e.nw = h.matrixTransform(r),
                    h.x += a,
                    e.ne = h.matrixTransform(r),
                    h.y += o,
                    e.se = h.matrixTransform(r),
                    h.x -= a,
                    e.sw = h.matrixTransform(r),
                    h.y -= o / 2,
                    e.w = h.matrixTransform(r),
                    h.x += a,
                    e.e = h.matrixTransform(r),
                    h.x -= a / 2,
                    h.y -= o / 2,
                    e.n = h.matrixTransform(r),
                    h.y += o,
                    e.s = h.matrixTransform(r),
                    e
                }
                function o(t) {
                    return "function" == typeof t ? t: function() {
                        return t
                    }
                }
                var u = function() {
                    return "n"
                },
                c = function() {
                    return [0, 0]
                },
                f = function() {
                    return " "
                },
                s = e(),
                l = null,
                h = null,
                d = null;
                n.show = function() {
                    var t = Array.prototype.slice.call(arguments);
                    t[t.length - 1] instanceof SVGElement && (d = t.pop());
                    var e, r = f.apply(this, t),
                    a = c.apply(this, t),
                    o = u.apply(this, t),
                    s = i(),
                    l = g.length,
                    h = document.documentElement.scrollTop || document.body.scrollTop,
                    v = document.documentElement.scrollLeft || document.body.scrollLeft;
                    for (s.html(r).style("opacity", 1).style("pointer-events", "all"); l--;) s.classed(g[l], !1);
                    return e = p.get(o).apply(this),
                    s.classed(o, !0).style("top", e.top + a[0] + h + "px").style("left", e.left + a[1] + v + "px"),
                    n
                },
                n.hide = function() {
                    return i().style("opacity", 0).style("pointer-events", "none"),
                    n
                },
                n.attr = function(e, r) {
                    if (arguments.length < 2 && "string" == typeof e) return i().attr(e);
                    var a = Array.prototype.slice.call(arguments);
                    return t.selection.prototype.attr.apply(i(), a),
                    n
                },
                n.style = function(e, r) {
                    if (arguments.length < 2 && "string" == typeof e) return i().style(e);
                    var a = Array.prototype.slice.call(arguments);
                    return t.selection.prototype.style.apply(i(), a),
                    n
                },
                n.direction = function(t) {
                    return arguments.length ? (u = null == t ? t: o(t), n) : u
                },
                n.offset = function(t) {
                    return arguments.length ? (c = null == t ? t: o(t), n) : c
                },
                n.html = function(t) {
                    return arguments.length ? (f = null == t ? t: o(t), n) : f
                },
                n.destroy = function() {
                    return s && (i().remove(), s = null),
                    n
                };
                var p = t.map({
                    n: function() {
                        var t = a();
                        return {
                            top: t.n.y - s.offsetHeight,
                            left: t.n.x - s.offsetWidth / 2
                        }
                    },
                    s: function() {
                        var t = a();
                        return {
                            top: t.s.y,
                            left: t.s.x - s.offsetWidth / 2
                        }
                    },
                    e: function() {
                        var t = a();
                        return {
                            top: t.e.y - s.offsetHeight / 2,
                            left: t.e.x
                        }
                    },
                    w: function() {
                        var t = a();
                        return {
                            top: t.w.y - s.offsetHeight / 2,
                            left: t.w.x - s.offsetWidth
                        }
                    },
                    nw: function() {
                        var t = a();
                        return {
                            top: t.nw.y - s.offsetHeight,
                            left: t.nw.x - s.offsetWidth
                        }
                    },
                    ne: function() {
                        var t = a();
                        return {
                            top: t.ne.y - s.offsetHeight,
                            left: t.ne.x
                        }
                    },
                    sw: function() {
                        var t = a();
                        return {
                            top: t.sw.y,
                            left: t.sw.x - s.offsetWidth
                        }
                    },
                    se: function() {
                        var t = a();
                        return {
                            top: t.se.y,
                            left: t.e.x
                        }
                    }
                }),
                g = p.keys();
                return n
            }
        })
    }),
    oE = function(t) {
        for (var n = t.length / 6 | 0,
        e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e
    };
    oE("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
    oE("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
    oE("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
    oE("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
    oE("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
    oE("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
    oE("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
    oE("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
    var uE = function(t) {
        return xx(t[t.length - 1])
    };
    uE(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(oE)),
    uE(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(oE)),
    uE(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(oE)),
    uE(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(oE)),
    uE(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(oE)),
    uE(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(oE));
    var cE = uE(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(oE));
    uE(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(oE)),
    uE(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(oE)),
    uE(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(oE)),
    uE(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(oE)),
    uE(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(oE)),
    uE(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(oE)),
    uE(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(oE)),
    uE(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(oE)),
    uE(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(oE)),
    uE(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(oE)),
    uE(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(oE)),
    uE(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(oE)),
    uE(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(oE)),
    uE(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(oE)),
    uE(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(oE)),
    uE(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(oE)),
    uE(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(oE)),
    uE(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(oE)),
    uE(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(oE)),
    uE(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(oE));
    "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self && self;
    var fE = function(t) {
        return t && t.__esModule ? t.
    default:
        t
    } (function(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    } (function(t, n) { !
        function(n, e) {
            t.exports = e()
        } (0,
        function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                var e = {};
                return n.m = t,
                n.c = e,
                n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                },
                n.n = function(t) {
                    var e = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return n.d(e, "a", e),
                    e
                },
                n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(t, n, e) {
                var r, i, a; !
                function(o, u) {
                    i = [t, n, e(1)],
                    void 0 !== (a = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = a)
                } (0,
                function(t, n, e) {
                    function r(t, n) {
                        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.
                default = function(t) {
                        var n = t.stateInit,
                        e = void 0 === n ? {}: n,
                        r = t.props,
                        o = void 0 === r ? {}: r,
                        u = t.methods,
                        c = void 0 === u ? {}: u,
                        f = t.init,
                        s = void 0 === f ?
                        function() {}: f,
                        l = t.update,
                        h = void 0 === l ?
                        function() {}: l,
                        d = Object.keys(o).map(function(t) {
                            return new a(t, o[t])
                        });
                        return function() {
                            function t(e) {
                                return a(e, n),
                                o(),
                                t
                            }
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = Object.assign({},
                            e, {
                                initialised: !1
                            }),
                            a = function(n, e) {
                                s.call(t, n, r, e),
                                r.initialised = !0
                            },
                            o = (0, i.
                        default)(function() {
                                r.initialised && h.call(t, r)
                            },
                            1);
                            return d.forEach(function(n) {
                                t[n.name] = function(n) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t, n) {};
                                    return function(a) {
                                        return arguments.length ? (r[n] = a, i.call(t, a, r), e && o(), t) : r[n]
                                    }
                                } (n.name, n.triggerUpdate, n.onChange)
                            }),
                            Object.keys(c).forEach(function(n) {
                                t[n] = function() {
                                    for (var e, i = arguments.length,
                                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                    return (e = c[n]).call.apply(e, [t, r].concat(a))
                                }
                            }),
                            t.resetProps = function() {
                                return d.forEach(function(n) {
                                    t[n.name](n.defaultVal)
                                }),
                                t
                            },
                            t.resetProps(),
                            r._rerender = o,
                            t
                        }
                    };
                    var i = function(t) {
                        return t && t.__esModule ? t: {
                        default:
                            t
                        }
                    } (e),
                    a = function t(n, e) {
                        var i = e.
                    default,
                        a = void 0 === i ? null: i,
                        o = e.triggerUpdate,
                        u = void 0 === o || o,
                        c = e.onChange,
                        f = void 0 === c ?
                        function(t, n) {}: c;
                        r(this, t),
                        this.name = n,
                        this.defaultVal = a,
                        this.triggerUpdate = u,
                        this.onChange = f
                    };
                    t.exports = n.
                default
                })
            },
            function(t, n) {
                t.exports = function(t, n, e) {
                    function r() {
                        var f = Date.now() - u;
                        f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                    }
                    var i, a, o, u, c;
                    null == n && (n = 100);
                    var f = function() {
                        o = this,
                        a = arguments,
                        u = Date.now();
                        var f = e && !i;
                        return i || (i = setTimeout(r, n)),
                        f && (c = t.apply(o, a), o = a = null),
                        c
                    };
                    return f.clear = function() {
                        i && (clearTimeout(i), i = null)
                    },
                    f
                }
            }])
        })
    })),
    sE = fE({
        init: function(t) {
            t.parentNode.appendChild(t)
        }
    }),
    lE = function(t, n, e) {
        t = +t,
        n = +n,
        e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1,
        i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;) a[r] = t + r * e;
        return a
    },
    hE = {
        value: function() {}
    };
    Ns.prototype = Cs.prototype = {
        constructor: Ns,
        on: function(t, n) {
            var e, r = this._,
            i = Es(t + "", r),
            a = -1,
            o = i.length; {
                if (! (arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++a < o;) if (e = (t = i[a]).type) r[e] = zs(r[e], t.name, n);
                    else if (null == n) for (e in r) r[e] = zs(r[e], t.name, null);
                    return this
                }
                for (; ++a < o;) if ((e = (t = i[a]).type) && (e = Ds(r[e], t.name))) return e
            }
        },
        copy: function() {
            var t = {},
            n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new Ns(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
        }
    };
    var dE = "http://www.w3.org/1999/xhtml",
    pE = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: dE,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    },
    gE = function(t) {
        var n = t += "",
        e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        pE.hasOwnProperty(n) ? {
            space: pE[n],
            local: t
        }: t
    },
    vE = function(t) {
        var n = gE(t);
        return (n.local ? Ps: Us)(n)
    },
    yE = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var bE = document.documentElement;
        if (!bE.matches) {
            var mE = bE.webkitMatchesSelector || bE.msMatchesSelector || bE.mozMatchesSelector || bE.oMatchesSelector;
            yE = function(t) {
                return function() {
                    return mE.call(this, t)
                }
            }
        }
    }
    var _E = yE,
    xE = {};
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (xE = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    var wE = function(t) {
        return null == t ? Ys: function() {
            return this.querySelector(t)
        }
    },
    ME = function(t) {
        return null == t ? js: function() {
            return this.querySelectorAll(t)
        }
    },
    SE = function(t) {
        return new Array(t.length)
    };
    qs.prototype = {
        constructor: qs,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var AE = function(t) {
        return function() {
            return t
        }
    },
    TE = "$",
    kE = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    ul.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var CE = [null];
    Tl.prototype = kl.prototype = {
        constructor: Tl,
        select: function(t) {
            "function" != typeof t && (t = wE(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (o = t.call(a, a.__data__, s, u)) && ("__data__" in a && (o.__data__ = a.__data__), f[s] = o);
            return new Tl(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = ME(t));
            for (var n = this._groups,
            e = n.length,
            r = [], i = [], a = 0; a < e; ++a) for (var o, u = n[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && (r.push(t.call(o, o.__data__, f, u)), i.push(o));
            return new Tl(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = _E(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new Tl(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return d = new Array(this.size()),
            f = -1,
            this.each(function(t) {
                d[++f] = t
            }),
            d;
            var e = n ? Xs: Is,
            r = this._parents,
            i = this._groups;
            "function" != typeof t && (t = AE(t));
            for (var a = i.length,
            o = new Array(a), u = new Array(a), c = new Array(a), f = 0; f < a; ++f) {
                var s = r[f],
                l = i[f],
                h = l.length,
                d = t.call(s, s && s.__data__, f, r),
                p = d.length,
                g = u[f] = new Array(p),
                v = o[f] = new Array(p);
                e(s, l, g, v, c[f] = new Array(h), d, n);
                for (var y, b, m = 0,
                _ = 0; m < p; ++m) if (y = g[m]) {
                    for (m >= _ && (_ = m + 1); ! (b = v[_]) && ++_ < p;);
                    y._next = b || null
                }
            }
            return o = new Tl(o, r),
            o._enter = u,
            o._exit = c,
            o
        },
        enter: function() {
            return new Tl(this._enter || this._groups.map(SE), this._parents)
        },
        exit: function() {
            return new Tl(this._exit || this._groups.map(SE), this._parents)
        },
        merge: function(t) {
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new Tl(o, this._parents)
        },
        order: function() {
            for (var t = this._groups,
            n = -1,
            e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            return this
        },
        sort: function(t) {
            t || (t = Bs);
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) {
                for (var a, o = n[i], u = o.length, c = r[i] = new Array(u), f = 0; f < u; ++f)(a = o[f]) && (c[f] = a);
                c.sort(function(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                })
            }
            return new Tl(r, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size()),
            n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups,
            n = 0,
            e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o
            }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {++t
            }),
            t
        },
        empty: function() {
            return ! this.node()
        },
        each: function(t) {
            for (var n = this._groups,
            e = 0,
            r = n.length; e < r; ++e) for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
            return this
        },
        attr: function(t, n) {
            var e = gE(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? Vs: Ws: "function" == typeof n ? e.local ? Js: Gs: e.local ? Zs: $s)(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? Qs: "function" == typeof n ? tl: Ks)(t, n, null == e ? "": e)) : nl(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? el: "function" == typeof n ? il: rl)(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = al(t + "");
            if (arguments.length < 2) {
                for (var r = ol(this.node()), i = -1, a = e.length; ++i < a;) if (!r.contains(e[i])) return ! 1;
                return ! 0
            }
            return this.each(("function" == typeof n ? hl: n ? sl: ll)(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? dl: ("function" == typeof t ? gl: pl)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? vl: ("function" == typeof t ? bl: yl)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(ml)
        },
        lower: function() {
            return this.each(_l)
        },
        append: function(t) {
            var n = "function" == typeof t ? t: vE(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t: vE(t),
            r = null == n ? xl: "function" == typeof n ? n: wE(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(wl)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, a = Rs(t + ""),
            o = a.length; {
                if (! (arguments.length < 2)) {
                    for (u = n ? Os: Hs, null == e && (e = !1), r = 0; r < o; ++r) this.each(u(a[r], n, e));
                    return this
                }
                var u = this.node().__on;
                if (u) for (var c, f = 0,
                s = u.length; f < s; ++f) for (r = 0, c = u[f]; r < o; ++r) if ((i = a[r]).type === c.type && i.name === c.name) return c.value
            }
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ? Al: Sl)(t, n))
        }
    };
    var NE = function(t) {
        return "string" == typeof t ? new Tl([[document.querySelector(t)]], [document.documentElement]) : new Tl([[t]], CE)
    }; (function(t, n, e, r, i, a, o, u, c, f) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = o,
        this.dx = u,
        this.dy = c,
        this._ = f
    }).prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var EE = function(t, n, e) {
        t.prototype = n.prototype = e,
        e.constructor = t
    },
    DE = "\\s*([+-]?\\d+)\\s*",
    zE = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    UE = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    PE = /^#([0-9a-f]{3})$/,
    LE = /^#([0-9a-f]{6})$/,
    FE = new RegExp("^rgb\\(" + [DE, DE, DE] + "\\)$"),
    RE = new RegExp("^rgb\\(" + [UE, UE, UE] + "\\)$"),
    HE = new RegExp("^rgba\\(" + [DE, DE, DE, zE] + "\\)$"),
    OE = new RegExp("^rgba\\(" + [UE, UE, UE, zE] + "\\)$"),
    YE = new RegExp("^hsl\\(" + [zE, UE, UE] + "\\)$"),
    jE = new RegExp("^hsla\\(" + [zE, UE, UE, zE] + "\\)$"),
    qE = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    EE(Nl, El, {
        displayable: function() {
            return this.rgb().displayable()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }),
    EE(Ll, Pl, Cl(Nl, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Ll(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Ll(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        toString: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(": "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")": ", " + t + ")")
        }
    })),
    EE(Hl,
    function(t, n, e, r) {
        return 1 === arguments.length ? Rl(t) : new Hl(t, n, e, null == r ? 1 : r)
    },
    Cl(Nl, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Hl(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Hl(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < .5 ? e: 1 - e) * n,
            i = 2 * e - r;
            return new Ll(Ol(t >= 240 ? t - 240 : t + 120, i, r), Ol(t, i, r), Ol(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var IE = Math.PI / 180,
    XE = 180 / Math.PI,
    BE = .95047,
    WE = 1,
    VE = 1.08883,
    $E = 4 / 29,
    ZE = 6 / 29,
    GE = 3 * ZE * ZE,
    JE = ZE * ZE * ZE;
    EE(jl,
    function(t, n, e, r) {
        return 1 === arguments.length ? Yl(t) : new jl(t, n, e, null == r ? 1 : r)
    },
    Cl(Nl, {
        brighter: function(t) {
            return new jl(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new jl(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t: t + this.a / 500,
            e = isNaN(this.b) ? t: t - this.b / 200;
            return t = WE * Il(t),
            n = BE * Il(n),
            e = VE * Il(e),
            new Ll(Xl(3.2404542 * n - 1.5371385 * t - .4985314 * e), Xl( - .969266 * n + 1.8760108 * t + .041556 * e), Xl(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })),
    EE(Vl,
    function(t, n, e, r) {
        return 1 === arguments.length ? Wl(t) : new Vl(t, n, e, null == r ? 1 : r)
    },
    Cl(Nl, {
        brighter: function(t) {
            return new Vl(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new Vl(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return Yl(this).rgb()
        }
    }));
    var QE = -.29227,
    KE = -.90649,
    tD = 1.97294,
    nD = tD * KE,
    eD = 1.78277 * tD,
    rD = 1.78277 * QE - -.14861 * KE;
    EE(Gl, Zl, Cl(Nl, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Gl(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Gl(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * IE,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
            return new Ll(255 * (n + e * ( - .14861 * r + 1.78277 * i)), 255 * (n + e * (QE * r + KE * i)), 255 * (n + e * (tD * r)), this.opacity)
        }
    }));
    var iD, aD, oD, uD, cD = function(t) {
        return function() {
            return t
        }
    },
    fD = function t(n) {
        function e(t, n) {
            var e = r((t = Pl(t)).r, (n = Pl(n)).r),
            i = r(t.g, n.g),
            a = r(t.b, n.b),
            o = th(t.opacity, n.opacity);
            return function(n) {
                return t.r = e(n),
                t.g = i(n),
                t.b = a(n),
                t.opacity = o(n),
                t + ""
            }
        }
        var r = Kl(n);
        return e.gamma = t,
        e
    } (1),
    sD = function(t, n) {
        var e, r = n ? n.length: 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(r),
        o = new Array(r);
        for (e = 0; e < i; ++e) a[e] = bD(t[e], n[e]);
        for (; e < r; ++e) o[e] = n[e];
        return function(t) {
            for (e = 0; e < i; ++e) o[e] = a[e](t);
            return o
        }
    },
    lD = function(t, n) {
        var e = new Date;
        return t = +t,
        n -= t,
        function(r) {
            return e.setTime(t + n * r),
            e
        }
    },
    hD = function(t, n) {
        return t = +t,
        n -= t,
        function(e) {
            return t + n * e
        }
    },
    dD = "function" == typeof Symbol && "symbol" === km(Symbol.iterator) ?
    function(t) {
        return void 0 === t ? "undefined": km(t)
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": void 0 === t ? "undefined": km(t)
    },
    pD = (function() {
        function t(t) {
            this.value = t
        }
        function n(n) {
            function e(i, a) {
                try {
                    var o = n[i](a),
                    u = o.value;
                    u instanceof t ? Promise.resolve(u.value).then(function(t) {
                        e("next", t)
                    },
                    function(t) {
                        e("throw", t)
                    }) : r(o.done ? "return": "normal", o.value)
                } catch(t) {
                    r("throw", t)
                }
            }
            function r(t, n) {
                switch (t) {
                case "return":
                    i.resolve({
                        value:
                        n,
                        done: !0
                    });
                    break;
                case "throw":
                    i.reject(n);
                    break;
                default:
                    i.resolve({
                        value:
                        n,
                        done: !1
                    })
                } (i = i.next) ? e(i.key, i.arg) : a = null
            }
            var i, a;
            this._invoke = function(t, n) {
                return new Promise(function(r, o) {
                    var u = {
                        key: t,
                        arg: n,
                        resolve: r,
                        reject: o,
                        next: null
                    };
                    a ? a = a.next = u: (i = a = u, e(t, n))
                })
            },
            "function" != typeof n.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        n.prototype.next = function(t) {
            return this._invoke("next", t)
        },
        n.prototype.
        throw = function(t) {
            return this._invoke("throw", t)
        },
        n.prototype.
        return = function(t) {
            return this._invoke("return", t)
        }
    } (),
    function(t, n) {
        var e, r = {},
        i = {};
        null !== t && "object" === (void 0 === t ? "undefined": dD(t)) || (t = {}),
        null !== n && "object" === (void 0 === n ? "undefined": dD(n)) || (n = {});
        for (e in n) e in t ? r[e] = bD(t[e], n[e]) : i[e] = n[e];
        return function(t) {
            for (e in r) i[e] = r[e](t);
            return i
        }
    }),
    gD = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    vD = new RegExp(gD.source, "g"),
    yD = function(t, n) {
        var e, r, i, a = gD.lastIndex = vD.lastIndex = 0,
        o = -1,
        u = [],
        c = [];
        for (t += "", n += ""; (e = gD.exec(t)) && (r = vD.exec(n));)(i = r.index) > a && (i = n.slice(a, i), u[o] ? u[o] += i: u[++o] = i),
        (e = e[0]) === (r = r[0]) ? u[o] ? u[o] += r: u[++o] = r: (u[++o] = null, c.push({
            i: o,
            x: hD(e, r)
        })),
        a = vD.lastIndex;
        return a < n.length && (i = n.slice(a), u[o] ? u[o] += i: u[++o] = i),
        u.length < 2 ? c[0] ? eh(c[0].x) : nh(n) : (n = c.length,
        function(t) {
            for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
            return u.join("")
        })
    },
    bD = function(t, n) {
        var e, r = void 0 === n ? "undefined": dD(n);
        return null == n || "boolean" === r ? cD(n) : ("number" === r ? hD: "string" === r ? (e = El(n)) ? (n = e, fD) : yD: n instanceof El ? fD: n instanceof Date ? lD: Array.isArray(n) ? sD: "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? pD: hD)(t, n)
    },
    mD = function(t, n) {
        return t = +t,
        n -= t,
        function(e) {
            return Math.round(t + n * e)
        }
    },
    _D = 180 / Math.PI,
    xD = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    },
    wD = function(t, n, e, r, i, a) {
        var o, u, c;
        return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o),
        (c = t * e + n * r) && (e -= t * c, r -= n * c),
        (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u),
        t * r < n * e && (t = -t, n = -n, c = -c, o = -o),
        {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(n, t) * _D,
            skewX: Math.atan(c) * _D,
            scaleX: o,
            scaleY: u
        }
    },
    MD = rh(function(t) {
        return "none" === t ? xD: (iD || (iD = document.createElement("DIV"), aD = document.documentElement, oD = document.defaultView), iD.style.transform = t, t = oD.getComputedStyle(aD.appendChild(iD), null).getPropertyValue("transform"), aD.removeChild(iD), t = t.slice(7, -1).split(","), wD( + t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    },
    "px, ", "px)", "deg)"),
    SD = rh(function(t) {
        return null == t ? xD: (uD || (uD = document.createElementNS("http://www.w3.org/2000/svg", "g")), uD.setAttribute("transform", t), (t = uD.transform.baseVal.consolidate()) ? (t = t.matrix, wD(t.a, t.b, t.c, t.d, t.e, t.f)) : xD)
    },
    ", ", ")", ")");
    ih(function(t, n) {
        var e = n - t;
        return e ? Jl(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : cD(isNaN(t) ? n: t)
    });
    var AD, TD, kD = ih(th),
    CD = 0,
    ND = 0,
    ED = 0,
    DD = 1e3,
    zD = 0,
    UD = 0,
    PD = 0,
    LD = "object" === ("undefined" == typeof performance ? "undefined": dD(performance)) && performance.now ? performance: Date,
    FD = "object" === ("undefined" == typeof window ? "undefined": dD(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };
    uh.prototype = ch.prototype = {
        constructor: uh,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? ah() : +e) + (null == n ? 0 : +n),
            this._next || TD === this || (TD ? TD._next = this: AD = this, TD = this),
            this._call = t,
            this._time = e,
            dh()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, dh())
        }
    };
    var RD = function(t, n, e) {
        var r = new uh;
        return n = null == n ? 0 : +n,
        r.restart(function(e) {
            r.stop(),
            t(e + n)
        },
        n, e),
        r
    },
    HD = Cs("start", "end", "interrupt"),
    OD = [],
    YD = 0,
    jD = 1,
    qD = 2,
    ID = 3,
    XD = 4,
    BD = 5,
    WD = 6,
    VD = function(t, n, e, r, i, a) {
        var o = t.__transition;
        if (o) {
            if (e in o) return
        } else t.__transition = {};
        yh(t, e, {
            name: n,
            index: r,
            group: i,
            on: HD,
            tween: OD,
            time: a.time,
            delay: a.delay,
            duration: a.duration,
            ease: a.ease,
            timer: null,
            state: YD
        })
    },
    $D = function(t, n) {
        var e, r, i, a = t.__transition,
        o = !0;
        if (a) {
            n = null == n ? null: n + "";
            for (i in a)(e = a[i]).name === n ? (r = e.state > qD && e.state < BD, e.state = WD, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[i]) : o = !1;
            o && delete t.__transition
        }
    },
    ZD = function(t, n) {
        var e;
        return ("number" == typeof n ? hD: n instanceof El ? fD: (e = El(n)) ? (n = e, fD) : yD)(t, n)
    },
    GD = kl.prototype.constructor,
    JD = 0,
    QD = kl.prototype;
    Xh.prototype = function(t) {
        return kl().transition(t)
    }.prototype = {
        constructor: Xh,
        select: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = wE(t));
            for (var r = this._groups,
            i = r.length,
            a = new Array(i), o = 0; o < i; ++o) for (var u, c, f = r[o], s = f.length, l = a[o] = new Array(s), h = 0; h < s; ++h)(u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, VD(l[h], n, e, h, l, vh(u, e)));
            return new Xh(a, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = ME(t));
            for (var r = this._groups,
            i = r.length,
            a = [], o = [], u = 0; u < i; ++u) for (var c, f = r[u], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
                for (var h, d = t.call(c, c.__data__, l, f), p = vh(c, e), g = 0, v = d.length; g < v; ++g)(h = d[g]) && VD(h, n, e, g, d, p);
                a.push(d),
                o.push(c)
            }
            return new Xh(a, o, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = _E(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new Xh(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new Xh(o, this._parents, this._name, this._id)
        },
        selection: function() {
            return new GD(this._groups, this._parents)
        },
        transition: function() {
            for (var t = this._name,
            n = this._id,
            e = Bh(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f) if (o = u[f]) {
                var s = vh(o, n);
                VD(o, t, e, f, u, {
                    time: s.time + s.delay + s.duration,
                    delay: 0,
                    duration: s.duration,
                    ease: s.ease
                })
            }
            return new Xh(r, this._parents, t, e)
        },
        call: QD.call,
        nodes: QD.nodes,
        node: QD.node,
        size: QD.size,
        empty: QD.empty,
        each: QD.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? vh(this.node(), e).on.on(t) : this.each(Lh(e, t, n))
        },
        attr: function(t, n) {
            var e = gE(t),
            r = "transform" === e ? SD: ZD;
            return this.attrTween(t, "function" == typeof n ? (e.local ? Th: Ah)(e, r, _h(this, "attr." + t, n)) : null == n ? (e.local ? wh: xh)(e) : (e.local ? Sh: Mh)(e, r, n + ""))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = gE(t);
            return this.tween(e, (r.local ? kh: Ch)(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? MD: ZD;
            return null == n ? this.styleTween(t, Rh(t, r)).on("end.style." + t, Hh(t)) : this.styleTween(t, "function" == typeof n ? Yh(t, r, _h(this, "style." + t, n)) : Oh(t, r, n + ""), e)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, jh(t, n, null == e ? "": e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? Ih(_h(this, "text", t)) : qh(null == t ? "": t + ""))
        },
        remove: function() {
            return this.on("end.remove", Fh(this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = vh(this.node(), e).tween, a = 0, o = i.length; a < o; ++a) if ((r = i[a]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? bh: mh)(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Nh: Eh)(n, t)) : vh(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Dh: zh)(n, t)) : vh(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(Uh(n, t)) : vh(this.node(), n).ease
        }
    };
    var KD = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t: (t -= 2) * t * t + 2) / 2
        }
    };
    kl.prototype.interrupt = function(t) {
        return this.each(function() {
            $D(this, t)
        })
    },
    kl.prototype.transition = function(t) {
        var n, e;
        t instanceof Xh ? (n = t._id, t = t._name) : (n = Bh(), (e = KD).time = ah(), t = null == t ? null: t + "");
        for (var r = this._groups,
        i = r.length,
        a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && VD(o, t, n, f, u, e || Wh(o, n));
        return new Xh(r, this._parents, t, n)
    }; ["e", "w"].map(Vh),
    ["n", "s"].map(Vh),
    ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Vh);
    var tz = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    },
    nz = function(t) {
        return 1 === t.length && (t = $h(t)),
        {
            left: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) < 0 ? r = a + 1 : i = a
                }
                return r
            },
            right: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) > 0 ? i = a: r = a + 1
                }
                return r
            }
        }
    } (tz).right,
    ez = Math.sqrt(50),
    rz = Math.sqrt(10),
    iz = Math.sqrt(2),
    az = function(t, n, e) {
        var r, i, a, o = n < t,
        u = -1;
        if (o && (r = t, t = n, n = r), 0 === (a = Zh(t, n, e)) || !isFinite(a)) return [];
        if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), i = new Array(r = Math.ceil(n - t + 1)); ++u < r;) i[u] = (t + u) * a;
        else for (t = Math.floor(t * a), n = Math.ceil(n * a), i = new Array(r = Math.ceil(t - n + 1)); ++u < r;) i[u] = (t - u) / a;
        return o && i.reverse(),
        i
    }; (function(t, n, e, r, i, a, o, u, c, f) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = o,
        this.dx = u,
        this.dy = c,
        this._ = f
    }).prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var oz = {},
    uz = {},
    cz = 34,
    fz = 10,
    sz = 13,
    lz = function(t) {
        function n(t, n) {
            function e() {
                if (f) return uz;
                if (s) return s = !1,
                oz;
                var n, e, r = u;
                if (t.charCodeAt(r) === cz) {
                    for (; u++<o && t.charCodeAt(u) !== cz || t.charCodeAt(++u) === cz;);
                    return (n = u) >= o ? f = !0 : (e = t.charCodeAt(u++)) === fz ? s = !0 : e === sz && (s = !0, t.charCodeAt(u) === fz && ++u),
                    t.slice(r + 1, n - 1).replace(/""/g, '"')
                }
                for (; u < o;) {
                    if ((e = t.charCodeAt(n = u++)) === fz) s = !0;
                    else if (e === sz) s = !0,
                    t.charCodeAt(u) === fz && ++u;
                    else if (e !== a) continue;
                    return t.slice(r, n)
                }
                return f = !0,
                t.slice(r, o)
            }
            var r, i = [],
            o = t.length,
            u = 0,
            c = 0,
            f = o <= 0,
            s = !1;
            for (t.charCodeAt(o - 1) === fz && --o, t.charCodeAt(o - 1) === sz && --o; (r = e()) !== uz;) {
                for (var l = []; r !== oz && r !== uz;) l.push(r),
                r = e();
                n && null == (l = n(l, c++)) || i.push(l)
            }
            return i
        }
        function e(n) {
            return n.map(r).join(t)
        }
        function r(t) {
            return null == t ? "": i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"': t
        }
        var i = new RegExp('["' + t + "\n\r]"),
        a = t.charCodeAt(0);
        return {
            parse: function(t, e) {
                var r, i, a = n(t,
                function(t, n) {
                    if (r) return r(t, n - 1);
                    i = t,
                    r = e ? Qh(t, e) : Jh(t)
                });
                return a.columns = i,
                a
            },
            parseRows: n,
            format: function(n, e) {
                return null == e && (e = Kh(n)),
                [e.map(r).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return r(n[t])
                    }).join(t)
                })).join("\n")
            },
            formatRows: function(t) {
                return t.map(e).join("\n")
            }
        }
    },
    hz = (lz(","), lz("\t"),
    function(t, n, e, r, i) {
        this.node = t,
        this.x0 = n,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    }),
    dz = function(t, n, e) {
        var r = new rd(null == n ? nd: n, null == e ? ed: e, NaN, NaN, NaN, NaN);
        return null == t ? r: r.addAll(t)
    }.prototype = rd.prototype;
    dz.copy = function() {
        var t, n, e = new rd(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = id(r),
        e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = id(n));
        return e
    },
    dz.add = function(t) {
        var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
        return td(this.cover(n, e), n, e, t)
    },
    dz.addAll = function(t) {
        var n, e, r, i, a = t.length,
        o = new Array(a),
        u = new Array(a),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;
        for (e = 0; e < a; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (o[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
        for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < a; ++e) td(this, o[e], u[e], t[e]);
        return this
    },
    dz.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0,
        r = this._y0,
        i = this._x1,
        a = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1,
        a = (r = Math.floor(n)) + 1;
        else {
            if (! (e > t || t > i || r > n || n > a)) return this;
            var o, u, c = i - e,
            f = this._root;
            switch (u = (n < (r + a) / 2) << 1 | t < (e + i) / 2) {
            case 0:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , i = e + c , a = r + c , t > i || n > a );
                break;
            case 1:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , e = i - c , a = r + c , e > t || n > a );
                break;
            case 2:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , i = e + c , r = a - c , t > i || r > n );
                break;
            case 3:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , e = i - c , r = a - c , e > t || r > n )
            }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this
    },
    dz.data = function() {
        var t = [];
        return this.visit(function(n) {
            if (!n.length) do {
                t.push(n.data)
            } while ( n = n . next )
        }),
        t
    },
    dz.extent = function(t) {
        return arguments.length ? this.cover( + t[0][0], +t[0][1]).cover( + t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    },
    dz.find = function(t, n, e) {
        var r, i, a, o, u, c, f, s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        g = this._root;
        for (g && p.push(new hz(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) if (! (! (g = c.node) || (i = c.x0) > h || (a = c.y0) > d || (o = c.x1) < s || (u = c.y1) < l)) if (g.length) {
            var v = (i + o) / 2,
            y = (a + u) / 2;
            p.push(new hz(g[3], v, y, o, u), new hz(g[2], i, y, v, u), new hz(g[1], v, a, o, y), new hz(g[0], i, a, v, y)),
            (f = (n >= y) << 1 | t >= v) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
        } else {
            var b = t - +this._x.call(null, g.data),
            m = n - +this._y.call(null, g.data),
            _ = b * b + m * m;
            if (_ < e) {
                var x = Math.sqrt(e = _);
                s = t - x,
                l = n - x,
                h = t + x,
                d = n + x,
                r = g.data
            }
        }
        return r
    },
    dz.remove = function(t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
        var n, e, r, i, a, o, u, c, f, s, l, h, d = this._root,
        p = this._x0,
        g = this._y0,
        v = this._x1,
        y = this._y1;
        if (!d) return this;
        if (d.length) for (;;) {
            if ((f = a >= (u = (p + v) / 2)) ? p = u: v = u, (s = o >= (c = (g + y) / 2)) ? g = c: y = c, n = d, !(d = d[l = s << 1 | f])) return this;
            if (!d.length) break; (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next,
        r ? (i ? r.next = i: delete r.next, this) : n ? (i ? n[l] = i: delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d: this._root = d), this) : (this._root = i, this)
    },
    dz.removeAll = function(t) {
        for (var n = 0,
        e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    },
    dz.root = function() {
        return this._root
    },
    dz.size = function() {
        var t = 0;
        return this.visit(function(n) {
            if (!n.length) do {++t
            } while ( n = n . next )
        }),
        t
    },
    dz.visit = function(t) {
        var n, e, r, i, a, o, u = [],
        c = this._root;
        for (c && u.push(new hz(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, a = n.x1, o = n.y1) && c.length) {
            var f = (r + a) / 2,
            s = (i + o) / 2; (e = c[3]) && u.push(new hz(e, f, s, a, o)),
            (e = c[2]) && u.push(new hz(e, r, s, f, o)),
            (e = c[1]) && u.push(new hz(e, f, i, a, s)),
            (e = c[0]) && u.push(new hz(e, r, i, f, s))
        }
        return this
    },
    dz.visitAfter = function(t) {
        var n, e = [],
        r = [];
        for (this._root && e.push(new hz(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var a, o = n.x0,
                u = n.y0,
                c = n.x1,
                f = n.y1,
                s = (o + c) / 2,
                l = (u + f) / 2; (a = i[0]) && e.push(new hz(a, o, u, s, l)),
                (a = i[1]) && e.push(new hz(a, s, u, c, l)),
                (a = i[2]) && e.push(new hz(a, o, l, s, f)),
                (a = i[3]) && e.push(new hz(a, s, l, c, f))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    },
    dz.x = function(t) {
        return arguments.length ? (this._x = t, this) : this._x
    },
    dz.y = function(t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    var pz, gz = function(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    },
    vz = function(t) {
        return (t = gz(Math.abs(t))) ? t[1] : NaN
    },
    yz = function(t, n) {
        return function(e, r) {
            for (var i = e.length,
            a = [], o = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), a.push(e.substring(i -= u, i + u)), !((c += u + 1) > r));) u = t[o = (o + 1) % t.length];
            return a.reverse().join(n)
        }
    },
    bz = function(t) {
        return function(n) {
            return n.replace(/[0-9]/g,
            function(n) {
                return t[ + n]
            })
        }
    },
    mz = function(t, n) {
        var e = gz(t, n);
        if (!e) return t + "";
        var r = e[0],
        i = e[1];
        return i < 0 ? "0." + new Array( - i).join("0") + r: r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    },
    _z = {
        "": function(t, n) {
            t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, a = -1; i < r; ++i) switch (t[i]) {
            case ".":
                a = e = i;
                break;
            case "0":
                0 === a && (a = i),
                e = i;
                break;
            case "e":
                break t;
            default:
                a > 0 && (a = 0)
            }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
        },
        "%": function(t, n) {
            return (100 * t).toFixed(n)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.round(t).toString(10)
        },
        e: function(t, n) {
            return t.toExponential(n)
        },
        f: function(t, n) {
            return t.toFixed(n)
        },
        g: function(t, n) {
            return t.toPrecision(n)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, n) {
            return mz(100 * t, n)
        },
        r: mz,
        s: function(t, n) {
            var e = gz(t, n);
            if (!e) return t + "";
            var r = e[0],
            i = e[1],
            a = i - (pz = 3 * Math.max( - 8, Math.min(8, Math.floor(i / 3)))) + 1,
            o = r.length;
            return a === o ? r: a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + gz(t, Math.max(0, n + a - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    },
    xz = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    ad.prototype = od.prototype,
    od.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0": "") + (null == this.width ? "": Math.max(1, 0 | this.width)) + (this.comma ? ",": "") + (null == this.precision ? "": "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var wz, Mz, Sz, Az = function(t) {
        return t
    },
    Tz = ["y", "z", "a", "f", "p", "n", "碌", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
    kz = function(t) {
        function n(t) {
            function n(t) {
                var n, r, o, s = v,
                _ = y;
                if ("c" === g) _ = b(t) + _,
                t = "";
                else {
                    var x = (t = +t) < 0;
                    if (t = b(Math.abs(t), p), x && 0 == +t && (x = !1), s = (x ? "(" === f ? f: "-": "-" === f || "(" === f ? "": f) + s, _ = _ + ("s" === g ? Tz[8 + pz / 3] : "") + (x && "(" === f ? ")": ""), m) for (n = -1, r = t.length; ++n < r;) if (48 > (o = t.charCodeAt(n)) || o > 57) {
                        _ = (46 === o ? i + t.slice(n + 1) : t.slice(n)) + _,
                        t = t.slice(0, n);
                        break
                    }
                }
                d && !l && (t = e(t, 1 / 0));
                var w = s.length + t.length + _.length,
                M = w < h ? new Array(h - w + 1).join(u) : "";
                switch (d && l && (t = e(M + t, M.length ? h - _.length: 1 / 0), M = ""), c) {
                case "<":
                    t = s + t + _ + M;
                    break;
                case "=":
                    t = s + M + t + _;
                    break;
                case "^":
                    t = M.slice(0, w = M.length >> 1) + s + t + _ + M.slice(w);
                    break;
                default:
                    t = M + s + t + _
                }
                return a(t)
            }
            var u = (t = ad(t)).fill,
            c = t.align,
            f = t.sign,
            s = t.symbol,
            l = t.zero,
            h = t.width,
            d = t.comma,
            p = t.precision,
            g = t.type,
            v = "$" === s ? r[0] : "#" === s && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
            y = "$" === s ? r[1] : /[%p]/.test(g) ? o: "",
            b = _z[g],
            m = !g || /[defgprs%]/.test(g);
            return p = null == p ? g ? 6 : 12 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)),
            n.toString = function() {
                return t + ""
            },
            n
        }
        var e = t.grouping && t.thousands ? yz(t.grouping, t.thousands) : Az,
        r = t.currency,
        i = t.decimal,
        a = t.numerals ? bz(t.numerals) : Az,
        o = t.percent || "%";
        return {
            format: n,
            formatPrefix: function(t, e) {
                var r = n((t = ad(t), t.type = "f", t)),
                i = 3 * Math.max( - 8, Math.min(8, Math.floor(vz(e) / 3))),
                a = Math.pow(10, -i),
                o = Tz[8 + i / 3];
                return function(t) {
                    return r(a * t) + o
                }
            }
        }
    }; !
    function(t) {
        wz = kz(t),
        Mz = wz.format,
        Sz = wz.formatPrefix
    } ({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var Cz = function(t) {
        return Math.max(0, -vz(Math.abs(t)))
    },
    Nz = function(t, n) {
        return Math.max(0, 3 * Math.max( - 8, Math.min(8, Math.floor(vz(n) / 3))) - vz(Math.abs(t)))
    },
    Ez = function(t, n) {
        return t = Math.abs(t),
        n = Math.abs(n) - t,
        Math.max(0, vz(n) - vz(t)) + 1
    },
    Dz = function() {
        return new ud
    };
    ud.prototype = {
        constructor: ud,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            cd(zz, t, this.t),
            cd(this, zz.s, this.s),
            this.s ? this.t += zz.t: this.s = zz.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var zz = new ud,
    Uz = Math.PI,
    Pz = Uz / 2,
    Lz = Math.atan,
    Fz = Math.atan2,
    Rz = Math.cos,
    Hz = Math.sin,
    Oz = Math.sqrt;
    Dz(),
    Dz(),
    Dz(),
    Dz(),
    Dz(),
    Dz(),
    Dz(),
    Dz();
    ld(function(t) {
        return Oz(2 / (1 + t))
    }).invert = hd(function(t) {
        return 2 * sd(t / 2)
    }),
    ld(function(t) {
        return (t = fd(t)) && t / Hz(t)
    }).invert = hd(function(t) {
        return t
    }),
    function(t, n) {
        var e = Rz(n),
        r = Rz(t) * e;
        return [e * Hz(t) / r, Hz(n) / r]
    }.invert = hd(Lz),
    function(t, n) {
        return [Rz(n) * Hz(t), Hz(n)]
    }.invert = hd(sd),
    function(t, n) {
        var e = Rz(n),
        r = 1 + Rz(t) * e;
        return [e * Hz(t) / r, Hz(n) / r]
    }.invert = hd(function(t) {
        return 2 * Lz(t)
    });
    var Yz = Array.prototype,
    jz = Yz.map,
    qz = Yz.slice,
    Iz = function(t) {
        return function() {
            return t
        }
    },
    Xz = function(t) {
        return + t
    },
    Bz = [0, 1],
    Wz = function(t, n, e) {
        var r, i = t[0],
        a = t[t.length - 1],
        o = Gh(i, a, null == n ? 10 : n);
        switch ((e = ad(null == e ? ",f": e)).type) {
        case "s":
            var u = Math.max(Math.abs(i), Math.abs(a));
            return null != e.precision || isNaN(r = Nz(o, u)) || (e.precision = r),
            Sz(e, u);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != e.precision || isNaN(r = Ez(o, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
            break;
        case "f":
        case "%":
            null != e.precision || isNaN(r = Cz(o)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return Mz(e)
    },
    Vz = new Date,
    $z = new Date,
    Zz = wd(function() {},
    function(t, n) {
        t.setTime( + t + n)
    },
    function(t, n) {
        return n - t
    });
    Zz.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? wd(function(n) {
            n.setTime(Math.floor(n / t) * t)
        },
        function(n, e) {
            n.setTime( + n + e * t)
        },
        function(n, e) {
            return (e - n) / t
        }) : Zz: null
    };
    var Gz = 6e4,
    Jz = 6048e5,
    Qz = (wd(function(t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    },
    function(t, n) {
        t.setTime( + t + 1e3 * n)
    },
    function(t, n) {
        return (n - t) / 1e3
    },
    function(t) {
        return t.getUTCSeconds()
    }), wd(function(t) {
        t.setTime(Math.floor(t / Gz) * Gz)
    },
    function(t, n) {
        t.setTime( + t + n * Gz)
    },
    function(t, n) {
        return (n - t) / Gz
    },
    function(t) {
        return t.getMinutes()
    }), wd(function(t) {
        var n = t.getTimezoneOffset() * Gz % 36e5;
        n < 0 && (n += 36e5),
        t.setTime(36e5 * Math.floor(( + t - n) / 36e5) + n)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getHours()
    }), wd(function(t) {
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setDate(t.getDate() + n)
    },
    function(t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Gz) / 864e5
    },
    function(t) {
        return t.getDate() - 1
    })),
    Kz = Md(0),
    tU = Md(1),
    nU = (Md(2), Md(3), Md(4), Md(5), Md(6), wd(function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setMonth(t.getMonth() + n)
    },
    function(t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    },
    function(t) {
        return t.getMonth()
    }), wd(function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setFullYear(t.getFullYear() + n)
    },
    function(t, n) {
        return n.getFullYear() - t.getFullYear()
    },
    function(t) {
        return t.getFullYear()
    }));
    nU.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? wd(function(n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
            n.setMonth(0, 1),
            n.setHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    wd(function(t) {
        t.setUTCSeconds(0, 0)
    },
    function(t, n) {
        t.setTime( + t + n * Gz)
    },
    function(t, n) {
        return (n - t) / Gz
    },
    function(t) {
        return t.getUTCMinutes()
    }),
    wd(function(t) {
        t.setUTCMinutes(0, 0, 0)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getUTCHours()
    });
    var eU = wd(function(t) {
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    },
    function(t, n) {
        return (n - t) / 864e5
    },
    function(t) {
        return t.getUTCDate() - 1
    }),
    rU = Sd(0),
    iU = Sd(1),
    aU = (Sd(2), Sd(3), Sd(4), Sd(5), Sd(6), wd(function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    },
    function(t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    },
    function(t) {
        return t.getUTCMonth()
    }), wd(function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    },
    function(t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    },
    function(t) {
        return t.getUTCFullYear()
    }));
    aU.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? wd(function(n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
            n.setUTCMonth(0, 1),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var oU, uU, cU, fU = {
        "-": "",
        _: " ",
        0 : "0"
    },
    sU = /^\s*\d+/,
    lU = /^%/,
    hU = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g; !
    function(t) {
        oU = Cd(t),
        uU = oU.utcFormat,
        cU = oU.utcParse
    } ({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || uU("%Y-%m-%dT%H:%M:%S.%LZ"),
    +new Date("2000-01-01T00:00:00.000Z") || cU("%Y-%m-%dT%H:%M:%S.%LZ");
    var dU = function(t) {
        return t.match(/.{6}/g).map(function(t) {
            return "#" + t
        })
    };
    dU("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    dU("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
    dU("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
    dU("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
    kD(Zl(300, .5, 0), Zl( - 240, .5, 1));
    kD(Zl( - 100, .75, .35), Zl(80, 1.5, .8)),
    kD(Zl(260, .75, .35), Zl(80, 1.5, .8)),
    Zl();
    wp(dU("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    wp(dU("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    wp(dU("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    wp(dU("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    kp.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Tp(this, this._t0, Ap(this, this._t0))
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    Tp(this, Ap(this, e = Sp(this, t, n)), e);
                    break;
                default:
                    Tp(this, this._t0, e = Sp(this, t, n))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n,
                this._t0 = e
            }
        }
    },
    (function(t) {
        this._context = new Cp(t)
    }.prototype = Object.create(kp.prototype)).point = function(t, n) {
        kp.prototype.point.call(this, n, t)
    },
    Cp.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, a) {
            this._context.bezierCurveTo(n, t, r, e, a, i)
        }
    };
    var pU = fE({
        props: {
            id: {},
            colorScale: {
            default:
                xd().range(["black", "white"])
            },
            angle: {
            default:
                0
            }
        },
        init: function(t, n) {
            n.id = "areaGradient" + Math.round(1e4 * Math.random()),
            n.gradient = NE(t).append("linearGradient")
        },
        update: function(t) {
            var n = Math.PI * t.angle / 180;
            t.gradient.attr("y1", Math.round(100 * Math.max(0, Math.sin(n))) + "%").attr("y2", Math.round(100 * Math.max(0, -Math.sin(n))) + "%").attr("x1", Math.round(100 * Math.max(0, -Math.cos(n))) + "%").attr("x2", Math.round(100 * Math.max(0, Math.cos(n))) + "%").attr("id", t.id);
            var e = xd().domain([0, 100]).range(t.colorScale.domain()),
            r = t.gradient.selectAll("stop").data(lE(0, 100.01, 20));
            r.exit().remove(),
            r.merge(r.enter().append("stop")).attr("offset",
            function(t) {
                return t + "%"
            }).attr("stop-color",
            function(n) {
                return t.colorScale(e(n))
            })
        }
    }),
    gU = (fE({
        props: {
            id: {
            default:
                "areaGradient" + Math.round(1e4 * Math.random())
            }
        },
        init: function(t, n) {
            n.filter = NE(t).append("defs").append("filter").attr("height", "130%"),
            n.filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 3),
            n.filter.append("feOffset").attr("dx", 2).attr("dy", 2).attr("result", "offsetblur");
            var e = n.filter.append("feMerge");
            e.append("feMergeNode"),
            e.append("feMergeNode").attr("in", "SourceGraphic")
        },
        update: function(t) {
            t.filter.attr("id", t.id)
        }
    }), fE({
        props: {
            x: {
            default:
                0
            },
            y: {
            default:
                0
            },
            r: {
            default:
                8
            },
            color: {
            default:
                "darkblue"
            },
            duration: {
            default:
                .7
            },
            angleFull: {
            default:
                120
            }
        },
        init: function(t, n) {
            t = NE(t),
            n.path = t.append("path"),
            n.transform = n.path.append("animateTransform").attr("attributeName", "transform").attr("attributeType", "XML").attr("type", "rotate").attr("begin", "0s").attr("fill", "freeze").attr("repeatCount", "indefinite")
        },
        update: function(t) {
            t.path.attr("d",
            function(t, n, e, r, i, a) {
                i = i / 180 * Math.PI,
                a = a / 180 * Math.PI;
                var o = e,
                u = e - r,
                c = [[t + o * Math.cos(i), n + o * Math.sin(i)], [t + o * Math.cos(a), n + o * Math.sin(a)], [t + u * Math.cos(a), n + u * Math.sin(a)], [t + u * Math.cos(i), n + u * Math.sin(i)]],
                f = (a - i) % (2 * Math.PI) > Math.PI ? 1 : 0,
                s = [];
                return s.push("M" + c[0].join()),
                s.push("A" + [o, o, 0, f, 1, c[1]].join()),
                s.push("L" + c[2].join()),
                s.push("A" + [u, u, 0, f, 0, c[3]].join()),
                s.push("z"),
                s.join(" ")
            } (t.x, t.y, t.r, t.r / 3, 0, t.angleFull)).attr("fill", t.color),
            t.transform.attr("from", "0 " + t.x + " " + t.y).attr("to", "360 " + t.x + " " + t.y).attr("dur", t.duration + "s")
        }
    }), fE({
        props: {
            imgUrl: {},
            x: {
            default:
                0
            },
            y: {
            default:
                0
            },
            maxWidth: {
            default:
                20
            },
            maxHeight: {
            default:
                20
            },
            svgAlign: {
            default:
                "xMidYMid"
            }
        },
        methods: {
            show: function(t) {
                return t.img.attr("width", t.maxWidth).attr("height", t.maxHeight),
                this
            },
            hide: function(t) {
                return t.img.attr("width", 0).attr("height", 0),
                this
            }
        },
        init: function(t, n) {
            n.img = NE(t).append("image")
        },
        update: function(t) {
            t.img.attr("xlink:href", t.imgUrl).attr("x", t.x).attr("y", t.y).attr("width", t.maxW).attr("height", t.maxH).attr("preserveAspectRatio", t.svgAlign + " meet")
        }
    }), fE({
        props: {
            selection: {
            default:
                {
                    x:
                    [null, null],
                    y: [null, null]
                }
            },
            xDomain: {
                onChange: function(t, n) {
                    n.xScale.domain(t)
                }
            },
            yDomain: {
                onChange: function(t, n) {
                    n.yScale.domain(t)
                }
            },
            transitionDuration: 700
        },
        stateInit: {
            xScale: xd(),
            yScale: xd()
        },
        init: function(t, n, e) {
            var r = e.width,
            i = e.height,
            a = e.margin,
            o = void 0 === a ? {
                top: 2,
                right: 2,
                bottom: 2,
                left: 2
            }: a;
            n.xScale.range([o.left, r - n.margin.right]),
            n.yScale.range([o.top, i - n.margin.bottom]),
            n.svg = NE(t).append("svg").attr("width", r).attr("height", i),
            n.outerBox = n.svg.append("rect").attr("x", n.xScale.range()[0]).attr("y", n.yScale.range()[0]).attr("rx", 2).attr("ry", 2).attr("width", n.xScale.range()[1]).attr("height", n.yScale.range()[1]).style("fill", "#EEE").style("stroke", "grey"),
            n.selectionBox = n.svg.append("rect").attr("rx", 1).attr("ry", 1).attr("width", 0).attr("height", 0).style("stroke", "blue").style("stroke-opacity", .6).style("fill", "blue").style("fill-opacity", .3)
        },
        update: function(t) {
            t.outerBox.attr("x", t.xScale.range()[0]).attr("y", t.yScale.range()[0]).attr("width", t.xScale.range()[1]).attr("height", t.yScale.range()[1]),
            t.selectionBox.attr("x", t.xScale(t.selection.x[0])).attr("y", t.yScale(t.selection.y[0])).attr("width", t.xScale(t.selection.x[1] - t.selection.x[0])).attr("height", t.yScale(t.selection.y[1] - t.selection.y[0]))
        }
    }), "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self && self,
    function(t) {
        return t && t.__esModule ? t.
    default:
        t
    } (function(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    } (function(t, n) { !
        function(n, e) {
            t.exports = e()
        } (0,
        function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                var e = {};
                return n.m = t,
                n.c = e,
                n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                },
                n.n = function(t) {
                    var e = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return n.d(e, "a", e),
                    e
                },
                n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(t, n, e) {
                var r, i, a; !
                function(o, u) {
                    i = [t, n, e(1)],
                    void 0 !== (a = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = a)
                } (0,
                function(t, n, e) {
                    function r(t, n) {
                        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.
                default = function(t) {
                        var n = t.stateInit,
                        e = void 0 === n ? {}: n,
                        r = t.props,
                        o = void 0 === r ? {}: r,
                        u = t.methods,
                        c = void 0 === u ? {}: u,
                        f = t.init,
                        s = void 0 === f ?
                        function() {}: f,
                        l = t.update,
                        h = void 0 === l ?
                        function() {}: l,
                        d = Object.keys(o).map(function(t) {
                            return new a(t, o[t])
                        });
                        return function() {
                            function t(e) {
                                return a(e, n),
                                o(),
                                t
                            }
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = Object.assign({},
                            e, {
                                initialised: !1
                            }),
                            a = function(n, e) {
                                s.call(t, n, r, e),
                                r.initialised = !0
                            },
                            o = (0, i.
                        default)(function() {
                                r.initialised && h.call(t, r)
                            },
                            1);
                            return d.forEach(function(n) {
                                t[n.name] = function(n) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t, n) {};
                                    return function(a) {
                                        return arguments.length ? (r[n] = a, i.call(t, a, r), e && o(), t) : r[n]
                                    }
                                } (n.name, n.triggerUpdate, n.onChange)
                            }),
                            Object.keys(c).forEach(function(n) {
                                t[n] = function() {
                                    for (var e, i = arguments.length,
                                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                    return (e = c[n]).call.apply(e, [t, r].concat(a))
                                }
                            }),
                            t.resetProps = function() {
                                return d.forEach(function(n) {
                                    t[n.name](n.defaultVal)
                                }),
                                t
                            },
                            t.resetProps(),
                            r._rerender = o,
                            t
                        }
                    };
                    var i = function(t) {
                        return t && t.__esModule ? t: {
                        default:
                            t
                        }
                    } (e),
                    a = function t(n, e) {
                        var i = e.
                    default,
                        a = void 0 === i ? null: i,
                        o = e.triggerUpdate,
                        u = void 0 === o || o,
                        c = e.onChange,
                        f = void 0 === c ?
                        function(t, n) {}: c;
                        r(this, t),
                        this.name = n,
                        this.defaultVal = a,
                        this.triggerUpdate = u,
                        this.onChange = f
                    };
                    t.exports = n.
                default
                })
            },
            function(t, n) {
                t.exports = function(t, n, e) {
                    function r() {
                        var f = Date.now() - u;
                        f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                    }
                    var i, a, o, u, c;
                    null == n && (n = 100);
                    var f = function() {
                        o = this,
                        a = arguments,
                        u = Date.now();
                        var f = e && !i;
                        return i || (i = setTimeout(r, n)),
                        f && (c = t.apply(o, a), o = a = null),
                        c
                    };
                    return f.clear = function() {
                        i && (clearTimeout(i), i = null)
                    },
                    f
                }
            }])
        })
    }))),
    vU = (function() {
        function t(t) {
            this.value = t
        }
        function n(n) {
            function e(i, a) {
                try {
                    var o = n[i](a),
                    u = o.value;
                    u instanceof t ? Promise.resolve(u.value).then(function(t) {
                        e("next", t)
                    },
                    function(t) {
                        e("throw", t)
                    }) : r(o.done ? "return": "normal", o.value)
                } catch(t) {
                    r("throw", t)
                }
            }
            function r(t, n) {
                switch (t) {
                case "return":
                    i.resolve({
                        value:
                        n,
                        done: !0
                    });
                    break;
                case "throw":
                    i.reject(n);
                    break;
                default:
                    i.resolve({
                        value:
                        n,
                        done: !1
                    })
                } (i = i.next) ? e(i.key, i.arg) : a = null
            }
            var i, a;
            this._invoke = function(t, n) {
                return new Promise(function(r, o) {
                    var u = {
                        key: t,
                        arg: n,
                        resolve: r,
                        reject: o,
                        next: null
                    };
                    a ? a = a.next = u: (i = a = u, e(t, n))
                })
            },
            "function" != typeof n.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        n.prototype.next = function(t) {
            return this._invoke("next", t)
        },
        n.prototype.
        throw = function(t) {
            return this._invoke("throw", t)
        },
        n.prototype.
        return = function(t) {
            return this._invoke("return", t)
        }
    } (),
    function(t) {
        if (Array.isArray(t)) {
            for (var n = 0,
            e = Array(t.length); n < t.length; n++) e[n] = t[n];
            return e
        }
        return Array.from(t)
    }),
    yU = gU({
        props: {
            bbox: {
            default:
                {
                    width:
                    null,
                    height: null
                }
            },
            passes: {
            default:
                3
            }
        },
        init: function(t, n) {
            n.el = t
        },
        update: function(t) { [].concat(vU(Array(t.passes).keys())).some(function() {
                var n = parseInt(t.el.style["font-size"].split("px")[0]) || 20,
                e = t.el.getBBox(),
                r = Math.floor(n * Math.min(t.bbox.width / e.width, t.bbox.height / e.height));
                if (r === n) return ! 0;
                t.el.style["font-size"] = r + "px"
            })
        }
    }),
    bU = (gU({
        props: {
            maxWidth: {
            default:
                1 / 0
            }
        },
        init: function(t, n) {
            n.el = t
        },
        update: function(t) {
            for (var n = t.el.textContent,
            e = Math.round(n.length * t.maxWidth / t.el.getBBox().width * 1.2); --e && t.maxWidth / t.el.getBBox().width < 1;) t.el.textContent = function(t, n) {
                return t.length <= n ? t: t.substring(0, 2 * n / 3) + "..." + t.substring(t.length - n / 3, t.length)
            } (n, e)
        }
    }), "http://www.w3.org/1999/xhtml"),
    mU = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: bU,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    },
    _U = function(t) {
        var n = t += "",
        e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        mU.hasOwnProperty(n) ? {
            space: mU[n],
            local: t
        }: t
    },
    xU = function(t) {
        var n = _U(t);
        return (n.local ? Ep: Np)(n)
    },
    wU = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var MU = document.documentElement;
        if (!MU.matches) {
            var SU = MU.webkitMatchesSelector || MU.msMatchesSelector || MU.mozMatchesSelector || MU.oMatchesSelector;
            wU = function(t) {
                return function() {
                    return SU.call(this, t)
                }
            }
        }
    }
    var AU = wU,
    TU = {};
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (TU = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    var kU = function(t) {
        return null == t ? Fp: function() {
            return this.querySelector(t)
        }
    },
    CU = function(t) {
        return null == t ? Rp: function() {
            return this.querySelectorAll(t)
        }
    },
    NU = function(t) {
        return new Array(t.length)
    };
    Hp.prototype = {
        constructor: Hp,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var EU = function(t) {
        return function() {
            return t
        }
    },
    DU = "$",
    zU = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    rg.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var UU = [null];
    wg.prototype = function() {
        return new wg([[document.documentElement]], UU)
    }.prototype = {
        constructor: wg,
        select: function(t) {
            "function" != typeof t && (t = kU(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (o = t.call(a, a.__data__, s, u)) && ("__data__" in a && (o.__data__ = a.__data__), f[s] = o);
            return new wg(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = CU(t));
            for (var n = this._groups,
            e = n.length,
            r = [], i = [], a = 0; a < e; ++a) for (var o, u = n[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && (r.push(t.call(o, o.__data__, f, u)), i.push(o));
            return new wg(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = AU(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new wg(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return d = new Array(this.size()),
            f = -1,
            this.each(function(t) {
                d[++f] = t
            }),
            d;
            var e = n ? Yp: Op,
            r = this._parents,
            i = this._groups;
            "function" != typeof t && (t = EU(t));
            for (var a = i.length,
            o = new Array(a), u = new Array(a), c = new Array(a), f = 0; f < a; ++f) {
                var s = r[f],
                l = i[f],
                h = l.length,
                d = t.call(s, s && s.__data__, f, r),
                p = d.length,
                g = u[f] = new Array(p),
                v = o[f] = new Array(p);
                e(s, l, g, v, c[f] = new Array(h), d, n);
                for (var y, b, m = 0,
                _ = 0; m < p; ++m) if (y = g[m]) {
                    for (m >= _ && (_ = m + 1); ! (b = v[_]) && ++_ < p;);
                    y._next = b || null
                }
            }
            return o = new wg(o, r),
            o._enter = u,
            o._exit = c,
            o
        },
        enter: function() {
            return new wg(this._enter || this._groups.map(NU), this._parents)
        },
        exit: function() {
            return new wg(this._exit || this._groups.map(NU), this._parents)
        },
        merge: function(t) {
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new wg(o, this._parents)
        },
        order: function() {
            for (var t = this._groups,
            n = -1,
            e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            return this
        },
        sort: function(t) {
            t || (t = jp);
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) {
                for (var a, o = n[i], u = o.length, c = r[i] = new Array(u), f = 0; f < u; ++f)(a = o[f]) && (c[f] = a);
                c.sort(function(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                })
            }
            return new wg(r, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size()),
            n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups,
            n = 0,
            e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o
            }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {++t
            }),
            t
        },
        empty: function() {
            return ! this.node()
        },
        each: function(t) {
            for (var n = this._groups,
            e = 0,
            r = n.length; e < r; ++e) for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
            return this
        },
        attr: function(t, n) {
            var e = _U(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? Ip: qp: "function" == typeof n ? e.local ? Vp: Wp: e.local ? Bp: Xp)(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? $p: "function" == typeof n ? Gp: Zp)(t, n, null == e ? "": e)) : Jp(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? Qp: "function" == typeof n ? tg: Kp)(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = ng(t + "");
            if (arguments.length < 2) {
                for (var r = eg(this.node()), i = -1, a = e.length; ++i < a;) if (!r.contains(e[i])) return ! 1;
                return ! 0
            }
            return this.each(("function" == typeof n ? cg: n ? og: ug)(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? fg: ("function" == typeof t ? lg: sg)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? hg: ("function" == typeof t ? pg: dg)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(gg)
        },
        lower: function() {
            return this.each(vg)
        },
        append: function(t) {
            var n = "function" == typeof t ? t: xU(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t: xU(t),
            r = null == n ? yg: "function" == typeof n ? n: kU(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(bg)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, a = Up(t + ""),
            o = a.length; {
                if (! (arguments.length < 2)) {
                    for (u = n ? Lp: Pp, null == e && (e = !1), r = 0; r < o; ++r) this.each(u(a[r], n, e));
                    return this
                }
                var u = this.node().__on;
                if (u) for (var c, f = 0,
                s = u.length; f < s; ++f) for (r = 0, c = u[f]; r < o; ++r) if ((i = a[r]).type === c.type && i.name === c.name) return c.value
            }
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ? xg: _g)(t, n))
        }
    };
    var PU = function(t) {
        return "string" == typeof t ? new wg([[document.querySelector(t)]], [document.documentElement]) : new wg([[t]], UU)
    },
    LU = ("undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self && self,
    function(t) {
        return t && t.__esModule ? t.
    default:
        t
    } (Mg(function(t, n) { !
        function(n, e) {
            t.exports = e()
        } (0,
        function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                var e = {};
                return n.m = t,
                n.c = e,
                n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                },
                n.n = function(t) {
                    var e = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return n.d(e, "a", e),
                    e
                },
                n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(t, n, e) {
                var r, i, a; !
                function(o, u) {
                    i = [t, n, e(1)],
                    void 0 !== (a = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = a)
                } (0,
                function(t, n, e) {
                    function r(t, n) {
                        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.
                default = function(t) {
                        var n = t.stateInit,
                        e = void 0 === n ? {}: n,
                        r = t.props,
                        o = void 0 === r ? {}: r,
                        u = t.methods,
                        c = void 0 === u ? {}: u,
                        f = t.init,
                        s = void 0 === f ?
                        function() {}: f,
                        l = t.update,
                        h = void 0 === l ?
                        function() {}: l,
                        d = Object.keys(o).map(function(t) {
                            return new a(t, o[t])
                        });
                        return function() {
                            function t(e) {
                                return a(e, n),
                                o(),
                                t
                            }
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = Object.assign({},
                            e, {
                                initialised: !1
                            }),
                            a = function(n, e) {
                                s.call(t, n, r, e),
                                r.initialised = !0
                            },
                            o = (0, i.
                        default)(function() {
                                r.initialised && h.call(t, r)
                            },
                            1);
                            return d.forEach(function(n) {
                                t[n.name] = function(n) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t, n) {};
                                    return function(a) {
                                        return arguments.length ? (r[n] = a, i.call(t, a, r), e && o(), t) : r[n]
                                    }
                                } (n.name, n.triggerUpdate, n.onChange)
                            }),
                            Object.keys(c).forEach(function(n) {
                                t[n] = function() {
                                    for (var e, i = arguments.length,
                                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                    return (e = c[n]).call.apply(e, [t, r].concat(a))
                                }
                            }),
                            t.resetProps = function() {
                                return d.forEach(function(n) {
                                    t[n.name](n.defaultVal)
                                }),
                                t
                            },
                            t.resetProps(),
                            r._rerender = o,
                            t
                        }
                    };
                    var i = function(t) {
                        return t && t.__esModule ? t: {
                        default:
                            t
                        }
                    } (e),
                    a = function t(n, e) {
                        var i = e.
                    default,
                        a = void 0 === i ? null: i,
                        o = e.triggerUpdate,
                        u = void 0 === o || o,
                        c = e.onChange,
                        f = void 0 === c ?
                        function(t, n) {}: c;
                        r(this, t),
                        this.name = n,
                        this.defaultVal = a,
                        this.triggerUpdate = u,
                        this.onChange = f
                    };
                    t.exports = n.
                default
                })
            },
            function(t, n) {
                t.exports = function(t, n, e) {
                    function r() {
                        var f = Date.now() - u;
                        f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                    }
                    var i, a, o, u, c;
                    null == n && (n = 100);
                    var f = function() {
                        o = this,
                        a = arguments,
                        u = Date.now();
                        var f = e && !i;
                        return i || (i = setTimeout(r, n)),
                        f && (c = t.apply(o, a), o = a = null),
                        c
                    };
                    return f.clear = function() {
                        i && (clearTimeout(i), i = null)
                    },
                    f
                }
            }])
        })
    }))),
    FU = "function" == typeof Symbol && "symbol" === km(Symbol.iterator) ?
    function(t) {
        return void 0 === t ? "undefined": km(t)
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": void 0 === t ? "undefined": km(t)
    },
    RU = (function() {
        function t(t) {
            this.value = t
        }
        function n(n) {
            function e(i, a) {
                try {
                    var o = n[i](a),
                    u = o.value;
                    u instanceof t ? Promise.resolve(u.value).then(function(t) {
                        e("next", t)
                    },
                    function(t) {
                        e("throw", t)
                    }) : r(o.done ? "return": "normal", o.value)
                } catch(t) {
                    r("throw", t)
                }
            }
            function r(t, n) {
                switch (t) {
                case "return":
                    i.resolve({
                        value:
                        n,
                        done: !0
                    });
                    break;
                case "throw":
                    i.reject(n);
                    break;
                default:
                    i.resolve({
                        value:
                        n,
                        done: !1
                    })
                } (i = i.next) ? e(i.key, i.arg) : a = null
            }
            var i, a;
            this._invoke = function(t, n) {
                return new Promise(function(r, o) {
                    var u = {
                        key: t,
                        arg: n,
                        resolve: r,
                        reject: o,
                        next: null
                    };
                    a ? a = a.next = u: (i = a = u, e(t, n))
                })
            },
            "function" != typeof n.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        n.prototype.next = function(t) {
            return this._invoke("next", t)
        },
        n.prototype.
        throw = function(t) {
            return this._invoke("throw", t)
        },
        n.prototype.
        return = function(t) {
            return this._invoke("return", t)
        }
    } (), Mg(function(t) { !
        function(n) {
            function e(t, n) {
                if (t = t || "", n = n || {},
                t instanceof e) return t;
                if (! (this instanceof e)) return new e(t, n);
                var i = r(t);
                this._originalInput = t,
                this._r = i.r,
                this._g = i.g,
                this._b = i.b,
                this._a = i.a,
                this._roundA = j(100 * this._a) / 100,
                this._format = n.format || i.format,
                this._gradientType = n.gradientType,
                this._r < 1 && (this._r = j(this._r)),
                this._g < 1 && (this._g = j(this._g)),
                this._b < 1 && (this._b = j(this._b)),
                this._ok = i.ok,
                this._tc_id = Y++
            }
            function r(t) {
                var n = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                e = 1,
                r = null,
                a = null,
                u = null,
                f = !1,
                s = !1;
                return "string" == typeof t && (t = F(t)),
                "object" == (void 0 === t ? "undefined": FU(t)) && (L(t.r) && L(t.g) && L(t.b) ? (n = i(t.r, t.g, t.b), f = !0, s = "%" === String(t.r).substr( - 1) ? "prgb": "rgb") : L(t.h) && L(t.s) && L(t.v) ? (r = z(t.s), a = z(t.v), n = c(t.h, r, a), f = !0, s = "hsv") : L(t.h) && L(t.s) && L(t.l) && (r = z(t.s), u = z(t.l), n = o(t.h, r, u), f = !0, s = "hsl"), t.hasOwnProperty("a") && (e = t.a)),
                e = A(e),
                {
                    ok: f,
                    format: t.format || s,
                    r: q(255, I(n.r, 0)),
                    g: q(255, I(n.g, 0)),
                    b: q(255, I(n.b, 0)),
                    a: e
                }
            }
            function i(t, n, e) {
                return {
                    r: 255 * T(t, 255),
                    g: 255 * T(n, 255),
                    b: 255 * T(e, 255)
                }
            }
            function a(t, n, e) {
                t = T(t, 255),
                n = T(n, 255),
                e = T(e, 255);
                var r, i, a = I(t, n, e),
                o = q(t, n, e),
                u = (a + o) / 2;
                if (a == o) r = i = 0;
                else {
                    var c = a - o;
                    switch (i = u > .5 ? c / (2 - a - o) : c / (a + o), a) {
                    case t:
                        r = (n - e) / c + (n < e ? 6 : 0);
                        break;
                    case n:
                        r = (e - t) / c + 2;
                        break;
                    case e:
                        r = (t - n) / c + 4
                    }
                    r /= 6
                }
                return {
                    h: r,
                    s: i,
                    l: u
                }
            }
            function o(t, n, e) {
                function r(t, n, e) {
                    return e < 0 && (e += 1),
                    e > 1 && (e -= 1),
                    e < 1 / 6 ? t + 6 * (n - t) * e: e < .5 ? n: e < 2 / 3 ? t + (n - t) * (2 / 3 - e) * 6 : t
                }
                var i, a, o;
                if (t = T(t, 360), n = T(n, 100), e = T(e, 100), 0 === n) i = a = o = e;
                else {
                    var u = e < .5 ? e * (1 + n) : e + n - e * n,
                    c = 2 * e - u;
                    i = r(c, u, t + 1 / 3),
                    a = r(c, u, t),
                    o = r(c, u, t - 1 / 3)
                }
                return {
                    r: 255 * i,
                    g: 255 * a,
                    b: 255 * o
                }
            }
            function u(t, n, e) {
                t = T(t, 255),
                n = T(n, 255),
                e = T(e, 255);
                var r, i, a = I(t, n, e),
                o = q(t, n, e),
                u = a,
                c = a - o;
                if (i = 0 === a ? 0 : c / a, a == o) r = 0;
                else {
                    switch (a) {
                    case t:
                        r = (n - e) / c + (n < e ? 6 : 0);
                        break;
                    case n:
                        r = (e - t) / c + 2;
                        break;
                    case e:
                        r = (t - n) / c + 4
                    }
                    r /= 6
                }
                return {
                    h: r,
                    s: i,
                    v: u
                }
            }
            function c(t, e, r) {
                t = 6 * T(t, 360),
                e = T(e, 100),
                r = T(r, 100);
                var i = n.floor(t),
                a = t - i,
                o = r * (1 - e),
                u = r * (1 - a * e),
                c = r * (1 - (1 - a) * e),
                f = i % 6;
                return {
                    r: 255 * [r, u, o, o, c, r][f],
                    g: 255 * [c, r, r, u, o, o][f],
                    b: 255 * [o, o, c, r, r, u][f]
                }
            }
            function f(t, n, e, r) {
                var i = [D(j(t).toString(16)), D(j(n).toString(16)), D(j(e).toString(16))];
                return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
            }
            function s(t, n, e, r, i) {
                var a = [D(j(t).toString(16)), D(j(n).toString(16)), D(j(e).toString(16)), D(U(r))];
                return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
            }
            function l(t, n, e, r) {
                return [D(U(r)), D(j(t).toString(16)), D(j(n).toString(16)), D(j(e).toString(16))].join("")
            }
            function h(t, n) {
                n = 0 === n ? 0 : n || 10;
                var r = e(t).toHsl();
                return r.s -= n / 100,
                r.s = k(r.s),
                e(r)
            }
            function d(t, n) {
                n = 0 === n ? 0 : n || 10;
                var r = e(t).toHsl();
                return r.s += n / 100,
                r.s = k(r.s),
                e(r)
            }
            function p(t) {
                return e(t).desaturate(100)
            }
            function g(t, n) {
                n = 0 === n ? 0 : n || 10;
                var r = e(t).toHsl();
                return r.l += n / 100,
                r.l = k(r.l),
                e(r)
            }
            function v(t, n) {
                n = 0 === n ? 0 : n || 10;
                var r = e(t).toRgb();
                return r.r = I(0, q(255, r.r - j( - n / 100 * 255))),
                r.g = I(0, q(255, r.g - j( - n / 100 * 255))),
                r.b = I(0, q(255, r.b - j( - n / 100 * 255))),
                e(r)
            }
            function y(t, n) {
                n = 0 === n ? 0 : n || 10;
                var r = e(t).toHsl();
                return r.l -= n / 100,
                r.l = k(r.l),
                e(r)
            }
            function b(t, n) {
                var r = e(t).toHsl(),
                i = (r.h + n) % 360;
                return r.h = i < 0 ? 360 + i: i,
                e(r)
            }
            function m(t) {
                var n = e(t).toHsl();
                return n.h = (n.h + 180) % 360,
                e(n)
            }
            function _(t) {
                var n = e(t).toHsl(),
                r = n.h;
                return [e(t), e({
                    h: (r + 120) % 360,
                    s: n.s,
                    l: n.l
                }), e({
                    h: (r + 240) % 360,
                    s: n.s,
                    l: n.l
                })]
            }
            function x(t) {
                var n = e(t).toHsl(),
                r = n.h;
                return [e(t), e({
                    h: (r + 90) % 360,
                    s: n.s,
                    l: n.l
                }), e({
                    h: (r + 180) % 360,
                    s: n.s,
                    l: n.l
                }), e({
                    h: (r + 270) % 360,
                    s: n.s,
                    l: n.l
                })]
            }
            function w(t) {
                var n = e(t).toHsl(),
                r = n.h;
                return [e(t), e({
                    h: (r + 72) % 360,
                    s: n.s,
                    l: n.l
                }), e({
                    h: (r + 216) % 360,
                    s: n.s,
                    l: n.l
                })]
            }
            function M(t, n, r) {
                n = n || 6,
                r = r || 30;
                var i = e(t).toHsl(),
                a = 360 / r,
                o = [e(t)];
                for (i.h = (i.h - (a * n >> 1) + 720) % 360; --n;) i.h = (i.h + a) % 360,
                o.push(e(i));
                return o
            }
            function S(t, n) {
                n = n || 6;
                for (var r = e(t).toHsv(), i = r.h, a = r.s, o = r.v, u = [], c = 1 / n; n--;) u.push(e({
                    h: i,
                    s: a,
                    v: o
                })),
                o = (o + c) % 1;
                return u
            }
            function A(t) {
                return t = parseFloat(t),
                (isNaN(t) || t < 0 || t > 1) && (t = 1),
                t
            }
            function T(t, e) {
                N(t) && (t = "100%");
                var r = E(t);
                return t = q(e, I(0, parseFloat(t))),
                r && (t = parseInt(t * e, 10) / 100),
                n.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
            }
            function k(t) {
                return q(1, I(0, t))
            }
            function C(t) {
                return parseInt(t, 16)
            }
            function N(t) {
                return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
            }
            function E(t) {
                return "string" == typeof t && -1 != t.indexOf("%")
            }
            function D(t) {
                return 1 == t.length ? "0" + t: "" + t
            }
            function z(t) {
                return t <= 1 && (t = 100 * t + "%"),
                t
            }
            function U(t) {
                return n.round(255 * parseFloat(t)).toString(16)
            }
            function P(t) {
                return C(t) / 255
            }
            function L(t) {
                return !! V.CSS_UNIT.exec(t)
            }
            function F(t) {
                t = t.replace(H, "").replace(O, "").toLowerCase();
                var n = !1;
                if (B[t]) t = B[t],
                n = !0;
                else if ("transparent" == t) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                var e;
                return (e = V.rgb.exec(t)) ? {
                    r: e[1],
                    g: e[2],
                    b: e[3]
                }: (e = V.rgba.exec(t)) ? {
                    r: e[1],
                    g: e[2],
                    b: e[3],
                    a: e[4]
                }: (e = V.hsl.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    l: e[3]
                }: (e = V.hsla.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    l: e[3],
                    a: e[4]
                }: (e = V.hsv.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    v: e[3]
                }: (e = V.hsva.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    v: e[3],
                    a: e[4]
                }: (e = V.hex8.exec(t)) ? {
                    r: C(e[1]),
                    g: C(e[2]),
                    b: C(e[3]),
                    a: P(e[4]),
                    format: n ? "name": "hex8"
                }: (e = V.hex6.exec(t)) ? {
                    r: C(e[1]),
                    g: C(e[2]),
                    b: C(e[3]),
                    format: n ? "name": "hex"
                }: (e = V.hex4.exec(t)) ? {
                    r: C(e[1] + "" + e[1]),
                    g: C(e[2] + "" + e[2]),
                    b: C(e[3] + "" + e[3]),
                    a: P(e[4] + "" + e[4]),
                    format: n ? "name": "hex8"
                }: !!(e = V.hex3.exec(t)) && {
                    r: C(e[1] + "" + e[1]),
                    g: C(e[2] + "" + e[2]),
                    b: C(e[3] + "" + e[3]),
                    format: n ? "name": "hex"
                }
            }
            function R(t) {
                var n, e;
                return t = t || {
                    level: "AA",
                    size: "small"
                },
                n = (t.level || "AA").toUpperCase(),
                e = (t.size || "small").toLowerCase(),
                "AA" !== n && "AAA" !== n && (n = "AA"),
                "small" !== e && "large" !== e && (e = "small"),
                {
                    level: n,
                    size: e
                }
            }
            var H = /^\s+/,
            O = /\s+$/,
            Y = 0,
            j = n.round,
            q = n.min,
            I = n.max,
            X = n.random;
            e.prototype = {
                isDark: function() {
                    return this.getBrightness() < 128
                },
                isLight: function() {
                    return ! this.isDark()
                },
                isValid: function() {
                    return this._ok
                },
                getOriginalInput: function() {
                    return this._originalInput
                },
                getFormat: function() {
                    return this._format
                },
                getAlpha: function() {
                    return this._a
                },
                getBrightness: function() {
                    var t = this.toRgb();
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
                },
                getLuminance: function() {
                    var t, e, r, i, a, o, u = this.toRgb();
                    return t = u.r / 255,
                    e = u.g / 255,
                    r = u.b / 255,
                    i = t <= .03928 ? t / 12.92 : n.pow((t + .055) / 1.055, 2.4),
                    a = e <= .03928 ? e / 12.92 : n.pow((e + .055) / 1.055, 2.4),
                    o = r <= .03928 ? r / 12.92 : n.pow((r + .055) / 1.055, 2.4),
                    .2126 * i + .7152 * a + .0722 * o
                },
                setAlpha: function(t) {
                    return this._a = A(t),
                    this._roundA = j(100 * this._a) / 100,
                    this
                },
                toHsv: function() {
                    var t = u(this._r, this._g, this._b);
                    return {
                        h: 360 * t.h,
                        s: t.s,
                        v: t.v,
                        a: this._a
                    }
                },
                toHsvString: function() {
                    var t = u(this._r, this._g, this._b),
                    n = j(360 * t.h),
                    e = j(100 * t.s),
                    r = j(100 * t.v);
                    return 1 == this._a ? "hsv(" + n + ", " + e + "%, " + r + "%)": "hsva(" + n + ", " + e + "%, " + r + "%, " + this._roundA + ")"
                },
                toHsl: function() {
                    var t = a(this._r, this._g, this._b);
                    return {
                        h: 360 * t.h,
                        s: t.s,
                        l: t.l,
                        a: this._a
                    }
                },
                toHslString: function() {
                    var t = a(this._r, this._g, this._b),
                    n = j(360 * t.h),
                    e = j(100 * t.s),
                    r = j(100 * t.l);
                    return 1 == this._a ? "hsl(" + n + ", " + e + "%, " + r + "%)": "hsla(" + n + ", " + e + "%, " + r + "%, " + this._roundA + ")"
                },
                toHex: function(t) {
                    return f(this._r, this._g, this._b, t)
                },
                toHexString: function(t) {
                    return "#" + this.toHex(t)
                },
                toHex8: function(t) {
                    return s(this._r, this._g, this._b, this._a, t)
                },
                toHex8String: function(t) {
                    return "#" + this.toHex8(t)
                },
                toRgb: function() {
                    return {
                        r: j(this._r),
                        g: j(this._g),
                        b: j(this._b),
                        a: this._a
                    }
                },
                toRgbString: function() {
                    return 1 == this._a ? "rgb(" + j(this._r) + ", " + j(this._g) + ", " + j(this._b) + ")": "rgba(" + j(this._r) + ", " + j(this._g) + ", " + j(this._b) + ", " + this._roundA + ")"
                },
                toPercentageRgb: function() {
                    return {
                        r: j(100 * T(this._r, 255)) + "%",
                        g: j(100 * T(this._g, 255)) + "%",
                        b: j(100 * T(this._b, 255)) + "%",
                        a: this._a
                    }
                },
                toPercentageRgbString: function() {
                    return 1 == this._a ? "rgb(" + j(100 * T(this._r, 255)) + "%, " + j(100 * T(this._g, 255)) + "%, " + j(100 * T(this._b, 255)) + "%)": "rgba(" + j(100 * T(this._r, 255)) + "%, " + j(100 * T(this._g, 255)) + "%, " + j(100 * T(this._b, 255)) + "%, " + this._roundA + ")"
                },
                toName: function() {
                    return 0 === this._a ? "transparent": !(this._a < 1) && (W[f(this._r, this._g, this._b, !0)] || !1)
                },
                toFilter: function(t) {
                    var n = "#" + l(this._r, this._g, this._b, this._a),
                    r = n,
                    i = this._gradientType ? "GradientType = 1, ": "";
                    if (t) {
                        var a = e(t);
                        r = "#" + l(a._r, a._g, a._b, a._a)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + n + ",endColorstr=" + r + ")"
                },
                toString: function(t) {
                    var n = !!t;
                    t = t || this._format;
                    var e = !1,
                    r = this._a < 1 && this._a >= 0;
                    return n || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (e = this.toRgbString()), "prgb" === t && (e = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (e = this.toHexString()), "hex3" === t && (e = this.toHexString(!0)), "hex4" === t && (e = this.toHex8String(!0)), "hex8" === t && (e = this.toHex8String()), "name" === t && (e = this.toName()), "hsl" === t && (e = this.toHslString()), "hsv" === t && (e = this.toHsvString()), e || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
                },
                clone: function() {
                    return e(this.toString())
                },
                _applyModification: function(t, n) {
                    var e = t.apply(null, [this].concat([].slice.call(n)));
                    return this._r = e._r,
                    this._g = e._g,
                    this._b = e._b,
                    this.setAlpha(e._a),
                    this
                },
                lighten: function() {
                    return this._applyModification(g, arguments)
                },
                brighten: function() {
                    return this._applyModification(v, arguments)
                },
                darken: function() {
                    return this._applyModification(y, arguments)
                },
                desaturate: function() {
                    return this._applyModification(h, arguments)
                },
                saturate: function() {
                    return this._applyModification(d, arguments)
                },
                greyscale: function() {
                    return this._applyModification(p, arguments)
                },
                spin: function() {
                    return this._applyModification(b, arguments)
                },
                _applyCombination: function(t, n) {
                    return t.apply(null, [this].concat([].slice.call(n)))
                },
                analogous: function() {
                    return this._applyCombination(M, arguments)
                },
                complement: function() {
                    return this._applyCombination(m, arguments)
                },
                monochromatic: function() {
                    return this._applyCombination(S, arguments)
                },
                splitcomplement: function() {
                    return this._applyCombination(w, arguments)
                },
                triad: function() {
                    return this._applyCombination(_, arguments)
                },
                tetrad: function() {
                    return this._applyCombination(x, arguments)
                }
            },
            e.fromRatio = function(t, n) {
                if ("object" == (void 0 === t ? "undefined": FU(t))) {
                    var r = {};
                    for (var i in t) t.hasOwnProperty(i) && (r[i] = "a" === i ? t[i] : z(t[i]));
                    t = r
                }
                return e(t, n)
            },
            e.equals = function(t, n) {
                return ! (!t || !n) && e(t).toRgbString() == e(n).toRgbString()
            },
            e.random = function() {
                return e.fromRatio({
                    r: X(),
                    g: X(),
                    b: X()
                })
            },
            e.mix = function(t, n, r) {
                r = 0 === r ? 0 : r || 50;
                var i = e(t).toRgb(),
                a = e(n).toRgb(),
                o = r / 100;
                return e({
                    r: (a.r - i.r) * o + i.r,
                    g: (a.g - i.g) * o + i.g,
                    b: (a.b - i.b) * o + i.b,
                    a: (a.a - i.a) * o + i.a
                })
            },
            e.readability = function(t, r) {
                var i = e(t),
                a = e(r);
                return (n.max(i.getLuminance(), a.getLuminance()) + .05) / (n.min(i.getLuminance(), a.getLuminance()) + .05)
            },
            e.isReadable = function(t, n, r) {
                var i, a, o = e.readability(t, n);
                switch (a = !1, (i = R(r)).level + i.size) {
                case "AAsmall":
                case "AAAlarge":
                    a = o >= 4.5;
                    break;
                case "AAlarge":
                    a = o >= 3;
                    break;
                case "AAAsmall":
                    a = o >= 7
                }
                return a
            },
            e.mostReadable = function(t, n, r) {
                var i, a, o, u, c = null,
                f = 0;
                a = (r = r || {}).includeFallbackColors,
                o = r.level,
                u = r.size;
                for (var s = 0; s < n.length; s++)(i = e.readability(t, n[s])) > f && (f = i, c = e(n[s]));
                return e.isReadable(t, c, {
                    level: o,
                    size: u
                }) || !a ? c: (r.includeFallbackColors = !1, e.mostReadable(t, ["#fff", "#000"], r))
            };
            var B = e.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            W = e.hexNames = function(t) {
                var n = {};
                for (var e in t) t.hasOwnProperty(e) && (n[t[e]] = e);
                return n
            } (B),
            V = function() {
                var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
                e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
                return {
                    CSS_UNIT: new RegExp(t),
                    rgb: new RegExp("rgb" + n),
                    rgba: new RegExp("rgba" + e),
                    hsl: new RegExp("hsl" + n),
                    hsla: new RegExp("hsla" + e),
                    hsv: new RegExp("hsv" + n),
                    hsva: new RegExp("hsva" + e),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            } ();
            t.exports ? t.exports = e: window.tinycolor = e
        } (Math)
    })),
    HU = ("undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self && self,
    function(t) {
        return t && t.__esModule ? t.
    default:
        t
    } (function(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    } (function(t, n) { !
        function(n, e) {
            t.exports = e()
        } (0,
        function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                var e = {};
                return n.m = t,
                n.c = e,
                n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                },
                n.n = function(t) {
                    var e = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return n.d(e, "a", e),
                    e
                },
                n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(t, n, e) {
                var r, i, a; !
                function(o, u) {
                    i = [t, n, e(1)],
                    void 0 !== (a = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = a)
                } (0,
                function(t, n, e) {
                    function r(t, n) {
                        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.
                default = function(t) {
                        var n = t.stateInit,
                        e = void 0 === n ? {}: n,
                        r = t.props,
                        o = void 0 === r ? {}: r,
                        u = t.methods,
                        c = void 0 === u ? {}: u,
                        f = t.init,
                        s = void 0 === f ?
                        function() {}: f,
                        l = t.update,
                        h = void 0 === l ?
                        function() {}: l,
                        d = Object.keys(o).map(function(t) {
                            return new a(t, o[t])
                        });
                        return function() {
                            function t(e) {
                                return a(e, n),
                                o(),
                                t
                            }
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = Object.assign({},
                            e, {
                                initialised: !1
                            }),
                            a = function(n, e) {
                                s.call(t, n, r, e),
                                r.initialised = !0
                            },
                            o = (0, i.
                        default)(function() {
                                r.initialised && h.call(t, r)
                            },
                            1);
                            return d.forEach(function(n) {
                                t[n.name] = function(n) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t, n) {};
                                    return function(a) {
                                        return arguments.length ? (r[n] = a, i.call(t, a, r), e && o(), t) : r[n]
                                    }
                                } (n.name, n.triggerUpdate, n.onChange)
                            }),
                            Object.keys(c).forEach(function(n) {
                                t[n] = function() {
                                    for (var e, i = arguments.length,
                                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                    return (e = c[n]).call.apply(e, [t, r].concat(a))
                                }
                            }),
                            t.resetProps = function() {
                                return d.forEach(function(n) {
                                    t[n.name](n.defaultVal)
                                }),
                                t
                            },
                            t.resetProps(),
                            r._rerender = o,
                            t
                        }
                    };
                    var i = function(t) {
                        return t && t.__esModule ? t: {
                        default:
                            t
                        }
                    } (e),
                    a = function t(n, e) {
                        var i = e.
                    default,
                        a = void 0 === i ? null: i,
                        o = e.triggerUpdate,
                        u = void 0 === o || o,
                        c = e.onChange,
                        f = void 0 === c ?
                        function(t, n) {}: c;
                        r(this, t),
                        this.name = n,
                        this.defaultVal = a,
                        this.triggerUpdate = u,
                        this.onChange = f
                    };
                    t.exports = n.
                default
                })
            },
            function(t, n) {
                t.exports = function(t, n, e) {
                    function r() {
                        var f = Date.now() - u;
                        f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                    }
                    var i, a, o, u, c;
                    null == n && (n = 100);
                    var f = function() {
                        o = this,
                        a = arguments,
                        u = Date.now();
                        var f = e && !i;
                        return i || (i = setTimeout(r, n)),
                        f && (c = t.apply(o, a), o = a = null),
                        c
                    };
                    return f.clear = function() {
                        i && (clearTimeout(i), i = null)
                    },
                    f
                }
            }])
        })
    }))),
    OU = (function() {
        function t(t) {
            this.value = t
        }
        function n(n) {
            function e(i, a) {
                try {
                    var o = n[i](a),
                    u = o.value;
                    u instanceof t ? Promise.resolve(u.value).then(function(t) {
                        e("next", t)
                    },
                    function(t) {
                        e("throw", t)
                    }) : r(o.done ? "return": "normal", o.value)
                } catch(t) {
                    r("throw", t)
                }
            }
            function r(t, n) {
                switch (t) {
                case "return":
                    i.resolve({
                        value:
                        n,
                        done: !0
                    });
                    break;
                case "throw":
                    i.reject(n);
                    break;
                default:
                    i.resolve({
                        value:
                        n,
                        done: !1
                    })
                } (i = i.next) ? e(i.key, i.arg) : a = null
            }
            var i, a;
            this._invoke = function(t, n) {
                return new Promise(function(r, o) {
                    var u = {
                        key: t,
                        arg: n,
                        resolve: r,
                        reject: o,
                        next: null
                    };
                    a ? a = a.next = u: (i = a = u, e(t, n))
                })
            },
            "function" != typeof n.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        n.prototype.next = function(t) {
            return this._invoke("next", t)
        },
        n.prototype.
        throw = function(t) {
            return this._invoke("throw", t)
        },
        n.prototype.
        return = function(t) {
            return this._invoke("return", t)
        }
    } (),
    function(t) {
        if (Array.isArray(t)) {
            for (var n = 0,
            e = Array(t.length); n < t.length; n++) e[n] = t[n];
            return e
        }
        return Array.from(t)
    }),
    YU = HU({
        props: {
            bbox: {
            default:
                {
                    width:
                    null,
                    height: null
                }
            },
            passes: {
            default:
                3
            }
        },
        init: function(t, n) {
            n.el = t
        },
        update: function(t) { [].concat(OU(Array(t.passes).keys())).some(function() {
                var n = parseInt(t.el.style["font-size"].split("px")[0]) || 20,
                e = t.el.getBBox(),
                r = Math.floor(n * Math.min(t.bbox.width / e.width, t.bbox.height / e.height));
                if (r === n) return ! 0;
                t.el.style["font-size"] = r + "px"
            })
        }
    }),
    jU = (HU({
        props: {
            maxWidth: {
            default:
                1 / 0
            }
        },
        init: function(t, n) {
            n.el = t
        },
        update: function(t) {
            for (var n = t.el.textContent,
            e = Math.round(n.length * t.maxWidth / t.el.getBBox().width * 1.2); --e && t.maxWidth / t.el.getBBox().width < 1;) t.el.textContent = function(t, n) {
                return t.length <= n ? t: t.substring(0, 2 * n / 3) + "..." + t.substring(t.length - n / 3, t.length)
            } (n, e)
        }
    }), "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self && self,
    function(t) {
        return t && t.__esModule ? t.
    default:
        t
    } (function(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    } (function(t, n) { !
        function(n, e) {
            t.exports = e()
        } (0,
        function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                var e = {};
                return n.m = t,
                n.c = e,
                n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                },
                n.n = function(t) {
                    var e = t && t.__esModule ?
                    function() {
                        return t.
                    default
                    }:
                    function() {
                        return t
                    };
                    return n.d(e, "a", e),
                    e
                },
                n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                },
                n.p = "",
                n(n.s = 0)
            } ([function(t, n, e) {
                var r, i, a; !
                function(o, u) {
                    i = [t, n, e(1)],
                    void 0 !== (a = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = a)
                } (0,
                function(t, n, e) {
                    function r(t, n) {
                        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.
                default = function(t) {
                        var n = t.stateInit,
                        e = void 0 === n ? {}: n,
                        r = t.props,
                        o = void 0 === r ? {}: r,
                        u = t.methods,
                        c = void 0 === u ? {}: u,
                        f = t.init,
                        s = void 0 === f ?
                        function() {}: f,
                        l = t.update,
                        h = void 0 === l ?
                        function() {}: l,
                        d = Object.keys(o).map(function(t) {
                            return new a(t, o[t])
                        });
                        return function() {
                            function t(e) {
                                return a(e, n),
                                o(),
                                t
                            }
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = Object.assign({},
                            e, {
                                initialised: !1
                            }),
                            a = function(n, e) {
                                s.call(t, n, r, e),
                                r.initialised = !0
                            },
                            o = (0, i.
                        default)(function() {
                                r.initialised && h.call(t, r)
                            },
                            1);
                            return d.forEach(function(n) {
                                t[n.name] = function(n) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t, n) {};
                                    return function(a) {
                                        return arguments.length ? (r[n] = a, i.call(t, a, r), e && o(), t) : r[n]
                                    }
                                } (n.name, n.triggerUpdate, n.onChange)
                            }),
                            Object.keys(c).forEach(function(n) {
                                t[n] = function() {
                                    for (var e, i = arguments.length,
                                    a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                    return (e = c[n]).call.apply(e, [t, r].concat(a))
                                }
                            }),
                            t.resetProps = function() {
                                return d.forEach(function(n) {
                                    t[n.name](n.defaultVal)
                                }),
                                t
                            },
                            t.resetProps(),
                            r._rerender = o,
                            t
                        }
                    };
                    var i = function(t) {
                        return t && t.__esModule ? t: {
                        default:
                            t
                        }
                    } (e),
                    a = function t(n, e) {
                        var i = e.
                    default,
                        a = void 0 === i ? null: i,
                        o = e.triggerUpdate,
                        u = void 0 === o || o,
                        c = e.onChange,
                        f = void 0 === c ?
                        function(t, n) {}: c;
                        r(this, t),
                        this.name = n,
                        this.defaultVal = a,
                        this.triggerUpdate = u,
                        this.onChange = f
                    };
                    t.exports = n.
                default
                })
            },
            function(t, n) {
                t.exports = function(t, n, e) {
                    function r() {
                        var f = Date.now() - u;
                        f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                    }
                    var i, a, o, u, c;
                    null == n && (n = 100);
                    var f = function() {
                        o = this,
                        a = arguments,
                        u = Date.now();
                        var f = e && !i;
                        return i || (i = setTimeout(r, n)),
                        f && (c = t.apply(o, a), o = a = null),
                        c
                    };
                    return f.clear = function() {
                        i && (clearTimeout(i), i = null)
                    },
                    f
                }
            }])
        })
    }))),
    qU = (jU({
        init: function(t) {
            t.parentNode.appendChild(t)
        }
    }),
    function(t, n, e) {
        t = +t,
        n = +n,
        e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1,
        i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;) a[r] = t + r * e;
        return a
    }),
    IU = {
        value: function() {}
    };
    Ag.prototype = Sg.prototype = {
        constructor: Ag,
        on: function(t, n) {
            var e, r = this._,
            i = Tg(t + "", r),
            a = -1,
            o = i.length; {
                if (! (arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++a < o;) if (e = (t = i[a]).type) r[e] = Cg(r[e], t.name, n);
                    else if (null == n) for (e in r) r[e] = Cg(r[e], t.name, null);
                    return this
                }
                for (; ++a < o;) if ((e = (t = i[a]).type) && (e = kg(r[e], t.name))) return e
            }
        },
        copy: function() {
            var t = {},
            n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new Ag(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
        }
    };
    var XU = "http://www.w3.org/1999/xhtml",
    BU = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: XU,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    },
    WU = function(t) {
        var n = t += "",
        e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        BU.hasOwnProperty(n) ? {
            space: BU[n],
            local: t
        }: t
    },
    VU = function(t) {
        var n = WU(t);
        return (n.local ? Eg: Ng)(n)
    },
    $U = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var ZU = document.documentElement;
        if (!ZU.matches) {
            var GU = ZU.webkitMatchesSelector || ZU.msMatchesSelector || ZU.mozMatchesSelector || ZU.oMatchesSelector;
            $U = function(t) {
                return function() {
                    return GU.call(this, t)
                }
            }
        }
    }
    var JU = $U,
    QU = {};
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (QU = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    var KU = function(t) {
        return null == t ? Fg: function() {
            return this.querySelector(t)
        }
    },
    tP = function(t) {
        return null == t ? Rg: function() {
            return this.querySelectorAll(t)
        }
    },
    nP = function(t) {
        return new Array(t.length)
    };
    Hg.prototype = {
        constructor: Hg,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var eP = function(t) {
        return function() {
            return t
        }
    },
    rP = "$",
    iP = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    rv.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var aP = [null];
    wv.prototype = Mv.prototype = {
        constructor: wv,
        select: function(t) {
            "function" != typeof t && (t = KU(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (o = t.call(a, a.__data__, s, u)) && ("__data__" in a && (o.__data__ = a.__data__), f[s] = o);
            return new wv(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = tP(t));
            for (var n = this._groups,
            e = n.length,
            r = [], i = [], a = 0; a < e; ++a) for (var o, u = n[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && (r.push(t.call(o, o.__data__, f, u)), i.push(o));
            return new wv(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = JU(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new wv(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return d = new Array(this.size()),
            f = -1,
            this.each(function(t) {
                d[++f] = t
            }),
            d;
            var e = n ? Yg: Og,
            r = this._parents,
            i = this._groups;
            "function" != typeof t && (t = eP(t));
            for (var a = i.length,
            o = new Array(a), u = new Array(a), c = new Array(a), f = 0; f < a; ++f) {
                var s = r[f],
                l = i[f],
                h = l.length,
                d = t.call(s, s && s.__data__, f, r),
                p = d.length,
                g = u[f] = new Array(p),
                v = o[f] = new Array(p);
                e(s, l, g, v, c[f] = new Array(h), d, n);
                for (var y, b, m = 0,
                _ = 0; m < p; ++m) if (y = g[m]) {
                    for (m >= _ && (_ = m + 1); ! (b = v[_]) && ++_ < p;);
                    y._next = b || null
                }
            }
            return o = new wv(o, r),
            o._enter = u,
            o._exit = c,
            o
        },
        enter: function() {
            return new wv(this._enter || this._groups.map(nP), this._parents)
        },
        exit: function() {
            return new wv(this._exit || this._groups.map(nP), this._parents)
        },
        merge: function(t) {
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new wv(o, this._parents)
        },
        order: function() {
            for (var t = this._groups,
            n = -1,
            e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            return this
        },
        sort: function(t) {
            t || (t = jg);
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) {
                for (var a, o = n[i], u = o.length, c = r[i] = new Array(u), f = 0; f < u; ++f)(a = o[f]) && (c[f] = a);
                c.sort(function(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                })
            }
            return new wv(r, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size()),
            n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups,
            n = 0,
            e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o
            }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {++t
            }),
            t
        },
        empty: function() {
            return ! this.node()
        },
        each: function(t) {
            for (var n = this._groups,
            e = 0,
            r = n.length; e < r; ++e) for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
            return this
        },
        attr: function(t, n) {
            var e = WU(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? Ig: qg: "function" == typeof n ? e.local ? Vg: Wg: e.local ? Bg: Xg)(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? $g: "function" == typeof n ? Gg: Zg)(t, n, null == e ? "": e)) : Jg(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? Qg: "function" == typeof n ? tv: Kg)(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = nv(t + "");
            if (arguments.length < 2) {
                for (var r = ev(this.node()), i = -1, a = e.length; ++i < a;) if (!r.contains(e[i])) return ! 1;
                return ! 0
            }
            return this.each(("function" == typeof n ? cv: n ? ov: uv)(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? fv: ("function" == typeof t ? lv: sv)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? hv: ("function" == typeof t ? pv: dv)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(gv)
        },
        lower: function() {
            return this.each(vv)
        },
        append: function(t) {
            var n = "function" == typeof t ? t: VU(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t: VU(t),
            r = null == n ? yv: "function" == typeof n ? n: KU(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(bv)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, a = Ug(t + ""),
            o = a.length; {
                if (! (arguments.length < 2)) {
                    for (u = n ? Lg: Pg, null == e && (e = !1), r = 0; r < o; ++r) this.each(u(a[r], n, e));
                    return this
                }
                var u = this.node().__on;
                if (u) for (var c, f = 0,
                s = u.length; f < s; ++f) for (r = 0, c = u[f]; r < o; ++r) if ((i = a[r]).type === c.type && i.name === c.name) return c.value
            }
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ? xv: _v)(t, n))
        }
    };
    var oP = function(t) {
        return "string" == typeof t ? new wv([[document.querySelector(t)]], [document.documentElement]) : new wv([[t]], aP)
    }; (function(t, n, e, r, i, a, o, u, c, f) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = o,
        this.dx = u,
        this.dy = c,
        this._ = f
    }).prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var uP = function(t, n, e) {
        t.prototype = n.prototype = e,
        e.constructor = t
    },
    cP = "\\s*([+-]?\\d+)\\s*",
    fP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    sP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    lP = /^#([0-9a-f]{3})$/,
    hP = /^#([0-9a-f]{6})$/,
    dP = new RegExp("^rgb\\(" + [cP, cP, cP] + "\\)$"),
    pP = new RegExp("^rgb\\(" + [sP, sP, sP] + "\\)$"),
    gP = new RegExp("^rgba\\(" + [cP, cP, cP, fP] + "\\)$"),
    vP = new RegExp("^rgba\\(" + [sP, sP, sP, fP] + "\\)$"),
    yP = new RegExp("^hsl\\(" + [fP, sP, sP] + "\\)$"),
    bP = new RegExp("^hsla\\(" + [fP, sP, sP, fP] + "\\)$"),
    mP = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    uP(Av, Tv, {
        displayable: function() {
            return this.rgb().displayable()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }),
    uP(Dv, Ev, Sv(Av, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Dv(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Dv(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        toString: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(": "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")": ", " + t + ")")
        }
    })),
    uP(Pv,
    function(t, n, e, r) {
        return 1 === arguments.length ? Uv(t) : new Pv(t, n, e, null == r ? 1 : r)
    },
    Sv(Av, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Pv(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Pv(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < .5 ? e: 1 - e) * n,
            i = 2 * e - r;
            return new Dv(Lv(t >= 240 ? t - 240 : t + 120, i, r), Lv(t, i, r), Lv(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var _P = Math.PI / 180,
    xP = 180 / Math.PI,
    wP = .95047,
    MP = 1,
    SP = 1.08883,
    AP = 4 / 29,
    TP = 6 / 29,
    kP = 3 * TP * TP,
    CP = TP * TP * TP;
    uP(Rv,
    function(t, n, e, r) {
        return 1 === arguments.length ? Fv(t) : new Rv(t, n, e, null == r ? 1 : r)
    },
    Sv(Av, {
        brighter: function(t) {
            return new Rv(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new Rv(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t: t + this.a / 500,
            e = isNaN(this.b) ? t: t - this.b / 200;
            return t = MP * Ov(t),
            n = wP * Ov(n),
            e = SP * Ov(e),
            new Dv(Yv(3.2404542 * n - 1.5371385 * t - .4985314 * e), Yv( - .969266 * n + 1.8760108 * t + .041556 * e), Yv(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })),
    uP(Iv,
    function(t, n, e, r) {
        return 1 === arguments.length ? qv(t) : new Iv(t, n, e, null == r ? 1 : r)
    },
    Sv(Av, {
        brighter: function(t) {
            return new Iv(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new Iv(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return Fv(this).rgb()
        }
    }));
    var NP = -.29227,
    EP = -.90649,
    DP = 1.97294,
    zP = DP * EP,
    UP = 1.78277 * DP,
    PP = 1.78277 * NP - -.14861 * EP;
    uP(Wv, Bv, Sv(Av, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Wv(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Wv(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * _P,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
            return new Dv(255 * (n + e * ( - .14861 * r + 1.78277 * i)), 255 * (n + e * (NP * r + EP * i)), 255 * (n + e * (DP * r)), this.opacity)
        }
    }));
    var LP, FP, RP, HP, OP = function(t) {
        return function() {
            return t
        }
    },
    YP = function t(n) {
        function e(t, n) {
            var e = r((t = Ev(t)).r, (n = Ev(n)).r),
            i = r(t.g, n.g),
            a = r(t.b, n.b),
            o = Gv(t.opacity, n.opacity);
            return function(n) {
                return t.r = e(n),
                t.g = i(n),
                t.b = a(n),
                t.opacity = o(n),
                t + ""
            }
        }
        var r = Zv(n);
        return e.gamma = t,
        e
    } (1),
    jP = function(t, n) {
        var e, r = n ? n.length: 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(r),
        o = new Array(r);
        for (e = 0; e < i; ++e) a[e] = ZP(t[e], n[e]);
        for (; e < r; ++e) o[e] = n[e];
        return function(t) {
            for (e = 0; e < i; ++e) o[e] = a[e](t);
            return o
        }
    },
    qP = function(t, n) {
        var e = new Date;
        return t = +t,
        n -= t,
        function(r) {
            return e.setTime(t + n * r),
            e
        }
    },
    IP = function(t, n) {
        return t = +t,
        n -= t,
        function(e) {
            return t + n * e
        }
    },
    XP = "function" == typeof Symbol && "symbol" === FU(Symbol.iterator) ?
    function(t) {
        return void 0 === t ? "undefined": FU(t)
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": void 0 === t ? "undefined": FU(t)
    },
    BP = (function() {
        function t(t) {
            this.value = t
        }
        function n(n) {
            function e(i, a) {
                try {
                    var o = n[i](a),
                    u = o.value;
                    u instanceof t ? Promise.resolve(u.value).then(function(t) {
                        e("next", t)
                    },
                    function(t) {
                        e("throw", t)
                    }) : r(o.done ? "return": "normal", o.value)
                } catch(t) {
                    r("throw", t)
                }
            }
            function r(t, n) {
                switch (t) {
                case "return":
                    i.resolve({
                        value:
                        n,
                        done: !0
                    });
                    break;
                case "throw":
                    i.reject(n);
                    break;
                default:
                    i.resolve({
                        value:
                        n,
                        done: !1
                    })
                } (i = i.next) ? e(i.key, i.arg) : a = null
            }
            var i, a;
            this._invoke = function(t, n) {
                return new Promise(function(r, o) {
                    var u = {
                        key: t,
                        arg: n,
                        resolve: r,
                        reject: o,
                        next: null
                    };
                    a ? a = a.next = u: (i = a = u, e(t, n))
                })
            },
            "function" != typeof n.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        n.prototype.next = function(t) {
            return this._invoke("next", t)
        },
        n.prototype.
        throw = function(t) {
            return this._invoke("throw", t)
        },
        n.prototype.
        return = function(t) {
            return this._invoke("return", t)
        }
    } (),
    function(t, n) {
        var e, r = {},
        i = {};
        null !== t && "object" === (void 0 === t ? "undefined": XP(t)) || (t = {}),
        null !== n && "object" === (void 0 === n ? "undefined": XP(n)) || (n = {});
        for (e in n) e in t ? r[e] = ZP(t[e], n[e]) : i[e] = n[e];
        return function(t) {
            for (e in r) i[e] = r[e](t);
            return i
        }
    }),
    WP = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    VP = new RegExp(WP.source, "g"),
    $P = function(t, n) {
        var e, r, i, a = WP.lastIndex = VP.lastIndex = 0,
        o = -1,
        u = [],
        c = [];
        for (t += "", n += ""; (e = WP.exec(t)) && (r = VP.exec(n));)(i = r.index) > a && (i = n.slice(a, i), u[o] ? u[o] += i: u[++o] = i),
        (e = e[0]) === (r = r[0]) ? u[o] ? u[o] += r: u[++o] = r: (u[++o] = null, c.push({
            i: o,
            x: IP(e, r)
        })),
        a = VP.lastIndex;
        return a < n.length && (i = n.slice(a), u[o] ? u[o] += i: u[++o] = i),
        u.length < 2 ? c[0] ? Qv(c[0].x) : Jv(n) : (n = c.length,
        function(t) {
            for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
            return u.join("")
        })
    },
    ZP = function(t, n) {
        var e, r = void 0 === n ? "undefined": XP(n);
        return null == n || "boolean" === r ? OP(n) : ("number" === r ? IP: "string" === r ? (e = Tv(n)) ? (n = e, YP) : $P: n instanceof Tv ? YP: n instanceof Date ? qP: Array.isArray(n) ? jP: "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? BP: IP)(t, n)
    },
    GP = function(t, n) {
        return t = +t,
        n -= t,
        function(e) {
            return Math.round(t + n * e)
        }
    },
    JP = 180 / Math.PI,
    QP = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    },
    KP = function(t, n, e, r, i, a) {
        var o, u, c;
        return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o),
        (c = t * e + n * r) && (e -= t * c, r -= n * c),
        (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u),
        t * r < n * e && (t = -t, n = -n, c = -c, o = -o),
        {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(n, t) * JP,
            skewX: Math.atan(c) * JP,
            scaleX: o,
            scaleY: u
        }
    },
    tL = Kv(function(t) {
        return "none" === t ? QP: (LP || (LP = document.createElement("DIV"), FP = document.documentElement, RP = document.defaultView), LP.style.transform = t, t = RP.getComputedStyle(FP.appendChild(LP), null).getPropertyValue("transform"), FP.removeChild(LP), t = t.slice(7, -1).split(","), KP( + t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    },
    "px, ", "px)", "deg)"),
    nL = Kv(function(t) {
        return null == t ? QP: (HP || (HP = document.createElementNS("http://www.w3.org/2000/svg", "g")), HP.setAttribute("transform", t), (t = HP.transform.baseVal.consolidate()) ? (t = t.matrix, KP(t.a, t.b, t.c, t.d, t.e, t.f)) : QP)
    },
    ", ", ")", ")");
    ty(function(t, n) {
        var e = n - t;
        return e ? Vv(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : OP(isNaN(t) ? n: t)
    });
    var eL, rL, iL = ty(Gv),
    aL = 0,
    oL = 0,
    uL = 0,
    cL = 1e3,
    fL = 0,
    sL = 0,
    lL = 0,
    hL = "object" === ("undefined" == typeof performance ? "undefined": XP(performance)) && performance.now ? performance: Date,
    dL = "object" === ("undefined" == typeof window ? "undefined": XP(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };
    ry.prototype = iy.prototype = {
        constructor: ry,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? ny() : +e) + (null == n ? 0 : +n),
            this._next || rL === this || (rL ? rL._next = this: eL = this, rL = this),
            this._call = t,
            this._time = e,
            fy()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, fy())
        }
    };
    var pL = function(t, n, e) {
        var r = new ry;
        return n = null == n ? 0 : +n,
        r.restart(function(e) {
            r.stop(),
            t(e + n)
        },
        n, e),
        r
    },
    gL = Sg("start", "end", "interrupt"),
    vL = [],
    yL = 0,
    bL = 1,
    mL = 2,
    _L = 3,
    xL = 4,
    wL = 5,
    ML = 6,
    SL = function(t, n, e, r, i, a) {
        var o = t.__transition;
        if (o) {
            if (e in o) return
        } else t.__transition = {};
        dy(t, e, {
            name: n,
            index: r,
            group: i,
            on: gL,
            tween: vL,
            time: a.time,
            delay: a.delay,
            duration: a.duration,
            ease: a.ease,
            timer: null,
            state: yL
        })
    },
    AL = function(t, n) {
        var e, r, i, a = t.__transition,
        o = !0;
        if (a) {
            n = null == n ? null: n + "";
            for (i in a)(e = a[i]).name === n ? (r = e.state > mL && e.state < wL, e.state = ML, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[i]) : o = !1;
            o && delete t.__transition
        }
    },
    TL = function(t, n) {
        var e;
        return ("number" == typeof n ? IP: n instanceof Tv ? YP: (e = Tv(n)) ? (n = e, YP) : $P)(t, n)
    },
    kL = Mv.prototype.constructor,
    CL = 0,
    NL = Mv.prototype;
    Yy.prototype = function(t) {
        return Mv().transition(t)
    }.prototype = {
        constructor: Yy,
        select: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = KU(t));
            for (var r = this._groups,
            i = r.length,
            a = new Array(i), o = 0; o < i; ++o) for (var u, c, f = r[o], s = f.length, l = a[o] = new Array(s), h = 0; h < s; ++h)(u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, SL(l[h], n, e, h, l, hy(u, e)));
            return new Yy(a, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = tP(t));
            for (var r = this._groups,
            i = r.length,
            a = [], o = [], u = 0; u < i; ++u) for (var c, f = r[u], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
                for (var h, d = t.call(c, c.__data__, l, f), p = hy(c, e), g = 0, v = d.length; g < v; ++g)(h = d[g]) && SL(h, n, e, g, d, p);
                a.push(d),
                o.push(c)
            }
            return new Yy(a, o, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = JU(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f)(a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new Yy(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new Yy(o, this._parents, this._name, this._id)
        },
        selection: function() {
            return new kL(this._groups, this._parents)
        },
        transition: function() {
            for (var t = this._name,
            n = this._id,
            e = jy(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f) if (o = u[f]) {
                var s = hy(o, n);
                SL(o, t, e, f, u, {
                    time: s.time + s.delay + s.duration,
                    delay: 0,
                    duration: s.duration,
                    ease: s.ease
                })
            }
            return new Yy(r, this._parents, t, e)
        },
        call: NL.call,
        nodes: NL.nodes,
        node: NL.node,
        size: NL.size,
        empty: NL.empty,
        each: NL.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? hy(this.node(), e).on.on(t) : this.each(Dy(e, t, n))
        },
        attr: function(t, n) {
            var e = WU(t),
            r = "transform" === e ? nL: TL;
            return this.attrTween(t, "function" == typeof n ? (e.local ? wy: xy)(e, r, vy(this, "attr." + t, n)) : null == n ? (e.local ? by: yy)(e) : (e.local ? _y: my)(e, r, n + ""))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = WU(t);
            return this.tween(e, (r.local ? My: Sy)(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? tL: TL;
            return null == n ? this.styleTween(t, Uy(t, r)).on("end.style." + t, Py(t)) : this.styleTween(t, "function" == typeof n ? Fy(t, r, vy(this, "style." + t, n)) : Ly(t, r, n + ""), e)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, Ry(t, n, null == e ? "": e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? Oy(vy(this, "text", t)) : Hy(null == t ? "": t + ""))
        },
        remove: function() {
            return this.on("end.remove", zy(this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = hy(this.node(), e).tween, a = 0, o = i.length; a < o; ++a) if ((r = i[a]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? py: gy)(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Ay: Ty)(n, t)) : hy(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? ky: Cy)(n, t)) : hy(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(Ny(n, t)) : hy(this.node(), n).ease
        }
    };
    var EL = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t: (t -= 2) * t * t + 2) / 2
        }
    };
    Mv.prototype.interrupt = function(t) {
        return this.each(function() {
            AL(this, t)
        })
    },
    Mv.prototype.transition = function(t) {
        var n, e;
        t instanceof Yy ? (n = t._id, t = t._name) : (n = jy(), (e = EL).time = ny(), t = null == t ? null: t + "");
        for (var r = this._groups,
        i = r.length,
        a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f)(o = u[f]) && SL(o, t, n, f, u, e || qy(o, n));
        return new Yy(r, this._parents, t, n)
    }; ["e", "w"].map(Iy),
    ["n", "s"].map(Iy),
    ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Iy);
    var DL = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    },
    zL = function(t) {
        return 1 === t.length && (t = Xy(t)),
        {
            left: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) < 0 ? r = a + 1 : i = a
                }
                return r
            },
            right: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) > 0 ? i = a: r = a + 1
                }
                return r
            }
        }
    } (DL).right,
    UL = Math.sqrt(50),
    PL = Math.sqrt(10),
    LL = Math.sqrt(2),
    FL = function(t, n, e) {
        var r, i, a, o = n < t,
        u = -1;
        if (o && (r = t, t = n, n = r), 0 === (a = By(t, n, e)) || !isFinite(a)) return [];
        if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), i = new Array(r = Math.ceil(n - t + 1)); ++u < r;) i[u] = (t + u) * a;
        else for (t = Math.floor(t * a), n = Math.ceil(n * a), i = new Array(r = Math.ceil(t - n + 1)); ++u < r;) i[u] = (t - u) / a;
        return o && i.reverse(),
        i
    }; (function(t, n, e, r, i, a, o, u, c, f) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = o,
        this.dx = u,
        this.dy = c,
        this._ = f
    }).prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var RL = {},
    HL = {},
    OL = 34,
    YL = 10,
    jL = 13,
    qL = function(t) {
        function n(t, n) {
            function e() {
                if (f) return HL;
                if (s) return s = !1,
                RL;
                var n, e, r = u;
                if (t.charCodeAt(r) === OL) {
                    for (; u++<o && t.charCodeAt(u) !== OL || t.charCodeAt(++u) === OL;);
                    return (n = u) >= o ? f = !0 : (e = t.charCodeAt(u++)) === YL ? s = !0 : e === jL && (s = !0, t.charCodeAt(u) === YL && ++u),
                    t.slice(r + 1, n - 1).replace(/""/g, '"')
                }
                for (; u < o;) {
                    if ((e = t.charCodeAt(n = u++)) === YL) s = !0;
                    else if (e === jL) s = !0,
                    t.charCodeAt(u) === YL && ++u;
                    else if (e !== a) continue;
                    return t.slice(r, n)
                }
                return f = !0,
                t.slice(r, o)
            }
            var r, i = [],
            o = t.length,
            u = 0,
            c = 0,
            f = o <= 0,
            s = !1;
            for (t.charCodeAt(o - 1) === YL && --o, t.charCodeAt(o - 1) === jL && --o; (r = e()) !== HL;) {
                for (var l = []; r !== RL && r !== HL;) l.push(r),
                r = e();
                n && null == (l = n(l, c++)) || i.push(l)
            }
            return i
        }
        function e(n) {
            return n.map(r).join(t)
        }
        function r(t) {
            return null == t ? "": i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"': t
        }
        var i = new RegExp('["' + t + "\n\r]"),
        a = t.charCodeAt(0);
        return {
            parse: function(t, e) {
                var r, i, a = n(t,
                function(t, n) {
                    if (r) return r(t, n - 1);
                    i = t,
                    r = e ? $y(t, e) : Vy(t)
                });
                return a.columns = i,
                a
            },
            parseRows: n,
            format: function(n, e) {
                return null == e && (e = Zy(n)),
                [e.map(r).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return r(n[t])
                    }).join(t)
                })).join("\n")
            },
            formatRows: function(t) {
                return t.map(e).join("\n")
            }
        }
    },
    IL = (qL(","), qL("\t"),
    function(t, n, e, r, i) {
        this.node = t,
        this.x0 = n,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    }),
    XL = function(t, n, e) {
        var r = new Ky(null == n ? Jy: n, null == e ? Qy: e, NaN, NaN, NaN, NaN);
        return null == t ? r: r.addAll(t)
    }.prototype = Ky.prototype;
    XL.copy = function() {
        var t, n, e = new Ky(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = tb(r),
        e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = tb(n));
        return e
    },
    XL.add = function(t) {
        var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
        return Gy(this.cover(n, e), n, e, t)
    },
    XL.addAll = function(t) {
        var n, e, r, i, a = t.length,
        o = new Array(a),
        u = new Array(a),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;
        for (e = 0; e < a; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (o[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
        for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < a; ++e) Gy(this, o[e], u[e], t[e]);
        return this
    },
    XL.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0,
        r = this._y0,
        i = this._x1,
        a = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1,
        a = (r = Math.floor(n)) + 1;
        else {
            if (! (e > t || t > i || r > n || n > a)) return this;
            var o, u, c = i - e,
            f = this._root;
            switch (u = (n < (r + a) / 2) << 1 | t < (e + i) / 2) {
            case 0:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , i = e + c , a = r + c , t > i || n > a );
                break;
            case 1:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , e = i - c , a = r + c , e > t || n > a );
                break;
            case 2:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , i = e + c , r = a - c , t > i || r > n );
                break;
            case 3:
                do { (o = new Array(4))[u] = f, f = o
                } while ( c *= 2 , e = i - c , r = a - c , e > t || r > n )
            }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this
    },
    XL.data = function() {
        var t = [];
        return this.visit(function(n) {
            if (!n.length) do {
                t.push(n.data)
            } while ( n = n . next )
        }),
        t
    },
    XL.extent = function(t) {
        return arguments.length ? this.cover( + t[0][0], +t[0][1]).cover( + t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    },
    XL.find = function(t, n, e) {
        var r, i, a, o, u, c, f, s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        g = this._root;
        for (g && p.push(new IL(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) if (! (! (g = c.node) || (i = c.x0) > h || (a = c.y0) > d || (o = c.x1) < s || (u = c.y1) < l)) if (g.length) {
            var v = (i + o) / 2,
            y = (a + u) / 2;
            p.push(new IL(g[3], v, y, o, u), new IL(g[2], i, y, v, u), new IL(g[1], v, a, o, y), new IL(g[0], i, a, v, y)),
            (f = (n >= y) << 1 | t >= v) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
        } else {
            var b = t - +this._x.call(null, g.data),
            m = n - +this._y.call(null, g.data),
            _ = b * b + m * m;
            if (_ < e) {
                var x = Math.sqrt(e = _);
                s = t - x,
                l = n - x,
                h = t + x,
                d = n + x,
                r = g.data
            }
        }
        return r
    },
    XL.remove = function(t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
        var n, e, r, i, a, o, u, c, f, s, l, h, d = this._root,
        p = this._x0,
        g = this._y0,
        v = this._x1,
        y = this._y1;
        if (!d) return this;
        if (d.length) for (;;) {
            if ((f = a >= (u = (p + v) / 2)) ? p = u: v = u, (s = o >= (c = (g + y) / 2)) ? g = c: y = c, n = d, !(d = d[l = s << 1 | f])) return this;
            if (!d.length) break; (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next,
        r ? (i ? r.next = i: delete r.next, this) : n ? (i ? n[l] = i: delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d: this._root = d), this) : (this._root = i, this)
    },
    XL.removeAll = function(t) {
        for (var n = 0,
        e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    },
    XL.root = function() {
        return this._root
    },
    XL.size = function() {
        var t = 0;
        return this.visit(function(n) {
            if (!n.length) do {++t
            } while ( n = n . next )
        }),
        t
    },
    XL.visit = function(t) {
        var n, e, r, i, a, o, u = [],
        c = this._root;
        for (c && u.push(new IL(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, a = n.x1, o = n.y1) && c.length) {
            var f = (r + a) / 2,
            s = (i + o) / 2; (e = c[3]) && u.push(new IL(e, f, s, a, o)),
            (e = c[2]) && u.push(new IL(e, r, s, f, o)),
            (e = c[1]) && u.push(new IL(e, f, i, a, s)),
            (e = c[0]) && u.push(new IL(e, r, i, f, s))
        }
        return this
    },
    XL.visitAfter = function(t) {
        var n, e = [],
        r = [];
        for (this._root && e.push(new IL(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var a, o = n.x0,
                u = n.y0,
                c = n.x1,
                f = n.y1,
                s = (o + c) / 2,
                l = (u + f) / 2; (a = i[0]) && e.push(new IL(a, o, u, s, l)),
                (a = i[1]) && e.push(new IL(a, s, u, c, l)),
                (a = i[2]) && e.push(new IL(a, o, l, s, f)),
                (a = i[3]) && e.push(new IL(a, s, l, c, f))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    },
    XL.x = function(t) {
        return arguments.length ? (this._x = t, this) : this._x
    },
    XL.y = function(t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    var BL, WL = function(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    },
    VL = function(t) {
        return (t = WL(Math.abs(t))) ? t[1] : NaN
    },
    $L = function(t, n) {
        return function(e, r) {
            for (var i = e.length,
            a = [], o = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), a.push(e.substring(i -= u, i + u)), !((c += u + 1) > r));) u = t[o = (o + 1) % t.length];
            return a.reverse().join(n)
        }
    },
    ZL = function(t) {
        return function(n) {
            return n.replace(/[0-9]/g,
            function(n) {
                return t[ + n]
            })
        }
    },
    GL = function(t, n) {
        var e = WL(t, n);
        if (!e) return t + "";
        var r = e[0],
        i = e[1];
        return i < 0 ? "0." + new Array( - i).join("0") + r: r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    },
    JL = {
        "": function(t, n) {
            t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, a = -1; i < r; ++i) switch (t[i]) {
            case ".":
                a = e = i;
                break;
            case "0":
                0 === a && (a = i),
                e = i;
                break;
            case "e":
                break t;
            default:
                a > 0 && (a = 0)
            }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
        },
        "%": function(t, n) {
            return (100 * t).toFixed(n)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.round(t).toString(10)
        },
        e: function(t, n) {
            return t.toExponential(n)
        },
        f: function(t, n) {
            return t.toFixed(n)
        },
        g: function(t, n) {
            return t.toPrecision(n)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, n) {
            return GL(100 * t, n)
        },
        r: GL,
        s: function(t, n) {
            var e = WL(t, n);
            if (!e) return t + "";
            var r = e[0],
            i = e[1],
            a = i - (BL = 3 * Math.max( - 8, Math.min(8, Math.floor(i / 3)))) + 1,
            o = r.length;
            return a === o ? r: a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + WL(t, Math.max(0, n + a - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    },
    QL = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    nb.prototype = eb.prototype,
    eb.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0": "") + (null == this.width ? "": Math.max(1, 0 | this.width)) + (this.comma ? ",": "") + (null == this.precision ? "": "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var KL, tF, nF, eF = function(t) {
        return t
    },
    rF = ["y", "z", "a", "f", "p", "n", "碌", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
    iF = function(t) {
        function n(t) {
            function n(t) {
                var n, r, o, s = v,
                _ = y;
                if ("c" === g) _ = b(t) + _,
                t = "";
                else {
                    var x = (t = +t) < 0;
                    if (t = b(Math.abs(t), p), x && 0 == +t && (x = !1), s = (x ? "(" === f ? f: "-": "-" === f || "(" === f ? "": f) + s, _ = _ + ("s" === g ? rF[8 + BL / 3] : "") + (x && "(" === f ? ")": ""), m) for (n = -1, r = t.length; ++n < r;) if (48 > (o = t.charCodeAt(n)) || o > 57) {
                        _ = (46 === o ? i + t.slice(n + 1) : t.slice(n)) + _,
                        t = t.slice(0, n);
                        break
                    }
                }
                d && !l && (t = e(t, 1 / 0));
                var w = s.length + t.length + _.length,
                M = w < h ? new Array(h - w + 1).join(u) : "";
                switch (d && l && (t = e(M + t, M.length ? h - _.length: 1 / 0), M = ""), c) {
                case "<":
                    t = s + t + _ + M;
                    break;
                case "=":
                    t = s + M + t + _;
                    break;
                case "^":
                    t = M.slice(0, w = M.length >> 1) + s + t + _ + M.slice(w);
                    break;
                default:
                    t = M + s + t + _
                }
                return a(t)
            }
            var u = (t = nb(t)).fill,
            c = t.align,
            f = t.sign,
            s = t.symbol,
            l = t.zero,
            h = t.width,
            d = t.comma,
            p = t.precision,
            g = t.type,
            v = "$" === s ? r[0] : "#" === s && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
            y = "$" === s ? r[1] : /[%p]/.test(g) ? o: "",
            b = JL[g],
            m = !g || /[defgprs%]/.test(g);
            return p = null == p ? g ? 6 : 12 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)),
            n.toString = function() {
                return t + ""
            },
            n
        }
        var e = t.grouping && t.thousands ? $L(t.grouping, t.thousands) : eF,
        r = t.currency,
        i = t.decimal,
        a = t.numerals ? ZL(t.numerals) : eF,
        o = t.percent || "%";
        return {
            format: n,
            formatPrefix: function(t, e) {
                var r = n((t = nb(t), t.type = "f", t)),
                i = 3 * Math.max( - 8, Math.min(8, Math.floor(VL(e) / 3))),
                a = Math.pow(10, -i),
                o = rF[8 + i / 3];
                return function(t) {
                    return r(a * t) + o
                }
            }
        }
    }; !
    function(t) {
        KL = iF(t),
        tF = KL.format,
        nF = KL.formatPrefix
    } ({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var aF = function(t) {
        return Math.max(0, -VL(Math.abs(t)))
    },
    oF = function(t, n) {
        return Math.max(0, 3 * Math.max( - 8, Math.min(8, Math.floor(VL(n) / 3))) - VL(Math.abs(t)))
    },
    uF = function(t, n) {
        return t = Math.abs(t),
        n = Math.abs(n) - t,
        Math.max(0, VL(n) - VL(t)) + 1
    },
    cF = function() {
        return new rb
    };
    rb.prototype = {
        constructor: rb,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            ib(fF, t, this.t),
            ib(this, fF.s, this.s),
            this.s ? this.t += fF.t: this.s = fF.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var fF = new rb,
    sF = Math.PI,
    lF = sF / 2,
    hF = Math.atan,
    dF = Math.atan2,
    pF = Math.cos,
    gF = Math.sin,
    vF = Math.sqrt;
    cF(),
    cF(),
    cF(),
    cF(),
    cF(),
    cF(),
    cF(),
    cF();
    ub(function(t) {
        return vF(2 / (1 + t))
    }).invert = cb(function(t) {
        return 2 * ob(t / 2)
    }),
    ub(function(t) {
        return (t = ab(t)) && t / gF(t)
    }).invert = cb(function(t) {
        return t
    }),
    function(t, n) {
        var e = pF(n),
        r = pF(t) * e;
        return [e * gF(t) / r, gF(n) / r]
    }.invert = cb(hF),
    function(t, n) {
        return [pF(n) * gF(t), gF(n)]
    }.invert = cb(ob),
    function(t, n) {
        var e = pF(n),
        r = 1 + pF(t) * e;
        return [e * gF(t) / r, gF(n) / r]
    }.invert = cb(function(t) {
        return 2 * hF(t)
    });
    var yF = Array.prototype,
    bF = yF.map,
    mF = yF.slice,
    _F = function(t) {
        return function() {
            return t
        }
    },
    xF = function(t) {
        return + t
    },
    wF = [0, 1],
    MF = function(t, n, e) {
        var r, i = t[0],
        a = t[t.length - 1],
        o = Wy(i, a, null == n ? 10 : n);
        switch ((e = nb(null == e ? ",f": e)).type) {
        case "s":
            var u = Math.max(Math.abs(i), Math.abs(a));
            return null != e.precision || isNaN(r = oF(o, u)) || (e.precision = r),
            nF(e, u);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != e.precision || isNaN(r = uF(o, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
            break;
        case "f":
        case "%":
            null != e.precision || isNaN(r = aF(o)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return tF(e)
    },
    SF = new Date,
    AF = new Date,
    TF = bb(function() {},
    function(t, n) {
        t.setTime( + t + n)
    },
    function(t, n) {
        return n - t
    });
    TF.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? bb(function(n) {
            n.setTime(Math.floor(n / t) * t)
        },
        function(n, e) {
            n.setTime( + n + e * t)
        },
        function(n, e) {
            return (e - n) / t
        }) : TF: null
    };
    var kF = 6e4,
    CF = 6048e5,
    NF = (bb(function(t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    },
    function(t, n) {
        t.setTime( + t + 1e3 * n)
    },
    function(t, n) {
        return (n - t) / 1e3
    },
    function(t) {
        return t.getUTCSeconds()
    }), bb(function(t) {
        t.setTime(Math.floor(t / kF) * kF)
    },
    function(t, n) {
        t.setTime( + t + n * kF)
    },
    function(t, n) {
        return (n - t) / kF
    },
    function(t) {
        return t.getMinutes()
    }), bb(function(t) {
        var n = t.getTimezoneOffset() * kF % 36e5;
        n < 0 && (n += 36e5),
        t.setTime(36e5 * Math.floor(( + t - n) / 36e5) + n)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getHours()
    }), bb(function(t) {
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setDate(t.getDate() + n)
    },
    function(t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * kF) / 864e5
    },
    function(t) {
        return t.getDate() - 1
    })),
    EF = mb(0),
    DF = mb(1),
    zF = (mb(2), mb(3), mb(4), mb(5), mb(6), bb(function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setMonth(t.getMonth() + n)
    },
    function(t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    },
    function(t) {
        return t.getMonth()
    }), bb(function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setFullYear(t.getFullYear() + n)
    },
    function(t, n) {
        return n.getFullYear() - t.getFullYear()
    },
    function(t) {
        return t.getFullYear()
    }));
    zF.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? bb(function(n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
            n.setMonth(0, 1),
            n.setHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    bb(function(t) {
        t.setUTCSeconds(0, 0)
    },
    function(t, n) {
        t.setTime( + t + n * kF)
    },
    function(t, n) {
        return (n - t) / kF
    },
    function(t) {
        return t.getUTCMinutes()
    }),
    bb(function(t) {
        t.setUTCMinutes(0, 0, 0)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getUTCHours()
    });
    var UF = bb(function(t) {
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    },
    function(t, n) {
        return (n - t) / 864e5
    },
    function(t) {
        return t.getUTCDate() - 1
    }),
    PF = _b(0),
    LF = _b(1),
    FF = (_b(2), _b(3), _b(4), _b(5), _b(6), bb(function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    },
    function(t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    },
    function(t) {
        return t.getUTCMonth()
    }), bb(function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    },
    function(t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    },
    function(t) {
        return t.getUTCFullYear()
    }));
    FF.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? bb(function(n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
            n.setUTCMonth(0, 1),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var RF, HF, OF, YF = {
        "-": "",
        _: " ",
        0 : "0"
    },
    jF = /^\s*\d+/,
    qF = /^%/,
    IF = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g; !
    function(t) {
        RF = Sb(t),
        HF = RF.utcFormat,
        OF = RF.utcParse
    } ({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || HF("%Y-%m-%dT%H:%M:%S.%LZ"),
    +new Date("2000-01-01T00:00:00.000Z") || OF("%Y-%m-%dT%H:%M:%S.%LZ");
    var XF = function(t) {
        return t.match(/.{6}/g).map(function(t) {
            return "#" + t
        })
    };
    XF("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    XF("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
    XF("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
    XF("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
    iL(Bv(300, .5, 0), Bv( - 240, .5, 1));
    iL(Bv( - 100, .75, .35), Bv(80, 1.5, .8)),
    iL(Bv(260, .75, .35), Bv(80, 1.5, .8)),
    Bv();
    bm(XF("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    bm(XF("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    bm(XF("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    bm(XF("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    Mm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                wm(this, this._t0, xm(this, this._t0))
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    wm(this, xm(this, e = _m(this, t, n)), e);
                    break;
                default:
                    wm(this, this._t0, e = _m(this, t, n))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n,
                this._t0 = e
            }
        }
    },
    (function(t) {
        this._context = new Sm(t)
    }.prototype = Object.create(Mm.prototype)).point = function(t, n) {
        Mm.prototype.point.call(this, n, t)
    },
    Sm.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, a) {
            this._context.bezierCurveTo(n, t, r, e, a, i)
        }
    };
    var BF = jU({
        props: {
            id: {},
            colorScale: {
            default:
                yb().range(["black", "white"])
            },
            angle: {
            default:
                0
            }
        },
        init: function(t, n) {
            n.id = "areaGradient" + Math.round(1e4 * Math.random()),
            n.gradient = oP(t).append("linearGradient")
        },
        update: function(t) {
            var n = Math.PI * t.angle / 180;
            t.gradient.attr("y1", Math.round(100 * Math.max(0, Math.sin(n))) + "%").attr("y2", Math.round(100 * Math.max(0, -Math.sin(n))) + "%").attr("x1", Math.round(100 * Math.max(0, -Math.cos(n))) + "%").attr("x2", Math.round(100 * Math.max(0, Math.cos(n))) + "%").attr("id", t.id);
            var e = yb().domain([0, 100]).range(t.colorScale.domain()),
            r = t.gradient.selectAll("stop").data(qU(0, 100.01, 20));
            r.exit().remove(),
            r.merge(r.enter().append("stop")).attr("offset",
            function(t) {
                return t + "%"
            }).attr("stop-color",
            function(n) {
                return t.colorScale(e(n))
            })
        }
    }),
    WF = (jU({
        props: {
            id: {
            default:
                "areaGradient" + Math.round(1e4 * Math.random())
            }
        },
        init: function(t, n) {
            n.filter = oP(t).append("defs").append("filter").attr("height", "130%"),
            n.filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 3),
            n.filter.append("feOffset").attr("dx", 2).attr("dy", 2).attr("result", "offsetblur");
            var e = n.filter.append("feMerge");
            e.append("feMergeNode"),
            e.append("feMergeNode").attr("in", "SourceGraphic")
        },
        update: function(t) {
            t.filter.attr("id", t.id)
        }
    }), jU({
        props: {
            x: {
            default:
                0
            },
            y: {
            default:
                0
            },
            r: {
            default:
                8
            },
            color: {
            default:
                "darkblue"
            },
            duration: {
            default:
                .7
            },
            angleFull: {
            default:
                120
            }
        },
        init: function(t, n) {
            t = oP(t),
            n.path = t.append("path"),
            n.transform = n.path.append("animateTransform").attr("attributeName", "transform").attr("attributeType", "XML").attr("type", "rotate").attr("begin", "0s").attr("fill", "freeze").attr("repeatCount", "indefinite")
        },
        update: function(t) {
            t.path.attr("d",
            function(t, n, e, r, i, a) {
                i = i / 180 * Math.PI,
                a = a / 180 * Math.PI;
                var o = e,
                u = e - r,
                c = [[t + o * Math.cos(i), n + o * Math.sin(i)], [t + o * Math.cos(a), n + o * Math.sin(a)], [t + u * Math.cos(a), n + u * Math.sin(a)], [t + u * Math.cos(i), n + u * Math.sin(i)]],
                f = (a - i) % (2 * Math.PI) > Math.PI ? 1 : 0,
                s = [];
                return s.push("M" + c[0].join()),
                s.push("A" + [o, o, 0, f, 1, c[1]].join()),
                s.push("L" + c[2].join()),
                s.push("A" + [u, u, 0, f, 0, c[3]].join()),
                s.push("z"),
                s.join(" ")
            } (t.x, t.y, t.r, t.r / 3, 0, t.angleFull)).attr("fill", t.color),
            t.transform.attr("from", "0 " + t.x + " " + t.y).attr("to", "360 " + t.x + " " + t.y).attr("dur", t.duration + "s")
        }
    }), jU({
        props: {
            imgUrl: {},
            x: {
            default:
                0
            },
            y: {
            default:
                0
            },
            maxWidth: {
            default:
                20
            },
            maxHeight: {
            default:
                20
            },
            svgAlign: {
            default:
                "xMidYMid"
            }
        },
        methods: {
            show: function(t) {
                return t.img.attr("width", t.maxWidth).attr("height", t.maxHeight),
                this
            },
            hide: function(t) {
                return t.img.attr("width", 0).attr("height", 0),
                this
            }
        },
        init: function(t, n) {
            n.img = oP(t).append("image")
        },
        update: function(t) {
            t.img.attr("xlink:href", t.imgUrl).attr("x", t.x).attr("y", t.y).attr("width", t.maxW).attr("height", t.maxH).attr("preserveAspectRatio", t.svgAlign + " meet")
        }
    }), jU({
        props: {
            selection: {
            default:
                {
                    x:
                    [null, null],
                    y: [null, null]
                }
            },
            xDomain: {
                onChange: function(t, n) {
                    n.xScale.domain(t)
                }
            },
            yDomain: {
                onChange: function(t, n) {
                    n.yScale.domain(t)
                }
            },
            transitionDuration: 700
        },
        stateInit: {
            xScale: yb(),
            yScale: yb()
        },
        init: function(t, n, e) {
            var r = e.width,
            i = e.height,
            a = e.margin,
            o = void 0 === a ? {
                top: 2,
                right: 2,
                bottom: 2,
                left: 2
            }: a;
            n.xScale.range([o.left, r - n.margin.right]),
            n.yScale.range([o.top, i - n.margin.bottom]),
            n.svg = oP(t).append("svg").attr("width", r).attr("height", i),
            n.outerBox = n.svg.append("rect").attr("x", n.xScale.range()[0]).attr("y", n.yScale.range()[0]).attr("rx", 2).attr("ry", 2).attr("width", n.xScale.range()[1]).attr("height", n.yScale.range()[1]).style("fill", "#EEE").style("stroke", "grey"),
            n.selectionBox = n.svg.append("rect").attr("rx", 1).attr("ry", 1).attr("width", 0).attr("height", 0).style("stroke", "blue").style("stroke-opacity", .6).style("fill", "blue").style("fill-opacity", .3)
        },
        update: function(t) {
            t.outerBox.attr("x", t.xScale.range()[0]).attr("y", t.yScale.range()[0]).attr("width", t.xScale.range()[1]).attr("height", t.yScale.range()[1]),
            t.selectionBox.attr("x", t.xScale(t.selection.x[0])).attr("y", t.yScale(t.selection.y[0])).attr("width", t.xScale(t.selection.x[1] - t.selection.x[0])).attr("height", t.yScale(t.selection.y[1] - t.selection.y[0]))
        }
    }), LU({
        props: {
            width: {},
            height: {},
            scale: {},
            label: {}
        },
        init: function(t, n) {
            n.gradient = BF()(t),
            n.el = PU(t),
            n.box = n.el.append("rect").attr("x", 0).attr("y", 0).attr("rx", 3).attr("ry", 3).attr("stroke", "black").attr("stroke-width", .5),
            n.unitLabel = n.el.append("text").attr("class", "legendText").style("text-anchor", "middle").style("dominant-baseline", "central"),
            n.labelFitText = YU()(n.unitLabel.node()),
            n.startLabel = n.el.append("text").style("text-anchor", "start").style("dominant-baseline", "central"),
            n.startLabelFitText = YU()(n.startLabel.node()),
            n.endLabel = n.el.append("text").style("text-anchor", "end").style("dominant-baseline", "central"),
            n.endLabelFitText = YU()(n.endLabel.node())
        },
        update: function(t) {
            t.gradient.colorScale(t.scale),
            t.box.attr("width", t.width).attr("height", t.height).style("fill", "url(#" + t.gradient.id() + ")"),
            t.unitLabel.text(t.label).attr("x", .5 * t.width).attr("y", .5 * t.height).style("text-anchor", "middle").style("dominant-baseline", "central").style("fill", RU(t.scale((t.scale.domain()[t.scale.domain().length - 1] - t.scale.domain()[0]) / 2)).isLight() ? "#444": "#CCC"),
            t.labelFitText.bbox({
                width: .8 * t.width,
                height: .9 * t.height
            }),
           // t.startLabel.text(t.scale.domain()[0]).attr("x", .02 * t.width).attr("y", .5 * t.height).style("fill", RU(t.scale(t.scale.domain()[0])).isLight() ? "#444": "#CCC"),
            t.startLabelFitText.bbox({
                width: .3 * t.width,
                height: .7 * t.height
            }),
           // t.endLabel.text(t.scale.domain()[t.scale.domain().length - 1]).attr("x", .98 * t.width).attr("y", .5 * t.height).style("fill", RU(t.scale(t.scale.domain()[t.scale.domain().length - 1])).isLight() ? "#444": "#CCC"),
            t.endLabelFitText.bbox({
                width: .3 * t.width,
                height: .7 * t.height
            })
        }
    })),
    VF = LU({
        props: {
            width: {},
            height: {},
            scale: {},
            label: {}
        },
        init: function(t, n) {
            n.el = PU(t)
        },
        update: function(t) {
            var n = t.width / t.scale.domain().length,
            e = t.el.selectAll(".color-slot").data(t.scale.domain());
            e.exit().remove();
            var r = e.enter().append("g").attr("class", "color-slot");
            r.append("rect").attr("y", 0).attr("rx", 0).attr("ry", 0).attr("stroke-width", 0),
            r.append("text").style("text-anchor", "middle").style("dominant-baseline", "central"),
            r.append("title"),
            (e = e.merge(r)).select("rect").attr("width", n).attr("height", t.height).attr("x",
            function(t, e) {
                return n * e
            }).attr("fill",
            function(n) {
                return t.scale(n)
            }),
            e.select("text").text(function(t) {
                return t
            }).attr("x",
            function(t, e) {
                return n * (e + .5)
            }).attr("y", .5 * t.height).style("fill",
            function(n) {
                return RU(t.scale(n)).isLight() ? "#333": "#DDD"
            }).each(function(e) {
                YU().bbox({
                    width: .9 * n,
                    height: .8 * t.height
                })(this)
            }),
            e.select("title").text(function(n) {
                return n + " " + t.label
            })
        }
    }),
    $F = LU({
        props: {
            width: {},
            height: {},
            scale: {},
            label: {}
        },
        init: function(t, n) {
            n.legend = PU(t).append("g").attr("class", "legend")
        },
        update: function(t) {
            if (t.scale) {
                var n = t.scale.hasOwnProperty("unknown");
                t.legend.html(""),
                (n ? VF: WF)().width(t.width).height(t.height).scale(t.scale).label(t.label)(t.legend.node())
            }
        }
    }),
    ZF = Nm({
        props: {
            domainRange: {},
            currentSelection: {},
            onChange: {
            default:
                function(t, n) {}
            }
        },
        stateInit: {
            timeScale: wC(),
            brush: ve()
        },
        init: function(t, n, e) {
            var r = e.width,
            i = void 0 === r ? 300 : r,
            a = e.height,
            o = void 0 === a ? 20 : a,
            u = e.margins,
            c = void 0 === u ? {
                top: 0,
                right: 0,
                bottom: 20,
                left: 0
            }: u,
            f = e.tickFormat,
            s = void 0 === f ? null: f,
            l = i - c.left - c.right,
            h = o - c.top - c.bottom;
            n.timeScale.range([0, l]),
            n.xGrid = p().scale(n.timeScale).tickSize( - h).tickFormat(""),
            n.xAxis = p().scale(n.timeScale).tickFormat(s).tickPadding(0),
            n.brush.extent([[0, 0], [l, h]]).on("end",
            function() {
                if (m_.sourceEvent) {
                    var t = (m_.selection || [0, l]).map(n.timeScale.invert);
                    n.onChange(t[0], t[1])
                }
            }),
            n.svg = E_(t).append("svg").attr("class", "brusher").attr("width", i).attr("height", o);
            var d = n.svg.append("g").attr("transform", "translate(" + c.left + "," + c.top + ")");
            d.append("rect").attr("class", "grid-background").attr("width", l).attr("height", h),
            d.append("g").attr("class", "x grid").attr("transform", "translate(0," + h + ")"),
            d.append("g").attr("class", "x axis").attr("transform", "translate(0," + h + ")"),
            d.append("g").attr("class", "brush").call(n.brush).selectAll("rect").attr("height", h)
        },
        update: function(t) {
            t.domainRange[1] - t.domainRange[0] <= 0 || (t.timeScale.domain(t.domainRange), t.xGrid.scale(t.timeScale), t.xAxis.scale(t.timeScale), t.svg.select(".x.grid").call(t.xGrid).selectAll(".tick").classed("minor",
            function(t) {
                return t.getHours()
            }), t.svg.select(".x.axis").call(t.xAxis).selectAll("text").attr("y", 8), t.svg.select(".brush").call(t.brush.move, t.currentSelection.map(t.timeScale)))
        }
    });
    return Nm({
        props: {
            data: {
            default:
                [],
                onChange: function(t, n) { !
                    function(t) {
                        n.completeStructData = [],
                        n.completeFlatData = [],
                        n.totalNLines = 0;
                        for (var e = !!t.length && t[0].data[0].data[0].timeRange[0] instanceof Date, r = 0, i = t.length; r < i; r++) {
                            var a = t[r].group;
                            n.completeStructData.push({
                                group: a,
                                lines: t[r].data.map(function(t) {
                                    return t.label
                                })
                            });
                            for (var o = 0,
                            u = t[r].data.length; o < u; o++) {
                                for (var c = 0,
                                f = t[r].data[o].data.length; c < f; c++) n.completeFlatData.push({
                                    group: a,
                                    label: t[r].data[o].label,
                                    timeRange: e ? t[r].data[o].data[c].timeRange: [new Date(t[r].data[o].data[c].timeRange[0]), new Date(t[r].data[o].data[c].timeRange[1])],
                                    val: t[r].data[o].data[c].val,
                                    labelVal: t[r].data[o].data[c][t[r].data[o].data[c].hasOwnProperty("labelVal") ? "labelVal": "val"]
                                });
                                n.totalNLines++
                            }
                        }
                    } (t),
                    n.zoomX = [Km(n.completeFlatData,
                    function(t) {
                        return t.timeRange[0]
                    }), Jm(n.completeFlatData,
                    function(t) {
                        return t.timeRange[1]
                    })],
                    n.zoomY = [null, null],
                    n.overviewArea && n.overviewArea.domainRange(n.zoomX).currentSelection(n.zoomX)
                }
            },
            width: {
            default:
                window.innerWidth,
                triggerUpdate: !1
            },
            maxHeight: {
            default:
                640
            },
            maxLineHeight: {
            default:
                12
            },
            leftMargin: {
            default:
                90,
                triggerUpdate: !1
            },
            rightMargin: {
            default:
                100,
                triggerUpdate: !1
            },
            topMargin: {
            default:
                26,
                triggerUpdate: !1
            },
            bottomMargin: {
            default:
                30,
                triggerUpdate: !1
            },
            zoomX: {
            default:
                [null, null],
                onChange: function(t, n) {
                    n.svg && n.svg.dispatch("zoom", {
                        detail: {
                            zoomX: t,
                            zoomY: null,
                            redraw: !1
                        }
                    })
                }
            },
            zoomY: {
            default:
                [null, null],
                onChange: function(t, n) {
                    n.svg && n.svg.dispatch("zoom", {
                        detail: {
                            zoomX: null,
                            zoomY: t,
                            redraw: !1
                        }
                    })
                }
            },
            minSegmentDuration: {},
            zColorScale: {
            default:
                $u(cE)
            },
            zQualitative: {
            default:
                !1,
                onChange: function(t, n) {
                    n.zColorScale = t ? io([].concat(Cm(SC), Cm(AC))) : $u(cE)
                }
            },
            zDataLabel: {
            default:
                "",
                triggerUpdate: !1
            },
            zScaleLabel: {
            default:
                "",
                triggerUpdate: !1
            },
            enableOverview: {
            default:
                !0
            },
            enableAnimations: {
            default:
                !0,
                onChange: function(t, n) {
                    n.transDuration = t ? 700 : 0
                }
            },
            onZoom: {},
            onLabelClick: {}
        },
        methods: {
            getNLines: function(t) {
                return t.nLines
            },
            getTotalNLines: function(t) {
                return t.totalNLines
            },
            getVisibleStructure: function(t) {
                return t.structData
            },
            getSvg: function(t) {
                return E_(t.svg.node().parentNode).html()
            },
            zoomYLabels: function(t, n) {
                function e(n) {
                    function e(t, n) {
                        return {
                            group: t.group,
                            label: t.lines[n]
                        }
                    }
                    if (null == n) return n;
                    for (var r = n,
                    i = 0,
                    a = t.completeStructData.length; i < a; i++) {
                        if (t.completeStructData[i].lines.length > r) return e(t.completeStructData[i], r);
                        r -= t.completeStructData[i].lines.length
                    }
                    return e(t.completeStructData[t.completeStructData.length - 1], t.completeStructData[t.completeStructData.length - 1].lines.length - 1)
                }
                function r(n, e) {
                    var r = (e = e || !1) ? 0 : 1;
                    if (null == n) return n;
                    for (var i = 0,
                    a = 0,
                    o = t.completeStructData.length; a < o; a++) {
                        var u = t.grpCmpFunction(n.group, t.completeStructData[a].group);
                        if (u < 0) break;
                        if (0 == u && n.group == t.completeStructData[a].group) {
                            for (var c = 0,
                            f = t.completeStructData[a].lines.length; c < f; c++) {
                                var s = t.labelCmpFunction(n.label, t.completeStructData[a].lines[c]);
                                if (s < 0) return i + c - r;
                                if (0 == s && n.label == t.completeStructData[a].lines[c]) return i + c
                            }
                            return i + t.completeStructData[a].lines.length - r
                        }
                        i += t.completeStructData[a].lines.length
                    }
                    return i - r
                }
                return n ? this.zoomY([r(n[0], !0), r(n[1], !1)]) : [e(t.zoomY[0]), e(t.zoomY[1])]
            },
            sort: function(t, n, e) {
                null == n && (n = t.labelCmpFunction),
                null == e && (e = t.grpCmpFunction),
                t.labelCmpFunction = n,
                t.grpCmpFunction = e,
                t.completeStructData.sort(function(t, n) {
                    return e(t.group, n.group)
                });
                for (var r = 0,
                i = t.completeStructData.length; r < i; r++) t.completeStructData[r].lines.sort(n);
                return t._rerender(),
                this
            },
            sortAlpha: function(t, n) {
                null == n && (n = !0);
                var e = function(t, e) {
                    return Am(n ? t: e, n ? e: t)
                };
                return this.sort(e, e)
            },
            sortChrono: function(t, n) {
                function e(n) {
                    for (var e = {},
                    r = 0,
                    i = t.completeFlatData.length; r < i; r++) {
                        var a = n(t.completeFlatData[r]);
                        if (!e.hasOwnProperty(a)) {
                            var o = t.completeFlatData.filter(function(t) {
                                return a == n(t)
                            });
                            e[a] = [Km(o,
                            function(t) {
                                return t.timeRange[0]
                            }), Jm(o,
                            function(t) {
                                return t.timeRange[1]
                            })]
                        }
                    }
                    return e
                }
                function r(t, n) {
                    return function(e, r) {
                        return i(t(n ? e: r), t(n ? r: e))
                    }
                }
                null == n && (n = !0);
                var i = function(t, n) {
                    var e = t[1],
                    r = n[1];
                    return e && r ? e[1].getTime() == r[1].getTime() ? e[0].getTime() == r[0].getTime() ? Am(t[0], n[0]) : e[0] - r[0] : r[1] - e[1] : null
                },
                a = e(function(t) {
                    return t.group
                }),
                o = e(function(t) {
                    return t.label
                }),
                u = r(function(t) {
                    return [t, a[t] || null]
                },
                n),
                c = r(function(t) {
                    return [t, o[t] || null]
                },
                n);
                return this.sort(c, u)
            },
            overviewDomain: function(t, n) {
                return t.enableOverview ? n ? (t.overviewArea.domainRange(n), this) : t.overviewArea.domainRange() : null
            },
            refresh: function(t) {
                return t._rerender(),
                this
            }
        },
        stateInit: {
            height: null,
            overviewHeight: 20,
            minLabelFont: 2,
            groupBkgGradient: ["#FAFAFA", "#E0E0E0"],
            xScale: xC(),
            yScale: uo(),
            grpScale: io(),
            xAxis: p(),
            xGrid: h(),
            yAxis: d(),
            grpAxis: g(),
            svg: null,
            graph: null,
            overviewAreaElem: null,
            overviewArea: null,
            graphW: null,
            graphH: null,
            completeStructData: null,
            structData: null,
            completeFlatData: null,
            flatData: null,
            totalNLines: null,
            nLines: null,
            minSegmentDuration: 0,
            transDuration: 700,
            labelCmpFunction: Am,
            grpCmpFunction: Am
        },
        init: function(t, n) {
            var e = E_(t).attr("class", "timelines-chart");
            n.svg = e.append("svg"),
            n.overviewAreaElem = e.append("div"),
            function() {
                function t(t, n) {
                    n = n ||
                    function(t, n) {
                        return t >= n
                    };
                    var e = this.domain(),
                    r = this.range();
                    2 === r.length && 2 !== e.length && (r = Xm(r[0], r[1], (r[1] - r[0]) / e.length));
                    for (var i = r[0], a = 0, o = r.length; a < o; a++) if (n(r[a] + i, t)) return e[Math.round(a * e.length / r.length)];
                    return this.domain()[this.domain().length - 1]
                }
                n.yScale.invert = t,
                n.grpScale.invert = t,
                n.groupGradId = pU().colorScale(yo().domain([0, 1]).range(n.groupBkgGradient)).angle( - 90)(n.svg.node()).id(),
                n.graphW = n.width - n.leftMargin - n.rightMargin,
                n.xScale.range([0, n.graphW]).clamp(!0),
                n.svg.attr("width", n.width);
                var e = n.svg.append("g");
                n.graph = n.svg.append("g").attr("transform", "translate(" + n.leftMargin + "," + n.topMargin + ")"),
                e.attr("class", "axises").attr("transform", "translate(" + n.leftMargin + "," + n.topMargin + ")"),
                e.append("g").attr("class", "x-axis"),
                e.append("g").attr("class", "x-grid"),
                e.append("g").attr("class", "y-axis").attr("transform", "translate(" + n.graphW + ", 0)"),
                e.append("g").attr("class", "grp-axis"),
                n.xAxis.scale(n.xScale).ticks(Math.round(.011 * n.graphW)),
                n.xGrid.scale(n.xScale).tickFormat("").ticks(n.xAxis.ticks()[0]),
                n.yAxis.scale(n.yScale).tickSize(0),
                n.grpAxis.scale(n.grpScale).tickSize(0),
                n.colorLegend = $F()(n.svg.append("g").attr("transform", "translate(" + (n.leftMargin + .05 * n.graphW) + ",2)").node()),
                n.enableOverview &&
                function() {
                    var t = {
                        top: 1,
                        right: 20,
                        bottom: 20,
                        left: 20
                    };
                    n.overviewArea = ZF({
                        margins: t,
                        width: .8 * n.width,
                        height: n.overviewHeight + t.top + t.bottom
                    }).onChange(function(t, e) {
                        n.svg.dispatch("zoom", {
                            detail: {
                                zoomX: [t, e],
                                zoomY: null
                            }
                        })
                    }).domainRange(n.zoomX).currentSelection(n.zoomX)(n.overviewAreaElem.node()),
                    n.svg.on("zoomScent",
                    function() {
                        var t = m_.detail.zoomX;
                        n.overviewArea && t && (t[0] < n.overviewArea.domainRange()[0] || t[1] > n.overviewArea.domainRange()[1] ? n.overviewArea.update([new Date(Math.min(t[0], n.overviewArea.domainRange()[0])), new Date(Math.max(t[1], n.overviewArea.domainRange()[1]))], n.zoomX) : n.overviewArea.currentSelection(t))
                    })
                } ()
            } (),
            n.groupTooltip = aE().attr("class", "chart-tooltip group-tooltip").direction("w").offset([0, 0]).html(function(t) {
                var e = t.hasOwnProperty("timeRange") ? n.xScale(t.timeRange[0]) : 0,
                r = t.hasOwnProperty("label") ? n.grpScale(t.group) - n.yScale(t.group + "+&+" + t.label) : 0;
                return n.groupTooltip.offset([r, -e]),
                t.group
            }),
            n.svg.call(n.groupTooltip),
            n.lineTooltip = aE().attr("class", "chart-tooltip line-tooltip").direction("e").offset([0, 0]).html(function(t) {
                var e = t.hasOwnProperty("timeRange") ? n.xScale.range()[1] - n.xScale(t.timeRange[1]) : 0;
                return n.lineTooltip.offset([0, e]),
                t.label
            }),
            n.svg.call(n.lineTooltip),
            n.segmentTooltip = aE().attr("class", "chart-tooltip segment-tooltip").direction("s").offset([5, 0]).html(function(t) {
                var e = n.zColorScale.domain()[n.zColorScale.domain().length - 1] - n.zColorScale.domain()[0],
                r = DN("%Y-%m-%d %H:%M:%S");
                 return "<strong>From: </strong>" + r(t.timeRange[0]) + "<br><strong>To: </strong>" + r(t.timeRange[1])
            }),
            n.svg.call(n.segmentTooltip),
            function() {
                n.graph.on("mousedown",
                function() {
                    if (null == E_(window).on("mousemove.zoomRect")) {
                        var t = this;
                        if (! (w_(t)[0] < 0 || w_(t)[0] > n.graphW || w_(t)[1] < 0 || w_(t)[1] > n.graphH)) {
                            n.disableHover = !0;
                            var e = n.graph.append("rect").attr("class", "chart-zoom-selection"),
                            r = w_(t);
                            E_(window).on("mousemove.zoomRect",
                            function() {
                                m_.stopPropagation();
                                var i = [Math.max(0, Math.min(n.graphW, w_(t)[0])), Math.max(0, Math.min(n.graphH, w_(t)[1]))];
                                e.attr("x", Math.min(r[0], i[0])).attr("y", Math.min(r[1], i[1])).attr("width", Math.abs(i[0] - r[0])).attr("height", Math.abs(i[1] - r[1])),
                                n.svg.dispatch("zoomScent", {
                                    detail: {
                                        zoomX: [r[0], i[0]].sort(Em).map(n.xScale.invert),
                                        zoomY: [r[1], i[1]].sort(Em).map(function(t) {
                                            return n.yScale.domain().indexOf(n.yScale.invert(t)) + (n.zoomY && n.zoomY[0] ? n.zoomY[0] : 0)
                                        })
                                    }
                                })
                            }).on("mouseup.zoomRect",
                            function() {
                                E_(window).on("mousemove.zoomRect", null).on("mouseup.zoomRect", null),
                                E_("body").classed("stat-noselect", !1),
                                e.remove(),
                                n.disableHover = !1;
                                var i = [Math.max(0, Math.min(n.graphW, w_(t)[0])), Math.max(0, Math.min(n.graphH, w_(t)[1]))];
                                if (r[0] != i[0] || r[1] != i[1]) {
                                    var a = [r[0], i[0]].sort(Em).map(n.xScale.invert),
                                    o = [r[1], i[1]].sort(Em).map(function(t) {
                                        return n.yScale.domain().indexOf(n.yScale.invert(t)) + (n.zoomY && n.zoomY[0] ? n.zoomY[0] : 0)
                                    }),
                                    u = a[1] - a[0] > 6e4,
                                    c = o[0] != n.zoomY[0] || o[1] != n.zoomY[1]; (u || c) && n.svg.dispatch("zoom", {
                                        detail: {
                                            zoomX: u ? a: null,
                                            zoomY: c ? o: null
                                        }
                                    })
                                }
                            },
                            !0),
                            m_.stopPropagation()
                        }
                    }
                });
                var t = n.svg.append("text").attr("class", "reset-zoom-btn").text("ResetZoom").attr("x", n.leftMargin + .99 * n.graphW).attr("y", .8 * n.topMargin).style("text-anchor", "end").on("mouseup",
                function() {
                    n.svg.dispatch("resetZoom")
                }).on("mouseover",
                function() {
                    E_(this).style("opacity", 1)
                }).on("mouseout",
                function() {
                    E_(this).style("opacity", .6)
                });
                yU().bbox({
                    width: .4 * n.graphW,
                    height: Math.min(13, .8 * n.topMargin)
                })(t.node())
            } (),
            n.svg.on("zoom",
            function() {
                var t = m_.detail,
                e = t.zoomX,
                r = t.zoomY,
                i = null == t.redraw || t.redraw; (e || r) && (e && (n.zoomX = e), r && (n.zoomY = r), n.svg.dispatch("zoomScent", {
                    detail: {
                        zoomX: e,
                        zoomY: r
                    }
                }), i && (n._rerender(), n.onZoom && n.onZoom(n.zoomX, n.zoomY)))
            }),
            n.svg.on("resetZoom",
            function() {
                var t = n.zoomX,
                e = n.zoomY || [null, null],
                r = n.enableOverview ? n.overviewArea.domainRange() : [Km(n.flatData,
                function(t) {
                    return t.timeRange[0]
                }), Jm(n.flatData,
                function(t) {
                    return t.timeRange[1]
                })],
                i = [null, null]; (t[0] < r[0] || t[1] > r[1] || e[0] != i[0] || e[1] != r[1]) && (n.zoomX = [new Date(Math.min(t[0], r[0])), new Date(Math.max(t[1], r[1]))], n.zoomY = i, n.svg.dispatch("zoomScent", {
                    detail: {
                        zoomX: n.zoomX,
                        zoomY: n.zoomY
                    }
                }), n._rerender()),
                n.onZoom && n.onZoom(null, null)
            })
        },
        update: function(t) { !
            function() {
                if (t.flatData = t.minSegmentDuration > 0 ? t.completeFlatData.filter(function(n) {
                    return n.timeRange[1] - n.timeRange[0] >= t.minSegmentDuration
                }) : t.completeFlatData, null != t.zoomY && t.zoomY != [null, null]) {
                    t.structData = [];
                    var n = [null == t.zoomY[0] ? 0 : t.zoomY[0]];
                    n.push(Math.max(0, (null == t.zoomY[1] ? t.totalNLines: t.zoomY[1] + 1) - n[0])),
                    t.nLines = n[1];
                    for (var e = 0,
                    r = t.completeStructData.length; e < r; e++) {
                        var i = t.completeStructData[e].lines;
                        if (t.minSegmentDuration > 0) {
                            if (!t.flatData.some(function(n) {
                                return n.group == t.completeStructData[e].group
                            })) continue;
                            i = t.completeStructData[e].lines.filter(function(n) {
                                return t.flatData.some(function(r) {
                                    return r.group == t.completeStructData[e].group && r.label == n
                                })
                            })
                        }
                        if (n[0] >= i.length) n[0] -= i.length;
                        else {
                            var a = {
                                group: t.completeStructData[e].group,
                                lines: null
                            };
                            if (i.length - n[0] >= n[1]) {
                                a.lines = i.slice(n[0], n[1] + n[0]),
                                t.structData.push(a),
                                n[1] = 0;
                                break
                            }
                            n[0] > 0 ? (a.lines = i.slice(n[0]), n[0] = 0) : a.lines = i,
                            t.structData.push(a),
                            n[1] -= a.lines.length
                        }
                    }
                    t.nLines -= n[1]
                } else {
                    t.structData = t.completeStructData,
                    t.nLines = 0;
                    for (var e = 0,
                    r = t.structData.length; e < r; e++) t.nLines += t.structData[e].lines.length
                }
            } (),
            t.graphH = Km([t.nLines * t.maxLineHeight, t.maxHeight - t.topMargin - t.bottomMargin]),
            t.height = t.graphH + t.topMargin + t.bottomMargin,
            t.svg.transition().duration(t.transDuration).attr("height", t.height),
            t.zoomX[0] = t.zoomX[0] || Km(t.flatData,
            function(t) {
                return t.timeRange[0]
            }),
            t.zoomX[1] = t.zoomX[1] || Jm(t.flatData,
            function(t) {
                return t.timeRange[1]
            }),
            t.xScale.domain(t.zoomX),
            function() {
                for (var n = [], e = 0, r = t.structData.length; e < r; e++) n = n.concat(t.structData[e].lines.map(function(n) {
                    return t.structData[e].group + "+&+" + n
                }));
                t.yScale.domain(n),
                t.yScale.range([t.graphH / n.length * .5, t.graphH * (1 - .5 / n.length)])
            } (),
            function() {
                t.grpScale.domain(t.structData.map(function(t) {
                    return t.group
                }));
                var n = 0;
                t.grpScale.range(t.structData.map(function(e) {
                    var r = (n + e.lines.length / 2) / t.nLines * t.graphH;
                    return n += e.lines.length,
                    r
                }))
            } (),
            function() {
                function n(t, n) {
                    return t.length <= n ? t: t.substring(0, 2 * n / 3) + "..." + t.substring(t.length - n / 3, t.length)
                }
                t.svg.select("g.x-axis").style("stroke-opacity", 0).style("fill-opacity", 0).attr("transform", "translate(0," + t.graphH + ")").transition().duration(t.transDuration).call(t.xAxis).style("stroke-opacity", 1).style("fill-opacity", 1),
                t.xGrid.tickSize(t.graphH),
                t.svg.select("g.x-grid").attr("transform", "translate(0," + t.graphH + ")").transition().duration(t.transDuration).call(t.xGrid);
                var e = Math.ceil(t.nLines * t.minLabelFont / Math.sqrt(2) / t.graphH / .6),
                r = t.yScale.domain().filter(function(t, n) {
                    return ! (n % e)
                }),
                i = Math.min(12, t.graphH / r.length * .6 * Math.sqrt(2)),
                a = Math.ceil(t.rightMargin / (i / Math.sqrt(2)));
                t.yAxis.tickValues(r),
                t.yAxis.tickFormat(function(t) {
                    return n(t.split("+&+")[1], a)
                }),
                t.svg.select("g.y-axis").transition().duration(t.transDuration).style("font-size", i + "px").call(t.yAxis);
                var o = Km(t.grpScale.range(),
                function(n, e) {
                    return e > 0 ? n - t.grpScale.range()[e - 1] : 2 * n
                });
                i = Math.min(14, .6 * o * Math.sqrt(2)),
                a = Math.floor(t.leftMargin / (i / Math.sqrt(2))),
                t.grpAxis.tickFormat(function(t) {
                    return n(t, a)
                }),
                t.svg.select("g.grp-axis").transition().duration(t.transDuration).style("font-size", i + "px").call(t.grpAxis),
                t.onLabelClick && t.svg.selectAll("g.y-axis,g.grp-axis").selectAll("text").style("cursor", "pointer").on("click",
                function(n) {
                    var e = n.split("+&+"),
                    r = e[e.length - 1];
                    t.onLabelClick(r)
                })
            } (),
            function() {
                var n = t.graph.selectAll("rect.series-group").data(t.structData,
                function(t) {
                    return t.group
                });
                n.exit().transition().duration(t.transDuration).style("stroke-opacity", 0).style("fill-opacity", 0).remove();
                var e = n.enter().append("rect").attr("class", "series-group").attr("width", t.graphW).attr("x", 0).attr("y", 0).attr("height", 0).style("stroke","white").style("fill", "url(#" + t.groupGradId + ")").on("mouseover", t.groupTooltip.show).on("mouseout", t.groupTooltip.hide);
                e.append("title").text("click-drag to zoom in"),
                (n = n.merge(e)).transition().duration(t.transDuration).attr("height",
                function(n) {
                    return t.graphH * n.lines.length / t.nLines
                }).attr("y",
                function(n) {
                    return t.grpScale(n.group) - t.graphH * n.lines.length / t.nLines / 2
                })
            } (),
            function(n) {
                n < 0 && (n = null);
                t.lineHeight = t.graphH / t.nLines * .8;
                var e = t.graph.selectAll("rect.series-segment").data(t.flatData.filter(function(e, r) {
                    return (null == n || r < n) && t.grpScale.domain().indexOf(e.group) + 1 && e.timeRange[1] >= t.xScale.domain()[0] && e.timeRange[0] <= t.xScale.domain()[1] && t.yScale.domain().indexOf(e.group + "+&+" + e.label) + 1
                }),
                function(t) {
                    return t.group + t.label + t.timeRange[0]
                });
                e.exit().transition().duration(t.transDuration).style("fill-opacity", 0).remove();
                var r = e.enter().append("rect").attr("class", "series-segment").attr("rx", 1).attr("ry", 1).attr("x", t.graphW / 2).attr("y", t.graphH / 2).attr("width", 0).attr("height", 0).style("fill",
                function(n) {
                    return t.zColorScale(n.val)
                }).style("fill-opacity", 0).on("mouseover.groupTooltip", t.groupTooltip.show).on("mouseout.groupTooltip", t.groupTooltip.hide).on("mouseover.lineTooltip", t.lineTooltip.show).on("mouseout.lineTooltip", t.lineTooltip.hide).on("mouseover.segmentTooltip", t.segmentTooltip.show).on("mouseout.segmentTooltip", t.segmentTooltip.hide);
                r.on("mouseover",
                function() {
                    if (! ("disableHover" in t && t.disableHover)) {
                        sE()(this);
                        var n = .4 * t.lineHeight;
                        E_(this).transition().duration(70).attr("x",
                        function(e) {
                            return t.xScale(e.timeRange[0]) - n / 2
                        }).attr("width",
                        function(e) {
                            return Jm([1, t.xScale(e.timeRange[1]) - t.xScale(e.timeRange[0])]) + n
                        }).attr("y",
                        function(e) {
                            return t.yScale(e.group + "+&+" + e.label) - (t.lineHeight + n) / 2
                        }).attr("height", t.lineHeight + n).style("fill-opacity", 1)
                    }
                }).on("mouseout",
                function() {
                    E_(this).transition().duration(250).attr("x",
                    function(n) {
                        return t.xScale(n.timeRange[0])
                    }).attr("width",
                    function(n) {
                        return Jm([1, t.xScale(n.timeRange[1]) - t.xScale(n.timeRange[0])])
                    }).attr("y",
                    function(n) {
                        return t.yScale(n.group + "+&+" + n.label) - t.lineHeight / 2
                    }).attr("height", t.lineHeight).style("fill-opacity", .8)
                }),
                (e = e.merge(r)).transition().duration(t.transDuration).attr("x",
                function(n) {
                    return t.xScale(n.timeRange[0])
                }).attr("width",
                function(n) {
                    return Jm([1, t.xScale(n.timeRange[1]) - t.xScale(n.timeRange[0])])
                }).attr("y",
                function(n) {
                    return t.yScale(n.group + "+&+" + n.label) - t.lineHeight / 2
                }).attr("height", t.lineHeight).style("fill-opacity", .8)
            } (),
            t.colorLegend.width(Math.max(120, t.graphW / 3 * (t.zQualitative ? 2 : 1))).height(.6 * t.topMargin).scale(t.zColorScale).label(t.zScaleLabel)
        }
    })
});