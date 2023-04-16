(self.webpackChunkpikamoon = self.webpackChunkpikamoon || []).push([
    [229], {
        25731: function(t, e, n) {
            "use strict";
            var r = n(80184);
            e.Z = function() {
                return (0, r.jsxs)("svg", {
                    width: "33",
                    height: "33",
                    viewBox: "0 0 33 33",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsxs)("g", {
                        filter: "url(#filter0_d_531_2274)",
                        children: [(0, r.jsx)("path", {
                            d: "M14.5734 1.39057C15.0224 0.00860886 16.9776 0.00860968 17.4266 1.39058L20.1535 9.78319C20.3543 10.4012 20.9303 10.8197 21.5801 10.8197H30.4046C31.8577 10.8197 32.4619 12.6791 31.2863 13.5332L24.1471 18.7201C23.6214 19.1021 23.4014 19.7791 23.6022 20.3972L26.3291 28.7898C26.7781 30.1717 25.1964 31.3209 24.0209 30.4668L16.8817 25.2799C16.3559 24.8979 15.6441 24.8979 15.1183 25.2799L7.97914 30.4668C6.80357 31.3209 5.22185 30.1717 5.67088 28.7898L8.3978 20.3972C8.59861 19.7791 8.37863 19.1021 7.8529 18.7201L0.713716 13.5332C-0.461854 12.6791 0.14231 10.8197 1.59539 10.8197H10.4199C11.0697 10.8197 11.6457 10.4012 11.8465 9.78319L14.5734 1.39057Z",
                            fill: "#F8D558"
                        }), (0, r.jsx)("path", {
                            d: "M17.1888 1.46783L19.9157 9.86044C20.15 10.5815 20.8219 11.0697 21.5801 11.0697H30.4046C31.6155 11.0697 32.119 12.6192 31.1393 13.3309L24.0002 18.5178C23.3868 18.9635 23.1302 19.7534 23.3644 20.4744L26.0914 28.867C26.4655 30.0187 25.1474 30.9763 24.1678 30.2646L17.0286 25.0776C16.4153 24.632 15.5847 24.632 14.9714 25.0776L7.83219 30.2646C6.85255 30.9763 5.53445 30.0187 5.90864 28.867L8.63557 20.4744C8.86985 19.7534 8.6132 18.9635 7.99984 18.5178L0.860662 13.3309C-0.118979 12.6192 0.38449 11.0697 1.5954 11.0697H10.4199C11.1781 11.0697 11.85 10.5815 12.0843 9.86044L14.8112 1.46783C15.1854 0.316191 16.8146 0.316191 17.1888 1.46783Z",
                            stroke: "#383737",
                            strokeWidth: "0.5"
                        })]
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("filter", {
                            id: "filter0_d_531_2274",
                            x: "0.0925293",
                            y: "0.354095",
                            width: "32.8149",
                            height: "32.406",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, r.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, r.jsx)("feOffset", {
                                dx: "1",
                                dy: "2"
                            }), (0, r.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, r.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.219608 0 0 0 0 0.215686 0 0 0 0 0.215686 0 0 0 1 0"
                            }), (0, r.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_531_2274"
                            }), (0, r.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_531_2274",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
        },
        80229: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var r = "Timer_timer__NiuSn",
                o = "Timer_sticky__jjpJ+",
                i = "Timer_timerBody__POX2Z",
                a = "Timer_countdown__klhyv",
                s = n(72791),
                c = n(52007);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function p(t, e, n) {
                return e && l(t.prototype, e), n && l(t, n), t
            }

            function f(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }

            function m(t) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, m(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function h(t, e) {
                return !e || "object" !== typeof e && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function y(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = m(t);
                    if (e) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }

            function v(t) {
                return function(t) {
                    if (Array.isArray(t)) return T(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return T(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function S(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = String(t);
                if (0 === e) return n;
                var r = n.match(/(.*?)([0-9]+)(.*)/),
                    o = r ? r[1] : "",
                    i = r ? r[3] : "",
                    a = r ? r[2] : n,
                    s = a.length >= e ? a : (v(Array(e)).map((function() {
                        return "0"
                    })).join("") + a).slice(-1 * e);
                return "".concat(o).concat(s).concat(i)
            }
            var C = {
                daysInHours: !1,
                zeroPadTime: 2
            };

            function w(t, e) {
                var n = t.days,
                    r = t.hours,
                    o = t.minutes,
                    i = t.seconds,
                    a = Object.assign(Object.assign({}, C), e),
                    s = a.daysInHours,
                    c = a.zeroPadTime,
                    u = a.zeroPadDays,
                    l = void 0 === u ? c : u,
                    p = Math.min(2, c),
                    f = s ? S(r + 24 * n, c) : S(r, p);
                return {
                    days: s ? "" : S(n, l),
                    hours: f,
                    minutes: S(o, p),
                    seconds: S(i, p)
                }
            }
            var b = function(t) {
                f(n, t);
                var e = y(n);

                function n() {
                    var t;
                    return u(this, n), (t = e.apply(this, arguments)).state = {
                        count: t.props.count || 3
                    }, t.startCountdown = function() {
                        t.interval = window.setInterval((function() {
                            0 === t.state.count - 1 ? (t.stopCountdown(), t.props.onComplete && t.props.onComplete()) : t.setState((function(t) {
                                return {
                                    count: t.count - 1
                                }
                            }))
                        }), 1e3)
                    }, t.stopCountdown = function() {
                        clearInterval(t.interval)
                    }, t.addTime = function(e) {
                        t.stopCountdown(), t.setState((function(t) {
                            return {
                                count: t.count + e
                            }
                        }), t.startCountdown)
                    }, t
                }
                return p(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.startCountdown()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children ? (0, s.cloneElement)(this.props.children, {
                            count: this.state.count
                        }) : null
                    }
                }]), n
            }(s.Component);
            b.propTypes = {
                count: c.number,
                children: c.element,
                onComplete: c.func
            };
            var g = function(t) {
                f(n, t);
                var e = y(n);

                function n(t) {
                    var r;
                    if (u(this, n), (r = e.call(this, t)).mounted = !1, r.initialTimestamp = r.calcOffsetStartTimestamp(), r.offsetStartTimestamp = r.props.autoStart ? 0 : r.initialTimestamp, r.offsetTime = 0, r.legacyMode = !1, r.legacyCountdownRef = (0, s.createRef)(), r.tick = function() {
                            var t = r.calcTimeDelta(),
                                e = t.completed && !r.props.overtime ? void 0 : r.props.onTick;
                            r.setTimeDeltaState(t, void 0, e)
                        }, r.start = function() {
                            if (!r.isStarted()) {
                                var t = r.offsetStartTimestamp;
                                r.offsetStartTimestamp = 0, r.offsetTime += t ? r.calcOffsetStartTimestamp() - t : 0;
                                var e = r.calcTimeDelta();
                                r.setTimeDeltaState(e, "STARTED", r.props.onStart), r.props.controlled || e.completed && !r.props.overtime || (r.clearTimer(), r.interval = window.setInterval(r.tick, r.props.intervalDelay))
                            }
                        }, r.pause = function() {
                            r.isPaused() || (r.clearTimer(), r.offsetStartTimestamp = r.calcOffsetStartTimestamp(), r.setTimeDeltaState(r.state.timeDelta, "PAUSED", r.props.onPause))
                        }, r.stop = function() {
                            r.isStopped() || (r.clearTimer(), r.offsetStartTimestamp = r.calcOffsetStartTimestamp(), r.offsetTime = r.offsetStartTimestamp - r.initialTimestamp, r.setTimeDeltaState(r.calcTimeDelta(), "STOPPED", r.props.onStop))
                        }, r.isStarted = function() {
                            return r.isStatus("STARTED")
                        }, r.isPaused = function() {
                            return r.isStatus("PAUSED")
                        }, r.isStopped = function() {
                            return r.isStatus("STOPPED")
                        }, r.isCompleted = function() {
                            return r.isStatus("COMPLETED")
                        }, t.date) {
                        var o = r.calcTimeDelta();
                        r.state = {
                            timeDelta: o,
                            status: o.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else r.legacyMode = !0;
                    return r
                }
                return p(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.legacyMode || (this.mounted = !0, this.props.onMount && this.props.onMount(this.calcTimeDelta()), this.props.autoStart && this.start())
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t) {
                        this.legacyMode || this.props.date !== t.date && (this.initialTimestamp = this.calcOffsetStartTimestamp(), this.offsetStartTimestamp = this.initialTimestamp, this.offsetTime = 0, this.setTimeDeltaState(this.calcTimeDelta()))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.legacyMode || (this.mounted = !1, this.clearTimer())
                    }
                }, {
                    key: "calcTimeDelta",
                    value: function() {
                        var t = this.props,
                            e = t.date,
                            n = t.now,
                            r = t.precision,
                            o = t.controlled,
                            i = t.overtime;
                        return function(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.now,
                                o = void 0 === r ? Date.now : r,
                                i = n.precision,
                                a = void 0 === i ? 0 : i,
                                s = n.controlled,
                                c = n.offsetTime,
                                u = void 0 === c ? 0 : c,
                                l = n.overtime;
                            e = "string" === typeof t ? new Date(t).getTime() : t instanceof Date ? t.getTime() : t, s || (e += u);
                            var p = s ? e : e - o(),
                                f = Math.min(20, Math.max(0, a)),
                                m = Math.round(1e3 * parseFloat(((l ? p : Math.max(0, p)) / 1e3).toFixed(f))),
                                d = Math.abs(m) / 1e3;
                            return {
                                total: m,
                                days: Math.floor(d / 86400),
                                hours: Math.floor(d / 3600 % 24),
                                minutes: Math.floor(d / 60 % 60),
                                seconds: Math.floor(d % 60),
                                milliseconds: Number((d % 1 * 1e3).toFixed()),
                                completed: m <= 0
                            }
                        }(e, {
                            now: n,
                            precision: r,
                            controlled: o,
                            offsetTime: this.offsetTime,
                            overtime: i
                        })
                    }
                }, {
                    key: "calcOffsetStartTimestamp",
                    value: function() {
                        return Date.now()
                    }
                }, {
                    key: "addTime",
                    value: function(t) {
                        this.legacyCountdownRef.current.addTime(t)
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        window.clearInterval(this.interval)
                    }
                }, {
                    key: "isStatus",
                    value: function(t) {
                        return this.state.status === t
                    }
                }, {
                    key: "setTimeDeltaState",
                    value: function(t, e, n) {
                        var r = this;
                        if (this.mounted) {
                            var o = t.completed && !this.state.timeDelta.completed,
                                i = t.completed && "STARTED" === e;
                            o && !this.props.overtime && this.clearTimer();
                            return this.setState((function(n) {
                                var o = e || n.status;
                                return t.completed && !r.props.overtime ? o = "COMPLETED" : e || "COMPLETED" !== o || (o = "STOPPED"), {
                                    timeDelta: t,
                                    status: o
                                }
                            }), (function() {
                                n && n(r.state.timeDelta), r.props.onComplete && (o || i) && r.props.onComplete(t, i)
                            }))
                        }
                    }
                }, {
                    key: "getApi",
                    value: function() {
                        return this.api = this.api || {
                            start: this.start,
                            pause: this.pause,
                            stop: this.stop,
                            isStarted: this.isStarted,
                            isPaused: this.isPaused,
                            isStopped: this.isStopped,
                            isCompleted: this.isCompleted
                        }
                    }
                }, {
                    key: "getRenderProps",
                    value: function() {
                        var t = this.props,
                            e = t.daysInHours,
                            n = t.zeroPadTime,
                            r = t.zeroPadDays,
                            o = this.state.timeDelta;
                        return Object.assign(Object.assign({}, o), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: w(o, {
                                daysInHours: e,
                                zeroPadTime: n,
                                zeroPadDays: r
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var t = this.props,
                                e = t.count,
                                n = t.children,
                                r = t.onComplete;
                            return (0, s.createElement)(b, {
                                ref: this.legacyCountdownRef,
                                count: e,
                                onComplete: r
                            }, n)
                        }
                        var o = this.props,
                            i = o.className,
                            a = o.overtime,
                            c = o.children,
                            u = o.renderer,
                            l = this.getRenderProps();
                        if (u) return u(l);
                        if (c && this.state.timeDelta.completed && !a) return (0, s.cloneElement)(c, {
                            countdown: l
                        });
                        var p = l.formatted,
                            f = p.days,
                            m = p.hours,
                            d = p.minutes,
                            h = p.seconds;
                        return (0, s.createElement)("span", {
                            className: i
                        }, l.total < 0 ? "-" : "", f, f ? ":" : "", m, ":", d, ":", h)
                    }
                }]), n
            }(s.Component);
            g.defaultProps = Object.assign(Object.assign({}, C), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }), g.propTypes = {
                date: (0, c.oneOfType)([(0, c.instanceOf)(Date), c.string, c.number]),
                daysInHours: c.bool,
                zeroPadTime: c.number,
                zeroPadDays: c.number,
                controlled: c.bool,
                intervalDelay: c.number,
                precision: c.number,
                autoStart: c.bool,
                overtime: c.bool,
                className: c.string,
                children: c.element,
                renderer: c.func,
                now: c.func,
                onMount: c.func,
                onStart: c.func,
                onPause: c.func,
                onStop: c.func,
                onTick: c.func,
                onComplete: c.func
            };
            var D = g,
                O = n(25731),
                j = n(4792),
                x = n(59434),
                P = n(79849),
                _ = n(80184),
                k = function(t) {
                    var e = t.days,
                        n = t.hours,
                        r = t.minutes,
                        o = t.seconds;
                    return t.completed ? (0, _.jsx)("div", {
                        className: a,
                        children: "NOW"
                    }) : (0, _.jsx)(_.Fragment, {
                        children: (0, _.jsxs)("div", {
                            className: a,
                            children: [e, "D ", n, "H ", r, "M ", o, "S"]
                        })
                    })
                },
                E = function(t) {
                    var e = t.className,
                        n = (0, j.ac)("(max-width:767px)"),
                        a = new Date(16816644e5),
                        c = (0, s.useRef)(),
                        u = (0, x.I0)(),
                        l = function() {
                            window.innerWidth, window.scrollY >= 50 ? c.current.classList.add(o) : c.current.classList.contains(o) && c.current.classList.remove(o)
                        };
                    return (0, s.useEffect)((function() {
                        l(), window.addEventListener("scroll", l)
                    })), (0, _.jsx)("div", {
                        ref: c,
                        className: "".concat(r, " ").concat(e),
                        children: (0, _.jsxs)("div", {
                            className: i,
                            children: [(0, _.jsx)(O.Z, {}), (0, _.jsxs)("span", {
                                children: ["$PIKA ICO LIVE IN ", n ? (0, _.jsx)("br", {}) : "", " ", (0, _.jsx)(D, {
                                    date: a,
                                    renderer: k
                                })]
                            }), (0, _.jsx)("a", {
                                onClick: function() {
                                    var t = document.querySelector("body");
                                    u((0, P.aJ)()), t.classList.add("lock")
                                },
                                href: "#",
                                children: "view more"
                            }), (0, _.jsx)(O.Z, {})]
                        })
                    })
                }
        },
        80888: function(t, e, n) {
            "use strict";
            var r = n(79047);

            function o() {}

            function i() {}
            i.resetWarningCache = o, t.exports = function() {
                function t(t, e, n, o, i, a) {
                    if (a !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        52007: function(t, e, n) {
            t.exports = n(80888)()
        },
        79047: function(t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    }
]);
//# sourceMappingURL=229.c3870803.chunk.js.map