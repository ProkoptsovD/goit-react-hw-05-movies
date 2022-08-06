"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{608:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r,a,c,i,s,o,u,p,l=n(885),h=n(3990),f=n(364),v=n(2791),d=n(6871),x=n(5535),g=n(168),Z=n(6444),m=Z.ZP.ul(r||(r=(0,g.Z)([""]))),w=Z.ZP.li(a||(a=(0,g.Z)(["\n    display: flex;\n\n    & > :not(:last-child) {\n        margin-bottom: 5px;\n    }\n"]))),b=Z.ZP.p(c||(c=(0,g.Z)([""]))),k=Z.ZP.img(i||(i=(0,g.Z)(["\n    width: 200px;\n    height: 300px;\n"]))),_=Z.ZP.p(s||(s=(0,g.Z)([""]))),j=Z.ZP.div(o||(o=(0,g.Z)(["\n    padding-top: 20px;\n    padding-left: 40px;\n\n    & > :not(:last-child) {\n        margin-bottom: 5px;\n    }\n"]))),y=Z.ZP.span(u||(u=(0,g.Z)(["\n    font-weight: 700;\n"]))),P=Z.ZP.p(p||(p=(0,g.Z)(["\n    margin-bottom: 20px;\n"]))),E=n(184),C=function(){var t=(0,v.useState)((function(){return[]})),e=(0,l.Z)(t,2),n=e[0],r=e[1],a=(0,d.UO)().movieId;return(0,v.useEffect)((function(){x.H.getCast(a).then((function(t){var e=t.data.cast;return r(e)})).catch(console.log)}),[a]),(0,E.jsx)(h.Z,{title:"Cast",children:n.length?(0,E.jsx)(m,{children:n.map((function(t){var e=t.original_name,n=t.character,r=t.profile_path,a=t.id;return(0,E.jsxs)(w,{children:[(0,E.jsx)(k,{src:r?x.H.POSTER_URL+r:f.t}),(0,E.jsxs)(j,{children:[(0,E.jsxs)(b,{children:["Actor:",(0,E.jsxs)(y,{children:[" ",e]})]}),(0,E.jsxs)(_,{children:["Character:",(0,E.jsxs)(y,{children:[" ",n]})]})]})]},a)}))}):(0,E.jsx)(P,{children:"We don't have information about the cast for this movie"})})}},3990:function(t,e,n){n.d(e,{Z:function(){return l}});var r,a,c=n(1527),i=n(168),s=n(6444),o=s.ZP.section(r||(r=(0,i.Z)([""]))),u=s.ZP.h1(a||(a=(0,i.Z)(["\n    margin-bottom: 20px;\n    text-align: center;\n    color: inherit;\n"]))),p=n(184),l=function(t){var e=t.children,n=t.title;return(0,p.jsx)(o,{children:(0,p.jsxs)(c.Z,{children:[n&&(0,p.jsx)(u,{children:n}),e]})})}},364:function(t,e,n){n.d(e,{t:function(){return r}});var r=n(837)},5535:function(t,e,n){n.d(e,{H:function(){return Z}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),s=n.n(i),o="trending/all/day",u="search/movie",p="movie/",l="/credits",h="/reviews";s().defaults.baseURL="https://api.themoviedb.org/3/";var f=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get(o+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(e=t.sent).status){t.next=6;break}return t.abrupt("return",e);case 6:throw new Error(e);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get(u+"?api_key=5ce599886a4c0703a030654068991e03&query="+e);case 3:if(200!==(n=t.sent).status){t.next=6;break}return t.abrupt("return",n);case 6:throw new Error(n);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get(p+e+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(n=t.sent).status){t.next=6;break}return t.abrupt("return",n);case 6:throw new Error(n);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get(p+e+l+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(n=t.sent).status){t.next=6;break}return t.abrupt("return",n);case 6:throw new Error(n);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get(p+e+h+"?api_key=5ce599886a4c0703a030654068991e03");case 3:if(200!==(n=t.sent).status){t.next=6;break}return t.abrupt("return",n);case 6:throw new Error(n);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),Z={getTrendingMovies:f,searchMovie:v,getMovieDetails:d,getCast:x,getReviews:g,POSTER_URL:"https://image.tmdb.org/t/p/original"}},837:function(t,e,n){t.exports=n.p+"static/media/image-fallback.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=608.9f7c7643.chunk.js.map