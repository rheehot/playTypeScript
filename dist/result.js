function e() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];

  return new Promise(function (e, t) {
    var o,
        a,
        c = performance.now(),
        r = 0,
        i = [],
        l = function () {
      console.log(e), e && e({
        ok: !0,
        urlList: n,
        successInfo: i,
        totalTime: performance.now() - c
      });
    },
        u = function (e) {
      t && t({
        ok: !1,
        failInfo: {
          src: n[r],
          eventType: e.type,
          time: performance.now() - c
        },
        urlList: n,
        successInfo: i
      });
    };

    o = function (e) {
      i.push({
        src: n[r],
        eventType: e.type,
        time: performance.now() - c
      }), r++, n[r] ? a(n[r]) : l();
    }, a = function (e) {
      var n;
      console.log("jsLoaded :", e);
      var t = document.head;
      (n = document.createElement("script")).onload = o, n.onerror = u, n.src = e, t.appendChild(n);
    }, n.length ? a(n[r]) : l();
  });
}

function n() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return function (n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = {};

    for (var a in e) o[a] = e[a];

    for (var c in t) o[c] = t[c];

    return fetch(n, o);
  };
}

function t(e, n) {
  var t, o;
  return t = new RegExp("[\\?&]" + e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"), null === (o = n ? t.exec(n) : t.exec(location.search)) ? void 0 : decodeURIComponent(o[1].replace(/\+/g, " "));
}

function o(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function a(e) {
  return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}

function c(e, n) {
  return (c = Object.setPrototypeOf || function (e, n) {
    return e.__proto__ = n, e;
  })(e, n);
}

function r(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

var i,
    l = 1,
    u = function e() {
  var n, t, a;
  o(this, e), a = void 0, (t = "_uuid") in (n = this) ? Object.defineProperty(n, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = a, this._uuid = l, l++;
};

function s() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];

  throw new Error(n.join(" "));
}

var d,
    f,
    p,
    h,
    m,
    v,
    y = window.navigator,
    b = y.userAgent.toLowerCase(),
    g = y.platform.toLowerCase(),
    w = y.appVersion.toLowerCase(),
    N = "pc",
    O = 0,
    x = function () {
  return b.indexOf("whale") < 0 ? 0 : (f = parseFloat(/whale\/([\d]+)/.exec(b)[1]), d = "whale");
},
    k = function () {
  if (!(b.indexOf(m = "chrome") < 0 && b.indexOf(m = "crios") < 0)) return d = "chrome", f = parseFloat(("chrome" == m ? /chrome\/([\d]+)/ : /crios\/([\d]+)/).exec(b)[1]);
},
    A = function () {
  return b.indexOf("firefox") < 0 ? 0 : (d = "firefox", f = parseFloat(/firefox\/([\d]+)/.exec(b)[1]));
},
    E = function () {
  return b.indexOf("safari") < 0 ? 0 : (d = "safari", f = parseFloat(/safari\/([\d]+)/.exec(b)[1]));
},
    T = function () {
  var e;
  return b.indexOf(e = "opera") < 0 && b.indexOf(e = "opr") < 0 ? 0 : (d = "opera", f = "opera" == e ? parseFloat(/version\/([\d]+)/.exec(b)[1]) : parseFloat(/opr\/([\d]+)/.exec(b)[1]));
},
    L = function () {
  return b.indexOf("naver") < 0 ? 0 : d = "naver";
};

if (i || (i = {}), b.indexOf("android") > -1) d = p = "android", N = -1 == b.indexOf("mobile") ? (d += "Tablet", "tablet") : "mobile", h = (m = /android ([\d.]+)/.exec(b)) ? (m = m[1].split("."), parseFloat(m[0] + "." + m[1])) : 0, O = 1, x() || L() || T() || k() || A() || (f = m = /safari\/([\d.]+)/.exec(b) ? parseFloat(m[1]) : 0);else if (b.indexOf(m = "ipad") > -1 || b.indexOf(m = "iphone") > -1) N = "ipad" == m ? "tablet" : "mobile", d = p = m, h = (m = /os ([\d_]+)/.exec(b)) ? (m = m[1].split("_"), parseFloat(m[0] + "." + m[1])) : 0, O = 1, x() || L() || T() || k() || A() || (f = (m = /mobile\/([\S]+)/.exec(b)) ? parseFloat(m[1]) : 0);else if (g.indexOf("win") > -1) {
  for (m in v = {
    5.1: "xp",
    "6.0": "vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    "10.0": "10"
  }) if (b.indexOf("windows nt " + m) > -1) {
    h = v[m];
    break;
  }

  p = "win", (b.indexOf("edge") > -1 ? (b.indexOf("iemobile") > -1 && (p = "winMobile"), d = "edge", f = /edge\/([\d]+)/.exec(b)[1]) : b.indexOf("msie") < 0 && b.indexOf("trident") < 0 ? void 0 : (b.indexOf("iemobile") > -1 && (p = "winMobile"), d = "ie", f = b.indexOf("msie 7") > -1 && b.indexOf("trident") > -1 ? -1 : b.indexOf("msie") < 0 ? 11 : parseFloat(/msie ([\d]+)/.exec(b)[1]))) || x() || T() || k() || A() || E();
} else g.indexOf("mac") > -1 ? (p = "mac", m = /os x ([\d._]+)/.exec(b)[1].replace("_", ".").split("."), h = parseFloat(m[0] + "." + m[1]), x() || T() || k() || A() || E()) : (p = w.indexOf("x11") > -1 ? "unix" : w.indexOf("linux") > -1 ? "linux" : 0, x() || k() || A());

for (m in v = {
  device: N,
  isMobile: 1 == O,
  browser: d,
  browserVer: f,
  os: p,
  osVer: h,
  down: O ? "touchstart" : "mousedown",
  move: O ? "touchmove" : "mousemove",
  up: O ? "touchend" : "mouseup",
  click: "click",
  over: "mouseover",
  out: "mouseout"
}) v.hasOwnProperty(m) && (i[m] = v[m]);

var I,
    P,
    C,
    _,
    M,
    S,
    F,
    R,
    j,
    U = i,
    B = function (e) {
  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return I = (I = this instanceof W ? this.dom : document).querySelector(e) || null, n ? I : I && W(I);
},
    H = function (e, n) {
  var t;
  if (t = (this instanceof W ? this.dom : document).querySelectorAll(e), t = Array.prototype.slice.apply(t), P = t.length, !n) for (; P--;) t[P] = W(t[P]);
  return t;
};

C = {}, _ = function (e) {
  return "body" === e && (e = document.body), e instanceof Element ? R = C[e.__uuid] ? C[e.__uuid] : new M(e) : "<" === (e = e.trim()).charAt(0) ? ((j = document.createElement("div")).innerHTML = e, R = new M(j.childNodes[0]), j = null) : "#" === e.charAt(0) ? (j = document.getElementById(e = e.substr(1, e.length - 1)), R = j && C[j.__uuid] ? C[j.__uuid] : j ? new M(j) : null) : R = new M(document.createElement(e)), R;
}, S = (M = function (e) {
  function n(e) {
    var t, c, i;
    return o(this, n), c = this, ((t = !(i = a(n).call(this)) || "object" != typeof i && "function" != typeof i ? r(c) : i).dom = e).__uuid = t._uuid, C[t.dom.__uuid] = r(t), !t.dom.dataset && (t.dom.dataset = {}), t;
  }

  return function (e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), n && c(e, n);
  }(n, u), n;
}()).prototype, _.fn = S, S.S = (F = {
  opacity: 1,
  "z-index": 1,
  zIndex: 1
}, function () {
  var e,
      n,
      t,
      o,
      a,
      c,
      r,
      i = arguments;

  for (t = U[t] ? U[t] : t, n = 0, e = i.length, c = (r = this.dom).style; n < e; n++) {
    if (a = !1, "@" === (t = i[n]).charAt(0) && (a = !0, t = t.substr(1, t.length - 1)), null === (o = i[++n])) "function" == typeof this[t] ? this[t](o) : a ? r.removeAttribute(t) : c[t] = "";else {
      if (!(n < i.length)) return "function" == typeof this[t] ? this[t]() : a ? r.getAttribute(t) : isNaN(parseFloat(c[t])) ? c[t] : c[t].indexOf("px") > -1 ? parseFloat(c[t]) : c[t];
      "function" == typeof this[t] ? this[t](o) : a ? r.setAttribute(t, o) : c[t] = "number" == typeof o ? F[t] ? o : o + "px" : o;
    }
    if (n === e - 1) return this;
  }
}), S.query = B, S.queryAll = H, S.className = function (e) {
  return null === e ? this.dom.removeAttribute("class") : void 0 !== e ? this.dom.className = e : this.dom.hasAttribute("class") ? this.dom.className : null;
}, S["className+"] = function () {
  var e, n, t;
  return function (o) {
    for (e = o.split(" "), n = e.length; n--;) t = e[n], !~this.dom.className.indexOf(t) && (this.dom.className += " " + t);

    return this.dom.className;
  };
}(), S["className-"] = function () {
  var e, n, t;
  return function (o) {
    for (e = o.split(" "), n = e.length; n--;) t = e[n], ~this.dom.className.indexOf(t) && (this.dom.className = this.dom.className.replace(t, ""));

    return this.dom.className = this.dom.className.replace(/ +/g, " ").trim();
  };
}(), S["+html"] = function (e) {
  return void 0 !== e ? this.dom.innerHTML = e + this.dom.innerHTML : this.dom.innerHTML;
}, S.html = function (e) {
  return void 0 !== e ? this.dom.innerHTML = e : this.dom.innerHTML;
}, S["html+"] = function (e) {
  return void 0 !== e ? this.dom.innerHTML += e : this.dom.innerHTML;
}, S["+text"] = function (e) {
  return void 0 !== e ? this.dom.textContent = e + this.dom.textContent : this.dom.textContent;
}, S.text = function (e) {
  return void 0 !== e ? this.dom.textContent = e : this.dom.textContent;
}, S["text+"] = function (e) {
  return void 0 !== e ? this.dom.textContent += e : this.dom.textContent;
}, S.value = function (e) {
  return void 0 !== e ? this.dom.value = e : this.dom.value;
}, S.parent = S["<"] = function (e) {
  if (void 0 === (e = "body" === e ? document.body : e instanceof M ? e.dom : e)) return this.dom.parentNode ? _(this.dom.parentNode) : this.dom.parentNode;
  e.appendChild(this.dom);
}, S.remove = function () {
  return this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this;
}, S.addChild = S[">"] = function (e) {
  this.dom.appendChild(e instanceof M ? e.dom : e);
}, S.addChildAt = function (e, n) {
  var t = this.dom.children[e];
  t ? this.dom.insertBefore(n instanceof M ? n.dom : n, t) : this.dom.appendChild(n instanceof M ? n.dom : n);
}, S.removeChild = function (e) {
  this.dom.removeChild(e instanceof M ? e.dom : e);
}, S.removeChildAt = function (e) {
  this.dom.children[e] && this.dom.removeChild(this.dom.children[e]);
}, S.getChildAt = function (e) {
  var n;
  return (n = this.dom.children[e]) ? _(n) : null;
}, S.getChildNum = function () {
  return this.dom.children.length;
}, S.getChildIndex = function (e) {
  return Array.prototype.indexOf.call(this.dom.children, e.dom ? e.dom : e);
}, S.getSelfIndex = function () {
  return Array.prototype.indexOf.call(this.dom.parentNode.children, this.dom);
}, function () {
  var e, n, t, o, a, c, r;

  for (o = 0, a = {}, (e = "over,out,down,up,move,click,dblclick,rightclick,wheel".split(",")).push("keydown", "keyup", "keypress"), e.push("blur", "change", "contextmenu", "focus", "input", "invalid", "reset", "select", "submit", "search"), e.push("drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "scroll"), n = {}, c = e.length, r = function (e) {
    e[t]();
  }, t = "ie" === U.browser ? "preventDefault" : "stopPropagation", c = e.length; c--;) !function () {
    var t,
        i = e[c];
    n[i] = U[i] ? U[i] : i, S[i] = function (e) {
      if (t = this.dom.__uuid, null === e) a[t] && (this.dom.removeEventListener(n[i], a[t][n[i]], !0), a[t][n[i]] = void 0);else {
        if (!e) return a[t][n[i]];
        a[t] && (this.dom.removeEventListener(n[i], a[t][n[i]], !0), a[t][n[i]] = void 0), a[t] || (a[t] = {}), a[t][n[i]] = function (n) {
          e.call(C[this.__uuid], {
            type: i,
            target: n.target,
            prevent: r,
            nativeEvent: n,
            uuid: o++
          });
        }, a[t][n[i]].originHandler = e, this.dom.addEventListener(n[i], a[t][n[i]], !0);
      }
    };
  }();
}();
var Y,
    z,
    q,
    J,
    G,
    W = _,
    D = {
  downList: {},
  upList: {},
  code2name: {},
  name2code: {}
};

for ((G = (G = "a,65,b,66,c,67,d,68,e,69,f,70,g,71,h,72,i,73,j,74,k,75,l,76,m,77,n,78,o,79,p,80,q,81,r,82,s,83,t,84,u,85,v,86,w,87,x,88,y,89,z,90,back,8,tab,9,enter,13,shift,16,control,17,alt,18,pause,19,caps,20,esc,27,space,32,pageUp,33,pageDown,34,end,35,home,36,left,37,up,38,right,39,down,40,insert,45,delete,46,numLock,144,scrollLock,145,0,48,1,49,2,50,3,51,4,52,5,53,6,54,7,55,8,56,9,57,numPad0,96,numPad1,97,numPad2,98,numPad3,99,numPad4,100,numPad5,101,numPad6,102,numPad7,103,numPad8,104,numPad9,105,numPad*,106,numPad+,107,numPad-,109,numPad.,110,numPad/,111").split(",")).push(";", 186), G.push("=", 187), G.push(",", 188), G.push("-", 189), G.push(".", 190), G.push("/", 191), G.push("`", 192), G.push("[", 219), G.push("]", 221), G.push("'", 222), G.push("\\", 220), G.push("altRight", 21), G.push("controlRight", 25), G.push("window", 91), G.push("windowRight", 92), Y = 0, z = G.length; Y < z;) q = G[Y++], J = parseInt(G[Y++]), D.name2code[q] = J, D.code2name[J] = q;

document.addEventListener("keydown", function (e) {
  D.code2name[e.keyCode] && (D.downList[D.code2name[e.keyCode]] = 1);
}), document.addEventListener("keyup", function (e) {
  D.code2name[e.keyCode] && (delete D.downList[D.code2name[e.keyCode]], D.upList[D.code2name[e.keyCode]] = 1);
}), D.resolve = function () {
  for (var e in D.upList) delete D.upList[e];
};

var X,
    V,
    K,
    $,
    Q,
    Z,
    ee,
    ne,
    te,
    oe = function (e, n, t, o, a) {
  var c;
  console.log(e, n, t, o, a), e = (e = "body" === e ? document.body : e) === window || e === document || e instanceof Element ? e : e.dom, U[n] ? (c = document.createEvent("MouseEvents")).initMouseEvent(U[n], o, a, e.ownerDocument.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null) : "keydown" === n || "keyup" === n || "keypress" === n ? (t = t.toLowerCase(), (c = document.createEvent("Event")).initEvent(n, o, a), c.keyCode = c.which = D.name2code[t], c.key = t) : (c = document.createEvent("Event")).initEvent(n, o, a), e.dispatchEvent(c);
};

Q = {}, Z = 0, V = document.createElement("style"), document.head.appendChild(V), K = V.sheet || V.stylesheet, $ = K.cssRules, ne = function (e) {
  for (var n, t = K.cssRules.length; t--;) if (K.cssRules[t].selectorText == e) {
    n = t;
    break;
  }

  return n;
}, (X = function (e) {
  if (this.__key = e, !Q[e]) try {
    K.insertRule(e + "{}", Z), this.rull = $[Z].style;
  } catch (e) {
    this.__noHasBrowser = !0;
  }
}).fn = ee = X.prototype, ee.S = function () {
  var e = "ie" == U.browser && U.browserVer < 10,
      n = /-([a-z])/gi,
      t = {
    opacity: 1,
    "z-index": 1,
    zIndex: 1,
    content: 1
  },
      o = function (e, n, t, o) {
    return n.toUpperCase();
  };

  return e ? function () {
    var e,
        a,
        c,
        r,
        i,
        l = arguments;

    for (a = 0, e = l.length, i = this.rull; a < e; a++) {
      if (c = l[a], r = l[++a], c = c.replace(n, o), !(a < l.length)) return "function" == typeof this[c] ? this[c]() : isNaN(parseFloat(i[c])) ? i[c] : i[c].indexOf("px") > -1 ? parseFloat(i[c]) : i[c];
      if ("function" == typeof this[c] ? this[c](r) : i[c] = "number" == typeof r ? t[c] ? r : r + "px" : r, a == e - 1) return this;
    }
  } : function () {
    var e,
        n,
        o,
        a,
        c,
        r = arguments;

    for (n = 0, e = r.length, c = this.rull; n < e; n++) {
      if (o = r[n], a = r[++n], !(n < r.length)) return "function" == typeof this[o] ? this[o]() : isNaN(parseFloat(c[o])) ? c[o] : c[o].indexOf("px") > -1 ? parseFloat(c[o]) : c[o];
      if ("function" == typeof this[o] ? this[o](a) : c[o] = "number" == typeof a ? t[o] ? a : a + "px" : a, n == e - 1) return this;
    }
  };
}(), ee.remove = function () {
  K.deleteRule(ne(this.__key)), delete Q[this.__key], Z--;
};

var ae,
    ce = function (e) {
  return Q[e] || (te = new X(e)).__noHasBrowser || (Q[e] = te, Z++), Q[e];
},
    re = {
  beforeLoop: {
    keyMap: {},
    list: []
  },
  mainLoop: {
    keyMap: {},
    list: []
  },
  afterLoop: {
    keyMap: {},
    list: []
  }
};

ae = function (e) {
  var n, t, o;

  for (n = 0, t = (o = re.beforeLoop.list).length; n < t; n++) o[n](e);

  for (n = 0, t = (o = re.mainLoop.list).length; n < t; n++) o[n](e);

  for (n = 0, t = (o = re.afterLoop.list).length; n < t; n++) o[n](e);

  D.resolve(e), requestAnimationFrame(ae);
}, requestAnimationFrame(ae);

var ie,
    le,
    ue,
    se = function (e) {
  var n, t;
  return n = re[e].keyMap, t = re[e].list, {
    add: function (o, a) {
      if ("string" != typeof o) throw new Error(e + " - key allow only sting. input value : " + o);
      if ("function" != typeof a) throw new Error(e + " - handler allow only function. input value : " + a);
      if (n[o]) throw new Error(e + " - already defined key. input value : " + o);
      n[o] = a, t.push(a);
    },
    has: function (e) {
      return n.hasOwnProperty(e);
    },
    get: function (e) {
      return n[e];
    },
    getList: function () {
      return t.concat();
    },
    del: function (e) {
      var o;
      (o = t.indexOf(n[e])) > -1 && (t.splice(o, 1), delete n[e]);
    },
    delAll: function () {
      n = re[e].keyMap = {}, t = re[e].list = [];
    }
  };
};

ie = se("mainLoop"), le = se("beforeLoop"), ue = se("afterLoop");
var de,
    fe,
    pe,
    he = {
  addBeforeLoop: le.add,
  addMainLoop: ie.add,
  addAfterLoop: ue.add,
  hasBeforeLoop: le.has,
  hasMainLoop: ie.has,
  hasAfterLoop: ue.has,
  getBeforeLoop: le.get,
  getMainLoop: ie.get,
  getAfterLoop: ue.get,
  getBeforeLoopList: le.getList,
  getMainLoopList: ie.getList,
  getAfterLoopList: ue.getList,
  delBeforeLoop: le.del,
  delMainLoop: ie.del,
  delAfterLoop: ue.del,
  delBeforeLoopAll: le.delAll,
  delMainLoopAll: ie.delAll,
  delAfterLoopAll: ue.delAll,
  delAll: function () {
    le.delAll(), ie.delAll(), ue.delAll();
  }
};
localStorage.type = "localStorage", sessionStorage.type = "sessionStorage", de = {
  SESSION: "session",
  LOCAL: "local",
  S: function () {
    var e, n, t, o, a, c;
    return function () {
      for (console.log("tStore", pe), t = 0, n = (e = arguments).length; t < n; t++) {
        if (o = e[t], t++, null === (a = e[t]) && pe.key(o) > -1) pe.removeItem(o);else {
          if (!(t < e.length)) return "function" == typeof de[o] ? de[o]() : (c = pe.getItem(o), "NaN" !== parseInt(c).toString() ? +c : JSON.parse(c));
          "function" == typeof de[o] ? de[o](a) : pe.setItem(o, JSON.stringify(a));
        }
        if (t === n - 1) return de;
      }
    };
  }(),
  clear: function (e) {
    return e ? (localStorage.clear(), sessionStorage.clear()) : pe.clear(), de;
  }
}, Object.defineProperty(de, "mode", {
  get: function () {
    return fe;
  },
  set: function (e) {
    if (e !== de.SESSION && e !== de.LOCAL) throw new Error("올바르지않은 상수입니다.");
    fe = e, pe = e === de.SESSION ? sessionStorage : localStorage;
  }
}), fe = de.LOCAL, pe = localStorage;
var me,
    ve,
    ye,
    be,
    ge,
    we,
    Ne = de,
    Oe = {},
    xe = [];
ge = {
  w: 0,
  h: 0,
  orientation: null,
  mouseX: 0,
  mouseY: 0,
  pageX: 0,
  pageY: 0,
  getByPoint: function (e, n) {
    return ve.elementFromPoint(e, n);
  },
  scroll: function () {
    switch (me = window, ve = document, ye = ve.documentElement, be = document.body, we || (we = be.scrollHeight ? be : ve), arguments.length <= 0 ? void 0 : arguments[0]) {
      case "w":
        return Math.max(we.scrollWidth, we.clientWidth);

      case "h":
        return Math.max(we.scrollHeight, we.clientHeight);

      case "x":
        return ye.scrollLeft || me.pageXOffset || 0;

      case "y":
        return ye.scrollTop || me.pageYOffset || 0;
    }

    return me.scrollTo(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1]), ge;
  },
  add: function (e, n) {
    if ("string" != typeof e) throw new Error("WIN key names can only be defined as strings! : " + e);
    if ("function" != typeof n) throw new Error("WIN callback function can only be defined as function! : " + n);
    if (Oe[e]) return s("WIN : ".concat(e, " - 이미 존재하는 키값입니다."));
    Oe[e] = n, xe.push(n);
  },
  get: function (e) {
    return Oe[e];
  },
  del: function () {
    var e;
    return function (n) {
      (e = xe.indexOf(Oe[n])) > -1 && xe.splice(e, 1), delete Oe[n];
    };
  }(),
  has: function (e) {
    return !!Oe[e];
  },
  clear: function () {
    var e;
    return function (n) {
      for (e in Oe) delete Oe[e];

      xe.length = 0;
    };
  }()
}, window.addEventListener("mousemove", function (e) {
  ge.mouseX = e.clientX, ge.mouseY = e.clientY, ge.pageX = e.pageX, ge.pageY = e.pageY, ge.orientation = ge.w > ge.h ? "landscape" : "portrait";
}), window.addEventListener("resize", function () {
  var e,
      n = null;
  return me = window, ve = document, ye = ve.documentElement, be = document.body, function (t) {
    for (ge.w = ye ? ye.clientWidth : be.clientWidth, ge.h = ye ? ye.clientHeight : be.clientHeight, ge.orientation = ge.w > ge.h ? "landscape" : "portrait", console.log("┎─resize이벤트 시작"), e = xe.length, n = 0; n < e; n++) xe[n](t);

    console.log("┖────────────────────resize이벤트 끝끝끝~~~");
  };
}(), !0);
var ke = ge;

function Ae() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];

  return new Promise(function (e, t) {
    var o,
        a,
        c = performance.now(),
        r = 0,
        i = [],
        l = function () {
      console.log(e), e && e({
        ok: !0,
        urlList: n,
        successInfo: i
      });
    },
        u = function (e) {
      t && t({
        ok: !1,
        failInfo: {
          src: n[r],
          eventType: e.type,
          time: performance.now() - c
        },
        urlList: n,
        successInfo: i
      });
    };

    o = function (e) {
      i.push({
        src: n[r],
        eventType: e.type,
        time: performance.now() - c
      }), r++, n[r] ? a(n[r]) : l();
    }, a = function (e) {
      var n;
      console.log("cssLoaded :", e);
      var t = document.head;
      (n = document.createElement("link")).rel = "stylesheet", n.href = e, n.onload = o, n.onerror = u, n.src = e, t.appendChild(n);
    }, n.length ? a(n[r]) : l();
  });
}

var Ee,
    Te = {
  NUMBER: "NUMBER",
  INT: "INT",
  UINT: "UINT",
  STRING: "STRING",
  BOOLEAN: "BOOLEAN",
  FUNCTION: "FUNCTION",
  ARRAY: "ARRAY",
  OBJECT: "OBJECT"
},
    Le = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("min"),
      r = o.hasOwnProperty("max"),
      i = o.hasOwnProperty("callback"),
      l = c ? o.min : null,
      u = r ? o.max : null,
      d = i ? o.callback : null,
      f = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (o) {
      "number" == typeof o ? (isNaN(o) && s("".concat(e.constructor.name, " - v : Number만 허용함. / 입력값 : ").concat(o)), t !== Te.NUMBER && o !== parseInt(o) && s("".concat(e.constructor.name, " - v : 소수점 허용안함. / 입력값 : ").concat(o)), t === Te.UINT && o < 0 && s("".concat(e.constructor.name, " - v : 음수 허용안함. / 입력값 : ").concat(o)), c && o < l && (o = l), r && o > u && (o = u)) : f && null == o || s(null == o ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o) : "".concat(e.constructor.name, " - v : Number만 허용함. / 입력값 : ").concat(o)), this["_" + n] = o, i && d.call(this, o);
    }
  }, f && (o.hasOwnProperty("value") || (o.value = o.value = null)), "number" == typeof o.value ? (t !== Te.NUMBER && o.value !== parseInt(o.value) && s("".concat(e.constructor.name, " - option['value'] : 소수점 허용안함. / 입력값 : ").concat(o.value)), t === Te.UINT && o.value < 0 && s("".concat(e.constructor.name, " - option['value'] : 음수 허용안함. / 입력값 : ").concat(o.value))) : (!f || null != o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : Number만 허용함. / 입력값 : ").concat(o.value))), c && (("number" != typeof l || isNaN(l)) && s("".concat(e.constructor.name, " - option['min'] : Number만 허용함. / 입력값 : ").concat(l)), t !== Te.NUMBER && l !== parseInt(l) && s("".concat(e.constructor.name, " - option['min'] : 소수점 허용안함. / 입력값 : ").concat(l)), t === Te.UINT && o.min < 0 && s("".concat(e.constructor.name, " - option['min'] : 음수 허용안함. / 입력값 : ").concat(o.min))), r && (("number" != typeof u || isNaN(u)) && s("".concat(e.constructor.name, " - option['max'] : Number만 허용함. / 입력값 : ").concat(u)), t !== Te.NUMBER && u !== parseInt(u) && s("".concat(e.constructor.name, " - option['max'] : 소수점 허용안함. / 입력값 : ").concat(u)), t === Te.UINT && o.max < 0 && s("".concat(e.constructor.name, " - option['max'] : 음수 허용안함. / 입력값 : ").concat(o.max))), "number" == typeof o.value ? (isNaN(o.value) && s("".concat(e.constructor.name, " - option['value'] : Number만 허용함. / 입력값 : ").concat(o.value)), c && o.value < l && (o.value = l), r && o.value > u && (o.value = u), c && r && l > u && s(e.constructor.name + " - option['min'], option['max'] : min값은 max보다 작아야함", "입력값 : ", l, u)) : (!f || null != o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : Number만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, i && (d instanceof Function ? d.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(d))), a && Object.defineProperty(e, n, a);
},
    Ie = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("callback"),
      r = c ? o.callback : null,
      i = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (t) {
      "string" != typeof t && (i && null == t || s(null == t ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(t) : "".concat(e.constructor.name, " - v : string만 허용함. / 입력값 : ").concat(t))), this["_" + n] = t, c && r.call(this, t);
    }
  }, !o.hasOwnProperty("value") && i ? o.value = null : (!i && null === o.value || void 0 === o.value) && s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. 기본값이 필요함 / 입력값 : ").concat(o.value)), "string" != typeof o.value && (!i || null != o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : string만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, c && (r instanceof Function ? r.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(r))), a && Object.defineProperty(e, n, a);
},
    Pe = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("callback"),
      r = c ? o.callback : null,
      i = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (t) {
      "boolean" != typeof t && (i && null == t || s(null == t ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(t) : "".concat(e.constructor.name, " - v : boolean만 허용함. / 입력값 : ").concat(t))), this["_" + n] = t, c && r.call(this, t);
    }
  }, i ? o.hasOwnProperty("value") ? "boolean" != typeof o.value && null !== o.value && void 0 !== o.value && s("".concat(e.constructor.name, " - option['value'] : boolean or nullish만 허용함. / 입력값 : ").concat(o.value)) : o.value = null : "boolean" != typeof o.value && s("".concat(e.constructor.name, " - option['value'] : boolean만 허용함. / 입력값 : ").concat(o.value)), "boolean" != typeof o.value && (!i || null !== o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : boolean만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, c && (r instanceof Function ? r.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(r))), a && Object.defineProperty(e, n, a);
},
    Ce = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("callback"),
      r = c ? o.callback : null,
      i = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (o) {
      o instanceof t || i && null == o || s(null == o ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o) : "".concat(t.name, " - v ").concat(t.name, "만 허용함. / 입력값 : ").concat(o)), this["_" + n] = o, c && r.call(this, o);
    }
  }, i && !o.hasOwnProperty("value") && (o.value = null), o.value instanceof t || (!i || null != o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(t.name, " - option['value'] : ").concat(t.name, "만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, c && (r instanceof Function ? r.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(r))), a && Object.defineProperty(e, n, a);
},
    _e = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("callback"),
      r = c ? o.callback : null,
      i = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (t) {
      "function" != typeof t && (i && null == t || s(null == t ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(t) : "".concat(e.constructor.name, " - v : function만 허용함. / 입력값 : ").concat(t))), this["_" + n] = t, c && r.call(this, t);
    }
  }, i ? o.hasOwnProperty("value") ? "function" != typeof o.value && null !== o.value && void 0 !== o.value && s("".concat(e.constructor.name, " - option['value'] : function or nullish만 허용함. / 입력값 : ").concat(o.value)) : o.value = null : "function" != typeof o.value && s("".concat(e.constructor.name, " - option['value'] : function만 허용함. / 입력값 : ").concat(o.value)), "function" != typeof o.value && (!i || null !== o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : function만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, c && (r instanceof Function ? r.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(r))), a && Object.defineProperty(e, n, a);
},
    Me = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("callback"),
      r = c ? o.callback : null,
      i = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (t) {
      t instanceof Array || i && null == t || s(null == t ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(t) : "".concat(e.constructor.name, " - v : Array만 허용함. / 입력값 : ").concat(t)), this["_" + n] = t, c && r.call(this, t);
    }
  }, i ? o.hasOwnProperty("value") ? o.value instanceof Array || null === o.value || void 0 === o.value || s("".concat(e.constructor.name, " - option['value'] : Array or nullish 만 허용함. / 입력값 : ").concat(o.value)) : o.value = null : o.value instanceof Array || s("".concat(e.constructor.name, " - option['value'] : Array만 허용함. / 입력값 : ").concat(o.value)), o.value instanceof Array || (!i || null !== o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : Array만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, c && (r instanceof Function ? r.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(r))), a && Object.defineProperty(e, n, a);
},
    Se = function (e, n, t, o) {
  var a,
      c = o.hasOwnProperty("callback"),
      r = c ? o.callback : null,
      i = o.nullishAble;
  a = {
    get: function () {
      return this["_" + n];
    },
    set: function (t) {
      t instanceof Object || i && null == t || s(null == t ? "".concat(e.constructor.name, " - v : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(t) : "".concat(e.constructor.name, " - v : 순수 object만 허용함. / 입력값 : ").concat(t)), this["_" + n] = t, c && r.call(this, t);
    }
  }, i ? o.hasOwnProperty("value") ? o.value instanceof Object || null === o.value || void 0 === o.value || s("".concat(e.constructor.name, " - option['value'] : object or nullish만 허용함. / 입력값 : ").concat(o.value)) : o.value = null : o.value instanceof Object || s("".concat(e.constructor.name, " - option['value'] : object만 허용함. / 입력값 : ").concat(o.value)), o.value instanceof Object || (!i || null !== o.value && void 0 !== o.value) && (null == o.value || void 0 === o.value ? s("".concat(e.constructor.name, " - option['value'] : nullish를 허용하지 않는 세팅상태. / 입력값 : ").concat(o.value)) : s("".concat(e.constructor.name, " - option['value'] : object만 허용함. / 입력값 : ").concat(o.value))), e["_" + n] = o.value, c && (r instanceof Function ? r.call(void 0, o.value) : s("".concat(e.constructor.name, " - option['callback'] : Function만 허용함. / 입력값 : ").concat(r))), a && Object.defineProperty(e, n, a);
};

Ee = function (e, n, t, o) {
  var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if ("string" != typeof n && s("".concat(n, " : keyName은 문자열만 가능함")), e instanceof Object || s("".concat(e, " : Object 확장만 target이 될수있음.")), a || Te[t] || s("".concat(t, " 은 정의 할수 없는 타입임.")), null != o && (!(o instanceof Object) || o instanceof Function || o instanceof Array) && s("".concat(o, " : option은 nullish와 Object만 허용")), (o = o || {}).hasOwnProperty("nullishAble") || (o.nullishAble = !0), e.hasOwnProperty("_" + n) && s("".concat(n, " 은 이미 정의된 속성명입니다.")), a) Ce(e, n, t, o);else switch (t) {
    case Te.NUMBER:
    case Te.INT:
    case Te.UINT:
      Le(e, n, t, o);
      break;

    case Te.STRING:
      Ie(e, n, 0, o);
      break;

    case Te.BOOLEAN:
      Pe(e, n, 0, o);
      break;

    case Te.FUNCTION:
      _e(e, n, 0, o);

      break;

    case Te.ARRAY:
      Me(e, n, 0, o);
      break;

    case Te.OBJECT:
      Se(e, n, 0, o);
      break;

    default:
      s("".concat(t, " : 정의할수 없는 타입"));
  }
  return o;
}, Object.freeze(Ee);
var Fe,
    Re = Ee;
Fe = function (e) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  n.forEach(function (n) {
    Re(e, n.keyName, n.type, n.option, n.isCustomType);
  });
}, Object.freeze(Fe);

var je,
    Ue,
    Be = Fe,
    He = function (e, n, t) {
  var o = (t = t || {}).hasOwnProperty("min");
  !o || null !== t.min && void 0 !== t.min || (o = !1);
  var a = t.hasOwnProperty("max");
  !a || null !== t.max && void 0 !== t.max || (a = !1);
  var c = o ? t.min : null,
      r = a ? t.max : null;
  t.hasOwnProperty("nullishAble") || (t.nullishAble = !0);
  var i = t.nullishAble,
      l = null == e;

  switch (n) {
    case Te.NUMBER:
    case Te.INT:
    case Te.UINT:
      "number" == typeof e ? (isNaN(e) && s("checkType - ".concat(n, " : Number만 허용함. / 입력값 : ").concat(e)), n !== Te.NUMBER && e !== parseInt(e) && s("checkType - ".concat(n, " : value : 소수점 허용안함. / 입력값 : ").concat(e)), n === Te.UINT && e < 0 && s("checkType - ".concat(n, " : value : 음수 허용안함. / 입력값 : ").concat(e)), o && (("number" != typeof c || isNaN(c)) && s("checkType - ".concat(n, " : option.min : Number만 허용함. / 입력값 : ").concat(c)), n !== Te.NUMBER && c !== parseInt(c) && s("checkType - ".concat(n, " : option.min : 소수점 허용안함. / 입력값 : ").concat(c)), n === Te.UINT && c < 0 && s("checkType - ".concat(n, " : option.min : 음수 허용안함. / 입력값 : ").concat(c)), e < c && s("checkType - ".concat(n, " : option.min : 최소값보다 입력값이 작음 / 입력값 : ").concat(e))), a && (("number" != typeof r || isNaN(r)) && s("option.max : Number만 허용함. / 입력값 : ".concat(r)), n !== Te.NUMBER && r !== parseInt(r) && s("option.max : 소수점 허용안함. / 입력값 : ".concat(r)), n === Te.UINT && r < 0 && s("option.max : 음수 허용안함. / 입력값 : ".concat(r)), e > r && s("checkType - ".concat(n, " : option.max : 최대값보다 입력값이 큼 / 입력값 : ").concat(e))), o && a && c > r && s("checkType - ${type} : option.min, option.max : min값은 max보다 작아야함", "입력값 : ", c, r)) : i && l || s("checkType - ".concat(n, " : Number만 허용함. / 입력값 : ").concat(e));
      break;

    case Te.BOOLEAN:
      "boolean" == typeof e || i && l || s("checkType - ".concat(n, " : boolean만 허용함. / 입력값 : ").concat(e));
      break;

    case Te.STRING:
      "string" == typeof e || i && l || s("checkType - ".concat(n, " : string만 허용함. / 입력값 : ").concat(e));
      break;

    case Te.FUNCTION:
      "function" == typeof e || i && l || s("checkType - ".concat(n, " : function만 허용함. / 입력값 : ").concat(e));
      break;

    case Te.ARRAY:
      e instanceof Array || i && l || s("checkType - ".concat(n, " : ARRAY만 허용함. / 입력값 : ").concat(e));
      break;

    case Te.OBJECT:
      e instanceof Object && !(e instanceof Array) && "function" != typeof e || i && l || s("checkType - ".concat(n, " : 순수 OBJECT만 허용함. / 입력값 : ").concat(e));
      break;

    default:
      s("허용하지않는 타입을 체크하려고함. / 입력값 : ".concat(e));
  }
},
    Ye = function () {
  for (var e = 0, n = arguments.length; e < n; e++) {
    var t = e < 0 || arguments.length <= e ? void 0 : arguments[e],
        o = t[0],
        a = t[1],
        c = t[2] || {},
        r = c.hasOwnProperty("min"),
        i = c.hasOwnProperty("max"),
        l = r ? c.min : null,
        u = i ? c.max : null;
    c.hasOwnProperty("nullishAble") || (c.nullishAble = !0);
    var d = c.nullishAble,
        f = null == o;

    switch (a) {
      case Te.NUMBER:
      case Te.INT:
      case Te.UINT:
        "number" == typeof o ? (isNaN(o) && s("Number만 허용함. / 입력값 : ".concat(o)), a !== Te.NUMBER && o !== parseInt(o) && s("value : 소수점 허용안함. / 입력값 : ".concat(o)), a === Te.UINT && o < 0 && s("value : 음수 허용안함. / 입력값 : ".concat(o)), r && (("number" != typeof l || isNaN(l)) && s("option['min'] : Number만 허용함. / 입력값 : ".concat(l)), a !== Te.NUMBER && l !== parseInt(l) && s("option['min'] : 소수점 허용안함. / 입력값 : ".concat(l)), a === Te.UINT && l < 0 && s("option['min'] : 음수 허용안함. / 입력값 : ".concat(l)), o < l && s("option['min'] : 최소값보다 입력값이 작음 / 입력값 : ".concat(o))), i && (("number" != typeof u || isNaN(u)) && s("option['max'] : Number만 허용함. / 입력값 : ".concat(u)), a !== Te.NUMBER && u !== parseInt(u) && s("option['max'] : 소수점 허용안함. / 입력값 : ".concat(u)), a === Te.UINT && u < 0 && s("option['max'] : 음수 허용안함. / 입력값 : ".concat(u)), o > u && s("option['max'] : 최대값보다 입력값이 큼 / 입력값 : ".concat(o))), r && i && l > u && s("option['min'], option['max'] : min값은 max보다 작아야함", "입력값 : ", l, u)) : d && f || s("Number만 허용함. / 입력값 : ".concat(o));
        break;

      case Te.BOOLEAN:
        "boolean" == typeof o || d && f || s("boolean만 허용함. / 입력값 : ".concat(o));
        break;

      case Te.STRING:
        "string" == typeof o || d && f || s("string만 허용함. / 입력값 : ".concat(o));
        break;

      case Te.FUNCTION:
        "function" == typeof o || d && f || s("function만 허용함. / 입력값 : ".concat(o));
    }
  }
},
    ze = function (e, n) {
  var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  t ? null == e || e instanceof n || s("입력한 타입만 허용함 / value : ".concat(e, " / type : ").concat(n)) : e instanceof n || s("입력한 타입만 허용함 / value : ".concat(e, " / type : ").concat(n));
};

je = function (e, n) {
  var t = n.type;
  if (Te[t]) switch (Te[t]) {
    case Te.ARRAY:
      if (He(e, t, n.option), n.childItem) {
        var o = n.childItem,
            a = o.type;
        e.forEach(function (e) {
          console.log(e), He(e, a, o.option), o.struct && Ue(e, o.struct), o.childItem && (console.log("여기걸려야할텐데?", e, o.childItem), Ue(e, o.childItem, !0));
        });
      }

      break;

    case Te.OBJECT:
      He(e, t, n.option), Ue(e, n.struct);
      break;

    default:
      He(e, t, n.option);
  } else s("".concat(t, "은 검증할수 없는 타입임구조체에 존재하지 않는 키를 검증하려고함 / 입력값 : ").concat(t));
}, Ue = function (e, n) {
  var t,
      o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (o) e.forEach(function (e) {
    je(e, n);
  });else for (t in e) n.hasOwnProperty(t) ? je(e[t], n[t]) : s("구조체에 존재하지 않는 키를 검증하려고함 / 입력값 : ".concat(t));
};

var qe,
    Je,
    Ge,
    We = function (e, n) {
  !e instanceof Object && s("checkSchema : Object만 검증가능"), Ue(e, n);
},
    Rich = (Ge = {}, (qe = {
  addMethod: function (e, n) {
    var t;
    n instanceof Function ? qe[e] ? s("".concat(e, " : 이미 존재하는 메서드 네임")) : (t = e.charAt(0)) !== t.toLowerCase() ? s("".concat(e, " : 메서드 네임은 소문자로 시작해야함")) : qe[e] = n : s("".concat(e, " : 함수만 메서드로 등록가능"));
  },
  addClass: (Je = function (e) {
    var n;
    return Ge[e] && s("".concat(e, " : 이미 존재하는 클래스 네임")), (n = e.charAt(0)) !== n.toUpperCase() && s("".concat(e, " : 클래스 네임은 대문자로 시작해야함")), !0;
  }, function (e, n) {
    n instanceof Function ? (Je(e), Ge[e] = n, qe[e] = n) : s("".concat(e, " : 클래스는 함수 확장형이어야함"));
  }),
  addStatic: function (e, n) {
    n instanceof Function || !(n instanceof Object) || n instanceof Array ? s("".concat(e, " : 오브젝트만 스타틱으로로 등록가능")) : (e !== e.toUpperCase() && s("".concat(e, " : 스타틱 오브젝트 네임은 대문자만 허용함")), qe[e] ? s("".concat(e, " : 이미 존재하는 오브젝트 네임")) : qe[e] = n);
  },
  init: function () {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];

    return new Promise(function (n, o) {
      requestAnimationFrame(function a(c) {
        switch (document.readyState) {
          case "complete":
          case "loaded":
            console.log("document.readyState :", document.readyState);
            break;

          case "interactive":
            if (document.documentElement.doScroll) try {
              document.documentElement.doScroll("left");
            } catch (e) {
              return requestAnimationFrame(a);
            }

          default:
            return requestAnimationFrame(a);
        }

        if (console.log("초기화시간", c), oe(window, "resize"), t) {
          var r = [],
              i = [];
          t.forEach(function (e) {
            e.indexOf(".css") > -1 ? i.push(e) : e.indexOf(".js") > -1 && r.push(e);
          });
          var l = Promise.all([e.apply(void 0, r), Ae.apply(void 0, i)]).then(function (e) {
            n(qe);
          });
          o && l.catch(function (e) {
            return o(e);
          });
        } else n(qe);
      });
    });
  }
}).addMethod("throwError", s), qe.addMethod("defineProperty", Re), qe.addMethod("definePropertys", Be), qe.addMethod("checkType", He), qe.addMethod("checkTypes", Ye), qe.addMethod("checkSchema", We), qe.addMethod("checkInstanceof", ze), qe.addMethod("getParam", t), qe.addMethod("dispatcher", oe), qe.addMethod("makeAjax", n), qe.addMethod("ajaxJsonGet", n({
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})), qe.addMethod("ajaxJsonPost", n({
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
})), qe.addMethod("getJS", e), qe.addMethod("getCSS", Ae), qe.addMethod("query", B), qe.addMethod("queryAll", H), qe.addMethod("valueToText", function (e) {
  return void 0 === e ? "undefined" : null === e ? "null" : "NaN" == e.toString() ? "NaN" : "function" == typeof e ? e.toString() : JSON.stringify(e);
}), qe.addClass("ClassUUID", u), qe.addClass("Dom", W, !1), qe.addClass("Css", ce, !1), qe.addStatic("DEFINE_TYPE", Te), qe.addStatic("DETECTOR", U), qe.addStatic("KEY", D), qe.addStatic("LOOPER", he), qe.addStatic("STORAGE", Ne), qe.addStatic("WIN", ke), oe(window, "resize"), qe);

function defineProperty(type, option) {
  return function (target, propName, ...etc) {
    console.log(etc);
    Rich.defineProperty(target, propName, type, option);
  };
}

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Index {
  constructor(person) {
    Rich.LOOPER.addMainLoop('테스트루프', v => {
      console.log(this.keyName_test, this.keyName_test2);
    });
  }

}

__decorate([defineProperty(Rich.DEFINE_TYPE.STRING, {
  value: '정의'
})], Index.prototype, "keyName_test", void 0);

__decorate([defineProperty(Rich.DEFINE_TYPE.STRING, {
  value: '정의2'
})], Index.prototype, "keyName_test2", void 0);
let test = new Index({
  firstName: 'test',
  lastName: 'test2'
});
console.log('현재인스턴스', test);
