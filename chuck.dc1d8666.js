// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../chuck.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.NREUM || (NREUM = {}), __nr_require = function (e, t, n) {
  function r(n) {
    if (!t[n]) {
      var o = t[n] = {
        exports: {}
      };
      e[n][0].call(o.exports, function (t) {
        var o = e[n][1][t];
        return r(o || t);
      }, o, o.exports);
    }

    return t[n].exports;
  }

  if ("function" == typeof __nr_require) return __nr_require;

  for (var o = 0; o < n.length; o++) {
    r(n[o]);
  }

  return r;
}({
  1: [function (e, t, n) {
    function r() {}

    function o(e, t, n) {
      return function () {
        return i(e, [f.now()].concat(u(arguments)), t ? null : this, n), t ? void 0 : this;
      };
    }

    var i = e("handle"),
        a = e(2),
        u = e(3),
        c = e("ee").get("tracer"),
        f = e("loader"),
        s = NREUM;
    "undefined" == typeof window.newrelic && (newrelic = s);
    var p = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"],
        d = "api-",
        l = d + "ixn-";
    a(p, function (e, t) {
      s[t] = o(d + t, !0, "api");
    }), s.addPageAction = o(d + "addPageAction", !0), s.setCurrentRouteName = o(d + "routeName", !0), t.exports = newrelic, s.interaction = function () {
      return new r().get();
    };
    var m = r.prototype = {
      createTracer: function createTracer(e, t) {
        var n = {},
            r = this,
            o = "function" == typeof t;
        return i(l + "tracer", [f.now(), e, n], r), function () {
          if (c.emit((o ? "" : "no-") + "fn-start", [f.now(), r, o], n), o) try {
            return t.apply(this, arguments);
          } catch (e) {
            throw c.emit("fn-err", [arguments, this, e], n), e;
          } finally {
            c.emit("fn-end", [f.now()], n);
          }
        };
      }
    };
    a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function (e, t) {
      m[t] = o(l + t);
    }), newrelic.noticeError = function (e) {
      "string" == typeof e && (e = new Error(e)), i("err", [e, f.now()]);
    };
  }, {}],
  2: [function (e, t, n) {
    function r(e, t) {
      var n = [],
          r = "",
          i = 0;

      for (r in e) {
        o.call(e, r) && (n[i] = t(r, e[r]), i += 1);
      }

      return n;
    }

    var o = Object.prototype.hasOwnProperty;
    t.exports = r;
  }, {}],
  3: [function (e, t, n) {
    function r(e, t, n) {
      t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);

      for (var r = -1, o = n - t || 0, i = Array(o < 0 ? 0 : o); ++r < o;) {
        i[r] = e[t + r];
      }

      return i;
    }

    t.exports = r;
  }, {}],
  4: [function (e, t, n) {
    t.exports = {
      exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart
    };
  }, {}],
  ee: [function (e, t, n) {
    function r() {}

    function o(e) {
      function t(e) {
        return e && e instanceof r ? e : e ? c(e, u, i) : i();
      }

      function n(n, r, o, i) {
        if (!d.aborted || i) {
          e && e(n, r, o);

          for (var a = t(o), u = m(n), c = u.length, f = 0; f < c; f++) {
            u[f].apply(a, r);
          }

          var p = s[y[n]];
          return p && p.push([b, n, r, a]), a;
        }
      }

      function l(e, t) {
        v[e] = m(e).concat(t);
      }

      function m(e) {
        return v[e] || [];
      }

      function w(e) {
        return p[e] = p[e] || o(n);
      }

      function g(e, t) {
        f(e, function (e, n) {
          t = t || "feature", y[n] = t, t in s || (s[t] = []);
        });
      }

      var v = {},
          y = {},
          b = {
        on: l,
        emit: n,
        get: w,
        listeners: m,
        context: t,
        buffer: g,
        abort: a,
        aborted: !1
      };
      return b;
    }

    function i() {
      return new r();
    }

    function a() {
      (s.api || s.feature) && (d.aborted = !0, s = d.backlog = {});
    }

    var u = "nr@context",
        c = e("gos"),
        f = e(2),
        s = {},
        p = {},
        d = t.exports = o();
    d.backlog = s;
  }, {}],
  gos: [function (e, t, n) {
    function r(e, t, n) {
      if (o.call(e, t)) return e[t];
      var r = n();
      if (Object.defineProperty && Object.keys) try {
        return Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          enumerable: !1
        }), r;
      } catch (i) {}
      return e[t] = r, r;
    }

    var o = Object.prototype.hasOwnProperty;
    t.exports = r;
  }, {}],
  handle: [function (e, t, n) {
    function r(e, t, n, r) {
      o.buffer([e], r), o.emit(e, t, n);
    }

    var o = e("ee").get("handle");
    t.exports = r, r.ee = o;
  }, {}],
  id: [function (e, t, n) {
    function r(e) {
      var t = _typeof(e);

      return !e || "object" !== t && "function" !== t ? -1 : e === window ? 0 : a(e, i, function () {
        return o++;
      });
    }

    var o = 1,
        i = "nr@id",
        a = e("gos");
    t.exports = r;
  }, {}],
  loader: [function (e, t, n) {
    function r() {
      if (!x++) {
        var e = h.info = NREUM.info,
            t = d.getElementsByTagName("script")[0];
        if (setTimeout(s.abort, 3e4), !(e && e.licenseKey && e.applicationID && t)) return s.abort();
        f(y, function (t, n) {
          e[t] || (e[t] = n);
        }), c("mark", ["onload", a() + h.offset], null, "api");
        var n = d.createElement("script");
        n.src = "https://" + e.agent, t.parentNode.insertBefore(n, t);
      }
    }

    function o() {
      "complete" === d.readyState && i();
    }

    function i() {
      c("mark", ["domContent", a() + h.offset], null, "api");
    }

    function a() {
      return E.exists && performance.now ? Math.round(performance.now()) : (u = Math.max(new Date().getTime(), u)) - h.offset;
    }

    var u = new Date().getTime(),
        c = e("handle"),
        f = e(2),
        s = e("ee"),
        p = window,
        d = p.document,
        l = "addEventListener",
        m = "attachEvent",
        w = p.XMLHttpRequest,
        g = w && w.prototype;
    NREUM.o = {
      ST: setTimeout,
      SI: p.setImmediate,
      CT: clearTimeout,
      XHR: w,
      REQ: p.Request,
      EV: p.Event,
      PR: p.Promise,
      MO: p.MutationObserver
    };
    var v = "" + location,
        y = {
      beacon: "bam.nr-data.net",
      errorBeacon: "bam.nr-data.net",
      agent: "js-agent.newrelic.com/nr-1071.min.js"
    },
        b = w && g && g[l] && !/CriOS/.test(navigator.userAgent),
        h = t.exports = {
      offset: u,
      now: a,
      origin: v,
      features: {},
      xhrWrappable: b
    };
    e(1), d[l] ? (d[l]("DOMContentLoaded", i, !1), p[l]("load", r, !1)) : (d[m]("onreadystatechange", o), p[m]("onload", r)), c("mark", ["firstbyte", u], null, "api");
    var x = 0,
        E = e(4);
  }, {}]
}, {}, ["loader"]);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35725" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../chuck.js"], null)
//# sourceMappingURL=/chuck.dc1d8666.js.map