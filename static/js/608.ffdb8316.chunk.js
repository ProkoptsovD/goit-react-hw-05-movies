"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{608:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var i,r,a,c,o,s,u,h,d=e(885),l=e(3990),p=e(364),f=e(2791),g=e(6871),v=e(5535),x=e(168),Z=e(6444),m=Z.ZP.ul(i||(i=(0,x.Z)([""]))),_=Z.ZP.li(r||(r=(0,x.Z)(["\n    display: flex;\n\n    & > :not(:last-child) {\n        margin-bottom: 5px;\n    }\n"]))),j=Z.ZP.p(a||(a=(0,x.Z)([""]))),P=Z.ZP.img(c||(c=(0,x.Z)(["\n    width: 200px;\n    height: 300px;\n"]))),b=Z.ZP.p(o||(o=(0,x.Z)([""]))),k=Z.ZP.div(s||(s=(0,x.Z)(["\n    padding-top: 20px;\n    padding-left: 40px;\n\n    & > :not(:last-child) {\n        margin-bottom: 5px;\n    }\n"]))),w=Z.ZP.span(u||(u=(0,x.Z)(["\n    font-weight: 700;\n"]))),y=Z.ZP.p(h||(h=(0,x.Z)(["\n    margin-bottom: 20px;\n"]))),C=e(184),R=function(){var n=(0,f.useState)((function(){return[]})),t=(0,d.Z)(n,2),e=t[0],i=t[1],r=(0,g.UO)().movieId;return(0,f.useEffect)((function(){v.H.getCast(r).then((function(n){var t=n.data.cast;i(t)}))}),[r]),(0,C.jsx)(l.Z,{title:"Cast",children:e.length?(0,C.jsx)(m,{children:e.map((function(n){var t=n.original_name,e=n.character,i=n.profile_path,r=n.id;return(0,C.jsxs)(_,{children:[(0,C.jsx)(P,{src:i?v.H.POSTER_URL+i:p.t}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:["Actor:",(0,C.jsxs)(w,{children:[" ",t]})]}),(0,C.jsxs)(b,{children:["Character:",(0,C.jsxs)(w,{children:[" ",e]})]})]})]},r)}))}):(0,C.jsx)(y,{children:"We don't have information about the cast for this movie"})})}},3990:function(n,t,e){e.d(t,{Z:function(){return d}});var i,r,a=e(1527),c=e(168),o=e(6444),s=o.ZP.section(i||(i=(0,c.Z)([""]))),u=o.ZP.h1(r||(r=(0,c.Z)(["\n    margin-bottom: 20px;\n    text-align: center;\n    color: inherit;\n"]))),h=e(184),d=function(n){var t=n.children,e=n.title;return(0,h.jsx)(s,{children:(0,h.jsxs)(a.Z,{children:[e&&(0,h.jsx)(u,{children:e}),t]})})}},364:function(n,t,e){e.d(t,{t:function(){return i}});var i="https://via.placeholder.com/100x100"},5535:function(n,t,e){e.d(t,{H:function(){return h}});var i=e(4569),r=e.n(i),a="trending/all/day",c="search/movie",o="movie/",s="/credits",u="/reviews";r().defaults.baseURL="https://api.themoviedb.org/3/";var h={getTrendingMovies:function(){return r().get(a+"?api_key=5ce599886a4c0703a030654068991e03")},searchMovie:function(n){return r().get(c+"?api_key=5ce599886a4c0703a030654068991e03&query="+n)},getMovieDetails:function(n){return r().get(o+n+"?api_key=5ce599886a4c0703a030654068991e03")},getCast:function(n){return r().get(o+n+s+"?api_key=5ce599886a4c0703a030654068991e03")},getReviews:function(n){return r().get(o+n+u+"?api_key=5ce599886a4c0703a030654068991e03")},POSTER_URL:"https://image.tmdb.org/t/p/original"}}}]);
//# sourceMappingURL=608.ffdb8316.chunk.js.map