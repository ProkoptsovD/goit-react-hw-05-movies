"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[307],{6307:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n,a,c,s,u,i=r(885),o=r(3990),p=r(2791),l=r(6871),f=r(5535),h=r(168),v=r(6444),d=v.ZP.ul(n||(n=(0,h.Z)([""]))),g=v.ZP.li(a||(a=(0,h.Z)([""]))),w=v.ZP.h3(c||(c=(0,h.Z)([""]))),x=v.ZP.p(s||(s=(0,h.Z)([""]))),Z=v.ZP.p(u||(u=(0,h.Z)(["\n    margin-bottom: 20px;\n"]))),k=r(184),m=function(){var e=(0,p.useState)((function(){return[]})),t=(0,i.Z)(e,2),r=t[0],n=t[1],a=(0,l.UO)().movieId;return(0,p.useEffect)((function(){f.H.getReviews(a).then((function(e){var t=e.data.results;n(t)})).catch(console.log)}),[a]),(0,k.jsx)(o.Z,{title:"Reviews",children:r.length?(0,k.jsx)(d,{children:r.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,k.jsxs)(g,{children:[(0,k.jsx)(w,{children:t}),(0,k.jsx)(x,{children:r})]},n)}))}):(0,k.jsx)(Z,{children:"We don't have any review for this film"})})}},3990:function(e,t,r){r.d(t,{Z:function(){return l}});var n,a,c=r(1527),s=r(168),u=r(6444),i=u.ZP.section(n||(n=(0,s.Z)([""]))),o=u.ZP.h1(a||(a=(0,s.Z)(["\n    margin-bottom: 20px;\n    text-align: center;\n    color: inherit;\n"]))),p=r(184),l=function(e){var t=e.children,r=e.title;return(0,p.jsx)(i,{children:(0,p.jsxs)(c.Z,{children:[r&&(0,p.jsx)(o,{children:r}),t]})})}},5535:function(e,t,r){r.d(t,{H:function(){return x}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s),i="trending/all/day",o="search/movie",p="movie/",l="/credits",f="/reviews";u().defaults.baseURL="https://api.themoviedb.org/3/";var h=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(i+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(o+"?api_key=5ce599886a4c0703a030654068991e03&query="+t);case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw new Error(r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(p+t+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(r=e.sent,console.log(r),200!==r.status){e.next=7;break}return e.abrupt("return",r);case 7:throw new Error(r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(p+t+l+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw new Error(r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(p+t+f+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw new Error(r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),x={getTrendingMovies:h,searchMovie:v,getMovieDetails:d,getCast:g,getReviews:w,POSTER_URL:"https://image.tmdb.org/t/p/original"}}}]);
//# sourceMappingURL=307.69d98f28.chunk.js.map