(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    const FB_MAX_AD_INSTANCE = 3;
    const FB_INIT_AD_COUNT = 3;
    const FB_BANNER_REFRESH_INTERVAL = 30 + 10;
    const FB_INTERSTITIAL_REFRESH_INTERVAL = 30 + 10;
    const FB_REWARDED_VIDEO_REFRESH_INTERVAL = 0;
    const FB_MAX_BANNER_ERROR = 1;
    const FB_MAX_INTERSTITIAL_ERROR = 3;
    const FB_MAX_REWARDED_VIDEO_ERROR = 3;
    const FB_AUTO_LOAD_ON_PLAY = true;
    const FB_AUTO_RELOAD_DELAY = 1;
    const FB_AD_DELAY_FOR_FIRST_BANNER = 0;
    const FB_AD_DELAY_FOR_FIRST_INTERSTITIAL = 30;
    const FB_AD_DELAY_FOR_FIRST_REWARDED_VIDEO = 0;
    var FB_AD_TYPE;
    (function (FB_AD_TYPE) {
        FB_AD_TYPE[FB_AD_TYPE["INTERSTITIAL"] = 0] = "INTERSTITIAL";
        FB_AD_TYPE[FB_AD_TYPE["REWARDED_VIDEO"] = 1] = "REWARDED_VIDEO";
        FB_AD_TYPE[FB_AD_TYPE["BANNER"] = 2] = "BANNER";
    })(FB_AD_TYPE || (FB_AD_TYPE = {}));
    var FB_AD_STATE;
    (function (FB_AD_STATE) {
        FB_AD_STATE[FB_AD_STATE["NONE"] = 0] = "NONE";
        FB_AD_STATE[FB_AD_STATE["NEW"] = 1] = "NEW";
        FB_AD_STATE[FB_AD_STATE["LOADING"] = 2] = "LOADING";
        FB_AD_STATE[FB_AD_STATE["LOADED"] = 3] = "LOADED";
        FB_AD_STATE[FB_AD_STATE["PLAYING"] = 4] = "PLAYING";
    })(FB_AD_STATE || (FB_AD_STATE = {}));
    function getStateName(state) {
        let str = "NONE";
        switch (state) {
            case FB_AD_STATE.NEW:
                str = "NEW";
                break;
            case FB_AD_STATE.LOADING:
                str = "LOADING";
                break;
            case FB_AD_STATE.LOADED:
                str = "LOADED";
                break;
            case FB_AD_STATE.PLAYING:
                str = "PLAYING";
                break;
        }
        return str;
    }
    function waitTimeSecond(timeoutSecond, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        if (callback) {
                            callback();
                        }
                        resolve();
                    }
                    catch (e) {
                        reject(e);
                    }
                }, timeoutSecond * 1000);
            });
        });
    }
    const ErrorTooManyAdInstance = {
        code: "EXCEED_MAX_AD_INSTANCE",
        message: "Max AD Instance allowed: " + FB_MAX_AD_INSTANCE
    };
    const ErrorNoReadyAdInstance = {
        code: "NO_READY_AD_INSTANCE",
        message: "AD Instance Not Ready or Played too frequently"
    };
    const ErrorNotReadyForLoad = {
        code: "NOT_READY_FOR_LOAD",
        message: "Not Ready for Load"
    };
    const ErrorAdIsLoading = {
        code: "AD_IS_LOADING",
        message: "AD is Loading"
    };
    const ErrorNotReadyForPlay = {
        code: "NOT_READY_FOR_PLAYING",
        message: "Not Ready for Playing"
    };
    const ErrorAdIsPlaying = {
        code: "AD_IS_PLAYING",
        message: "AD is Playing"
    };
    const ErrorNoBannerAdInstance = {
        code: "NO_BANNER_AD",
        message: "No Banner Ad Instance"
    };
    const ErrorApiNotSupport = {
        code: "API_NOT_SUPPORT",
        message: "API Not Support"
    };
    const ErrorTooFastShow = {
        code: "TOO_FAST_SHOW",
        message: "Too Fast To Show Ads"
    };
    const ErrorNotPlaying = {
        code: "NOT_PLAYING",
        message: "Ads Not Playing"
    };
    const ErrorTooManyErrors = {
        code: "TOO_MANY_ERRORS",
        message: "Too Many Errors, Stop Next Action"
    };
    const FB_API_BANNER = "loadBannerAdAsync";
    const FB_ERROR_CODE_RATE_LIMITED = "RATE_LIMITED";
    const FB_ERROR_CLIENT_UNSUPPORTED_OPERATION = "CLIENT_UNSUPPORTED_OPERATION";
    const FB_ERROR_ADS_NO_FILL = "ADS_NO_FILL";
    function getOption(opt, key, defaultValue) {
        if (opt && typeof (opt[key]) != "undefined") {
            return opt[key];
        }
        return defaultValue;
    }
    class AdTimer {
        constructor(interval, delay) {
            this._lastShowTime = 0;
            this._refreshInterval = 0;
            this._refreshInterval = interval > 0 ? interval : 0;
            this._lastShowTime = 0;
            if (delay > 0) {
                this._lastShowTime = Date.now() + delay * 1000 - this._refreshInterval * 1000;
            }
        }
        isReadyToRefresh() {
            return this.getNextRefreshInterval() <= 0;
        }
        getNextRefreshInterval() {
            let refreshInterval = 0;
            if (this._refreshInterval > 0 && this._lastShowTime > 0) {
                let currentTime = Date.now();
                refreshInterval = this._refreshInterval - (currentTime - this._lastShowTime) / 1000;
            }
            return refreshInterval;
        }
        updateLastShowTime() {
            this._lastShowTime = Date.now();
        }
    }
    class FBAdUnitBase {
        constructor(id, type, sharedTimer, opt) {
            this._maxLoadError = 0;
            this._errorCounter = 0;
            this._fatalError = false;
            this._sharedTimer = null;
            this._adId = id;
            this._state = FB_AD_STATE.NONE;
            this._type = type;
            this._sharedTimer = sharedTimer;
            this._fatalError = false;
            console.assert(!!sharedTimer, "sharedTimer is invalid", sharedTimer);
            this._maxLoadError = getOption(opt, "maxLoadError", 0);
        }
        getStateName() {
            return getStateName(this._state);
        }
        getAdTypeName() {
            if (this._type == FB_AD_TYPE.INTERSTITIAL) {
                return "Interstitial";
            }
            if (this._type == FB_AD_TYPE.REWARDED_VIDEO) {
                return "RewardedVideo";
            }
            if (this._type == FB_AD_TYPE.BANNER) {
                return "Banner";
            }
            return "UNKNOWN";
        }
        getInfo() {
            return `[${this.getAdTypeName()}:${this._adId}:${this.getStateName()}]`;
        }
        isReadyToRefresh() {
            return this._sharedTimer.isReadyToRefresh();
        }
        getNextRefreshInterval() {
            return this._sharedTimer.getNextRefreshInterval();
        }
        updateLastShowTime() {
            this._sharedTimer.updateLastShowTime();
        }
        increaseErrorCounter() {
            this._errorCounter++;
        }
        resetErrorCounter() {
            this._errorCounter = 0;
        }
        setFatalError() {
            this._fatalError = true;
        }
        isErrorTooMany() {
            return this._fatalError || (this._maxLoadError > 0 && this._errorCounter >= this._maxLoadError);
        }
    }
    class FBStatefulAdUnit extends FBAdUnitBase {
        constructor(id, type, sharedTimer, opt) {
            super(id, type, sharedTimer, opt);
            this._adInstance = null;
            this._autoLoadOnPlay = getOption(opt, "autoLoadOnPlay", false);
        }
        loadAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._adInstance == null) {
                    if (this._state == FB_AD_STATE.NONE) {
                        this._state = FB_AD_STATE.NEW;
                        console.log("Get Ad Instance: " + this.getInfo());
                        this._adInstance = yield this.createAdInstanceAsync(this._adId);
                    }
                    else {
                        console.log("Ad Instance is still creating: " + this.getInfo());
                        return;
                    }
                }
                else {
                }
                if (this._state != FB_AD_STATE.NEW) {
                    console.log("Not ready for preload: " + this.getInfo());
                    if (this._state == FB_AD_STATE.LOADING) {
                        console.log("Ad is loading, do not reload" + this.getInfo());
                        throw ErrorAdIsLoading;
                    }
                    else {
                        throw ErrorNotReadyForLoad;
                    }
                }
                if (this.isErrorTooMany()) {
                    console.log("Too many errors, stop loading: " + this.getInfo());
                    throw ErrorTooManyErrors;
                }
                try {
                    this._state = FB_AD_STATE.LOADING;
                    console.log("Start Loading: " + this.getInfo());
                    yield this._adInstance.loadAsync();
                    this._state = FB_AD_STATE.LOADED;
                    this.resetErrorCounter();
                    console.log("Loading Success: " + this.getInfo());
                    return true;
                }
                catch (e) {
                    console.error("Loading Failed: " + this.getInfo(), e);
                    if (e.code == FB_ERROR_ADS_NO_FILL) {
                        console.error("Ads Not Fill, stop loading: " + this.getInfo());
                        this.setFatalError();
                    }
                    else {
                        this.increaseErrorCounter();
                        this._state = FB_AD_STATE.NEW;
                        let delayTime = 10 * this._errorCounter + FB_AUTO_RELOAD_DELAY;
                        console.log("Reload after " + delayTime + " seconds: " + this.getInfo());
                        waitTimeSecond(delayTime, this.loadAsync.bind(this)).catch(e => {
                            console.info("Reload failed: " + this.getInfo(), e);
                        });
                    }
                    throw e;
                }
            });
        }
        isReady() {
            return this._adInstance != null && this._state == FB_AD_STATE.LOADED;
        }
        showAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.isReady()) {
                    console.log("Not Ready for play: " + this.getInfo());
                    if (this._state == FB_AD_STATE.PLAYING) {
                        throw ErrorAdIsPlaying;
                    }
                    else {
                        throw ErrorNotReadyForPlay;
                    }
                }
                if (!this.isReadyToRefresh()) {
                    console.log("Play too frequently, wait for " + this.getNextRefreshInterval() + " seconds: " + this.getInfo());
                    throw ErrorTooFastShow;
                }
                try {
                    this._state = FB_AD_STATE.PLAYING;
                    console.log("Play Ads: " + this.getInfo());
                    yield this._adInstance.showAsync();
                    console.log("Play Success: " + this.getInfo());
                    this._adInstance = null;
                    this._state = FB_AD_STATE.NONE;
                    this.updateLastShowTime();
                    if (this._autoLoadOnPlay) {
                        console.log("Reload after " + FB_AUTO_RELOAD_DELAY + " seconds: " + this.getInfo());
                        waitTimeSecond(FB_AUTO_RELOAD_DELAY, this.loadAsync.bind(this)).catch(e => {
                            console.info("Reload failed: " + this.getInfo(), e);
                        });
                    }
                    return true;
                }
                catch (e) {
                    console.log("Play Failed: " + this.getInfo(), e);
                    if (e.code == FB_ERROR_CODE_RATE_LIMITED) {
                        this._state = FB_AD_STATE.LOADED;
                    }
                    else {
                        this._adInstance = null;
                        this._state = FB_AD_STATE.NONE;
                        if (this._autoLoadOnPlay) {
                            console.log("Reload after " + FB_AUTO_RELOAD_DELAY + " seconds: " + this.getInfo());
                            waitTimeSecond(FB_AUTO_RELOAD_DELAY, this.loadAsync.bind(this)).catch(e => {
                                console.info("Reload Failed: " + this.getInfo(), e);
                            });
                        }
                    }
                    throw e;
                }
            });
        }
    }
    class FBInterstitialUnit extends FBStatefulAdUnit {
        constructor(id, sharedTimer, opt) {
            super(id, FB_AD_TYPE.INTERSTITIAL, sharedTimer, opt);
        }
        createAdInstanceAsync(adId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield FBInstant.getInterstitialAdAsync(this._adId);
            });
        }
    }
    class FBRewardedVideoUnit extends FBStatefulAdUnit {
        constructor(id, sharedTimer, opt) {
            super(id, FB_AD_TYPE.REWARDED_VIDEO, sharedTimer, opt);
        }
        createAdInstanceAsync(adId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield FBInstant.getRewardedVideoAsync(this._adId);
            });
        }
    }
    class FBBannerUnit extends FBAdUnitBase {
        constructor(id, sharedTimer, opt) {
            super(id, FB_AD_TYPE.BANNER, sharedTimer, opt);
        }
        showAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.isReadyToRefresh()) {
                    console.log("Play too frequently, wait for " + this.getNextRefreshInterval() + " seconds: " + this.getInfo());
                    throw ErrorTooFastShow;
                }
                if (this.isErrorTooMany()) {
                    console.log("Too many errors, stop: " + this.getInfo());
                    throw ErrorTooManyErrors;
                }
                if (this._state == FB_AD_STATE.LOADING) {
                    console.info("Banner is loading, wait for it: " + this.getInfo());
                    throw ErrorAdIsLoading;
                }
                try {
                    this._state = FB_AD_STATE.LOADING;
                    console.log("Show Banner: " + this.getInfo());
                    yield FBInstant.loadBannerAdAsync(this._adId);
                    this._state = FB_AD_STATE.PLAYING;
                    console.log("Show Banner Success: " + this.getInfo());
                    this.updateLastShowTime();
                    this.resetErrorCounter();
                }
                catch (e) {
                    console.error("Show Banner Failed: " + this.getInfo(), e);
                    if (e.code == FB_ERROR_CODE_RATE_LIMITED) {
                        this._state = FB_AD_STATE.NONE;
                    }
                    else if (e.code == FB_ERROR_ADS_NO_FILL) {
                        console.error("Ads Not Fill, Stop: " + this.getInfo());
                        this.setFatalError();
                    }
                    else {
                        this.increaseErrorCounter();
                        this._state = FB_AD_STATE.NONE;
                    }
                    throw e;
                }
            });
        }
        hideAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._state != FB_AD_STATE.PLAYING) {
                    console.log("No Banner Playing: " + this.getInfo());
                    throw ErrorNotPlaying;
                }
                try {
                    console.log("Hide Banner: " + this.getInfo());
                    yield FBInstant.hideBannerAdAsync();
                    this._state = FB_AD_STATE.NONE;
                }
                catch (e) {
                    console.error("Hide Banner Failed: " + this.getInfo(), e);
                    throw e;
                }
            });
        }
    }
    class FBAdManager {
        static getVersion() {
            return "1.0.4";
        }
        static addInterstitial(id, count = FB_INIT_AD_COUNT) {
            if (this._interstitialTimer == null) {
                this._interstitialTimer = new AdTimer(this.defaultInterstitialTimerOption.refreshInterval, this.defaultInterstitialTimerOption.delayForFirstAd);
            }
            for (let i = 0; i < count; i++) {
                if (this._interstitialAds.length >= FB_MAX_AD_INSTANCE) {
                    console.log("Fail to add interstitial, too many instances: " + this._interstitialAds.length, id);
                    throw ErrorTooManyAdInstance;
                }
                let adUnit = new FBInterstitialUnit(id, this._interstitialTimer, this.defaultInterstitialOption);
                this._interstitialAds.push(adUnit);
                console.log("Add Interstitial: " + id, "count: " + this._interstitialAds.length);
            }
            return this._interstitialAds.length;
        }
        static addRewardedVideo(id, count = FB_INIT_AD_COUNT) {
            if (this._rewardedVideoTimer == null) {
                this._rewardedVideoTimer = new AdTimer(this.defaultRewardedVideoTimerOption.refreshInterval, this.defaultRewardedVideoTimerOption.delayForFirstAd);
            }
            for (let i = 0; i < count; i++) {
                if (this._rewardedVideos.length >= FB_MAX_AD_INSTANCE) {
                    console.log("Fail to add RewardedVideo, too many instances: " + this._rewardedVideos.length, id);
                    throw ErrorTooManyAdInstance;
                }
                let adUnit = new FBRewardedVideoUnit(id, this._rewardedVideoTimer, this.defaultRewardedVideoOption);
                this._rewardedVideos.push(adUnit);
                console.log("Add RewardedVideo: " + id, "count: " + this._rewardedVideos.length);
            }
            return this._rewardedVideos.length;
        }
        static addBanner(id) {
            if (this._bannerTimer == null) {
                this._bannerTimer = new AdTimer(this.defaultBannerTimerOption.refreshInterval, this.defaultBannerTimerOption.delayForFirstAd);
            }
            let adUnit = new FBBannerUnit(id, this._bannerTimer, this.defaultBannerOption);
            this._banners.push(adUnit);
            console.log("Add Banner: " + id, "count: " + this._banners.length);
            return adUnit;
        }
        static loadAll() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.loadAllAsync();
            });
        }
        static loadAllAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("FBAdManager Version: " + this.getVersion());
                console.log("Init Ads Queue");
                for (let i = 0; i < this._rewardedVideos.length; i++) {
                    const adUnit = this._rewardedVideos[i];
                    if (i > 0) {
                        yield waitTimeSecond(0.1);
                    }
                    try {
                        yield adUnit.loadAsync();
                    }
                    catch (e) {
                    }
                }
                for (let i = 0; i < this._interstitialAds.length; i++) {
                    const adUnit = this._interstitialAds[i];
                    if (i > 0) {
                        yield waitTimeSecond(0.1);
                    }
                    try {
                        yield adUnit.loadAsync();
                    }
                    catch (e) {
                    }
                }
            });
        }
        static _isAdReady(type) {
            let adUnits = (type == FB_AD_TYPE.INTERSTITIAL) ? this._interstitialAds : this._rewardedVideos;
            let isReady = false;
            for (let i = 0; i < adUnits.length; i++) {
                const adUnit = adUnits[i];
                if (adUnit.isReady() && adUnit.isReadyToRefresh()) {
                    isReady = true;
                    break;
                }
            }
            return isReady;
        }
        static _showAsync(type) {
            let adUnits = (type == FB_AD_TYPE.INTERSTITIAL) ? this._interstitialAds : this._rewardedVideos;
            let readyUnit = null;
            for (let i = 0; i < adUnits.length; i++) {
                const adUnit = adUnits[i];
                if (adUnit.isReady() && adUnit.isReadyToRefresh()) {
                    readyUnit = adUnit;
                    break;
                }
            }
            if (readyUnit != null) {
                return readyUnit.showAsync();
            }
            throw ErrorNoReadyAdInstance;
        }
        static _getAdTimer(type) {
            if (type == FB_AD_TYPE.INTERSTITIAL) {
                return this._interstitialTimer;
            }
            if (type == FB_AD_TYPE.REWARDED_VIDEO) {
                return this._rewardedVideoTimer;
            }
            return this._bannerTimer;
        }
        static isInterstitialAdReady() {
            return this._isAdReady(FB_AD_TYPE.INTERSTITIAL);
        }
        static showInterstitialAd() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this._showAsync(FB_AD_TYPE.INTERSTITIAL);
            });
        }
        static isRewardedVideoReady() {
            return this._isAdReady(FB_AD_TYPE.REWARDED_VIDEO);
        }
        static showRewardedVideo() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this._showAsync(FB_AD_TYPE.REWARDED_VIDEO);
            });
        }
        static checkApiSupport(api) {
            if (FBInstant.getSupportedAPIs().indexOf(api) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
        static isBannerSupport() {
            if (typeof this._bannerSupport == "undefined") {
                this._bannerSupport = this.checkApiSupport(FB_API_BANNER);
            }
            return this._bannerSupport;
        }
        static isBannerReady() {
            if (this._banners.length <= 0) {
                throw ErrorNoBannerAdInstance;
            }
            let adUnit = this._banners[0];
            return adUnit.isReadyToRefresh();
        }
        static showBannerAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.isBannerSupport()) {
                    throw ErrorApiNotSupport;
                }
                if (this._banners.length <= 0) {
                    throw ErrorNoBannerAdInstance;
                }
                let adUnit = this._banners[0];
                return yield adUnit.showAsync();
            });
        }
        static hideBannerAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.isBannerSupport()) {
                    throw ErrorApiNotSupport;
                }
                if (this._banners.length <= 0) {
                    throw ErrorNoBannerAdInstance;
                }
                let adUnit = this._banners[0];
                return yield adUnit.hideAsync();
            });
        }
    }
    FBAdManager._interstitialAds = [];
    FBAdManager._rewardedVideos = [];
    FBAdManager._banners = [];
    FBAdManager._interstitialTimer = null;
    FBAdManager._rewardedVideoTimer = null;
    FBAdManager._bannerTimer = null;
    FBAdManager._bannerSupport = undefined;
    FBAdManager.defaultInterstitialOption = {
        autoLoadOnPlay: FB_AUTO_LOAD_ON_PLAY,
        maxLoadError: FB_MAX_INTERSTITIAL_ERROR,
    };
    FBAdManager.defaultRewardedVideoOption = {
        autoLoadOnPlay: FB_AUTO_LOAD_ON_PLAY,
        maxLoadError: FB_MAX_REWARDED_VIDEO_ERROR,
    };
    FBAdManager.defaultBannerOption = {
        autoLoadOnPlay: FB_AUTO_LOAD_ON_PLAY,
        maxLoadError: FB_MAX_BANNER_ERROR,
    };
    FBAdManager.defaultInterstitialTimerOption = {
        refreshInterval: FB_INTERSTITIAL_REFRESH_INTERVAL,
        delayForFirstAd: FB_AD_DELAY_FOR_FIRST_INTERSTITIAL
    };
    FBAdManager.defaultRewardedVideoTimerOption = {
        refreshInterval: FB_REWARDED_VIDEO_REFRESH_INTERVAL,
        delayForFirstAd: FB_AD_DELAY_FOR_FIRST_REWARDED_VIDEO
    };
    FBAdManager.defaultBannerTimerOption = {
        refreshInterval: FB_BANNER_REFRESH_INTERVAL,
        delayForFirstAd: FB_AD_DELAY_FOR_FIRST_BANNER
    };

    class FBInstantManager {
        constructor() {
            this.FB_ADS = {
                INTERSTITIAL: "4864743603539728_5324943400853077",
                REWARDED_VIDEO: "4864743603539728_5324944030853014",
                BANNER: "4864743603539728_5324942390853178",
            };
            this._initFinish = false;
            this._initPromise = null;
        }
        static get Instance() {
            if (!FBInstantManager._ins) {
                FBInstantManager._ins = new FBInstantManager();
            }
            return FBInstantManager._ins;
        }
        init() {
            this._initPromise = new Promise((resolve, reject) => {
                try {
                    if (!window["FBInstant"]) {
                        this._initFinish = true;
                        console.info("no FBInstant Success Load Scene");
                        resolve(null);
                        return;
                    }
                    FBInstant.initializeAsync()
                        .then(() => {
                        FBInstant.setLoadingProgress(100);
                        FBInstant.startGameAsync()
                            .then(() => {
                            this._initFinish = true;
                            console.info("have FBInstant Success Load Scene");
                            resolve(null);
                        })
                            .catch((e) => {
                            console.error("Start Game Async failed: ", e);
                            reject(null);
                        });
                    })
                        .catch((e) => {
                        console.error("Fail to start, Error: ", e);
                        reject(null);
                    });
                }
                catch (e) {
                    console.error("Fail to init fb, Error: ", e);
                    reject(null);
                }
            });
            this._initPromise.then(() => {
                this.initAd();
            });
        }
        get InitPromise() {
            return this._initPromise;
        }
        get InitFinish() {
            return this._initFinish;
        }
        getID() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!window["FBInstant"]) {
                    return "111";
                }
                ;
                if (!this._initFinish) {
                    yield this._initPromise;
                }
                return FBInstant.player.getID();
            });
        }
        initAd() {
            return;
            if (!window["FBInstant"]) {
                return;
            }
            ;
            try {
                FBAdManager.addInterstitial(this.FB_ADS.INTERSTITIAL, 3);
            }
            catch (error) {
                console.info("添加插屏广告失败，错误: " + error.message);
            }
            try {
                FBAdManager.addRewardedVideo(this.FB_ADS.REWARDED_VIDEO, 3);
            }
            catch (error) {
                console.info("添加激励视频广告失败，错误: " + error.message);
            }
            FBAdManager.addBanner(this.FB_ADS.BANNER);
            FBAdManager.loadAll();
        }
        showInterstitial() {
            return;
            if (!window["FBInstant"]) {
                return;
            }
            ;
            if (FBAdManager.isInterstitialAdReady()) {
                FBAdManager.showInterstitialAd().then(() => {
                    console.log("播放插屏广告成功");
                }).catch(e => {
                    console.log("播放插屏广告失败", e.message);
                });
            }
            else {
                console.log("暂不支持播放插屏广告");
            }
        }
        showRewardedVideo(success) {
            success && success();
            return;
            if (!window["FBInstant"]) {
                success && success();
                return;
            }
            ;
            if (FBAdManager.isRewardedVideoReady()) {
                FBAdManager.showRewardedVideo().then(() => {
                    console.log("播放激励视频成功");
                    success && success();
                }).catch(e => {
                    console.log("播放激励视频失败或取消播放", e.message);
                });
            }
            else {
                console.log("暂不支持播放激励视频");
            }
        }
        showBanner() {
            return;
            if (!window["FBInstant"]) {
                return;
            }
            ;
            if (FBAdManager.isBannerReady()) {
                FBAdManager.showBannerAsync().then(() => {
                    console.log("显示banner成功");
                }).catch(e => {
                    console.log("显示banner失败", e.message);
                });
            }
            else {
                console.log("暂不支持显示banner");
            }
        }
        hideBanner() {
            if (!window["FBInstant"]) {
                return;
            }
            ;
            FBAdManager.hideBannerAsync().then(() => {
            }).catch(e => {
                console.log("隐藏banner失败", e.message);
            });
        }
    }
    FBInstantManager._ins = null;

    var LanguageNumber;
    (function (LanguageNumber) {
        LanguageNumber[LanguageNumber["Chinese"] = 1] = "Chinese";
        LanguageNumber[LanguageNumber["English"] = 2] = "English";
        LanguageNumber[LanguageNumber["Indonesian"] = 3] = "Indonesian";
        LanguageNumber[LanguageNumber["Vietnamese"] = 4] = "Vietnamese";
        LanguageNumber[LanguageNumber["Brazilian"] = 5] = "Brazilian";
    })(LanguageNumber || (LanguageNumber = {}));
    class P {
        static init(e) {
            P.language = e;
        }
        static checkLanguage() {
            P.type = LanguageNumber.English;
            let res = window["FBInstant"] ? FBInstant.getLocale() : "";
            switch (res) {
                case "id_ID":
                    P.type = LanguageNumber.Indonesian;
                    console.log("语言为印尼语");
                    break;
                case "vi_VN":
                    P.type = LanguageNumber.Vietnamese;
                    console.log("语言为越南语");
                    break;
                case "pt_BR":
                case "pt_PT":
                    P.type = LanguageNumber.Brazilian;
                    console.log("语言为巴西语");
                    break;
                default:
                    break;
            }
        }
        static getLanguage(e) {
            switch (P.type) {
                case LanguageNumber.Chinese:
                    e += "_C";
                    break;
                case LanguageNumber.English:
                    e += "_E";
                    break;
                case LanguageNumber.Indonesian:
                    e += "_I";
                    break;
                case LanguageNumber.Vietnamese:
                    e += "_V";
                    break;
                case LanguageNumber.Brazilian:
                    e += "_B";
                    break;
            }
            if (P.language) {
                let t = P.language.getItem(e);
                if (t)
                    return t.value ? t.value : e;
            }
            return e;
        }
        static getPicture() {
            let e = "English";
            switch (P.type) {
                case LanguageNumber.Chinese:
                    e = "Chinese";
                    break;
                case LanguageNumber.English:
                    e = "English";
                    break;
                case LanguageNumber.Indonesian:
                    e = "Indonesian";
                    break;
                case LanguageNumber.Vietnamese:
                    e = "Vietnamese";
                    break;
                case LanguageNumber.Brazilian:
                    e = "Brazilian";
                    break;
            }
            return e;
        }
    }

    var O;
    (function (O) {
        O[O["None"] = 0] = "None";
        O[O["ParkCashier"] = 1] = "ParkCashier";
        O[O["ParkEgg"] = 2] = "ParkEgg";
        O[O["ParkTomato"] = 3] = "ParkTomato";
        O[O["ParkJuice"] = 4] = "ParkJuice";
        O[O["ParkEggProcess"] = 5] = "ParkEggProcess";
        O[O["ParkMaizeProcess"] = 6] = "ParkMaizeProcess";
        O[O["ParkTomatoProcess"] = 7] = "ParkTomatoProcess";
        O[O["ParkMaizeGoodsProcess"] = 8] = "ParkMaizeGoodsProcess";
        O[O["ParkMaizeGood"] = 9] = "ParkMaizeGood";
        O[O["ParkMaize"] = 10] = "ParkMaize";
        O[O["ParkJuiceProcess"] = 11] = "ParkJuiceProcess";
        O[O["ParkMilkProcess"] = 12] = "ParkMilkProcess";
        O[O["ParkMilk"] = 13] = "ParkMilk";
        O[O["Trash"] = 14] = "Trash";
        O[O["Plane2"] = 1017] = "Plane2";
        O[O["Plane3"] = 1018] = "Plane3";
        O[O["ParkCracker"] = 17] = "ParkCracker";
        O[O["ParkCrackerProcess"] = 18] = "ParkCrackerProcess";
        O[O["ParkCoffeeBean"] = 19] = "ParkCoffeeBean";
        O[O["ParkCoffeeBeanProcess"] = 20] = "ParkCoffeeBeanProcess";
        O[O["ParkGroundCoffee"] = 21] = "ParkGroundCoffee";
        O[O["ParkGroundCoffeeProcess"] = 22] = "ParkGroundCoffeeProcess";
        O[O["ParkCoffee"] = 23] = "ParkCoffee";
        O[O["ParkCoffeeProcess"] = 24] = "ParkCoffeeProcess";
        O[O["ParkCarrot"] = 25] = "ParkCarrot";
        O[O["ParkCarrotProcess"] = 26] = "ParkCarrotProcess";
        O[O["ParkApple"] = 27] = "ParkApple";
        O[O["ParkAppleProcess"] = 28] = "ParkAppleProcess";
        O[O["ParkACJuice"] = 29] = "ParkACJuice";
        O[O["ParkACJuiceProcess"] = 30] = "ParkACJuiceProcess";
        O[O["Park2"] = 1031] = "Park2";
        O[O["Park3"] = 1032] = "Park3";
        O[O["ParkRose"] = 31] = "ParkRose";
        O[O["ParkRoseProcess"] = 32] = "ParkRoseProcess";
        O[O["ParkBabysBreath"] = 33] = "ParkBabysBreath";
        O[O["ParkBabysBreathProcess"] = 34] = "ParkBabysBreathProcess";
        O[O["ParkYellowRose"] = 35] = "ParkYellowRose";
        O[O["ParkYellowRoseProcess"] = 36] = "ParkYellowRoseProcess";
        O[O["ParkBouquet"] = 37] = "ParkBouquet";
        O[O["ParkBouquetProcess"] = 38] = "ParkBouquetProcess";
    })(O || (O = {}));

    var H;
    (function (H) {
        H[H["None"] = 0] = "None";
        H[H["speed"] = 1] = "speed";
        H[H["Carry"] = 2] = "Carry";
    })(H || (H = {}));

    class u {
        constructor() {
            this.maxId = 0, this.datas = [];
        }
        isMaxById(e) {
            return this.maxId <= e;
        }
        init(e) {
            for (let t = 0; t < e.length; t++) {
                let s = e[t], i = this.getConfigTarget();
                i.init(s), this.datas.push(i);
            }
            0 != this.datas.length && (this.maxId = this.datas[this.datas.length - 1].id);
        }
        getDataById(e) {
            for (let t = 0; t < this.datas.length; t++) {
                if (this.datas[t].id == e) {
                    return this.datas[t];
                }
            }
        }
        getConfigTarget() {
            return null;
        }
        getAllDatas() {
            return this.datas;
        }
        hasId(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].id == e)
                    return true;
            return false;
        }
        getMaxId() {
            return this.maxId;
        }
    }

    class c {
        init(e) {
            let t = Object.keys(e), s = null;
            for (let i = 0; i < t.length; i++)
                this[s = t[i]] = e[s];
        }
    }

    class We extends c {
    }

    class Ge extends u {
        static get ins() {
            return this._ins || (this._ins = new Ge), this._ins;
        }
        getConfigTarget() {
            return new We;
        }
    }
    Ge._ins = null;

    class d {
        static getIns() {
            return this.instance || (this.instance = new d, this.instance.init()), this.instance;
        }
        init() { }
        gameStartSumbit(e) { }
        gameEndSumbit(e) { }
    }
    d.instance = null;

    class h {
        constructor() {
            this.subMgr = null, this.plat = 0;
        }
        static getIns() {
            return this.instance || (this.instance = new h), this.instance;
        }
        init() {
            as.getIns().isVIVOPlatform() ? this.plat = 3 : as.getIns().isOPPOPlatform() ? this.plat = 2 : as.getIns().isWXPlatform() ? this.plat = 1 : as.getIns().isTTPlatform() ? this.plat = 4 : this.plat = 0;
        }
        setMgr(e) {
            this.subMgr = e;
        }
        Aufromvidio() {
            if (this.checkPlat() && 4 == this.plat) {
                let e = window.tt.getLaunchOptionsSync(), t = "";
                e.group_id && (t = e.group_id), "023001" != e.scene && "023002" != e.scene || this.reportAnalytics("aufromvideo", {
                    videoid: t
                });
            }
        }
        Enter_click(e) {
            this.checkPlat() && this.subMgr.appOnce({
                actionNumber: e
            });
        }
        EnterAction(e, t) {
            this.checkPlat() && this.subMgr.action({
                actionNumber: e,
                actionType: t
            });
        }
        Video_show(e) {
            this.checkPlat() && this.subMgr.adVideo({
                type: e,
                subType: 7
            });
        }
        Video_broadcast(e, t) {
            this.checkPlat() && this.subMgr.adVideo({
                type: e,
                subType: t
            });
        }
        Level_show(e) {
            this.checkPlat() && this.subMgr.battle({
                logType: 1,
                battleType: 100,
                battleId: e.lv + 100 + ""
            });
        }
        Level_win(e) {
            this.checkPlat() && this.subMgr.battle({
                logType: 2,
                battleType: 100,
                battleId: e.lv + 100 + ""
            });
        }
        Level_fail(e) {
            this.checkPlat() && this.subMgr.battle({
                logType: 3,
                battleType: 100,
                battleId: e.lv + 100 + ""
            });
        }
        Screen_show(e) {
            this.checkPlat();
        }
        Screenc_click(e) {
            this.checkPlat();
        }
        Screen_get(e) {
            this.checkPlat();
        }
        Screen_over(e) {
            this.reportAnalytics("screen_over", {
                user: e
            });
        }
        Screen_fail(e, t) {
            let s = {};
            if (1 == t)
                s.get_fail = e;
            else {
                if (2 != t)
                    return void console.error("提交失败", t);
                s.publish_fail = e;
            }
            this.reportAnalytics("screen_fail", t);
        }
        reportAnalytics(e, t) {
            this.checkPlat();
        }
        checkPlat() {
            return this.subMgr;
        }
        umRuning(e, t) {
            if (1 == this.plat) {
                window.wx.uma.trackEvent("event_park_" + e, {
                    buildCount: t
                });
            }
        }
        gameStartSumbit(e) { }
        umLevel(e, t) {
            if (1 == this.plat) {
                window.wx.uma.trackEvent(e, {
                    "LevelCount:": t
                });
            }
        }
    }
    h.instance = null;

    var G;
    (function (G) {
        G[G["None"] = 0] = "None";
        G[G["Egg"] = 1] = "Egg";
        G[G["Tomato"] = 2] = "Tomato";
        G[G["Maize"] = 3] = "Maize";
        G[G["Juice"] = 4] = "Juice";
        G[G["MaizeGood"] = 5] = "MaizeGood";
        G[G["Milk"] = 6] = "Milk";
        G[G["Cashier"] = 7] = "Cashier";
        G[G["Money"] = 8] = "Money";
        G[G["Cracker"] = 9] = "Cracker";
        G[G["CoffeeBean"] = 10] = "CoffeeBean";
        G[G["GroundCoffee"] = 11] = "GroundCoffee";
        G[G["Coffee"] = 12] = "Coffee";
        G[G["Carrot"] = 13] = "Carrot";
        G[G["Apple"] = 14] = "Apple";
        G[G["ACJuice"] = 15] = "ACJuice";
        G[G["Rose"] = 16] = "Rose";
        G[G["BabysBreath"] = 17] = "BabysBreath";
        G[G["YellowRose"] = 18] = "YellowRose";
        G[G["Bouquet"] = 19] = "Bouquet";
    })(G || (G = {}));

    class P$1 {
        constructor() {
            this.title = "跟我一起来对战吧!", this.imageUrl = "";
        }
    }

    class p extends c {
    }

    class g extends u {
        static get ins() {
            return this._ins || (this._ins = new g), this._ins;
        }
        getConfigTarget() {
            return new p;
        }
    }
    g._ins = null;

    class i {
    }
    i.EN_COIN_CHANGED = "EN_COIN_CHANGED";
    i.EN_POWER_CHANGED = "EN_POWER_CHANGED";
    i.EN_CHANGE_STAR = "EN_CHANGE_STAR";
    i.EN_GAMEPAUSE = "EN_GAMEPAUSE";
    i.GAMESTART = "GAMESTART";
    i.EN_SHOW_BANNER_AD = "EN_SHOW_BANNER_AD";
    i.END_CHECK_OVER = "END_CHECK_OVER";
    i.EN_HIDE_BANNER_AD = "EN_HIDE_BANNER_AD";
    i.OUTGAME = "OUTGAME";
    i.ENTERGAME = "ENTERGAME";
    i.EN_LEVELUP = "EN_LEVELUP";
    i.LOADMAPEND = "LOADMAPEND";
    i.USEEFFECTEND = "USEEFFECTEND";
    i.WAITERUPDATE = "WAITERUPDATE";
    i.PRODUCTSPEEDUP = "PRODUCTSPEEDUP";
    i.PLAYERCARRYUP = "PLAYERCARRYUP";
    i.SHOWWAITEREF = "SHOWWAITEREF";

    class n {
    }
    n.resPath = "sub/online/Sprites/Conventional/{0}.lh";
    n.itemPath = "prefab/item/{0}.json";
    n.skinPath = "sub/online/Skin/icon/{0}.png";
    n.scenePath = "sub/online/Sprites/Conventional/{0}.ls";
    n.sceneFormat = "sub/online/Sprites/Conventional/{0}.ls";
    n.iconPath = "sub/online/Skin/pic/{0}.png";
    n.itemIconPath = "page/gameView/itemIcon/{0}.png";

    class j {
        constructor() {
            this.keys = [], this.items = {};
        }
        addKey(e, t) {
            if (this.hasKey(e))
                return console.error("字典有相同的键值:", e), false;
            this.keys.push(e), this.items[e] = t;
        }
        getValue(e) {
            return this.items[e];
        }
        hasKey(e) {
            return -1 != this.keys.indexOf(e);
        }
        removeKey(e) {
            let t = this.keys.indexOf(e);
            t >= 0 && (this.keys.splice(t, 1), delete this.items[e]);
        }
        getCount() {
            return this.keys.length;
        }
        getKeys() {
            return this.keys;
        }
        getValues() {
            let e = [];
            for (let t = 0; t < this.keys.length; t++)
                e.push(this.items[this.keys[t]]);
            return e;
        }
        sortByKey() { }
        sortByValue() { }
        clear() {
            this.keys = [], this.items = {};
        }
    }

    class N extends Laya.Script {
        constructor() {
            super(), this.tweenAnimType = "none", this.ttType = "scale", this.wxType = "scale", this.oppoType = "scale", this.vivoType = "scale", this.qqType = "scale", this.hwType = "scale", this.winType = "scale";
        }
        onAwake() {
            this.init();
        }
        init() {
            as.getIns().isWXPlatform() ? this.tweenAnimType = this.wxType : as.getIns().isQQPlatform() ? this.tweenAnimType = this.qqType : as.getIns().isOPPOPlatform() ? this.tweenAnimType = this.oppoType : as.getIns().isVIVOPlatform() ? this.tweenAnimType = this.vivoType : as.getIns().isTTPlatform() ? this.tweenAnimType = this.ttType : as.getIns().isWINPlatform() && (this.tweenAnimType = this.winType);
        }
        playTween() {
            "scale" == this.tweenAnimType ? is.getIns().setBtnScaleTween(this.owner) : "shake" == this.tweenAnimType && is.getIns().setBtnShake(this.owner);
        }
        endTween() {
            is.getIns().closeBtnTween(this.owner);
        }
    }

    class U extends c {
    }

    class M extends u {
        static get ins() {
            return this._ins || (this._ins = new M), this._ins;
        }
        getConfigTarget() {
            return new U;
        }
    }
    M._ins = null;

    class b extends Laya.Script {
        constructor() {
            super(), this.teachBtns = [], this.curTeachId = null, this.curTeachKey = null, this.waitEnableTeachId = null, this.waitEnableTeachKey = null, this.teachEnableFun = new Object;
        }
        init() { }
        checkStartTeach() {
            0 != hs.getIns().getCurTeachId() || this.enableTeachStep(1);
        }
        addTeachFun(e, t) {
            this.teachEnableFun[e] || (this.teachEnableFun[e] = []), this.teachEnableFun[e].push(t);
        }
        exeTeachFun(e) {
            if (this.teachEnableFun[e]) {
                let t = this.teachEnableFun[e];
                for (let e = 0; e < t.length; e++)
                    is.getIns().handlerFun(t[e]);
            }
        }
        removeTeachFun(e, t) {
            if (this.teachEnableFun[e]) {
                let s = this.teachEnableFun[e].indexOf(t);
                s >= 0 && this.teachEnableFun[e].splice(s, 1);
            }
        }
        addTeachBtn(e) {
            this.teachBtns.indexOf(e) < 0 && (this.teachBtns.push(e), this.waitEnableTeachKey && this.waitEnableTeachKey == e.getStepKey() && (this.enableTeachStep(this.waitEnableTeachId), this.waitEnableTeachId = null, this.waitEnableTeachKey = null));
        }
        getCurTeachId() {
            return this.curTeachId;
        }
        getWaitEnableTeachKey() {
            return this.waitEnableTeachKey;
        }
        getCurTeachKey() {
            return this.curTeachKey;
        }
        removeTeachBtn(e) {
            let t = this.teachBtns.indexOf(e);
            t >= 0 && this.teachBtns.splice(t, 1);
        }
        enableTeachStep(e) {
            let t = M.ins.getDataById(e);
            if (!t)
                return void console.error("激活教程问题：", e);
            let s = t.btnKey, i = this.getTeachBtn(s);
            if (!i)
                return this.waitEnableTeachId = e, void (this.waitEnableTeachKey = s);
            1 == t.isPause && gameMgr.getIns().gamePause(), this.curTeachId = e, this.curTeachKey = s;
            let a = new Object;
            a.target = i, x.UIMgr.ins.openUI(x.UIType.TeachView, a), this.exeTeachFun(s);
        }
        getTeachBtn(e) {
            for (let t = 0; t < this.teachBtns.length; t++)
                if (this.teachBtns[t].getStepKey() == e)
                    return this.teachBtns[t];
            return null;
        }
        closeTeachStep(e) {
            if (!this.curTeachId)
                return;
            let t = this.curTeachId;
            hs.getIns().setTeachId(t), this.clearTeachCache();
            let s = M.ins.getDataById(t);
            if (1 == s.isPause && gameMgr.getIns().gameResume(), !s || s && s.btnKey != e)
                return void console.error("教程关闭问题:", e, t);
            this.teachSumbit(t);
            let i = s.nextId;
            if (-2 == i)
                i = s.id + 1;
            else if (-1 == i)
                return;
            M.ins.getDataById(i) ? this.enableTeachStep(i) : x.UIMgr.ins.closeUI(x.UIType.TeachView);
        }
        teachSumbit(e) {
            1 == e ? h.getIns().Enter_click(4) : 2 == e ? h.getIns().Enter_click(5) : 8 == e && h.getIns().Enter_click(6);
        }
        clearTeachCache() {
            this.curTeachKey = null, this.curTeachId = null;
        }
        teachViewCloseStep() {
            let e = x.UIMgr.ins.getPageByName(x.UIType.TeachView);
            e ? e.closeFun() : console.error("教程界面不存在");
        }
        closeCurTeachStep() {
            this.curTeachKey && this.teachViewCloseStep();
        }
        hasTeach() {
            return null != this.curTeachId;
        }
    }

    class _ extends Laya.Script {
        constructor() {
            super(), this.stepKey = -1;
        }
        init() { }
        resigstBtn() {
            V.TeachMgr.ins.addTeachBtn(this);
        }
        unResigstBtn() {
            V.TeachMgr.ins.removeTeachBtn(this);
        }
        getStepKey() {
            return this.stepKey;
        }
    }

    class TeachMgr extends b {
        static get ins() {
            return this._ins || (this._ins = new b, this._ins.init()), this._ins;
        }
    }
    TeachMgr._ins = null;
    var V = {
        TeachMgr: TeachMgr,
        TeachBtn: class extends _ {
        }
    };

    class q extends Laya.Script {
        constructor() {
            super(), this.isShowTop = false, this.isShowBottom = false, this.chineseName = "基类", this.isOpen = false, this.pageName = null, this.viewProp = {}, this.isAddListerener = false, this.adObj = {
                num: 0
            }, this.showMore = false, this.isPartPage = false, this.pageOpenCallBack = null, this.isAutoExeOpenCallBack = true, this.isAutoDestroy = true, this.isNeedTween = false, this.isDealAdView = true, this.nodeTween = [], this.tweenBg = null, this.autoDepth = true, this.teachBtns = [], this.isShowLeftBar = false, this.useNodeTween = false, this.tweenOpenVals = [], this.tweenCloseVals = [];
        }
        insertVal() {
            let e = [];
            is.getIns().getChildBySgin(this.owner, x.UIType.nodeSgin, e);
            for (var t = 0; t < e.length; t++) {
                this.viewProp[e[t].name] = e[t];
                let s = e[t].getComponent(N);
                s && (s.init(), this.nodeTween.push(s));
                let i = e[t].getComponent(V.TeachBtn);
                i && (i.init(), this.teachBtns.push(i));
            }
        }
        pageInit() {
            this._node = this.owner, this.insertVal(), this.tweenBg = is.getIns().seekNodeByName(this.owner, "m_tween_bg"), this.tweenOpenVals.push({
                time: 300,
                prop: {
                    scaleX: .3,
                    scaleY: .3
                },
                ease: Laya.Ease.expoOut
            }), this.tweenOpenVals.push({
                time: 300,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.expoOut
            }), this.tweenCloseVals.push({
                time: 150,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.backIn
            }), this.tweenCloseVals.push({
                time: 150,
                prop: {
                    scaleX: 0,
                    scaleY: 0
                },
                ease: Laya.Ease.backIn
            });
        }
        addListerner() {
            this.isAddListerener = true;
        }
        pagePreload(e) {
            is.getIns().handlerFun(e);
        }
        tweenClose(e) {
            if (this.isNeedTween && this.tweenCloseVals.length > 0) {
                let t = this.tweenBg ? this.tweenBg : this.owner;
                x.UIMgr.ins.tweenScale(t, this, false, e);
            }
            else
                is.getIns().handlerFun(e);
        }
        tweenOpen(e) {
            if (this.isNeedTween && this.tweenCloseVals.length > 0) {
                let t = this.tweenBg ? this.tweenBg : this.owner;
                x.UIMgr.ins.tweenScale(t, this, true, e);
            }
            else
                is.getIns().handlerFun(e);
        }
        hightPageClose(e) { }
        hightPageOpen(e) { }
        pageOpen(e) {
            this._node.visible = true, this.isAddListerener || this.addListerner(), this.isOpen = true, this.playNodeTween();
        }
        pageOpenTweenOver() {
            this.resigstBtn(), is.getIns().handlerFun(this.pageOpenCallBack, this);
        }
        resigstBtn() {
            for (let e = 0; e < this.teachBtns.length; e++)
                this.teachBtns[e].resigstBtn();
        }
        unResigstBtn() {
            for (let e = 0; e < this.teachBtns.length; e++)
                this.teachBtns[e].unResigstBtn();
        }
        playNodeTween() {
            for (var e = 0; e < this.nodeTween.length; e++)
                this.nodeTween[e].playTween();
        }
        closeNodeTween() {
            for (var e = 0; e < this.nodeTween.length; e++)
                this.nodeTween[e].endTween();
        }
        showAdCallBack() {
            as.getIns().isWXPlatform();
        }
        pageClose() {
            this.isAddListerener && this.removeListerner(), this.isOpen = false, this._node.visible = false, this.closeNodeTween(), this.unResigstBtn();
        }
        removeListerner() {
            this.isAddListerener = false;
        }
        pageDestroy() {
            this.isOpen && this.pageClose();
        }
        setPageOpenCallBack(e) {
            this.pageOpenCallBack = e;
        }
        depChangeCallBack() { }
    }

    class Q {
        static init() {
            if (as.getIns().getPlat() && (this.G_BaseUrlPath = null), this.G_BaseUrlPath && this.getMiniAdpter()) {
                Laya.URL.basePath = this.G_BaseUrlPath;
                let e = this.G_AppNativefiles, t = this.getMiniAdpter();
                t && (t.nativefiles = t.nativefiles.concat(e), t.AutoCacheDownFile = true);
            }
        }
        static getMiniAdpter() {
            return Laya.MiniAdpter ? Laya.MiniAdpter : Laya.QQMiniAdapter ? Laya.QQMiniAdapter : Laya.VVMiniAdapter ? Laya.VVMiniAdapter : Laya.QGMiniAdapter ? Laya.QGMiniAdapter : Laya.TTMiniAdapter ? Laya.TTMiniAdapter : Laya.HWMiniAdapter ? Laya.HWMiniAdapter : null;
        }
    }
    Q.fireVer = "v8";
    Q.appName = "MyMiniPart";
    Q.G_BaseUrlPath = "https://image.game.hnquyou.com/upload/" + Q.appName + "/" + Q.fireVer + "/";
    Q.G_AppNativefiles = ["res/sound/", "res/conf/", "res/atlas/", "prefab/", "loading/", "page/", "heyGame/"];

    class ie {
        constructor() {
            this.gameServerName = "游戏服", this.gameServerId = "1", this.userId = null, this.token = null, this.isLogin = false, this.isInit = false, this.gameId = 2211, this.appId = "";
        }
        static getIns() {
            return this.instance || (this.instance = new ie), this.instance;
        }
        preInit() {
            if (as.getIns().isWXPlatform()) {
                window.wx.uma.init({
                    appKey: "6222cdcb2b8de26e11e24f9e",
                    useOpenid: true,
                    autoGetOpenid: true,
                    debug: false,
                    uploadUserInfo: true
                });
            }
        }
        init(e) {
            this.isInit = true, this.appId = L.getIns().getAppid(), is.getIns().handlerFun(e);
        }
        login(e) {
            if (!this.isInit || this.isLogin)
                return void is.getIns().handlerFun(e);
            let t = (t, s) => {
                this.isLogin = true, this.userId = s, h.getIns().setMgr(t), is.getIns().handlerFun(e);
            };
            as.getIns().isWINPlatform(), t(null, "");
        }
        getUId() {
            return this.isLogin ? this.userId : "";
        }
        getAppId() {
            if (this.isInit)
                return this.appId;
            console.error("xiyou 没有初始化!");
        }
    }
    ie.instance = null;

    class se {
        static get Ins() {
            return this._ins || (this._ins = new se, this._ins.init()), this._ins;
        }
        init() { }
        loadSub(e, t) {
            let s = as.getIns().getPlat();
            s ? s.loadSubpackage({
                name: e,
                success: s => {
                    console.info("加载分包成功", e), is.getIns().handlerFun(t);
                },
                fail: t => {
                    console.info("加载分包失败", e, t);
                }
            }) : (console.log("不需要加载分包!"), is.getIns().handlerFun(t));
        }
    }
    se._ins = null;

    class Z {
        static get Ins() {
            return this._ins || (this._ins = new Z, this._ins.init()), this._ins;
        }
        init() { }
        load3DScenes(e) {
            is.getIns().handlerFun(e);
        }
    }
    Z._ins = null;

    class ae extends q {
        constructor() {
            super(), this.loadMinTime = 1;
        }
        pageInit() {
            super.pageInit();
        }
        pageOpen(e) {
            super.pageOpen(e), this.startLoading();
        }
        startLoading() {
            this.resetLoading(), Q.init();
            let e = new Promise(e => {
                ie.getIns().init(() => {
                    ie.getIns().login(() => {
                        ee.getIns().init(() => {
                            e(null);
                        });
                    });
                });
            }), t = new Promise(e => {
                Laya.Tween.to(this.viewProp.m_pro, {
                    value: .99
                }, 1e3 * this.loadMinTime, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                    e(null);
                }));
            }), s = new Promise(e => {
                se.Ins.loadSub("sub", () => {
                    e(null);
                });
            }), i = new Promise(e => {
                if (hs.getIns().isShowYinsi())
                    e(null);
                else {
                    e(null);
                }
            });
            Promise.all([e, t, s, i]).then(() => {
                Z.Ins.load3DScenes(() => {
                    this.loadEnd();
                });
            });
        }
        loadEnd() {
            gameMgr.getIns().toGame(hs.getIns().getLevelId(), 1, () => {
                gameMgr.getIns().gameStart(null, () => {
                    x.UIMgr.ins.closeUI(x.UIType.GameLoading);
                });
            });
        }
        resetLoading() {
            this.viewProp.m_pro.value = 0;
        }
    }

    class J {
        constructor() {
            this.initTweenVals = [], this.tweenVals = [], this.tweenIndex = 0, this.endBackFun = null, this.targets = [], this.isLoop = false, this.isPlayTween = false, this.cTween = [], this.autoRet = false, this.delayTime = 0, this.playTimes = 1, this.curPlayerTimes = 0;
        }
        setLoop(e) {
            this.isLoop = e;
        }
        setTarget(e) {
            this.targets.indexOf(e) < 0 && this.targets.push(e);
        }
        clearTarget() {
            this.targets.splice(0, this.targets.length);
        }
        setTweenVals(e) {
            this.initTweenVals = e, this.tweenVals = e;
        }
        setReverse(e) {
            this.tweenVals = e ? this.initTweenVals.slice(0).reverse() : this.initTweenVals;
        }
        setEndCallBack(e) {
            this.endBackFun = e;
        }
        reset() {
            if (!this.checkTarget())
                return;
            this.curPlayerTimes = 0, this.tweenIndex = 0;
            let e = this.tweenVals[this.tweenIndex].prop, t = Object.keys(e);
            for (let s = 0; s < t.length; s++) {
                let i = t[s];
                for (let t = 0; t < this.targets.length; t++)
                    this.targets[t][i] = e[i];
            }
            this.tweenIndex++;
        }
        checkTarget() {
            let e = true;
            for (let e = this.targets.length - 1; e >= 0; e--) {
                let t = this.targets[e];
                t && !t.destroyed || this.targets.splice(e, 1);
            }
            return (e = 0 != this.targets.length) || (e = 0 != this.tweenVals.length), e;
        }
        play() {
            this.isPlayTween || this.checkTarget() && (this.reset(), this.isPlayTween = true, 0 != this.delayTime ? Laya.timer.once(this.delayTime, this, () => {
                this.doNext();
            }) : this.doNext());
        }
        autoReset(e) {
            this.autoRet = e;
        }
        setPlayTimes(e) {
            this.playTimes = e;
        }
        doNext() {
            if (!this.checkTarget())
                return;
            if (!this.isPlayTween)
                return;
            if (this.tweenIndex >= this.tweenVals.length) {
                if (this.curPlayerTimes++, !(this.isLoop || this.curPlayerTimes < this.playTimes))
                    return void this.end();
                if (!this.isPlayTween)
                    return;
                this.autoRet ? this.reset() : this.tweenIndex = 0;
            }
            let e = this.tweenVals[this.tweenIndex].time, t = this.tweenVals[this.tweenIndex].prop, s = this.tweenVals[this.tweenIndex].ease;
            this.clearTween();
            for (let i = 0; i < this.targets.length; i++)
                0 == i ? this.cTween.push(Laya.Tween.to(this.targets[i], t, e, s, Laya.Handler.create(this, this._doNext), 0, true, false)) : this.cTween.push(Laya.Tween.to(this.targets[i], t, e, s, null, 0, true, false));
        }
        _doNext() {
            this.isPlayTween && (this.tweenIndex++, 0 != this.delayTime && this.tweenIndex >= this.tweenVals.length ? Laya.timer.once(this.delayTime, this, this.doNext) : this.doNext());
        }
        setDelayTime(e) {
            this.delayTime = e;
        }
        end() {
            this.isPlayTween = false, this.clearTween(), is.getIns().handlerFun(this.endBackFun);
        }
        clearEndFun() {
            this.endBackFun = null;
        }
        clearTween() {
            for (let e = this.cTween.length - 1; e >= 0; e--)
                this.cTween[e] && this.cTween[e].clear();
            this.cTween.splice(0, this.cTween.length), Laya.timer.clear(this, this.doNext), Laya.timer.clear(this, this._doNext);
        }
        clearVals() {
            this.tweenVals.splice(0, this.tweenVals.length);
        }
    }

    class X {
        constructor() {
            this.tweenPool = [];
        }
        static getIns() {
            return this.instance || (this.instance = new X), this.instance;
        }
        getTween() {
            let e = null;
            return 0 != this.tweenPool.length ? (e = this.tweenPool[0], this.tweenPool.splice(0, 1)) : e = new J, e;
        }
        recycleTween(e) {
            e && (e.setLoop(false), e.setDelayTime(0), e.clearEndFun(), e.end(), e.clearTarget()), this.tweenPool.indexOf(e) < 0 && this.tweenPool.push(e);
        }
    }
    X.instance = null;

    class ne extends Laya.Script {
        constructor() {
            super(), this.allPages = new j, this.activePages = [], this.curPageDepth = 0, this.uiPagePath = "prefab/page/{0}.json", this.maxPageCount = 100, this.spaceDepth = 20, this.openPageOrderArray = [], this.inOpenPageArray = [], this.box = null, this.openWaitFun = new Object;
        }
        preLoad(e) {
            let t = [];
            if (t.push(x.UIType.BottomView), t.push(x.UIType.TopView), 0 == t.length)
                return void is.getIns().handlerFun(e);
            let s = 0;
            for (let i = 0; i < t.length; i++)
                this.openUI(t[i], null, () => {
                    s++, t.length == s && is.getIns().handlerFun(e);
                }, true);
        }
        createMask() {
            this.box || (this.box = new Laya.Box, this.owner.addChild(this.box), this.box.width = 1e4, this.box.height = 1e4, this.box.centerX = 0, this.box.centerY = 0, this.box.zOrder = 1e4, this.box.mouseThrough = false, this.box.mouseEnabled = true);
        }
        cretaActivePageData(e, t) {
            let s = {
                pageBase: null,
                vals: null
            };
            return s.pageBase = e, s.vals = t, s;
        }
        init() {
            this.createMask(), is.getIns().log("mainUI init");
        }
        setBoxMask() {
            this.showMask(this.inOpenPageArray.length > 0);
        }
        showMask(e) {
            this.box && (this.box.visible = e);
        }
        addInOpen(e, t = null) {
            this.inOpenPageArray.indexOf(e) < 0 && (this.inOpenPageArray.push(e), this.setBoxMask()), t && (this.openWaitFun[e] || (this.openWaitFun[e] = []), this.openWaitFun[e].push(t));
        }
        removeInOpen(e) {
            let t = this.inOpenPageArray.indexOf(e);
            if (t >= 0 && (this.inOpenPageArray.splice(t, 1), this.setBoxMask()), this.openWaitFun[e]) {
                let t = this.openWaitFun[e];
                for (let e = 0; e < t.length; e++)
                    t[e] && t[e]();
                this.openWaitFun[e] = null;
            }
        }
        hasInOpen(e) {
            return this.inOpenPageArray.indexOf(e) >= 0;
        }
        openUI(e, t = null, s = null, i = false) {
            if (!e)
                return void is.getIns().error("界面name不为空");
            if (i && this.getPageByName(e))
                return is.getIns().handlerFun(s), void console.log("界面已经存在 不需要预加载!");
            if (this.hasInOpen(e))
                return i ? this.addInOpen(e, s) : this.addInOpen(e, () => {
                    this.openUI(e, t, s, false);
                }), void console.log("界面正在创建:", e);
            if (!this.canOperate(e, t))
                return void is.getIns().handlerFun(s);
            this.addInOpen(e, s);
            let a = () => {
                this.removeInOpen(e);
            }, n = this.getPageByName(e), r = () => {
                n ? (n.owner.visible = false, n.pageName = e, this.changePage(true, n), n.pageInit()) : is.getIns().error("请添加界面脚本到", e);
            }, o = () => {
                let s = this.getEndActivePage();
                s && !n.isPartPage && s.hightPageOpen(e), this.changeActivePage(true, n, t), this.changePageOrder(true, e), this.offectPageDepth(), n.setPageOpenCallBack(a), n.pageOpen(t), n.isDealAdView && this.showAdView(n, null);
                n.tweenOpen(() => {
                    n.pageOpenTweenOver();
                });
            };
            n ? o() : this.createUI(e, t => {
                (n = t.getComponent(q)) || (n = this.autoAddClass(e, t)), r(), n.pagePreload(() => {
                    i ? (console.log("预加载界面成功:", e), a()) : o();
                });
            });
        }
        autoAddClass(e, t) {
            if (e == x.UIType.GameLoading)
                return t.addComponent(ae);
        }
        tweenScale(e, t, s, i) {
            let a = X.getIns().getTween();
            a.setLoop(false), s ? a.setTweenVals(t.tweenOpenVals) : a.setTweenVals(t.tweenCloseVals), a.setTarget(e), a.setEndCallBack(() => {
                is.getIns().handlerFun(i), X.getIns().recycleTween(a);
            }), a.play();
        }
        reShowAd() {
            let e = this.getEndActivePage();
            e && this.showAdView(e, null);
        }
        showAdView(e, t) {
            if (e.isPartPage)
                return void is.getIns().handlerFun(t);
            let s = 0, i = 0, a = () => {
                ++i == s && is.getIns().handlerFun(t);
            };
            (e.isShowBottom || 2 == e.adObj.num) && (s++, this.openUI(x.UIType.BottomView, e.adObj, () => {
                a();
            })), e.isShowTop && (s++, this.openUI(x.UIType.TopView, null, () => {
                a();
            })), e.showAdCallBack(), 0 == s && is.getIns().handlerFun(t);
        }
        changeActivePage(e, t, s) {
            if (!t)
                return void is.getIns().error("添加的激活页面不为空");
            let i = this.getActivePageIndexByName(t.pageName);
            if (e)
                i >= 0 && this.activePages.splice(i, 1), this.activePages.push(this.cretaActivePageData(t, s));
            else {
                if (i < 0)
                    return;
                this.activePages.splice(i, 1);
            }
        }
        getActivePageIndexByName(e) {
            for (var t = 0; t < this.activePages.length; t++)
                if (this.activePages[t].pageBase.pageName == e)
                    return t;
            return -1;
        }
        getActivePageByName(e) {
            for (var t = 0; t < this.activePages.length; t++)
                if (this.activePages[t].pageBase.pageName == e)
                    return this.activePages[t].pageBase;
            return null;
        }
        changePage(e, t) {
            if (!t)
                return void is.getIns().error("添加的页面不存在");
            let s = this.getPageByName(t.pageName);
            e ? s || this.allPages.addKey(t.pageName, t) : s ? this.allPages.removeKey(t.pageName) : is.getIns().error("界面不存在", t);
        }
        offectPageDepth() {
            let e = null, t = null;
            for (let s = 0; s < this.activePages.length; s++)
                (e = this.activePages[s].pageBase).autoDepth && (e.owner.zOrder = 0 + s * this.spaceDepth, this.curPageDepth = e.owner.zOrder), e.pageName == x.UIType.LodingView && (t = e);
            t && (t.owner.zOrder = this.curPageDepth + this.spaceDepth);
            for (let e = 0; e < this.activePages.length; e++)
                this.activePages[e].pageBase.depChangeCallBack();
        }
        offectPageCount() {
            let e = this.allPages.getCount();
            if (e > this.maxPageCount) {
                let s = e - this.maxPageCount, i = null, a = this.allPages.getKeys();
                for (var t = 0; t < a.length && (i = this.allPages.getValue(a[t]), this.isActivePage(i.pageName) || !i.isAutoDestroy || this.hasInOpen(i.pageName) || (this.changePage(false, i), this.changeActivePage(false, i, null), i.pageDestroy(), i.owner.destroy(), !(--s <= 0))); t++)
                    ;
            }
        }
        isActivePage(e) {
            for (var t = 0; t < this.activePages.length; t++)
                if (e == this.activePages[t].pageBase.pageName)
                    return true;
            return false;
        }
        getPageByName(e) {
            return this.allPages.getValue(e);
        }
        getEndActivePage() {
            if (0 == this.activePages.length)
                return null;
            for (var e = this.activePages.length - 1; e >= 0; e--)
                if (!this.activePages[e].pageBase.isPartPage)
                    return this.activePages[e].pageBase;
            return null;
        }
        createUI(e, t) {
            let s = this.uiPagePath.format(e), i = s => {
                let i = new Laya.Prefab;
                i.json = s;
                let a = i.create();
                this.owner.addChild(a), a.name = e, this.offectUI(a), is.getIns().handlerFun(t, a);
            }, a = this.owner.getChildByName(e);
            a ? (this.offectUI(a), is.getIns().handlerFun(t, a)) : Laya.loader.create(s, Laya.Handler.create(this, i));
        }
        offectUI(e) {
            e.width = this.owner.width, e.height = this.owner.height, e.centerX = 0, e.centerY = 0;
        }
        closeUI(e) {
            if (this.hasInOpen(e))
                return void console.error("正在关闭");
            if (!this.canOperate(e, null))
                return;
            let t = this.getPageByName(e);
            if (t) {
                if (!t.isOpen)
                    return;
                this.changePageOrder(false, e), this.changeActivePage(false, t, null);
                let s = null, i = () => {
                    t.isPartPage || (s = this.getEndActivePage()), s && (s.hightPageClose(e), s.isDealAdView && this.showAdView(s, null)), t.pageClose(), this.offectPageCount(), this.removeInOpen(e);
                };
                this.addInOpen(e), t.tweenClose(i);
            }
            else
                is.getIns().error("关闭的界面不存在:", e);
        }
        printActivePage() {
            for (var e = 0; e < this.activePages.length; e++)
                console.log(e + "", this.activePages[e].pageBase);
        }
        changePageOrder(e, t) {
            if (e) {
                let e = this.openPageOrderArray.length - 1;
                if (e >= 0 && t == this.openPageOrderArray[e])
                    return;
                this.openPageOrderArray.push(t);
            }
            else {
                let e = this.openPageOrderArray.length - 1;
                if (e < 0)
                    return;
                this.openPageOrderArray.splice(e, 1);
            }
        }
        canOperate(e, t) {
            return true;
        }
        hintAllUI(e) {
            for (var t = 0; t < this.activePages.length; t++)
                this.activePages[t].pageBase.pageName != e && (this.activePages[t].pageBase.owner.visible = false);
        }
        closeAllPage(e) {
            let t = null, s = [];
            s = s.concat(this.activePages);
            for (let i = 0; i < s.length; i++)
                t = s[i].pageBase, e && e.indexOf(t.pageName) >= 0 || this.closeUI(t.pageName);
        }
        showAllUI() {
            for (var e = 0; e < this.activePages.length; e++)
                this.activePages[e].pageBase.owner.visible = true;
        }
        hintUIByName(e) {
            let t = this.getActivePageByName(e);
            t && (t.owner.visible = false);
        }
        reShowHintUIByName(e) {
            let t = this.getActivePageByName(e);
            t && (t.owner.visible = true);
        }
        pageIsOpen(e) {
            let t = this.getPageByName(e);
            return !(!t || !t.isOpen);
        }
    }

    class re {
    }
    re.nodeSgin = "m_";
    re.TopView = "topView";
    re.BottomView = "bottomView";
    re.GameView = "gameView";
    re.GameOverViewEnd = "GameOverEndPage";
    re.LodingView = "LodingView";
    re.SkinView = "SkinView";
    re.GetGoldView = "getGoldView";
    re.TryUseSkinView = "TryUseSkin";
    re.UpdateView = "UpdateView";
    re.GetDiamView = "GetDiamView";
    re.SginView = "SginView";
    re.TeachView = "TeachView";
    re.ShareView = "ShareView";
    re.GetPowerView = "GetPowerView";
    re.GetRewardView = "GetRewardView";
    re.GoldFingerView = "GoldFingerView";
    re.SelectLevelModel = "SelectLevelModel";
    re.GameOverFirst = "GameOverFirst";
    re.RebornView = "rebornView";
    re.GameLoading = "gameLoading";
    re.FreeCreate = "freeCreate";
    re.TaskView = "taskView";
    re.PictureView = "pictureView";
    re.PageMarkView = "pageMarkView";
    re.PageSetting = "pageSetting";
    re.LoadingView = "loadingView";
    re.NewStoreView = "newStoreView";
    re.DelineView = "delineView";
    re.BuffView = "buffView";

    class t extends ne {
        static get ins() {
            return this._ins;
        }
        static set ins(e) {
            this._ins = e;
        }
        init() {
            super.init(), t.ins = this;
        }
    }
    t._ins = null;
    var x = {
        UIMgr: t,
        UIType: class extends re {
        }
    };

    class ge extends Laya.Script {
        constructor() {
            super(), this.offectLen = 50, this.initRang = 1, this.maxRang = this.initRang, this.initBottom = 200, this.initLeft = 200, this.mouseDownPos = null, this.midPoint = null, this.bgRangX = 0, this.bgRangY = 0, this.lastRot = 0, this.rockerUp = null, this.rockerMove = null, this.rockerDown = null, this.vec1Temp = new Laya.Vector3, this.vec2Temp = new Laya.Vector3, this.rot = null;
        }
        init() {
            this.bgRangX = this.rockerBG.width / 2, this.bgRangY = this.rockerBG.height / 2, this.initRang = this.bgRangX, this.maxRang = this.initRang * this.initRang, this.midVec = new Laya.Vector3(this.bgRangX, 0, this.bgRangY), this.bindListener();
        }
        bindListener() {
            this.clickBg.on(Laya.Event.MOUSE_MOVE, this, this.moveRocker), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.upRocker), this.clickBg.on(Laya.Event.MOUSE_DOWN, this, this.downRocker);
        }
        removeListener() {
            this.clickBg.off(Laya.Event.MOUSE_MOVE, this, this.moveRocker), this.clickBg.off(Laya.Event.MOUSE_UP, this, this.upRocker), this.clickBg.off(Laya.Event.MOUSE_DOWN, this, this.downRocker);
        }
        moveRocker(e) {
            if (!this.mouseDownPos)
                return;
            let t = new Laya.Vector3(e.stageX, 0, e.stageY), s = t.x - this.mouseDownPos.x, i = t.z - this.mouseDownPos.z;
            s * s + i * i < this.maxRang || (this.vec1Temp.x = s, this.vec1Temp.z = i, Laya.Vector3.normalize(this.vec1Temp, this.vec1Temp), Laya.Vector3.scale(this.vec1Temp, this.initRang, this.vec1Temp), s = this.vec1Temp.x, i = this.vec1Temp.z);
            let a = 0;
            0 != s && 0 != i ? (this.vec1Temp.x = 1, this.vec1Temp.z = 0, this.vec2Temp.x = s, this.vec2Temp.z = i, a = 180 * Math.acos(Laya.Vector3.dot(this.vec1Temp, this.vec2Temp) / (Laya.Vector3.scalarLength(this.vec1Temp) * Laya.Vector3.scalarLength(this.vec2Temp))) / Math.PI, i <= 0 && (a = -a), this.lastRot = a) : this.rot = this.lastRot, this.setRocketForward(a), this.rockerPoint.centerX = s, this.rockerPoint.centerY = i, is.getIns().handlerFun(this.rockerMove, s / (this.initRang - this.offectLen), i / (this.initRang - this.offectLen), a);
        }
        setRocketForward(e) {
            this.rockerForward && (this.rockerForward.rotation = e);
        }
        upRocker(e) {
            this.rockerBG.pos(this.initLeft, this.initBottom), this.rockerPoint.centerY = 0, this.rockerPoint.centerX = 0, this.mouseDownPos = null, this.rockerBG.alpha = 0, this.setRocketForward(this.lastRot), is.getIns().handlerFun(this.rockerUp);
        }
        downRocker(e) {
            this.rockerPoint.centerY = 0, this.rockerPoint.centerX = 0, this.rockerBG.alpha = .5;
            let t = new Laya.Vector3(e.stageX, 0, e.stageY);
            this.mouseDownPos = t, this.rockerBG.pos(e.stageX, e.stageY), is.getIns().handlerFun(this.rockerDown);
        }
        onDestroy() {
            this.removeListener();
        }
    }

    class me extends q {
        constructor() {
            super(), this.isCheckDeline = false, this.curBuffTime = 0;
        }
        pageInit() {
            super.pageInit(),
                this.m_buff = this.viewProp.m_buff,
                this.m_buffIcon = this.viewProp.m_buffIcon, gameMgr.getIns().gameView = this, this.isShowTop = true;
            let e = this.viewProp.m_clickBg.getComponent(ge);
            e.init(), this.rockerMgr = e, this.speedTimeLable = is.getIns().seekNodeByName(this.viewProp.m_speed, "time"), this.carryTimeLable = is.getIns().seekNodeByName(this.viewProp.m_carry, "time"), this.viewProp.m_speed.on(Laya.Event.CLICK, this, this.speedUp), this.viewProp.m_carry.on(Laya.Event.CLICK, this, this.carryUp), this.viewProp.m_setting.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_setting, () => {
                    x.UIMgr.ins.openUI(x.UIType.PageSetting);
                });
            }), this.viewProp.m_levelEnter.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_levelEnter, () => {
                    FBInstantManager.Instance.showInterstitial();
                    x.UIMgr.ins.openUI(x.UIType.PageMarkView);
                });
            }), this.showTeach(1, false), this.viewProp.m_teack_skip.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_teack_skip, () => {
                    this.showTeach(1, false);
                });
            }), this.viewProp.m_more.on(Laya.Event.CLICK, this, () => {
                as.getIns().isVIVOPlatform() && L.getIns().getAdBase().createBoxPortalAd(null);
            }), this.viewProp.m_addToDesk.visible = false, as.getIns().isOPPOPlatform() && (this.viewProp.m_addToDesk.visible = true, this.viewProp.m_addToDesk.on(Laya.Event.CLICK, this, () => {
                L.getIns().getAdBase().addDesk();
            }));
            this.viewProp.m_teack_skip.skin = "UI/" + P.getPicture() + "/5745.png";
        }
        showTeach(e, t) {
            e > 3 ? this.viewProp.m_teachView.visible = false : (this.viewProp.m_teachView.visible = t,
                this.viewProp.m_teachTip.skin = "UI/" + P.getPicture() + "/teach_" + e + ".png");
        }
        upRockerFun() {
            this.rockerMgr && this.rockerMgr.upRocker(null);
        }
        speedUp() {
            is.getIns().shareOrAd(() => { }, null);
        }
        showBuff(e, t, s) {
            this.m_buffIcon.skin = "page/gameView/buff_" + s + ".png", this.curBuffTime = t, this.m_buff.visible = e;
        }
        showBuffTime(e) {
            this.viewProp.m_buff_time.text = e;
        }
        carryUp() {
            is.getIns().shareOrAd(() => { }, null);
        }
        pagePreload(e) {
            is.getIns().loadUiJson(["prefab/item/autoFullView.json", "prefab/item/buffUI.json", "prefab/item/waiterUpUIItem.json", "prefab/item/buildInfoUI.json", "prefab/item/waiterUIItem.json", "prefab/item/productNeedItem.json", "prefab/item/toCashierItem.json", "prefab/item/createUI.json", "prefab/item/buyTipsItem.json"], e);
        }
        pageOpen(e) {
            if (super.pageOpen(e), this.vals = e, this.showBuff(false, 0, 1), this.upRockerFun(), !this.isCheckDeline) {
                this.isCheckDeline = true;
                let e = hs.getIns().getOutTime();
                if (e > 600) {
                    let t = 7200;
                    e = e > t ? t : e;
                    let s = {};
                    s.count = Math.ceil(e / t * 500), x.UIMgr.ins.openUI(x.UIType.DelineView, s);
                }
                hs.getIns().canSaveOutTime = true, hs.getIns().saveTime();
            }
            hs.getIns().hasNewPlayer() && !me.isTeach && (me.isTeach = true, me.teachId++, this.showTeach(1, true));
        }
        pageOpenTweenOver() {
            super.pageOpenTweenOver(), this.vals && this.vals.endFun && this.vals.endFun();
        }
        onUpdate() {
            this.curBuffTime > 0 && (this.curBuffTime -= Laya.timer.delta, this.curBuffTime = this.curBuffTime < 0 ? 0 : this.curBuffTime, this.showBuffTime(is.getIns().convertSecondToHourMinuteSecond(Math.floor(.001 * this.curBuffTime), true)), 0 == this.curBuffTime && this.showBuff(false, 0, 1));
        }
        addListerner() {
            super.addListerner(), this.rockerMgr.rockerDown = (() => {
                ts.getIns() && ts.getIns().playerMgr.rockerDown();
            }), this.rockerMgr.rockerUp = (() => {
                ts.getIns() && gameMgr.getIns().isGameStart() && ts.getIns().playerMgr.rockerUp();
            }), this.rockerMgr.rockerMove = ((e, t, s) => {
                ts.getIns() && ts.getIns().playerMgr.changeForward(e, t, s);
            });
        }
        removeListerner() {
            super.removeListerner(), this.rockerMgr.rockerDown = null, this.rockerMgr.rockerMove = null, this.rockerMgr.rockerUp = null;
        }
        hightPageOpen(e) {
            super.hightPageOpen(e), e == x.UIType.GetGoldView && is.getIns().hintBanner();
        }
        hightPageClose(e) {
            super.hightPageClose(e), e == x.UIType.GetGoldView && is.getIns().createBanner();
        }
        pageClose() {
            super.pageClose(), as.getIns().isWXPlatform() ? L.getIns().getAdBase().destoryCustomAd() : as.getIns().isOVPlatform() && is.getIns().hintBanner();
        }
    }
    me.isTeach = false;
    me.teachId = 0;

    var R;
    (function (R) {
        R[R["None"] = 0] = "None";
        R[R["Speed"] = 1] = "Speed";
        R[R["Effect"] = 2] = "Effect";
        R[R["CusCount"] = 3] = "CusCount";
        R[R["Carry"] = 4] = "Carry";
    })(R || (R = {}));

    var W;
    (function (W) {
        W[W["Next"] = 0] = "Next";
        W[W["Last"] = 1] = "Last";
    })(W || (W = {}));

    class Se extends c {
    }

    class Be extends u {
        static get ins() {
            return this._ins || (this._ins = new Be), this._ins;
        }
        getConfigTarget() {
            return new Se;
        }
    }
    Be._ins = null;

    class r {
    }
    r.player = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
    r.Store = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6;
    r.createPos = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
    r.money = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
    r.ray = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7;
    r.item = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3;
    r.rayTarget = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5;
    r.ob = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8;
    r.wall1 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9;
    r.all = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER;

    class s {
    }

    class t$1 {
        constructor() {
            this._listerners = {};
        }
        init() { }
        static getIns() {
            return this._ins || (this._ins = new t$1, this._ins.init()), this._ins;
        }
        addEventListerner(e, t, i = null) {
            if (!e)
                return void console.error("事件名为空:", e);
            this._listerners[e] || (this._listerners[e] = []);
            this._listerners[e];
            let a = new s;
            a.event_name = e, a.caller = i, a.method = t, this._listerners[e].push(a);
        }
        removeEventListerner(e, t, s) {
            if (e && this._listerners[e]) {
                let i = this._listerners[e];
                for (let e = i.length - 1; e >= 0; e--)
                    i[e].caller == s && t == i[e].method && i.splice(e, 1);
            }
        }
        removeAllEventListerners() {
            this._listerners = {};
        }
        hasEventListerner(e) {
            return this._listerners[e];
        }
        dispatchEvent(e, t = null) {
            if (e && this._listerners[e]) {
                let t = this._listerners[e], s = [];
                for (let e = 1; e < arguments.length; e++)
                    s.push(arguments[e]);
                for (let e = 0; e < t.length; e++)
                    t[e].method.apply(t[e].caller, s);
            }
        }
    }
    t$1._ins = null;

    class Ce {
    }
    Ce.run = "run";
    Ce.B_idleloop = "B_idleloop";
    Ce.B_run = "B_run";
    Ce.B_walk = "B_walk";
    Ce.U_idleloop = "U_idleloop";
    Ce.U_tuiche = "U_tuiche";
    Ce.U_banyun = "U_banyun";
    Ce.U_gouwu = "U_gouwu";
    Ce.U_idle2 = "U_idle2";
    Ce.U_run = "U_run";
    Ce.U_idle1 = "U_idle1";
    Ce.Box_Open = "Box_Open";
    Ce.Box_Closing = "Box_Close";
    Ce.ShadowClose = "ShadowClose";
    Ce.ShadowActive = "ShadowActive";
    Ce.bingxiangdoorclose = "bingxiangdoorclose";
    Ce.bingxiangdooropen = "bingxiangdooropen";

    class Ue {
        constructor() {
            this.itemType = G.Egg, this.item = null, this.itemState = 0;
        }
        setItemState(e) {
            this.itemState = e, this.item.active = 0 != e;
        }
        hideItem() {
            this.item.active = false;
        }
        getItem(e) {
            let t = this.item.transform.position.clone(), s = Laya.Sprite3D.instantiate(this.item);
            e.addChild(s), s.transform.position = t;
            let i = s.transform.localRotationEuler;
            return i.setValue(0, 0, 0), s.transform.localRotationEuler = i, s;
        }
        clone(e) {
            this.itemType = e.itemType, this.item = e.item, this.itemState = e.itemState;
        }
    }

    class Xe {
        constructor() {
            this.curVec = new Laya.Vector3;
        }
        tweenTo(e, t, s, i = 400) {
            this.node.transform.localPosition.cloneTo(this.curVec);
            let a = Laya.Tween.to(this.curVec, {
                x: 0,
                y: 0,
                z: 0
            }, i, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                a.clear(), e && !e.destroyed && e.transform && is.getIns().handlerFun(t);
            }), s, false, false);
        }
        updatePos() {
            if (!this.node || this.node.destroyed || !this.node.transform)
                return;
            let e = this.node.transform.localPosition;
            this.curVec.cloneTo(e), this.node.transform.localPosition = e;
        }
    }

    class Ne {
        constructor() {
            this.moveList = [];
        }
        update() {
            if (this.moveList.length > 0)
                for (let e = 0; e < this.moveList.length; e++)
                    this.moveList[e].updatePos();
        }
        hasTween() {
            return this.moveList.length > 0;
        }
        toLocal(e, t, s, i = 400) {
            let a = new Xe;
            this.moveList.push(a), a.node = e, a.tweenTo(e, () => {
                let s = this.moveList.indexOf(a);
                s >= 0 && this.moveList.splice(s, 1), e.transform.localPosition = is.zeroVec.clone(), is.getIns().handlerFun(t);
            }, s, i);
        }
    }

    class ve extends Laya.Script {
        init() {
            this.node = this.owner, this.node.zOrder = -1;
        }
        setPos(e, t) {
            this.node.x = e, this.node.y = t;
        }
        setShow(e) {
            this.node.visible = e;
        }
        setIndex(e) {
            this.node.zOrder = e;
        }
    }

    class autoFullView extends ve {
        init() {
            super.init(),
                this.m_ad_btn = is.getIns().seekNodeByName(this.owner, "m_ad_btn"),
                this.m_ad_btn.on(Laya.Event.CLICK, this, () => {
                    is.getIns().shareOrAd(() => {
                        this.adCallBackFun && this.adCallBackFun();
                    }, null);
                });
            this.m_ad_btn.getChildByName("pic").skin = "UI/" + P.getPicture() + "/345231.png";
            this.m_ad_btn.parent.getChildByName("pic1").skin = "UI/" + P.getPicture() + "/45674567.png";
            this.m_ad_btn.parent.getChildByName("pic2").skin = "UI/" + P.getPicture() + "/title7.png";
        }
    }

    class be extends Laya.Script3D {
        constructor() {
            super(), this.parkType = O.ParkCashier, this.showNodes = [], this.goodDatas = [], this.standPoss = [], this.hasGood = false, this.isCreate = false, this.itemTween = new Ne, this.sellType = G.None, this.isShowShadow = true, this.isOpen = 0, this.enterTimes = 0;
        }
        getSellType() {
            return this.sellType;
        }
        init() {
            this.node = this.owner, this.fx_Arrow = this.owner.getChildByName("Fx_Arrow"), this.buildData = Be.ins.getDataById(this.getBuildId());
            let e = is.getIns().seekNodeByName(this.owner, "showNode"), s = this.node.getComponent(Laya.PhysicsCollider);
            s.collisionGroup = r.Store, s.canCollideWith = r.player, s.isTrigger = true;
            let a = [];
            is.getIns().getChildBySgin(this.owner, "col_", a);
            for (let e = 0; e < a.length; e++) {
                let t = a[e].getComponent(Laya.PhysicsCollider);
                t.collisionGroup = r.item, t.canCollideWith = r.player;
            }
            let n = is.getIns().seekNodeByName(this.owner, "S");
            if (n && (this.bottomScaleAnim = n.getComponent(Laya.Animator), this.closeShadow()), e) {
                is.getIns().getChildBySgin(e, "p", this.showNodes);
                for (let e = 0; e < this.showNodes.length; e++) {
                    let t = new Ue;
                    t.item = this.showNodes[e].getChildAt(0), t.setItemState(0), this.goodDatas.push(t);
                }
            }
            let o = is.getIns().seekNodeByName(this.owner, "standPos");
            if (o) {
                is.getIns().getChildBySgin(o, "p", this.standPoss);
                for (let e = 0; e < this.standPoss.length; e++) {
                    let t = this.standPoss[e].transform.position;
                    t.y = ts.getIns().startPos.transform.position.y, this.standPoss[e].transform.position = t;
                }
            }
            this.checkHasGoods(), this.showArrow(false), t$1.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        createUI() {
            if (!this.autoFullViewItem) {
                let e = is.getIns().createPrefab("prefab/item/autoFullView.json");
                gameMgr.getIns().gameView.owner.addChild(e), this.autoFullViewItem = e.addComponent(autoFullView), this.autoFullViewItem.init(), this.autoFullViewItem.setIndex(200), this.autoFullViewItem.adCallBackFun = (() => {
                    this.fullGoods();
                }), this.hideUI();
            }
        }
        fullGoods() {
            for (let e = 0; e < this.goodDatas.length; e++)
                0 == this.goodDatas[e].itemState && this.goodDatas[e].setItemState(2);
            this.checkHasGoods(), this.hideUI();
        }
        showUI() {
            this.autoFullViewItem && this.autoFullViewItem.setShow(true);
        }
        hideUI() {
            this.autoFullViewItem && this.autoFullViewItem.setShow(false);
        }
        onDestroy() {
            this.autoFullViewItem && (this.autoFullViewItem.owner.destroy(), this.autoFullViewItem = null), t$1.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        showArrow(e) {
            this.fx_Arrow && (this.fx_Arrow.active = e);
        }
        openShadow() {
            this.isShowShadow || (this.isShowShadow = true, this.playBottomAnim(Ce.ShadowActive));
        }
        playBottomAnim(e) {
            this.bottomScaleAnim && this.bottomScaleAnim.play(e, 0, 0);
        }
        closeShadow() {
            this.isShowShadow && (this.isShowShadow = false, this.playBottomAnim(Ce.ShadowClose));
        }
        getBuildId() {
            return 1001;
        }
        getRandomStandPos() {
            return 0 == this.standPoss.length ? null : this.standPoss[is.getIns().randomNum(0, this.standPoss.length - 1)].transform.position;
        }
        checkHasGoods() {
            this.hasGood = false;
            for (let e = 0; e < this.goodDatas.length; e++)
                2 == this.goodDatas[e].itemState && (this.hasGood = true);
        }
        hasGoods() {
            return this.hasGood;
        }
        getCurContain() {
            let e = 0;
            for (let t = 0; t < this.goodDatas.length; t++)
                0 == this.goodDatas[t].itemState && e++;
            return e;
        }
        getGoodsByCount(e) {
            let t = [], s = 0;
            for (let i = 0; i < this.goodDatas.length && (2 == this.goodDatas[i].itemState && (t.push(this.goodDatas[i]), s++), s != e); i++)
                ;
            return t;
        }
        getParkType() {
            return this.parkType;
        }
        getSellItemType() {
            return is.getItemTypeByParkType(this.parkType);
        }
        pickDownItem(e) {
            for (let t = 0; t < e.length; t++) {
                let s = this.getProductPos();
                if (!s) {
                    console.error("没有位置!");
                    break;
                }
                s.setItemState(1), s.hideItem();
                let i = e[t], a = i.item.transform.position.clone();
                i.item.parent.removeChild(i.item), s.item.parent.addChild(i.item), i.item.transform.position = a, this.itemTween.toLocal(i.item, () => {
                    s.setItemState(2), i.item.destroy(), this.checkHasGoods();
                }, 100 * t);
            }
        }
        getProductPos() {
            for (let e = 0; e < this.goodDatas.length; e++)
                if (0 == this.goodDatas[e].itemState)
                    return this.goodDatas[e];
            return null;
        }
        onUpdate() {
            if (this.itemTween.update(), this.autoFullViewItem) {
                let e;
                e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.autoFullViewItem.setPos(e.x, e.y - 250);
            }
        }
        openStore() {
            1 != this.isOpen && (this.isOpen = 1, this.isCreate = true, is.getIns().createEf("Fx_GetNew", this.node.transform.position, ts.getIns().owner, 1.5, true), Laya.timer.once(400, this, () => {
                this.owner.active = true;
            }), this.openStoreEnd());
        }
        openStoreEnd() { }
        enterStore(e = false) {
            this.enterTimes++, 1 == this.enterTimes && this.openShadow(), this.getCurContain() > 0 && e && this.showUI();
        }
        outStore(e = false) {
            e && this.hideUI(), 0 != this.enterTimes && (this.enterTimes--, 0 == this.enterTimes && this.closeShadow());
        }
        closeStore() {
            -1 != this.isOpen && (this.isOpen = -1, this.owner.active = false, this.isCreate = false);
        }
        getIsCreate() {
            return this.isCreate;
        }
    }

    class bt extends be {
        init() {
            this.parkType = O.ParkGroundCoffee, this.sellType = G.GroundCoffee, super.init();
        }
        getBuildId() {
            return 1021;
        }
    }

    class _e extends ve {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon"), this.count = this.owner.getChildByName("count");
        }
        setIcon(e) {
            this.icon.skin = e;
        }
        setCount(e, t) {
            this.count.text = e + "/" + t;
        }
    }

    class Me extends Laya.Script3D {
        constructor() {
            super(), this.parkType = O.None, this.productItemType = G.None, this.useItemType = G.None, this.useItem = [], this.secondUseItemType = G.None, this.secondUseItem = [], this.thirdUseItemType = G.None, this.thirdUseItem = [], this.productItems = [], this.isCreate = false, this.createUseGoodCount = 0, this.standPoss = [], this.uiFollowNodes = [], this.showNeedUI = false, this.isShowShadow = true, this.effectRate = 1, this.createTime = 1e3, this.curCreateTimer = 0, this.tempV1 = new Laya.Vector3, this.itemTween = new Ne, this.isOpen = 0, this.enterTimes = 0;
        }
        init() {
            is.getIns().getChildBySgin(this.owner, "uiFollowNode", this.uiFollowNodes), this.fx_Arrow = this.owner.getChildByName("Fx_Arrow"), this.node = this.owner;
            let e = this.node.getComponent(Laya.PhysicsCollider);
            e.collisionGroup = r.Store, e.canCollideWith = r.player, e.isTrigger = true, this.buildData = Be.ins.getDataById(this.getBuildId());
            let s = is.getIns().seekNodeByName(this.owner, "showNode");
            if (this.showNode = s, s) {
                let e = [];
                is.getIns().getChildBySgin(s, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Ue;
                    s.item = e[t].getChildAt(0), s.itemType = this.productItemType, s.setItemState(0), this.productItems.push(s);
                }
            }
            let a = is.getIns().seekNodeByName(this.owner, "needNode");
            if (this.needNode = a, a) {
                let e = [];
                is.getIns().getChildBySgin(a, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Ue;
                    s.item = e[t].getChildAt(0), s.itemType = this.useItemType, s.setItemState(0), this.useItem.push(s);
                }
            }
            let n = is.getIns().seekNodeByName(this.owner, "needNode1");
            if (n) {
                let e = [];
                is.getIns().getChildBySgin(n, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Ue;
                    s.item = e[t].getChildAt(0), s.itemType = this.secondUseItemType, s.setItemState(0), this.secondUseItem.push(s);
                }
            }
            let o = is.getIns().seekNodeByName(this.owner, "needNode2");
            if (o) {
                let e = [];
                is.getIns().getChildBySgin(o, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Ue;
                    s.item = e[t].getChildAt(0), s.itemType = this.thirdUseItemType, s.setItemState(0), this.thirdUseItem.push(s);
                }
            }
            let h = is.getIns().seekNodeByName(this.owner, "standPos");
            if (h) {
                is.getIns().getChildBySgin(h, "p", this.standPoss);
                for (let e = 0; e < this.standPoss.length; e++) {
                    let t = this.standPoss[e].transform.position;
                    t.y = ts.getIns().startPos.transform.position.y, this.standPoss[e].transform.position = t;
                }
            }
            let l = [];
            is.getIns().getChildBySgin(this.owner, "col_", l);
            for (let e = 0; e < l.length; e++) {
                let t = l[e].getComponent(Laya.PhysicsCollider);
                t.collisionGroup = r.item, t.canCollideWith = r.player;
            }
            let d = is.getIns().seekNodeByName(this.owner, "S");
            d && (this.bottomScaleAnim = d.getComponent(Laya.Animator), this.closeShadow()), this.createTime = this.buildData.productTime, this.createUseGoodCount = this.buildData.useGood, t$1.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this), t$1.getIns().addEventListerner(i.PRODUCTSPEEDUP, this.effectSpeedUp, this), this.showArrow(false);
        }
        showArrow(e) {
            this.fx_Arrow && (e && (this.fx_Arrow.active = false), this.fx_Arrow.active = e);
        }
        openShadow() {
            this.isShowShadow || (this.isShowShadow = true, this.playBottomAnim(Ce.ShadowActive));
        }
        playBottomAnim(e) {
            this.bottomScaleAnim && this.bottomScaleAnim.play(e, 0, 0);
        }
        closeShadow() {
            this.isShowShadow && (this.isShowShadow = false, this.playBottomAnim(Ce.ShadowClose));
        }
        effectSpeedUp(e) {
            this.effectRate = e ? 1.5 : 1;
        }
        onDestroy() {
            this.productNeedUI && (this.productNeedUI.owner.destroy(), this.productNeedUI = null), this.productNeedUI1 && (this.productNeedUI1.owner.destroy(), this.productNeedUI1 = null), this.productNeedUI2 && (this.productNeedUI2.owner.destroy(), this.productNeedUI2 = null), t$1.getIns().removeEventListerner(i.PRODUCTSPEEDUP, this.effectSpeedUp, this), t$1.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        createUI() {
            if (!this.productNeedUI && this.showNeedUI) {
                let e = is.getIns().createPrefab("prefab/item/productNeedItem.json");
                if (gameMgr.getIns().gameView.owner.addChild(e), this.productNeedUI = e.addComponent(_e), this.productNeedUI.init(), this.productNeedUI.setIcon(n.itemIconPath.format(is.getItemIconPathByItemType(this.useItemType))), this.isCreate || this.productNeedUI.setShow(false), this.uiFollowNodes.length > 1) {
                    let e = is.getIns().createPrefab("prefab/item/productNeedItem.json");
                    gameMgr.getIns().gameView.owner.addChild(e), this.productNeedUI1 = e.addComponent(_e), this.productNeedUI1.init(), this.productNeedUI1.setIcon(n.itemIconPath.format(is.getItemIconPathByItemType(this.secondUseItemType))), this.isCreate || this.productNeedUI1.setShow(false);
                }
                if (this.uiFollowNodes.length > 2) {
                    let e = is.getIns().createPrefab("prefab/item/productNeedItem.json");
                    gameMgr.getIns().gameView.owner.addChild(e), this.productNeedUI2 = e.addComponent(_e), this.productNeedUI2.init(), this.productNeedUI2.setIcon(n.itemIconPath.format(is.getItemIconPathByItemType(this.thirdUseItemType))), this.isCreate || this.productNeedUI2.setShow(false);
                }
                this.setUseItemUI();
            }
        }
        setUseItemUI() {
            this.productNeedUI && this.productNeedUI.setCount(this.getFoodCountByIndex(0), this.useItem.length), this.productNeedUI1 && this.productNeedUI1.setCount(this.getFoodCountByIndex(1), this.secondUseItem.length), this.productNeedUI2 && this.productNeedUI2.setCount(this.getFoodCountByIndex(2), this.thirdUseItem.length);
        }
        getIsCreate() {
            return this.isCreate;
        }
        getRandomStandPos() {
            return 0 == this.standPoss.length ? null : this.standPoss[is.getIns().randomNum(0, this.standPoss.length - 1)].transform.position;
        }
        getProductItems() {
            return this.productItems;
        }
        hasProductPos() {
            for (let e = 0; e < this.productItems.length; e++)
                if (0 == this.productItems[e].itemState)
                    return true;
            return false;
        }
        hasProduct() {
            for (let e = 0; e < this.productItems.length; e++)
                if (2 == this.productItems[e].itemState)
                    return true;
            return false;
        }
        getBuildId() {
            return 1001;
        }
        createItem(e) {
            let t = 0;
            for (let s = 0; s < this.productItems.length && (0 != this.productItems[s].itemState || (this.productItems[s].setItemState(2), ++t != e)); s++)
                ;
        }
        getFoodItemPosByIndex(e) {
            if (0 == e) {
                for (let e = 0; e < this.useItem.length; e++)
                    if (0 == this.useItem[e].itemState)
                        return this.useItem[e];
            }
            else if (1 == e) {
                for (let e = 0; e < this.secondUseItem.length; e++)
                    if (0 == this.secondUseItem[e].itemState)
                        return this.secondUseItem[e];
            }
            else if (2 == e)
                for (let e = 0; e < this.thirdUseItem.length; e++)
                    if (0 == this.thirdUseItem[e].itemState)
                        return this.thirdUseItem[e];
            return null;
        }
        getFoodCountByIndex(e) {
            let t = 0;
            if (0 == e)
                for (let e = 0; e < this.useItem.length; e++)
                    2 == this.useItem[e].itemState && t++;
            else if (1 == e)
                for (let e = 0; e < this.secondUseItem.length; e++)
                    2 == this.secondUseItem[e].itemState && t++;
            else if (2 == e)
                for (let e = 0; e < this.thirdUseItem.length; e++)
                    2 == this.thirdUseItem[e].itemState && t++;
            return t;
        }
        getCurFoodContainByIndex(e) {
            let t = 0;
            if (0 == e)
                for (let e = 0; e < this.useItem.length; e++)
                    0 == this.useItem[e].itemState && t++;
            else if (1 == e)
                for (let e = 0; e < this.secondUseItem.length; e++)
                    0 == this.secondUseItem[e].itemState && t++;
            else if (2 == e)
                for (let e = 0; e < this.thirdUseItem.length; e++)
                    0 == this.thirdUseItem[e].itemState && t++;
            return t;
        }
        useMat(e) {
            if (0 == e)
                return true;
            if (this.getFoodCountByIndex(0) < e)
                return false;
            let t = 0;
            if (this.secondUseItemType != G.None) {
                if ((t = this.getFoodCountByIndex(1)) < e)
                    return false;
                let s = e;
                for (let e = 0; e < this.secondUseItem.length && (2 != this.secondUseItem[e].itemState || (this.secondUseItem[e].setItemState(0), 0 != --s)); e++)
                    ;
                let i = 0;
                if (this.thirdUseItemType != G.None) {
                    if ((i = this.getFoodCountByIndex(2)) < e)
                        return false;
                    let t = e;
                    for (let e = 0; e < this.thirdUseItem.length && (2 != this.thirdUseItem[e].itemState || (this.thirdUseItem[e].setItemState(0), 0 != --t)); e++)
                        ;
                }
            }
            for (let t = 0; t < this.useItem.length && (2 != this.useItem[t].itemState || (this.useItem[t].setItemState(0), 0 != --e)); t++)
                ;
            return this.setUseItemUI(), true;
        }
        setUseItem(e, t) {
            if (0 != e.length)
                for (let s = 0; s < e.length; s++) {
                    let i = this.getFoodItemPosByIndex(t);
                    if (!i)
                        return void console.log("没有位置!");
                    i.setItemState(1), i.hideItem();
                    let a = e[s], n = a.item.transform.position.clone();
                    a.item.parent.removeChild(a.item), i.item.parent.addChild(a.item);
                    let r = a.item.transform.localRotationEuler;
                    r.setValue(0, 0, 0), a.item.transform.localRotationEuler = r, a.item.transform.position = n, this.itemTween.toLocal(a.item, () => {
                        i.setItemState(2), a.item.destroy(), this.setUseItemUI();
                    }, 100 * s);
                }
        }
        getAcion(e) {
            if (this.needNode) {
                if (this.showNode) {
                    Laya.Vector3.subtract(e, this.needNode.transform.position, this.tempV1);
                    let t = Laya.Vector3.scalarLengthSquared(this.tempV1);
                    return Laya.Vector3.subtract(e, this.showNode.transform.position, this.tempV1), t < Laya.Vector3.scalarLengthSquared(this.tempV1) ? 1 : 2;
                }
                return 1;
            }
            return 2;
        }
        onUpdate() {
            if (this.itemTween.update(), this.isCreate) {
                if (this.productNeedUI) {
                    let e;
                    e = this.uiFollowNodes.length > 0 ? ts.getIns().cameraMgr.worldPosToScreenPos(this.uiFollowNodes[0].transform.position) : ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.productNeedUI.setPos(e.x, e.y);
                }
                if (this.productNeedUI1) {
                    let e;
                    e = this.uiFollowNodes.length > 1 ? ts.getIns().cameraMgr.worldPosToScreenPos(this.uiFollowNodes[1].transform.position) : ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.productNeedUI1.setPos(e.x, e.y);
                }
                if (this.productNeedUI2) {
                    let e;
                    e = this.uiFollowNodes.length > 2 ? ts.getIns().cameraMgr.worldPosToScreenPos(this.uiFollowNodes[2].transform.position) : ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.productNeedUI2.setPos(e.x, e.y);
                }
                if (this.curCreateTimer += Laya.timer.delta * this.effectRate, this.curCreateTimer > this.createTime) {
                    if (this.curCreateTimer = 0, !this.hasProductPos())
                        return;
                    this.useMat(this.createUseGoodCount) && this.createItem(this.buildData.createCount);
                }
            }
        }
        openStore() {
            1 != this.isOpen && (this.isOpen = 1, this.isCreate = true, is.getIns().createEf("Fx_GetNew", this.node.transform.position, ts.getIns().owner, 1.5, true), Laya.timer.once(400, this, () => {
                this.owner.active = true, this.productNeedUI && this.productNeedUI.setShow(true), this.productNeedUI1 && this.productNeedUI1.setShow(true), this.productNeedUI2 && this.productNeedUI2.setShow(true);
            }), this.openStoreEnd());
        }
        openStoreEnd() { }
        enterStore() {
            this.enterTimes++, 1 == this.enterTimes && this.openShadow();
        }
        outStore() {
            0 != this.enterTimes && (this.enterTimes--, 0 == this.enterTimes && this.closeShadow());
        }
        closeStore() {
            -1 != this.isOpen && (this.isOpen = -1, this.owner.active = false, this.isCreate = false);
        }
    }

    class Dt extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkGroundCoffeeProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.CoffeeBean, super.init();
        }
        getBuildId() {
            return 1022;
        }
    }

    class Et extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkCoffeeProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.GroundCoffee, this.secondUseItemType = G.Milk, super.init();
        }
        getBuildId() {
            return 1024;
        }
    }

    class buildInfoUI extends ve {
        init() {
            super.init(),
                this.nameIcon = this.owner.getChildByName("nameIcon"),
                this.icon = this.owner.getChildByName("icon");
        }
        setIcon(e) {
            this.icon.skin = e;
        }
        setName(e) {
            this.nameIcon.skin = e;
        }
    }

    class Fe extends Laya.Script {
        constructor() {
            super(), this.isEndter = false, this.enterType = W.Next;
        }
        init() {
            this.node = this.owner, this.isEndter = false;
            let e = this.owner.getComponent(Laya.PhysicsCollider);
            e.collisionGroup = r.item, e.canCollideWith = r.player, e.isTrigger = true, t$1.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        createUI() {
            if (!this.createUIMgr) {
                let e = is.getIns().createPrefab("prefab/item/buildInfoUI.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.createUIMgr = e.addComponent(buildInfoUI),
                    this.createUIMgr.init(),
                    this.createUIMgr.setName("UI/" + P.getPicture() + "/tips1.png"),
                    this.createUIMgr.setIcon("page/gameView/martIcon.png"),
                    this.createUIMgr.setShow(this.owner.active);
            }
        }
        onDestroy() {
            this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null), t$1.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 80);
            }
        }
        openPark() {
            this.owner.active = true, this.createUIMgr && this.createUIMgr.setShow(true);
        }
        closePark() {
            this.owner.active = false, this.createUIMgr && this.createUIMgr.setShow(false);
        }
        setType(e) {
            this.enterType = e;
        }
        enterNext() {
            this.isEndter || (this.isEndter = true, this.enterType == W.Next ? ts.getIns().carMgr.toNext() : this.enterType == W.Last && gameMgr.getIns().toGame(gameMgr.getIns().getCurLevelId() - 1, 1, () => {
                gameMgr.getIns().gameStart(null, () => { });
            }));
        }
    }

    class Ft extends Me {
        init() {
            this.parkType = O.ParkCarrotProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1026;
        }
    }

    class Gt extends be {
        init() {
            this.parkType = O.ParkCarrot, this.sellType = G.Carrot, super.init();
        }
        getBuildId() {
            return 1025;
        }
    }

    class Ht extends be {
        init() {
            this.parkType = O.ParkACJuice, this.sellType = G.ACJuice, super.init(), this.anim = is.getIns().seekNodeByName(this.owner, "bingxiang").getComponent(Laya.Animator);
        }
        getBuildId() {
            return 1029;
        }
        stopAnim() {
            this.anim.speed = 0;
        }
        playAnim(e) {
            this.anim.speed = 1, this.anim.play(e, 0, 0);
        }
        openStoreEnd() {
            super.openStoreEnd(), this.playAnim(Ce.bingxiangdoorclose);
        }
        enterStore() {
            super.enterStore(), 1 == this.enterTimes && this.playAnim(Ce.bingxiangdooropen);
        }
        outStore() {
            super.outStore(), 0 == this.enterTimes && this.playAnim(Ce.bingxiangdoorclose);
        }
    }

    class Ie extends Laya.Script {
        constructor() {
            super(), this.playerActor = null, this.isAddLis = false;
        }
        init() { }
        setActor(e) {
            this.playerActor = e;
        }
        resgistLis() {
            this.isAddLis || (console.error("添加键位监听"), this.isAddLis = true, Laya.stage.on(Laya.Event.KEY_DOWN, this, this.keyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.keyUp));
        }
        removeLis() {
            this.isAddLis && (this.isAddLis = false, Laya.stage.off(Laya.Event.KEY_DOWN, this, this.keyDown), Laya.stage.off(Laya.Event.KEY_UP, this, this.keyUp));
        }
        onDestroy() {
            this.removeLis();
        }
        keyDown(e) {
            e.keyCode == Laya.Keyboard.W || (e.keyCode, Laya.Keyboard.S), e.keyCode, Laya.Keyboard.A, e.keyCode, Laya.Keyboard.D, e.keyCode == Laya.Keyboard.SHIFT && this.playerActor.speedUp(this.playerActor.boneDis + 1), e.keyCode == Laya.Keyboard.SPACE && this.playerActor.addBodyBone(2), e.keyCode == Laya.Keyboard.C && this.playerActor.changeBodySpace(this.playerActor.boneDis - 1), e.keyCode == Laya.Keyboard.X && this.playerActor.punchOneMan(), e.keyCode == Laya.Keyboard.Z && this.playerActor.punchMan(.5), e.keyCode == Laya.Keyboard.V && this.playerActor.punchMan(1), e.keyCode == Laya.Keyboard.P && this.playerActor.punchMan(.2), e.keyCode == Laya.Keyboard.T && (Laya.timer.scale = 5);
        }
        keyUp(e) {
            e.keyCode == Laya.Keyboard.SHIFT ? this.playerActor.speedEnd() : e.keyCode == Laya.Keyboard.SPACE && this.playerActor.cancelBrake(), e.keyCode == Laya.Keyboard.T && (Laya.timer.scale = 1);
        }
    }

    class It extends Me {
        init() {
            this.parkType = O.ParkMaizeProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1006;
        }
    }

    class Jt extends be {
        init() {
            this.parkType = O.ParkYellowRose, this.sellType = G.YellowRose, super.init();
        }
        getBuildId() {
            return 1037;
        }
    }

    class he extends c {
    }

    class oe extends u {
        static get ins() {
            return this._ins || (this._ins = new oe), this._ins;
        }
        getConfigTarget() {
            return new he;
        }
        getWaiterUpGoldByWaiterId(e, t) {
            let s = t.waiterUpLvNeedGold;
            return 6003 == e ? s = t.waiterUpLvNeedGold2 : 6002 == e && (s = t.waiterUpLvNeedGold1), s;
        }
    }
    oe._ins = null;

    class y {
        static getSoundPath(e) {
            return this.SN_Mp3.format(e);
        }
    }
    y.SN_BG = "sub/online/GAudio/gameBg.mp3";
    y.SN_FAIL = "sub/online/GAudio/fail.mp3";
    y.SN_SUCC = "sub/online/GAudio/cheer.mp3";
    y.SN_Mp3 = "sub/online/GAudio/{0}.mp3";
    y.SN_CLICK = "sub/online/GAudio/click.mp3";
    y.gold = "sub/online/GAudio/gold.mp3";
    y.createBuild = "sub/online/GAudio/createBuild.mp3";
    y.shengxing = "sub/online/GAudio/shengxing.mp3";
    y.revivecoin = "sub/online/GAudio/revivecoin.mp3";

    class waiterUpUIItem extends ve {
        init() {
            super.init(), this.lv = this.owner.getChildByName("lv"),
                this.name = this.owner.getChildByName("name"),
                this.icon = this.owner.getChildByName("icon"),
                this.count = this.owner.getChildByName("count");
        }
        setIcon(e) {
            this.icon.skin = e;
        }
        setCount(e) {
            this.count.text = e.toString();
        }
        setLv(e) {
            this.lv.text = "lv." + e;
        }
        setName(e) {
            this.name.skin = e;
        }
    }

    class Ke extends Laya.Script {
        constructor() {
            super(), this.isOpen = 0, this.curGold = 0, this.addSpaceTime = 0, this.lastCount = 0, this.addVal = 0, this.isInCreate = false;
        }
        init() {
            this.node = this.owner;
            let e = parseInt(this.owner.name);
            this.waiterData = Ge.ins.getDataById(e);
            let s = this.owner.getComponent(Laya.PhysicsCollider);
            s.collisionGroup = r.item, s.canCollideWith = r.player, s.isTrigger = true, t$1.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        getWaiterData() {
            return this.waiterData;
        }
        setNextUpType() {
            let e = hs.getIns().getWaiterData(this.waiterData.id, gameMgr.getIns().getCurLevelId());
            if (!e)
                return;
            let t = He.ins.getDataById(e.waiterUpId);
            6002 == e.waiterId ? this.updateValType = t.typeCarry : 6003 == e.waiterId ? this.updateValType = t.typeFarmer : this.updateValType = t.typeCarry, this.waiterUI && (this.waiterUI.setName("UI/" + P.getPicture() + "/u_" + this.updateValType + ".png"),
                this.waiterUI.setIcon("page/gameView/worker_" + this.waiterData.type + ".png"), this.showCount()),
                this.isInCreate = false;
        }
        createUI() {
            if (!this.waiterUI && 1 == this.isOpen && gameMgr.getIns().gameView) {
                let e = is.getIns().createPrefab("prefab/item/waiterUpUIItem.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.waiterUI = e.addComponent(waiterUpUIItem),
                    this.waiterUI.init(),
                    this.setNextUpType();
            }
        }
        onUpdate() {
            if (this.waiterUI) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.waiterUI.setPos(e.x, e.y - 100);
            }
            this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curGold && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curGold ? this.curGold : this.lastCount, this.showCount(), this.lastCount >= this.curGold && (this.lastCount = this.curGold, this.createFun ? this.createFun() : x.UIMgr.ins.openUI(x.UIType.GetGoldView), this.createFun = null)));
        }
        onDestroy() {
            t$1.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this), this.waiterUI && (this.waiterUI.owner.destroy(), this.waiterUI = null);
        }
        hideUI() {
            this.waiterUI && this.waiterUI.setShow(false);
        }
        showUI() {
            this.waiterUI && this.waiterUI.setShow(true);
        }
        showCount() {
            if (!this.waiterUI)
                return;
            let e = hs.getIns().getWaiterLv(this.waiterData.id, this.updateValType, gameMgr.getIns().getCurLevelId());
            if (e >= this.waiterData.lvMax)
                return;
            let t = oe.ins.getDataById(e);
            this.waiterUI.setLv(e);
            let s = oe.ins.getWaiterUpGoldByWaiterId(this.waiterData.id, t);
            this.waiterUI.setCount(s - this.lastCount);
        }
        openPoint() {
            1 != this.isOpen && (this.owner.active = true, this.isOpen = 1, this.createUI(), this.showUI(), this.setNextUpType());
        }
        closePoint() {
            -1 != this.isOpen && (this.isOpen = -1, this.owner.active = false, this.hideUI());
        }
        upDateWaiter() {
            if (this.isInCreate)
                return;
            if (hs.getIns().getCoin() <= 0)
                return void x.UIMgr.ins.openUI(x.UIType.GetGoldView);
            let e = hs.getIns().getWaiterLv(this.waiterData.id, this.updateValType, gameMgr.getIns().getCurLevelId());
            if (0 == e)
                return;
            let s = oe.ins.getDataById(e), n = oe.ins.getWaiterUpGoldByWaiterId(this.waiterData.id, s), r = n - this.curGold, o = hs.getIns().getCoin();
            r = Math.min(o, r), this.addVal = .1 * r, this.addVal = Math.ceil(this.addVal), this.lastCount = this.curGold, this.curGold += r, hs.getIns().minusCoin(r), this.curGold >= n ? (this.isInCreate = true, this.createFun = (() => {
                this.isInCreate = false, this.lastCount = 0, this.curGold = 0, a.getIns().playSound(y.shengxing), hs.getIns().updateWaiter(this.waiterData.id, this.updateValType, gameMgr.getIns().getCurLevelId()), e = hs.getIns().getWaiterLv(this.waiterData.id, this.updateValType, gameMgr.getIns().getCurLevelId()), t$1.getIns().dispatchEvent(i.SHOWWAITEREF, this.waiterData.id);
                let s = hs.getIns().getWaiterData(this.waiterData.id, gameMgr.getIns().getCurLevelId());
                He.ins.isMaxLv(s) ? this.closePoint() : this.setNextUpType();
            })) : this.showCount();
        }
    }

    class Kt extends Laya.Script3D {
        init() {
            this.node = this.owner;
            let e = this.owner.getChildByName("Move");
            this.anim = e.getComponent(Laya.Animator);
            let t = [];
            is.getIns().getChildBySgin(this.owner, "col_", t);
            for (let e = 0; e < t.length; e++) {
                let s = t[e].getComponent(Laya.PhysicsCollider);
                s.collisionGroup = r.item, s.canCollideWith = r.player;
            }
        }
        toNext() {
            this.anim.play("CarMove", 0, 0), Laya.timer.once(1500, this, () => {
                x.UIMgr.ins.closeUI(x.UIType.GameView),
                    x.UIMgr.ins.openUI(x.UIType.LoadingView),
                    gameMgr.getIns().toGame(gameMgr.getIns().getCurLevelId() + 1, 1, () => {
                        gameMgr.getIns().gameStart(null, () => {
                            x.UIMgr.ins.closeUI(x.UIType.LoadingView);
                        });
                    });
            });
        }
    }

    var z;
    (function (z) {
        z[z["Running"] = 0] = "Running";
        z[z["Success"] = 1] = "Success";
        z[z["Failed"] = 2] = "Failed";
        z[z["Ready"] = 3] = "Ready";
    })(z || (z = {}));

    var D;
    (function (D) {
        D[D["Idle"] = 1] = "Idle";
        D[D["Walk"] = 2] = "Walk";
        D[D["MoveToProduct"] = 3] = "MoveToProduct";
        D[D["PickProduct"] = 4] = "PickProduct";
        D[D["MoveToPark"] = 5] = "MoveToPark";
        D[D["PickDwonProduct"] = 6] = "PickDwonProduct";
        D[D["ShouYin"] = 7] = "ShouYin";
    })(D || (D = {}));

    var Y;
    (function (Y) {
        Y[Y["Composite"] = 0] = "Composite";
        Y[Y["Sequence"] = 1] = "Sequence";
        Y[Y["Decorator"] = 2] = "Decorator";
        Y[Y["Parallel"] = 3] = "Parallel";
        Y[Y["Action"] = 4] = "Action";
        Y[Y["TreeNode"] = 5] = "TreeNode";
    })(Y || (Y = {}));

    class it {
        constructor() {
            this.treeNodes = [], this.parentNode = null, this.nodeType = Y.TreeNode, this.curNodeIndex = 0, this.enterState = z.Ready;
        }
        Init() { }
        EnterNode() {
            return this.enterState != z.Ready ? this.enterState : (null == this.enterFun ? this.enterState = z.Success : this.enterState = this.enterFun(), this.enterState);
        }
        LeaveNode() {
            null != this.leaveFun && this.leaveFun(), this.ResetIndex();
        }
        Tick() {
            let e = this.EnterNode();
            return e != z.Success && e != z.Failed || this.LeaveNode(), e;
        }
        AddChildNode(e) {
            this.treeNodes.indexOf(e) < 0 && this.treeNodes.push(e);
        }
        RemoveChildNode(e) {
            let t = this.treeNodes.indexOf(e);
            t >= 0 && this.treeNodes.splice(t, 1);
        }
        Reset() {
            this.treeNodes.splice(0, this.treeNodes.length), this.ResetIndex();
        }
        ResetIndex() {
            this.curNodeIndex = 0, this.enterState = z.Ready;
        }
        ForceQuit() {
            this.curNodeIndex = 0, this.enterState = z.Ready;
            for (let e = 0; e < this.treeNodes.length; e++)
                this.treeNodes[e].ForceQuit();
        }
    }

    class at extends it {
        SetNodeAction(e) {
            this.nodeAction = e;
        }
        ClearNodeAction() {
            this.nodeAction = null;
        }
        Init() {
            super.Init(), this.nodeType = Y.Action;
        }
        Tick() {
            this.EnterNode();
            let e = z.Failed;
            return (e = null == this.nodeAction ? z.Failed : this.nodeAction()) != z.Success && e != z.Failed || this.LeaveNode(), e;
        }
        Reset() {
            super.Reset(), this.ClearNodeAction();
        }
    }

    class nt extends it {
        Init() {
            super.Init(), this.nodeType = Y.Sequence;
        }
        Tick() {
            let e = this.EnterNode();
            return e == z.Failed ? (this.LeaveNode(), z.Failed) : 0 == this.treeNodes.length ? (this.LeaveNode(), z.Success) : (e = this.treeNodes[this.curNodeIndex].Tick()) == z.Running ? z.Running : e == z.Failed ? (this.LeaveNode(), z.Failed) : (this.curNodeIndex++, this.curNodeIndex == this.treeNodes.length ? (this.LeaveNode(), z.Success) : z.Running);
        }
    }

    class At extends it {
        Init() {
            super.Init(), this.nodeType = Y.Composite;
        }
        Tick() {
            let e = this.EnterNode();
            return e == z.Failed ? (this.LeaveNode(), z.Failed) : 0 == this.treeNodes.length ? z.Success : this.curNodeIndex == this.treeNodes.length ? (this.LeaveNode(), z.Success) : (e = this.treeNodes[this.curNodeIndex].Tick()) == z.Running ? z.Running : e == z.Success ? (this.LeaveNode(), z.Success) : (this.curNodeIndex++, this.curNodeIndex == this.treeNodes.length ? (this.LeaveNode(), z.Failed) : z.Running);
        }
    }

    class waiterUIItem extends ve {
        init() {
            super.init(),
                this.name = this.owner.getChildByName("name"),
                this.icon = this.owner.getChildByName("icon"),
                this.count = this.owner.getChildByName("count");
        }
        setIcon(e) {
            this.icon.skin = e;
        }
        setCount(e) {
            this.count.text = e.toString();
        }
        setName(e) {
            this.name.skin = e;
        }
    }

    class Oe extends Laya.Script {
        constructor() {
            super(), this.curPrice = 0, this.createState = 0, this.isOpen = 0, this.needGold = 0, this.addSpaceTime = 0, this.isInCreate = false, this.lastCount = 0, this.addVal = 0;
        }
        getCreateState() {
            return this.createState;
        }
        init(e) {
            this.node = this.owner, this.waiterData = e;
            let s = this.owner.getComponent(Laya.PhysicsCollider);
            s.collisionGroup = r.item, s.canCollideWith = r.player, s.isTrigger = true, t$1.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        onDestroy() {
            this.waiterUI && (this.waiterUI.owner.destroy(), this.waiterUI = null), t$1.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        onUpdate() {
            if (this.waiterUI) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.waiterUI.setPos(e.x, e.y - 100);
            }
            this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curPrice && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curPrice ? this.curPrice : this.lastCount, this.showCount(), this.lastCount >= this.curPrice && (this.lastCount = this.curPrice, this.createFun ? this.createFun() : x.UIMgr.ins.openUI(x.UIType.GetGoldView), this.createFun = null)));
        }
        needMoney() {
            return this.needGold - this.lastCount;
        }
        showCount() {
            this.waiterUI && this.waiterUI.setCount(this.needMoney());
        }
        createUI() {
            if (!this.waiterUI && 1 == this.isOpen && gameMgr.getIns().gameView) {
                let e = is.getIns().createPrefab("prefab/item/waiterUIItem.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.waiterUI = e.addComponent(waiterUIItem),
                    this.waiterUI.init(),
                    this.waiterUI.setCount(this.needGold),
                    this.waiterUI.setName("UI/" + P.getPicture() + "/w_" + this.waiterData.type + ".png"),
                    this.waiterUI.setIcon("page/gameView/worker_" + this.waiterData.type + ".png");
            }
        }
        getWaiterData() {
            return this.waiterData;
        }
        createWaiter() {
            if (this.isInCreate)
                return;
            if (hs.getIns().getCoin() <= 0)
                return void x.UIMgr.ins.openUI(x.UIType.GetGoldView);
            this.lastCount = this.curPrice;
            let e = this.needGold - this.curPrice, t = hs.getIns().getCoin();
            e = Math.min(t, e), this.curPrice += e, hs.getIns().minusCoin(e), this.addVal = .1 * e, this.addVal = Math.ceil(this.addVal), this.curPrice >= this.needGold && (this.isInCreate = true, this.createFun = (() => {
                hs.getIns().addWaiter(this.waiterData.id, gameMgr.getIns().getCurLevelId()), this.closePoint(), this.curPrice = 0, this.loadWaiter(), this.createState = 1, ts.getIns().openWaiterUpdate(), ts.getIns().showNextCreate(null, 1), a.getIns().playSound(y.createBuild);
            }));
        }
        loadWaiter() {
            ts.getIns().loadWaiter(this.waiterData.type, this.owner, null, this.waiterData);
        }
        openPoint() {
            1 != this.isOpen && (this.isInCreate = false, this.createFun = null, this.curPrice = 0, this.lastCount = 0, 0 == hs.getIns().getWaiterCountByID(this.waiterData.id, gameMgr.getIns().getCurLevelId()) ? this.needGold = this.waiterData.unLockGold : this.needGold = this.waiterData.unLockGold2, this.needGold *= gameMgr.getIns().getLevelMul(), this.needGold = Math.ceil(this.needGold), this.owner.active = true, this.isOpen = 1, this.createUI(), this.waiterUI && this.waiterUI.setShow(true), this.showCount());
        }
        closePoint() {
            -1 != this.isOpen && (this.isOpen = -1, this.waiterUI && this.waiterUI.setShow(false), this.owner.active = false);
        }
    }

    var F;
    (function (F) {
        F[F["Start"] = 0] = "Start";
        F[F["Change"] = 1] = "Change";
        F[F["Run"] = 2] = "Run";
        F[F["End"] = 3] = "End";
        F[F["Walk"] = 4] = "Walk";
    })(F || (F = {}));

    class fe {
        constructor() {
            this.state = -1;
        }
        changeState(e) {
            e != this.state && (this.closeStateFun && this.closeStateFun(this.state), this.state = e, this.changeStateEndFun && this.changeStateEndFun(e));
        }
        setChangeStateEndFun(e) {
            this.changeStateEndFun = e;
        }
        setExeStateFun(e) {
            this.exeStateFun = e;
        }
        setCloseStateFun(e) {
            this.closeStateFun = e;
        }
        exeState() {
            this.exeStateFun && this.exeStateFun(this.state);
        }
        getState() {
            return this.state;
        }
    }

    class we extends Laya.Script3D {
        constructor() {
            super(), this._animData = new Map, this._body = null, this._anim = null, this.isAct = false, this._animName = null;
        }
        init() {
            if (this._node = this.owner, this._body = is.getIns().returnSprite3D(this.owner.getChildByName("Model")), this._body) {
                let e = this._body.getComponent(Laya.Animator);
                e && (this._anim = e, this._anim.cullingMode = Laya.Animator.CULLINGMODE_CULLCOMPLETELY, this.stopAnim());
            }
            this.initAnimEvent();
        }
        initAnimEvent() {
            if (this._anim)
                for (let e = 0; e < 10; e++) {
                    let t = this._anim.getControllerLayer(e);
                    if (!t)
                        break;
                    this._animData.set(e, t._statesMap);
                }
        }
        setLvdata(e) {
            this.lvData = e;
        }
        enablePeople() {
            this.isAct || (this.isAct = true, this.enPeople());
        }
        disablePeople(e = true) {
            this.isAct && (this.isAct = false, this.disPeople(), e && this.recycle());
        }
        disPeople() { }
        enPeople() { }
        playAnim(e, t = null, s = false, i = 1, a = 0, n = false, r = .2) {
            if (this._anim) {
                this._animName = e;
                let o = this._animData.get(a);
                if (o && o[e] && (n ? this.retSetState() : this._anim.getControllerLayer(a).defaultWeight = a, this._anim.speed = i, s ? this._anim.crossFade(e, r, a, 0) : this._anim.play(e, a, 0), t)) {
                    let s = 1e3 * o[e].clip.duration() * 1 / i;
                    Laya.timer.once(s, this, () => {
                        is.getIns().handlerFun(t);
                    });
                }
            }
        }
        retSetState() {
            for (let e = 0; e < 10; e++) {
                let t = this._anim.getControllerLayer(e);
                t && (t.defaultWeight = 0);
            }
        }
        playAnimNotSave(e, t, s = true, i = 1, a = 0) {
            e != this._animName && this.playAnim(e, t, true, 1, 0);
        }
        getCurAnimName() {
            return this._animName;
        }
        stopAnim() {
            this._anim && (this._anim.speed = 0);
        }
        setAnimSpeed(e) {
            this._anim && (this._anim.speed = e);
        }
        getAnimTime(e) {
            return this._animData && this._animData[e] ? this._animData[e].time : 0;
        }
        setStartPos(e, t) {
            this._node.transform.position = e.clone(), this._node.transform.rotationEuler = t.clone();
        }
        getPos() {
            return this._node.transform.position;
        }
        recycle() { }
        onDestroy() {
            this.disablePeople();
        }
    }

    class Pe extends we {
        constructor() {
            super(), this.cameraRot = new Laya.Vector3(76, 0, 0), this.cameraOffect = new Laya.Vector3(.03822584077715874, 4.289999961853027, -1.1155890226364136), this.fsm = new fe, this.rotQua = new Laya.Quaternion, this.initHp = 5, this.curHp = this.initHp, this.isDie = false, this.animSpeed = 0, this.curEatScore = 0, this.nextEatScore = 0, this._moveSpeed = .2, this.normalSpeed = .5, this.moveAddSpeed = 0, this.moveForward = new Laya.Vector3(0, 0, this.moveSpeed), this.lastX = 0, this.isTurn = 0, this.lastForward = new Laya.Vector3, this.lastRotY = 0, this.isAttack = false, this.isClickDown = false;
        }
        setPlayerData(e) { }
        cutHp(e) {
            this.isDeath() || (this.curHp -= e, this.curHp = this.curHp < 0 ? 0 : this.curHp, this.refershHp(), this.curHp <= 0 && (this.isDie = true, gameMgr.getIns().gameFail()));
        }
        refershHp() { }
        isDeath() {
            return this.isDie;
        }
        gameOver(e) {
            this.rockerUp();
        }
        init() {
            super.init(), this.cam_move_pos = is.getIns().seekNodeByName(this.owner, "cam_pos"), this.tempSp = new Laya.Sprite3D("rotSp"), this._node.addChild(this.tempSp), is.getIns().resetTransform(this.tempSp), this.initRig(), this.initAnimEvent(), this.fsm.setChangeStateEndFun(this.changeStateEnd.bind(this)), this.fsm.setExeStateFun(this.doAction.bind(this)), this.fsm.changeState(D.Idle);
        }
        get moveSpeed() {
            return this._moveSpeed + this.moveAddSpeed;
        }
        initRig() {
            this.rigBody = this.owner.getComponent(Laya.Rigidbody3D), this.rig = this.rigBody, this.rigBody.linearDamping = 0, this.rigBody.canCollideWith = r.item | r.Store | r.createPos | r.money, this.rigBody.collisionGroup = r.player, this.rigBody.isTrigger = false, this.rigBody.isKinematic = false, this.rig.gravity = new Laya.Vector3(0, 0, 0), this.rig.overrideGravity = true, this.rig.angularFactor = new Laya.Vector3(0, 0, 0), this.rig.linearFactor = new Laya.Vector3(1, 0, 1);
        }
        changeCamera(e) {
            this.cameraState;
        }
        rockerDown() {
            this.isClickDown = true, this.fsm.changeState(D.Walk);
        }
        rockerUp() {
            this.isClickDown = false, this.fsm.changeState(D.Idle);
        }
        canCorl() {
            return true;
        }
        addListenner() {
            t$1.getIns().addEventListerner(i.GAMESTART, this.gameStart, this), t$1.getIns().addEventListerner(i.END_CHECK_OVER, this.gameOver, this);
        }
        enPeople() {
            this.addListenner();
        }
        disPeople() {
            this.removeListenner();
        }
        removeListenner() {
            t$1.getIns().removeEventListerner(i.GAMESTART, this.gameStart, this), t$1.getIns().removeEventListerner(i.END_CHECK_OVER, this.gameOver, this);
        }
        onUpdate() {
            gameMgr.getIns().isGameStart() && this.fsm.exeState();
        }
        setStartPos(e, t) {
            super.setStartPos(e, t), this.changeCamera(F.Walk), Laya.Vector3.subtract(ts.getIns().cameraMgr._node.transform.position, this._node.transform.position, this.cameraOffect);
        }
        reborn() {
            this.rockerUp(), this.curHp = this.initHp, this.isDie = false, this.refershHp();
        }
    }

    class Je {
    }

    class createUI extends ve {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon"),
                this.video = this.owner.getChildByName("video"),
                this.count = this.owner.getChildByName("count"),
                this.tips = this.owner.getChildByName("tips"),
                this.setTips(null);
            this.video.getChildByName("pic").skin = "UI/" + P.getPicture() + "/345231.png";
        }
        setCount(e) {
            this.count.text = e.toString();
        }
        setVideo(e) {
            this.video.visible = e,
                this.count.visible = !e;
        }
        setTips(e) {
            this.tips.text = e,
                this.tips.visible = !!e;
        }
    }

    class Ve extends Laya.Script3D {
        constructor() {
            super(), this.curCount = 0, this.needCount = 0, this.createIndex = -1, this.planeParkType = O.None, this.lastCount = 0, this.addVal = 0, this.isInCreate = false, this.addSpaceTime = 0;
        }
        init() {
            this.node = this.owner;
            let e = this.owner.getComponent(Laya.PhysicsCollider);
            e.canCollideWith = r.player, e.collisionGroup = r.createPos, t$1.getIns().addEventListerner(i.EN_COIN_CHANGED, this.refershUI, this), t$1.getIns().addEventListerner(i.LOADMAPEND, this.initUI, this);
        }
        initUI() {
            if (!this.createUIMgr) {
                let e = is.getIns().createPrefab("prefab/item/createUI.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.createUIMgr = e.addComponent(createUI),
                    this.createUIMgr.init(),
                    this.createUIMgr.setVideo(false),
                    this.refershUI(), this.showCount(),
                    this.owner.active ? this.setTips(this.tips) : this.hide();
            }
        }
        refershUI() { }
        isVideo() {
            return 0 == hs.getIns().getCoin() && this.needCount - hs.getIns().getCoin() >= 10;
        }
        getCreateIndex() {
            return this.createIndex;
        }
        cretaePark(e, t) {
            this.createIndex = t, this.parkBase = e, this.movePos(e.node.transform.position, e.node.transform.localRotationEuler), this.curCount = 0, this.isInCreate = false, this.lastCount = this.curCount;
            let s = hs.getIns().getBuildCountByType(e.getParkType(), gameMgr.getIns().getCurLevelId());
            if (oe.ins.hasId(s)) {
                let t = oe.ins.getDataById(s);
                this.needCount = Math.ceil(e.buildData.createGold * (1 + t.createBuildTimes));
            }
            else
                this.needCount = e.buildData.createGold;
            this.needCount *= gameMgr.getIns().getLevelMul(), this.needCount = Math.ceil(this.needCount), this.show(), this.showUI(), this.setTips(null);
        }
        setTips(e) {
            console.log("createUi的tips", e);
            this.tips = e,
                this.createUIMgr && this.createUIMgr.setTips(e);
        }
        createProduct(e, t) {
            this.createIndex = t, this.parkProcessBase = e, this.movePos(e.node.transform.position, e.node.transform.localRotationEuler), this.curCount = 0, this.isInCreate = false, this.lastCount = this.curCount;
            let s = hs.getIns().getBuildCountByType(e.parkType, gameMgr.getIns().getCurLevelId());
            if (oe.ins.hasId(s)) {
                let t = oe.ins.getDataById(s);
                this.needCount = Math.ceil(e.buildData.createGold * (1 + t.createBuildTimes));
            }
            else
                this.needCount = e.buildData.createGold;
            this.needCount *= gameMgr.getIns().getLevelMul(), this.needCount = Math.ceil(this.needCount), this.show(), this.showUI(), this.setTips(null);
        }
        createPlane(e, t) {
            this.createIndex = t;
            this.planeParkType = e;
            let s = ts.getIns().getPlaneLimitWallByPlaneType(e);
            this.limitWall = s;
            this.movePos(s.getChildAt(0).transform.position, s.getChildAt(0).transform.localRotationEuler);
            this.curCount = 0;
            this.isInCreate = false;
            this.lastCount = this.curCount;
            let i = Be.ins.getDataById(e);
            this.needCount = i.createGold * gameMgr.getIns().getLevelMul();
            this.needCount = Math.ceil(this.needCount);
            this.show();
            this.showUI();
            this.setTips(P.getLanguage("17"));
        }
        createStore(e, t) {
            this.createIndex = t;
            this.planeParkType = e;
            let s = Be.ins.getDataById(e);
            let i = ts.getIns().nextRang;
            this.movePos(i.owner.transform.position, i.owner.transform.localRotationEuler);
            this.curCount = 0;
            this.isInCreate = false;
            this.lastCount = this.curCount;
            this.needCount = s.createGold * gameMgr.getIns().getLevelMul();
            this.needCount = Math.ceil(this.needCount);
            this.show();
            this.showUI();
            this.setTips(P.getLanguage("18"));
        }
        movePos(e, t) {
            let s = this.node.transform.position;
            s.x = e.x, s.z = e.z, this.node.transform.position = s, this.node.transform.localRotationEulerY = t.y;
        }
        showUI() {
            this.initUI(), this.createUIMgr && this.createUIMgr.setShow(true), this.showCount();
        }
        getIsInCreate() {
            return this.isInCreate;
        }
        showCount() {
            this.createUIMgr && this.createUIMgr.setCount(this.needMoney());
        }
        setCount(e) {
            this.createUIMgr && this.createUIMgr.setCount(e);
        }
        addMoney(e) {
            this.lastCount = this.curCount, this.curCount += e, this.addVal = .1 * e, this.addVal = Math.ceil(this.addVal), this.isInCreate = this.needMoney() <= 0, this.needMoney() <= 0 && (this.createFun = (() => {
                this.toCreate();
            }));
        }
        needMoney() {
            return this.needCount - this.curCount;
        }
        onDestroy() {
            this.createUIMgr && this.createUIMgr.owner.destroy(), t$1.getIns().removeEventListerner(i.LOADMAPEND, this.initUI, this), t$1.getIns().removeEventListerner(i.EN_COIN_CHANGED, this.refershUI, this);
        }
        toCreate() {
            let e = O.None;
            this.parkBase ? (this.parkBase.openStore(), e = this.parkBase.getParkType(),
                hs.getIns().addBuildByType(e, gameMgr.getIns().getCurLevelId()), this.parkBase = null) : this.parkProcessBase ? (this.parkProcessBase.openStore(), e = this.parkProcessBase.parkType, hs.getIns().addBuildByType(e, gameMgr.getIns().getCurLevelId()), this.parkProcessBase = null) : this.planeParkType == O.Plane2 || this.planeParkType == O.Plane3 ? (e = this.planeParkType, ts.getIns().openPlane(e), this.planeParkType = O.None,
                hs.getIns().addBuildByType(e, gameMgr.getIns().getCurLevelId()), as.getIns().showToast(P.getLanguage("19"))) : this.planeParkType != O.Park2 && this.planeParkType != O.Park3 || (gameMgr.getIns().isFirstEnterLevel = true, hs.getIns().setMarkIsOpen(gameMgr.getIns().getCurLevelId() + 1),
                as.getIns().showToast(P.getLanguage("20")), e = this.planeParkType, this.planeParkType = O.None, ts.getIns().checkNextRangOpen()), a.getIns().playSound(y.createBuild), ts.getIns().createCallBack(this, e);
        }
        getParkType() {
            return this.parkBase ? this.parkBase.getParkType() : (this.parkProcessBase && this.parkProcessBase.parkType, this.planeParkType);
        }
        hide() {
            this.createUIMgr && this.createUIMgr.setShow(false), this.owner.active = false;
        }
        show() {
            this.createUIMgr && this.createUIMgr.setShow(true), this.owner.active = true;
        }
        getHasShow() {
            return this.owner.active;
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 80);
            }
            this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curCount && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curCount ? this.curCount : this.lastCount, this.setCount(this.needCount - this.lastCount), this.lastCount >= this.curCount && (this.lastCount = this.curCount, this.createFun ? this.createFun() : x.UIMgr.ins.openUI(x.UIType.GetGoldView), this.createFun = null)));
        }
    }

    class buffUI extends ve {
        init() {
            super.init(), this.lv = this.owner.getChildByName("lv"),
                this.video = this.owner.getChildByName("video"),
                this.gold = this.owner.getChildByName("gold"),
                this.count = this.gold.getChildByName("count"),
                this.name = this.owner.getChildByName("name"),
                this.icon = this.owner.getChildByName("icon"),
                this.time = this.owner.getChildByName("time"),
                this.time.visible = false,
                is.getIns().setAdBtnIcon(this.video, true);
        }
        setLv(e) {
            this.lv.text = "lv." + e;
        }
        setCount(e) {
            this.count.text = e.toString();
        }
        showLv(e) {
            this.lv.visible = e;
        }
        showGold(e) {
            this.gold.visible = e;
        }
        showVideo(e) {
            this.video.visible = e;
        }
        setName(e) {
            this.name.skin = e;
        }
        setIcon(e) {
            this.icon.skin = e;
        }
        setTime(e) {
            this.time.text = e;
        }
    }

    class ke extends Laya.Script {
        constructor() {
            super(), this.buffTime = 3e5, this.curBuffTime = 0, this.curGold = 0, this.lastCount = 0, this.addVal = 0, this.isInCreate = false, this.isOpen = 0, this.addSpaceTime = 0;
        }
        init() {
            this.node = this.owner, this.buffType = parseInt(this.owner.name);
            let e = this.owner.getComponent(Laya.PhysicsCollider);
            e.canCollideWith = r.player, e.collisionGroup = r.createPos, this.col = e, t$1.getIns().addEventListerner(i.LOADMAPEND, this.initUI, this);
        }
        getBuffType() {
            return this.buffType;
        }
        onDestroy() {
            t$1.getIns().removeEventListerner(i.LOADMAPEND, this.initUI, this), this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null);
        }
        initUI() {
            if (!this.createUIMgr) {
                let e = is.getIns().createPrefab("prefab/item/buffUI.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.createUIMgr = e.addComponent(buffUI),
                    this.createUIMgr.init(),
                    this.createUIMgr.setIcon("page/gameView/buff_" + this.buffType + ".png"),
                    this.createUIMgr.setName("UI/" + P.getPicture() + "/buff_t_" + this.buffType + ".png"),
                    this.createUIMgr.showGold(false),
                    this.createUIMgr.showVideo(false),
                    this.createUIMgr.showLv(false),
                    this.showCount(),
                    this.buffType == R.Carry ? (this.createUIMgr.showGold(true), this.createUIMgr.showLv(true)) : this.createUIMgr.showVideo(true), -1 == this.isOpen && this.hideUI();
            }
        }
        checkUseBuff() {
            if (this.buffType == R.Carry)
                this.addMoney();
            else if (ee.getIns().getWantedView()) {
                let e = {};
                e.endFun = (() => {
                    this.useBuff();
                }), e.buffId = this.buffType, x.UIMgr.ins.openUI(x.UIType.BuffView, e);
            }
            else
                is.getIns().shareOrAd(() => {
                    this.useBuff();
                }, null);
        }
        addMoney() {
            if (this.isInCreate)
                return;
            if (hs.getIns().getCoin() <= 0)
                return void x.UIMgr.ins.openUI(x.UIType.GetGoldView);
            let e = hs.getIns().getPlayerCarryLv();
            if (0 == e)
                return;
            let t = oe.ins.getDataById(e), s = t.playerUpGold - this.curGold, i = hs.getIns().getCoin();
            s = Math.min(i, s), this.addVal = .1 * s, this.addVal = Math.ceil(this.addVal), this.lastCount = this.curGold, this.curGold += s, hs.getIns().minusCoin(s), this.curGold >= t.playerUpGold ? (this.isInCreate = true, this.createFun = (() => {
                this.isInCreate = false, a.getIns().playSound(y.shengxing), this.lastCount = 0, this.curGold = 0, hs.getIns().addPlayerCarryLv(), e = hs.getIns().getPlayerCarryLv(), oe.ins.hasId(e + 1) || this.closePoint(), this.showCount();
            })) : this.showCount();
        }
        openPoint() {
            1 != this.isOpen && (this.isOpen = 1, this.showUI());
        }
        showUI() {
            this.createUIMgr && this.createUIMgr.setShow(true);
            for (let e = 0; e < this.node.numChildren; e++)
                this.node.getChildAt(e).active = true;
            this.col.enabled = true;
        }
        hideUI() {
            this.createUIMgr && this.createUIMgr.setShow(false);
            for (let e = 0; e < this.node.numChildren; e++)
                this.node.getChildAt(e).active = false;
            this.col.enabled = false;
        }
        closePoint() {
            -1 != this.isOpen && (this.isOpen = -1, this.hideUI());
        }
        showCount() {
            if (!this.createUIMgr)
                return;
            let e = hs.getIns().getPlayerCarryLv();
            if (!oe.ins.hasId(e))
                return;
            let t = oe.ins.getDataById(e);
            this.createUIMgr.setLv(e), this.createUIMgr.setCount(t.playerUpGold - this.lastCount);
        }
        useBuff() {
            this.buffType == R.Speed ? (ts.getIns().playerMgr.speedUp(), this.curBuffTime += this.buffTime) : this.buffType == R.Effect ? (t$1.getIns().dispatchEvent(i.PRODUCTSPEEDUP, true), this.curBuffTime += this.buffTime) : this.buffType == R.CusCount ? (ts.getIns().useCusCountBuff(true), this.curBuffTime += this.buffTime) : this.buffTime == R.Carry && hs.getIns().addPlayerCarryLv(), gameMgr.getIns().gameView.showBuff(true, this.curBuffTime, this.buffType), this.closePoint();
        }
        setTime(e) {
            this.createUIMgr && this.createUIMgr.setTime(e);
        }
        endBuff() {
            this.buffType == R.Speed ? ts.getIns().playerMgr.endSpeedUp() : this.buffType == R.Effect ? t$1.getIns().dispatchEvent(i.PRODUCTSPEEDUP, false) : this.buffType == R.CusCount && ts.getIns().useCusCountBuff(false), this.setTime("00:00");
        }
        updateBuff() {
            this.curBuffTime > 0 && (this.curBuffTime -= Laya.timer.delta, this.curBuffTime = this.curBuffTime < 0 ? 0 : this.curBuffTime, this.setTime(is.getIns().convertSecondToHourMinuteSecond(Math.floor(.001 * this.curBuffTime), true)), 0 == this.curBuffTime && this.endBuff());
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 100);
            }
            this.updateBuff(), this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curGold && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curGold ? this.curGold : this.lastCount, this.showCount(), this.lastCount >= this.curGold && (this.lastCount = this.curGold, this.createFun ? this.createFun() : x.UIMgr.ins.openUI(x.UIType.GetGoldView), this.createFun = null)));
        }
    }

    class qe extends Laya.Script {
        init() {
            this.node = this.owner;
            let e = this.owner.getComponent(Laya.PhysicsCollider);
            e.collisionGroup = r.item, e.canCollideWith = r.player, t$1.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        onDestroy() {
            this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null), t$1.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this);
        }
        createUI() {
            if (!this.createUIMgr) {
                let e = is.getIns().createPrefab("prefab/item/createUI.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.createUIMgr = e.addComponent(createUI),
                    this.createUIMgr.init(),
                    this.createUIMgr.setVideo(true),
                    this.createUIMgr.setShow(true);
            }
        }
        getMoney() {
            return gameMgr.getIns().getCurLevelData().atmGold;
        }
        onLateUpdate() {
            if (this.createUIMgr) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 180);
            }
        }
    }

    class De {
        constructor() {
            this.lastVal = 0, this.speed = 1, this.startPos = new Laya.Vector3, this.delay = 0, this.tempVec = new Laya.Vector3;
        }
        toTarget(e, t, s, i, a) {
            this.item = e, this.target = t, this.callBack = a, this.lastVal = 0, this.speed = i, this.delay = s, e.transform.position.cloneTo(this.startPos);
        }
        updatePos() {
            this.lastVal += Laya.timer.delta * this.speed;
            let e = .001 * (this.lastVal - this.delay);
            e = (e = e > 1 ? 1 : e) < 0 ? 0 : e, Laya.Vector3.lerp(this.startPos, this.target.transform.position, e, this.tempVec);
            let t = this.item.transform.position;
            this.tempVec.cloneTo(t), this.item.transform.position = t, e >= 1 && this.callBack && this.callBack();
        }
    }

    class xe {
        constructor() {
            this.moveList = [];
        }
        update() {
            if (this.moveList.length > 0)
                for (let e = 0; e < this.moveList.length; e++)
                    this.moveList[e].updatePos();
        }
        hasTween() {
            return this.moveList.length > 0;
        }
        toTarget(e, t, s, i, a) {
            let n = new De;
            this.moveList.push(n), n.toTarget(e, t, s, i, () => {
                let e = this.moveList.indexOf(n);
                e >= 0 && this.moveList.splice(e, 1), a && a();
            });
        }
    }

    class je extends Pe {
        constructor() {
            super(), this.pickUpPosDatas = [], this.hats = [], this.hatIndex = 0, this.itemMove = new xe, this.tempVec1 = new Laya.Vector3, this._moveSpeed = 8, this.normalSpeed = 10, this.moveTemp = new Laya.Vector3, this.maxPickUpCount = 5, this.curPickItems = [], this.itemTween = new Ne;
        }
        init() {
            super.init(), this.zuiDaNode = is.getIns().seekNodeByName(this.owner, "m_zuida"), this.showZuiDa(false, 0), this.fx_Run = is.getIns().seekNodeByName(this.owner, "Fx_Run"), this.setRunEf(false);
            let e = is.getIns().seekNodeByName(this.owner, "head");
            for (let t = 0; t < e.numChildren; t++)
                this.hats.push(e.getChildAt(t)), t == this.hatIndex ? this.hats[t].active = true : this.hats[t].active = false;
            let s = is.getIns().seekNodeByName(this.owner, "pickUpNode");
            if (s) {
                let e = [];
                is.getIns().getChildBySgin(s, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Je;
                    s.par = e[t], this.pickUpPosDatas.push(s);
                }
            }
            t$1.getIns().addEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this);
        }
        onDestroy() {
            super.onDestroy(), t$1.getIns().removeEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this);
        }
        setPlayerData(e) {
            super.setPlayerData(e), this.refershPickCount();
        }
        playerUpCallBack() {
            is.getIns().createEf("Fx_LevelUp", is.zeroVec, this._node, 1.5, true, is.zeroVec, true), this.refershPickCount();
        }
        refershPickCount() {
            let e = oe.ins.getDataById(hs.getIns().getPlayerCarryLv());
            this.maxPickUpCount = e.playerMaxUp;
        }
        setRunEf(e) {
            this.fx_Run.active = e;
        }
        setStartPos(e, t) {
            super.setStartPos(e, t), this._node.transform.rotation.cloneTo(this.rotQua), this.fsm.changeState(D.Idle);
        }
        checkPlayWalkAnim() {
            this.hasHandleGoods() ? this.playAnim(Ce.U_banyun, null, false, 1, 1) : this.playAnim(Ce.U_run, null, false, 1, 1);
        }
        changeStateEnd(e) {
            switch (e) {
                case D.Walk:
                    this.playAnim(Ce.B_run), this.checkPlayWalkAnim();
                    break;
                case D.Idle:
                    this.playAnim(Ce.B_idleloop), this.hasHandleGoods() ? this.playAnim(Ce.U_banyun, null, false, 1, 1) : this.playAnim(Ce.U_idleloop, null, false, 1, 1);
            }
        }
        doAction(e) {
            switch (e) {
                case D.Walk:
                    this.doMove();
                    break;
                case D.Idle:
                    this.clearVec();
            }
            this.toRot(), this.itemTween.update(), this.itemMove.update();
        }
        speedUp() {
            this.moveAddSpeed = .8 * this._moveSpeed;
        }
        endSpeedUp() {
            this.moveAddSpeed = 0;
        }
        toRot() {
            let e = this._body.transform.rotation;
            Laya.Quaternion.lerp(e, this.rotQua, .2, e), this._body.transform.rotation = e;
        }
        rockerUp() {
            super.rockerUp(), this.fsm.changeState(D.Idle), this.clearVec(), this.setRunEf(false);
        }
        clearVec() {
            let e = this.rig.linearVelocity;
            e.x = 0, e.z = 0, e.y = 0, this.rig.linearVelocity = e;
        }
        rockerDown() {
            super.rockerDown(), this.fsm.changeState(D.Walk), this.setRunEf(true);
        }
        changeForward(e, t, s) {
            this._node.transform.position.cloneTo(this.tempVec1), this.tempVec1.x -= e, this.tempVec1.z -= t;
            let i = Math.abs(e), a = Math.abs(t), n = i > a ? i : a;
            n = n > 1 ? 1 : n, this.setAnimSpeed(n), is.getIns().lookAtTarget(this.tempSp, this.tempVec1), this.tempSp.transform.rotation.cloneTo(this.rotQua), this.tempSp.transform.getForward(this.moveForward), Laya.Vector3.normalize(this.moveForward, this.moveForward), Laya.Vector3.scale(this.moveForward, -n * this.moveSpeed, this.moveTemp);
        }
        gameStart() { }
        doMove() {
            if (!gameMgr.getIns().isGameStart())
                return;
            if (!this.isClickDown)
                return;
            let e = this.rig.linearVelocity;
            this.moveTemp.cloneTo(e), this.rig.linearVelocity = e;
            let t = this._node.transform.position;
            Laya.Vector3.add(this.cameraOffect, t, this.tempVec1), ts.getIns().cameraMgr.setCameraPos(this.tempVec1);
        }
        onCollisionEnter(e) {
            if (!gameMgr.getIns().isGameStart())
                return;
            let t = e.other.owner.getComponent(qe);
            if (t)
                if (gameMgr.getIns().gameView.upRockerFun(), ee.getIns().getWantedView()) {
                    let e = {};
                    e.count = t.getMoney(), x.UIMgr.ins.openUI(x.UIType.GetGoldView, e);
                }
                else
                    is.getIns().shareOrAd(() => {
                        a.getIns().playSound(y.gold), hs.getIns().plusCoin(t.getMoney());
                    }, null);
            else
                ;
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(be);
            if (t)
                return void t.outStore(true);
            let s = e.owner.getComponent(Me);
            s && s.outStore();
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(Fe);
            if (t)
                return gameMgr.getIns().gameView.upRockerFun(), this.owner.active = false, void t.enterNext();
            let s = e.owner.getComponent(Ve);
            if (s) {
                if (s.getIsInCreate())
                    return;
                let e = () => {
                    let e = hs.getIns().getCoin(), t = s.needMoney();
                    t = Math.min(t, e), s.addMoney(t), hs.getIns().minusCoin(t);
                };
                if (s.isVideo()) {
                    gameMgr.getIns().gameView.upRockerFun();
                    let t = {};
                    t.callBack = (() => {
                        e();
                    }), x.UIMgr.ins.openUI(x.UIType.GetGoldView, t);
                }
                else
                    e();
                return;
            }
            let i = e.owner.getComponent(be);
            if (i) {
                if (i.showArrow(false), i.enterStore(true), i.openShadow(), i.getParkType() == O.ParkCashier) {
                    let e = i;
                    e.setBox(true), e.collectMoney(this._node);
                }
                else
                    i.getParkType() == O.Trash ? this.trashDown(i) : this.checkPickDown(i);
                return;
            }
            let a = e.owner.getComponent(Me);
            if (a) {
                if (a.showArrow(false), a.enterStore(), 0 != this.getCurPickCount()) {
                    1 == a.getAcion(this._node.transform.position) ? this.checkPickDownFood(a) : this.checkPickUp(a);
                }
                else
                    this.checkPickUp(a);
                return;
            }
            if (e.collisionGroup == r.money)
                return void this.pickMoney(e.owner);
            let n = e.owner.getComponent(Oe);
            if (n)
                return void n.createWaiter();
            let o = e.owner.getComponent(Ke);
            if (o)
                return void o.upDateWaiter();
            let h = e.owner.getComponent(ke);
            h && h.checkUseBuff();
        }
        showZuiDa(e, t) {
            let s = this.zuiDaNode.transform.position;
            s.y = t, this.zuiDaNode.transform.position = s, this.zuiDaNode.active = e;
        }
        checkPickMax() {
            let e = this.getCurPickCount(), t = this.maxPickUpCount;
            if (e >= (t = t > this.pickUpPosDatas.length ? this.pickUpPosDatas.length : t)) {
                let e = this.pickUpPosDatas[t - 1].par.transform.position.y + 1;
                this.showZuiDa(true, e);
            }
            else
                this.showZuiDa(false, 0);
        }
        pickMoney(e) {
            let t = e.transform.position.clone();
            e.parent.removeChild(e), this.owner.addChild(e), e.transform.position = t, e.getComponent(Laya.PhysicsCollider).enabled = false, this.itemMove.toTarget(e, this.owner, 0, 4, () => {
                e.active = false, hs.getIns().plusCoin(1), a.getIns().playSound(y.gold);
            });
        }
        checkPickUp(e) {
            let t = e.getProductItems(), s = this.getPickUpCount(), i = [];
            for (let e = 0; e < t.length; e++)
                2 == t[e].itemState && i.push(t[e]);
            if (0 != (s = Math.min(s, i.length))) {
                if (i.length > s)
                    for (let e = i.length - 1; e >= s; e--)
                        i.splice(e, 1);
                this.pickUpItem(i), this.checkPlayWalkAnim();
            }
        }
        getPickUpPosData() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (null == this.pickUpPosDatas[e].item)
                    return this.pickUpPosDatas[e];
            return null;
        }
        removeItemInPos(e) {
            for (let t = 0; t < this.pickUpPosDatas.length; t++)
                if (e == this.pickUpPosDatas[t].item) {
                    this.pickUpPosDatas[t].item = null;
                    break;
                }
        }
        sortItems() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (!this.pickUpPosDatas[e].item)
                    for (let t = e + 1; t < this.pickUpPosDatas.length; t++)
                        if (this.pickUpPosDatas[t].item) {
                            this.changeItem(this.pickUpPosDatas[e], this.pickUpPosDatas[t]);
                            break;
                        }
        }
        changeItem(e, t) {
            e.item = t.item, t.item = null, e.item.parent.removeChild(e.item), e.par.addChild(e.item), e.item.transform.localPosition = is.zeroVec.clone();
        }
        pickUpItem(e) {
            for (let t = 0; t < e.length; t++) {
                e[t].setItemState(0);
                let s = new Ue;
                s.clone(e[t]);
                let i = this.getPickUpPosData();
                if (!i) {
                    console.log("没有放置空间");
                    break;
                }
                s.item = s.getItem(i.par), i.item = s.item, s.setItemState(1), this.itemTween.toLocal(i.item, () => {
                    s.setItemState(2);
                }, 100 * t, 250), this.curPickItems.push(s);
            }
            this.checkPickMax();
        }
        getPickUpCount() {
            return this.maxPickUpCount - this.curPickItems.length;
        }
        getCurPickCount() {
            let e = 0;
            for (let t = 0; t < this.pickUpPosDatas.length; t++)
                this.pickUpPosDatas[t].item && e++;
            return e;
        }
        trashDown(e) {
            if (0 == this.curPickItems.length)
                return;
            let t = [];
            for (let e = 0; e < this.curPickItems.length; e++)
                t.push(this.curPickItems[e]);
            for (let e = 0; e < t.length; e++) {
                let s = this.curPickItems.indexOf(t[e]);
                this.removeItemInPos(t[e].item), s >= 0 && this.curPickItems.splice(s, 1);
            }
            this.sortItems(), e.pickDownItem(t), this.checkPlayWalkAnim(), this.checkPickMax();
        }
        checkPickDown(e) {
            let t = e.getSellType();
            if (t == G.None)
                return;
            let s = e.getCurContain();
            if (0 == s)
                return;
            let i = [];
            for (let e = 0; e < this.curPickItems.length; e++)
                t == this.curPickItems[e].itemType && i.push(this.curPickItems[e]);
            if (0 != (s = Math.min(s, i.length))) {
                if (i.length > s)
                    for (let e = i.length - 1; e >= s; e--)
                        i.splice(e, 1);
                for (let e = 0; e < i.length; e++) {
                    let t = this.curPickItems.indexOf(i[e]);
                    this.removeItemInPos(i[e].item), t >= 0 && this.curPickItems.splice(t, 1);
                }
                this.sortItems(), e.pickDownItem(i), this.checkPlayWalkAnim(), this.checkPickMax();
            }
        }
        checkPickDownFood(e) {
            let t = e.useItemType;
            t != G.None && (this.pickDownFood(e, t, 0), e.secondUseItemType != G.None && (this.pickDownFood(e, e.secondUseItemType, 1), e.thirdUseItemType != G.None && this.pickDownFood(e, e.thirdUseItemType, 2)));
        }
        pickDownFood(e, t, s) {
            if (t == G.None)
                return;
            let i = e.getCurFoodContainByIndex(s);
            if (0 == i)
                return;
            let a = [];
            for (let e = 0; e < this.curPickItems.length; e++)
                t == this.curPickItems[e].itemType && a.push(this.curPickItems[e]);
            if (0 != (i = Math.min(i, a.length))) {
                if (a.length > i)
                    for (let e = a.length - 1; e >= i; e--)
                        a.splice(e, 1);
                for (let e = 0; e < a.length; e++) {
                    let t = this.curPickItems.indexOf(a[e]);
                    this.removeItemInPos(a[e].item), t >= 0 && this.curPickItems.splice(t, 1);
                }
                this.sortItems(), e.setUseItem(a, s), this.checkPlayWalkAnim();
            }
        }
        hasHandleGoods() {
            return this.curPickItems.length > 0;
        }
    }

    class ye {
        constructor() {
            this._preloadedAssets = {}, this._inLoadAsset = [], this._inLoadAssetFun = {}, this._nodeRecycle = {}, this.maxLoad = 6, this.curLoadCount = 0, this.readyArray = [];
        }
        static getIns() {
            return this._ins || (this._ins = new ye), this._ins;
        }
        loadTxt(e, t) {
            if (as.getIns().getPlat() && as.getIns().getPlat().getFileSystemManager) {
                as.getIns().getPlat().getFileSystemManager().readFile({
                    filePath: e,
                    encoding: "utf8",
                    success: e => {
                        is.getIns().handlerFun(t, e.data);
                    }
                });
            }
            else
                Laya.loader.create(e, Laya.Handler.create(this, e => {
                    is.getIns().handlerFun(t, e);
                }), null, Laya.Loader.TEXT);
        }
        loadConFigByPath(e, t) {
            this.loadTxt(e, e => {
                is.getIns().handlerFun(t, JSON.parse(e));
            });
        }
        preload(e, t) {
            let s = 0, i = e.length, a = () => {
                ++s == i && t && t();
            };
            for (let t = 0; t < e.length; t++)
                this.getAsset[e[t]] ? a() : this.loadAsset(e[t], a);
        }
        getNode(e) {
            let t = this.getRecycleNode(e);
            if (t)
                t.active = true;
            else {
                let s = this.getAsset(e);
                if (!s)
                    return console.error("没有预加载该对象:", e), null;
                t = Laya.Sprite3D.instantiate(s, null, false);
            }
            return t;
        }
        loadAsset(e, t) {
            if (this.hasInLoad(e))
                this.addInLoadFun(e, t);
            else {
                if (this.curLoadCount >= this.maxLoad)
                    return this.addInReady(e), void this.addInLoadFun(e, t);
                this._inLoadAsset.push(e), this.addInLoadFun(e, t), this.curLoadCount++, Laya.Sprite3D.load(e, Laya.Handler.create(null, t => {
                    this._preloadedAssets[e] = t, this.removeInLoadAsset(e), this.curLoadCount--, this.checkLoad();
                }));
            }
        }
        addInReady(e) {
            this.readyArray.indexOf(e) < 0 && this.readyArray.push(e);
        }
        checkLoad() {
            if (!(this.curLoadCount >= this.maxLoad) && 0 != this.readyArray.length)
                for (let e = 0; e < this.readyArray.length; e++) {
                    if (this.curLoadCount >= this.maxLoad)
                        return;
                    this.loadAsset(this.readyArray.shift(), null);
                }
        }
        hasInLoad(e) {
            return this._inLoadAsset.indexOf(e) >= 0;
        }
        addInLoadFun(e, t) {
            t && (this._inLoadAssetFun[e] || (this._inLoadAssetFun[e] = []), this._inLoadAssetFun[e].push(t));
        }
        removeInLoadAsset(e) {
            if (this._inLoadAssetFun[e]) {
                let t = this._inLoadAssetFun[e];
                for (let e = 0; e < t.length; e++)
                    t[e]();
                this._inLoadAssetFun[e] = null;
            }
            let t = this._inLoadAsset.indexOf(e);
            t >= 0 && this._inLoadAsset.splice(t, 1);
        }
        getAsset(e) {
            return this._preloadedAssets[e];
        }
        recycleNode(e, t) {
            if (!t)
                return;
            this._nodeRecycle[e] || (this._nodeRecycle[e] = []), t.active = false;
            let s = this._nodeRecycle[e];
            s.indexOf(t) < 0 && s.push(t);
        }
        getRecycleNode(e) {
            return this._nodeRecycle[e] && 0 != this._nodeRecycle[e].length ? this._nodeRecycle[e].shift() : null;
        }
        canRecycle(e) { }
        printAssets() {
            console.log(this._preloadedAssets);
        }
    }
    ye._ins = null;

    class ot {
        constructor() {
            this.mapNav = {}, this.tempVec = new Laya.Vector3;
        }
        static getIns() {
            return this.instance || (this.instance = new ot), this.instance;
        }
        loadMap(e, t) {
            if (this.mapKey = e, this.mapNav[e])
                return void is.getIns().handlerFun(t, this.mapNav[e]);
            let s = "sub/online/Sprites/Conventional/" + e + ".txt";
            ye.getIns().loadTxt(s, s => {
                let i = NevMesh.buildNodesByJson(JSON.parse(s));
                NevMesh.setZoneData(e, i), this.mapNav[e] = i, is.getIns().handlerFun(t);
            });
        }
        createNavMeshGroup(e) {
            this.playerNavMeshGroup || (this.playerNavMeshGroup = NevMesh.getGroup(this.mapKey, e));
        }
        hasInMap(e) {
            let t = NevMesh.zoneNodes[this.mapKey].groups[this.playerNavMeshGroup], s = NevMesh.zoneNodes[this.mapKey].vertices;
            if (!s || !t)
                return false;
            for (let i = 0; i < t.length; i++)
                if (NevMesh.Vector3.isVectorInPolygon(e, t[i], s))
                    return true;
            return false;
        }
        getPath(e, t) {
            return NevMesh.findPath(e, t, this.mapKey, this.playerNavMeshGroup);
        }
        getNearPos(e, t) {
            return NevMesh.getRandomNode(this.mapKey, this.playerNavMeshGroup, e, t);
        }
    }
    ot.instance = null;

    class rt {
        constructor() {
            this.enableTree = false;
        }
        Init(e) {
            this.rootNode = e;
        }
        Tick() {
            return this.enableTree ? null == this.rootNode ? z.Failed : this.rootNode.Tick() : z.Ready;
        }
        StartTree() {
            this.enableTree = true;
        }
        ForceQuit() {
            this.enableTree = false, this.rootNode.ForceQuit();
        }
    }

    class Ct extends je {
        constructor() {
            super(), this.itemType = G.None, this.treeFsm = new rt, this.tmepVec1 = new Laya.Vector3, this.moveVec = new Laya.Vector3, this._moveSpeed = .02, this.normalSpeed = .1, this.roadPath = null, this.roadIndex = 0, this.curMoveForward = new Laya.Vector3, this.curMovePos = new Laya.Vector3;
        }
        getWaterId() {
            return 6001;
        }
        init() {
            super.init(), this.waterConfig = Ge.ins.getDataById(this.getWaterId()), this.rig && this.rig.destroy(), this.initActionTree(), this.waiterUpLv(), t$1.getIns().addEventListerner(i.WAITERUPDATE, this.waiterUpLv, this), t$1.getIns().addEventListerner(i.SHOWWAITEREF, this.showLvEf, this);
        }
        showLvEf(e) {
            this.getWaterId() == e && is.getIns().createEf("Fx_LevelUp", is.zeroVec, this._node, 1.5, true, is.zeroVec, true);
        }
        onDestroy() {
            t$1.getIns().removeEventListerner(i.WAITERUPDATE, this.waiterUpLv, this), t$1.getIns().removeEventListerner(i.SHOWWAITEREF, this.showLvEf, this);
        }
        waiterUpLv() {
            let e = oe.ins.getDataById(hs.getIns().getWaiterLv(this.getWaterId(), H.Carry, gameMgr.getIns().getCurLevelId()));
            this.maxPickUpCount = e.waiterMaxCount;
            let t = oe.ins.getDataById(hs.getIns().getWaiterLv(this.getWaterId(), H.speed, gameMgr.getIns().getCurLevelId()));
            this.setSpeed(t.waiterSpeed), Laya.Vector3.normalize(this.curMoveForward, this.curMoveForward), Laya.Vector3.scale(this.curMoveForward, this.moveSpeed, this.moveVec);
        }
        initActionTree() { }
        checkToTarget(e) {
            return Laya.Vector3.subtract(e, this._node.transform.position, this.tmepVec1), this.tmepVec1.y = 0, Laya.Vector3.dot(this.tmepVec1, this.curMoveForward) < 0;
        }
        startWaiter() {
            this.fsm.changeState(D.MoveToProduct), this.treeFsm.StartTree();
        }
        setSpeed(e) {
            this._moveSpeed = e, this.setAnimSpeed(this.moveSpeed / this.normalSpeed);
        }
        doMove() {
            gameMgr.getIns().isGameStart() && this._node.transform.translate(this.moveVec, false);
        }
        recordMoveForward(e) {
            Laya.Vector3.subtract(e, this._node.transform.position, this.curMoveForward), this.curMoveForward.y = 0, Laya.Vector3.normalize(this.curMoveForward, this.curMoveForward), Laya.Vector3.scale(this.curMoveForward, this.moveSpeed, this.moveVec);
        }
        toNextMovePos() {
            if (!this.roadPath || 0 == this.roadPath.length)
                return void (this.roadPath = null);
            this.roadIndex++, this.roadPath[this.roadIndex].cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos);
        }
        changeRot(e) {
            is.getIns().lookAtTarget(this.tempSp, e), this.tempSp.transform.rotation.cloneTo(this.rotQua);
        }
        changeStateEnd(e) {
            switch (e) {
                case D.MoveToPark:
                case D.MoveToProduct:
                    this.playAnim(Ce.B_run), this.checkPlayWalkAnim(), this.setAnimSpeed(this.moveSpeed / this.normalSpeed);
                    break;
                case D.PickProduct:
                case D.PickDwonProduct:
                case D.Idle:
                    this.playAnim(Ce.B_idleloop), this.hasHandleGoods() ? this.playAnim(Ce.U_banyun, null, false, 1, 1) : this.playAnim(Ce.U_idleloop, null, false, 1, 1);
                    break;
                case D.ShouYin:
                    this.playAnim(Ce.B_idleloop), this.playAnim(Ce.U_idleloop, null, false, 1, 1);
            }
        }
        getNextPath(e) {
            let t = this._node.transform.position.clone();
            t.y = ts.getIns().startPos.transform.position.y, this.roadPath = ot.getIns().getPath(t, e), this.roadIndex = -1;
        }
        offectPlayerPos(e) {
            let t = this._node.transform.position;
            t.x = e.x, t.y = e.y, this._node.transform.position = t;
        }
        doAction(e) {
            this.toRot(), this.itemTween.update(), this.treeFsm.Tick();
        }
    }

    class Lt extends Ct {
        constructor() {
            super(), this.hatIndex = 11;
        }
        getWaterId() {
            return 6002;
        }
        initActionTree() {
            let e = new At, t = new nt;
            t.enterFun = (() => 0 == this.curPickItems.length ? z.Success : z.Failed);
            let s = new at;
            s.SetNodeAction(this.moveToProduct.bind(this));
            let i = new at;
            i.SetNodeAction(this.pickUpProduct.bind(this)), t.AddChildNode(s), t.AddChildNode(i);
            let a = new nt;
            a.enterFun = (() => 0 == this.curPickItems.length ? z.Failed : z.Success);
            let n = new at;
            n.SetNodeAction(this.moveToPark.bind(this));
            let r = new at;
            r.SetNodeAction(this.pickDownProduct.bind(this)), a.AddChildNode(n), a.AddChildNode(r), e.AddChildNode(t), e.AddChildNode(a), this.treeFsm.Init(e);
        }
        getRadomProduct() {
            let e = ts.getIns().getProducts(), t = [];
            for (let s = 0; s < e.length; s++) {
                let i = ts.getIns().getStoreByType(is.getParkByProductType(e[s].parkType));
                e[s].getIsCreate() && i.getIsCreate() && e[s].hasProduct() && 0 != i.getCurContain() && t.push(e[s]);
            }
            if (0 == t.length)
                return null;
            this.curProduct = t[is.getIns().randomNum(0, t.length - 1)], this.curSellPark = ts.getIns().getStoreByType(is.getParkByProductType(this.curProduct.parkType));
        }
        moveToProduct() {
            if (this.itemTween.hasTween())
                return z.Running;
            if (!this.roadPath) {
                if (this.getRadomProduct(), !this.curProduct)
                    return this.fsm.changeState(D.Idle), z.Running;
                this.fsm.changeState(D.MoveToProduct);
                let e = this.curProduct.getRandomStandPos();
                this.getNextPath(e), this.toNextMovePos();
            }
            return this.roadPath ? this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.curProduct.enterStore(), this.roadPath = null, this.fsm.changeState(D.PickProduct), z.Success) : (this.toNextMovePos(), z.Running)) : (this.doMove(), z.Running) : z.Running;
        }
        pickUpProduct() {
            return this.curProduct.getIsCreate() && this.curProduct.hasProduct() ? (this.checkPickUp(this.curProduct), this.curProduct.outStore(), this.fsm.changeState(D.MoveToPark), z.Success) : z.Running;
        }
        moveToPark() {
            if (this.itemTween.hasTween())
                return z.Running;
            if (!this.roadPath) {
                let e = this.curSellPark.getRandomStandPos();
                this.getNextPath(e), this.toNextMovePos();
            }
            return this.roadPath ? this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.roadPath = null, this.curSellPark.enterStore(), this.fsm.changeState(D.PickDwonProduct), z.Success) : (this.toNextMovePos(), z.Running)) : (this.doMove(), z.Running) : z.Running;
        }
        pickDownProduct() {
            return this.curSellPark.getIsCreate() ? 0 == this.curSellPark.getCurContain() ? z.Running : this.itemTween.hasTween() ? z.Running : (this.checkPickDown(this.curSellPark), 0 == this.curPickItems.length ? (this.curSellPark.outStore(), this.fsm.changeState(D.MoveToProduct), this.curProduct = null, z.Success) : z.Running) : z.Running;
        }
    }

    class Mt extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkCrackerProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.Egg, this.secondUseItemType = G.MaizeGood, super.init();
        }
        getBuildId() {
            return 1016;
        }
    }

    class Nt extends Lt {
        constructor() {
            super(), this.hatIndex = 4, this.useProduct = null;
        }
        getWaterId() {
            return 6003;
        }
        initActionTree() {
            let e = new At, t = new nt;
            t.enterFun = (() => 0 == this.curPickItems.length ? z.Success : z.Failed);
            let s = new at;
            s.SetNodeAction(this.moveToProduct.bind(this));
            let i = new at;
            i.SetNodeAction(this.pickUpProduct.bind(this)), t.AddChildNode(s), t.AddChildNode(i);
            let a = new nt;
            a.enterFun = (() => 0 == this.curPickItems.length ? z.Failed : z.Success);
            let n = new at;
            n.SetNodeAction(this.moveToPark.bind(this));
            let r = new at;
            r.SetNodeAction(this.pickDownProduct.bind(this)), a.AddChildNode(n), a.AddChildNode(r), e.AddChildNode(t), e.AddChildNode(a), this.treeFsm.Init(e);
        }
        moveToPark() {
            if (this.itemTween.hasTween())
                return z.Running;
            if (!this.roadPath) {
                if (!this.useProduct)
                    return this.useProduct = this.getRadomUseProduct(this.curProduct.productItemType), z.Running;
                let e = this.useProduct.getRandomStandPos();
                this.getNextPath(e), this.toNextMovePos();
            }
            return this.roadPath ? this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.useProduct.enterStore(), this.roadPath = null, this.fsm.changeState(D.PickDwonProduct), z.Success) : (this.toNextMovePos(), z.Running)) : (this.doMove(), z.Running) : z.Running;
        }
        pickDownProduct() {
            return this.useProduct.getIsCreate() ? 0 == this.useProduct.getCurFoodContainByIndex(0) && 0 == this.useProduct.getCurFoodContainByIndex(1) ? z.Running : (this.checkPickDownFood(this.useProduct), 0 == this.curPickItems.length ? (this.useProduct.outStore(), this.fsm.changeState(D.MoveToProduct), this.curProduct = null, z.Success) : z.Running) : z.Running;
        }
        useProductHasOpenAndContain(e) {
            let t = ts.getIns().getProducts();
            for (let s = 0; s < t.length; s++)
                if (t[s].getIsCreate())
                    if (t[s].useItemType == e) {
                        if (0 != t[s].getCurFoodContainByIndex(0))
                            return true;
                    }
                    else if (t[s].secondUseItemType == e) {
                        if (0 != t[s].getCurFoodContainByIndex(1))
                            return true;
                    }
                    else if (t[s].thirdUseItemType == e && 0 != t[s].getCurFoodContainByIndex(2))
                        return true;
            return false;
        }
        getRadomUseProduct(e) {
            let t = [], s = ts.getIns().getProducts();
            for (let i = 0; i < s.length; i++)
                s[i].getIsCreate() && (s[i].useItemType == e ? 0 != s[i].getCurFoodContainByIndex(0) && t.push(s[i]) : s[i].secondUseItemType == e ? 0 != s[i].getCurFoodContainByIndex(1) && t.push(s[i]) : s[i].thirdUseItemType == e && 0 != s[i].getCurFoodContainByIndex(2) && t.push(s[i]));
            return 0 == t.length ? null : t[is.getIns().randomNum(0, t.length - 1)];
        }
        getRadomProduct() {
            let e = ts.getIns().getProducts(), t = [];
            for (let s = 0; s < e.length; s++)
                if (e[s].getIsCreate() && e[s].hasProduct()) {
                    let i = e[s].productItemType;
                    this.useProductHasOpenAndContain(i) && t.push(e[s]);
                }
            if (0 == t.length)
                return null;
            this.curProduct = t[is.getIns().randomNum(0, t.length - 1)], this.useProduct = this.getRadomUseProduct(this.curProduct.productItemType);
        }
    }

    class Ot extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkACJuiceProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.Apple, this.secondUseItemType = G.Carrot, super.init();
        }
        getBuildId() {
            return 1030;
        }
    }

    class Pt extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkJuiceProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.Tomato, super.init();
        }
        getBuildId() {
            return 1010;
        }
    }

    class Qt extends Me {
        init() {
            this.parkType = O.ParkRoseProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1034;
        }
    }

    class Rt extends Me {
        init() {
            this.parkType = O.ParkAppleProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1028;
        }
    }

    class St extends be {
        init() {
            this.parkType = O.ParkMaizeGood, this.sellType = G.MaizeGood, super.init();
        }
        getBuildId() {
            return 1014;
        }
    }

    class Tt extends be {
        init() {
            super.init(), this.trashPos = is.getIns().seekNodeByName(this.owner, "trashPos"), this.parkType = O.Trash;
        }
        getBuildId() {
            return 1012;
        }
        onDestroy() {
            super.onDestroy(), this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null);
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = ts.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 80);
            }
            this.itemTween.update();
        }
        createUI() {
            if (!this.createUIMgr) {
                let e = is.getIns().createPrefab("prefab/item/buildInfoUI.json");
                gameMgr.getIns().gameView.owner.addChild(e),
                    this.createUIMgr = e.addComponent(buildInfoUI),
                    this.createUIMgr.init(),
                    this.createUIMgr.setName("UI/" + P.getPicture() + "/lajitong.png"),
                    this.createUIMgr.setIcon("page/gameView/paperBagIcon.png");
            }
        }
        pickDownItem(e) {
            for (let t = 0; t < e.length; t++) {
                let s = e[t], i = s.item.transform.position.clone();
                s.item.parent.removeChild(s.item), this.trashPos.addChild(s.item), s.item.transform.position = i, this.itemTween.toLocal(s.item, () => {
                    s.item.destroy(), this.checkHasGoods();
                }, 100 * t, 200);
            }
        }
    }

    class Ut extends be {
        init() {
            this.parkType = O.ParkCoffeeBean, this.sellType = G.CoffeeBean, super.init();
        }
        getBuildId() {
            return 1019;
        }
    }

    class Vt extends be {
        init() {
            this.parkType = O.ParkCoffee, this.sellType = G.Coffee, super.init();
        }
        getBuildId() {
            return 1023;
        }
    }

    class Wt extends be {
        init() {
            this.parkType = O.ParkApple, this.sellType = G.Apple, super.init();
        }
        getBuildId() {
            return 1027;
        }
    }

    class Xt extends be {
        init() {
            this.parkType = O.ParkBouquet, this.sellType = G.Bouquet, super.init();
        }
        getBuildId() {
            return 1039;
        }
    }

    class Yt extends Nt {
        constructor() {
            super(), this.hatIndex = 7;
        }
        getWaterId() {
            return 6004;
        }
        getRadomProduct() {
            let e = ts.getIns().getProducts(), t = [];
            for (let s = 0; s < e.length; s++)
                if (e[s].getIsCreate() && e[s].hasProduct() && e[s].useItemType == G.None) {
                    let i = e[s].productItemType;
                    this.useProductHasOpenAndContain(i) && t.push(e[s]);
                }
            if (0 == t.length)
                return null;
            this.curProduct = t[is.getIns().randomNum(0, t.length - 1)], this.useProduct = this.getRadomUseProduct(this.curProduct.productItemType);
        }
    }

    class Zt extends Me {
        init() {
            this.parkType = O.ParkBabysBreathProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1036;
        }
    }

    class Ze extends c {
    }

    class Qe extends u {
        static get ins() {
            return this._ins || (this._ins = new Qe), this._ins;
        }
        getConfigTarget() {
            return new Ze;
        }
        getDataByItemType(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].type == e)
                    return this.datas[t];
            return null;
        }
    }
    Qe._ins = null;

    class et {
        constructor() {
            this.index = 0, this.isUse = false;
        }
    }

    class $e extends be {
        constructor() {
            super(), this.money = 0, this.accountPosData = [], this.carryBox = null, this.carryNodes = [], this.moneys = [], this.moneyCount = 0, this.moneyRate = 1, this.tweenMove = new xe, this.hasBox = true;
        }
        init() {
            super.init(), this.parkType = O.ParkCashier, this.carryBox = is.getIns().seekNodeByName(this.owner, "carryBox");
            let e = is.getIns().seekNodeByName(this.carryBox, "carryNode");
            this.boxAnim = this.carryBox.getComponent(Laya.Animator), this.playBoxAnim(Ce.Box_Open), this.shouYinPos = is.getIns().seekNodeByName(this.owner, "shouYinPos"), is.getIns().getChildBySgin(e, "p", this.carryNodes);
            let t = is.getIns().seekNodeByName(this.owner, "sortPos"), s = [];
            is.getIns().getChildBySgin(t, "p", s);
            for (let e = 0; e < s.length; e++) {
                let t = new et;
                t.pos = s[e], t.index = e, this.accountPosData.push(t);
            }
            let i = is.getIns().seekNodeByName(this.owner, "money"), a = [];
            is.getIns().getChildBySgin(i, "p", a);
            for (let e = 0; e < a.length; e++) {
                let t = a[e];
                t.getChildAt(0).getComponent(Laya.PhysicsCollider).destroy();
                let s = new Ue;
                s.itemType = G.Money, s.item = t.getChildAt(0), s.setItemState(0), this.moneys.push(s);
            }
        }
        setWaiter(e) {
            this.waiter = e;
        }
        getWaiter() {
            return this.waiter;
        }
        stopBoxAnim() {
            this.boxAnim.speed = 0;
        }
        playBoxAnim(e) {
            this.boxAnim.speed = 1, this.boxAnim.play(e, 0, 0);
        }
        collectMoney(e) {
            if (0 == this.moneyCount)
                return;
            if (!this.hasMoneyModel())
                return;
            if (this.tweenMove.hasTween())
                return;
            let t = 0;
            for (let s = 0; s < this.moneys.length; s++) {
                if (2 != this.moneys[s].itemState)
                    continue;
                let i = this.moneys[s];
                i.setItemState(1), t += this.moneyRate, this.tweenMove.toTarget(i.item, e, 100 * s, 2, () => {
                    i.setItemState(0);
                });
            }
            0 != t && (a.getIns().playSound(y.revivecoin), t = Math.ceil(t), hs.getIns().plusCoin(t), this.moneyCount -= t, this.moneyCount = this.moneyCount < 0 ? 0 : this.moneyCount);
        }
        hasMoneyModel() {
            for (let e = 0; e < this.moneys.length; e++)
                if (2 == this.moneys[e].itemState)
                    return true;
            return false;
        }
        getShouYinPos() {
            return this.shouYinPos.transform.position;
        }
        getShowYinNode() {
            return this.shouYinPos;
        }
        getBuildId() {
            return 1003;
        }
        getAccountPos() {
            for (let e = 0; e < this.accountPosData.length; e++)
                if (!this.accountPosData[e].isUse)
                    return this.accountPosData[e];
            return null;
        }
        getAccountPosByIndex(e) {
            return this.accountPosData[e];
        }
        resetAccountPos(e) {
            for (let t = 0; t < this.accountPosData.length; t++)
                if (this.accountPosData[t].pos == e) {
                    this.accountPosData[t].isUse = false;
                    break;
                }
        }
        showMoneyCount(e, t, s) {
            if (0 == e)
                return void is.getIns().handlerFun(s);
            let i = 0, a = () => {
                ++i != e || is.getIns().handlerFun(s);
            };
            for (let s = 0; s < e; s++) {
                let e = this.getMoneyPosData();
                if (!e) {
                    a();
                    continue;
                }
                e.setItemState(1);
                let i = e.item.transform.position;
                t.cloneTo(i), e.item.transform.position = i, this.itemTween.toLocal(e.item, () => {
                    e.setItemState(2), a();
                }, 100 * s, 400);
            }
        }
        getMoneyPosData() {
            for (let e = 0; e < this.moneys.length; e++)
                if (0 == this.moneys[e].itemState)
                    return this.moneys[e];
            return null;
        }
        onUpdate() {
            super.onUpdate(), this.tweenMove.update();
        }
        toSell(e, t, s, i) {
            let a = 0;
            for (let t = 0; t < e.length; t++) {
                let s = Qe.ins.getDataByItemType(e[t].itenType);
                s && (a += s.sellPrice * e[t].curCount * gameMgr.getIns().getLevelMul());
            }
            this.moneyCount += a;
            let n = t.length;
            if (0 == n)
                return void is.getIns().handlerFun(s);
            let r = 0, o = () => {
                ++r == n && (this.playBoxAnim(Ce.Box_Closing), Laya.timer.once(600, this, () => {
                    this.clearLastCarry(), this.showMoneyCount(Math.ceil(a / this.moneyRate), i.transform.position.clone(), s);
                }));
            };
            for (let e = 0; e < t.length; e++) {
                if (this.carryNodes.length <= e) {
                    t[e].destroy(), o();
                    continue;
                }
                let s = t[e], i = s.transform.position.clone(), a = Laya.Sprite3D.instantiate(s);
                this.carryNodes[e].addChild(a), a.transform.position = i, s.destroy(), this.itemTween.toLocal(a, () => {
                    o();
                }, 100 * e, 500);
            }
        }
        hasInBuy() {
            for (let e = 0; e < this.moneys.length; e++)
                if (1 == this.moneys[e].itemState)
                    return true;
            return false;
        }
        clearLastCarry() {
            for (let e = 0; e < this.carryNodes.length; e++)
                is.getIns().removeChild(this.carryNodes[e]);
        }
        hasPackingBox() {
            return this.hasBox;
        }
        setBox(e) {
            e != this.hasBox && (this.hasBox = e, this.carryBox.active = e, e && this.playBoxAnim(Ce.Box_Open));
        }
        openStoreEnd() {
            super.openStoreEnd(), this.setBox(false);
        }
    }

    class $t extends Me {
        init() {
            this.parkType = O.ParkYellowRoseProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1038;
        }
    }

    class Bt extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkMilkProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.Maize, super.init();
        }
        getBuildId() {
            return 1011;
        }
    }

    class o {
    }
    o.hint = 9;
    o.ShowModel = 10;
    o.player = 11;
    o.Evolution = 12;

    class de extends Laya.Script {
        constructor() {
            super(), this.camrera = null, this.rotTemp = new Laya.Vector3, this.camreraCanShake = false, this.shakeVal = .05, this.isUpdatePos = false, this.screenPosTemp = new Laya.Vector3, this.upVec = new Laya.Vector3(0, 1, 0), this.cur_ca_move_time = 0, this.ca_move_time = 0, this.moveStartPos = null, this.moveEndPos = null, this.rPoint = new Laya.Vector3, this.moveTarget = null, this.rayOb = new Laya.Ray(new Laya.Vector3, new Laya.Vector3), this.obRayResult = new Laya.HitResult, this.tempV1 = new Laya.Vector3, this.lastToPos = new Laya.Vector3, this.moveSpeed = .5, this.tempV2 = new Laya.Vector3, this.lookAtCallBack = null, this.clientScaleX = 1, this.clientScaleY = 1, this.upTemp = new Laya.Vector3, this.worldPosTemp = new Laya.Vector4, this.shakeTime = 0, this.outpos = new Laya.Vector4;
        }
        init() {
            this.clientScaleX = 1 / Laya.stage.clientScaleX, this.clientScaleY = 1 / Laya.stage.clientScaleY, this._node = this.owner, this.camrera = is.getIns().seekNodeByName(this.owner, "Camera");
            is.getIns().seekNodeByName(ts.getIns().owner, "modelCamera");
            this.camrera.farPlane = 1e3, this.camrera.nearPlane = .01, this.camrera.removeLayer(o.ShowModel), this.camrera.removeLayer(o.hint), this.camrera.removeLayer(o.Evolution), this.closeCameraHDR(this.camrera, false), this.camrera.clearFlag = Laya.CameraClearFlags.Sky, this.rayOb.origin = this._node.transform.position.clone(), this.rayOb.direction = new Laya.Vector3(0, 0, 0);
        }
        getBackMirror() {
            if (this.backCamera)
                return this.backCamera;
            let e = new Laya.Camera(1, .01, 300);
            return this.closeCameraHDR(e, false), e.clearFlag = Laya.CameraClearFlags.SolidColor, e.fieldOfView = 60, e.removeLayer(o.ShowModel), e.removeLayer(o.hint), e.removeLayer(o.player), e.renderTarget = new Laya.RenderTexture(512, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8), this.owner.parent.addChild(e), this.backCamera = e, this.backCamera;
        }
        recycleBackMirror(e) {
            this.owner.parent.addChild(e), this.backCamera = e, this.setBackMirror(false);
        }
        setBackMirror(e) {
            this.backCamera && (this.backCamera.active = e);
        }
        setCameraField(e) {
            this.camrera.fieldOfView = e;
        }
        easeCameraField(e) {
            Laya.Tween.to(this.camrera, {
                fieldOfView: e
            }, 1e3, Laya.Ease.linearOut);
        }
        checkOb() {
            return this.rayOb.origin = this._node.transform.position, Laya.Vector3.subtract(ts.getIns().playerMgr._node.transform.position, this._node.transform.position, this.tempV1), this.tempV1.cloneTo(this.rayOb.direction), gameMgr.getIns().getGameScene().physicsSimulation.raycastFromTo(this._node.transform.position, ts.getIns().playerMgr._node.transform.position.clone(), this.obRayResult, r.ray, r.rayTarget), this.obRayResult.succeeded ? this.obRayResult.collider : null;
        }
        closeCameraHDR(e, t) {
            e && (e.enableHDR = t);
        }
        cameraToResetPos(e, t, s, i = null, a = Laya.Ease.expoOut, n = ts.getIns().playerMgr.owner) {
            this.startPos = this._node.transform.position.clone(), this.startRot = this._node.transform.rotationEuler.clone(), this.cur_ca_move_time = 0, this.ca_move_time = s, this.moveTarget = n;
            let r = e, o = t;
            this.moveStartPos = this.startPos.clone(), this.moveEndPos = r.clone(), Laya.Vector3.add(this.startPos, r, this.rPoint), Laya.Vector3.scale(this.rPoint, .5, this.rPoint), Laya.Tween.to(this.startRot, {
                x: o.x,
                y: o.y,
                z: o.z
            }, s, a, null, 0, false, false), Laya.Tween.to(this.startPos, {
                x: r.x,
                y: r.y,
                z: r.z
            }, s, a, Laya.Handler.create(this, () => {
                is.getIns().handlerFun(i), this.isUpdatePos = false;
            }), 0, false, false), this.isUpdatePos = true;
        }
        onUpdate() {
            if (this.isUpdatePos) {
                let e = this._node.transform.position;
                this.cycleRot(this.moveStartPos, this.moveEndPos, e, this.rPoint), this._node.transform.position = e;
                let t = this._node.transform.localRotationEuler;
                this._node.transform.lookAt(this.moveTarget.transform.position, this.upVec, false), this.rotTemp.y = this._node.transform.localRotationEulerY + 180, t.setValue(this.rotTemp.x, this.rotTemp.y, this.rotTemp.z), this._node.transform.localRotationEuler = t;
            }
            if (this.camreraCanShake) {
                let e = this.camrera.transform.localPosition;
                e.setValue(this.shakeVal * Math.random(), this.shakeVal * Math.random(), 0), this.camrera.transform.localPosition = e, this.shakeTime -= Laya.timer.delta, this.shakeTime <= 0 && (this.shakeTime = 0, this.cameraShake(false));
            }
        }
        cycleRot(e, t, s, i) {
            this.cur_ca_move_time += Laya.timer.delta, this.cur_ca_move_time = this.cur_ca_move_time < 0 ? 0 : this.cur_ca_move_time;
            let a = this.cur_ca_move_time / this.ca_move_time, n = -Math.PI * a;
            s.y = t.y;
            let r = s, o = Math.sin(n), h = Math.cos(n);
            return r.x = (e.x - i.x) * h - (e.z - i.z) * o + i.x, r.z = (e.x - i.x) * o + (e.z - i.z) * h + i.z, r;
        }
        setCameraAngle(e) {
            let t = this._node.transform.localRotationEuler;
            e.cloneTo(t), this._node.transform.localRotationEuler = t;
        }
        setLookAtCallBack(e) {
            this.lookAtCallBack = e;
        }
        lookAtTarget(e) {
            e.transform.getUp(this.upTemp), this.rotTemp.y = this._node.transform.localRotationEulerY + 180, Laya.Vector3.subtract(e.transform.position, this._node.transform.position, this.tempV1), Laya.Vector3.subtract(this._node.transform.position, this.tempV1, this.tempV1), this._node.transform.lookAt(this.tempV1, this.upTemp, false);
        }
        setCameraPos(e, t = .5) {
            let s = this._node.transform.position;
            Laya.Vector3.lerp(s, e, t, s), this._node.transform.position = s;
        }
        setCameraMove(e) {
            e.cloneTo(this.lastToPos), Laya.Vector3.subtract(this.lastToPos, this._node.transform.position, this.tempV2), Laya.Vector3.scalarLength(this.tempV2) > this.moveSpeed && (Laya.Vector3.normalize(this.tempV2, this.tempV2), Laya.Vector3.scale(this.tempV2, this.moveSpeed, this.tempV2)), this._node.transform.translate(this.tempV2, false);
        }
        setCameraRot(e) {
            let t = this._node.transform.rotation;
            e.cloneTo(t), this._node.transform.rotation = t;
        }
        setColor(e) {
            this.camrera.clearColor = e.clone();
        }
        worldPosToScreenPos(e) {
            return this.camrera.viewport.project(e, this.camrera.projectionViewMatrix, this.worldPosTemp), this.screenPosTemp.x = this.worldPosTemp.x * this.clientScaleX, this.screenPosTemp.y = this.worldPosTemp.y * this.clientScaleY, this.screenPosTemp.z = this.worldPosTemp.z, this.screenPosTemp;
        }
        cameraShake(e, t = 500, s = this.shakeVal) {
            if (this.camreraCanShake = e, this.shakeVal = s, this.shakeTime = t, !e) {
                let e = this.camrera.transform.localPosition;
                e.setValue(0, 0, 0), this.camrera.transform.localPosition = e;
            }
        }
        isVisible(e) {
            let t = this.camrera;
            return t.viewport.project(e.transform.position, t.projectionViewMatrix, this.outpos), this.outpos.z < 1;
        }
    }

    var K;
    (function (K) {
        K[K["MoveToShop"] = 1] = "MoveToShop";
        K[K["Shopping"] = 2] = "Shopping";
        K[K["MoveToAccount"] = 3] = "MoveToAccount";
        K[K["Account"] = 4] = "Account";
        K[K["MoveToOut"] = 5] = "MoveToOut";
        K[K["ShoppingEnd"] = 6] = "ShoppingEnd";
    })(K || (K = {}));

    class ct {
        constructor() {
            this.itenType = G.None, this.needCount = 1, this.curCount = 0;
        }
    }

    class ht extends ve {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon"), this.count = this.owner.getChildByName("count");
        }
        setIcon(e) {
            this.icon.skin = e;
        }
        setCount(e, t) {
            this.count.text = e + "/" + t;
        }
    }

    class lt extends ve {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon");
        }
        setIcon(e) {
            this.icon.skin = "page/gameView/" + e + ".png";
        }
    }

    class dt extends we {
        constructor() {
            super(), this.roadPath = [], this.roadIndex = 0, this.treeFsm = new rt, this.rotQua = new Laya.Quaternion, this.fsm = new fe, this.pickUpPosDatas = [], this.needDatas = [], this.buySort = [], this.buyIndex = 0, this.isDeath = false, this.trolley = null, this.tuiCheQua = null, this.hats = [], this.curMoveForward = new Laya.Vector3, this.tempVec1 = new Laya.Vector3, this.tempV2 = new Laya.Vector3, this.tempForward = new Laya.Vector3, this.moveVec = new Laya.Vector3, this.moveSpeed = .04, this.curPark = null, this.tmepVec1 = new Laya.Vector3, this.lastCount = -1, this.itemTween = new Ne, this.accountPosData = null, this.lastWaitAnimName = null, this.buyGoodState = 0, this.curMovePos = new Laya.Vector3;
        }
        init() {
            super.init();
            let e = is.getIns().seekNodeByName(this.owner, "head"), t = is.getIns().randomNum(0, e.numChildren - 1);
            for (let s = 0; s < e.numChildren; s++)
                this.hats.push(e.getChildAt(s)), this.hats[s].active = s == t;
            this.m_carryBox = is.getIns().seekNodeByName(this.owner, "m_carryBox"), this.boxAnim = this.m_carryBox.getComponent(Laya.Animator), this.trolley = is.getIns().seekNodeByName(this.owner, "trolley"), this.showTrolley(true), this.showCarryBox(false);
            let s = is.getIns().seekNodeByName(this.owner, "pickUpNode");
            if (s) {
                let e = [];
                is.getIns().getChildBySgin(s, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Je;
                    s.par = e[t], this.pickUpPosDatas.push(s);
                }
            }
            this.tempSp = new Laya.Sprite3D("rotSp"), this._node.addChild(this.tempSp), is.getIns().resetTransform(this.tempSp), this.initFsm(), this.initTreeState(), this.createUI(), this.radomColor();
        }
        radomColor() {
            let e = ts.getIns().getRadomMat(), t = this._node.getChildByName("Model").getChildByName("man"), s = t.skinnedMeshRenderer.materials;
            s[1] = e, t.skinnedMeshRenderer.materials = s;
        }
        stopBoxAnim() {
            this.boxAnim.speed = 0;
        }
        createUI() {
            if (!this.buytipsMgr) {
                let e = is.getIns().createPrefab("prefab/item/buyTipsItem.json");
                gameMgr.getIns().gameView.owner.addChild(e), this.buytipsMgr = e.addComponent(ht), this.buytipsMgr.init(), e = is.getIns().createPrefab("prefab/item/toCashierItem.json"), gameMgr.getIns().gameView.owner.addChild(e), this.toCashierItem = e.addComponent(lt), this.toCashierItem.init(), this.toCashierItem.setShow(false);
            }
        }
        showTrolley(e) {
            this.trolley && (this.trolley.active = e);
        }
        showCarryBox(e) {
            this.m_carryBox.active = e, e && this.boxAnim.play(Ce.Box_Closing, 0, 1);
        }
        setCustomData(e) {
            this.customData = e, e.getNeedGoods().forEach((e, t) => {
                this.buySort.push(is.getParkTypeTypeByItemType(t)), this.setNeedCount(t, e);
            });
        }
        getEmptyPosData() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (null == this.pickUpPosDatas[e].item)
                    return this.pickUpPosDatas[e];
            return null;
        }
        setNeedCount(e, t) {
            let s = new ct;
            s.itenType = e, s.needCount = t, this.needDatas.push(s);
        }
        getNeedDataByType(e) {
            for (let t = 0; t < this.needDatas.length; t++)
                if (this.needDatas[t].itenType == e) {
                    return this.needDatas[t];
                }
            return null;
        }
        showIdleUp() {
            1 == this.customData.type ? this.hasGoods() ? this.playAnim(Ce.U_banyun, null, false, 1, 1) : this.playAnim(Ce.U_idleloop, null, false, 1, 1) : 2 == this.customData.type && (this.fsm.getState() == K.Account ? this.playAnim(Ce.U_idleloop, null, false, 1, 1) : this.trolley && this.trolley.active ? this.playAnim(Ce.U_tuiche, null, false, 1, 1) : this.hasGoods() ? this.playAnim(Ce.U_banyun, null, false, 1, 1) : this.playAnim(Ce.U_idleloop, null, false, 1, 1));
        }
        changeStateEnd(e) {
            switch (e) {
                case K.MoveToShop:
                    this.playAnim(Ce.B_walk), this.showIdleUp();
                    break;
                case K.Shopping:
                    this.playAnim(Ce.B_idleloop), this.showIdleUp();
                    break;
                case K.MoveToAccount:
                    this.playAnim(Ce.B_walk), this.showIdleUp(), this.toCashierItem.setShow(true), this.buytipsMgr.setShow(false);
                    break;
                case K.Account:
                    this.playAnim(Ce.B_idleloop), this.showIdleUp();
                    break;
                case K.MoveToOut:
                    this.toCashierItem.setIcon("face_" + is.getIns().randomNum(1, 2)), this.playAnim(Ce.B_walk), this.m_carryBox.active ? this.playAnim(Ce.U_banyun, null, false, 1, 1) : this.playAnim(Ce.U_idleloop, null, false, 1, 1);
                    break;
                case K.ShoppingEnd:
            }
        }
        initFsm() {
            this.fsm.setChangeStateEndFun(this.changeStateEnd.bind(this));
        }
        initTreeState() {
            let e = new nt;
            e.enterFun = (() => this.roadPath && 0 != this.roadPath.length ? z.Success : z.Failed);
            let t = new nt, s = new at;
            s.SetNodeAction(this.moveToShop.bind(this));
            let i = new at;
            i.SetNodeAction(this.shoppingInShop.bind(this)), t.AddChildNode(s), t.AddChildNode(i);
            let a = new nt, n = new at;
            n.SetNodeAction(this.moveToCashier.bind(this));
            let r = new at;
            r.SetNodeAction(this.toCashier.bind(this)), a.AddChildNode(n), a.AddChildNode(r);
            let o = new at;
            o.SetNodeAction(this.moveOutDoor.bind(this)), e.AddChildNode(t), e.AddChildNode(a), e.AddChildNode(o), this.treeFsm.Init(e), this.treeFsm.StartTree();
        }
        changeRot(e) {
            is.getIns().lookAtTarget(this.tempSp, e), this.tempSp.transform.rotation.cloneTo(this.rotQua);
        }
        lookForward(e) {
            Laya.Vector3.add(e, this._node.transform.position, this.tempV2), this.tempV2.y = this._node.transform.position.y, is.getIns().lookAtTarget(this.tempSp, this.tempV2), this.tempSp.transform.rotation.cloneTo(this.rotQua);
        }
        toRot() {
            let e = this._node.transform.rotation;
            if (Laya.Quaternion.lerp(e, this.rotQua, .2, e), this._node.transform.rotation = e, this.tuiCheQua && this.trolley) {
                let e = this.trolley.transform.rotation;
                this.tuiCheQua.cloneTo(e), this.trolley.transform.rotation = e;
            }
        }
        recordMoveForward(e) {
            Laya.Vector3.subtract(e, this._node.transform.position, this.curMoveForward), this.curMoveForward.y = 0, Laya.Vector3.normalize(this.curMoveForward, this.curMoveForward), Laya.Vector3.scale(this.curMoveForward, this.moveSpeed, this.moveVec);
        }
        offectPlayerPos(e) {
            let t = this._node.transform.position;
            t.x = e.x, t.y = e.y, this._node.transform.position = t;
        }
        playAndCheckDownAnim(e) {
            this.lasDownAnim != e && (this.lasDownAnim = e, this.playAnim(e));
        }
        moveToShop() {
            if (this.fsm.getState() != K.MoveToShop)
                return z.Success;
            if (this.itemTween.hasTween())
                return this.playAndCheckDownAnim(Ce.B_idleloop), z.Running;
            if (this.playAndCheckDownAnim(Ce.B_walk), this.checkToTarget(this.curMovePos)) {
                if (this.offectPlayerPos(this.curMovePos), this.roadIndex >= this.roadPath.length - 1) {
                    let e = this.buySort[this.buyIndex];
                    return this.curPark = ts.getIns().getStoreByType(e), this.fsm.changeState(K.Shopping), this.curPark.getIsCreate() && this.curPark.enterStore(), this.lastWaitAnimName = null, z.Success;
                }
                return this.toNextMovePos(), z.Running;
            }
            return this._node.transform.translate(this.moveVec, false), z.Running;
        }
        checkToTarget(e) {
            return Laya.Vector3.subtract(e, this._node.transform.position, this.tmepVec1), this.tmepVec1.y = 0, Laya.Vector3.dot(this.tmepVec1, this.curMoveForward) < 0;
        }
        shoppingInShop() {
            if (this.fsm.getState() != K.Shopping)
                return z.Success;
            if (this.curPark.getIsCreate()) {
                if (this.curPark.hasGoods()) {
                    let e = this.getNeedDataByType(this.curPark.getSellItemType());
                    if (null == e) { }
                    else {
                        let t = this.curPark.getGoodsByCount(e.needCount - e.curCount);
                        for (let s = 0; s < t.length; s++) {
                            e.curCount++;
                            let i = this.getEmptyPosData();
                            if (!i)
                                continue;
                            let a = t[s].getItem(i.par);
                            i.item = a, this.itemTween.toLocal(a, () => { }, 100 * s, 250), t[s].setItemState(0);
                        }
                        if (1 == this.customData.type && this.lastWaitAnimName != Ce.U_banyun && (this.lastWaitAnimName = Ce.U_banyun, this.playAnim(Ce.U_banyun, null, false, 1, 1)), e.needCount - e.curCount > 0)
                            return this.lastCount != e.curCount && (this.lastCount = e.curCount, this.setBuyUIInfo(this.needDatas[this.buyIndex])), z.Running;
                    }
                    return this.buySort.length - 1 == this.buyIndex ? (this.fsm.changeState(K.MoveToAccount), this.curPark.outStore()) : (this.lastCount = -1, this.toNextStore()), z.Success;
                }
                return z.Running;
            }
            return this.buySort.length - 1 == this.buyIndex ? this.itemTween.hasTween() ? z.Running : (this.fsm.changeState(K.MoveToAccount), z.Success) : (this.toNextStore(), z.Success);
        }
        toNextMovePos() {
            if (!this.roadPath)
                return;
            this.roadIndex++, this.roadPath[this.roadIndex].cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos);
        }
        moveToCashier() {
            if (this.fsm.getState() != K.MoveToAccount)
                return z.Success;
            if (this.itemTween.hasTween())
                return this.playAndCheckDownAnim(Ce.B_idleloop), z.Running;
            if (this.playAndCheckDownAnim(Ce.B_walk), this.accountPosData) {
                if (this.checkToTarget(this.curMovePos)) {
                    if (this.roadIndex < this.roadPath.length - 1)
                        return this.toNextMovePos(), z.Running;
                    if (this.offectPlayerPos(this.curMovePos), 0 == this.accountPosData.index)
                        return this.trolley && (this.tuiCheQua = new Laya.Quaternion, this.trolley.transform.rotation.cloneTo(this.tuiCheQua)), this.fsm.changeState(K.Account), this.accountPosData.pos.transform.getForward(this.tempForward), this.lookForward(this.tempForward), z.Success;
                    {
                        let e = this.parkCashier.getAccountPosByIndex(this.accountPosData.index - 1);
                        return this.accountPosData.pos.transform.getForward(this.tempForward), this.lookForward(this.tempForward), e.isUse ? this.lastWaitAnimName != Ce.B_idleloop && (this.playAnim(Ce.B_idleloop), this.showIdleUp(), this.lastWaitAnimName = Ce.B_idleloop) : (this.accountPosData.isUse = false, this.accountPosData = e, this.accountPosData.isUse = true, this.getNextPath(this.accountPosData.pos.transform.position), this.toNextMovePos()), z.Running;
                    }
                }
                return this.lastWaitAnimName != Ce.B_walk && (this.playAnim(Ce.B_walk), this.showIdleUp(), this.lastWaitAnimName = Ce.B_walk), this._node.transform.translate(this.moveVec, false), z.Running;
            }
            return this.parkCashier = ts.getIns().getNearParkCashier(this._node.transform.position), this.accountPosData = this.parkCashier.getAccountPos(), this.accountPosData ? (this.accountPosData.isUse = true, this.getNextPath(this.accountPosData.pos.transform.position), this.toNextMovePos(), this.lastWaitAnimName != Ce.B_walk && (this.playAnim(Ce.B_walk), this.showIdleUp(), this.lastWaitAnimName = Ce.B_walk)) : this.lastWaitAnimName != Ce.B_idleloop && (this.playAnim(Ce.B_idleloop), this.showIdleUp(), this.lastWaitAnimName = Ce.B_idleloop), z.Running;
        }
        setLastAccountPosCanUse() {
            this.accountPosData && (this.accountPosData.isUse = false);
        }
        toCashier() {
            return this.fsm.getState() != K.Account ? z.Success : 1 == this.buyGoodState ? z.Running : 2 == this.buyGoodState ? (this.parkCashier.setBox(false), this.showCarryBox(true), this.setLastAccountPosCanUse(), ts.getIns().outPos.transform.position.cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos), this.fsm.changeState(K.MoveToOut), z.Success) : this.hasGoods() ? this.parkCashier.hasPackingBox() ? (this.buyGoods(), this.buyGoodState = 1, this.showIdleUp(), z.Running) : (2 == me.teachId && (me.teachId++, gameMgr.getIns().gameView.showTeach(3, true)), z.Running) : (ts.getIns().outPos.transform.position.cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos), this.setLastAccountPosCanUse(), void this.fsm.changeState(K.MoveToOut));
        }
        buyGoods() {
            let e = [];
            for (let t = 0; t < this.pickUpPosDatas.length; t++)
                this.pickUpPosDatas[t].item && (e.push(this.pickUpPosDatas[t].item), this.pickUpPosDatas[t].item = null);
            this.parkCashier.toSell(this.needDatas, e, () => {
                this.showTrolley(false), this.buyGoodState = 2;
            }, this._node);
        }
        hasGoods() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (this.pickUpPosDatas[e].item)
                    return true;
            return false;
        }
        moveOutDoor() {
            return this.fsm.getState() != K.MoveToOut ? z.Success : this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.fsm.changeState(K.ShoppingEnd), this.isDeath = true, ts.getIns().customByOver(this), z.Success) : (this._node.transform.translate(this.moveVec, false), z.Running);
        }
        getNextPath(e) {
            let t = this._node.transform.position.clone();
            t.y = ts.getIns().startPos.transform.position.y, this.roadPath = ot.getIns().getPath(t, e), this.roadIndex = -1;
        }
        toShopping() {
            this.buyIndex = -1, this.toNextStore();
        }
        toNextStore() {
            this.buyIndex++, this.getNextPath(ts.getIns().getStoreRandomStandPos(this.buySort[this.buyIndex])), this.setBuyUIInfo(this.needDatas[this.buyIndex]), this.toNextMovePos(), this.fsm.changeState(K.MoveToShop);
        }
        setBuyUIInfo(e) {
            this.buytipsMgr.setIcon(n.itemIconPath.format(is.getItemIconPathByItemType(e.itenType))), this.buytipsMgr.setCount(e.curCount, e.needCount);
        }
        onUpdate() {
            if (gameMgr.getIns().isGameStart() && !this.isDeath) {
                if (this.buytipsMgr) {
                    let e = ts.getIns().cameraMgr.worldPosToScreenPos(this._node.transform.position);
                    this.buytipsMgr.setPos(e.x, e.y - 170), this.toCashierItem.setPos(e.x, e.y - 100);
                }
                this.toRot(), this.itemTween.update(), this.treeFsm.Tick();
            }
        }
        onDestroy() {
            this.buytipsMgr && (this.buytipsMgr.owner.destroy(), this.buytipsMgr = null, this.toCashierItem.owner.destroy(), this.toCashierItem = null);
        }
    }

    class es extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkBouquetProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.BabysBreath, this.secondUseItemType = G.YellowRose, this.thirdUseItemType = G.Rose, super.init();
        }
        getBuildId() {
            return 1040;
        }
    }

    class ft extends be {
        init() {
            this.parkType = O.ParkMaize, this.sellType = G.Maize, super.init();
        }
        getBuildId() {
            return 1009;
        }
    }

    class gt extends be {
        init() {
            this.parkType = O.ParkTomato, this.sellType = G.Tomato, super.init();
        }
        showArrow(e) {
            super.showArrow(e), !e && this.fx_Arrow && ts.getIns().enableTeach(3);
        }
        getBuildId() {
            return 1005;
        }
    }

    class jt extends be {
        init() {
            this.parkType = O.ParkBabysBreath, this.sellType = G.BabysBreath, super.init();
        }
        getBuildId() {
            return 1035;
        }
    }

    class kt extends be {
        init() {
            this.parkType = O.ParkMilk, this.sellType = G.Milk, super.init(), this.anim = is.getIns().seekNodeByName(this.owner, "bingxiang").getComponent(Laya.Animator);
        }
        stopAnim() {
            this.anim.speed = 0;
        }
        playAnim(e) {
            this.anim.speed = 1, this.anim.play(e, 0, 0);
        }
        openStoreEnd() {
            super.openStoreEnd(), this.playAnim(Ce.bingxiangdoorclose);
        }
        getBuildId() {
            return 1013;
        }
        enterStore(e = false) {
            super.enterStore(e), 1 == this.enterTimes && this.playAnim(Ce.bingxiangdooropen);
        }
        outStore(e = false) {
            super.outStore(e), 0 == this.enterTimes && this.playAnim(Ce.bingxiangdoorclose);
        }
    }

    class I extends c {
    }

    class m extends u {
        static get ins() {
            return this._ins || (this._ins = new m), this._ins;
        }
        getConfigTarget() {
            return new I;
        }
    }
    m._ins = null;

    class mt extends c {
        constructor() {
            super(), this.buyGoodsMap = new Map, this.buyTypes = [];
        }
        init(e) {
            super.init(e);
            let t, s = this.buyGoods.split(",");
            for (let e = 0; e < s.length; e++)
                t = s[e].split("&"), this.buyGoodsMap.set(parseInt(t[0]), parseInt(t[1])), this.buyTypes.push(parseInt(t[0]));
        }
        getBuyTypes() {
            return this.buyTypes;
        }
        getNeedGoods() {
            return this.buyGoodsMap;
        }
    }

    class pt extends u {
        getConfigTarget() {
            return new mt;
        }
        static get ins() {
            return this._ins || (this._ins = new pt), this._ins;
        }
    }
    pt._ins = null;

    class qt extends be {
        init() {
            this.parkType = O.ParkRose, this.sellType = G.Rose, super.init();
        }
        getBuildId() {
            return 1033;
        }
    }

    class ce {
        constructor() {
            this.pool = new j;
        }
        recycle(e, t) {
            if (!t)
                return;
            if (!ts.getIns() && ts.getIns().recycleNode)
                return void t.destroy();
            t.parent != ts.getIns().recycleNode && ts.getIns().recycleNode.addChild(t), t.active = false, this.pool.hasKey(e) || this.pool.addKey(e, []), this.pool.getValue(e).push(t);
        }
        getGo(e) {
            if (!this.pool.hasKey(e))
                return null;
            let t = this.pool.getValue(e);
            if (0 == t.length)
                return null;
            let s = t[0];
            return t.splice(0, 1), s.active = true, s;
        }
        clearGo() {
            let e = this.pool.getValues();
            for (let t = 0; t < e.length; t++)
                for (let s = 0; s < e[t].length; s++) {
                    let i = e[t][s];
                    i && i.destroy();
                }
            this.pool.clear();
        }
    }

    class st extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkEggProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.Tomato, super.init();
        }
        getBuildId() {
            return 1002;
        }
    }

    class tt extends be {
        init() {
            this.parkType = O.ParkEgg, this.sellType = G.Egg, super.init();
        }
        getBuildId() {
            return 1004;
        }
    }

    class ue extends Laya.Script {
        constructor() {
            super(), this.floorId = -1, this.sceneBorder = new Laya.Vector4;
        }
        init() { }
    }

    class ut extends Me {
        init() {
            this.parkType = O.ParkTomatoProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        showArrow(e) {
            super.showArrow(e), !e && this.fx_Arrow && ts.getIns().enableTeach(2);
        }
        getBuildId() {
            return 1001;
        }
    }

    class vt extends Ct {
        constructor() {
            super(), this.curShouTimes = 0, this.needShouTime = 3e3, this.curParkTime = 3e3, this.tempV2 = new Laya.Vector3;
        }
        getWaterId() {
            return 6001;
        }
        init() {
            this.itemType = G.Cashier, super.init(), this.parkCashier = ts.getIns().getNotWaiterCashier(), this.parkCashier.setWaiter(this), this.needShouTime = this.waterConfig.showTime;
        }
        initActionTree() {
            let e = new nt, t = new at;
            t.SetNodeAction(this.moveToPark.bind(this));
            let s = new at;
            s.SetNodeAction(this.showYin.bind(this)), e.AddChildNode(t), e.AddChildNode(s), this.treeFsm.Init(e);
        }
        showYin() {
            return this.curShouTimes += Laya.timer.delta, this.curShouTimes >= this.needShouTime && !this.parkCashier.hasInBuy() && (this.curShouTimes = 0, this.parkCashier.collectMoney(this._node)), this.curParkTime += Laya.timer.delta, this.curParkTime >= this.waterConfig.parkTime && (this.curParkTime = 0, this.parkCashier.setBox(true)), z.Running;
        }
        moveToPark() {
            if (!this.roadPath) {
                let e = this.parkCashier.getShouYinPos();
                this.getNextPath(e), this.toNextMovePos();
            }
            if (this.checkToTarget(this.curMovePos)) {
                this.offectPlayerPos(this.curMovePos);
                let e = new Laya.Vector3;
                return this.parkCashier.getShowYinNode().transform.getForward(e), this.lookForward(e), this.roadPath.length - 1 == this.roadIndex ? (this.roadPath = null, this.fsm.changeState(D.ShouYin), z.Success) : (this.toNextMovePos(), z.Running);
            }
            return this.doMove(), z.Running;
        }
        lookForward(e) {
            Laya.Vector3.add(e, this._node.transform.position, this.tempV2), this.tempV2.y = this._node.transform.position.y, is.getIns().lookAtTarget(this.tempSp, this.tempV2), this.tempSp.transform.rotation.cloneTo(this.rotQua);
        }
    }

    class wt extends be {
        init() {
            this.parkType = O.ParkJuice, this.sellType = G.Juice, super.init();
        }
        getBuildId() {
            return 1008;
        }
    }

    class xt extends Me {
        init() {
            this.showNeedUI = false, this.parkType = O.ParkCoffeeBeanProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), super.init();
        }
        getBuildId() {
            return 1020;
        }
    }

    class yt extends Me {
        init() {
            this.showNeedUI = true, this.parkType = O.ParkMaizeGoodsProcess, this.productItemType = is.getItemTypeByParkType(this.parkType), this.useItemType = G.Maize, super.init();
        }
        getBuildId() {
            return 1007;
        }
    }

    class zt {
        static getCreateList() {
            let e = gameMgr.getIns().getCurLevelId();
            return 1 == e ? [O.ParkCashier, O.ParkTomato, O.ParkTomatoProcess, O.ParkTomatoProcess, O.ParkEgg, O.ParkEggProcess, O.ParkJuice, O.ParkJuiceProcess, O.ParkEggProcess, O.ParkTomatoProcess, O.Plane2, O.ParkMaize, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeGood, O.ParkMaizeGoodsProcess, O.ParkMilk, O.ParkMilkProcess, O.Plane3, O.ParkCashier, O.ParkCracker, O.ParkCrackerProcess, O.ParkCoffeeBean, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.Park2] : 2 == e ? [O.ParkCashier, O.ParkMaize, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkCoffeeBean, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkGroundCoffeeProcess, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkCarrot, O.ParkCarrotProcess, O.ParkCarrotProcess, O.ParkCarrotProcess, O.ParkCarrotProcess, O.ParkApple, O.ParkAppleProcess, O.ParkAppleProcess, O.ParkACJuice, O.ParkACJuiceProcess, O.ParkCashier, O.ParkCoffee, O.ParkCoffeeProcess, O.Park2] : 3 == e ? [O.ParkCashier, O.ParkBabysBreath, O.ParkBabysBreathProcess, O.ParkBabysBreathProcess, O.ParkRose, O.ParkRoseProcess, O.ParkRoseProcess, O.ParkYellowRose, O.ParkYellowRoseProcess, O.ParkYellowRoseProcess, O.ParkBouquet, O.ParkBouquetProcess] : void 0;
        }
        static getCreateList1() {
            let e = gameMgr.getIns().getCurLevelId();
            return 1 == e ? [O.ParkTomatoProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkGroundCoffee, O.ParkGroundCoffeeProcess, O.ParkCoffee, O.ParkCoffeeProcess] : 2 == e ? [O.ParkMilk, O.ParkMilkProcess, O.ParkMaizeProcess, O.ParkMaizeProcess, O.ParkGroundCoffee, O.ParkCoffeeBeanProcess, O.ParkCoffeeBeanProcess, O.ParkCarrotProcess, O.ParkCarrotProcess, O.ParkCarrotProcess, O.ParkCarrotProcess] : 3 == e ? [O.ParkBabysBreathProcess, O.ParkBabysBreathProcess, O.ParkBabysBreathProcess, O.ParkBabysBreathProcess, O.ParkRoseProcess, O.ParkRoseProcess, O.ParkRoseProcess, O.ParkRoseProcess, O.ParkYellowRoseProcess, O.ParkYellowRoseProcess, O.ParkYellowRoseProcess, O.ParkYellowRoseProcess] : void 0;
        }
        static checkCreateBuild(e, t) {
            let s = gameMgr.getIns().getCurLevelId();
            if (1 == s)
                return e == O.ParkJuice ? !!hs.getIns().hasWaiterById(6002, gameMgr.getIns().getCurLevelId()) : e == O.ParkEggProcess && 1 == hs.getIns().getBuildCountByType(O.ParkEggProcess, gameMgr.getIns().getCurLevelId()) ? !!hs.getIns().hasWaiterById(6001, gameMgr.getIns().getCurLevelId()) : e == O.ParkTomatoProcess ? 2 != t || 3 == hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) : e == O.ParkMaizeProcess ? 2 != t || hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) >= 2 : e == O.ParkMaize ? hs.getIns().getPlayerCarryLv() >= 3 : e == O.Plane2 ? hs.getIns().getBuildCountByType(O.ParkTomatoProcess, gameMgr.getIns().getCurLevelId()) >= 3 && hs.getIns().getPlayerCarryLv() >= 3 : e == O.Plane3 ? hs.getIns().getBuildCountByType(O.ParkMaizeProcess, gameMgr.getIns().getCurLevelId()) >= 4 : e == O.ParkGroundCoffee ? hs.getIns().getBuildCountByType(O.ParkCoffeeBeanProcess, gameMgr.getIns().getCurLevelId()) >= 2 : e != O.ParkCoffee || hs.getIns().getBuildCountByType(O.ParkCoffeeBeanProcess, gameMgr.getIns().getCurLevelId()) >= 4;
            if (2 == s) {
                if (e == O.ParkMilk)
                    return hs.getIns().getBuildCountByType(O.ParkMaizeProcess, gameMgr.getIns().getCurLevelId()) >= 2;
                if (e == O.ParkMaizeProcess) {
                    if (2 == t)
                        return hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) >= 4;
                }
                else {
                    if (e == O.ParkGroundCoffee)
                        return hs.getIns().getBuildCountByType(O.ParkCoffeeBeanProcess, gameMgr.getIns().getCurLevelId()) >= 4;
                    if (e == O.ParkCoffeeBeanProcess) {
                        if (2 == t)
                            return hs.getIns().getBuildCountByType(O.ParkCoffeeBeanProcess, gameMgr.getIns().getCurLevelId()) >= 4;
                    }
                    else if (e == O.ParkCarrotProcess && 2 == t)
                        return hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) >= 4;
                }
                return true;
            }
            if (3 == s)
                if (e == O.ParkBabysBreathProcess) {
                    if (2 == t)
                        return hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) >= 2;
                }
                else if (e == O.ParkRoseProcess) {
                    if (2 == t)
                        return hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) >= 2;
                }
                else if (e == O.ParkYellowRoseProcess && 2 == t)
                    return hs.getIns().getBuildCountByType(e, gameMgr.getIns().getCurLevelId()) >= 2;
            return true;
        }
        static checkWaiterOpen(e) {
            let t = e.getWaiterData(), s = hs.getIns().getWaiterCountByID(t.id, gameMgr.getIns().getCurLevelId()), i = gameMgr.getIns().getCurLevelId();
            if (1 == i) {
                if (1 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getProductByType(O.ParkJuiceProcess).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && 2 == hs.getIns().getBuildCountByType(O.ParkCashier, gameMgr.getIns().getCurLevelId()))
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (2 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getProductByType(O.ParkEggProcess).getIsCreate() && 1 == hs.getIns().getBuildCountByType(O.ParkEggProcess, gameMgr.getIns().getCurLevelId()))
                            return void e.openPoint();
                    }
                    else if (1 == s && hs.getIns().getBuildCountByType(O.Plane3, gameMgr.getIns().getCurLevelId()) > 0)
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (3 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getStoreByType(O.ParkMilk).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && hs.getIns().getBuildCountByType(O.Plane3, gameMgr.getIns().getCurLevelId()) > 0)
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (4 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getStoreByType(O.ParkMilk).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && hs.getIns().getBuildCountByType(O.Plane3, gameMgr.getIns().getCurLevelId()) > 0)
                        return void e.openPoint();
                    e.closePoint();
                }
            }
            else if (2 == i) {
                if (1 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getProductByType(O.ParkMilkProcess).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && 2 == hs.getIns().getBuildCountByType(O.ParkCashier, gameMgr.getIns().getCurLevelId()))
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (2 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getProductByType(O.ParkGroundCoffeeProcess).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && hs.getIns().getBuildCountByType(O.ParkCarrot, gameMgr.getIns().getCurLevelId()) > 0)
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (3 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getProductByType(O.ParkMilkProcess).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && hs.getIns().getBuildCountByType(O.ParkCoffeeProcess, gameMgr.getIns().getCurLevelId()) > 0)
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (4 == t.type) {
                    if (0 == s) {
                        if (ts.getIns().getProductByType(O.ParkMilkProcess).getIsCreate())
                            return void e.openPoint();
                    }
                    else if (1 == s && hs.getIns().getBuildCountByType(O.ParkCoffeeProcess, gameMgr.getIns().getCurLevelId()) > 0)
                        return void e.openPoint();
                    e.closePoint();
                }
            }
            else if (3 == i) {
                if (1 == t.type) {
                    if (0 == s && ts.getIns().getStoreByType(O.ParkBabysBreath).getIsCreate())
                        return void e.openPoint();
                    e.closePoint();
                }
                else if (2 == t.type) {
                    if (0 == s && hs.getIns().getBuildCountByType(O.ParkRoseProcess, gameMgr.getIns().getCurLevelId()) >= 2)
                        return void e.openPoint();
                    e.closePoint();
                }
                e.closePoint();
            }
        }
        static checkBuff(e) {
            let t = gameMgr.getIns().getCurLevelId();
            if (1 == t) {
                if (e.getBuffType() == R.Carry) {
                    let t = hs.getIns().getPlayerCarryLv();
                    oe.ins.isMaxById(t) || ts.getIns().getProductByType(O.ParkEggProcess).getIsCreate() && hs.getIns().getBuildCountByType(O.ParkEggProcess, gameMgr.getIns().getCurLevelId()) >= 1 && e.openPoint();
                }
            }
            else if (2 == t) {
                if (e.getBuffType() == R.Carry) {
                    let t = hs.getIns().getPlayerCarryLv();
                    oe.ins.isMaxById(t) || ts.getIns().getStoreByType(O.ParkCoffeeBean).getIsCreate() && e.openPoint();
                }
            }
            else if (3 == t && e.getBuffType() == R.Carry) {
                let t = hs.getIns().getPlayerCarryLv();
                oe.ins.isMaxById(t) || ts.getIns().getStoreByType(O.ParkBabysBreath).getIsCreate() && e.openPoint();
            }
        }
    }

    class _t extends be {
        init() {
            this.parkType = O.ParkCracker, this.sellType = G.Cracker, super.init();
        }
        getBuildId() {
            return 1015;
        }
    }

    class ts extends Laya.Script3D {
        constructor() {
            super(), this.isLoadPlayer = false, this.configMgr = null, this.light = null, this.isOtherLoadOver = false, this.recycleMgr = new ce, this.recycleNode = null, this.loadingAllCount = 2, this.loadingCurCount = 0, this.gameView = null, this.playerMgr = null, this.curPlayerId = -1, this.eveMgr = null, this.model_pos = null, this.showModels = new Object, this.curModel = null, this.curModelPath = null, this.inLoadModelPath = null, this.endMat = null, this.isLoadTex = false, this.level_limit = [], this.level_plane = [], this.stores = [], this.parkCashiers = [], this.tempV1 = new Laya.Vector3, this.products = [], this.moneyNodes = [], this.startPos = null, this.enterPos = [], this.outPos = null, this.createMgrs = [], this.customMats = [], this.waiterCreateMgrs = [], this.buffMgrs = [], this.buffPoss = [], this.isRandomBuff = false, this.waiterUpdateMgrs = [], this.maxCusomCount = 6, this.curCustomCount = 0, this.cusIds = [], this.teachStart = false;
        }
        static getIns() {
            return this.instance || console.error("地图类不存在!"), this.instance;
        }
        static setIns(e) {
            e instanceof ts && (this.instance = e, as.getIns().isWINPlatform() && (window.G_MapMgr = e));
        }
        getNearParkCashier(e) {
            let t, s = 1e8;
            for (let i = 0; i < this.parkCashiers.length; i++) {
                if (!this.parkCashiers[i].getIsCreate())
                    continue;
                Laya.Vector3.subtract(this.parkCashiers[i].node.transform.position, e, this.tempV1), this.tempV1.y = 0;
                let a = Laya.Vector3.scalarLengthSquared(this.tempV1);
                a < s && (t = this.parkCashiers[i], s = a);
            }
            return t;
        }
        getNotWaiterCashier() {
            for (let e = 0; e < this.parkCashiers.length; e++)
                if (this.parkCashiers[e].getIsCreate() && !this.parkCashiers[e].getWaiter())
                    return this.parkCashiers[e];
            return null;
        }
        initStore() {
            let e = [];
            is.getIns().getChildBySgin(this.owner, "m_Store_", e);
            for (let t = 0; t < e.length; t++) {
                let s = e[t], i = s.name.split("_"), a = parseInt(i[2]), n = null;
                a == O.ParkCashier ? (n = s.addComponent($e), this.parkCashiers.push(n)) : a == O.ParkEgg ? n = s.addComponent(tt) : a == O.ParkTomato ? n = s.addComponent(gt) : a == O.ParkJuice ? n = s.addComponent(wt) : a == O.ParkMaize ? n = s.addComponent(ft) : a == O.Trash ? n = s.addComponent(Tt) : a == O.ParkMilk ? n = s.addComponent(kt) : a == O.ParkMaizeGood ? n = s.addComponent(St) : a == O.ParkCracker ? n = s.addComponent(_t) : a == O.ParkCoffeeBean ? n = s.addComponent(Ut) : a == O.ParkGroundCoffee ? n = s.addComponent(bt) : a == O.ParkCoffee ? n = s.addComponent(Vt) : a == O.ParkCarrot ? n = s.addComponent(Gt) : a == O.ParkApple ? n = s.addComponent(Wt) : a == O.ParkACJuice ? n = s.addComponent(Ht) : a == O.ParkRose ? n = s.addComponent(qt) : a == O.ParkBabysBreath ? n = s.addComponent(jt) : a == O.ParkYellowRose ? n = s.addComponent(Jt) : a == O.ParkBouquet && (n = s.addComponent(Xt)), n && (n.init(), this.stores.push(n));
            }
            let t = new Map;
            for (let e = 0; e < this.stores.length; e++)
                if (this.stores[e].getParkType() != O.Trash)
                    if (t.has(this.stores[e].getParkType())) {
                        let s = t.get(this.stores[e].getParkType());
                        hs.getIns().getBuildCountByType(this.stores[e].getParkType(), gameMgr.getIns().getCurLevelId()) > s ? (this.stores[e].openStore(), t.delete(this.stores[e].getParkType()), t.set(this.stores[e].getParkType(), s + 1), this.removeCreateBuild(this.stores[e].getParkType())) : this.stores[e].closeStore();
                    }
                    else
                        hs.getIns().getBuildCountByType(this.stores[e].getParkType(), gameMgr.getIns().getCurLevelId()) > 0 ? (this.stores[e].openStore(), t.set(this.stores[e].getParkType(), 1), this.removeCreateBuild(this.stores[e].getParkType())) : this.stores[e].closeStore();
                else
                    this.stores[e].openStore();
        }
        getStoreByType(e) {
            for (let t = 0; t < this.stores.length; t++)
                if (this.stores[t].getParkType() == e)
                    return this.stores[t];
            return null;
        }
        initProduct() {
            let e = [];
            is.getIns().getChildBySgin(this.owner, "m_product_", e);
            for (let t = 0; t < e.length; t++) {
                let s = e[t], i = s.name.split("_"), a = parseInt(i[2]), n = null;
                a == O.ParkEggProcess ? n = s.addComponent(st) : a == O.ParkTomatoProcess ? n = s.addComponent(ut) : a == O.ParkMaizeProcess ? n = s.addComponent(It) : a == O.ParkMaizeGoodsProcess ? n = s.addComponent(yt) : a == O.ParkJuiceProcess ? n = s.addComponent(Pt) : a == O.ParkMilkProcess ? n = s.addComponent(Bt) : a == O.ParkCrackerProcess ? n = s.addComponent(Mt) : a == O.ParkCoffeeBeanProcess ? n = s.addComponent(xt) : a == O.ParkGroundCoffeeProcess ? n = s.addComponent(Dt) : a == O.ParkCoffeeProcess ? n = s.addComponent(Et) : a == O.ParkCarrotProcess ? n = s.addComponent(Ft) : a == O.ParkAppleProcess ? n = s.addComponent(Rt) : a == O.ParkACJuiceProcess ? n = s.addComponent(Ot) : a == O.ParkRoseProcess ? n = s.addComponent(Qt) : a == O.ParkBabysBreathProcess ? n = s.addComponent(Zt) : a == O.ParkYellowRoseProcess ? n = s.addComponent($t) : a == O.ParkBouquetProcess && (n = s.addComponent(es)), n && (n.init(), this.products.push(n));
            }
            let t = new Map;
            for (let e = 0; e < this.products.length; e++)
                if (t.has(this.products[e].parkType)) {
                    let s = t.get(this.products[e].parkType);
                    hs.getIns().getBuildCountByType(this.products[e].parkType, gameMgr.getIns().getCurLevelId()) > s ? (this.products[e].openStore(), t.delete(this.products[e].parkType), t.set(this.products[e].parkType, s + 1), this.removeCreateBuild(this.products[e].parkType)) : this.products[e].closeStore();
                }
                else
                    hs.getIns().getBuildCountByType(this.products[e].parkType, gameMgr.getIns().getCurLevelId()) > 0 ? (this.products[e].openStore(), t.set(this.products[e].parkType, 1), this.removeCreateBuild(this.products[e].parkType)) : this.products[e].closeStore();
        }
        initMoney() {
            let e = this.owner.getChildByName("money");
            is.getIns().getChildBySgin(e, "m_money", this.moneyNodes);
            for (let e = 0; e < this.moneyNodes.length; e++) {
                let t = this.moneyNodes[e].getComponent(Laya.PhysicsCollider);
                t.canCollideWith = r.player, t.collisionGroup = r.money, hs.getIns().hasNewPlayer() && ts.isShowMoney || (this.moneyNodes[e].active = false);
            }
            ts.isShowMoney = false;
        }
        onDestroy() {
            ts.instance = null, t$1.getIns().removeEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this);
        }
        toStart(e) {
            this.loadMap(gameMgr.getIns().getCurLevelData(), () => {
                is.getIns().handlerFun(e);
            }, hs.getIns().getSkinId());
        }
        init() {
            ts.setIns(this);
            this.createList = zt.getCreateList();
            this.createList1 = zt.getCreateList1();
            this.outPos = is.getIns().seekNodeByName(this.owner, "outPos");
            let e = is.getIns().seekNodeByName(this.owner, "m_door");
            is.getIns().getChildBySgin(e, "enterPos_", this.enterPos);
            this.light = is.getIns().seekNodeByName(this.owner, "light");
            this.startPos = is.getIns().seekNodeByName(this.owner, "startPos");
            let s = [];
            is.getIns().getChildBySgin(this.owner, "m_cretaeBuildRang", s);
            for (let e = 0; e < s.length; e++) {
                let t = s[e].addComponent(Ve);
                t.init();
                t.hide();
                this.createMgrs.push(t);
            }
            this.initWall();
            this.initCamera();
            this.initStore();
            this.initProduct();
            this.initMoney();
            this.initWaiterUpPoint();
            this.initWaiterCreatePoint();
            this.checkWaiterCreatePoint();
            this.initBuff();
            this.initVideoBuff();
            let a = this.owner.getChildByName("Scene").getChildByName("qiang");
            let n = a.getChildByName("limit");
            if (n) {
                is.getIns().getChildBySgin(n, "level_limit_", this.level_limit);
                for (let e = 0; e < this.level_limit.length; e++) {
                    let t = this.level_limit[e].getComponent(Laya.PhysicsCollider);
                    t.canCollideWith = r.player;
                    t.collisionGroup = r.item;
                }
            }
            is.getIns().getChildBySgin(a, "m_plane_", this.level_plane);
            this.checkLimitWall();
            let o = [];
            is.getIns().getChildBySgin(this.owner.getChildByName("Scene"), "m_ATM", o);
            for (let e = 0; e < o.length; e++) {
                o[e].addComponent(qe).init();
            }
            this.initLight(this.light);
            this.model_pos = is.getIns().seekNodeByName(this.owner, "model_pos");
            let h = new Laya.Sprite3D("recycleNode");
            this.owner.addChild(h);
            is.getIns().resetTransform(h);
            this.recycleNode = h;
            let l = this.owner.getChildByName("NextRang");
            if (l) {
                let e = l.addComponent(Fe);
                e.init();
                e.setType(W.Next);
                this.nextRang = e;
                this.checkNextRangOpen();
            }
            let d = this.owner.getChildByName("LastRang");
            if (d) {
                let e = d.addComponent(Fe);
                e.init();
                e.setType(W.Last);
            }
            t$1.getIns().addEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this);
            let c = this.owner.getChildByName("m_car");
            if (c) {
                let e = c.addComponent(Kt);
                e.init();
                this.carMgr = e;
            }
        }
        initVideoBuff() {
            let e = is.getIns().seekNodeByName(this.owner, "VideoBuff");
            if (e) {
                let t = [];
                for (let s = 0; s < e.numChildren; s++) {
                    let i = e.getChildAt(s).addComponent(ke);
                    i.init(), i.closePoint(), t.push(i);
                }
                let s = 0;
                s = (s = 1 == gameMgr.getIns().getCurLevelId() ? ee.getIns().getMistakeData().Store1BuffCount : 2 == gameMgr.getIns().getCurLevelId() ? ee.getIns().getMistakeData().Store2BuffCount : ee.getIns().getMistakeData().Store3BuffCount) > t.length ? t.length : s;
                let i = is.getIns().getRandomArrayElements(t, s);
                for (let e = 0; e < i.length; e++)
                    i[e].openPoint();
            }
        }
        checkNextRangOpen() {
            let e = gameMgr.getIns().getCurLevelId() + 1;
            hs.getIns().markIsOpen(e) ? (this.nextRang.openPark(), 2 == e ? this.removeCreateBuild(O.Park2) : 3 == e && this.removeCreateBuild(O.Park3)) : this.nextRang.closePark();
        }
        loadCustomMats(e) {
            let t = 0;
            this.customMats.splice(0, this.customMats.length);
            let s = s => {
                t++, this.customMats.push(s), 6 == t && e && e();
            };
            for (let e = 1; e <= 6; e++)
                Laya.Material.load("sub/online/Sprites/Conventional/Assets/Resource/Animator/Materials/custom_mat_{0}.lmat".format(e), Laya.Handler.create(this, e => {
                    s(e);
                }));
        }
        getRadomMat() {
            return 0 == this.customMats.length ? null : this.customMats[is.getIns().randomNum(0, this.customMats.length - 1)];
        }
        getPlaneLimitWallByPlaneType(e) {
            if (0 != this.level_limit.length)
                return e == O.Plane2 ? this.level_limit[0] : e == O.Plane3 ? this.level_limit[1] : null;
        }
        playerUpCallBack() {
            this.showNextCreate(null, 1), this.showNextCreate(null, 2);
        }
        checkLimitWall() {
            for (let e = 0; e < this.level_limit.length; e++)
                if (0 == e) {
                    let t = hs.getIns().getBuildCountByType(O.Plane2, gameMgr.getIns().getCurLevelId()) > 0;
                    t && this.removeCreateBuild(O.Plane2), this.level_limit[e].active = !t, this.level_plane[e].active = t;
                }
                else if (1 == e) {
                    let t = hs.getIns().getBuildCountByType(O.Plane3, gameMgr.getIns().getCurLevelId()) > 0;
                    this.level_limit[e].active = !t, this.level_plane[e].active = t, t && this.removeCreateBuild(O.Plane3);
                }
        }
        openPlane(e) {
            0 != this.level_limit.length && (e == O.Plane2 ? (this.level_limit[0].active = false, this.level_plane[0].active = true) : e == O.Plane3 && (this.level_limit[1].active = false, this.level_plane[1].active = true));
        }
        initWall() {
            let e = [], t = is.getIns().seekNodeByName(this.owner, "qiang");
            is.getIns().getChildBySgin(t, "wall_", e);
            for (let t = 0; t < e.length; t++) {
                let s = e[t].getComponent(Laya.PhysicsCollider);
                s.canCollideWith = r.player, s.collisionGroup = r.item;
            }
        }
        initWaiterCreatePoint() {
            let e = is.getIns().seekNodeByName(this.owner, "WaiterCreate");
            for (let t = 0; t < e.numChildren; t++) {
                let s = e.getChildAt(t), i = s.addComponent(Oe), a = Ge.ins.getDataById(parseInt(s.name));
                i.init(a), this.waiterCreateMgrs.push(i);
            }
        }
        createCallBack(e, t) {
            this.showNextCreate(e, 1), this.showNextCreate(null, 2), t != O.None && (t == O.ParkEggProcess ? this.checkBuff() : t == O.ParkMaizeProcess && this.checkRandomBuff(), this.addCusType(), this.checkWaiterCreatePointByType(), 1 == gameMgr.getIns().getCurLevelId() && t == O.ParkTomatoProcess && 1 == hs.getIns().getBuildCountByType(t, gameMgr.getIns().getCurLevelId()) && (this.teachStart = true, this.enableTeach(1)));
        }
        checkWaiterCreatePointByType() {
            for (let e = 0; e < this.waiterCreateMgrs.length; e++)
                this.checkWaiterOpen(this.waiterCreateMgrs[e]);
        }
        checkWaiterOpen(e) {
            0 != this.products.length && 0 != this.stores.length && zt.checkWaiterOpen(e);
        }
        useCusCountBuff(e) {
            this.maxCusomCount = e ? 12 : 6;
        }
        checkWaiterCreatePoint() {
            for (let e = 0; e < this.waiterCreateMgrs.length; e++) {
                let t = this.waiterCreateMgrs[e].getWaiterData(), s = hs.getIns().getWaiterData(t.id, gameMgr.getIns().getCurLevelId());
                if (s) {
                    let t = s.waiterCount;
                    if (6001 == s.waiterId) {
                        let e = hs.getIns().getBuildCountByType(O.ParkCashier, gameMgr.getIns().getCurLevelId());
                        t = t > e ? e : t, s.waiterCount = t, hs.getIns().save();
                    }
                    for (let s = 0; s < t; s++)
                        this.waiterCreateMgrs[e].loadWaiter();
                    this.waiterCreateMgrs[e].closePoint();
                }
                this.checkWaiterOpen(this.waiterCreateMgrs[e]);
            }
        }
        initBuff() {
            let e = is.getIns().seekNodeByName(this.owner, "Buff_Pos");
            is.getIns().getChildBySgin(e, "b", this.buffPoss);
            let t = is.getIns().seekNodeByName(this.owner, "Buff");
            for (let e = 0; e < t.numChildren; e++) {
                let s = t.getChildAt(e).addComponent(ke);
                s.init(), s.closePoint(), this.buffMgrs.push(s);
            }
            this.checkBuff(), this.checkRandomBuff();
        }
        checkRandomBuff() {
            this.isRandomBuff || hs.getIns().getBuildCountByType(O.ParkMaizeProcess, gameMgr.getIns().getCurLevelId()) > 0 && this.radomBuff();
        }
        radomBuff() {
            this.isRandomBuff = true;
            let e = is.getIns().randomNum(0, this.buffMgrs.length - 2), t = is.getIns().randomNum(0, this.buffPoss.length - 1);
            for (let e = 0; e < this.buffMgrs.length; e++)
                this.buffMgrs[e].getBuffType() != R.Carry && this.buffMgrs[e].closePoint();
            let s = this.buffMgrs[e], i = s.node.transform.position, a = this.buffPoss[t].transform.position;
            i.x = a.x, i.z = a.z, s.node.transform.position = i, s.openPoint(), Laya.timer.once(6e4, this, this.radomBuff);
        }
        checkBuff() {
            for (let e = 0; e < this.buffMgrs.length; e++) {
                let t = this.buffMgrs[e];
                zt.checkBuff(t);
            }
        }
        initWaiterUpPoint() {
            let e = is.getIns().seekNodeByName(this.owner, "WaiterUpdate");
            for (let t = 0; t < e.numChildren; t++) {
                let s = e.getChildAt(t), i = s.addComponent(Ke);
                i.init(), this.waiterUpdateMgrs.push(i);
                let a = parseInt(s.name), n = hs.getIns().getWaiterData(a, gameMgr.getIns().getCurLevelId());
                if (n) {
                    He.ins.isMaxLv(n) ? i.closePoint() : i.openPoint();
                }
                else
                    i.closePoint();
            }
        }
        openWaiterUpdate() {
            for (let e = 0; e < this.waiterUpdateMgrs.length; e++) {
                let t = hs.getIns().getWaiterData(this.waiterUpdateMgrs[e].getWaiterData().id, gameMgr.getIns().getCurLevelId());
                if (t) {
                    He.ins.isMaxLv(t) ? this.waiterUpdateMgrs[e].closePoint() : this.waiterUpdateMgrs[e].openPoint();
                }
                else
                    this.waiterUpdateMgrs[e].closePoint();
            }
        }
        getStoreRandomStandPos(e) {
            return this.getStoreByType(e).getRandomStandPos();
        }
        getProductRandomStandPos(e) {
            return this.getProductIsCreateAndHasProductByType(e).getRandomStandPos();
        }
        getProducts() {
            return this.products;
        }
        getProductIsCreateAndHasProductByType(e) {
            let t;
            for (let s = 0; s < this.products.length; s++)
                if (this.products[s].parkType == e && this.products[s].getIsCreate() && (t = this.products[s]).hasProduct())
                    return t;
            return t;
        }
        getProductByType(e) {
            for (let t = 0; t < this.products.length; t++)
                if (this.products[t].parkType == e)
                    return this.products[t];
            return null;
        }
        hasStoreByType(e) {
            for (let t = 0; t < this.stores.length; t++)
                if (this.stores[t].getParkType() == e)
                    return true;
            return false;
        }
        checkCreateCustom() {
            this.curCustomCount >= this.maxCusomCount || this.hasStoreByType(O.ParkCashier) && 0 != this.cusIds.length && (this.curCustomCount++, this.loadCustomById(this.cusIds[is.getIns().randomNum(0, this.cusIds.length - 1)], null));
        }
        addCusType() {
            let e = pt.ins.getAllDatas();
            for (let t = 0; t < e.length; t++)
                this.cusIds.indexOf(e[t].id) >= 0 || this.storeHasOpen(e[t].getBuyTypes()) && this.cusIds.push(e[t].id);
        }
        storeHasOpen(e) {
            for (let t = 0; t < e.length; t++) {
                let s = this.getStoreByType(is.getParkTypeTypeByItemType(e[t])), i = this.getProductByType(is.getProductTypeByItemType(e[t]));
                if (!s || !i)
                    return false;
                if (!s.getIsCreate() || !i.getIsCreate())
                    return false;
            }
            return true;
        }
        enableTeach(e) {
            if (this.teachStart)
                if (1 == e) {
                    for (let e = 0; e < this.products.length; e++)
                        if (this.products[e].parkType == O.ParkTomatoProcess && this.products[e].getIsCreate()) {
                            this.products[e].showArrow(true), me.teachId++, gameMgr.getIns().gameView.showTeach(2, true);
                            break;
                        }
                }
                else if (2 == e) {
                    for (let e = 0; e < this.stores.length; e++)
                        if (this.stores[e].getParkType() == O.ParkTomato && this.stores[e].getIsCreate()) {
                            this.stores[e].showArrow(true);
                            break;
                        }
                }
                else if (3 == e) {
                    for (let e = 0; e < this.stores.length; e++)
                        if (this.stores[e].getParkType() == O.ParkCashier && this.stores[e].getIsCreate()) {
                            this.stores[e].showArrow(true);
                            break;
                        }
                    this.teachStart = false;
                }
        }
        customByOver(e) {
            this.curCustomCount--, e.owner.destroy();
        }
        getCreateMgr() {
            for (let e = 0; e < this.createMgrs.length; e++)
                if (!this.createMgrs[e].getHasShow())
                    return this.createMgrs[e];
            return null;
        }
        recycleCreateMgr(e) {
            e && e.hide();
        }
        showNextCreate(e, t) {
            this.recycleCreateMgr(e);
            let s = this.createList;
            if (1 == t) {
                s = this.createList;
            }
            else {
                if (2 != t) {
                    return void console.error("没有创建的线路");
                }
                s = this.createList1;
            }
            if (0 == s.length) {
                return void console.log("没有创建的list");
            }
            let i = s[0];
            if (!this.checkCreateBuild(i, t)) {
                return void console.log("未达条件:", i);
            }
            let a = this.getCreateMgr();
            if (a) {
                if (console.log("当前创建:", i), s.splice(0, 1), i != O.Plane2 && i != O.Plane3) {
                    if (i != O.Park2 && i != O.Park3) {
                        for (let e = 0; e < this.stores.length; e++) {
                            if (this.stores[e].getParkType() == i && !this.stores[e].getIsCreate()) {
                                a.cretaePark(this.stores[e], t);
                                break;
                            }
                        }
                        for (let e = 0; e < this.products.length; e++) {
                            if (this.products[e].parkType == i && !this.products[e].getIsCreate()) {
                                a.createProduct(this.products[e], t);
                                break;
                            }
                        }
                    }
                    else {
                        a.createStore(i, t);
                    }
                }
                else {
                    a.createPlane(i, t);
                }
            }
            else {
                console.error("没有创建对象");
            }
        }
        checkCreateBuild(e, t) {
            return this.hasInCreateBuildByIndex(t) ? (console.log("in create:", e), false) : zt.checkCreateBuild(e, t);
        }
        hasInCreateBuildByIndex(e) {
            for (let t = 0; t < this.createMgrs.length; t++)
                if (this.createMgrs[t].getCreateIndex() == e)
                    return this.createMgrs[t].getHasShow();
            return false;
        }
        getInCreateBuildType(e) {
            for (let t = 0; t < this.createMgrs.length; t++)
                if (this.createMgrs[t].getCreateIndex() == e && this.createMgrs[t].getHasShow())
                    return this.createMgrs[t].getParkType();
            return O.None;
        }
        removeCreateBuild(e) {
            let t = this.createList.indexOf(e);
            if (t >= 0) {
                this.createList.splice(t, 1);
            }
            else {
                if ((t = this.createList1.indexOf(e)) >= 0) {
                    this.createList1.splice(t, 1);
                }
            }
        }
        initLight(e) {
            e.shadowMode = Laya.ShadowMode.None;
        }
        initCamera() {
            let e = is.getIns().seekNodeByName(this.owner, "gameCamera").addComponent(de);
            this.cameraMgr = e, e.init();
        }
        setGameView(e) {
            e instanceof me && (this.gameView = e);
        }
        isReady() {
            return this.isLoadPlayer && this.isOtherLoadOver;
        }
        initMap(e) {
            this.init(), is.getIns().handlerFun(e);
        }
        loadMap(e, t, s) {
            this.loadingCurCount = 0, this.loadingCurCount++, this.cleanScenes(), this.loadingCurCount++;
            let i = new Promise(e => {
                this.loadMainPlayer(s, () => {
                    this.loadingCurCount++, e(null);
                });
            }), a = new Promise(e => {
                this.loadCustomMats(() => {
                    e(null);
                });
            }), n = new Promise(t => {
                ot.getIns().loadMap(e.config, () => {
                    ot.getIns().createNavMeshGroup(this.startPos.transform.position), this.loadingCurCount++, t(null);
                });
            });
            Promise.all([i, a, n]).then(() => {
                this.loadingCurCount = this.loadingAllCount, is.getIns().handlerFun(t);
            });
        }
        loadEve(e, t) {
            if (this.eveMgr) {
                if (this.eveMgr.floorId == e)
                    return void is.getIns().handlerFun(t);
                this.eveMgr.owner.destroy(), this.eveMgr = null;
            }
            let s = n.resPath.format("Eve" + e);
            ye.getIns().preload([s], () => {
                if (!this || !this.owner || this.owner.destroyed)
                    return;
                let i = ye.getIns().getNode(s);
                this.owner.addChild(i), is.getIns().resetTransform(i);
                let a = i.addComponent(ue);
                a.init(), a.floorId = e, this.eveMgr = a, is.getIns().handlerFun(t);
            });
        }
        loadMainPlayer(e, t) {
            this.isLoadPlayer = false;
            let s = m.ins.getDataById(e), i = n.resPath.format(s.model);
            ye.getIns().preload([i], () => {
                let e = ye.getIns().getNode(i);
                this.owner.addChild(e);
                let a = e.addComponent(je);
                a.setPlayerData(s), a.init();
                let n = this.startPos;
                if (a.setStartPos(n.transform.position, n.transform.rotationEuler), a.enablePeople(), this.playerMgr = a, this.isLoadPlayer = true, as.getIns().isWINPlatform()) {
                    let t = e.addComponent(Ie);
                    t.init(), t.setActor(a), t.resgistLis();
                }
                is.getIns().handlerFun(t);
            });
        }
        loadCustomById(e, t) {
            let s = pt.ins.getDataById(e), i = n.resPath.format(s.model);
            ye.getIns().preload([i], () => {
                let e = ye.getIns().getNode(i);
                this.owner.addChild(e);
                let a = e.addComponent(dt);
                a.setCustomData(s), a.init();
                let n = this.getEnterPos();
                a.setStartPos(n.transform.position, n.transform.rotationEuler), a.enablePeople(), a.toShopping(), is.getIns().handlerFun(t);
            });
        }
        getEnterPos() {
            return this.enterPos[is.getIns().randomNum(0, this.enterPos.length - 1)];
        }
        loadWaiter(e, t, s, i) {
            let a = m.ins.getDataById(1), r = n.resPath.format(a.model);
            ye.getIns().preload([r], () => {
                let a = ye.getIns().getNode(r);
                this.owner.addChild(a);
                let n = null;
                if (2 == e ? n = a.addComponent(Lt) : 3 == e ? n = a.addComponent(Nt) : 1 == e ? n = a.addComponent(vt) : 4 == e && (n = a.addComponent(Yt)), n) {
                    n.init();
                    let e = t;
                    n.setStartPos(e.transform.position, e.transform.rotationEuler), n.enablePeople(), n.startWaiter(), is.getIns().handlerFun(s);
                }
                else
                    console.error("问题服务员", e, i);
            });
        }
        changePlayer(e, t, s) {
            return this.curPlayerId == e ? (console.error("同样的玩家"), void is.getIns().handlerFun(t)) : this.isLoadPlayer ? (this.clearPlayer(), void this.loadMainPlayer(e, t)) : (as.getIns().showToast("正在切换玩家"), void is.getIns().handlerFun(t));
        }
        loadLevelEnd() {
            console.log("关卡加载完成"), this.showNextCreate(null, 1), this.showNextCreate(null, 2), this.addCusType(), Laya.timer.loop(5e3, this, this.checkCreateCustom), t$1.getIns().dispatchEvent(i.LOADMAPEND);
        }
        hasPlayer() {
            return this.playerMgr;
        }
        showChangeEf() {
            gameMgr.getIns().canshow3DImage();
        }
        randomBuff() {
            gameMgr.getIns().isGameStart();
        }
        getLoadingPro() {
            return this.loadingCurCount / this.loadingAllCount;
        }
        cleanScenes(e = false) {
            this.configMgr && (this.configMgr.owner.destroy(), this.configMgr = null), this.clearPlayer(), this.recycleMgr.clearGo(), this.isLoadPlayer = false, this.isOtherLoadOver = false, Laya.Resource.destroyUnusedResources();
        }
        clearPlayer() {
            this.playerMgr && this.playerMgr.owner && !this.playerMgr.destroyed && this.playerMgr.owner.destroy(), this.playerMgr = null, this.curPlayerId = -1;
        }
        getDis() {
            return this.configMgr ? this.configMgr.getRoadDis() : 0;
        }
        getPlayerDis() {
            return 0;
        }
        reborn() {
            this.playerMgr && this.playerMgr.reborn(), Laya.timer.once(1500, this, () => {
                gameMgr.getIns().isGameStart();
            });
        }
    }
    ts.isShowMoney = true;
    ts.instance = null;

    class ss extends Laya.Script3D {
        constructor() {
            super(), this.isAutoRecycle = false, this.key = null;
        }
        recycle(e) {
            Laya.timer.once(1e3 * e, this, function () {
                this && this.owner && !this.owner.destroyed && (this.isAutoRecycle ? ts.getIns().recycleMgr.recycle(this.key, this.owner) : this.owner.destroy());
            });
        }
        setRecycleKey(e) {
            this.key = e;
        }
        setAutoRecycle(e) {
            this.isAutoRecycle = e;
        }
    }

    class is {
        constructor() {
            this.btnTweens = new j, this.showBanner = false, this.forwardTemp = new Laya.Vector3, this.upVec = new Laya.Vector3(0, 1, 0), this.downVec = new Laya.Vector3(0, -1, 0), this.inVec = new Laya.Vector3(-1, 0, 0), this.targetTemp = new Laya.Vector3, this.showBannerDelay = 7e4, this.showBannerTimer = 0, this.forwardVec = new Laya.Vector3(0, 0, 1), this.backVec = new Laya.Vector3(0, 0, -1), this.angleBase = 180 / Math.PI, this.huorSpan = 1 / 3600, this.minuteSpan = 1 / 60, this.tempV1 = new Laya.Vector3, this.rotTemp = new Laya.Vector3, this.init();
        }
        static getIns() {
            return this.instance || (this.instance = new is), this.instance;
        }
        init() {
            this.log("Tools init");
        }
        log(e, ...t) {
            Laya.Browser.onPC && console.log(e, t);
        }
        error(e, ...t) {
            console.error(e, t);
        }
        handlerFun(e, t = null, s = null, i = null) {
            null != e && e(t, s, i);
        }
        getVector3(e) {
            if (e) {
                let t = e.split("&");
                return new Laya.Vector3(-parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]));
            }
            return this.error("vec输入错误:", e), null;
        }
        getVector4(e) {
            if (e) {
                let t = e.split("&");
                return new Laya.Vector4(parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]));
            }
            return this.error("vec输入错误:", e), null;
        }
        getRot(e) {
            if (e) {
                let t = e.split("&"), s = this.eularToQuaternion(parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]));
                return s.x = -s.x, s.w = -s.w, s;
            }
            return this.log("rot输入错误:", e), null;
        }
        eularToQuaternion(e, t, s) {
            let i = e / 180 * Math.PI, a = t / 180 * Math.PI, n = s / 180 * Math.PI, r = Math.cos(a / 2) * Math.sin(i / 2) * Math.cos(n / 2) + Math.sin(a / 2) * Math.cos(i / 2) * Math.sin(n / 2), o = Math.sin(a / 2) * Math.cos(i / 2) * Math.cos(n / 2) - Math.cos(a / 2) * Math.sin(i / 2) * Math.sin(n / 2), h = Math.cos(a / 2) * Math.cos(i / 2) * Math.sin(n / 2) - Math.sin(a / 2) * Math.sin(i / 2) * Math.cos(n / 2), l = Math.cos(a / 2) * Math.cos(i / 2) * Math.cos(n / 2) + Math.sin(a / 2) * Math.sin(i / 2) * Math.sin(n / 2);
            return new Laya.Quaternion(r, o, h, l);
        }
        resetTransform(e) {
            if (e) {
                let t = e.transform.localScale;
                is.oneVec.cloneTo(t), e.transform.localScale = t, t = e.transform.localPosition, is.zeroVec.cloneTo(t), e.transform.localPosition = t, this.resetRot(e);
            }
        }
        resetRot(e) {
            if (e) {
                let t = e.transform.localRotationEuler;
                is.zeroVec.cloneTo(t), e.transform.localRotationEuler = t;
            }
        }
        removeChild(e) {
            e && e._children && 0 != e.numChildren && e.destroyChildren();
        }
        getChildBySgin(e, t, s) {
            if (!e)
                return;
            let i = null;
            for (var a = 0; a < e._children.length; a++)
                0 == (i = e._children[a]).name.indexOf(t) && s.push(i), this.getChildBySgin(i, t, s);
        }
        getMatInChild(e, t) {
            for (var s = 0; s < e._children.length; s++) {
                if (e._children[s].meshRenderer) {
                    let a = e._children[s].meshRenderer.materials;
                    for (var i = 0; i < a.length; i++)
                        t.push(a[i]);
                }
                this.getMatInChild(e._children[s], t);
            }
        }
        setEnableInstancing(e) {
            let t = null;
            for (var s = 0; s < e.length; s++)
                (t = e[s]) && (t._shader._enableInstancing = true);
        }
        removeCollder(e) {
            let t = e.getComponent(Laya.PhysicsCollider);
            t && t.destroy();
        }
        playEffect(e) {
            e.particleSystem && e.particleSystem.play();
            for (let t = 0; t < e._children.length; t++)
                this.playEffect(e._children[t]);
        }
        compileShader(e, t) {
            0 == e.length && this.handlerFun(t);
            let s = null, i = () => {
                if (0 == e.length)
                    return console.log("shder编译完成"), this.handlerFun(t), void Laya.timer.clear(this, i);
                for (let t = 0; t < 6 && t < e.length; t++)
                    s = e.shift(), Laya.Shader3D.compileShaderByDefineNames(s.shaderName, s.subShaderIndex, s.passIndex, s.defineNames);
            };
            Laya.timer.loop(20, this, i);
        }
        onShareTouched(e, t) {
            let s = new P$1;
            s.title = "敢接受我的挑战码!", s.success = e, s.fail = t, L.getIns().shareAppMessage(s);
        }
        shareOrAd(e, t) {
            FBInstantManager.Instance.showRewardedVideo(() => {
                e && e();
            });
        }
        createBanner(e = null, t = null) {
            this.showBanner = true;
            (() => {
                this.showBanner && (L.getIns().showBanner(), is.getIns().handlerFun(t));
            })();
        }
        hintBanner() {
            this.hintBannerNotSgin(), this.showBanner = false;
        }
        hintBannerNotSgin() {
            L.getIns().desBanner();
        }
        reShowBanner() {
            this.showBanner && is.getIns().createBanner();
        }
        cretaeBannerAyn() {
            t$1.getIns().dispatchEvent(i.EN_SHOW_BANNER_AD);
        }
        setAdBtnIcon(e, t = false) {
            if (t)
                e instanceof Laya.Image && (L.getIns().hasVideo() ? e.skin = "page/ad/video_icon.png" : e.skin = "page/ad/share_icon.png");
            else if (e) {
                let t = e.getChildByName("icon");
                t instanceof Laya.Image && (L.getIns().hasVideo() ? t.skin = "page/ad/video_icon.png" : t.skin = "page/ad/share_icon.png");
            }
        }
        getColor(e) {
            if (!e)
                return null;
            let t = e.split("&"), s = new Laya.Vector4(0, 0, 0, 0);
            return s.x = parseFloat(t[0]) / 255, s.y = parseFloat(t[1]) / 255, s.z = parseFloat(t[2]) / 255, s.w = 1, s;
        }
        stopAnim(e) {
            if (!e)
                return;
            let t = e.getComponent(Laya.Animator);
            t && (t.speed = 0);
            for (var s = 0; s < e._children.length; s++)
                (t = e._children[s].getComponent(Laya.Animator)) && (t.speed = 0);
        }
        playBtnShow(e, t, s) {
            as.getIns().isVIVOPlatform() || as.getIns().isOPPOPlatform() || as.getIns().isTTPlatform() || as.getIns().isWINPlatform() ? is.getIns().handlerFun(t) : this.playBtnShowNotLimit(e, t, s);
        }
        playBtnShowNotLimit(e, t, s) {
            e && !e.destroyed && (e.visible = false, e._tween = Laya.Tween.to(e, {
                visible: true
            }, s), Laya.timer.once(s, null, function () {
                e && !e.destroyed && (e._tween = null, e.visible = true, this.handlerFun(t));
            }.bind(this)));
        }
        bounceScale(e, t, s, i, a = 1, n = 1.2) {
            e.scaleX = a, e.scaleY = a, Laya.Tween.to(e, {
                scaleX: n,
                scaleY: n
            }, t, Laya.Ease.bounceOut), Laya.timer.once(t, this, function () {
                e && !e.destroyed && (Laya.Tween.to(e, {
                    scaleX: a,
                    scaleY: a
                }, s, Laya.Ease.linearIn), Laya.timer.once(s, null, function () {
                    is.getIns().handlerFun(i);
                }));
            });
        }
        showToast(e, t) {
            e && (t || (t = ""), as.getIns().showToast(t));
        }
        createG0ByPrefabs(e, t, s = false) {
            let i = new Laya.Prefab, a = function (e) {
                i.json = e;
                let s = i.create();
                is.getIns().handlerFun(t, s);
            };
            s ? a(Laya.loader.getRes(e)) : Laya.loader.create(e, Laya.Handler.create(this, e => {
                a(e);
            }));
        }
        createPrefab(e) {
            let t = new Laya.Prefab;
            return t.json = this.getUiJson(e), t.create();
        }
        getUiJson(e) {
            return Laya.loader.getRes(e);
        }
        loadUiJson(e, t) {
            let s = e.length;
            if (0 == s)
                return void this.handlerFun(t);
            let i = 0, a = () => {
                ++i == s && this.handlerFun(t);
            };
            for (let t = 0; t < e.length; t++)
                Laya.loader.create(e[t], Laya.Handler.create(this, function (e) {
                    a();
                }));
        }
        lerp(e, t, s) {
            return s <= 0 ? e : s >= 1 ? t : e + (t - e) * s;
        }
        bottomDoMove(e, t, s, i, a, n) {
            if (as.getIns().isTTPlatform())
                return e.y = s, void this.handlerFun(i, false);
            let r = function (e, t, s, i) {
                return e < .55 * i ? .5 * Laya.Ease.bounceIn(2 * e, 0, s, i) + t : .5 * Laya.Ease.bounceOut(2 * e - i, 0, s, i) + .5 * s + t;
            };
            e.y = t, Laya.timer.once(1e3 * a, this, function () {
                Laya.timer.once(1e3 * n, this, function () {
                    this.handlerFun(i, true);
                }), Laya.Tween.to(e, {
                    y: s
                }, 1e3 * n, r);
            });
        }
        canUseItem(e, t) {
            let s = this.canUseItemNotTips(e, t);
            return 1 == t ? s || (x.UIMgr.ins.openUI(x.UIType.GetDiamView), as.getIns().showToast("钻石不足")) : 2 == t || (3 == t ? s || (x.UIMgr.ins.openUI(x.UIType.GetGoldView), as.getIns().showToast("金币不足")) : 4 == t || 5 == t && (s || (as.getIns().showToast("体力不足"), x.UIMgr.ins.openUI(x.UIType.GetPowerView)))), s;
        }
        canUseItemNotTips(e, t) {
            if (!as.getIns().getPlat())
                return true;
            if (1 == t)
                return e <= hs.getIns().getDiamCount();
            if (2 == t) { }
            else {
                if (3 == t)
                    return e <= hs.getIns().getCoin();
                if (4 == t) { }
                else if (5 == t)
                    return e <= hs.getIns().getPower();
            }
            return false;
        }
        useItem(e, t, s) {
            1 == t ? hs.getIns().changeDiam(e, false) : 2 == t ? hs.getIns().useSkinChip(s, e) : 3 == t ? hs.getIns().minusCoin(e) : 5 == t && hs.getIns().usePower(e);
        }
        isNumber(e) {
            return e === +e;
        }
        isString(e) {
            return e === e + "";
        }
        timestampToTime(e) {
            let t = new Date(e);
            return t.getFullYear() + "年" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "月" + this.changeNum(t.getDate()) + "日";
        }
        changeNum(e) {
            return e < 10 ? "0" + e : e;
        }
        btnAction(e, t = null) {
            e ? (a.getIns().playSound(y.SN_CLICK), this.btnTween(e, t)) : is.getIns().handlerFun(t);
        }
        btnTween(e, t = null) {
            if (!e)
                return;
            e.scaleX = .8, e.scaleY = .8;
            let s = e.nodeTween;
            s && s.clear(), e.nodeTween = Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 100, Laya.Ease.linearOut, Laya.Handler.create(null, () => {
                e.nodeTween.clear(), is.getIns().handlerFun(t);
            }), 0, true, false);
        }
        createEf(e, t, s, i, a = false, r = is.zeroVec, o = false, h = is.oneVec) {
            i || 0 == i || (i = 1);
            let l = n.resPath.format(e), d = e => {
                if (s) {
                    if (0 != i) {
                        let t = e.getComponent(ss);
                        t || (t = e.addComponent(ss)), t.setAutoRecycle(a), t.setRecycleKey(l), t.recycle(i);
                    }
                    if (s.addChild(e), this.resetTransform(e), o) {
                        e.transform.localPosition = t;
                        let s = e.transform.localRotationEuler;
                        r.cloneTo(s), e.transform.localRotationEuler = s;
                    }
                    else {
                        let s = e.transform.position;
                        t.cloneTo(s), e.transform.position = s, s = e.transform.rotationEuler, r.cloneTo(s), e.transform.rotationEuler = s;
                    }
                    e.transform.localScale = h, this.playEffect(e);
                }
                else
                    e.destroy();
            }, c = ts.getIns().recycleMgr.getGo(l);
            if (c)
                return c.active = true, void d(c);
            let u = [];
            u.push(l), ye.getIns().preload(u, () => {
                if (!s || s.destroyed)
                    return;
                let e = ye.getIns().getNode(l);
                d(e);
            });
        }
        showChild(e, t) {
            if (e)
                for (var s = 0; s < e._children.length; s++)
                    e._children[s].active = t;
        }
        setBtnScaleTween(e) {
            if (!this.btnTweens.hasKey(e)) {
                let t = X.getIns().getTween(), s = [];
                s.push({
                    time: 300,
                    prop: {
                        scaleX: 1,
                        scaleY: 1
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 300,
                    prop: {
                        scaleX: 1.1,
                        scaleY: 1.1
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 300,
                    prop: {
                        scaleX: 1,
                        scaleY: 1
                    },
                    ease: Laya.Ease.linearNone
                }), t.setTweenVals(s), t.setDelayTime(1e3), t.setTarget(e), t.setLoop(true), t.play(), this.btnTweens.addKey(e, t);
            }
        }
        setBtnShake(e) {
            if (!this.btnTweens.hasKey(e)) {
                let t = X.getIns().getTween();
                t.setLoop(true), t.setTarget(e);
                let s = [];
                s.push({
                    time: 100,
                    prop: {
                        rotation: 5,
                        scaleX: 1.1,
                        scaleY: 1.1
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 200,
                    prop: {
                        rotation: -5
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 100,
                    prop: {
                        rotation: 0,
                        scaleX: 1,
                        scaleY: 1
                    },
                    ease: Laya.Ease.linearNone
                }), t.setTweenVals(s), t.play(), this.btnTweens.addKey(e, t);
            }
        }
        closeBtnTween(e) {
            if (this.btnTweens.hasKey(e)) {
                let t = this.btnTweens.getValue(e);
                t.end(), this.btnTweens.removeKey(e), X.getIns().recycleTween(t);
            }
        }
        setImgPercent(e, t) {
            e && (t > 0 ? (e.mask || (e.mask = new Laya.Sprite), e.mask.graphics.clear(), e.mask.graphics.drawPie(e.width / 2, e.height / 2, e.width / 2, 360 * t - 90, 270, "#ffffff")) : e.mask = null);
        }
        minBigNumber(e) {
            return e.lte(0) && (e = window.BigNumber(1)), e;
        }
        getRandomArrayElements(e, t) {
            let s, i, a = e.slice(0), n = e.length, r = n - t;
            for (; n-- > r;)
                s = a[i = Math.floor((n + 1) * Math.random())], a[i] = a[n], a[n] = s;
            return a.slice(r);
        }
        createUiRoot(e, t) {
            let s;
            e.parent.zOrder = 3, (s = e.getChildByName("gameUIRoot")) || ((s = new Laya.View).name = "gameUIRoot", console.log("新建uiroot")), e.addChild(s), s.zOrder = 100, s.updateZOrder(), s.width = Laya.stage.width, s.height = Laya.stage.height;
            let i = s.addComponent(x.UIMgr);
            i.init(), i.preLoad(t), console.log("maingui init");
        }
        setUINode(e, t, s) {
            let i = [];
            is.getIns().getChildBySgin(e, t, i);
            for (var a = 0; a < i.length; a++)
                s[i[a].name] = i[a];
        }
        setLayer(e, t) {
            if (e) {
                if (e.layer = t, e._children && 0 == e._children.length)
                    return;
                for (let s = 0; s < e._children.length; s++)
                    this.setLayer(e._children[s], t);
            }
        }
        insertVec(e, t) {
            return e.x = t.x, e.y = t.y, e.z = t.z, e;
        }
        getNodeInAnim(e, t, s) {
            if (!e)
                return;
            let i = e._keyframeNodeOwners;
            for (let e = 0; e < i.length; e++) {
                let a = i[e];
                a.propertyOwner._owner.name.indexOf(s) >= 0 && t.push(a.propertyOwner._owner);
            }
            return t;
        }
        getNodeInGo(e, t, s, i = 2) {
            if (!e)
                return;
            if (i <= 0)
                return t;
            i--;
            let a = e._children;
            for (let e = 0; e < a.length; e++) {
                let n = a[e];
                n.name.indexOf(s) >= 0 && t.push(n), this.getNodeInGo(n, t, s, i);
            }
            return t;
        }
        offectLevel(e) {
            let t = g.ins.getAllDatas().length;
            return e > t && 0 == (e %= t) && (e = t), e;
        }
        bottomToMove(e, t, s, i = Laya.Ease.linearOut) {
            if (!as.getIns().isWINPlatform())
                return e.bottom = t, void is.getIns().handlerFun(s);
            e.bottom = 0, Laya.timer.once(1100, null, () => {
                Laya.Tween.to(e, {
                    bottom: t
                }, 800, i, new Laya.Handler(null, () => {
                    is.getIns().handlerFun(s);
                }), 0, true, false);
            });
        }
        getArrayRaadomVal(e) {
            return e[Math.floor(Math.random() * (e.length - .1))];
        }
        randomNum(e, t) {
            return Math.floor(e + (t - e + .9) * Math.random());
        }
        changeRot(e, t, s = 50) {
            let i = t - e.transform.localRotationEulerY, a = i >= 0 ? i : -i;
            if (a >= 180) {
                let e = i / a;
                i = i > 0 ? 360 - i : 360 + i, i *= -e;
            }
            if (0 != i) {
                let e = i / a;
                i = a < s ? a : s, i *= e;
            }
            e.transform.localRotationEulerY += i, e.angle > 180 ? e.transform.localRotationEulerY -= 360 : e.angle < -180 && (e.transform.localRotationEulerY += 360);
        }
        changeRotLerp(e, t, s = .8) {
            let i = e.transform.rotation;
            Laya.Quaternion.lerp(e.transform.rotation, t, s, i), e.transform.rotation = i;
        }
        getEquipByLv(e, t) {
            return e < 3 ? null : e >= 3 && e < 6 ? t + 1 : e >= 6 && e < 9 ? t + 2 : t + 3;
        }
        setColor(e, t) {
            e && (t ? "#00ff1e" != e.color && (e.color = "#00ff1e") : "#ff0400" != e.color && (e.color = "#ff0400"));
        }
        canShowBanner() {
            return !as.getIns().isOPPOPlatform() || !(0 == is.getIns().showBannerTimer || Laya.timer.currTimer - is.getIns().showBannerTimer < is.getIns().showBannerDelay);
        }
        returnSprite3D(e) {
            return e instanceof Laya.Sprite3D ? e : null;
        }
        cretaeMesh(e, t) {
            let s = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            return Laya.PrimitiveMesh._createMesh(s, new Float32Array(e), new Uint16Array(t));
        }
        loadTxt(e, t) {
            if (as.getIns().getPlat() && as.getIns().getPlat().getFileSystemManager) {
                as.getIns().getPlat().getFileSystemManager().readFile({
                    filePath: e,
                    encoding: "latin1",
                    success: e => {
                        is.getIns().handlerFun(t, e.data);
                    }
                });
            }
            else
                Laya.loader.load(e, Laya.Handler.create(this, e => {
                    is.getIns().handlerFun(t, e);
                }), null, Laya.loader.TEXT);
        }
        changeAlpha(e, t) {
            if (e instanceof Laya.PBRStandardMaterial) {
                let s = e.albedoColor;
                s.w = t, e.albedoColor = s;
            }
        }
        closeMesh(e) {
            e && e.meshRenderer && (e.meshRenderer.enable = false);
        }
        seekNodeByName(e, t) {
            if (e.name === t)
                return e;
            let s = void 0;
            return e._children.forEach(e => {
                s || (s = this.seekNodeByName(e, t));
            }), s;
        }
        generateString(e) {
            let t = "";
            if ("number" == typeof e)
                for (let s = 0; s < e; s++)
                    Math.random() < .5 ? t += String.fromCharCode(this.randomNum("0".charCodeAt(), "0".charCodeAt() + 9)) : t += String.fromCharCode(this.randomNum("a".charCodeAt(), "a".charCodeAt() + 25));
            return t;
        }
        bigNumber2StrNumber(e, t = 2) {
            if (e) {
                if ("number" == typeof e && (e = window.BigNumber(e)), !(e instanceof window.BigNumber))
                    return "";
                if (e.e <= 4)
                    return e.toFixed();
                let s = "k";
                if (e.e >= 6)
                    for (let t = 6; t <= 246; t += 3)
                        if (e.e >= t && e.e < t + 3) {
                            6 === t ? s = "m" : 9 === t ? s = "b" : 12 === t ? s = "t" : (s = String.fromCharCode("a".charCodeAt() + (t - 15) / 3), s += s);
                            break;
                        }
                "number" != typeof t && (t = 3);
                let i = e.toExponential(t - 1);
                return window.BigNumber(i.substring(0, i.indexOf("e"))).times(Math.pow(10, e.e % 3)).toString() + s;
            }
            return "";
        }
        checkString(e) {
            return void 0 !== e && "string" == typeof e && "" !== e;
        }
        convertSecondToHourMinuteSecond(e, t = true) {
            let s = Math.round(e * this.huorSpan), i = Math.round(e * this.minuteSpan) % 60, a = Math.round(e % 60);
            return 0 == s && t ? (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) : (s < 10 ? "0" + s : s) + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a);
        }
        lookAtTarget(e, t) {
            this.rotTemp.y = e.transform.localRotationEulerY + 180, Laya.Vector3.subtract(t, e.transform.position, this.tempV1), Laya.Vector3.subtract(e.transform.position, this.tempV1, this.tempV1), e.transform.lookAt(this.tempV1, this.upVec, false);
        }
        getAllAnimCompsInChilds(e, t) {
            let s = e.getComponent(Laya.Animator);
            s && t.push(s);
            for (let s = 0; s < e.numChildren; s++)
                this.getAllAnimCompsInChilds(e.getChildAt(s), t);
        }
        identity(e) {
            return e;
        }
        setDataByType(e, t) {
            let s = Object.keys(t);
            for (let i = 0; i < s.length; i++) {
                let a = s[i];
                e[a] = t[a];
            }
        }
        static getItemTypeByParkType(e) {
            switch (e) {
                case O.ParkEgg:
                    return G.Egg;
                case O.ParkJuice:
                    return G.Juice;
                case O.ParkTomato:
                    return G.Tomato;
                case O.ParkMaizeProcess:
                    return G.Maize;
                case O.ParkEggProcess:
                    return G.Egg;
                case O.ParkTomatoProcess:
                    return G.Tomato;
                case O.ParkJuiceProcess:
                    return G.Juice;
                case O.ParkCashier:
                    return G.Cashier;
                case O.ParkMilk:
                case O.ParkMilkProcess:
                    return G.Milk;
                case O.ParkMaizeGood:
                case O.ParkMaizeGoodsProcess:
                    return G.MaizeGood;
                case O.ParkMaize:
                    return G.Maize;
                case O.ParkCracker:
                case O.ParkCrackerProcess:
                    return G.Cracker;
                case O.ParkCoffeeBean:
                case O.ParkCoffeeBeanProcess:
                    return G.CoffeeBean;
                case O.ParkGroundCoffee:
                case O.ParkGroundCoffeeProcess:
                    return G.GroundCoffee;
                case O.ParkCoffee:
                case O.ParkCoffeeProcess:
                    return G.Coffee;
                case O.ParkCarrot:
                case O.ParkCarrotProcess:
                    return G.Carrot;
                case O.ParkApple:
                case O.ParkAppleProcess:
                    return G.Apple;
                case O.ParkACJuice:
                case O.ParkACJuiceProcess:
                    return G.ACJuice;
                case O.ParkRose:
                case O.ParkRoseProcess:
                    return G.Rose;
                case O.ParkBabysBreath:
                case O.ParkBabysBreathProcess:
                    return G.BabysBreath;
                case O.ParkYellowRose:
                case O.ParkYellowRoseProcess:
                    return G.YellowRose;
                case O.ParkBouquet:
                case O.ParkBouquetProcess:
                    return G.Bouquet;
            }
            return G.None;
        }
        static getParkByProductType(e) {
            switch (e) {
                case O.ParkMaizeProcess:
                    return O.ParkMaize;
                case O.ParkEggProcess:
                    return O.ParkEgg;
                case O.ParkTomatoProcess:
                    return O.ParkTomato;
                case O.ParkJuiceProcess:
                    return O.ParkJuice;
                case O.ParkMilkProcess:
                    return O.ParkMilk;
                case O.ParkMaizeGoodsProcess:
                    return O.ParkMaizeGood;
                case O.ParkCrackerProcess:
                    return O.ParkCracker;
                case O.ParkCoffeeBeanProcess:
                    return O.ParkCoffeeBean;
                case O.ParkCoffeeProcess:
                    return O.ParkCoffee;
                case O.ParkGroundCoffeeProcess:
                    return O.ParkGroundCoffee;
                case O.ParkCarrotProcess:
                    return O.ParkCarrot;
                case O.ParkAppleProcess:
                    return O.ParkApple;
                case O.ParkACJuiceProcess:
                    return O.ParkACJuice;
                case O.ParkRoseProcess:
                    return O.ParkRose;
                case O.ParkBabysBreathProcess:
                    return O.ParkBabysBreath;
                case O.ParkYellowRoseProcess:
                    return O.ParkYellowRose;
                case O.ParkBouquetProcess:
                    return O.ParkBouquet;
            }
            return O.None;
        }
        static getParkTypeTypeByItemType(e) {
            switch (e) {
                case G.Egg:
                    return O.ParkEgg;
                case G.Juice:
                    return O.ParkJuice;
                case G.Tomato:
                    return O.ParkTomato;
                case G.Maize:
                    return O.ParkMaize;
                case G.MaizeGood:
                    return O.ParkMaizeGood;
                case G.Cashier:
                    return O.ParkCashier;
                case G.Milk:
                    return O.ParkMilk;
                case G.Cracker:
                    return O.ParkCracker;
                case G.Coffee:
                    return O.ParkCoffee;
                case G.GroundCoffee:
                    return O.ParkGroundCoffee;
                case G.CoffeeBean:
                    return O.ParkCoffeeBean;
                case G.Carrot:
                    return O.ParkCarrot;
                case G.Apple:
                    return O.ParkApple;
                case G.ACJuice:
                    return O.ParkACJuice;
                case G.Rose:
                    return O.ParkRose;
                case G.BabysBreath:
                    return O.ParkBabysBreath;
                case G.YellowRose:
                    return O.ParkYellowRose;
                case G.Bouquet:
                    return O.ParkBouquet;
            }
            return O.None;
        }
        static getProductTypeByItemType(e) {
            switch (e) {
                case G.Egg:
                    return O.ParkEggProcess;
                case G.Juice:
                    return O.ParkJuiceProcess;
                case G.Tomato:
                    return O.ParkTomatoProcess;
                case G.Maize:
                    return O.ParkMaizeProcess;
                case G.MaizeGood:
                    return O.ParkMaizeGoodsProcess;
                case G.Cashier:
                    return O.ParkCrackerProcess;
                case G.Milk:
                    return O.ParkMilkProcess;
                case G.Cracker:
                    return O.ParkCrackerProcess;
                case G.Coffee:
                    return O.ParkCoffeeProcess;
                case G.GroundCoffee:
                    return O.ParkGroundCoffeeProcess;
                case G.CoffeeBean:
                    return O.ParkCoffeeBeanProcess;
                case G.Carrot:
                    return O.ParkCarrotProcess;
                case G.Apple:
                    return O.ParkAppleProcess;
                case G.ACJuice:
                    return O.ParkACJuiceProcess;
                case G.Rose:
                    return O.ParkRoseProcess;
                case G.BabysBreath:
                    return O.ParkBabysBreathProcess;
                case G.YellowRose:
                    return O.ParkYellowRoseProcess;
                case G.Bouquet:
                    return O.ParkBouquetProcess;
            }
            return O.None;
        }
        static getItemIconPathByItemType(e) {
            switch (e) {
                case G.Egg:
                    return "eggIcon";
                case G.Juice:
                    return "tomatoSauceIcon";
                case G.Tomato:
                    return "tomatoIcon";
                case G.Maize:
                    return "wheatIcon";
                case G.MaizeGood:
                    return "flourBagIcon";
                case G.Milk:
                    return "milkIcon";
                case G.Cracker:
                    return "cookieIcon";
                case G.Coffee:
                    return "coffeeCupIcon";
                case G.CoffeeBean:
                    return "coffeeBeanIcon";
                case G.GroundCoffee:
                    return "coffeeBagIcon";
                case G.Carrot:
                    return "carrotIcon";
                case G.Apple:
                    return "apple";
                case G.ACJuice:
                    return "ACJuice";
                case G.Rose:
                    return "flowerRoseIcon";
                case G.BabysBreath:
                    return "flowerDaisyIcon";
                case G.YellowRose:
                    return "flowerTulipIcon";
                case G.Bouquet:
                    return "flowerBouquetIcon";
            }
            return null;
        }
        static onClick(e, t) {
            e && (e.clickTimer = Laya.timer.currTimer, e.on(Laya.Event.CLICK, this, () => {
                e.clickTimer && Laya.timer.currTimer - e.clickTimer < 500 || (e.clickTimer = Laya.timer.currTimer, is.getIns().btnAction(e), is.getIns().handlerFun(t));
            }));
        }
    }
    is.oneVec = new Laya.Vector3(1, 1, 1);
    is.zeroVec = new Laya.Vector3(0, 0, 0);
    is.instance = null;

    class l {
        constructor() {
            this.isshowFullMatrix = false;
        }
        static getIns() {
            return this.instance || (this.instance = new l, this.instance.init()), this.instance;
        }
        init() { }
        showFullMatrix(e) {
            is.getIns().handlerFun(e);
        }
        showExitView(e) {
            is.getIns().handlerFun(e);
        }
        showAdFullView(e) {
            is.getIns().handlerFun(e);
        }
        showMoreAd(e) {
            is.getIns().handlerFun(e);
        }
        showNewFullAd(e) {
            is.getIns().handlerFun(e);
        }
    }
    l.instance = null;

    class te {
        constructor() {
            this.misSwitch = 1, this.startMis = 1, this.showTools = 1, this.startVideo = 0, this.enterVideo = 0, this.readViewInterstitialAd = 0, this.backHomeVideo = 0, this.showTaskViewBanner = 0, this.effectViewVideo = 0, this.rebornViewMis = 0, this.gameoverBox = 0, this.misRate = 1, this.Store1BuffCount = 0, this.Store2BuffCount = 0, this.Store3BuffCount = 0, this.wantedView = 0, this.showCheckBtn = 0;
        }
    }

    class ee {
        constructor() {
            this.mistakeData = new te, this.shaderCompiled = false,
                this.wxSdkVesion = "1.00.00";
        }
        static getIns() {
            return this.instance || (this.instance = new ee), this.instance;
        }
        init(e) {
            let t = new Promise(e => {
                var t = {
                    "misSwitch": 1,
                    "startMis": 1,
                    "Store1BuffCount": 1,
                    "Store2BuffCount": 3,
                    "Store3BuffCount": 3,
                    "wantedView": 1,
                    "misRate": 1
                };
                is.getIns().setDataByType(this.mistakeData, t);
                console.log(this.mistakeData);
                e(null);
            });
            Promise.all([t]).then(() => {
                h.getIns().init(), l.getIns(), this.disLog(), is.getIns().handlerFun(e);
            });
        }
        disLog() { }
        loadOverConfig() { }
        cloneLevelConfig(e, t, s) {
            for (let i = 0; i < s.length; i++)
                e[s[i]] = t[s[i]];
        }
        getMistakeData() {
            return this.mistakeData;
        }
        preloadAsset(e) {
            is.getIns().handlerFun(e);
        }
        preCompileShader(e) {
            if (this.shaderCompiled)
                return void is.getIns().handlerFun(e);
            this.shaderCompiled = true;
            is.getIns().loadTxt("res/tempConf/shaderCompile.txt", t => {
                (t => {
                    let s = JSON.parse(t);
                    is.getIns().compileShader(s, e);
                })(t);
            });
        }
        debugModeShader() {
            Laya.Shader3D.debugMode = true;
            let e = [];
            for (let t = 0; t < Laya.Shader3D.debugShaderVariantCollection.variantCount; t++) {
                let s = Laya.Shader3D.debugShaderVariantCollection.getByIndex(t), i = {};
                i.shaderName = s.shader.name, i.defineNames = s.defineNames, i.passIndex = s.passIndex, i.subShaderIndex = s.subShaderIndex, e.push(i);
            }
            console.error(JSON.stringify(e));
        }
        resetMisByNode(e) {
            e.clickTimes = 0, e.isMisShowBanner = false, e.isCallBack = false;
        }
        canMis() {
            return 1 == this.mistakeData.misSwitch && Math.random() < this.mistakeData.misRate;
        }
        getStartMis() {
            return this.canMis() && 1 == this.mistakeData.startMis;
        }
        getStartAdv() {
            return this.canMis() && 1 == this.mistakeData.startVideo;
        }
        getEnterVideo() {
            return this.canMis() && 1 == this.mistakeData.enterVideo;
        }
        getReadViewInterstitialAd() {
            return this.canMis() && 1 == this.mistakeData.readViewInterstitialAd;
        }
        getBackHomeVideo() {
            return this.canMis() && 1 == this.mistakeData.backHomeVideo;
        }
        getShowTaskViewBanner() {
            return this.canMis() && 1 == this.mistakeData.showTaskViewBanner;
        }
        getEffectViewVideo() {
            return this.canMis() && 1 == this.mistakeData.effectViewVideo;
        }
        getRebornViewMis() {
            return this.canMis() && 1 == this.mistakeData.rebornViewMis;
        }
        getGameoverBox() {
            return this.canMis() && 1 == this.mistakeData.gameoverBox;
        }
        getWantedView() {
            return this.canMis() && 1 == this.mistakeData.wantedView;
        }
        getShowCheckBtn() {
            return this.canMis() && 1 == this.mistakeData.showCheckBtn;
        }
    }
    ee.instance = null;

    class gameMgr {
        constructor() {
            this.gameScene = null, this.levelData = null, this.notLimitConfig = null, this.trainConfig = null, this.levelType = 1, this.isPause = false, this.lastIsFail = false, this.isTest = false, this.isPauseMusic = false, this.isShowLoadingPage = false, this.mapInit = false, this.gameMul = 1, this.gameState = -1, this.enableHDR = false, this.task01 = 0, this.gameStartTime = 0, this.isFirstReborn = true, this.teachConfig = {
                config: "TeachLv1",
                startBuffCount: 0
            }, this.trySkinId = null, this.isTryUseSkin = false, this.curFloorId = 1, this.isFirstEnterLevel = false, this.gameGold = 0;
        }
        static getIns() {
            return this.instance || (this.instance = new gameMgr), this.instance;
        }
        getGameScene() {
            return this.gameScene;
        }
        initScene(e) {
            Laya.stage.addChildAt(e, 0), this.gameScene = e, this.gameScene.physicsSimulation.continuousCollisionDetection = false, this.gameScene.physicsSimulation.maxSubSteps = 20, this.gameScene.physicsSimulation.fixedTimeStep = 1 / 60, this.checkHdR(), as.getIns().getPlat() && (this.isTest = false), Laya.MouseManager.multiTouchEnabled = false, this.setSky(e), is.getIns().seekNodeByName(e, "Map").addComponent(ts).init();
        }
        canshow3DImage() {
            return true;
        }
        checkHdR() {
            this.enableHDR = Laya.SystemUtils.supportRenderTextureFormat(Laya.RenderTextureFormat.R16G16B16A16);
        }
        isEnableHDR() {
            return this.enableHDR;
        }
        getCurLevelId() {
            return this.levelData.id;
        }
        getCurLevelData() {
            return this.levelData;
        }
        getLevelMul() {
            return this.levelData.itemMul;
        }
        toGame(e, t, s = null) {
            this.mapInit ? as.getIns().showToast(P.getLanguage("30")) : this.isShowLoadingPage || (this.levelType = t, this.gameReady(e, s));
        }
        rePlay() {
            this.toGame(this.levelData.id, this.levelType);
        }
        setFogRang(e, t) {
            this.gameScene.enableFog = false, this.gameScene.fogStart = e, this.gameScene.fogRange = t;
        }
        setSky(e) { }
        setSceneFog(e) { }
        gamePause() {
            this.isPause = true, t$1.getIns().dispatchEvent(i.EN_GAMEPAUSE);
        }
        gameResume() {
            this.isPause = false;
        }
        isGameStart() {
            return 2 == this.gameState && !this.isPause;
        }
        setGameState(e) {
            this.gameState = e;
        }
        isGameReady() {
            return 0 == this.gameState;
        }
        isGameOver() {
            return 3 == this.gameState || 4 == this.gameState;
        }
        gameReady(e, t) {
            if (1 == this.levelType) {
                this.levelData = g.ins.getDataById(e), this.levelData && hs.getIns().setLevelId(e);
                let t = hs.getIns().getShowLevelCount();
                this.gameStartSumbit(t);
            }
            else if (2 == this.levelType) { }
            else if (3 == this.levelType) { }
            else if (4 != this.levelType)
                return void console.error("关卡类型错误:", this.levelType);
            this.curFloorId = this.levelData.floorId, this.isFirstReborn = true, this.gameGold = 0, this.gameScene && this.gameScene.destroy(), Laya.Scene3D.load(n.scenePath.format(this.levelData.config), Laya.Handler.create(this, e => {
                this.initScene(e), this.setGameState(0), ts.getIns().toStart(t);
            }));
        }
        getLevelData(e, t) {
            let s = new Object, i = Object.keys(e), a = null;
            for (let t = 0; t < i.length; t++)
                s[a = i[t]] = e[a];
            i = Object.keys(t);
            for (let e = 0; e < i.length; e++)
                s[a = i[e]] = t[a];
            return s;
        }
        gameStart(e, s) {
            if (!this.isGameReady())
                return as.getIns().showToast(P.getLanguage("31")), void is.getIns().handlerFun(s);
            a.getIns().stopMusic(),
                this.gameResume(),
                this.gameStartTime = 0,
                this.beginGameTimer();
            let r = new Object;
            r.endFun = (() => {
                a.getIns().playMusic(y.SN_Mp3.format("gameBg")),
                    ts.getIns().loadLevelEnd(),
                    this.setGameState(2),
                    t$1.getIns().dispatchEvent(i.GAMESTART),
                    is.getIns().handlerFun(e),
                    gameMgr.getIns().isFirstEnterLevel && (gameMgr.getIns().isFirstEnterLevel = false, x.UIMgr.ins.openUI(x.UIType.NewStoreView));
            });
            let n = [];
            n.push(x.UIType.LodingView),
                x.UIMgr.ins.closeAllPage(n),
                x.UIMgr.ins.openUI(x.UIType.GameView, r);
        }
        refershGameTime(e) {
            this.isGameStart() && (this.gameStartTime += e);
        }
        clearGameTimer() {
            Laya.timer.clear(this, this.refershGameTime);
        }
        beginGameTimer() {
            this.clearGameTimer(), Laya.timer.loop(1e3, this, this.refershGameTime, [1e3]);
        }
        outGame() {
            this.clearGameTimer(), a.getIns().stopAllSounds(), a.getIns().stopMusic();
        }
        gameSuccess() {
            this.isGameOver() || (1 == this.levelType ? (this.setGameState(4), this.gameEndSumbit(hs.getIns().getShowLevelCount(), true), hs.getIns().addContinueLevel(1), hs.getIns().setToNextLevelID(), Laya.timer.once(1600, this, () => {
                Laya.timer.once(1e3, this, this.toSuccFun);
            })) : 2 == this.levelType || 3 == this.levelType || (4 == this.levelType ? (this.setGameState(4), Laya.timer.once(500, this, () => {
                this.toSuccFun();
            })) : console.error("没有成功逻辑:", this.levelType)));
        }
        toSuccFun() {
            this.outGame(), a.getIns().playSound(y.SN_SUCC), this.isPauseMusic = false;
            let e = hs.getIns().getPlayerGrowUpId();
            oe.ins.getDataById(e);
            hs.getIns().playerGrowUp();
            let s = hs.getIns().getPlayerGrowUpId();
            oe.ins.getDataById(s);
            Laya.timer.scale = 1, this.lastIsFail = false, t$1.getIns().dispatchEvent(i.END_CHECK_OVER, true);
            let n = new Object;
            n.isWin = true, n.lvId = this.levelData.id, n.slvId = hs.getIns().getShowLevelCount() - 1, x.UIMgr.ins.closeUI(x.UIType.GameView);
            let r = () => {
                l.getIns().showNewFullAd(() => {
                });
            };
            as.getIns().isTTPlatform() ? L.getIns().getAdBase().stopRecord(() => {
                r();
            }) : r();
        }
        toReady(e) {
        }
        gameFail() {
            this.isGameOver() || (1 == this.levelType ? (this.setGameState(3), this.toFailFun()) : 2 == this.levelType ? (this.setGameState(3), Laya.timer.once(2e3, this, () => {
                this.toFailFun();
            })) : 3 == this.levelType ? (this.setGameState(4), h.getIns().Enter_click(47), this.toFailFun()) : 4 == this.levelType ? (this.setGameState(3), this.toFailFun()) : console.error("没有失败逻辑:", this.levelType));
        }
        toFailFun() {
            this.outGame(), a.getIns().playSound(y.SN_FAIL);
            let e = hs.getIns().getShowLevelCount();
            this.gameEndSumbit(e, false), Laya.timer.scale = 1, this.lastIsFail = true, this.isPauseMusic = true, t$1.getIns().dispatchEvent(i.END_CHECK_OVER, false);
            let s = new Object;
            s.isWin = false, s.lvId = this.levelData.id, s.slvId = e;
            let n = () => {
                l.getIns().showNewFullAd(() => {
                    x.UIMgr.ins.closeUI(x.UIType.GameView);
                });
            };
            if (this.isFirstReborn && ee.getIns().getRebornViewMis()) {
                this.isFirstReborn = false;
                let e = {};
                e.callBack = (() => {
                    this.gameReborn();
                });
            }
            else {
                let e = {};
                e.rebornFun = (e => {
                    e ? this.gameReborn() : as.getIns().isTTPlatform() ? L.getIns().getAdBase().stopRecord(() => {
                        n();
                    }) : n();
                }), x.UIMgr.ins.openUI(x.UIType.RebornView, e);
            }
        }
        gameReborn() {
            x.UIMgr.ins.openUI(x.UIType.GameView, null, () => {
                this.gameResume(), this.setGameState(2), ts.getIns().reborn(), a.getIns().resumeMusic();
            });
        }
        mobileShake() {
            if (hs.getIns().isMuteEnable()) {
                this.shakeIndex++;
                for (var e = 0; e < 3; e++)
                    Laya.timer.once(20 * e, this, () => {
                        as.getIns().vibratePhone(false);
                    });
            }
        }
        mobileShakeSgin() {
            as.getIns().vibratePhone(false);
        }
        mobileShakeLong() {
            as.getIns().vibratePhone(true);
        }
        getRandomSkinIds() {
            let e = this.getNotSkinId();
            if (0 == e.length)
                return null;
            let t = [], s = null;
            for (var i = 0; i < e.length; i++)
                s = m.ins.getDataById(e[i]), t.push({
                    id: e[i],
                    rate: s.recomedRate
                });
            t.sort((e, t) => e.rate < t.rate ? -1 : e.rate > t.rate ? 1 : 0);
            let a = 0;
            for (i = 0; i < t.length; i++)
                a += t[i].rate;
            let n = Math.floor(Math.random() * a), r = t.length;
            for (i = 0; i < r; i++)
                if ((n -= t[i].rate) <= 0)
                    return t[i].id;
            return e[0];
        }
        getNotSkinId() {
            let e = m.ins.getAllDatas(), t = [], s = 0;
            for (var i = 0; i < e.length; i++) {
                let a = e[i];
                s = a.id, 1 == a.isOpen && (hs.getIns().hasSkinById(s) || t.push(s));
            }
            return t;
        }
        gameStartSumbit(e) {
            hs.getIns().setLevelPlayTime(3, e), d.getIns().gameStartSumbit(e);
        }
        gameRebornSumbit(e, t) { }
        trySkinSumbit(e, t) { }
        gameEndSumbit(e, t) {
            t ? hs.getIns().setLevelPlayTime(1, e) : hs.getIns().setLevelPlayTime(2, e), d.getIns().gameEndSumbit({
                lv: e,
                isWin: t
            });
        }
    }
    gameMgr.instance = null;

    class ze extends c {
    }

    class He extends u {
        static get ins() {
            return this._ins || (this._ins = new He), this._ins;
        }
        getConfigTarget() {
            return new ze;
        }
        isMaxLv(e) {
            let t = this.getDataById(e.waiterUpId);
            if (t) {
                let s;
                return s = 6002 == e.waiterId ? t.typeCarry : 6003 == e.waiterId ? t.typeFarmer : t.typeCarry, hs.getIns().getWaiterLv(e.waiterId, s, gameMgr.getIns().getCurLevelId()) >= Ge.ins.getDataById(e.waiterId).lvMax;
            }
            return true;
        }
    }
    He._ins = null;

    class us {
        constructor() {
            this.buildType = 0, this.buildCount = 0;
        }
    }

    class e {
        constructor() {
            this._loaded = false, this._serverTime = 0, this._passedDays = 0;
        }
        static getIns() {
            return this.instance || (this.instance = new e), this.instance;
        }
        getServerTime() {
            return Date.now();
        }
        getCurServerDayOfWeek() {
            let e = this.getServerDate().getDay();
            return 0 === e && (e = 7), e;
        }
        getCurServerDayOfMonth() {
            return this.getServerDate().getDate();
        }
        getCurServerDayOfYear() {
            let e = this.getServerDate(), t = new Date(e.getFullYear(), 0, 0), s = e - t + 60 * (t.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
            return Math.floor(s / 864e5) + this._passedDays;
        }
        getServerDate() {
            return this._loaded ? new Date(this._serverTime) : new Date;
        }
        getCurServerWeekOfYear() {
            var e = this.getServerDate(), t = new Date(e.valueOf()), s = (e.getDay() + 6) % 7;
            t.setDate(t.getDate() - s + 3);
            var i = t.valueOf();
            return t.setMonth(0, 1), 4 !== t.getDay() && t.setMonth(0, 1 + (4 - t.getDay() + 7) % 7), 1 + Math.ceil((i - t) / 6048e5);
        }
    }
    e.instance = null;

    class ls {
        constructor(e) {
            this.playTimes = 0, this.lvId = 0, this.failTimes = 0, this.succTimes = 0, this.buildInfo = [], this.waiterInfo = [], this.isOpen = 0, this.lvId = e;
        }
    }

    class rs extends c {
    }

    class ns extends u {
        constructor() {
            super(), this.powerMax = 20, this.recoverPowerTime = 300;
        }
        static get ins() {
            return this._ins || (this._ins = new ns), this._ins;
        }
        init(e) {
            super.init(e), this.powerMax = this.getDataById(7).num, this.recoverPowerTime = this.getDataById(6).num;
        }
        getConfigTarget() {
            return new rs;
        }
        getRecoverPowerTime() {
            return this.recoverPowerTime;
        }
        getPowerMax() {
            return this.powerMax;
        }
    }
    ns._ins = null;

    class ds {
        constructor() {
            this.gold = 0, this.diam = 0, this.power = 0, this.teachId = 0, this.curSkinId = 1, this.skins = [], this.levelId = 1, this.totleLevel = 1, this.isMuteEnable = true, this.isSoundEnable = true, this.levelDatas = [], this.cLevel = 0, this.skinChips = [], this.sginDay = 0, this.isSgin = false, this.lastDay = 0, this.lastRecoverPowerTime = 0, this.playerGrowUpId = 1, this.dnaCount = 0, this.lastGameTimer = 0, this.playerCarryLv = 1, this.buildInfo = [], this.waiterInfo = [], this.offectGold = 0, this.isFingerGold = 0, this.isYinsi = 0;
        }
        init() {
            this.lastRecoverPowerTime = .001 * e.getIns().getServerTime();
        }
    }

    class cs {
        constructor(e) {
            this.id = 0, this.count = 0, this.id = e;
        }
    }

    class os {
        constructor() {
            this.waiterId = 0, this.speedLv = 1, this.carrayLv = 1, this.waiterCount = 1, this.waiterUpId = 1;
        }
    }

    class hs {
        constructor() {
            this.isInit = false, this.isNewPlayer = true, this.isAwalyNewPlayer = true, this.playerData = new ds, this.canSaveOutTime = false, this.saveSpace = 6e4, this.lastSaveTime = 0;
        }
        loadPlayerData() {
            let e = L.getIns().getAppid();
            if (console.log("appid:", e), Laya.LocalStorage.support) {
                this.isAwalyNewPlayer && Laya.LocalStorage.removeItem(e);
                let t = Laya.LocalStorage.getJSON(e);
                if (t) {
                    this.isNewPlayer = false;
                    let e = JSON.parse(t), s = Object.keys(e);
                    for (let t = 0; t < s.length; t++)
                        this.playerData[s[t]] = e[s[t]];
                }
                else
                    this.playerData.init(), this.isNewPlayer = true;
            }
            else
                this.playerData.init(), this.isNewPlayer = true;
            this.loadPlayerDataEnd(), this.save(), console.log("玩家数据加载完成!");
        }
        loadPlayerDataEnd() {
            this.playerData.power = ns.ins.getPowerMax();
            let t = g.ins.getAllDatas();
            for (let e = 0; e < t.length; e++) {
                let s = this.getLevelDataById(t[e].id);
                if (s.waiterInfo)
                    for (let e = 0; e < s.waiterInfo.length; e++)
                        s.waiterInfo[e].waiterCount > 2 && (s.waiterInfo[e].waiterCount = 2);
                else
                    s.waiterInfo = [];
                s.buildInfo || (s.buildInfo = []), 1 == s.lvId && (s.isOpen = 1);
            }
            let s = e.getIns().getCurServerDayOfWeek();
            this.playerData.lastDay != s && this.toNextDay(s), this.isNewPlayer ? (this.playerData.offectGold = 1, this.plusCoin(10)) : this.playerData.offectGold && 0 != this.playerData.offectGold || (this.playerData.offectGold = 1, this.playerData.gold > 3e3 && (this.playerData.gold = 3e3)), this.playerData.lastGameTimer && 0 != this.playerData.lastGameTimer || this.saveTime(), console.log("playerData:", this.playerData);
        }
        saveTime() {
            this.playerData.lastGameTimer = Math.floor(e.getIns().getServerTime() / 1e3), this.save();
        }
        getLastSaveTime() {
            return this.playerData.lastGameTimer;
        }
        getOutTime() {
            let t = Math.floor(e.getIns().getServerTime() / 1e3 - this.playerData.lastGameTimer);
            return t = t < 0 ? 0 : t;
        }
        toNextDay(e) {
            this.playerData.lastDay = e, this.resetSginDay();
        }
        savePlayerDataBefore() { }
        init(e) {
            this.isInit ? is.getIns().handlerFun(e) : (as.getIns().isWINPlatform() || (this.isAwalyNewPlayer = false), this.isAwalyNewPlayer = false, this.loadPlayerData(), this.isInit = true, this.autoSave(), is.getIns().handlerFun(e));
        }
        autoSave() {
            this.lastSaveTime = e.getIns().getServerTime(), this.canSaveOutTime && this.saveTime(), Laya.timer.clear(this, this.save), Laya.timer.loop(this.saveSpace, this, this.save);
        }
        static getIns() {
            return this._ins || (this._ins = new hs), this._ins;
        }
        hasNewPlayer() {
            return this.isNewPlayer;
        }
        save() {
            if (this.isInit) {
                if (this.savePlayerDataBefore(), Laya.LocalStorage.support) {
                    let e = ie.getIns().getAppId();
                    Laya.LocalStorage.setJSON(e, JSON.stringify(this.playerData)), console.log("玩家数据存储---");
                }
                this.lastSaveTime = e.getIns().getServerTime();
            }
        }
        getShowLevelCount() {
            return this.playerData.totleLevel;
        }
        getSkinId() {
            return this.playerData.curSkinId;
        }
        getLevelDataById(e) {
            let t = null;
            for (let s = 0; s < this.playerData.levelDatas.length; s++)
                if (e == this.playerData.levelDatas[s].lvId) {
                    t = this.playerData.levelDatas[s];
                    break;
                }
            return t || (t = new ls(e), this.playerData.levelDatas.push(t)), t;
        }
        addContinueLevel(e) {
            this.playerData.cLevel += e;
        }
        setLevelId(e) {
            this.playerData.levelId = e, this.save();
        }
        setToNextLevelID() {
            this.playerData.totleLevel++, this.playerData.levelId++;
            let e = g.ins.getAllDatas();
            e[e.length - 1].id < this.playerData.levelId && (this.playerData.levelId = 1);
        }
        getLevelId() {
            return this.playerData.levelId;
        }
        isMuteEnable() {
            return this.playerData.isMuteEnable;
        }
        isSoundEnable() {
            return this.playerData.isSoundEnable;
        }
        setSoundEnable(e) {
            this.playerData.isSoundEnable = e;
        }
        setMuteEnable(e) {
            this.playerData.isMuteEnable = e;
        }
        hasSkinById(e) {
            return this.playerData.skins.indexOf(e) >= 0;
        }
        setLevelPlayTime(e, t) {
            let s = this.getLevelDataById(t);
            s && (3 == e ? s.playTimes++ : 1 == e ? s.succTimes++ : s.failTimes++);
        }
        getCurTeachId() {
            return this.playerData.teachId;
        }
        setTeachId(e) {
            this.playerData.teachId = e;
        }
        getPower() {
            return this.playerData.power;
        }
        addItemByType(e, t, s = 0) {
            1 == e ? this.changeDiam(t, true) : 2 == e ? this.addSkinChip(s, t) : 3 == e ? this.plusCoin(t) : 4 == e || 5 == e && this.addPower(t);
        }
        resetSginDay() {
            this.playerData.isSgin = false;
        }
        getSginDay() {
            return this.playerData.sginDay;
        }
        todayHasSgin() {
            return this.playerData.isSgin;
        }
        setTodaySgin() {
            this.playerData.sginDay++, this.playerData.isSgin = true;
        }
        getDiamCount() {
            return this.playerData.diam;
        }
        getCoin() {
            return this.playerData.gold;
        }
        addSkin(e) {
            this.playerData.skins.indexOf(e) < 0 && this.playerData.skins.push(e);
        }
        changeDiam(e, t) {
            t ? this.playerData.diam += e : this.playerData.diam -= e;
        }
        useSkinChip(e, t) {
            let s = this.getChipData(e);
            s && (s.count -= t, s.count = s.count < 0 ? 0 : s.count);
        }
        addSkinChip(e, t) {
            let s = this.getChipData(e);
            s && (s.count += t);
        }
        getChipData(e) {
            let t = null;
            for (let s = 0; s < this.playerData.skinChips.length; s++)
                if (e == this.playerData.skinChips[s].id) {
                    t = this.playerData.skinChips[s];
                    break;
                }
            return t || (t = new cs(e), this.playerData.skinChips.push(t)), t;
        }
        minusCoin(e) {
            this.playerData.gold -= e, t$1.getIns().dispatchEvent(i.EN_COIN_CHANGED);
        }
        plusCoin(e) {
            this.playerData.gold += e, t$1.getIns().dispatchEvent(i.EN_COIN_CHANGED);
        }
        usePower(s) {
            let a = ns.ins.getPowerMax();
            this.playerData.power >= a && (this.playerData.lastRecoverPowerTime = Math.floor(e.getIns().getServerTime() / 1e3)), this.playerData.power -= s, this.playerData.power = this.playerData.power < 0 ? 0 : this.playerData.power, t$1.getIns().dispatchEvent(i.EN_POWER_CHANGED);
        }
        powerIsFull() {
            return this.playerData.power >= ns.ins.getPowerMax();
        }
        addPower(s, a = false) {
            if (a) {
                let e = ns.ins.getRecoverPowerTime();
                this.playerData.lastRecoverPowerTime += e * s;
            }
            let n = ns.ins.getPowerMax();
            this.playerData.power + s >= n && (this.playerData.lastRecoverPowerTime = Math.floor(e.getIns().getServerTime() / 1e3)), this.playerData.power += s, t$1.getIns().dispatchEvent(i.EN_POWER_CHANGED);
        }
        getLastGetPowerTime() {
            return this.playerData.lastRecoverPowerTime;
        }
        getPlayerGrowUpId() {
            return this.playerData.playerGrowUpId;
        }
        playerGrowUp() {
            this.playerData.playerGrowUpId++, oe.ins.hasId(this.playerData.playerGrowUpId) || (this.playerData.playerGrowUpId = 1), t$1.getIns().dispatchEvent(i.EN_LEVELUP);
        }
        setGrowUpId(e) {
            this.playerData.playerGrowUpId = e;
        }
        getDnaCount() {
            return this.playerData.dnaCount;
        }
        addDnaCount(e) {
            this.playerData.dnaCount += e;
        }
        clearDna() {
            this.playerData.dnaCount = 0;
        }
        addBuildByType(e, t) {
            let s = null, i = this.getLevelDataById(t);
            for (let t = 0; t < i.buildInfo.length; t++)
                if (i.buildInfo[t].buildType == e) {
                    s = i.buildInfo[t];
                    break;
                }
            s || ((s = new us).buildType = e, s.buildCount = 0, i.buildInfo.push(s)), s.buildCount++, h.getIns().umRuning(s.buildType, s.buildCount), e == O.Plane2 ? h.getIns().gameStartSumbit(2) : e == O.Plane3 && h.getIns().gameStartSumbit(3), this.save();
        }
        getBuildCountByType(e, t) {
            let s = this.getLevelDataById(t);
            for (let t = 0; t < s.buildInfo.length; t++)
                if (s.buildInfo[t].buildType == e)
                    return s.buildInfo[t].buildCount;
            return 0;
        }
        setWaiterCount(e, t, s) {
            let i = this.getWaiterData(e, t);
            i && (i.waiterCount = s, this.save());
        }
        addWaiter(e, t) {
            let s = this.getLevelDataById(t), i = this.getWaiterData(e, t);
            i ? i.waiterCount++ : ((i = new os).waiterId = e, i.waiterCount = 1, s.waiterInfo.push(i)), this.save();
        }
        getWaiterCountByID(e, t) {
            let s = this.getWaiterData(e, t);
            return s ? s.waiterCount : 0;
        }
        getWaiterData(e, t) {
            let s = this.getLevelDataById(t);
            for (let t = 0; t < s.waiterInfo.length; t++)
                if (s.waiterInfo[t].waiterId == e)
                    return s.waiterInfo[t];
            return null;
        }
        getWaiterLv(e, t, s) {
            let i = this.getLevelDataById(s);
            if (0 == i.waiterInfo.length)
                return 0;
            for (let s = 0; s < i.waiterInfo.length; s++)
                if (e == i.waiterInfo[s].waiterId) {
                    if (t == H.speed)
                        return i.waiterInfo[s].speedLv;
                    if (t == H.Carry)
                        return i.waiterInfo[s].carrayLv;
                }
            return 0;
        }
        hasWaiterById(e, t) {
            return null != this.getWaiterData(e, t);
        }
        updateWaiter(e, s, a) {
            let n = this.getLevelDataById(a);
            for (let t = 0; t < n.waiterInfo.length; t++)
                if (e == n.waiterInfo[t].waiterId) {
                    let i = Ge.ins.getDataById(e);
                    s == H.speed ? (n.waiterInfo[t].speedLv++, n.waiterInfo[t].speedLv > i.lvMax && (n.waiterInfo[t].speedLv = i.lvMax), h.getIns().umLevel("event_waiterSpeedLv_" + n.waiterInfo[t].waiterId + "_" + n.waiterInfo[t].speedLv, n.waiterInfo[t].speedLv)) : s == H.Carry && (n.waiterInfo[t].carrayLv++, n.waiterInfo[t].carrayLv > i.lvMax && (n.waiterInfo[t].carrayLv = i.lvMax), h.getIns().umLevel("event_waiterCarryLv_" + n.waiterInfo[t].waiterId + "_" + n.waiterInfo[t].carrayLv, n.waiterInfo[t].carrayLv)), n.waiterInfo[t].waiterUpId++, He.ins.isMaxById(n.waiterInfo[t].waiterUpId) && (n.waiterInfo[t].waiterUpId = He.ins.getMaxId());
                }
            this.save(), t$1.getIns().dispatchEvent(i.WAITERUPDATE);
        }
        addPlayerCarryLv() {
            this.playerData.playerCarryLv++, oe.ins.getDataById(this.playerData.playerCarryLv) || this.playerData.playerCarryLv--, h.getIns().umLevel("event_playerCarryLv_" + this.playerData.playerCarryLv, this.playerData.playerCarryLv), this.save(), t$1.getIns().dispatchEvent(i.PLAYERCARRYUP);
        }
        getPlayerCarryLv() {
            return this.playerData.playerCarryLv;
        }
        addMarkById(e) {
            this.getLevelDataById(e).isOpen = 1, this.save();
        }
        markIsOpen(e) {
            return 1 == this.getLevelDataById(e).isOpen;
        }
        setMarkIsOpen(e) {
            let t = this.getLevelDataById(e);
            h.getIns().umLevel("event_storeOpen_" + t.lvId, 1), t.isOpen = 1, this.save();
        }
        isGetFreeGold() {
            return 1 == this.playerData.isFingerGold;
        }
        setGetFreeGold() {
            this.playerData.isFingerGold = 1, this.save();
        }
        isShowYinsi() {
            return 1 == this.playerData.isYinsi;
        }
        setShowYinsi() {
            this.playerData.isYinsi = 1, this.save();
        }
    }
    hs._ins = null;

    class a {
        static getIns() {
            return this.ins || (this.ins = new a, this.ins.init()), this.ins;
        }
        init() {
            Laya.SoundManager.autoStopMusic = false;
            let e = as.getIns().getPlat();
            e && e.createInnerAudioContext && (this.audioContext = e.createInnerAudioContext(), this.audioContext.onError(e => {
                console.error(e);
            }));
        }
        playSound(e, t = 1) {
            hs.getIns().isSoundEnable() && Laya.SoundManager.playSound(e, t);
        }
        stopSound(e) {
            Laya.SoundManager.stopSound(e);
        }
        stopAllSounds() {
            Laya.SoundManager.stopAllSound();
        }
        playMusic(e, t = 0) {
            if (this.stopMusic(), this.musicUrl = e, hs.getIns().isSoundEnable())
                if (this.audioContext) {
                    if (this.audioContext.src == e)
                        return void this.audioContext.play();
                    this.audioContext.src = e, this.audioContext.startTime = 0, this.audioContext.loop = true, this.audioContext.autoplay = true;
                }
                else
                    Laya.SoundManager.playMusic(e, t);
        }
        stopMusic(e = null) {
            this.musicUrl = null, this.audioContext ? this.audioContext.stop() : Laya.SoundManager.stopMusic();
        }
        pauseMusic() {
            this.audioContext ? this.audioContext.pause() : Laya.SoundManager.stopMusic();
        }
        resumeMusic() {
            hs.getIns().isSoundEnable() && this.musicUrl && this.audioContext && this.audioContext.play();
        }
        setSoundEnable(e) {
            hs.getIns().isSoundEnable() !== e && (hs.getIns().setSoundEnable(e), e ? this.resumeMusic() : (this.stopAllSounds(), this.pauseMusic()));
        }
        isSoundEnable() {
            return hs.getIns().isSoundEnable();
        }
    }
    a.ins = null;

    class as {
        constructor() {
            this._plat = null, this._platType = 0, this.onHideTime = 0, this.lastOutTime = 0, this._sysInfo = null, this._isToastOnShow = false, this._isLoadingOnShow = false, this.isShowNetworkErrorWindow = false;
        }
        static getIns() {
            return this._ins || (this._ins = new as, this._ins.init()), this._ins;
        }
        init() {
            let e = window['qg'], t = window['mz'];
            if (void 0 !== window["wx"] && Laya.MiniAdpter) {
                this._plat = window["wx"];
                this._platType = 1;
            }
            else {
                if (void 0 !== window["qq"]) {
                    this._plat = window["qq"];
                    this._platType = 2;
                }
                else {
                    if (void 0 !== window["qg"] && e.getProvider().toLowerCase().indexOf("oppo") > -1) {
                        this._plat = window["qg"];
                        this._platType = 3;
                    }
                    else {
                        if (void 0 !== window["qg"] && e.getProvider().toLowerCase().indexOf("vivo") > -1) {
                            this._plat = window["qg"];
                            this._platType = 4;
                        }
                        else {
                            if (void 0 !== window["tt"]) {
                                this._plat = window["tt"];
                                this._platType = 5;
                            }
                            else {
                                if (void 0 !== window["qttGame"]) {
                                    this._plat = window["qttGame"];
                                    this._platType = 6;
                                }
                                else {
                                    if (void 0 !== window["mz"] && t.getProvider().toLowerCase().indexOf("meizu") > -1) {
                                        this._plat = window["mz"];
                                        this._platType = 7;
                                    }
                                    else {
                                        if (void 0 !== window["conch"]) {
                                            this._plat = window["conch"];
                                            this._platType = 8;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._plat) {
                if (this._plat.onHide) {
                    this._plat.onHide(() => {
                        this.onHide();
                    });
                }
                if (this._plat.onShow) {
                    this._plat.onShow(() => {
                        this.onShow();
                    });
                }
            }
        }
        onHide() {
            console.log("hide view"), this.onHideTime = e.getIns().getServerTime(), hs.getIns().save(), t$1.getIns().dispatchEvent(i.OUTGAME);
        }
        onShow() {
            console.log("back view"), this.lastOutTime = e.getIns().getServerTime() - this.onHideTime, a.getIns().resumeMusic(), t$1.getIns().dispatchEvent(i.ENTERGAME);
        }
        getOutTime() {
            return this.lastOutTime;
        }
        getSysInfo() {
            return this._sysInfo || (this.isWXPlatform() ? this._sysInfo = window['wx'].getSystemInfoSync() : this.isOPPOPlatform() || this.isVIVOPlatform() ? this._sysInfo = window['qg'].getSystemInfoSync() : (this._sysInfo = {
                screenHeight: Math.round(Laya.stage.height),
                screenWidth: Math.round(Laya.stage.width),
                windowHeight: Math.round(Laya.stage.height),
                windowWidth: Math.round(Laya.stage.width),
                statusBarHeight: 0
            }, Laya.Browser.onPC ? (this._sysInfo.brand = "microsoft", this._sysInfo.platform = "window", this._sysInfo.system = "Window 7") : Laya.Browser.onIOS ? (this._sysInfo.brand = "apple", this._sysInfo.platform = "ios", this._sysInfo.system = "iOS 12.1") : Laya.Browser.onAndroid ? (this._sysInfo.brand = "samsung", this._sysInfo.platform = "and", this._sysInfo.system = "Android 6.0") : (this._sysInfo.brand = "microsoft", this._sysInfo.platform = "window", this._sysInfo.system = "Window 7"))), this._sysInfo;
        }
        exitApp() {
            this._plat && (this._plat.exitMiniProgram && this._plat.exitMiniProgram({
                fail: function () { }
            }), this._plat.exitApplication && this._plat.exitApplication({
                success: null,
                fail: null,
                complete: null
            }));
        }
        vibratePhone(e) {
            hs.getIns().isMuteEnable() && (e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong() : this._plat && this._plat.vibrateShort && this._plat.vibrateShort());
        }
        showToast(e, t = null) {
            if (this._clearToastAndLoading(), this._plat && this._plat.showToast && is.getIns().checkString(e)) {
                let s = {
                    title: e,
                    duration: 2e3,
                    success: function (e) {
                        this._isToastOnShow = true, Laya.timer.once(2e3, this, () => {
                            this._isToastOnShow = false;
                        }, null, true);
                    }.bind(this)
                };
                s.icon = t || "none", this._plat.showToast(s);
            }
        }
        hideToast() {
            this._isToastOnShow && (this._isToastOnShow = false, this._plat && this._plat.hideToast && this._plat.hideToast());
        }
        _clearToastAndLoading() {
            this.hideToast(), this.hideLoading();
        }
        isWINPlatform() {
            return 0 == this._platType;
        }
        isWXPlatform() {
            return 1 == this._platType;
        }
        isQQPlatform() {
            return 2 == this._platType;
        }
        isOPPOPlatform() {
            return 3 == this._platType;
        }
        isVIVOPlatform() {
            return 4 == this._platType;
        }
        isOVPlatform() {
            return 3 == this._platType || 4 == this._platType;
        }
        isTTPlatform() {
            return 5 == this._platType;
        }
        isQTTPlatform() {
            return 6 == this._platType;
        }
        isMZPlatform() {
            return 7 == this._platType;
        }
        isNativePlatform() {
            return 8 == this._platType;
        }
        getPlat() {
            return this._plat;
        }
        showLoading(e = null) {
            if (this._clearToastAndLoading(), this._plat && this._plat.showLoading) {
                let t = {
                    title: e,
                    mask: true
                };
                this._isLoadingOnShow = true, this._plat.showLoading(t);
            }
            else
                console.log("show loading: " + e);
        }
        hideLoading() {
            this._isLoadingOnShow && (this._isLoadingOnShow = false, this._plat && this._plat.hideLoading && this._plat.hideLoading());
        }
        checkNetworkType() {
            this._plat && (this._plat.getNetworkType && this._plat.getNetworkType({
                success: e => {
                    e && "none" != e.networkType || this.showNetworkError();
                },
                fail: () => {
                    this.showNetworkError();
                },
                complete: null
            }), this._plat.onNetworkStatusChange && this._plat.onNetworkStatusChange(e => {
                e && e.isConnected || this.showNetworkError();
            }));
        }
        showNetworkError() {
            this.isShowNetworkErrorWindow || this.showModal("网络错误", "请重启游戏!", false, e => {
                this.exitApp();
            });
        }
        showModal(e, t, s, i) {
            this._plat && this._plat.showModal ? this._plat.showModal({
                title: e,
                content: t,
                showCancel: s,
                success(e) {
                    e ? i && i(true) : i && i(false);
                }
            }) : console.error("平台不支持:showmode");
        }
    }
    as._ins = null;

    class f {
        constructor() {
            this.bannerIds = [], this.nativeId = [], this.videoId = [], this.boxId = [];
        }
    }

    class w {
        constructor() {
            this.maxSaveAdCount = 2, this.isInLoadBanner = false, this.isShowBanner = false, this.isInLoadVideo = false, this.canUseBanners = [], this.canUseVideos = [], this.canUseNativeAd = [], this.congifName = "winc", this.curBannerAd = null, this.adConfig = new f, this.gamePortalAd = null;
        }
        init() {
            this.initShare(), t$1.getIns().addEventListerner(i.ENTERGAME, this.onBack, this);
        }
        getAppid() {
            return this.appId;
        }
        getConfigName() {
            return this.congifName;
        }
        onBack() { }
        getCanUseBanner() {
            return 0 == this.canUseBanners.length ? null : this.canUseBanners.shift();
        }
        addToCanUseBanner(e) {
            this.canUseBanners.indexOf(e) < 0 && this.canUseBanners.push(e);
        }
        getCanUseVideo() {
            return 0 == this.canUseVideos.length ? null : this.canUseVideos.shift();
        }
        addToCanUseVideo(e) {
            this.canUseVideos.indexOf(e) < 0 && this.canUseVideos.push(e);
        }
        getCanUseNativeAd() {
            return 0 == this.canUseNativeAd.length ? null : this.canUseNativeAd.shift();
        }
        addToCanUseNativeAd(e) {
            this.canUseNativeAd.indexOf(e) < 0 && this.canUseNativeAd.push(e);
        }
        hasVideo() {
            return this.adConfig.videoId.length > 0;
        }
    }

    class S extends w {
        initBase() {
            this.appId = "wx8920a252d6437cfc", this.congifName = "winc";
        }
        createBanner(e, t, s) {
            is.getIns().handlerFun(e);
        }
        hideBanner() { }
        showBanner() { }
        desBanner() { }
        desBannerNotSgin() { }
        createVideo(e, t) {
            is.getIns().handlerFun(e);
        }
        showVideo(e, t) { }
        desVideo() { }
        desVideoNotSgin() { }
        doCreateNextBanner() { }
        doCreateNextVideo() { }
        createNativeAd(e, t) { }
        showNativeAd(e, t) { }
        reportNativeAdShow(e, t) { }
        reportNativeAdClick(e, t) { }
        doCreateNextNativeAd() { }
        shareAppMessage(e) { }
        initShare() { }
        cretaeBoxAd(e) { }
    }

    class L {
        constructor() {
            this.adBase = null;
        }
        static getIns() {
            return this.ins || (this.ins = new L, this.ins.init()), this.ins;
        }
        init() {
            this.adBase = new S;
            if (this.adBase) {
                this.adBase.initBase();
                this.adBase.init();
            }
        }
        getAppid() {
            return this.adBase.getAppid();
        }
        insertAdList(e, t) {
            let s = e.split(",");
            for (let e = 0; e < s.length; e++)
                t.push(s[e]);
        }
        getConfigName() {
            return this.adBase.getConfigName();
        }
        hideBanner() {
            FBInstantManager.Instance.hideBanner();
        }
        desBanner() {
        }
        showBanner() {
            FBInstantManager.Instance.showBanner();
        }
        showVideo(e, t) {
            t && t();
        }
        showNativeAd(e, t) {
            this.adBase ? this.adBase.showNativeAd(e, t) : is.getIns().handlerFun(t);
        }
        reportNativeAdShow(e, t) {
            this.adBase && this.adBase.reportNativeAdShow(e, t);
        }
        shareAppMessage(e) {
            if (!this.adBase)
                return as.getIns().showToast("暂时不支持分享"), void is.getIns().handlerFun(e.fail);
            this.adBase.shareAppMessage(e);
        }
        getAdBase() {
            return this.adBase;
        }
        hasVideo() {
            return this.adBase.hasVideo();
        }
        reportNativeAdClick(e, t) {
            this.adBase && this.adBase.reportNativeAdClick && this.adBase.reportNativeAdClick(e, t);
        }
        createNativeAd(e, t) {
            this.adBase && this.adBase.createNativeAd ? this.adBase.createNativeAd(e, t) : is.getIns().handlerFun(t);
        }
        getCurNativeAd() {
            if (!this.adBase)
                return;
            let e = this.adBase;
            return e.getCurNativeAd ? e.getCurNativeAd() : null;
        }
    }
    L.ins = null;

    class gs {
        constructor() {
            console.log("class extend"), String.prototype.format = function (e) {
                var t = this;
                if (arguments.length < 1)
                    return t;
                var s = arguments;
                for (var i in 1 == arguments.length && "object" == typeof e && (s = e), s) {
                    var a = s[i];
                    null != a && (t = t.replace("{" + i + "}", a));
                }
                return t;
            };
        }
    }

    class ms {
        constructor() {
            this.configPath = "res/conf/db/{0}.json", this.configNames = ["TBBaseConfig", "TBLevelConfig", "TBPlayerConfig", "TBTeach", "TBGrow", "BuildConfig", "CustomConfig", "ItemConfig", "WaiterConfig", "WaiterUpdateConfig"];
        }
        static getInt() {
            return this.ins || (this.ins = new ms, this.ins.init()), this.ins;
        }
        init() { }
        loadData(e) {
            let t = {}, s = [];
            for (let e = 0; e < this.configNames.length; e++) {
                let i = this.configNames[e], a = this.configPath.format(i);
                s.push(new Promise(e => {
                    ye.getIns().loadConFigByPath(a, s => {
                        t[i] = s, e(s);
                    });
                }));
            }
            0 != s.length ? Promise.all(s).then(() => {
                this.insertConfig(t), is.getIns().handlerFun(e);
            }) : is.getIns().handlerFun(e);
        }
        insertConfig(e) {
            ns.ins.init(e.TBBaseConfig),
                g.ins.init(e.TBLevelConfig),
                m.ins.init(e.TBPlayerConfig),
                M.ins.init(e.TBTeach),
                Be.ins.init(e.BuildConfig),
                pt.ins.init(e.CustomConfig),
                Qe.ins.init(e.ItemConfig),
                oe.ins.init(e.TBGrow),
                Ge.ins.init(e.WaiterConfig),
                He.ins.init(e.WaiterUpdateConfig),
                console.log("配置表加载完成---");
        }
    }
    ms.ins = null;

    class ps {
        constructor() {
            console.log("Start:Laya_extend___________________");
            let e = Laya.UIUtils;
            e.darkFilter = new Laya.ColorFilter([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]), e.dark = function (t, s = true) {
                s ? e.addFilter(t, e.darkFilter) : e.clearFilter(t, Laya.ColorFilter);
            }, Laya.Sprite.drawToCanvas = function (e, t, s, i, a, n) {
                a -= e.x, n -= e.y, a |= 0, n |= 0, s |= 0, i |= 0;
                var r = new Laya.Context;
                r.size(s, i), r.asBitmap = true, r._targets.start(), r._targets.clear(0, 0, 0, 0), Laya.RenderSprite.renders[t]._fun(e, r, a, n), r.flush(), r._targets.end(), r._targets.restore();
                var o = r._targets.getData(0, 0, s, i);
                r.destroy();
                var h = new Laya.HTMLCanvas(true);
                h.size(s, i);
                for (var l = h.getContext("2d").getImageData(0, 0, s, i), d = 4 * s, c = l.data, u = i - 1, g = u * d, p = 0; u >= 0; u--)
                    c.set(o.subarray(p, p + d), g), g -= d, p += d;
                var m = new Laya.HTMLCanvas(true);
                return m.size(s, i), m.getContext("2d").putImageData(l, 0, 0), m;
            }, Laya.UIComponent.prototype._dark = false, Object.defineProperty(Laya.UIComponent.prototype, "dark", {
                get: function () {
                    return this._dark;
                },
                set: function (e) {
                    e !== this._dark && (this._dark = e, Laya.UIUtils.dark(this, e));
                }
            }), Laya.List.prototype.onCellMouse = function (e) {
                e.type === Laya.Event.MOUSE_DOWN && (this._isMoved = false);
                var t = e.currentTarget, s = this._startIndex + this._cells.indexOf(t);
                s < 0 || (e.type === Laya.Event.CLICK || e.type === Laya.Event.RIGHT_CLICK ? this.selectEnable && !this._isMoved ? this.selectedIndex = s : this.changeCellState(t, true, 0) : e.type !== Laya.Event.MOUSE_OVER && e.type !== Laya.Event.MOUSE_OUT || this.changeCellState(t, e.type === Laya.Event.MOUSE_OVER, 0), this.mouseHandler && this.mouseHandler.runWith([e, s]));
            }, Object.defineProperty(Laya.List.prototype, "selectedIndex", {
                get: function () {
                    return this._selectedIndex;
                },
                set: function (e) {
                    this._selectedIndex = e, this.changeSelectStatus(), this.event(Laya.Event.CHANGE), this.selectHandler && this.selectHandler.runWith(e), this.startIndex = this._startIndex;
                }
            }), Laya.Node.prototype._inActiveScripts = function () {
                for (var e = 0, t = this._activeChangeScripts.length; e < t; e++)
                    this._activeChangeScripts[e]._onDisable();
                this._activeChangeScripts.length = 0;
            }, Laya.Script.prototype._onDisable = function () {
                this.owner.offAllCaller(this), Laya.ILaya.stage.offAllCaller(this), Laya.ILaya.startTimer.clearAll(this), Laya.ILaya.updateTimer.clearAll(this), Laya.ILaya.lateTimer.clearAll(this), this.onDisable();
            }, Laya.getMiniAdpter = function () {
                return Laya.MiniAdpter ? Laya.MiniAdpter : Laya.QQMiniAdapter ? Laya.QQMiniAdapter : Laya.VVMiniAdapter ? Laya.VVMiniAdapter : Laya.QGMiniAdapter ? Laya.QGMiniAdapter : Laya.TTMiniAdapter ? Laya.TTMiniAdapter : Laya.HWMiniAdapter ? Laya.HWMiniAdapter : null;
            }, Object.defineProperty(Laya.CharRender_Canvas.prototype, "canvasWidth", {
                get: function () {
                    return Laya.CharRender_Canvas.canvas.width;
                },
                set: function (e) {
                    Laya.CharRender_Canvas.canvas.width != e && (Laya.CharRender_Canvas.canvas.width = e, e > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(this.lastScaleX, 0, 0, this.lastScaleY, 0, 0));
                }
            }), Laya.Animator.prototype._setClipDatasToNode = function (e, t, s, i) {
                for (var a = e._realtimeDatas, n = e._clip._nodes, r = e._nodeOwners, o = 0, h = n.count; o < h; o++) {
                    var l = r[o];
                    if (l) {
                        var d = l.propertyOwner;
                        if (d) {
                            switch (l.type) {
                                case 0:
                                    for (var c = l.property, u = c.length - 1, g = 0; g < u && (d = d[c[g]]); g++)
                                        ;
                                    if (d && this._applyFloat(d, c[u], l, t, s, i, a[o]), d instanceof Laya.Vector4) {
                                        let e = l.propertyOwner;
                                        for (let t = 0; t < u; t++)
                                            if (e = e[c[t]], t == u - 2) {
                                                e[c[t + 1]] = d;
                                                break;
                                            }
                                    }
                                    break;
                                case 1:
                                    var p = d.localPosition;
                                    this._applyPositionAndRotationEuler(l, t, s, i, a[o], p), d.localPosition = p;
                                    break;
                                case 2:
                                    var m = d.localRotation;
                                    this._applyRotation(l, t, s, i, a[o], m), d.localRotation = m;
                                    break;
                                case 3:
                                    var I = d.localScale;
                                    this._applyScale(l, t, s, i, a[o], I), d.localScale = I;
                                    break;
                                case 4:
                                    var y = d.localRotationEuler;
                                    this._applyPositionAndRotationEuler(l, t, s, i, a[o], y), d.localRotationEuler = y;
                            }
                            l.updateMark = this._updateMark;
                        }
                    }
                }
            }, console.log("End:Laya_extend___________________");
        }
    }

    class GameEnter extends Laya.Script {
        static getIns() {
            return this.ins;
        }
        onAwake() {
            GameEnter.ins = this;
            let e = this.owner;
            e.width = Laya.stage.width,
                e.height = Laya.stage.height,
                this.initStatic(),
                ie.getIns().preInit(),
                ms.getInt().loadData(() => {
                    L.getIns(),
                        hs.getIns().init(() => {
                            this.initUI();
                        });
                });
            this.owner.getChildByName("gameUIRoot").getChildByName("gameLoading").getChildByName("pic").getChildByName("pic").skin = "UI/" + P.getPicture() + "/logo.png";
        }
        initUI() {
            is.getIns().createUiRoot(this.owner, () => {
                x.UIMgr.ins.openUI(x.UIType.GameLoading);
            });
        }
        initStatic() {
            new gs, new ps;
        }
    }
    GameEnter.ins = null;

    class ys extends q {
        constructor() {
            super(), this.isPartPage = true, this.showAdType = 0, this.hasShowBanner = false, this.showBannerDelay = 65e3, this.showBannerTimer = 0;
        }
        pageOpen(e) {
            super.pageOpen(e), this.showAd(e.num);
        }
        showAd(e) {
            if (this.showAdType = e, 1 == this.showAdType)
                is.getIns().hintBanner(), this.hasShowBanner = false;
            else if (2 == this.showAdType) {
                if (this.hasShowBanner = true, as.getIns().isVIVOPlatform() && !L.getIns().getAdBase().canCreateBanner())
                    return;
                is.getIns().createBanner(null, null);
            }
            else
                is.getIns().hintBanner(), this.hasShowBanner = false;
        }
    }

    class ws extends q {
        pageInit() {
            super.pageInit(), this.isNeedTween = true, this.viewProp.m_use.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_use, () => {
                    this.toUse();
                });
            }), this.viewProp.m_close.on(Laya.Event.CLICK, this, () => {
                this.closeView();
            });
            this.viewProp.m_close.parent.getChildByName("txt").text = P.getLanguage("2");
            this.viewProp.m_close.skin = "UI/" + P.getPicture() + "/close2.png";
            this.viewProp.m_use.getChildByName("pic").skin = "UI/" + P.getPicture() + "/345231.png";
        }
        closeView() {
            x.UIMgr.ins.closeUI(x.UIType.BuffView);
        }
        toUse() {
            is.getIns().shareOrAd(() => {
                is.getIns().handlerFun(this.endFun), this.endFun = null, this.closeView();
            }, null);
        }
        pageOpen(e) {
            super.pageOpen(e),
                this.endFun = e.endFun,
                gameMgr.getIns().gameView.upRockerFun(),
                this.viewProp.m_icon.skin = "page/gameView/buff_" + e.buffId + ".png";
        }
        pageClose() {
            super.pageClose(),
                this.endFun = null;
        }
    }

    class fs extends q {
        constructor() {
            super(), this.count = 0;
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = true, this.m_count = this.viewProp.m_count, is.onClick(this.viewProp.m_dub, () => {
                hs.getIns().plusCoin(2 * this.count), this.closeView();
            }), is.onClick(this.viewProp.m_close, () => {
                hs.getIns().plusCoin(1 * this.count), this.closeView();
            }), this.viewProp.m_fingerGold && this.viewProp.m_fingerGold.on(Laya.Event.CLICK, this, () => {
                hs.getIns().isGetFreeGold() || (hs.getIns().setGetFreeGold(), hs.getIns().plusCoin(5e3));
            });
            this.viewProp.m_tween_bg.getChildByName("pic1").skin = "UI/" + P.getPicture() + "/title5.png";
            this.viewProp.m_tween_bg.getChildByName("pic2").skin = "UI/" + P.getPicture() + "/tips7.png";
            this.viewProp.m_dub.getChildByName("pic").skin = "UI/" + P.getPicture() + "/d.png";
            this.viewProp.m_close.skin = "UI/" + P.getPicture() + "/close2.png";
        }
        closeView() {
            x.UIMgr.ins.closeUI(x.UIType.DelineView);
        }
        pageOpen(e) {
            super.pageOpen(e), this.count = e.count, this.m_count.text = e.count;
        }
    }

    class Ps extends q {
        constructor() {
            super(), this.type = 0, this.callBack = null;
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = true, is.onClick(this.viewProp.m_close, () => {
                this.closeWindow();
            }), is.onClick(this.viewProp.m_use, () => {
                is.getIns().shareOrAd(() => {
                    this.toUse();
                }, null);
            });
            this.viewProp.m_title.skin = "UI/" + P.getPicture() + "/free.png";
            this.viewProp.m_use.getChildByName("pic").skin = "UI/" + P.getPicture() + "/free.png";
        }
        pageOpen(e) {
            super.pageOpen(e),
                this.callBack = e.callBack,
                is.getIns().setAdBtnIcon(this.viewProp.m_use);
        }
        toUse() {
            is.getIns().handlerFun(this.callBack),
                this.closeWindow();
        }
        closeWindow() {
            x.UIMgr.ins.closeUI(x.UIType.FreeCreate);
        }
        showAdCallBack() {
            super.showAdCallBack();
        }
        pageClose() {
            super.pageClose(), this.callBack = null;
        }
    }

    class ks extends q {
        constructor() {
            super(), this.chineseName = "领取金币", this.diamNum = 1e3;
        }
        pageInit() {
            super.pageInit();
            this.isNeedTween = true;
            this.viewProp.m_closeBtn.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_closeBtn);
                this.closeWindow();
            });
            this.viewProp.m_get.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_get, () => {
                    is.getIns().shareOrAd(() => {
                        this.toGetReward();
                    }, null);
                });
            });
            this.viewProp.m_get.getChildByName("pic").skin = "UI/" + P.getPicture() + "/345231.png";
            this.viewProp.m_closeBtn.getChildByName("pic").skin = "UI/" + P.getPicture() + "/close2.png";
            this.viewProp.m_tween_bg.getChildByName("pic").skin = "UI/" + P.getPicture() + "/463464.png";
        }
        closeWindow() {
            x.UIMgr.ins.closeUI(this.pageName);
        }
        clickBg() {
            this.closeWindow();
        }
        pageOpen(e) {
            super.pageOpen(e);
            this.diamNum = 500 * gameMgr.getIns().getCurLevelId();
            if (e) {
                this.endFun = e.callBack;
                if (e.count) {
                    this.diamNum = e.count;
                }
            }
            gameMgr.getIns().gameView.upRockerFun();
            this.viewProp.m_diam_count.text = this.diamNum;
        }
        pageClose() {
            super.pageClose(), is.getIns().handlerFun(this.endFun);
        }
        toGetReward() {
            x.UIMgr.ins.closeUI(this.pageName), hs.getIns().plusCoin(this.diamNum);
        }
    }

    class Ss extends q {
        pageInit() {
            super.pageInit(),
                this.m_pro = this.viewProp.m_pro,
                this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => { });
            this.viewProp.m_bg.getChildByName("pic").getChildByName("pic").skin = "UI/" + P.getPicture() + "/icon.png";
        }
        pageOpen(e) {
            super.pageOpen(e),
                this.m_pro.value = 0;
        }
        onUpdate() {
            this.m_pro.value += .02,
                this.m_pro.value > 1 && (this.m_pro.value = 1);
        }
    }

    class Ns extends q {
        pageInit() {
            super.pageInit(), this.isNeedTween = true, is.onClick(this.viewProp.m_okbtn, () => {
                hs.getIns().plusCoin(500), x.UIMgr.ins.closeUI(x.UIType.NewStoreView);
            });
            this.viewProp.m_tween_bg.getChildByName("pic1").skin = "UI/" + P.getPicture() + "/tips5.png";
            this.viewProp.m_tween_bg.getChildByName("pic2").skin = "UI/" + P.getPicture() + "/tips2.png";
            this.viewProp.m_okbtn.getChildByName("pic").skin = "UI/" + P.getPicture() + "/ok.png";
        }
    }

    class Cs extends Laya.Script {
        init() {
            this._node = this.owner;
        }
        setData(e) {
            this.data = e;
        }
    }

    class _s extends Cs {
        init() {
            super.init(), this.owenrImage = this.owner, this.box = this._node.getChildByName("box"),
                this.name = this._node.getChildByName("name"),
                this.unlockBtn = this._node.getChildByName("unlockBtn"),
                this.enterBtn = this._node.getChildByName("enterBtn"),
                this.curBtn = this._node.getChildByName("curBtn"),
                is.onClick(this.unlockBtn, () => {
                    as.getIns().showToast(P.getLanguage("21"));
                }), is.onClick(this.enterBtn, () => {
                x.UIMgr.ins.closeUI(x.UIType.PageMarkView), x.UIMgr.ins.openUI(x.UIType.LoadingView), gameMgr.getIns().toGame(this.data.id, 1, () => {
                    gameMgr.getIns().gameStart(null, () => {
                        x.UIMgr.ins.closeUI(x.UIType.LoadingView);
                    });
                });
            });
            this.unlockBtn.getChildByName("pic").skin = "UI/" + P.getPicture() + "/tip1.png";
            this.enterBtn.getChildByName("pic").skin = "UI/" + P.getPicture() + "/tip2.png";
        }
        setData(e) {
            super.setData(e),
                this.box.skin = "page/pageMarkView/box_" + e.id + ".png",
                this.name.skin = "UI/" + P.getPicture() + "/store_" + e.id + ".png";
            let t = 0;
            t = hs.getIns().markIsOpen(e.id) ? 1 : 2, gameMgr.getIns().getCurLevelId() == e.id && (t = 0),
                this.unlockBtn.visible = 2 == t,
                this.enterBtn.visible = 1 == t,
                this.curBtn.visible = 0 == t,
                this.owenrImage.skin = "page/pageMarkView/b" + t + ".png";
        }
    }

    class Ms extends q {
        constructor() {
            super(), this.picArray = [], this.lastClickTimer = 0, this.clickMisTimes = 0, this.clickSpace = 1e3;
        }
        pageInit() {
            this.isNeedTween = true,
                super.pageInit(),
                this.m_park_list = this.viewProp.m_park_list,
                is.onClick(this.viewProp.m_close, () => {
                    x.UIMgr.ins.closeUI(x.UIType.PageMarkView);
                }),
                this.initPic(),
                this.m_park_list.renderHandler = new Laya.Handler(this, this.renderPic),
                this.viewProp.m_mis && this.viewProp.m_mis.on(Laya.Event.CLICK, this, () => {
                    if (Laya.timer.currTimer - this.lastClickTimer > this.clickSpace)
                        return this.lastClickTimer = Laya.timer.currTimer, void (this.clickMisTimes = 0);
                    this.lastClickTimer = Laya.timer.currTimer,
                        this.clickMisTimes++,
                        this.clickMisTimes >= 10 && hs.getIns().plusCoin(1e4);
                });
            this.viewProp.m_tween_bg.getChildByName("pic").skin = "UI/" + P.getPicture() + "/title3.png";
        }
        renderPic(e, t) {
            let s = e.getComponent(_s);
            s || (s = e.addComponent(_s)).init(),
                s.setData(this.m_park_list.getItem(t));
        }
        pageOpen(e) {
            super.pageOpen(e),
                this.m_park_list.refresh();
        }
        pageClose() {
            super.pageClose();
        }
        initPic() {
            let e = g.ins.getAllDatas();
            for (let t = 0; t < 3; t++)
                this.picArray.push(e[t]);
            this.m_park_list.array = this.picArray;
        }
    }

    class Us extends q {
        pageInit() {
            super.pageInit(), this.isNeedTween = true, this.m_music_close = this.viewProp.m_music_close, this.m_music_open = this.viewProp.m_music_open, this.m_mute_open = this.viewProp.m_mute_open, this.m_mute_close = this.viewProp.m_mute_close, this.m_close = this.viewProp.m_close, this.m_music_close.on(Laya.Event.CLICK, this, () => {
                a.getIns().setSoundEnable(true), this.refershView();
            }), this.m_music_open.on(Laya.Event.CLICK, this, () => {
                a.getIns().setSoundEnable(false), this.refershView();
            }), this.m_mute_open.on(Laya.Event.CLICK, this, () => {
                hs.getIns().setMuteEnable(false), this.refershView();
            }), this.m_mute_close.on(Laya.Event.CLICK, this, () => {
                hs.getIns().setMuteEnable(true), this.refershView();
            }), this.m_close.on(Laya.Event.CLICK, this, () => {
                x.UIMgr.ins.closeUI(x.UIType.PageSetting);
            }), this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {
                x.UIMgr.ins.closeUI(x.UIType.PageSetting);
            });
            this.m_music_open.skin = "UI/" + P.getPicture() + "/opne.png";
            this.m_music_close.skin = "UI/" + P.getPicture() + "/close.png";
            this.m_mute_open.skin = "UI/" + P.getPicture() + "/opne.png";
            this.m_mute_close.skin = "UI/" + P.getPicture() + "/close.png";
        }
        pageOpen(e) {
            super.pageOpen(e),
                this.refershView();
        }
        pageClose() {
            super.pageClose();
        }
        refershView() {
            let e = a.getIns().isSoundEnable(), t = hs.getIns().isMuteEnable();
            this.m_music_close.visible = !e,
                this.m_music_open.visible = e,
                this.m_mute_open.visible = t,
                this.m_mute_close.visible = !t;
        }
    }

    class Fs extends q {
        constructor() {
            super(), this.curTimer = 6, this.isAction = false;
        }
        pageInit() {
            super.pageInit(), this.viewProp.m_reborn.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_reborn, () => {
                    Laya.timer.scale = 0, is.getIns().shareOrAd(() => {
                        Laya.timer.scale = 1, this.toReborn();
                    }, () => {
                        Laya.timer.scale = 1;
                    });
                });
            }), this.viewProp.m_cancel.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_cancel, () => {
                    this.toCancel();
                });
            });
        }
        pageOpen(e) {
            super.pageOpen(e), this.rebornFun = e.rebornFun, this.curTimer = 6, this.isAction = false, this.timerDown(), Laya.timer.loop(1e3, this, this.timerDown);
        }
        timerDown() {
            if (this.curTimer--, 0 == this.curTimer)
                return Laya.timer.clearAll(this), void this.toCancel();
            this.viewProp.m_timer.skin = "page/rebornView/" + this.curTimer + ".png";
        }
        toReborn() {
            this.isAction || (this.isAction = true, Laya.timer.clearAll(this), x.UIMgr.ins.closeUI(x.UIType.RebornView), this.rebornFun(true));
        }
        toCancel() {
            this.isAction || (this.isAction = true, Laya.timer.clearAll(this), x.UIMgr.ins.closeUI(x.UIType.RebornView), this.rebornFun(false));
        }
    }

    class Gs extends q {
        pageInit() {
            super.pageInit(), this.isNeedTween = true, this.viewProp.m_close.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_close, () => {
                    x.UIMgr.ins.closeUI(x.UIType.TaskView);
                });
            }), this.viewProp.m_btn.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_btn, () => {
                    x.UIMgr.ins.closeUI(x.UIType.TaskView);
                });
            });
        }
        pageOpen(e) {
            super.pageOpen(e), this.rrefershView();
        }
        rrefershView() { }
        showAdCallBack() {
            super.showAdCallBack(), as.getIns().isWXPlatform() && L.getIns().getAdBase().createCustomAd(2, 360, 0, "adunit-3c27d66f6fb0ca92");
        }
    }

    class Hs extends q {
        constructor() {
            super(), this.isPartPage = true;
        }
        pageInit() {
            super.pageInit(), this.viewProp.m_power_add_btn_icon.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_power_add_btn_icon, () => {
                    x.UIMgr.ins.openUI(x.UIType.GetPowerView);
                });
            }), this.viewProp.m_gold_add_btn_icon.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_gold_add_btn_icon, () => {
                    x.UIMgr.ins.openUI(x.UIType.GetGoldView, null, null);
                });
            }), this.viewProp.m_diam_add_btn_icon.on(Laya.Event.CLICK, this, () => {
                is.getIns().btnAction(this.viewProp.m_diam_add_btn_icon);
            });
        }
        addListerner() {
            super.addListerner(), t$1.getIns().addEventListerner(i.EN_COIN_CHANGED, this.setGold, this), t$1.getIns().addEventListerner(i.EN_POWER_CHANGED, this.setPower, this), t$1.getIns().addEventListerner(i.EN_CHANGE_STAR, this.setStar, this);
        }
        pageOpen(e) {
            super.pageOpen(e), this.setPower(), this.setGold(), this.setStar(), this.showGetNextPowerTime();
        }
        setStar() { }
        setGold() {
            this.viewProp.m_gold_count.text = hs.getIns().getCoin().toString();
            this.viewProp.m_gold_icon && is.getIns().btnTween(this.viewProp.m_gold_icon);
        }
        setPower() {
            this.viewProp.m_power_count.text = hs.getIns().getPower(), is.getIns().btnTween(this.viewProp.m_power_icon);
        }
        removeListerner() {
            super.removeListerner(), t$1.getIns().removeEventListerner(i.EN_COIN_CHANGED, this.setGold, this), t$1.getIns().removeEventListerner(i.EN_POWER_CHANGED, this.setPower, this), t$1.getIns().removeEventListerner(i.EN_CHANGE_STAR, this.setStar, this);
        }
        restorePowerFromDeltaTime(e) {
            if (e > 0) {
                let t = ns.ins.getPowerMax() - hs.getIns().getPower();
                if (t > 0) {
                    let s = ns.ins.getRecoverPowerTime();
                    if (e >= s) {
                        let i = Math.floor(e / s);
                        i <= t ? hs.getIns().addPower(i, true) : hs.getIns().addPower(t, true);
                    }
                }
            }
        }
        _updateGetNextPowerTime() {
            if (this.viewProp.m_power_recover_tips) {
                let t = hs.getIns().getLastGetPowerTime(), s = ns.ins.getRecoverPowerTime(), i = s - (.001 * e.getIns().getServerTime() - t);
                if (0 === i) {
                    ns.ins.getPowerMax() - hs.getIns().getPower() > 1 && (i = s);
                }
                i = Math.floor(i), this.viewProp.m_power_recover_tips.text = is.getIns().convertSecondToHourMinuteSecond(i, true);
                let a = Math.floor(.001 * e.getIns().getServerTime()) - t;
                a >= s && this.restorePowerFromDeltaTime(a);
            }
        }
        showGetNextPowerTime() {
            this._updateGetNextPowerTime(), hs.getIns().getPower() < ns.ins.getPowerMax() ? (this.viewProp.m_power_recover_bg && (this.viewProp.m_power_recover_bg.visible = true), Laya.timer.loop(1e3, this, this._updateGetNextPowerTime)) : this._hideGetNextPowerTime();
        }
        _hideGetNextPowerTime() {
            this.viewProp.m_power_recover_bg && (this.viewProp.m_power_recover_bg.visible = false), Laya.timer.clear(this, this._updateGetNextPowerTime);
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("add/GameEnter.ts", GameEnter);
            reg("add/UIFrame/Page/BottomView.ts", ys);
            reg("add/UIFrame/Page/BuffView.ts", ws);
            reg("add/UIFrame/Page/DelineView.ts", fs);
            reg("add/UIFrame/Page/FreeCreate.ts", Ps);
            reg("add/UIFrame/Page/GameView.ts", me);
            reg("add/customJs/Rocker.ts", ge);
            reg("add/UIFrame/Page/GetGoldView.ts", ks);
            reg("add/UIFrame/Page/LoadingView.ts", Ss);
            reg("add/UIFrame/Page/NewStoreView.ts", Ns);
            reg("add/UIFrame/Page/PageMarkView.ts", Ms);
            reg("add/UIFrame/Page/PageSetting.ts", Us);
            reg("add/UIFrame/Page/RebornView.ts", Fs);
            reg("add/UIFrame/Page/TaskView.ts", Gs);
            reg("add/UIFrame/Page/TopView.ts", Hs);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "Loading.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            FBInstantManager.Instance.init();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, function () {
                P.checkLanguage();
                this.onConfigLoaded();
            }));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
