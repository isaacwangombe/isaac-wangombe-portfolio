"use strict";
(self["webpackChunkPortfolio"] = self["webpackChunkPortfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments/comments.component */ 3742);
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testing/testing.component */ 6042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent },
    { path: 'resume', component: _testing_testing_component__WEBPACK_IMPORTED_MODULE_2__.TestingComponent },
    { path: 'rate/:id', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__.CommentsComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);



class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _services_projectsapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/projectsapi.service */ 1098);
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testing/testing.component */ 6042);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ 3742);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-hide-on-scroll */ 3103);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 8723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_services_projectsapi_service__WEBPACK_IMPORTED_MODULE_5__.ProjectsapiService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_14__.NgxHideOnScrollModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_16__.MdbCollapseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _testing_testing_component__WEBPACK_IMPORTED_MODULE_6__.TestingComponent,
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__.CommentsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_14__.NgxHideOnScrollModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_16__.MdbCollapseModule] }); })();


/***/ }),

/***/ 3742:
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-animate */ 1921);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










function CommentsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", project_r7.name, " ");
} }
function CommentsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kindly input your Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kindly input a comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r8 = ctx.fill;
    const index_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r8 === 100)("bad", index_r9 < 5);
} }
function CommentsComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r10 = ctx.fill;
    const index_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r10 === 100)("bad", index_r11 < 5);
} }
function CommentsComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r12 = ctx.fill;
    const index_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r12 === 100)("bad", index_r13 < 5);
} }
class CommentsComponent {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.data = [];
        this.alert = false;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allComments;
        this.id = '';
        // cloudinary
        this.cloud = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cloudinary;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            design_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            user_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            content_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        });
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.myForm.patchValue({
            project: this.id,
        });
        this.projectsById();
    }
    getText(data) {
        if (this.myForm.valid) {
            this.myForm.reset();
            this.alert = true;
        }
        this.http
            .post(this.url, data)
            .toPromise()
            .then((data) => { });
        console.log(data);
    }
    toggle() {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    }
    projectsById() {
        this.id = this.route.snapshot.params.id;
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsById + this.id)
            .subscribe((response) => {
            this.byId = response;
        });
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsById + this.id);
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 83, vars: 12, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "half"], [1, "text"], ["target", "blank", 3, "href"], [1, "image-container"], ["alt", "image", 1, "image", 3, "src"], [1, "buttons"], [1, "btn"], ["href", "#projects"], [1, "half2"], [1, "form-title"], ["class", "block-items", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["testForm", "ngForm"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["style", "color: red;", 4, "ngIf"], ["type", "email", "placeholder", "(Optional)", "formControlName", "email", 1, "form-control"], ["type", "text", "rows", "10", "formControlName", "comment", 1, "form-control"], ["type", "number", "formControlName", "design_rating", 1, "review", 3, "max"], ["named", "user", "type", "number", "formControlName", "user_rating", 1, "review", 3, "max"], ["type", "number", "formControlName", "content_rating", 1, "review", 3, "max"], ["type", "submit", 1, "btn", "btn-primary"], [1, "block-items"], [2, "color", "red"], [1, "star"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Kindly rate the site in order to help improve it further.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br")(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kindly follow the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "live link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " to go to the site and explore if you are yet to.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " You can rate it based on the design, The User Experience and the Content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " You can also leave a comment on which parts of the site you liked and which ones you feel could use some improvement, and i will work on getting them to perfect quality as well as take your comments into consideration on future projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " If you wish you can leave your email address and I can let you know when your suggestions have been implemented either on the current or a future project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br")(31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Thank you in advance for your feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10)(36, "a", 7)(37, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Live site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 7)(40, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 12)(43, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13)(46, "div", 14)(47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Kindly rate the site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, CommentsComponent_div_49_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CommentsComponent_Template_form_ngSubmit_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.getText(_r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 18)(53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CommentsComponent_div_56_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, CommentsComponent_div_63_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Design Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ngb-rating", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, CommentsComponent_ng_template_68_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "User Experience Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ngb-rating", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CommentsComponent_ng_template_74_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Content Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ngb-rating", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, CommentsComponent_ng_template_80_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.byId.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx.cloud, "", ctx.byId.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.byId.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.byId.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls.name.invalid && ctx.myForm.controls.name.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls.comment.invalid && ctx.myForm.controls.comment.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbRating], styles: ["*[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style-type: none;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1rem, 4vw);\n  line-height: 1.5;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  font-family: \"Playfair Display\", serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: min(3rem, 6vw);\n  font-family: \"Playfair Display\", serif;\n}\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: min(1.5rem, 3vw);\n  font-family: \"Playfair Display\", serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  background-color: #f4ebd9;\n  text-align: justify;\n}\n.star[_ngcontent-%COMP%] {\n  \n  font-size: 3rem;\n\n  color: #ffffffb9;\n}\n.filled[_ngcontent-%COMP%] {\n  color: #028115;\n}\n.rating[_ngcontent-%COMP%] {\n  padding: 5px;\n}\nli[_ngcontent-%COMP%]:before {\n  content: \"\\2738\";\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: start center;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 20vw;\n  height: 100%;\n}\n.half[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding-top: 70px;\n}\n.half2[_ngcontent-%COMP%] {\n  width: 35vw;\n}\n.image[_ngcontent-%COMP%] {\n  width: 35vw;\n  border-radius: 0px 40px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n@media only screen and (max-width: 992px) {\n  .half2[_ngcontent-%COMP%] {\n    display: grid;\n    grid-row: 1;\n    width: 80vw;\n  }\n  .half[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .image[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100vw;\n    gap: 5rem;\n  }\n}\n.image-container[_ngcontent-%COMP%] {\n  margin: 50px 0px 50px 0px;\n}\nform[_ngcontent-%COMP%] {\n  border-radius: 10px;\n\n  padding: 30px;\n  background-color: #25a9e128;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  place-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 1vw;\n  display: grid;\n  place-items: center;\n\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 50px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\nbtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7QUFDQTs7T0FFTztBQUVQO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztBQUN4QztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTs7RUFFZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsNENBQTRDO0FBQzlDO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0VBQ1g7QUFDRjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDO0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxucCxcbmxpIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1pbigxcmVtLCA0dncpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuaDEge1xuICBmb250LXNpemU6IDh2dztcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cbi8qIGgyIHt9XG5oMyB7fVxuaDQge30gKi9cblxuaDMge1xuICBmb250LXNpemU6IG1pbigzcmVtLCA2dncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuXG5oNSxcbmxhYmVsIHtcbiAgZm9udC1zaXplOiBtaW4oMS41cmVtLCAzdncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuaDYge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnN0YXIge1xuICAvKiBmb250LXNpemU6IDh2dzsgKi9cbiAgZm9udC1zaXplOiAzcmVtO1xuXG4gIGNvbG9yOiAjZmZmZmZmYjk7XG59XG4uZmlsbGVkIHtcbiAgY29sb3I6ICMwMjgxMTU7XG59XG5cbi5yYXRpbmcge1xuICBwYWRkaW5nOiA1cHg7XG59XG5saTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjczOFwiO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IHN0YXJ0IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNjBweCwgMWZyKSk7XG4gIGdhcDogMjB2dztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGFsZiB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nLXRvcDogNzBweDtcbn1cbi5oYWxmMiB7XG4gIHdpZHRoOiAzNXZ3O1xufVxuLmltYWdlIHtcbiAgd2lkdGg6IDM1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0MHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggOHB4IHJnYigxNzgsIDE3OCwgMTc4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGFsZjIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbiAgLmhhbGYge1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW46IDUwcHggMHB4IDUwcHggMHB4O1xufVxuXG5mb3JtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVhOWUxMjg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xufVxuXG4vKiBidXR0b25zICovXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDF2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.slideInRight))]),
        ] } });


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projects.component */ 5609);




class MainComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 68, vars: 2, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "headings"], [1, "head"], [1, "title-heading"], ["src", "assets/images/me.jpeg", "alt", "", 1, "heading-img"], [1, "heading-text"], ["src", "assets/images/comp1.jpg", "alt", "", 1, "heading-img2"], [1, "buttons"], ["href", "#about"], [1, "btn"], ["href", "#projects"], ["target", "blank", 3, "routerLink"], [1, "about-footer"], [1, "about-header-container"], [1, "about-header"], ["src", "assets/images/sun.png", "alt", "", 1, "about-header-icon"], ["id", "about", 1, "about"], ["src", "assets/images/comp2.jpg", "alt", "", 1, "about-img"], [1, "about-text"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "section")(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "ISAAC MARIGA WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u201CModern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u2015 Jacques Ellul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "a", 12)(27, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14)(30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 15)(33, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "ISAAC WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "SOFTWARE DEVELOPER PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section")(43, "div", 4)(44, "div", 17)(45, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "WHO AM I");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "A developer with a deep passion for computing and software, solid foundational skills in finance and training as a full stack developer in HTML, CSS, Javascript and Python, with additional strengths and experience in design, sales and project management. I am looking to use technology to develop innovative solutions that solve real world problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11)(54, "a", 14)(55, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 15)(58, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16)(62, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "ISAAC WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "SOFTWARE DEVELOPER PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "resume");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n  text-decoration: none;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 90px;\n  background-color: #f4ebd9;\n  color: black;\n  text-align: justify;\n}\nsection[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1.5rem, 1.8vw);\n  line-height: 1.5;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 8.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: min(1.5rem, 2vw);\n  font-family: \"Playfair Display\", serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n.title-heading[_ngcontent-%COMP%] {\n  margin-right: -10vw;\n  z-index: 5;\n  position: relative;\n}\n.container[_ngcontent-%COMP%] {\n  height: 50vw;\n  display: grid;\n  place-items: center;\n}\n.heading-img[_ngcontent-%COMP%] {\n  margin-top: 3vw;\n  width: 25vw;\n  border-radius: 50%;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n  z-index: 1;\n}\n.headings[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  place-items: end center;\n  margin-right: 5vw;\n  width: 80vw;\n  height: 28vw;\n}\n.head[_ngcontent-%COMP%] {\n  margin-top: 8vw;\n}\n.head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 9vw;\n}\n.heading-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  grid-template-columns: 1fr 3fr;\n  gap: 5vw;\n  height: 100%;\n  width: 67vw;\n  margin-right: 17vw;\n}\n.heading-img2[_ngcontent-%COMP%] {\n  width: 15vw;\n  height: 15vw;\n  border-radius: 50%;\n  margin-bottom: 10vw;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n  margin-right: -5vw;\n}\n.portfolio-date[_ngcontent-%COMP%] {\n  background-color: black;\n  color: antiquewhite;\n  padding: 1vw;\n  border-radius: 4vw;\n  display: grid;\n  place-items: center;\n}\n.about[_ngcontent-%COMP%] {\n  margin: 5vw;\n  \n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2vw;\n  place-items: center;\n  position: absolute;\n}\n.about-img[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 30vw;\n  border-radius: 12vw;\n  \n  box-shadow: -10px 10px 8px rgb(178, 178, 178);\n  transform: scaleX(-1);\n  object-fit: cover;\n}\n.about-text[_ngcontent-%COMP%] {\n  margin-top: 30vw;\n}\n.about-header-container[_ngcontent-%COMP%] {\n  gap: 0.5vw;\n  display: grid;\n  place-items: center end;\n  grid-template-columns: 4fr 1fr;\n  margin-left: 20vw;\n  z-index: 1;\n}\n.about-header[_ngcontent-%COMP%] {\n  margin-left: -10vw;\n}\n.about-header-icon[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n\n  width: 8vw;\n}\n.about-footer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 2fr 2fr;\n  margin-left: 10vw;\n  margin-right: 10vw;\n}\n.about-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 3px;\n  margin-top: 1vw;\n  border-radius: 100vw;\n  margin-right: 1.5vw;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 1vw;\n  display: grid;\n  place-items: center;\n\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 50px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\nbtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNDQUFzQztBQUN4QztBQUNBOztPQUVPO0FBRVA7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsNkNBQTZDO0VBRzdDLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFFQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0U7Ozs7OztHQU1DO0VBQ0QsaURBQWlEO0FBQ25EIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbnAge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMS44dncpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuaDEge1xuICBmb250LXNpemU6IDguNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuLyogaDIge31cbmgzIHt9XG5oNCB7fSAqL1xuXG5oNSB7XG4gIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMnZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cbmg2IHtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cblxuLnRpdGxlLWhlYWRpbmcge1xuICBtYXJnaW4tcmlnaHQ6IC0xMHZ3O1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDUwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWltZyB7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgd2lkdGg6IDI1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZWFkaW5ncyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgcGxhY2UtaXRlbXM6IGVuZCBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiAyOHZ3O1xufVxuXG4uaGVhZCB7XG4gIG1hcmdpbi10b3A6IDh2dztcbn1cbi5oZWFkID4gZGl2IHtcbiAgbWFyZ2luLXRvcDogOXZ3O1xufVxuXG4uaGVhZGluZy10ZXh0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDV2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjd2dztcbiAgbWFyZ2luLXJpZ2h0OiAxN3Z3O1xufVxuLmhlYWRpbmctaW1nMiB7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIG1hcmdpbi1yaWdodDogLTV2dztcbn1cblxuLnBvcnRmb2xpby1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHBhZGRpbmc6IDF2dztcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQge1xuICBtYXJnaW46IDV2dztcbiAgLyogbWFyZ2luLWxlZnQ6IC0wLjV2dzsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDJ2dztcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWJvdXQtaW1nIHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogMzB2dztcbiAgYm9yZGVyLXJhZGl1czogMTJ2dztcbiAgLyogYm94LXNoYWRvdzogLTEwcHggMTBweCA4cHggIzg4ODg4ODsgKi9cbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYWJvdXQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDMwdnc7XG59XG5cbi5hYm91dC1oZWFkZXItY29udGFpbmVyIHtcbiAgZ2FwOiAwLjV2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBlbmQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbiAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogLTEwdnc7XG59XG5cbi5hYm91dC1oZWFkZXItaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG5cbiAgd2lkdGg6IDh2dztcbn1cblxuLmFib3V0LWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXZ3O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xufVxuXG4uYWJvdXQtZm9vdGVyID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW4tdG9wOiAxdnc7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xufVxuXG4vKiBidXR0b25zICovXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMjVhYWUxLFxuICAgICM0NDgxZWIsXG4gICAgIzA0YmVmZSxcbiAgICAjM2Y4NmVkXG4gICk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDY1LCAxMzIsIDIzNCwgMC43NSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-hide-on-scroll */ 3103);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 8723);




class NavbarComponent {
    constructor() {
        this.navbarCollapsed = false;
        this.dropdownCollapsed = false;
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 37, vars: 1, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["ngxHideOnScroll", "", 1, "navbar", "navbar-expand-lg", 3, "classNameWhenHidden"], [1, "container-fluid"], ["href", ""], ["src", "assets/images/logo.png", "alt", ""], ["type", "button", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["src", "assets/images/menu.png", "alt", "", 1, "toggle-img"], ["id", "navbarSupportedContent", "mdbCollapse", "", 1, "collapse", "navbar-collapse"], ["basicNavbar", "mdbCollapse"], [1, "navbar-nav", "d-flex", "w-auto", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["aria-current", "page", "href", "#about", 1, "nav-link"], ["href", "#projects", "tabindex", "-1", 1, "nav-link"], ["target", "blank", "href", "https://drive.google.com/file/d/1Nb3V3mWSJbd-NC6MjJRG5pUEFDY9Fubx/view?usp=sharing", "tabindex", "-1", 1, "nav-link"], ["target", "blank", "href", "https://www.linkedin.com/in/isaacwangombe/", "tabindex", "-1", 1, "nav-link"], ["target", "blank", "href", "https://github.com/isaacmariga", "tabindex", "-1", 1, "nav-link"], [1, "colapse-clickaway", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body")(8, "nav", 4)(9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10, 11)(16, "ul", 12)(17, "li", 13)(18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mariga's Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 13)(27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 13)(30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Linked-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 13)(33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classNameWhenHidden", "nav--hidden");
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar, ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_2__.NgxHideOnScrollDirective, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_3__.MdbCollapseDirective], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  color: white;\n  background-image: linear-gradient(\n    to right,\n    #25a9e14c,\n    #4481eb52,\n    #04c0fe58,\n    #3f85ed53\n  );\n  padding: 0 2rem;\n  z-index: 100;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #4481eb4a;\n\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n\nimg[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  height: 5rem;\n}\n\n@media screen and (max-width: 992px) {\n  img[_ngcontent-%COMP%] {\n    height: 3rem;\n  }\n}\n\nli[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n  font-size: min(0.9rem, 2vw);\n  margin-left: 1vw;\n\n  display: inline-block;\n  position: relative;\n}\n\na[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #fff;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\na[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n\nnav.nav--hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n\n.colapse-clickaway[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7OztHQU1DO0VBQ0QsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCOztFQUV2QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjs7RUFFaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMjVhOWUxNGMsXG4gICAgIzQ0ODFlYjUyLFxuICAgICMwNGMwZmU1OCxcbiAgICAjM2Y4NWVkNTNcbiAgKTtcbiAgcGFkZGluZzogMCAycmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4MWViNGE7XG5cbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW1nIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGhlaWdodDogNXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICB9XG59XG5cbmxpIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG4gIGZvbnQtc2l6ZTogbWluKDAuOXJlbSwgMnZ3KTtcbiAgbWFyZ2luLWxlZnQ6IDF2dztcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmE6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAwO1xufVxuYTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuXG5uYXYubmF2LS1oaWRkZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuXG4uY29sYXBzZS1jbGlja2F3YXkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 5609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-animate */ 1921);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);











function ProjectsComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_21_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.selectedLanguage = $event); })("change", function ProjectsComponent_div_21_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.projectsByLanguage()); })("change", function ProjectsComponent_div_21_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.togglelanguage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r5.language);
} }
function ProjectsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_21_div_1_Template, 4, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showLangList);
} }
function ProjectsComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 17)(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_26_div_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.selectedFramework = $event); })("change", function ProjectsComponent_div_26_div_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.projectsByFramework()); })("change", function ProjectsComponent_div_26_div_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.toggleframework()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const framework_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.selectedFramework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r13.framework);
} }
function ProjectsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_26_div_1_Template, 5, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.framework);
} }
function ProjectsComponent_div_28_div_5_ng_template_32_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r27.language);
} }
function ProjectsComponent_div_28_div_5_ng_template_32_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r28.framework);
} }
function ProjectsComponent_div_28_div_5_ng_template_32_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r29.tool);
} }
function ProjectsComponent_div_28_div_5_ng_template_32_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r30.database);
} }
function ProjectsComponent_div_28_div_5_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_5_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const modal_r22 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r22.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42)(7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 45)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 26)(15, "li", 27)(16, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 29)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 31)(22, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 29)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 33)(28, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_5_ng_template_32_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const modal_r22 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r22.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 49)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 50)(37, "div", 51)(38, "p", 52)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_28_div_5_ng_template_32_div_41_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 51)(43, "p", 52)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProjectsComponent_div_28_div_5_ng_template_32_div_46_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 51)(48, "p", 52)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Other Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectsComponent_div_28_div_5_ng_template_32_div_51_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 51)(53, "p", 52)(54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProjectsComponent_div_28_div_5_ng_template_32_div_56_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r21.cloud, "", project_r19.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r19.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.database);
} }
function ProjectsComponent_div_28_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.open(_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 26)(11, "li", 27)(12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 29)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 31)(18, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 29)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 33)(24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 34)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 36)(30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProjectsComponent_div_28_div_5_ng_template_32_Template, 57, 11, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r18.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r18.cloud, "", project_r19.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r19.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.name);
} }
function ProjectsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectsComponent_div_28_div_5_Template, 34, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project);
} }
function ProjectsComponent_div_29_div_7_ng_template_32_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r46.language);
} }
function ProjectsComponent_div_29_div_7_ng_template_32_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r47.framework);
} }
function ProjectsComponent_div_29_div_7_ng_template_32_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r48.tool);
} }
function ProjectsComponent_div_29_div_7_ng_template_32_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r49.database);
} }
function ProjectsComponent_div_29_div_7_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_7_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const modal_r41 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r41.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42)(7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 45)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 26)(15, "li", 27)(16, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 29)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 31)(22, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 29)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 33)(28, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_7_ng_template_32_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const modal_r41 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r41.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 49)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 50)(37, "div", 51)(38, "p", 52)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_29_div_7_ng_template_32_div_41_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 51)(43, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProjectsComponent_div_29_div_7_ng_template_32_div_45_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 51)(47, "p", 52)(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Other Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ProjectsComponent_div_29_div_7_ng_template_32_div_50_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 51)(52, "p", 52)(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ProjectsComponent_div_29_div_7_ng_template_32_div_55_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r40.cloud, "", project_r38.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r40.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r40.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r40.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r40.database);
} }
function ProjectsComponent_div_29_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r54.open(_r39)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 26)(11, "li", 27)(12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 29)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 31)(18, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 29)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 33)(24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 34)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 36)(30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProjectsComponent_div_29_div_7_ng_template_32_Template, 56, 11, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r37.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r37.cloud, "", project_r38.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.name);
} }
function ProjectsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects by language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_div_29_div_7_Template, 34, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.byLanguage);
} }
function ProjectsComponent_div_30_div_7_ng_template_32_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r65.language);
} }
function ProjectsComponent_div_30_div_7_ng_template_32_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r66.framework);
} }
function ProjectsComponent_div_30_div_7_ng_template_32_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r67.tool);
} }
function ProjectsComponent_div_30_div_7_ng_template_32_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r68.database);
} }
function ProjectsComponent_div_30_div_7_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_30_div_7_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const modal_r60 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r60.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42)(7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 45)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 26)(15, "li", 27)(16, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 29)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 31)(22, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 29)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 33)(28, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_30_div_7_ng_template_32_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const modal_r60 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r60.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 49)(34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 50)(37, "div", 51)(38, "p", 52)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_30_div_7_ng_template_32_div_41_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 51)(43, "p", 52)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProjectsComponent_div_30_div_7_ng_template_32_div_46_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 51)(48, "p", 52)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Other Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectsComponent_div_30_div_7_ng_template_32_div_51_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 51)(53, "p", 52)(54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProjectsComponent_div_30_div_7_ng_template_32_div_56_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r57.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r59.cloud, "", project_r57.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r57.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r57.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r57.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r57.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r59.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r59.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r59.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r59.database);
} }
function ProjectsComponent_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_30_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r73.open(_r58)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 26)(11, "li", 27)(12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 29)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 31)(18, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 29)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 33)(24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 34)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 36)(30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProjectsComponent_div_30_div_7_ng_template_32_Template, 57, 11, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r56.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r56.cloud, "", project_r57.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r57.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r57.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r57.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r57.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r57.name);
} }
function ProjectsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects by framework:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_div_30_div_7_Template, 34, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedFramework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.byFramework);
} }
class ProjectsComponent {
    constructor(httpClient, modalService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        // Selected in html
        this.selectedLanguage = '';
        this.selectedTool = '';
        this.selectedDatabase = '';
        this.selectedFramework = '';
        // cloudinary
        this.cloud = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cloudinary;
        this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.langShow = false;
        this.dbShow = false;
        this.frameShow = false;
        this.toolShow = false;
        this.AllShow = true;
        this.langList = false;
        this.frameList = false;
        this.showLangList = false;
        this.showFrameList = false;
        this.showAllList = false;
    }
    ngOnInit() {
        this.getAllDatabases();
        this.getAllFrameworks();
        this.getAllProjects();
        this.getAllTools();
        this.getAlllanguages();
        this.projectsByDatabase();
        this.projectsByFramework();
        this.projectsByLanguage();
        this.projectsByTools();
    }
    onSelectedChanged() { }
    getAllProjects() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allProjectsApi)
            .subscribe((response) => {
            this.project = response;
        });
    }
    getAllTools() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allTools).subscribe((response) => {
            this.tools = response;
        });
    }
    getAlllanguages() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allLanguage).subscribe((response) => {
            this.language = response;
        });
    }
    getAllDatabases() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allDb).subscribe((response) => {
            this.database = response;
        });
    }
    getAllFrameworks() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allFramework).subscribe((response) => {
            this.framework = response;
        });
    }
    projectsByDatabase() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByDb + this.selectedDatabase)
            .subscribe((response) => {
            this.byDatabase = response;
        });
    }
    projectsByFramework() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByFramework + this.selectedFramework)
            .subscribe((response) => {
            this.byFramework = response;
        });
    }
    projectsByTools() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByTools + this.selectedTool)
            .subscribe((response) => {
            this.byTools = response;
        });
    }
    projectsByLanguage() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByLanguage + this.selectedLanguage)
            .subscribe((response) => {
            this.byLanguage = response;
        });
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    togglelanguage() {
        this.langShow = true;
        this.frameShow = false;
        this.toolShow = false;
        this.dbShow = false;
        this.AllShow = false;
    }
    toggleframework() {
        this.langShow = false;
        this.frameShow = true;
        this.toolShow = false;
        this.dbShow = false;
        this.AllShow = false;
    }
    toggleAll() {
        this.langShow = false;
        this.frameShow = false;
        this.toolShow = false;
        this.dbShow = false;
        this.AllShow = true;
    }
    toggleLangList() {
        this.showLangList = !this.showLangList;
        this.showFrameList = false;
        this.showAllList = false;
    }
    toggleFrameList() {
        this.showLangList = false;
        this.showFrameList = !this.showFrameList;
        this.showAllList = false;
    }
    toggleAllList() {
        this.showLangList = false;
        this.showFrameList = false;
        this.showAllList = !this.showAllList;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], outputs: { selectedChanged: "selectedChanged" }, decls: 31, vars: 5, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container-fluid"], ["id", "projects", 1, "menu-cont"], [1, "menu-header"], [1, "menu"], [1, "menu-item"], [1, "menu-title-btn", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "input-container", 4, "ngIf"], [1, "half"], ["class", "allprojects-title", 4, "ngIf"], [1, "input-container"], ["type", "radio", 1, "btn-check", 3, "name", "value", "ngModel", "id", "ngModelChange", "change"], [1, "btn", 3, "for"], ["href", "#about"], [1, "allprojects-title"], [1, "projects-header"], [1, "allprojects-container"], ["id", "box", 1, "box", 3, "click"], [1, "project-img", 3, "src"], ["type", "button", 1, "box-content"], [1, "box-text"], [1, "post"], [1, "icon"], [1, "icons", "facebook"], [1, "tooltip"], ["target", "blank", 3, "href"], ["src", "assets/images/link.gif", 1, "fab", "fa-facebook-f"], [1, "icons", "github"], ["src", "assets/images/github.png", 1, "fab", "fa-github"], [1, "icons", "twitter"], [3, "routerLink"], ["src", "assets/images/star.gif", 1, "fab", "fa-twitter"], [1, "project-name"], ["mymodal", ""], [1, "modal-content"], [1, "modal-title-container"], [1, "modal-title", "m-piece"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-cont-img"], [1, "modal-image", "m-piece"], [1, "modal-img", "project-img", 3, "src"], [1, "modal-details", "m-piece"], ["src", "assets/images/link.png", 1, "fab", "fa-facebook-f"], [3, "routerLink", "click"], ["src", "assets/images/star2.png", 1, "fab", "fa-twitter"], [1, "modal-tool", "m-piece"], [1, "modal-tools"], [1, "block"], [1, "block-title"], ["class", "block-items", 4, "ngFor", "ngForOf"], [1, "block-items"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 4)(9, "div", 5)(10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sort By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_14_listener() { return ctx.toggleAll(); })("click", function ProjectsComponent_Template_button_click_14_listener() { return ctx.toggleAllList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_18_listener() { return ctx.toggleLangList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProjectsComponent_div_21_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_23_listener() { return ctx.toggleFrameList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProjectsComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProjectsComponent_div_28_Template, 6, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProjectsComponent_div_29_Template, 8, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProjectsComponent_div_30_Template, 8, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFrameList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AllShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.langShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frameShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["body[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  background-color: #f4ebd9;\n  display: grid;\n  place-items: center;\n  color: black;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1rem, 2.5vw);\n  text-align: justify;\n  text-justify: inter-word;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n\n\nh4[_ngcontent-%COMP%] {\n  font-size: min(2rem, 3.5vw);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: min(4rem, 8vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: min(2rem, 5vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: grid;\n  width: 90vw;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 3fr 1fr;\n}\n\n.menu-cont[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 10;\n  padding-top: 60px;\n  z-index: 5;\n  max-width: 90vw;\n  max-height: 850px;\n  display: grid;\n  place-items: start center;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n.half[_ngcontent-%COMP%] {\n  padding-top: 50px;\n\n  display: grid;\n  place-items: center;\n  color: black;\n  place-self: end;\n  grid-row: 1/2;\n  grid-column: 2;\n}\n\n@media screen and (max-width: 992px) {\n  body[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-top: 0px;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    max-width: 100vw;\n  }\n  .menu-cont[_ngcontent-%COMP%] {\n    padding-top: calc(10vw + 23px);\n    background-color: #f4ebd9;\n    width: 120vw;\n    height: calc(20vw + 60px);\n    box-shadow: 0 4px 15px 0 #f4ebd9;\n  }\n  .menu[_ngcontent-%COMP%] {\n    display: flex;\n    max-width: 90vw;\n  }\n\n  .half[_ngcontent-%COMP%] {\n    place-self: start;\n    grid-row: 2;\n    grid-column: 1;\n  }\n}\n\n.menu-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\n.allprojects-title[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n  max-width: 100vw;\n}\n\n.projects-header[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n}\n\n.allprojects-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr));\n  padding: 5vw;\n  max-width: 70vw;\n}\n\n@media screen and (max-width: 420px) {\n  .allprojects-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));\n  }\n}\n\n.building-blocks[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n\n\n.block-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.block-items[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  margin-top: 20px;\n}\n\n.box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s ease 0.3s;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: #254ae1;\n}\n\n.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #4481eb;\n\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 0;\n  left: -100%;\n  transition: all 0.4s ease-in;\n}\n\n.box[_ngcontent-%COMP%]:after {\n  top: auto;\n  bottom: 0;\n  left: 100%;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before {\n  width: 5px;\n  height: 100%;\n  top: 100%;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  width: 5px;\n  height: 100%;\n  top: -100%;\n  left: auto;\n  right: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover:before, .box[_ngcontent-%COMP%]:hover:after {\n  opacity: 0.2;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:after {\n  opacity: 0.2;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  transition: all 0.45s ease;\n  padding: 30px 50px 0px 50px;\n  display: grid;\n  place-items: center start;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 0 0 4px;\n}\n\n.box[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  \n  text-transform: lowercase;\n  text-shadow: 0 0 10px rgb(0, 0, 0);\n  margin: 0 0 5px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n}\n\n\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  list-style: none;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 50%;\n  padding: 15px;\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  opacity: 0;\n  transform: rotate(-45deg);\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  transition: all 0.4s cubic-bezier(0.6, -0.8, 0.735, 0.045);\n}\n\n.box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transform: rotate(0deg);\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font-size: 14px;\n  background: #ffffff;\n  color: #ffffff;\n  padding: 5px 8px;\n  border-radius: 5px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  white-space: nowrap;\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background: #ffffff;\n  bottom: -3px;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  top: -45px;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\n}\n\n.icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1877f2;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #333333;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1da1f2;\n  color: #ffffff;\n}\n\n.fab[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-color: transparent;\n}\n\n@media only screen and (max-width: 990px) {\n  .box[_ngcontent-%COMP%] {\n    margin: 0 0 30px;\n  }\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 50vw;\n  place-content: center;\n  place-items: center;\n}\n\n.modal-img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 450px;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 540px;\n\n  background-color: #f4ebd9;\n}\n\n.modal-details[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  display: grid;\n  place-items: center;\n}\n\n.nav--hidden[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.modal-title-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\n.close[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 30px;\n  border-radius: 2px;\n  place-self: center end;\n  background-color: #1876f276;\n  border-color: #04befe;\n}\n\n@media screen and (max-width: 574px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 97vw;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 80vw;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 65vw;\n    right: 20vw;\n    border-radius: 20px;\n    background-color: #f4ebd9;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 32vw;\n  }\n  .modal-cont-img[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n  }\n  .menu[_ngcontent-%COMP%] {\n    z-index: 5;\n  }\n  .half[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .nav--hidden[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n}\n\n.modal-tools[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  height: 200px;\n}\n\n.m-piece[_ngcontent-%COMP%] {\n  padding: 20px;\n\n  background-color: #ffffff;\n  border-radius: 20px;\n  background-color: #f4ebd9;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  font-size: min(1rem, 2.5vw);\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 0.5vw;\n  width: 20vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n\n.menu-title-btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 1vw;\n  width: 25vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7O0FBQ0E7O09BRU87O0FBRVA7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCwyREFBMkQ7RUFDM0QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLDJEQUEyRDtFQUM3RDtBQUNGOztBQUVBO0VBQ0UsYUFBYTs7RUFFYiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCx5QkFBeUI7O0VBRXpCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUNBOztFQUVFLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLE1BQU07QUFDUjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLGVBQWU7RUFDZiwyREFBMkQ7QUFDN0Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDBEQUEwRDtBQUM1RDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsMkRBQTJEO0VBQzNELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLDRDQUE0QztBQUM5Qzs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7OztFQUdFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZOztFQUVaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7O0VBRWIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTs7Ozs7O0dBTUM7RUFDRCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTs7Ozs7O0dBTUM7RUFDRCxpREFBaUQ7QUFDbkQiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCxcbmxpIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1pbigxcmVtLCAyLjV2dyk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiA4dnc7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG4vKiBoMiB7fVxuaDMge31cbmg0IHt9ICovXG5cbmg0IHtcbiAgZm9udC1zaXplOiBtaW4oMnJlbSwgMy41dncpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogbWluKDRyZW0sIDh2dyk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG5cbmg1LFxubGFiZWwge1xuICBmb250LXNpemU6IG1pbigycmVtLCA1dncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuaDYge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogOTB2dztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG59XG5cbi5tZW51LWNvbnQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgei1pbmRleDogNTtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtYXgtaGVpZ2h0OiA4NTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IHN0YXJ0IGNlbnRlcjtcbn1cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLmhhbGYge1xuICBwYWRkaW5nLXRvcDogNTBweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHBsYWNlLXNlbGY6IGVuZDtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyMGZyO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gIH1cbiAgLm1lbnUtY29udCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMTB2dyArIDIzcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gICAgd2lkdGg6IDEyMHZ3O1xuICAgIGhlaWdodDogY2FsYygyMHZ3ICsgNjBweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwICNmNGViZDk7XG4gIH1cbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLmhhbGYge1xuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICB9XG59XG4ubWVudS1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cbi5hbGxwcm9qZWN0cy10aXRsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbn1cbi5wcm9qZWN0cy1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWxscHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1cmVtLCAyZnIpKTtcbiAgcGFkZGluZzogNXZ3O1xuICBtYXgtd2lkdGg6IDcwdnc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5hbGxwcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDJmcikpO1xuICB9XG59XG5cbi5idWlsZGluZy1ibG9ja3Mge1xuICBkaXNwbGF5OiBncmlkO1xuXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uYm94LXRleHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLyogLmJsb2NrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufSAqL1xuXG4uYmxvY2stdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ibG9jay1pdGVtcyxcbmxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYm94IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuM3M7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE3OCwgMTc4LCAxNzgpO1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggOHB4IHJnYigxNzgsIDE3OCwgMTc4KTtcbn1cbi5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU0YWUxO1xufVxuLmJveDpiZWZvcmUsXG4uYm94OmFmdGVyLFxuLmJveCAuYm94LWNvbnRlbnQ6YmVmb3JlLFxuLmJveCAuYm94LWNvbnRlbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4MWViO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xufVxuLmJveDphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAxMDAlO1xufVxuLmJveCAuYm94LWNvbnRlbnQ6YmVmb3JlIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG4uYm94IC5ib3gtY29udGVudDphZnRlciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAtMTAwJTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG4uYm94OmhvdmVyOmJlZm9yZSxcbi5ib3g6aG92ZXI6YWZ0ZXIge1xuICBvcGFjaXR5OiAwLjI7XG4gIGxlZnQ6IDA7XG59XG4uYm94OmhvdmVyIC5ib3gtY29udGVudDpiZWZvcmUsXG4uYm94OmhvdmVyIC5ib3gtY29udGVudDphZnRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgdG9wOiAwO1xufVxuLmJveCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmJveDpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjM1O1xufVxuLmJveCAuYm94LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xuICBwYWRkaW5nOiAzMHB4IDUwcHggMHB4IDUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgc3RhcnQ7XG59XG4uYm94OmhvdmVyIC5ib3gtY29udGVudCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogMDtcbn1cbi5ib3ggLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW46IDAgMCA0cHg7XG59XG4uYm94IC5wb3N0IHtcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDFweDsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwLCAwLCAwKTtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIFRyaXBwbGUgYnV0dG9uICovXG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5pY29uIC5pY29ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbn1cbi5ib3ggLmljb24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNiwgLTAuOCwgMC43MzUsIDAuMDQ1KTtcbn1cbi5ib3g6aG92ZXIgLmljb24ge1xuICBvcGFjaXR5OiAxMDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLmljb24gLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmljb24gLnRvb2x0aXA6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvdHRvbTogLTNweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbn1cblxuLmljb24gLmljb25zOmhvdmVyIC50b29sdGlwIHtcbiAgdG9wOiAtNDVweDtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5pY29uIC5pY29uczpob3ZlciBzcGFuLFxuLmljb24gLmljb25zOmhvdmVyIC50b29sdGlwIHtcbiAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pY29uIC5mYWNlYm9vazpob3Zlcixcbi5pY29uIC5mYWNlYm9vazpob3ZlciAudG9vbHRpcCxcbi5pY29uIC5mYWNlYm9vazpob3ZlciAudG9vbHRpcDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzE4NzdmMjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaWNvbiAuZ2l0aHViOmhvdmVyLFxuLmljb24gLmdpdGh1Yjpob3ZlciAudG9vbHRpcCxcbi5pY29uIC5naXRodWI6aG92ZXIgLnRvb2x0aXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvbiAudHdpdHRlcjpob3Zlcixcbi5pY29uIC50d2l0dGVyOmhvdmVyIC50b29sdGlwLFxuLmljb24gLnR3aXR0ZXI6aG92ZXIgLnRvb2x0aXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMxZGExZjI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmZhYiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmJveCB7XG4gICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgfVxufVxuXG4vKiBNb2RhbCAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi5tb2RhbC1pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA0NTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA1NDBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xufVxuLm1vZGFsLWRldGFpbHMge1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi0taGlkZGVuIHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLm1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbn1cbi5jbG9zZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzZmMjc2O1xuICBib3JkZXItY29sb3I6ICMwNGJlZmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgd2lkdGg6IDk3dnc7XG4gIH1cbiAgLm1vZGFsLWltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgd2lkdGg6IDY1dnc7XG4gICAgcmlnaHQ6IDIwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xuICB9XG4gIC5tb2RhbC1pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMzJ2dztcbiAgfVxuICAubW9kYWwtY29udC1pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIH1cbiAgLm1lbnUge1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbiAgLmhhbGYge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG4gIC5uYXYtLWhpZGRlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufVxuXG4ubW9kYWwtdG9vbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLm0tcGllY2Uge1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG59XG5cbi8qIGJ1dHRvbnMgKi9cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWluKDFyZW0sIDIuNXZ3KTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICB3aWR0aDogMjB2dztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzI1YWFlMSxcbiAgICAjNDQ4MWViLFxuICAgICMwNGJlZmUsXG4gICAgIzNmODZlZFxuICApO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSg2NSwgMTMyLCAyMzQsIDAuNzUpO1xufVxuXG4ubWVudS10aXRsZS1idG4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMXZ3O1xuICB3aWR0aDogMjV2dztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LXRpdGxlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LXRpdGxlLWJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS10aXRsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzI1YWFlMSxcbiAgICAjNDQ4MWViLFxuICAgICMwNGJlZmUsXG4gICAgIzNmODZlZFxuICApO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSg2NSwgMTMyLCAyMzQsIDAuNzUpO1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('flipInX', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.flipInX, { params: { timing: 1, delay: 0 } })),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.slideOutLeft))]),
        ] } });


/***/ }),

/***/ 1098:
/*!*************************************************!*\
  !*** ./src/app/services/projectsapi.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsapiService": () => (/* binding */ ProjectsapiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ProjectsapiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
}
ProjectsapiService.ɵfac = function ProjectsapiService_Factory(t) { return new (t || ProjectsapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProjectsapiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsapiService, factory: ProjectsapiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6042:
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestingComponent": () => (/* binding */ TestingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TestingComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestingComponent.ɵfac = function TestingComponent_Factory(t) { return new (t || TestingComponent)(); };
TestingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestingComponent, selectors: [["app-testing"]], decls: 184, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["target", "blank", "href", "https://drive.google.com/file/d/1Nb3V3mWSJbd-NC6MjJRG5pUEFDY9Fubx/view?usp=sharing"], [1, "btn", "download"], [1, "content"], [1, "header", "cat"], [1, "profile", "cat"], [1, "career", "cat"], [1, "career-container", "cat"], [1, "title"], [1, "company"], [1, "school"], [1, "outline-title"], [1, "outline"], [1, "core-title"], [1, "core"], [1, "impacts-title"], [1, "impacts"], [1, "education", "cat"], [1, "date"], [1, "languages", "cat"], [1, "volunteer", "cat"]], template: function TestingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body")(8, "a", 4)(9, "button", 5)(10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "h5")(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Isaac Wangombe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p")(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nairobi, Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+254 706 551542");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "isaacwangombe5@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Professional profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "A full-stack developer with a deep passion for computing and software, solid foundational skills in finance, training in Python, Javascript, HTML and CSS. Strengths and experience in software design, sales, and project management. Seeking to use technology to develop innovative solutions that solve real world problems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9)(32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Career Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10)(35, "div", 11)(36, "h6", 12)(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Oct 2020 - Oct 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 13)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Procter and Gamble (P&G), Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Sales Management Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 14)(45, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Reporting to the Managing Director, I managed client's portfolios by developing brand strategies, organising marketing campaigns, and developing partnerships to grow brand visibility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 16)(50, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Core skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Presentation design and enhancement; marketing; sales; relationship management; client relations; team collaboration; creativity; planning and organisational skills; communication; flexibility; entrepreneurial skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6", 18)(55, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Key impacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "u", 19)(58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Developed a company sales pitch, organised cold calls and led pitch meetings, contributing to a 300% increase in the company's client base;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Showcased clients brands to various audiences through organising television and radio appearances, talks, and events, which increased reach of some clients by up to 30%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Maintained regular dialogue with partners, developed partnership proposals, and led partnership meetings, securing brand partnerships for clients;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Assisted senior management in managing client portfolios, including proposals and documentation;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Created a partnership database of more than 500 industry contacts by developing and maintaining contacts and working relationships with individuals and organisations relevant to the company's operations .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10)(69, "div", 11)(70, "h6", 12)(71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Jan 2019 - Dec 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6", 13)(74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The Catapult Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Talent Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6", 14)(79, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Reporting to the Head of Traditional Trade, I managed various department projects, developed new systems, and managed the sales team. I acted as a liaison between P&G and the company's product distributor towards successful achievement of sales targets of the Traditional trade department.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 16)(84, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Core skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Management; system development; sales; problem solving; communication; interpersonal skills; relationship management; computer skills; team collaboration; creativity; planning and organisational skills; flexibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 18)(89, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Key impacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "u", 19)(92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Developed and maintained the company's first Traditional Trade display verification system. The system was launched and deployed across 5 regions nationally, with a 91% reach of the company's stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Developed and maintained the company's first Traditional Trade direct customer messaging system. The system facilitated communication with over 91% through direct messaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Deployed, trained and led the sales team in executing a loyalty program that that increased products' store presence by 96%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Coordinated the launch event of the company's largest new product across 5 regions with an audience of 650 staff and key customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Ensured smooth relationships and collaboration between the company and its distributor company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Education and Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 20)(105, "div", 11)(106, "p", 21)(107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Dec 2022 - July 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 13)(110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ":Moringa School, Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Bootcamp in software development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11)(115, "p", 21)(116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Oct 2020 - July 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 13)(119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ":Strathmore University, Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "M.Sc. Development Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 11)(124, "p", 21)(125, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Jan 2016 - Dec 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 13)(128, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, ":Jomo Kenyatta University of Agriculture and Technology, Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Bachelor of Commerce (B.Com), Finance option, Second-class Honours (Upper Division)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 11)(133, "p", 21)(134, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "May 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 13)(137, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ":International Sustainability School, Nepal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sustainability training program organised by Hands-on-Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 11)(142, "p", 21)(143, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sep 2017 - Dec 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 13)(146, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, ":Lapid Leaders Program, Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Leadership training program organised by Lapid Leaders Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 22)(151, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p")(154, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Languages: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "HTML, CSS, Javascript, Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p")(158, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Frameworks and Libraries: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "React Js, React Native, Ajax, jQuery,Angular, Django, Flask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p")(162, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Office tools: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Canva, Microsoft Office (Word, Excel, PowerPoint, Publisher); Adobe Creative Suite (Photoshop, Lightroom, Premier-Pro, After Effects); SAP Solutions; Outlook; Google Ads; Google Suites (Docs, Sheets, Slides, Keep, Forms); Lotus Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 23)(166, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Key volunteer activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p")(169, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "July 2019 - Nov 2019: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Peer coach, Lapid Leaders Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p")(173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Sep 2016 - Dec : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Volunteer, Hope House Babies children's home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p")(177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Sep 2015: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Event coordinator, Love matters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p")(181, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Dec 2007 - Jan 2008: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Volunteer, Jamhuri Show Grounds, Internal Displaced Persons Camp during Post-Election Violence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  display: grid;\n  place-items: center;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1.3rem, 3vw);\n  text-align: justify;\n  text-justify: inter-word;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: min(3rem, 5vw);\n  font-family: \"Playfair Display\", serif;\n  color: rgb(0, 162, 255);\n}\nh6[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n\n  font-size: min(1.6rem, 3.2vw);\n}\n.core-title[_ngcontent-%COMP%], .impacts-title[_ngcontent-%COMP%], .impacts-title[_ngcontent-%COMP%], .outline-title[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.cat[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.content[_ngcontent-%COMP%] {\n  width: 70vw;\n  background-color: aliceblue;\n  padding: 5vw;\n  box-shadow: 10px 10px 8px #888888;\n}\n.header[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: end;\n}\n.title[_ngcontent-%COMP%] {\n  gap: 5vw;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n.right[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  padding: 1vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n.contact[_ngcontent-%COMP%] {\n  text-justify: right;\n  justify-text: right;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQ0FBc0M7O0VBRXRDLDZCQUE2QjtBQUMvQjtBQUNBOzs7O0VBSUUsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0U7Ozs7OztHQU1DO0VBQ0QsaURBQWlEO0FBQ25EO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ0ZXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbnAsXG5saSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBtaW4oMS4zcmVtLCAzdncpO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiBtaW4oM3JlbSwgNXZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XG59XG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG5cbiAgZm9udC1zaXplOiBtaW4oMS42cmVtLCAzLjJ2dyk7XG59XG4uY29yZS10aXRsZSxcbi5pbXBhY3RzLXRpdGxlLFxuLmltcGFjdHMtdGl0bGUsXG4ub3V0bGluZS10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmNhdCB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiA3MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHBhZGRpbmc6IDV2dztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCAjODg4ODg4O1xufVxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBlbmQ7XG59XG5cbi50aXRsZSB7XG4gIGdhcDogNXZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG59XG5cbi5yaWdodCB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAxdnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cblxuLmNvbnRhY3Qge1xuICB0ZXh0LWp1c3RpZnk6IHJpZ2h0O1xuICBqdXN0aWZ5LXRleHQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    allProjectsApi: 'https://marigaportfolio.herokuapp.com/api/all_projects',
    allTools: 'https://marigaportfolio.herokuapp.com/api/all_tools',
    allLanguage: 'https://marigaportfolio.herokuapp.com/api/all_languages',
    allDb: 'https://marigaportfolio.herokuapp.com/api/all_databases',
    allFramework: 'https://marigaportfolio.herokuapp.com/api/all_frameworks',
    allComments: 'https://marigaportfolio.herokuapp.com/api/all_comments/',
    projectsByDb: 'https://marigaportfolio.herokuapp.com/api/database_projects/',
    projectsByFramework: 'https://marigaportfolio.herokuapp.com/api/framework_projects/',
    projectsByTools: 'https://marigaportfolio.herokuapp.com/api/tools_projects/',
    projectsByLanguage: 'https://marigaportfolio.herokuapp.com/api/languages_projects/',
    projectsById: 'https://marigaportfolio.herokuapp.com/api/id_projects/',
    // cloudinary
    cloudinary: 'https://res.cloudinary.com/dtj7bnapz/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map