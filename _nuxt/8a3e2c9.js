(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{280:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("269ae7fd",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n(280)},284:function(t,e,n){(e=n(38)(!1)).push([t.i,"@media(max-width:500px){.header{width:300px!important;height:300px!important;border:15px solid #fff!important;margin-top:120px!important}.header img{height:100%;width:auto}}.header{width:400px;height:400px;border-radius:50%;margin:80px auto 0;overflow:hidden;border:30px solid #fff}.header img{height:100%;width:auto}article{max-width:800px;margin:0 auto;color:#636e72}.title{text-align:center;font-size:2em;margin:20px 0}.nuxt-content{margin:0 auto}.md-figure-block{overflow:hidden;width:100%}.md-figure-block img{height:auto;width:100%;display:block;margin:0 auto}.md-figure-block figcaption{text-align:center;margin:15px 0;color:grey;font-size:1em}.nuxt-content h2{font-weight:700;font-size:2em}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{font-size:1.6em;margin-bottom:20px}",""]),t.exports=e},308:function(t,e,n){"use strict";n.r(e);n(64);var r=n(10),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("posts",r.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{post:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(n(283),n(33)),d=n(68),m=n.n(d),l=n(277),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("div",{staticClass:"header"},[n("img",{staticClass:"header-img",attrs:{src:t.post.img}})]),t._v(" "),n("article",[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.post.title))])]),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),n("p",[t._v("Post last updated: "+t._s(t.formatDate(t.post.updatedAt))+" ")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:l.a})}}]);