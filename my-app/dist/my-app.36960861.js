// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"bnuFr":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 58546;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba2beaa036960861";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNJxx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redom = require("redom");
var _navigo = require("navigo");
var _navigoDefault = parcelHelpers.interopDefault(_navigo);
const router = new (0, _navigoDefault.default)('/');
function navigate(e) {
    e.preventDefault();
    router.navigate(e.target.getAttribute('href'));
}
function postPage(id) {
    const body = (0, _redom.el)('p', 'Loading...');
    fetch(`https://gorest.co.in/public/v2/posts/${id}`).then(async (res)=>{
        const data = await res.json();
        (0, _redom.setChildren)(body, [
            (0, _redom.el)('h2', data.title),
            (0, _redom.el)('p', data.body),
            (0, _redom.el)('a', {
                href: '/',
                onclick: navigate
            }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043F\u0438\u0441\u043A\u0443")
        ]);
    });
    return (0, _redom.el)('div', {
        className: 'container'
    }, [
        (0, _redom.el)('h1', 'Post'),
        body
    ]);
}
function postListPage() {
    const list = (0, _redom.el)('ul', (0, _redom.el)('li', 'Loading...'));
    fetch('https://gorest.co.in/public/v2/posts').then(async (res)=>{
        const data = await res.json();
        (0, _redom.setChildren)(list, data.map((post)=>(0, _redom.el)('li', (0, _redom.el)('a', {
                href: `/post/${post.id}`,
                onclick: navigate
            }, post.title))));
    });
    return (0, _redom.el)('div', {
        className: 'container'
    }, [
        (0, _redom.el)('h1', 'Post list'),
        list
    ]);
}
router.on('/', ()=>{
    (0, _redom.setChildren)(document.body, postListPage());
});
router.on('/post/:id', ({ data: { id } })=>{
    (0, _redom.setChildren)(document.body, postPage(id));
});
router.resolve();

},{"redom":"9CzRX","navigo":"1cMK4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9CzRX":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    'use strict';
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
        return n;
    }
    function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function _construct(t, e, r) {
        if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
        var o = [
            null
        ];
        o.push.apply(o, e);
        var p = new (t.bind.apply(t, o))();
        return p;
    }
    function _defineProperties(e, r) {
        for(var t = 0; t < r.length; t++){
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
        }
    }
    function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
            writable: false
        }), e;
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
                t && (r = t);
                var n = 0, F = function() {};
                return {
                    s: F,
                    n: function() {
                        return n >= r.length ? {
                            done: true
                        } : {
                            done: false,
                            value: r[n++]
                        };
                    },
                    e: function(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = true, u = false;
        return {
            s: function() {
                t = t.call(r);
            },
            n: function() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function(r) {
                u = true, o = r;
            },
            f: function() {
                try {
                    a || null == t.return || t.return();
                } finally{
                    if (u) throw o;
                }
            }
        };
    }
    function _isNativeReflectConstruct() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        } catch (t) {}
        return (_isNativeReflectConstruct = function() {
            return !!t;
        })();
    }
    function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (undefined !== e) {
            var i = e.call(t, r);
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
    }
    function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
    }
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = ({}).toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
        }
    }
    function createElement(query, ns) {
        var _parse = parse(query), tag = _parse.tag, id = _parse.id, className = _parse.className;
        var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
        if (id) element.id = id;
        if (className) {
            if (ns) element.setAttribute("class", className);
            else element.className = className;
        }
        return element;
    }
    function parse(query) {
        var chunks = query.split(/([.#])/);
        var className = "";
        var id = "";
        for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
            case ".":
                className += " ".concat(chunks[i + 1]);
                break;
            case "#":
                id = chunks[i + 1];
        }
        return {
            className: className.trim(),
            tag: chunks[0] || "div",
            id: id
        };
    }
    function html(query) {
        var element;
        var type = _typeof(query);
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        if (type === "string") element = createElement(query);
        else if (type === "function") {
            var Query = query;
            element = _construct(Query, args);
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var el = html;
    var h = html;
    html.extend = function extendHtml() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        return html.bind.apply(html, [
            this
        ].concat(args));
    };
    function unmount(parent, _child) {
        var child = _child;
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (childEl.parentNode) {
            doUnmount(child, childEl, parentEl);
            parentEl.removeChild(childEl);
        }
        return child;
    }
    function doUnmount(child, childEl, parentEl) {
        var hooks = childEl.__redom_lifecycle;
        if (hooksAreEmpty(hooks)) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        if (childEl.__redom_mounted) trigger(childEl, "onunmount");
        while(traverse){
            var parentHooks = traverse.__redom_lifecycle || {};
            for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
            if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
            traverse = traverse.parentNode;
        }
    }
    function hooksAreEmpty(hooks) {
        if (hooks == null) return true;
        for(var key in hooks){
            if (hooks[key]) return false;
        }
        return true;
    }
    var hookNames = [
        "onmount",
        "onremount",
        "onunmount"
    ];
    var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
    function mount(parent, _child, before, replace) {
        var child = _child;
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (child !== childEl) childEl.__redom_view = child;
        var wasMounted = childEl.__redom_mounted;
        var oldParent = childEl.parentNode;
        if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
        if (before != null) {
            if (replace) {
                var beforeEl = getEl(before);
                if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
                parentEl.replaceChild(childEl, beforeEl);
            } else parentEl.insertBefore(childEl, getEl(before));
        } else parentEl.appendChild(childEl);
        doMount(child, childEl, parentEl, oldParent);
        return child;
    }
    function trigger(el, eventName) {
        var _view$eventName;
        if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
        else if (eventName === "onunmount") el.__redom_mounted = false;
        var hooks = el.__redom_lifecycle;
        if (!hooks) return;
        var view = el.__redom_view;
        var hookCount = 0;
        view === null || view === undefined || (_view$eventName = view[eventName]) === null || _view$eventName === undefined || _view$eventName.call(view);
        for(var hook in hooks)if (hook) hookCount++;
        if (hookCount) {
            var traverse = el.firstChild;
            while(traverse){
                var next = traverse.nextSibling;
                trigger(traverse, eventName);
                traverse = next;
            }
        }
    }
    function doMount(child, childEl, parentEl, oldParent) {
        var _traverse;
        if (!childEl.__redom_lifecycle) childEl.__redom_lifecycle = {};
        var hooks = childEl.__redom_lifecycle;
        var remount = parentEl === oldParent;
        var hooksFound = false;
        var _iterator = _createForOfIteratorHelper(hookNames), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var hookName = _step.value;
                if (!remount) {
                    // if already mounted, skip this phase
                    if (child !== childEl) // only Views can have lifecycle events
                    {
                        if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
                    }
                }
                if (hooks[hookName]) hooksFound = true;
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        if (!hooksFound) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        var triggered = false;
        if (remount || (_traverse = traverse) !== null && _traverse !== undefined && _traverse.__redom_mounted) {
            trigger(childEl, remount ? "onremount" : "onmount");
            triggered = true;
        }
        while(traverse){
            var parent = traverse.parentNode;
            if (!traverse.__redom_lifecycle) traverse.__redom_lifecycle = {};
            var parentHooks = traverse.__redom_lifecycle;
            for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
            if (triggered) break;
            if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent !== null && parent !== undefined && parent.__redom_mounted) {
                trigger(traverse, remount ? "onremount" : "onmount");
                triggered = true;
            }
            traverse = parent;
        }
    }
    function setStyle(view, arg1, arg2) {
        var el = getEl(view);
        if (_typeof(arg1) === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
        else setStyleValue(el, arg1, arg2);
    }
    function setStyleValue(el, key, value) {
        el.style[key] = value == null ? "" : value;
    }
    var xlinkns = "http://www.w3.org/1999/xlink";
    function setAttr(view, arg1, arg2) {
        setAttrInternal(view, arg1, arg2);
    }
    function setAttrInternal(view, arg1, arg2, initial) {
        var el = getEl(view);
        var isObj = _typeof(arg1) === "object";
        if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
        else {
            var isSVG = el instanceof SVGElement;
            var isFunc = typeof arg2 === "function";
            if (arg1 === "style" && _typeof(arg2) === "object") setStyle(el, arg2);
            else if (isSVG && isFunc) el[arg1] = arg2;
            else if (arg1 === "dataset") setData(el, arg2);
            else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
            else {
                if (isSVG && arg1 === "xlink") {
                    setXlink(el, arg2);
                    return;
                }
                if (initial && arg1 === "class") {
                    setClassName(el, arg2);
                    return;
                }
                if (arg2 == null) el.removeAttribute(arg1);
                else el.setAttribute(arg1, arg2);
            }
        }
    }
    function setClassName(el, additionToClassName) {
        if (additionToClassName == null) el.removeAttribute("class");
        else if (el.classList) el.classList.add(additionToClassName);
        else if (_typeof(el.className) === "object" && el.className && el.className.baseVal) el.className.baseVal = "".concat(el.className.baseVal, " ").concat(additionToClassName).trim();
        else el.className = "".concat(el.className, " ").concat(additionToClassName).trim();
    }
    function setXlink(el, arg1, arg2) {
        if (_typeof(arg1) === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
        else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
        else el.removeAttributeNS(xlinkns, arg1, arg2);
    }
    function setData(el, arg1, arg2) {
        if (_typeof(arg1) === "object") for(var key in arg1)setData(el, key, arg1[key]);
        else if (arg2 != null) el.dataset[arg1] = arg2;
        else delete el.dataset[arg1];
    }
    function text(str) {
        return document.createTextNode(str != null ? str : "");
    }
    function parseArgumentsInternal(element, args, initial) {
        var _iterator = _createForOfIteratorHelper(args), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var arg = _step.value;
                if (arg !== 0 && !arg) continue;
                var type = _typeof(arg);
                if (type === "function") arg(element);
                else if (type === "string" || type === "number") element.appendChild(text(arg));
                else if (isNode(getEl(arg))) mount(element, arg);
                else if (arg.length) parseArgumentsInternal(element, arg, initial);
                else if (type === "object") setAttrInternal(element, arg, null, initial);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    }
    function ensureEl(parent) {
        return typeof parent === "string" ? html(parent) : getEl(parent);
    }
    function getEl(parent) {
        return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
    }
    function isNode(arg) {
        return arg === null || arg === undefined ? undefined : arg.nodeType;
    }
    function dispatch(child, data) {
        var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "redom";
        var childEl = getEl(child);
        var event = new CustomEvent(eventName, {
            bubbles: true,
            detail: data
        });
        childEl.dispatchEvent(event);
    }
    function setChildren(parent) {
        var parentEl = getEl(parent);
        for(var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)children[_key - 1] = arguments[_key];
        var current = traverse(parent, children, parentEl.firstChild);
        while(current){
            var next = current.nextSibling;
            unmount(parent, current);
            current = next;
        }
    }
    function traverse(parent, children, _current) {
        var current = _current;
        var childEls = Array(children.length);
        for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
        for(var _i = 0; _i < children.length; _i++){
            var child = children[_i];
            if (!child) continue;
            var childEl = childEls[_i];
            if (childEl === current) {
                current = current.nextSibling;
                continue;
            }
            if (isNode(childEl)) {
                var _current2;
                var next = (_current2 = current) === null || _current2 === undefined ? undefined : _current2.nextSibling;
                var exists = child.__redom_index != null;
                var replace = exists && next === childEls[_i + 1];
                mount(parent, child, current, replace);
                if (replace) current = next;
                continue;
            }
            if (child.length != null) current = traverse(parent, child, current);
        }
        return current;
    }
    function listPool(View, key, initData) {
        return new ListPool(View, key, initData);
    }
    var ListPool = /*#__PURE__*/ function() {
        function ListPool(View, key, initData) {
            _classCallCheck(this, ListPool);
            this.View = View;
            this.initData = initData;
            this.oldLookup = {};
            this.lookup = {};
            this.oldViews = [];
            this.views = [];
            if (key != null) this.key = typeof key === "function" ? key : propKey(key);
        }
        return _createClass(ListPool, [
            {
                key: "update",
                value: function update(data, context) {
                    var View = this.View, key = this.key, initData = this.initData;
                    var keySet = key != null;
                    var oldLookup = this.lookup;
                    var newLookup = {};
                    var newViews = Array(data.length);
                    var oldViews = this.views;
                    for(var i = 0; i < data.length; i++){
                        var _view$update, _view;
                        var item = data[i];
                        var view = undefined;
                        if (keySet) {
                            var id = key(item);
                            view = oldLookup[id] || new View(initData, item, i, data);
                            newLookup[id] = view;
                            view.__redom_id = id;
                        } else view = oldViews[i] || new View(initData, item, i, data);
                        (_view$update = (_view = view).update) === null || _view$update === undefined || _view$update.call(_view, item, i, data, context);
                        var el = getEl(view.el);
                        el.__redom_view = view;
                        newViews[i] = view;
                    }
                    this.oldViews = oldViews;
                    this.views = newViews;
                    this.oldLookup = oldLookup;
                    this.lookup = newLookup;
                }
            }
        ]);
    }();
    function propKey(key) {
        return function proppedKey(item) {
            return item[key];
        };
    }
    function list(parent, View, key, initData) {
        return new List(parent, View, key, initData);
    }
    var List = /*#__PURE__*/ function() {
        function List(parent, View, key, initData) {
            _classCallCheck(this, List);
            this.View = View;
            this.initData = initData;
            this.views = [];
            this.pool = new ListPool(View, key, initData);
            this.el = ensureEl(parent);
            this.keySet = key != null;
        }
        return _createClass(List, [
            {
                key: "update",
                value: function update(data, context) {
                    var keySet = this.keySet;
                    var oldViews = this.views;
                    this.pool.update(data || [], context);
                    var _this$pool = this.pool, views = _this$pool.views, lookup = _this$pool.lookup;
                    if (keySet) for(var i = 0; i < oldViews.length; i++){
                        var oldView = oldViews[i];
                        var id = oldView.__redom_id;
                        if (lookup[id] == null) {
                            oldView.__redom_index = null;
                            unmount(this, oldView);
                        }
                    }
                    for(var _i = 0; _i < views.length; _i++){
                        var view = views[_i];
                        view.__redom_index = _i;
                    }
                    setChildren(this, views);
                    if (keySet) this.lookup = lookup;
                    this.views = views;
                }
            }
        ]);
    }();
    List.extend = function extendList(parent, View, key, initData) {
        return List.bind(List, parent, View, key, initData);
    };
    list.extend = List.extend;
    function place(View, initData) {
        return new Place(View, initData);
    }
    var Place = /*#__PURE__*/ function() {
        function Place(View, initData) {
            _classCallCheck(this, Place);
            this.el = text("");
            this.visible = false;
            this.view = null;
            this._placeholder = this.el;
            if (View instanceof Node) this._el = View;
            else if (View.el instanceof Node) {
                this._el = View;
                this.view = View;
            } else this._View = View;
            this._initData = initData;
        }
        return _createClass(Place, [
            {
                key: "update",
                value: function update(visible, data) {
                    var placeholder = this._placeholder;
                    var parentNode = this.el.parentNode;
                    if (visible) {
                        var _this$view, _this$view$update;
                        if (!this.visible) {
                            if (this._el) {
                                mount(parentNode, this._el, placeholder);
                                unmount(parentNode, placeholder);
                                this.el = getEl(this._el);
                                this.visible = visible;
                            } else {
                                var View = this._View;
                                var view = new View(this._initData);
                                this.el = getEl(view);
                                this.view = view;
                                mount(parentNode, view, placeholder);
                                unmount(parentNode, placeholder);
                            }
                        }
                        (_this$view = this.view) === null || _this$view === undefined || (_this$view$update = _this$view.update) === null || _this$view$update === undefined || _this$view$update.call(_this$view, data);
                    } else if (this.visible) {
                        if (this._el) {
                            mount(parentNode, placeholder, this._el);
                            unmount(parentNode, this._el);
                            this.el = placeholder;
                            this.visible = visible;
                            return;
                        }
                        mount(parentNode, placeholder, this.view);
                        unmount(parentNode, this.view);
                        this.el = placeholder;
                        this.view = null;
                    }
                    this.visible = visible;
                }
            }
        ]);
    }();
    function ref(ctx, key, value) {
        ctx[key] = value;
        return value;
    }
    function router(parent, views, initData) {
        return new Router(parent, views, initData);
    }
    var Router = /*#__PURE__*/ function() {
        function Router(parent, views, initData) {
            _classCallCheck(this, Router);
            this.el = ensureEl(parent);
            this.views = views;
            this.Views = views; // backwards compatibility
            this.initData = initData;
        }
        return _createClass(Router, [
            {
                key: "update",
                value: function update(route, data) {
                    var _this$view, _this$view$update;
                    if (route !== this.route) {
                        var views = this.views;
                        var View = views[route];
                        this.route = route;
                        if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
                        else this.view = View && new View(this.initData, data);
                        setChildren(this.el, [
                            this.view
                        ]);
                    }
                    (_this$view = this.view) === null || _this$view === undefined || (_this$view$update = _this$view.update) === null || _this$view$update === undefined || _this$view$update.call(_this$view, data, route);
                }
            }
        ]);
    }();
    var ns = "http://www.w3.org/2000/svg";
    function svg(query) {
        var element;
        var type = _typeof(query);
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        if (type === "string") element = createElement(query, ns);
        else if (type === "function") {
            var Query = query;
            element = _construct(Query, args);
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var s = svg;
    svg.extend = function extendSvg() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        return svg.bind.apply(svg, [
            this
        ].concat(args));
    };
    svg.ns = ns;
    function viewFactory(views, key) {
        if (!views || _typeof(views) !== "object") throw new Error("views must be an object");
        if (!key || typeof key !== "string") throw new Error("key must be a string");
        return function factoryView(initData, item, i, data) {
            var viewKey = item[key];
            var View = views[viewKey];
            if (View) return new View(initData, item, i, data);
            throw new Error("view ".concat(viewKey, " not found"));
        };
    }
    exports1.List = List;
    exports1.ListPool = ListPool;
    exports1.Place = Place;
    exports1.Router = Router;
    exports1.dispatch = dispatch;
    exports1.el = el;
    exports1.h = h;
    exports1.html = html;
    exports1.list = list;
    exports1.listPool = listPool;
    exports1.mount = mount;
    exports1.place = place;
    exports1.ref = ref;
    exports1.router = router;
    exports1.s = s;
    exports1.setAttr = setAttr;
    exports1.setChildren = setChildren;
    exports1.setData = setData;
    exports1.setStyle = setStyle;
    exports1.setXlink = setXlink;
    exports1.svg = svg;
    exports1.text = text;
    exports1.unmount = unmount;
    exports1.viewFactory = viewFactory;
});

},{}],"1cMK4":[function(require,module,exports,__globalThis) {
!function(t, n) {
    module.exports = n();
}("undefined" != typeof self ? self : this, function() {
    return function() {
        "use strict";
        var t = {
            407: function(t, n, e) {
                e.d(n, {
                    default: function() {
                        return N;
                    }
                });
                var o = /([:*])(\w+)/g, r = /\*/g, i = /\/\?/g;
                function a(t) {
                    return void 0 === t && (t = "/"), v() ? location.pathname + location.search + location.hash : t;
                }
                function s(t) {
                    return t.replace(/\/+$/, "").replace(/^\/+/, "");
                }
                function c(t) {
                    return "string" == typeof t;
                }
                function u(t) {
                    return t && t.indexOf("#") >= 0 && t.split("#").pop() || "";
                }
                function h(t) {
                    var n = s(t).split(/\?(.*)?$/);
                    return [
                        s(n[0]),
                        n.slice(1).join("")
                    ];
                }
                function f(t) {
                    for(var n = {}, e = t.split("&"), o = 0; o < e.length; o++){
                        var r = e[o].split("=");
                        if ("" !== r[0]) {
                            var i = decodeURIComponent(r[0]);
                            n[i] ? (Array.isArray(n[i]) || (n[i] = [
                                n[i]
                            ]), n[i].push(decodeURIComponent(r[1] || ""))) : n[i] = decodeURIComponent(r[1] || "");
                        }
                    }
                    return n;
                }
                function l(t, n) {
                    var e, a = h(s(t.currentLocationPath)), l = a[0], p = a[1], d = "" === p ? null : f(p), v = [];
                    if (c(n.path)) {
                        if (e = "(?:/^|^)" + s(n.path).replace(o, function(t, n, e) {
                            return v.push(e), "([^/]+)";
                        }).replace(r, "?(?:.*)").replace(i, "/?([^/]+|)") + "$", "" === s(n.path) && "" === s(l)) return {
                            url: l,
                            queryString: p,
                            hashString: u(t.to),
                            route: n,
                            data: null,
                            params: d
                        };
                    } else e = n.path;
                    var g = new RegExp(e, ""), m = l.match(g);
                    if (m) {
                        var y = c(n.path) ? function(t, n) {
                            return 0 === n.length ? null : t ? t.slice(1, t.length).reduce(function(t, e, o) {
                                return null === t && (t = {}), t[n[o]] = decodeURIComponent(e), t;
                            }, null) : null;
                        }(m, v) : m.groups ? m.groups : m.slice(1);
                        return {
                            url: s(l.replace(new RegExp("^" + t.instance.root), "")),
                            queryString: p,
                            hashString: u(t.to),
                            route: n,
                            data: y,
                            params: d
                        };
                    }
                    return !1;
                }
                function p() {
                    return !("undefined" == typeof window || !window.history || !window.history.pushState);
                }
                function d(t, n) {
                    return void 0 === t[n] || !0 === t[n];
                }
                function v() {
                    return "undefined" != typeof window;
                }
                function g(t, n) {
                    return void 0 === t && (t = []), void 0 === n && (n = {}), t.filter(function(t) {
                        return t;
                    }).forEach(function(t) {
                        [
                            "before",
                            "after",
                            "already",
                            "leave"
                        ].forEach(function(e) {
                            t[e] && (n[e] || (n[e] = []), n[e].push(t[e]));
                        });
                    }), n;
                }
                function m(t, n, e) {
                    var o = n || {}, r = 0;
                    !function n() {
                        t[r] ? Array.isArray(t[r]) ? (t.splice.apply(t, [
                            r,
                            1
                        ].concat(t[r][0](o) ? t[r][1] : t[r][2])), n()) : t[r](o, function(t) {
                            void 0 === t || !0 === t ? (r += 1, n()) : e && e(o);
                        }) : e && e(o);
                    }();
                }
                function y(t, n) {
                    void 0 === t.currentLocationPath && (t.currentLocationPath = t.to = a(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), n();
                }
                function _(t, n) {
                    for(var e = 0; e < t.instance.routes.length; e++){
                        var o = l(t, t.instance.routes[e]);
                        if (o && (t.matches || (t.matches = []), t.matches.push(o), "ONE" === t.resolveOptions.strategy)) return void n();
                    }
                    n();
                }
                function k(t, n) {
                    t.navigateOptions && (void 0 !== t.navigateOptions.shouldResolve && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), void 0 !== t.navigateOptions.silent && console.warn('"silent" is deprecated. Please check the documentation.')), n();
                }
                function O(t, n) {
                    !0 === t.navigateOptions.force ? (t.instance._setCurrent([
                        t.instance._pathToMatchObject(t.to)
                    ]), n(!1)) : n();
                }
                m.if = function(t, n, e) {
                    return Array.isArray(n) || (n = [
                        n
                    ]), Array.isArray(e) || (e = [
                        e
                    ]), [
                        t,
                        n,
                        e
                    ];
                };
                var w = v(), L = p();
                function b(t, n) {
                    if (d(t.navigateOptions, "updateBrowserURL")) {
                        var e = ("/" + t.to).replace(/\/\//g, "/"), o = w && t.resolveOptions && !0 === t.resolveOptions.hash;
                        L ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", o ? "#" + e : e), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                            if (!o) {
                                var n = location.hash;
                                location.hash = "", location.hash = n;
                            }
                            t.instance.__freezeListening = !1;
                        }, 1))) : w && (window.location.href = t.to);
                    }
                    n();
                }
                function A(t, n) {
                    var e = t.instance;
                    e.lastResolved() ? m(e.lastResolved().map(function(n) {
                        return function(e, o) {
                            if (n.route.hooks && n.route.hooks.leave) {
                                var r = !1, i = t.instance.matchLocation(n.route.path, t.currentLocationPath, !1);
                                r = "*" !== n.route.path ? !i : !(t.matches && t.matches.find(function(t) {
                                    return n.route.path === t.route.path;
                                })), d(t.navigateOptions, "callHooks") && r ? m(n.route.hooks.leave.map(function(n) {
                                    return function(e, o) {
                                        return n(function(n) {
                                            !1 === n ? t.instance.__markAsClean(t) : o();
                                        }, t.matches && t.matches.length > 0 ? 1 === t.matches.length ? t.matches[0] : t.matches : void 0);
                                    };
                                }).concat([
                                    function() {
                                        return o();
                                    }
                                ])) : o();
                            } else o();
                        };
                    }), {}, function() {
                        return n();
                    }) : n();
                }
                function P(t, n) {
                    d(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), n();
                }
                var R = [
                    function(t, n) {
                        var e = t.instance.lastResolved();
                        if (e && e[0] && e[0].route === t.match.route && e[0].url === t.match.url && e[0].queryString === t.match.queryString) return e.forEach(function(n) {
                            n.route.hooks && n.route.hooks.already && d(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(n) {
                                return n(t.match);
                            });
                        }), void n(!1);
                        n();
                    },
                    function(t, n) {
                        t.match.route.hooks && t.match.route.hooks.before && d(t.navigateOptions, "callHooks") ? m(t.match.route.hooks.before.map(function(n) {
                            return function(e, o) {
                                return n(function(n) {
                                    !1 === n ? t.instance.__markAsClean(t) : o();
                                }, t.match);
                            };
                        }).concat([
                            function() {
                                return n();
                            }
                        ])) : n();
                    },
                    function(t, n) {
                        d(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), n();
                    },
                    function(t, n) {
                        t.match.route.hooks && t.match.route.hooks.after && d(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(n) {
                            return n(t.match);
                        }), n();
                    }
                ], S = [
                    A,
                    function(t, n) {
                        var e = t.instance._notFoundRoute;
                        if (e) {
                            t.notFoundHandled = !0;
                            var o = h(t.currentLocationPath), r = o[0], i = o[1], a = u(t.to);
                            e.path = s(r);
                            var c = {
                                url: e.path,
                                queryString: i,
                                hashString: a,
                                data: null,
                                route: e,
                                params: "" !== i ? f(i) : null
                            };
                            t.matches = [
                                c
                            ], t.match = c;
                        }
                        n();
                    },
                    m.if(function(t) {
                        return t.notFoundHandled;
                    }, R.concat([
                        P
                    ]), [
                        function(t, n) {
                            t.resolveOptions && !1 !== t.resolveOptions.noMatchWarning && void 0 !== t.resolveOptions.noMatchWarning || console.warn('Navigo: "' + t.currentLocationPath + "\" didn't match any of the registered routes."), n();
                        },
                        function(t, n) {
                            t.instance._setCurrent(null), n();
                        }
                    ])
                ];
                function E() {
                    return (E = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function x(t, n) {
                    var e = 0;
                    A(t, function o() {
                        e !== t.matches.length ? m(R, E({}, t, {
                            match: t.matches[e]
                        }), function() {
                            e += 1, o();
                        }) : P(t, n);
                    });
                }
                function H(t) {
                    t.instance.__markAsClean(t);
                }
                function j() {
                    return (j = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var C = "[data-navigo]";
                function N(t, n) {
                    var e, o = n || {
                        strategy: "ONE",
                        hash: !1,
                        noMatchWarning: !1,
                        linksSelector: C
                    }, r = this, i = "/", d = null, w = [], L = !1, A = p(), P = v();
                    function R(t) {
                        return t.indexOf("#") >= 0 && (t = !0 === o.hash ? t.split("#")[1] || "/" : t.split("#")[0]), t;
                    }
                    function E(t) {
                        return s(i + "/" + s(t));
                    }
                    function N(t, n, e, o) {
                        return t = c(t) ? E(t) : t, {
                            name: o || s(String(t)),
                            path: t,
                            handler: n,
                            hooks: g(e)
                        };
                    }
                    function U(t, n) {
                        if (!r.__dirty) {
                            r.__dirty = !0, t = t ? s(i) + "/" + s(t) : void 0;
                            var e = {
                                instance: r,
                                to: t,
                                currentLocationPath: t,
                                navigateOptions: {},
                                resolveOptions: j({}, o, n)
                            };
                            return m([
                                y,
                                _,
                                m.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S)
                            ], e, H), !!e.matches && e.matches;
                        }
                        r.__waiting.push(function() {
                            return r.resolve(t, n);
                        });
                    }
                    function q(t, n) {
                        if (r.__dirty) r.__waiting.push(function() {
                            return r.navigate(t, n);
                        });
                        else {
                            r.__dirty = !0, t = s(i) + "/" + s(t);
                            var e = {
                                instance: r,
                                to: t,
                                navigateOptions: n || {},
                                resolveOptions: n && n.resolveOptions ? n.resolveOptions : o,
                                currentLocationPath: R(t)
                            };
                            m([
                                k,
                                O,
                                _,
                                m.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S),
                                b,
                                H
                            ], e, H);
                        }
                    }
                    function F() {
                        if (P) return (P ? [].slice.call(document.querySelectorAll(o.linksSelector || C)) : []).forEach(function(t) {
                            "false" !== t.getAttribute("data-navigo") && "_blank" !== t.getAttribute("target") ? t.hasListenerAttached || (t.hasListenerAttached = !0, t.navigoHandler = function(n) {
                                if ((n.ctrlKey || n.metaKey) && "a" === n.target.tagName.toLowerCase()) return !1;
                                var e = t.getAttribute("href");
                                if (null == e) return !1;
                                if (e.match(/^(http|https)/) && "undefined" != typeof URL) try {
                                    var o = new URL(e);
                                    e = o.pathname + o.search;
                                } catch (t) {}
                                var i = function(t) {
                                    if (!t) return {};
                                    var n, e = t.split(","), o = {};
                                    return e.forEach(function(t) {
                                        var e = t.split(":").map(function(t) {
                                            return t.replace(/(^ +| +$)/g, "");
                                        });
                                        switch(e[0]){
                                            case "historyAPIMethod":
                                                o.historyAPIMethod = e[1];
                                                break;
                                            case "resolveOptionsStrategy":
                                                n || (n = {}), n.strategy = e[1];
                                                break;
                                            case "resolveOptionsHash":
                                                n || (n = {}), n.hash = "true" === e[1];
                                                break;
                                            case "updateBrowserURL":
                                            case "callHandler":
                                            case "updateState":
                                            case "force":
                                                o[e[0]] = "true" === e[1];
                                        }
                                    }), n && (o.resolveOptions = n), o;
                                }(t.getAttribute("data-navigo-options"));
                                L || (n.preventDefault(), n.stopPropagation(), r.navigate(s(e), i));
                            }, t.addEventListener("click", t.navigoHandler)) : t.hasListenerAttached && t.removeEventListener("click", t.navigoHandler);
                        }), r;
                    }
                    function I(t, n, e) {
                        var o = w.find(function(n) {
                            return n.name === t;
                        }), r = null;
                        if (o) {
                            if (r = o.path, n) for(var a in n)r = r.replace(":" + a, n[a]);
                            r = r.match(/^\//) ? r : "/" + r;
                        }
                        return r && e && !e.includeRoot && (r = r.replace(new RegExp("^/" + i), "")), r;
                    }
                    function M(t) {
                        var n = h(s(t)), o = n[0], r = n[1], i = "" === r ? null : f(r);
                        return {
                            url: o,
                            queryString: r,
                            hashString: u(t),
                            route: N(o, function() {}, [
                                e
                            ], o),
                            data: null,
                            params: i
                        };
                    }
                    function T(t, n, e) {
                        return "string" == typeof n && (n = z(n)), n ? (n.hooks[t] || (n.hooks[t] = []), n.hooks[t].push(e), function() {
                            n.hooks[t] = n.hooks[t].filter(function(t) {
                                return t !== e;
                            });
                        }) : (console.warn("Route doesn't exists: " + n), function() {});
                    }
                    function z(t) {
                        return "string" == typeof t ? w.find(function(n) {
                            return n.name === E(t);
                        }) : w.find(function(n) {
                            return n.handler === t;
                        });
                    }
                    t ? i = s(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'), this.root = i, this.routes = w, this.destroyed = L, this.current = d, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = function(t) {
                        t.instance.__dirty = !1, t.instance.__waiting.length > 0 && t.instance.__waiting.shift()();
                    }, this.on = function(t, n, o) {
                        var r = this;
                        return "object" != typeof t || t instanceof RegExp ? ("function" == typeof t && (o = n, n = t, t = i), w.push(N(t, n, [
                            e,
                            o
                        ])), this) : (Object.keys(t).forEach(function(n) {
                            if ("function" == typeof t[n]) r.on(n, t[n]);
                            else {
                                var o = t[n], i = o.uses, a = o.as, s = o.hooks;
                                w.push(N(n, i, [
                                    e,
                                    s
                                ], a));
                            }
                        }), this);
                    }, this.off = function(t) {
                        return this.routes = w = w.filter(function(n) {
                            return c(t) ? s(n.path) !== s(t) : "function" == typeof t ? t !== n.handler : String(n.path) !== String(t);
                        }), this;
                    }, this.resolve = U, this.navigate = q, this.navigateByName = function(t, n, e) {
                        var o = I(t, n);
                        return null !== o && (q(o.replace(new RegExp("^/?" + i), ""), e), !0);
                    }, this.destroy = function() {
                        this.routes = w = [], A && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = L = !0;
                    }, this.notFound = function(t, n) {
                        return r._notFoundRoute = N("*", t, [
                            e,
                            n
                        ], "__NOT_FOUND__"), this;
                    }, this.updatePageLinks = F, this.link = function(t) {
                        return "/" + i + "/" + s(t);
                    }, this.hooks = function(t) {
                        return e = t, this;
                    }, this.extractGETParameters = function(t) {
                        return h(R(t));
                    }, this.lastResolved = function() {
                        return d;
                    }, this.generate = I, this.getLinkPath = function(t) {
                        return t.getAttribute("href");
                    }, this.match = function(t) {
                        var n = {
                            instance: r,
                            currentLocationPath: t,
                            to: t,
                            navigateOptions: {},
                            resolveOptions: o
                        };
                        return _(n, function() {}), !!n.matches && n.matches;
                    }, this.matchLocation = function(t, n, e) {
                        void 0 === n || void 0 !== e && !e || (n = E(n));
                        var o = {
                            instance: r,
                            to: n,
                            currentLocationPath: n
                        };
                        return y(o, function() {}), "string" == typeof t && (t = void 0 === e || e ? E(t) : t), l(o, {
                            name: String(t),
                            path: t,
                            handler: function() {},
                            hooks: {}
                        }) || !1;
                    }, this.getCurrentLocation = function() {
                        return M(s(a(i)).replace(new RegExp("^" + i), ""));
                    }, this.addBeforeHook = T.bind(this, "before"), this.addAfterHook = T.bind(this, "after"), this.addAlreadyHook = T.bind(this, "already"), this.addLeaveHook = T.bind(this, "leave"), this.getRoute = z, this._pathToMatchObject = M, this._clean = s, this._checkForAHash = R, this._setCurrent = function(t) {
                        return d = r.current = t;
                    }, (function() {
                        A && (this.__popstateListener = function() {
                            r.__freezeListening || U();
                        }, window.addEventListener("popstate", this.__popstateListener));
                    }).call(this), F.call(this);
                }
            }
        }, n = {};
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {}
            };
            return t[o](r, r.exports, e), r.exports;
        }
        return e.d = function(t, n) {
            for(var o in n)e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: n[o]
            });
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e(407);
    }().default;
});

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["bnuFr","bNJxx"], "bNJxx", "parcelRequire2bed", {})

//# sourceMappingURL=my-app.36960861.js.map
