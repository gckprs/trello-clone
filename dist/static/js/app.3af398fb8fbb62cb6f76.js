webpackJsonp([1],{"3QC9":function(t,e){},"7zck":function(t,e){},ELpM:function(t,e){},IHPe:function(t,e){},JERo:function(t,e){},N5N7:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={methods:{navigateTo:function(t){console.log(t),this.$router.push(t)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar",{staticClass:"green",attrs:{fixed:""}},[s("v-toolbar-title",{staticClass:"mr-4"},[t._v("\n    Trello\n  ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{flat:"",dense:""},on:{click:function(e){t.navigateTo({name:"register"})}}},[t._v("Sign up")])],1)],1)},staticRenderFns:[]};var r={name:"App",components:{Header:s("VU/8")(i,a,!1,function(t){s("ELpM")},"data-v-efd6c9de",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("main",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(t){s("3QC9")},null,null).exports,o=s("/ocq"),d=s("Xxa5"),u=s.n(d),v=s("exGp"),f=s.n(v),p=s("mtWM"),b=s.n(p),h=function(t){return b.a.create({baseURL:"http://localhost:8081/"}).post("register",t)},m={data:function(){return{credentials:{email:"",password:""},error:null}},methods:{register:function(){var t=this;return f()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t.credentials);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),t.error=e.t0.response.data.error,console.log(t.error);case 9:case"end":return e.stop()}},e,t,[[0,5]])}))()}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mt-5 elevation-2",attrs:{md6:"","offset-md3":""}},[s("v-toolbar",{staticClass:"green",attrs:{flat:"",dense:"",dark:""}},[s("v-toolbar-title",[t._v("Register")])],1),t._v(" "),s("div",[s("v-flex",{attrs:{xs10:"","offset-xs1":""}},[s("v-text-field",{attrs:{id:"email",label:"Email"},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email",e)},expression:"credentials.email"}})],1),t._v(" "),s("v-flex",{attrs:{xs10:"","offset-xs1":""}},[s("v-text-field",{attrs:{id:"password",type:"password",label:"Password"},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}})],1),t._v(" "),s("v-btn",{attrs:{color:"green"},on:{click:t.register}},[t._v("Register")]),t._v(" "),s("p",{staticClass:"err"},[t._v(t._s(t.error))])],1)],1)],1)},staticRenderFns:[]};var g=s("VU/8")(m,_,!1,function(t){s("JERo")},"data-v-5274e5f4",null).exports,x=s("Dd8w"),C=s.n(x),w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"new-list"},[s("v-btn",{staticClass:"absolute",class:{visible:t.editing,invisible:!t.editing},on:{click:t.newList}},[s("span",{staticClass:"plus"},[t._v("+")]),t._v(" Add new list")]),t._v(" "),s("v-form",{staticClass:"absolute",class:{visible:!t.editing,invisible:t.editing}},[s("v-text-field",{ref:"text",attrs:{counter:16,placeholder:"Enter list title...",solo:"",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),s("div",{staticClass:"form-menu"},[s("v-btn",{on:{click:t.addNewList}},[t._v("Add list")]),t._v(" "),s("v-btn",{staticClass:"escape",on:{click:t.changeView}},[t._v("exit")])],1)],1)],1)},staticRenderFns:[]};var k=s("VU/8")({data:function(){return{title:"",editing:!0}},methods:{changeView:function(){this.editing=!this.editing,this.title=""},newList:function(){var t=this;this.changeView(),this.$nextTick(function(){return t.$refs.text.focus()})},addNewList:function(){this.title&&(this.$store.dispatch("board/pushList",{title:this.title}),this.changeView())}}},w,!1,function(t){s("QMmx")},"data-v-384b5db6",null).exports,E={props:{title:String},data:function(){return{editing:!1,currentTitle:""}},methods:{startEditing:function(){var t=this;this.editing=!0,this.$nextTick(function(){return t.$refs.text.focus()})}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main"},[s("v-card",{staticClass:"card absolute",attrs:{hover:""}},[s("div",{staticClass:"default",class:{visible:!t.editing,invisible:t.editing}},[s("span",{staticClass:"text"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{flat:""},on:{click:t.startEditing}},[t._v("create")])],1),t._v(" "),s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{flat:""}},[t._v("clear")])],1)],1)],1)]),t._v(" "),s("form",{class:{visible:t.editing,invisible:!t.editing}},[s("v-text-field",{ref:"text",staticClass:"absolute text-input",attrs:{autofocus:"",solo:"",height:"60px"},on:{blur:function(e){t.editing=!1}},model:{value:t.currentTitle,callback:function(e){t.currentTitle=e},expression:"currentTitle"}})],1)],1)},staticRenderFns:[]};var L=s("VU/8")(E,$,!1,function(t){s("N5N7")},"data-v-e84adff4",null).exports,R=s("NYxO"),V={components:{Card:L},props:{title:String,cards:Array},computed:C()({},Object(R.b)({board:function(t){return t.board}}))},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"list"},[s("span",{staticClass:"title pb-3"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.board.lists.find(function(e){return e.title===t.title}).cards,function(t,e){return s("card",{key:e,staticClass:"card",attrs:{title:t}})}),t._v(" "),s("v-btn",[s("span",{staticClass:"plus"},[t._v("+")]),t._v(" Add a card")])],2)},staticRenderFns:[]};var A={name:"Board",components:{AddList:k,List:s("VU/8")(V,T,!1,function(t){s("IHPe")},"data-v-75b7f4d6",null).exports},computed:C()({},Object(R.b)({board:function(t){return t.board}}))},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"board"},[this._l(this.board.lists,function(t,s){return e("list",{key:s,staticClass:"pt-3 pb-1 list",attrs:{title:t.title,cards:t.cards}})}),this._v(" "),e("add-list")],2)},staticRenderFns:[]};var U=s("VU/8")(A,N,!1,function(t){s("f7CG")},"data-v-8d9bd310",null).exports;n.default.use(o.a);var F=new o.a({routes:[{path:"/register",name:"register",component:g},{path:"/board",name:"board",component:U}]}),y=s("3EgV"),H=s.n(y),M={namespaced:!0,state:{lists:[{title:"Shopping",cards:["Bread","Cheese","Apples"]},{title:"Uni",cards:[]}]},actions:{pushList:function(t,e){var s=e.title;t.commit("pushList",s)}},mutations:{pushList:function(t,e){t.lists.push({title:e,cards:[]})}},getters:{}};n.default.use(R.a);var J=new R.a.Store({modules:{board:M}});s("7zck"),s("gJtD");n.default.use(H.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:F,components:{App:l},template:"<App/>",store:J})},QMmx:function(t,e){},f7CG:function(t,e){},gJtD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3af398fb8fbb62cb6f76.js.map