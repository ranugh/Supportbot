webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <base href=\"/\">\n  <title>Conversation Chat App</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta property=\"og:image\" content=\"conversation.svg\" />\n  <meta property=\"og:title\" content=\"Conversation Chat Simple\" />\n  <meta property=\"og:description\" content=\"Sample application that shows how to use the Conversation API to identify user intents\"\n  />\n  <link rel=\"shortcut icon\" href=\"../favicon.ico\" type=\"image/x-icon\">\n  <link rel=\"stylesheet\" href=\"../assets/css/app.css\">\n</head>\n\n<body>\n  <!-- <div id=\"view-change-button\" class=\"button\" onclick=\"togglePanel(event, this)\">\n    <img class=\"option full\" src=\"../assets/img/Chat Button.png\">\n    <img class=\"option not-full\" src=\"../assets/img/Code Button.png\">\n  </div> -->\n  <div id=\"contentParent\" class=\"responsive-columns-wrapper\">\n    <div id=\"chat-column-holder\" class=\"responsive-column content-column\">\n      <div class=\"chat-column\">\n        <div id=\"scrollingChat\"></div>\n        <label for=\"textInput\" class=\"inputOutline\">\n            <input id=\"textInput\" class=\"input responsive-column\"\n              placeholder=\"Type something\" type=\"text\" [(ngModel)] = \"textMessage\"\n              (keydown)=\"inputKeyDown($event)\">\n          </label>\n      </div>\n    </div>\n    <!-- <div id=\"payload-column\" class=\"fixed-column content-column\">\n      <div id=\"payload-initial-message\">\n        Type something to see the output\n      </div>\n      <div id=\"payload-request\" class=\"payload\"></div>\n      <div id=\"payload-response\" class=\"payload\"></div>\n    </div> -->\n  </div>\n\n  <!-- <script src=\"js/common.js\"></script>\n  <script src=\"js/api.js\"></script>\n  <script src=\"js/conversation.js\"></script>\n  <script src=\"js/payload.js\"></script>\n  <script src=\"js/global.js\"></script> -->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_conversation_message_dto__ = __webpack_require__("./src/app/model/conversation-message.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_global_service__ = __webpack_require__("./src/app/service/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(globalService) {
        this.globalService = globalService;
        this.textMessage = '';
        this.message = new __WEBPACK_IMPORTED_MODULE_1__model_conversation_message_dto__["a" /* ConversationMessage */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sendConversationMessage();
    };
    AppComponent.prototype.inputKeyDown = function (event) {
        if (event.keyCode === 13) {
            this.message.input = { 'text': this.textMessage };
            // this.message.context = this.context;
            this.textMessage = '';
            this.sendConversationMessage();
        }
    };
    AppComponent.prototype.sendConversationMessage = function () {
        var _this = this;
        this.globalService.sendConversationMessage(this.message).subscribe(function (response) {
            _this.message.context = response.context;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_global_service__["a" /* GlobalService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_global_service__ = __webpack_require__("./src/app/service/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_global_service__["a" /* GlobalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/global/RestEndPoints.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestEndPoints; });
var RestEndPoints = (function () {
    function RestEndPoints() {
    }
    /**
       * Provides the Base URL of Application
       */
    RestEndPoints.getBaseURL = function () {
        var baseUrl = window.location.host;
        return '/conversation';
    };
    RestEndPoints.MESSAGE = '/message';
    return RestEndPoints;
}());



/***/ }),

/***/ "./src/app/model/conversation-message.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationMessage; });
var ConversationMessage = (function () {
    function ConversationMessage() {
    }
    return ConversationMessage;
}());



/***/ }),

/***/ "./src/app/service/common-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonDataService = (function () {
    function CommonDataService(http) {
        this.http = http;
    }
    CommonDataService.prototype.getAllEntities = function (url) {
        var _this = this;
        var that = this;
        return this.http.get(url)
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err, url); });
        // .finally(() => this.ngProgress.done());
    };
    CommonDataService.prototype.getEntity = function (url) {
        var _this = this;
        var that = this;
        return this.http.get(url)
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err, url); });
        //  .finally(() => this.ngProgress.done());
    };
    CommonDataService.prototype.getEntityWithPayloadAsArg = function (url, payload) {
        var _this = this;
        var that = this;
        var reqHead = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        reqHead.append('Content-Type', 'application/json');
        return this.http.post(url, payload, { headers: reqHead })
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err, url); });
    };
    CommonDataService.prototype.authenticate = function (url, userInfo) {
        var _this = this;
        var that = this;
        var reqHead = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](userInfo ? {
            authorization: 'Basic ' + btoa(userInfo.login + ':' + userInfo.password)
        } : { authorization: 'Basic ' + btoa('' + ':' + '') });
        reqHead.append('Content-Type', 'application/json');
        if (userInfo) {
            return this.http.post(url, userInfo, { headers: reqHead })
                .map(this.extractData)
                .catch(function (err) { return _this.handleError(err, url); });
        }
        else {
            return this.http.post(url, {}, { headers: reqHead })
                .map(this.extractData)
                .catch(function (err) { return _this.handleError(err, url); });
        }
    };
    CommonDataService.prototype.extractData = function (response) {
        return JSOG.decode(response) || {};
    };
    CommonDataService.prototype.createEntity = function (url, resource) {
        var _this = this;
        var that = this;
        var reqHead = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        reqHead.append('Content-Type', 'application/octet-stream');
        reqHead.append('Content-Encoding', 'gzip');
        var body = JSON.stringify(JSON.parse(JSOG.stringify(resource)), this.replaceEmptyStringsAndBooleans);
        // console.log("body==>"+body);
        var compressedData = this.compressDataUsingPako(body);
        var gzippedBLob = new Blob([compressedData], { type: 'application/octet-stream' });
        return this.http.post(url, gzippedBLob, { headers: reqHead })
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err, url); });
    };
    CommonDataService.prototype.replaceEmptyStringsAndBooleans = function (key, value) {
        if (value === null || value === undefined || (typeof value === 'string' && value === '')) {
            return undefined;
        }
        if (value === null || value === undefined || (typeof value === 'boolean' && value === false)) {
            return undefined;
        }
        return value;
    };
    CommonDataService.prototype.updateEntity = function (url, resource) {
        var _this = this;
        var that = this;
        return this.http.patch(url, resource)
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err, url); });
    };
    // TODO RS - this method is causing bad request issues, needs to be verified
    CommonDataService.prototype.deleteEntity = function (url) {
        var _this = this;
        var that = this;
        return this.http.delete(url)
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err, url); });
    };
    CommonDataService.prototype.handleError = function (error, url) {
        var urlList = url.split('/');
        var errUrl = urlList[urlList.length - 1];
        console.log('url -------- > ' + urlList[urlList.length - 1]);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CommonDataService.prototype.compressDataUsingPako = function (jsonString) {
        var binaryString = pako.gzip(jsonString);
        return binaryString;
    };
    CommonDataService.count = 0;
    CommonDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommonDataService);
    return CommonDataService;
}());



/***/ }),

/***/ "./src/app/service/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_data_service__ = __webpack_require__("./src/app/service/common-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_RestEndPoints__ = __webpack_require__("./src/app/global/RestEndPoints.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalService = (function (_super) {
    __extends(GlobalService, _super);
    function GlobalService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalService.prototype.sendConversationMessage = function (message) {
        var url = __WEBPACK_IMPORTED_MODULE_2__global_RestEndPoints__["a" /* RestEndPoints */].getBaseURL() + __WEBPACK_IMPORTED_MODULE_2__global_RestEndPoints__["a" /* RestEndPoints */].MESSAGE;
        return _super.prototype.getEntityWithPayloadAsArg.call(this, url, message);
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], GlobalService);
    return GlobalService;
}(__WEBPACK_IMPORTED_MODULE_1__common_data_service__["a" /* CommonDataService */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map