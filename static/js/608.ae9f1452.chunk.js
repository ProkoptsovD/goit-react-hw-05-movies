"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{608:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r,a,c,s,i,o,u,p,l=n(885),h=n(3990),f=n(364),v=n(2791),d=n(6871),x=n(5535),g=n(168),Z=n(6444),w=Z.ZP.ul(r||(r=(0,g.Z)([""]))),m=Z.ZP.li(a||(a=(0,g.Z)(["\n    display: flex;\n\n    & > :not(:last-child) {\n        margin-bottom: 5px;\n    }\n"]))),b=Z.ZP.p(c||(c=(0,g.Z)([""]))),k=Z.ZP.img(s||(s=(0,g.Z)(["\n    width: 200px;\n    height: 300px;\n"]))),_=Z.ZP.p(i||(i=(0,g.Z)([""]))),j=Z.ZP.div(o||(o=(0,g.Z)(["\n    padding-top: 20px;\n    padding-left: 40px;\n\n    & > :not(:last-child) {\n        margin-bottom: 5px;\n    }\n"]))),y=Z.ZP.span(u||(u=(0,g.Z)(["\n    font-weight: 700;\n"]))),P=Z.ZP.p(p||(p=(0,g.Z)(["\n    margin-bottom: 20px;\n"]))),E=n(184),C=function(){var e=(0,v.useState)((function(){return[]})),t=(0,l.Z)(e,2),n=t[0],r=t[1],a=(0,d.UO)().movieId;return(0,v.useEffect)((function(){x.H.getCast(a).then((function(e){var t=e.data.cast;r(t)})).catch(console.log)}),[a]),(0,E.jsx)(h.Z,{title:"Cast",children:n.length?(0,E.jsx)(w,{children:n.map((function(e){var t=e.original_name,n=e.character,r=e.profile_path,a=e.id;return(0,E.jsxs)(m,{children:[(0,E.jsx)(k,{src:r?x.H.POSTER_URL+r:f.t}),(0,E.jsxs)(j,{children:[(0,E.jsxs)(b,{children:["Actor:",(0,E.jsxs)(y,{children:[" ",t]})]}),(0,E.jsxs)(_,{children:["Character:",(0,E.jsxs)(y,{children:[" ",n]})]})]})]},a)}))}):(0,E.jsx)(P,{children:"We don't have information about the cast for this movie"})})}},3990:function(e,t,n){n.d(t,{Z:function(){return l}});var r,a,c=n(1527),s=n(168),i=n(6444),o=i.ZP.section(r||(r=(0,s.Z)([""]))),u=i.ZP.h1(a||(a=(0,s.Z)(["\n    margin-bottom: 20px;\n    text-align: center;\n    color: inherit;\n"]))),p=n(184),l=function(e){var t=e.children,n=e.title;return(0,p.jsx)(o,{children:(0,p.jsxs)(c.Z,{children:[n&&(0,p.jsx)(u,{children:n}),t]})})}},364:function(e,t,n){n.d(t,{t:function(){return r}});var r="https://via.placeholder.com/100x100"},5535:function(e,t,n){n.d(t,{H:function(){return Z}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s),o="trending/all/day",u="search/movie",p="movie/",l="/credits",h="/reviews";i().defaults.baseURL="https://api.themoviedb.org/3/";var f=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get(o+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get(u+"?api_key=5ce599886a4c0703a030654068991e03&query="+t);case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get(p+t+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(n=e.sent,console.log(n),200!==n.status){e.next=7;break}return e.abrupt("return",n);case 7:throw new Error(n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get(p+t+l+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get(p+t+h+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Z={getTrendingMovies:f,searchMovie:v,getMovieDetails:d,getCast:x,getReviews:g,POSTER_URL:"https://image.tmdb.org/t/p/original"}}}]);
//# sourceMappingURL=608.ae9f1452.chunk.js.map