(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{24:function(t,e,n){"use strict";n.r(e);var r=n(1);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,m(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function s(t,e,n){return(s=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&f(i,n.prototype),i}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=n(19).markdown,p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(p,t);var e,n,i,u,s=(e=p,function(){var t,n=m(e);if(l()){var r=m(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).slug=t.slug,e.article=null,e.$articleBody=null,e.onCommentPost=e.onCommentPost.bind(a(e)),e}return n=p,u=[{key:"observedAttributes",get:function(){return[]}}],(i=[{key:"attributeChangedCallback",value:function(t,e,n){}},{key:"connectedCallback",value:function(){var t=this;this.innerHTML=this.render(),this.$articleBody=document.getElementById("article-body"),this.$commentCreate=this.querySelector("comment-create"),this.$commentsContainer=this.querySelector("comments-container"),this.$commentCreate.addEventListener("comment",this.onCommentPost),this.$articlePreviewBanner=this.querySelector("article-preview-banner"),r.a.instance.doGet("articles/"+this.slug,!0).then((function(t){return t.json()})).then((function(e){t.article=e.article,t.updateArticlePreviewBanner(),t.updateArticleContent()}))}},{key:"disconnectedCallback",value:function(){this.$commentCreate.removeEventListener("comment",this.onCommentPost)}},{key:"onCommentPost",value:function(t){var e=this;if(t.detail&&t.detail.length>0){var n={comment:{body:t.detail}};r.a.instance.doPost("articles/"+this.slug+"/comments",JSON.stringify(n),!0).then((function(t){e.$commentsContainer.comments.unshift(t.comment),e.$commentsContainer.refresh()}))}}},{key:"updateArticlePreviewBanner",value:function(){this.$articlePreviewBanner._slug=this.article.slug,this.$articlePreviewBanner.setAttribute("title",this.article.title),this.$articlePreviewBanner.setAttribute("username",this.article.author.username),this.$articlePreviewBanner.setAttribute("favorites-count",this.article.favoritesCount),this.$articlePreviewBanner.setAttribute("date",this.article.createdAt),this.$articlePreviewBanner.setAttribute("image",this.article.author.image),this.$articlePreviewBanner.setAttribute("following",this.article.author.following),this.$articlePreviewBanner.setAttribute("favorited",this.article.favorited)}},{key:"updateArticleContent",value:function(){this.$articleBody.innerHTML=d.toHTML(this.article.body)}},{key:"render",value:function(){return'\n              <div class="article-page">\n                <article-preview-banner following="" title="Loading .." username=".." date=".." image="https://static.productionready.io/images/smiley-cyrus.jpg" favorites-count="Loading ..." ></article-preview-banner>\n                \n                  <div class="container page">\n                \n                    <div class="row article-content">\n                      <div id="article-body" class="col-md-12">\n                        Loading ...\n                      </div>\n                    </div>\n                \n                    <hr />\n                \n                    <div class="row">\n                \n                      <div class="col-xs-12 col-md-8 offset-md-2">\n                        <comment-create></comment-create>\n                        <comments-container slug="'.concat(this.slug,'"></comments-container>\n                      </div>\n                \n                    </div>\n                \n                  </div>\n                \n                </div>\n        ')}}])&&o(n.prototype,i),u&&o(n,u),p}(u(HTMLElement));window.customElements.define("article-preview",p),e.default=p}}]);
//# sourceMappingURL=2.bundle.js.map