(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{7921:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return n(8694)}])},5619:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var s=n(5893),a=n(8420),r=n(8321),o=n(944),c=function(e){var t=e.dateString,n=(0,a.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,r.Z)(n,"yyyy.MM.dd",{locale:o.Z})})}},1729:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var s=n(5893),a=n(7294),r=n(9008),o=n(1664),c=n(9478),i=n(7815),l=n.n(i),d=n(5401),u=n(425),h=n(384),_=n(5701),f=n.n(_),x=function(){var e=(0,u.F)(),t=e.resolvedTheme,n=e.setTheme,a="light"===t;return(0,s.jsx)("button",{className:f().button,onClick:function(){n(a?"dark":"light")},children:(0,s.jsx)(h.CMO,{})})},g="/nextjs-microcms-blog-test/_next/static/media/logo.2f5f7284.png",m=function(e){var t=e.home;return(0,s.jsx)(s.Fragment,{children:t?(0,s.jsxs)("header",{id:"globalHeader",className:"".concat(l().header," ").concat(l().headerIsHome),children:[(0,s.jsxs)("h1",{className:l().title,children:[(0,s.jsx)("img",{src:g,alt:"",className:l().logo}),d.y]}),(0,s.jsx)(x,{})]}):(0,s.jsxs)("header",{id:"globalHeader",className:l().header,children:[(0,s.jsx)(o.default,{href:"/",children:(0,s.jsxs)("a",{className:l().link,children:[(0,s.jsx)("img",{src:g,alt:"",className:l().logo}),d.y]})}),(0,s.jsx)(x,{})]})})},j=n(3750),y=n(7306),v=n.n(y),p=(n(8662),function(){var e=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,a.useEffect)((function(){var e=document.getElementById("globalHeader"),t=new IntersectionObserver((function(e){e[0].isIntersecting?n(!1):n(!0)}),{root:null,threshold:[0,1]});return e&&t.observe(e),function(){t.disconnect()}}));var r=t?{opacity:.8}:{opacity:0,pointerEvents:"none"};return(0,s.jsx)("button",{type:"button",id:"scrollTopButton",style:r,className:v().button,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,s.jsx)(j.FKi,{})})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("footer",{className:v().footer}),(0,s.jsx)(e,{})]})}),N=n(1303),b=n.n(N);function L(e){var t=e.children,n=e.home,i=void 0!==n&&n,l=(0,a.useContext)(c.J),u=l.allCategoryData,h=l.allTagData;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:d.y}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}),(0,s.jsx)("meta",{name:"robots",content:"noindex,nofollow,noarchive"}),(0,s.jsx)("link",{rel:"icon",href:"/images/favicon.ico"})]}),(0,s.jsxs)("div",{className:b().flexWrap,children:[(0,s.jsxs)("div",{className:b().flexSet,children:[(0,s.jsx)(m,{home:i}),(0,s.jsxs)("div",{className:b().col2,children:[(0,s.jsx)("main",{className:b().left,children:t}),(0,s.jsxs)("nav",{className:"".concat(b().right," ").concat(b().nav),children:[(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Categories"}),(0,s.jsx)("dd",{children:(0,s.jsx)("ul",{className:b().categoryList,children:function(){var e=[];return u.length>=1&&u.forEach((function(t){e.push((0,s.jsx)("li",{children:(0,s.jsx)(o.default,{href:"/category/".concat(t.id,"/page/1/"),children:(0,s.jsxs)("a",{children:[t.name,(0,s.jsx)("span",{className:b().categoryCount,children:t.count})]})})},t.id))})),e}()})})]}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Tags"}),(0,s.jsx)("dd",{children:(0,s.jsx)("ul",{className:b().tagList,children:function(){var e=[];return h.length>=1&&h.forEach((function(t){return e.push((0,s.jsx)("li",{children:(0,s.jsx)(o.default,{href:"/tag/".concat(t.id,"/page/1/"),children:(0,s.jsxs)("a",{children:["#",t.name]})})},t.id))})),e}()})})]})]})]})]}),(0,s.jsx)(p,{})]})]})}},8694:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return _}});var s=n(5893),a=n(7294),r=n(9008),o=(n(9743),n(1729)),c=n(5619),i=n(5401),l=n(4467),d=n.n(l),u=n(1664),h=!0;function _(e){var t=e.blog,n=e.highlightedBody;return(0,a.useEffect)((function(){}),[]),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(r.default,{children:(0,s.jsxs)("title",{children:[t.title," | ",i.y]})}),(0,s.jsx)("h1",{className:d().title,children:t.title}),(0,s.jsxs)("div",{className:d().date,children:[(0,s.jsx)(c.E,{dateString:t.publishedAt}),(0,s.jsx)(u.default,{href:"/category/".concat(t.category.id,"/page/1/"),children:(0,s.jsx)("a",{className:d().category,children:t.category&&"".concat(t.category.name)})})]}),(0,s.jsx)("ul",{className:d().tagList,children:t.tag.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.default,{href:"/tag/".concat(e.id,"/page/1/"),children:(0,s.jsx)("a",{children:e.name})})},e.id)}))}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(n)},className:d().post})]})}},5401:function(e,t,n){"use strict";n.d(t,{y:function(){return s},L:function(){return a}});var s="next-microcms-blog-test",a=5},4467:function(e){e.exports={title:"Post_title__MJ8Hr",thumb:"Post_thumb__DyJBI",date:"Post_date__MxHpb",category:"Post_category__wQpNz",tagList:"Post_tagList__f6IPI",shareList:"Post_shareList__TLncX",post:"Post_post__vaBQ1"}},7306:function(e){e.exports={footer:"Footer_footer__Ksopt",button:"Footer_button__NUyri"}},7815:function(e){e.exports={header:"Header_header__Kpax6",title:"Header_title__aMYem",link:"Header_link__LXEkx",logo:"Header_logo__q5xpd"}},1303:function(e){e.exports={flexWrap:"Layout_flexWrap__j3vvR",flexSet:"Layout_flexSet__xrJqK",col2:"Layout_col2__7JOz_",left:"Layout_left__f4bZF",right:"Layout_right__r3WSU",nav:"Layout_nav__yfNQD",categoryList:"Layout_categoryList__IgIdq",categoryCount:"Layout_categoryCount__VX8pL",tagList:"Layout_tagList__2etmu"}},5701:function(e){e.exports={button:"ThemeToggle_button__IWtFm"}},9743:function(){}},function(e){e.O(0,[13,941,23,710,774,888,179],(function(){return t=7921,e(e.s=t);var t}));var t=e.O();_N_E=t}]);