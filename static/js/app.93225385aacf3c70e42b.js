webpackJsonp([3],{

/***/ "/CpB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_side_vue__ = __webpack_require__("Zcix");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_79e0eae0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_side_vue__ = __webpack_require__("Z0W+");
function injectStyle (ssrContext) {
  __webpack_require__("3RrH")
}
var normalizeComponent = __webpack_require__("ngHh")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79e0eae0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_side_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_79e0eae0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_side_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "/vGx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_config_js__ = __webpack_require__("SJ0h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__book_config_js__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      footer: __WEBPACK_IMPORTED_MODULE_0__book_config_js__["footer"],
      bookinfo: __WEBPACK_IMPORTED_MODULE_0__book_config_js__["bookinfo"]
    };
  }
});

/***/ }),

/***/ "09s0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("O534");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("oIQ+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("vrp3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xunlei_vue_lazy_component__ = __webpack_require__("JG3G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xunlei_vue_lazy_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__xunlei_vue_lazy_component__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__xunlei_vue_lazy_component___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
})


/***/ }),

/***/ "2KbO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["src", "autoplay", "loop", 'name'],
  data: function data() {
    return {
      playing: this.autoplay,
      showing: -1 // -1表示初始隐藏  0 初始隐藏但是会有隐藏动画  1表示初始展示 也带动画
    };
  },

  methods: {
    change: function change() {
      this.playing = !this.playing;
      var audio = document.getElementById('music');
      if (this.playing) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    show_hide: function show_hide() {
      if (this.showing < 1) {
        this.showing = 1;
      } else {
        this.showing = 0;
      }
    }
  }
});

/***/ }),

/***/ "2Kwe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2dHI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/美人-常静.af7d02c.mp3";

/***/ }),

/***/ "3RrH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3cmt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('Header'),_vm._v(" "),_c('Side'),_vm._v(" "),(_vm.musicOn)?_c('Music',{attrs:{"src":_vm.musicSrc,"autoplay":_vm.autoplay,"loop":_vm.loop,"name":_vm.musicName}}):_vm._e(),_vm._v(" "),_c('div',{attrs:{"id":"articlecontainer"}},[_c('router-view',{key:_vm.key})],1),_vm._v(" "),_c('Nav',{key:_vm.key}),_vm._v(" "),_c('div',{staticClass:"backImg",style:(_vm.styleObj)}),_vm._v(" "),_c('Footer')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7kWe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articles_json__ = __webpack_require__("Hzjv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articles_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__articles_json__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  computed: {
    id: function id() {
      var id = this.$router.history.current.params.id;
      return id;
    }
  },
  methods: {
    //  获取当前章节的 index
    getIdx: function getIdx() {
      var id = this.id;
      var idx = -1;
      for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__articles_json___default.a.length; i++) {
        var val = __WEBPACK_IMPORTED_MODULE_0__articles_json___default.a[i];
        if (val.title && val.title === id) {
          idx = val.index;
          break;
        }
      }
      return idx;
    },

    // 点击下一章
    nextChapter: function nextChapter() {
      var index = parseInt(this.getIdx());
      if (index === __WEBPACK_IMPORTED_MODULE_0__articles_json___default.a.length - 1) {
        alert("已经是最后一张了！");
        return;
      }
      var nextId = __WEBPACK_IMPORTED_MODULE_0__articles_json___default.a[index + 1].title;
      this.$router.push({ path: '/article/' + nextId });
    },

    // 点击上一章
    prevChapter: function prevChapter() {
      var index = parseInt(this.getIdx());
      if (index === 1) {
        this.$router.push({ path: '/' });
        return;
      }

      var nextId = __WEBPACK_IMPORTED_MODULE_0__articles_json___default.a[index - 1].title;
      this.$router.push({ path: '/article/' + nextId });
    }
  }
});

/***/ }),

/***/ "BzP3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CLqc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('div',{staticClass:"siteName"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v(_vm._s(_vm.bookinfo.title))]),_vm._v(" "),_c('span',{staticClass:"desc"},[_vm._v(_vm._s(_vm.bookinfo.subtitle))])],1),_vm._v(" "),_c('ul',{staticClass:"header_menu "},_vm._l((_vm.menuInfo),function(item){return _c('li',[_c('router-link',{attrs:{"to":item.href}},[_vm._v(_vm._s(item.name))])],1)}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CxpH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.id)?_c('div',{staticClass:"nav"},[_c('div',{staticClass:"navitem prev",on:{"click":_vm.prevChapter}},[_vm._v("上一章")]),_vm._v(" "),_c('div',{staticClass:"navitem next",on:{"click":_vm.nextChapter}},[_vm._v("下一章")])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Er5t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_footer_vue__ = __webpack_require__("kEG6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_header_vue__ = __webpack_require__("GTNa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_music_vue__ = __webpack_require__("x+9s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_side_vue__ = __webpack_require__("/CpB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_nav_vue__ = __webpack_require__("hhGo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css__ = __webpack_require__("qOrV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_config_js__ = __webpack_require__("ed6G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__theme_config_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      styleObj: {
        'backgroundImage': 'url(' + __webpack_require__("qilC") + ')'
      },
      musicOn: __WEBPACK_IMPORTED_MODULE_6__theme_config_js__["musicOn"],
      autoplay: __WEBPACK_IMPORTED_MODULE_6__theme_config_js__["autoplay"],
      musicSrc: __WEBPACK_IMPORTED_MODULE_6__theme_config_js__["musicSrc"],
      loop: __WEBPACK_IMPORTED_MODULE_6__theme_config_js__["musicLoop"],
      musicName: __WEBPACK_IMPORTED_MODULE_6__theme_config_js__["musicName"]
    };
  },

  components: {
    Header: __WEBPACK_IMPORTED_MODULE_1__components_common_header_vue__["a" /* default */], Footer: __WEBPACK_IMPORTED_MODULE_0__components_common_footer_vue__["a" /* default */], Music: __WEBPACK_IMPORTED_MODULE_2__components_common_music_vue__["a" /* default */], Side: __WEBPACK_IMPORTED_MODULE_3__components_common_side_vue__["a" /* default */], Nav: __WEBPACK_IMPORTED_MODULE_4__components_common_nav_vue__["a" /* default */]
  },
  computed: {
    key: function key() {
      return this.$route.id !== undefined ? this.$route.id + +new Date() : this.$route + +new Date();
    }
  }
});

/***/ }),

/***/ "GTNa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__("psoU");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_aa6caccc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__("CLqc");
function injectStyle (ssrContext) {
  __webpack_require__("doBX")
}
var normalizeComponent = __webpack_require__("ngHh")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aa6caccc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_aa6caccc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HZN1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Hzjv":
/***/ (function(module, exports) {

module.exports = [{"name":"home.md"},{"name":"第1章.md","title":"第1章","timestamp":1500321597000,"date":"2017-07-18 03:59:57","words":"3509","index":"1"},{"name":"第2章.md","title":"第2章","timestamp":1500321597000,"date":"2017-07-18 03:59:57","words":"3599","index":"2"},{"name":"第3章.md","title":"第3章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3602","index":"3"},{"name":"第4章.md","title":"第4章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3576","index":"4"},{"name":"第5章.md","title":"第5章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3628","index":"5"},{"name":"第6章.md","title":"第6章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3799","index":"6"},{"name":"第7章.md","title":"第7章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3607","index":"7"},{"name":"第8章.md","title":"第8章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3555","index":"8"},{"name":"第9章.md","title":"第9章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3685","index":"9"},{"name":"第10章.md","title":"第10章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3637","index":"10"},{"name":"第11章.md","title":"第11章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3508","index":"11"},{"name":"第12章.md","title":"第12章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3698","index":"12"},{"name":"第13章.md","title":"第13章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3574","index":"13"},{"name":"第14章.md","title":"第14章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3544","index":"14"},{"name":"第15章.md","title":"第15章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3593","index":"15"},{"name":"第16章.md","title":"第16章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3644","index":"16"},{"name":"第17章.md","title":"第17章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3736","index":"17"},{"name":"第18章.md","title":"第18章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3558","index":"18"},{"name":"第19章.md","title":"第19章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3675","index":"19"},{"name":"第20章.md","title":"第20章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3516","index":"20"},{"name":"第21章.md","title":"第21章","timestamp":1500321598000,"date":"2017-07-18 03:59:58","words":"3571","index":"21"},{"name":"第22章.md","title":"第22章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3982","index":"22"},{"name":"第23章.md","title":"第23章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3567","index":"23"},{"name":"第24章.md","title":"第24章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3517","index":"24"},{"name":"第25章.md","title":"第25章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3584","index":"25"},{"name":"第26章.md","title":"第26章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3762","index":"26"},{"name":"第27章.md","title":"第27章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3511","index":"27"},{"name":"第28章.md","title":"第28章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3506","index":"28"},{"name":"第29章.md","title":"第29章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3519","index":"29"},{"name":"第30章.md","title":"第30章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3510","index":"30"},{"name":"第31章.md","title":"第31章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3601","index":"31"},{"name":"第32章.md","title":"第32章","timestamp":1500321599000,"date":"2017-07-18 03:59:59","words":"3650","index":"32"},{"name":"第33章.md","title":"第33章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3736","index":"33"},{"name":"第34章.md","title":"第34章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3514","index":"34"},{"name":"第35章.md","title":"第35章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3521","index":"35"},{"name":"第36章.md","title":"第36章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3545","index":"36"},{"name":"第37章.md","title":"第37章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3511","index":"37"},{"name":"第38章.md","title":"第38章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3597","index":"38"},{"name":"第39章.md","title":"第39章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3515","index":"39"},{"name":"第40章.md","title":"第40章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3568","index":"40"},{"name":"第41章.md","title":"第41章","timestamp":1500321600000,"date":"2017-07-18 04:00:00","words":"3246","index":"41"}]

/***/ }),

/***/ "IAR9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"footer"},[_vm._v("\r\n      "+_vm._s(_vm.bookinfo.author)+" |  "),_c('a',{attrs:{"href":_vm.footer.url}},[_vm._v("原网址")]),_vm._v("  | "+_vm._s(_vm.bookinfo.email)+"\r\n    ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "SJ0h":
/***/ (function(module, exports) {

module.exports = {
  bookinfo:{
    title: '命中注定的王妃',
    subtitle: '执子之手，与子偕老',
    description: ' 同居长干里，两小无嫌猜—— 幼时因缘初遇，寄情香巾.. 取次花丛懒回顾，半缘修道半缘君—— 五年后，再次相逢，却深陷巨大阴谋.. 众里寻她千百度，蓦然回首—— 恨遮挡了他的眼睛，对她百般折磨.. 此情可待成追忆，只是当时已惘然—— 恨蒙蔽了她的内心，不知爱入骨髓.. 昨夜星辰昨夜风—— 真相揭晓，他和她皆身中剧毒.. 黑暗背后的狰狞面目摧残了一对生死恋人.. 我欲与君相知，长命无绝衰—— 生死边缘，诀别一吻.. 只是凄——令苍天为之哭泣.. 只是美——让桃花灿烂山间.. 从别后，忆相逢，几回梦魂与君同—— 是是非非，爱恨缠绵，亦或是天上人间.. 执子之手，与子偕老—— 只是因为命中注定...',
    author: '妍嬭婲婔',
    email:'316434161@qq.com'
  },
  // menu:{
  //   home:{name:'首页',href:'/'},
  //   tags:{name:'标签',href:'/tags'},
  //   categories:{name:'类别',href:'/categories'},
  // },
  menu_icons:{
    enable:false
  },
  footer:{
    url:"http://www.114txt.com/read/36819/",
  },
  bookTheme:"default",
}


/***/ }),

/***/ "YOqS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Z0W+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sideWrap",class:{'show':_vm.showing}},[_c('div',{attrs:{"id":"side"}},[_c('div',{staticClass:"chapter",staticStyle:{"margin":"0"}},[_c('router-link',{staticClass:"link",attrs:{"to":"/"}},[_vm._v(" 首页 ")])],1),_vm._v(" "),_vm._l((_vm.chapters),function(item,index){return (item.title)?_c('div',{key:item.title,staticClass:"chapter"},[_c('router-link',{staticClass:"link",attrs:{"to":_vm.genUrl(item.title)}},[_vm._v(" "+_vm._s(item.title)+" ")])],1):_vm._e()})],2),_vm._v(" "),_c('div',{staticClass:"toogleSide",on:{"click":_vm.toogleSide}},[_vm._v(" "+_vm._s(_vm.showing?"<":">")+" ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Zcix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var arts = __webpack_require__("Hzjv");
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      chapters: arts,
      showing: false
    };
  },

  methods: {
    toogleSide: function toogleSide() {
      this.showing = !this.showing;
    },
    genUrl: function genUrl(url) {
      return '/article/' + url;
    }
  }
});

/***/ }),

/***/ "doBX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ed6G":
/***/ (function(module, exports, __webpack_require__) {

//  对于该主题的 一些设置
module.exports = {
    musicOn: true,
    musicSrc: __webpack_require__("2dHI"),
    musicName: "美人-常静",
    autoplay: false,
    musicLoop: true

}


/***/ }),

/***/ "hhGo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_nav_vue__ = __webpack_require__("7kWe");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_216c93c9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_nav_vue__ = __webpack_require__("CxpH");
function injectStyle (ssrContext) {
  __webpack_require__("BzP3")
}
var normalizeComponent = __webpack_require__("ngHh")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-216c93c9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_nav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_216c93c9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_nav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "kEG6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__("/vGx");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_5e0e1282_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__("IAR9");
function injectStyle (ssrContext) {
  __webpack_require__("YOqS")
}
var normalizeComponent = __webpack_require__("ngHh")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e0e1282"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_5e0e1282_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "oIQ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("Er5t");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_05620f9e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("3cmt");
function injectStyle (ssrContext) {
  __webpack_require__("HZN1")
}
var normalizeComponent = __webpack_require__("ngHh")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_05620f9e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "psoU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_config_js__ = __webpack_require__("SJ0h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__book_config_js__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      bookinfo: __WEBPACK_IMPORTED_MODULE_0__book_config_js__["bookinfo"],
      menuInfo: __WEBPACK_IMPORTED_MODULE_0__book_config_js__["menu"]
    };
  }
});

/***/ }),

/***/ "qBQK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{showing : _vm.showing==1,hiding : _vm.showing==0 },style:({left:_vm.showing==1?'0':'-170px'}),attrs:{"id":"musicbox"}},[_c('audio',{attrs:{"src":_vm.src,"autoplay":_vm.autoplay,"id":"music","loop":_vm.loop}},[_vm._v("\n        您的浏览器版本过低，无法播放，请及时升级\n    ")]),_vm._v(" "),_c('div',{staticClass:"musicname"},[_c('marquee',{attrs:{"behavior":"alternate","direction":"left","scrollamount":"1"}},[_vm._v("      "+_vm._s(_vm.name)+"      ")])],1),_vm._v(" "),_c('div',{staticClass:"hide-show",on:{"click":_vm.show_hide}},[_vm._v(" "+_vm._s(_vm.showing==1?"<":">")+" ")]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('div',{staticClass:"play-pause",class:{playing:_vm.playing , pausing:!_vm.playing},attrs:{"id":"playPause"},on:{"click":_vm.change}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qOrV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qilC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bg.5304c2d.jpeg";

/***/ }),

/***/ "vrp3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("O534");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("dNqC");


const home = () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "mnLH"))
const article = () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "MnSG"))

const notFound = () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "z9/M"))

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/article/:id',
      name: 'article',
      component: article
    },{ //  配置 所有 错误路由 404 页面
      path: '/*',
      name: 'notFound',
      component: notFound
    }
  ]
}));


/***/ }),

/***/ "x+9s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_music_vue__ = __webpack_require__("2KbO");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_57ab9916_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_music_vue__ = __webpack_require__("qBQK");
function injectStyle (ssrContext) {
  __webpack_require__("2Kwe")
}
var normalizeComponent = __webpack_require__("ngHh")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57ab9916"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_7_0_vue_loader_lib_selector_type_script_index_0_music_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_57ab9916_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_7_0_vue_loader_lib_selector_type_template_index_0_music_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},["09s0"]);
//# sourceMappingURL=app.93225385aacf3c70e42b.js.map