(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/* eslint-disable no-underscore-dangle */
exports.default = /* JSX */{

  /**
   * Create a native DOM node from JSX's intermediate representation
   *
   * @param {string} tag - Tag name
   * @param {?Object} properties - Properties
   * @param {Array<string | number | { __html: string } | Array<HTMLElement>>}
   *   children - Child nodes
   * @return {HTMLElement} Native DOM node
   */
  createElement: function createElement(tag, properties) {
    var el = document.createElement(tag);

    /* Set all properties */
    if (properties) Array.prototype.forEach.call(Object.keys(properties), function (attr) {
      el.setAttribute(attr, properties[attr]);
    });

    /* Iterate child nodes */
    var iterateChildNodes = function iterateChildNodes(nodes) {
      Array.prototype.forEach.call(nodes, function (node) {

        /* Directly append text content */
        if (typeof node === "string" || typeof node === "number") {
          el.textContent += node;

          /* Recurse, if we got an array */
        } else if (Array.isArray(node)) {
          iterateChildNodes(node);

          /* Append raw HTML */
        } else if (typeof node.__html !== "undefined") {
          el.innerHTML += node.__html;

          /* Append regular nodes */
        } else if (node instanceof Node) {
          el.appendChild(node);
        }
      });
    };

    /* Iterate child nodes and return element */

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    iterateChildNodes(children);
    return el;
  }
};
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/200|0) == 1,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Listener = function () {

  /**
   * Generic event listener
   *
   * @constructor
   *
   * @property {(Array<EventTarget>)} els_ - Event targets
   * @property {Object} handler_- Event handlers
   * @property {Array<string>} events_ - Event names
   * @property {Function} update_ - Update handler
   *
   * @param {?(string|EventTarget|NodeList<EventTarget>)} els -
   *   Selector or Event targets
   * @param {(string|Array<string>)} events - Event names
   * @param {(Object|Function)} handler - Handler to be invoked
   */
  function Listener(els, events, handler) {
    var _this = this;

    _classCallCheck(this, Listener);

    this.els_ = Array.prototype.slice.call(typeof els === "string" ? document.querySelectorAll(els) : [].concat(els));

    /* Set handler as function or directly as object */
    this.handler_ = typeof handler === "function" ? { update: handler } : handler;

    /* Initialize event names and update handler */
    this.events_ = [].concat(events);
    this.update_ = function (ev) {
      return _this.handler_.update(ev);
    };
  }

  /**
   * Register listener for all relevant events
   */


  Listener.prototype.listen = function listen() {
    var _this2 = this;

    this.els_.forEach(function (el) {
      _this2.events_.forEach(function (event) {
        el.addEventListener(event, _this2.update_, false);
      });
    });

    /* Execute setup handler, if implemented */
    if (typeof this.handler_.setup === "function") this.handler_.setup();
  };

  /**
   * Unregister listener for all relevant events
   */


  Listener.prototype.unlisten = function unlisten() {
    var _this3 = this;

    this.els_.forEach(function (el) {
      _this3.events_.forEach(function (event) {
        el.removeEventListener(event, _this3.update_);
      });
    });

    /* Execute reset handler, if implemented */
    if (typeof this.handler_.reset === "function") this.handler_.reset();
  };

  return Listener;
}();

exports.default = Listener;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

var _promisePolyfill = __webpack_require__(14);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(18);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(19);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(20);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

window.Promise = window.Promise || _promisePolyfill2.default;

/* ----------------------------------------------------------------------------
 * Dependencies
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Polyfills
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

/**
 * Initialize Material for MkDocs
 *
 * @param {Object} config - Configuration
 */
function initialize(config) {
  // eslint-disable-line func-style

  /* Initialize Modernizr and FastClick */
  new _Material2.default.Event.Listener(document, "DOMContentLoaded", function () {
    if (!(document.body instanceof HTMLElement)) throw new ReferenceError();

    /* Attach FastClick to mitigate 300ms delay on touch devices */
    _fastclick2.default.attach(document.body);

    /* Test for iOS */
    Modernizr.addTest("ios", function () {
      return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    /* Wrap all data tables for better overflow scrolling */
    var tables = document.querySelectorAll("table:not([class])"); // TODO: this is JSX, we should rename the file
    Array.prototype.forEach.call(tables, function (table) {
      var wrap = JSX.createElement(
        "div",
        { "class": "md-typeset__scrollwrap" },
        JSX.createElement("div", { "class": "md-typeset__table" })
      );
      if (table.nextSibling) {
        table.parentNode.insertBefore(wrap, table.nextSibling);
      } else {
        table.parentNode.appendChild(wrap);
      }
      wrap.children[0].appendChild(table);
    });

    /* Clipboard integration */
    if (_clipboard2.default.isSupported()) {
      var blocks = document.querySelectorAll(".codehilite > pre, pre > code");
      Array.prototype.forEach.call(blocks, function (block, index) {
        var id = "__code_" + index;

        /* Create button with message container */
        var button = JSX.createElement(
          "button",
          { "class": "md-clipboard", title: translate("clipboard.copy"),
            "data-clipboard-target": "#" + id + " pre, #" + id + " code" },
          JSX.createElement("span", { "class": "md-clipboard__message" })
        );

        /* Link to block and insert button */
        var parent = block.parentNode;
        parent.id = id;
        parent.insertBefore(button, block);
      });

      /* Initialize Clipboard listener */
      var copy = new _clipboard2.default(".md-clipboard");

      /* Success handler */
      copy.on("success", function (action) {
        var message = action.trigger.querySelector(".md-clipboard__message");
        if (!(message instanceof HTMLElement)) throw new ReferenceError();

        /* Clear selection and reset debounce logic */
        action.clearSelection();
        if (message.dataset.mdTimer) clearTimeout(parseInt(message.dataset.mdTimer, 10));

        /* Set message indicating success and show it */
        message.classList.add("md-clipboard__message--active");
        message.innerHTML = translate("clipboard.copied");

        /* Hide message after two seconds */
        message.dataset.mdTimer = setTimeout(function () {
          message.classList.remove("md-clipboard__message--active");
          message.dataset.mdTimer = "";
        }, 2000).toString();
      });
    }

    /* Polyfill details/summary functionality */
    if (!Modernizr.details) {
      var _blocks = document.querySelectorAll("details > summary");
      Array.prototype.forEach.call(_blocks, function (summary) {
        summary.addEventListener("click", function (ev) {
          var details = ev.target.parentNode;
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          } else {
            details.setAttribute("open", "");
          }
        });
      });
    }

    /* Open details after anchor jump */
    var details = function details() {
      if (document.location.hash) {
        var el = document.getElementById(document.location.hash.substring(1));
        if (!el) return;

        /* Walk up as long as we're not in a details tag */
        var parent = el.parentNode;
        while (parent && !(parent instanceof HTMLDetailsElement)) {
          parent = parent.parentNode;
        } /* If there's a details tag, open it */
        if (parent && !parent.open) {
          parent.open = true;

          /* Force reload, so the viewport repositions */
          var loc = location.hash;
          location.hash = " ";
          location.hash = loc;
        }
      }
    };
    window.addEventListener("hashchange", details);
    details();

    /* Force 1px scroll offset to trigger overflow scrolling */
    if (Modernizr.ios) {
      var scrollable = document.querySelectorAll("[data-md-scrollfix]");
      Array.prototype.forEach.call(scrollable, function (item) {
        item.addEventListener("touchstart", function () {
          var top = item.scrollTop;

          /* We're at the top of the container */
          if (top === 0) {
            item.scrollTop = 1;

            /* We're at the bottom of the container */
          } else if (top + item.offsetHeight === item.scrollHeight) {
            item.scrollTop = top - 1;
          }
        });
      });
    }
  }).listen();

  /* Component: header shadow toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen();

  /* Component: header title toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen();

  /* Component: hero visibility toggle */
  if (document.querySelector("[data-md-component=hero]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();

  /* Component: tabs visibility toggle */
  if (document.querySelector("[data-md-component=tabs]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();

  // /* Component: sidebar with navigation */
  // new Material.Event.MatchMedia("(min-width: 1220px)",
  //   new Material.Event.Listener(window, [
  //     "scroll", "resize", "orientationchange"
  //   ], new Material.Sidebar.Position(
  //     "[data-md-component=navigation]",
  //     "[data-md-component=header]")))

  //  /* Component: sidebar with table of contents (missing on 404 page)  */
  // if (document.querySelector("[data-md-component=toc]"))
  //   new Material.Event.MatchMedia("(min-width: 960px)",
  //     new Material.Event.Listener(window, [
  //       "scroll", "resize", "orientationchange"
  //     ], new Material.Sidebar.Position(
  //       "[data-md-component=toc]",
  //       "[data-md-component=header]")))

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", new _Material2.default.Nav.Blur("[data-md-component=toc] [href]")));

  /* Component: collapsible elements for navigation */
  var collapsibles = document.querySelectorAll("[data-md-component=collapsible]");
  Array.prototype.forEach.call(collapsibles, function (collapse) {
    new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(collapse.previousElementSibling, "click", new _Material2.default.Nav.Collapse(collapse)));
  });

  /* Component: active pane monitor for iOS scrolling fixes */
  new _Material2.default.Event.MatchMedia("(max-width: 1219px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));

  /* Initialize search, if available */
  if (document.querySelector("[data-md-component=search]")) {

    /* Component: search body lock for mobile */
    new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", new _Material2.default.Search.Lock("[data-md-toggle=search]")));

    /* Component: search results */
    new _Material2.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new _Material2.default.Search.Result("[data-md-component=result]", function () {
      return fetch(config.url.base + "/" + (config.version < "0.17" ? "mkdocs" : "search") + "/search_index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.docs.map(function (doc) {
          doc.location = config.url.base + doc.location;
          return doc;
        });
      });
    })).listen();

    /* Listener: focus input after form reset */
    new _Material2.default.Event.Listener("[data-md-component=reset]", "click", function () {
      setTimeout(function () {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        query.focus();
      }, 10);
    }).listen();

    /* Listener: focus input after opening search */
    new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", function (ev) {
      setTimeout(function (toggle) {
        if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
        if (toggle.checked) {
          var query = document.querySelector("[data-md-component=query]");
          if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
          query.focus();
        }
      }, 400, ev.target);
    }).listen();

    /* Listener: open search on focus */
    new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener("[data-md-component=query]", "focus", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (!toggle.checked) {
        toggle.checked = true;
        toggle.dispatchEvent(new CustomEvent("change"));
      }
    }));

    /* Listener: keyboard handlers */ // eslint-disable-next-line complexity
    new _Material2.default.Event.Listener(window, "keydown", function (ev) {
      // TODO: split up into component to reduce complexity
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      var query = document.querySelector("[data-md-component=query]");
      if (!(query instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort if meta key (macOS) or ctrl key (Windows) is pressed */
      if (ev.metaKey || ev.ctrlKey) return;

      /* Search is open */
      if (toggle.checked) {

        /* Enter: prevent form submission */
        if (ev.keyCode === 13) {
          if (query === document.activeElement) {
            ev.preventDefault();

            /* Go to current active/focused link */
            var focus = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
            if (focus instanceof HTMLLinkElement) {
              window.location = focus.getAttribute("href");

              /* Close search */
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
              query.blur();
            }
          }

          /* Escape or Tab: close search */
        } else if (ev.keyCode === 9 || ev.keyCode === 27) {
          toggle.checked = false;
          toggle.dispatchEvent(new CustomEvent("change"));
          query.blur();

          /* Horizontal arrows and backspace: focus input */
        } else if ([8, 37, 39].indexOf(ev.keyCode) !== -1) {
          if (query !== document.activeElement) query.focus();

          /* Vertical arrows: select previous or next search result */
        } else if ([38, 40].indexOf(ev.keyCode) !== -1) {
          var key = ev.keyCode;

          /* Retrieve all results */
          var links = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));

          /* Retrieve current active/focused result */
          var _focus = links.find(function (link) {
            if (!(link instanceof HTMLElement)) throw new ReferenceError();
            return link.dataset.mdState === "active";
          });
          if (_focus) _focus.dataset.mdState = "";

          /* Calculate index depending on direction, add length to form ring */
          var index = Math.max(0, (links.indexOf(_focus) + links.length + (key === 38 ? -1 : +1)) % links.length);

          /* Set active state and focus */
          if (links[index]) {
            links[index].dataset.mdState = "active";
            links[index].focus();
          }

          /* Prevent scrolling of page */
          ev.preventDefault();
          ev.stopPropagation();

          /* Return false prevents the cursor position from changing */
          return false;
        }

        /* Search is closed and we're not inside a form */
      } else if (document.activeElement && !document.activeElement.form) {

        /* F/S: Open search if not in input field */
        if (ev.keyCode === 70 || ev.keyCode === 83) {
          query.focus();
          ev.preventDefault();
        }
      }
    }).listen();

    /* Listener: focus query if in search is open and character is typed */
    new _Material2.default.Event.Listener(window, "keypress", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        if (query !== document.activeElement) query.focus();
      }
    }).listen();
  }

  /* Listener: handle tabbing context for better accessibility */
  new _Material2.default.Event.Listener(document.body, "keydown", function (ev) {
    if (ev.keyCode === 9) {
      var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
      Array.prototype.forEach.call(labels, function (label) {
        if (label.offsetHeight) label.tabIndex = 0;
      });
    }
  }).listen();

  /* Listener: reset tabbing behavior */
  new _Material2.default.Event.Listener(document.body, "mousedown", function () {
    var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
    Array.prototype.forEach.call(labels, function (label) {
      label.removeAttribute("tabIndex");
    });
  }).listen();

  document.body.addEventListener("click", function () {
    if (document.body.dataset.mdState === "tabbing") document.body.dataset.mdState = "";
  });

  /* Listener: close drawer when anchor links are clicked */
  new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function () {
    var toggle = document.querySelector("[data-md-toggle=drawer]");
    if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
    if (toggle.checked) {
      toggle.checked = false;
      toggle.dispatchEvent(new CustomEvent("change"));
    }
  }))

  /* Retrieve facts for the given repository type */
  ;(function () {
    var el = document.querySelector("[data-md-source]");
    if (!el) return _promisePolyfill2.default.resolve([]);else if (!(el instanceof HTMLAnchorElement)) throw new ReferenceError();
    switch (el.dataset.mdSource) {
      case "github":
        return new _Material2.default.Source.Adapter.GitHub(el).fetch();
      default:
        return _promisePolyfill2.default.resolve([]);
    }

    /* Render repository information */
  })().then(function (facts) {
    var sources = document.querySelectorAll("[data-md-source]");
    Array.prototype.forEach.call(sources, function (source) {
      new _Material2.default.Source.Repository(source).initialize(facts);
    });
  });
}

/* ----------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------- */

/* Provide this for downward compatibility for now */
var app = {
  initialize: initialize
};

exports.app = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

if (!window.fetch) window.fetch = __webpack_require__(2).default || __webpack_require__(2);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(16);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(6);
var delegate = __webpack_require__(5);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(4);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ })
/******/ ]);
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(21);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(26);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(30);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(36);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(38);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(44);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(22);

var _MatchMedia2 = _interopRequireDefault(_MatchMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Listener: _Listener2.default,
  MatchMedia: _MatchMedia2.default
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

// eslint-disable-line no-unused-vars

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var MatchMedia =

/**
 * Media query listener
 *
 * This class listens for state changes of media queries and automatically
 * switches the given listeners on or off.
 *
 * @constructor
 *
 * @property {Function} handler_ - Media query event handler
 *
 * @param {string} query - Media query to test for
 * @param {Listener} listener - Event listener
 */
function MatchMedia(query, listener) {
  _classCallCheck(this, MatchMedia);

  this.handler_ = function (mq) {
    if (mq.matches) listener.listen();else listener.unlisten();
  };

  /* Initialize media query listener */
  var media = window.matchMedia(query);
  media.addListener(this.handler_);

  /* Always check at initialization */
  this.handler_(media);
};

exports.default = MatchMedia;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(24);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(25);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Shadow: _Shadow2.default,
  Title: _Title2.default
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Shadow = function () {

  /**
   * Show or hide header shadow depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Offset height of previous nodes
   * @property {boolean} active_ - Header shadow state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Shadow(el, header) {
    _classCallCheck(this, Shadow);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize height and state */
    this.height_ = 0;
    this.active_ = false;
  }

  /**
   * Calculate total height of previous nodes
   */


  Shadow.prototype.setup = function setup() {
    var current = this.el_;
    while (current = current.previousElementSibling) {
      if (!(current instanceof HTMLElement)) throw new ReferenceError();
      this.height_ += current.offsetHeight;
    }
    this.update();
  };

  /**
   * Update shadow state
   *
   * @param {Event} ev - Event
   */


  Shadow.prototype.update = function update(ev) {
    if (ev && (ev.type === "resize" || ev.type === "orientationchange")) {
      this.height_ = 0;
      this.setup();
    } else {
      var active = window.pageYOffset >= this.height_;
      if (active !== this.active_) this.header_.dataset.mdState = (this.active_ = active) ? "shadow" : "";
    }
  };

  /**
   * Reset shadow state
   */


  Shadow.prototype.reset = function reset() {
    this.header_.dataset.mdState = "";
    this.height_ = 0;
    this.active_ = false;
  };

  return Shadow;
}();

exports.default = Shadow;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Title = function () {

  /**
   * Swap header title topics when header is scrolled past
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Element
   * @property {HTMLElement} header_ - Header
   * @property {boolean} active_ - Title state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLHeadingElement)} header - Selector or HTML element
   */
  function Title(el, header) {
    _classCallCheck(this, Title);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLHeadingElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize state */
    this.active_ = false;
  }

  /**
   * Setup title state
   */


  Title.prototype.setup = function setup() {
    var _this = this;

    Array.prototype.forEach.call(this.el_.children, function (node) {
      // TODO: use childNodes here for IE?
      node.style.width = _this.el_.offsetWidth - 20 + "px";
    });
  };

  /**
   * Update title state
   *
   * @param {Event} ev - Event
   */


  Title.prototype.update = function update(ev) {
    var _this2 = this;

    var active = window.pageYOffset >= this.header_.offsetTop;
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "active" : "";

    /* Hack: induce ellipsis on topics */
    if (ev.type === "resize" || ev.type === "orientationchange") {
      Array.prototype.forEach.call(this.el_.children, function (node) {
        node.style.width = _this2.el_.offsetWidth - 20 + "px";
      });
    }
  };

  /**
   * Reset title state
   */


  Title.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.width = "";
    this.active_ = false;
  };

  return Title;
}();

exports.default = Title;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(27);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(28);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(29);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Blur: _Blur2.default,
  Collapse: _Collapse2.default,
  Scrolling: _Scrolling2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Blur = function () {

  /**
   * Blur links within the table of contents above current page y-offset
   *
   * @constructor
   *
   * @property {NodeList<HTMLElement>} els_ - Table of contents links
   * @property {Array<HTMLElement>} anchors_ - Referenced anchor nodes
   * @property {number} index_ - Current link index
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} dir_ - Scroll direction change
   *
   * @param {(string|NodeList<HTMLElement>)} els - Selector or HTML elements
   */
  function Blur(els) {
    _classCallCheck(this, Blur);

    this.els_ = typeof els === "string" ? document.querySelectorAll(els) : els;

    /* Initialize index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;

    /* Necessary state to correctly reset the index */
    this.dir_ = false;

    /* Index anchor node offsets for fast lookup */
    this.anchors_ = [].reduce.call(this.els_, function (anchors, el) {
      return anchors.concat(document.getElementById(el.hash.substring(1)) || []);
    }, []);
  }

  /**
   * Initialize blur states
   */


  Blur.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update blur states
   *
   * Deduct the static offset of the header (56px) and sidebar offset (24px),
   * see _permalinks.scss for more information.
   */


  Blur.prototype.update = function update() {
    var offset = window.pageYOffset;
    var dir = this.offset_ - offset < 0;

    /* Hack: reset index if direction changed to catch very fast scrolling,
       because otherwise we would have to register a timer and that sucks */
    if (this.dir_ !== dir) this.index_ = dir ? this.index_ = 0 : this.index_ = this.els_.length - 1;

    /* Exit when there are no anchors */
    if (this.anchors_.length === 0) return;

    /* Scroll direction is down */
    if (this.offset_ <= offset) {
      for (var i = this.index_ + 1; i < this.els_.length; i++) {
        if (this.anchors_[i].offsetTop - (56 + 24) <= offset) {
          if (i > 0) this.els_[i - 1].dataset.mdState = "blur";
          this.index_ = i;
        } else {
          break;
        }
      }

      /* Scroll direction is up */
    } else {
      for (var _i = this.index_; _i >= 0; _i--) {
        if (this.anchors_[_i].offsetTop - (56 + 24) > offset) {
          if (_i > 0) this.els_[_i - 1].dataset.mdState = "";
        } else {
          this.index_ = _i;
          break;
        }
      }
    }

    /* Remember current offset and direction for next iteration */
    this.offset_ = offset;
    this.dir_ = dir;
  };

  /**
   * Reset blur states
   */


  Blur.prototype.reset = function reset() {
    Array.prototype.forEach.call(this.els_, function (el) {
      el.dataset.mdState = "";
    });

    /* Reset index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;
  };

  return Blur;
}();

exports.default = Blur;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Collapse = function () {

  /**
   * Expand or collapse navigation on toggle
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Navigation list
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Collapse(el) {
    _classCallCheck(this, Collapse);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize overflow and display for accessibility
   */


  Collapse.prototype.setup = function setup() {
    var current = this.el_.getBoundingClientRect().height;

    /* Hidden links should not be focusable, so hide them when the navigation
       is collapsed and set overflow so the outline is not cut off */
    this.el_.style.display = current ? "block" : "none";
    this.el_.style.overflow = current ? "visible" : "hidden";
  };

  /**
   * Animate expand and collapse smoothly
   *
   * Internet Explorer 11 is very slow at recognizing changes on the dataset
   * which results in the menu not expanding or collapsing properly. THerefore,
   * for reasons of compatibility, the attribute accessors are used.
   */


  Collapse.prototype.update = function update() {
    var _this = this;

    var current = this.el_.getBoundingClientRect().height;

    /* Reset overflow to CSS defaults */
    this.el_.style.display = "block";
    this.el_.style.overflow = "";

    /* Expanded, so collapse */
    if (current) {
      this.el_.style.maxHeight = current + "px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = "0px";
      });

      /* Collapsed, so expand */
    } else {
      this.el_.setAttribute("data-md-state", "expand");
      this.el_.style.maxHeight = "";

      /* Read height and unset pseudo-toggled state */
      var height = this.el_.getBoundingClientRect().height;
      this.el_.removeAttribute("data-md-state");

      /* Set initial state and animate */
      this.el_.style.maxHeight = "0px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = height + "px";
      });
    }

    /* Remove state on end of transition */
    var end = function end(ev) {
      var target = ev.target;
      if (!(target instanceof HTMLElement)) throw new ReferenceError();

      /* Reset height and state */
      target.removeAttribute("data-md-state");
      target.style.maxHeight = "";

      /* Hidden links should not be focusable, so hide them when the navigation
         is collapsed and set overflow so the outline is not cut off */
      target.style.display = current ? "none" : "block";
      target.style.overflow = current ? "hidden" : "visible";

      /* Only fire once, so directly remove event listener */
      target.removeEventListener("transitionend", end);
    };
    this.el_.addEventListener("transitionend", end, false);
  };

  /**
   * Reset height and pseudo-toggled state
   */


  Collapse.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.maxHeight = "";
    this.el_.style.display = "";
    this.el_.style.overflow = "";
  };

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Scrolling = function () {

  /**
   * Set overflow scrolling on the current active pane (for iOS)
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Primary navigation
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Scrolling(el) {
    _classCallCheck(this, Scrolling);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Setup panes
   */


  Scrolling.prototype.setup = function setup() {

    /* Initially set overflow scrolling on main pane */
    var main = this.el_.children[this.el_.children.length - 1];
    main.style.webkitOverflowScrolling = "touch";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find current and parent list elements */
        var parent = toggle.parentNode.parentNode;
        var target = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        target.style.webkitOverflowScrolling = "touch";
      }
    });
  };

  /**
   * Update active panes
   *
   * @param {Event} ev - Change event
   */


  Scrolling.prototype.update = function update(ev) {
    var target = ev.target;
    if (!(target instanceof HTMLElement)) throw new ReferenceError();

    /* Find corresponding navigational pane */
    var pane = target.nextElementSibling;
    if (!(pane instanceof HTMLElement)) throw new ReferenceError();
    while (pane.tagName !== "NAV" && pane.nextElementSibling) {
      pane = pane.nextElementSibling;
    } /* Check references */
    if (!(target.parentNode instanceof HTMLElement) || !(target.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

    /* Find parent and active panes */
    var parent = target.parentNode.parentNode;
    var active = pane.children[pane.children.length - 1];

    /* Always reset all lists when transitioning */
    parent.style.webkitOverflowScrolling = "";
    active.style.webkitOverflowScrolling = "";

    /* Set overflow scrolling on parent pane */
    if (!target.checked) {
      var end = function end() {
        if (pane instanceof HTMLElement) {
          parent.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", end);
        }
      };
      pane.addEventListener("transitionend", end, false);
    }

    /* Set overflow scrolling on active pane */
    if (target.checked) {
      var _end = function _end() {
        if (pane instanceof HTMLElement) {
          active.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", _end);
        }
      };
      pane.addEventListener("transitionend", _end, false);
    }
  };

  /**
   * Reset panes
   */


  Scrolling.prototype.reset = function reset() {

    /* Reset overflow scrolling on main pane */
    this.el_.children[1].style.webkitOverflowScrolling = "";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find parent and active panes */
        var parent = toggle.parentNode.parentNode;
        var active = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        active.style.webkitOverflowScrolling = "";
      }
    });
  };

  return Scrolling;
}();

exports.default = Scrolling;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(31);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(32);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Lock: _Lock2.default,
  Result: _Result2.default
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Lock = function () {

  /**
   * Lock body for full-screen search modal
   *
   * @constructor
   *
   * @property {HTMLInputElement} el_ - Lock toggle
   * @property {HTMLElement} lock_ - Element to lock (document body)
   * @property {number} offset_ - Current page y-offset
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Lock(el) {
    _classCallCheck(this, Lock);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLInputElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve element to lock (= body) */
    if (!document.body) throw new ReferenceError();
    this.lock_ = document.body;
  }

  /**
   * Setup locked state
   */


  Lock.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update locked state
   */


  Lock.prototype.update = function update() {
    var _this = this;

    /* Entering search mode */
    if (this.el_.checked) {
      this.offset_ = window.pageYOffset;

      /* Scroll to top after transition, to omit flickering */
      setTimeout(function () {
        window.scrollTo(0, 0);

        /* Lock body after finishing transition */
        if (_this.el_.checked) {
          _this.lock_.dataset.mdState = "lock";
        }
      }, 400);

      /* Exiting search mode */
    } else {
      this.lock_.dataset.mdState = "";

      /* Scroll to former position, but wait for 100ms to prevent flashes on
         iOS. A short timeout seems to do the trick */
      setTimeout(function () {
        if (typeof _this.offset_ !== "undefined") window.scrollTo(0, _this.offset_);
      }, 100);
    }
  };

  /**
   * Reset locked state and page y-offset
   */


  Lock.prototype.reset = function reset() {
    if (this.lock_.dataset.mdState === "lock") window.scrollTo(0, this.offset_);
    this.lock_.dataset.mdState = "";
  };

  return Lock;
}();

exports.default = Lock;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(33);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(34);

var _exposeLoaderLunrLunr2 = _interopRequireDefault(_exposeLoaderLunrLunr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Truncate a string after the given number of character
 *
 * This is not a reasonable approach, since the summaries kind of suck. It
 * would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it.
 *
 * @param {string} string - String to be truncated
 * @param {number} n - Number of characters
 * @return {string} Truncated string
 */
var truncate = function truncate(string, n) {
  var i = n;
  if (string.length > i) {
    while (string[i] !== " " && --i > 0) {}
    return string.substring(0, i) + "...";
  }
  return string;
};

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Result = function () {

  /**
   * Perform search and update results on keyboard events
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Search result container
   * @property {(Array<Object>|Function)} data_ - Raw document data
   * @property {Object} docs_ - Indexed documents
   * @property {HTMLElement} meta_ - Search meta information
   * @property {HTMLElement} list_ - Search result list
   * @property {Array<string>} lang_ - Search languages
   * @property {Object} message_ - Search result messages
   * @property {Object} index_ - Search index
   * @property {Array<Function>} stack_ - Search result stack
   * @property {string} value_ - Last input value
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(Array<Object>|Function)} data - Function providing data or array
   */
  function Result(el, data) {
    _classCallCheck(this, Result);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve metadata and list element */

    var _Array$prototype$slic = Array.prototype.slice.call(this.el_.children),
        meta = _Array$prototype$slic[0],
        list = _Array$prototype$slic[1];

    /* Set data, metadata and list elements */


    this.data_ = data;
    this.meta_ = meta;
    this.list_ = list;

    /* Load messages for metadata display */
    this.message_ = {
      placeholder: this.meta_.textContent,
      none: translate("search.result.none"),
      one: translate("search.result.one"),
      other: translate("search.result.other")

      /* Override tokenizer separator, if given */
    };var tokenizer = translate("search.tokenizer");
    if (tokenizer.length) _exposeLoaderLunrLunr2.default.tokenizer.separator = tokenizer;

    /* Load search languages */
    this.lang_ = translate("search.language").split(",").filter(Boolean).map(function (lang) {
      return lang.trim();
    });
  }

  /**
   * Update search results
   *
   * @param {Event} ev - Input or focus event
   */


  Result.prototype.update = function update(ev) {
    var _this = this;

    /* Initialize index, if this has not be done yet */
    if (ev.type === "focus" && !this.index_) {

      /* Initialize index */
      var init = function init(data) {

        /* Preprocess and index sections and documents */
        _this.docs_ = data.reduce(function (docs, doc) {
          var _doc$location$split = doc.location.split("#"),
              path = _doc$location$split[0],
              hash = _doc$location$split[1];

          /* Associate section with parent document */


          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.text;
              doc.parent.done = true;
            }
          }

          /* Some cleanup on the text */
          doc.text = doc.text.replace(/\n/g, " ") /* Remove newlines */
          .replace(/\s+/g, " ") /* Compact whitespace */
          .replace(/\s+([,.:;!?])/g, /* Correct punctuation */
          function (_, char) {
            return char;
          });

          /* Index sections and documents, but skip top-level headline */
          if (!doc.parent || doc.parent.title !== doc.title) docs.set(doc.location, doc);
          return docs;
        }, new Map());

        /* eslint-disable no-invalid-this */
        var docs = _this.docs_,
            lang = _this.lang_;

        /* Create stack and index */
        _this.stack_ = [];
        _this.index_ = (0, _exposeLoaderLunrLunr2.default)(function () {
          var _pipeline,
              _this2 = this;

          var filters = {
            "search.pipeline.trimmer": _exposeLoaderLunrLunr2.default.trimmer,
            "search.pipeline.stopwords": _exposeLoaderLunrLunr2.default.stopWordFilter

            /* Disable stop words filter and trimmer, if desired */
          };var pipeline = Object.keys(filters).reduce(function (result, name) {
            if (!translate(name).match(/^false$/i)) result.push(filters[name]);
            return result;
          }, []);

          /* Remove stemmer, as it cripples search experience */
          this.pipeline.reset();
          if (pipeline) (_pipeline = this.pipeline).add.apply(_pipeline, pipeline);

          /* Set up alternate search languages */
          if (lang.length === 1 && lang[0] !== "en" && _exposeLoaderLunrLunr2.default[lang[0]]) {
            this.use(_exposeLoaderLunrLunr2.default[lang[0]]);
          } else if (lang.length > 1) {
            this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default, lang));
          }

          /* Index fields */
          this.field("title", { boost: 10 });
          this.field("text");
          this.ref("location");

          /* Index documents */
          docs.forEach(function (doc) {
            return _this2.add(doc);
          });
        });

        /* Register event handler for lazy rendering */
        var container = _this.el_.parentNode;
        if (!(container instanceof HTMLElement)) throw new ReferenceError();
        container.addEventListener("scroll", function () {
          while (_this.stack_.length && container.scrollTop + container.offsetHeight >= container.scrollHeight - 16) {
            _this.stack_.splice(0, 10).forEach(function (render) {
              return render();
            });
          }
        });
      };
      /* eslint-enable no-invalid-this */

      /* Initialize index after short timeout to account for transition */
      setTimeout(function () {
        return typeof _this.data_ === "function" ? _this.data_().then(init) : init(_this.data_);
      }, 250);

      /* Execute search on new input event */
    } else if (ev.type === "focus" || ev.type === "keyup") {
      var target = ev.target;
      if (!(target instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort early, if index is not build or input hasn't changed */
      if (!this.index_ || target.value === this.value_) return;

      /* Clear current list */
      while (this.list_.firstChild) {
        this.list_.removeChild(this.list_.firstChild);
      } /* Abort early, if search input is empty */
      this.value_ = target.value;
      if (this.value_.length === 0) {
        this.meta_.textContent = this.message_.placeholder;
        return;
      }

      /* Perform search on index and group sections by document */
      var result = this.index_

      /* Append trailing wildcard to all terms for prefix querying */
      .query(function (query) {
        _this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function (term) {
          query.term(term, { wildcard: _exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING });
        });
      })

      /* Process query results */
      .reduce(function (items, item) {
        var doc = _this.docs_.get(item.ref);
        if (doc.parent) {
          var ref = doc.parent.location;
          items.set(ref, (items.get(ref) || []).concat(item));
        } else {
          var _ref = doc.location;
          items.set(_ref, items.get(_ref) || []);
        }
        return items;
      }, new Map());

      /* Assemble regular expressions for matching */
      var query = (0, _escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator, "img"), "|");
      var match = new RegExp("(^|" + _exposeLoaderLunrLunr2.default.tokenizer.separator + ")(" + query + ")", "img");
      var highlight = function highlight(_, separator, token) {
        return separator + "<em>" + token + "</em>";
      };

      /* Reset stack and render results */
      this.stack_ = [];
      result.forEach(function (items, ref) {
        var _stack_;

        var doc = _this.docs_.get(ref);

        /* Render article */
        var article = JSX.createElement(
          "li",
          { "class": "md-search-result__item" },
          JSX.createElement(
            "a",
            { href: doc.location, title: doc.title,
              "class": "md-search-result__link", tabindex: "-1" },
            JSX.createElement(
              "article",
              { "class": "md-search-result__article md-search-result__article--document" },
              JSX.createElement(
                "h1",
                { "class": "md-search-result__title" },
                { __html: doc.title.replace(match, highlight) }
              ),
              doc.text.length ? JSX.createElement(
                "p",
                { "class": "md-search-result__teaser" },
                { __html: doc.text.replace(match, highlight) }
              ) : {}
            )
          )
        );

        /* Render sections for article */
        var sections = items.map(function (item) {
          return function () {
            var section = _this.docs_.get(item.ref);
            article.appendChild(JSX.createElement(
              "a",
              { href: section.location, title: section.title,
                "class": "md-search-result__link", "data-md-rel": "anchor",
                tabindex: "-1" },
              JSX.createElement(
                "article",
                { "class": "md-search-result__article" },
                JSX.createElement(
                  "h1",
                  { "class": "md-search-result__title" },
                  { __html: section.title.replace(match, highlight) }
                ),
                section.text.length ? JSX.createElement(
                  "p",
                  { "class": "md-search-result__teaser" },
                  { __html: truncate(section.text.replace(match, highlight), 400)
                  }
                ) : {}
              )
            ));
          };
        });

        /* Push articles and section renderers onto stack */
        (_stack_ = _this.stack_).push.apply(_stack_, [function () {
          return _this.list_.appendChild(article);
        }].concat(sections));
      });

      /* Gradually add results as long as the height of the container grows */
      var container = this.el_.parentNode;
      if (!(container instanceof HTMLElement)) throw new ReferenceError();
      while (this.stack_.length && container.offsetHeight >= container.scrollHeight - 16) {
        this.stack_.shift()();
      } /* Bind click handlers for anchors */
      var anchors = this.list_.querySelectorAll("[data-md-rel=anchor]");
      Array.prototype.forEach.call(anchors, function (anchor) {
        ["click", "keydown"].forEach(function (action) {
          anchor.addEventListener(action, function (ev2) {
            if (action === "keydown" && ev2.keyCode !== 13) return;

            /* Close search */
            var toggle = document.querySelector("[data-md-toggle=search]");
            if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
            if (toggle.checked) {
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
            }

            /* Hack: prevent default, as the navigation needs to be delayed due
               to the search body lock on mobile */
            ev2.preventDefault();
            setTimeout(function () {
              document.location.href = anchor.href;
            }, 100);
          });
        });
      });

      /* Update search metadata */
      switch (result.size) {
        case 0:
          this.meta_.textContent = this.message_.none;
          break;
        case 1:
          this.meta_.textContent = this.message_.one;
          break;
        default:
          this.meta_.textContent = this.message_.other.replace("#", result.size);
      }
    }
  };

  return Result;
}();

exports.default = Result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(35);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.1.5
 * Copyright (C) 2017 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.1.5"
/*!
 * lunr.utils
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf Utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @returns {lunr.Token[]}
 */
lunr.tokenizer = function (obj) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(lunr.utils.asString(t).toLowerCase())
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        tokens.push(
          new lunr.Token (str.slice(sliceStart, sliceEnd), {
            position: [sliceStart, sliceLength],
            index: tokens.length
          })
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]

    tokens = tokens.reduce(function (memo, token, j) {
      var result = fn(token, j, tokens)

      if (result === void 0 || result === '') return memo

      return memo.concat(result)
    }, [])
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str) {
  var token = new lunr.Token (str)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the cosine similarity between this vector and another
 * vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2017 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      } else {
        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        })
      }
    }

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var char = frame.str.charAt(1),
          deletionNode

      if (char in frame.node.edges) {
        deletionNode = frame.node.edges[char]
      } else {
        deletionNode = new lunr.TokenSet
        frame.node.edges[char] = deletionNode
      }

      if (frame.str.length <= 2) {
        deletionNode.final = true
      } else {
        stack.push({
          node: deletionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(2)
        })
      }
    }

    // deletion
    // just removing the last character from the str
    if (frame.editsRemaining > 0 && frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.editsRemaining > 0 && frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      } else {
        stack.push({
          node: substitutionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(1)
        })
      }
    }

    // insertion
    // can only do insertion if there are edits remaining
    if (frame.editsRemaining > 0) {
      if ("*" in frame.node.edges) {
        var insertionNode = frame.node.edges["*"]
      } else {
        var insertionNode = new lunr.TokenSet
        frame.node.edges["*"] = insertionNode
      }

      if (frame.str.length == 0) {
        insertionNode.final = true
      } else {
        stack.push({
          node: insertionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str
        })
      }
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      } else {
        stack.push({
          node: transposeNode,
          editsRemaining: frame.editsRemaining - 1,
          str: charA + frame.str.slice(2)
        })
      }
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node,
      wildcardFound = false

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * As soon as a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      wildcardFound = true
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next

      // TODO: is this needed anymore?
      if (wildcardFound) {
        node.edges["*"] = root
      }
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.documentVectors - Document vectors keyed by document reference.
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null)

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term)
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field

          /*
           * To support field level boosts a query vector is created per
           * field. This vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           *
           * If the query vector for this field does not exist yet it needs
           * to be created.
           */
          if (queryVectors[field] === undefined) {
            queryVectors[field] = new lunr.Vector
          }

          /*
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, 1 * clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef,
        fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = {},
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = []
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * @param {string} field - The name of a field to index in all documents.
 */
lunr.Builder.prototype.field = function (field) {
  this._fields.push(field)
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * @param {object} doc - The document to add to the index.
 */
lunr.Builder.prototype.add = function (doc) {
  var docRef = doc[this._ref]

  this.documentCount += 1

  for (var i = 0; i < this._fields.length; i++) {
    var fieldName = this._fields[i],
        field = doc[fieldName],
        tokens = this.tokenizer(field),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < this._fields.length; k++) {
          posting[this._fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  for (var i = 0; i < this._fields.length; i++) {
    var field = this._fields[i]
    accumulator[field] = accumulator[field] / documentsWithField[field]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[field])) + tf)
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: this._fields,
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata)

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)
  this.metadata[term] = Object.create(null)
  this.metadata[term][field] = clonedMetadata
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=0] - Whether the term should have wildcards appended or prepended.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  this.clauses.push(clause)

  return this
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * @param {string} term - The term to add to the query.
 * @param {Object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.prototype.term = function (term, options) {
  var clause = options || {}
  clause.term = term

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseFieldOrTerm

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseFieldOrTerm = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(37);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Position: _Position2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Position = function () {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Position(el, header) {
    _classCallCheck(this, Position);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
    this.parent_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize current height and test whether header is fixed */
    this.height_ = 0;
    this.pad_ = window.getComputedStyle(this.header_).position === "fixed";
  }

  /**
   * Initialize sidebar state
   */


  Position.prototype.setup = function setup() {
    var top = Array.prototype.reduce.call(this.parent_.children, function (offset, child) {
      return Math.max(offset, child.offsetTop);
    }, 0);

    /* Set lock offset for element with largest top offset */
    this.offset_ = top - (this.pad_ ? this.header_.offsetHeight : 0);
    this.update();
  };

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */


  Position.prototype.update = function update(ev) {
    var offset = window.pageYOffset;
    var visible = window.innerHeight;

    /* Update offset, in case window is resized */
    if (ev && ev.type === "resize") this.setup();

    /* Set bounds of sidebar container - must be calculated on every run, as
       the height of the content might change due to loading images etc. */
    var bounds = {
      top: this.pad_ ? this.header_.offsetHeight : 0,
      bottom: this.parent_.offsetTop + this.parent_.offsetHeight

      /* Calculate new offset and height */
    };var height = visible - bounds.top - Math.max(0, this.offset_ - offset) - Math.max(0, offset + visible - bounds.bottom);

    /* If height changed, update element */
    if (height !== this.height_) this.el_.style.height = (this.height_ = height) + "px";

    /* Sidebar should be locked, as we're below parent offset */
    if (offset >= this.offset_) {
      if (this.el_.dataset.mdState !== "lock") this.el_.dataset.mdState = "lock";

      /* Sidebar should be unlocked, if locked */
    } else if (this.el_.dataset.mdState === "lock") {
      this.el_.dataset.mdState = "";
    }
  };

  /**
   * Reset locked state and height
   */


  Position.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.height = "";
    this.height_ = 0;
  };

  return Position;
}();

exports.default = Position;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(39);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(43);

var _Repository2 = _interopRequireDefault(_Repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Adapter: _Adapter2.default,
  Repository: _Repository2.default
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(40);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  GitHub: _GitHub2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(41);

var _Abstract3 = _interopRequireDefault(_Abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * deal in the Software without restriction, including without limitation the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var GitHub = function (_Abstract) {
  _inherits(GitHub, _Abstract);

  /**
   * Retrieve repository information from GitHub
   *
   * @constructor
   *
   * @property {string} name_ - Name of the repository
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function GitHub(el) {
    _classCallCheck(this, GitHub);

    /* Extract user (and repository name) from URL, as we have to query for all
       repositories, to omit 404 errors for private repositories */
    var _this = _possibleConstructorReturn(this, _Abstract.call(this, el));

    var matches = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);
    if (matches && matches.length === 3) {
      var user = matches[1],
          name = matches[2];

      /* Initialize base URL and repository name */

      _this.base_ = "https://api.github.com/users/" + user + "/repos";
      _this.name_ = name;
    }
    return _this;
  }

  /**
   * Fetch relevant repository information from GitHub
   *
   * @return {Promise<Array<string>>} Promise returning an array of facts
   */


  GitHub.prototype.fetch_ = function fetch_() {
    var _this2 = this;

    var paginate = function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return fetch(_this2.base_ + "?per_page=30&page=" + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!(data instanceof Array)) throw new TypeError();

        /* Display number of stars and forks, if repository is given */
        if (_this2.name_) {
          var repo = data.find(function (item) {
            return item.name === _this2.name_;
          });
          if (!repo && data.length === 30) return paginate(page + 1);

          /* If we found a repo, extract the facts */
          return repo ? [_this2.format_(repo.stargazers_count) + " Stars", _this2.format_(repo.forks_count) + " Forks"] : [];

          /* Display number of repositories, otherwise */
        } else {
          return [data.length + " Repositories"];
        }
      });
    };

    /* Paginate through repos */
    return paginate();
  };

  return GitHub;
}(_Abstract3.default);

exports.default = GitHub;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(42);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Abstract = function () {

  /**
   * Retrieve repository information
   *
   * @constructor
   *
   * @property {HTMLAnchorElement} el_ - Link to repository
   * @property {string} base_ - API base URL
   * @property {number} salt_ - Unique identifier
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function Abstract(el) {
    _classCallCheck(this, Abstract);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLAnchorElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve base URL */
    this.base_ = this.el_.href;
    this.salt_ = this.hash_(this.base_);
  }

  /**
   * Retrieve data from Cookie or fetch from respective API
   *
   * @return {Promise<Array<string>>} Promise that returns an array of facts
   */


  Abstract.prototype.fetch = function fetch() {
    var _this = this;

    return new Promise(function (resolve) {
      var cached = _jsCookie2.default.getJSON(_this.salt_ + ".cache-source");
      if (typeof cached !== "undefined") {
        resolve(cached);

        /* If the data is not cached in a cookie, invoke fetch and set
           a cookie that automatically expires in 15 minutes */
      } else {
        _this.fetch_().then(function (data) {
          _jsCookie2.default.set(_this.salt_ + ".cache-source", data, { expires: 1 / 96 });
          resolve(data);
        });
      }
    });
  };

  /**
   * Abstract private function that fetches relevant repository information
   *
   * @abstract
   */


  Abstract.prototype.fetch_ = function fetch_() {
    throw new Error("fetch_(): Not implemented");
  };

  /**
   * Format a number with suffix
   *
   * @param {number} number - Number to format
   * @return {string} Formatted number
   */


  Abstract.prototype.format_ = function format_(number) {
    if (number > 10000) return (number / 1000).toFixed(0) + "k";else if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return "" + number;
  };

  /**
   * Simple hash function
   *
   * Taken from http://stackoverflow.com/a/7616484/1065584
   *
   * @param {string} str - Input string
   * @return {number} Hashed string
   */


  Abstract.prototype.hash_ = function hash_(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0, len = str.length; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return Abstract;
}();

exports.default = Abstract;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Repository = function () {

  /**
   * Render repository information
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Repository information
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Repository(el) {
    _classCallCheck(this, Repository);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize the repository
   *
   * @param {Array<string>} facts - Facts to be rendered
   */


  Repository.prototype.initialize = function initialize(facts) {
    if (facts.length && this.el_.children.length) this.el_.children[this.el_.children.length - 1].appendChild(JSX.createElement(
      "ul",
      { "class": "md-source__facts" },
      facts.map(function (fact) {
        return JSX.createElement(
          "li",
          { "class": "md-source__fact" },
          fact
        );
      })
    ));

    /* Finish rendering with animation */
    this.el_.dataset.mdState = "done";
  };

  return Repository;
}();

exports.default = Repository;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(45);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Toggle: _Toggle2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Toggle = function () {

  /**
   * Toggle tabs visibility depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {number} offset_ - Toggle page-y offset
   * @property {boolean} active_ - Tabs visibility
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Toggle(el) {
    _classCallCheck(this, Toggle);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof Node)) throw new ReferenceError();
    this.el_ = ref;

    /* Initialize offset and state */
    this.active_ = false;
  }

  /**
   * Update visibility
   */


  Toggle.prototype.update = function update() {
    var active = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - 48); // TODO: quick hack to enable same handling for hero
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "hidden" : "";
  };

  /**
   * Reset visibility
   */


  Toggle.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.active_ = false;
  };

  return Toggle;
}();

exports.default = Toggle;

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTMyNDI5ZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9MaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLXBhbGV0dGUuc2Nzcz80OWI0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jdXN0b20tZXZlbnQtcG9seWZpbGwvY3VzdG9tLWV2ZW50LXBvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmZldGNoL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvZGlzdC9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BlcnRpZXMiLCJlbCIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwiaXRlcmF0ZUNoaWxkTm9kZXMiLCJub2RlcyIsIm5vZGUiLCJ0ZXh0Q29udGVudCIsImlzQXJyYXkiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsIkxpc3RlbmVyIiwiZWxzIiwiZXZlbnRzIiwiaGFuZGxlciIsImVsc18iLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25jYXQiLCJoYW5kbGVyXyIsInVwZGF0ZSIsImV2ZW50c18iLCJ1cGRhdGVfIiwiZXYiLCJsaXN0ZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZXR1cCIsInVubGlzdGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0Iiwid2luZG93IiwiUHJvbWlzZSIsInRyYW5zbGF0ZSIsIm1ldGEiLCJnZXRFbGVtZW50c0J5TmFtZSIsImtleSIsIkhUTUxNZXRhRWxlbWVudCIsIlJlZmVyZW5jZUVycm9yIiwiY29udGVudCIsImluaXRpYWxpemUiLCJjb25maWciLCJFdmVudCIsImJvZHkiLCJIVE1MRWxlbWVudCIsImF0dGFjaCIsIk1vZGVybml6ciIsImFkZFRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInRhYmxlcyIsIndyYXAiLCJ0YWJsZSIsIm5leHRTaWJsaW5nIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImlzU3VwcG9ydGVkIiwiYmxvY2tzIiwiYmxvY2siLCJpbmRleCIsImlkIiwiYnV0dG9uIiwicGFyZW50IiwiY29weSIsIm9uIiwibWVzc2FnZSIsImFjdGlvbiIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJTZWxlY3Rpb24iLCJkYXRhc2V0IiwibWRUaW1lciIsImNsZWFyVGltZW91dCIsInBhcnNlSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvU3RyaW5nIiwiZGV0YWlscyIsInN1bW1hcnkiLCJ0YXJnZXQiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCJnZXRFbGVtZW50QnlJZCIsInN1YnN0cmluZyIsIkhUTUxEZXRhaWxzRWxlbWVudCIsIm9wZW4iLCJsb2MiLCJpb3MiLCJzY3JvbGxhYmxlIiwiaXRlbSIsInRvcCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsIkhlYWRlciIsIlNoYWRvdyIsIlRpdGxlIiwiVGFicyIsIlRvZ2dsZSIsIk1hdGNoTWVkaWEiLCJOYXYiLCJCbHVyIiwiY29sbGFwc2libGVzIiwiY29sbGFwc2UiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiQ29sbGFwc2UiLCJTY3JvbGxpbmciLCJTZWFyY2giLCJMb2NrIiwiUmVzdWx0IiwiZmV0Y2giLCJ1cmwiLCJiYXNlIiwidmVyc2lvbiIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwicXVlcnkiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJ0b2dnbGUiLCJjaGVja2VkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwiYWN0aXZlRWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiSFRNTExpbmtFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiYmx1ciIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsInJlc29sdmUiLCJIVE1MQW5jaG9yRWxlbWVudCIsIm1kU291cmNlIiwiU291cmNlIiwiQWRhcHRlciIsIkdpdEh1YiIsInNvdXJjZXMiLCJSZXBvc2l0b3J5Iiwic291cmNlIiwiZmFjdHMiLCJhcHAiLCJTaWRlYmFyIiwibGlzdGVuZXIiLCJtcSIsIm1hdGNoZXMiLCJtZWRpYSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImhlYWRlciIsInJlZiIsImVsXyIsImhlYWRlcl8iLCJoZWlnaHRfIiwiYWN0aXZlXyIsImN1cnJlbnQiLCJ0eXBlIiwiYWN0aXZlIiwicGFnZVlPZmZzZXQiLCJIVE1MSGVhZGluZ0VsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJpbmRleF8iLCJvZmZzZXRfIiwiZGlyXyIsImFuY2hvcnNfIiwicmVkdWNlIiwiYW5jaG9ycyIsIm9mZnNldCIsImRpciIsImkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbmQiLCJtYWluIiwid2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJ0b2dnbGVzIiwicGFuZSIsIm5leHRFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJsb2NrXyIsInNjcm9sbFRvIiwidHJ1bmNhdGUiLCJzdHJpbmciLCJuIiwibGlzdCIsImRhdGFfIiwibWV0YV8iLCJsaXN0XyIsIm1lc3NhZ2VfIiwicGxhY2Vob2xkZXIiLCJub25lIiwib25lIiwib3RoZXIiLCJ0b2tlbml6ZXIiLCJzZXBhcmF0b3IiLCJsYW5nXyIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImxhbmciLCJ0cmltIiwiaW5pdCIsImRvY3NfIiwicGF0aCIsImdldCIsImRvbmUiLCJ0aXRsZSIsInRleHQiLCJyZXBsYWNlIiwiXyIsImNoYXIiLCJzZXQiLCJNYXAiLCJzdGFja18iLCJmaWx0ZXJzIiwidHJpbW1lciIsInN0b3BXb3JkRmlsdGVyIiwicGlwZWxpbmUiLCJyZXN1bHQiLCJuYW1lIiwicHVzaCIsInVzZSIsIm11bHRpTGFuZ3VhZ2UiLCJmaWVsZCIsImJvb3N0IiwiY29udGFpbmVyIiwic3BsaWNlIiwicmVuZGVyIiwidmFsdWUiLCJ2YWx1ZV8iLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJ0b0xvd2VyQ2FzZSIsInRlcm0iLCJ3aWxkY2FyZCIsIlF1ZXJ5IiwiVFJBSUxJTkciLCJpdGVtcyIsIlJlZ0V4cCIsImhpZ2hsaWdodCIsInRva2VuIiwiYXJ0aWNsZSIsInNlY3Rpb25zIiwic2VjdGlvbiIsInNoaWZ0IiwiYW5jaG9yIiwiZXYyIiwiaHJlZiIsInNpemUiLCJQb3NpdGlvbiIsInBhcmVudF8iLCJwYWRfIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiY2hpbGQiLCJ2aXNpYmxlIiwiaW5uZXJIZWlnaHQiLCJib3VuZHMiLCJib3R0b20iLCJleGVjIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJUeXBlRXJyb3IiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsImdldEpTT04iLCJleHBpcmVzIiwiRXJyb3IiLCJudW1iZXIiLCJ0b0ZpeGVkIiwic3RyIiwibGVuIiwiY2hhckNvZGVBdCIsImZhY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Ozs7Ozs7QUNBQSwwRTs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7Ozs7OztBQzNDQTs7Ozs7Ozs7b0RDQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNqUEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDekxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVB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O0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDs7O0FBR0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEMsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksWUFBWTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2QkFBNkI7QUFDekMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVksV0FBVztBQUN2QixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXLFdBQVc7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSx1QkFBdUI7QUFDekY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7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QUFDNUUsUUFBSU4sV0FBVyxLQUFLSCxPQUFwQixFQUNFLEtBQUtILEdBQUwsQ0FBU3hHLE9BQVQsQ0FBaUIyRSxPQUFqQixHQUEyQixDQUFDLEtBQUtnQyxPQUFMLEdBQWVHLE1BQWhCLElBQTBCLFFBQTFCLEdBQXFDLEVBQWhFO0FBQ0gsRzs7QUFFRDs7Ozs7bUJBR0F2SixLLG9CQUFRO0FBQ04sU0FBS2lKLEdBQUwsQ0FBU3hHLE9BQVQsQ0FBaUIyRSxPQUFqQixHQUEyQixFQUEzQjtBQUNBLFNBQUtnQyxPQUFMLEdBQWUsS0FBZjtBQUNELEc7Ozs7O2tCQXpDa0IzRSxNIiwiZmlsZSI6ImFzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzMjQyOWVkIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IC8qIEpTWCAqLyB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBET00gbm9kZSBmcm9tIEpTWCdzIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGFnIG5hbWVcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllc1xuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZyB8IG51bWJlciB8IHsgX19odG1sOiBzdHJpbmcgfSB8IEFycmF5PEhUTUxFbGVtZW50Pj59XG4gICAqICAgY2hpbGRyZW4gLSBDaGlsZCBub2Rlc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTmF0aXZlIERPTSBub2RlXG4gICAqL1xuICBjcmVhdGVFbGVtZW50KHRhZywgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuXG4gICAgLyogU2V0IGFsbCBwcm9wZXJ0aWVzICovXG4gICAgaWYgKHByb3BlcnRpZXMpXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBhdHRyID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BlcnRpZXNbYXR0cl0pXG4gICAgICB9KVxuXG4gICAgLyogSXRlcmF0ZSBjaGlsZCBub2RlcyAqL1xuICAgIGNvbnN0IGl0ZXJhdGVDaGlsZE5vZGVzID0gbm9kZXMgPT4ge1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2Rlcywgbm9kZSA9PiB7XG5cbiAgICAgICAgLyogRGlyZWN0bHkgYXBwZW5kIHRleHQgY29udGVudCAqL1xuICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBub2RlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgZWwudGV4dENvbnRlbnQgKz0gbm9kZVxuXG4gICAgICAgIC8qIFJlY3Vyc2UsIGlmIHdlIGdvdCBhbiBhcnJheSAqL1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgICAgICBpdGVyYXRlQ2hpbGROb2Rlcyhub2RlKVxuXG4gICAgICAgIC8qIEFwcGVuZCByYXcgSFRNTCAqL1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLl9faHRtbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGVsLmlubmVySFRNTCArPSBub2RlLl9faHRtbFxuXG4gICAgICAgIC8qIEFwcGVuZCByZWd1bGFyIG5vZGVzICovXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qIEl0ZXJhdGUgY2hpbGQgbm9kZXMgYW5kIHJldHVybiBlbGVtZW50ICovXG4gICAgaXRlcmF0ZUNoaWxkTm9kZXMoY2hpbGRyZW4pXG4gICAgcmV0dXJuIGVsXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvcHJvdmlkZXJzL2pzeC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaW5kZXggPSB0eXBlb2YgZmV0Y2g9PSdmdW5jdGlvbicgPyBmZXRjaC5iaW5kKCkgOiBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRyZXF1ZXN0Lm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ2dldCcsIHVybCk7XG5cblx0XHRmb3IgKHZhciBpIGluIG9wdGlvbnMuaGVhZGVycykge1xuXHRcdFx0cmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGksIG9wdGlvbnMuaGVhZGVyc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzPT0naW5jbHVkZSc7XG5cblx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUocmVzcG9uc2UoKSk7XG5cdFx0fTtcblxuXHRcdHJlcXVlc3Qub25lcnJvciA9IHJlamVjdDtcblxuXHRcdHJlcXVlc3Quc2VuZChvcHRpb25zLmJvZHkpO1xuXG5cdFx0ZnVuY3Rpb24gcmVzcG9uc2UoKSB7XG5cdFx0XHR2YXIga2V5cyA9IFtdLFxuXHRcdFx0XHRhbGwgPSBbXSxcblx0XHRcdFx0aGVhZGVycyA9IHt9LFxuXHRcdFx0XHRoZWFkZXI7XG5cblx0XHRcdHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlxccyooW1xcc1xcU10qPykkL2dtLCBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRrZXlzLnB1c2goa2V5ID0ga2V5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHRhbGwucHVzaChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0XHRoZWFkZXIgPSBoZWFkZXJzW2tleV07XG5cdFx0XHRcdGhlYWRlcnNba2V5XSA9IGhlYWRlciA/IChoZWFkZXIgKyBcIixcIiArIHZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9rOiAocmVxdWVzdC5zdGF0dXMvMjAwfDApID09IDEsXHRcdC8vIDIwMC0yOTlcblx0XHRcdFx0c3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuXHRcdFx0XHR1cmw6IHJlcXVlc3QucmVzcG9uc2VVUkwsXG5cdFx0XHRcdGNsb25lOiByZXNwb25zZSxcblx0XHRcdFx0dGV4dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTsgfSxcblx0XHRcdFx0anNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KS50aGVuKEpTT04ucGFyc2UpOyB9LFxuXHRcdFx0XHRibG9iOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3JlcXVlc3QucmVzcG9uc2VdKSk7IH0sXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRrZXlzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlzOyB9LFxuXHRcdFx0XHRcdGVudHJpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFsbDsgfSxcblx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBoZWFkZXJzW24udG9Mb3dlckNhc2UoKV07IH0sXG5cdFx0XHRcdFx0aGFzOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpIGluIGhlYWRlcnM7IH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmVzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2guZXMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lciB7XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7KEFycmF5PEV2ZW50VGFyZ2V0Pil9IGVsc18gLSBFdmVudCB0YXJnZXRzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoYW5kbGVyXy0gRXZlbnQgaGFuZGxlcnNcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBldmVudHNfIC0gRXZlbnQgbmFtZXNcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gdXBkYXRlXyAtIFVwZGF0ZSBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSB7PyhzdHJpbmd8RXZlbnRUYXJnZXR8Tm9kZUxpc3Q8RXZlbnRUYXJnZXQ+KX0gZWxzIC1cbiAgICogICBTZWxlY3RvciBvciBFdmVudCB0YXJnZXRzXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheTxzdHJpbmc+KX0gZXZlbnRzIC0gRXZlbnQgbmFtZXNcbiAgICogQHBhcmFtIHsoT2JqZWN0fEZ1bmN0aW9uKX0gaGFuZGxlciAtIEhhbmRsZXIgdG8gYmUgaW52b2tlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxzLCBldmVudHMsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmVsc18gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxuICAgICAgICA6IFtdLmNvbmNhdChlbHMpKVxuXG4gICAgLyogU2V0IGhhbmRsZXIgYXMgZnVuY3Rpb24gb3IgZGlyZWN0bHkgYXMgb2JqZWN0ICovXG4gICAgdGhpcy5oYW5kbGVyXyA9IHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8geyB1cGRhdGU6IGhhbmRsZXIgfVxuICAgICAgOiBoYW5kbGVyXG5cbiAgICAvKiBJbml0aWFsaXplIGV2ZW50IG5hbWVzIGFuZCB1cGRhdGUgaGFuZGxlciAqL1xuICAgIHRoaXMuZXZlbnRzXyA9IFtdLmNvbmNhdChldmVudHMpXG4gICAgdGhpcy51cGRhdGVfID0gZXYgPT4gdGhpcy5oYW5kbGVyXy51cGRhdGUoZXYpXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcbiAgICovXG4gIGxpc3RlbigpIHtcbiAgICB0aGlzLmVsc18uZm9yRWFjaChlbCA9PiB7XG4gICAgICB0aGlzLmV2ZW50c18uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXywgZmFsc2UpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvKiBFeGVjdXRlIHNldHVwIGhhbmRsZXIsIGlmIGltcGxlbWVudGVkICovXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJfLnNldHVwID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICB0aGlzLmhhbmRsZXJfLnNldHVwKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGxpc3RlbmVyIGZvciBhbGwgcmVsZXZhbnQgZXZlbnRzXG4gICAqL1xuICB1bmxpc3RlbigpIHtcbiAgICB0aGlzLmVsc18uZm9yRWFjaChlbCA9PiB7XG4gICAgICB0aGlzLmV2ZW50c18uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qIEV4ZWN1dGUgcmVzZXQgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcl8ucmVzZXQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIHRoaXMuaGFuZGxlcl8ucmVzZXQoKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRodWIuc3ZnXCJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCJcblxuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1wiXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3NcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQb2x5ZmlsbHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW1wb3J0IFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCJcbmltcG9ydCBcInVuZmV0Y2gvcG9seWZpbGxcIlxuXG5pbXBvcnQgUHJvbWlzZSBmcm9tIFwicHJvbWlzZS1wb2x5ZmlsbFwiXG53aW5kb3cuUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlIHx8IFByb21pc2VcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGVwZW5kZW5jaWVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmltcG9ydCBDbGlwYm9hcmQgZnJvbSBcImNsaXBib2FyZFwiXG5pbXBvcnQgRmFzdENsaWNrIGZyb20gXCJmYXN0Y2xpY2tcIlxuXG5pbXBvcnQgTWF0ZXJpYWwgZnJvbSBcIi4vY29tcG9uZW50cy9NYXRlcmlhbFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgbWV0YSB0YWcgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gTWV0YSBuYW1lXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcbiAqL1xuY29uc3QgdHJhbnNsYXRlID0ga2V5ID0+IHtcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXG4gIGlmICghKG1ldGEgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQpKVxuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICByZXR1cm4gbWV0YS5jb250ZW50XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFwcGxpY2F0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBNYXRlcmlhbCBmb3IgTWtEb2NzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLXN0eWxlXG5cbiAgLyogSW5pdGlhbGl6ZSBNb2Rlcm5penIgYW5kIEZhc3RDbGljayAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgaWYgKCEoZG9jdW1lbnQuYm9keSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgLyogQXR0YWNoIEZhc3RDbGljayB0byBtaXRpZ2F0ZSAzMDBtcyBkZWxheSBvbiB0b3VjaCBkZXZpY2VzICovXG4gICAgRmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KVxuXG4gICAgLyogVGVzdCBmb3IgaU9TICovXG4gICAgTW9kZXJuaXpyLmFkZFRlc3QoXCJpb3NcIiwgKCkgPT4ge1xuICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpXG4gICAgfSlcblxuICAgIC8qIFdyYXAgYWxsIGRhdGEgdGFibGVzIGZvciBiZXR0ZXIgb3ZlcmZsb3cgc2Nyb2xsaW5nICovXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlOm5vdChbY2xhc3NdKVwiKSAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBKU1gsIHdlIHNob3VsZCByZW5hbWUgdGhlIGZpbGVcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRhYmxlcywgdGFibGUgPT4ge1xuICAgICAgY29uc3Qgd3JhcCA9IChcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXR5cGVzZXRfX3Njcm9sbHdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fdGFibGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICBpZiAodGFibGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgdGFibGUubmV4dFNpYmxpbmcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJsZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXApXG4gICAgICB9XG4gICAgICB3cmFwLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKHRhYmxlKVxuICAgIH0pXG5cbiAgICAvKiBDbGlwYm9hcmQgaW50ZWdyYXRpb24gKi9cbiAgICBpZiAoQ2xpcGJvYXJkLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29kZWhpbGl0ZSA+IHByZSwgcHJlID4gY29kZVwiKVxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9ja3MsIChibG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBgX19jb2RlXyR7aW5kZXh9YFxuXG4gICAgICAgIC8qIENyZWF0ZSBidXR0b24gd2l0aCBtZXNzYWdlIGNvbnRhaW5lciAqL1xuICAgICAgICBjb25zdCBidXR0b24gPSAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kLWNsaXBib2FyZFwiIHRpdGxlPXt0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29weVwiKX1cbiAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17YCMke2lkfSBwcmUsICMke2lkfSBjb2RlYH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWNsaXBib2FyZF9fbWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuXG4gICAgICAgIC8qIExpbmsgdG8gYmxvY2sgYW5kIGluc2VydCBidXR0b24gKi9cbiAgICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2sucGFyZW50Tm9kZVxuICAgICAgICBwYXJlbnQuaWQgPSBpZFxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgYmxvY2spXG4gICAgICB9KVxuXG4gICAgICAvKiBJbml0aWFsaXplIENsaXBib2FyZCBsaXN0ZW5lciAqL1xuICAgICAgY29uc3QgY29weSA9IG5ldyBDbGlwYm9hcmQoXCIubWQtY2xpcGJvYXJkXCIpXG5cbiAgICAgIC8qIFN1Y2Nlc3MgaGFuZGxlciAqL1xuICAgICAgY29weS5vbihcInN1Y2Nlc3NcIiwgYWN0aW9uID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi50cmlnZ2VyLnF1ZXJ5U2VsZWN0b3IoXCIubWQtY2xpcGJvYXJkX19tZXNzYWdlXCIpXG4gICAgICAgIGlmICghKG1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgICAgLyogQ2xlYXIgc2VsZWN0aW9uIGFuZCByZXNldCBkZWJvdW5jZSBsb2dpYyAqL1xuICAgICAgICBhY3Rpb24uY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICBpZiAobWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHBhcnNlSW50KG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyLCAxMCkpXG5cbiAgICAgICAgLyogU2V0IG1lc3NhZ2UgaW5kaWNhdGluZyBzdWNjZXNzIGFuZCBzaG93IGl0ICovXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gdHJhbnNsYXRlKFwiY2xpcGJvYXJkLmNvcGllZFwiKVxuXG4gICAgICAgIC8qIEhpZGUgbWVzc2FnZSBhZnRlciB0d28gc2Vjb25kcyAqL1xuICAgICAgICBtZXNzYWdlLmRhdGFzZXQubWRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXG4gICAgICAgICAgbWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIgPSBcIlwiXG4gICAgICAgIH0sIDIwMDApLnRvU3RyaW5nKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogUG9seWZpbGwgZGV0YWlscy9zdW1tYXJ5IGZ1bmN0aW9uYWxpdHkgKi9cbiAgICBpZiAoIU1vZGVybml6ci5kZXRhaWxzKSB7XG4gICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGV0YWlscyA+IHN1bW1hcnlcIilcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYmxvY2tzLCBzdW1tYXJ5ID0+IHtcbiAgICAgICAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBldi50YXJnZXQucGFyZW50Tm9kZVxuICAgICAgICAgIGlmIChkZXRhaWxzLmhhc0F0dHJpYnV0ZShcIm9wZW5cIikpIHtcbiAgICAgICAgICAgIGRldGFpbHMucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qIE9wZW4gZGV0YWlscyBhZnRlciBhbmNob3IganVtcCAqL1xuICAgIGNvbnN0IGRldGFpbHMgPSAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKVxuICAgICAgICBpZiAoIWVsKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIC8qIFdhbGsgdXAgYXMgbG9uZyBhcyB3ZSdyZSBub3QgaW4gYSBkZXRhaWxzIHRhZyAqL1xuICAgICAgICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxuICAgICAgICB3aGlsZSAocGFyZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgSFRNTERldGFpbHNFbGVtZW50KSlcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuXG4gICAgICAgIC8qIElmIHRoZXJlJ3MgYSBkZXRhaWxzIHRhZywgb3BlbiBpdCAqL1xuICAgICAgICBpZiAocGFyZW50ICYmICFwYXJlbnQub3Blbikge1xuICAgICAgICAgIHBhcmVudC5vcGVuID0gdHJ1ZVxuXG4gICAgICAgICAgLyogRm9yY2UgcmVsb2FkLCBzbyB0aGUgdmlld3BvcnQgcmVwb3NpdGlvbnMgKi9cbiAgICAgICAgICBjb25zdCBsb2MgPSBsb2NhdGlvbi5oYXNoXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIFwiXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGxvY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBkZXRhaWxzKVxuICAgIGRldGFpbHMoKVxuXG4gICAgLyogRm9yY2UgMXB4IHNjcm9sbCBvZmZzZXQgdG8gdHJpZ2dlciBvdmVyZmxvdyBzY3JvbGxpbmcgKi9cbiAgICBpZiAoTW9kZXJuaXpyLmlvcykge1xuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zY3JvbGxmaXhdXCIpXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNjcm9sbGFibGUsIGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b3AgPSBpdGVtLnNjcm9sbFRvcFxuXG4gICAgICAgICAgLyogV2UncmUgYXQgdGhlIHRvcCBvZiB0aGUgY29udGFpbmVyICovXG4gICAgICAgICAgaWYgKHRvcCA9PT0gMCkge1xuICAgICAgICAgICAgaXRlbS5zY3JvbGxUb3AgPSAxXG5cbiAgICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciAqL1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9wICsgaXRlbS5vZmZzZXRIZWlnaHQgPT09IGl0ZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IHRvcCAtIDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfSkubGlzdGVuKClcblxuICAvKiBDb21wb25lbnQ6IGhlYWRlciBzaGFkb3cgdG9nZ2xlICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5TaGFkb3coXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9Y29udGFpbmVyXVwiLFxuICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIilcbiAgKS5saXN0ZW4oKVxuXG4gIC8qIENvbXBvbmVudDogaGVhZGVyIHRpdGxlIHRvZ2dsZSAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXG4gICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gIF0sIG5ldyBNYXRlcmlhbC5IZWFkZXIuVGl0bGUoXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dGl0bGVdXCIsXG4gICAgXCIubWQtdHlwZXNldCBoMVwiKVxuICApLmxpc3RlbigpXG5cbiAgLyogQ29tcG9uZW50OiBoZXJvIHZpc2liaWxpdHkgdG9nZ2xlICovXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PWhlcm9dXCIpKVxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcbiAgICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxuICAgIF0sIG5ldyBNYXRlcmlhbC5UYWJzLlRvZ2dsZShcIltkYXRhLW1kLWNvbXBvbmVudD1oZXJvXVwiKSkubGlzdGVuKClcblxuICAvKiBDb21wb25lbnQ6IHRhYnMgdmlzaWJpbGl0eSB0b2dnbGUgKi9cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dGFic11cIikpXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gICAgXSwgbmV3IE1hdGVyaWFsLlRhYnMuVG9nZ2xlKFwiW2RhdGEtbWQtY29tcG9uZW50PXRhYnNdXCIpKS5saXN0ZW4oKVxuXG4gIC8vIC8qIENvbXBvbmVudDogc2lkZWJhciB3aXRoIG5hdmlnYXRpb24gKi9cbiAgLy8gbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXG4gIC8vICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAvLyAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gIC8vICAgXSwgbmV3IE1hdGVyaWFsLlNpZGViYXIuUG9zaXRpb24oXG4gIC8vICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXVwiLFxuICAvLyAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVhZGVyXVwiKSkpXG5cbiAgLy8gIC8qIENvbXBvbmVudDogc2lkZWJhciB3aXRoIHRhYmxlIG9mIGNvbnRlbnRzIChtaXNzaW5nIG9uIDQwNCBwYWdlKSAgKi9cbiAgLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiKSlcbiAgLy8gICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxuICAvLyAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAvLyAgICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgLy8gICAgIF0sIG5ldyBNYXRlcmlhbC5TaWRlYmFyLlBvc2l0aW9uKFxuICAvLyAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdXCIsXG4gIC8vICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIikpKVxuXG4gIC8qIENvbXBvbmVudDogbGluayBibHVycmluZyBmb3IgdGFibGUgb2YgY29udGVudHMgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcInNjcm9sbFwiLFxuICAgICAgbmV3IE1hdGVyaWFsLk5hdi5CbHVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXRvY10gW2hyZWZdXCIpKSlcblxuICAvKiBDb21wb25lbnQ6IGNvbGxhcHNpYmxlIGVsZW1lbnRzIGZvciBuYXZpZ2F0aW9uICovXG4gIGNvbnN0IGNvbGxhcHNpYmxlcyA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLWNvbXBvbmVudD1jb2xsYXBzaWJsZV1cIilcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjb2xsYXBzaWJsZXMsIGNvbGxhcHNlID0+IHtcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyMjBweClcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihjb2xsYXBzZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBcImNsaWNrXCIsXG4gICAgICAgIG5ldyBNYXRlcmlhbC5OYXYuQ29sbGFwc2UoY29sbGFwc2UpKSlcbiAgfSlcblxuICAvKiBDb21wb25lbnQ6IGFjdGl2ZSBwYW5lIG1vbml0b3IgZm9yIGlPUyBzY3JvbGxpbmcgZml4ZXMgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjE5cHgpXCIsXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gW2RhdGEtbWQtdG9nZ2xlXVwiLCBcImNoYW5nZVwiLFxuICAgICAgbmV3IE1hdGVyaWFsLk5hdi5TY3JvbGxpbmcoXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gbmF2XCIpKSlcblxuICAvKiBJbml0aWFsaXplIHNlYXJjaCwgaWYgYXZhaWxhYmxlICovXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF1cIikpIHtcblxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIGJvZHkgbG9jayBmb3IgbW9iaWxlICovXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5NTlweClcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsXG4gICAgICAgIG5ldyBNYXRlcmlhbC5TZWFyY2guTG9jayhcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpKSlcblxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIHJlc3VsdHMgKi9cbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFtcbiAgICAgIFwiZm9jdXNcIiwgXCJrZXl1cFwiLCBcImNoYW5nZVwiXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNlYXJjaC5SZXN1bHQoXCJbZGF0YS1tZC1jb21wb25lbnQ9cmVzdWx0XVwiLCAoKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLnVybC5iYXNlfS8ke1xuICAgICAgICBjb25maWcudmVyc2lvbiA8IFwiMC4xN1wiID8gXCJta2RvY3NcIiA6IFwic2VhcmNoXCJcbiAgICAgIH0vc2VhcmNoX2luZGV4Lmpzb25gLCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICAgICAgZG9jLmxvY2F0aW9uID0gY29uZmlnLnVybC5iYXNlICsgZG9jLmxvY2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZG9jXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KSkubGlzdGVuKClcblxuICAgIC8qIExpc3RlbmVyOiBmb2N1cyBpbnB1dCBhZnRlciBmb3JtIHJlc2V0ICovXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXJlc2V0XVwiLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXG4gICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIHF1ZXJ5LmZvY3VzKClcbiAgICAgIH0sIDEwKVxuICAgIH0pLmxpc3RlbigpXG5cbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgb3BlbmluZyBzZWFyY2ggKi9cbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiLCBcImNoYW5nZVwiLCBldiA9PiB7XG4gICAgICBzZXRUaW1lb3V0KHRvZ2dsZSA9PiB7XG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXG4gICAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSwgNDAwLCBldi50YXJnZXQpXG4gICAgfSkubGlzdGVuKClcblxuICAgIC8qIExpc3RlbmVyOiBvcGVuIHNlYXJjaCBvbiBmb2N1cyAqL1xuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcbiAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIGlmICghdG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgLyogTGlzdGVuZXI6IGtleWJvYXJkIGhhbmRsZXJzICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJrZXlkb3duXCIsIGV2ID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzcGxpdCB1cCBpbnRvIGNvbXBvbmVudCB0byByZWR1Y2UgY29tcGxleGl0eVxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXG4gICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgLyogQWJvcnQgaWYgbWV0YSBrZXkgKG1hY09TKSBvciBjdHJsIGtleSAoV2luZG93cykgaXMgcHJlc3NlZCAqL1xuICAgICAgaWYgKGV2Lm1ldGFLZXkgfHwgZXYuY3RybEtleSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIC8qIFNlYXJjaCBpcyBvcGVuICovXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcblxuICAgICAgICAvKiBFbnRlcjogcHJldmVudCBmb3JtIHN1Ym1pc3Npb24gKi9cbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgaWYgKHF1ZXJ5ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgIC8qIEdvIHRvIGN1cnJlbnQgYWN0aXZlL2ZvY3VzZWQgbGluayAqL1xuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVtkYXRhLW1kLXN0YXRlPWFjdGl2ZV1cIilcbiAgICAgICAgICAgIGlmIChmb2N1cyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBmb2N1cy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG5cbiAgICAgICAgICAgICAgLyogQ2xvc2Ugc2VhcmNoICovXG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICAgICAgICBxdWVyeS5ibHVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgLyogRXNjYXBlIG9yIFRhYjogY2xvc2Ugc2VhcmNoICovXG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gOSB8fCBldi5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgcXVlcnkuYmx1cigpXG5cbiAgICAgICAgLyogSG9yaXpvbnRhbCBhcnJvd3MgYW5kIGJhY2tzcGFjZTogZm9jdXMgaW5wdXQgKi9cbiAgICAgICAgfSBlbHNlIGlmIChbOCwgMzcsIDM5XS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xuICAgICAgICAgIGlmIChxdWVyeSAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcbiAgICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcblxuICAgICAgICAvKiBWZXJ0aWNhbCBhcnJvd3M6IHNlbGVjdCBwcmV2aW91cyBvciBuZXh0IHNlYXJjaCByZXN1bHQgKi9cbiAgICAgICAgfSBlbHNlIGlmIChbMzgsIDQwXS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGV2LmtleUNvZGVcblxuICAgICAgICAgIC8qIFJldHJpZXZlIGFsbCByZXN1bHRzICovXG4gICAgICAgICAgY29uc3QgbGlua3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XSwgW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF0gW2hyZWZdXCIpKVxuXG4gICAgICAgICAgLyogUmV0cmlldmUgY3VycmVudCBhY3RpdmUvZm9jdXNlZCByZXN1bHQgKi9cbiAgICAgICAgICBjb25zdCBmb2N1cyA9IGxpbmtzLmZpbmQobGluayA9PiB7XG4gICAgICAgICAgICBpZiAoIShsaW5rIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgICAgIHJldHVybiBsaW5rLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGZvY3VzKVxuICAgICAgICAgICAgZm9jdXMuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuXG4gICAgICAgICAgLyogQ2FsY3VsYXRlIGluZGV4IGRlcGVuZGluZyBvbiBkaXJlY3Rpb24sIGFkZCBsZW5ndGggdG8gZm9ybSByaW5nICovXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLm1heCgwLCAoXG4gICAgICAgICAgICBsaW5rcy5pbmRleE9mKGZvY3VzKSArIGxpbmtzLmxlbmd0aCArIChrZXkgPT09IDM4ID8gLTEgOiArMSlcbiAgICAgICAgICApICUgbGlua3MubGVuZ3RoKVxuXG4gICAgICAgICAgLyogU2V0IGFjdGl2ZSBzdGF0ZSBhbmQgZm9jdXMgKi9cbiAgICAgICAgICBpZiAobGlua3NbaW5kZXhdKSB7XG4gICAgICAgICAgICBsaW5rc1tpbmRleF0uZGF0YXNldC5tZFN0YXRlID0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmZvY3VzKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlICovXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAvKiBSZXR1cm4gZmFsc2UgcHJldmVudHMgdGhlIGN1cnNvciBwb3NpdGlvbiBmcm9tIGNoYW5naW5nICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgLyogU2VhcmNoIGlzIGNsb3NlZCBhbmQgd2UncmUgbm90IGluc2lkZSBhIGZvcm0gKi9cbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5mb3JtKSB7XG5cbiAgICAgICAgLyogRi9TOiBPcGVuIHNlYXJjaCBpZiBub3QgaW4gaW5wdXQgZmllbGQgKi9cbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDcwIHx8IGV2LmtleUNvZGUgPT09IDgzKSB7XG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmxpc3RlbigpXG5cbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgcXVlcnkgaWYgaW4gc2VhcmNoIGlzIG9wZW4gYW5kIGNoYXJhY3RlciBpcyB0eXBlZCAqL1xuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5cHJlc3NcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAocXVlcnkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pLmxpc3RlbigpXG4gIH1cblxuICAvKiBMaXN0ZW5lcjogaGFuZGxlIHRhYmJpbmcgY29udGV4dCBmb3IgYmV0dGVyIGFjY2Vzc2liaWxpdHkgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBldiA9PiB7XG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIC5tZC1uYXZfX2xpbmtbZm9yXTpub3QoW3RhYmluZGV4XSlcIilcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XG4gICAgICAgIGlmIChsYWJlbC5vZmZzZXRIZWlnaHQpXG4gICAgICAgICAgbGFiZWwudGFiSW5kZXggPSAwXG4gICAgICB9KVxuICAgIH1cbiAgfSkubGlzdGVuKClcblxuICAvKiBMaXN0ZW5lcjogcmVzZXQgdGFiYmluZyBiZWhhdmlvciAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSAubWQtbmF2X19saW5rW3RhYmluZGV4XVwiKVxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XG4gICAgICBsYWJlbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJJbmRleFwiKVxuICAgIH0pXG4gIH0pLmxpc3RlbigpXG5cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJ0YWJiaW5nXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgfSlcblxuICAvKiBMaXN0ZW5lcjogY2xvc2UgZHJhd2VyIHdoZW4gYW5jaG9yIGxpbmtzIGFyZSBjbGlja2VkICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIFtocmVmXj0nIyddXCIsXG4gICAgICBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1kcmF3ZXJdXCIpXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAvKiBSZXRyaWV2ZSBmYWN0cyBmb3IgdGhlIGdpdmVuIHJlcG9zaXRvcnkgdHlwZSAqL1xuICA7KCgpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1zb3VyY2VdXCIpXG4gICAgaWYgKCFlbClcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgZWxzZSBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHN3aXRjaCAoZWwuZGF0YXNldC5tZFNvdXJjZSkge1xuICAgICAgY2FzZSBcImdpdGh1YlwiOiByZXR1cm4gbmV3IE1hdGVyaWFsLlNvdXJjZS5BZGFwdGVyLkdpdEh1YihlbCkuZmV0Y2goKVxuICAgICAgZGVmYXVsdDogcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSlcbiAgICB9XG5cbiAgLyogUmVuZGVyIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gKi9cbiAgfSkoKS50aGVuKGZhY3RzID0+IHtcbiAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXNvdXJjZV1cIilcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNvdXJjZXMsIHNvdXJjZSA9PiB7XG4gICAgICBuZXcgTWF0ZXJpYWwuU291cmNlLlJlcG9zaXRvcnkoc291cmNlKVxuICAgICAgICAuaW5pdGlhbGl6ZShmYWN0cylcbiAgICB9KVxuICB9KVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHBvcnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFByb3ZpZGUgdGhpcyBmb3IgZG93bndhcmQgY29tcGF0aWJpbGl0eSBmb3Igbm93ICovXG5jb25zdCBhcHAgPSB7XG4gIGluaXRpYWxpemVcbn1cblxuZXhwb3J0IHtcbiAgYXBwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBQb2x5ZmlsbCBmb3IgY3JlYXRpbmcgQ3VzdG9tRXZlbnRzIG9uIElFOS8xMC8xMVxuXG4vLyBjb2RlIHB1bGxlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Q0dG9jY2hpbmkvY3VzdG9tZXZlbnQtcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXG50cnkge1xuICAgIHZhciBjZSA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3Rlc3QnKTtcbiAgICBjZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIElFIGhhcyBwcm9ibGVtcyB3aXRoIC5wcmV2ZW50RGVmYXVsdCgpIG9uIGN1c3RvbSBldmVudHNcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzM0OTE5MVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwcmV2ZW50IGRlZmF1bHQnKTtcbiAgICB9XG59IGNhdGNoKGUpIHtcbiAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgIHZhciBldnQsIG9yaWdQcmV2ZW50O1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIG9yaWdQcmV2ZW50ID0gZXZ0LnByZXZlbnREZWZhdWx0O1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdQcmV2ZW50LmNhbGwodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZXZ0O1xuICB9O1xuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50OyAvLyBleHBvc2UgZGVmaW5pdGlvbiB0byB3aW5kb3dcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICghd2luZG93LmZldGNoKSB3aW5kb3cuZmV0Y2ggPSByZXF1aXJlKCcuJykuZGVmYXVsdCB8fCByZXF1aXJlKCcuJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4vLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgcHJvbSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuICByZXR1cm4gcHJvbTtcbn07XG5cblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbihhcnIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghYXJyIHx8IHR5cGVvZiBhcnIubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVXNlIHBvbHlmaWxsIGZvciBzZXRJbW1lZGlhdGUgZm9yIHBlcmZvcm1hbmNlIGdhaW5zXG5Qcm9taXNlLl9pbW1lZGlhdGVGbiA9XG4gICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmXG4gICAgZnVuY3Rpb24oZm4pIHtcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSkgfHxcbiAgZnVuY3Rpb24oZm4pIHtcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG4gIH07XG5cblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1laWRhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuMFxuICogaHR0cHM6Ly96ZW5vcm9jaGEuZ2l0aHViLmlvL2NsaXBib2FyZC5qc1xuICogXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFttb2R1bGUsIF9fd2VicGFja19yZXF1aXJlX18oNyldLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZhY3RvcnkobW9kdWxlLCByZXF1aXJlKCdzZWxlY3QnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1vZCA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZhY3RvcnkobW9kLCBnbG9iYWwuc2VsZWN0KTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9zZWxlY3QpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX3NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZWxlY3QpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgQ2xpcGJvYXJkQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAgICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlciA9IG9wdGlvbnMuZW1pdHRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIgPSBvcHRpb25zLnRyaWdnZXI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdpbml0U2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0RmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0RmFrZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZha2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjaykgfHwgdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmZvbnRTaXplID0gJzEycHQnO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcbiAgICAgICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0udmFsdWUgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAncmVtb3ZlRmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRmFrZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3NlbGVjdFRhcmdldCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2NvcHlUZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb3B5VGV4dCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VlZGVkID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQodGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChzdWNjZWVkZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdoYW5kbGVSZXN1bHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChzdWNjZWVkZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiB0aGlzLmNsZWFyU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY2xlYXJTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2NvcHknO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbiAhPT0gJ2NvcHknICYmIHRoaXMuX2FjdGlvbiAhPT0gJ2N1dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG4gICAgfSgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmRBY3Rpb247XG59KTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW21vZHVsZSwgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJy4vY2xpcGJvYXJkLWFjdGlvbicpLCByZXF1aXJlKCd0aW55LWVtaXR0ZXInKSwgcmVxdWlyZSgnZ29vZC1saXN0ZW5lcicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24sIGdsb2JhbC50aW55RW1pdHRlciwgZ2xvYmFsLmdvb2RMaXN0ZW5lcik7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmQgPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfY2xpcGJvYXJkQWN0aW9uLCBfdGlueUVtaXR0ZXIsIF9nb29kTGlzdGVuZXIpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgdmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbiAgICB2YXIgX2dvb2RMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29kTGlzdGVuZXIpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmICghc2VsZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICB9XG5cbiAgICB2YXIgQ2xpcGJvYXJkID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gICAgICAgIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENsaXBib2FyZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICAgICAqIG9yIGN1c3RvbSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZCwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBfdHlwZW9mKG9wdGlvbnMuY29udGFpbmVyKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2xpc3RlbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gKDAsIF9nb29kTGlzdGVuZXIyLmRlZmF1bHQpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24odHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0QWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdFRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLCBbe1xuICAgICAgICAgICAga2V5OiAnaXNTdXBwb3J0ZWQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcblxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO1xuXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZDtcbiAgICB9KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG59KTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsb3Nlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvZGlzdC9jbGlwYm9hcmQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjsoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIEBwcmVzZXJ2ZSBGYXN0Q2xpY2s6IHBvbHlmaWxsIHRvIHJlbW92ZSBjbGljayBkZWxheXMgb24gYnJvd3NlcnMgd2l0aCB0b3VjaCBVSXMuXG5cdCAqXG5cdCAqIEBjb2RpbmdzdGFuZGFyZCBmdGxhYnMtanN2MlxuXHQgKiBAY29weXJpZ2h0IFRoZSBGaW5hbmNpYWwgVGltZXMgTGltaXRlZCBbQWxsIFJpZ2h0cyBSZXNlcnZlZF1cblx0ICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKHNlZSBMSUNFTlNFLnR4dClcblx0ICovXG5cblx0Lypqc2xpbnQgYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUqL1xuXHQvKmdsb2JhbCBkZWZpbmUsIEV2ZW50LCBOb2RlKi9cblxuXG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZSBmYXN0LWNsaWNraW5nIGxpc3RlbmVycyBvbiB0aGUgc3BlY2lmaWVkIGxheWVyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRmdW5jdGlvbiBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpIHtcblx0XHR2YXIgb2xkT25DbGljaztcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogV2hldGhlciBhIGNsaWNrIGlzIGN1cnJlbnRseSBiZWluZyB0cmFja2VkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaW1lc3RhbXAgZm9yIHdoZW4gY2xpY2sgdHJhY2tpbmcgc3RhcnRlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVsZW1lbnQgYmVpbmcgdHJhY2tlZCBmb3IgYSBjbGljay5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEV2ZW50VGFyZ2V0XG5cdFx0ICovXG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWC1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFktY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBJRCBvZiB0aGUgbGFzdCB0b3VjaCwgcmV0cmlldmVkIGZyb20gVG91Y2guaWRlbnRpZmllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRvdWNobW92ZSBib3VuZGFyeSwgYmV5b25kIHdoaWNoIGEgY2xpY2sgd2lsbCBiZSBjYW5jZWxsZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoQm91bmRhcnkgPSBvcHRpb25zLnRvdWNoQm91bmRhcnkgfHwgMTA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBGYXN0Q2xpY2sgbGF5ZXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5sYXllciA9IGxheWVyO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG1pbmltdW0gdGltZSBiZXR3ZWVuIHRhcCh0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCkgZXZlbnRzXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcERlbGF5ID0gb3B0aW9ucy50YXBEZWxheSB8fCAyMDA7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWF4aW11bSB0aW1lIGZvciBhIHRhcFxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50YXBUaW1lb3V0ID0gb3B0aW9ucy50YXBUaW1lb3V0IHx8IDcwMDtcblxuXHRcdGlmIChGYXN0Q2xpY2subm90TmVlZGVkKGxheWVyKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIEFuZHJvaWQgZG9uJ3QgaGF2ZSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuXHRcdGZ1bmN0aW9uIGJpbmQobWV0aG9kLCBjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTsgfTtcblx0XHR9XG5cblxuXHRcdHZhciBtZXRob2RzID0gWydvbk1vdXNlJywgJ29uQ2xpY2snLCAnb25Ub3VjaFN0YXJ0JywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hFbmQnLCAnb25Ub3VjaENhbmNlbCddO1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMCwgbCA9IG1ldGhvZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRjb250ZXh0W21ldGhvZHNbaV1dID0gYmluZChjb250ZXh0W21ldGhvZHNbaV1dLCBjb250ZXh0KTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnMgYXMgcmVxdWlyZWRcblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXG5cdFx0Ly8gSGFjayBpcyByZXF1aXJlZCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0Ly8gd2hpY2ggaXMgaG93IEZhc3RDbGljayBub3JtYWxseSBzdG9wcyBjbGljayBldmVudHMgYnViYmxpbmcgdG8gY2FsbGJhY2tzIHJlZ2lzdGVyZWQgb24gdGhlIEZhc3RDbGlja1xuXHRcdC8vIGxheWVyIHdoZW4gdGhleSBhcmUgY2FuY2VsbGVkLlxuXHRcdGlmICghRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBybXYgPSBOb2RlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdHJtdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBhZHYgPSBOb2RlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCAoY2FsbGJhY2suaGlqYWNrZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0aWYgKCFldmVudC5wcm9wYWdhdGlvblN0b3BwZWQpIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIElmIGEgaGFuZGxlciBpcyBhbHJlYWR5IGRlY2xhcmVkIGluIHRoZSBlbGVtZW50J3Mgb25jbGljayBhdHRyaWJ1dGUsIGl0IHdpbGwgYmUgZmlyZWQgYmVmb3JlXG5cdFx0Ly8gRmFzdENsaWNrJ3Mgb25DbGljayBoYW5kbGVyLiBGaXggdGhpcyBieSBwdWxsaW5nIG91dCB0aGUgdXNlci1kZWZpbmVkIGhhbmRsZXIgZnVuY3Rpb24gYW5kXG5cdFx0Ly8gYWRkaW5nIGl0IGFzIGxpc3RlbmVyLlxuXHRcdGlmICh0eXBlb2YgbGF5ZXIub25jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXG5cdFx0XHQvLyBBbmRyb2lkIGJyb3dzZXIgb24gYXQgbGVhc3QgMy4yIHJlcXVpcmVzIGEgbmV3IHJlZmVyZW5jZSB0byB0aGUgZnVuY3Rpb24gaW4gbGF5ZXIub25jbGlja1xuXHRcdFx0Ly8gLSB0aGUgb2xkIG9uZSB3b24ndCB3b3JrIGlmIHBhc3NlZCB0byBhZGRFdmVudExpc3RlbmVyIGRpcmVjdGx5LlxuXHRcdFx0b2xkT25DbGljayA9IGxheWVyLm9uY2xpY2s7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdG9sZE9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0bGF5ZXIub25jbGljayA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogV2luZG93cyBQaG9uZSA4LjEgZmFrZXMgdXNlciBhZ2VudCBzdHJpbmcgdG8gbG9vayBsaWtlIEFuZHJvaWQgYW5kIGlQaG9uZS5cblx0KlxuXHQqIEB0eXBlIGJvb2xlYW5cblx0Ki9cblx0dmFyIGRldmljZUlzV2luZG93c1Bob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBQaG9uZVwiKSA+PSAwO1xuXG5cdC8qKlxuXHQgKiBBbmRyb2lkIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1MgPSAvaVAoYWR8aG9uZXxvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA0IHJlcXVpcmVzIGFuIGV4Y2VwdGlvbiBmb3Igc2VsZWN0IGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1M0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyA0X1xcZChfXFxkKT8vKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA2LjAtNy4qIHJlcXVpcmVzIHRoZSB0YXJnZXQgZWxlbWVudCB0byBiZSBtYW51YWxseSBkZXJpdmVkXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIFs2LTddX1xcZC8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0LyoqXG5cdCAqIEJsYWNrQmVycnkgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQmxhY2tCZXJyeTEwID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdCQjEwJykgPiAwO1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBuYXRpdmUgY2xpY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IG5lZWRzIGEgbmF0aXZlIGNsaWNrXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHQvLyBEb24ndCBzZW5kIGEgc3ludGhldGljIGNsaWNrIHRvIGRpc2FibGVkIGlucHV0cyAoaXNzdWUgIzYyKVxuXHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRpZiAodGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdpbnB1dCc6XG5cblx0XHRcdC8vIEZpbGUgaW5wdXRzIG5lZWQgcmVhbCBjbGlja3Mgb24gaU9TIDYgZHVlIHRvIGEgYnJvd3NlciBidWcgKGlzc3VlICM2OClcblx0XHRcdGlmICgoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0LnR5cGUgPT09ICdmaWxlJykgfHwgdGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsYWJlbCc6XG5cdFx0Y2FzZSAnaWZyYW1lJzogLy8gaU9TOCBob21lc2NyZWVuIGFwcHMgY2FuIHByZXZlbnQgZXZlbnRzIGJ1YmJsaW5nIGludG8gZnJhbWVzXG5cdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICgvXFxibmVlZHNjbGlja1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBnaXZlbiBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBjbGljayBpbnRvIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBuYXRpdmUgY2xpY2suXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzRm9jdXMgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAhZGV2aWNlSXNBbmRyb2lkO1xuXHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdHN3aXRjaCAodGFyZ2V0LnR5cGUpIHtcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdmaWxlJzpcblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gcG9pbnQgaW4gYXR0ZW1wdGluZyB0byBmb2N1cyBkaXNhYmxlZCBpbnB1dHNcblx0XHRcdHJldHVybiAhdGFyZ2V0LmRpc2FibGVkICYmICF0YXJnZXQucmVhZE9ubHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoL1xcYm5lZWRzZm9jdXNcXGIvKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuc2VuZENsaWNrID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCwgZXZlbnQpIHtcblx0XHR2YXIgY2xpY2tFdmVudCwgdG91Y2g7XG5cblx0XHQvLyBPbiBzb21lIEFuZHJvaWQgZGV2aWNlcyBhY3RpdmVFbGVtZW50IG5lZWRzIHRvIGJlIGJsdXJyZWQgb3RoZXJ3aXNlIHRoZSBzeW50aGV0aWMgY2xpY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCAoIzI0KVxuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQpIHtcblx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdH1cblxuXHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHQvLyBTeW50aGVzaXNlIGEgY2xpY2sgZXZlbnQsIHdpdGggYW4gZXh0cmEgYXR0cmlidXRlIHNvIGl0IGNhbiBiZSB0cmFja2VkXG5cdFx0Y2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdGNsaWNrRXZlbnQuaW5pdE1vdXNlRXZlbnQodGhpcy5kZXRlcm1pbmVFdmVudFR5cGUodGFyZ2V0RWxlbWVudCksIHRydWUsIHRydWUsIHdpbmRvdywgMSwgdG91Y2guc2NyZWVuWCwgdG91Y2guc2NyZWVuWSwgdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHRcdGNsaWNrRXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCA9IHRydWU7XG5cdFx0dGFyZ2V0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuXHR9O1xuXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGV0ZXJtaW5lRXZlbnRUeXBlID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXG5cdFx0Ly9Jc3N1ZSAjMTU5OiBBbmRyb2lkIENocm9tZSBTZWxlY3QgQm94IGRvZXMgbm90IG9wZW4gd2l0aCBhIHN5bnRoZXRpYyBjbGljayBldmVudFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQgJiYgdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ21vdXNlZG93bic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdjbGljayc7XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBsZW5ndGg7XG5cblx0XHQvLyBJc3N1ZSAjMTYwOiBvbiBpT1MgNywgc29tZSBpbnB1dCBlbGVtZW50cyAoZS5nLiBkYXRlIGRhdGV0aW1lIG1vbnRoKSB0aHJvdyBhIHZhZ3VlIFR5cGVFcnJvciBvbiBzZXRTZWxlY3Rpb25SYW5nZS4gVGhlc2UgZWxlbWVudHMgZG9uJ3QgaGF2ZSBhbiBpbnRlZ2VyIHZhbHVlIGZvciB0aGUgc2VsZWN0aW9uU3RhcnQgYW5kIHNlbGVjdGlvbkVuZCBwcm9wZXJ0aWVzLCBidXQgdW5mb3J0dW5hdGVseSB0aGF0IGNhbid0IGJlIHVzZWQgZm9yIGRldGVjdGlvbiBiZWNhdXNlIGFjY2Vzc2luZyB0aGUgcHJvcGVydGllcyBhbHNvIHRocm93cyBhIFR5cGVFcnJvci4gSnVzdCBjaGVjayB0aGUgdHlwZSBpbnN0ZWFkLiBGaWxlZCBhcyBBcHBsZSBidWcgIzE1MTIyNzI0LlxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiB0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlICYmIHRhcmdldEVsZW1lbnQudHlwZS5pbmRleE9mKCdkYXRlJykgIT09IDAgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAndGltZScgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnbW9udGgnKSB7XG5cdFx0XHRsZW5ndGggPSB0YXJnZXRFbGVtZW50LnZhbHVlLmxlbmd0aDtcblx0XHRcdHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuZ3RoLCBsZW5ndGgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyIGFuZCBpZiBzbywgc2V0IGEgZmxhZyBvbiBpdC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnVwZGF0ZVNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0XHR2YXIgc2Nyb2xsUGFyZW50LCBwYXJlbnRFbGVtZW50O1xuXG5cdFx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cblx0XHQvLyBBdHRlbXB0IHRvIGRpc2NvdmVyIHdoZXRoZXIgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBzY3JvbGxhYmxlIGxheWVyLiBSZS1jaGVjayBpZiB0aGVcblx0XHQvLyB0YXJnZXQgZWxlbWVudCB3YXMgbW92ZWQgdG8gYW5vdGhlciBwYXJlbnQuXG5cdFx0aWYgKCFzY3JvbGxQYXJlbnQgfHwgIXNjcm9sbFBhcmVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0cGFyZW50RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHRcdFx0c2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fSB3aGlsZSAocGFyZW50RWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWx3YXlzIHVwZGF0ZSB0aGUgc2Nyb2xsIHRvcCB0cmFja2VyIGlmIHBvc3NpYmxlLlxuXHRcdGlmIChzY3JvbGxQYXJlbnQpIHtcblx0XHRcdHNjcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wID0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxFdmVudFRhcmdldH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCA9IGZ1bmN0aW9uKGV2ZW50VGFyZ2V0KSB7XG5cblx0XHQvLyBPbiBzb21lIG9sZGVyIGJyb3dzZXJzIChub3RhYmx5IFNhZmFyaSBvbiBpT1MgNC4xIC0gc2VlIGlzc3VlICM1NikgdGhlIGV2ZW50IHRhcmdldCBtYXkgYmUgYSB0ZXh0IG5vZGUuXG5cdFx0aWYgKGV2ZW50VGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIGV2ZW50VGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50VGFyZ2V0O1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIHN0YXJ0LCByZWNvcmQgdGhlIHBvc2l0aW9uIGFuZCBzY3JvbGwgb2Zmc2V0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0RWxlbWVudCwgdG91Y2gsIHNlbGVjdGlvbjtcblxuXHRcdC8vIElnbm9yZSBtdWx0aXBsZSB0b3VjaGVzLCBvdGhlcndpc2UgcGluY2gtdG8tem9vbSBpcyBwcmV2ZW50ZWQgaWYgYm90aCBmaW5nZXJzIGFyZSBvbiB0aGUgRmFzdENsaWNrIGVsZW1lbnQgKGlzc3VlICMxMTEpLlxuXHRcdGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHR0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG5cblx0XHRpZiAoZGV2aWNlSXNJT1MpIHtcblxuXHRcdFx0Ly8gT25seSB0cnVzdGVkIGV2ZW50cyB3aWxsIGRlc2VsZWN0IHRleHQgb24gaU9TIChpc3N1ZSAjNDkpXG5cdFx0XHRzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0XHRpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0XHQvLyBXZWlyZCB0aGluZ3MgaGFwcGVuIG9uIGlPUyB3aGVuIGFuIGFsZXJ0IG9yIGNvbmZpcm0gZGlhbG9nIGlzIG9wZW5lZCBmcm9tIGEgY2xpY2sgZXZlbnQgY2FsbGJhY2sgKGlzc3VlICMyMyk6XG5cdFx0XHRcdC8vIHdoZW4gdGhlIHVzZXIgbmV4dCB0YXBzIGFueXdoZXJlIGVsc2Ugb24gdGhlIHBhZ2UsIG5ldyB0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCBldmVudHMgYXJlIGRpc3BhdGNoZWRcblx0XHRcdFx0Ly8gd2l0aCB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIHRoZSB0b3VjaCBldmVudCB0aGF0IHByZXZpb3VzbHkgdHJpZ2dlcmVkIHRoZSBjbGljayB0aGF0IHRyaWdnZXJlZCB0aGUgYWxlcnQuXG5cdFx0XHRcdC8vIFNhZGx5LCB0aGVyZSBpcyBhbiBpc3N1ZSBvbiBpT1MgNCB0aGF0IGNhdXNlcyBzb21lIG5vcm1hbCB0b3VjaCBldmVudHMgdG8gaGF2ZSB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIGFuXG5cdFx0XHRcdC8vIGltbWVkaWF0ZWx5IHByZWNlZWRpbmcgdG91Y2ggZXZlbnQgKGlzc3VlICM1MiksIHNvIHRoaXMgZml4IGlzIHVuYXZhaWxhYmxlIG9uIHRoYXQgcGxhdGZvcm0uXG5cdFx0XHRcdC8vIElzc3VlIDEyMDogdG91Y2guaWRlbnRpZmllciBpcyAwIHdoZW4gQ2hyb21lIGRldiB0b29scyAnRW11bGF0ZSB0b3VjaCBldmVudHMnIGlzIHNldCB3aXRoIGFuIGlPUyBkZXZpY2UgVUEgc3RyaW5nLFxuXHRcdFx0XHQvLyB3aGljaCBjYXVzZXMgYWxsIHRvdWNoIGV2ZW50cyB0byBiZSBpZ25vcmVkLiBBcyB0aGlzIGJsb2NrIG9ubHkgYXBwbGllcyB0byBpT1MsIGFuZCBpT1MgaWRlbnRpZmllcnMgYXJlIGFsd2F5cyBsb25nLFxuXHRcdFx0XHQvLyByYW5kb20gaW50ZWdlcnMsIGl0J3Mgc2FmZSB0byB0byBjb250aW51ZSBpZiB0aGUgaWRlbnRpZmllciBpcyAwIGhlcmUuXG5cdFx0XHRcdGlmICh0b3VjaC5pZGVudGlmaWVyICYmIHRvdWNoLmlkZW50aWZpZXIgPT09IHRoaXMubGFzdFRvdWNoSWRlbnRpZmllcikge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgKHVzaW5nIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCkgYW5kOlxuXHRcdFx0XHQvLyAxKSB0aGUgdXNlciBkb2VzIGEgZmxpbmcgc2Nyb2xsIG9uIHRoZSBzY3JvbGxhYmxlIGxheWVyXG5cdFx0XHRcdC8vIDIpIHRoZSB1c2VyIHN0b3BzIHRoZSBmbGluZyBzY3JvbGwgd2l0aCBhbm90aGVyIHRhcFxuXHRcdFx0XHQvLyB0aGVuIHRoZSBldmVudC50YXJnZXQgb2YgdGhlIGxhc3QgJ3RvdWNoZW5kJyBldmVudCB3aWxsIGJlIHRoZSBlbGVtZW50IHRoYXQgd2FzIHVuZGVyIHRoZSB1c2VyJ3MgZmluZ2VyXG5cdFx0XHRcdC8vIHdoZW4gdGhlIGZsaW5nIHNjcm9sbCB3YXMgc3RhcnRlZCwgY2F1c2luZyBGYXN0Q2xpY2sgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IHRvIHRoYXQgbGF5ZXIgLSB1bmxlc3MgYSBjaGVja1xuXHRcdFx0XHQvLyBpcyBtYWRlIHRvIGVuc3VyZSB0aGF0IGEgcGFyZW50IGxheWVyIHdhcyBub3Qgc2Nyb2xsZWQgYmVmb3JlIHNlbmRpbmcgYSBzeW50aGV0aWMgY2xpY2sgKGlzc3VlICM0MikuXG5cdFx0XHRcdHRoaXMudXBkYXRlU2Nyb2xsUGFyZW50KHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IHRydWU7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSBldmVudC50aW1lU3RhbXA7XG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblxuXHRcdHRoaXMudG91Y2hTdGFydFggPSB0b3VjaC5wYWdlWDtcblx0XHR0aGlzLnRvdWNoU3RhcnRZID0gdG91Y2gucGFnZVk7XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQmFzZWQgb24gYSB0b3VjaG1vdmUgZXZlbnQgb2JqZWN0LCBjaGVjayB3aGV0aGVyIHRoZSB0b3VjaCBoYXMgbW92ZWQgcGFzdCBhIGJvdW5kYXJ5IHNpbmNlIGl0IHN0YXJ0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS50b3VjaEhhc01vdmVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSwgYm91bmRhcnkgPSB0aGlzLnRvdWNoQm91bmRhcnk7XG5cblx0XHRpZiAoTWF0aC5hYnModG91Y2gucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSA+IGJvdW5kYXJ5IHx8IE1hdGguYWJzKHRvdWNoLnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgPiBib3VuZGFyeSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgbGFzdCBwb3NpdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHRvdWNoIGhhcyBtb3ZlZCwgY2FuY2VsIHRoZSBjbGljayB0cmFja2luZ1xuXHRcdGlmICh0aGlzLnRhcmdldEVsZW1lbnQgIT09IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpIHx8IHRoaXMudG91Y2hIYXNNb3ZlZChldmVudCkpIHtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBBdHRlbXB0IHRvIGZpbmQgdGhlIGxhYmVsbGVkIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBsYWJlbCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEhUTUxMYWJlbEVsZW1lbnR9IGxhYmVsRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5maW5kQ29udHJvbCA9IGZ1bmN0aW9uKGxhYmVsRWxlbWVudCkge1xuXG5cdFx0Ly8gRmFzdCBwYXRoIGZvciBuZXdlciBicm93c2VycyBzdXBwb3J0aW5nIHRoZSBIVE1MNSBjb250cm9sIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuY29udHJvbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmNvbnRyb2w7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGJyb3dzZXJzIHVuZGVyIHRlc3QgdGhhdCBzdXBwb3J0IHRvdWNoIGV2ZW50cyBhbHNvIHN1cHBvcnQgdGhlIEhUTUw1IGh0bWxGb3IgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5odG1sRm9yKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiZWxFbGVtZW50Lmh0bWxGb3IpO1xuXHRcdH1cblxuXHRcdC8vIElmIG5vIGZvciBhdHRyaWJ1dGUgZXhpc3RzLCBhdHRlbXB0IHRvIHJldHJpZXZlIHRoZSBmaXJzdCBsYWJlbGxhYmxlIGRlc2NlbmRhbnQgZWxlbWVudFxuXHRcdC8vIHRoZSBsaXN0IG9mIHdoaWNoIGlzIGRlZmluZWQgaGVyZTogaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvZm9ybXMuaHRtbCNjYXRlZ29yeS1sYWJlbFxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIGtleWdlbiwgbWV0ZXIsIG91dHB1dCwgcHJvZ3Jlc3MsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBlbmQsIGRldGVybWluZSB3aGV0aGVyIHRvIHNlbmQgYSBjbGljayBldmVudCBhdCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGZvckVsZW1lbnQsIHRyYWNraW5nQ2xpY2tTdGFydCwgdGFyZ2V0VGFnTmFtZSwgc2Nyb2xsUGFyZW50LCB0b3VjaCwgdGFyZ2V0RWxlbWVudCA9IHRoaXMudGFyZ2V0RWxlbWVudDtcblxuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkpIHtcblx0XHRcdHRoaXMuY2FuY2VsTmV4dENsaWNrID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQpID4gdGhpcy50YXBUaW1lb3V0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0byBwcmV2ZW50IHdyb25nIGNsaWNrIGNhbmNlbCBvbiBpbnB1dCAoaXNzdWUgIzE1NikuXG5cdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSBmYWxzZTtcblxuXHRcdHRoaXMubGFzdENsaWNrVGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcblxuXHRcdHRyYWNraW5nQ2xpY2tTdGFydCA9IHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0O1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXHRcdC8vIE9uIHNvbWUgaU9TIGRldmljZXMsIHRoZSB0YXJnZXRFbGVtZW50IHN1cHBsaWVkIHdpdGggdGhlIGV2ZW50IGlzIGludmFsaWQgaWYgdGhlIGxheWVyXG5cdFx0Ly8gaXMgcGVyZm9ybWluZyBhIHRyYW5zaXRpb24gb3Igc2Nyb2xsLCBhbmQgaGFzIHRvIGJlIHJlLWRldGVjdGVkIG1hbnVhbGx5LiBOb3RlIHRoYXRcblx0XHQvLyBmb3IgdGhpcyB0byBmdW5jdGlvbiBjb3JyZWN0bHksIGl0IG11c3QgYmUgY2FsbGVkICphZnRlciogdGhlIGV2ZW50IHRhcmdldCBpcyBjaGVja2VkIVxuXHRcdC8vIFNlZSBpc3N1ZSAjNTc7IGFsc28gZmlsZWQgYXMgcmRhcjovLzEzMDQ4NTg5IC5cblx0XHRpZiAoZGV2aWNlSXNJT1NXaXRoQmFkVGFyZ2V0KSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0XHQvLyBJbiBjZXJ0YWluIGNhc2VzIGFyZ3VtZW50cyBvZiBlbGVtZW50RnJvbVBvaW50IGNhbiBiZSBuZWdhdGl2ZSwgc28gcHJldmVudCBzZXR0aW5nIHRhcmdldEVsZW1lbnQgdG8gbnVsbFxuXHRcdFx0dGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSB8fCB0YXJnZXRFbGVtZW50O1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdH1cblxuXHRcdHRhcmdldFRhZ05hbWUgPSB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodGFyZ2V0VGFnTmFtZSA9PT0gJ2xhYmVsJykge1xuXHRcdFx0Zm9yRWxlbWVudCA9IHRoaXMuZmluZENvbnRyb2wodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRpZiAoZm9yRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IGZvckVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLm5lZWRzRm9jdXModGFyZ2V0RWxlbWVudCkpIHtcblxuXHRcdFx0Ly8gQ2FzZSAxOiBJZiB0aGUgdG91Y2ggc3RhcnRlZCBhIHdoaWxlIGFnbyAoYmVzdCBndWVzcyBpcyAxMDBtcyBiYXNlZCBvbiB0ZXN0cyBmb3IgaXNzdWUgIzM2KSB0aGVuIGZvY3VzIHdpbGwgYmUgdHJpZ2dlcmVkIGFueXdheS4gUmV0dXJuIGVhcmx5IGFuZCB1bnNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgcmVmZXJlbmNlIHNvIHRoYXQgdGhlIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBiZSBhbGxvd2VkIHRocm91Z2guXG5cdFx0XHQvLyBDYXNlIDI6IFdpdGhvdXQgdGhpcyBleGNlcHRpb24gZm9yIGlucHV0IGVsZW1lbnRzIHRhcHBlZCB3aGVuIHRoZSBkb2N1bWVudCBpcyBjb250YWluZWQgaW4gYW4gaWZyYW1lLCB0aGVuIGFueSBpbnB1dHRlZCB0ZXh0IHdvbid0IGJlIHZpc2libGUgZXZlbiB0aG91Z2ggdGhlIHZhbHVlIGF0dHJpYnV0ZSBpcyB1cGRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzIChpc3N1ZSAjMzcpLlxuXHRcdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0cmFja2luZ0NsaWNrU3RhcnQpID4gMTAwIHx8IChkZXZpY2VJc0lPUyAmJiB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgdGFyZ2V0VGFnTmFtZSA9PT0gJ2lucHV0JykpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXG5cdFx0XHQvLyBTZWxlY3QgZWxlbWVudHMgbmVlZCB0aGUgZXZlbnQgdG8gZ28gdGhyb3VnaCBvbiBpT1MgNCwgb3RoZXJ3aXNlIHRoZSBzZWxlY3RvciBtZW51IHdvbid0IG9wZW4uXG5cdFx0XHQvLyBBbHNvIHRoaXMgYnJlYWtzIG9wZW5pbmcgc2VsZWN0cyB3aGVuIFZvaWNlT3ZlciBpcyBhY3RpdmUgb24gaU9TNiwgaU9TNyAoYW5kIHBvc3NpYmx5IG90aGVycylcblx0XHRcdGlmICghZGV2aWNlSXNJT1MgfHwgdGFyZ2V0VGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiAhZGV2aWNlSXNJT1M0KSB7XG5cblx0XHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgZXZlbnQgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBwYXJlbnQgbGF5ZXIgdGhhdCB3YXMgc2Nyb2xsZWRcblx0XHRcdC8vIGFuZCB0aGlzIHRhcCBpcyBiZWluZyB1c2VkIHRvIHN0b3AgdGhlIHNjcm9sbGluZyAodXN1YWxseSBpbml0aWF0ZWQgYnkgYSBmbGluZyAtIGlzc3VlICM0MikuXG5cdFx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblx0XHRcdGlmIChzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgIT09IHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCB0aGUgYWN0dWFsIGNsaWNrIGZyb20gZ29pbmcgdGhvdWdoIC0gdW5sZXNzIHRoZSB0YXJnZXQgbm9kZSBpcyBtYXJrZWQgYXMgcmVxdWlyaW5nXG5cdFx0Ly8gcmVhbCBjbGlja3Mgb3IgaWYgaXQgaXMgaW4gdGhlIHdoaXRlbGlzdCBpbiB3aGljaCBjYXNlIG9ubHkgbm9uLXByb2dyYW1tYXRpYyBjbGlja3MgYXJlIHBlcm1pdHRlZC5cblx0XHRpZiAoIXRoaXMubmVlZHNDbGljayh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggY2FuY2VsLCBzdG9wIHRyYWNraW5nIHRoZSBjbGljay5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hDYW5jZWwgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIERldGVybWluZSBtb3VzZSBldmVudHMgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uTW91c2UgPSBmdW5jdGlvbihldmVudCkge1xuXG5cdFx0Ly8gSWYgYSB0YXJnZXQgZWxlbWVudCB3YXMgbmV2ZXIgc2V0IChiZWNhdXNlIGEgdG91Y2ggZXZlbnQgd2FzIG5ldmVyIGZpcmVkKSBhbGxvdyB0aGUgZXZlbnRcblx0XHRpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkIGV2ZW50cyB0YXJnZXRpbmcgYSBzcGVjaWZpYyBlbGVtZW50IHNob3VsZCBiZSBwZXJtaXR0ZWRcblx0XHRpZiAoIWV2ZW50LmNhbmNlbGFibGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIERlcml2ZSBhbmQgY2hlY2sgdGhlIHRhcmdldCBlbGVtZW50IHRvIHNlZSB3aGV0aGVyIHRoZSBtb3VzZSBldmVudCBuZWVkcyB0byBiZSBwZXJtaXR0ZWQ7XG5cdFx0Ly8gdW5sZXNzIGV4cGxpY2l0bHkgZW5hYmxlZCwgcHJldmVudCBub24tdG91Y2ggY2xpY2sgZXZlbnRzIGZyb20gdHJpZ2dlcmluZyBhY3Rpb25zLFxuXHRcdC8vIHRvIHByZXZlbnQgZ2hvc3QvZG91YmxlY2xpY2tzLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRoaXMudGFyZ2V0RWxlbWVudCkgfHwgdGhpcy5jYW5jZWxOZXh0Q2xpY2spIHtcblxuXHRcdFx0Ly8gUHJldmVudCBhbnkgdXNlci1hZGRlZCBsaXN0ZW5lcnMgZGVjbGFyZWQgb24gRmFzdENsaWNrIGVsZW1lbnQgZnJvbSBiZWluZyBmaXJlZC5cblx0XHRcdGlmIChldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhlIGhhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdFx0XHRldmVudC5wcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYW5jZWwgdGhlIGV2ZW50XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbW91c2UgZXZlbnQgaXMgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIGFjdHVhbCBjbGlja3MsIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSB0b3VjaC1nZW5lcmF0ZWQgY2xpY2ssIGEgY2xpY2sgYWN0aW9uIG9jY3VycmluZ1xuXHQgKiBuYXR1cmFsbHkgYWZ0ZXIgYSBkZWxheSBhZnRlciBhIHRvdWNoICh3aGljaCBuZWVkcyB0byBiZSBjYW5jZWxsZWQgdG8gYXZvaWQgZHVwbGljYXRpb24pLCBvclxuXHQgKiBhbiBhY3R1YWwgY2xpY2sgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBwZXJtaXR0ZWQ7XG5cblx0XHQvLyBJdCdzIHBvc3NpYmxlIGZvciBhbm90aGVyIEZhc3RDbGljay1saWtlIGxpYnJhcnkgZGVsaXZlcmVkIHdpdGggdGhpcmQtcGFydHkgY29kZSB0byBmaXJlIGEgY2xpY2sgZXZlbnQgYmVmb3JlIEZhc3RDbGljayBkb2VzIChpc3N1ZSAjNDQpLiBJbiB0aGF0IGNhc2UsIHNldCB0aGUgY2xpY2stdHJhY2tpbmcgZmxhZyBiYWNrIHRvIGZhbHNlIGFuZCByZXR1cm4gZWFybHkuIFRoaXMgd2lsbCBjYXVzZSBvblRvdWNoRW5kIHRvIHJldHVybiBlYXJseS5cblx0XHRpZiAodGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBWZXJ5IG9kZCBiZWhhdmlvdXIgb24gaU9TIChpc3N1ZSAjMTgpOiBpZiBhIHN1Ym1pdCBlbGVtZW50IGlzIHByZXNlbnQgaW5zaWRlIGEgZm9ybSBhbmQgdGhlIHVzZXIgaGl0cyBlbnRlciBpbiB0aGUgaU9TIHNpbXVsYXRvciBvciBjbGlja3MgdGhlIEdvIGJ1dHRvbiBvbiB0aGUgcG9wLXVwIE9TIGtleWJvYXJkIHRoZSBhIGtpbmQgb2YgJ2Zha2UnIGNsaWNrIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIHdpdGggdGhlIHN1Ym1pdC10eXBlIGlucHV0IGVsZW1lbnQgYXMgdGhlIHRhcmdldC5cblx0XHRpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnICYmIGV2ZW50LmRldGFpbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cGVybWl0dGVkID0gdGhpcy5vbk1vdXNlKGV2ZW50KTtcblxuXHRcdC8vIE9ubHkgdW5zZXQgdGFyZ2V0RWxlbWVudCBpZiB0aGUgY2xpY2sgaXMgbm90IHBlcm1pdHRlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBjaGVjayBmb3IgIXRhcmdldEVsZW1lbnQgaW4gb25Nb3VzZSBmYWlscyBhbmQgdGhlIGJyb3dzZXIncyBjbGljayBkb2Vzbid0IGdvIHRocm91Z2guXG5cdFx0aWYgKCFwZXJtaXR0ZWQpIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgY2xpY2tzIGFyZSBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHBlcm1pdHRlZDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIEZhc3RDbGljaydzIGV2ZW50IGxpc3RlbmVycy5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbGF5ZXIgPSB0aGlzLmxheWVyO1xuXG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHR9XG5cblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hDYW5jZWwsIGZhbHNlKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIEZhc3RDbGljayBpcyBuZWVkZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKi9cblx0RmFzdENsaWNrLm5vdE5lZWRlZCA9IGZ1bmN0aW9uKGxheWVyKSB7XG5cdFx0dmFyIG1ldGFWaWV3cG9ydDtcblx0XHR2YXIgY2hyb21lVmVyc2lvbjtcblx0XHR2YXIgYmxhY2tiZXJyeVZlcnNpb247XG5cdFx0dmFyIGZpcmVmb3hWZXJzaW9uO1xuXG5cdFx0Ly8gRGV2aWNlcyB0aGF0IGRvbid0IHN1cHBvcnQgdG91Y2ggZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBDaHJvbWUgdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0Y2hyb21lVmVyc2lvbiA9ICsoL0Nocm9tZVxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGNocm9tZVZlcnNpb24pIHtcblxuXHRcdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIENocm9tZSBvbiBBbmRyb2lkIHdpdGggdXNlci1zY2FsYWJsZT1cIm5vXCIgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzg5KVxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIDMyIGFuZCBhYm92ZSB3aXRoIHdpZHRoPWRldmljZS13aWR0aCBvciBsZXNzIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0XHRcdFx0aWYgKGNocm9tZVZlcnNpb24gPiAzMSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBDaHJvbWUgZGVza3RvcCBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjMTUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGV2aWNlSXNCbGFja0JlcnJ5MTApIHtcblx0XHRcdGJsYWNrYmVycnlWZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyhbMC05XSopXFwuKFswLTldKikvKTtcblxuXHRcdFx0Ly8gQmxhY2tCZXJyeSAxMC4zKyBkb2VzIG5vdCByZXF1aXJlIEZhc3RjbGljayBsaWJyYXJ5LlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2Z0bGFicy9mYXN0Y2xpY2svaXNzdWVzLzI1MVxuXHRcdFx0aWYgKGJsYWNrYmVycnlWZXJzaW9uWzFdID49IDEwICYmIGJsYWNrYmVycnlWZXJzaW9uWzJdID49IDMpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyB1c2VyLXNjYWxhYmxlPW5vIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB3aWR0aD1kZXZpY2Utd2lkdGggKG9yIGxlc3MgdGhhbiBkZXZpY2Utd2lkdGgpIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMCB3aXRoIC1tcy10b3VjaC1hY3Rpb246IG5vbmUgb3IgbWFuaXB1bGF0aW9uLCB3aGljaCBkaXNhYmxlcyBkb3VibGUtdGFwLXRvLXpvb20gKGlzc3VlICM5Nylcblx0XHRpZiAobGF5ZXIuc3R5bGUubXNUb3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZWZveCB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRmaXJlZm94VmVyc2lvbiA9ICsoL0ZpcmVmb3hcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChmaXJlZm94VmVyc2lvbiA+PSAyNykge1xuXHRcdFx0Ly8gRmlyZWZveCAyNysgZG9lcyBub3QgaGF2ZSB0YXAgZGVsYXkgaWYgdGhlIGNvbnRlbnQgaXMgbm90IHpvb21hYmxlIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTIyODk2XG5cblx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblx0XHRcdGlmIChtZXRhVmlld3BvcnQgJiYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTExOiBwcmVmaXhlZCAtbXMtdG91Y2gtYWN0aW9uIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIGl0J3MgcmVjb21lbmRlZCB0byB1c2Ugbm9uLXByZWZpeGVkIHZlcnNpb25cblx0XHQvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvd2luZG93cy9hcHBzL0hoNzY3MzEzLmFzcHhcblx0XHRpZiAobGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBGYXN0Q2xpY2sgb2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0c1xuXHQgKi9cblx0RmFzdENsaWNrLmF0dGFjaCA9IGZ1bmN0aW9uKGxheWVyLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuIG5ldyBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpO1xuXHR9O1xuXG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gRmFzdENsaWNrO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBGYXN0Q2xpY2suYXR0YWNoO1xuXHRcdG1vZHVsZS5leHBvcnRzLkZhc3RDbGljayA9IEZhc3RDbGljaztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmFzdGNsaWNrL2xpYi9mYXN0Y2xpY2suanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuL01hdGVyaWFsL0V2ZW50XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTWF0ZXJpYWwvSGVhZGVyXCJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTWF0ZXJpYWwvTmF2XCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vTWF0ZXJpYWwvU2VhcmNoXCJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL01hdGVyaWFsL1NpZGViYXJcIlxuaW1wb3J0IFNvdXJjZSBmcm9tIFwiLi9NYXRlcmlhbC9Tb3VyY2VcIlxuaW1wb3J0IFRhYnMgZnJvbSBcIi4vTWF0ZXJpYWwvVGFic1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEV2ZW50LFxuICBIZWFkZXIsXG4gIE5hdixcbiAgU2VhcmNoLFxuICBTaWRlYmFyLFxuICBTb3VyY2UsXG4gIFRhYnNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuL0V2ZW50L0xpc3RlbmVyXCJcbmltcG9ydCBNYXRjaE1lZGlhIGZyb20gXCIuL0V2ZW50L01hdGNoTWVkaWFcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBMaXN0ZW5lcixcbiAgTWF0Y2hNZWRpYVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSBcIi4vTGlzdGVuZXJcIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoTWVkaWEge1xuXG4gIC8qKlxuICAgKiBNZWRpYSBxdWVyeSBsaXN0ZW5lclxuICAgKlxuICAgKiBUaGlzIGNsYXNzIGxpc3RlbnMgZm9yIHN0YXRlIGNoYW5nZXMgb2YgbWVkaWEgcXVlcmllcyBhbmQgYXV0b21hdGljYWxseVxuICAgKiBzd2l0Y2hlcyB0aGUgZ2l2ZW4gbGlzdGVuZXJzIG9uIG9yIG9mZi5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGhhbmRsZXJfIC0gTWVkaWEgcXVlcnkgZXZlbnQgaGFuZGxlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgLSBNZWRpYSBxdWVyeSB0byB0ZXN0IGZvclxuICAgKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciAtIEV2ZW50IGxpc3RlbmVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihxdWVyeSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmhhbmRsZXJfID0gbXEgPT4ge1xuICAgICAgaWYgKG1xLm1hdGNoZXMpXG4gICAgICAgIGxpc3RlbmVyLmxpc3RlbigpXG4gICAgICBlbHNlXG4gICAgICAgIGxpc3RlbmVyLnVubGlzdGVuKClcbiAgICB9XG5cbiAgICAvKiBJbml0aWFsaXplIG1lZGlhIHF1ZXJ5IGxpc3RlbmVyICovXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSlcbiAgICBtZWRpYS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZXJfKVxuXG4gICAgLyogQWx3YXlzIGNoZWNrIGF0IGluaXRpYWxpemF0aW9uICovXG4gICAgdGhpcy5oYW5kbGVyXyhtZWRpYSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBTaGFkb3cgZnJvbSBcIi4vSGVhZGVyL1NoYWRvd1wiXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vSGVhZGVyL1RpdGxlXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2hhZG93LFxuICBUaXRsZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZG93IHtcblxuICAvKipcbiAgICogU2hvdyBvciBoaWRlIGhlYWRlciBzaGFkb3cgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIENvbnRlbnQgY29udGFpbmVyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBPZmZzZXQgaGVpZ2h0IG9mIHByZXZpb3VzIG5vZGVzXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIEhlYWRlciBzaGFkb3cgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gaGVhZGVyIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XG4gICAgbGV0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XG4gICAgICAgICEocmVmLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZi5wYXJlbnROb2RlXG5cbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXG4gICAgICA6IGhlYWRlclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxuXG4gICAgLyogSW5pdGlhbGl6ZSBoZWlnaHQgYW5kIHN0YXRlICovXG4gICAgdGhpcy5oZWlnaHRfID0gMFxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRvdGFsIGhlaWdodCBvZiBwcmV2aW91cyBub2Rlc1xuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmVsX1xuICAgIHdoaWxlICgoY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZykpIHtcbiAgICAgIGlmICghKGN1cnJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgdGhpcy5oZWlnaHRfICs9IGN1cnJlbnQub2Zmc2V0SGVpZ2h0XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2hhZG93IHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gRXZlbnRcbiAgICovXG4gIHVwZGF0ZShldikge1xuICAgIGlmIChldiAmJiAoZXYudHlwZSA9PT0gXCJyZXNpemVcIiB8fCBldi50eXBlID09PSBcIm9yaWVudGF0aW9uY2hhbmdlXCIpKSB7XG4gICAgICB0aGlzLmhlaWdodF8gPSAwXG4gICAgICB0aGlzLnNldHVwKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuaGVpZ2h0X1xuICAgICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxuICAgICAgICB0aGlzLmhlYWRlcl8uZGF0YXNldC5tZFN0YXRlID0gKHRoaXMuYWN0aXZlXyA9IGFjdGl2ZSkgPyBcInNoYWRvd1wiIDogXCJcIlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBzaGFkb3cgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaGVhZGVyXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgdGhpcy5oZWlnaHRfID0gMFxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvU2hhZG93LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSB7XG5cbiAgLyoqXG4gICAqIFN3YXAgaGVhZGVyIHRpdGxlIHRvcGljcyB3aGVuIGhlYWRlciBpcyBzY3JvbGxlZCBwYXN0XG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBFbGVtZW50XG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gVGl0bGUgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxIZWFkaW5nRWxlbWVudCl9IGhlYWRlciAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIGhlYWRlcikge1xuICAgIGxldCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG5cbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXG4gICAgICA6IGhlYWRlclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcblxuICAgIC8qIEluaXRpYWxpemUgc3RhdGUgKi9cbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRpdGxlIHN0YXRlXG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuLCBub2RlID0+IHsgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdXNlIGNoaWxkTm9kZXMgaGVyZSBmb3IgSUU/XG4gICAgICBub2RlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5lbF8ub2Zmc2V0V2lkdGggLSAyMH1weGBcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aXRsZSBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XG4gICAqL1xuICB1cGRhdGUoZXYpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdGhpcy5oZWFkZXJfLm9mZnNldFRvcFxuICAgIGlmIChhY3RpdmUgIT09IHRoaXMuYWN0aXZlXylcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJhY3RpdmVcIiA6IFwiXCJcblxuICAgIC8qIEhhY2s6IGluZHVjZSBlbGxpcHNpcyBvbiB0b3BpY3MgKi9cbiAgICBpZiAoZXYudHlwZSA9PT0gXCJyZXNpemVcIiB8fCBldi50eXBlID09PSBcIm9yaWVudGF0aW9uY2hhbmdlXCIpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5lbF8ub2Zmc2V0V2lkdGggLSAyMH1weGBcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGl0bGUgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgICB0aGlzLmVsXy5zdHlsZS53aWR0aCA9IFwiXCJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQmx1ciBmcm9tIFwiLi9OYXYvQmx1clwiXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIi4vTmF2L0NvbGxhcHNlXCJcbmltcG9ydCBTY3JvbGxpbmcgZnJvbSBcIi4vTmF2L1Njcm9sbGluZ1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEJsdXIsXG4gIENvbGxhcHNlLFxuICBTY3JvbGxpbmdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsdXIge1xuXG4gIC8qKlxuICAgKiBCbHVyIGxpbmtzIHdpdGhpbiB0aGUgdGFibGUgb2YgY29udGVudHMgYWJvdmUgY3VycmVudCBwYWdlIHktb2Zmc2V0XG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge05vZGVMaXN0PEhUTUxFbGVtZW50Pn0gZWxzXyAtIFRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8SFRNTEVsZW1lbnQ+fSBhbmNob3JzXyAtIFJlZmVyZW5jZWQgYW5jaG9yIG5vZGVzXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleF8gLSBDdXJyZW50IGxpbmsgaW5kZXhcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBkaXJfIC0gU2Nyb2xsIGRpcmVjdGlvbiBjaGFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfE5vZGVMaXN0PEhUTUxFbGVtZW50Pil9IGVscyAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVscykge1xuICAgIHRoaXMuZWxzXyA9ICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVscylcbiAgICAgIDogZWxzXG5cbiAgICAvKiBJbml0aWFsaXplIGluZGV4IGFuZCBwYWdlIHktb2Zmc2V0ICovXG4gICAgdGhpcy5pbmRleF8gPSAwXG4gICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cbiAgICAvKiBOZWNlc3Nhcnkgc3RhdGUgdG8gY29ycmVjdGx5IHJlc2V0IHRoZSBpbmRleCAqL1xuICAgIHRoaXMuZGlyXyA9IGZhbHNlXG5cbiAgICAvKiBJbmRleCBhbmNob3Igbm9kZSBvZmZzZXRzIGZvciBmYXN0IGxvb2t1cCAqL1xuICAgIHRoaXMuYW5jaG9yc18gPSBbXS5yZWR1Y2UuY2FsbCh0aGlzLmVsc18sIChhbmNob3JzLCBlbCkgPT4ge1xuICAgICAgcmV0dXJuIGFuY2hvcnMuY29uY2F0KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5oYXNoLnN1YnN0cmluZygxKSkgfHwgW10pXG4gICAgfSwgW10pXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBibHVyIHN0YXRlc1xuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBibHVyIHN0YXRlc1xuICAgKlxuICAgKiBEZWR1Y3QgdGhlIHN0YXRpYyBvZmZzZXQgb2YgdGhlIGhlYWRlciAoNTZweCkgYW5kIHNpZGViYXIgb2Zmc2V0ICgyNHB4KSxcbiAgICogc2VlIF9wZXJtYWxpbmtzLnNjc3MgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgY29uc3QgZGlyID0gdGhpcy5vZmZzZXRfIC0gb2Zmc2V0IDwgMFxuXG4gICAgLyogSGFjazogcmVzZXQgaW5kZXggaWYgZGlyZWN0aW9uIGNoYW5nZWQgdG8gY2F0Y2ggdmVyeSBmYXN0IHNjcm9sbGluZyxcbiAgICAgICBiZWNhdXNlIG90aGVyd2lzZSB3ZSB3b3VsZCBoYXZlIHRvIHJlZ2lzdGVyIGEgdGltZXIgYW5kIHRoYXQgc3Vja3MgKi9cbiAgICBpZiAodGhpcy5kaXJfICE9PSBkaXIpXG4gICAgICB0aGlzLmluZGV4XyA9IGRpclxuICAgICAgICA/IHRoaXMuaW5kZXhfID0gMFxuICAgICAgICA6IHRoaXMuaW5kZXhfID0gdGhpcy5lbHNfLmxlbmd0aCAtIDFcblxuICAgIC8qIEV4aXQgd2hlbiB0aGVyZSBhcmUgbm8gYW5jaG9ycyAqL1xuICAgIGlmICh0aGlzLmFuY2hvcnNfLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVyblxuXG4gICAgLyogU2Nyb2xsIGRpcmVjdGlvbiBpcyBkb3duICovXG4gICAgaWYgKHRoaXMub2Zmc2V0XyA8PSBvZmZzZXQpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XyArIDE7IGkgPCB0aGlzLmVsc18ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yc19baV0ub2Zmc2V0VG9wIC0gKDU2ICsgMjQpIDw9IG9mZnNldCkge1xuICAgICAgICAgIGlmIChpID4gMClcbiAgICAgICAgICAgIHRoaXMuZWxzX1tpIC0gMV0uZGF0YXNldC5tZFN0YXRlID0gXCJibHVyXCJcbiAgICAgICAgICB0aGlzLmluZGV4XyA9IGlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAvKiBTY3JvbGwgZGlyZWN0aW9uIGlzIHVwICovXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XzsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yc19baV0ub2Zmc2V0VG9wIC0gKDU2ICsgMjQpID4gb2Zmc2V0KSB7XG4gICAgICAgICAgaWYgKGkgPiAwKVxuICAgICAgICAgICAgdGhpcy5lbHNfW2kgLSAxXS5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbmRleF8gPSBpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJlbWVtYmVyIGN1cnJlbnQgb2Zmc2V0IGFuZCBkaXJlY3Rpb24gZm9yIG5leHQgaXRlcmF0aW9uICovXG4gICAgdGhpcy5vZmZzZXRfID0gb2Zmc2V0XG4gICAgdGhpcy5kaXJfID0gZGlyXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYmx1ciBzdGF0ZXNcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbHNfLCBlbCA9PiB7XG4gICAgICBlbC5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgfSlcblxuICAgIC8qIFJlc2V0IGluZGV4IGFuZCBwYWdlIHktb2Zmc2V0ICovXG4gICAgdGhpcy5pbmRleF8gID0gMFxuICAgIHRoaXMub2Zmc2V0XyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L0JsdXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxhcHNlIHtcblxuICAvKipcbiAgICogRXhwYW5kIG9yIGNvbGxhcHNlIG5hdmlnYXRpb24gb24gdG9nZ2xlXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBOYXZpZ2F0aW9uIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgb3ZlcmZsb3cgYW5kIGRpc3BsYXkgZm9yIGFjY2Vzc2liaWxpdHlcbiAgICovXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIC8qIEhpZGRlbiBsaW5rcyBzaG91bGQgbm90IGJlIGZvY3VzYWJsZSwgc28gaGlkZSB0aGVtIHdoZW4gdGhlIG5hdmlnYXRpb25cbiAgICAgICBpcyBjb2xsYXBzZWQgYW5kIHNldCBvdmVyZmxvdyBzbyB0aGUgb3V0bGluZSBpcyBub3QgY3V0IG9mZiAqL1xuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgID0gY3VycmVudCA/IFwiYmxvY2tcIiAgIDogXCJub25lXCJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlIGV4cGFuZCBhbmQgY29sbGFwc2Ugc21vb3RobHlcbiAgICpcbiAgICogSW50ZXJuZXQgRXhwbG9yZXIgMTEgaXMgdmVyeSBzbG93IGF0IHJlY29nbml6aW5nIGNoYW5nZXMgb24gdGhlIGRhdGFzZXRcbiAgICogd2hpY2ggcmVzdWx0cyBpbiB0aGUgbWVudSBub3QgZXhwYW5kaW5nIG9yIGNvbGxhcHNpbmcgcHJvcGVybHkuIFRIZXJlZm9yZSxcbiAgICogZm9yIHJlYXNvbnMgb2YgY29tcGF0aWJpbGl0eSwgdGhlIGF0dHJpYnV0ZSBhY2Nlc3NvcnMgYXJlIHVzZWQuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXG4gICAgLyogUmVzZXQgb3ZlcmZsb3cgdG8gQ1NTIGRlZmF1bHRzICovXG4gICAgdGhpcy5lbF8uc3R5bGUuZGlzcGxheSAgPSBcImJsb2NrXCJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcblxuICAgIC8qIEV4cGFuZGVkLCBzbyBjb2xsYXBzZSAqL1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjdXJyZW50fXB4YFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcbiAgICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCIwcHhcIlxuICAgICAgfSlcblxuICAgIC8qIENvbGxhcHNlZCwgc28gZXhwYW5kICovXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJleHBhbmRcIilcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiXCJcblxuICAgICAgLyogUmVhZCBoZWlnaHQgYW5kIHVuc2V0IHBzZXVkby10b2dnbGVkIHN0YXRlICovXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgIHRoaXMuZWxfLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIilcblxuICAgICAgLyogU2V0IGluaXRpYWwgc3RhdGUgYW5kIGFuaW1hdGUgKi9cbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiMHB4XCJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJhbmltYXRlXCIpXG4gICAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIHN0YXRlIG9uIGVuZCBvZiB0cmFuc2l0aW9uICovXG4gICAgY29uc3QgZW5kID0gZXYgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgICAvKiBSZXNldCBoZWlnaHQgYW5kIHN0YXRlICovXG4gICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKVxuICAgICAgdGFyZ2V0LnN0eWxlLm1heEhlaWdodCA9IFwiXCJcblxuICAgICAgLyogSGlkZGVuIGxpbmtzIHNob3VsZCBub3QgYmUgZm9jdXNhYmxlLCBzbyBoaWRlIHRoZW0gd2hlbiB0aGUgbmF2aWdhdGlvblxuICAgICAgICAgaXMgY29sbGFwc2VkIGFuZCBzZXQgb3ZlcmZsb3cgc28gdGhlIG91dGxpbmUgaXMgbm90IGN1dCBvZmYgKi9cbiAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcIm5vbmVcIiAgIDogXCJibG9ja1wiXG4gICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSBjdXJyZW50ID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG5cbiAgICAgIC8qIE9ubHkgZmlyZSBvbmNlLCBzbyBkaXJlY3RseSByZW1vdmUgZXZlbnQgbGlzdGVuZXIgKi9cbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpXG4gICAgfVxuICAgIHRoaXMuZWxfLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgaGVpZ2h0IGFuZCBwc2V1ZG8tdG9nZ2xlZCBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiXCJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICAgPSBcIlwiXG4gICAgdGhpcy5lbF8uc3R5bGUub3ZlcmZsb3cgID0gXCJcIlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L0NvbGxhcHNlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxpbmcge1xuXG4gIC8qKlxuICAgKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIHRoZSBjdXJyZW50IGFjdGl2ZSBwYW5lIChmb3IgaU9TKVxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gUHJpbWFyeSBuYXZpZ2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBwYW5lc1xuICAgKi9cbiAgc2V0dXAoKSB7XG5cbiAgICAvKiBJbml0aWFsbHkgc2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBtYWluIHBhbmUgKi9cbiAgICBjb25zdCBtYWluID0gdGhpcy5lbF8uY2hpbGRyZW5bdGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICBtYWluLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXG5cbiAgICAvKiBGaW5kIGFsbCB0b2dnbGVzIGFuZCBjaGVjayB3aGljaCBvbmUgaXMgYWN0aXZlICovXG4gICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC10b2dnbGVdXCIpXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0b2dnbGVzLCB0b2dnbGUgPT4ge1xuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG5cbiAgICAgICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXG4gICAgICAgIGxldCBwYW5lID0gdG9nZ2xlLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICB3aGlsZSAocGFuZS50YWdOYW1lICE9PSBcIk5BVlwiICYmIHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgICAgIC8qIENoZWNrIHJlZmVyZW5jZXMgKi9cbiAgICAgICAgaWYgKCEodG9nZ2xlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcbiAgICAgICAgICAgICEodG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgICAvKiBGaW5kIGN1cnJlbnQgYW5kIHBhcmVudCBsaXN0IGVsZW1lbnRzICovXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXG5cbiAgICAgICAgLyogQWx3YXlzIHJlc2V0IGFsbCBsaXN0cyB3aGVuIHRyYW5zaXRpb25pbmcgKi9cbiAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxuICAgICAgICB0YXJnZXQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhY3RpdmUgcGFuZXNcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBDaGFuZ2UgZXZlbnRcbiAgICovXG4gIHVwZGF0ZShldikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuXG4gICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXG4gICAgbGV0IHBhbmUgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIC8qIENoZWNrIHJlZmVyZW5jZXMgKi9cbiAgICBpZiAoISh0YXJnZXQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxuICAgICAgICAhKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgY29uc3QgYWN0aXZlID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXG5cbiAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xuICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcbiAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXG5cbiAgICAvKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIHBhcmVudCBwYW5lICovXG4gICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICBpZiAocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXG4gICAgICAgICAgcGFuZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIGFjdGl2ZSBwYW5lICovXG4gICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBwYW5lc1xuICAgKi9cbiAgcmVzZXQoKSB7XG5cbiAgICAvKiBSZXNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gbWFpbiBwYW5lICovXG4gICAgdGhpcy5lbF8uY2hpbGRyZW5bMV0uc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXG5cbiAgICAvKiBGaW5kIGFsbCB0b2dnbGVzIGFuZCBjaGVjayB3aGljaCBvbmUgaXMgYWN0aXZlICovXG4gICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC10b2dnbGVdXCIpXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0b2dnbGVzLCB0b2dnbGUgPT4ge1xuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG5cbiAgICAgICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXG4gICAgICAgIGxldCBwYW5lID0gdG9nZ2xlLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICB3aGlsZSAocGFuZS50YWdOYW1lICE9PSBcIk5BVlwiICYmIHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgICAgIC8qIENoZWNrIHJlZmVyZW5jZXMgKi9cbiAgICAgICAgaWYgKCEodG9nZ2xlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcbiAgICAgICAgICAgICEodG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgICAvKiBGaW5kIHBhcmVudCBhbmQgYWN0aXZlIHBhbmVzICovXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgY29uc3QgYWN0aXZlID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXG5cbiAgICAgICAgLyogQWx3YXlzIHJlc2V0IGFsbCBsaXN0cyB3aGVuIHRyYW5zaXRpb25pbmcgKi9cbiAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxuICAgICAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBMb2NrIGZyb20gXCIuL1NlYXJjaC9Mb2NrXCJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vU2VhcmNoL1Jlc3VsdFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExvY2ssXG4gIFJlc3VsdFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jayB7XG5cbiAgLyoqXG4gICAqIExvY2sgYm9keSBmb3IgZnVsbC1zY3JlZW4gc2VhcmNoIG1vZGFsXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR9IGVsXyAtIExvY2sgdG9nZ2xlXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGxvY2tfIC0gRWxlbWVudCB0byBsb2NrIChkb2N1bWVudCBib2R5KVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWZcblxuICAgIC8qIFJldHJpZXZlIGVsZW1lbnQgdG8gbG9jayAoPSBib2R5KSAqL1xuICAgIGlmICghZG9jdW1lbnQuYm9keSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMubG9ja18gPSBkb2N1bWVudC5ib2R5XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgbG9ja2VkIHN0YXRlXG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGxvY2tlZCBzdGF0ZVxuICAgKi9cbiAgdXBkYXRlKCkge1xuXG4gICAgLyogRW50ZXJpbmcgc2VhcmNoIG1vZGUgKi9cbiAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xuICAgICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cbiAgICAgIC8qIFNjcm9sbCB0byB0b3AgYWZ0ZXIgdHJhbnNpdGlvbiwgdG8gb21pdCBmbGlja2VyaW5nICovXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG5cbiAgICAgICAgLyogTG9jayBib2R5IGFmdGVyIGZpbmlzaGluZyB0cmFuc2l0aW9uICovXG4gICAgICAgIGlmICh0aGlzLmVsXy5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxuICAgICAgICB9XG4gICAgICB9LCA0MDApXG5cbiAgICAvKiBFeGl0aW5nIHNlYXJjaCBtb2RlICovXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuXG4gICAgICAvKiBTY3JvbGwgdG8gZm9ybWVyIHBvc2l0aW9uLCBidXQgd2FpdCBmb3IgMTAwbXMgdG8gcHJldmVudCBmbGFzaGVzIG9uXG4gICAgICAgICBpT1MuIEEgc2hvcnQgdGltZW91dCBzZWVtcyB0byBkbyB0aGUgdHJpY2sgKi9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2Zmc2V0XyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5vZmZzZXRfKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIHBhZ2UgeS1vZmZzZXRcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJsb2NrXCIpXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5vZmZzZXRfKVxuICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBlc2NhcGUgZnJvbSBcImVzY2FwZS1zdHJpbmctcmVnZXhwXCJcbmltcG9ydCBsdW5yIGZyb20gXCJleHBvc2UtbG9hZGVyP2x1bnIhbHVuclwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFRydW5jYXRlIGEgc3RyaW5nIGFmdGVyIHRoZSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVyXG4gKlxuICogVGhpcyBpcyBub3QgYSByZWFzb25hYmxlIGFwcHJvYWNoLCBzaW5jZSB0aGUgc3VtbWFyaWVzIGtpbmQgb2Ygc3Vjay4gSXRcbiAqIHdvdWxkIGJlIGJldHRlciB0byBjcmVhdGUgc29tZXRoaW5nIG1vcmUgaW50ZWxsaWdlbnQsIGhpZ2hsaWdodGluZyB0aGVcbiAqIHNlYXJjaCBvY2N1cnJlbmNlcyBhbmQgbWFraW5nIGEgYmV0dGVyIHN1bW1hcnkgb3V0IG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBTdHJpbmcgdG8gYmUgdHJ1bmNhdGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbiAtIE51bWJlciBvZiBjaGFyYWN0ZXJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRydW5jYXRlZCBzdHJpbmdcbiAqL1xuY29uc3QgdHJ1bmNhdGUgPSAoc3RyaW5nLCBuKSA9PiB7XG4gIGxldCBpID0gblxuICBpZiAoc3RyaW5nLmxlbmd0aCA+IGkpIHtcbiAgICB3aGlsZSAoc3RyaW5nW2ldICE9PSBcIiBcIiAmJiAtLWkgPiAwKTtcbiAgICByZXR1cm4gYCR7c3RyaW5nLnN1YnN0cmluZygwLCBpKX0uLi5gXG4gIH1cbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWV0YSB0YWcgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gTWV0YSBuYW1lXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcbiAqL1xuY29uc3QgdHJhbnNsYXRlID0ga2V5ID0+IHtcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXG4gIGlmICghKG1ldGEgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQpKVxuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICByZXR1cm4gbWV0YS5jb250ZW50XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gc2VhcmNoIGFuZCB1cGRhdGUgcmVzdWx0cyBvbiBrZXlib2FyZCBldmVudHNcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFNlYXJjaCByZXN1bHQgY29udGFpbmVyXG4gICAqIEBwcm9wZXJ0eSB7KEFycmF5PE9iamVjdD58RnVuY3Rpb24pfSBkYXRhXyAtIFJhdyBkb2N1bWVudCBkYXRhXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkb2NzXyAtIEluZGV4ZWQgZG9jdW1lbnRzXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IG1ldGFfIC0gU2VhcmNoIG1ldGEgaW5mb3JtYXRpb25cbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbGlzdF8gLSBTZWFyY2ggcmVzdWx0IGxpc3RcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBsYW5nXyAtIFNlYXJjaCBsYW5ndWFnZXNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG1lc3NhZ2VfIC0gU2VhcmNoIHJlc3VsdCBtZXNzYWdlc1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gaW5kZXhfIC0gU2VhcmNoIGluZGV4XG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8RnVuY3Rpb24+fSBzdGFja18gLSBTZWFyY2ggcmVzdWx0IHN0YWNrXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZV8gLSBMYXN0IGlucHV0IHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSB7KEFycmF5PE9iamVjdD58RnVuY3Rpb24pfSBkYXRhIC0gRnVuY3Rpb24gcHJvdmlkaW5nIGRhdGEgb3IgYXJyYXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBkYXRhKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuXG4gICAgLyogUmV0cmlldmUgbWV0YWRhdGEgYW5kIGxpc3QgZWxlbWVudCAqL1xuICAgIGNvbnN0IFttZXRhLCBsaXN0XSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuKVxuXG4gICAgLyogU2V0IGRhdGEsIG1ldGFkYXRhIGFuZCBsaXN0IGVsZW1lbnRzICovXG4gICAgdGhpcy5kYXRhXyA9IGRhdGFcbiAgICB0aGlzLm1ldGFfID0gbWV0YVxuICAgIHRoaXMubGlzdF8gPSBsaXN0XG5cbiAgICAvKiBMb2FkIG1lc3NhZ2VzIGZvciBtZXRhZGF0YSBkaXNwbGF5ICovXG4gICAgdGhpcy5tZXNzYWdlXyA9IHtcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLm1ldGFfLnRleHRDb250ZW50LFxuICAgICAgbm9uZTogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5ub25lXCIpLFxuICAgICAgb25lOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm9uZVwiKSxcbiAgICAgIG90aGVyOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm90aGVyXCIpXG4gICAgfVxuXG4gICAgLyogT3ZlcnJpZGUgdG9rZW5pemVyIHNlcGFyYXRvciwgaWYgZ2l2ZW4gKi9cbiAgICBjb25zdCB0b2tlbml6ZXIgPSB0cmFuc2xhdGUoXCJzZWFyY2gudG9rZW5pemVyXCIpXG4gICAgaWYgKHRva2VuaXplci5sZW5ndGgpXG4gICAgICBsdW5yLnRva2VuaXplci5zZXBhcmF0b3IgPSB0b2tlbml6ZXJcblxuICAgIC8qIExvYWQgc2VhcmNoIGxhbmd1YWdlcyAqL1xuICAgIHRoaXMubGFuZ18gPSB0cmFuc2xhdGUoXCJzZWFyY2gubGFuZ3VhZ2VcIikuc3BsaXQoXCIsXCIpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAubWFwKGxhbmcgPT4gbGFuZy50cmltKCkpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlYXJjaCByZXN1bHRzXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gSW5wdXQgb3IgZm9jdXMgZXZlbnRcbiAgICovXG4gIHVwZGF0ZShldikge1xuXG4gICAgLyogSW5pdGlhbGl6ZSBpbmRleCwgaWYgdGhpcyBoYXMgbm90IGJlIGRvbmUgeWV0ICovXG4gICAgaWYgKGV2LnR5cGUgPT09IFwiZm9jdXNcIiAmJiAhdGhpcy5pbmRleF8pIHtcblxuICAgICAgLyogSW5pdGlhbGl6ZSBpbmRleCAqL1xuICAgICAgY29uc3QgaW5pdCA9IGRhdGEgPT4ge1xuXG4gICAgICAgIC8qIFByZXByb2Nlc3MgYW5kIGluZGV4IHNlY3Rpb25zIGFuZCBkb2N1bWVudHMgKi9cbiAgICAgICAgdGhpcy5kb2NzXyA9IGRhdGEucmVkdWNlKChkb2NzLCBkb2MpID0+IHtcbiAgICAgICAgICBjb25zdCBbcGF0aCwgaGFzaF0gPSBkb2MubG9jYXRpb24uc3BsaXQoXCIjXCIpXG5cbiAgICAgICAgICAvKiBBc3NvY2lhdGUgc2VjdGlvbiB3aXRoIHBhcmVudCBkb2N1bWVudCAqL1xuICAgICAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgICAgICBkb2MucGFyZW50ID0gZG9jcy5nZXQocGF0aClcblxuICAgICAgICAgICAgLyogT3ZlcnJpZGUgcGFnZSB0aXRsZSB3aXRoIGRvY3VtZW50IHRpdGxlIGlmIGZpcnN0IHNlY3Rpb24gKi9cbiAgICAgICAgICAgIGlmIChkb2MucGFyZW50ICYmICFkb2MucGFyZW50LmRvbmUpIHtcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC50aXRsZSA9IGRvYy50aXRsZVxuICAgICAgICAgICAgICBkb2MucGFyZW50LnRleHQgID0gZG9jLnRleHRcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC5kb25lICA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTb21lIGNsZWFudXAgb24gdGhlIHRleHQgKi9cbiAgICAgICAgICBkb2MudGV4dCA9IGRvYy50ZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csIFwiIFwiKSAgICAgICAgICAgICAgIC8qIFJlbW92ZSBuZXdsaW5lcyAqL1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpICAgICAgICAgICAgICAvKiBDb21wYWN0IHdoaXRlc3BhY2UgKi9cbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrKFssLjo7IT9dKS9nLCAgICAgICAgIC8qIENvcnJlY3QgcHVuY3R1YXRpb24gKi9cbiAgICAgICAgICAgICAgKF8sIGNoYXIpID0+IGNoYXIpXG5cbiAgICAgICAgICAvKiBJbmRleCBzZWN0aW9ucyBhbmQgZG9jdW1lbnRzLCBidXQgc2tpcCB0b3AtbGV2ZWwgaGVhZGxpbmUgKi9cbiAgICAgICAgICBpZiAoIWRvYy5wYXJlbnQgfHwgZG9jLnBhcmVudC50aXRsZSAhPT0gZG9jLnRpdGxlKVxuICAgICAgICAgICAgZG9jcy5zZXQoZG9jLmxvY2F0aW9uLCBkb2MpXG4gICAgICAgICAgcmV0dXJuIGRvY3NcbiAgICAgICAgfSwgbmV3IE1hcClcblxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cbiAgICAgICAgY29uc3QgZG9jcyA9IHRoaXMuZG9jc18sXG4gICAgICAgICAgICAgIGxhbmcgPSB0aGlzLmxhbmdfXG5cbiAgICAgICAgLyogQ3JlYXRlIHN0YWNrIGFuZCBpbmRleCAqL1xuICAgICAgICB0aGlzLnN0YWNrXyA9IFtdXG4gICAgICAgIHRoaXMuaW5kZXhfID0gbHVucihmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgXCJzZWFyY2gucGlwZWxpbmUudHJpbW1lclwiOiBsdW5yLnRyaW1tZXIsXG4gICAgICAgICAgICBcInNlYXJjaC5waXBlbGluZS5zdG9wd29yZHNcIjogbHVuci5zdG9wV29yZEZpbHRlclxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIERpc2FibGUgc3RvcCB3b3JkcyBmaWx0ZXIgYW5kIHRyaW1tZXIsIGlmIGRlc2lyZWQgKi9cbiAgICAgICAgICBjb25zdCBwaXBlbGluZSA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnJlZHVjZSgocmVzdWx0LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRyYW5zbGF0ZShuYW1lKS5tYXRjaCgvXmZhbHNlJC9pKSlcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZmlsdGVyc1tuYW1lXSlcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICAgIC8qIFJlbW92ZSBzdGVtbWVyLCBhcyBpdCBjcmlwcGxlcyBzZWFyY2ggZXhwZXJpZW5jZSAqL1xuICAgICAgICAgIHRoaXMucGlwZWxpbmUucmVzZXQoKVxuICAgICAgICAgIGlmIChwaXBlbGluZSlcbiAgICAgICAgICAgIHRoaXMucGlwZWxpbmUuYWRkKC4uLnBpcGVsaW5lKVxuXG4gICAgICAgICAgLyogU2V0IHVwIGFsdGVybmF0ZSBzZWFyY2ggbGFuZ3VhZ2VzICovXG4gICAgICAgICAgaWYgKGxhbmcubGVuZ3RoID09PSAxICYmIGxhbmdbMF0gIT09IFwiZW5cIiAmJiBsdW5yW2xhbmdbMF1dKSB7XG4gICAgICAgICAgICB0aGlzLnVzZShsdW5yW2xhbmdbMF1dKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGFuZy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnVzZShsdW5yLm11bHRpTGFuZ3VhZ2UoLi4ubGFuZykpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSW5kZXggZmllbGRzICovXG4gICAgICAgICAgdGhpcy5maWVsZChcInRpdGxlXCIsIHsgYm9vc3Q6IDEwIH0pXG4gICAgICAgICAgdGhpcy5maWVsZChcInRleHRcIilcbiAgICAgICAgICB0aGlzLnJlZihcImxvY2F0aW9uXCIpXG5cbiAgICAgICAgICAvKiBJbmRleCBkb2N1bWVudHMgKi9cbiAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHRoaXMuYWRkKGRvYykpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLyogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciBmb3IgbGF6eSByZW5kZXJpbmcgKi9cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbF8ucGFyZW50Tm9kZVxuICAgICAgICBpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICB3aGlsZSAodGhpcy5zdGFja18ubGVuZ3RoICYmIGNvbnRhaW5lci5zY3JvbGxUb3AgK1xuICAgICAgICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSAxNilcbiAgICAgICAgICAgIHRoaXMuc3RhY2tfLnNwbGljZSgwLCAxMCkuZm9yRWFjaChyZW5kZXIgPT4gcmVuZGVyKCkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWludmFsaWQtdGhpcyAqL1xuXG4gICAgICAvKiBJbml0aWFsaXplIGluZGV4IGFmdGVyIHNob3J0IHRpbWVvdXQgdG8gYWNjb3VudCBmb3IgdHJhbnNpdGlvbiAqL1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhXyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyB0aGlzLmRhdGFfKCkudGhlbihpbml0KVxuICAgICAgICAgIDogaW5pdCh0aGlzLmRhdGFfKVxuICAgICAgfSwgMjUwKVxuXG4gICAgLyogRXhlY3V0ZSBzZWFyY2ggb24gbmV3IGlucHV0IGV2ZW50ICovXG4gICAgfSBlbHNlIGlmIChldi50eXBlID09PSBcImZvY3VzXCIgfHwgZXYudHlwZSA9PT0gXCJrZXl1cFwiKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgLyogQWJvcnQgZWFybHksIGlmIGluZGV4IGlzIG5vdCBidWlsZCBvciBpbnB1dCBoYXNuJ3QgY2hhbmdlZCAqL1xuICAgICAgaWYgKCF0aGlzLmluZGV4XyB8fCB0YXJnZXQudmFsdWUgPT09IHRoaXMudmFsdWVfKVxuICAgICAgICByZXR1cm5cblxuICAgICAgLyogQ2xlYXIgY3VycmVudCBsaXN0ICovXG4gICAgICB3aGlsZSAodGhpcy5saXN0Xy5maXJzdENoaWxkKVxuICAgICAgICB0aGlzLmxpc3RfLnJlbW92ZUNoaWxkKHRoaXMubGlzdF8uZmlyc3RDaGlsZClcblxuICAgICAgLyogQWJvcnQgZWFybHksIGlmIHNlYXJjaCBpbnB1dCBpcyBlbXB0eSAqL1xuICAgICAgdGhpcy52YWx1ZV8gPSB0YXJnZXQudmFsdWVcbiAgICAgIGlmICh0aGlzLnZhbHVlXy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ucGxhY2Vob2xkZXJcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8qIFBlcmZvcm0gc2VhcmNoIG9uIGluZGV4IGFuZCBncm91cCBzZWN0aW9ucyBieSBkb2N1bWVudCAqL1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pbmRleF9cblxuICAgICAgICAvKiBBcHBlbmQgdHJhaWxpbmcgd2lsZGNhcmQgdG8gYWxsIHRlcm1zIGZvciBwcmVmaXggcXVlcnlpbmcgKi9cbiAgICAgICAgLnF1ZXJ5KHF1ZXJ5ID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlXy50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICAgIHF1ZXJ5LnRlcm0odGVybSwgeyB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvKiBQcm9jZXNzIHF1ZXJ5IHJlc3VsdHMgKi9cbiAgICAgICAgLnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3NfLmdldChpdGVtLnJlZilcbiAgICAgICAgICBpZiAoZG9jLnBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jLnBhcmVudC5sb2NhdGlvblxuICAgICAgICAgICAgaXRlbXMuc2V0KHJlZiwgKGl0ZW1zLmdldChyZWYpIHx8IFtdKS5jb25jYXQoaXRlbSkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYy5sb2NhdGlvblxuICAgICAgICAgICAgaXRlbXMuc2V0KHJlZiwgKGl0ZW1zLmdldChyZWYpIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zXG4gICAgICAgIH0sIG5ldyBNYXApXG5cbiAgICAgIC8qIEFzc2VtYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIG1hdGNoaW5nICovXG4gICAgICBjb25zdCBxdWVyeSA9IGVzY2FwZSh0aGlzLnZhbHVlXy50cmltKCkpLnJlcGxhY2UoXG4gICAgICAgIG5ldyBSZWdFeHAobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yLCBcImltZ1wiKSwgXCJ8XCIpXG4gICAgICBjb25zdCBtYXRjaCA9XG4gICAgICAgIG5ldyBSZWdFeHAoYChefCR7bHVuci50b2tlbml6ZXIuc2VwYXJhdG9yfSkoJHtxdWVyeX0pYCwgXCJpbWdcIilcbiAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IChfLCBzZXBhcmF0b3IsIHRva2VuKSA9PlxuICAgICAgICBgJHtzZXBhcmF0b3J9PGVtPiR7dG9rZW59PC9lbT5gXG5cbiAgICAgIC8qIFJlc2V0IHN0YWNrIGFuZCByZW5kZXIgcmVzdWx0cyAqL1xuICAgICAgdGhpcy5zdGFja18gPSBbXVxuICAgICAgcmVzdWx0LmZvckVhY2goKGl0ZW1zLCByZWYpID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5kb2NzXy5nZXQocmVmKVxuXG4gICAgICAgIC8qIFJlbmRlciBhcnRpY2xlICovXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSAoXG4gICAgICAgICAgPGxpIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9faXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj17ZG9jLmxvY2F0aW9ufSB0aXRsZT17ZG9jLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2xpbmtcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICBtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlLS1kb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IGRvYy50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICB7ZG9jLnRleHQubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGVhc2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogZG9jLnRleHQucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxuICAgICAgICAgICAgICAgICAgPC9wPiA6IHt9fVxuICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuXG4gICAgICAgIC8qIFJlbmRlciBzZWN0aW9ucyBmb3IgYXJ0aWNsZSAqL1xuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZG9jc18uZ2V0KGl0ZW0ucmVmKVxuICAgICAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgPGEgaHJlZj17c2VjdGlvbi5sb2NhdGlvbn0gdGl0bGU9e3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19saW5rXCIgZGF0YS1tZC1yZWw9XCJhbmNob3JcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogc2VjdGlvbi50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGV4dC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogdHJ1bmNhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLnRleHQucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSwgNDAwKVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcD4gOiB7fX1cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLyogUHVzaCBhcnRpY2xlcyBhbmQgc2VjdGlvbiByZW5kZXJlcnMgb250byBzdGFjayAqL1xuICAgICAgICB0aGlzLnN0YWNrXy5wdXNoKCgpID0+IHRoaXMubGlzdF8uYXBwZW5kQ2hpbGQoYXJ0aWNsZSksIC4uLnNlY3Rpb25zKVxuICAgICAgfSlcblxuICAgICAgLyogR3JhZHVhbGx5IGFkZCByZXN1bHRzIGFzIGxvbmcgYXMgdGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyIGdyb3dzICovXG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsXy5wYXJlbnROb2RlXG4gICAgICBpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgd2hpbGUgKHRoaXMuc3RhY2tfLmxlbmd0aCAmJlxuICAgICAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgPj0gY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIDE2KVxuICAgICAgICAodGhpcy5zdGFja18uc2hpZnQoKSkoKVxuXG4gICAgICAvKiBCaW5kIGNsaWNrIGhhbmRsZXJzIGZvciBhbmNob3JzICovXG4gICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5saXN0Xy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtcmVsPWFuY2hvcl1cIilcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYW5jaG9ycywgYW5jaG9yID0+IHtcbiAgICAgICAgW1wiY2xpY2tcIiwgXCJrZXlkb3duXCJdLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2MiA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImtleWRvd25cIiAmJiBldjIua2V5Q29kZSAhPT0gMTMpXG4gICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICAvKiBDbG9zZSBzZWFyY2ggKi9cbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxuICAgICAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBIYWNrOiBwcmV2ZW50IGRlZmF1bHQsIGFzIHRoZSBuYXZpZ2F0aW9uIG5lZWRzIHRvIGJlIGRlbGF5ZWQgZHVlXG4gICAgICAgICAgICAgICB0byB0aGUgc2VhcmNoIGJvZHkgbG9jayBvbiBtb2JpbGUgKi9cbiAgICAgICAgICAgIGV2Mi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIC8qIFVwZGF0ZSBzZWFyY2ggbWV0YWRhdGEgKi9cbiAgICAgIHN3aXRjaCAocmVzdWx0LnNpemUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLm5vbmVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ub25lXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZV8ub3RoZXIucmVwbGFjZShcIiNcIiwgcmVzdWx0LnNpemUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL1Jlc3VsdC5qc3giLCIndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaE9wZXJhdG9yc1JlID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHJldHVybiBzdHIucmVwbGFjZShtYXRjaE9wZXJhdG9yc1JlLCAnXFxcXCQmJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wibHVuclwiXSA9IHJlcXVpcmUoXCItIS4vbHVuci5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyP2x1bnIhLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWRcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogbHVuciAtIGh0dHA6Ly9sdW5yanMuY29tIC0gQSBiaXQgbGlrZSBTb2xyLCBidXQgbXVjaCBzbWFsbGVyIGFuZCBub3QgYXMgYnJpZ2h0IC0gMi4xLjVcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbjsoZnVuY3Rpb24oKXtcblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb25maWd1cmluZyBhbmQgY29uc3RydWN0aW5nXG4gKiBhIG5ldyBsdW5yIEluZGV4LlxuICpcbiAqIEEgbHVuci5CdWlsZGVyIGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHRoZSBwaXBlbGluZSBzZXR1cFxuICogd2l0aCBhIHRyaW1tZXIsIHN0b3Agd29yZCBmaWx0ZXIgYW5kIHN0ZW1tZXIuXG4gKlxuICogVGhpcyBidWlsZGVyIG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBjb25maWd1cmF0aW9uIGZ1bmN0aW9uXG4gKiB0aGF0IGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciwgYWxsb3dpbmcgdGhlIGxpc3Qgb2YgZmllbGRzXG4gKiBhbmQgb3RoZXIgYnVpbGRlciBwYXJhbWV0ZXJzIHRvIGJlIGN1c3RvbWlzZWQuXG4gKlxuICogQWxsIGRvY3VtZW50cyBfbXVzdF8gYmUgYWRkZWQgd2l0aGluIHRoZSBwYXNzZWQgY29uZmlnIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgaWR4ID0gbHVucihmdW5jdGlvbiAoKSB7XG4gKiAgIHRoaXMuZmllbGQoJ3RpdGxlJylcbiAqICAgdGhpcy5maWVsZCgnYm9keScpXG4gKiAgIHRoaXMucmVmKCdpZCcpXG4gKlxuICogICBkb2N1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gKiAgICAgdGhpcy5hZGQoZG9jKVxuICogICB9LCB0aGlzKVxuICogfSlcbiAqXG4gKiBAc2VlIHtAbGluayBsdW5yLkJ1aWxkZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICogQHNlZSB7QGxpbmsgbHVuci50cmltbWVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdG9wV29yZEZpbHRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuc3RlbW1lcn1cbiAqIEBuYW1lc3BhY2Uge2Z1bmN0aW9ufSBsdW5yXG4gKi9cbnZhciBsdW5yID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLkJ1aWxkZXJcblxuICBidWlsZGVyLnBpcGVsaW5lLmFkZChcbiAgICBsdW5yLnRyaW1tZXIsXG4gICAgbHVuci5zdG9wV29yZEZpbHRlcixcbiAgICBsdW5yLnN0ZW1tZXJcbiAgKVxuXG4gIGJ1aWxkZXIuc2VhcmNoUGlwZWxpbmUuYWRkKFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgY29uZmlnLmNhbGwoYnVpbGRlciwgYnVpbGRlcilcbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGQoKVxufVxuXG5sdW5yLnZlcnNpb24gPSBcIjIuMS41XCJcbi8qIVxuICogbHVuci51dGlsc1xuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgY29udGFpbmluZyB1dGlscyBmb3IgdGhlIHJlc3Qgb2YgdGhlIGx1bnIgbGlicmFyeVxuICovXG5sdW5yLnV0aWxzID0ge31cblxuLyoqXG4gKiBQcmludCBhIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBwcmludGVkLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKi9cbmx1bnIudXRpbHMud2FybiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKGdsb2JhbC5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufSkodGhpcylcblxuLyoqXG4gKiBDb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy5cbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiB0aGUgZW1wdHkgc3RyaW5nLCBpbiBhbGwgb3RoZXIgY2FzZXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiBgdG9TdHJpbmdgIG9uIHRoZSBwYXNzZWQgb2JqZWN0IGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7QW55fSBvYmogVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqL1xubHVuci51dGlscy5hc1N0cmluZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PT0gdm9pZCAwIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iai50b1N0cmluZygpXG4gIH1cbn1cbmx1bnIuRmllbGRSZWYgPSBmdW5jdGlvbiAoZG9jUmVmLCBmaWVsZE5hbWUsIHN0cmluZ1ZhbHVlKSB7XG4gIHRoaXMuZG9jUmVmID0gZG9jUmVmXG4gIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lXG4gIHRoaXMuX3N0cmluZ1ZhbHVlID0gc3RyaW5nVmFsdWVcbn1cblxubHVuci5GaWVsZFJlZi5qb2luZXIgPSBcIi9cIlxuXG5sdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICB2YXIgbiA9IHMuaW5kZXhPZihsdW5yLkZpZWxkUmVmLmpvaW5lcilcblxuICBpZiAobiA9PT0gLTEpIHtcbiAgICB0aHJvdyBcIm1hbGZvcm1lZCBmaWVsZCByZWYgc3RyaW5nXCJcbiAgfVxuXG4gIHZhciBmaWVsZFJlZiA9IHMuc2xpY2UoMCwgbiksXG4gICAgICBkb2NSZWYgPSBzLnNsaWNlKG4gKyAxKVxuXG4gIHJldHVybiBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZFJlZiwgcylcbn1cblxubHVuci5GaWVsZFJlZi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9zdHJpbmdWYWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdHJpbmdWYWx1ZSA9IHRoaXMuZmllbGROYW1lICsgbHVuci5GaWVsZFJlZi5qb2luZXIgKyB0aGlzLmRvY1JlZlxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX3N0cmluZ1ZhbHVlXG59XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBpbnZlcnNlIGRvY3VtZW50IGZyZXF1ZW5jeSBmb3JcbiAqIGEgcG9zdGluZy4gVGhpcyBpcyBzaGFyZWQgYmV0d2VlbiB0aGUgYnVpbGRlciBhbmQgdGhlIGluZGV4XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3N0aW5nIC0gVGhlIHBvc3RpbmcgZm9yIGEgZ2l2ZW4gdGVybVxuICogQHBhcmFtIHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cy5cbiAqL1xubHVuci5pZGYgPSBmdW5jdGlvbiAocG9zdGluZywgZG9jdW1lbnRDb3VudCkge1xuICB2YXIgZG9jdW1lbnRzV2l0aFRlcm0gPSAwXG5cbiAgZm9yICh2YXIgZmllbGROYW1lIGluIHBvc3RpbmcpIHtcbiAgICBpZiAoZmllbGROYW1lID09ICdfaW5kZXgnKSBjb250aW51ZSAvLyBJZ25vcmUgdGhlIHRlcm0gaW5kZXgsIGl0cyBub3QgYSBmaWVsZFxuICAgIGRvY3VtZW50c1dpdGhUZXJtICs9IE9iamVjdC5rZXlzKHBvc3RpbmdbZmllbGROYW1lXSkubGVuZ3RoXG4gIH1cblxuICB2YXIgeCA9IChkb2N1bWVudENvdW50IC0gZG9jdW1lbnRzV2l0aFRlcm0gKyAwLjUpIC8gKGRvY3VtZW50c1dpdGhUZXJtICsgMC41KVxuXG4gIHJldHVybiBNYXRoLmxvZygxICsgTWF0aC5hYnMoeCkpXG59XG5cbi8qKlxuICogQSB0b2tlbiB3cmFwcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRva2VuXG4gKiBhcyBpdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgdGV4dCBwcm9jZXNzaW5nIHBpcGVsaW5lLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtzdHI9JyddIC0gVGhlIHN0cmluZyB0b2tlbiBiZWluZyB3cmFwcGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YT17fV0gLSBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0b2tlbi5cbiAqL1xubHVuci5Ub2tlbiA9IGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gIHRoaXMuc3RyID0gc3RyIHx8IFwiXCJcbiAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IHt9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG9rZW4gc3RyaW5nIHRoYXQgaXMgYmVpbmcgd3JhcHBlZCBieSB0aGlzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyXG59XG5cbi8qKlxuICogQSB0b2tlbiB1cGRhdGUgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHVwZGF0aW5nIG9yIG9wdGlvbmFsbHlcbiAqIHdoZW4gY2xvbmluZyBhIHRva2VuLlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcGFyYW0ge09iamVjdH0gbWV0YWRhdGEgLSBBbGwgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byB0aGUgd3JhcHBlZCBzdHJpbmcgdG9rZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICogICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKClcbiAqIH0pXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHRva2VuIHN0cmluZy5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5zdHIgPSBmbih0aGlzLnN0ciwgdGhpcy5tZXRhZGF0YSlcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB0b2tlbi4gT3B0aW9uYWxseSBhIGZ1bmN0aW9uIGNhbiBiZVxuICogYXBwbGllZCB0byB0aGUgY2xvbmVkIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gW2ZuXSAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjbG9uZWQgdG9rZW4uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgZm4gPSBmbiB8fCBmdW5jdGlvbiAocykgeyByZXR1cm4gcyB9XG4gIHJldHVybiBuZXcgbHVuci5Ub2tlbiAoZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpLCB0aGlzLm1ldGFkYXRhKVxufVxuLyohXG4gKiBsdW5yLnRva2VuaXplclxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3Igc3BsaXR0aW5nIGEgc3RyaW5nIGludG8gdG9rZW5zIHJlYWR5IHRvIGJlIGluc2VydGVkIGludG9cbiAqIHRoZSBzZWFyY2ggaW5kZXguIFVzZXMgYGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcmAgdG8gc3BsaXQgc3RyaW5ncywgY2hhbmdlXG4gKiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgaG93IHN0cmluZ3MgYXJlIHNwbGl0IGludG8gdG9rZW5zLlxuICpcbiAqIFRoaXMgdG9rZW5pemVyIHdpbGwgY29udmVydCBpdHMgcGFyYW1ldGVyIHRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgYHRvU3RyaW5nYCBhbmRcbiAqIHRoZW4gd2lsbCBzcGxpdCB0aGlzIHN0cmluZyBvbiB0aGUgY2hhcmFjdGVyIGluIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgLlxuICogQXJyYXlzIHdpbGwgaGF2ZSB0aGVpciBlbGVtZW50cyBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBhbmQgd3JhcHBlZCBpbiBhIGx1bnIuVG9rZW4uXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHs/KHN0cmluZ3xvYmplY3R8b2JqZWN0W10pfSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgaW50byB0b2tlbnNcbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuW119XG4gKi9cbmx1bnIudG9rZW5pemVyID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gbmV3IGx1bnIuVG9rZW4obHVuci51dGlscy5hc1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpKVxuICAgIH0pXG4gIH1cblxuICB2YXIgc3RyID0gb2JqLnRvU3RyaW5nKCkudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoLFxuICAgICAgdG9rZW5zID0gW11cblxuICBmb3IgKHZhciBzbGljZUVuZCA9IDAsIHNsaWNlU3RhcnQgPSAwOyBzbGljZUVuZCA8PSBsZW47IHNsaWNlRW5kKyspIHtcbiAgICB2YXIgY2hhciA9IHN0ci5jaGFyQXQoc2xpY2VFbmQpLFxuICAgICAgICBzbGljZUxlbmd0aCA9IHNsaWNlRW5kIC0gc2xpY2VTdGFydFxuXG4gICAgaWYgKChjaGFyLm1hdGNoKGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcikgfHwgc2xpY2VFbmQgPT0gbGVuKSkge1xuXG4gICAgICBpZiAoc2xpY2VMZW5ndGggPiAwKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKFxuICAgICAgICAgIG5ldyBsdW5yLlRva2VuIChzdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogW3NsaWNlU3RhcnQsIHNsaWNlTGVuZ3RoXSxcbiAgICAgICAgICAgIGluZGV4OiB0b2tlbnMubGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogVGhlIHNlcGFyYXRvciB1c2VkIHRvIHNwbGl0IGEgc3RyaW5nIGludG8gdG9rZW5zLiBPdmVycmlkZSB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mXG4gKiBgbHVuci50b2tlbml6ZXJgIGJlaGF2aW91ciB3aGVuIHRva2VuaXppbmcgc3RyaW5ncy4gQnkgZGVmYXVsdCB0aGlzIHNwbGl0cyBvbiB3aGl0ZXNwYWNlIGFuZCBoeXBoZW5zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzZWUgbHVuci50b2tlbml6ZXJcbiAqL1xubHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gL1tcXHNcXC1dKy9cbi8qIVxuICogbHVuci5QaXBlbGluZVxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5QaXBlbGluZXMgbWFpbnRhaW4gYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9ucyB0byBiZSBhcHBsaWVkIHRvIGFsbFxuICogdG9rZW5zIGluIGRvY3VtZW50cyBlbnRlcmluZyB0aGUgc2VhcmNoIGluZGV4IGFuZCBxdWVyaWVzIGJlaW5nIHJhbiBhZ2FpbnN0XG4gKiB0aGUgaW5kZXguXG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleCBjcmVhdGVkIHdpdGggdGhlIGx1bnIgc2hvcnRjdXQgd2lsbCBjb250YWluIGFcbiAqIHBpcGVsaW5lIHdpdGggYSBzdG9wIHdvcmQgZmlsdGVyIGFuZCBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIuIEV4dHJhXG4gKiBmdW5jdGlvbnMgY2FuIGJlIGFkZGVkIGJlZm9yZSBvciBhZnRlciBlaXRoZXIgb2YgdGhlc2UgZnVuY3Rpb25zIG9yIHRoZXNlXG4gKiBkZWZhdWx0IGZ1bmN0aW9ucyBjYW4gYmUgcmVtb3ZlZC5cbiAqXG4gKiBXaGVuIHJ1biB0aGUgcGlwZWxpbmUgd2lsbCBjYWxsIGVhY2ggZnVuY3Rpb24gaW4gdHVybiwgcGFzc2luZyBhIHRva2VuLCB0aGVcbiAqIGluZGV4IG9mIHRoYXQgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIGxpc3Qgb2YgYWxsIHRva2VucyBhbmQgZmluYWxseSBhIGxpc3Qgb2ZcbiAqIGFsbCB0aGUgb3JpZ2luYWwgdG9rZW5zLlxuICpcbiAqIFRoZSBvdXRwdXQgb2YgZnVuY3Rpb25zIGluIHRoZSBwaXBlbGluZSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbmV4dCBmdW5jdGlvblxuICogaW4gdGhlIHBpcGVsaW5lLiBUbyBleGNsdWRlIGEgdG9rZW4gZnJvbSBlbnRlcmluZyB0aGUgaW5kZXggdGhlIGZ1bmN0aW9uXG4gKiBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCwgdGhlIHJlc3Qgb2YgdGhlIHBpcGVsaW5lIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoXG4gKiB0aGlzIHRva2VuLlxuICpcbiAqIEZvciBzZXJpYWxpc2F0aW9uIG9mIHBpcGVsaW5lcyB0byB3b3JrLCBhbGwgZnVuY3Rpb25zIHVzZWQgaW4gYW4gaW5zdGFuY2Ugb2ZcbiAqIGEgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLiBSZWdpc3RlcmVkIGZ1bmN0aW9ucyBjYW5cbiAqIHRoZW4gYmUgbG9hZGVkLiBJZiB0cnlpbmcgdG8gbG9hZCBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgdGhhdCB1c2VzIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgbm90IHJlZ2lzdGVyZWQgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogSWYgbm90IHBsYW5uaW5nIG9uIHNlcmlhbGlzaW5nIHRoZSBwaXBlbGluZSB0aGVuIHJlZ2lzdGVyaW5nIHBpcGVsaW5lIGZ1bmN0aW9uc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5QaXBlbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBtYXBzIGx1bnIuVG9rZW4gdG8gbHVuci5Ub2tlbi4gQSBsdW5yLlRva2VuIGNvbnRhaW5zIHRoZSB0b2tlblxuICogc3RyaW5nIGFzIHdlbGwgYXMgYWxsIGtub3duIG1ldGFkYXRhLiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBtdXRhdGUgdGhlIHRva2VuIHN0cmluZ1xuICogb3IgbXV0YXRlIChvciBhZGQpIG1ldGFkYXRhIGZvciBhIGdpdmVuIHRva2VuLlxuICpcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIGluZGljYXRlIHRoYXQgdGhlIHBhc3NlZCB0b2tlbiBzaG91bGQgYmUgZGlzY2FyZGVkIGJ5IHJldHVybmluZ1xuICogbnVsbC4gVGhpcyB0b2tlbiB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCB3aWxsIG5vdCBiZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIE11bHRpcGxlIHRva2VucyBjYW4gYmUgcmV0dXJuZWQgYnkgcmV0dXJuaW5nIGFuIGFycmF5IG9mIHRva2Vucy4gRWFjaCB0b2tlbiB3aWxsIGJlIHBhc3NlZFxuICogdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCBhbGwgd2lsbCByZXR1cm5lZCB0b2tlbnMgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQW55IG51bWJlciBvZiBwaXBlbGluZSBmdW5jdGlvbnMgbWF5IGJlIGNoYWluZWQgdG9nZXRoZXIgdXNpbmcgYSBsdW5yLlBpcGVsaW5lLlxuICpcbiAqIEBpbnRlcmZhY2UgbHVuci5QaXBlbGluZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiBmcm9tIHRoZSBkb2N1bWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaSAtIFRoZSBpbmRleCBvZiB0aGlzIHRva2VuIGluIHRoZSBjb21wbGV0ZSBsaXN0IG9mIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbltdfSB0b2tlbnMgLSBBbGwgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHJldHVybnMgeyg/bHVuci5Ub2tlbnxsdW5yLlRva2VuW10pfVxuICovXG5cbi8qKlxuICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB3aXRoIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBGdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgaWYgdGhlIHBpcGVsaW5lXG4gKiBuZWVkcyB0byBiZSBzZXJpYWxpc2VkLCBvciBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgbmVlZHMgdG8gYmUgbG9hZGVkLlxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gZG9lcyBub3QgYWRkIGl0IHRvIGEgcGlwZWxpbmUsIGZ1bmN0aW9ucyBtdXN0IHN0aWxsIGJlXG4gKiBhZGRlZCB0byBpbnN0YW5jZXMgb2YgdGhlIHBpcGVsaW5lIGZvciB0aGVtIHRvIGJlIHVzZWQgd2hlbiBydW5uaW5nIGEgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCAtIFRoZSBsYWJlbCB0byByZWdpc3RlciB0aGlzIGZ1bmN0aW9uIHdpdGhcbiAqL1xubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBsYWJlbCkge1xuICBpZiAobGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdPdmVyd3JpdGluZyBleGlzdGluZyByZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgbGFiZWwpXG4gIH1cblxuICBmbi5sYWJlbCA9IGxhYmVsXG4gIGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbi5sYWJlbF0gPSBmblxufVxuXG4vKipcbiAqIFdhcm5zIGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCBhcyBhIFBpcGVsaW5lIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgaXNSZWdpc3RlcmVkID0gZm4ubGFiZWwgJiYgKGZuLmxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucylcblxuICBpZiAoIWlzUmVnaXN0ZXJlZCkge1xuICAgIGx1bnIudXRpbHMud2FybignRnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBwaXBlbGluZS4gVGhpcyBtYXkgY2F1c2UgcHJvYmxlbXMgd2hlbiBzZXJpYWxpc2luZyB0aGUgaW5kZXguXFxuJywgZm4pXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXNlZCBwaXBlbGluZS5cbiAqXG4gKiBBbGwgZnVuY3Rpb25zIHRvIGJlIGxvYWRlZCBtdXN0IGFscmVhZHkgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuXG4gKiBJZiBhbnkgZnVuY3Rpb24gZnJvbSB0aGUgc2VyaWFsaXNlZCBkYXRhIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHRoZW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpc2VkIC0gVGhlIHNlcmlhbGlzZWQgcGlwZWxpbmUgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLlBpcGVsaW5lLmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXNlZCkge1xuICB2YXIgcGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuXG4gIHNlcmlhbGlzZWQuZm9yRWFjaChmdW5jdGlvbiAoZm5OYW1lKSB7XG4gICAgdmFyIGZuID0gbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuTmFtZV1cblxuICAgIGlmIChmbikge1xuICAgICAgcGlwZWxpbmUuYWRkKGZuKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsb2FkIHVucmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGZuTmFtZSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHBpcGVsaW5lXG59XG5cbi8qKlxuICogQWRkcyBuZXcgZnVuY3Rpb25zIHRvIHRoZSBlbmQgb2YgdGhlIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbltdfSBmdW5jdGlvbnMgLSBBbnkgbnVtYmVyIG9mIGZ1bmN0aW9ucyB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG4gICAgdGhpcy5fc3RhY2sucHVzaChmbilcbiAgfSwgdGhpcylcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGFmdGVyIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgcG9zID0gcG9zICsgMVxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGJlZm9yZSBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgZnVuY3Rpb24gZnJvbSB0aGUgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihmbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMSlcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBjdXJyZW50IGxpc3Qgb2YgZnVuY3Rpb25zIHRoYXQgbWFrZSB1cCB0aGUgcGlwZWxpbmUgYWdhaW5zdCB0aGVcbiAqIHBhc3NlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIFRoZSB0b2tlbnMgdG8gcnVuIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIHZhciBzdGFja0xlbmd0aCA9IHRoaXMuX3N0YWNrLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tMZW5ndGg7IGkrKykge1xuICAgIHZhciBmbiA9IHRoaXMuX3N0YWNrW2ldXG5cbiAgICB0b2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCB0b2tlbiwgaikge1xuICAgICAgdmFyIHJlc3VsdCA9IGZuKHRva2VuLCBqLCB0b2tlbnMpXG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCB8fCByZXN1bHQgPT09ICcnKSByZXR1cm4gbWVtb1xuXG4gICAgICByZXR1cm4gbWVtby5jb25jYXQocmVzdWx0KVxuICAgIH0sIFtdKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgcGFzc2luZyBhIHN0cmluZyB0aHJvdWdoIGEgcGlwZWxpbmUgYW5kIGdldHRpbmdcbiAqIHN0cmluZ3Mgb3V0LiBUaGlzIG1ldGhvZCB0YWtlcyBjYXJlIG9mIHdyYXBwaW5nIHRoZSBwYXNzZWQgc3RyaW5nIGluIGFcbiAqIHRva2VuIGFuZCBtYXBwaW5nIHRoZSByZXN1bHRpbmcgdG9rZW5zIGJhY2sgdG8gc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBwYXNzIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW5TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciB0b2tlbiA9IG5ldyBsdW5yLlRva2VuIChzdHIpXG5cbiAgcmV0dXJuIHRoaXMucnVuKFt0b2tlbl0pLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LnRvU3RyaW5nKClcbiAgfSlcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIHBpcGVsaW5lIGJ5IHJlbW92aW5nIGFueSBleGlzdGluZyBwcm9jZXNzb3JzLlxuICpcbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YWNrID0gW11cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBpcGVsaW5lIHJlYWR5IGZvciBzZXJpYWxpc2F0aW9uLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3N0YWNrLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChmbilcblxuICAgIHJldHVybiBmbi5sYWJlbFxuICB9KVxufVxuLyohXG4gKiBsdW5yLlZlY3RvclxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSB2ZWN0b3IgaXMgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIHZlY3RvciBzcGFjZSBvZiBkb2N1bWVudHMgYW5kIHF1ZXJpZXMuIFRoZXNlXG4gKiB2ZWN0b3JzIHN1cHBvcnQgb3BlcmF0aW9ucyB0byBkZXRlcm1pbmUgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0d28gZG9jdW1lbnRzIG9yXG4gKiBhIGRvY3VtZW50IGFuZCBhIHF1ZXJ5LlxuICpcbiAqIE5vcm1hbGx5IG5vIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIGZvciBpbml0aWFsaXppbmcgYSB2ZWN0b3IsIGJ1dCBpbiB0aGUgY2FzZSBvZlxuICogbG9hZGluZyBhIHByZXZpb3VzbHkgZHVtcGVkIHZlY3RvciB0aGUgcmF3IGVsZW1lbnRzIGNhbiBiZSBwcm92aWRlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgdmVjdG9ycyBhcmUgaW1wbGVtZW50ZWQgd2l0aCBhIGZsYXQgYXJyYXksIHdoZXJlIGFuIGVsZW1lbnRzXG4gKiBpbmRleCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBpdHMgdmFsdWUuIEUuZy4gW2luZGV4LCB2YWx1ZSwgaW5kZXgsIHZhbHVlXS4gVGhpc1xuICogYWxsb3dzIHRoZSB1bmRlcmx5aW5nIGFycmF5IHRvIGJlIGFzIHNwYXJzZSBhcyBwb3NzaWJsZSBhbmQgc3RpbGwgb2ZmZXIgZGVjZW50XG4gKiBwZXJmb3JtYW5jZSB3aGVuIGJlaW5nIHVzZWQgZm9yIHZlY3RvciBjYWxjdWxhdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge051bWJlcltdfSBbZWxlbWVudHNdIC0gVGhlIGZsYXQgbGlzdCBvZiBlbGVtZW50IGluZGV4IGFuZCBlbGVtZW50IHZhbHVlIHBhaXJzLlxuICovXG5sdW5yLlZlY3RvciA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cyB8fCBbXVxufVxuXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcG9zaXRpb24gd2l0aGluIHRoZSB2ZWN0b3IgdG8gaW5zZXJ0IGEgZ2l2ZW4gaW5kZXguXG4gKlxuICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgYnkgaW5zZXJ0IGFuZCB1cHNlcnQuIElmIHRoZXJlIGFyZSBkdXBsaWNhdGUgaW5kZXhlcyB0aGVuXG4gKiB0aGUgcG9zaXRpb24gaXMgcmV0dXJuZWQgYXMgaWYgdGhlIHZhbHVlIGZvciB0aGF0IGluZGV4IHdlcmUgdG8gYmUgdXBkYXRlZCwgYnV0IGl0XG4gKiBpcyB0aGUgY2FsbGVycyByZXNwb25zaWJpbGl0eSB0byBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGEgZHVwbGljYXRlIGF0IHRoYXQgaW5kZXhcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5wb3NpdGlvbkZvckluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIC8vIEZvciBhbiBlbXB0eSB2ZWN0b3IgdGhlIHR1cGxlIGNhbiBiZSBpbnNlcnRlZCBhdCB0aGUgYmVnaW5uaW5nXG4gIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHZhciBzdGFydCA9IDAsXG4gICAgICBlbmQgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIsXG4gICAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0LFxuICAgICAgcGl2b3RQb2ludCA9IE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKSxcbiAgICAgIHBpdm90SW5kZXggPSB0aGlzLmVsZW1lbnRzW3Bpdm90UG9pbnQgKiAyXVxuXG4gIHdoaWxlIChzbGljZUxlbmd0aCA+IDEpIHtcbiAgICBpZiAocGl2b3RJbmRleCA8IGluZGV4KSB7XG4gICAgICBzdGFydCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA+IGluZGV4KSB7XG4gICAgICBlbmQgPSBwaXZvdFBvaW50XG4gICAgfVxuXG4gICAgaWYgKHBpdm90SW5kZXggPT0gaW5kZXgpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc2xpY2VMZW5ndGggPSBlbmQgLSBzdGFydFxuICAgIHBpdm90UG9pbnQgPSBzdGFydCArIE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKVxuICAgIHBpdm90SW5kZXggPSB0aGlzLmVsZW1lbnRzW3Bpdm90UG9pbnQgKiAyXVxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPT0gaW5kZXgpIHtcbiAgICByZXR1cm4gcGl2b3RQb2ludCAqIDJcbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICByZXR1cm4gcGl2b3RQb2ludCAqIDJcbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICByZXR1cm4gKHBpdm90UG9pbnQgKyAxKSAqIDJcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydHMgYW4gZWxlbWVudCBhdCBhbiBpbmRleCB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBEb2VzIG5vdCBhbGxvdyBkdXBsaWNhdGVzLCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIGFscmVhZHkgYW4gZW50cnlcbiAqIGZvciB0aGlzIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB2ZWN0b3IuXG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SWR4LCB2YWwpIHtcbiAgdGhpcy51cHNlcnQoaW5zZXJ0SWR4LCB2YWwsIGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBcImR1cGxpY2F0ZSBpbmRleFwiXG4gIH0pXG59XG5cbi8qKlxuICogSW5zZXJ0cyBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZm9yIHVwZGF0ZXMsIHRoZSBleGlzdGluZyB2YWx1ZSBhbmQgdGhlXG4gKiByZXF1ZXN0ZWQgdmFsdWUgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHNcbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnVwc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCwgZm4pIHtcbiAgdGhpcy5fbWFnbml0dWRlID0gMFxuICB2YXIgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uRm9ySW5kZXgoaW5zZXJ0SWR4KVxuXG4gIGlmICh0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uXSA9PSBpbnNlcnRJZHgpIHtcbiAgICB0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uICsgMV0gPSBmbih0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uICsgMV0sIHZhbClcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVsZW1lbnRzLnNwbGljZShwb3NpdGlvbiwgMCwgaW5zZXJ0SWR4LCB2YWwpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhpcyB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX21hZ25pdHVkZSkgcmV0dXJuIHRoaXMuX21hZ25pdHVkZVxuXG4gIHZhciBzdW1PZlNxdWFyZXMgPSAwLFxuICAgICAgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgZWxlbWVudHNMZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciB2YWwgPSB0aGlzLmVsZW1lbnRzW2ldXG4gICAgc3VtT2ZTcXVhcmVzICs9IHZhbCAqIHZhbFxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX21hZ25pdHVkZSA9IE1hdGguc3FydChzdW1PZlNxdWFyZXMpXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7bHVuci5WZWN0b3J9IG90aGVyVmVjdG9yIC0gVGhlIHZlY3RvciB0byBjb21wdXRlIHRoZSBkb3QgcHJvZHVjdCB3aXRoLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChvdGhlclZlY3Rvcikge1xuICB2YXIgZG90UHJvZHVjdCA9IDAsXG4gICAgICBhID0gdGhpcy5lbGVtZW50cywgYiA9IG90aGVyVmVjdG9yLmVsZW1lbnRzLFxuICAgICAgYUxlbiA9IGEubGVuZ3RoLCBiTGVuID0gYi5sZW5ndGgsXG4gICAgICBhVmFsID0gMCwgYlZhbCA9IDAsXG4gICAgICBpID0gMCwgaiA9IDBcblxuICB3aGlsZSAoaSA8IGFMZW4gJiYgaiA8IGJMZW4pIHtcbiAgICBhVmFsID0gYVtpXSwgYlZhbCA9IGJbal1cbiAgICBpZiAoYVZhbCA8IGJWYWwpIHtcbiAgICAgIGkgKz0gMlxuICAgIH0gZWxzZSBpZiAoYVZhbCA+IGJWYWwpIHtcbiAgICAgIGogKz0gMlxuICAgIH0gZWxzZSBpZiAoYVZhbCA9PSBiVmFsKSB7XG4gICAgICBkb3RQcm9kdWN0ICs9IGFbaSArIDFdICogYltqICsgMV1cbiAgICAgIGkgKz0gMlxuICAgICAgaiArPSAyXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvdFByb2R1Y3Rcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb3NpbmUgc2ltaWxhcml0eSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gKiB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgb3RoZXIgdmVjdG9yIHRvIGNhbGN1bGF0ZSB0aGVcbiAqIHNpbWlsYXJpdHkgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5zaW1pbGFyaXR5ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHJldHVybiB0aGlzLmRvdChvdGhlclZlY3RvcikgLyAodGhpcy5tYWduaXR1ZGUoKSAqIG90aGVyVmVjdG9yLm1hZ25pdHVkZSgpKVxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB2ZWN0b3IgdG8gYW4gYXJyYXkgb2YgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXRwdXQgPSBuZXcgQXJyYXkgKHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMilcblxuICBmb3IgKHZhciBpID0gMSwgaiA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSArPSAyLCBqKyspIHtcbiAgICBvdXRwdXRbal0gPSB0aGlzLmVsZW1lbnRzW2ldXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQSBKU09OIHNlcmlhbGl6YWJsZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWxlbWVudHNcbn1cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKiFcbiAqIGx1bnIuc3RlbW1lclxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICogSW5jbHVkZXMgY29kZSBmcm9tIC0gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluL1BvcnRlclN0ZW1tZXIvanMudHh0XG4gKi9cblxuLyoqXG4gKiBsdW5yLnN0ZW1tZXIgaXMgYW4gZW5nbGlzaCBsYW5ndWFnZSBzdGVtbWVyLCB0aGlzIGlzIGEgSmF2YVNjcmlwdFxuICogaW1wbGVtZW50YXRpb24gb2YgdGhlIFBvcnRlclN0ZW1tZXIgdGFrZW4gZnJvbSBodHRwOi8vdGFydGFydXMub3JnL35tYXJ0aW5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiAtIFRoZSBzdHJpbmcgdG8gc3RlbVxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnN0ZW1tZXIgPSAoZnVuY3Rpb24oKXtcbiAgdmFyIHN0ZXAybGlzdCA9IHtcbiAgICAgIFwiYXRpb25hbFwiIDogXCJhdGVcIixcbiAgICAgIFwidGlvbmFsXCIgOiBcInRpb25cIixcbiAgICAgIFwiZW5jaVwiIDogXCJlbmNlXCIsXG4gICAgICBcImFuY2lcIiA6IFwiYW5jZVwiLFxuICAgICAgXCJpemVyXCIgOiBcIml6ZVwiLFxuICAgICAgXCJibGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImFsbGlcIiA6IFwiYWxcIixcbiAgICAgIFwiZW50bGlcIiA6IFwiZW50XCIsXG4gICAgICBcImVsaVwiIDogXCJlXCIsXG4gICAgICBcIm91c2xpXCIgOiBcIm91c1wiLFxuICAgICAgXCJpemF0aW9uXCIgOiBcIml6ZVwiLFxuICAgICAgXCJhdGlvblwiIDogXCJhdGVcIixcbiAgICAgIFwiYXRvclwiIDogXCJhdGVcIixcbiAgICAgIFwiYWxpc21cIiA6IFwiYWxcIixcbiAgICAgIFwiaXZlbmVzc1wiIDogXCJpdmVcIixcbiAgICAgIFwiZnVsbmVzc1wiIDogXCJmdWxcIixcbiAgICAgIFwib3VzbmVzc1wiIDogXCJvdXNcIixcbiAgICAgIFwiYWxpdGlcIiA6IFwiYWxcIixcbiAgICAgIFwiaXZpdGlcIiA6IFwiaXZlXCIsXG4gICAgICBcImJpbGl0aVwiIDogXCJibGVcIixcbiAgICAgIFwibG9naVwiIDogXCJsb2dcIlxuICAgIH0sXG5cbiAgICBzdGVwM2xpc3QgPSB7XG4gICAgICBcImljYXRlXCIgOiBcImljXCIsXG4gICAgICBcImF0aXZlXCIgOiBcIlwiLFxuICAgICAgXCJhbGl6ZVwiIDogXCJhbFwiLFxuICAgICAgXCJpY2l0aVwiIDogXCJpY1wiLFxuICAgICAgXCJpY2FsXCIgOiBcImljXCIsXG4gICAgICBcImZ1bFwiIDogXCJcIixcbiAgICAgIFwibmVzc1wiIDogXCJcIlxuICAgIH0sXG5cbiAgICBjID0gXCJbXmFlaW91XVwiLCAgICAgICAgICAvLyBjb25zb25hbnRcbiAgICB2ID0gXCJbYWVpb3V5XVwiLCAgICAgICAgICAvLyB2b3dlbFxuICAgIEMgPSBjICsgXCJbXmFlaW91eV0qXCIsICAgIC8vIGNvbnNvbmFudCBzZXF1ZW5jZVxuICAgIFYgPSB2ICsgXCJbYWVpb3VdKlwiLCAgICAgIC8vIHZvd2VsIHNlcXVlbmNlXG5cbiAgICBtZ3IwID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDLCAgICAgICAgICAgICAgIC8vIFtDXVZDLi4uIGlzIG0+MFxuICAgIG1lcTEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBcIihcIiArIFYgKyBcIik/JFwiLCAgLy8gW0NdVkNbVl0gaXMgbT0xXG4gICAgbWdyMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFYgKyBDLCAgICAgICAvLyBbQ11WQ1ZDLi4uIGlzIG0+MVxuICAgIHNfdiA9IFwiXihcIiArIEMgKyBcIik/XCIgKyB2OyAgICAgICAgICAgICAgICAgICAvLyB2b3dlbCBpbiBzdGVtXG5cbiAgdmFyIHJlX21ncjAgPSBuZXcgUmVnRXhwKG1ncjApO1xuICB2YXIgcmVfbWdyMSA9IG5ldyBSZWdFeHAobWdyMSk7XG4gIHZhciByZV9tZXExID0gbmV3IFJlZ0V4cChtZXExKTtcbiAgdmFyIHJlX3NfdiA9IG5ldyBSZWdFeHAoc192KTtcblxuICB2YXIgcmVfMWEgPSAvXiguKz8pKHNzfGkpZXMkLztcbiAgdmFyIHJlMl8xYSA9IC9eKC4rPykoW15zXSlzJC87XG4gIHZhciByZV8xYiA9IC9eKC4rPyllZWQkLztcbiAgdmFyIHJlMl8xYiA9IC9eKC4rPykoZWR8aW5nKSQvO1xuICB2YXIgcmVfMWJfMiA9IC8uJC87XG4gIHZhciByZTJfMWJfMiA9IC8oYXR8Ymx8aXopJC87XG4gIHZhciByZTNfMWJfMiA9IG5ldyBSZWdFeHAoXCIoW15hZWlvdXlsc3pdKVxcXFwxJFwiKTtcbiAgdmFyIHJlNF8xYl8yID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHJlXzFjID0gL14oLis/W15hZWlvdV0peSQvO1xuICB2YXIgcmVfMiA9IC9eKC4rPykoYXRpb25hbHx0aW9uYWx8ZW5jaXxhbmNpfGl6ZXJ8YmxpfGFsbGl8ZW50bGl8ZWxpfG91c2xpfGl6YXRpb258YXRpb258YXRvcnxhbGlzbXxpdmVuZXNzfGZ1bG5lc3N8b3VzbmVzc3xhbGl0aXxpdml0aXxiaWxpdGl8bG9naSkkLztcblxuICB2YXIgcmVfMyA9IC9eKC4rPykoaWNhdGV8YXRpdmV8YWxpemV8aWNpdGl8aWNhbHxmdWx8bmVzcykkLztcblxuICB2YXIgcmVfNCA9IC9eKC4rPykoYWx8YW5jZXxlbmNlfGVyfGljfGFibGV8aWJsZXxhbnR8ZW1lbnR8bWVudHxlbnR8b3V8aXNtfGF0ZXxpdGl8b3VzfGl2ZXxpemUpJC87XG4gIHZhciByZTJfNCA9IC9eKC4rPykoc3x0KShpb24pJC87XG5cbiAgdmFyIHJlXzUgPSAvXiguKz8pZSQvO1xuICB2YXIgcmVfNV8xID0gL2xsJC87XG4gIHZhciByZTNfNSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciBwb3J0ZXJTdGVtbWVyID0gZnVuY3Rpb24gcG9ydGVyU3RlbW1lcih3KSB7XG4gICAgdmFyIHN0ZW0sXG4gICAgICBzdWZmaXgsXG4gICAgICBmaXJzdGNoLFxuICAgICAgcmUsXG4gICAgICByZTIsXG4gICAgICByZTMsXG4gICAgICByZTQ7XG5cbiAgICBpZiAody5sZW5ndGggPCAzKSB7IHJldHVybiB3OyB9XG5cbiAgICBmaXJzdGNoID0gdy5zdWJzdHIoMCwxKTtcbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9VcHBlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMWFcbiAgICByZSA9IHJlXzFhXG4gICAgcmUyID0gcmUyXzFhO1xuXG4gICAgaWYgKHJlLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZSxcIiQxJDJcIik7IH1cbiAgICBlbHNlIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlMixcIiQxJDJcIik7IH1cblxuICAgIC8vIFN0ZXAgMWJcbiAgICByZSA9IHJlXzFiO1xuICAgIHJlMiA9IHJlMl8xYjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KGZwWzFdKSkge1xuICAgICAgICByZSA9IHJlXzFiXzI7XG4gICAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZTIgPSByZV9zX3Y7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICAgIHJlMiA9IHJlMl8xYl8yO1xuICAgICAgICByZTMgPSByZTNfMWJfMjtcbiAgICAgICAgcmU0ID0gcmU0XzFiXzI7XG4gICAgICAgIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlMy50ZXN0KHcpKSB7IHJlID0gcmVfMWJfMjsgdyA9IHcucmVwbGFjZShyZSxcIlwiKTsgfVxuICAgICAgICBlbHNlIGlmIChyZTQudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYyAtIHJlcGxhY2Ugc3VmZml4IHkgb3IgWSBieSBpIGlmIHByZWNlZGVkIGJ5IGEgbm9uLXZvd2VsIHdoaWNoIGlzIG5vdCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSB3b3JkIChzbyBjcnkgLT4gY3JpLCBieSAtPiBieSwgc2F5IC0+IHNheSlcbiAgICByZSA9IHJlXzFjO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgdyA9IHN0ZW0gKyBcImlcIjtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDJcbiAgICByZSA9IHJlXzI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDJsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAzXG4gICAgcmUgPSByZV8zO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAzbGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNFxuICAgIHJlID0gcmVfNDtcbiAgICByZTIgPSByZTJfNDtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdICsgZnBbMl07XG4gICAgICByZTIgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNVxuICAgIHJlID0gcmVfNTtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIHJlMiA9IHJlX21lcTE7XG4gICAgICByZTMgPSByZTNfNTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pIHx8IChyZTIudGVzdChzdGVtKSAmJiAhKHJlMy50ZXN0KHN0ZW0pKSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmUgPSByZV81XzE7XG4gICAgcmUyID0gcmVfbWdyMTtcbiAgICBpZiAocmUudGVzdCh3KSAmJiByZTIudGVzdCh3KSkge1xuICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICB9XG5cbiAgICAvLyBhbmQgdHVybiBpbml0aWFsIFkgYmFjayB0byB5XG5cbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9Mb3dlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiB3O1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udXBkYXRlKHBvcnRlclN0ZW1tZXIpO1xuICB9XG59KSgpO1xuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdGVtbWVyLCAnc3RlbW1lcicpXG4vKiFcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciBidWlsZHMgYSBzdG9wV29yZEZpbHRlciBmdW5jdGlvbiBmcm9tIHRoZSBwcm92aWRlZFxuICogbGlzdCBvZiBzdG9wIHdvcmRzLlxuICpcbiAqIFRoZSBidWlsdCBpbiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGJ1aWx0IHVzaW5nIHRoaXMgZ2VuZXJhdG9yIGFuZCBjYW4gYmUgdXNlZFxuICogdG8gZ2VuZXJhdGUgY3VzdG9tIHN0b3BXb3JkRmlsdGVycyBmb3IgYXBwbGljYXRpb25zIG9yIG5vbiBFbmdsaXNoIGxhbmd1YWdlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAc2VlIGx1bnIuUGlwZWxpbmVcbiAqIEBzZWUgbHVuci5zdG9wV29yZEZpbHRlclxuICovXG5sdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIgPSBmdW5jdGlvbiAoc3RvcFdvcmRzKSB7XG4gIHZhciB3b3JkcyA9IHN0b3BXb3Jkcy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIHN0b3BXb3JkKSB7XG4gICAgbWVtb1tzdG9wV29yZF0gPSBzdG9wV29yZFxuICAgIHJldHVybiBtZW1vXG4gIH0sIHt9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBpZiAodG9rZW4gJiYgd29yZHNbdG9rZW4udG9TdHJpbmcoKV0gIT09IHRva2VuLnRvU3RyaW5nKCkpIHJldHVybiB0b2tlblxuICB9XG59XG5cbi8qKlxuICogbHVuci5zdG9wV29yZEZpbHRlciBpcyBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0b3Agd29yZCBsaXN0IGZpbHRlciwgYW55IHdvcmRzXG4gKiBjb250YWluZWQgaW4gdGhlIGxpc3Qgd2lsbCBub3QgYmUgcGFzc2VkIHRocm91Z2ggdGhlIGZpbHRlci5cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgaW4gdGhlIFBpcGVsaW5lLiBJZiB0aGUgdG9rZW4gZG9lcyBub3QgcGFzcyB0aGVcbiAqIGZpbHRlciB0aGVuIHVuZGVmaW5lZCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW1zIHtsdW5yLlRva2VufSB0b2tlbiAtIEEgdG9rZW4gdG8gY2hlY2sgZm9yIGJlaW5nIGEgc3RvcCB3b3JkLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnN0b3BXb3JkRmlsdGVyID0gbHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyKFtcbiAgJ2EnLFxuICAnYWJsZScsXG4gICdhYm91dCcsXG4gICdhY3Jvc3MnLFxuICAnYWZ0ZXInLFxuICAnYWxsJyxcbiAgJ2FsbW9zdCcsXG4gICdhbHNvJyxcbiAgJ2FtJyxcbiAgJ2Ftb25nJyxcbiAgJ2FuJyxcbiAgJ2FuZCcsXG4gICdhbnknLFxuICAnYXJlJyxcbiAgJ2FzJyxcbiAgJ2F0JyxcbiAgJ2JlJyxcbiAgJ2JlY2F1c2UnLFxuICAnYmVlbicsXG4gICdidXQnLFxuICAnYnknLFxuICAnY2FuJyxcbiAgJ2Nhbm5vdCcsXG4gICdjb3VsZCcsXG4gICdkZWFyJyxcbiAgJ2RpZCcsXG4gICdkbycsXG4gICdkb2VzJyxcbiAgJ2VpdGhlcicsXG4gICdlbHNlJyxcbiAgJ2V2ZXInLFxuICAnZXZlcnknLFxuICAnZm9yJyxcbiAgJ2Zyb20nLFxuICAnZ2V0JyxcbiAgJ2dvdCcsXG4gICdoYWQnLFxuICAnaGFzJyxcbiAgJ2hhdmUnLFxuICAnaGUnLFxuICAnaGVyJyxcbiAgJ2hlcnMnLFxuICAnaGltJyxcbiAgJ2hpcycsXG4gICdob3cnLFxuICAnaG93ZXZlcicsXG4gICdpJyxcbiAgJ2lmJyxcbiAgJ2luJyxcbiAgJ2ludG8nLFxuICAnaXMnLFxuICAnaXQnLFxuICAnaXRzJyxcbiAgJ2p1c3QnLFxuICAnbGVhc3QnLFxuICAnbGV0JyxcbiAgJ2xpa2UnLFxuICAnbGlrZWx5JyxcbiAgJ21heScsXG4gICdtZScsXG4gICdtaWdodCcsXG4gICdtb3N0JyxcbiAgJ211c3QnLFxuICAnbXknLFxuICAnbmVpdGhlcicsXG4gICdubycsXG4gICdub3InLFxuICAnbm90JyxcbiAgJ29mJyxcbiAgJ29mZicsXG4gICdvZnRlbicsXG4gICdvbicsXG4gICdvbmx5JyxcbiAgJ29yJyxcbiAgJ290aGVyJyxcbiAgJ291cicsXG4gICdvd24nLFxuICAncmF0aGVyJyxcbiAgJ3NhaWQnLFxuICAnc2F5JyxcbiAgJ3NheXMnLFxuICAnc2hlJyxcbiAgJ3Nob3VsZCcsXG4gICdzaW5jZScsXG4gICdzbycsXG4gICdzb21lJyxcbiAgJ3RoYW4nLFxuICAndGhhdCcsXG4gICd0aGUnLFxuICAndGhlaXInLFxuICAndGhlbScsXG4gICd0aGVuJyxcbiAgJ3RoZXJlJyxcbiAgJ3RoZXNlJyxcbiAgJ3RoZXknLFxuICAndGhpcycsXG4gICd0aXMnLFxuICAndG8nLFxuICAndG9vJyxcbiAgJ3R3YXMnLFxuICAndXMnLFxuICAnd2FudHMnLFxuICAnd2FzJyxcbiAgJ3dlJyxcbiAgJ3dlcmUnLFxuICAnd2hhdCcsXG4gICd3aGVuJyxcbiAgJ3doZXJlJyxcbiAgJ3doaWNoJyxcbiAgJ3doaWxlJyxcbiAgJ3dobycsXG4gICd3aG9tJyxcbiAgJ3doeScsXG4gICd3aWxsJyxcbiAgJ3dpdGgnLFxuICAnd291bGQnLFxuICAneWV0JyxcbiAgJ3lvdScsXG4gICd5b3VyJ1xuXSlcblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuc3RvcFdvcmRGaWx0ZXIsICdzdG9wV29yZEZpbHRlcicpXG4vKiFcbiAqIGx1bnIudHJpbW1lclxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci50cmltbWVyIGlzIGEgcGlwZWxpbmUgZnVuY3Rpb24gZm9yIHRyaW1taW5nIG5vbiB3b3JkXG4gKiBjaGFyYWN0ZXJzIGZyb20gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIHRva2VucyBiZWZvcmUgdGhleVxuICogZW50ZXIgdGhlIGluZGV4LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gbWF5IG5vdCB3b3JrIGNvcnJlY3RseSBmb3Igbm9uIGxhdGluXG4gKiBjaGFyYWN0ZXJzIGFuZCBzaG91bGQgZWl0aGVyIGJlIHJlbW92ZWQgb3IgYWRhcHRlZCBmb3IgdXNlXG4gKiB3aXRoIGxhbmd1YWdlcyB3aXRoIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKiBAc2VlIGx1bnIuUGlwZWxpbmVcbiAqL1xubHVuci50cmltbWVyID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9eXFxXKy8sICcnKS5yZXBsYWNlKC9cXFcrJC8sICcnKVxuICB9KVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci50cmltbWVyLCAndHJpbW1lcicpXG4vKiFcbiAqIGx1bnIuVG9rZW5TZXRcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgdG9rZW4gc2V0IGlzIHVzZWQgdG8gc3RvcmUgdGhlIHVuaXF1ZSBsaXN0IG9mIGFsbCB0b2tlbnNcbiAqIHdpdGhpbiBhbiBpbmRleC4gVG9rZW4gc2V0cyBhcmUgYWxzbyB1c2VkIHRvIHJlcHJlc2VudCBhblxuICogaW5jb21pbmcgcXVlcnkgdG8gdGhlIGluZGV4LCB0aGlzIHF1ZXJ5IHRva2VuIHNldCBhbmQgaW5kZXhcbiAqIHRva2VuIHNldCBhcmUgdGhlbiBpbnRlcnNlY3RlZCB0byBmaW5kIHdoaWNoIHRva2VucyB0byBsb29rXG4gKiB1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXguXG4gKlxuICogQSB0b2tlbiBzZXQgY2FuIGhvbGQgbXVsdGlwbGUgdG9rZW5zLCBhcyBpbiB0aGUgY2FzZSBvZiB0aGVcbiAqIGluZGV4IHRva2VuIHNldCwgb3IgaXQgY2FuIGhvbGQgYSBzaW5nbGUgdG9rZW4gYXMgaW4gdGhlXG4gKiBjYXNlIG9mIGEgc2ltcGxlIHF1ZXJ5IHRva2VuIHNldC5cbiAqXG4gKiBBZGRpdGlvbmFsbHkgdG9rZW4gc2V0cyBhcmUgdXNlZCB0byBwZXJmb3JtIHdpbGRjYXJkIG1hdGNoaW5nLlxuICogTGVhZGluZywgY29udGFpbmVkIGFuZCB0cmFpbGluZyB3aWxkY2FyZHMgYXJlIHN1cHBvcnRlZCwgYW5kXG4gKiBmcm9tIHRoaXMgZWRpdCBkaXN0YW5jZSBtYXRjaGluZyBjYW4gYWxzbyBiZSBwcm92aWRlZC5cbiAqXG4gKiBUb2tlbiBzZXRzIGFyZSBpbXBsZW1lbnRlZCBhcyBhIG1pbmltYWwgZmluaXRlIHN0YXRlIGF1dG9tYXRhLFxuICogd2hlcmUgYm90aCBjb21tb24gcHJlZml4ZXMgYW5kIHN1ZmZpeGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0b2tlbnMuXG4gKiBUaGlzIGhlbHBzIHRvIHJlZHVjZSB0aGUgc3BhY2UgdXNlZCBmb3Igc3RvcmluZyB0aGUgdG9rZW4gc2V0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZpbmFsID0gZmFsc2VcbiAgdGhpcy5lZGdlcyA9IHt9XG4gIHRoaXMuaWQgPSBsdW5yLlRva2VuU2V0Ll9uZXh0SWRcbiAgbHVuci5Ub2tlblNldC5fbmV4dElkICs9IDFcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgbmV4dCwgYXV0byBpbmNyZW1lbnQsIGlkZW50aWZpZXIgdG8gYXNzaWduXG4gKiB0byBhIG5ldyB0b2tlblNldC5cbiAqXG4gKiBUb2tlblNldHMgcmVxdWlyZSBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGJlIGNvcnJlY3RseSBtaW5pbWlzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5Ub2tlblNldC5fbmV4dElkID0gMVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlblNldCBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBzb3J0ZWQgYXJyYXkgb2Ygd29yZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmdbXX0gYXJyIC0gQSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncyB0byBjcmVhdGUgdGhlIHNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGlucHV0IGFycmF5IGlzIG5vdCBzb3J0ZWQuXG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLlRva2VuU2V0LkJ1aWxkZXJcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnVpbGRlci5pbnNlcnQoYXJyW2ldKVxuICB9XG5cbiAgYnVpbGRlci5maW5pc2goKVxuICByZXR1cm4gYnVpbGRlci5yb290XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCBmcm9tIGEgcXVlcnkgY2xhdXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhdXNlIC0gQSBzaW5nbGUgY2xhdXNlIGZyb20gbHVuci5RdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGF1c2UudGVybSAtIFRoZSBxdWVyeSBjbGF1c2UgdGVybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY2xhdXNlLmVkaXREaXN0YW5jZV0gLSBUaGUgb3B0aW9uYWwgZWRpdCBkaXN0YW5jZSBmb3IgdGhlIHRlcm0uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tQ2xhdXNlID0gZnVuY3Rpb24gKGNsYXVzZSkge1xuICBpZiAoJ2VkaXREaXN0YW5jZScgaW4gY2xhdXNlKSB7XG4gICAgcmV0dXJuIGx1bnIuVG9rZW5TZXQuZnJvbUZ1enp5U3RyaW5nKGNsYXVzZS50ZXJtLCBjbGF1c2UuZWRpdERpc3RhbmNlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21TdHJpbmcoY2xhdXNlLnRlcm0pXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IHJlcHJlc2VudGluZyBhIHNpbmdsZSBzdHJpbmcgd2l0aCBhIHNwZWNpZmllZFxuICogZWRpdCBkaXN0YW5jZS5cbiAqXG4gKiBJbnNlcnRpb25zLCBkZWxldGlvbnMsIHN1YnN0aXR1dGlvbnMgYW5kIHRyYW5zcG9zaXRpb25zIGFyZSBlYWNoXG4gKiB0cmVhdGVkIGFzIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMS5cbiAqXG4gKiBJbmNyZWFzaW5nIHRoZSBhbGxvd2VkIGVkaXQgZGlzdGFuY2Ugd2lsbCBoYXZlIGEgZHJhbWF0aWMgaW1wYWN0XG4gKiBvbiB0aGUgcGVyZm9ybWFuY2Ugb2YgYm90aCBjcmVhdGluZyBhbmQgaW50ZXJzZWN0aW5nIHRoZXNlIFRva2VuU2V0cy5cbiAqIEl0IGlzIGFkdmlzZWQgdG8ga2VlcCB0aGUgZWRpdCBkaXN0YW5jZSBsZXNzIHRoYW4gMy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgdGhlIHRva2VuIHNldCBmcm9tLlxuICogQHBhcmFtIHtudW1iZXJ9IGVkaXREaXN0YW5jZSAtIFRoZSBhbGxvd2VkIGVkaXQgZGlzdGFuY2UgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7bHVuci5WZWN0b3J9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUZ1enp5U3RyaW5nID0gZnVuY3Rpb24gKHN0ciwgZWRpdERpc3RhbmNlKSB7XG4gIHZhciByb290ID0gbmV3IGx1bnIuVG9rZW5TZXRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIG5vZGU6IHJvb3QsXG4gICAgZWRpdHNSZW1haW5pbmc6IGVkaXREaXN0YW5jZSxcbiAgICBzdHI6IHN0clxuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICB2YXIgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gbm8gZWRpdFxuICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNoYXIgPSBmcmFtZS5zdHIuY2hhckF0KDApLFxuICAgICAgICAgIG5vRWRpdE5vZGVcblxuICAgICAgaWYgKGNoYXIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICBub0VkaXROb2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhcl0gPSBub0VkaXROb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgbm9FZGl0Tm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IG5vRWRpdE5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsZXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIGRlbGV0aW9uIGlmIHdlIGhhdmUgZW5vdWdoIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhcmUgY2hhcmFjdGVycyBsZWZ0IHRvIGRlbGV0ZSBpbiB0aGUgc3RyaW5nXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGNoYXIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIGRlbGV0aW9uTm9kZVxuXG4gICAgICBpZiAoY2hhciBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhcl0gPSBkZWxldGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPD0gMikge1xuICAgICAgICBkZWxldGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBkZWxldGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8ganVzdCByZW1vdmluZyB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSB0aGUgc3RyXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgIGZyYW1lLm5vZGUuZmluYWwgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gc3Vic3RpdHV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBzdWJzdGl0dXRpb24gaWYgd2UgaGF2ZSBlbm91Z2ggZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIGlmIHRoZXJlIGFyZSBjaGFyYWN0ZXJzIGxlZnQgdG8gc3Vic3RpdHV0ZVxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+PSAxKSB7XG4gICAgICBpZiAoXCIqXCIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB2YXIgc3Vic3RpdHV0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3Vic3RpdHV0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gc3Vic3RpdHV0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBzdWJzdGl0dXRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnNlcnRpb25cbiAgICAvLyBjYW4gb25seSBkbyBpbnNlcnRpb24gaWYgdGhlcmUgYXJlIGVkaXRzIHJlbWFpbmluZ1xuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tcIipcIl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tcIipcIl0gPSBpbnNlcnRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5zZXJ0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGluc2VydGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0clxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRyYW5zcG9zaXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHRyYW5zcG9zaXRpb24gaWYgdGhlcmUgYXJlIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCB0aGVyZSBhcmUgZW5vdWdoIGNoYXJhY3RlcnMgdG8gdHJhbnNwb3NlXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGNoYXJBID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBjaGFyQiA9IGZyYW1lLnN0ci5jaGFyQXQoMSksXG4gICAgICAgICAgdHJhbnNwb3NlTm9kZVxuXG4gICAgICBpZiAoY2hhckIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyQl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJCXSA9IHRyYW5zcG9zZU5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogdHJhbnNwb3NlTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogY2hhckEgKyBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlblNldCBmcm9tIGEgc3RyaW5nLlxuICpcbiAqIFRoZSBzdHJpbmcgbWF5IGNvbnRhaW4gb25lIG9yIG1vcmUgd2lsZGNhcmQgY2hhcmFjdGVycyAoKilcbiAqIHRoYXQgd2lsbCBhbGxvdyB3aWxkY2FyZCBtYXRjaGluZyB3aGVuIGludGVyc2VjdGluZyB3aXRoXG4gKiBhbm90aGVyIFRva2VuU2V0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGNyZWF0ZSBhIFRva2VuU2V0IGZyb20uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgbm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgcm9vdCA9IG5vZGUsXG4gICAgICB3aWxkY2FyZEZvdW5kID0gZmFsc2VcblxuICAvKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBjaGFyYWN0ZXJzIHdpdGhpbiB0aGUgcGFzc2VkIHN0cmluZ1xuICAgKiBhcHBlbmRpbmcgYSBub2RlIGZvciBlYWNoIGNoYXJhY3Rlci5cbiAgICpcbiAgICogQXMgc29vbiBhcyBhIHdpbGRjYXJkIGNoYXJhY3RlciBpcyBmb3VuZCB0aGVuIGEgc2VsZlxuICAgKiByZWZlcmVuY2luZyBlZGdlIGlzIGludHJvZHVjZWQgdG8gY29udGludWFsbHkgbWF0Y2hcbiAgICogYW55IG51bWJlciBvZiBhbnkgY2hhcmFjdGVycy5cbiAgICovXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgY2hhciA9IHN0cltpXSxcbiAgICAgICAgZmluYWwgPSAoaSA9PSBsZW4gLSAxKVxuXG4gICAgaWYgKGNoYXIgPT0gXCIqXCIpIHtcbiAgICAgIHdpbGRjYXJkRm91bmQgPSB0cnVlXG4gICAgICBub2RlLmVkZ2VzW2NoYXJdID0gbm9kZVxuICAgICAgbm9kZS5maW5hbCA9IGZpbmFsXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG5cbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0XG4gICAgICBub2RlID0gbmV4dFxuXG4gICAgICAvLyBUT0RPOiBpcyB0aGlzIG5lZWRlZCBhbnltb3JlP1xuICAgICAgaWYgKHdpbGRjYXJkRm91bmQpIHtcbiAgICAgICAgbm9kZS5lZGdlc1tcIipcIl0gPSByb290XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGlzIFRva2VuU2V0IGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd29yZHMgPSBbXVxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcHJlZml4OiBcIlwiLFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKCksXG4gICAgICAgIGVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIGxlbiA9IGVkZ2VzLmxlbmd0aFxuXG4gICAgaWYgKGZyYW1lLm5vZGUuZmluYWwpIHtcbiAgICAgIHdvcmRzLnB1c2goZnJhbWUucHJlZml4KVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBlZGdlID0gZWRnZXNbaV1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIHByZWZpeDogZnJhbWUucHJlZml4LmNvbmNhdChlZGdlKSxcbiAgICAgICAgbm9kZTogZnJhbWUubm9kZS5lZGdlc1tlZGdlXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd29yZHNcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBUb2tlblNldC5cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGFsbG93IFRva2VuU2V0cyB0byBiZSB1c2VkIGFzIGtleXNcbiAqIGluIG9iamVjdHMsIGxhcmdlbHkgdG8gYWlkIHRoZSBjb25zdHJ1Y3Rpb24gYW5kIG1pbmltaXNhdGlvblxuICogb2YgYSBUb2tlblNldC4gQXMgc3VjaCBpdCBpcyBub3QgZGVzaWduZWQgdG8gYmUgYSBodW1hblxuICogZnJpZW5kbHkgcmVwcmVzZW50YXRpb24gb2YgdGhlIFRva2VuU2V0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAvLyBOT1RFOiBVc2luZyBPYmplY3Qua2V5cyBoZXJlIGFzIHRoaXMuZWRnZXMgaXMgdmVyeSBsaWtlbHlcbiAgLy8gdG8gZW50ZXIgJ2hhc2gtbW9kZScgd2l0aCBtYW55IGtleXMgYmVpbmcgYWRkZWRcbiAgLy9cbiAgLy8gYXZvaWRpbmcgYSBmb3ItaW4gbG9vcCBoZXJlIGFzIGl0IGxlYWRzIHRvIHRoZSBmdW5jdGlvblxuICAvLyBiZWluZyBkZS1vcHRpbWlzZWQgKGF0IGxlYXN0IGluIFY4KS4gRnJvbSBzb21lIHNpbXBsZVxuICAvLyBiZW5jaG1hcmtzIHRoZSBwZXJmb3JtYW5jZSBpcyBjb21wYXJhYmxlLCBidXQgYWxsb3dpbmdcbiAgLy8gVjggdG8gb3B0aW1pemUgbWF5IG1lYW4gZWFzeSBwZXJmb3JtYW5jZSB3aW5zIGluIHRoZSBmdXR1cmUuXG5cbiAgaWYgKHRoaXMuX3N0cikge1xuICAgIHJldHVybiB0aGlzLl9zdHJcbiAgfVxuXG4gIHZhciBzdHIgPSB0aGlzLmZpbmFsID8gJzEnIDogJzAnLFxuICAgICAgbGFiZWxzID0gT2JqZWN0LmtleXModGhpcy5lZGdlcykuc29ydCgpLFxuICAgICAgbGVuID0gbGFiZWxzLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbGFiZWwgPSBsYWJlbHNbaV0sXG4gICAgICAgIG5vZGUgPSB0aGlzLmVkZ2VzW2xhYmVsXVxuXG4gICAgc3RyID0gc3RyICsgbGFiZWwgKyBub2RlLmlkXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBUb2tlblNldCB0aGF0IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2ZcbiAqIHRoaXMgVG9rZW5TZXQgYW5kIHRoZSBwYXNzZWQgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpbnRlcnNlY3Rpb24gd2lsbCB0YWtlIGludG8gYWNjb3VudCBhbnkgd2lsZGNhcmRzXG4gKiBjb250YWluZWQgd2l0aGluIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5TZXR9IGIgLSBBbiBvdGhlciBUb2tlblNldCB0byBpbnRlcnNlY3Qgd2l0aC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAoYikge1xuICB2YXIgb3V0cHV0ID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICBmcmFtZSA9IHVuZGVmaW5lZFxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcU5vZGU6IGIsXG4gICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgbm9kZTogdGhpc1xuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBmcmFtZSA9IHN0YWNrLnBvcCgpXG5cbiAgICAvLyBOT1RFOiBBcyB3aXRoIHRoZSAjdG9TdHJpbmcgbWV0aG9kLCB3ZSBhcmUgdXNpbmdcbiAgICAvLyBPYmplY3Qua2V5cyBhbmQgYSBmb3IgbG9vcCBpbnN0ZWFkIG9mIGEgZm9yLWluIGxvb3BcbiAgICAvLyBhcyBib3RoIG9mIHRoZXNlIG9iamVjdHMgZW50ZXIgJ2hhc2gnIG1vZGUsIGNhdXNpbmdcbiAgICAvLyB0aGUgZnVuY3Rpb24gdG8gYmUgZGUtb3B0aW1pc2VkIGluIFY4XG4gICAgdmFyIHFFZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLnFOb2RlLmVkZ2VzKSxcbiAgICAgICAgcUxlbiA9IHFFZGdlcy5sZW5ndGgsXG4gICAgICAgIG5FZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLm5vZGUuZWRnZXMpLFxuICAgICAgICBuTGVuID0gbkVkZ2VzLmxlbmd0aFxuXG4gICAgZm9yICh2YXIgcSA9IDA7IHEgPCBxTGVuOyBxKyspIHtcbiAgICAgIHZhciBxRWRnZSA9IHFFZGdlc1txXVxuXG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG5MZW47IG4rKykge1xuICAgICAgICB2YXIgbkVkZ2UgPSBuRWRnZXNbbl1cblxuICAgICAgICBpZiAobkVkZ2UgPT0gcUVkZ2UgfHwgcUVkZ2UgPT0gJyonKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW25FZGdlXSxcbiAgICAgICAgICAgICAgcU5vZGUgPSBmcmFtZS5xTm9kZS5lZGdlc1txRWRnZV0sXG4gICAgICAgICAgICAgIGZpbmFsID0gbm9kZS5maW5hbCAmJiBxTm9kZS5maW5hbCxcbiAgICAgICAgICAgICAgbmV4dCA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgaWYgKG5FZGdlIGluIGZyYW1lLm91dHB1dC5lZGdlcykge1xuICAgICAgICAgICAgLy8gYW4gZWRnZSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBjaGFyYWN0ZXJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY3JlYXRlIGEgbmV3IG5vZGUsIGp1c3Qgc2V0IHRoZSBmaW5hbGl0eVxuICAgICAgICAgICAgLy8gYml0IHVubGVzcyB0aGlzIG5vZGUgaXMgYWxyZWFkeSBmaW5hbFxuICAgICAgICAgICAgbmV4dCA9IGZyYW1lLm91dHB1dC5lZGdlc1tuRWRnZV1cbiAgICAgICAgICAgIG5leHQuZmluYWwgPSBuZXh0LmZpbmFsIHx8IGZpbmFsXG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gZWRnZSBleGlzdHMgeWV0LCBtdXN0IGNyZWF0ZSBvbmVcbiAgICAgICAgICAgIC8vIHNldCB0aGUgZmluYWxpdHkgYml0IGFuZCBpbnNlcnQgaXRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIG91dHB1dFxuICAgICAgICAgICAgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gZmluYWxcbiAgICAgICAgICAgIGZyYW1lLm91dHB1dC5lZGdlc1tuRWRnZV0gPSBuZXh0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBxTm9kZTogcU5vZGUsXG4gICAgICAgICAgICBvdXRwdXQ6IG5leHQsXG4gICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cbmx1bnIuVG9rZW5TZXQuQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSBcIlwiXG4gIHRoaXMucm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gIHRoaXMudW5jaGVja2VkTm9kZXMgPSBbXVxuICB0aGlzLm1pbmltaXplZE5vZGVzID0ge31cbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAod29yZCkge1xuICB2YXIgbm9kZSxcbiAgICAgIGNvbW1vblByZWZpeCA9IDBcblxuICBpZiAod29yZCA8IHRoaXMucHJldmlvdXNXb3JkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yIChcIk91dCBvZiBvcmRlciB3b3JkIGluc2VydGlvblwiKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aCAmJiBpIDwgdGhpcy5wcmV2aW91c1dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAod29yZFtpXSAhPSB0aGlzLnByZXZpb3VzV29yZFtpXSkgYnJlYWtcbiAgICBjb21tb25QcmVmaXgrK1xuICB9XG5cbiAgdGhpcy5taW5pbWl6ZShjb21tb25QcmVmaXgpXG5cbiAgaWYgKHRoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoID09IDApIHtcbiAgICBub2RlID0gdGhpcy5yb290XG4gIH0gZWxzZSB7XG4gICAgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbdGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggLSAxXS5jaGlsZFxuICB9XG5cbiAgZm9yICh2YXIgaSA9IGNvbW1vblByZWZpeDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV4dE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgICAgY2hhciA9IHdvcmRbaV1cblxuICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0Tm9kZVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wdXNoKHtcbiAgICAgIHBhcmVudDogbm9kZSxcbiAgICAgIGNoYXI6IGNoYXIsXG4gICAgICBjaGlsZDogbmV4dE5vZGVcbiAgICB9KVxuXG4gICAgbm9kZSA9IG5leHROb2RlXG4gIH1cblxuICBub2RlLmZpbmFsID0gdHJ1ZVxuICB0aGlzLnByZXZpb3VzV29yZCA9IHdvcmRcbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubWluaW1pemUoMClcbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5taW5pbWl6ZSA9IGZ1bmN0aW9uIChkb3duVG8pIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSBkb3duVG87IGktLSkge1xuICAgIHZhciBub2RlID0gdGhpcy51bmNoZWNrZWROb2Rlc1tpXSxcbiAgICAgICAgY2hpbGRLZXkgPSBub2RlLmNoaWxkLnRvU3RyaW5nKClcblxuICAgIGlmIChjaGlsZEtleSBpbiB0aGlzLm1pbmltaXplZE5vZGVzKSB7XG4gICAgICBub2RlLnBhcmVudC5lZGdlc1tub2RlLmNoYXJdID0gdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FjaGUgdGhlIGtleSBmb3IgdGhpcyBub2RlIHNpbmNlXG4gICAgICAvLyB3ZSBrbm93IGl0IGNhbid0IGNoYW5nZSBhbnltb3JlXG4gICAgICBub2RlLmNoaWxkLl9zdHIgPSBjaGlsZEtleVxuXG4gICAgICB0aGlzLm1pbmltaXplZE5vZGVzW2NoaWxkS2V5XSA9IG5vZGUuY2hpbGRcbiAgICB9XG5cbiAgICB0aGlzLnVuY2hlY2tlZE5vZGVzLnBvcCgpXG4gIH1cbn1cbi8qIVxuICogbHVuci5JbmRleFxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQW4gaW5kZXggY29udGFpbnMgdGhlIGJ1aWx0IGluZGV4IG9mIGFsbCBkb2N1bWVudHMgYW5kIHByb3ZpZGVzIGEgcXVlcnkgaW50ZXJmYWNlXG4gKiB0byB0aGUgaW5kZXguXG4gKlxuICogVXN1YWxseSBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCB3aWxsIG5vdCBiZSBjcmVhdGVkIHVzaW5nIHRoaXMgY29uc3RydWN0b3IsIGluc3RlYWRcbiAqIGx1bnIuQnVpbGRlciBzaG91bGQgYmUgdXNlZCB0byBjb25zdHJ1Y3QgbmV3IGluZGV4ZXMsIG9yIGx1bnIuSW5kZXgubG9hZCBzaG91bGQgYmVcbiAqIHVzZWQgdG8gbG9hZCBwcmV2aW91c2x5IGJ1aWx0IGFuZCBzZXJpYWxpemVkIGluZGV4ZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgLSBUaGUgYXR0cmlidXRlcyBvZiB0aGUgYnVpbHQgc2VhcmNoIGluZGV4LlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzLmludmVydGVkSW5kZXggLSBBbiBpbmRleCBvZiB0ZXJtL2ZpZWxkIHRvIGRvY3VtZW50IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgbHVuci5WZWN0b3I+fSBhdHRycy5kb2N1bWVudFZlY3RvcnMgLSBEb2N1bWVudCB2ZWN0b3JzIGtleWVkIGJ5IGRvY3VtZW50IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7bHVuci5Ub2tlblNldH0gYXR0cnMudG9rZW5TZXQgLSBBbiBzZXQgb2YgYWxsIGNvcnB1cyB0b2tlbnMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhdHRycy5maWVsZHMgLSBUaGUgbmFtZXMgb2YgaW5kZXhlZCBkb2N1bWVudCBmaWVsZHMuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmV9IGF0dHJzLnBpcGVsaW5lIC0gVGhlIHBpcGVsaW5lIHRvIHVzZSBmb3Igc2VhcmNoIHRlcm1zLlxuICovXG5sdW5yLkluZGV4ID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHRoaXMuaW52ZXJ0ZWRJbmRleCA9IGF0dHJzLmludmVydGVkSW5kZXhcbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBhdHRycy5maWVsZFZlY3RvcnNcbiAgdGhpcy50b2tlblNldCA9IGF0dHJzLnRva2VuU2V0XG4gIHRoaXMuZmllbGRzID0gYXR0cnMuZmllbGRzXG4gIHRoaXMucGlwZWxpbmUgPSBhdHRycy5waXBlbGluZVxufVxuXG4vKipcbiAqIEEgcmVzdWx0IGNvbnRhaW5zIGRldGFpbHMgb2YgYSBkb2N1bWVudCBtYXRjaGluZyBhIHNlYXJjaCBxdWVyeS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IGx1bnIuSW5kZXh+UmVzdWx0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVmIC0gVGhlIHJlZmVyZW5jZSBvZiB0aGUgZG9jdW1lbnQgdGhpcyByZXN1bHQgcmVwcmVzZW50cy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzY29yZSAtIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSByZXByZXNlbnRpbmcgaG93IHNpbWlsYXIgdGhpcyBkb2N1bWVudCBpcyB0byB0aGUgcXVlcnkuXG4gKiBAcHJvcGVydHkge2x1bnIuTWF0Y2hEYXRhfSBtYXRjaERhdGEgLSBDb250YWlucyBtZXRhZGF0YSBhYm91dCB0aGlzIG1hdGNoIGluY2x1ZGluZyB3aGljaCB0ZXJtKHMpIGNhdXNlZCB0aGUgbWF0Y2guXG4gKi9cblxuLyoqXG4gKiBBbHRob3VnaCBsdW5yIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBxdWVyaWVzIHVzaW5nIGx1bnIuUXVlcnksIGl0IGFsc28gcHJvdmlkZXMgYSBzaW1wbGVcbiAqIHF1ZXJ5IGxhbmd1YWdlIHdoaWNoIGl0c2VsZiBpcyBwYXJzZWQgaW50byBhbiBpbnN0YW5jZSBvZiBsdW5yLlF1ZXJ5LlxuICpcbiAqIEZvciBwcm9ncmFtbWF0aWNhbGx5IGJ1aWxkaW5nIHF1ZXJpZXMgaXQgaXMgYWR2aXNlZCB0byBkaXJlY3RseSB1c2UgbHVuci5RdWVyeSwgdGhlIHF1ZXJ5IGxhbmd1YWdlXG4gKiBpcyBiZXN0IHVzZWQgZm9yIGh1bWFuIGVudGVyZWQgdGV4dCByYXRoZXIgdGhhbiBwcm9ncmFtIGdlbmVyYXRlZCB0ZXh0LlxuICpcbiAqIEF0IGl0cyBzaW1wbGVzdCBxdWVyaWVzIGNhbiBqdXN0IGJlIGEgc2luZ2xlIHRlcm0sIGUuZy4gYGhlbGxvYCwgbXVsdGlwbGUgdGVybXMgYXJlIGFsc28gc3VwcG9ydGVkXG4gKiBhbmQgd2lsbCBiZSBjb21iaW5lZCB3aXRoIE9SLCBlLmcgYGhlbGxvIHdvcmxkYCB3aWxsIG1hdGNoIGRvY3VtZW50cyB0aGF0IGNvbnRhaW4gZWl0aGVyICdoZWxsbydcbiAqIG9yICd3b3JsZCcsIHRob3VnaCB0aG9zZSB0aGF0IGNvbnRhaW4gYm90aCB3aWxsIHJhbmsgaGlnaGVyIGluIHRoZSByZXN1bHRzLlxuICpcbiAqIFdpbGRjYXJkcyBjYW4gYmUgaW5jbHVkZWQgaW4gdGVybXMgdG8gbWF0Y2ggb25lIG9yIG1vcmUgdW5zcGVjaWZpZWQgY2hhcmFjdGVycywgdGhlc2Ugd2lsZGNhcmRzIGNhblxuICogYmUgaW5zZXJ0ZWQgYW55d2hlcmUgd2l0aGluIHRoZSB0ZXJtLCBhbmQgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBjYW4gZXhpc3QgaW4gYSBzaW5nbGUgdGVybS4gQWRkaW5nXG4gKiB3aWxkY2FyZHMgd2lsbCBpbmNyZWFzZSB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyB0aGF0IHdpbGwgYmUgZm91bmQgYnV0IGNhbiBhbHNvIGhhdmUgYSBuZWdhdGl2ZVxuICogaW1wYWN0IG9uIHF1ZXJ5IHBlcmZvcm1hbmNlLCBlc3BlY2lhbGx5IHdpdGggd2lsZGNhcmRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSB0ZXJtLlxuICpcbiAqIFRlcm1zIGNhbiBiZSByZXN0cmljdGVkIHRvIHNwZWNpZmljIGZpZWxkcywgZS5nLiBgdGl0bGU6aGVsbG9gLCBvbmx5IGRvY3VtZW50cyB3aXRoIHRoZSB0ZXJtXG4gKiBoZWxsbyBpbiB0aGUgdGl0bGUgZmllbGQgd2lsbCBtYXRjaCB0aGlzIHF1ZXJ5LiBVc2luZyBhIGZpZWxkIG5vdCBwcmVzZW50IGluIHRoZSBpbmRleCB3aWxsIGxlYWRcbiAqIHRvIGFuIGVycm9yIGJlaW5nIHRocm93bi5cbiAqXG4gKiBNb2RpZmllcnMgY2FuIGFsc28gYmUgYWRkZWQgdG8gdGVybXMsIGx1bnIgc3VwcG9ydHMgZWRpdCBkaXN0YW5jZSBhbmQgYm9vc3QgbW9kaWZpZXJzIG9uIHRlcm1zLiBBIHRlcm1cbiAqIGJvb3N0IHdpbGwgbWFrZSBkb2N1bWVudHMgbWF0Y2hpbmcgdGhhdCB0ZXJtIHNjb3JlIGhpZ2hlciwgZS5nLiBgZm9vXjVgLiBFZGl0IGRpc3RhbmNlIGlzIGFsc28gc3VwcG9ydGVkXG4gKiB0byBwcm92aWRlIGZ1enp5IG1hdGNoaW5nLCBlLmcuICdoZWxsb34yJyB3aWxsIG1hdGNoIGRvY3VtZW50cyB3aXRoIGhlbGxvIHdpdGggYW4gZWRpdCBkaXN0YW5jZSBvZiAyLlxuICogQXZvaWQgbGFyZ2UgdmFsdWVzIGZvciBlZGl0IGRpc3RhbmNlIHRvIGltcHJvdmUgcXVlcnkgcGVyZm9ybWFuY2UuXG4gKlxuICogVG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGUgYmFja3NsYXNoIGNoYXJhY3RlciAnXFwnIGNhbiBiZSB1c2VkLCB0aGlzIGFsbG93cyBzZWFyY2hlcyB0byBpbmNsdWRlXG4gKiBjaGFyYWN0ZXJzIHRoYXQgd291bGQgbm9ybWFsbHkgYmUgY29uc2lkZXJlZCBtb2RpZmllcnMsIGUuZy4gYGZvb1xcfjJgIHdpbGwgc2VhcmNoIGZvciBhIHRlcm0gXCJmb29+MlwiIGluc3RlYWRcbiAqIG9mIGF0dGVtcHRpbmcgdG8gYXBwbHkgYSBib29zdCBvZiAyIHRvIHRoZSBzZWFyY2ggdGVybSBcImZvb1wiLlxuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmd9IGx1bnIuSW5kZXh+UXVlcnlTdHJpbmdcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlNpbXBsZSBzaW5nbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSB0ZXJtIHF1ZXJ5PC9jYXB0aW9uPlxuICogaGVsbG8gd29ybGRcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gc2NvcGVkIHRvIGEgZmllbGQ8L2NhcHRpb24+XG4gKiB0aXRsZTpoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSB3aXRoIGEgYm9vc3Qgb2YgMTA8L2NhcHRpb24+XG4gKiBoZWxsb14xMFxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSB3aXRoIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMjwvY2FwdGlvbj5cbiAqIGhlbGxvfjJcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc2VhcmNoIGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIGx1bnIgcXVlcnkgc3ludGF4LlxuICpcbiAqIFJlc3VsdHMgd2lsbCBiZSByZXR1cm5lZCBzb3J0ZWQgYnkgdGhlaXIgc2NvcmUsIHRoZSBtb3N0IHJlbGV2YW50IHJlc3VsdHNcbiAqIHdpbGwgYmUgcmV0dXJuZWQgZmlyc3QuXG4gKlxuICogRm9yIG1vcmUgcHJvZ3JhbW1hdGljIHF1ZXJ5aW5nIHVzZSBsdW5yLkluZGV4I3F1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7bHVuci5JbmRleH5RdWVyeVN0cmluZ30gcXVlcnlTdHJpbmcgLSBBIHN0cmluZyBjb250YWluaW5nIGEgbHVuciBxdWVyeS5cbiAqIEB0aHJvd3Mge2x1bnIuUXVlcnlQYXJzZUVycm9yfSBJZiB0aGUgcGFzc2VkIHF1ZXJ5IHN0cmluZyBjYW5ub3QgYmUgcGFyc2VkLlxuICogQHJldHVybnMge2x1bnIuSW5kZXh+UmVzdWx0W119XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChxdWVyeVN0cmluZykge1xuICByZXR1cm4gdGhpcy5xdWVyeShmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgcGFyc2VyID0gbmV3IGx1bnIuUXVlcnlQYXJzZXIocXVlcnlTdHJpbmcsIHF1ZXJ5KVxuICAgIHBhcnNlci5wYXJzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogQSBxdWVyeSBidWlsZGVyIGNhbGxiYWNrIHByb3ZpZGVzIGEgcXVlcnkgb2JqZWN0IHRvIGJlIHVzZWQgdG8gZXhwcmVzc1xuICogdGhlIHF1ZXJ5IHRvIHBlcmZvcm0gb24gdGhlIGluZGV4LlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLkluZGV4fnF1ZXJ5QnVpbGRlclxuICogQHBhcmFtIHtsdW5yLlF1ZXJ5fSBxdWVyeSAtIFRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdXAuXG4gKiBAdGhpcyBsdW5yLlF1ZXJ5XG4gKi9cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHF1ZXJ5IGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIHRoZSB5aWVsZGVkIGx1bnIuUXVlcnkgb2JqZWN0LlxuICpcbiAqIElmIHBlcmZvcm1pbmcgcHJvZ3JhbW1hdGljIHF1ZXJpZXMgYWdhaW5zdCB0aGUgaW5kZXgsIHRoaXMgbWV0aG9kIGlzIHByZWZlcnJlZFxuICogb3ZlciBsdW5yLkluZGV4I3NlYXJjaCBzbyBhcyB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBxdWVyeSBwYXJzaW5nIG92ZXJoZWFkLlxuICpcbiAqIEEgcXVlcnkgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBleHByZXNzIHRoZSBxdWVyeSB0byBiZSBydW4gYWdhaW5zdCB0aGUgaW5kZXguXG4gKlxuICogTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgZnVuY3Rpb24gdGFrZXMgYSBjYWxsYmFjayBwYXJhbWV0ZXIgaXQgaXMgX25vdF8gYW5cbiAqIGFzeW5jaHJvbm91cyBvcGVyYXRpb24sIHRoZSBjYWxsYmFjayBpcyBqdXN0IHlpZWxkZWQgYSBxdWVyeSBvYmplY3QgdG8gYmVcbiAqIGN1c3RvbWl6ZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4fnF1ZXJ5QnVpbGRlcn0gZm4gLSBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBidWlsZCB0aGUgcXVlcnkuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gZm9yIGVhY2ggcXVlcnkgY2xhdXNlXG4gIC8vICogcHJvY2VzcyB0ZXJtc1xuICAvLyAqIGV4cGFuZCB0ZXJtcyBmcm9tIHRva2VuIHNldFxuICAvLyAqIGZpbmQgbWF0Y2hpbmcgZG9jdW1lbnRzIGFuZCBtZXRhZGF0YVxuICAvLyAqIGdldCBkb2N1bWVudCB2ZWN0b3JzXG4gIC8vICogc2NvcmUgZG9jdW1lbnRzXG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGx1bnIuUXVlcnkodGhpcy5maWVsZHMpLFxuICAgICAgbWF0Y2hpbmdGaWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcXVlcnlWZWN0b3JzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHRlcm1GaWVsZENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZuLmNhbGwocXVlcnksIHF1ZXJ5KVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnkuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogVW5sZXNzIHRoZSBwaXBlbGluZSBoYXMgYmVlbiBkaXNhYmxlZCBmb3IgdGhpcyB0ZXJtLCB3aGljaCBpc1xuICAgICAqIHRoZSBjYXNlIGZvciB0ZXJtcyB3aXRoIHdpbGRjYXJkcywgd2UgbmVlZCB0byBwYXNzIHRoZSBjbGF1c2VcbiAgICAgKiB0ZXJtIHRocm91Z2ggdGhlIHNlYXJjaCBwaXBlbGluZS4gQSBwaXBlbGluZSByZXR1cm5zIGFuIGFycmF5XG4gICAgICogb2YgcHJvY2Vzc2VkIHRlcm1zLiBQaXBlbGluZSBmdW5jdGlvbnMgbWF5IGV4cGFuZCB0aGUgcGFzc2VkXG4gICAgICogdGVybSwgd2hpY2ggbWVhbnMgd2UgbWF5IGVuZCB1cCBwZXJmb3JtaW5nIG11bHRpcGxlIGluZGV4IGxvb2t1cHNcbiAgICAgKiBmb3IgYSBzaW5nbGUgcXVlcnkgdGVybS5cbiAgICAgKi9cbiAgICB2YXIgY2xhdXNlID0gcXVlcnkuY2xhdXNlc1tpXSxcbiAgICAgICAgdGVybXMgPSBudWxsXG5cbiAgICBpZiAoY2xhdXNlLnVzZVBpcGVsaW5lKSB7XG4gICAgICB0ZXJtcyA9IHRoaXMucGlwZWxpbmUucnVuU3RyaW5nKGNsYXVzZS50ZXJtKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtcyA9IFtjbGF1c2UudGVybV1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHRlcm1zLmxlbmd0aDsgbSsrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW21dXG5cbiAgICAgIC8qXG4gICAgICAgKiBFYWNoIHRlcm0gcmV0dXJuZWQgZnJvbSB0aGUgcGlwZWxpbmUgbmVlZHMgdG8gdXNlIHRoZSBzYW1lIHF1ZXJ5XG4gICAgICAgKiBjbGF1c2Ugb2JqZWN0LCBlLmcuIHRoZSBzYW1lIGJvb3N0IGFuZCBvciBlZGl0IGRpc3RhbmNlLiBUaGVcbiAgICAgICAqIHNpbXBsZXN0IHdheSB0byBkbyB0aGlzIGlzIHRvIHJlLXVzZSB0aGUgY2xhdXNlIG9iamVjdCBidXQgbXV0YXRlXG4gICAgICAgKiBpdHMgdGVybSBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgY2xhdXNlLnRlcm0gPSB0ZXJtXG5cbiAgICAgIC8qXG4gICAgICAgKiBGcm9tIHRoZSB0ZXJtIGluIHRoZSBjbGF1c2Ugd2UgY3JlYXRlIGEgdG9rZW4gc2V0IHdoaWNoIHdpbGwgdGhlblxuICAgICAgICogYmUgdXNlZCB0byBpbnRlcnNlY3QgdGhlIGluZGV4ZXMgdG9rZW4gc2V0IHRvIGdldCBhIGxpc3Qgb2YgdGVybXNcbiAgICAgICAqIHRvIGxvb2t1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXhcbiAgICAgICAqL1xuICAgICAgdmFyIHRlcm1Ub2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZShjbGF1c2UpLFxuICAgICAgICAgIGV4cGFuZGVkVGVybXMgPSB0aGlzLnRva2VuU2V0LmludGVyc2VjdCh0ZXJtVG9rZW5TZXQpLnRvQXJyYXkoKVxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV4cGFuZGVkVGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLypcbiAgICAgICAgICogRm9yIGVhY2ggdGVybSBnZXQgdGhlIHBvc3RpbmcgYW5kIHRlcm1JbmRleCwgdGhpcyBpcyByZXF1aXJlZCBmb3JcbiAgICAgICAgICogYnVpbGRpbmcgdGhlIHF1ZXJ5IHZlY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBleHBhbmRlZFRlcm0gPSBleHBhbmRlZFRlcm1zW2pdLFxuICAgICAgICAgICAgcG9zdGluZyA9IHRoaXMuaW52ZXJ0ZWRJbmRleFtleHBhbmRlZFRlcm1dLFxuICAgICAgICAgICAgdGVybUluZGV4ID0gcG9zdGluZy5faW5kZXhcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIEZvciBlYWNoIGZpZWxkIHRoYXQgdGhpcyBxdWVyeSB0ZXJtIGlzIHNjb3BlZCBieSAoYnkgZGVmYXVsdFxuICAgICAgICAgICAqIGFsbCBmaWVsZHMgYXJlIGluIHNjb3BlKSB3ZSBuZWVkIHRvIGdldCBhbGwgdGhlIGRvY3VtZW50IHJlZnNcbiAgICAgICAgICAgKiB0aGF0IGhhdmUgdGhpcyB0ZXJtIGluIHRoYXQgZmllbGQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGUgcG9zdGluZyBpcyB0aGUgZW50cnkgaW4gdGhlIGludmVydGVkSW5kZXggZm9yIHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIHRlcm0gZnJvbSBhYm92ZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdLFxuICAgICAgICAgICAgICBmaWVsZFBvc3RpbmcgPSBwb3N0aW5nW2ZpZWxkXSxcbiAgICAgICAgICAgICAgbWF0Y2hpbmdEb2N1bWVudFJlZnMgPSBPYmplY3Qua2V5cyhmaWVsZFBvc3RpbmcpLFxuICAgICAgICAgICAgICB0ZXJtRmllbGQgPSBleHBhbmRlZFRlcm0gKyBcIi9cIiArIGZpZWxkXG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFRvIHN1cHBvcnQgZmllbGQgbGV2ZWwgYm9vc3RzIGEgcXVlcnkgdmVjdG9yIGlzIGNyZWF0ZWQgcGVyXG4gICAgICAgICAgICogZmllbGQuIFRoaXMgdmVjdG9yIGlzIHBvcHVsYXRlZCB1c2luZyB0aGUgdGVybUluZGV4IGZvdW5kIGZvclxuICAgICAgICAgICAqIHRoZSB0ZXJtIGFuZCBhIHVuaXQgdmFsdWUgd2l0aCB0aGUgYXBwcm9wcmlhdGUgYm9vc3QgYXBwbGllZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIElmIHRoZSBxdWVyeSB2ZWN0b3IgZm9yIHRoaXMgZmllbGQgZG9lcyBub3QgZXhpc3QgeWV0IGl0IG5lZWRzXG4gICAgICAgICAgICogdG8gYmUgY3JlYXRlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAocXVlcnlWZWN0b3JzW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVZlY3RvcnNbZmllbGRdID0gbmV3IGx1bnIuVmVjdG9yXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBVc2luZyB1cHNlcnQgYmVjYXVzZSB0aGVyZSBjb3VsZCBhbHJlYWR5IGJlIGFuIGVudHJ5IGluIHRoZSB2ZWN0b3JcbiAgICAgICAgICAgKiBmb3IgdGhlIHRlcm0gd2UgYXJlIHdvcmtpbmcgd2l0aC4gSW4gdGhhdCBjYXNlIHdlIGp1c3QgYWRkIHRoZSBzY29yZXNcbiAgICAgICAgICAgKiB0b2dldGhlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBxdWVyeVZlY3RvcnNbZmllbGRdLnVwc2VydCh0ZXJtSW5kZXgsIDEgKiBjbGF1c2UuYm9vc3QsIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICsgYiB9KVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgd2UndmUgYWxyZWFkeSBzZWVuIHRoaXMgdGVybSwgZmllbGQgY29tYm8gdGhlbiB3ZSd2ZSBhbHJlYWR5IGNvbGxlY3RlZFxuICAgICAgICAgICAqIHRoZSBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhLCBubyBuZWVkIHRvIGdvIHRocm91Z2ggYWxsIHRoYXQgYWdhaW5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAodGVybUZpZWxkQ2FjaGVbdGVybUZpZWxkXSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IG1hdGNoaW5nRG9jdW1lbnRSZWZzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogQWxsIG1ldGFkYXRhIGZvciB0aGlzIHRlcm0vZmllbGQvZG9jdW1lbnQgdHJpcGxlXG4gICAgICAgICAgICAgKiBhcmUgdGhlbiBleHRyYWN0ZWQgYW5kIGNvbGxlY3RlZCBpbnRvIGFuIGluc3RhbmNlXG4gICAgICAgICAgICAgKiBvZiBsdW5yLk1hdGNoRGF0YSByZWFkeSB0byBiZSByZXR1cm5lZCBpbiB0aGUgcXVlcnlcbiAgICAgICAgICAgICAqIHJlc3VsdHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nRG9jdW1lbnRSZWYgPSBtYXRjaGluZ0RvY3VtZW50UmVmc1tsXSxcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0ZpZWxkUmVmID0gbmV3IGx1bnIuRmllbGRSZWYgKG1hdGNoaW5nRG9jdW1lbnRSZWYsIGZpZWxkKSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IGZpZWxkUG9zdGluZ1ttYXRjaGluZ0RvY3VtZW50UmVmXSxcbiAgICAgICAgICAgICAgICBmaWVsZE1hdGNoXG5cbiAgICAgICAgICAgIGlmICgoZmllbGRNYXRjaCA9IG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdID0gbmV3IGx1bnIuTWF0Y2hEYXRhIChleHBhbmRlZFRlcm0sIGZpZWxkLCBtZXRhZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpZWxkTWF0Y2guYWRkKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGVybUZpZWxkQ2FjaGVbdGVybUZpZWxkXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBtYXRjaGluZ0ZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKG1hdGNoaW5nRmllbGRzKSxcbiAgICAgIHJlc3VsdHMgPSBbXSxcbiAgICAgIG1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGluZ0ZpZWxkUmVmcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogQ3VycmVudGx5IHdlIGhhdmUgZG9jdW1lbnQgZmllbGRzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LCBidXQgd2VcbiAgICAgKiBuZWVkIHRvIHJldHVybiBkb2N1bWVudHMuIFRoZSBtYXRjaERhdGEgYW5kIHNjb3JlcyBhcmUgY29tYmluZWRcbiAgICAgKiBmcm9tIG11bHRpcGxlIGZpZWxkcyBiZWxvbmdpbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBTY29yZXMgYXJlIGNhbGN1bGF0ZWQgYnkgZmllbGQsIHVzaW5nIHRoZSBxdWVyeSB2ZWN0b3JzIGNyZWF0ZWRcbiAgICAgKiBhYm92ZSwgYW5kIGNvbWJpbmVkIGludG8gYSBmaW5hbCBkb2N1bWVudCBzY29yZSB1c2luZyBhZGRpdGlvbi5cbiAgICAgKi9cbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcobWF0Y2hpbmdGaWVsZFJlZnNbaV0pLFxuICAgICAgICBkb2NSZWYgPSBmaWVsZFJlZi5kb2NSZWYsXG4gICAgICAgIGZpZWxkVmVjdG9yID0gdGhpcy5maWVsZFZlY3RvcnNbZmllbGRSZWZdLFxuICAgICAgICBzY29yZSA9IHF1ZXJ5VmVjdG9yc1tmaWVsZFJlZi5maWVsZE5hbWVdLnNpbWlsYXJpdHkoZmllbGRWZWN0b3IpLFxuICAgICAgICBkb2NNYXRjaFxuXG4gICAgaWYgKChkb2NNYXRjaCA9IG1hdGNoZXNbZG9jUmVmXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9jTWF0Y2guc2NvcmUgKz0gc2NvcmVcbiAgICAgIGRvY01hdGNoLm1hdGNoRGF0YS5jb21iaW5lKG1hdGNoaW5nRmllbGRzW2ZpZWxkUmVmXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoID0ge1xuICAgICAgICByZWY6IGRvY1JlZixcbiAgICAgICAgc2NvcmU6IHNjb3JlLFxuICAgICAgICBtYXRjaERhdGE6IG1hdGNoaW5nRmllbGRzW2ZpZWxkUmVmXVxuICAgICAgfVxuICAgICAgbWF0Y2hlc1tkb2NSZWZdID0gbWF0Y2hcbiAgICAgIHJlc3VsdHMucHVzaChtYXRjaClcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBTb3J0IHRoZSByZXN1bHRzIG9iamVjdHMgYnkgc2NvcmUsIGhpZ2hlc3QgZmlyc3QuXG4gICAqL1xuICByZXR1cm4gcmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlXG4gIH0pXG59XG5cbi8qKlxuICogUHJlcGFyZXMgdGhlIGluZGV4IGZvciBKU09OIHNlcmlhbGl6YXRpb24uXG4gKlxuICogVGhlIHNjaGVtYSBmb3IgdGhpcyBKU09OIGJsb2Igd2lsbCBiZSBkZXNjcmliZWQgaW4gYVxuICogc2VwYXJhdGUgSlNPTiBzY2hlbWEgZmlsZS5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpbnZlcnRlZEluZGV4ID0gT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KVxuICAgIC5zb3J0KClcbiAgICAubWFwKGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICByZXR1cm4gW3Rlcm0sIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXV1cbiAgICB9LCB0aGlzKVxuXG4gIHZhciBmaWVsZFZlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVmVjdG9ycylcbiAgICAubWFwKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHJldHVybiBbcmVmLCB0aGlzLmZpZWxkVmVjdG9yc1tyZWZdLnRvSlNPTigpXVxuICAgIH0sIHRoaXMpXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiBsdW5yLnZlcnNpb24sXG4gICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcbiAgICBmaWVsZFZlY3RvcnM6IGZpZWxkVmVjdG9ycyxcbiAgICBpbnZlcnRlZEluZGV4OiBpbnZlcnRlZEluZGV4LFxuICAgIHBpcGVsaW5lOiB0aGlzLnBpcGVsaW5lLnRvSlNPTigpXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGl6ZWRJbmRleCAtIEEgcHJldmlvdXNseSBzZXJpYWxpemVkIGx1bnIuSW5kZXhcbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4fVxuICovXG5sdW5yLkluZGV4LmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXplZEluZGV4KSB7XG4gIHZhciBhdHRycyA9IHt9LFxuICAgICAgZmllbGRWZWN0b3JzID0ge30sXG4gICAgICBzZXJpYWxpemVkVmVjdG9ycyA9IHNlcmlhbGl6ZWRJbmRleC5maWVsZFZlY3RvcnMsXG4gICAgICBpbnZlcnRlZEluZGV4ID0ge30sXG4gICAgICBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleCA9IHNlcmlhbGl6ZWRJbmRleC5pbnZlcnRlZEluZGV4LFxuICAgICAgdG9rZW5TZXRCdWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlcixcbiAgICAgIHBpcGVsaW5lID0gbHVuci5QaXBlbGluZS5sb2FkKHNlcmlhbGl6ZWRJbmRleC5waXBlbGluZSlcblxuICBpZiAoc2VyaWFsaXplZEluZGV4LnZlcnNpb24gIT0gbHVuci52ZXJzaW9uKSB7XG4gICAgbHVuci51dGlscy53YXJuKFwiVmVyc2lvbiBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgc2VyaWFsaXNlZCBpbmRleC4gQ3VycmVudCB2ZXJzaW9uIG9mIGx1bnIgJ1wiICsgbHVuci52ZXJzaW9uICsgXCInIGRvZXMgbm90IG1hdGNoIHNlcmlhbGl6ZWQgaW5kZXggJ1wiICsgc2VyaWFsaXplZEluZGV4LnZlcnNpb24gKyBcIidcIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZFZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkVmVjdG9yc1tpXSxcbiAgICAgICAgcmVmID0gdHVwbGVbMF0sXG4gICAgICAgIGVsZW1lbnRzID0gdHVwbGVbMV1cblxuICAgIGZpZWxkVmVjdG9yc1tyZWZdID0gbmV3IGx1bnIuVmVjdG9yKGVsZW1lbnRzKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4W2ldLFxuICAgICAgICB0ZXJtID0gdHVwbGVbMF0sXG4gICAgICAgIHBvc3RpbmcgPSB0dXBsZVsxXVxuXG4gICAgdG9rZW5TZXRCdWlsZGVyLmluc2VydCh0ZXJtKVxuICAgIGludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gIH1cblxuICB0b2tlblNldEJ1aWxkZXIuZmluaXNoKClcblxuICBhdHRycy5maWVsZHMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRzXG5cbiAgYXR0cnMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG4gIGF0dHJzLmludmVydGVkSW5kZXggPSBpbnZlcnRlZEluZGV4XG4gIGF0dHJzLnRva2VuU2V0ID0gdG9rZW5TZXRCdWlsZGVyLnJvb3RcbiAgYXR0cnMucGlwZWxpbmUgPSBwaXBlbGluZVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleChhdHRycylcbn1cbi8qIVxuICogbHVuci5CdWlsZGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLkJ1aWxkZXIgcGVyZm9ybXMgaW5kZXhpbmcgb24gYSBzZXQgb2YgZG9jdW1lbnRzIGFuZFxuICogcmV0dXJucyBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCByZWFkeSBmb3IgcXVlcnlpbmcuXG4gKlxuICogQWxsIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluZGV4IGlzIGRvbmUgdmlhIHRoZSBidWlsZGVyLCB0aGVcbiAqIGZpZWxkcyB0byBpbmRleCwgdGhlIGRvY3VtZW50IHJlZmVyZW5jZSwgdGhlIHRleHQgcHJvY2Vzc2luZ1xuICogcGlwZWxpbmUgYW5kIGRvY3VtZW50IHNjb3JpbmcgcGFyYW1ldGVycyBhcmUgYWxsIHNldCBvbiB0aGVcbiAqIGJ1aWxkZXIgYmVmb3JlIGluZGV4aW5nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IF9yZWYgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHJlZmVyZW5jZSBmaWVsZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IF9maWVsZHMgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IGZpZWxkcyB0byBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBpbnZlcnRlZEluZGV4IC0gVGhlIGludmVydGVkIGluZGV4IG1hcHMgdGVybXMgdG8gZG9jdW1lbnQgZmllbGRzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50VGVybUZyZXF1ZW5jaWVzIC0gS2VlcHMgdHJhY2sgb2YgZG9jdW1lbnQgdGVybSBmcmVxdWVuY2llcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudExlbmd0aHMgLSBLZWVwcyB0cmFjayBvZiB0aGUgbGVuZ3RoIG9mIGRvY3VtZW50cyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge2x1bnIudG9rZW5pemVyfSB0b2tlbml6ZXIgLSBGdW5jdGlvbiBmb3Igc3BsaXR0aW5nIHN0cmluZ3MgaW50byB0b2tlbnMgZm9yIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBwaXBlbGluZSAtIFRoZSBwaXBlbGluZSBwZXJmb3JtcyB0ZXh0IHByb2Nlc3Npbmcgb24gdG9rZW5zIGJlZm9yZSBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gc2VhcmNoUGlwZWxpbmUgLSBBIHBpcGVsaW5lIGZvciBwcm9jZXNzaW5nIHNlYXJjaCB0ZXJtcyBiZWZvcmUgcXVlcnlpbmcgdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBLZWVwcyB0cmFjayBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyBpbmRleGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9iIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBmaWVsZCBsZW5ndGggbm9ybWFsaXphdGlvbiwgc2V0dGluZyB0aGlzIHRvIDAgZGlzYWJsZWQgbm9ybWFsaXphdGlvbiwgMSBmdWxseSBub3JtYWxpemVzIGZpZWxkIGxlbmd0aHMsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuNzUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2sxIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBob3cgcXVpY2tseSBhbiBpbmNyZWFzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm0gZnJlcXVlbmN5IHNhdHVyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0ZXJtSW5kZXggLSBBIGNvdW50ZXIgaW5jcmVtZW50ZWQgZm9yIGVhY2ggdW5pcXVlIHRlcm0sIHVzZWQgdG8gaWRlbnRpZnkgYSB0ZXJtcyBwb3NpdGlvbiBpbiB0aGUgdmVjdG9yIHNwYWNlLlxuICogQHByb3BlcnR5IHthcnJheX0gbWV0YWRhdGFXaGl0ZWxpc3QgLSBBIGxpc3Qgb2YgbWV0YWRhdGEga2V5cyB0aGF0IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCBmb3IgZW50cnkgaW4gdGhlIGluZGV4LlxuICovXG5sdW5yLkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3JlZiA9IFwiaWRcIlxuICB0aGlzLl9maWVsZHMgPSBbXVxuICB0aGlzLmludmVydGVkSW5kZXggPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXMgPSB7fVxuICB0aGlzLmZpZWxkTGVuZ3RocyA9IHt9XG4gIHRoaXMudG9rZW5pemVyID0gbHVuci50b2tlbml6ZXJcbiAgdGhpcy5waXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG4gIHRoaXMuc2VhcmNoUGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLmRvY3VtZW50Q291bnQgPSAwXG4gIHRoaXMuX2IgPSAwLjc1XG4gIHRoaXMuX2sxID0gMS4yXG4gIHRoaXMudGVybUluZGV4ID0gMFxuICB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0ID0gW11cbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBkb2N1bWVudCBmaWVsZCB1c2VkIGFzIHRoZSBkb2N1bWVudCByZWZlcmVuY2UuIEV2ZXJ5IGRvY3VtZW50IG11c3QgaGF2ZSB0aGlzIGZpZWxkLlxuICogVGhlIHR5cGUgb2YgdGhpcyBmaWVsZCBpbiB0aGUgZG9jdW1lbnQgc2hvdWxkIGJlIGEgc3RyaW5nLCBpZiBpdCBpcyBub3QgYSBzdHJpbmcgaXQgd2lsbCBiZVxuICogY29lcmNlZCBpbnRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgdG9TdHJpbmcuXG4gKlxuICogVGhlIGRlZmF1bHQgcmVmIGlzICdpZCcuXG4gKlxuICogVGhlIHJlZiBzaG91bGQgX25vdF8gYmUgY2hhbmdlZCBkdXJpbmcgaW5kZXhpbmcsIGl0IHNob3VsZCBiZSBzZXQgYmVmb3JlIGFueSBkb2N1bWVudHMgYXJlXG4gKiBhZGRlZCB0byB0aGUgaW5kZXguIENoYW5naW5nIGl0IGR1cmluZyBpbmRleGluZyBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbnQgcmVzdWx0cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gVGhlIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSBmaWVsZCBpbiB0aGUgZG9jdW1lbnQuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24gKHJlZikge1xuICB0aGlzLl9yZWYgPSByZWZcbn1cblxuLyoqXG4gKiBBZGRzIGEgZmllbGQgdG8gdGhlIGxpc3Qgb2YgZG9jdW1lbnQgZmllbGRzIHRoYXQgd2lsbCBiZSBpbmRleGVkLiBFdmVyeSBkb2N1bWVudCBiZWluZ1xuICogaW5kZXhlZCBzaG91bGQgaGF2ZSB0aGlzIGZpZWxkLiBOdWxsIHZhbHVlcyBmb3IgdGhpcyBmaWVsZCBpbiBpbmRleGVkIGRvY3VtZW50cyB3aWxsXG4gKiBub3QgY2F1c2UgZXJyb3JzIGJ1dCB3aWxsIGxpbWl0IHRoZSBjaGFuY2Ugb2YgdGhhdCBkb2N1bWVudCBiZWluZyByZXRyaWV2ZWQgYnkgc2VhcmNoZXMuXG4gKlxuICogQWxsIGZpZWxkcyBzaG91bGQgYmUgYWRkZWQgYmVmb3JlIGFkZGluZyBkb2N1bWVudHMgdG8gdGhlIGluZGV4LiBBZGRpbmcgZmllbGRzIGFmdGVyXG4gKiBhIGRvY3VtZW50IGhhcyBiZWVuIGluZGV4ZWQgd2lsbCBoYXZlIG5vIGVmZmVjdCBvbiBhbHJlYWR5IGluZGV4ZWQgZG9jdW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBuYW1lIG9mIGEgZmllbGQgdG8gaW5kZXggaW4gYWxsIGRvY3VtZW50cy5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICB0aGlzLl9maWVsZHMucHVzaChmaWVsZClcbn1cblxuLyoqXG4gKiBBIHBhcmFtZXRlciB0byB0dW5lIHRoZSBhbW91bnQgb2YgZmllbGQgbGVuZ3RoIG5vcm1hbGlzYXRpb24gdGhhdCBpcyBhcHBsaWVkIHdoZW5cbiAqIGNhbGN1bGF0aW5nIHJlbGV2YW5jZSBzY29yZXMuIEEgdmFsdWUgb2YgMCB3aWxsIGNvbXBsZXRlbHkgZGlzYWJsZSBhbnkgbm9ybWFsaXNhdGlvblxuICogYW5kIGEgdmFsdWUgb2YgMSB3aWxsIGZ1bGx5IG5vcm1hbGlzZSBmaWVsZCBsZW5ndGhzLiBUaGUgZGVmYXVsdCBpcyAwLjc1LiBWYWx1ZXMgb2YgYlxuICogd2lsbCBiZSBjbGFtcGVkIHRvIHRoZSByYW5nZSAwIC0gMS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIGlmIChudW1iZXIgPCAwKSB7XG4gICAgdGhpcy5fYiA9IDBcbiAgfSBlbHNlIGlmIChudW1iZXIgPiAxKSB7XG4gICAgdGhpcy5fYiA9IDFcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9iID0gbnVtYmVyXG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcmFtZXRlciB0aGF0IGNvbnRyb2xzIHRoZSBzcGVlZCBhdCB3aGljaCBhIHJpc2UgaW4gdGVybSBmcmVxdWVuY3kgcmVzdWx0cyBpbiB0ZXJtXG4gKiBmcmVxdWVuY3kgc2F0dXJhdGlvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4yLiBTZXR0aW5nIHRoaXMgdG8gYSBoaWdoZXIgdmFsdWUgd2lsbCBnaXZlXG4gKiBzbG93ZXIgc2F0dXJhdGlvbiBsZXZlbHMsIGEgbG93ZXIgdmFsdWUgd2lsbCByZXN1bHQgaW4gcXVpY2tlciBzYXR1cmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBUaGUgdmFsdWUgdG8gc2V0IGZvciB0aGlzIHR1bmluZyBwYXJhbWV0ZXIuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuazEgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHRoaXMuX2sxID0gbnVtYmVyXG59XG5cbi8qKlxuICogQWRkcyBhIGRvY3VtZW50IHRvIHRoZSBpbmRleC5cbiAqXG4gKiBCZWZvcmUgYWRkaW5nIGZpZWxkcyB0byB0aGUgaW5kZXggdGhlIGluZGV4IHNob3VsZCBoYXZlIGJlZW4gZnVsbHkgc2V0dXAsIHdpdGggdGhlIGRvY3VtZW50XG4gKiByZWYgYW5kIGFsbCBmaWVsZHMgdG8gaW5kZXggYWxyZWFkeSBoYXZpbmcgYmVlbiBzcGVjaWZpZWQuXG4gKlxuICogVGhlIGRvY3VtZW50IG11c3QgaGF2ZSBhIGZpZWxkIG5hbWUgYXMgc3BlY2lmaWVkIGJ5IHRoZSByZWYgKGJ5IGRlZmF1bHQgdGhpcyBpcyAnaWQnKSBhbmRcbiAqIGl0IHNob3VsZCBoYXZlIGFsbCBmaWVsZHMgZGVmaW5lZCBmb3IgaW5kZXhpbmcsIHRob3VnaCBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXMgd2lsbCBub3RcbiAqIGNhdXNlIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZG9jIC0gVGhlIGRvY3VtZW50IHRvIGFkZCB0byB0aGUgaW5kZXguXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGRvYykge1xuICB2YXIgZG9jUmVmID0gZG9jW3RoaXMuX3JlZl1cblxuICB0aGlzLmRvY3VtZW50Q291bnQgKz0gMVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IHRoaXMuX2ZpZWxkc1tpXSxcbiAgICAgICAgZmllbGQgPSBkb2NbZmllbGROYW1lXSxcbiAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbml6ZXIoZmllbGQpLFxuICAgICAgICB0ZXJtcyA9IHRoaXMucGlwZWxpbmUucnVuKHRva2VucyksXG4gICAgICAgIGZpZWxkUmVmID0gbmV3IGx1bnIuRmllbGRSZWYgKGRvY1JlZiwgZmllbGROYW1lKSxcbiAgICAgICAgZmllbGRUZXJtcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAgIHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdID0gZmllbGRUZXJtc1xuICAgIHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSA9IDBcblxuICAgIC8vIHN0b3JlIHRoZSBsZW5ndGggb2YgdGhpcyBmaWVsZCBmb3IgdGhpcyBkb2N1bWVudFxuICAgIHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSArPSB0ZXJtcy5sZW5ndGhcblxuICAgIC8vIGNhbGN1bGF0ZSB0ZXJtIGZyZXF1ZW5jaWVzIGZvciB0aGlzIGZpZWxkXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0ZXJtcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tqXVxuXG4gICAgICBpZiAoZmllbGRUZXJtc1t0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmllbGRUZXJtc1t0ZXJtXSA9IDBcbiAgICAgIH1cblxuICAgICAgZmllbGRUZXJtc1t0ZXJtXSArPSAxXG5cbiAgICAgIC8vIGFkZCB0byBpbnZlcnRlZCBpbmRleFxuICAgICAgLy8gY3JlYXRlIGFuIGluaXRpYWwgcG9zdGluZyBpZiBvbmUgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHBvc3RpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgIHBvc3RpbmdbXCJfaW5kZXhcIl0gPSB0aGlzLnRlcm1JbmRleFxuICAgICAgICB0aGlzLnRlcm1JbmRleCArPSAxXG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLl9maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBwb3N0aW5nW3RoaXMuX2ZpZWxkc1trXV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbiBlbnRyeSBmb3IgdGhpcyB0ZXJtL2ZpZWxkTmFtZS9kb2NSZWYgdG8gdGhlIGludmVydGVkSW5kZXhcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICAvLyBzdG9yZSBhbGwgd2hpdGVsaXN0ZWQgbWV0YWRhdGEgYWJvdXQgdGhpcyB0b2tlbiBpbiB0aGVcbiAgICAgIC8vIGludmVydGVkIGluZGV4XG4gICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3QubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhS2V5ID0gdGhpcy5tZXRhZGF0YVdoaXRlbGlzdFtsXSxcbiAgICAgICAgICAgIG1ldGFkYXRhID0gdGVybS5tZXRhZGF0YVttZXRhZGF0YUtleV1cblxuICAgICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXVttZXRhZGF0YUtleV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXVttZXRhZGF0YUtleV0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXVttZXRhZGF0YUtleV0ucHVzaChtZXRhZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGF2ZXJhZ2UgZG9jdW1lbnQgbGVuZ3RoIGZvciB0aGlzIGluZGV4XG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jYWxjdWxhdGVBdmVyYWdlRmllbGRMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmaWVsZFJlZnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkTGVuZ3RocyksXG4gICAgICBudW1iZXJPZkZpZWxkcyA9IGZpZWxkUmVmcy5sZW5ndGgsXG4gICAgICBhY2N1bXVsYXRvciA9IHt9LFxuICAgICAgZG9jdW1lbnRzV2l0aEZpZWxkID0ge31cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mRmllbGRzOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGQgPSBmaWVsZFJlZi5maWVsZE5hbWVcblxuICAgIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF0gfHwgKGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF0gPSAwKVxuICAgIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF0gKz0gMVxuXG4gICAgYWNjdW11bGF0b3JbZmllbGRdIHx8IChhY2N1bXVsYXRvcltmaWVsZF0gPSAwKVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSArPSB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5fZmllbGRzW2ldXG4gICAgYWNjdW11bGF0b3JbZmllbGRdID0gYWNjdW11bGF0b3JbZmllbGRdIC8gZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXVxuICB9XG5cbiAgdGhpcy5hdmVyYWdlRmllbGRMZW5ndGggPSBhY2N1bXVsYXRvclxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIHZlY3RvciBzcGFjZSBtb2RlbCBvZiBldmVyeSBkb2N1bWVudCB1c2luZyBsdW5yLlZlY3RvclxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY3JlYXRlRmllbGRWZWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZmllbGRWZWN0b3JzID0ge30sXG4gICAgICBmaWVsZFJlZnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzKSxcbiAgICAgIGZpZWxkUmVmc0xlbmd0aCA9IGZpZWxkUmVmcy5sZW5ndGgsXG4gICAgICB0ZXJtSWRmQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZFJlZnNMZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhmaWVsZFJlZnNbaV0pLFxuICAgICAgICBmaWVsZCA9IGZpZWxkUmVmLmZpZWxkTmFtZSxcbiAgICAgICAgZmllbGRMZW5ndGggPSB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0sXG4gICAgICAgIGZpZWxkVmVjdG9yID0gbmV3IGx1bnIuVmVjdG9yLFxuICAgICAgICB0ZXJtRnJlcXVlbmNpZXMgPSB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSxcbiAgICAgICAgdGVybXMgPSBPYmplY3Qua2V5cyh0ZXJtRnJlcXVlbmNpZXMpLFxuICAgICAgICB0ZXJtc0xlbmd0aCA9IHRlcm1zLmxlbmd0aFxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0ZXJtc0xlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW2pdLFxuICAgICAgICAgIHRmID0gdGVybUZyZXF1ZW5jaWVzW3Rlcm1dLFxuICAgICAgICAgIHRlcm1JbmRleCA9IHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXS5faW5kZXgsXG4gICAgICAgICAgaWRmLCBzY29yZSwgc2NvcmVXaXRoUHJlY2lzaW9uXG5cbiAgICAgIGlmICh0ZXJtSWRmQ2FjaGVbdGVybV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZGYgPSBsdW5yLmlkZih0aGlzLmludmVydGVkSW5kZXhbdGVybV0sIHRoaXMuZG9jdW1lbnRDb3VudClcbiAgICAgICAgdGVybUlkZkNhY2hlW3Rlcm1dID0gaWRmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZGYgPSB0ZXJtSWRmQ2FjaGVbdGVybV1cbiAgICAgIH1cblxuICAgICAgc2NvcmUgPSBpZGYgKiAoKHRoaXMuX2sxICsgMSkgKiB0ZikgLyAodGhpcy5fazEgKiAoMSAtIHRoaXMuX2IgKyB0aGlzLl9iICogKGZpZWxkTGVuZ3RoIC8gdGhpcy5hdmVyYWdlRmllbGRMZW5ndGhbZmllbGRdKSkgKyB0ZilcbiAgICAgIHNjb3JlV2l0aFByZWNpc2lvbiA9IE1hdGgucm91bmQoc2NvcmUgKiAxMDAwKSAvIDEwMDBcbiAgICAgIC8vIENvbnZlcnRzIDEuMjM0NTY3ODkgdG8gMS4yMzQuXG4gICAgICAvLyBSZWR1Y2luZyB0aGUgcHJlY2lzaW9uIHNvIHRoYXQgdGhlIHZlY3RvcnMgdGFrZSB1cCBsZXNzXG4gICAgICAvLyBzcGFjZSB3aGVuIHNlcmlhbGlzZWQuIERvaW5nIGl0IG5vdyBzbyB0aGF0IHRoZXkgYmVoYXZlXG4gICAgICAvLyB0aGUgc2FtZSBiZWZvcmUgYW5kIGFmdGVyIHNlcmlhbGlzYXRpb24uIEFsc28sIHRoaXMgaXNcbiAgICAgIC8vIHRoZSBmYXN0ZXN0IGFwcHJvYWNoIHRvIHJlZHVjaW5nIGEgbnVtYmVyJ3MgcHJlY2lzaW9uIGluXG4gICAgICAvLyBKYXZhU2NyaXB0LlxuXG4gICAgICBmaWVsZFZlY3Rvci5pbnNlcnQodGVybUluZGV4LCBzY29yZVdpdGhQcmVjaXNpb24pXG4gICAgfVxuXG4gICAgZmllbGRWZWN0b3JzW2ZpZWxkUmVmXSA9IGZpZWxkVmVjdG9yXG4gIH1cblxuICB0aGlzLmZpZWxkVmVjdG9ycyA9IGZpZWxkVmVjdG9yc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgb2YgYWxsIHRva2VucyBpbiB0aGUgaW5kZXggdXNpbmcgbHVuci5Ub2tlblNldFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY3JlYXRlVG9rZW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudG9rZW5TZXQgPSBsdW5yLlRva2VuU2V0LmZyb21BcnJheShcbiAgICBPYmplY3Qua2V5cyh0aGlzLmludmVydGVkSW5kZXgpLnNvcnQoKVxuICApXG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSBpbmRleCwgY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleC5cbiAqXG4gKiBUaGlzIGNvbXBsZXRlcyB0aGUgaW5kZXhpbmcgcHJvY2VzcyBhbmQgc2hvdWxkIG9ubHkgYmUgY2FsbGVkXG4gKiBvbmNlIGFsbCBkb2N1bWVudHMgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH1cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWxjdWxhdGVBdmVyYWdlRmllbGRMZW5ndGhzKClcbiAgdGhpcy5jcmVhdGVGaWVsZFZlY3RvcnMoKVxuICB0aGlzLmNyZWF0ZVRva2VuU2V0KClcblxuICByZXR1cm4gbmV3IGx1bnIuSW5kZXgoe1xuICAgIGludmVydGVkSW5kZXg6IHRoaXMuaW52ZXJ0ZWRJbmRleCxcbiAgICBmaWVsZFZlY3RvcnM6IHRoaXMuZmllbGRWZWN0b3JzLFxuICAgIHRva2VuU2V0OiB0aGlzLnRva2VuU2V0LFxuICAgIGZpZWxkczogdGhpcy5fZmllbGRzLFxuICAgIHBpcGVsaW5lOiB0aGlzLnNlYXJjaFBpcGVsaW5lXG4gIH0pXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBsdWdpbiB0byB0aGUgaW5kZXggYnVpbGRlci5cbiAqXG4gKiBBIHBsdWdpbiBpcyBhIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKiBQbHVnaW5zIGNhbiBiZSB1c2VkIHRvIGN1c3RvbWlzZSBvciBleHRlbmQgdGhlIGJlaGF2aW91ciBvZiB0aGUgaW5kZXhcbiAqIGluIHNvbWUgd2F5LiBBIHBsdWdpbiBpcyBqdXN0IGEgZnVuY3Rpb24sIHRoYXQgZW5jYXBzdWxhdGVkIHRoZSBjdXN0b21cbiAqIGJlaGF2aW91ciB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gYnVpbGRpbmcgdGhlIGluZGV4LlxuICpcbiAqIFRoZSBwbHVnaW4gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgYXJndW1lbnQsIGFkZGl0aW9uYWxcbiAqIGFyZ3VtZW50cyBjYW4gYWxzbyBiZSBwYXNzZWQgd2hlbiBjYWxsaW5nIHVzZS4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBsdWdpbiBUaGUgcGx1Z2luIHRvIGFwcGx5LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgYXJncy51bnNoaWZ0KHRoaXMpXG4gIGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG59XG4vKipcbiAqIENvbnRhaW5zIGFuZCBjb2xsZWN0cyBtZXRhZGF0YSBhYm91dCBhIG1hdGNoaW5nIGRvY3VtZW50LlxuICogQSBzaW5nbGUgaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgaXMgcmV0dXJuZWQgYXMgcGFydCBvZiBldmVyeVxuICogbHVuci5JbmRleH5SZXN1bHQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRoaXMgbWF0Y2ggZGF0YSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBmaWVsZCBpbiB3aGljaCB0aGUgdGVybSB3YXMgZm91bmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSAtIFRoZSBtZXRhZGF0YSByZWNvcmRlZCBhYm91dCB0aGlzIHRlcm0gaW4gdGhpcyBmaWVsZFxuICogQHByb3BlcnR5IHtvYmplY3R9IG1ldGFkYXRhIC0gQSBjbG9uZWQgY29sbGVjdGlvbiBvZiBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YSA9IGZ1bmN0aW9uICh0ZXJtLCBmaWVsZCwgbWV0YWRhdGEpIHtcbiAgdmFyIGNsb25lZE1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKVxuXG4gIC8vIENsb25pbmcgdGhlIG1ldGFkYXRhIHRvIHByZXZlbnQgdGhlIG9yaWdpbmFsXG4gIC8vIGJlaW5nIG11dGF0ZWQgZHVyaW5nIG1hdGNoIGRhdGEgY29tYmluYXRpb24uXG4gIC8vIE1ldGFkYXRhIGlzIGtlcHQgaW4gYW4gYXJyYXkgd2l0aGluIHRoZSBpbnZlcnRlZFxuICAvLyBpbmRleCBzbyBjbG9uaW5nIHRoZSBkYXRhIGNhbiBiZSBkb25lIHdpdGhcbiAgLy8gQXJyYXkjc2xpY2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhZGF0YUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbWV0YWRhdGFLZXlzW2ldXG4gICAgY2xvbmVkTWV0YWRhdGFba2V5XSA9IG1ldGFkYXRhW2tleV0uc2xpY2UoKVxuICB9XG5cbiAgdGhpcy5tZXRhZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBjbG9uZWRNZXRhZGF0YVxufVxuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpbGwgYmUgY3JlYXRlZCBmb3IgZXZlcnkgdGVybSB0aGF0IG1hdGNoZXMgYVxuICogZG9jdW1lbnQuIEhvd2V2ZXIgb25seSBvbmUgaW5zdGFuY2UgaXMgcmVxdWlyZWQgaW4gYSBsdW5yLkluZGV4flJlc3VsdC4gVGhpc1xuICogbWV0aG9kIGNvbWJpbmVzIG1ldGFkYXRhIGZyb20gYW5vdGhlciBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aXRoIHRoaXNcbiAqIG9iamVjdHMgbWV0YWRhdGEuXG4gKlxuICogQHBhcmFtIHtsdW5yLk1hdGNoRGF0YX0gb3RoZXJNYXRjaERhdGEgLSBBbm90aGVyIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEgdG8gbWVyZ2Ugd2l0aCB0aGlzIG9uZS5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChvdGhlck1hdGNoRGF0YSkge1xuICB2YXIgdGVybXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRlcm0gPSB0ZXJtc1tpXSxcbiAgICAgICAgZmllbGRzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV0pXG5cbiAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tqXSxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdKVxuXG4gICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba11cblxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gb3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCBtZXRhZGF0YSBmb3IgYSB0ZXJtL2ZpZWxkIHBhaXIgdG8gdGhpcyBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIGlmICghKHRlcm0gaW4gdGhpcy5tZXRhZGF0YSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghKGZpZWxkIGluIHRoaXMubWV0YWRhdGFbdGVybV0pKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuXG4gICAgaWYgKGtleSBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG1ldGFkYXRhW2tleV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBtZXRhZGF0YVtrZXldXG4gICAgfVxuICB9XG59XG4vKipcbiAqIEEgbHVuci5RdWVyeSBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyB3YXkgb2YgZGVmaW5pbmcgcXVlcmllcyB0byBiZSBwZXJmb3JtZWRcbiAqIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogUHJlZmVyIGNvbnN0cnVjdGluZyBhIGx1bnIuUXVlcnkgdXNpbmcgdGhlIHtAbGluayBsdW5yLkluZGV4I3F1ZXJ5fSBtZXRob2RcbiAqIHNvIHRoZSBxdWVyeSBvYmplY3QgaXMgcHJlLWluaXRpYWxpemVkIHdpdGggdGhlIHJpZ2h0IGluZGV4IGZpZWxkcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7bHVuci5RdWVyeX5DbGF1c2VbXX0gY2xhdXNlcyAtIEFuIGFycmF5IG9mIHF1ZXJ5IGNsYXVzZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBhbGxGaWVsZHMgLSBBbiBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIGZpZWxkcyBpbiBhIGx1bnIuSW5kZXguXG4gKi9cbmx1bnIuUXVlcnkgPSBmdW5jdGlvbiAoYWxsRmllbGRzKSB7XG4gIHRoaXMuY2xhdXNlcyA9IFtdXG4gIHRoaXMuYWxsRmllbGRzID0gYWxsRmllbGRzXG59XG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBhdXRvbWF0aWMgd2lsZGNhcmQgaW5zZXJ0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIGNvbnN0cnVjdGluZyBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBUaGlzIGFsbG93cyB3aWxkY2FyZHMgdG8gYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgdGVybSB3aXRob3V0IGhhdmluZyB0byBtYW51YWxseSBkbyBhbnkgc3RyaW5nXG4gKiBjb25jYXRlbmF0aW9uLlxuICpcbiAqIFRoZSB3aWxkY2FyZCBjb25zdGFudHMgY2FuIGJlIGJpdHdpc2UgY29tYmluZWQgdG8gc2VsZWN0IGJvdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGRlZmF1bHRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5OT05FIC0gVGhlIHRlcm0gd2lsbCBoYXZlIG5vIHdpbGRjYXJkcyBpbnNlcnRlZCwgdGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5MRUFESU5HIC0gUHJlcGVuZCB0aGUgdGVybSB3aXRoIGEgd2lsZGNhcmQsIHVubGVzcyBhIGxlYWRpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5UUkFJTElORyAtIEFwcGVuZCBhIHdpbGRjYXJkIHRvIHRoZSB0ZXJtLCB1bmxlc3MgYSB0cmFpbGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I3Rlcm1cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHtcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyB8IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKi9cbmx1bnIuUXVlcnkud2lsZGNhcmQgPSBuZXcgU3RyaW5nIChcIipcIilcbmx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORSA9IDBcbmx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyA9IDFcbmx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgPSAyXG5cbi8qKlxuICogQSBzaW5nbGUgY2xhdXNlIGluIGEge0BsaW5rIGx1bnIuUXVlcnl9IGNvbnRhaW5zIGEgdGVybSBhbmQgZGV0YWlscyBvbiBob3cgdG9cbiAqIG1hdGNoIHRoYXQgdGVybSBhZ2FpbnN0IGEge0BsaW5rIGx1bnIuSW5kZXh9LlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBmaWVsZHMgLSBUaGUgZmllbGRzIGluIGFuIGluZGV4IHRoaXMgY2xhdXNlIHNob3VsZCBiZSBtYXRjaGVkIGFnYWluc3QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Jvb3N0PTFdIC0gQW55IGJvb3N0IHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBtYXRjaGluZyB0aGlzIGNsYXVzZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZWRpdERpc3RhbmNlXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGhhdmUgZnV6enkgbWF0Y2hpbmcgYXBwbGllZCwgYW5kIGhvdyBmdXp6eSB0aGUgbWF0Y2ggc2hvdWxkIGJlLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbdXNlUGlwZWxpbmVdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgYmUgcGFzc2VkIHRocm91Z2ggdGhlIHNlYXJjaCBwaXBlbGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lsZGNhcmQ9MF0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIHdpbGRjYXJkcyBhcHBlbmRlZCBvciBwcmVwZW5kZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfSB0byB0aGlzIHF1ZXJ5LlxuICpcbiAqIFVubGVzcyB0aGUgY2xhdXNlIGNvbnRhaW5zIHRoZSBmaWVsZHMgdG8gYmUgbWF0Y2hlZCBhbGwgZmllbGRzIHdpbGwgYmUgbWF0Y2hlZC4gSW4gYWRkaXRpb25cbiAqIGEgZGVmYXVsdCBib29zdCBvZiAxIGlzIGFwcGxpZWQgdG8gdGhlIGNsYXVzZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl+Q2xhdXNlfSBjbGF1c2UgLSBUaGUgY2xhdXNlIHRvIGFkZCB0byB0aGlzIHF1ZXJ5LlxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCEoJ2ZpZWxkcycgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5maWVsZHMgPSB0aGlzLmFsbEZpZWxkc1xuICB9XG5cbiAgaWYgKCEoJ2Jvb3N0JyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmJvb3N0ID0gMVxuICB9XG5cbiAgaWYgKCEoJ3VzZVBpcGVsaW5lJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnVzZVBpcGVsaW5lID0gdHJ1ZVxuICB9XG5cbiAgaWYgKCEoJ3dpbGRjYXJkJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLndpbGRjYXJkID0gbHVuci5RdWVyeS53aWxkY2FyZC5OT05FXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORykgJiYgKGNsYXVzZS50ZXJtLmNoYXJBdCgwKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCIqXCIgKyBjbGF1c2UudGVybVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HKSAmJiAoY2xhdXNlLnRlcm0uc2xpY2UoLTEpICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIlwiICsgY2xhdXNlLnRlcm0gKyBcIipcIlxuICB9XG5cbiAgdGhpcy5jbGF1c2VzLnB1c2goY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQWRkcyBhIHRlcm0gdG8gdGhlIGN1cnJlbnQgcXVlcnksIHVuZGVyIHRoZSBjb3ZlcnMgdGhpcyB3aWxsIGNyZWF0ZSBhIHtAbGluayBsdW5yLlF1ZXJ5fkNsYXVzZX1cbiAqIHRvIHRoZSBsaXN0IG9mIGNsYXVzZXMgdGhhdCBtYWtlIHVwIHRoaXMgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gLSBUaGUgdGVybSB0byBhZGQgdG8gdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIEFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBxdWVyeSBjbGF1c2UuXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnk8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIpXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5IGFuZCBzcGVjaWZ5aW5nIHNlYXJjaCBmaWVsZHMsIHRlcm0gYm9vc3QgYW5kIGF1dG9tYXRpYyB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIiwge1xuICogICBmaWVsZHM6IFtcInRpdGxlXCJdLFxuICogICBib29zdDogMTAsXG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICovXG5sdW5yLlF1ZXJ5LnByb3RvdHlwZS50ZXJtID0gZnVuY3Rpb24gKHRlcm0sIG9wdGlvbnMpIHtcbiAgdmFyIGNsYXVzZSA9IG9wdGlvbnMgfHwge31cbiAgY2xhdXNlLnRlcm0gPSB0ZXJtXG5cbiAgdGhpcy5jbGF1c2UoY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5sdW5yLlF1ZXJ5UGFyc2VFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBzdGFydCwgZW5kKSB7XG4gIHRoaXMubmFtZSA9IFwiUXVlcnlQYXJzZUVycm9yXCJcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICB0aGlzLnN0YXJ0ID0gc3RhcnRcbiAgdGhpcy5lbmQgPSBlbmRcbn1cblxubHVuci5RdWVyeVBhcnNlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yXG5sdW5yLlF1ZXJ5TGV4ZXIgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHRoaXMubGV4ZW1lcyA9IFtdXG4gIHRoaXMuc3RyID0gc3RyXG4gIHRoaXMubGVuZ3RoID0gc3RyLmxlbmd0aFxuICB0aGlzLnBvcyA9IDBcbiAgdGhpcy5zdGFydCA9IDBcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zID0gW11cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG5cbiAgd2hpbGUgKHN0YXRlKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSh0aGlzKVxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuc2xpY2VTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdWJTbGljZXMgPSBbXSxcbiAgICAgIHNsaWNlU3RhcnQgPSB0aGlzLnN0YXJ0LFxuICAgICAgc2xpY2VFbmQgPSB0aGlzLnBvc1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgc2xpY2VFbmQgPSB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnNbaV1cbiAgICBzdWJTbGljZXMucHVzaCh0aGlzLnN0ci5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCkpXG4gICAgc2xpY2VTdGFydCA9IHNsaWNlRW5kICsgMVxuICB9XG5cbiAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgdGhpcy5wb3MpKVxuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMubGVuZ3RoID0gMFxuXG4gIHJldHVybiBzdWJTbGljZXMuam9pbignJylcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgdGhpcy5sZXhlbWVzLnB1c2goe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgc3RyOiB0aGlzLnNsaWNlU3RyaW5nKCksXG4gICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgZW5kOiB0aGlzLnBvc1xuICB9KVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmVzY2FwZUNoYXJhY3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLnB1c2godGhpcy5wb3MgLSAxKVxuICB0aGlzLnBvcyArPSAxXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucG9zID49IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5FT1NcbiAgfVxuXG4gIHZhciBjaGFyID0gdGhpcy5zdHIuY2hhckF0KHRoaXMucG9zKVxuICB0aGlzLnBvcyArPSAxXG4gIHJldHVybiBjaGFyXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnBvcyAtIHRoaXMuc3RhcnRcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5pZ25vcmUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN0YXJ0ID09IHRoaXMucG9zKSB7XG4gICAgdGhpcy5wb3MgKz0gMVxuICB9XG5cbiAgdGhpcy5zdGFydCA9IHRoaXMucG9zXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuYmFja3VwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBvcyAtPSAxXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuYWNjZXB0RGlnaXRSdW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGFyLCBjaGFyQ29kZVxuXG4gIGRvIHtcbiAgICBjaGFyID0gdGhpcy5uZXh0KClcbiAgICBjaGFyQ29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKVxuICB9IHdoaWxlIChjaGFyQ29kZSA+IDQ3ICYmIGNoYXJDb2RlIDwgNTgpXG5cbiAgaWYgKGNoYXIgIT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgIHRoaXMuYmFja3VwKClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnBvcyA8IHRoaXMubGVuZ3RoXG59XG5cbmx1bnIuUXVlcnlMZXhlci5FT1MgPSAnRU9TJ1xubHVuci5RdWVyeUxleGVyLkZJRUxEID0gJ0ZJRUxEJ1xubHVuci5RdWVyeUxleGVyLlRFUk0gPSAnVEVSTSdcbmx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFID0gJ0VESVRfRElTVEFOQ0UnXG5sdW5yLlF1ZXJ5TGV4ZXIuQk9PU1QgPSAnQk9PU1QnXG5cbmx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5iYWNrdXAoKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5GSUVMRClcbiAgbGV4ZXIuaWdub3JlKClcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhUZXJtID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGlmIChsZXhlci53aWR0aCgpID4gMSkge1xuICAgIGxleGVyLmJhY2t1cCgpXG4gICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgfVxuXG4gIGxleGVyLmlnbm9yZSgpXG5cbiAgaWYgKGxleGVyLm1vcmUoKSkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhFZGl0RGlzdGFuY2UgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuaWdub3JlKClcbiAgbGV4ZXIuYWNjZXB0RGlnaXRSdW4oKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEJvb3N0ID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1QpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RU9TID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cbn1cblxuLy8gVGhpcyBtYXRjaGVzIHRoZSBzZXBhcmF0b3IgdXNlZCB3aGVuIHRva2VuaXNpbmcgZmllbGRzXG4vLyB3aXRoaW4gYSBkb2N1bWVudC4gVGhlc2Ugc2hvdWxkIG1hdGNoIG90aGVyd2lzZSBpdCBpc1xuLy8gbm90IHBvc3NpYmxlIHRvIHNlYXJjaCBmb3Igc29tZSB0b2tlbnMgd2l0aGluIGEgZG9jdW1lbnQuXG4vL1xuLy8gSXQgaXMgcG9zc2libGUgZm9yIHRoZSB1c2VyIHRvIGNoYW5nZSB0aGUgc2VwYXJhdG9yIG9uIHRoZVxuLy8gdG9rZW5pemVyIHNvIGl0IF9taWdodF8gY2xhc2ggd2l0aCBhbnkgb3RoZXIgb2YgdGhlIHNwZWNpYWxcbi8vIGNoYXJhY3RlcnMgYWxyZWFkeSB1c2VkIHdpdGhpbiB0aGUgc2VhcmNoIHN0cmluZywgZS5nLiA6LlxuLy9cbi8vIFRoaXMgbWVhbnMgdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBpblxuLy8gc3VjaCBhIHdheSB0aGF0IG1ha2VzIHNvbWUgd29yZHMgdW5zZWFyY2hhYmxlIHVzaW5nIGEgc2VhcmNoXG4vLyBzdHJpbmcuXG5sdW5yLlF1ZXJ5TGV4ZXIudGVybVNlcGFyYXRvciA9IGx1bnIudG9rZW5pemVyLnNlcGFyYXRvclxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBjaGFyID0gbGV4ZXIubmV4dCgpXG5cbiAgICBpZiAoY2hhciA9PSBsdW5yLlF1ZXJ5TGV4ZXIuRU9TKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVPU1xuICAgIH1cblxuICAgIC8vIEVzY2FwZSBjaGFyYWN0ZXIgaXMgJ1xcJ1xuICAgIGlmIChjaGFyLmNoYXJDb2RlQXQoMCkgPT0gOTIpIHtcbiAgICAgIGxleGVyLmVzY2FwZUNoYXJhY3RlcigpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiOlwiKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEZpZWxkXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCJ+XCIpIHtcbiAgICAgIGxleGVyLmJhY2t1cCgpXG4gICAgICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCJeXCIpIHtcbiAgICAgIGxleGVyLmJhY2t1cCgpXG4gICAgICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4Qm9vc3RcbiAgICB9XG5cbiAgICBpZiAoY2hhci5tYXRjaChsdW5yLlF1ZXJ5TGV4ZXIudGVybVNlcGFyYXRvcikpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybVxuICAgIH1cbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyID0gZnVuY3Rpb24gKHN0ciwgcXVlcnkpIHtcbiAgdGhpcy5sZXhlciA9IG5ldyBsdW5yLlF1ZXJ5TGV4ZXIgKHN0cilcbiAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG4gIHRoaXMubGV4ZW1lSWR4ID0gMFxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZXhlci5ydW4oKVxuICB0aGlzLmxleGVtZXMgPSB0aGlzLmxleGVyLmxleGVtZXNcblxuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRPclRlcm1cblxuICB3aGlsZSAoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKHRoaXMpXG4gIH1cblxuICByZXR1cm4gdGhpcy5xdWVyeVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5wZWVrTGV4ZW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZXhlbWVzW3RoaXMubGV4ZW1lSWR4XVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5jb25zdW1lTGV4ZW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGV4ZW1lID0gdGhpcy5wZWVrTGV4ZW1lKClcbiAgdGhpcy5sZXhlbWVJZHggKz0gMVxuICByZXR1cm4gbGV4ZW1lXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLm5leHRDbGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21wbGV0ZWRDbGF1c2UgPSB0aGlzLmN1cnJlbnRDbGF1c2VcbiAgdGhpcy5xdWVyeS5jbGF1c2UoY29tcGxldGVkQ2xhdXNlKVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRPclRlcm0gPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGVkIGVpdGhlciBhIGZpZWxkIG9yIGEgdGVybSwgZm91bmQgXCIgKyBsZXhlbWUudHlwZVxuXG4gICAgICBpZiAobGV4ZW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSAnXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwYXJzZXIucXVlcnkuYWxsRmllbGRzLmluZGV4T2YobGV4ZW1lLnN0cikgPT0gLTEpIHtcbiAgICB2YXIgcG9zc2libGVGaWVsZHMgPSBwYXJzZXIucXVlcnkuYWxsRmllbGRzLm1hcChmdW5jdGlvbiAoZikgeyByZXR1cm4gXCInXCIgKyBmICsgXCInXCIgfSkuam9pbignLCAnKSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgZmllbGQgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJywgcG9zc2libGUgZmllbGRzOiBcIiArIHBvc3NpYmxlRmllbGRzXG5cbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZmllbGRzID0gW2xleGVtZS5zdHJdXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm0gPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLnRlcm0gPSBsZXhlbWUuc3RyLnRvTG93ZXJDYXNlKClcblxuICBpZiAobGV4ZW1lLnN0ci5pbmRleE9mKFwiKlwiKSAhPSAtMSkge1xuICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnVzZVBpcGVsaW5lID0gZmFsc2VcbiAgfVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGVkaXREaXN0YW5jZSA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihlZGl0RGlzdGFuY2UpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZWRpdCBkaXN0YW5jZSBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5lZGl0RGlzdGFuY2UgPSBlZGl0RGlzdGFuY2VcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJvb3N0ID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGJvb3N0KSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImJvb3N0IG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmJvb3N0ID0gYm9vc3RcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbiAgLyoqXG4gICAqIGV4cG9ydCB0aGUgbW9kdWxlIHZpYSBBTUQsIENvbW1vbkpTIG9yIGFzIGEgYnJvd3NlciBnbG9iYWxcbiAgICogRXhwb3J0IGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAgICovXG4gIDsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICBkZWZpbmUoZmFjdG9yeSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLyoqXG4gICAgICAgKiBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAqIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgKiBsaWtlIE5vZGUuXG4gICAgICAgKi9cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICByb290Lmx1bnIgPSBmYWN0b3J5KClcbiAgICB9XG4gIH0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEp1c3QgcmV0dXJuIGEgdmFsdWUgdG8gZGVmaW5lIHRoZSBtb2R1bGUgZXhwb3J0LlxuICAgICAqIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICAgKiBjYW4gcmV0dXJuIGEgZnVuY3Rpb24gYXMgdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgICAqL1xuICAgIHJldHVybiBsdW5yXG4gIH0pKVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4vU2lkZWJhci9Qb3NpdGlvblwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBvc2l0aW9uXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gIC8qKlxuICAgKiBTZXQgc2lkZWJhcnMgdG8gbG9ja2VkIHN0YXRlIGFuZCBsaW1pdCBoZWlnaHQgdG8gcGFyZW50IG5vZGVcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFNpZGViYXJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gcGFyZW50XyAtIFNpZGViYXIgY29udGFpbmVyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBDdXJyZW50IHNpZGViYXIgaGVpZ2h0XG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcGFkXyAtIFBhZCB3aGVuIGhlYWRlciBpcyBmaXhlZFxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcbiAgICAgICAgIShyZWYucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG4gICAgdGhpcy5wYXJlbnRfID0gcmVmLnBhcmVudE5vZGVcblxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcbiAgICAgIDogaGVhZGVyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXG5cbiAgICAvKiBJbml0aWFsaXplIGN1cnJlbnQgaGVpZ2h0IGFuZCB0ZXN0IHdoZXRoZXIgaGVhZGVyIGlzIGZpeGVkICovXG4gICAgdGhpcy5oZWlnaHRfID0gMFxuICAgIHRoaXMucGFkXyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaGVhZGVyXykucG9zaXRpb24gPT09IFwiZml4ZWRcIlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc2lkZWJhciBzdGF0ZVxuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdG9wID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKFxuICAgICAgdGhpcy5wYXJlbnRfLmNoaWxkcmVuLCAob2Zmc2V0LCBjaGlsZCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgob2Zmc2V0LCBjaGlsZC5vZmZzZXRUb3ApXG4gICAgICB9LCAwKVxuXG4gICAgLyogU2V0IGxvY2sgb2Zmc2V0IGZvciBlbGVtZW50IHdpdGggbGFyZ2VzdCB0b3Agb2Zmc2V0ICovXG4gICAgdGhpcy5vZmZzZXRfID0gdG9wIC0gKHRoaXMucGFkXyA/IHRoaXMuaGVhZGVyXy5vZmZzZXRIZWlnaHQgOiAwKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlIGFuZCBoZWlnaHRcbiAgICpcbiAgICogVGhlIGlubmVyIGhlaWdodCBvZiB0aGUgd2luZG93ICg9IHRoZSB2aXNpYmxlIGFyZWEpIGlzIHRoZSBtYXhpbXVtXG4gICAqIHBvc3NpYmxlIGhlaWdodCBmb3IgdGhlIHN0cmV0Y2hpbmcgc2lkZWJhci4gVGhpcyBoZWlnaHQgbXVzdCBiZSBkZWR1Y3RlZFxuICAgKiBieSB0aGUgaGVpZ2h0IG9mIHRoZSBmaXhlZCBoZWFkZXIgKDU2cHgpLiBEZXBlbmRpbmcgb24gdGhlIHBhZ2UgeS1vZmZzZXQsXG4gICAqIHRoZSB0b3Agb2Zmc2V0IG9mIHRoZSBzaWRlYmFyIG11c3QgYmUgdGFrZW4gaW50byBhY2NvdW50LCBhcyB3ZWxsIGFzIHRoZVxuICAgKiBjYXNlIHdoZXJlIHRoZSB3aW5kb3cgaXMgc2Nyb2xsZWQgYmV5b25kIHRoZSBzaWRlYmFyIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudD99IGV2IC0gRXZlbnRcbiAgICovXG4gIHVwZGF0ZShldikge1xuICAgIGNvbnN0IG9mZnNldCAgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAvKiBVcGRhdGUgb2Zmc2V0LCBpbiBjYXNlIHdpbmRvdyBpcyByZXNpemVkICovXG4gICAgaWYgKGV2ICYmIGV2LnR5cGUgPT09IFwicmVzaXplXCIpXG4gICAgICB0aGlzLnNldHVwKClcblxuICAgIC8qIFNldCBib3VuZHMgb2Ygc2lkZWJhciBjb250YWluZXIgLSBtdXN0IGJlIGNhbGN1bGF0ZWQgb24gZXZlcnkgcnVuLCBhc1xuICAgICAgIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgbWlnaHQgY2hhbmdlIGR1ZSB0byBsb2FkaW5nIGltYWdlcyBldGMuICovXG4gICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgdG9wOiB0aGlzLnBhZF8gPyB0aGlzLmhlYWRlcl8ub2Zmc2V0SGVpZ2h0IDogMCxcbiAgICAgIGJvdHRvbTogdGhpcy5wYXJlbnRfLm9mZnNldFRvcCArIHRoaXMucGFyZW50Xy5vZmZzZXRIZWlnaHRcbiAgICB9XG5cbiAgICAvKiBDYWxjdWxhdGUgbmV3IG9mZnNldCBhbmQgaGVpZ2h0ICovXG4gICAgY29uc3QgaGVpZ2h0ID0gdmlzaWJsZSAtIGJvdW5kcy50b3BcbiAgICAgICAgICAgICAgICAgLSBNYXRoLm1heCgwLCB0aGlzLm9mZnNldF8gLSBvZmZzZXQpXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgb2Zmc2V0ICsgdmlzaWJsZSAtIGJvdW5kcy5ib3R0b20pXG5cbiAgICAvKiBJZiBoZWlnaHQgY2hhbmdlZCwgdXBkYXRlIGVsZW1lbnQgKi9cbiAgICBpZiAoaGVpZ2h0ICE9PSB0aGlzLmhlaWdodF8pXG4gICAgICB0aGlzLmVsXy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodF8gPSBoZWlnaHR9cHhgXG5cbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSBsb2NrZWQsIGFzIHdlJ3JlIGJlbG93IHBhcmVudCBvZmZzZXQgKi9cbiAgICBpZiAob2Zmc2V0ID49IHRoaXMub2Zmc2V0Xykge1xuICAgICAgaWYgKHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSAhPT0gXCJsb2NrXCIpXG4gICAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwibG9ja1wiXG5cbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSB1bmxvY2tlZCwgaWYgbG9ja2VkICovXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPT09IFwibG9ja1wiKSB7XG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgdGhpcy5lbF8uc3R5bGUuaGVpZ2h0ID0gXCJcIlxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIvUG9zaXRpb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBBZGFwdGVyIGZyb20gXCIuL1NvdXJjZS9BZGFwdGVyXCJcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gXCIuL1NvdXJjZS9SZXBvc2l0b3J5XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQWRhcHRlcixcbiAgUmVwb3NpdG9yeVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9BZGFwdGVyL0dpdEh1YlwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdpdEh1YlxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQWJzdHJhY3QgZnJvbSBcIi4vQWJzdHJhY3RcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWIgZXh0ZW5kcyBBYnN0cmFjdCB7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXyAtIE5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwpXG5cbiAgICAvKiBFeHRyYWN0IHVzZXIgKGFuZCByZXBvc2l0b3J5IG5hbWUpIGZyb20gVVJMLCBhcyB3ZSBoYXZlIHRvIHF1ZXJ5IGZvciBhbGxcbiAgICAgICByZXBvc2l0b3JpZXMsIHRvIG9taXQgNDA0IGVycm9ycyBmb3IgcHJpdmF0ZSByZXBvc2l0b3JpZXMgKi9cbiAgICBjb25zdCBtYXRjaGVzID0gL14uK2dpdGh1YlxcLmNvbVxcLyhbXi9dKylcXC8/KFteL10rKT8uKiQvXG4gICAgICAuZXhlYyh0aGlzLmJhc2VfKVxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjb25zdCBbLCB1c2VyLCBuYW1lXSA9IG1hdGNoZXNcblxuICAgICAgLyogSW5pdGlhbGl6ZSBiYXNlIFVSTCBhbmQgcmVwb3NpdG9yeSBuYW1lICovXG4gICAgICB0aGlzLmJhc2VfID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyfS9yZXBvc2BcbiAgICAgIHRoaXMubmFtZV8gPSBuYW1lXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHJlbGV2YW50IHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxzdHJpbmc+Pn0gUHJvbWlzZSByZXR1cm5pbmcgYW4gYXJyYXkgb2YgZmFjdHNcbiAgICovXG4gIGZldGNoXygpIHtcbiAgICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlID0gMCkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZV99P3Blcl9wYWdlPTMwJnBhZ2U9JHtwYWdlfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3JcblxuICAgICAgICAgIC8qIERpc3BsYXkgbnVtYmVyIG9mIHN0YXJzIGFuZCBmb3JrcywgaWYgcmVwb3NpdG9yeSBpcyBnaXZlbiAqL1xuICAgICAgICAgIGlmICh0aGlzLm5hbWVfKSB7XG4gICAgICAgICAgICBjb25zdCByZXBvID0gZGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLm5hbWVfKVxuICAgICAgICAgICAgaWYgKCFyZXBvICYmIGRhdGEubGVuZ3RoID09PSAzMClcbiAgICAgICAgICAgICAgcmV0dXJuIHBhZ2luYXRlKHBhZ2UgKyAxKVxuXG4gICAgICAgICAgICAvKiBJZiB3ZSBmb3VuZCBhIHJlcG8sIGV4dHJhY3QgdGhlIGZhY3RzICovXG4gICAgICAgICAgICByZXR1cm4gcmVwb1xuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmZvcm1hdF8ocmVwby5zdGFyZ2F6ZXJzX2NvdW50KX0gU3RhcnNgLFxuICAgICAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0XyhyZXBvLmZvcmtzX2NvdW50KX0gRm9ya3NgXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXVxuXG4gICAgICAgICAgLyogRGlzcGxheSBudW1iZXIgb2YgcmVwb3NpdG9yaWVzLCBvdGhlcndpc2UgKi9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgYCR7ZGF0YS5sZW5ndGh9IFJlcG9zaXRvcmllc2BcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogUGFnaW5hdGUgdGhyb3VnaCByZXBvcyAqL1xuICAgIHJldHVybiBwYWdpbmF0ZSgpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9HaXRIdWIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdCB7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEFuY2hvckVsZW1lbnR9IGVsXyAtIExpbmsgdG8gcmVwb3NpdG9yeVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYmFzZV8gLSBBUEkgYmFzZSBVUkxcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbHRfIC0gVW5pcXVlIGlkZW50aWZpZXJcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuXG4gICAgLyogUmV0cmlldmUgYmFzZSBVUkwgKi9cbiAgICB0aGlzLmJhc2VfID0gdGhpcy5lbF8uaHJlZlxuICAgIHRoaXMuc2FsdF8gPSB0aGlzLmhhc2hfKHRoaXMuYmFzZV8pXG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgZGF0YSBmcm9tIENvb2tpZSBvciBmZXRjaCBmcm9tIHJlc3BlY3RpdmUgQVBJXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8c3RyaW5nPj59IFByb21pc2UgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZhY3RzXG4gICAqL1xuICBmZXRjaCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBDb29raWVzLmdldEpTT04oYCR7dGhpcy5zYWx0X30uY2FjaGUtc291cmNlYClcbiAgICAgIGlmICh0eXBlb2YgY2FjaGVkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJlc29sdmUoY2FjaGVkKVxuXG4gICAgICAvKiBJZiB0aGUgZGF0YSBpcyBub3QgY2FjaGVkIGluIGEgY29va2llLCBpbnZva2UgZmV0Y2ggYW5kIHNldFxuICAgICAgICAgYSBjb29raWUgdGhhdCBhdXRvbWF0aWNhbGx5IGV4cGlyZXMgaW4gMTUgbWludXRlcyAqL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mZXRjaF8oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIENvb2tpZXMuc2V0KGAke3RoaXMuc2FsdF99LmNhY2hlLXNvdXJjZWAsIGRhdGEsIHsgZXhwaXJlczogMSAvIDk2IH0pXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWJzdHJhY3QgcHJpdmF0ZSBmdW5jdGlvbiB0aGF0IGZldGNoZXMgcmVsZXZhbnQgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGZldGNoXygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmZXRjaF8oKTogTm90IGltcGxlbWVudGVkXCIpXG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggc3VmZml4XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBOdW1iZXIgdG8gZm9ybWF0XG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIG51bWJlclxuICAgKi9cbiAgZm9ybWF0XyhudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyID4gMTAwMDApXG4gICAgICByZXR1cm4gYCR7KG51bWJlciAvIDEwMDApLnRvRml4ZWQoMCl9a2BcbiAgICBlbHNlIGlmIChudW1iZXIgPiAxMDAwKVxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDEpfWtgXG4gICAgcmV0dXJuIGAke251bWJlcn1gXG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGhhc2ggZnVuY3Rpb25cbiAgICpcbiAgICogVGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NjE2NDg0LzEwNjU1ODRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIElucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhc2hlZCBzdHJpbmdcbiAgICovXG4gIGhhc2hfKHN0cikge1xuICAgIGxldCBoYXNoID0gMFxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgaGFzaCB8PSAwIC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvQWJzdHJhY3QuanMiLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpIChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXcml0ZVxuXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0aWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cblx0XHRcdFx0XHRcdGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0Y29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gY29va2llO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IGFwaTtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGFwaS5jYWxsKGFwaSwga2V5KTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGFwaS5hcHBseSh7XG5cdFx0XHRcdGpzb246IHRydWVcblx0XHRcdH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0fTtcblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRhcGkoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnkge1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gUmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgcmVwb3NpdG9yeVxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZhY3RzIC0gRmFjdHMgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGluaXRpYWxpemUoZmFjdHMpIHtcbiAgICBpZiAoZmFjdHMubGVuZ3RoICYmIHRoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgIHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKFxuICAgICAgICA8dWwgY2xhc3M9XCJtZC1zb3VyY2VfX2ZhY3RzXCI+XG4gICAgICAgICAge2ZhY3RzLm1hcChmYWN0ID0+IDxsaSBjbGFzcz1cIm1kLXNvdXJjZV9fZmFjdFwiPntmYWN0fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgIClcblxuICAgIC8qIEZpbmlzaCByZW5kZXJpbmcgd2l0aCBhbmltYXRpb24gKi9cbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImRvbmVcIlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL1JlcG9zaXRvcnkuanN4IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RhYnMvVG9nZ2xlXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVG9nZ2xlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIHtcblxuICAvKipcbiAgICogVG9nZ2xlIHRhYnMgdmlzaWJpbGl0eSBkZXBlbmRpbmcgb24gcGFnZSB5LW9mZnNldFxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBUb2dnbGUgcGFnZS15IG9mZnNldFxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBUYWJzIHZpc2liaWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBOb2RlKSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG5cbiAgICAvKiBJbml0aWFsaXplIG9mZnNldCBhbmQgc3RhdGUgKi9cbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB2aXNpYmlsaXR5XG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49XG4gICAgICB0aGlzLmVsXy5jaGlsZHJlblswXS5vZmZzZXRUb3AgKyAoNSAtIDQ4KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHF1aWNrIGhhY2sgdG8gZW5hYmxlIHNhbWUgaGFuZGxpbmcgZm9yIGhlcm9cbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiaGlkZGVuXCIgOiBcIlwiXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdmlzaWJpbGl0eVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJzL1RvZ2dsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=