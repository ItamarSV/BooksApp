(function(t){function e(e){for(var r,n,s=e[0],d=e[1],l=e[2],c=0,m=[];c<s.length;c++)n=s[c],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var d=o[s];0!==a[d]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=o[0]))}return t}var r={},a={app:0},i=[];function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=d;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("85ec"),a=o.n(r);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f9e3");var r=o("9f7b"),a=o.n(r),i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],d=(o("034f"),o("2877")),l={},u=Object(d["a"])(l,n,s,!1,null,null,null),c=u.exports,m=o("8c4f"),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{},[o("div",{},[o("h1",[t._v("Books")]),o("hr"),o("br"),o("br"),o("b-alert",{attrs:{id:"myAlert",show:t.dismissCountDown,dismissible:"",variant:t.alertVariant,fade:""},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.message)+" ")]),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.book-modal",modifiers:{"book-modal":!0}}],staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[t._v("Add Book")]),o("br"),o("br"),o("table",{staticClass:"table table-hover"},[t._m(0),o("tbody",t._l(t.books,(function(e,r){return o("tr",{key:r},[o("td",[t._v(t._s(e.title))]),o("td",[t._v(t._s(e.author))]),o("td",[e.read?o("span",[t._v("Yes")]):o("span",[t._v("No")])]),o("td",[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.book-update-modal",modifiers:{"book-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(o){return t.editBook(e)}}},[t._v("Update ")]),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.book-delete-modal",modifiers:{"book-delete-modal":!0}}],staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.removeBookModel(e)}}},[t._v(" Delete ")])])])])})),0)])],1)]),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.book-table",modifiers:{"book-table":!0}}],staticClass:"btn btn-primary mt-5",attrs:{type:"button"}},[t._v("Insert book list to DB")]),o("b-modal",{ref:"bookTable",attrs:{id:"book-table",title:"List of Books on the system",size:"xl","hide-footer":""}},[o("b-form",{staticClass:"w-400"},[o("div",[o("b-table",{attrs:{striped:"",hover:"",items:t.books}})],1),o("b-button",{staticClass:"btn btn-primary mt-5 w-25",on:{click:t.hideTable}},[t._v("Close Me")])],1)],1),o("b-modal",{ref:"addBookModal",attrs:{id:"book-modal",title:"Add a new book","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[o("b-form-group",{attrs:{id:"form-title-group",label:"Title:","label-for":"form-title-input"}},[o("b-form-input",{attrs:{id:"form-title-input",type:"text",required:"",placeholder:"Enter title"},model:{value:t.addBookForm.title,callback:function(e){t.$set(t.addBookForm,"title",e)},expression:"addBookForm.title"}})],1),o("b-form-group",{attrs:{id:"form-author-group",label:"Author:","label-for":"form-author-input"}},[o("b-form-input",{attrs:{id:"form-author-input",type:"text",required:"",placeholder:"Enter author"},model:{value:t.addBookForm.author,callback:function(e){t.$set(t.addBookForm,"author",e)},expression:"addBookForm.author"}})],1),o("b-form-group",{attrs:{id:"form-read-group"}},[o("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addBookForm.read,callback:function(e){t.$set(t.addBookForm,"read",e)},expression:"addBookForm.read"}},[o("b-form-checkbox",{attrs:{value:"true"}},[t._v("Read?")])],1)],1),o("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.showAlert}},[t._v("Submit")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),o("b-modal",{ref:"editBookModal",attrs:{id:"book-update-modal",title:"Update","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmitUpdate}},[o("b-form-group",{attrs:{id:"form-title-edit-group",label:"Title:","label-for":"form-title-edit-input"}},[o("b-form-input",{attrs:{id:"form-title-edit-input",type:"text",required:"",placeholder:"Enter title"},model:{value:t.editForm.title,callback:function(e){t.$set(t.editForm,"title",e)},expression:"editForm.title"}})],1),o("b-form-group",{attrs:{id:"form-author-edit-group",label:"Author:","label-for":"form-author-edit-input"}},[o("b-form-input",{attrs:{id:"form-author-edit-input",type:"text",required:"",placeholder:"Enter author"},model:{value:t.editForm.author,callback:function(e){t.$set(t.editForm,"author",e)},expression:"editForm.author"}})],1),o("b-form-group",{attrs:{id:"form-read-edit-group"}},[o("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.editForm.read,callback:function(e){t.$set(t.editForm,"read",e)},expression:"editForm.read"}},[o("b-form-checkbox",{attrs:{value:"true"}},[t._v("Read?")])],1)],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.showAlert}},[t._v("Update")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1)],1),o("b-modal",{ref:"deleteBookModal",attrs:{id:"book-delete-modal",title:"Delete Book","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmitDelete,reset:t.onResetUpdate}},[o("b-form-group",{attrs:{id:"form-title-edit-group",label:"Are you sure that you what to delete this book?","label-for":"form-title-edit-input"}}),o("b-button-group",{staticClass:"position-flex justify-content-between flex-row"},[o("b-button",{staticClass:"position-flex justify-content-between",attrs:{type:"submit",variant:"primary"},on:{click:t.showAlert}},[t._v("Delete")]),o("b-button",{staticClass:"position-flex justify-content-between",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1)],1)],1)},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("Title")]),o("th",{attrs:{scope:"col"}},[t._v("Author")]),o("th",{attrs:{scope:"col"}},[t._v("Read?")]),o("th")])])}],h=o("bc3a"),p=o.n(h),k={data:function(){return{books:[],addBookForm:{title:"",author:"",read:[],id:"",price:""},message:"",showMessage:!1,editForm:{uuid:"",title:"",author:"",read:[],id:"",price:""},removeForm:{uuid:"",title:"",author:"",read:[],id:"",price:""},dismissSecs:5,dismissCountDown:0,alertVariant:"warning"}},watch:{},components:{},mounted:function(){},methods:{getBooks:function(){var t=this,e="http://localhost:5000/books";p.a.get(e).then((function(e){t.books=e.data.books})).catch((function(t){console.error(t)}))},addBook:function(t){var e=this,o="http://localhost:5000/books";p.a.post(o,t).then((function(){e.getBooks(),e.message="Book added!",e.showMessage=!0,e.alertVariant="success"})).catch((function(t){console.log(t),e.getBooks()}))},updateBook:function(t,e){var o=this,r="http://localhost:5000/books/".concat(e);p.a.put(r,t).then((function(){o.getBooks(),o.message="Book updated!",o.showMessage=!0,o.alertVariant="success"})).catch((function(t){console.error(t),o.getBooks()}))},removeBook:function(t){var e=this,o="http://localhost:5000/books/".concat(t);p.a.delete(o).then((function(){e.getBooks(),e.message="Book removed!",e.showMessage=!0,e.alertVariant="success"})).catch((function(t){console.error(t),e.getBooks()}))},onDeleteBook:function(t){this.removeBook(t.uuid)},initForm:function(){this.addBookForm.title="",this.addBookForm.author="",this.addBookForm.read=[],this.editForm.id="",this.editForm.title="",this.editForm.author="",this.editForm.read=[]},onSubmit:function(t){t.preventDefault(),this.$refs.addBookModal.hide();var e=!1;this.addBookForm.read[0]&&(e=!0);var o={title:this.addBookForm.title,author:this.addBookForm.author,read:e};this.addBook(o),this.initForm()},onReset:function(t){t.preventDefault(),this.$refs.addBookModal.hide(),this.initForm()},onSubmitUpdate:function(t){t.preventDefault(),this.$refs.editBookModal.hide();var e=!1;this.editForm.read[0]&&(e=!0);var o={title:this.editForm.title,author:this.editForm.author,read:e};this.updateBook(o,this.editForm.uuid)},onSubmitDelete:function(t){t.preventDefault(),this.$refs.deleteBookModal.hide(),this.removeBook(this.removeForm.uuid)},onResetUpdate:function(t){t.preventDefault(),this.$refs.editBookModal.hide(),this.initForm(),this.getBooks()},onResetDelete:function(t){t.preventDefault(),this.$refs.deleteBookModal.hide()},editBook:function(t){this.editForm=t},removeBookModel:function(t){this.removeForm=t},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},hideTable:function(){this.$refs.bookTable.hide()}},created:function(){this.getBooks()},editBook:function(t){this.editForm=t},deleteBook:function(t){this.editForm=t}},v=k,g=Object(d["a"])(v,b,f,!1,null,null,null),B=g.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(t.msg))])])},y=[],F={name:"Ping",data:function(){return{msg:""}},methods:{getMessage:function(){var t=this,e="http://localhost:5000/ping";p.a.get(e).then((function(e){t.msg=e.data})).catch((function(t){console.error(t)}))}},created:function(){this.getMessage()}},_=F,x=Object(d["a"])(_,w,y,!1,null,null,null),C=x.exports;i["default"].use(m["a"]);var M=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Books",component:B},{path:"/ping",name:"Ping",component:C}]});i["default"].use(a.a),i["default"].config.productionTip=!1,new i["default"]({router:M,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.724dfc7b.js.map