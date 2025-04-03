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
      return res === false ? {} : newRequire(res);
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
})({"5g1XM":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "06b291ed9d368ec5";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "85fdda0b4852f048";
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
            if (err.message) console.error(err.message);
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

},{}],"ig7op":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameTooglePause", ()=>gameTooglePause);
var _constantsJs = require("./constants.js");
var _tetrisJs = require("./tetris.js");
var _tetrisJsDefault = parcelHelpers.interopDefault(_tetrisJs);
var _pieceBuilderJs = require("./pieceBuilder.js");
var _pieceBuilderJsDefault = parcelHelpers.interopDefault(_pieceBuilderJs);
var _matrixJs = require("./matrix.js");
var _matrixJsDefault = parcelHelpers.interopDefault(_matrixJs);
const matrix = new (0, _matrixJsDefault.default)();
let game = null;
let error = null;
let stopIntervalId = null;
function gameStartup() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    const pieceBuilder = new (0, _pieceBuilderJsDefault.default)(matrix);
    game = new (0, _tetrisJsDefault.default)(ctx, matrix, pieceBuilder);
    game.render();
    game.iterate();
    stopIntervalId = window.setInterval(()=>{
        gameLoop();
    }, (0, _constantsJs.SPEED));
}
function gameLoop() {
    try {
        if (!game.isOver && !error && !game.paused) game.iterate();
        if (game.isOver) {
            window.clearInterval(stopIntervalId);
            game.over();
        }
    } catch (err) {
        game.status();
        error = err;
        console.error(err);
    }
}
const keyMapping = {
    "ArrowLeft": ()=>game.wannaLeft(),
    "ArrowRight": ()=>game.wannaRight(),
    "Space": ()=>game.wannaRotate(),
    "Escape": ()=>game.tooglePause()
};
document.addEventListener("keyup", (ev)=>{
    const { key, code } = ev;
    const index = code ?? key;
    const mappedAction = keyMapping[index];
    if (mappedAction) mappedAction();
});
window.onload = ()=>gameStartup();
const gameTooglePause = ()=>{
    game.tooglePause();
};

},{"./constants.js":"ipNfj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./tetris.js":"h8RPU","./pieceBuilder.js":"lfNMi","./matrix.js":"2x4Q9"}],"ipNfj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BLOCK_SIZE", ()=>BLOCK_SIZE);
parcelHelpers.export(exports, "ROWS", ()=>ROWS);
parcelHelpers.export(exports, "COLS", ()=>COLS);
parcelHelpers.export(exports, "DOWN_ITERATIONS", ()=>DOWN_ITERATIONS);
parcelHelpers.export(exports, "SPEED", ()=>SPEED);
parcelHelpers.export(exports, "NO_COLOR", ()=>NO_COLOR);
parcelHelpers.export(exports, "ACTIVE_COLOR", ()=>ACTIVE_COLOR);
parcelHelpers.export(exports, "BOUND_COLOR", ()=>BOUND_COLOR);
parcelHelpers.export(exports, "X_AXIS_LOWER_BOUND", ()=>X_AXIS_LOWER_BOUND);
parcelHelpers.export(exports, "X_AXIS_HIGHER_BOUND", ()=>X_AXIS_HIGHER_BOUND);
parcelHelpers.export(exports, "Y_AXIS_LOWER_BOUND", ()=>Y_AXIS_LOWER_BOUND);
parcelHelpers.export(exports, "Y_AXIS_HIGHER_BOUND", ()=>Y_AXIS_HIGHER_BOUND);
parcelHelpers.export(exports, "EMPTY_CELL", ()=>EMPTY_CELL);
parcelHelpers.export(exports, "MOVE", ()=>MOVE);
const BLOCK_SIZE = 40;
const ROWS = 20;
const COLS = 10;
const DOWN_ITERATIONS = 10;
const SPEED = 20;
const NO_COLOR = 0;
const ACTIVE_COLOR = 7;
const BOUND_COLOR = ACTIVE_COLOR + 1;
const X_AXIS_LOWER_BOUND = 0;
const X_AXIS_HIGHER_BOUND = COLS;
const Y_AXIS_LOWER_BOUND = 0;
const Y_AXIS_HIGHER_BOUND = ROWS;
const EMPTY_CELL = 0;
const MOVE = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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

},{}],"h8RPU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _drawerJs = require("./drawer.js");
var _drawerJsDefault = parcelHelpers.interopDefault(_drawerJs);
var _constantsJs = require("./constants.js");
class Tetris {
    constructor(canvas, matrix, pieceBuilder){
        this.matrix = matrix;
        this.drawer = new (0, _drawerJsDefault.default)(canvas);
        this.pieceBuilder = pieceBuilder;
        this.iteration = 0;
        this.isOver = false;
        this.rotate = false;
        this.paused = false;
        this.buildActive();
    }
    iterate() {
        this.moveActive();
        if (this.rotate) {
            this.active.wannaRotate();
            this.rotate = false;
        }
        if (this.mustDown()) this.down();
        this.render();
    }
    // TODO: Class Matrix
    hasTetrisLines() {
        const lines = [];
        for(let i = 0; i < (0, _constantsJs.ROWS); i++){
            let hasLine = true;
            for(let j = 0; j < (0, _constantsJs.COLS) && hasLine; j++)hasLine = this.matrix.at(j, i).get() > 0 && hasLine //TODO: igual se rompe en ciertas situaciones
            ;
            if (hasLine) lines.push(i);
        }
        return lines;
    }
    applyTetris(lines) {
        console.log('LINES', lines);
        for (const line of lines)this.applyLine(line);
    }
    applyLine(line) {
        for(let i = line; i > 0; i--)for(let j = 0; j < (0, _constantsJs.COLS); j++){
            const color = this.matrix.at(j, i - 1).get();
            this.matrix.at(j, i).set(color);
        }
    }
    tooglePause() {
        this.paused = !this.paused;
    }
    draw(x, y) {
        const color = this.matrix.at(x, y).get();
        if (color > 0) this.drawer.block(x, y, color);
    }
    render() {
        this.table();
        this.drawer.clear();
        for(let i = 0; i < (0, _constantsJs.COLS); i++)for(let j = 0; j < (0, _constantsJs.ROWS); j++)this.draw(i, j);
    }
    table() {
        const table = document.getElementById('matrix');
        table.innerHTML = "";
        for(let i = 0; i < (0, _constantsJs.COLS); i++){
            const row = document.createElement('tr');
            for(let j = 0; j < (0, _constantsJs.ROWS); j++){
                const cell = document.createElement('td');
                cell.textContent = this.matrix.at(i, j).get();
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
    down() {
        if (this.active.canDown()) this.active.down();
        else {
            this.active.destroy();
            this.active = null;
            this.buildActive();
            const lines = this.hasTetrisLines();
            if (lines.length > 0) this.applyTetris(lines);
            this.updateGameOver();
        }
    }
    updateGameOver() {
        this.isOver = !this.active.canDown();
    }
    mustDown() {
        return this.iteration++ % (0, _constantsJs.DOWN_ITERATIONS) === 0;
    }
    moveActive() {
        if (this.move === (0, _constantsJs.MOVE).LEFT) {
            console.log('moving left');
            this.active.wannaLeft();
        }
        if (this.move === (0, _constantsJs.MOVE).RIGHT) {
            console.log('moving right');
            this.active.wannaRight();
        }
        this.move = (0, _constantsJs.MOVE).NONE;
    }
    buildActive() {
        this.active = this.pieceBuilder.getRandom();
    }
    wannaLeft() {
        console.log('wanna left');
        this.move = (0, _constantsJs.MOVE).LEFT;
    }
    wannaRight() {
        console.log('wanna right');
        this.move = (0, _constantsJs.MOVE).RIGHT;
    }
    wannaRotate() {
        console.log('wanna rotate');
        this.rotate = true;
    }
    status() {
        console.log('active', this.active);
        console.log('game', this.game);
        console.log('matrix', this.matrix);
    }
    over() {
        this.drawer.gameOver();
    }
}
exports.default = Tetris;

},{"./drawer.js":"5fRTu","./constants.js":"ipNfj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5fRTu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
class Drawer {
    constructor(canvas){
        this.canvas = canvas;
    }
    block(x, y, color) {
        const posX = x * 40;
        const posY = y * 40;
        this.canvas.fillStyle = getColor(color);
        this.canvas.fillRect(posX, posY, (0, _constantsJs.BLOCK_SIZE), (0, _constantsJs.BLOCK_SIZE));
        this.canvas.strokeStyle = getDarkerColors(color);
        this.canvas.strokeRect(posX, posY, (0, _constantsJs.BLOCK_SIZE), (0, _constantsJs.BLOCK_SIZE));
    }
    clear() {
        this.canvas.fillStyle = "white";
        this.canvas.fillRect(0, 0, (0, _constantsJs.COLS) * (0, _constantsJs.BLOCK_SIZE), (0, _constantsJs.ROWS) * (0, _constantsJs.BLOCK_SIZE));
    }
    gameOver() {
        this.canvas.font = "48px roboto";
        this.canvas.fillStyle = "#000000";
        this.canvas.fillText("Game Over!", 85, 376);
    }
}
exports.default = Drawer;
function getColor(number) {
    const colors = [
        "#FF6B6B",
        "#FF9F1C",
        "#FFD23F",
        "#17C3B2",
        "#227C9D",
        "#8B5CF6",
        "#E6E6EA"
    ];
    return colors[number % colors.length];
}
function getDarkerColors(number) {
    const borders = [
        "#C34C4C",
        "#B36D14",
        "#B8962E",
        "#0F8175",
        "#165166",
        "#5A3EAB",
        "#A1A1A5"
    ];
    return borders[number % borders.length];
}

},{"./constants.js":"ipNfj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lfNMi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pieceJs = require("./piece.js");
var _pieceJsDefault = parcelHelpers.interopDefault(_pieceJs);
var _utilsJs = require("./utils.js");
var _constantsJs = require("./constants.js");
var _blockJs = require("./block.js");
var _blockJsDefault = parcelHelpers.interopDefault(_blockJs);
var _rotateTableJs = require("./rotateTable.js");
var _piece360Js = require("./piece360.js");
var _piece360JsDefault = parcelHelpers.interopDefault(_piece360Js);
var _piece180Js = require("./piece180.js");
var _piece180JsDefault = parcelHelpers.interopDefault(_piece180Js);
class PieceBuilder {
    constructor(matrix){
        this.matrix = matrix;
    }
    getRandom() {
        const map = [
            this.buildSquare,
            this.buildT,
            this.buildL,
            this.buildLPrime,
            this.buildS,
            this.buildSPrime,
            this.buildStick
        ];
        const index = (0, _utilsJs.random)(map.length);
        const action = map[index].bind(this);
        const piece = action();
        return piece;
    }
    buildSquare() {
        const x = (0, _utilsJs.random)((0, _constantsJs.COLS) - 1);
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 1;
        const b1 = new (0, _blockJsDefault.default)(x, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x + 1, 0, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x, 1, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x + 1, 1, randomColor, this.matrix);
        const piece = new (0, _piece360JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], null, null);
        return piece;
    }
    buildT() {
        const x = 4;
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 2;
        const b1 = new (0, _blockJsDefault.default)(x + 1, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x + 1, 1, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x + 1, 2, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x + 0, 1, randomColor, this.matrix);
        const rotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 0), new (0, _blockJs.RelativePosition)(1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 0), new (0, _blockJs.RelativePosition)(-1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 1), new (0, _blockJs.RelativePosition)(-1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, -1), new (0, _blockJs.RelativePosition)(1, 1))
        ]);
        const piece = new (0, _piece360JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], b2, rotateTable);
        return piece;
    }
    buildL() {
        const x = 4;
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 3;
        const b1 = new (0, _blockJsDefault.default)(x + 0, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x + 0, 1, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x + 0, 2, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x + 1, 0, randomColor, this.matrix);
        const rotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 0), new (0, _blockJs.RelativePosition)(1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 0), new (0, _blockJs.RelativePosition)(-1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 1), new (0, _blockJs.RelativePosition)(-1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, -1), new (0, _blockJs.RelativePosition)(1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, -1), new (0, _blockJs.RelativePosition)(0, 2)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 1), new (0, _blockJs.RelativePosition)(-2, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 1), new (0, _blockJs.RelativePosition)(0, -2)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, -1), new (0, _blockJs.RelativePosition)(2, 0))
        ]);
        const piece = new (0, _piece360JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], b2, rotateTable);
        return piece;
    }
    buildLPrime() {
        const x = 4;
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 4;
        const b1 = new (0, _blockJsDefault.default)(x + 1, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x + 1, 1, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x + 1, 2, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x + 0, 0, randomColor, this.matrix);
        const rotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 0), new (0, _blockJs.RelativePosition)(1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 0), new (0, _blockJs.RelativePosition)(-1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 1), new (0, _blockJs.RelativePosition)(-1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, -1), new (0, _blockJs.RelativePosition)(1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, -1), new (0, _blockJs.RelativePosition)(0, 2)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 1), new (0, _blockJs.RelativePosition)(-2, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 1), new (0, _blockJs.RelativePosition)(0, -2)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, -1), new (0, _blockJs.RelativePosition)(2, 0))
        ]);
        const piece = new (0, _piece360JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], b2, rotateTable);
        return piece;
    }
    buildStick() {
        const x = 4;
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 5;
        const b1 = new (0, _blockJsDefault.default)(x, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x, 1, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x, 2, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x, 3, randomColor, this.matrix);
        const rotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, -1), new (0, _blockJs.RelativePosition)(-1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 1), new (0, _blockJs.RelativePosition)(1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 2), new (0, _blockJs.RelativePosition)(2, -2))
        ]);
        const inverseRotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 0), new (0, _blockJs.RelativePosition)(1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 0), new (0, _blockJs.RelativePosition)(-1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(2, 0), new (0, _blockJs.RelativePosition)(-2, 2))
        ]);
        const piece = new (0, _piece180JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], b2, rotateTable, inverseRotateTable);
        return piece;
    }
    buildS() {
        const x = 4;
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 6;
        const b1 = new (0, _blockJsDefault.default)(x - 1, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x + 0, 0, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x + 0, 1, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x + 1, 1, randomColor, this.matrix);
        const rotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, -1), new (0, _blockJs.RelativePosition)(2, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, -1), new (0, _blockJs.RelativePosition)(1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 0), new (0, _blockJs.RelativePosition)(-1, 1))
        ]);
        const inverseRotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, -1), new (0, _blockJs.RelativePosition)(-2, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, 0), new (0, _blockJs.RelativePosition)(-1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 1), new (0, _blockJs.RelativePosition)(1, -1))
        ]);
        const piece = new (0, _piece180JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], b3, rotateTable, inverseRotateTable);
        return piece;
    }
    buildSPrime() {
        const x = 4;
        const randomColor = (0, _constantsJs.ACTIVE_COLOR) + 7;
        const b1 = new (0, _blockJsDefault.default)(x + 1, 0, randomColor, this.matrix);
        const b2 = new (0, _blockJsDefault.default)(x + 0, 0, randomColor, this.matrix);
        const b3 = new (0, _blockJsDefault.default)(x + 0, 1, randomColor, this.matrix);
        const b4 = new (0, _blockJsDefault.default)(x - 1, 1, randomColor, this.matrix);
        const rotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(1, -1), new (0, _blockJs.RelativePosition)(-2, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, -1), new (0, _blockJs.RelativePosition)(-1, 1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 0), new (0, _blockJs.RelativePosition)(1, 1))
        ]);
        const inverseRotateTable = new (0, _rotateTableJs.RotateTable)([
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 0), new (0, _blockJs.RelativePosition)(0, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, -1), new (0, _blockJs.RelativePosition)(2, 0)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(-1, 0), new (0, _blockJs.RelativePosition)(1, -1)),
            new (0, _rotateTableJs.Rotation)(new (0, _blockJs.RelativePosition)(0, 1), new (0, _blockJs.RelativePosition)(-1, -1))
        ]);
        const piece = new (0, _piece180JsDefault.default)([
            b1,
            b2,
            b3,
            b4
        ], b3, rotateTable, inverseRotateTable);
        return piece;
    }
}
exports.default = PieceBuilder;

},{"./piece.js":"lIImO","./utils.js":"hCHNK","./constants.js":"ipNfj","./block.js":"fuyCc","./rotateTable.js":"dH2A0","./piece360.js":"8D6Yd","./piece180.js":"kk327","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lIImO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("./block");
var _game = require("./game");
class Piece {
    constructor(blocks, rotateCenter, rotateTable){
        this.blocks = blocks.sort((a, b)=>{
            return b.y - a.y;
        });
        this.rotateCenter = rotateCenter;
        this.rotateTable = rotateTable;
    }
    canTranslate(translation) {
        const virtualBlocks = this.blocks.map((b)=>{
            b.translate(translation);
        });
        const areValid = virtualBlocks.every((b)=>b.isValid());
        return areValid;
    }
    wannaLeft() {
        const canMove = this.blocks.every((b)=>b.canLeft());
        if (!canMove) return;
        this.takeSnapshot();
        for (const block of this.blocks)block.left();
        this.fixMatrix();
    }
    // wannaLeft() {
    //   const translation = new RelativePosition(-1,0)
    //   const canMove = this.canTranslate(translation)
    //   if (!canMove) return
    //   this.takeSnapshot()
    //   for (const block of this.blocks) {
    //     block.left()
    //   }
    //   this.fixMatrix()
    // }
    wannaRight() {
        const canMove = this.blocks.every((b)=>b.canRight());
        if (!canMove) return;
        this.takeSnapshot();
        for (const block of this.blocks)block.right();
        this.fixMatrix();
    }
    canDown() {
        return this.blocks.every((b)=>b.canDown());
    }
    down() {
        for (const block of this.blocks)block.down();
    }
    destroy() {
        for (const block of this.blocks)block.destroy();
        for (let block of this.blocks)block = null;
    }
    toString() {
        return this.blocks.map((b)=>b.toString());
    }
    takeSnapshot() {
        for (const block of this.blocks)block.takeSnapshot();
    }
    fixMatrix() {
        for (const block of this.blocks)block.cleanMatrix();
        for (const block of this.blocks)block.fixMatrix();
        this.blocks = this.blocks.sort((a, b)=>{
            return b.y - a.y;
        });
    }
    wannaRotate() {
        if (this.canRotate()) this.rotate();
    }
}
exports.default = Piece;

},{"./game":"ig7op","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./block":"fuyCc"}],"fuyCc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RelativePosition", ()=>RelativePosition);
var _constantsJs = require("./constants.js");
class Block {
    constructor(x, y, color, matrix, snapshot){
        this.x = x;
        this.y = y;
        this.color = color;
        this.matrix = matrix;
        this.snapshot = snapshot;
    }
    canTranslate(translation) {}
    canDown() {
        const nextY = this.y + 1;
        const isOutOfBound = nextY >= (0, _constantsJs.ROWS);
        let hasBlockBelow = false;
        try {
            const below = this.matrix.at(this.x, this.y + 1).get();
            hasBlockBelow = below > 0 && below < (0, _constantsJs.BOUND_COLOR);
            console.log('hasBlockBelow', hasBlockBelow);
        } catch (err) {
            console.log('ojito error', this.x, nextY, err);
        }
        return !isOutOfBound && !hasBlockBelow;
    }
    down() {
        const nextY = this.y + 1;
        this.moveInMatrix(this.x, nextY);
    }
    canLeft() {
        const nextX = this.x - 1;
        return nextX >= 0;
    }
    left() {
        this.moveInMatrix(this.x - 1, this.y);
    }
    canRight() {
        const nextX = this.x + 1;
        return nextX < (0, _constantsJs.COLS);
    }
    right() {
        this.moveInMatrix(this.x + 1, this.y);
    }
    moveInMatrix(nextX, nextY) {
        const currentX = this.x;
        const currentY = this.y;
        this.matrix.at(currentX, currentY).set((0, _constantsJs.NO_COLOR));
        this.matrix.at(nextX, nextY).set(this.color);
        this.x = nextX;
        this.y = nextY;
    }
    destroy() {
        if (this.color > (0, _constantsJs.ACTIVE_COLOR)) {
            this.color -= (0, _constantsJs.ACTIVE_COLOR);
            this.matrix.at(this.x, this.y).set(this.color);
        }
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
    relativeTo(block) {
        return new RelativePosition(this.x - block.x, this.y - block.y);
    }
    takeSnapshot() {
        this.snapshot = [
            this.x,
            this.y
        ];
    }
    translate(translation) {
        const nextX = this.x + translation.x;
        const nextY = this.y + translation.y;
        console.log(`rotating [${this.x},${this.y}] -> [${nextX},${nextY}], translation [${translation.x},${translation.y}]`);
        return new Block(nextX, nextY, this.color, this.matrix, this.snapshot);
    }
    cleanMatrix() {
        const [x, y] = this.snapshot;
        this.matrix.at(x, y).set((0, _constantsJs.NO_COLOR));
    }
    fixMatrix() {
        this.matrix.at(this.x, this.y).set(this.color);
    }
    isValid() {
        const isValidX = this.x >= (0, _constantsJs.X_AXIS_LOWER_BOUND) && this.x < (0, _constantsJs.X_AXIS_HIGHER_BOUND);
        const isValidY = this.y >= (0, _constantsJs.Y_AXIS_LOWER_BOUND) && this.y < (0, _constantsJs.Y_AXIS_HIGHER_BOUND);
        if (!isValidX || !isValidY) return false;
        const cell = this.matrix.at(this.x, this.y).get();
        const isCellEmpty = cell === (0, _constantsJs.EMPTY_CELL);
        const isCellActive = cell > (0, _constantsJs.ACTIVE_COLOR);
        const isValidCell = isCellEmpty || isCellActive;
        return isValidCell;
    }
}
exports.default = Block;
class RelativePosition {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${String(this.x)}${String(this.y)}`;
    }
}

},{"./constants.js":"ipNfj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hCHNK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "nullish", ()=>nullish);
function random(number) {
    return Math.floor(Math.random() * number);
}
function nullish(value) {
    return value === null || value === undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dH2A0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RotateTable", ()=>RotateTable);
parcelHelpers.export(exports, "Rotation", ()=>Rotation);
var _game = require("./game");
class RotateTable {
    constructor(rotations){
        this.rotations = rotations;
    }
    apply(relativePosition) {
        const found = this.rotations.find((rotation)=>rotation.from.x === relativePosition.x && rotation.from.y === relativePosition.y);
        if (!found) console.log(`not found (${relativePosition.x},${relativePosition.y})`);
        return found.to;
    }
}
class Rotation {
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
}

},{"./game":"ig7op","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8D6Yd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _game = require("./game");
var _piece = require("./piece");
var _pieceDefault = parcelHelpers.interopDefault(_piece);
class Piece360 extends (0, _pieceDefault.default) {
    constructor(blocks, rotateCenter, rotateTable){
        super(blocks, rotateCenter, rotateTable);
    }
    canRotate() {
        if (!this.rotateTable) return false;
        const rotationBlocks = this.getRotatingBlocks();
        const virtuallyRotatedBlocks = rotationBlocks.map((block)=>{
            const relativePosition = block.relativeTo(this.rotateCenter);
            const translation = this.rotateTable.apply(relativePosition);
            return block.translate(translation);
        });
        const areValid = virtuallyRotatedBlocks.every((b)=>b.isValid());
        console.log('areValid??', areValid, virtuallyRotatedBlocks.map((b)=>b.isValid()));
        return areValid;
    }
    getRotatingBlocks() {
        return this.blocks.filter((b)=>b !== this.rotateCenter);
    }
    rotate() {
        this.takeSnapshot();
        const rotationBlocks = this.getRotatingBlocks();
        this.blocks = rotationBlocks.map((block)=>{
            const relativePosition = block.relativeTo(this.rotateCenter);
            const translation = this.rotateTable.apply(relativePosition);
            return block.translate(translation);
        });
        this.blocks.push(this.rotateCenter);
        this.fixMatrix();
    }
}
exports.default = Piece360;

},{"./game":"ig7op","./piece":"lIImO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kk327":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _game = require("./game");
var _piece = require("./piece");
var _pieceDefault = parcelHelpers.interopDefault(_piece);
class Piece180 extends (0, _pieceDefault.default) {
    constructor(blocks, rotateCenter, rotateTable, reverseRotateTable){
        super(blocks, rotateCenter, rotateTable);
        this.isInverted = false;
        this.reverseRotateTable = reverseRotateTable;
    }
    canRotate() {
        if (!this.rotateTable) return false;
        const rotationBlocks = this.getRotatingBlocks();
        const table = this.isInverted ? this.reverseRotateTable : this.rotateTable;
        const virtuallyRotatedBlocks = rotationBlocks.map((block)=>{
            const relativePosition = block.relativeTo(this.rotateCenter);
            const translation = table.apply(relativePosition);
            return block.translate(translation);
        });
        const areValid = virtuallyRotatedBlocks.every((b)=>b.isValid());
        return areValid;
    }
    getRotatingBlocks() {
        return this.blocks.filter((b)=>b !== this.rotateCenter);
    }
    rotate() {
        this.takeSnapshot();
        const rotationBlocks = this.getRotatingBlocks();
        const table = this.isInverted ? this.reverseRotateTable : this.rotateTable;
        this.blocks = rotationBlocks.map((block)=>{
            const relativePosition = block.relativeTo(this.rotateCenter);
            const translation = table.apply(relativePosition);
            return block.translate(translation);
        });
        this.blocks.push(this.rotateCenter);
        this.fixMatrix();
        this.isInverted = !this.isInverted;
    }
}
exports.default = Piece180;

},{"./game":"ig7op","./piece":"lIImO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2x4Q9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./constants");
var _utils = require("./utils");
class Matrix {
    constructor(){
        this.matrix = Array.from({
            length: (0, _constants.COLS)
        }, ()=>Array((0, _constants.ROWS)).fill(0));
    }
    at(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    get() {
        this.#guard();
        return this.matrix[this.x][this.y];
    }
    set(value) {
        this.#guard();
        this.matrix[this.x][this.y] = value;
    }
    #guard() {
        if ((0, _utils.nullish)(this.x) || (0, _utils.nullish)(this.y)) throw new Error(`Coord (x,y) must be set but are (${this.x},${this.y})`);
    }
}
exports.default = Matrix;

},{"./constants":"ipNfj","./utils":"hCHNK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5g1XM","ig7op"], "ig7op", "parcelRequire685b")

//# sourceMappingURL=tetris.4852f048.js.map
