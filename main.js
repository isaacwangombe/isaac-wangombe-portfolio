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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _services_projectsapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/projectsapi.service */ 1098);
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testing/testing.component */ 6042);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ 3742);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-hide-on-scroll */ 3103);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 8723);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_services_projectsapi_service__WEBPACK_IMPORTED_MODULE_5__.ProjectsapiService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_15__.NgxHideOnScrollModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_17__.MdbCollapseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _testing_testing_component__WEBPACK_IMPORTED_MODULE_6__.TestingComponent,
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__.CommentsComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_15__.NgxHideOnScrollModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_17__.MdbCollapseModule] }); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", project_r7.name, " ");
} }
function CommentsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kindly input your Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kindly input a comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r8 = ctx.fill;
    const index_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r8 === 100)("bad", index_r9 < 5);
} }
function CommentsComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r10 = ctx.fill;
    const index_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r10 === 100)("bad", index_r11 < 5);
} }
function CommentsComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
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
        window.scroll(0, 0);
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
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 82, vars: 12, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "half"], [1, "text"], ["target", "blank", 3, "href"], [1, "image-container"], ["alt", "image", 1, "image", 3, "src"], [1, "buttons"], [1, "btn"], ["href", "#projects"], [1, "half2"], [1, "form-title"], ["class", "block-items", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["testForm", "ngForm"], ["type", "text", "formControlName", "name", 1, "form-control"], ["style", "color: red;", 4, "ngIf"], ["type", "email", "placeholder", "(Optional)", "formControlName", "email", 1, "form-control"], ["type", "text", "rows", "10", "formControlName", "comment", 1, "form-control"], ["type", "number", "formControlName", "design_rating", 1, "review", 3, "max"], ["named", "user", "type", "number", "formControlName", "user_rating", 1, "review", 3, "max"], ["type", "number", "formControlName", "content_rating", 1, "review", 3, "max"], ["type", "submit", 1, "btn", "btn-primary"], [1, "block-items"], [2, "color", "red"], [1, "star"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, CommentsComponent_div_55_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, CommentsComponent_div_62_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Design Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ngb-rating", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CommentsComponent_ng_template_67_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "User Experience Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ngb-rating", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, CommentsComponent_ng_template_73_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Content Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ngb-rating", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, CommentsComponent_ng_template_79_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Submit");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
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

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 61, vars: 1, consts: [[1, "container-fluid", "pb-0", "mb-0", "justify-content-center", "text-light"], [1, "row", "my-5", "justify-content-center", "py-5"], [1, "col-11"], [1, "row"], [1, "col-xl-8", "col-md-4", "col-sm-4", "col-12", "my-auto", "mx-auto", "a"], [1, "text-muted", "mb-md-0", "mb-5", "bold-text"], [1, "col-xl-2", "col-md-4", "col-sm-4", "col-12"], [1, "mb-3", "mb-lg-4", "bold-text"], [1, "list-unstyled"], ["href", "#home"], ["href", "#about"], ["href", "#projects"], ["href", "", 3, "routerLink"], [1, "mb-3", "mb-lg-4", "text-muted", "bold-text", "mt-sm-0", "mt-5"], [1, "mb-1"], [1, "col-xl-8", "col-md-4", "col-sm-4", "col-auto", "my-md-0", "mt-5", "order-sm-1", "order-3", "align-self-end"], [1, "social", "text-muted", "mb-0", "pb-0", "bold-text"], [1, "mx-2"], ["aria-hidden", "true", 1, "fa", "fa-linkedin-square"], ["aria-hidden", "true", 1, "fa", "fa-github-square"], [1, "rights"], [1, "col-xl-2", "col-md-4", "col-sm-4", "col-auto", "order-1", "align-self-end"], [1, "mt-55", "mt-2", "text-muted", "bold-text"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "col-xl-2", "col-md-4", "col-sm-4", "col-auto", "order-2", "align-self-end", "mt-3"], ["href", "https://github.com/isaacwangombe", "blank", "true"], [1, "text-muted", "bold-text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Isaac Wangombe's Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "h6", 7)(10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8)(13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6)(26, "h6", 13)(27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Marula Lane, Karen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nairobi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3)(34, "div", 15)(35, "p", 16)(36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small", 20)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Isaac Wangombe All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21)(45, "h6", 22)(46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "small")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " isaacwangombe5@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24)(53, "a", 25)(54, "h6", 26)(55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "GITHUB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small")(58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " @isaacwangombe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "resume");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Rubik&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, #fff, 50%, #deeefe);\n  font-family: \"Rubik\", sans-serif;\n  background: #455a64;\n  height: 100 !important;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #262626;\n  color: #627482 !important;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\nsmall[_ngcontent-%COMP%] {\n  font-size: calc(\n    12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))\n  ) !important;\n}\n.bold-text[_ngcontent-%COMP%] {\n  color: #989c9e !important;\n}\n.mt-55[_ngcontent-%COMP%] {\n  margin-top: calc(\n    50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))\n  ) !important;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: min(2.4rem, 6vw);\n  font-family: \"Playfair Display\", serif;\n}\n.social[_ngcontent-%COMP%] {\n  font-size: 21px !important;\n}\n.rights[_ngcontent-%COMP%] {\n  font-size: calc(\n    10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))\n  ) !important;\n}\n.list-unstyled[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(4 1fr);\n}\nli[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\na[_ngcontent-%COMP%] {\n  color: #627482;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n  font-size: min(0.9rem, 2vw);\n  margin-left: 1vw;\n  position: relative;\n}\na[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #627482;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\na[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUF5RTtBQUN6RTtFQUNFLHFEQUFxRDtFQUNyRCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0U7O2NBRVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRTs7Y0FFWTtBQUNkO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFOztjQUVZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQsUUFBUTtBQUNWO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmLCA1MCUsICNkZWVlZmUpO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjNDU1YTY0O1xuICBoZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzI2MjYyNjtcbiAgY29sb3I6ICM2Mjc0ODIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiBjYWxjKFxuICAgIDEycHggKyAoMTUgLSAxMikgKiAoKDEwMHZ3IC0gMzYwcHgpIC8gKDE2MDAgLSAzNjApKVxuICApICFpbXBvcnRhbnQ7XG59XG5cbi5ib2xkLXRleHQge1xuICBjb2xvcjogIzk4OWM5ZSAhaW1wb3J0YW50O1xufVxuXG4ubXQtNTUge1xuICBtYXJnaW4tdG9wOiBjYWxjKFxuICAgIDUwcHggKyAoNjAgLSA1MCkgKiAoKDEwMHZ3IC0gMzYwcHgpIC8gKDE2MDAgLSAzNjApKVxuICApICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiBtaW4oMi40cmVtLCA2dncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuXG4uc29jaWFsIHtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodHMge1xuICBmb250LXNpemU6IGNhbGMoXG4gICAgMTBweCArICgxMiAtIDEwKSAqICgoMTAwdncgLSAzNjBweCkgLyAoMTYwMCAtIDM2MCkpXG4gICkgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtdW5zdHlsZWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0IDFmcik7XG59XG5saSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmEge1xuICBjb2xvcjogIzYyNzQ4MjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICBmb250LXNpemU6IG1pbigwLjlyZW0sIDJ2dyk7XG4gIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmE6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICM2Mjc0ODI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAwO1xufVxuYTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuIl19 */"] });


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
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 68, vars: 2, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], ["id", "home", 1, "headings"], [1, "head"], [1, "title-heading"], ["src", "assets/images/me.jpeg", "alt", "", 1, "heading-img"], [1, "heading-text"], ["src", "assets/images/comp1.jpg", "alt", "", 1, "heading-img2"], [1, "buttons"], ["href", "#about"], [1, "btn"], ["href", "#projects"], ["target", "blank", 3, "routerLink"], [1, "about-footer"], ["id", "about", 1, "container"], [1, "about-header-container"], [1, "about-header"], ["src", "assets/images/sun.png", "alt", "", 1, "about-header-icon"], [1, "about"], ["src", "assets/images/comp2.jpg", "alt", "", 1, "about-img"], [1, "about-text"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section")(43, "div", 17)(44, "div", 18)(45, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "WHO AM I");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 23);
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
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar, ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_2__.NgxHideOnScrollDirective, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_3__.MdbCollapseDirective], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  color: white;\n  background-image: linear-gradient(\n    to right,\n    #25a9e14c,\n    #4481eb52,\n    #04c0fe58,\n    #3f85ed53\n  );\n  padding: 0 2rem;\n  z-index: 100;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #4481eb4a;\n\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n\nimg[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  height: 5rem;\n}\n\n@media screen and (max-width: 992px) {\n  img[_ngcontent-%COMP%] {\n    height: 3rem;\n  }\n}\n\nli[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n  font-size: min(0.9rem, 2vw);\n  margin-left: 1vw;\n\n  display: inline-block;\n  position: relative;\n}\n\na[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #fff;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\na[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n\nnav.nav--hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n\n@media screen and (min-width: 992px) {\n  .colapse-clickaway[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n\n.colapse-clickaway[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7OztHQU1DO0VBQ0QsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCOztFQUV2QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjs7RUFFaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzI1YTllMTRjLFxuICAgICM0NDgxZWI1MixcbiAgICAjMDRjMGZlNTgsXG4gICAgIzNmODVlZDUzXG4gICk7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzQ0ODFlYjRhO1xuXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDY1LCAxMzIsIDIzNCwgMC43NSk7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmltZyB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBoZWlnaHQ6IDVyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBpbWcge1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxufVxuXG5saSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICBmb250LXNpemU6IG1pbigwLjlyZW0sIDJ2dyk7XG4gIG1hcmdpbi1sZWZ0OiAxdnc7XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5hOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMDtcbn1cbmE6aG92ZXI6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn1cblxubmF2Lm5hdi0taGlkZGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb2xhcHNlLWNsaWNrYXdheSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5jb2xhcHNlLWNsaWNrYXdheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */"] });


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











function ProjectsComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_18_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.selectedLanguage = $event); })("change", function ProjectsComponent_div_18_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.projectsByLanguage()); })("change", function ProjectsComponent_div_18_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.togglelanguage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 15);
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
function ProjectsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_18_div_1_Template, 4, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showLangList);
} }
function ProjectsComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_23_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.selectedFramework = $event); })("change", function ProjectsComponent_div_23_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.projectsByFramework()); })("change", function ProjectsComponent_div_23_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.toggleframework()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.selectedFramework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r13.framework);
} }
function ProjectsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_23_div_1_Template, 4, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.framework);
} }
function ProjectsComponent_div_25_div_5_ng_template_32_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r27.language);
} }
function ProjectsComponent_div_25_div_5_ng_template_32_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r28.framework);
} }
function ProjectsComponent_div_25_div_5_ng_template_32_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r29.tool);
} }
function ProjectsComponent_div_25_div_5_ng_template_32_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r30.database);
} }
function ProjectsComponent_div_25_div_5_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_25_div_5_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const modal_r22 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r22.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 40)(7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 43)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 24)(15, "li", 25)(16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 27)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 29)(22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 27)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 31)(28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_25_div_5_ng_template_32_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const modal_r22 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r22.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 47)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 48)(37, "div", 49)(38, "p", 50)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_25_div_5_ng_template_32_div_41_Template, 3, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 49)(43, "p", 50)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProjectsComponent_div_25_div_5_ng_template_32_div_46_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 49)(48, "p", 50)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Other Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectsComponent_div_25_div_5_ng_template_32_div_51_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 49)(53, "p", 50)(54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProjectsComponent_div_25_div_5_ng_template_32_div_56_Template, 3, 1, "div", 52);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r19.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r19.frameworks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r19.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r19.database);
} }
function ProjectsComponent_div_25_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_25_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.open(_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 24)(11, "li", 25)(12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 27)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 29)(18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 27)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 31)(24, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 32)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 34)(30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProjectsComponent_div_25_div_5_ng_template_32_Template, 57, 11, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
function ProjectsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectsComponent_div_25_div_5_Template, 34, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project);
} }
function ProjectsComponent_div_26_div_7_ng_template_32_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r46.language);
} }
function ProjectsComponent_div_26_div_7_ng_template_32_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r47.framework);
} }
function ProjectsComponent_div_26_div_7_ng_template_32_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r48.tool);
} }
function ProjectsComponent_div_26_div_7_ng_template_32_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r49.database);
} }
function ProjectsComponent_div_26_div_7_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_26_div_7_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const modal_r41 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r41.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 40)(7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 43)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 24)(15, "li", 25)(16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 27)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 29)(22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 27)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 31)(28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_26_div_7_ng_template_32_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const modal_r41 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r41.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 47)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 48)(37, "div", 49)(38, "p", 50)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_26_div_7_ng_template_32_div_41_Template, 3, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 49)(43, "p", 50)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProjectsComponent_div_26_div_7_ng_template_32_div_46_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 49)(48, "p", 50)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Other Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectsComponent_div_26_div_7_ng_template_32_div_51_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 49)(53, "p", 50)(54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProjectsComponent_div_26_div_7_ng_template_32_div_56_Template, 3, 1, "div", 52);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r38.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r38.frameworks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r38.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r38.database);
} }
function ProjectsComponent_div_26_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_26_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r54.open(_r39)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 24)(11, "li", 25)(12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 27)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 29)(18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 27)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 31)(24, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 32)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 34)(30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProjectsComponent_div_26_div_7_ng_template_32_Template, 57, 11, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
function ProjectsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects by language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_div_26_div_7_Template, 34, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.byLanguage);
} }
function ProjectsComponent_div_27_div_7_ng_template_32_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r65.language);
} }
function ProjectsComponent_div_27_div_7_ng_template_32_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r66.framework);
} }
function ProjectsComponent_div_27_div_7_ng_template_32_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r67.tool);
} }
function ProjectsComponent_div_27_div_7_ng_template_32_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r68.database);
} }
function ProjectsComponent_div_27_div_7_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_27_div_7_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const modal_r60 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r60.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 40)(7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 43)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 24)(15, "li", 25)(16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 27)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 29)(22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 27)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 31)(28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_27_div_7_ng_template_32_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const modal_r60 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r60.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 47)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 48)(37, "div", 49)(38, "p", 50)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_27_div_7_ng_template_32_div_41_Template, 3, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 49)(43, "p", 50)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProjectsComponent_div_27_div_7_ng_template_32_div_46_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 49)(48, "p", 50)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Other Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectsComponent_div_27_div_7_ng_template_32_div_51_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 49)(53, "p", 50)(54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProjectsComponent_div_27_div_7_ng_template_32_div_56_Template, 3, 1, "div", 52);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r57.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r57.frameworks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r57.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r57.database);
} }
function ProjectsComponent_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_27_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r73.open(_r58)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 24)(11, "li", 25)(12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 27)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 29)(18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 27)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 31)(24, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 32)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 34)(30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProjectsComponent_div_27_div_7_ng_template_32_Template, 57, 11, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
function ProjectsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects by framework:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_div_27_div_7_Template, 34, 8, "div", 9);
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
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], outputs: { selectedChanged: "selectedChanged" }, decls: 28, vars: 5, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["id", "projects", 1, "menu-cont"], [1, "menu-header"], [1, "menu"], [1, "menu-item"], [1, "menu-title-btn", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "input-container", 4, "ngIf"], [1, "half"], ["class", "allprojects-title", 4, "ngIf"], [1, "input-container"], ["type", "radio", 1, "btn-check", 3, "name", "value", "ngModel", "id", "ngModelChange", "change"], [1, "btn", 3, "for"], [1, "allprojects-title"], [1, "projects-header"], [1, "allprojects-container"], ["id", "box", 1, "box", 3, "click"], [1, "project-img", 3, "src"], ["type", "button", 1, "box-content"], [1, "box-text"], [1, "post"], [1, "icon"], [1, "icons", "facebook"], [1, "tooltip"], ["target", "blank", 3, "href"], ["src", "assets/images/link.gif", 1, "fab", "fa-facebook-f"], [1, "icons", "github"], ["src", "assets/images/github.png", 1, "fab", "fa-github"], [1, "icons", "twitter"], [3, "routerLink"], ["src", "assets/images/star.gif", 1, "fab", "fa-twitter"], [1, "project-name"], ["mymodal", ""], [1, "modal-content"], [1, "modal-title-container"], [1, "modal-title", "m-piece"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-cont-img"], [1, "modal-image", "m-piece"], [1, "modal-img", "project-img", 3, "src"], [1, "modal-details", "m-piece"], ["src", "assets/images/link.png", 1, "fab", "fa-facebook-f"], [3, "routerLink", "click"], ["src", "assets/images/star2.png", 1, "fab", "fa-twitter"], [1, "modal-tool", "m-piece"], [1, "modal-tools"], [1, "block"], [1, "block-title"], ["class", "", 4, "ngFor", "ngForOf"], ["class", "block-items", 4, "ngFor", "ngForOf"], [1, ""], [1, "block-items"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body")(6, "div", 4)(7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sort By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_11_listener() { return ctx.toggleAll(); })("click", function ProjectsComponent_Template_button_click_11_listener() { return ctx.toggleAllList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_15_listener() { return ctx.toggleLangList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProjectsComponent_div_18_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_20_listener() { return ctx.toggleFrameList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProjectsComponent_div_23_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProjectsComponent_div_25_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProjectsComponent_div_26_Template, 8, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProjectsComponent_div_27_Template, 8, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFrameList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AllShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.langShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frameShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0%;\n  margin: 0%;\n  border: 0%;\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background-color: #f4ebd9;\n  display: grid;\n  place-items: start center;\n  grid-template-columns: 1fr 1fr;\n  color: black;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1rem, 2.5vw);\n  text-align: justify;\n  text-justify: inter-word;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n\n\nh4[_ngcontent-%COMP%] {\n  font-size: min(2rem, 3.5vw);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: min(4rem, 8vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: min(2rem, 5vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n.menu-cont[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 10;\n  padding-top: 100px;\n  z-index: 5;\n  max-width: 90vw;\n  max-height: 850px;\n  display: grid;\n  place-items: start center;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n.half[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  display: grid;\n  place-items: center;\n  color: black;\n  place-self: end;\n}\n\n@media screen and (min-width: 992px) {\n  .contain[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: grid;\n    width: 90vw;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 4fr;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  body[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n  .contain[_ngcontent-%COMP%] {\n    padding-top: 0px;\n    display: grid;\n    max-width: 100vw;\n  }\n  .menu-cont[_ngcontent-%COMP%] {\n    padding-top: calc(10vw + 23px);\n    background-color: #f4ebd9;\n    width: 120vw;\n    height: calc(20vw + 60px);\n    box-shadow: 0 4px 15px 0 #f4ebd9;\n  }\n  .menu[_ngcontent-%COMP%] {\n    display: flex;\n    max-width: 90vw;\n  }\n\n  .half[_ngcontent-%COMP%] {\n    place-self: start;\n    grid-column: 1;\n  }\n}\n\n.menu-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\n.allprojects-title[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n  max-width: 100vw;\n}\n\n.projects-header[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n}\n\n.allprojects-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr));\n  padding: 5vw;\n  max-width: 70vw;\n}\n\n@media screen and (max-width: 420px) {\n  .allprojects-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));\n  }\n}\n\n.building-blocks[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n\n\n.block-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.block-items[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  margin-top: 20px;\n}\n\n.box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s ease 0.3s;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: #254ae1;\n}\n\n.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #4481eb;\n\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 0;\n  left: -100%;\n  transition: all 0.4s ease-in;\n}\n\n.box[_ngcontent-%COMP%]:after {\n  top: auto;\n  bottom: 0;\n  left: 100%;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before {\n  width: 5px;\n  height: 100%;\n  top: 100%;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  width: 5px;\n  height: 100%;\n  top: -100%;\n  left: auto;\n  right: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover:before, .box[_ngcontent-%COMP%]:hover:after {\n  opacity: 0.2;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:after {\n  opacity: 0.2;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  transition: all 0.45s ease;\n  padding: 30px 50px 0px 50px;\n  display: grid;\n  place-items: center start;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 0 0 4px;\n}\n\n.box[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  \n  text-transform: lowercase;\n  text-shadow: 0 0 10px rgb(0, 0, 0);\n  margin: 0 0 5px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n}\n\n\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  list-style: none;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 50%;\n  padding: 15px;\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  opacity: 0;\n  transform: rotate(-45deg);\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  transition: all 0.4s cubic-bezier(0.6, -0.8, 0.735, 0.045);\n}\n\n.box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transform: rotate(0deg);\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font-size: 14px;\n  background: #ffffff;\n  color: #ffffff;\n  padding: 5px 8px;\n  border-radius: 5px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  white-space: nowrap;\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background: #ffffff;\n  bottom: -3px;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  top: -45px;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\n}\n\n.icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1877f2;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #333333;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1da1f2;\n  color: #ffffff;\n}\n\n.fab[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-color: transparent;\n}\n\n@media only screen and (max-width: 990px) {\n  .box[_ngcontent-%COMP%] {\n    margin: 0 0 30px;\n  }\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 50vw;\n  place-content: center;\n  place-items: center;\n}\n\n.modal-img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 450px;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 540px;\n\n  background-color: #f4ebd9;\n}\n\n.modal-details[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  display: grid;\n  place-items: center;\n}\n\n.nav--hidden[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.modal-title-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\n.close[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 30px;\n  border-radius: 2px;\n  place-self: center end;\n  background-color: #1876f276;\n  border-color: #04befe;\n}\n\n@media screen and (max-width: 574px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 97vw;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 80vw;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 65vw;\n    right: 20vw;\n    border-radius: 20px;\n    background-color: #f4ebd9;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 32vw;\n  }\n  .modal-cont-img[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n  }\n  .contain[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n  }\n  .menu[_ngcontent-%COMP%] {\n    z-index: 5;\n  }\n  .half[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .nav--hidden[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n}\n\n.modal-tools[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  height: 200px;\n}\n\n.m-piece[_ngcontent-%COMP%] {\n  padding: 20px;\n\n  background-color: #ffffff;\n  border-radius: 20px;\n  background-color: #f4ebd9;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  font-size: min(1rem, 2.5vw);\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 0.5vw;\n  width: 20vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n\n.menu-title-btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 1vw;\n  width: 25vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7O0FBQ0E7O09BRU87O0FBRVA7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtJQUM5QiwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDJEQUEyRDtFQUMzRCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsMkRBQTJEO0VBQzdEO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhOztFQUViLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBOzs7R0FHRzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNENBQTRDO0FBQzlDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBOzs7O0VBSUUsV0FBVztFQUNYLHlCQUF5Qjs7RUFFekIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULE9BQU87QUFDVDs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osTUFBTTtBQUNSOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLE1BQU07QUFDUjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFDeEMsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDs7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMERBQTBEO0FBQzVEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiwyREFBMkQ7RUFDM0QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztFQUNULHdDQUF3QztFQUN4QywyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsNENBQTRDO0FBQzlDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7O0VBRVoseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTs7RUFFYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IDAlO1xuICBib3JkZXI6IDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogc3RhcnQgY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCxcbmxpIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1pbigxcmVtLCAyLjV2dyk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiA4dnc7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG4vKiBoMiB7fVxuaDMge31cbmg0IHt9ICovXG5cbmg0IHtcbiAgZm9udC1zaXplOiBtaW4oMnJlbSwgMy41dncpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogbWluKDRyZW0sIDh2dyk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG5cbmg1LFxubGFiZWwge1xuICBmb250LXNpemU6IG1pbigycmVtLCA1dncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuaDYge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuXG4ubWVudS1jb250IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB6LWluZGV4OiA1O1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIG1heC1oZWlnaHQ6IDg1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogc3RhcnQgY2VudGVyO1xufVxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGFsZiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHBsYWNlLXNlbGY6IGVuZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbiAgLmNvbnRhaW4ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB9XG4gIC5tZW51LWNvbnQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDEwdncgKyAyM3B4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xuICAgIHdpZHRoOiAxMjB2dztcbiAgICBoZWlnaHQ6IGNhbGMoMjB2dyArIDYwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCAjZjRlYmQ5O1xuICB9XG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgfVxuXG4gIC5oYWxmIHtcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgfVxufVxuXG4ubWVudS1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cbi5hbGxwcm9qZWN0cy10aXRsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbn1cbi5wcm9qZWN0cy1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWxscHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1cmVtLCAyZnIpKTtcbiAgcGFkZGluZzogNXZ3O1xuICBtYXgtd2lkdGg6IDcwdnc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5hbGxwcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDJmcikpO1xuICB9XG59XG5cbi5idWlsZGluZy1ibG9ja3Mge1xuICBkaXNwbGF5OiBncmlkO1xuXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uYm94LXRleHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLyogLmJsb2NrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufSAqL1xuXG4uYmxvY2stdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ibG9jay1pdGVtcyxcbmxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYm94IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuM3M7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE3OCwgMTc4LCAxNzgpO1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggOHB4IHJnYigxNzgsIDE3OCwgMTc4KTtcbn1cbi5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU0YWUxO1xufVxuLmJveDpiZWZvcmUsXG4uYm94OmFmdGVyLFxuLmJveCAuYm94LWNvbnRlbnQ6YmVmb3JlLFxuLmJveCAuYm94LWNvbnRlbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4MWViO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xufVxuLmJveDphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAxMDAlO1xufVxuLmJveCAuYm94LWNvbnRlbnQ6YmVmb3JlIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG4uYm94IC5ib3gtY29udGVudDphZnRlciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAtMTAwJTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG4uYm94OmhvdmVyOmJlZm9yZSxcbi5ib3g6aG92ZXI6YWZ0ZXIge1xuICBvcGFjaXR5OiAwLjI7XG4gIGxlZnQ6IDA7XG59XG4uYm94OmhvdmVyIC5ib3gtY29udGVudDpiZWZvcmUsXG4uYm94OmhvdmVyIC5ib3gtY29udGVudDphZnRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgdG9wOiAwO1xufVxuLmJveCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmJveDpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjM1O1xufVxuLmJveCAuYm94LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xuICBwYWRkaW5nOiAzMHB4IDUwcHggMHB4IDUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgc3RhcnQ7XG59XG4uYm94OmhvdmVyIC5ib3gtY29udGVudCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogMDtcbn1cbi5ib3ggLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW46IDAgMCA0cHg7XG59XG4uYm94IC5wb3N0IHtcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDFweDsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwLCAwLCAwKTtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIFRyaXBwbGUgYnV0dG9uICovXG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5pY29uIC5pY29ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbn1cbi5ib3ggLmljb24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNiwgLTAuOCwgMC43MzUsIDAuMDQ1KTtcbn1cbi5ib3g6aG92ZXIgLmljb24ge1xuICBvcGFjaXR5OiAxMDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLmljb24gLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmljb24gLnRvb2x0aXA6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvdHRvbTogLTNweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbn1cblxuLmljb24gLmljb25zOmhvdmVyIC50b29sdGlwIHtcbiAgdG9wOiAtNDVweDtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5pY29uIC5pY29uczpob3ZlciBzcGFuLFxuLmljb24gLmljb25zOmhvdmVyIC50b29sdGlwIHtcbiAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pY29uIC5mYWNlYm9vazpob3Zlcixcbi5pY29uIC5mYWNlYm9vazpob3ZlciAudG9vbHRpcCxcbi5pY29uIC5mYWNlYm9vazpob3ZlciAudG9vbHRpcDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzE4NzdmMjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaWNvbiAuZ2l0aHViOmhvdmVyLFxuLmljb24gLmdpdGh1Yjpob3ZlciAudG9vbHRpcCxcbi5pY29uIC5naXRodWI6aG92ZXIgLnRvb2x0aXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvbiAudHdpdHRlcjpob3Zlcixcbi5pY29uIC50d2l0dGVyOmhvdmVyIC50b29sdGlwLFxuLmljb24gLnR3aXR0ZXI6aG92ZXIgLnRvb2x0aXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMxZGExZjI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmZhYiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmJveCB7XG4gICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgfVxufVxuXG4vKiBNb2RhbCAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi5tb2RhbC1pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA0NTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA1NDBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xufVxuLm1vZGFsLWRldGFpbHMge1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi0taGlkZGVuIHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLm1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbn1cbi5jbG9zZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzZmMjc2O1xuICBib3JkZXItY29sb3I6ICMwNGJlZmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgd2lkdGg6IDk3dnc7XG4gIH1cbiAgLm1vZGFsLWltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgd2lkdGg6IDY1dnc7XG4gICAgcmlnaHQ6IDIwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xuICB9XG4gIC5tb2RhbC1pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMzJ2dztcbiAgfVxuICAubW9kYWwtY29udC1pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxuICAuY29udGFpbiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICB9XG4gIC5tZW51IHtcbiAgICB6LWluZGV4OiA1O1xuICB9XG4gIC5oYWxmIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxuICAubmF2LS1oaWRkZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbn1cblxuLm1vZGFsLXRvb2xzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5tLXBpZWNlIHtcbiAgcGFkZGluZzogMjBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xufVxuXG4vKiBidXR0b25zICovXG5cbi5idG4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1pbigxcmVtLCAyLjV2dyk7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAwLjV2dztcbiAgd2lkdGg6IDIwdnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cblxuLm1lbnUtdGl0bGUtYnRuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDF2dztcbiAgd2lkdGg6IDI1dnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS10aXRsZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS10aXRsZS1idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtdGl0bGUtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cbiJdfQ== */"], data: { animation: [
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
        window.scroll(0, 0);
    }
}
TestingComponent.ɵfac = function TestingComponent_Factory(t) { return new (t || TestingComponent)(); };
TestingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestingComponent, selectors: [["app-testing"]], decls: 184, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["target", "blank", "href", "https://drive.google.com/file/d/1Nb3V3mWSJbd-NC6MjJRG5pUEFDY9Fubx/view?usp=sharing"], [1, "btn", "download"], ["id", "resume", 1, "content"], [1, "header", "cat"], [1, "profile", "cat"], [1, "career", "cat"], [1, "career-container", "cat"], [1, "title"], [1, "company"], [1, "school"], [1, "outline-title"], [1, "outline"], [1, "core-title"], [1, "core"], [1, "impacts-title"], [1, "impacts"], [1, "education", "cat"], [1, "date"], [1, "languages", "cat"], [1, "volunteer", "cat"]], template: function TestingComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["*[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n\n  display: grid;\n  place-items: center;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1.3rem, 3vw);\n  text-align: justify;\n  text-justify: inter-word;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: min(3rem, 5vw);\n  font-family: \"Playfair Display\", serif;\n  color: rgb(0, 162, 255);\n}\nh6[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n\n  font-size: min(1.6rem, 3.2vw);\n}\n.core-title[_ngcontent-%COMP%], .impacts-title[_ngcontent-%COMP%], .impacts-title[_ngcontent-%COMP%], .outline-title[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.cat[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.content[_ngcontent-%COMP%] {\n  width: 70vw;\n  background-color: aliceblue;\n  padding: 5vw;\n  box-shadow: 10px 10px 8px #888888;\n}\n.header[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: end;\n}\n.title[_ngcontent-%COMP%] {\n  gap: 5vw;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n.right[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  padding: 1vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n.contact[_ngcontent-%COMP%] {\n  text-justify: right;\n  justify-text: right;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjs7RUFFckIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNDQUFzQzs7RUFFdEMsNkJBQTZCO0FBQy9CO0FBQ0E7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRTs7Ozs7O0dBTUM7RUFDRCxpREFBaUQ7QUFDbkQ7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InRlc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbnAsXG5saSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBtaW4oMS4zcmVtLCAzdncpO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiBtaW4oM3JlbSwgNXZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XG59XG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG5cbiAgZm9udC1zaXplOiBtaW4oMS42cmVtLCAzLjJ2dyk7XG59XG4uY29yZS10aXRsZSxcbi5pbXBhY3RzLXRpdGxlLFxuLmltcGFjdHMtdGl0bGUsXG4ub3V0bGluZS10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmNhdCB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiA3MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHBhZGRpbmc6IDV2dztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCAjODg4ODg4O1xufVxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBlbmQ7XG59XG5cbi50aXRsZSB7XG4gIGdhcDogNXZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG59XG5cbi5yaWdodCB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAxdnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cblxuLmNvbnRhY3Qge1xuICB0ZXh0LWp1c3RpZnk6IHJpZ2h0O1xuICBqdXN0aWZ5LXRleHQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */"] });


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